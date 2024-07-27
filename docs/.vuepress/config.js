import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

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