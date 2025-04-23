# Wuying AgentBay MCP Server

## Overview

Wuying AgentBay MCP Server is a Node.js package that provides seamless integration with Alibaba Cloud's Wuying AgentBay - a cloud infrastructure designed specifically for AI Agents in the era of Large Language Models (LLMs).

## What is Wuying?

Wuying (无影) is Alibaba Cloud's innovative cloud-network fusion computing architecture that provides secure and efficient computing experiences through cloud computers, cloud applications, cloud terminals, and cloud mobile devices. It features:

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

3. **Real-time Cloud-Edge Interaction**
   - Proprietary ASP protocol for real-time cloud streaming
   - Local device awareness and control
   - Network and peripheral redirection channels

## Technical Architecture

- **File System**: Custom persistent file system with dynamic user state preservation
- **Communication**: Proprietary ASP protocol for cloud-edge real-time communication
- **Infrastructure**: Based on Alibaba Cloud Wuying resource pool
- **Service Model**: Serverless capabilities with one-click environment session management
- **Tool Integration**: Browser, File, Terminal, and other standard MCP tools
- **Integration Options**: SDK+API or MCP Server compatibility

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- Valid Alibaba Cloud account
- AgentBay API key

### Installation

```bash
npm install wuying-agentbay-mcp-server
```

### Basic Usage

```javascript
const WuyingAgentBay = require('wuying-agentbay-mcp-server');

// Initialize with your API key
const agentBay = new WuyingAgentBay({
  apiKey: 'YOUR_API_KEY'
});

// Start MCP server
await agentBay.start();
```

## Security Features

- Isolated VM environment for each user
- Session-based environment reset
- Zero data retention policy
- Secure API key authentication
- Encrypted data transmission

## Available Tools

1. **Browser Tool**
   - Complete browser automation
   - Web interaction capabilities
   - Cookie and session management

2. **File Tool**
   - File system operations
   - Data transfer capabilities
   - File manipulation functions

3. **Terminal Tool**
   - Command-line operations
   - Script execution
   - System command access

## Integration Methods

### 1. SDK + API Integration

```javascript
// Example of SDK integration
const { WuyingSDK } = require('wuying-agentbay-mcp-server');

const sdk = new WuyingSDK({
  apiKey: 'YOUR_API_KEY'
});

// Start a new session
const session = await sdk.createSession();
```

### 2. MCP Server Integration

```javascript
// Example of MCP Server integration
const { MCPServer } = require('wuying-agentbay-mcp-server');

const server = new MCPServer({
  apiKey: 'YOUR_API_KEY'
});

// Start MCP server
await server.start();
```

## Access Methods

1. **Embedded Web View**
   - Integration within client applications
   - Direct cloud environment streaming

2. **Browser Access**
   - Direct URL access
   - Format: `https://wuying.aliyun.com?mcp.html?authcode=<authCode>`

## Resource Management

- Serverless execution environment
- Automatic resource scaling
- Pay-as-you-go pricing model
- Global resource pool access

## Advanced Features

### Desktop Automation Capabilities

1. **Basic Automation**
   - Browser automation
   - File system automation
   - Terminal command automation
   - Python environment execution

2. **Advanced Automation**
   - GUI Agent with real-time screen understanding
   - Custom knowledge space
   - User state persistence
   - Custom application interface development

3. **Image Support**
   - Built-in Linux base image
   - Windows and Android support (coming soon)
   - Custom image creation support

## Enterprise Integration Guide

1. **Account Setup**
   - Register enterprise account
   - Provide company information
   - Select appropriate plan

2. **Environment Configuration**
   - Configure access keys
   - Set security policies
   - Allocate resource quotas

3. **Development Integration**
   - Integrate using SDK
   - Configure toolchain
   - Deploy Agent applications

4. **Operations Management**
   - Monitor running status
   - Manage resource usage
   - View operation logs

## License

MIT

## Support

For support and more information, please visit:
- [Alibaba Cloud Wuying Documentation](https://www.aliyun.com/product/ecs/wuying)
- [AgentBay Product Page](https://www.aliyun.com/activity/wuying/aiagent)

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.


