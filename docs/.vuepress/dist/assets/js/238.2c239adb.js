(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1749:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"如何迁移-coding-静态托管-将网站迁移到腾讯云管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何迁移-coding-静态托管-将网站迁移到腾讯云管理"}},[t._v("#")]),t._v(" 如何迁移 coding 静态托管-将网站迁移到腾讯云管理")]),t._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[t._v("#")]),t._v(" 快速导航")]),t._v(" "),a("TOC"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("由于之前网站是托管在 coding 上,使用的是它们的自动化集成部署,只要本地"),a("code",[t._v("commit")]),t._v("将代码提交到 coding 仓库上,就会自动触发,实现自动部署")]),t._v(" "),a("p",[t._v("说实话,还是挺方便的,访问速度与 github pages 比较起来,个人觉得速度有时还不如 github pages,但是 coding 是国内的,而 github pages 是在国外的")]),t._v(" "),a("p",[t._v("有时候也会出现访问不稳定,掉链子的情况,鉴于技术好奇,于是把"),a("code",[t._v("github pages")]),t._v("替换成了"),a("code",[t._v("coding")]),t._v(",但最近 coding 的旧版静态网站部署官方通知已经不再维护了的")]),t._v(" "),a("p",[t._v("需要进行升级托管到腾讯云去管理")]),t._v(" "),a("h2",{attrs:{id:"升级至新版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级至新版"}},[t._v("#")]),t._v(" 升级至新版")]),t._v(" "),a("p",[t._v("在升级前,先看一下升级文档"),a("a",{attrs:{href:"https://help.coding.net/docs/pages/operating/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级指引"),a("OutboundLink")],1),t._v(",大概浏览一下就可以")]),t._v(" "),a("p",[t._v("然后点击升级至新版,分别输入填写网站名称,代码仓库(本地打包后的 dist 目录),并选择相对应的网站类型")]),t._v(" "),a("p",[t._v("因为我的网站是用"),a("code",[t._v("vuepress")]),t._v("搭建的,所以直接选择静态网站就可以")]),t._v(" "),a("p",[t._v("如果您的网站选用的是"),a("code",[t._v("jekyll")]),t._v(","),a("code",[t._v("Hexo")]),t._v(","),a("code",[t._v("Gatsby")]),t._v("等搭建的,那就选与之对应的")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543551054-01-shenji.png",alt:"coding升级至新版"}}),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543784999-02-shenji.png",alt:"coding升级至新版"}}),t._v(" "),a("p",[t._v("(在使用自定义域名时,需要将CNAME的记录值去你购买服务器厂商添加解析)")]),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606543973505-03-shenji.png",alt:"coding升级至新版"}}),t._v(" "),a("p",[t._v("(前往腾讯云控制台添加域名)")]),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606544216215-04-shenji.png",alt:"coding升级至新版"}}),t._v(" "),a("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/transfercoding/1606544375888-05-shenji.png",alt:"阿里云解析"}}),t._v(" "),a("p",[t._v("(前往服务器厂商添加解析记录)")])]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("当你在部署总是失败时,一定要看部署失败的信息,网站访问不了,DNS 要么没有解析成功,要么就是腾讯云部署没有成功的")]),t._v(" "),a("p",[t._v("可以咨询 coding 的客服,也可以在腾讯云提供工单,提了工单后,立马会有工程师咨询帮忙解决问题")]),t._v(" "),a("p",[t._v("coding 虽然是免费使用,但是腾讯云的云存储"),a("code",[t._v("cos")]),t._v(","),a("code",[t._v("cdn")]),t._v("却是收费的")]),t._v(" "),a("p",[t._v("如果你每次在 coding 上重新部署一次,便会更新创建一个存储桶,若在 coding 上多次删除网站,多次重新部署创建,都会在腾讯云的对象存储 cos 中创建存储桶,会有存储桶列表历史记录")]),t._v(" "),a("p",[a("strong",[t._v("在 coding 上删除资源,并不会删掉腾讯云云存储的存储桶")]),t._v(",如果需要删除,需要前往腾讯云对象存储中查看存储桶列表")]),t._v(" "),a("p",[a("strong",[t._v("在存储桶列表面进行删除的,否则的话,它会一直存在,即使你网站不运行的情况下,每天都会消费")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("腾讯云主账号,不能欠费,欠费的话,坏境会被隔离,部署也不会成功")])]),t._v(" "),a("h2",{attrs:{id:"相关参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关参考文档"}},[t._v("#")]),t._v(" 相关参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.coding.net/docs/pages/operating/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding 静态网站服务升级指南"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);