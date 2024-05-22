export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/download.html", { loader: () => import(/* webpackChunkName: "download.html" */"C:/Users/wql/vuepress-starter/docs/.vuepress/.temp/pages/download.html.js"), meta: {"title":"下载"} }],
  ["/help.html", { loader: () => import(/* webpackChunkName: "help.html" */"C:/Users/wql/vuepress-starter/docs/.vuepress/.temp/pages/help.html.js"), meta: {"title":"使用帮助"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/wql/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/wql/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
