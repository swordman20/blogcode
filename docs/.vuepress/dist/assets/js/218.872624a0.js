(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1735:function(s,t,n){"use strict";n.r(t);var a=n(11),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"固定滚动条-禁止弹窗后页面滚动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#固定滚动条-禁止弹窗后页面滚动"}},[s._v("#")]),s._v(" 固定滚动条-禁止弹窗后页面滚动")]),s._v(" "),n("h2",{attrs:{id:"快速导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),n("TOC"),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 功能描述：一些业务场景，如弹框出现时，需要禁止弹窗背后页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案\n */")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventScroll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储当前滚动位置")]),s._v("\n  scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scrollY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overflow-y"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fixed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100%"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// document.body.style['overscroll-behavior'] = 'none'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("recoverScroll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overflow-y"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"static"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// document.querySelector('body').style['overscroll-behavior'] = 'none'")]),s._v("\n\n  window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),n("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=e.exports}}]);