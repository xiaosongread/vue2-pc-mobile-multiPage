(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-753c8952"],{7172:function(t,e,n){},"804b":function(t,e,n){"use strict";n("7172")},d70c:function(t,e,n){"use strict";n.r(e);var a=n("c8cd"),i={name:"consuService",data:function(){return{iframeUrl:""}},components:{ContainerLayout:n("3779").a},mounted:function(){this.onLineService()},methods:{onLineService:function(){var t=this,e=localStorage.getItem("openId");e||(e="WM"+(new Date).getTime()+(100*Math.random()|0),localStorage.setItem("openId",e));var n={url:"https://".concat("imlive",".wm-motor.com/visitor/mobile/pages/chat/chat.html?openId=").concat(e,"&type=1&channel=a")};Object(a.c)(n).then((function(e){t.iframeUrl=e.data.url})).catch((function(){}))}}},c=(n("804b"),n("cba8")),o=Object(c.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("ContainerLayout",{attrs:{isHeader:!0,isFooter:!1}},[e("template",{slot:"main"},[e("div",{staticClass:"consuService"},[e("iframe",{staticClass:"ifraAte",attrs:{id:"iframe",marginwidth:"0",marginheight:"0",hspace:"0",vspace:"0",frameborder:"0",scrolling:"no",src:this.iframeUrl}})])])],2)}),[],!1,null,null,null);e.default=o.exports}}]);