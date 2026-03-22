# 🍎 Mac mini: 终极本地 AI 宿主机

## 核心定位
Mac mini (尤其是 M2/M4 系列) 凭借统一内存架构 (Unified Memory) 和极高的功耗比，成为中小团队部署本地 AI Server 的性价比之王。

## 选型建议
- **内存**：16GB 是运行 7B 模型 (如 Llama 3) 的及格线。如果需要部署多 MCP 服务，建议 24GB 或以上。
- **存储**：256GB 配合外部 SSD，足够存储主流权文件。

## 实战技巧
- **Docker 隔离**：利用 Docker 容器化所有 Agent 服务，确保本地系统干净、安全。
- **作为 MCP 枢纽**：通过 Mac mini 挂载物理设备（如串口、本地数据库），并向云端 Agent 提供 MCP 能力。
