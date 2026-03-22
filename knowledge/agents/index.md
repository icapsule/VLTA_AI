# 🤖 智能体系统层 (Capability)

> **"从对话到行动"** —— Agent 是 AI 本身能力的延伸，也是人类智慧的分布式外延。本专栏探讨如何构建稳定、可控、高能的 Agent 系统。

## 🧩 核心组件

### 1. [MCP 模型上下文协议](/knowledge/agents/mcp-protocol)
- **定义**：由 Anthropic 推出的用于统一 AI 与数据源/工具之间通信的开放协议。
- **价值**：让一个 Server 可以在任何支持 MCP 的 Agent（如 Claude Desktop, Dify）中复用。

### 2. [FastMCP 实战指南](/knowledge/agents/mcp-fastmcp)
- 使用 Python 极速开发 MCP Server 的现代方法。

### 3. [Workflow 工作流编排](/knowledge/agents/workflows)
- 探讨确定性逻辑 (Code/Workflow) 与语义灵活性 (Agent) 的平衡。

---

## 🏗 架构师思考
- **智能幻觉**：Agent 的智能往往源于人类将复杂逻辑前置封装的结果。
- **协议标准化**：MCP 正在解决工具链碎片化的问题。
