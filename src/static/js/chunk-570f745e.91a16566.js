(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-570f745e"],{"35cf":function(e,t,s){"use strict";s("e9a8")},ba65:function(e,t,s){"use strict";s.r(t);var i={name:"EX-5",components:{ContainerLayout:s("3779").a},data:function(){return{isHeader:!0,H:2e3,type:"W6",MapTest:new Map([["W6","https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-w6.html"],["EX5-Z","https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-ex5-z.html"],["EX5-JKX","https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-getngo-ex5.html"],["E.5","https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-e5.html"],["E.5-C","https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/vehicleSetsheet/specsheet-e5-c.html"]]),Map:new Map([["W6","https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-w6.html"],["EX5-Z","https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-ex5-z.html"],["EX5-JKX","https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-getngo-ex5.html"],["E.5","https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-e5.html"],["E.5-C","https://cos-data.wm-imotor.com/website/vehicleSetsheet/specsheet-e5-c.html"]]),env:""}},created:function(){var e=this;this.env="production",this.type=this.$route.query.type,window.addEventListener("message",(function(t){e.isMobile()?e.H=t.data:e.H=t.data+80}))},mounted:function(){},computed:{},methods:{onSubmit:function(){}}},c=(s("35cf"),s("cba8")),h=Object(c.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("ContainerLayout",{attrs:{isHeader:this.isHeader,isFooter:!0}},[t("template",{slot:"main"},[t("div",{staticClass:"iframeContainer",staticStyle:{"min-height":"calc(100vh - 120px)"}},["production"===this.env?t("iframe",{attrs:{src:this.Map.get(this.type),id:"iframe",width:"100%",height:"1500",frameborder:"0"}}):t("iframe",{attrs:{src:this.MapTest.get(this.type),id:"iframes",width:"100%",height:"1500",frameborder:"0"}})])])],2)}),[],!1,null,"3a843c66",null);t.default=h.exports},e9a8:function(e,t,s){}}]);