(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1906:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuejs中的ref函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuejs中的ref函数"}},[s._v("#")]),s._v(" VueJs中的ref函数")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Vue2.0")]),s._v("里面,与页面相关显示的数据是挂载在"),a("code",[s._v("data")]),s._v("下,而在"),a("code",[s._v("vue3.0")]),s._v("里,想要一个数据")]),s._v(" "),a("p",[s._v("具备响应式,那么需要引入响应式API函数,通过API函数加工处理后,才具备响应式,两者之间在底层实现数据的响应式上")]),s._v(" "),a("p",[s._v("也存在着差异")]),s._v(" "),a("h2",{attrs:{id:"ref可将数据变成响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref可将数据变成响应式"}},[s._v("#")]),s._v(" ref可将数据变成响应式")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("setup")]),s._v("里面使用"),a("code",[s._v("let")]),s._v("定义的变量不是响应式的数据,它只是一个普通的字符串")]),s._v(" "),a("p",[s._v("数据虽然是可以修改,但是页面没有更新,"),a("code",[s._v("Vue")]),s._v("没有捕获到,如果想要定义的数据是响应式的,可以监测和捕获到,那么就需要从"),a("code",[s._v("vue")]),s._v("当中引用"),a("code",[s._v("ref")]),s._v("函数\n变成一个引用实例对象(引用对象)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ref "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itclanCoder"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在逻辑内部访问,需要使用xxx.value")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        age\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在模板里直接使用变量名就可以,但是更改数据时,却要使用"),a("code",[s._v("xxx.value")])]),s._v(" "),a("h2",{attrs:{id:"ref函数-处理对象类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref函数-处理对象类型"}},[s._v("#")]),s._v(" ref函数-处理对象类型")]),s._v(" "),a("p",[s._v("当"),a("code",[s._v("ref")]),s._v("处理对象数据类型时")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" job "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'frontend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("salary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'25k'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("作用")]),s._v(": 定义一个响应式的数据")]),s._v(" "),a("p",[a("strong",[s._v("语法")]),s._v(": const xxx = ref(initValue)")]),s._v(" "),a("p",[s._v("创建一个包含响应式数据的引用对象,在"),a("code",[s._v("JS")]),s._v("中操作数据"),a("code",[s._v("xxx.value")]),s._v(",模板中读取数据,不需要"),a("code",[s._v("xxx.value")]),s._v(",直接是"),a("code",[s._v("<div>"+s._s(s.xxx)+"</div>")])]),s._v(" "),a("p",[s._v("[1]. 接收的数据可以是:基本类型,也可以使对象类型\n[2]. 基本类型的数据:响应式依然是靠("),a("code",[s._v("Object.defineProperty()")]),s._v("的"),a("code",[s._v("get")]),s._v("与"),a("code",[s._v("set")]),s._v("完成的)\n[3]. 对象类型的数据:内部借助了"),a("code",[s._v("vue3")]),s._v("的一个新函数"),a("code",[s._v("reactive")]),s._v("函数")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("code",[s._v("ref")]),s._v("函数主要处理基本数据类型数据,让它具备响应式数据的能力,该对象只有一个指向内部值的属性"),a("code",[s._v(".value")])]),s._v(" "),a("p",[s._v("可以被"),a("code",[s._v("vue")]),s._v("监测和追踪")]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!1,isDaShang:!0}}),s._v(" "),a("footer-FeedBack")],1)}),[],!1,null,null,null);t.default=e.exports}}]);