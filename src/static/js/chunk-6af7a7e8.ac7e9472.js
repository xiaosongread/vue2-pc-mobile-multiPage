(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6af7a7e8"],{"294a":function(e,t,n){"use strict";var i=n("b775"),s=n("f121"),a={dictList:"data/dict"};Object.keys(a).forEach((function(e){a[e]=s.a.BASE_API+a[e]}));var r=n("ed08"),c={data:function(){return{dictLists:[]}},created:function(){},methods:{onDict:function(){var e,t=this;Object(i.a)({url:a.dictList,method:"get",params:e}).then((function(e){t.dictLists=e.data.driveCrmPoint})).catch((function(e){}))},onParamsPZ:function(){[{name:"crmCampainId",value:Object(r.b)("crmCampainId",window.location.href)||""},{name:"crmChannel",value:Object(r.b)("crmChannel",window.location.href)||""},{name:"sourceChannel",value:Object(r.b)("sourceChannel",window.location.href)||""},{name:"crmPoint",value:Object(r.b)("crmPoint",window.location.href)||""}].map((function(e){localStorage.setItem(e.name,e.value)}))}}};t.a=c},4050:function(e,t,n){"use strict";n("c3c3")},"4c99":function(e,t,n){"use strict";var i={name:"toast",props:{tip:{type:String,default:"",require:!0},status:{type:Boolean,default:!1},color:{type:String,default:""},platform:{type:String,default:"pc"}}},s=(n("a3c2"),n("cba8")),a=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.status,expression:"status"}],class:["toast toast-"+this.platform]},[this._v(this._s(this.tip))])])}),[],!1,null,"19f99bc2",null);t.a=a.exports},"5caa":function(e,t,n){"use strict";n("caff")},6013:function(e,t,n){"use strict";n("93cf")},"7a3e":function(e,t,n){"use strict";n("f6ca")},8468:function(e,t,n){},"86f0":function(e,t,n){},"918c":function(e,t,n){"use strict";n("fbe8")},"93cf":function(e,t,n){},a3c2:function(e,t,n){"use strict";n("8468")},beee:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("b775"),s=n("f121"),a={configInfo:"community/configInfo"};function r(e){return Object(i.a)({url:a.configInfo,method:"get",params:e,headers:{version:"1.0.0"}})}Object.keys(a).forEach((function(e){a[e]=s.a.BASE_API_ZHIXING+a[e]}))},c3c3:function(e,t,n){},caff:function(e,t,n){},dfbd:function(e,t,n){"use strict";var i={name:"Service",props:{platform:{type:String,default:"pc"},isShowQRCode:{type:Number,default:1}},data:function(){return{service:"".concat(this.Resource,"service_online.jpg")}},methods:{onService:function(){window.open("https://www.wm-imotor.com/statistics/wxscheme/wxJumpMiddlePage.html?id=28&cfgId=421&type=1")}}},s=(n("5caa"),n("cba8")),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return 1===e.isShowQRCode?n("div",{class:["service service-"+e.platform]},["pc"===e.platform?[e._m(0),n("div",{staticClass:"right"},[n("img",{attrs:{src:e.service,alt:"专属客服"}})])]:[n("div",{staticClass:"title"},[e._v("专属顾问为您提供以下服务")]),e._m(1),n("div",{staticClass:"right-now",on:{click:e.onService}},[e._v("立即咨询专属客服")])]],2):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left"},[t("p",[this._v("扫码咨询专属客服：")]),t("p",[this._v("即刻发现最适合您的威马车型随时获取最新最全的产品资讯快捷领取购车福利省钱又省心")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[this._v("\n      1. 针对您的用车需求、用车场景推荐适合您的车型"),t("br"),this._v("\n      2. 一对一专属服务，随时为您提供专业的产品资讯"),t("br"),this._v("\n      3. 不定期开展专属福利活动，替您省钱省心买好车"),t("br")])}],!1,null,"60dd52c5",null).exports,r=n("0951"),c=n.n(r),o=n("c8cd"),l={name:"dealer",props:{platform:{type:String,default:"pc"},vehicleType:{type:String,default:""},longitude:{type:String,default:""},latitude:{type:String,default:""}},data:function(){return{closeIcon:"".concat(this.Resource,"TEST-DRIVE/arrow_default.svg"),toggleDealer:!1,current:["请选择省份","请选择城市","请选择试驾门店"],currentIndex:0,list:[],cityList:[],smpList:[],passPrams:{province:"",provinceName:"",city:"",cityName:"",smpName:"",smpCode:""}}},watch:{toggleDealer:{handler:function(e){e&&(this.currentIndex=0,this.handleGetList({type:3,version:1}),this.current=["请选择省份","请选择城市","请选择试驾网点"])},immediate:!0}},created:function(){this.handleGetList({type:3,version:1})},methods:{handleChange:function(e){this.current[e]="请选择",this.currentIndex=e},handleCheck:function(e,t,n){var i=this;0===t&&(this.cityList=e.cityList,this.$set(this.current,t,e.provinceName),Object.assign(this.passPrams,{province:e.provinceCode,provinceName:e.provinceName})),1===t&&(this.smpList=[],Object(o.f)({type:3,cityCode:e.cityCode,longitude:this.longitude,latitude:this.latitude}).then((function(e){i.smpList=e.data.list.filter((function(e){return e.vehicles.indexOf(i.vehicleType)>-1}))})).catch((function(){})),this.$set(this.current,t,e.cityName),Object.assign(this.passPrams,{city:e.cityCode,cityName:e.cityName})),2===t&&(this.$set(this.current,t,e.smpName),Object.assign(this.passPrams,{smpName:e.smpName,smpCode:e.smpCode})),this.currentIndex=this.currentIndex<2?this.currentIndex+1:2,2===this.currentIndex&&"请选择试驾网点"!==this.current[this.currentIndex]&&setTimeout((function(){i.handleToggleDealer(!1),i.$emit("dealer",i.passPrams)}),5)},handleToggleDealer:function(e){this.toggleDealer=e},handleGetList:function(e){var t=this;Object(o.a)(e).then((function(e){t.list=e.data.list})).catch((function(){}))}}},u=(n("918c"),Object(s.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.toggleDealer,expression:"toggleDealer"}],class:["dealer dealer-"+e.platform]},["mb"===e.platform?n("div",{staticClass:"title"},[n("span",[e._v("请选择试驾门店")]),n("i",{staticClass:"el-icon-close",staticStyle:{"font-size":"18px","font-weight":"bold"},on:{click:function(t){return e.handleToggleDealer(!1)}}})]):e._e(),n("div",{staticClass:"top"},[n("div",{staticClass:"left"},e._l(e.current,(function(t,i){return n("div",{key:i,staticClass:"item-location",class:{active:e.currentIndex===i},on:{click:function(t){return e.handleChange(i)}}},[e.currentIndex>=i?n("p",[e._v(e._s(t))]):e._e()])})),0),"pc"===e.platform?n("div",{staticClass:"right",on:{click:function(t){return e.handleToggleDealer(!1)}}},[n("img",{attrs:{src:e.closeIcon}})]):e._e()]),n("div",{staticClass:"container"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:0===e.currentIndex,expression:"currentIndex === 0"}]},e._l(e.list,(function(t,i){return n("li",{key:i,on:{click:function(n){return e.handleCheck(t,e.currentIndex,i)}}},[e._v("\n          "+e._s(t.provinceName)+"\n        ")])})),0),n("ul",{directives:[{name:"show",rawName:"v-show",value:1===e.currentIndex,expression:"currentIndex === 1"}]},e._l(e.cityList,(function(t,i){return n("li",{key:i,on:{click:function(n){return e.handleCheck(t,e.currentIndex,i)}}},[e._v("\n          "+e._s(t.cityName)+"\n        ")])})),0),n("ul",{directives:[{name:"show",rawName:"v-show",value:2===e.currentIndex,expression:"currentIndex === 2"}],staticClass:"smp-name"},e._l(e.smpList,(function(t,i){return n("li",{key:i,on:{click:function(n){return e.handleCheck(t,e.currentIndex,i)}}},[n("div",[n("p",[n("span",[e._v(e._s(t.smpName))]),n("span",[e._v(e._s(t.distance))])]),n("p",[e._v(e._s(t.carManageAddress))])])])})),0)])])}),[],!1,null,"3107c4f4",null).exports),h=n("4c99");function d(e,t,n,i,s,a,r){try{var c=e[a](r),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(i,s)}var m,f,v={data:function(){return{longitude:"",latitude:"",denied:null,carTypeList:[]}},methods:{onInitDrivePage:(m=c.a.mark((function e(){var t,n,i,s,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:"",t&&n?localStorage.setItem("location","是"):localStorage.setItem("location","否"),e.next=5,Object(o.b)({longitude:t,latitude:n});case 5:i=e.sent,s=i.data,this.carTypeList=s.list,this.onChangeCarType();case 9:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,t=arguments;return new Promise((function(n,i){var s=m.apply(e,t);function a(e){d(s,n,i,a,r,"next",e)}function r(e){d(s,n,i,a,r,"throw",e)}a(void 0)}))},function(){return f.apply(this,arguments)}),onChangeCarType:function(){var e=this.carTypeList[this.carTypeIndex];if(!(!e||!e.smp)){var t={city:e.smp.cityCode,cityName:e.smp.cityName,province:e.smp.provinceCode,provinceName:e.smp.provinceName,smpName:e.smp.smpName,smpCode:e.smp.smpCode};Object.assign(this.form,t)}},onGetLocation:function(){new BMap.Map("allmap");var e=new BMap.Geolocation,t=this;e.getCurrentPosition((function(e){this.getStatus()==BMAP_STATUS_SUCCESS?(t.lng=String(e.point.lng),t.lat=String(e.point.lat),t.onInitDrivePage(t.lng,t.lat)):t.onInitDrivePage()}),(function(e){t.onInitDrivePage()}))}}},p=n("294a"),g={name:"Success",props:{success:{type:Boolean,default:!1}},data:function(){return{bg:"".concat(this.Resource,"EX5-Z/test_drive_success.png"),close:"".concat(this.Resource,"EX5-Z/close.png"),qrcode:"".concat(this.Resource,"EX5-Z/success_qrcode.png")}},methods:{onClose:function(){this.$emit("close",!1)}}},C=(n("4050"),Object(s.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.success,expression:"success"}],staticClass:"success"},[n("div",{staticClass:"container"},[n("div",{staticClass:"details",style:{backgroundImage:"url("+e.bg+")"}},[n("img",{staticClass:"close",attrs:{src:e.close,alt:"关闭"},on:{click:e.onClose}}),n("div",{staticClass:"headline"},[e._v("预约成功")]),e._m(0),n("img",{staticClass:"qrcode",attrs:{src:e.qrcode,"data-test":"test",alt:"预约成功，在线咨询"}}),e._m(1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text"},[t("p",[this._v("感谢预约威马汽车。")]),t("p",[this._v("我们会尽快电话联系你确定具体的试驾时间。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"desc"},[t("p",[this._v("立即关注我们的服务号")]),t("p",[this._v("我们会将预约信息和注意事项及时通知你。")])])}],!1,null,"e5db16f6",null).exports);function _(e,t,n,i,s,a,r){try{var c=e[a](r),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(i,s)}var y,b={components:{Dealer:u,Toast:h.a,TestDriveSuccess:C},props:{isShowQRCode:{type:Number,required:!0},vehicleType:{type:String,default:"W6"},platform:{type:String,default:"pc"},pagetype:{type:String,default:""}},name:"TestDrive",mixins:[v,p.a],data:function(){return{test_drive_status:!1,disabledSubmit:!1,currentVehicleType:"",toast:{tip:"请输入预约试驾手机号",status:!1},arrow:0,form:{channel:"PH",followDrive:0,provinceName:"",province:"",cityName:"",city:"",vehicleType:"W6",drivePhone:"",verifyCode:"",smpName:"",agree:!1,smpCode:"",crmPoint:"MP1639990240058574",crmCampainId:"",crmChannel:"",pageLinks:window.location.href,sourceChannel:""},smsText:"获取验证码",time:null,codeClass:"code-default",noneInput:0,lng:"",lat:"",isAgreeIcon:"".concat(this.Resource,"TEST-DRIVE/check_default.svg"),bg:""}},computed:{carTypeIndex:function(){var e=this;return this.carTypeList.findIndex((function(t){return t.vehicleType===e.vehicleType}))}},updated:function(){var e=this;try{if(0===Array.from(this.carTypeList).length)throw"";"mb"===this.platform&&(this.bg=this.carTypeList.find((function(t){return t.vehicleType===e.vehicleType})).vehicleTypePicPc[0].mobileBG)}catch(e){}},watch:{"form.drivePhone":function(e){var t=/^1[3-9]\d{9}$/.test(e.replace(/\s+/g,""));this.codeClass=t?"code-active":"code-default",""===e&&(clearInterval(this.timer),this.smsText="获取验证码")},"form.agree":function(e){this.isAgreeIcon="".concat(this.Resource,e?"TEST-DRIVE/check_active.svg":"TEST-DRIVE/check_default.svg")},carTypeIndex:function(){this.onChangeCarType()}},created:function(){this.onGetLocation(),this.onInitDrivePage()},methods:{onGio:function(){var e=this.$route.query;if(!(e.crmPoint||e.crmCampainId||e.crmChannel||e.sourceChannel)){gio&&gio("track","testDrive_public",{pagename:"预约试驾页",platformname:"威马汽车官网",platformcode:"PL1576561305851587",activityname:"官网试驾留资",activityID:"AC1639990765289224",channelname:"威马汽车官网",channelcode:"MC1577074835688809",pointname:"自然流量",pointcode:"MP1641902403968177 ",get_phone_var:"是",get_local_var:"是",agree_var:"是"})}},onPhoneSpace:function(e){var t=this.form.drivePhone.trim();if(8!==e.keyCode){var n=t.length;3!==n&&8!==n||(t+=" ",this.form.drivePhone=t)}else this.form.drivePhone=t},onSelect:function(e){var t=this;this.form.vehicleType=e.vehicleType,"drive"===e.between&&setTimeout((function(){t.$refs.Dealer.handleToggleDealer(!1)}),10)},onGetSafeCode:function(){var e=this;if("code-default"!==this.codeClass){var t=60;if(!/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g,"")))return!1;this.timer=setInterval((function(){t--,e.smsText="".concat(t,"S"),t<=0&&(clearInterval(e.timer),e.smsText="重新获取")}),1e3),Object(o.e)({mobile:this.form.drivePhone.replace(/\s+/g,""),sendType:4}).then((function(){e.onToast("发送成功")})).catch((function(t){clearInterval(e.timer),e.onToast(t.data.desc)}))}},onChangeDealer:function(e){this.arrow=e},onToggleDealer:function(e){this.$refs.Dealer.handleToggleDealer(e)},onGetDealer:function(e){Object.assign(this.form,e)},onAgree:function(){this.form.agree=!1===this.form.agree},onToast:function(e){var t=this;Object.assign(this.toast,{tip:e,status:!0}),setTimeout((function(){Object.assign(t.toast,{status:!1}),t.noneInput=0}),3e3)},onMobileBlur:function(){/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g,""))||(this.noneInput=1,this.onToast("请输入正确的手机号"))},getVehicle:function(e){var t=this;this.form.vehicleType=e.vehicleType,0===e.isShowQRCode&&setTimeout((function(){t.$refs.Dealer.handleToggleDealer(!1)}),10),this.$emit("testDriveSuccess",{vehicleType:e.vehicleType,isShowQRCode:e.isShowQRCode})},onSubmit:(y=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var a=e.apply(t,n);function r(e){_(a,i,s,r,c,"next",e)}function c(e){_(a,i,s,r,c,"throw",e)}r(void 0)}))}}(c.a.mark((function e(){var t,n,i,s,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.disabledSubmit){e.next=2;break}return e.abrupt("return");case 2:if(/^1[3-9]\d{9}$/.test(this.form.drivePhone.replace(/\s+/g,""))){e.next=7;break}this.noneInput=1,this.onToast("请输入正确的手机号"),e.next=36;break;case 7:if(/^\d{4}$/.test(this.form.verifyCode)){e.next=12;break}this.noneInput=2,this.onToast("请输入正确的验证码"),e.next=36;break;case 12:if(""!==this.form.smpName){e.next=17;break}this.noneInput=3,this.onToast("请选择预约试驾门店"),e.next=36;break;case 17:if(this.form.agree){e.next=22;break}this.noneInput=4,this.onToast("请阅读并同意"),e.next=36;break;case 22:return e.prev=22,t={crmCampainId:localStorage.getItem("crmCampainId"),crmPoint:localStorage.getItem("crmPoint"),crmChannel:localStorage.getItem("crmChannel"),sourceChannel:localStorage.getItem("sourceChannel")},n={drivePhone:this.form.drivePhone.replace(/\s+/g,"")},e.next=27,Object(o.d)(Object.assign(this.form,Object.assign(t,n)));case 27:i=e.sent,s=i.code,this.disabledSubmit=!0,1===s?("pc"===this.platform&&(this.onToast("预约成功"),this.$emit("testDriveSuccess",{isShowQRCode:2})),this.onGio(),Object.assign(this.form,{drivePhone:"",verifyCode:""}),clearInterval(this.timer),this.smsText="获取验证码",this.noneInput=0,setTimeout((function(){a.disabledSubmit=!1}),3e4),"mb"===this.platform&&this.$router.push("/TestDriveSuccess")):setTimeout((function(){a.disabledSubmit=!1}),3e3),e.next=36;break;case 33:e.prev=33,e.t0=e.catch(22),this.onToast(e.t0.data.desc);case 36:case"end":return e.stop()}}),e,this,[[22,33]])}))),function(){return y.apply(this,arguments)}),closeTestDriveDialog:function(e){this.test_drive_status=e}}},T=(n("6013"),Object(s.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["test-drive test-drive-"+e.platform]},[n("div",{staticClass:"select",style:{backgroundImage:"url("+e.bg+")"}},[n("div",{staticClass:"select-container"},[n("div",{staticClass:"title"},[e._v("\n        "+e._s(1!==e.isShowQRCode?"即刻预约试驾":"在线咨询")+"\n      ")]),n("div",{staticClass:"type"},[e._v("\n        "+e._s(1!==e.isShowQRCode?"试驾车型":"咨询车型")+"\n      ")]),n("div",{staticClass:"bottom"},e._l(e.carTypeList,(function(t,i){return n("div",{key:i,staticClass:"item",on:{click:function(n){return e.getVehicle(t)}}},[n("img",{attrs:{src:[e.vehicleType===t.vehicleType?t.vehicleTypePicPc[0].active:t.vehicleTypePicPc[0].default],alt:""}})])})),0)])]),0===e.isShowQRCode?n("div",{staticClass:"form"},[n("Toast",{attrs:{platform:e.platform,tip:e.toast.tip,status:e.toast.status}}),n("div",{staticClass:"form-item",class:{"none-input":1===e.noneInput}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.drivePhone,expression:"form.drivePhone"}],attrs:{type:"text",placeholder:"请输入手机号",maxlength:"13"},domProps:{value:e.form.drivePhone},on:{keyup:e.onPhoneSpace,blur:e.onMobileBlur,input:function(t){t.target.composing||e.$set(e.form,"drivePhone",t.target.value)}}})]),n("div",{staticClass:"form-item code",class:{"none-input":2===e.noneInput}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.verifyCode,expression:"form.verifyCode"}],attrs:{type:"text",maxlength:"4",placeholder:"请输入验证码"},domProps:{value:e.form.verifyCode},on:{input:function(t){t.target.composing||e.$set(e.form,"verifyCode",t.target.value)}}}),n("span",{class:e.codeClass,on:{click:e.onGetSafeCode}},[e._v(e._s(e.smsText))])]),n("div",{staticClass:"form-item smp-name",class:{"none-input":3===e.noneInput,"selected-have":""===e.form.smpName},on:{click:function(t){return t.target!==t.currentTarget?null:e.onToggleDealer(!0)}}},[e._v("\n      "+e._s(e.form.smpName)+"\n      "),n("span",{on:{mouseenter:function(t){return e.onChangeDealer(1)},mouseleave:function(t){return e.onChangeDealer(0)},click:function(t){return t.target!==t.currentTarget?null:e.onToggleDealer(!0)}}},[n("img",{attrs:{src:[1===e.arrow?this.Resource+"TEST-DRIVE/arrow_active.svg":this.Resource+"TEST-DRIVE/arrow_default.svg"]},on:{mouseenter:function(t){return e.onChangeDealer(1)},mouseleave:function(t){return e.onChangeDealer(0)},click:function(t){return t.target!==t.currentTarget?null:e.onToggleDealer(!0)}}})]),n("Dealer",{ref:"Dealer",attrs:{platform:e.platform,vehicleType:e.vehicleType,longitude:e.lng,latitude:e.lat},on:{dealer:e.onGetDealer}})],1),n("div",{staticClass:"form-item agree"},[n("img",{attrs:{src:e.isAgreeIcon},on:{click:e.onAgree}}),n("div",{staticClass:"agree-title",class:{"none-input":4===e.noneInput}},[e._v("\n        同意"),n("a",{attrs:{href:"https://www.wm-imotor.com/zx-h5web-upgrade/RichText/index.html?uid=app-privacy-agreement",target:"_blank"}},[e._v("《威马隐私政策》")]),e._v("及"),n("a",{attrs:{href:"https://www.wm-imotor.com/zx-h5web-upgrade/RichText/index.html?uid=app-user-agreement",target:"_blank"}},[e._v("《威马用户协议》")])])]),n("div",{staticClass:"form-submit"},[n("div",{class:["button "+(e.disabledSubmit?"form-submit-disabled":"form-submit-active")],on:{click:e.onSubmit}},[e._v("\n        申请预约试驾\n      ")])])],1):e._e(),n("TestDriveSuccess",{attrs:{success:e.test_drive_status},on:{close:e.closeTestDriveDialog}})],1)}),[],!1,null,"02031e4e",null).exports),w=n("beee");function x(e,t,n,i,s,a,r){try{var c=e[a](r),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(i,s)}var I,S={name:"testDriveSuccessPC",props:{isShowQRCode:{type:Number}},data:function(){return{qrcode:""}},watch:{isShowQRCode:function(e){2===e&&this.getPageData()}},methods:{getPageData:(I=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var a=e.apply(t,n);function r(e){x(a,i,s,r,c,"next",e)}function c(e){x(a,i,s,r,c,"throw",e)}r(void 0)}))}}(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.a)({pointType:9,isCarUser:0});case 3:1===(t=e.sent).code&&(this.qrcode=t.data.imgUrl),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return I.apply(this,arguments)})}},P=(n("7a3e"),{components:{Service:a,TestDrive:T,TestDriveSuccessPC:Object(s.a)(S,(function(){var e=this.$createElement,t=this._self._c||e;return 2===this.isShowQRCode?t("div",{staticClass:"success-pc"},[t("div",{staticClass:"title"},[this._v("您已预约成功")]),t("div",{staticClass:"qrcode-container"},[t("img",{attrs:{src:this.qrcode,alt:"专属客服"}})]),this._m(0)]):this._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"detail"},[t("p",[this._v("扫码添加专属客服")]),t("p",[this._v("获取最新车型资讯")]),t("p",[this._v("立享超值购车福利")])])}],!1,null,"49b50ce4",null).exports},name:"TestDriveContainer"}),D=(n("fb2c"),Object(s.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["container-"+this.$attrs.platform]},[n("TestDrive",e._g(e._b({},"TestDrive",e.$attrs,!1),e.$listeners)),n("Service",e._b({},"Service",e.$attrs,!1)),n("TestDriveSuccessPC",e._b({},"TestDriveSuccessPC",e.$attrs,!1))],1)}),[],!1,null,"5cdc4cd0",null));t.a=D.exports},f6ca:function(e,t,n){},fb2c:function(e,t,n){"use strict";n("86f0")},fbe8:function(e,t,n){}}]);