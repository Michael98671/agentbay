# 无影AgentBay MCP Server

[English](README.md) | 中文 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 概述

阿里云的无影AgentBay是AI时代为Agent设计的云基础设施，它为企业、开发者和AI厂商提供了一键配置的AI Agent任务执行工具和执行环境。通过无影API或AgentBay MCP Server，可以为Agent应用快速集成和使用相关工具，并Serverless地运行在云环境内。

## 什么是无影？

[无影](https://www.aliyun.com/product/ecs/wuying)是阿里云的创新型云网融合计算架构，通过云电脑、云应用、云终端提供安全高效的计算体验。它的特点包括：

- 强安全性
- 零维护
- 轻资产管理
- 易集成
- 全球部署，低延迟访问

## 什么是AgentBay？

AgentBay 是无影专为AI Agent设计的云基础设施，提供：

- 一键配置的AI代理任务执行工具
- 安全的执行环境
- 面向开发者和AI厂商的企业级基础设施
- 通过SDK和MCP Server快速集成
- Serverless能力


### 主要功能

1. **标准运行环境**
   - 预集成的标准工具用于代理任务执行
   - MCP（Model Context Protocol，模型上下文协议）封装
   - 企业级的快速集成能力

2. **用户状态持久化**
   - 用户配置和cookie安全隔离
   - 用户状态动态挂载
   - 云环境模拟本地设置

3. **实时云端和边缘设备互动**
   - 专有ASP协议用于实时端云串流
   - 本地设备感知和控制
   - 网络和外设重定向通道

## 技术架构

- **持久化系统**：自定义持久化记忆，实现用户状态和文件保留
- **端云通信**：专有ASP协议用于云端和终端设备实时通信
- **基础设施**：基于阿里云资源池，提供一万并发的秒级扩容能力
- **服务模式**：Serverless，一键环境会话管理
- **工具集成**：浏览器、文件、终端及其他标准MCP工具
- **集成选项**：支持SDK+API和MCP Server

## 云服务规格

### 云资源

服务支持调用共用资源，公测期间限量免费服务，并发数上限为10台。服务地域按照客户接入IP自动分配。

### 运行环境

服务支持内置Linux版本镜像，无影在保证向下兼容的基础上持续丰富和更新镜像能力。

### MCP工具

首期发布环境默认支持Browser工具、File工具、Terminal工具。关于更多工具更新信息，请关注[官网](https://agentbay.console.aliyun.com/service-management)。

## 操作步骤

### 步骤1：创建API Key

请创建您自己的API Key。

1. 登录[AgentBay控制台](https://agentbay.console.aliyun.com/service-management)。
2. 在左侧导航栏中单击**服务管理**。
3. 在**服务管理**页面上单击**创建API KEY**。
4. 在**创建API KEY**对话框中输入名称，并单击**确定**。

> **说明**：公测期间只能创建10个API Key。创建好的API Key会显示在服务管理页面的列表中，您可以复制API Key以待后续使用。

### 步骤2：完成MCP服务配置

确认运行环境，并获取MCP信息。

1. 登录[AgentBay控制台](https://agentbay.console.aliyun.com/service-management)。
2. 在左侧导航栏中单击**配置资源**。
3. 在**API Key**下拉列表中选择一个您创建的API Key。
4. 在**选择镜像**下拉列表中选择一个镜像。

> **说明**：服务支持内置Linux版本镜像，无影在保证向下兼容的基础上持续丰富和更新镜像能力。

5. 在**工具能力与接口**右侧查看可用的MCP工具。单击**查看**即可查看详细信息。
6. 在**获取MCP信息**文本框右上角单击**复制代码**，并在支持MCP的工具（例如Cline、Cursor等）中添加上述代码。

以Cursor V0.48.9版本为例说明：

- 打开**Cursor Settings**（Cursor设置）面板，在左侧导航栏中单击**MCP**。
- 在**MCP Servers**（MCP服务器）面板上单击右上角的**Add new global MCP server**（添加全局MCP服务器）。
- 在打开的mcp.json文件中粘贴以下代码，并保存文件。当前支持的安装方式包括SSE和STDIO。

> **说明**：请将YOUR_API_KEY替换为步骤1：创建API Key中创建的以akm-开头的API Key。

下面以SSE为例进行说明：
SSE方式会在每次服务通过线上长连接完成握手，不依赖插件下载。
```json
{
  "mcpServers": {
    "wuying_mcp_server": {
      "url": "https://agentbay.wuying.aliyun.com/sse?APIKEY=YOUR_API_KEY"
    }
  }
}
```
  
任务执行完成后，云环境可能会被释放，如果希望下次保留相关配置或环境，请在上述代码中添加EXTERNALID参数。示例：

```json
{
  "mcpServers": {
    "wuying_mcp_server": {
      "url": "https://agentbay.wuying.aliyun.com/sse?APIKEY=YOUR_API_KEY&EXTERNALID=user001"
    }
  }
}
```

### 步骤3：画面流使用（可选）
支持通过无影Web SDK iframe内嵌或通过浏览器拉取无影Web客户端的方式打开云电脑画面。需要调用云电脑画面流时，MCP会返回带登录参数的链接，格式为```https://wuying.aliyun.com?mcp.html?authcode=<authCode>&resourceId=<resourceId>```。
- 该链接具有有效期限制和打开次数限制，建议立即使用。
- 可以通过URL中的参数&input=true&keyboard=true来配置键鼠交互开关，也可以通过Web SDK中的接口实时配置交互开关。详细信息，请参见[Web SDK文档](https://wuying.aliyun.com/wuyingWebSdk/docs/category/intro)。

## 后续步骤
您可以通过内置提示词**使用wuying-agentbay打开浏览器，并访问wuying.aliyun.com**或类似提示词来测试效果。若配置无误，则会拉起无影云环境并执行浏览器操作。在此过程中，模型会提供Web链接，供您打开无影画面流并接管操作。
![后续步骤](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8045084471/p943842.png)

## 许可证

MIT

## 支持

如需支持和更多信息，请访问：
- [阿里云无影文档](https://www.aliyun.com/product/ecs/wuying)
- [AgentBay产品页面](https://www.aliyun.com/activity/wuying/aiagent)

