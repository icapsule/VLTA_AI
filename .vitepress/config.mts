import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VLTA AI",
  description: "AI驱动架构师的第二大脑",
  cleanUrls: true,
  
  // 忽略掉默认不会被当作文档的文件
  srcExclude: ['package-lock.json', 'node_modules/**', '.antigravity/**'],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 工具分类谱系', link: '/knowledge/AI-tools' },
      { text: '2026 AI 终极漫游指南', link: '/knowledge/20260308-AI-General' }
    ],

    sidebar: [
      {
        text: '🧠 LLM 底座层 (Foundation)',
        collapsed: false,
        items: [
          { text: '全景概览', link: '/knowledge/llm/index' },
          { text: 'Google Gemini', link: '/knowledge/llm/google-gemini' },
          { text: 'OpenAI ChatGPT', link: '/knowledge/llm/openai-chatgpt' },
          { text: 'Anthropic Claude', link: '/knowledge/llm/anthropic-claude' }
        ]
      },
      {
        text: '🤖 智能体系统 (Capability)',
        collapsed: false,
        items: [
          { text: '从对话到行动', link: '/knowledge/agents/index' },
          { text: 'MCP 协议规范', link: '/knowledge/agents/mcp-protocol' },
          { text: 'FastMCP 实战', link: '/knowledge/agents/mcp-fastmcp' }
        ]
      },
      {
        text: '🛠 实战方案层 (Solutions)',
        collapsed: false,
        items: [
          { text: '中小企业 AI 策略', link: '/knowledge/solutions/sme-ai-strategy' },
          { text: 'Mac mini AI 宿主', link: '/knowledge/solutions/mac-mini-host' },
          { text: 'AI 工具图谱', link: '/knowledge/solutions/ai-tools' }
        ]
      },
      {
        text: '🧭 核心理论 (Concepts)',
        collapsed: true,
        items: [
          { text: '技术全景漫游', link: '/knowledge/concepts/ai-panorama' },
          { text: '产品需求文档 (PRD)', link: '/docs/PRD' },
          { text: '技术宪法规范 (SPEC)', link: '/docs/PROJECT_SPEC' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ],

    search: {
      provider: 'local'
    }
  },

  // 国际化支持架构
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'VLTA AI Knowledge',
      description: 'Second brain for AI Driven Architects',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' }
        ],
        sidebar: [
          {
            text: 'Knowledge Archive',
            items: []
          }
        ]
      }
    }
  }
})
