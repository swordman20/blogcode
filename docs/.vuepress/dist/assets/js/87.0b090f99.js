(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1488:function(e,t,n){"use strict";n(878)},1670:function(e,t,n){"use strict";n.r(t);n(28),n(56),n(89),n(177),n(87);var s=n(1470),o=n.n(s),a={name:"formVertiyCode",data:function(){return{telephoneVal:"",btnText:"获取验证码",isSend:!0,t:60,smscode:""}},watch:{telephoneVal:function(e){var t=this;(this.t=60)&&(this.isSend=this._checkPhone(e)),this.$nextTick((function(){t.telephoneVal=e.replace(/[^0-9\.]+/g,"")}))},t:function(e){this.t<60&&(this.isSend=!0)}},methods:{handleGetCode:function(){var e=this;this.isSend=!0,o.a.get("".concat("https://www.easy-mock.com/mock/5f4e532a66f90555e2209861/learn","/sendCode"),{params:{telephoneVal:this.telephoneVal}}).then((function(t){var n=t.data.base.smscode;if(200==t.status){setTimeout((function(){e.smscode=n}),2e3),e.btnText=e.t+"s后重新发送";var s=window.setInterval((function(){e.t--,e.btnText=e.t+"s后重新发送",e.t<0&&(window.clearInterval(s),e.isSend=!1,e.btnText="获取验证码",e.t=60)}),1e3)}else e.$message({showClose:!0,message:t.message,type:"error"}),e.isSend=!0})).catch((function(e){console.error(e)}))},handleInputBlur:function(e){if(console.log("输入框失去焦点时"),!/^1[3456789]\d{9}$/.test(e))return this.$message({showClose:!0,message:"您输入的电话号码有误",type:"error"}),this.isSend=!0,!1;this.isSend=!1},_checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}},i=(n(1488),n(12)),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-input",{staticClass:"el-input",attrs:{maxlength:"11",placeholder:"请输入手机号码",clearable:""},on:{blur:function(t){return e.handleInputBlur(e.telephoneVal)}},model:{value:e.telephoneVal,callback:function(t){e.telephoneVal="string"==typeof t?t.trim():t},expression:"telephoneVal"}}),e._v(" "),n("el-button",{attrs:{disabled:e.isSend},on:{click:e.handleGetCode}},[e._v(e._s(e.btnText))]),e._v(" "),""!=e.smscode?n("div",[e._v("获取到的验证码是: "+e._s(e.smscode))]):e._e()],1)}),[],!1,null,"601228a4",null);t.default=l.exports},878:function(e,t,n){}}]);