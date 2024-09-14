export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/download-center.html", { loader: () => import(/* webpackChunkName: "download-center.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/download-center.html.js"), meta: {"title":"下载"} }],
  ["/help-common.html", { loader: () => import(/* webpackChunkName: "help-common.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help-common.html.js"), meta: {"title":"常见问题"} }],
  ["/help-document.html", { loader: () => import(/* webpackChunkName: "help-document.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help-document.html.js"), meta: {"title":"文件管理器授权教程"} }],
  ["/help-modify.html", { loader: () => import(/* webpackChunkName: "help-modify.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help-modify.html.js"), meta: {"title":"修改教程"} }],
  ["/help-shizuku.html", { loader: () => import(/* webpackChunkName: "help-shizuku.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help-shizuku.html.js"), meta: {"title":"Shizuku授权教程"} }],
  ["/help.html", { loader: () => import(/* webpackChunkName: "help.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help.html.js"), meta: {"title":"使用教程"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
