webpackJsonp([4],{155:function(e,t){e.exports={"zh-cn":{"ui.alert.button_text":"确定","ui.confirm.confirm_text":"确定","ui.confirm.cancel_text":"取消","ui.prompt.confirm_text":"确定","ui.prompt.cancel_text":"取消","ui.picker.confirm_text":"确定","ui.picker.cancel_text":"取消","ui.actionsheet.cancel_text":"取消","ui.loading.text":"加载中...","ui.cascader.loading_text":"加载中","ui.cascader.please_select":"请选择","ui.keyboard.space_text":"空格","ui.keyboard.complete_text":"完成","ui.countdown.done_text":"已结束","ui.requeststatus.loading":"加载中...","ui.requeststatus.nomore":"没有更多了...","ui.requeststatus.offline":"网络异常，点击刷新","ui.requeststatus.timeout":"请求超时，点击刷新","ui.requeststatus.error":"请求失败，点击刷新","ui.requeststatus.empty":"没有数据，点击刷新","ui.pulldownrefresh.pull":"下拉刷新","ui.pulldownrefresh.release":"释放刷新","ui.pulldownrefresh.refreshing":"正在刷新...","ui.pulldownrefresh.success":"刷新成功","ui.pulldownrefresh.cancel":"取消下拉","ui.pullupload.pull_load_more":"上拉加载更多","ui.pullupload.pull":"上拉加载","ui.pullupload.release":"释放加载","ui.pullupload.refreshing":"正在加载...","ui.pullupload.success":"加载成功","ui.pullupload.cancel":"取消加载","ui.smscode.getcode":"获取短信验证码","ui.smscode.run":"{%s}秒后重新获取","ui.smscode.reset":"重新获取验证码","ui.smscode.placeholder":"请输入验证码","ui.table.request_failed":"请求失败","ui.table.refresh":"刷新","ui.table.timeout":"网络超时","ui.table.offline":"网络无法连接，请检查您的网络","ui.table.empty":"结果为空","ui.table.need_login":"请先登录","ui.table.loading":"正在加载...","ui.cascader.select":"请选择","ui.calendar.head":"日 一 二 三 四 五 六","ui.calendar.yearsplit":"年","ui.calendar.monthsplit":"月","ui.countdown.over":"已结束"},en:{"ui.alert.button_text":"OK","ui.confirm.confirm_text":"Confirm","ui.confirm.cancel_text":"Cancel","ui.prompt.confirm_text":"Confirm","ui.prompt.cancel_text":"Cancel","ui.picker.confirm_text":"Confirm","ui.picker.cancel_text":"Cancel","ui.actionsheet.cancel_text":"Cancel","ui.loading.text":"Loading...","ui.cascader.loading_text":"Loading","ui.cascader.please_select":"Please select","ui.keyboard.space_text":"Space","ui.keyboard.complete_text":"Complete","ui.countdown.done_text":"Done","ui.requeststatus.loading":"Loading...","ui.requeststatus.nomore":"No more data...","ui.requeststatus.offline":"Network error, tap to refresh","ui.requeststatus.timeout":"Network error, tap to refresh","ui.requeststatus.error":"Request failed, tap to refresh","ui.requeststatus.empty":"No data, tap to refresh","ui.pulldownrefresh.pull":"Pull refresh","ui.pulldownrefresh.release":"Release to refresh","ui.pulldownrefresh.refreshing":"Refreshing...","ui.pulldownrefresh.success":"Refresh success","ui.pulldownrefresh.cancel":"Cancel pull","ui.pullupload.pull_load_more":"Pull to load more","ui.pullupload.pull":"Pull load","ui.pullupload.release":"Release to load","ui.pullupload.refreshing":"Loading...","ui.pullupload.success":"Load success","ui.pullupload.cancel":"Cancel load","ui.smscode.getcode":"Get code","ui.smscode.run":"{%s} seconds","ui.smscode.reset":"Reset","ui.smscode.placeholder":"Please input code","ui.table.request_failed":"Request failed","ui.table.refresh":"Refresh","ui.table.timeout":"Timeout","ui.table.offline":"Can't connect to network","ui.table.empty":"No results","ui.table.need_login":"Please login first","ui.table.loading":"Loading...","ui.cascader.select":"Please Select","ui.calendar.head":"Sun Mon Tue Wen Thu Fri Sat","ui.calendar.yearsplit":"/","ui.calendar.monthsplit":"","ui.countdown.over":"Time's up"}}},162:function(e,t,i){function a(e){i(163),i(165)}var n=i(23)(i(166),i(170),a,null,null);e.exports=n.exports},163:function(e,t){},165:function(e,t){},166:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(22),n=i.n(a),o=i(14),r=i.n(o),s=i(167),l=i(32),c=i(92),u=i(93),d=i(64),p=i(94),m=i(168),g=i(33);t.default={components:{UiView:g.a,UiSlideMenu:m.a,UiText:p.a,UiNavBar:d.a,UiRow:u.a,UiCol:c.a,UiIcon:l.a,UiTabBar:s.a},config:{pages:["pages/index","pages/detail","pages/video_list"],theme:{"theme-color":"#3399ff"},window:{scrollType:"div",navigationBarBackgroundColor:"#ffffff",navigationBarTextStyle:"black",navigationBarBorderColor:"rgba(231, 231, 231, 0.6)"},tabBar:{color:"#7a7e83",selectedColor:"#39f",borderColor:"rgba(231, 231, 231, 0.6)",backgroundColor:"#fff",list:[{pagePath:"pages/index",iconName:"home",text:"首页"},{pagePath:"pages/video_list",iconName:"product",text:"商品介绍"},{pagePath:"pages/user",iconName:"user",text:"我的"}]},networkBaseUrl:""},data:function(){return{globalData:{},WIN_WIDTH:ui.WIN_WIDTH,tabIndex:0,tabBarList:[],navStyle:{},tabBar:{},tabBarHeight:56,isApp:ui.IS_APP,headerHeight:ui.DEFAULT_HEADER_HEIGHT,paths:[],barHeight:ui.STATUS_BAR_HEIGHT,showSlideMenu:!1}},computed:{navigationBarVisible:function(){return"custom"!==this.winConfig.navigationStyle},showBack:function(){var e=this.paths[0];return this.tabBar&&this.tabBar.paths?this.tabBar.paths.indexOf(e)<0:e!==this.$route.path},winConfig:function(){var e=this.$router.options.window,t=r()({},e,this.pageConfig),i=t.navigationBarTextStyle||"white",a=document.body.getAttribute("scroll-type");return this.navStyle={backgroundColor:t.navigationBarBackgroundColor,color:i,"padding-top":"env(safe-area-inset-top)",borderBottom:"1px solid "+t.navigationBarBorderColor,backgroundImage:t.navigationBarBackgroundGradient,position:"body"===a?"fixed":"absolute"},this.navStyle.backgroundColor&&(this.navStyle.backgroundImage="none"),t.navigationBarBorderColor?this.navStyle.borderBottom="1px solid "+t.navigationBarBorderColor:this.navStyle.borderBottom="0",t},isTabBar:function(){return this.tabBarList&&this.tabBarList.length>0},tabBarStyle:function(){var e={};this.navigationBarVisible&&"top"===this.tabBar.position&&(e.top=this.headerHeight+"px");var t=document.body.getAttribute("scroll-type");return e.position="body"===t?"fixed":"absolute",e},bottom:function(){return this.isTabBar?this.tabBarHeight+"px":0},pageConfig:function(){return this.isTabBar?this.tabBarList[this.tabIndex].pageConfig:this.$route.meta.pageConfig||window.__$uiPageConfig}},watch:{"$route.path":function(e){this.handleIosGesture(),this.initTab(),this.initBodyStyle()}},created:function(){var e=this;this.initTab(),this.initPaths(),this.$nextTick(function(){e.handleIosGesture()})},methods:{handleNavIconTap:function(){this.showSlideMenu=!this.showSlideMenu},initTab:function(){this.tabBar=this.getTabBar(),this.tabBarList=this.tabBar.list,this.tabBar.paths&&(this.tabIndex=this.tabBar.paths.indexOf(this.$route.path))},initPaths:function(){var e=this.$router.options.routes;this.paths=e.map(function(e){return e.path})},initBodyStyle:function(){this.winConfig&&this.winConfig.backgroundColor&&(document.body.style.backgroundColor=this.winConfig.backgroundColor)},handleIosGesture:function(){ui.IS_IOS&&ui.setPagePopGesture&&ui.setPagePopGesture({openPagePopGesture:!this.pageConfig.disableIosGesture})},handleTabBeforeChange:function(e){e.id,e.index;(0,e.next)()},handleTabChange:function(e){e.id,e.index},handleBack:function(){ui.navigateBack()},getTabBar:function(){for(var e=[this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)),t=0;t<e.length;t++)if(e[t].paths&&e[t].paths.indexOf(this.$route.path)>-1)return e[t];return{}}},mounted:function(){}}},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ui-view",attrs:{id:"ui-app"}},[i("ui-slide-menu",{attrs:{width:"280",threshold:"30",touch:e.pageConfig.touchSlideMenu},model:{value:e.showSlideMenu,callback:function(t){e.showSlideMenu=t},expression:"showSlideMenu"}},[i("div",{staticClass:"menu ui-view",slot:"menu"},[i("ui-text",{staticStyle:{color:"#fff",margin:"10px"},attrs:{block:""}},[e._v("侧滑菜单")])],1),e._v(" "),i("div",{staticClass:"ui-view",slot:"panel"},[e.pageConfig?i("ui-nav-bar",{directives:[{name:"show",rawName:"v-show",value:e.navigationBarVisible,expression:"navigationBarVisible"}],staticClass:"page-88a7b1",style:e.navStyle},[i("div",{staticClass:"ui-row",style:{}},[i("div",{staticClass:"ui-col",style:{flex:"0 0 80px"}},[i("div",{staticClass:"ui-col-content"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.showBack,expression:"showBack"}],staticClass:"back",on:{tap:e.handleBack}},[i("ui-icon",{attrs:{type:"arrow-left","font-size":"24"}}),e._v("返回\n          ")],1),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.showBack,expression:"!showBack"}],staticClass:"back",on:{tap:e.handleNavIconTap}},[i("ui-icon",{attrs:{type:"list",color:"#2B333B",size:"16"}})],1)])]),e._v(" "),i("div",{staticClass:"nav-bar-center ui-col ui-col-align-center align-center",style:{flex:"0 0 "+(e.WIN_WIDTH-160)+"px"},attrs:{"content-direction":"row"}},[i("div",{staticClass:"ui-col-content align-center flex-row"},[i("div",{staticClass:"nav-bar-center-loading ui-view",staticStyle:{display:"none"}}),e._v(" "),i("span",{staticClass:"nav-bar-center-text"},[e._v(e._s(e.$t(e.winConfig.navigationBarTitleText)))])])]),e._v(" "),i("div",{staticClass:"ui-col",style:{flex:"0 0 80px"}},[i("div",{staticClass:"ui-col-content"})])])]):e._e(),e._v(" "),i("keep-alive",[!e.isApp&&e.pageConfig.cache?i("router-view",{staticClass:"router-view"}):e._e()],1),e._v(" "),e.isApp||!e.pageConfig.cache?i("router-view",{staticClass:"router-view"}):e._e(),e._v(" "),e.isTabBar?i("ui-tab-bar",{style:e.tabBarStyle,attrs:{id:e.tabBar.id,"group-id":e.tabBar.groupId,"icon-size":e.tabBar.iconSize,"font-size":e.tabBar.fontSize,position:e.tabBar.position,list:e.tabBarList,paths:e.tabBar.paths,"background-color":e.tabBar.backgroundColor,"border-color":e.tabBar.borderColor,color:e.tabBar.color,"selected-color":e.tabBar.selectedColor},on:{beforechange:e.handleTabBeforeChange,change:e.handleTabChange},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}}):e._e(),e._v(" "),i("div",{staticClass:"iphonex-bottom ui-view"})],1)])],1)},staticRenderFns:[]}},171:function(e,t){},172:function(e,t){},173:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(22),n=i.n(a),o=i(7),r=i.n(o),s=i(174),l=i.n(s),c=i(181),u=i.n(c),d=i(193),p=i.n(d);t.default={components:{Page0:l.a,Page1:u.a,Page2:p.a},data:function(){return{tabIndex:-1,cachedPages:[]}},watch:{tabIndex:function(e,t){this.setPageVisibility(),this.handlePageEvent(e,t)}},created:function(){var e=this;this.initTabIndex(),this.$EventService.on("ui-tab-change-a1a2192",function(t){e.tabIndex=t})},methods:{setPageVisibility:function(){var e=this;this.$children.forEach(function(t,i){var a=t.$el.classList;if(a){var n=e.findPageClass(a);n&&e.$nextTick(function(){r()(document.querySelectorAll(n)).forEach(function(t){t.__vue__&&t.__vue__.isDialog||(t.style.visibility=i===e.tabIndex?"visible":"hidden")})})}})},handlePageEvent:function(e,t){var i=this,a=this.$children[e];if(!a.$children)throw new Error("请将ui-page作为页面的根元素");var n=ui.findTabPageInstance(a),o=function(){if(n){n.pageLoad;n.showCustomNavBar=!0,n.isTabBarActive=!0,n.triggerTabLoad(),i.$nextTick(function(){var e=i.$children[t];if(e){var a=ui.findTabPageInstance(e);a.showCustomNavBar=!1,a.isTabBarActive=!1}})}};n?o():window.setTimeout(function(){n=a.$children[0],o()},200)},findPageClass:function(e){for(var t=0;t<e.length;t++)if(e[t].match(/page-\w{6}/))return"."+e[t]},initTabIndex:function(){for(var e=[this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)),t=void 0,i=0;i<e.length;i++)e[i].paths.indexOf(this.$route.path)>-1&&(t=e[i]);t&&t.paths&&(this.tabIndex=t.paths.indexOf(this.$route.path))}}}},174:function(e,t,i){function a(e){i(175),i(176)}var n=i(23)(i(177),i(180),a,null,null);e.exports=n.exports},175:function(e,t){},176:function(e,t){},177:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(96),n=i(178),o=i(33),r=i(45);t.default={components:{UiPage:r.a,UiView:o.a,UiSlider:n.a,UiButton:a.a},config:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},data:function(){return{buttonText:"界面跳转",isShow:!1}},methods:{sliderShow:function(){this.isShow=!0},navHandle:function(){ui.navigateTo({url:"/pages/detail"})}},mounted:function(){setTimeout(function(){ui.closeSplashscreen()},1e3)}}},179:function(e,t,i){"use strict";var a={"pull-down":"pull-down-content","pull-up":"pull-up-content"},n=(Number,Number,String,{"pull-down":"pull-down-content","pull-up":"pull-up-content"}),o={props:{state:{type:Number},translate:{type:Number},type:String},computed:{classes:function(){return n[this.type]}},data:function(){return{turn:null,svg:null,background:null,primary:null,secondary:null,selfTranslate:0}},mounted:function(){this.turn=this.$el.querySelector(".material-progress-circular"),this.svg=this.$el.querySelector(".progress-circular"),this.background=this.$el.querySelector(".progress-circular__background"),this.primary=this.$el.querySelector(".progress-circular__primary"),this.secondary=this.$el.querySelector(".progress-circular__secondary")},watch:{state:function(){this.handleProgress()},translate:function(e){this.handleProgress()}},methods:{handleProgress:function(){if(1===this.state||2===this.state){this.$el.style.webkitTransition="none";var e=Math.abs(this.translate)/84,t=Math.floor(252*e);this.turn.style.transform="rotate("+e+"turn)",t>=252&&(t=252),this.primary.style.strokeDasharray=t+"%, 251.32%",this.primary.style.webkitTransition="none"}else 3===this.state||4===this.state?this.turn.style.tranform="rotate(1turn)":this.primary.style.strokeDasharray="0%, 251.32%"}}},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"material-pull-hook",class:e.classes},[i("div",{staticClass:"pull-hook-progress"},[i("div",{staticClass:"material-progress-circular"},[i("svg",{staticClass:"progress-circular",class:{"progress-circular--indeterminate":e.state>=3}},[i("circle",{staticClass:"progress-circular__background",class:{"progress-circular--indeterminate__background":e.state>=3}}),e._v(" "),i("circle",{staticClass:"progress-circular__secondary",class:{"progress-circular--indeterminate__secondary":e.state>=3},staticStyle:{display:"none"}}),e._v(" "),i("circle",{staticClass:"progress-circular__primary",class:{"progress-circular--indeterminate__primary":e.state>=3}})])])])])},s=[],l={render:r,staticRenderFns:s},c=l,u=i(95),d=u(o,c,!1,null,null,null),p=d.exports,m={"pull-down":{1:"ui.pulldownrefresh.pull",2:"ui.pulldownrefresh.release",3:"ui.pulldownrefresh.refreshing",4:"ui.pulldownrefresh.success",5:"ui.pulldownrefresh.cancel"},"pull-up":{0:"ui.pullupload.pull_load_more",1:"ui.pullupload.pull",2:"ui.pullupload.release",3:"ui.pullupload.refreshing",4:"ui.pullupload.success",5:"ui.pullupload.cancel"}},g={"pull-down":{1:"arrow down",2:"arrow up",3:"loading",4:"none"},"pull-up":{1:"arrow up",2:"arrow down",3:"loading",4:"none"}},f=(String,Number,Number,String,{"pull-down":{1:"ui.pulldownrefresh.pull",2:"ui.pulldownrefresh.release",3:"ui.pulldownrefresh.refreshing",4:"ui.pulldownrefresh.success",5:"ui.pulldownrefresh.cancel"},"pull-up":{0:"ui.pullupload.pull_load_more",1:"ui.pullupload.pull",2:"ui.pullupload.release",3:"ui.pullupload.refreshing",4:"ui.pullupload.success",5:"ui.pullupload.cancel"}}),h={"pull-down":{1:"arrow down",2:"arrow up",3:"loading",4:"none"},"pull-up":{1:"arrow up",2:"arrow down",3:"loading",4:"none"}},v={props:{type:{type:String,default:"pull-down"},state:{type:Number,default:0},translate:{type:Number,default:0},pullStyle:{type:String,default:"ios"}},components:{MaterialPullHook:p},computed:{text:function(){return this.$t(f[this.type][this.state])},contentClasses:function(){return[this.type+"-content"]},iconClasses:function(){return[this.type+"-icon",h[this.type][this.state]]}}},b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return"ios"===e.pullStyle?i("div",{class:e.contentClasses},[i("div",{class:e.iconClasses}),e._v(" "),i("span",[e._v(e._s(e.text))])]):i("material-pull-hook",{attrs:{state:e.state,translate:e.translate,type:e.type}})},y=[],w={render:b,staticRenderFns:y},C=w,x=i(95),_=x(v,C,!1,null,null,null);t.a=_.exports},180:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ui-page",{staticClass:"page-63d9ed"},[e.isShow?i("div",{staticClass:"sliderContent ui-view"},[i("ui-slider",{attrs:{width:"260"}})],1):e._e(),e._v(" "),i("div",{staticClass:"buttonContent ui-view"},[i("ui-button",{attrs:{type:"primary"},nativeOn:{tap:function(t){e.sliderShow(t)}}},[e._v("创建滑动条控件")]),e._v(" "),i("ui-button",{attrs:{type:"primary"},nativeOn:{tap:function(t){e.navHandle(t)}}},[e._v(e._s(e.buttonText))])],1)])},staticRenderFns:[]}},181:function(e,t,i){function a(e){i(182),i(183)}var n=i(23)(i(184),i(192),a,null,null);e.exports=n.exports},182:function(e,t){},183:function(e,t){},184:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(94),n=i(185),o=i(186),r=i(187),s=i(32),l=i(33),c=i(189),u=i(190),d=i(191),p=i(45),m=i(6),g=i.n(m),f=i(44),h=i.n(f);!function(e){function t(e,t,i,a){return"function"==typeof t&&(a=i,i=t,t=void 0),"function"!=typeof i&&(a=i,i=void 0),{url:e,data:t,fnSuc:i,dataType:a}}var i={},a=/android/gi.test(navigator.appVersion),n=function(){var t=e.localStorage;return a&&(t=os.localStorage()),t};i.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},i.trimAll=function(e){return e.replace(/\s*/g,"")},i.isElement=function(e){return!(!e||1!=e.nodeType)},i.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},i.isEmptyObject=function(e){return"{}"===h()(e)},i.addEvt=function(e,t,a,n){if(!i.isElement(e))return void console.warn("$api.addEvt Function need el param, el param must be DOM Element");n=n||!1,e.addEventListener&&e.addEventListener(t,a,n)},i.rmEvt=function(e,t,a,n){if(!i.isElement(e))return void console.warn("$api.rmEvt Function need el param, el param must be DOM Element");n=n||!1,e.removeEventListener&&e.removeEventListener(t,a,n)},i.one=function(e,t,a,n){if(!i.isElement(e))return void console.warn("$api.one Function need el param, el param must be DOM Element");n=n||!1;var o=this,r=function i(){a&&a(),o.rmEvt(e,t,i,n)};o.addEvt(e,t,r,n)},i.dom=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},i.domAll=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},i.byId=function(e){return document.getElementById(e)},i.first=function(e,t){return 1===arguments.length?i.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,t+":first-child"):void 0},i.last=function(e,t){if(1===arguments.length){if(!i.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var a=e.children;return a[a.length-1]}if(2===arguments.length)return this.dom(e,t+":last-child")},i.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},i.not=function(e,t){return this.domAll(e,":not("+t+")")},i.prev=function(e){if(!i.isElement(e))return void console.warn("$api.prev Function need el param, el param must be DOM Element");var t=e.previousSibling;return t.nodeType&&3===t.nodeType?t=t.previousSibling:void 0},i.next=function(e){if(!i.isElement(e))return void console.warn("$api.next Function need el param, el param must be DOM Element");var t=e.nextSibling;return t.nodeType&&3===t.nodeType?t=t.nextSibling:void 0},i.closest=function(e,t){if(!i.isElement(e))return void console.warn("$api.closest Function need el param, el param must be DOM Element");var a,n,o=function(e,t){var i=0,a=e.length;for(i;i<a;i++)if(e[i].isSameNode(t))return e[i];return!1};return function e(t,r){for(a=i.domAll(t.parentNode,r),n=o(a,t);!n;){if(null!=(t=t.parentNode)&&t.nodeType==t.DOCUMENT_NODE)return!1;e(t,r)}return n}(e,t)},i.contains=function(e,t){var i=!1;if(t===e)return i=!0;do{if((t=t.parentNode)===e)return i=!0}while(t===document.body||t===document.documentElement);return i},i.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},i.attr=function(e,t,a){return i.isElement(e)?2==arguments.length?e.getAttribute(t):3==arguments.length?(e.setAttribute(t,a),e):void 0:void console.warn("$api.attr Function need el param, el param must be DOM Element")},i.removeAttr=function(e,t){if(!i.isElement(e))return void console.warn("$api.removeAttr Function need el param, el param must be DOM Element");2===arguments.length&&e.removeAttribute(t)},i.hasCls=function(e,t){return i.isElement(e)?e.className.indexOf(t)>-1:void console.warn("$api.hasCls Function need el param, el param must be DOM Element")},i.addCls=function(e,t){if(!i.isElement(e))return void console.warn("$api.addCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.add(t);else{var a=e.className,n=a+" "+t;e.className=n}return e},i.removeCls=function(e,t){if(!i.isElement(e))return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.remove(t);else{var a=e.className,n=a.replace(t,"");e.className=n}return e},i.toggleCls=function(e,t){return i.isElement(e)?("classList"in e?e.classList.toggle(t):i.hasCls(e,t)?i.removeCls(e,t):i.addCls(e,t),e):void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},i.val=function(e,t){if(!i.isElement(e))return void console.warn("$api.val Function need el param, el param must be DOM Element");if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=t,e;case"INPUT":case"TEXTAREA":return e.value=t,e}},i.prepend=function(e,t){return i.isElement(e)?(e.insertAdjacentHTML("afterbegin",t),e):void console.warn("$api.prepend Function need el param, el param must be DOM Element")},i.append=function(e,t){return i.isElement(e)?(e.insertAdjacentHTML("beforeend",t),e):void console.warn("$api.append Function need el param, el param must be DOM Element")},i.before=function(e,t){return i.isElement(e)?(e.insertAdjacentHTML("beforebegin",t),e):void console.warn("$api.before Function need el param, el param must be DOM Element")},i.after=function(e,t){return i.isElement(e)?(e.insertAdjacentHTML("afterend",t),e):void console.warn("$api.after Function need el param, el param must be DOM Element")},i.html=function(e,t){return i.isElement(e)?1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=t,e):void 0:void console.warn("$api.html Function need el param, el param must be DOM Element")},i.text=function(e,t){return i.isElement(e)?1===arguments.length?e.textContent:2===arguments.length?(e.textContent=t,e):void 0:void console.warn("$api.text Function need el param, el param must be DOM Element")},i.offset=function(e){if(!i.isElement(e))return void console.warn("$api.offset Function need el param, el param must be DOM Element");var t=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),a=Math.max(document.documentElement.scrollTop,document.body.scrollTop),n=e.getBoundingClientRect();return{l:n.left+t,t:n.top+a,w:e.offsetWidth,h:e.offsetHeight}},i.css=function(e,t){if(!i.isElement(e))return void console.warn("$api.css Function need el param, el param must be DOM Element");"string"==typeof t&&t.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+t)},i.cssVal=function(t,a){if(!i.isElement(t))return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");if(2===arguments.length){return e.getComputedStyle(t,null).getPropertyValue(a)}},i.jsonToStr=function(e){if("object"===(void 0===e?"undefined":g()(e)))return JSON&&h()(e)},i.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},i.setStorage=function(e,t){if(2===arguments.length){var i=t;"object"==(void 0===i?"undefined":g()(i))?(i=h()(i),i="obj-"+i):i="str-"+i;var a=n();a&&a.setItem(e,i)}},i.getStorage=function(e){var t=n();if(t){var i=t.getItem(e);if(!i)return;if(0===i.indexOf("obj-"))return i=i.slice(4),JSON.parse(i);if(0===i.indexOf("str-"))return i.slice(4)}},i.rmStorage=function(e){var t=n();t&&e&&t.removeItem(e)},i.clearStorage=function(){var e=n();e&&e.clear()},i.fixIos7Bar=function(e){return i.fixStatusBar(e)},i.fixStatusBar=function(e){return i.isElement(e)?(e.style.paddingTop=api.safeArea.top+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},i.fixTabBar=function(e){return i.isElement(e)?(e.style.paddingBottom=api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},i.toast=function(e,t,i){var a={},n=function(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)};if(1===arguments.length){var i=i||500;"number"==typeof e?i=e:a.title=e+"",n(a,i)}else if(2===arguments.length){var i=i||500,t=t;if("number"==typeof t){var o=t;i=o,t=null}e&&(a.title=e),t&&(a.text=t),n(a,i)}e&&(a.title=e),t&&(a.text=t),i=i||500,n(a,i)},i.post=function(){var e=t.apply(null,arguments),i={},a=e.fnSuc;if(e.url&&(i.url=e.url),e.data&&(i.data=e.data),e.dataType){var n=e.dataType.toLowerCase();"text"!=n&&"json"!=n||(i.dataType=n)}else i.dataType="json";i.method="post",api.ajax(i,function(e,t){e&&a&&a(e)})},i.get=function(){var e=t.apply(null,arguments),i={},a=e.fnSuc;if(e.url&&(i.url=e.url),e.dataType){var n=e.dataType.toLowerCase();"text"!=n&&"json"!=n||(i.dataType=n)}else i.dataType="text";i.method="get",api.ajax(i,function(e,t){e&&a&&a(e)})},e.$api=i}(window);t.default={components:{UiPage:p.a,UiFixedView:d.a,UiPopIcon:u.a,UiPopIconItem:c.a,UiView:l.a,UiIcon:s.a,UiExSwiper:r.a,UiExSwiperItem:o.a,UiVideo:n.a,UiText:a.a},config:{navigationBarTitleText:"视频商品列表",disableScroll:!0},data:function(){return{page:0,videoList:[{uid:(new Date).getTime()+1,imageUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/bc281dfcaf750de7acd9c8e9224e237b.png",videoUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/abb9595e74647defe21d748e12f7a7c9.mp4"},{uid:(new Date).getTime()+2,imageUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/1a73dd6a90a52b2aad1aafefbf977e4c.png",videoUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/00b2141bff87cfaa75498f66214aeb9e.mp4"},{uid:(new Date).getTime()+3,imageUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/ec65083dbdc6bb18a6318591ac6c15a5.png",videoUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/9d9906ba474152307d7edca6bd72fbe2.mp4"},{uid:(new Date).getTime()+4,imageUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png",videoUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/dc811d2c4d88b409063c7ea2065fe6a0.mp4"},{uid:(new Date).getTime()+5,imageUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png",videoUrl:"http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/dc811d2c4d88b409063c7ea2065fe6a0.mp4"}],toView:"video0",scrollTop:0,tabCss:{height:"px","flex-direction":"column"},startX:"",startY:"",share:"share",playing:!0,systemInfo:{},bottom:30,toggle:!1,headerHeight:"",offsetX:ui.WIN_HEIGHT/2-24,thisTop:window.innerHeight,canClick:!0,toggleicon:"togglebtn"}},methods:{togglepopicon:function(){var e=this;this.toggle?this.canClick&&(this.share="share",this.canClick=!1,this.toggle=!1):this.canClick&&(this.canClick=!1,this.share="error",this.toggle=!0,this.hideOnTap=!1,setTimeout(function(){e.canClick=!0,e.hideOnTap=!0},700))},dismiss:function(){this.canClick&&(this.canClick=!1,this.toggle=!1)},maskhide:function(){this.canClick=!0,this.toggle=!1},getSystemInfo:function(){var e=this;ui.getSystemInfo({success:function(t){e.systemInfo=t,e.tabCss.height=t.windowHeight+"px",e.headerHeight=t.screenHeight-t.windowHeight+"px"}})},swipeChange:function(e){console.log(e),0==this.playing?(ui.createVideoContext(this.videoList[e].uid).play(),this.playing=!0):(ui.createVideoContext(this.videoList[e].uid).pause(),this.playing=!1)},swipeStart:function(e){console.log(e),ui.createVideoContext(this.videoList[this.page].uid).pause(),this.page=e,ui.createVideoContext(this.videoList[e].uid).play(),this.playing=!0}},mounted:function(){},created:function(){this.getSystemInfo(),ui.createVideoContext(this.videoList[0].uid).play()}}},188:function(e,t){},192:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ui-page",{staticClass:"page-e4cd19"},[i("ui-fixed-view",{staticClass:"page-e4cd19",staticStyle:{"z-index":"1000"},attrs:{top:"0"}},[i("ui-pop-icon",{staticClass:"pop-icon-demo2",attrs:{"mask-hide-delay":"300","hide-on-tap":!0,blur:"dark",left:e.offsetX,bottom:"50",animate:"none"},on:{hide:e.dismiss,maskhide:e.maskhide},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}},[i("ui-pop-icon-item",{attrs:{"item-color":"#ff6767",top:"-132",left:"-57.75"}},[i("div",{staticClass:"icon_view ui-view"},[i("ui-icon",{attrs:{type:"google"}})],1)]),e._v(" "),i("ui-pop-icon-item",{attrs:{"item-color":"#599de9",top:"-110",left:"-107.75"}},[i("div",{staticClass:"icon_view ui-view"},[i("ui-icon",{attrs:{type:"twitter"}})],1)]),e._v(" "),i("ui-pop-icon-item",{attrs:{"item-color":"#fd9d21",top:"-59",left:"-128"}},[i("div",{staticClass:"icon_view ui-view"},[i("ui-icon",{attrs:{type:"Google"}})],1)]),e._v(" "),i("ui-pop-icon-item",{attrs:{"item-color":"#f9dc66",top:"3",left:"-107.75"}},[i("div",{staticClass:"icon_view ui-view"},[i("ui-icon",{attrs:{type:"facebook"}})],1)]),e._v(" "),i("ui-pop-icon-item",{attrs:{"item-color":"#4dc6ee",top:"25",left:"-57.75"}},[i("div",{staticClass:"icon_view ui-view"},[i("ui-icon",{attrs:{type:"ins"}})],1)])],1)],1),e._v(" "),i("ui-fixed-view",{staticClass:"page-e4cd19",staticStyle:{"z-index":"1000"},attrs:{right:"10",bottom:"120"}},[i("div",{class:["togglebtn",e.toggleicon,"ui-view"],on:{tap:e.togglepopicon}},[i("ui-icon",{attrs:{type:e.share,color:"#fff",size:"24"}})],1)]),e._v(" "),i("ui-fixed-view",{staticClass:"page-e4cd19",staticStyle:{"z-index":"999"},attrs:{right:"10",bottom:"240"}},[i("div",{staticClass:"btnbox ui-view"},[i("ui-icon",{attrs:{type:"sell",size:"24"}})],1)]),e._v(" "),i("div",{staticClass:"content ui-view"},[i("ui-ex-swiper",{style:e.tabCss,attrs:{vertical:""},on:{itemtap:e.swipeChange,changestart:e.swipeStart}},e._l(e.videoList,function(t,a){return i("ui-ex-swiper-item",{key:a,staticClass:"flex-item",attrs:{id:"video"+a}},[i("ui-video",{attrs:{id:t.uid,src:t.videoUrl,poster:t.imageUrl,controls:!1,autoplay:!1,loop:!0,direction:"0","show-fullscreen-btn":!1,"show-play-btn":!1,"enable-progress-gesture":!1,objectfit:"cover"}}),e._v(" "),i("div",{staticClass:"sample_content ui-view",style:e.headerHeight},[i("ui-text",{staticStyle:{display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"3",overflow:"hidden"}},[e._v("一对好基友孟云（韩庚 饰）和余飞（郑恺 饰）跟女友都因为一点小事宣告分手，并且“拒绝挽回，死不认错”。两人在夜店、派对与交友软件上放飞人生第二春，大肆庆祝“黄金单身期”，从而引发了一系列好笑的故事。孟云与女友同甘共苦却难逃“五年之痒”，余飞与女友则棋逢敌手相爱相杀无绝期。然而现实的“打脸”却来得猝不及防：一对推拉纠结零往来，一对纠缠互怼全交代。两对恋人都将面对最终的选择：是再次相见？还是再也不见？\n    ")])],1)],1)}))],1)],1)},staticRenderFns:[]}},193:function(e,t,i){function a(e){i(194),i(195)}var n=i(23)(i(196),i(198),a,null,null);e.exports=n.exports},194:function(e,t){},195:function(e,t){},196:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(67),n=i(33),o=i(32),r=i(92),s=i(93),l=i(64),c=i(45);t.default={components:{UiPage:c.a,UiNavBar:l.a,UiRow:s.a,UiCol:r.a,UiIcon:o.a,UiView:n.a,UiImage:a.a},config:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},data:function(){return{portraitUrl:i(197)}},methods:{}}},197:function(e,t,i){e.exports=i.p+"static/img/portrait_bg.d8ab821.png"},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ui-page",{staticClass:"page-85c7f1"},[i("ui-nav-bar",{staticClass:"nav_bar page-85c7f1",slot:"nav-bar"},[i("div",{staticClass:"ui-row",style:{height:"46px"},attrs:{height:"46"}},[i("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 50px"}},[i("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[i("ui-icon",{attrs:{name:"ring",size:"24",color:"#fff"}})],1)]),e._v(" "),i("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{}},[i("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[i("div",{staticClass:"nav_title ui-view"},[e._v("我的")])])]),e._v(" "),i("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 50px"}},[i("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"46px"}},[i("ui-icon",{attrs:{name:"setting",size:"24",color:"#fff"}})],1)])])]),e._v(" "),i("div",{staticClass:"user_content ui-view"},[i("div",{staticClass:"header_top ui-row",style:{height:"150px"},attrs:{height:"150"}},[i("div",{staticClass:"ui-col ui-col-align-center align-center valign-middle",style:{flex:"0 0 90px"}},[i("div",{staticClass:"ui-col-content align-center valign-middle",staticStyle:{height:"150px"}},[i("div",{staticClass:"head_portrait ui-view"}),e._v(" "),i("ui-image",{staticClass:"head_portrait",attrs:{src:e.portraitUrl,mode:"aspectFill",width:"60",height:"60"}})],1)]),e._v(" "),i("div",{staticClass:"ui-col ui-col-align-left align-left valign-middle",style:{}},[i("div",{staticClass:"ui-col-content align-left valign-middle",staticStyle:{height:"150px"}},[i("div",{staticClass:"login ui-view"},[e._v("立即登录")]),e._v(" "),i("div",{staticClass:"login_after ui-view"},[e._v("登录后可享受更多特权")])])]),e._v(" "),i("div",{staticClass:"ui-col ui-col-align-right align-right valign-middle",style:{"padding-right":"15px",flex:"0 0 50px"}},[i("div",{staticClass:"ui-col-content align-right valign-middle",staticStyle:{height:"150px"}},[i("ui-icon",{attrs:{name:"arrow-right",size:"18",color:"#fff"}})],1)])])])],1)},staticRenderFns:[]}},199:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ui-tab-page-container page-4423c5"},[i("Page0",{staticClass:"ui-tab-page",class:{visible:0===e.tabIndex}}),e._v(" "),i("Page1",{staticClass:"ui-tab-page",class:{visible:1===e.tabIndex}}),e._v(" "),i("Page2",{staticClass:"ui-tab-page",class:{visible:2===e.tabIndex}})],1)},staticRenderFns:[]}},203:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="},204:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="},66:function(e,t,i){function a(e){i(171),i(172)}var n=i(23)(i(173),i(199),a,null,null);e.exports=n.exports},97:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(98),n=i(162),o=i.n(n),r={app:o.a},s={};s.routes=[{path:"/pages/index",meta:{pageConfig:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},pageClass:"page-63d9ed",isTabBar:!0},component:i(66)},{path:"/pages/video_list",meta:{pageConfig:{navigationBarTitleText:"视频商品列表",disableScroll:!0},pageClass:"page-e4cd19",isTabBar:!0},component:i(66)},{path:"/pages/user",meta:{pageConfig:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},pageClass:"page-85c7f1",isTabBar:!0},component:i(66)},{path:"*",component:function(e){i.e(0).then(function(){var t=[i(206)];e.apply(null,t)}.bind(this)).catch(i.oe)},meta:{pageConfig:{navigationBarTitleText:"404",delay:!1,disableScroll:!0}}},{path:"/touch-ui-start-page",component:i(200).default},{path:"/",redirect:"/pages/index"},{path:"/pages/detail",meta:{pageConfig:{navigationBarTitleText:"详情"},pageClass:"page-1d7f06",isTabBar:!1},component:function(){return i.e(1).then(i.bind(null,207))}}],s.debug=void 0,s.window={scrollType:"div",navigationBarBackgroundColor:"#ffffff",navigationBarTextStyle:"black",navigationBarBorderColor:"rgba(231, 231, 231, 0.6)"},s.theme={"theme-color":"#3399ff"},s.template=void 0,s.tabBar={groupId:"a1a2192",paths:["/pages/index","/pages/video_list","/pages/user"],position:"undefined",color:"#7a7e83",selectedColor:"#39f",borderColor:"rgba(231, 231, 231, 0.6)",backgroundColor:"#fff",list:[{text:"首页",pagePath:"/pages/index",pageConfig:{navigationBarTitleText:"首页",backgroundColor:"#F4F4F4",navigationBarTextStyle:"black"},iconName:"home"},{text:"商品介绍",pagePath:"/pages/video_list",pageConfig:{navigationBarTitleText:"视频商品列表",disableScroll:!0},iconName:"product"},{text:"我的",pagePath:"/pages/user",pageConfig:{navigationStyle:"custom",navigationBarTextStyle:"white",backgroundColor:"#F4F4F4"},iconName:"user"}]},s.pageTabBars=[],a.a.start(r,s)}},[97]);