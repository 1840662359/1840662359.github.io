export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/help.html", { loader: () => import(/* webpackChunkName: "help.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/help.html.js"), meta: {"title":"使用教程"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/1840662359.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
