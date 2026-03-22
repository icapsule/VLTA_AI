# ⚡ FastMCP 实战开发指南

## 核心定位
`FastMCP` 是 Anthropic 官方推出的 Python 框架，旨在将传统的 MCP Server 开发简化为“函数装饰器”模式。

## 快速开始
```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("My Server")

@mcp.tool()
def my_tool(ctx):
    return "Hello from FastMCP!"
```

## 技术亮点
- **零配置**：自动处理 JSON-RPC 握手。
- **类型安全**：利用 Python 类型提示自动生成工具协议。
- **极速部署**：支持 stdio 和 SSE 传输。
