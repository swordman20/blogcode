(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1582:function(t,e,n){"use strict";n(927)},1727:function(t,e,n){"use strict";n.r(e);var a={name:"readXieyi",data:function(){return{regStatus:!0,textarea:"一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮,一般注册页面的用户协议放在一个文本域的textarea控件内的,我们可以监听文本域的onscroll滚动事件,并借助滚动高度(scrollHeight)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮"}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=document.getElementById("inputTextarea");e.addEventListener("scroll",(function(){Math.ceil(e.scrollTop)+e.clientHeight>=e.scrollHeight?t.regStatus=!1:t.regStatus=!0}))},handleJump:function(){window.open("https://tv.itclan.cn","_blank")}}},r=(n(1582),n(12)),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap"},[n("el-input",{attrs:{id:"inputTextarea",type:"textarea",readonly:!0,rows:8,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),n("br"),t._v(" "),n("div",[n("el-button",{ref:"regBtn",attrs:{type:"primary",disabled:t.regStatus},on:{click:t.handleJump}},[t._v("注册")])],1)])}),[],!1,null,"fe627e80",null);e.default=l.exports},927:function(t,e,n){}}]);