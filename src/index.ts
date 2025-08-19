import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { defaultTools } from "./default-tools.js";

export const configSchema = z.object({
  APIKEY: z.string().optional().default("").describe("API key for authentication"),
  IMAGEID: z.string().default("linux_latest").describe("Image ID to use"),
  REGION: z.enum(["singapore", "china"]).optional().default("singapore").describe("singapore or china for region"),
});

export default function createStatelessServer({
  config,
}: {
  config: z.infer<typeof configSchema>;
}) {
  const server = new McpServer({
    name: "MCP Proxy Server",
    version: "1.0.0",
  }, {
    capabilities: {
      tools: {}
    }
  });

  let connected = false;
  let targetTools: any[] = [];
  let client: Client;


  // Connect to target server and get tools
  const connectToTarget = async () => {
    if (!config.APIKEY) {
      throw new Error("API key is required for tool execution");
    }
    
    try {
      const baseUrl = config.REGION === "singapore" 
        ? "https://agentbay-intl.wuying.aliyuncs.com"
        : "https://agentbay.wuying.aliyuncs.com";
      const targetUrl = `${baseUrl}/sse?APIKEY=${config.APIKEY}&IMAGEID=${config.IMAGEID}`;
      const transport = new SSEClientTransport(new URL(targetUrl));
      client = new Client({
        name: "mcp-proxy-client",
        version: "1.0.0",
      }, {
        capabilities: {}
      });
      
      await client.connect(transport);
      const toolsResult = await client.listTools();
      targetTools = toolsResult.tools || [];
      connected = true;
      
    } catch (error) {
      console.error("Failed to connect to target server:", error);
      connected = false;
      throw error;
    }
  };

  // Handle list_tools - return static tools if no API key, otherwise return real tools
  server.server.setRequestHandler(ListToolsRequestSchema, async () => {
    if (!config.APIKEY) {
      return {
        tools: defaultTools
      };
    }
    
    if (!connected) {
      await connectToTarget();
    }
    
    return {
      tools: targetTools
    };
  });

  // Handle tool calls - validate API key and connect only when tools are called
  server.server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (!connected) {
      await connectToTarget();
    }

    try {
      const result = await client.callTool(request.params);
      return result;
    } catch (error) {
      throw new Error(`Tool call failed: ${error}`);
    }
  });

  return server.server;
}
