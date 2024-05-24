import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '吃鸡优化器',
  description: '简单好用的游戏画质修改工具',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.webp' }
    ]
  ],

  theme: defaultTheme({
    navbar: ['/', '/help', '/history'],
  }),
  bundler: viteBundler(),
})