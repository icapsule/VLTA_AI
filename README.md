# 🚀 VLTA_AI - 动态架构知识库 (Dynamic Knowledge Base)

> 这是一个专注探索 AI 生态、Agentic Coding 范式与架构演进的开源数字主脑。基于 VitePress 强劲驱动，为长期深潜前沿科技提供最稳速稳固的知识沉淀基座。

---

## 🌎 部署协议与效能管理 (Vercel Deployment Protocol)

鉴于“每日记录灵感”的频次极高，为了贯彻真正的极客精神（零浪费、最大化利用 Vercel 服务器时长），本知识库的 CI/CD 流程采取了**特定关键词黑客阻断（Ignored Build Step）**机制。

### ⚙️ 核心机制：严格按需构建
一切日常的冗余 Git Push 都会被线上阻断过滤。**只有当 Commit Message 明确包含 `[build]` 触发指令时，Vercel 才会真正进入构建状态并向外发布。**

### 🏁 Vercel 后台初始配置指南 (配置一次，终身适用)：
1. 登录已绑定的 [Vercel 控制台](https://vercel.com)，进入本项目的 **Settings -> Git** 选项卡。
2. 找到 **Ignored Build Step** 面板。
3. 将下方的拦截 Shell 脚本填入框中并保存：
   ```bash
   echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -q '\[build\]' && exit 1 || exit 0
   ```
   *(释义：Vercel 会自动注入环境变量。当提交信息包含 `[build]` 时，返回退出码 1 允许部署；否则返回 0 自动取消部署。)*

---

### 👨‍💻 架构师日常心流 (Daily Workflow)

**场景 1：日常灵感存读（只向 GitHub 归档，拦截构建）**
只管正常走 Git 流，Vercel 监听到推送后会判定退出，不消耗任何免费编译时长：
```bash
git add .
git commit -m "docs: 记录一下 Manus 分层架构的一个小细节"
git push
```

**场景 2：版图发布日（强制上线重绘宇宙）**
在觉得积累了一定知识量、或者希望向全球开源社区分发最新的技术内容时，在信息中携带专属指令 `[build]`：
```bash
git add .
git commit -m "release: 新增关于 MCP 模型端点协议的深入研究 [build]"
git push
```
伴随这句提交通行证，云端节点被瞬间唤醒，即刻为您重塑最新的知识版图！

---

## 🏗 项目架构规范 (Project Architecture)

为了保持知识库的长期可维护性，本项目采用分类目录管理方案：

- **`knowledge/`**: 存放 AI 技术干货、论文解析、工具评测。
- **`docs/`**: 存放项目自身的架构定义（PRD, SPEC）。
- **`index.md`**: 站点门户。

### ✍️ 知识入库流程

1. **新建文档**：根据类别放入 `knowledge/` 或 `docs/`。
2. **注册导航**：在 `.vitepress/config.mts` 的 `sidebar` 中添加新链接。
3. **推送到云端**：使用 `[build]` 关键词触发 Vercel 构建。

没有任何发版压力，也没有任何失败提醒。专注知识，即是架构！
