import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'NodeJS',
        items: [
          {
            text: 'NodeJS',
            link: '/nodejs/quick-start'
          },
          {
            text: 'NestJS',
            link: '/nestjs/introduction'
          }
        ]
      },
      {
        text: 'VueJS',
        items: [
          {
            text: 'VueJS',
            link: '/vuejs/quick-start'
          },
          {
            text: 'NaiveUI',
            link: '/naive-ui/quick-start'
          },
          {
            text: 'AntDesignVue',
            link: '/ant-design-vue/quick-start'
          },
          {
            text: 'ElementPlus',
            link: '/element-plus/quick-start'
          },
          {
            text: 'VxeTable',
            link: '/vux-table/quick-start'
          }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

//    sidebar: [
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      },
//      {
//        text: 'NodeJS',
//        items: [
//          { text: 'Introduction', link: '/nodejs/introduction' }
//        ]
//      }
//    ],

    sidebar: {
      '/vuejs/': [
        {
          text: 'VueJS',
          items: [
            { text: 'Introduction', link: '/vuejs/introduction' }
          ]
        }
      ],
      '/nodejs/': [
        {
          text: 'NodeJS',
          items: [
            { text: 'Introduction', link: '/nodejs/introduction' }
          ]
        }
      ],
      '/nestjs/': [
        {
          text: 'NestJS',
          items: [
            { text: '介绍', link: '/nestjs/introduction' },
            { text: '快速开始', link: '/nestjs/quick-start' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
