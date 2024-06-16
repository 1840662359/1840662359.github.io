import comp from "D:/web_site/docs/.vuepress/.temp/pages/help.html.vue"
const data = JSON.parse("{\"path\":\"/help.html\",\"title\":\"使用帮助\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"使用帮助\"},\"headers\":[{\"level\":2,\"title\":\"授权教程\",\"slug\":\"授权教程\",\"link\":\"#授权教程\",\"children\":[{\"level\":3,\"title\":\"文件管理器授权\",\"slug\":\"文件管理器授权\",\"link\":\"#文件管理器授权\",\"children\":[]},{\"level\":3,\"title\":\"Shizuku授权\",\"slug\":\"shizuku授权\",\"link\":\"#shizuku授权\",\"children\":[]}]},{\"level\":2,\"title\":\"修改教程\",\"slug\":\"修改教程\",\"link\":\"#修改教程\",\"children\":[]}],\"git\":{\"updatedTime\":1716509714000,\"contributors\":[{\"name\":\"Mr.Wang\",\"email\":\"1840662359@qq.com\",\"commits\":2}]},\"filePathRelative\":\"help.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
