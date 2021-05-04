(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(t,s,e){"use strict";e.r(s);var r=e(45),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[e("a",{staticStyle:{"margin-right":"8px"},attrs:{href:"https://v3.cn.vuejs.org",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/badge/vue-3.0.9-brightgreen.svg",alt:"vue"}})]),t._v(" "),e("a",{staticStyle:{"margin-right":"8px"},attrs:{href:"https://element-plus.gitee.io",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/badge/element--plus-1.0.2--beta.39-brightgreen.svg",alt:"element-plus"}})]),t._v(" "),e("a",{staticStyle:{"margin-right":"8px"},attrs:{href:"https://github.com/wyb199877/multi-tab/blob/master/LICENSE",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/badge/license-GPL--3.0-green",alt:"license"}})]),t._v(" "),e("a",{staticStyle:{"margin-right":"8px"},attrs:{href:"https://github.com/wyb199877/multi-tab/releases/tag/0.1.0-beta",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/badge/release-v0.1.0--beta-blue",alt:"release"}})]),t._v(" "),e("a",{attrs:{href:"/donate/"}},[e("img",{attrs:{src:"https://img.shields.io/badge/$-donate-orange",alt:"donate"}})])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/wyb199877/multi-tab",target:"_blank",rel:"noopener noreferrer"}},[t._v("multi-tab"),e("OutboundLink")],1),t._v("\n是我在前段时间在给一个企业做后台管理系统时萌生的一个设想。虽然已经有很多大佬做出了很多很漂亮、功能丰富的模板，但是因为功能的凝练度太高，导致自己修改起来有些困难。同时有很多新手，自己去看那些大佬的源码是看不懂的。")]),t._v(" "),e("p",[t._v("所以，我只将基础部分的架构，以及会用到的知识点总结出来，写成了这样一个项目。使用它的人，可以在这个的基础之上，忽视这些前端效果的实现，更专心的去编写自己的业务代码。")]),t._v(" "),e("p",[t._v("同时，为了能让更多的人学会如何去编写这样一个后台系统管理模板，我写了多篇博文，专门为这个项目服务。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本项目只供 PC 端使用，没有实现响应性适配，我个人建议如果需要使用移动端，应另行开发。另外，本项目仅支持现代浏览器，其他（如 ie）浏览器暂不支持。")]),t._v(" "),e("ul",[e("li",[t._v("演示地址："),e("a",{attrs:{href:"https://wyb199877.github.io/multi-tab",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wyb199877.github.io/multi-tab"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("仓库地址："),e("a",{attrs:{href:"https://github.com/wyb199877/multi-tab",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wyb199877/multi-tab"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),e("p",[t._v("使用本项目之前，您需要在本地安装\n"),e("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),e("OutboundLink")],1),t._v("\n和\n"),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),e("OutboundLink")],1),t._v("。\n项目中使用了\n"),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v("，\n"),e("a",{attrs:{href:"https://v3.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue"),e("OutboundLink")],1),t._v("，\n"),e("a",{attrs:{href:"https://next.router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router"),e("OutboundLink")],1),t._v("，\n"),e("a",{attrs:{href:"https://next.vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuex"),e("OutboundLink")],1),t._v("，\n"),e("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),e("OutboundLink")],1),t._v("\n以及\n"),e("a",{attrs:{href:"http://element-plus.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-plus"),e("OutboundLink")],1),t._v("，\n提前了解这些知识会对使用本项目有很大的帮助。")]),t._v(" "),e("h2",{attrs:{id:"配套博文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配套博文"}},[t._v("#")]),t._v(" 配套博文")]),t._v(" "),e("p",[t._v("本项目同时配套了一个系列的教程文章，帮助使用者理解项目中的一些核心内容。如果在阅读项目源码时不能很好地理解为什么要这么做，可以看看这些文章。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115752533",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：前言"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115151786",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：项目搭建"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115152322",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：vue-router 与 vuex"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115167296",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：element-plus 按需引入与动态换肤"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115842013",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：如何优雅地使用 Svg 图标"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115180335",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：侧边导航菜单（上）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115250224",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：侧边导航菜单（下）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115896119",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：多级路由缓存"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115280903",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：头部工具栏（上）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115352423",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：头部工具栏（中）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/m0_46172278/article/details/115356537",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3.0+ts+element-plus 多页签应用模板：头部工具栏（下）"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),e("p",[t._v("下面是整个项目的目录结构，可以帮助使用者理解各个目录以及文件的基本含义。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("├── public                                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源 (不参与打包)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── imgs                                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 位图图片资源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── loading                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开屏动画资源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── theme                               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主题资源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── favicon.ico                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网站图标")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── index.html                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTML模板文件")]),t._v("\n├── src                                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源代码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── assets                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源 (参与打包)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── icons                            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图标资源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── svg                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有svg图标")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── index.ts                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# svg图标自动引入文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── svgo.config.js                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# svgo配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── styles                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sass样式资源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── animation.scss                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局动画")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── element-reset.scss            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# element样式重置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── index.scss                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── mixin.scss                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局样式混入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── reset.scss                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器默认样式重置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── transition.scss               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局过度动画")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     └── variables.scss                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局sass变量")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── components                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局公共组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── common                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原子组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── Contextmenu                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右键菜单组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── SvgIcon                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# svg图标组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── entity                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── consts                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局常量")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── directive                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局指令")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── layout                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主布局组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── components\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── AppMain                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 子级路由载体")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── AsideBar                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 侧边栏组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── components\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── MenuItem                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 菜单项组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── ModuleMenu              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 菜单组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     └── SystemLogo              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 侧栏头部组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── HeaderToolbar                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 头部工具栏组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── components\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── PathBreadcrumb          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 面包屑组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├── TagsPager               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签栏翻页组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     └── TagsView                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签栏组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     └── SettingPane                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统设置面板组件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── plugins                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局插件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── element-plus                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# element-plus引入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── first-loading                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开屏动画引入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── global-common                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局组建引入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── clipboard                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clipboard")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── n-progress                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nProgress引入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── router                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── modules                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── index.ts                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── routes.ts                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── store                               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局状态管理")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── modules                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 状态管理模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── index.ts                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── typings                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局ts类型声明")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── utils                               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工具类")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── index.ts                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── storage.ts                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存封装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── views                               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有业务页面")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── App.vue                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── main.ts                             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主入口文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── setting.ts                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统配置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── shims-vue.d.ts                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单页面组件ts声明文件")]),t._v("\n├── .eslintrc.js                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint配置")]),t._v("\n├── .prettierrc                            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prettier配置")]),t._v("\n├── package.json                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm包管理")]),t._v("\n├── tsconfig.json                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typescript配置")]),t._v("\n└── vue.config.js                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vue-cli配置")]),t._v("\n")])])]),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/wyb199877/multi-tab.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" multi-tab\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果安装太慢可以切换淘宝源，但不要使用cnpm，因为它总是会带来很多的问题")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这步是必须的，因为项目中使用了node-sass")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-sass在直接安装的时候会从github中下载，但由于国内网络环境问题通常无法下载")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所以需要安装一下国内的npm镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g mirror-config-china\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),e("h2",{attrs:{id:"vue-全家桶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-全家桶"}},[t._v("#")]),t._v(" Vue 全家桶")]),t._v(" "),e("p",[t._v("什么是 Vue 全家桶？Vue 的作者尤先生曾思考过一个问题：Vue 到底是一种视图框架还是一个完整的 js 框架？后来他给出了答案：Vue 是一个渐进式的 js 框架。为什么这么说呢？")]),t._v(" "),e("p",[t._v("因为 Vue 有着很多与之相关的配套模块，像 Vue CLI，Vuex 以及 Vue Router 等等。当 Vue 本身加上这些配套的模块之后，它就真正成为了一个 js 框架了。")]),t._v(" "),e("p",[t._v("这里简单介绍一下与 Vue 相关的这些项目：")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),e("OutboundLink")],1),t._v("：官方提供的 Vue 项目脚手架，它帮您做好了很多有关 webpack、bable 等一些插件的琐碎的配置，让您更专注于代码的编写，不必将时间花在那些配置上。不过即使是这样，也仍然会有一些特殊情况需要您自己配置。所以，对于那些插件本身您还是需要一定的了解的。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://next.router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),e("OutboundLink")],1),t._v("：官方提供的路由解决方案，让您能够轻松愉快地开发 SPA 或 MPA 应用。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://next.vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex"),e("OutboundLink")],1),t._v("：Vue.js 应用程序的状态管理模式+库。它充当应用程序中所有组件的集中存储，其规则确保只能以可预测的方式更改状态。能够解决很多组件与组件，或各种各样的全局状态间的通信问题。")])]),t._v(" "),e("h2",{attrs:{id:"捐赠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捐赠"}},[t._v("#")]),t._v(" 捐赠")]),t._v(" "),e("p",[t._v("如果你觉得这个项目帮助到了你，你可以帮作者买一杯奶茶表示鼓励(￣ ▽ ￣)~* "),e("a",{attrs:{href:""}},[t._v("Donate")])])])}),[],!1,null,null,null);s.default=a.exports}}]);