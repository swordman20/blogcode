(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1558:function(t,a,i){"use strict";i(929)},1583:function(t,a,i){"use strict";i.r(a);i(51);var e=i(379),l=i.n(e),r=[{attr:"writing-mode",type:"String",value:"horizontal-tb/vertical-rl/vertical-lr/sideways-rl/sideways-lr",descption:"决定文本在水平或垂直方向上如何排布horizontal-tb表示水平,vertical-rl表示垂直"}],s=[{prop:"attr",label:"属性"},{prop:"type",label:"类型"},{prop:"value",label:"值",width:"200px"},{prop:"descption",label:"说明"}],n={name:"writeMode",data:function(){return{writingModeVal:"horizontal-tb",writingModes:["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"],tableAttrData:r,tabcolums:s}},watch:{writingModeVal:function(){this.updateCss()}},methods:{updateCss:function(){this.$refs.css.innerHTML=l.a.highlight("writing-mode: ".concat(this.writingModeVal,";\n-webkit-writing-mode: ").concat(this.writingModeVal,";\n-ms-writing-mode: ").concat(this.writingModeVal),l.a.languages.css)}},mounted:function(){this.updateCss()}},o=(i(1558),i(10)),c=Object(o.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"effect-display-wrap"},[i("div",{style:{writingMode:t.writingModeVal}},[t._v("文字排布"+t._s("horizontal-tb"===t.writingModeVal?"水平":"垂直")+"方向")])]),t._v(" "),i("div",{staticClass:"language-css extra-class"},[i("pre",{staticClass:"language-css",staticStyle:{"margin-bottom":"30px"}},[i("code",{ref:"css"})])]),t._v(" "),i("div",{staticClass:"attr-operate-wrap"},[i("div",{staticClass:"attr-inner-content"},[i("div",{staticClass:"text-width"},[t._v("决定文本在水平或垂直方向上如何排布-writing-mode:")]),t._v(" "),i("el-radio-group",{staticClass:"el-radio-group",model:{value:t.writingModeVal,callback:function(a){t.writingModeVal=a},expression:"writingModeVal"}},t._l(t.writingModes,(function(a){return i("el-radio",{key:a,staticClass:"radio",attrs:{label:a}},[t._v(t._s(a))])})),1)],1)]),t._v(" "),i("div",{staticClass:"attr-table-desc"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableAttrData}},t._l(t.tabcolums,(function(t){return i("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,align:"center","header-align":"center"}})})),1)],1)])}),[],!1,null,"10b9f914",null);a.default=c.exports},929:function(t,a,i){}}]);