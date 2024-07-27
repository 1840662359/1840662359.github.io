import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '吃鸡优化器',
  description: '吃鸡优化器是一款简单好用的游戏画质助手。无需Root、无需电脑，可一键修改画质帧率超广角等效果。并且完全没有封号的风险，也不会对设备性能造成任何影响',
  head: [
    [
        'link', { rel: 'icon', href: '/images/logo.webp' }
    ]
  ],

  theme: defaultTheme({
    navbar: ['/', '/help'],
  }),
  bundler: viteBundler(),
  plugins: [
    seoPlugin({
      hostname: 'https://pubgturbo.cn'
    }),
    sitemapPlugin({
      hostname: 'https://pubgturbo.cn'
    }),
  ],
})