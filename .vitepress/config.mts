import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VLTA AI",
  description: "AI 驱动架构师的第二大脑",
  cleanUrls: true,
  
  // 忽略掉默认不会被当作文档的文件
  srcExclude: ['package-lock.json', 'node_modules/**', '.antigravity/**'],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 工具分类谱系', link: '/AI tools' },
      { text: '2026 AI 终极漫游指南', link: '/20260308 AI General' }
    ],

    sidebar: [
      {
        text: '📖 知识归档 (Knowledge Archive)',
        items: [
          { text: 'AI 工具与生态定位', link: '/AI tools' },
          { text: '关于大模型的全景认知', link: '/20260308 AI General' }
        ]
      },
      {
        text: '🛠 项目架构底座 (Architecture)',
        items: [
          { text: '产品需求文档 (PRD)', link: '/PRD' },
          { text: '技术宪法规范 (SPEC)', link: '/PROJECT_SPEC' }
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
