(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1498:function(t,i,e){"use strict";e(885)},1674:function(t,i,e){"use strict";e.r(i);e(28),e(177),e(46),e(13),e(65);var n={name:"ArticleAdvertiSpace",props:["width","height"],data:function(){return{carouses:[{imgUrl:"https://itclan.cn/wp-content/uploads/2022/06/footer-hf.gif",text:"广告",id:"1",target:"_blank",href:"http://jg.wegowan.com/stf/visitor.html?id=200&s=6702&c={uid}"},{imgUrl:"https://s1.ax1x.com/2022/06/24/jiTfOO.png",text:"测算",id:"2",href:"https://cesuan.itclan.cn/"}],centerDialogVisible:!1,isDiaLog:!0}},methods:{linkFun:function(){var t=this;if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isDiaLog=!1,this.$message({message:"如需合作,请您联系站长,期待我们合作愉快",type:"error",center:!0,duration:5e3}),console.log("移动端下不显示dialog");this.carouses.forEach((function(i){"javascript:;"!=i.href?i.href=i.href:t.centerDialogVisible=!0}))}}},r=(e(1498),e(12)),s=Object(r.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"carousel"},[e("el-carousel",{attrs:{trigger:"click",height:"150px"}},t._l(t.carouses,(function(i){return e("el-carousel-item",{key:i.id},[e("a",{attrs:{href:i.href,target:"_blank"},on:{click:t.linkFun}},[e("img",{attrs:{src:i.imgUrl,width:t.width,height:t.height,alt:""}})])])})),1)],1),t._v(" "),t.isDiaLog?e("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,"close-on-click-modal":"false",width:"30%",center:""},on:{"update:visible":function(i){t.centerDialogVisible=i}}},[e("span",[t._v("如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)]):t._e()],1)}),[],!1,null,"9fa56d76",null);i.default=s.exports},885:function(t,i,e){}}]);