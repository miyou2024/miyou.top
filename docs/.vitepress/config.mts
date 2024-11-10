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
        text: '博客',
        items: [
          {
            text: '首页',
            link: '/blog/home'
          },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          {
            text: '内置对象',
            link: '/javascript/quick-start'
          },
          {
            text: '浏览器',
            link: '/javascript/browser'
          }
        ]
      },
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
      '/javascript/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: '快速开始',
              link: '/javascript/quick-start',
            },
            {
              text: 'Array',
              link: '/javascript/array'
            },
            {
              text: 'Object',
              link: '/javascript/object'
            },
            {
              text: 'Function',
              link: '/javascript/function'
            },
            {
              text: 'Math',
              link: '/javascript/math'
            }
          ]
        }
      ],
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
          text: '快速入门',
          items: [
            { text: '介绍', link: '/nestjs/introduction' },
            { text: '快速开始', link: '/nestjs/quick-start' },
            { text: '启动配置', link: '/nestjs/start-setup' },
            { text: '接口开发', link: '/nestjs/api-start' },
            { text: '请求处理', link: '/nestjs/api-request' },
            { text: '响应处理', link: '/nestjs/api-response' },
            { text: '链路追踪', link: '/nestjs/api-trace' },
            { text: '生命周期', link: '/nestjs/lifecycle' },
            { text: '架构设计', link: '/nestjs/arch-design' },
          ]
        },
        {
          text: '进阶',
          items: [
            { text: 'Monorepo模式', link: '/nestjs/monorepo' },
            { text: '添砖加瓦', link: '/nestjs/quick-development' },
            { text: '应用管理', link: '/nestjs/apps' },
            { text: '库管理', link: '/nestjs/libs' },
            { text: '类型管理', link: '/nestjs/types' },
          ]
        },
        {
          text: 'Package',
          items: [
            { text: '@ittlr/nestjs-bootstrap', link: '/nestjs/package/nestjs-bootstrap' },
            { text: '@ittlr/nestjs-passport', link: '/nestjs/package/nestjs-passport' },
            { text: '@ittlr/nestjs-cache', link: '/nestjs/package/nestjs-cache' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
