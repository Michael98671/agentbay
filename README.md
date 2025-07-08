[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/michael98671-agentbay-badge.png)](https://mseep.ai/app/michael98671-agentbay)

# Wuying AgentBay MCP Server

English | [中文](README_zh.md) 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Alibaba Cloud's Wuying AgentBay is a cloud infrastructure designed for Agents in the AI era. It provides enterprises, developers, and AI vendors with a one-click configuration tool and execution environment for AI Agent tasks. Through the Wuying API or AgentBay MCP Server, Agent applications can quickly integrate and utilize relevant tools, running serverlessly in the cloud environment.

## What is Wuying?

Wuying (无影), also known as [Alibaba Cloud Workspace](https://www.alibabacloud.com/en/product/alibaba-cloud-workspace?_p_lc=1),  is Alibaba Cloud's innovative cloud-network fusion computing architecture that provides secure and efficient computing experiences through cloud computers, cloud applications and cloud terminals. It features:

- Strong security
- Zero maintenance
- Light asset management
- Easy integration
- Global deployment with low-latency access

## What is AgentBay?

AgentBay is Wuying's cloud infrastructure specifically designed for AI Agents. It provides:

- One-click configurable AI Agent task execution tools
- Secure execution environments
- Enterprise-grade infrastructure for developers and AI vendors
- Quick integration through SDK and MCP Server
- Serverless capabilities

### Key Features

1. **Standard Runtime Environment**
   - Pre-integrated standard tools for Agent task execution
   - MCP (Model Context Protocol) encapsulation
   - Rapid enterprise integration capabilities

2. **User State Persistence**
   - Secure isolation of user configurations and cookies
   - Dynamic mounting of user states
   - Cloud environment closely mimicking local setup

3. **Real-time Edge-Cloud Interaction**
   - Proprietary ASP protocol for real-time edge-cloud streaming
   - Local device awareness and control
   - Network and peripheral redirection channels

## Technical Architecture

- **Persistent System**: Custom persistent memory to retain user states and files
- **Edge-Cloud Communication**: Proprietary ASP protocol for real-time communication between the cloud and terminal devices
- **Infrastructure**: Provides the ability to scale to 10,000 concurrent operations in seconds, based on Alibaba Cloud's resource pool
- **Service Model**: Serverless capabilities with one-click environment session management
- **Tool Integration**: Browser, File, Terminal, and other standard MCP tools
- **Integration Options**: SDK+API or MCP Server compatibility

## Cloud Service Specifications

### Cloud Resources

The service supports calling shared resources, with limited free service during the public beta, and a concurrency limit of 10 instances. Service regions are automatically assigned based on customer access IP.

### Runtime Environment

The service supports built-in Linux version images. Wuying continuously enriches and updates image capabilities while ensuring backward compatibility.

### MCP Tools

The initial release environment supports the Browser tool, File tool, and Terminal tool by default. For more updates on tools, please visit [the official site](https://agentbay.console.aliyun.com/service-management).

## Getting Started

### Step 1: Create an API Key

Please create your own API Key.

1. Log in to the [AgentBay Console](https://agentbay.console.aliyun.com/service-management).
2. Click **Service Management** in the left navigation bar.
3. On the **Service Management** page, click **Create API KEY**.
4. Enter a name in the **Create API KEY** dialog box and click **OK**.

> **Note**: During the public beta, only 10 API Keys can be created. The created API Key will be displayed in the list on the service management page, and you can copy it for later use.

### Step 2: Complete MCP Service Configuration

Confirm the runtime environment and obtain MCP information.

1. Log in to the [AgentBay Console](https://agentbay.console.aliyun.com/service-management).
2. Click **Configure Resources** in the left navigation bar.
3. Select an API Key you created from the **API Key** dropdown list.
4. Select an image from the **Select Image** dropdown list.

> **Note**: The service supports built-in Linux version images. Wuying continuously enriches and updates image capabilities while ensuring backward compatibility.

5. On the right side of **Tool Capabilities and Interface**, check available MCP tools. Click **View** to see more details.
6. In the **Obtain MCP Information** text box, click **Copy Code** in the top right corner, and add the code to tools that support MCP (such as Cline, Cursor, etc.).

Here's an example using Cursor V0.48.9:

- Open the **Cursor Settings** panel and click **MCP** in the left navigation bar.
- In the **MCP Servers** panel, click **Add new global MCP server** in the top right corner.
- Paste the following code into the opened mcp.json file and save it. Supported installation methods include SSE and STDIO.

> **Note**: Please replace YOUR_API_KEY with the API Key starting with akm- created in Step 1.

Here's an example using the SSE method:
The SSE method completes a handshake through an online long connection each time the service is run, without requiring plugin downloads.

```json
{
  "mcpServers": {
    "wuying_mcp_server": {
      "url": "https://agentbay.wuying.aliyun.com/sse?APIKEY=YOUR_API_KEY"
    }
  }
}
```
After the task execution is completed, the cloud environment may be released. If you wish to retain related configuration or environment for next time, add the EXTERNALID parameter in the code above. Example:

```json
{
  "mcpServers": {
    "wuying_mcp_server": {
      "url": "https://agentbay.wuying.aliyun.com/sse?APIKEY=YOUR_API_KEY&EXTERNALID=user001"
    }
  }
}
```

### Step 3: Using Screen Streaming (Optional)
Support is provided for opening cloud computer screens through the Wuying Web SDK embedded in an iframe or by pulling the Wuying Web client via a browser. When calling the cloud computer screen stream, MCP will return a link with login parameters, formatted as ```https://wuying.aliyun.com?mcp.html?authcode=<authCode>&resourceId=<resourceId>```.
- This link has validity and open limits, and it is recommended to use it immediately.
- You can configure keyboard and mouse interaction switches through the parameters &input=true&keyboard=true in the URL, or configure interaction switches in real time through the Web SDK interface. For detailed information, please refer to [Web SDK Documentation](https://wuying.aliyun.com/wuyingWebSdk/docs/category/intro)。

## Next Steps
You can test the effect using built-in prompts like **open the browser with wuying-agentbay and access wuying.aliyun.com** or similar prompts. If configured correctly, the Wuying cloud environment will be initiated, and browser operations will be executed. During this process, the model will provide a Web link for you to open the Wuying screen stream and take over operations.
![Next Steps](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8045084471/p943842.png)


## License

MIT

## Support

For support and more information, please visit:
- [Alibaba Cloud Wuying Documentation](https://www.aliyun.com/product/ecs/wuying)
- [AgentBay Product Page](https://www.aliyun.com/activity/wuying/aiagent)



