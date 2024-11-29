import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '硫酸亚铁术式',
  description: '欢迎来到知名高校学习资料分享导航站！',

  plugins: [
    ['flexsearch-pro'],
  ]
})

