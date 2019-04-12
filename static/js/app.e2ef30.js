webpackJsonp([4], {
    156: function(e, t) {
        e.exports = {
            "zh-cn": {
                "ui.alert.button_text": "确定",
                "ui.confirm.confirm_text": "确定",
                "ui.confirm.cancel_text": "取消",
                "ui.prompt.confirm_text": "确定",
                "ui.prompt.cancel_text": "取消",
                "ui.picker.confirm_text": "确定",
                "ui.picker.cancel_text": "取消",
                "ui.actionsheet.cancel_text": "取消",
                "ui.loading.text": "加载中...",
                "ui.cascader.loading_text": "加载中",
                "ui.cascader.please_select": "请选择",
                "ui.keyboard.space_text": "空格",
                "ui.keyboard.complete_text": "完成",
                "ui.countdown.done_text": "已结束",
                "ui.requeststatus.loading": "加载中...",
                "ui.requeststatus.nomore": "没有更多了...",
                "ui.requeststatus.offline": "网络异常，点击刷新",
                "ui.requeststatus.timeout": "请求超时，点击刷新",
                "ui.requeststatus.error": "请求失败，点击刷新",
                "ui.requeststatus.empty": "没有数据，点击刷新",
                "ui.pulldownrefresh.pull": "下拉刷新",
                "ui.pulldownrefresh.release": "释放刷新",
                "ui.pulldownrefresh.refreshing": "正在刷新...",
                "ui.pulldownrefresh.success": "刷新成功",
                "ui.pulldownrefresh.cancel": "取消下拉",
                "ui.pullupload.pull_load_more": "上拉加载更多",
                "ui.pullupload.pull": "上拉加载",
                "ui.pullupload.release": "释放加载",
                "ui.pullupload.refreshing": "正在加载...",
                "ui.pullupload.success": "加载成功",
                "ui.pullupload.cancel": "取消加载",
                "ui.smscode.getcode": "获取短信验证码",
                "ui.smscode.run": "{%s}秒后重新获取",
                "ui.smscode.reset": "重新获取验证码",
                "ui.smscode.placeholder": "请输入验证码",
                "ui.table.request_failed": "请求失败",
                "ui.table.refresh": "刷新",
                "ui.table.timeout": "网络超时",
                "ui.table.offline": "网络无法连接，请检查您的网络",
                "ui.table.empty": "结果为空",
                "ui.table.need_login": "请先登录",
                "ui.table.loading": "正在加载...",
                "ui.cascader.select": "请选择",
                "ui.calendar.head": "日 一 二 三 四 五 六",
                "ui.calendar.yearsplit": "年",
                "ui.calendar.monthsplit": "月",
                "ui.countdown.over": "已结束"
            },
            en: {
                "ui.alert.button_text": "OK",
                "ui.confirm.confirm_text": "Confirm",
                "ui.confirm.cancel_text": "Cancel",
                "ui.prompt.confirm_text": "Confirm",
                "ui.prompt.cancel_text": "Cancel",
                "ui.picker.confirm_text": "Confirm",
                "ui.picker.cancel_text": "Cancel",
                "ui.actionsheet.cancel_text": "Cancel",
                "ui.loading.text": "Loading...",
                "ui.cascader.loading_text": "Loading",
                "ui.cascader.please_select": "Please select",
                "ui.keyboard.space_text": "Space",
                "ui.keyboard.complete_text": "Complete",
                "ui.countdown.done_text": "Done",
                "ui.requeststatus.loading": "Loading...",
                "ui.requeststatus.nomore": "No more data...",
                "ui.requeststatus.offline": "Network error, tap to refresh",
                "ui.requeststatus.timeout": "Network error, tap to refresh",
                "ui.requeststatus.error": "Request failed, tap to refresh",
                "ui.requeststatus.empty": "No data, tap to refresh",
                "ui.pulldownrefresh.pull": "Pull refresh",
                "ui.pulldownrefresh.release": "Release to refresh",
                "ui.pulldownrefresh.refreshing": "Refreshing...",
                "ui.pulldownrefresh.success": "Refresh success",
                "ui.pulldownrefresh.cancel": "Cancel pull",
                "ui.pullupload.pull_load_more": "Pull to load more",
                "ui.pullupload.pull": "Pull load",
                "ui.pullupload.release": "Release to load",
                "ui.pullupload.refreshing": "Loading...",
                "ui.pullupload.success": "Load success",
                "ui.pullupload.cancel": "Cancel load",
                "ui.smscode.getcode": "Get code",
                "ui.smscode.run": "{%s} seconds",
                "ui.smscode.reset": "Reset",
                "ui.smscode.placeholder": "Please input code",
                "ui.table.request_failed": "Request failed",
                "ui.table.refresh": "Refresh",
                "ui.table.timeout": "Timeout",
                "ui.table.offline": "Can't connect to network",
                "ui.table.empty": "No results",
                "ui.table.need_login": "Please login first",
                "ui.table.loading": "Loading...",
                "ui.cascader.select": "Please Select",
                "ui.calendar.head": "Sun Mon Tue Wen Thu Fri Sat",
                "ui.calendar.yearsplit": "/",
                "ui.calendar.monthsplit": "",
                "ui.countdown.over": "Time's up"
            }
        }
    },
    163: function(e, t, a) {
        function i(e) {
            a(164), a(166)
        }
        var n = a(22)(a(167), a(172), i, null, null);
        e.exports = n.exports
    },
    164: function(e, t) {},
    166: function(e, t) {},
    167: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(20),
            n = a.n(i),
            o = a(14),
            s = a.n(o),
            r = a(168),
            l = a(30),
            c = a(93),
            u = a(94),
            d = a(64),
            p = a(95),
            m = a(169),
            h = a(31),
            f = a(171);
        a.n(f);
        ! function(e, t, a) {
            var i, n = e.getElementsByTagName(t)[0];
            e.getElementById(a) || (i = e.createElement(t), i.id = a, i.src = "https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v2.12&appId=2260718420859070&autoLogAppEvents=1", n.parentNode.insertBefore(i, n))
        }(document, "script", "facebook-jssdk"), t.default = {
            components: {
                UiView: h.a,
                UiSlideMenu: m.a,
                UiText: p.a,
                UiNavBar: d.a,
                UiRow: u.a,
                UiCol: c.a,
                UiIcon: l.a,
                UiTabBar: r.a
            },
            config: {
                pages: ["pages/video_list", "pages/index", "pages/detail"],
                theme: {
                    "theme-color": "#3399ff"
                },
                window: {
                    scrollType: "window",
                    navigationBarBackgroundColor: "#ffffff",
                    navigationBarTextStyle: "black",
                    navigationBarBorderColor: "rgba(231, 231, 231, 0.6)"
                },
                tabBar: {
                    id: "foot",
                    color: "#7a7e83",
                    selectedColor: "#39f",
                    borderColor: "rgba(231, 231, 231, 0.6)",
                    backgroundColor: "#fff",
                    list: [{
                        id: "video",
                        pagePath: "pages/video_list",
                        iconName: "product",
                        text: "商品介绍"
                    }, {
                        id: "home",
                        pagePath: "pages/index",
                        iconName: "home",
                        text: "首页"
                    }, {
                        id: "my",
                        pagePath: "pages/user",
                        iconName: "user",
                        text: "我的"
                    }]
                },
                networkBaseUrl: ""
            },
            data: function() {
                return {
                    globalData: {
                        page: 0,
                        videoList: [{
                            uid: (new Date).getTime(),
                            imageUrl: "",
                            videoUrl: "http://ppu6dk2m3.bkt.clouddn.com/test.mp4",
                            ISfirstPlay: !0
                        }, {
                            uid: (new Date).getTime() + 1,
                            imageUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/bc281dfcaf750de7acd9c8e9224e237b.png",
                            videoUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/abb9595e74647defe21d748e12f7a7c9.mp4",
                            ISfirstPlay: !0
                        }, {
                            uid: (new Date).getTime() + 2,
                            imageUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/1a73dd6a90a52b2aad1aafefbf977e4c.png",
                            videoUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/00b2141bff87cfaa75498f66214aeb9e.mp4",
                            ISfirstPlay: !0
                        }, {
                            uid: (new Date).getTime() + 3,
                            imageUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/ec65083dbdc6bb18a6318591ac6c15a5.png",
                            videoUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/9d9906ba474152307d7edca6bd72fbe2.mp4",
                            ISfirstPlay: !0
                        }, {
                            uid: (new Date).getTime() + 4,
                            imageUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png",
                            videoUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/dc811d2c4d88b409063c7ea2065fe6a0.mp4",
                            ISfirstPlay: !0
                        }, {
                            uid: (new Date).getTime() + 5,
                            imageUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/51fc1ddde9790c96a6986b74342a15e3.png",
                            videoUrl: "http://7z2dc9.com1.z0.glb.clouddn.com/apicloud/dc811d2c4d88b409063c7ea2065fe6a0.mp4",
                            ISfirstPlay: !0
                        }]
                    },
                    WIN_WIDTH: ui.WIN_WIDTH,
                    tabIndex: 0,
                    tabBarList: [],
                    navStyle: {},
                    tabBar: {},
                    tabBarHeight: 56,
                    isApp: ui.IS_APP,
                    headerHeight: ui.DEFAULT_HEADER_HEIGHT,
                    paths: [],
                    barHeight: ui.STATUS_BAR_HEIGHT,
                    showSlideMenu: !1
                }
            },
            computed: {
                navigationBarVisible: function() {
                    return "custom" !== this.winConfig.navigationStyle
                },
                showBack: function() {
                    var e = this.paths[0];
                    return this.tabBar && this.tabBar.paths ? this.tabBar.paths.indexOf(e) < 0 : e !== this.$route.path
                },
                winConfig: function() {
                    var e = this.$router.options.window,
                        t = s()({}, e, this.pageConfig),
                        a = t.navigationBarTextStyle || "white",
                        i = document.body.getAttribute("scroll-type");
                        console.log(ui.getSafeAreaInsetTop());
                    return this.navStyle = {
                        paddingTop: ui.getSafeAreaInsetTop() + "px",
                        backgroundColor: t.navigationBarBackgroundColor,
                        color: a,
                        borderBottom: "1px solid " + t.navigationBarBorderColor,
                        backgroundImage: t.navigationBarBackgroundGradient,
                        position: "body" === i ? "fixed" : "absolute"
                    }, console.error(this.navStyle.paddingTop), this.navStyle.backgroundColor && (this.navStyle.backgroundImage = "none"), t.navigationBarBorderColor ? this.navStyle.borderBottom = "1px solid " + t.navigationBarBorderColor : this.navStyle.borderBottom = "0", t
                },
                isTabBar: function() {
                    return this.tabBarList && this.tabBarList.length > 0
                },
                tabBarStyle: function() {
                    var e = {};
                    this.navigationBarVisible && "top" === this.tabBar.position && (e.top = this.headerHeight + "px");
                    var t = document.body.getAttribute("scroll-type");
                    return e.position = "body" === t ? "fixed" : "absolute", e
                },
                bottom: function() {
                    return this.isTabBar ? this.tabBarHeight + "px" : 0
                },
                pageConfig: function() {
                    return this.isTabBar ? this.tabBarList[this.tabIndex].pageConfig : this.$route.meta.pageConfig || window.__$uiPageConfig
                }
            },
            watch: {
                "$route.path": function(e) {
                    this.handleIosGesture(), this.initTab(), this.initBodyStyle()
                }
            },
            created: function() {
                var e = this;
                this.initTab(), this.initPaths(), this.$nextTick(function() {
                    e.handleIosGesture()
                })
            },
            methods: {
                handleNavIconTap: function() {
                    this.showSlideMenu = !this.showSlideMenu
                },
                initTab: function() {
                    this.tabBar = this.getTabBar(), this.tabBarList = this.tabBar.list, this.tabBar.paths && (this.tabIndex = this.tabBar.paths.indexOf(this.$route.path))
                },
                initPaths: function() {
                    var e = this.$router.options.routes;
                    this.paths = e.map(function(e) {
                        return e.path
                    })
                },
                initBodyStyle: function() {
                    this.winConfig && this.winConfig.backgroundColor && (document.body.style.backgroundColor = this.winConfig.backgroundColor)
                },
                handleIosGesture: function() {
                    ui.IS_IOS && ui.setPagePopGesture && ui.setPagePopGesture({
                        openPagePopGesture: !this.pageConfig.disableIosGesture
                    })
                },
                handleTabBeforeChange: function(e) {
                    var t = (e.id, e.index),
                        a = e.next;
                    0 == t && (console.log(this.globalData.page), ui.createVideoContext(this.globalData.videoList[this.globalData.page].uid).pause()), a()
                },
                handleTabChange: function(e) {
                    e.id;
                    0 == e.index && ui.createVideoContext(this.globalData.videoList[this.globalData.page].uid).play()
                },
                handleBack: function() {
                    ui.navigateBack()
                },
                getTabBar: function() {
                    console.log(this.tabBar);
                    for (var e = [this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)), t = 0; t < e.length; t++)
                        if (e[t].paths && e[t].paths.indexOf(this.$route.path) > -1) return e[t];
                    return {}
                }
            },
            mounted: function() {}
        }
    },
    171: function(e, t) {
        ! function(e) {
            function t(e, t, a, i) {
                return "function" == typeof t && (i = a, a = t, t = void 0), "function" != typeof a && (i = a, a = void 0), {
                    url: e,
                    data: t,
                    fnSuc: a,
                    dataType: i
                }
            }
            var a = {},
                i = /android/gi.test(navigator.appVersion),
                n = function() {
                    var t = e.localStorage;
                    return i && (t = os.localStorage()), t
                };
            a.trim = function(e) {
                return String.prototype.trim ? null == e ? "" : String.prototype.trim.call(e) : e.replace(/(^\s*)|(\s*$)/g, "")
            }, a.trimAll = function(e) {
                return e.replace(/\s*/g, "")
            }, a.isElement = function(e) {
                return !(!e || 1 != e.nodeType)
            }, a.isArray = function(e) {
                return Array.isArray ? Array.isArray(e) : e instanceof Array
            }, a.isEmptyObject = function(e) {
                return "{}" === JSON.stringify(e)
            }, a.addEvt = function(e, t, i, n) {
                if (!a.isElement(e)) return void console.warn("$api.addEvt Function need el param, el param must be DOM Element");
                n = n || !1, e.addEventListener && e.addEventListener(t, i, n)
            }, a.rmEvt = function(e, t, i, n) {
                if (!a.isElement(e)) return void console.warn("$api.rmEvt Function need el param, el param must be DOM Element");
                n = n || !1, e.removeEventListener && e.removeEventListener(t, i, n)
            }, a.one = function(e, t, i, n) {
                if (!a.isElement(e)) return void console.warn("$api.one Function need el param, el param must be DOM Element");
                n = n || !1;
                var o = this,
                    s = function() {
                        i && i(), o.rmEvt(e, t, s, n)
                    };
                o.addEvt(e, t, s, n)
            }, a.dom = function(e, t) {
                if (1 === arguments.length && "string" == typeof arguments[0]) {
                    if (document.querySelector) return document.querySelector(arguments[0])
                } else if (2 === arguments.length && e.querySelector) return e.querySelector(t)
            }, a.domAll = function(e, t) {
                if (1 === arguments.length && "string" == typeof arguments[0]) {
                    if (document.querySelectorAll) return document.querySelectorAll(arguments[0])
                } else if (2 === arguments.length && e.querySelectorAll) return e.querySelectorAll(t)
            }, a.byId = function(e) {
                return document.getElementById(e)
            }, a.first = function(e, t) {
                return 1 === arguments.length ? a.isElement(e) ? e.children[0] : void console.warn("$api.first Function need el param, el param must be DOM Element") : 2 === arguments.length ? this.dom(e, t + ":first-child") : void 0
            }, a.last = function(e, t) {
                if (1 === arguments.length) {
                    if (!a.isElement(e)) return void console.warn("$api.last Function need el param, el param must be DOM Element");
                    var i = e.children;
                    return i[i.length - 1]
                }
                if (2 === arguments.length) return this.dom(e, t + ":last-child")
            }, a.eq = function(e, t) {
                return this.dom(e, ":nth-child(" + t + ")")
            }, a.not = function(e, t) {
                return this.domAll(e, ":not(" + t + ")")
            }, a.prev = function(e) {
                if (!a.isElement(e)) return void console.warn("$api.prev Function need el param, el param must be DOM Element");
                var t = e.previousSibling;
                return t.nodeType && 3 === t.nodeType ? t = t.previousSibling : void 0
            }, a.next = function(e) {
                if (!a.isElement(e)) return void console.warn("$api.next Function need el param, el param must be DOM Element");
                var t = e.nextSibling;
                return t.nodeType && 3 === t.nodeType ? t = t.nextSibling : void 0
            }, a.closest = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.closest Function need el param, el param must be DOM Element");
                var i, n, o = function(e, t) {
                        var a = 0,
                            i = e.length;
                        for (a; a < i; a++)
                            if (e[a].isSameNode(t)) return e[a];
                        return !1
                    },
                    s = function(e, t) {
                        for (i = a.domAll(e.parentNode, t), n = o(i, e); !n;) {
                            if (null != (e = e.parentNode) && e.nodeType == e.DOCUMENT_NODE) return !1;
                            s(e, t)
                        }
                        return n
                    };
                return s(e, t)
            }, a.contains = function(e, t) {
                var a = !1;
                if (t === e) return a = !0;
                do {
                    if ((t = t.parentNode) === e) return a = !0
                } while (t === document.body || t === document.documentElement);
                return a
            }, a.remove = function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, a.attr = function(e, t, i) {
                return a.isElement(e) ? 2 == arguments.length ? e.getAttribute(t) : 3 == arguments.length ? (e.setAttribute(t, i), e) : void 0 : void console.warn("$api.attr Function need el param, el param must be DOM Element")
            }, a.removeAttr = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.removeAttr Function need el param, el param must be DOM Element");
                2 === arguments.length && e.removeAttribute(t)
            }, a.hasCls = function(e, t) {
                return a.isElement(e) ? e.className.indexOf(t) > -1 : void console.warn("$api.hasCls Function need el param, el param must be DOM Element")
            }, a.addCls = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.addCls Function need el param, el param must be DOM Element");
                if ("classList" in e) e.classList.add(t);
                else {
                    var i = e.className,
                        n = i + " " + t;
                    e.className = n
                }
                return e
            }, a.removeCls = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");
                if ("classList" in e) e.classList.remove(t);
                else {
                    var i = e.className,
                        n = i.replace(t, "");
                    e.className = n
                }
                return e
            }, a.toggleCls = function(e, t) {
                return a.isElement(e) ? ("classList" in e ? e.classList.toggle(t) : a.hasCls(e, t) ? a.removeCls(e, t) : a.addCls(e, t), e) : void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")
            }, a.val = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.val Function need el param, el param must be DOM Element");
                if (1 === arguments.length) switch (e.tagName) {
                    case "SELECT":
                        return e.options[e.selectedIndex].value;
                    case "INPUT":
                    case "TEXTAREA":
                        return e.value
                }
                if (2 === arguments.length) switch (e.tagName) {
                    case "SELECT":
                        return e.options[e.selectedIndex].value = t, e;
                    case "INPUT":
                    case "TEXTAREA":
                        return e.value = t, e
                }
            }, a.prepend = function(e, t) {
                return a.isElement(e) ? (e.insertAdjacentHTML("afterbegin", t), e) : void console.warn("$api.prepend Function need el param, el param must be DOM Element")
            }, a.append = function(e, t) {
                return a.isElement(e) ? (e.insertAdjacentHTML("beforeend", t), e) : void console.warn("$api.append Function need el param, el param must be DOM Element")
            }, a.before = function(e, t) {
                return a.isElement(e) ? (e.insertAdjacentHTML("beforebegin", t), e) : void console.warn("$api.before Function need el param, el param must be DOM Element")
            }, a.after = function(e, t) {
                return a.isElement(e) ? (e.insertAdjacentHTML("afterend", t), e) : void console.warn("$api.after Function need el param, el param must be DOM Element")
            }, a.html = function(e, t) {
                return a.isElement(e) ? 1 === arguments.length ? e.innerHTML : 2 === arguments.length ? (e.innerHTML = t, e) : void 0 : void console.warn("$api.html Function need el param, el param must be DOM Element")
            }, a.text = function(e, t) {
                return a.isElement(e) ? 1 === arguments.length ? e.textContent : 2 === arguments.length ? (e.textContent = t, e) : void 0 : void console.warn("$api.text Function need el param, el param must be DOM Element")
            }, a.offset = function(e) {
                if (!a.isElement(e)) return void console.warn("$api.offset Function need el param, el param must be DOM Element");
                var t = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                    i = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                    n = e.getBoundingClientRect();
                return {
                    l: n.left + t,
                    t: n.top + i,
                    w: e.offsetWidth,
                    h: e.offsetHeight
                }
            }, a.css = function(e, t) {
                if (!a.isElement(e)) return void console.warn("$api.css Function need el param, el param must be DOM Element");
                "string" == typeof t && t.indexOf(":") > 0 && e.style && (e.style.cssText += ";" + t)
            }, a.cssVal = function(t, i) {
                if (!a.isElement(t)) return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");
                if (2 === arguments.length) {
                    return e.getComputedStyle(t, null).getPropertyValue(i)
                }
            }, a.jsonToStr = function(e) {
                if ("object" == typeof e) return JSON && JSON.stringify(e)
            }, a.strToJson = function(e) {
                if ("string" == typeof e) return JSON && JSON.parse(e)
            }, a.setStorage = function(e, t) {
                if (2 === arguments.length) {
                    var a = t;
                    "object" == typeof a ? (a = JSON.stringify(a), a = "obj-" + a) : a = "str-" + a;
                    var i = n();
                    i && i.setItem(e, a)
                }
            }, a.getStorage = function(e) {
                var t = n();
                if (t) {
                    var a = t.getItem(e);
                    if (!a) return;
                    if (0 === a.indexOf("obj-")) return a = a.slice(4), JSON.parse(a);
                    if (0 === a.indexOf("str-")) return a.slice(4)
                }
            }, a.rmStorage = function(e) {
                var t = n();
                t && e && t.removeItem(e)
            }, a.clearStorage = function() {
                var e = n();
                e && e.clear()
            }, a.fixIos7Bar = function(e) {
                return a.fixStatusBar(e)
            }, a.fixStatusBar = function(e) {
                return a.isElement(e) ? (e.style.paddingTop = api.safeArea.top + "px", e.offsetHeight) : (console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"), 0)
            }, a.fixTabBar = function(e) {
                return a.isElement(e) ? (e.style.paddingBottom = api.safeArea.bottom + "px", e.offsetHeight) : (console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"), 0)
            }, a.toast = function(e, t, a) {
                var i = {},
                    n = function(e, t) {
                        api.showProgress(e), setTimeout(function() {
                            api.hideProgress()
                        }, t)
                    };
                if (1 === arguments.length) {
                    var a = a || 500;
                    "number" == typeof e ? a = e : i.title = e + "", n(i, a)
                } else if (2 === arguments.length) {
                    var a = a || 500,
                        t = t;
                    if ("number" == typeof t) {
                        var o = t;
                        a = o, t = null
                    }
                    e && (i.title = e), t && (i.text = t), n(i, a)
                }
                e && (i.title = e), t && (i.text = t), a = a || 500, n(i, a)
            }, a.post = function() {
                var e = t.apply(null, arguments),
                    a = {},
                    i = e.fnSuc;
                if (e.url && (a.url = e.url), e.data && (a.data = e.data), e.dataType) {
                    var n = e.dataType.toLowerCase();
                    "text" != n && "json" != n || (a.dataType = n)
                } else a.dataType = "json";
                a.method = "post", api.ajax(a, function(e, t) {
                    e && i && i(e)
                })
            }, a.get = function() {
                var e = t.apply(null, arguments),
                    a = {},
                    i = e.fnSuc;
                if (e.url && (a.url = e.url), e.dataType) {
                    var n = e.dataType.toLowerCase();
                    "text" != n && "json" != n || (a.dataType = n)
                } else a.dataType = "text";
                a.method = "get", api.ajax(a, function(e, t) {
                    e && i && i(e)
                })
            }, e.$api = a
        }(window)
    },
    172: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "ui-view",
                    attrs: {
                        id: "ui-app"
                    }
                }, [a("div", {
                    staticClass: "iphonex-top ui-view"
                }), e._v(" "), a("ui-slide-menu", {
                    attrs: {
                        width: "280",
                        threshold: "30",
                        touch: e.pageConfig.touchSlideMenu
                    },
                    model: {
                        value: e.showSlideMenu,
                        callback: function(t) {
                            e.showSlideMenu = t
                        },
                        expression: "showSlideMenu"
                    }
                }, [a("div", {
                    staticClass: "menu ui-view",
                    slot: "menu"
                }, [a("ui-text", {
                    staticStyle: {
                        color: "#fff",
                        margin: "10px"
                    },
                    attrs: {
                        block: ""
                    }
                }, [e._v("侧滑菜单")])], 1), e._v(" "), a("div", {
                    staticClass: "ui-view",
                    slot: "panel"
                }, [e.pageConfig ? a("ui-nav-bar", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.navigationBarVisible,
                        expression: "navigationBarVisible"
                    }],
                    staticClass: "page-88a7b1",
                    style: e.navStyle,
                    attrs: {
                        id: "header"
                    }
                }, [a("div", {
                    staticClass: "ui-row",
                    style: {}
                }, [a("div", {
                    staticClass: "ui-col",
                    style: {
                        flex: "0 0 80px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content"
                }, [a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showBack,
                        expression: "showBack"
                    }],
                    staticClass: "back",
                    on: {
                        tap: e.handleBack
                    }
                }, [a("ui-icon", {
                    attrs: {
                        type: "arrow-left",
                        "font-size": "24"
                    }
                }), e._v("返回\n          ")], 1), e._v(" "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.showBack,
                        expression: "!showBack"
                    }],
                    staticClass: "back",
                    on: {
                        tap: e.handleNavIconTap
                    }
                }, [a("ui-icon", {
                    attrs: {
                        type: "list",
                        color: "#2B333B",
                        size: "16"
                    }
                })], 1)])]), e._v(" "), a("div", {
                    staticClass: "nav-bar-center ui-col ui-col-align-center align-center",
                    style: {
                        flex: "0 0 " + (e.WIN_WIDTH - 160) + "px"
                    },
                    attrs: {
                        "content-direction": "row"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content align-center flex-row"
                }, [a("div", {
                    staticClass: "nav-bar-center-loading ui-view",
                    staticStyle: {
                        display: "none"
                    }
                }), e._v(" "), a("span", {
                    staticClass: "nav-bar-center-text"
                }, [e._v(e._s(e.$t(e.winConfig.navigationBarTitleText)))])])]), e._v(" "), a("div", {
                    staticClass: "ui-col",
                    style: {
                        flex: "0 0 80px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content"
                })])])]) : e._e(), e._v(" "), a("keep-alive", [!e.isApp && e.pageConfig.cache ? a("router-view", {
                    staticClass: "router-view"
                }) : e._e()], 1), e._v(" "), e.isApp || !e.pageConfig.cache ? a("router-view", {
                    staticClass: "router-view"
                }) : e._e(), e._v(" "), e.isTabBar ? a("ui-tab-bar", {
                    style: e.tabBarStyle,
                    attrs: {
                        id: e.tabBar.id,
                        "group-id": e.tabBar.groupId,
                        "icon-size": e.tabBar.iconSize,
                        "font-size": e.tabBar.fontSize,
                        position: e.tabBar.position,
                        list: e.tabBarList,
                        paths: e.tabBar.paths,
                        "background-color": e.tabBar.backgroundColor,
                        "border-color": e.tabBar.borderColor,
                        color: e.tabBar.color,
                        "selected-color": e.tabBar.selectedColor
                    },
                    on: {
                        beforechange: e.handleTabBeforeChange,
                        change: e.handleTabChange
                    },
                    model: {
                        value: e.tabIndex,
                        callback: function(t) {
                            e.tabIndex = t
                        },
                        expression: "tabIndex"
                    }
                }) : e._e()], 1)]), e._v(" "), a("div", {
                    staticClass: "iphonex-bottom ui-view"
                })], 1)
            },
            staticRenderFns: []
        }
    },
    173: function(e, t) {},
    174: function(e, t) {},
    175: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(20),
            n = a.n(i),
            o = a(6),
            s = a.n(o),
            r = a(176),
            l = a.n(r),
            c = a(186),
            u = a.n(c),
            d = a(192),
            p = a.n(d);
        t.default = {
            components: {
                Page0: l.a,
                Page1: u.a,
                Page2: p.a
            },
            data: function() {
                return {
                    tabIndex: -1,
                    cachedPages: []
                }
            },
            watch: {
                tabIndex: function(e, t) {
                    this.setPageVisibility(), this.handlePageEvent(e, t)
                }
            },
            created: function() {
                var e = this;
                this.initTabIndex(), this.$EventService.on("ui-tab-change-65f3035", function(t) {
                    e.tabIndex = t
                })
            },
            methods: {
                setPageVisibility: function() {
                    var e = this;
                    this.$children.forEach(function(t, a) {
                        var i = t.$el.classList;
                        if (i) {
                            var n = e.findPageClass(i);
                            n && e.$nextTick(function() {
                                s()(document.querySelectorAll(n)).forEach(function(t) {
                                    t.__vue__ && t.__vue__.isDialog || (t.style.visibility = a === e.tabIndex ? "visible" : "hidden")
                                })
                            })
                        }
                    })
                },
                handlePageEvent: function(e, t) {
                    var a = this,
                        i = this.$children[e];
                    if (!i.$children) throw new Error("请将ui-page作为页面的根元素");
                    var n = ui.findTabPageInstance(i),
                        o = function() {
                            if (n) {
                                n.pageLoad;
                                n.showCustomNavBar = !0, n.isTabBarActive = !0, n.triggerTabLoad(), a.$nextTick(function() {
                                    var e = a.$children[t];
                                    if (e) {
                                        var i = ui.findTabPageInstance(e);
                                        i.showCustomNavBar = !1, i.isTabBarActive = !1
                                    }
                                })
                            }
                        };
                    n ? o() : window.setTimeout(function() {
                        n = i.$children[0], o()
                    }, 200)
                },
                findPageClass: function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (e[t].match(/page-\w{6}/)) return "." + e[t]
                },
                initTabIndex: function() {
                    for (var e = [this.$router.options.tabBar].concat(n()(this.$router.options.pageTabBars)), t = void 0, a = 0; a < e.length; a++) e[a].paths.indexOf(this.$route.path) > -1 && (t = e[a]);
                    t && t.paths && (this.tabIndex = t.paths.indexOf(this.$route.path))
                }
            }
        }
    },
    176: function(e, t, a) {
        function i(e) {
            a(177), a(178)
        }
        var n = a(22)(a(179), a(185), i, null, null);
        e.exports = n.exports
    },
    177: function(e, t) {},
    178: function(e, t) {},
    179: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(180),
            n = a(181),
            o = a(182),
            s = a(95),
            r = a(30),
            l = a(31),
            c = a(37),
            u = a(43);
        t.default = {
            components: {
                UiPage: u.a,
                UiMask: c.a,
                UiView: l.a,
                UiIcon: r.a,
                UiText: s.a,
                UiExSwiper: o.a,
                UiExSwiperItem: n.a,
                UiVideo: i.a
            },
            config: {
                navigationBarTitleText: "视频商品列表",
                disableScroll: !0
            },
            data: function() {
                return {
                    appData: {},
                    toView: "video0",
                    scrollTop: 0,
                    tabCss: {
                        height: "px",
                        "flex-direction": "column"
                    },
                    startX: "",
                    startY: "",
                    share: "share",
                    windowH: ui.WIN_HEIGHT / 2,
                    playing: !0,
                    systemInfo: {},
                    bottom: 30,
                    animationDuration: ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s"],
                    searchShow: !1,
                    shareMask: !1,
                    href: "http://www.uileader.com/touchui_jdfinance/#/pages/share/greenHand/greenHand",
                    className: "",
                    showTime: ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s"],
                    hideTime: ["0.6s", "0.5s", "0.4s", "0.3s", "0.2s", "0.1s"],
                    shareColumn: [{
                        icon: "facebook",
                        name: "facebook",
                        bgColor: "#41C451",
                        share: "facebook"
                    }, {
                        icon: "google",
                        name: "google",
                        bgColor: "#41C451",
                        share: "google"
                    }, {
                        icon: "Google",
                        name: "google+",
                        bgColor: "#27A9EE",
                        share: "Google"
                    }, {
                        icon: "twitter",
                        name: "twitter",
                        bgColor: "#F53B43",
                        share: "twitter"
                    }, {
                        icon: "ins",
                        name: "ins",
                        bgColor: "#F53B43",
                        share: "ins"
                    }]
                }
            },
            methods: {
                shareshow: function() {
                    this.shareMask = !0
                },
                maskHide: function(e) {
                    if ("plus" === e) this.shareMask = !1;
                    else switch (e) {
                        case "facebook":
                            this.facebook();
                            break;
                        case "twitter":
                            this.twitterShare();
                            break;
                        case "Google":
                            this.shareGooglePlus();
                            break;
                        case "google":
                            this.shareGoogle();
                            break;
                        default:
                            ui.showAlert({
                                title: "错误",
                                content: "分享失败"
                            })
                    }
                },
                twitterShare: function() {},
                shareGooglePlus: function() {},
                shareGoogle: function() {},
                columnHide: function() {
                    this.className = "hideActive", this.animationDuration = this.hideTime, this.shareMask = !1
                },
                maskShow: function() {
                    this.className = "active", this.animationDuration = this.showTime
                },
                getSystemInfo: function() {
                    var e = this;
                    ui.getSystemInfo({
                        success: function(t) {
                            e.systemInfo = t, e.tabCss.height = t.windowHeight + "px", e.headerHeight = t.screenHeight - t.windowHeight + "px"
                        }
                    })
                },
                swipeChange: function(e) {
                    console.log(e), 0 == this.playing ? 1 == this.appData.videoList[e].ISfirstPlay ? (this.appData.videoList[e].currentTime = 0, this.appData.videoList[e].ISfirstPlay = !1, ui.createVideoContext(this.appData.videoList[e].uid).play(), this.playing = !0) : (ui.createVideoContext(this.appData.videoList[e].uid).play(), this.playing = !0) : (ui.createVideoContext(this.appData.videoList[e].uid).pause(), this.playing = !1)
                },
                swipeStart: function(e) {
                    console.log(e), ui.createVideoContext(this.appData.videoList[this.appData.page].uid).pause(), this.appData.page = e, 1 == this.appData.videoList[0].ISfirstPlay ? (this.appData.videoList[0].currentTime = 0, this.appData.videoList[0].ISfirstPlay = !1, ui.createVideoContext(this.appData.videoList[e].uid).play(), this.playing = !0) : (ui.createVideoContext(this.appData.videoList[e].uid).play(), this.playing = !0)
                },
                facebook: function() {
                    FB.init({
                        appId: "2260718420859070",
                        autoLogAppEvents: !0,
                        xfbml: !0,
                        version: "v2.12"
                    }), FB.ui({
                        method: "share",
                        mobile_iframe: !0,
                        href: "http://dev.XXXX.io/?test=12345"
                    }, function(e) {
                        console.log(e)
                    })
                }
            },
            mounted: function() {},
            created: function() {
                this.getSystemInfo();
                var e = ui.getApp();
                this.appData = e.globalData,
                if(this.appData.videoList[0].ISfirstPlay == true){
      this.appData.videoList[0].currentTime = 0;
      this.appData.videoList[0].ISfirstPlay = false;
      ui.createVideoContext(this.appData.videoList[0].uid).play();
      console.log('0.play')
  this.playing = true;
    }else{
      ui.createVideoContext(this.appData.videoList[0].uid).play();
  this.playing = true;
    }
            }
        }
    },
    183: function(e, t) {},
    184: function(e, t, a) {
        "use strict";
        var i = {
                "pull-down": "pull-down-content",
                "pull-up": "pull-up-content"
            },
            n = (Number, Number, String, {
                "pull-down": "pull-down-content",
                "pull-up": "pull-up-content"
            }),
            o = {
                props: {
                    state: {
                        type: Number
                    },
                    translate: {
                        type: Number
                    },
                    type: String
                },
                computed: {
                    classes: function() {
                        return n[this.type]
                    }
                },
                data: function() {
                    return {
                        turn: null,
                        svg: null,
                        background: null,
                        primary: null,
                        secondary: null,
                        selfTranslate: 0
                    }
                },
                mounted: function() {
                    this.turn = this.$el.querySelector(".material-progress-circular"), this.svg = this.$el.querySelector(".progress-circular"), this.background = this.$el.querySelector(".progress-circular__background"), this.primary = this.$el.querySelector(".progress-circular__primary"), this.secondary = this.$el.querySelector(".progress-circular__secondary")
                },
                watch: {
                    state: function() {
                        this.handleProgress()
                    },
                    translate: function(e) {
                        this.handleProgress()
                    }
                },
                methods: {
                    handleProgress: function() {
                        if (1 === this.state || 2 === this.state) {
                            this.$el.style.webkitTransition = "none";
                            var e = Math.abs(this.translate) / 84,
                                t = Math.floor(252 * e);
                            this.turn.style.transform = "rotate(" + e + "turn)", t >= 252 && (t = 252), this.primary.style.strokeDasharray = t + "%, 251.32%", this.primary.style.webkitTransition = "none"
                        } else 3 === this.state || 4 === this.state ? this.turn.style.tranform = "rotate(1turn)" : this.primary.style.strokeDasharray = "0%, 251.32%"
                    }
                }
            },
            s = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "material-pull-hook",
                    class: e.classes
                }, [a("div", {
                    staticClass: "pull-hook-progress"
                }, [a("div", {
                    staticClass: "material-progress-circular"
                }, [a("svg", {
                    staticClass: "progress-circular",
                    class: {
                        "progress-circular--indeterminate": e.state >= 3
                    }
                }, [a("circle", {
                    staticClass: "progress-circular__background",
                    class: {
                        "progress-circular--indeterminate__background": e.state >= 3
                    }
                }), e._v(" "), a("circle", {
                    staticClass: "progress-circular__secondary",
                    class: {
                        "progress-circular--indeterminate__secondary": e.state >= 3
                    },
                    staticStyle: {
                        display: "none"
                    }
                }), e._v(" "), a("circle", {
                    staticClass: "progress-circular__primary",
                    class: {
                        "progress-circular--indeterminate__primary": e.state >= 3
                    }
                })])])])])
            },
            r = [],
            l = {
                render: s,
                staticRenderFns: r
            },
            c = l,
            u = a(96),
            d = u(o, c, !1, null, null, null),
            p = d.exports,
            m = {
                "pull-down": {
                    1: "ui.pulldownrefresh.pull",
                    2: "ui.pulldownrefresh.release",
                    3: "ui.pulldownrefresh.refreshing",
                    4: "ui.pulldownrefresh.success",
                    5: "ui.pulldownrefresh.cancel"
                },
                "pull-up": {
                    0: "ui.pullupload.pull_load_more",
                    1: "ui.pullupload.pull",
                    2: "ui.pullupload.release",
                    3: "ui.pullupload.refreshing",
                    4: "ui.pullupload.success",
                    5: "ui.pullupload.cancel"
                }
            },
            h = {
                "pull-down": {
                    1: "arrow down",
                    2: "arrow up",
                    3: "loading",
                    4: "none"
                },
                "pull-up": {
                    1: "arrow up",
                    2: "arrow down",
                    3: "loading",
                    4: "none"
                }
            },
            f = (String, Number, Number, String, {
                "pull-down": {
                    1: "ui.pulldownrefresh.pull",
                    2: "ui.pulldownrefresh.release",
                    3: "ui.pulldownrefresh.refreshing",
                    4: "ui.pulldownrefresh.success",
                    5: "ui.pulldownrefresh.cancel"
                },
                "pull-up": {
                    0: "ui.pullupload.pull_load_more",
                    1: "ui.pullupload.pull",
                    2: "ui.pullupload.release",
                    3: "ui.pullupload.refreshing",
                    4: "ui.pullupload.success",
                    5: "ui.pullupload.cancel"
                }
            }),
            g = {
                "pull-down": {
                    1: "arrow down",
                    2: "arrow up",
                    3: "loading",
                    4: "none"
                },
                "pull-up": {
                    1: "arrow up",
                    2: "arrow down",
                    3: "loading",
                    4: "none"
                }
            },
            v = {
                props: {
                    type: {
                        type: String,
                        default: "pull-down"
                    },
                    state: {
                        type: Number,
                        default: 0
                    },
                    translate: {
                        type: Number,
                        default: 0
                    },
                    pullStyle: {
                        type: String,
                        default: "ios"
                    }
                },
                components: {
                    MaterialPullHook: p
                },
                computed: {
                    text: function() {
                        return this.$t(f[this.type][this.state])
                    },
                    contentClasses: function() {
                        return [this.type + "-content"]
                    },
                    iconClasses: function() {
                        return [this.type + "-icon", g[this.type][this.state]]
                    }
                }
            },
            b = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return "ios" === e.pullStyle ? a("div", {
                    class: e.contentClasses
                }, [a("div", {
                    class: e.iconClasses
                }), e._v(" "), a("span", [e._v(e._s(e.text))])]) : a("material-pull-hook", {
                    attrs: {
                        state: e.state,
                        translate: e.translate,
                        type: e.type
                    }
                })
            },
            y = [],
            w = {
                render: b,
                staticRenderFns: y
            },
            C = w,
            x = a(96),
            S = x(v, C, !1, null, null, null);
        t.a = S.exports
    },
    185: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("ui-page", {
                    staticClass: "page-e4cd19"
                }, [a("ui-mask", {
                    staticClass: "share_mask page-e4cd19",
                    attrs: {
                        "hide-delay": "400",
                        top: "0",
                        blur: "light"
                    },
                    on: {
                        show: e.maskShow
                    },
                    nativeOn: {
                        tap: function(t) {
                            e.columnHide(t)
                        }
                    },
                    model: {
                        value: e.shareMask,
                        callback: function(t) {
                            e.shareMask = t
                        },
                        expression: "shareMask"
                    }
                }, [a("div", {
                    class: ["column_wrap", e.className, "ui-view"]
                }, [e._l(e.shareColumn, function(t, i) {
                    return a("div", {
                        key: i,
                        staticClass: "column_content ui-view",
                        style: {
                            "animation-duration": e.animationDuration[i]
                        },
                        attrs: {
                            "ui:for-index": "index"
                        },
                        on: {
                            tap: function(a) {
                                e.maskHide(t.share)
                            }
                        }
                    }, [a("div", {
                        staticClass: "ui-view"
                    }, [a("div", {
                        staticClass: "ui-view",
                        style: {
                            "background-color": t.bgColor
                        }
                    }, [a("ui-icon", {
                        attrs: {
                            type: t.icon,
                            size: "30",
                            color: "#fff"
                        }
                    })], 1), e._v(" "), a("ui-text", {
                        attrs: {
                            block: ""
                        }
                    }, [e._v(e._s(t.name))])], 1)])
                }), e._v(" "), a("div", {
                    staticClass: "close ui-view",
                    on: {
                        tap: function(t) {
                            e.maskHide("plus")
                        }
                    }
                }, [a("ui-icon", {
                    attrs: {
                        type: "cancel",
                        size: "20",
                        color: "#5E5E5E"
                    }
                })], 1)], 2)]), e._v(" "), a("div", {
                    style: "z-index:1000;position: fixed !important;right:10px;bottom:" + (e.windowH - 60) + "px"
                }, [a("div", {
                    staticClass: "btnbox ui-view",
                    on: {
                        tap: e.shareshow
                    }
                }, [a("ui-icon", {
                    attrs: {
                        type: "share",
                        color: "#fff",
                        size: "24"
                    }
                })], 1)]), e._v(" "), a("div", {
                    style: "z-index:999;position: fixed !important;right:10px;bottom:" + e.windowH + "px"
                }, [a("div", {
                    staticClass: "btnbox ui-view"
                }, [a("ui-icon", {
                    attrs: {
                        type: "sell",
                        size: "24"
                    }
                })], 1)]), e._v(" "), a("div", {
                    staticClass: "content ui-view"
                }, [a("ui-ex-swiper", {
                    style: e.tabCss,
                    attrs: {
                        vertical: ""
                    },
                    on: {
                        itemtap: e.swipeChange,
                        changestart: e.swipeStart
                    }
                }, e._l(e.appData.videoList, function(t, i) {
                    return a("ui-ex-swiper-item", {
                        key: i,
                        staticClass: "flex-item",
                        attrs: {
                            "ui:for-item": "items",
                            "ui:for-index": "index",
                            id: "video" + i
                        }
                    }, [a("ui-video", {
                        attrs: {
                            id: t.uid,
                            src: t.videoUrl,
                            poster: t.imageUrl,
                            controls: !1,
                            autoplay: !1,
                            loop: !0,
                            direction: "0",
                            "show-fullscreen-btn": !1,
                            "show-play-btn": !1,
                            "enable-progress-gesture": !1,
                            objectfit: "cover"
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "sample_content ui-view",
                        style: e.headerHeight
                    }, [a("ui-text", {
                        staticStyle: {
                            display: "-webkit-box",
                            "-webkit-box-orient": "vertical",
                            "-webkit-line-clamp": "3",
                            overflow: "hidden"
                        }
                    }, [e._v("一对好基友孟云（韩庚 饰）和余飞（郑恺 饰）跟女友都因为一点小事宣告分手，并且“拒绝挽回，死不认错”。两人在夜店、派对与交友软件上放飞人生第二春，大肆庆祝“黄金单身期”，从而引发了一系列好笑的故事。孟云与女友同甘共苦却难逃“五年之痒”，余飞与女友则棋逢敌手相爱相杀无绝期。然而现实的“打脸”却来得猝不及防：一对推拉纠结零往来，一对纠缠互怼全交代。两对恋人都将面对最终的选择：是再次相见？还是再也不见？\n    ")])], 1)], 1)
                }))], 1)], 1)
            },
            staticRenderFns: []
        }
    },
    186: function(e, t, a) {
        function i(e) {
            a(187), a(188)
        }
        var n = a(22)(a(189), a(191), i, null, null);
        e.exports = n.exports
    },
    187: function(e, t) {},
    188: function(e, t) {},
    189: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(97),
            n = a(190),
            o = a(31),
            s = a(43);
        t.default = {
            components: {
                UiPage: s.a,
                UiView: o.a,
                UiSlider: n.a,
                UiButton: i.a
            },
            config: {
                navigationBarTitleText: "首页",
                backgroundColor: "#F4F4F4",
                navigationBarTextStyle: "black"
            },
            data: function() {
                return {
                    buttonText: "界面跳转",
                    isShow: !1
                }
            },
            methods: {
                sliderShow: function() {
                    this.isShow = !0
                },
                navHandle: function() {
                    ui.navigateTo({
                        url: "/pages/detail"
                    })
                }
            },
            mounted: function() {
                setTimeout(function() {
                    ui.closeSplashscreen()
                }, 1e3)
            }
        }
    },
    191: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("ui-page", {
                    staticClass: "page-63d9ed"
                }, [e.isShow ? a("div", {
                    staticClass: "sliderContent ui-view"
                }, [a("ui-slider", {
                    attrs: {
                        width: "260"
                    }
                })], 1) : e._e(), e._v(" "), a("div", {
                    staticClass: "buttonContent ui-view"
                }, [a("ui-button", {
                    attrs: {
                        type: "primary"
                    },
                    nativeOn: {
                        tap: function(t) {
                            e.sliderShow(t)
                        }
                    }
                }, [e._v("创建滑动条控件")]), e._v(" "), a("ui-button", {
                    attrs: {
                        type: "primary"
                    },
                    nativeOn: {
                        tap: function(t) {
                            e.navHandle(t)
                        }
                    }
                }, [e._v(e._s(e.buttonText))])], 1)])
            },
            staticRenderFns: []
        }
    },
    192: function(e, t, a) {
        function i(e) {
            a(193), a(194)
        }
        var n = a(22)(a(195), a(197), i, null, null);
        e.exports = n.exports
    },
    193: function(e, t) {},
    194: function(e, t) {},
    195: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(67),
            n = a(31),
            o = a(30),
            s = a(93),
            r = a(94),
            l = a(64),
            c = a(43);
        t.default = {
            components: {
                UiPage: c.a,
                UiNavBar: l.a,
                UiRow: r.a,
                UiCol: s.a,
                UiIcon: o.a,
                UiView: n.a,
                UiImage: i.a
            },
            config: {
                navigationStyle: "custom",
                navigationBarTextStyle: "white",
                backgroundColor: "#F4F4F4"
            },
            data: function() {
                return {
                    portraitUrl: a(196)
                }
            },
            methods: {}
        }
    },
    196: function(e, t, a) {
        e.exports = a.p + "static/img/portrait_bg.d8ab821.png"
    },
    197: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("ui-page", {
                    staticClass: "page-85c7f1"
                }, [a("ui-nav-bar", {
                    staticClass: "nav_bar page-85c7f1",
                    slot: "nav-bar"
                }, [a("div", {
                    staticClass: "ui-row",
                    style: {
                        height: "46px"
                    },
                    attrs: {
                        height: "46"
                    }
                }, [a("div", {
                    staticClass: "ui-col ui-col-align-center align-center valign-middle",
                    style: {
                        flex: "0 0 50px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content align-center valign-middle",
                    staticStyle: {
                        height: "46px"
                    }
                }, [a("ui-icon", {
                    attrs: {
                        name: "ring",
                        size: "24",
                        color: "#fff"
                    }
                })], 1)]), e._v(" "), a("div", {
                    staticClass: "ui-col ui-col-align-center align-center valign-middle",
                    style: {}
                }, [a("div", {
                    staticClass: "ui-col-content align-center valign-middle",
                    staticStyle: {
                        height: "46px"
                    }
                }, [a("div", {
                    staticClass: "nav_title ui-view"
                }, [e._v("我的")])])]), e._v(" "), a("div", {
                    staticClass: "ui-col ui-col-align-center align-center valign-middle",
                    style: {
                        flex: "0 0 50px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content align-center valign-middle",
                    staticStyle: {
                        height: "46px"
                    }
                }, [a("ui-icon", {
                    attrs: {
                        name: "setting",
                        size: "24",
                        color: "#fff"
                    }
                })], 1)])])]), e._v(" "), a("div", {
                    staticClass: "user_content ui-view"
                }, [a("div", {
                    staticClass: "header_top ui-row",
                    style: {
                        height: "150px"
                    },
                    attrs: {
                        height: "150"
                    }
                }, [a("div", {
                    staticClass: "ui-col ui-col-align-center align-center valign-middle",
                    style: {
                        flex: "0 0 90px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content align-center valign-middle",
                    staticStyle: {
                        height: "150px"
                    }
                }, [a("div", {
                    staticClass: "head_portrait ui-view"
                }), e._v(" "), a("ui-image", {
                    staticClass: "head_portrait",
                    attrs: {
                        src: e.portraitUrl,
                        mode: "aspectFill",
                        width: "60",
                        height: "60"
                    }
                })], 1)]), e._v(" "), a("div", {
                    staticClass: "ui-col ui-col-align-left align-left valign-middle",
                    style: {}
                }, [a("div", {
                    staticClass: "ui-col-content align-left valign-middle",
                    staticStyle: {
                        height: "150px"
                    }
                }, [a("div", {
                    staticClass: "login ui-view"
                }, [e._v("立即登录")]), e._v(" "), a("div", {
                    staticClass: "login_after ui-view"
                }, [e._v("登录后可享受更多特权")])])]), e._v(" "), a("div", {
                    staticClass: "ui-col ui-col-align-right align-right valign-middle",
                    style: {
                        "padding-right": "15px",
                        flex: "0 0 50px"
                    }
                }, [a("div", {
                    staticClass: "ui-col-content align-right valign-middle",
                    staticStyle: {
                        height: "150px"
                    }
                }, [a("ui-icon", {
                    attrs: {
                        name: "arrow-right",
                        size: "18",
                        color: "#fff"
                    }
                })], 1)])])])], 1)
            },
            staticRenderFns: []
        }
    },
    198: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "ui-tab-page-container page-cbccd5"
                }, [a("Page0", {
                    staticClass: "ui-tab-page",
                    class: {
                        visible: 0 === e.tabIndex
                    }
                }), e._v(" "), a("Page1", {
                    staticClass: "ui-tab-page",
                    class: {
                        visible: 1 === e.tabIndex
                    }
                }), e._v(" "), a("Page2", {
                    staticClass: "ui-tab-page",
                    class: {
                        visible: 2 === e.tabIndex
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    202: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNkOGQ4ZDgnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="
    },
    203: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+DQo="
    },
    66: function(e, t, a) {
        function i(e) {
            a(173), a(174)
        }
        var n = a(22)(a(175), a(198), i, null, null);
        e.exports = n.exports
    },
    98: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = a(99),
            n = a(163),
            o = a.n(n),
            s = {
                app: o.a
            },
            r = {};
        r.routes = [{
            path: "/pages/video_list",
            meta: {
                pageConfig: {
                    navigationBarTitleText: "视频商品列表",
                    disableScroll: !0
                },
                pageClass: "page-e4cd19",
                isTabBar: !0
            },
            component: a(66)
        }, {
            path: "/pages/index",
            meta: {
                pageConfig: {
                    navigationBarTitleText: "首页",
                    backgroundColor: "#F4F4F4",
                    navigationBarTextStyle: "black"
                },
                pageClass: "page-63d9ed",
                isTabBar: !0
            },
            component: a(66)
        }, {
            path: "/pages/user",
            meta: {
                pageConfig: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    backgroundColor: "#F4F4F4"
                },
                pageClass: "page-85c7f1",
                isTabBar: !0
            },
            component: a(66)
        }, {
            path: "*",
            component: function(e) {
                a.e(0).then(function() {
                    var t = [a(205)];
                    e.apply(null, t)
                }.bind(this)).catch(a.oe)
            },
            meta: {
                pageConfig: {
                    navigationBarTitleText: "404",
                    delay: !1,
                    disableScroll: !0
                }
            }
        }, {
            path: "/touch-ui-start-page",
            component: a(199).default
        }, {
            path: "/",
            redirect: "/pages/video_list"
        }, {
            path: "/pages/detail",
            meta: {
                pageConfig: {
                    navigationBarTitleText: "详情"
                },
                pageClass: "page-1d7f06",
                isTabBar: !1
            },
            component: function() {
                return a.e(1).then(a.bind(null, 206))
            }
        }], r.debug = void 0, r.window = {
            scrollType: "window",
            navigationBarBackgroundColor: "#ffffff",
            navigationBarTextStyle: "black",
            navigationBarBorderColor: "rgba(231, 231, 231, 0.6)"
        }, r.theme = {
            "theme-color": "#3399ff"
        }, r.template = void 0, r.tabBar = {
            groupId: "65f3035",
            paths: ["/pages/video_list", "/pages/index", "/pages/user"],
            position: "undefined",
            color: "#7a7e83",
            selectedColor: "#39f",
            borderColor: "rgba(231, 231, 231, 0.6)",
            backgroundColor: "#fff",
            list: [{
                text: "商品介绍",
                pagePath: "/pages/video_list",
                pageConfig: {
                    navigationBarTitleText: "视频商品列表",
                    disableScroll: !0
                },
                iconName: "product"
            }, {
                text: "首页",
                pagePath: "/pages/index",
                pageConfig: {
                    navigationBarTitleText: "首页",
                    backgroundColor: "#F4F4F4",
                    navigationBarTextStyle: "black"
                },
                iconName: "home"
            }, {
                text: "我的",
                pagePath: "/pages/user",
                pageConfig: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    backgroundColor: "#F4F4F4"
                },
                iconName: "user"
            }],
            id: "foot"
        }, r.pageTabBars = [], i.a.start(s, r)
    }
}, [98]);
