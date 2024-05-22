import comp from "C:/Users/wql/vuepress-starter/docs/.vuepress/.temp/pages/guide/download.html.vue"
const data = JSON.parse("{\"path\":\"/guide/download.html\",\"title\":\"下载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"下载\"},\"headers\":[{\"level\":2,\"title\":\"请选择版本：\",\"slug\":\"请选择版本\",\"link\":\"#请选择版本\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/download.md\"}")
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
