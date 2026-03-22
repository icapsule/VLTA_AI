# 🏗 PROJECT SPEC (Technical Architecture Specification) - VLTA AI 知识库

> **💡 Antigravity SPEC 定位声明**
> 这是一个特殊的“开源知识库/论文集”项目。系统架构的核心诉求不在于全栈业务逻辑，而在于**极速的响应、极致的阅读体验 (Vibe)、强大的目录索引与全局搜索能力，以及对中英双语 (i18n) 的完美支持**。

---

## 1. 🛠 核心技术栈 (Tech Stack & Core Dependencies)

- **核心框架 (Framework)**: **VitePress** (基于 Vue 和 Vite 的静态站点生成器。相比 Docusaurus 更加轻量极速，拥有完美的 Markdown 语法拓展和开箱即用的极简暗黑风格)。
- **包管理器 (Package Manager)**: `npm` (针对文档型项目保持普适性，或遵循外层规约使用 `pnpm`)。
- **搜索机制 (Search)**: VitePress 内置的 Local Search (基于 MiniSearch)。
- **多语言支持 (i18n)**: VitePress 原生路由多语言映射（默认 `/` 为中文，`/en/` 为英文拓展目录）。
- **部署策略 (Deployment)**: 静态构建 (`npm run docs:build`) 后直接部署至 GitHub Pages 分支。

## 2. 🗺 架构拓扑树 (Architecture Topology)

```text
VLTA_AI/
├── .vitepress/              # VitePress 全局配置与渲染层
│   └── config.mts           # 核心控制锚点：定义导航栏、侧边栏、语言、搜索规则
├── public/                  # 静态资源存放区 (图片、Logo 等)
├── index.md                 # 中文首页 (具有 Hero 沉浸式落地页)
├── en/                      # 英文区入口
│   └── index.md             
├── AI tools.md              # 知识文章实体
├── 20260308 AI General.md   # 知识文章实体
├── PRD.md                   # 架构文档实体 (纳入知识库渲染)
├── PROJECT_SPEC.md          # 架构文档实体 (纳入知识库渲染)
└── package.json             # 依赖与命令执行表
```

## 3. 📝 文档路由契约 (Content & Routing Contract)

- **物理即路由**: 项目采用最扁平的物理路由策略。根目录下的任何 `[name].md` 都会自动渲染为 `/[name].html`。
- **前置元数据 (Frontmatter)**: 每篇被收录的顶级长篇论文/日记，应在第一行使用 YAML 标记其 `title`, `description`，以备搜索引擎收录。
- **热更新录入**: 任何新的学习产出（如分析 Manus 的新文件），只需丢入项目并更新 `.vitepress/config.mts` 的 `sidebar`，即可形成永久知识快照。

## 4. 🛡 架构级防篡改底线 (Documentation Redlines)

- **非必要不挂载组件**: 由于这是知识库，严禁在 Markdown 文件中大量手写 Vue/React 组件。尽量依赖纯 Markdown 语法和扩展标记（如 `::: info` 提示块），确保即使脱离 VitePress，内容依然可以在 GitHub 上完美裸读。
- **死链防御**: 重命名文件时，必须同步使用 `grep_search` 全局搜索并替换其他 `.md` 中的交叉引用链接，保持知识图谱的完整性。

---

## 5. 🧠 决策轨迹挂载点 (Architecture Thought Log)

- **[2026-03-22] [Decision]**: 选择 **VitePress** 而非 Next.js / Docusaurus。
  - *Context*: PRD 明确此项目是学习动态库、论文集，要求极高的响应速度和 Vibe 设计。
  - *Trade-off*: 放弃了 Docusaurus 那种复杂的 React 插件生态，换取了极简、最高效的 Markdown 渲染闭环。不需要写代码，专注写内容。
