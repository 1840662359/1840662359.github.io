import comp from "D:/web_site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo.webp\",\"actions\":[{\"text\":\"立即下载\",\"link\":\"https://gitee.com/qianlong323/qianlong323/releases/download/v33/app-release_v33.apk\",\"type\":\"primary\"},{\"text\":\"使用帮助\",\"link\":\"/help.md\",\"type\":\"second\"}],\"features\":[{\"title\":\"简单\",\"details\":\"忘掉令人头疼的文件或代码，所有修改都是一键式的操作\"},{\"title\":\"安全\",\"details\":\"完全没有封号的风险，也不会对设备性能造成任何影响\"},{\"title\":\"全能\",\"details\":\"支持目前主流的大部分安卓设备无root修改\"}],\"footer\":\"Copyright © 2018-2024 MoY\"},\"headers\":[],\"git\":{\"updatedTime\":1718559684000,\"contributors\":[{\"name\":\"Mr.Wang\",\"email\":\"1840662359@qq.com\",\"commits\":8},{\"name\":\"662359\",\"email\":\"18744891903@163.com\",\"commits\":5},{\"name\":\"MoY丶沫影\",\"email\":\"1840662359@qq.com\",\"commits\":2}]},\"filePathRelative\":\"index.md\"}")
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
