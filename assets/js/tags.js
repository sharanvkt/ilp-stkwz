!(function () {
  "use strict";
  function e(e, t) {
    return "string" == typeof e ? (t || document).querySelectorAll(e) : [e];
  }
  function t(e, t) {
    return "string" == typeof e ? (t || document).querySelector(e) : e;
  }
  function n(e, t) {
    var n = document.createElement(e);
    if (t) for (var i in t) void 0 !== n[i] && (n[i] = t[i]);
    return n;
  }
  function i(e, t) {
    return RegExp("(^|\\s+)" + e + "(\\s+|$)").test(t.className);
  }
  function a(e, t) {
    if (!i(e, t)) return (t.className += "" === t.className ? e : " " + e);
  }
  function r(e, t) {
    t.className = t.className.replace(RegExp("(^|\\s+)" + e + "(\\s+|$)"), "");
  }
  function s(e, t) {
    i(e, t) ? r(e, t) : a(e, t);
  }
  window.Tags = function s(o) {
    var l,
      c,
      u,
      d = t(o);
    if (!d.instance) {
      d.instance = this;
      var f = d.type,
        v = (function e() {
          var t = document.documentElement,
            n = {
              transition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "mozTransitionEnd",
              OTransition: "oTransitionEnd otransitionend",
            };
          for (var i in n) if (void 0 !== t.style[i]) return n[i];
          return !1;
        })(),
        g = [],
        m = { ENTER: 13, COMMA: 188, BACK: 8 },
        p = !1;
      (c = n("div", { className: "tags-container" })),
        (u = n("input", {
          type: "text",
          className: "tag-input",
          placeholder: d.placeholder || "",
        })),
        c.appendChild(u),
        "" !== d.value.trim() &&
          d.value
            .trim()
            .split(",")
            .forEach(function (e) {
              if (((e = e.trim()), !~g.indexOf(e))) {
                var t = h(e);
                g.push(e), c.insertBefore(t, u);
              }
            }),
        (d.type = "hidden"),
        d.parentNode.insertBefore(c, d.nextSibling),
        c.addEventListener("click", E, !1),
        c.addEventListener("keydown", y, !1),
        c.addEventListener("keyup", N, !1),
        (this.getTags = function () {
          return g;
        }),
        (this.clearTags = function () {
          d.instance &&
            ((g.length = 0),
            (d.value = ""),
            (c.innerHTML = ""),
            c.appendChild(u));
        }),
        (this.addTags = function (e) {
          if (d.instance) {
            if (Array.isArray(e))
              for (var t = 0, n = e.length; t < n; t++) T(e[t]);
            else T(e);
            return g;
          }
        }),
        (this.destroy = function () {
          d.instance &&
            (c.removeEventListener("click", E, !1),
            c.removeEventListener("keydown", y, !1),
            c.removeEventListener("keyup", y, !1),
            c.parentNode.removeChild(c),
            (g = null),
            (l = null),
            (c = null),
            (u = null),
            (v = null),
            delete d.instance,
            (d.type = f));
        });
    }
    function h(e) {
      return n("div", {
        className: "tag",
        innerHTML:
          '<span class="tag__name">' +
          e +
          '</span><button class="tag__remove">&times;</button>',
      });
    }
    function E(e) {
      if ((e.preventDefault(), "tag__remove" === e.target.className)) {
        var n = e.target.parentNode,
          i = t(".tag__name", n);
        c.removeChild(n),
          g.splice(g.indexOf(i.textContent), 1),
          (d.value = g.join(","));
      }
      u.focus();
    }
    function y(t) {
      if ("INPUT" === t.target.tagName && "tag-input" === t.target.className) {
        var n = t.target,
          s = t.which || t.keyCode;
        u.previousSibling &&
          s !== m.BACK &&
          r("tag--marked", u.previousSibling);
        var o = n.value.trim();
        s === m.ENTER
          ? (n.blur(),
            T(o),
            l && clearTimeout(l),
            (l = setTimeout(function () {
              n.focus();
            }, 10)))
          : s !== m.BACK ||
            "" !== t.target.value ||
            p ||
            ((p = !0),
            (function t() {
              if (0 !== g.length) {
                var n = e(".tag", c),
                  r = n[n.length - 1];
                if (!i("tag--marked", r)) {
                  a("tag--marked", r);
                  return;
                }
                g.pop(), c.removeChild(r), (d.value = g.join(","));
              }
            })());
      }
    }
    function N(e) {
      p = !1;
    }
    function T(t) {
      if ("" === (t = t.toString().replace(/,/g, "").trim()))
        return (u.value = "");
      if (~g.indexOf(t)) {
        var n = e(".tag", c);
        return (
          Array.prototype.forEach.call(n, function (e) {
            if (e.firstChild.textContent === t) {
              if ((a("tag--exists", e), v)) {
                var n, i, s, o;
                (n = e),
                  (i = v),
                  (s = function () {
                    r("tag--exists", e);
                  }),
                  (o = o || !1),
                  n.addEventListener(
                    i,
                    function e(t) {
                      s.call(this, t), n.removeEventListener(t.type, e, o);
                    },
                    o
                  );
              } else r("tag--exists", e);
            }
          }),
          (u.value = "")
        );
      }
      var i = h(t);
      c.insertBefore(i, u),
        g.push(t),
        (u.value = ""),
        (d.value += "" === d.value ? t : "," + t);
    }
  };
})();
var tags = new Tags(".tagged");
document.getElementById("get").addEventListener("click", function (e) {
  e.preventDefault(), alert(tags.getTags());
}),
  document.getElementById("clear").addEventListener("click", function (e) {
    e.preventDefault(), tags.clearTags();
  }),
  document.getElementById("add").addEventListener("click", function (e) {
    e.preventDefault(), tags.addTags("New");
  }),
  document.getElementById("addArr").addEventListener("click", function (e) {
    e.preventDefault(),
      tags.addTags(["Steam Machines", "Nintendo Wii U", "Shield Portable"]);
  }),
  document.getElementById("destroy").addEventListener("click", function (e) {
    e.preventDefault(),
      "destroy" === this.textContent
        ? (tags.destroy(), (this.textContent = "reinit"))
        : ((this.textContent = "destroy"), (tags = new Tags(".tagged")));
  });
