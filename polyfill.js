!(function (e, t) {
  if ("function" == typeof define && define.amd)
    define("SmoothscrollAnchorPolyfill", ["exports"], t);
  else if ("undefined" != typeof exports) t(exports);
  else {
    var o = { exports: {} };
    t(o.exports), (e.SmoothscrollAnchorPolyfill = o.exports);
  }
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : this,
  function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = void 0),
      (e.destroy = m),
      (e.polyfill = p);
    var t,
      o = "undefined" != typeof window,
      n = o && window,
      r = o && document,
      l = o && r.documentElement,
      i = o && r.createElement("a"),
      a = function () {
        return o && "scrollBehavior" in i;
      },
      s = function e(t) {
        return (function (e) {
          return /^a$/i.test(e.tagName);
        })(t) &&
          (function (e) {
            if (!/#/.test(e.href)) return !1;
            var t = e.pathname;
            return (
              "/" !== t[0] && (t = "/" + t),
              e.hostname === location.hostname &&
                t === location.pathname &&
                (!e.search || e.search === location.search)
            );
          })(t)
          ? t
          : t.parentElement
          ? e(t.parentElement)
          : null;
      },
      c = function (e) {
        if ("string" != typeof e) return null;
        try {
          e = decodeURIComponent(e);
        } catch (e) {}
        var t = e ? r.getElementById(e.slice(1)) : r.body;
        return "#top" !== e || t || (t = r.body), t;
      },
      u = function (e) {
        var t = { preventScroll: !0 };
        if ((e.focus(t), r.activeElement !== e)) {
          var o = e.getAttribute("tabindex");
          if (
            (e.setAttribute("tabindex", "-1"),
            "none" === getComputedStyle(e).outlineStyle)
          ) {
            var n = e.style.outlineStyle;
            (e.style.outlineStyle = "none"),
              e.addEventListener("blur", function t() {
                (e.style.outlineStyle = n || ""),
                  null != o
                    ? e.setAttribute("tabindex", o)
                    : e.removeAttribute("tabindex"),
                  e.removeEventListener("blur", t);
              });
          }
          e.focus(t);
        }
      },
      f = !1;
    if (o)
      try {
        var d = Object.defineProperty({}, "preventScroll", {
          get: function () {
            f = !0;
          },
        });
        i.focus(d);
      } catch (e) {}
    var h = function (e) {
        f || clearTimeout(t),
          e === r.body
            ? n.scroll({ top: 0, left: 0, behavior: "smooth" })
            : e.scrollIntoView({ behavior: "smooth", block: "start" }),
          f ? u(e) : (t = setTimeout(u.bind(null, e), 450));
      },
      v = function () {
        for (
          var e = /scroll-behavior:[\s]*([^;"']+)/,
            t = getComputedStyle(l),
            o = [
              l.style.scrollBehavior,
              (e.exec(l.getAttribute("style")) || [])[1],
              t.getPropertyValue("--scroll-behavior"),
              (e.exec(t.fontFamily) || [])[1],
            ],
            n = 0;
          n < o.length;
          n++
        ) {
          var r = o[n] && o[n].trim();
          if (/^smooth$/.test(r)) return !0;
          if (/^(initial|inherit|auto|unset)$/.test(r)) return !1;
        }
        return !1;
      },
      y = { polyfill: p, destroy: m };
    function p() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if ((m(), o)) {
        var t = n.__forceSmoothscrollAnchorPolyfill__,
          l = "boolean" == typeof e.force ? e.force : t;
        if (a() && !l) return;
        r.addEventListener("click", b, !1),
          r.addEventListener("scroll", x),
          n.addEventListener("hashchange", S);
      }
      return y;
    }
    function m() {
      return (
        o &&
          (r.removeEventListener("click", b, !1),
          r.removeEventListener("scroll", x),
          n.removeEventListener("hashchange", S)),
        y
      );
    }
    function b(e) {
      var t = e.metaKey || e.ctrlKey || e.shiftKey || 0 !== e.button;
      if (!e.defaultPrevented && !t && v()) {
        var o = s(e.target);
        if (o) {
          var n = c(o.hash);
          n &&
            (e.preventDefault(),
            h(n),
            history.pushState && history.pushState(null, r.title, o.href));
        }
      }
    }
    e.default = y;
    var g = [],
      E = function () {
        return l.scrollTop || r.body.scrollTop;
      };
    function S() {
      if (r.body && v()) {
        var e = c(location.hash);
        if (e) {
          var t = E(),
            o = g[g[1] === t ? 0 : 1];
          n.scroll({ top: o, behavior: "instant" }), h(e);
        }
      }
    }
    function x() {
      r.body && ((g[0] = g[1]), (g[1] = E()));
    }
    p();
  }
);
