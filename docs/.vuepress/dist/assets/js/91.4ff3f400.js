(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1478:function(e,t,a){"use strict";a(866)},1632:function(e,t,a){"use strict";a.r(t);a(74);var n=a(1621),i=(a(1427),a(1449),a(1460),a(1471),a(1477),{pieObj:{updatelegends:["吃饭","约会","购物","旅游","请客"],updateExpendData:[{money:1500,type:"吃饭"},{money:2e3,type:"约会"},{money:300,type:"购物"},{money:400,type:"旅游"},{money:600,type:"请客"}],resetlegend:["前端","后端","小程序","面试题解","读书"],resetExpendData:[{value:335,name:"前端"},{value:310,name:"后端"},{value:234,name:"小程序"},{value:135,name:"面试题解"},{value:1548,name:"读书"}]}}),o={components:{"v-chart":n.a},name:"pie",data:function(){return{chart:null,option:{title:{text:"圆饼图示例",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["前端","后端","小程序","面试题解","读书"]},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"前端"},{value:310,name:"后端"},{value:234,name:"小程序"},{value:135,name:"面试题解"},{value:1548,name:"读书"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},methods:{onChangeChart:function(){for(var e in i){var t=i[e],a=t.updateExpendData,n=t.updatelegends,o=a.map((function(e){return{name:e.type,value:e.money}}));this.option.legend.data=n,this.option.series[0].data=o}},onChangeReset:function(){for(var e in i){var t=i[e],a=t.resetExpendData,n=t.resetlegend;this.option.legend.data=n,this.option.series[0].data=a}}},mounted:function(){}},r=(a(1478),a(12)),s=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pie-box"},[t("div",[t("v-chart",{ref:"chart",attrs:{id:"chart",options:this.option,autoresize:""}})],1),this._v(" "),t("div",[t("el-button",{attrs:{type:"danger"},on:{click:this.onChangeChart}},[this._v("更新数据")]),this._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:this.onChangeReset}},[this._v("恢复数据")])],1)])}),[],!1,null,"482bf0e7",null);t.default=s.exports},866:function(e,t,a){}}]);