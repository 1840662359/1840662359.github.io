import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'MoY画质助手',
  description: '简单好用的游戏画质修改工具',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.webp' }
    ]
  ],

  theme: defaultTheme({
    navbar: ['/', '/download', '/help'],
  }),
  bundler: viteBundler(),
})