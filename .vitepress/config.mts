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
        text: '🧠 大模型底座 (LLM Foundation)',
        collapsed: false,
        items: [
          { text: '全景概览', link: '/knowledge/llm/index' },
          { text: 'Google Gemini', link: '/knowledge/llm/google-gemini' },
          { text: 'OpenAI ChatGPT', link: '/knowledge/llm/openai-chatgpt' },
          { text: 'Anthropic Claude', link: '/knowledge/llm/anthropic-claude' }
        ]
      },
      {
        text: '🤖 智能体平台 (Agent Platforms)',
        collapsed: false,
        items: [
          { text: '平台对标总览', link: '/knowledge/agents/comparison' },
          { text: 'Manus (云端员工)', link: '/knowledge/agents/manus' },
          { text: 'OpenClaw (本地系统)', link: '/knowledge/agents/open-claw' },
          { text: 'Google AI Studio', link: '/knowledge/solutions/google-ai-studio' },
          { text: 'MCP 协议规范', link: '/knowledge/agents/mcp-protocol' }
        ]
      },
      {
        text: '🛠️ 生产力工具 (Productivity)',
        collapsed: false,
        items: [
          { text: 'AI 工具图谱', link: '/knowledge/solutions/ai-tools' },
          { text: 'Mac mini AI 宿主', link: '/knowledge/solutions/mac-mini-host' }
        ]
      },
      {
        text: '🧭 认知与理论 (Theory)',
        collapsed: true,
        items: [
          { text: '概念全景漫游', link: '/knowledge/concepts/ai-panorama' },
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
