/*! For license information please see main.968ea260.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {
        4: (t, e, n) => {
            var i = n(853), s = n(43), a = n(950);

            function r(t) {
                var e = "https://react.dev/errors/" + t;
                if (1 < arguments.length) {
                    e += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function o(t) {
                return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            }

            var l = Symbol.for("react.element"), c = Symbol.for("react.transitional.element"),
                u = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"),
                f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), g = Symbol.for("react.consumer"),
                m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"),
                y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), A = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var k = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
            var _ = Symbol.for("react.memo_cache_sentinel"), S = Symbol.iterator;

            function x(t) {
                return null === t || "object" !== typeof t ? null : "function" === typeof (t = S && t[S] || t["@@iterator"]) ? t : null
            }

            var E = Symbol.for("react.client.reference");

            function C(t) {
                if (null == t) return null;
                if ("function" === typeof t) return t.$$typeof === E ? null : t.displayName || t.name || null;
                if ("string" === typeof t) return t;
                switch (t) {
                    case h:
                        return "Fragment";
                    case u:
                        return "Portal";
                    case f:
                        return "Profiler";
                    case d:
                        return "StrictMode";
                    case b:
                        return "Suspense";
                    case y:
                        return "SuspenseList"
                }
                if ("object" === typeof t) switch (t.$$typeof) {
                    case m:
                        return (t.displayName || "Context") + ".Provider";
                    case g:
                        return (t._context.displayName || "Context") + ".Consumer";
                    case v:
                        var e = t.render;
                        return (t = t.displayName) || (t = "" !== (t = e.displayName || e.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                    case w:
                        return null !== (e = t.displayName || null) ? e : C(t.type) || "Memo";
                    case A:
                        e = t._payload, t = t._init;
                        try {
                            return C(t(e))
                        } catch (n) {
                        }
                }
                return null
            }

            var M, T, P = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.assign;

            function L(t) {
                if (void 0 === M) try {
                    throw Error()
                } catch (n) {
                    var e = n.stack.trim().match(/\n( *(at )?)/);
                    M = e && e[1] || "", T = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
                return "\n" + M + t + T
            }

            var F = !1;

            function I(t, e) {
                if (!t || F) return "";
                F = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var i = {
                        DetermineComponentFrameRoot: function () {
                            try {
                                if (e) {
                                    var n = function () {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(n.prototype, "props", {
                                        set: function () {
                                            throw Error()
                                        }
                                    }), "object" === typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(n, [])
                                        } catch (s) {
                                            var i = s
                                        }
                                        Reflect.construct(t, [], n)
                                    } else {
                                        try {
                                            n.call()
                                        } catch (a) {
                                            i = a
                                        }
                                        t.call(n.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (r) {
                                        i = r
                                    }
                                    (n = t()) && "function" === typeof n.catch && n.catch((function () {
                                    }))
                                }
                            } catch (o) {
                                if (o && i && "string" === typeof o.stack) return [o.stack, i.stack]
                            }
                            return [null, null]
                        }
                    };
                    i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
                    s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {value: "DetermineComponentFrameRoot"});
                    var a = i.DetermineComponentFrameRoot(), r = a[0], o = a[1];
                    if (r && o) {
                        var l = r.split("\n"), c = o.split("\n");
                        for (s = i = 0; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
                        for (; s < c.length && !c[s].includes("DetermineComponentFrameRoot");) s++;
                        if (i === l.length || s === c.length) for (i = l.length - 1, s = c.length - 1; 1 <= i && 0 <= s && l[i] !== c[s];) s--;
                        for (; 1 <= i && 0 <= s; i--, s--) if (l[i] !== c[s]) {
                            if (1 !== i || 1 !== s) do {
                                if (i--, 0 > --s || l[i] !== c[s]) {
                                    var u = "\n" + l[i].replace(" at new ", " at ");
                                    return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)), u
                                }
                            } while (1 <= i && 0 <= s);
                            break
                        }
                    }
                } finally {
                    F = !1, Error.prepareStackTrace = n
                }
                return (n = t ? t.displayName || t.name : "") ? L(n) : ""
            }

            function D(t) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        return L(t.type);
                    case 16:
                        return L("Lazy");
                    case 13:
                        return L("Suspense");
                    case 19:
                        return L("SuspenseList");
                    case 0:
                    case 15:
                        return t = I(t.type, !1);
                    case 11:
                        return t = I(t.type.render, !1);
                    case 1:
                        return t = I(t.type, !0);
                    default:
                        return ""
                }
            }

            function N(t) {
                try {
                    var e = "";
                    do {
                        e += D(t), t = t.return
                    } while (t);
                    return e
                } catch (n) {
                    return "\nError generating stack: " + n.message + "\n" + n.stack
                }
            }

            function O(t) {
                var e = t, n = t;
                if (t.alternate) for (; e.return;) e = e.return; else {
                    t = e;
                    do {
                        0 !== (4098 & (e = t).flags) && (n = e.return), t = e.return
                    } while (t)
                }
                return 3 === e.tag ? n : null
            }

            function z(t) {
                if (13 === t.tag) {
                    var e = t.memoizedState;
                    if (null === e && (null !== (t = t.alternate) && (e = t.memoizedState)), null !== e) return e.dehydrated
                }
                return null
            }

            function W(t) {
                if (O(t) !== t) throw Error(r(188))
            }

            function j(t) {
                var e = t.tag;
                if (5 === e || 26 === e || 27 === e || 6 === e) return t;
                for (t = t.child; null !== t;) {
                    if (null !== (e = j(t))) return e;
                    t = t.sibling
                }
                return null
            }

            var B = Array.isArray, H = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                U = {pending: !1, data: null, method: null, action: null}, V = [], G = -1;

            function q(t) {
                return {current: t}
            }

            function X(t) {
                0 > G || (t.current = V[G], V[G] = null, G--)
            }

            function K(t, e) {
                G++, V[G] = t.current, t.current = e
            }

            var Y = q(null), Q = q(null), $ = q(null), J = q(null);

            function Z(t, e) {
                switch (K($, e), K(Q, t), K(Y, null), t = e.nodeType) {
                    case 9:
                    case 11:
                        e = (e = e.documentElement) && (e = e.namespaceURI) ? Qu(e) : 0;
                        break;
                    default:
                        if (e = (t = 8 === t ? e.parentNode : e).tagName, t = t.namespaceURI) e = $u(t = Qu(t), e); else switch (e) {
                            case "svg":
                                e = 1;
                                break;
                            case "math":
                                e = 2;
                                break;
                            default:
                                e = 0
                        }
                }
                X(Y), K(Y, e)
            }

            function tt() {
                X(Y), X(Q), X($)
            }

            function et(t) {
                null !== t.memoizedState && K(J, t);
                var e = Y.current, n = $u(e, t.type);
                e !== n && (K(Q, t), K(Y, n))
            }

            function nt(t) {
                Q.current === t && (X(Y), X(Q)), J.current === t && (X(J), Nh._currentValue = U)
            }

            var it = Object.prototype.hasOwnProperty, st = i.unstable_scheduleCallback, at = i.unstable_cancelCallback,
                rt = i.unstable_shouldYield, ot = i.unstable_requestPaint, lt = i.unstable_now,
                ct = i.unstable_getCurrentPriorityLevel, ut = i.unstable_ImmediatePriority,
                ht = i.unstable_UserBlockingPriority, dt = i.unstable_NormalPriority, ft = i.unstable_LowPriority,
                pt = i.unstable_IdlePriority, gt = i.log, mt = i.unstable_setDisableYieldValue, vt = null, bt = null;

            function yt(t) {
                if ("function" === typeof gt && mt(t), bt && "function" === typeof bt.setStrictMode) try {
                    bt.setStrictMode(vt, t)
                } catch (e) {
                }
            }

            var wt = Math.clz32 ? Math.clz32 : function (t) {
                return 0 === (t >>>= 0) ? 32 : 31 - (At(t) / kt | 0) | 0
            }, At = Math.log, kt = Math.LN2;
            var _t = 128, St = 4194304;

            function xt(t) {
                var e = 42 & t;
                if (0 !== e) return e;
                switch (t & -t) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                        return 64;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194176 & t;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                        return 62914560 & t;
                    case 67108864:
                        return 67108864;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 0;
                    default:
                        return t
                }
            }

            function Et(t, e) {
                var n = t.pendingLanes;
                if (0 === n) return 0;
                var i = 0, s = t.suspendedLanes, a = t.pingedLanes, r = t.warmLanes;
                t = 0 !== t.finishedLanes;
                var o = 134217727 & n;
                return 0 !== o ? 0 !== (n = o & ~s) ? i = xt(n) : 0 !== (a &= o) ? i = xt(a) : t || 0 !== (r = o & ~r) && (i = xt(r)) : 0 !== (o = n & ~s) ? i = xt(o) : 0 !== a ? i = xt(a) : t || 0 !== (r = n & ~r) && (i = xt(r)), 0 === i ? 0 : 0 !== e && e !== i && 0 === (e & s) && ((s = i & -i) >= (r = e & -e) || 32 === s && 0 !== (4194176 & r)) ? e : i
            }

            function Ct(t, e) {
                return 0 === (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e)
            }

            function Mt(t, e) {
                switch (t) {
                    case 1:
                    case 2:
                    case 4:
                    case 8:
                        return e + 250;
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return e + 5e3;
                    default:
                        return -1
                }
            }

            function Tt() {
                var t = _t;
                return 0 === (4194176 & (_t <<= 1)) && (_t = 128), t
            }

            function Pt() {
                var t = St;
                return 0 === (62914560 & (St <<= 1)) && (St = 4194304), t
            }

            function Rt(t) {
                for (var e = [], n = 0; 31 > n; n++) e.push(t);
                return e
            }

            function Lt(t, e) {
                t.pendingLanes |= e, 268435456 !== e && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
            }

            function Ft(t, e, n) {
                t.pendingLanes |= e, t.suspendedLanes &= ~e;
                var i = 31 - wt(e);
                t.entangledLanes |= e, t.entanglements[i] = 1073741824 | t.entanglements[i] | 4194218 & n
            }

            function It(t, e) {
                var n = t.entangledLanes |= e;
                for (t = t.entanglements; n;) {
                    var i = 31 - wt(n), s = 1 << i;
                    s & e | t[i] & e && (t[i] |= e), n &= ~s
                }
            }

            function Dt(t) {
                return 2 < (t &= -t) ? 8 < t ? 0 !== (134217727 & t) ? 32 : 268435456 : 8 : 2
            }

            function Nt() {
                var t = H.p;
                return 0 !== t ? t : void 0 === (t = window.event) ? 32 : $h(t.type)
            }

            var Ot = Math.random().toString(36).slice(2), zt = "__reactFiber$" + Ot, Wt = "__reactProps$" + Ot,
                jt = "__reactContainer$" + Ot, Bt = "__reactEvents$" + Ot, Ht = "__reactListeners$" + Ot,
                Ut = "__reactHandles$" + Ot, Vt = "__reactResources$" + Ot, Gt = "__reactMarker$" + Ot;

            function qt(t) {
                delete t[zt], delete t[Wt], delete t[Bt], delete t[Ht], delete t[Ut]
            }

            function Xt(t) {
                var e = t[zt];
                if (e) return e;
                for (var n = t.parentNode; n;) {
                    if (e = n[jt] || n[zt]) {
                        if (n = e.alternate, null !== e.child || null !== n && null !== n.child) for (t = lh(t); null !== t;) {
                            if (n = t[zt]) return n;
                            t = lh(t)
                        }
                        return e
                    }
                    n = (t = n).parentNode
                }
                return null
            }

            function Kt(t) {
                if (t = t[zt] || t[jt]) {
                    var e = t.tag;
                    if (5 === e || 6 === e || 13 === e || 26 === e || 27 === e || 3 === e) return t
                }
                return null
            }

            function Yt(t) {
                var e = t.tag;
                if (5 === e || 26 === e || 27 === e || 6 === e) return t.stateNode;
                throw Error(r(33))
            }

            function Qt(t) {
                var e = t[Vt];
                return e || (e = t[Vt] = {hoistableStyles: new Map, hoistableScripts: new Map}), e
            }

            function $t(t) {
                t[Gt] = !0
            }

            var Jt = new Set, Zt = {};

            function te(t, e) {
                ee(t, e), ee(t + "Capture", e)
            }

            function ee(t, e) {
                for (Zt[t] = e, t = 0; t < e.length; t++) Jt.add(e[t])
            }

            var ne = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                ie = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                se = {}, ae = {};

            function re(t, e, n) {
                if (s = e, it.call(ae, s) || !it.call(se, s) && (ie.test(s) ? ae[s] = !0 : (se[s] = !0, 0))) if (null === n) t.removeAttribute(e); else {
                    switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            return void t.removeAttribute(e);
                        case "boolean":
                            var i = e.toLowerCase().slice(0, 5);
                            if ("data-" !== i && "aria-" !== i) return void t.removeAttribute(e)
                    }
                    t.setAttribute(e, "" + n)
                }
                var s
            }

            function oe(t, e, n) {
                if (null === n) t.removeAttribute(e); else {
                    switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                            return void t.removeAttribute(e)
                    }
                    t.setAttribute(e, "" + n)
                }
            }

            function le(t, e, n, i) {
                if (null === i) t.removeAttribute(n); else {
                    switch (typeof i) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                            return void t.removeAttribute(n)
                    }
                    t.setAttributeNS(e, n, "" + i)
                }
            }

            function ce(t) {
                switch (typeof t) {
                    case "bigint":
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                    case "object":
                        return t;
                    default:
                        return ""
                }
            }

            function ue(t) {
                var e = t.type;
                return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
            }

            function he(t) {
                t._valueTracker || (t._valueTracker = function (t) {
                    var e = ue(t) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), i = "" + t[e];
                    if (!t.hasOwnProperty(e) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var s = n.get, a = n.set;
                        return Object.defineProperty(t, e, {
                            configurable: !0, get: function () {
                                return s.call(this)
                            }, set: function (t) {
                                i = "" + t, a.call(this, t)
                            }
                        }), Object.defineProperty(t, e, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return i
                            }, setValue: function (t) {
                                i = "" + t
                            }, stopTracking: function () {
                                t._valueTracker = null, delete t[e]
                            }
                        }
                    }
                }(t))
            }

            function de(t) {
                if (!t) return !1;
                var e = t._valueTracker;
                if (!e) return !0;
                var n = e.getValue(), i = "";
                return t && (i = ue(t) ? t.checked ? "true" : "false" : t.value), (t = i) !== n && (e.setValue(t), !0)
            }

            function fe(t) {
                if ("undefined" === typeof (t = t || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return t.activeElement || t.body
                } catch (e) {
                    return t.body
                }
            }

            var pe = /[\n"\\]/g;

            function ge(t) {
                return t.replace(pe, (function (t) {
                    return "\\" + t.charCodeAt(0).toString(16) + " "
                }))
            }

            function me(t, e, n, i, s, a, r, o) {
                t.name = "", null != r && "function" !== typeof r && "symbol" !== typeof r && "boolean" !== typeof r ? t.type = r : t.removeAttribute("type"), null != e ? "number" === r ? (0 === e && "" === t.value || t.value != e) && (t.value = "" + ce(e)) : t.value !== "" + ce(e) && (t.value = "" + ce(e)) : "submit" !== r && "reset" !== r || t.removeAttribute("value"), null != e ? be(t, r, ce(e)) : null != n ? be(t, r, ce(n)) : null != i && t.removeAttribute("value"), null == s && null != a && (t.defaultChecked = !!a), null != s && (t.checked = s && "function" !== typeof s && "symbol" !== typeof s), null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? t.name = "" + ce(o) : t.removeAttribute("name")
            }

            function ve(t, e, n, i, s, a, r, o) {
                if (null != a && "function" !== typeof a && "symbol" !== typeof a && "boolean" !== typeof a && (t.type = a), null != e || null != n) {
                    if (!("submit" !== a && "reset" !== a || void 0 !== e && null !== e)) return;
                    n = null != n ? "" + ce(n) : "", e = null != e ? "" + ce(e) : n, o || e === t.value || (t.value = e), t.defaultValue = e
                }
                i = "function" !== typeof (i = null != i ? i : s) && "symbol" !== typeof i && !!i, t.checked = o ? t.checked : !!i, t.defaultChecked = !!i, null != r && "function" !== typeof r && "symbol" !== typeof r && "boolean" !== typeof r && (t.name = r)
            }

            function be(t, e, n) {
                "number" === e && fe(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
            }

            function ye(t, e, n, i) {
                if (t = t.options, e) {
                    e = {};
                    for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
                    for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0)
                } else {
                    for (n = "" + ce(n), e = null, s = 0; s < t.length; s++) {
                        if (t[s].value === n) return t[s].selected = !0, void (i && (t[s].defaultSelected = !0));
                        null !== e || t[s].disabled || (e = t[s])
                    }
                    null !== e && (e.selected = !0)
                }
            }

            function we(t, e, n) {
                null == e || ((e = "" + ce(e)) !== t.value && (t.value = e), null != n) ? t.defaultValue = null != n ? "" + ce(n) : "" : t.defaultValue !== e && (t.defaultValue = e)
            }

            function Ae(t, e, n, i) {
                if (null == e) {
                    if (null != i) {
                        if (null != n) throw Error(r(92));
                        if (B(i)) {
                            if (1 < i.length) throw Error(r(93));
                            i = i[0]
                        }
                        n = i
                    }
                    null == n && (n = ""), e = n
                }
                n = ce(e), t.defaultValue = n, (i = t.textContent) === n && "" !== i && null !== i && (t.value = i)
            }

            function ke(t, e) {
                if (e) {
                    var n = t.firstChild;
                    if (n && n === t.lastChild && 3 === n.nodeType) return void (n.nodeValue = e)
                }
                t.textContent = e
            }

            var _e = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

            function Se(t, e, n) {
                var i = 0 === e.indexOf("--");
                null == n || "boolean" === typeof n || "" === n ? i ? t.setProperty(e, "") : "float" === e ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : "number" !== typeof n || 0 === n || _e.has(e) ? "float" === e ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
            }

            function xe(t, e, n) {
                if (null != e && "object" !== typeof e) throw Error(r(62));
                if (t = t.style, null != n) {
                    for (var i in n) !n.hasOwnProperty(i) || null != e && e.hasOwnProperty(i) || (0 === i.indexOf("--") ? t.setProperty(i, "") : "float" === i ? t.cssFloat = "" : t[i] = "");
                    for (var s in e) i = e[s], e.hasOwnProperty(s) && n[s] !== i && Se(t, s, i)
                } else for (var a in e) e.hasOwnProperty(a) && Se(t, a, e[a])
            }

            function Ee(t) {
                if (-1 === t.indexOf("-")) return !1;
                switch (t) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var Ce = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
                Me = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

            function Te(t) {
                return Me.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
            }

            var Pe = null;

            function Re(t) {
                return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
            }

            var Le = null, Fe = null;

            function Ie(t) {
                var e = Kt(t);
                if (e && (t = e.stateNode)) {
                    var n = t[Wt] || null;
                    t: switch (t = e.stateNode, e.type) {
                        case "input":
                            if (me(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, "radio" === n.type && null != e) {
                                for (n = t; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll('input[name="' + ge("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                                    var i = n[e];
                                    if (i !== t && i.form === t.form) {
                                        var s = i[Wt] || null;
                                        if (!s) throw Error(r(90));
                                        me(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                                    }
                                }
                                for (e = 0; e < n.length; e++) (i = n[e]).form === t.form && de(i)
                            }
                            break t;
                        case "textarea":
                            we(t, n.value, n.defaultValue);
                            break t;
                        case "select":
                            null != (e = n.value) && ye(t, !!n.multiple, e, !1)
                    }
                }
            }

            var De = !1;

            function Ne(t, e, n) {
                if (De) return t(e, n);
                De = !0;
                try {
                    return t(e)
                } finally {
                    if (De = !1, (null !== Le || null !== Fe) && (zc(), Le && (e = Le, t = Fe, Fe = Le = null, Ie(e), t))) for (e = 0; e < t.length; e++) Ie(t[e])
                }
            }

            function Oe(t, e) {
                var n = t.stateNode;
                if (null === n) return null;
                var i = n[Wt] || null;
                if (null === i) return null;
                n = i[e];
                t: switch (e) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (i = !i.disabled) || (i = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !i;
                        break t;
                    default:
                        t = !1
                }
                if (t) return null;
                if (n && "function" !== typeof n) throw Error(r(231, e, typeof n));
                return n
            }

            var ze = !1;
            if (ne) try {
                var We = {};
                Object.defineProperty(We, "passive", {
                    get: function () {
                        ze = !0
                    }
                }), window.addEventListener("test", We, We), window.removeEventListener("test", We, We)
            } catch (Ad) {
                ze = !1
            }
            var je = null, Be = null, He = null;

            function Ue() {
                if (He) return He;
                var t, e, n = Be, i = n.length, s = "value" in je ? je.value : je.textContent, a = s.length;
                for (t = 0; t < i && n[t] === s[t]; t++) ;
                var r = i - t;
                for (e = 1; e <= r && n[i - e] === s[a - e]; e++) ;
                return He = s.slice(t, 1 < e ? 1 - e : void 0)
            }

            function Ve(t) {
                var e = t.keyCode;
                return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
            }

            function Ge() {
                return !0
            }

            function qe() {
                return !1
            }

            function Xe(t) {
                function e(e, n, i, s, a) {
                    for (var r in this._reactName = e, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = a, this.currentTarget = null, t) t.hasOwnProperty(r) && (e = t[r], this[r] = e ? e(s) : s[r]);
                    return this.isDefaultPrevented = (null != s.defaultPrevented ? s.defaultPrevented : !1 === s.returnValue) ? Ge : qe, this.isPropagationStopped = qe, this
                }

                return R(e.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var t = this.nativeEvent;
                        t && (t.preventDefault ? t.preventDefault() : "unknown" !== typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Ge)
                    }, stopPropagation: function () {
                        var t = this.nativeEvent;
                        t && (t.stopPropagation ? t.stopPropagation() : "unknown" !== typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Ge)
                    }, persist: function () {
                    }, isPersistent: Ge
                }), e
            }

            var Ke, Ye, Qe, $e = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) {
                        return t.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, Je = Xe($e), Ze = R({}, $e, {view: 0, detail: 0}), tn = Xe(Ze), en = R({}, Ze, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: fn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (t) {
                        return void 0 === t.relatedTarget ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
                    },
                    movementX: function (t) {
                        return "movementX" in t ? t.movementX : (t !== Qe && (Qe && "mousemove" === t.type ? (Ke = t.screenX - Qe.screenX, Ye = t.screenY - Qe.screenY) : Ye = Ke = 0, Qe = t), Ke)
                    },
                    movementY: function (t) {
                        return "movementY" in t ? t.movementY : Ye
                    }
                }), nn = Xe(en), sn = Xe(R({}, en, {dataTransfer: 0})), an = Xe(R({}, Ze, {relatedTarget: 0})),
                rn = Xe(R({}, $e, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), on = Xe(R({}, $e, {
                    clipboardData: function (t) {
                        return "clipboardData" in t ? t.clipboardData : window.clipboardData
                    }
                })), ln = Xe(R({}, $e, {data: 0})), cn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, un = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, hn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function dn(t) {
                var e = this.nativeEvent;
                return e.getModifierState ? e.getModifierState(t) : !!(t = hn[t]) && !!e[t]
            }

            function fn() {
                return dn
            }

            var pn = Xe(R({}, Ze, {
                    key: function (t) {
                        if (t.key) {
                            var e = cn[t.key] || t.key;
                            if ("Unidentified" !== e) return e
                        }
                        return "keypress" === t.type ? 13 === (t = Ve(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? un[t.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: fn,
                    charCode: function (t) {
                        return "keypress" === t.type ? Ve(t) : 0
                    },
                    keyCode: function (t) {
                        return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                    },
                    which: function (t) {
                        return "keypress" === t.type ? Ve(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                    }
                })), gn = Xe(R({}, en, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })), mn = Xe(R({}, Ze, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: fn
                })), vn = Xe(R({}, $e, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), bn = Xe(R({}, en, {
                    deltaX: function (t) {
                        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                    }, deltaY: function (t) {
                        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                    }, deltaZ: 0, deltaMode: 0
                })), yn = Xe(R({}, $e, {newState: 0, oldState: 0})), wn = [9, 13, 27, 32],
                An = ne && "CompositionEvent" in window, kn = null;
            ne && "documentMode" in document && (kn = document.documentMode);
            var _n = ne && "TextEvent" in window && !kn, Sn = ne && (!An || kn && 8 < kn && 11 >= kn),
                xn = String.fromCharCode(32), En = !1;

            function Cn(t, e) {
                switch (t) {
                    case "keyup":
                        return -1 !== wn.indexOf(e.keyCode);
                    case "keydown":
                        return 229 !== e.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Mn(t) {
                return "object" === typeof (t = t.detail) && "data" in t ? t.data : null
            }

            var Tn = !1;
            var Pn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Rn(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return "input" === e ? !!Pn[t.type] : "textarea" === e
            }

            function Ln(t, e, n, i) {
                Le ? Fe ? Fe.push(i) : Fe = [i] : Le = i, 0 < (e = Nu(e, "onChange")).length && (n = new Je("onChange", "change", null, n, i), t.push({
                    event: n,
                    listeners: e
                }))
            }

            var Fn = null, In = null;

            function Dn(t) {
                Mu(t, 0)
            }

            function Nn(t) {
                if (de(Yt(t))) return t
            }

            function On(t, e) {
                if ("change" === t) return e
            }

            var zn = !1;
            if (ne) {
                var Wn;
                if (ne) {
                    var jn = "oninput" in document;
                    if (!jn) {
                        var Bn = document.createElement("div");
                        Bn.setAttribute("oninput", "return;"), jn = "function" === typeof Bn.oninput
                    }
                    Wn = jn
                } else Wn = !1;
                zn = Wn && (!document.documentMode || 9 < document.documentMode)
            }

            function Hn() {
                Fn && (Fn.detachEvent("onpropertychange", Un), In = Fn = null)
            }

            function Un(t) {
                if ("value" === t.propertyName && Nn(In)) {
                    var e = [];
                    Ln(e, In, t, Re(t)), Ne(Dn, e)
                }
            }

            function Vn(t, e, n) {
                "focusin" === t ? (Hn(), In = n, (Fn = e).attachEvent("onpropertychange", Un)) : "focusout" === t && Hn()
            }

            function Gn(t) {
                if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Nn(In)
            }

            function qn(t, e) {
                if ("click" === t) return Nn(e)
            }

            function Xn(t, e) {
                if ("input" === t || "change" === t) return Nn(e)
            }

            var Kn = "function" === typeof Object.is ? Object.is : function (t, e) {
                return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
            };

            function Yn(t, e) {
                if (Kn(t, e)) return !0;
                if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
                var n = Object.keys(t), i = Object.keys(e);
                if (n.length !== i.length) return !1;
                for (i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (!it.call(e, s) || !Kn(t[s], e[s])) return !1
                }
                return !0
            }

            function Qn(t) {
                for (; t && t.firstChild;) t = t.firstChild;
                return t
            }

            function $n(t, e) {
                var n, i = Qn(t);
                for (t = 0; i;) {
                    if (3 === i.nodeType) {
                        if (n = t + i.textContent.length, t <= e && n >= e) return {node: i, offset: e - t};
                        t = n
                    }
                    t: {
                        for (; i;) {
                            if (i.nextSibling) {
                                i = i.nextSibling;
                                break t
                            }
                            i = i.parentNode
                        }
                        i = void 0
                    }
                    i = Qn(i)
                }
            }

            function Jn(t, e) {
                return !(!t || !e) && (t === e || (!t || 3 !== t.nodeType) && (e && 3 === e.nodeType ? Jn(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
            }

            function Zn(t) {
                for (var e = fe((t = null != t && null != t.ownerDocument && null != t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window).document); e instanceof t.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof e.contentWindow.location.href
                    } catch (i) {
                        n = !1
                    }
                    if (!n) break;
                    e = fe((t = e.contentWindow).document)
                }
                return e
            }

            function ti(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
            }

            function ei(t, e) {
                var n = Zn(e);
                e = t.focusedElem;
                var i = t.selectionRange;
                if (n !== e && e && e.ownerDocument && Jn(e.ownerDocument.documentElement, e)) {
                    if (null !== i && ti(e)) if (t = i.start, void 0 === (n = i.end) && (n = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(n, e.value.length); else if ((n = (t = e.ownerDocument || document) && t.defaultView || window).getSelection) {
                        n = n.getSelection();
                        var s = e.textContent.length, a = Math.min(i.start, s);
                        i = void 0 === i.end ? a : Math.min(i.end, s), !n.extend && a > i && (s = i, i = a, a = s), s = $n(e, a);
                        var r = $n(e, i);
                        s && r && (1 !== n.rangeCount || n.anchorNode !== s.node || n.anchorOffset !== s.offset || n.focusNode !== r.node || n.focusOffset !== r.offset) && ((t = t.createRange()).setStart(s.node, s.offset), n.removeAllRanges(), a > i ? (n.addRange(t), n.extend(r.node, r.offset)) : (t.setEnd(r.node, r.offset), n.addRange(t)))
                    }
                    for (t = [], n = e; n = n.parentNode;) 1 === n.nodeType && t.push({
                        element: n,
                        left: n.scrollLeft,
                        top: n.scrollTop
                    });
                    for ("function" === typeof e.focus && e.focus(), e = 0; e < t.length; e++) (n = t[e]).element.scrollLeft = n.left, n.element.scrollTop = n.top
                }
            }

            var ni = ne && "documentMode" in document && 11 >= document.documentMode, ii = null, si = null, ai = null,
                ri = !1;

            function oi(t, e, n) {
                var i = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                ri || null == ii || ii !== fe(i) || ("selectionStart" in (i = ii) && ti(i) ? i = {
                    start: i.selectionStart,
                    end: i.selectionEnd
                } : i = {
                    anchorNode: (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: i.anchorOffset,
                    focusNode: i.focusNode,
                    focusOffset: i.focusOffset
                }, ai && Yn(ai, i) || (ai = i, 0 < (i = Nu(si, "onSelect")).length && (e = new Je("onSelect", "select", null, e, n), t.push({
                    event: e,
                    listeners: i
                }), e.target = ii)))
            }

            function li(t, e) {
                var n = {};
                return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
            }

            var ci = {
                animationend: li("Animation", "AnimationEnd"),
                animationiteration: li("Animation", "AnimationIteration"),
                animationstart: li("Animation", "AnimationStart"),
                transitionrun: li("Transition", "TransitionRun"),
                transitionstart: li("Transition", "TransitionStart"),
                transitioncancel: li("Transition", "TransitionCancel"),
                transitionend: li("Transition", "TransitionEnd")
            }, ui = {}, hi = {};

            function di(t) {
                if (ui[t]) return ui[t];
                if (!ci[t]) return t;
                var e, n = ci[t];
                for (e in n) if (n.hasOwnProperty(e) && e in hi) return ui[t] = n[e];
                return t
            }

            ne && (hi = document.createElement("div").style, "AnimationEvent" in window || (delete ci.animationend.animation, delete ci.animationiteration.animation, delete ci.animationstart.animation), "TransitionEvent" in window || delete ci.transitionend.transition);
            var fi = di("animationend"), pi = di("animationiteration"), gi = di("animationstart"),
                mi = di("transitionrun"), vi = di("transitionstart"), bi = di("transitioncancel"),
                yi = di("transitionend"), wi = new Map,
                Ai = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");

            function ki(t, e) {
                wi.set(t, e), te(e, [t])
            }

            var _i = [], Si = 0, xi = 0;

            function Ei() {
                for (var t = Si, e = xi = Si = 0; e < t;) {
                    var n = _i[e];
                    _i[e++] = null;
                    var i = _i[e];
                    _i[e++] = null;
                    var s = _i[e];
                    _i[e++] = null;
                    var a = _i[e];
                    if (_i[e++] = null, null !== i && null !== s) {
                        var r = i.pending;
                        null === r ? s.next = s : (s.next = r.next, r.next = s), i.pending = s
                    }
                    0 !== a && Pi(n, s, a)
                }
            }

            function Ci(t, e, n, i) {
                _i[Si++] = t, _i[Si++] = e, _i[Si++] = n, _i[Si++] = i, xi |= i, t.lanes |= i, null !== (t = t.alternate) && (t.lanes |= i)
            }

            function Mi(t, e, n, i) {
                return Ci(t, e, n, i), Ri(t)
            }

            function Ti(t, e) {
                return Ci(t, null, null, e), Ri(t)
            }

            function Pi(t, e, n) {
                t.lanes |= n;
                var i = t.alternate;
                null !== i && (i.lanes |= n);
                for (var s = !1, a = t.return; null !== a;) a.childLanes |= n, null !== (i = a.alternate) && (i.childLanes |= n), 22 === a.tag && (null === (t = a.stateNode) || 1 & t._visibility || (s = !0)), t = a, a = a.return;
                s && null !== e && 3 === t.tag && (a = t.stateNode, s = 31 - wt(n), null === (t = (a = a.hiddenUpdates)[s]) ? a[s] = [e] : t.push(e), e.lane = 536870912 | n)
            }

            function Ri(t) {
                if (50 < Mc) throw Mc = 0, Tc = null, Error(r(185));
                for (var e = t.return; null !== e;) e = (t = e).return;
                return 3 === t.tag ? t.stateNode : null
            }

            var Li = {}, Fi = new WeakMap;

            function Ii(t, e) {
                if ("object" === typeof t && null !== t) {
                    var n = Fi.get(t);
                    return void 0 !== n ? n : (e = {value: t, source: e, stack: N(e)}, Fi.set(t, e), e)
                }
                return {value: t, source: e, stack: N(e)}
            }

            var Di = [], Ni = 0, Oi = null, zi = 0, Wi = [], ji = 0, Bi = null, Hi = 1, Ui = "";

            function Vi(t, e) {
                Di[Ni++] = zi, Di[Ni++] = Oi, Oi = t, zi = e
            }

            function Gi(t, e, n) {
                Wi[ji++] = Hi, Wi[ji++] = Ui, Wi[ji++] = Bi, Bi = t;
                var i = Hi;
                t = Ui;
                var s = 32 - wt(i) - 1;
                i &= ~(1 << s), n += 1;
                var a = 32 - wt(e) + s;
                if (30 < a) {
                    var r = s - s % 5;
                    a = (i & (1 << r) - 1).toString(32), i >>= r, s -= r, Hi = 1 << 32 - wt(e) + s | n << s | i, Ui = a + t
                } else Hi = 1 << a | n << s | i, Ui = t
            }

            function qi(t) {
                null !== t.return && (Vi(t, 1), Gi(t, 1, 0))
            }

            function Xi(t) {
                for (; t === Oi;) Oi = Di[--Ni], Di[Ni] = null, zi = Di[--Ni], Di[Ni] = null;
                for (; t === Bi;) Bi = Wi[--ji], Wi[ji] = null, Ui = Wi[--ji], Wi[ji] = null, Hi = Wi[--ji], Wi[ji] = null
            }

            var Ki = null, Yi = null, Qi = !1, $i = null, Ji = !1, Zi = Error(r(519));

            function ts(t) {
                throw as(Ii(Error(r(418, "")), t)), Zi
            }

            function es(t) {
                var e = t.stateNode, n = t.type, i = t.memoizedProps;
                switch (e[zt] = t, e[Wt] = i, n) {
                    case "dialog":
                        Tu("cancel", e), Tu("close", e);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Tu("load", e);
                        break;
                    case "video":
                    case "audio":
                        for (n = 0; n < Eu.length; n++) Tu(Eu[n], e);
                        break;
                    case "source":
                        Tu("error", e);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Tu("error", e), Tu("load", e);
                        break;
                    case "details":
                        Tu("toggle", e);
                        break;
                    case "input":
                        Tu("invalid", e), ve(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0), he(e);
                        break;
                    case "select":
                        Tu("invalid", e);
                        break;
                    case "textarea":
                        Tu("invalid", e), Ae(e, i.value, i.defaultValue, i.children), he(e)
                }
                "string" !== typeof (n = i.children) && "number" !== typeof n && "bigint" !== typeof n || e.textContent === "" + n || !0 === i.suppressHydrationWarning || Hu(e.textContent, n) ? (null != i.popover && (Tu("beforetoggle", e), Tu("toggle", e)), null != i.onScroll && Tu("scroll", e), null != i.onScrollEnd && Tu("scrollend", e), null != i.onClick && (e.onclick = Uu), e = !0) : e = !1, e || ts(t)
            }

            function ns(t) {
                for (Ki = t.return; Ki;) switch (Ki.tag) {
                    case 3:
                    case 27:
                        return void (Ji = !0);
                    case 5:
                    case 13:
                        return void (Ji = !1);
                    default:
                        Ki = Ki.return
                }
            }

            function is(t) {
                if (t !== Ki) return !1;
                if (!Qi) return ns(t), Qi = !0, !1;
                var e, n = !1;
                if ((e = 3 !== t.tag && 27 !== t.tag) && ((e = 5 === t.tag) && (e = !("form" !== (e = t.type) && "button" !== e) || Ju(t.type, t.memoizedProps)), e = !e), e && (n = !0), n && Yi && ts(t), ns(t), 13 === t.tag) {
                    if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(r(317));
                    t: {
                        for (t = t.nextSibling, n = 0; t;) {
                            if (8 === t.nodeType) if ("/$" === (e = t.data)) {
                                if (0 === n) {
                                    Yi = oh(t.nextSibling);
                                    break t
                                }
                                n--
                            } else "$" !== e && "$!" !== e && "$?" !== e || n++;
                            t = t.nextSibling
                        }
                        Yi = null
                    }
                } else Yi = Ki ? oh(t.stateNode.nextSibling) : null;
                return !0
            }

            function ss() {
                Yi = Ki = null, Qi = !1
            }

            function as(t) {
                null === $i ? $i = [t] : $i.push(t)
            }

            var rs = Error(r(460)), os = Error(r(474)), ls = {
                then: function () {
                }
            };

            function cs(t) {
                return "fulfilled" === (t = t.status) || "rejected" === t
            }

            function us() {
            }

            function hs(t, e, n) {
                switch (void 0 === (n = t[n]) ? t.push(e) : n !== e && (e.then(us, us), e = n), e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        if ((t = e.reason) === rs) throw Error(r(483));
                        throw t;
                    default:
                        if ("string" === typeof e.status) e.then(us, us); else {
                            if (null !== (t = ec) && 100 < t.shellSuspendCounter) throw Error(r(482));
                            (t = e).status = "pending", t.then((function (t) {
                                if ("pending" === e.status) {
                                    var n = e;
                                    n.status = "fulfilled", n.value = t
                                }
                            }), (function (t) {
                                if ("pending" === e.status) {
                                    var n = e;
                                    n.status = "rejected", n.reason = t
                                }
                            }))
                        }
                        switch (e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                if ((t = e.reason) === rs) throw Error(r(483));
                                throw t
                        }
                        throw ds = e, rs
                }
            }

            var ds = null;

            function fs() {
                if (null === ds) throw Error(r(459));
                var t = ds;
                return ds = null, t
            }

            var ps = null, gs = 0;

            function ms(t) {
                var e = gs;
                return gs += 1, null === ps && (ps = []), hs(ps, t, e)
            }

            function vs(t, e) {
                e = e.props.ref, t.ref = void 0 !== e ? e : null
            }

            function bs(t, e) {
                if (e.$$typeof === l) throw Error(r(525));
                throw t = Object.prototype.toString.call(e), Error(r(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
            }

            function ys(t) {
                return (0, t._init)(t._payload)
            }

            function ws(t) {
                function e(e, n) {
                    if (t) {
                        var i = e.deletions;
                        null === i ? (e.deletions = [n], e.flags |= 16) : i.push(n)
                    }
                }

                function n(n, i) {
                    if (!t) return null;
                    for (; null !== i;) e(n, i), i = i.sibling;
                    return null
                }

                function i(t) {
                    for (var e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function s(t, e) {
                    return (t = Ol(t, e)).index = 0, t.sibling = null, t
                }

                function a(e, n, i) {
                    return e.index = i, t ? null !== (i = e.alternate) ? (i = i.index) < n ? (e.flags |= 33554434, n) : i : (e.flags |= 33554434, n) : (e.flags |= 1048576, n)
                }

                function o(e) {
                    return t && null === e.alternate && (e.flags |= 33554434), e
                }

                function l(t, e, n, i) {
                    return null === e || 6 !== e.tag ? ((e = Hl(n, t.mode, i)).return = t, e) : ((e = s(e, n)).return = t, e)
                }

                function d(t, e, n, i) {
                    var a = n.type;
                    return a === h ? p(t, e, n.props.children, i, n.key) : null !== e && (e.elementType === a || "object" === typeof a && null !== a && a.$$typeof === A && ys(a) === e.type) ? (vs(e = s(e, n.props), n), e.return = t, e) : (vs(e = Wl(n.type, n.key, n.props, null, t.mode, i), n), e.return = t, e)
                }

                function f(t, e, n, i) {
                    return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Ul(n, t.mode, i)).return = t, e) : ((e = s(e, n.children || [])).return = t, e)
                }

                function p(t, e, n, i, a) {
                    return null === e || 7 !== e.tag ? ((e = jl(n, t.mode, i, a)).return = t, e) : ((e = s(e, n)).return = t, e)
                }

                function g(t, e, n) {
                    if ("string" === typeof e && "" !== e || "number" === typeof e || "bigint" === typeof e) return (e = Hl("" + e, t.mode, n)).return = t, e;
                    if ("object" === typeof e && null !== e) {
                        switch (e.$$typeof) {
                            case c:
                                return vs(n = Wl(e.type, e.key, e.props, null, t.mode, n), e), n.return = t, n;
                            case u:
                                return (e = Ul(e, t.mode, n)).return = t, e;
                            case A:
                                return g(t, e = (0, e._init)(e._payload), n)
                        }
                        if (B(e) || x(e)) return (e = jl(e, t.mode, n, null)).return = t, e;
                        if ("function" === typeof e.then) return g(t, ms(e), n);
                        if (e.$$typeof === m) return g(t, Eo(t, e), n);
                        bs(t, e)
                    }
                    return null
                }

                function v(t, e, n, i) {
                    var s = null !== e ? e.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n) return null !== s ? null : l(t, e, "" + n, i);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case c:
                                return n.key === s ? d(t, e, n, i) : null;
                            case u:
                                return n.key === s ? f(t, e, n, i) : null;
                            case A:
                                return v(t, e, n = (s = n._init)(n._payload), i)
                        }
                        if (B(n) || x(n)) return null !== s ? null : p(t, e, n, i, null);
                        if ("function" === typeof n.then) return v(t, e, ms(n), i);
                        if (n.$$typeof === m) return v(t, e, Eo(t, n), i);
                        bs(t, n)
                    }
                    return null
                }

                function b(t, e, n, i, s) {
                    if ("string" === typeof i && "" !== i || "number" === typeof i || "bigint" === typeof i) return l(e, t = t.get(n) || null, "" + i, s);
                    if ("object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case c:
                                return d(e, t = t.get(null === i.key ? n : i.key) || null, i, s);
                            case u:
                                return f(e, t = t.get(null === i.key ? n : i.key) || null, i, s);
                            case A:
                                return b(t, e, n, i = (0, i._init)(i._payload), s)
                        }
                        if (B(i) || x(i)) return p(e, t = t.get(n) || null, i, s, null);
                        if ("function" === typeof i.then) return b(t, e, n, ms(i), s);
                        if (i.$$typeof === m) return b(t, e, n, Eo(e, i), s);
                        bs(e, i)
                    }
                    return null
                }

                function y(l, d, f, p) {
                    if ("object" === typeof f && null !== f && f.type === h && null === f.key && (f = f.props.children), "object" === typeof f && null !== f) {
                        switch (f.$$typeof) {
                            case c:
                                t: {
                                    for (var w = f.key; null !== d;) {
                                        if (d.key === w) {
                                            if ((w = f.type) === h) {
                                                if (7 === d.tag) {
                                                    n(l, d.sibling), (p = s(d, f.props.children)).return = l, l = p;
                                                    break t
                                                }
                                            } else if (d.elementType === w || "object" === typeof w && null !== w && w.$$typeof === A && ys(w) === d.type) {
                                                n(l, d.sibling), vs(p = s(d, f.props), f), p.return = l, l = p;
                                                break t
                                            }
                                            n(l, d);
                                            break
                                        }
                                        e(l, d), d = d.sibling
                                    }
                                    f.type === h ? ((p = jl(f.props.children, l.mode, p, f.key)).return = l, l = p) : (vs(p = Wl(f.type, f.key, f.props, null, l.mode, p), f), p.return = l, l = p)
                                }
                                return o(l);
                            case u:
                                t: {
                                    for (w = f.key; null !== d;) {
                                        if (d.key === w) {
                                            if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                                n(l, d.sibling), (p = s(d, f.children || [])).return = l, l = p;
                                                break t
                                            }
                                            n(l, d);
                                            break
                                        }
                                        e(l, d), d = d.sibling
                                    }
                                    (p = Ul(f, l.mode, p)).return = l, l = p
                                }
                                return o(l);
                            case A:
                                return y(l, d, f = (w = f._init)(f._payload), p)
                        }
                        if (B(f)) return function (s, r, o, l) {
                            for (var c = null, u = null, h = r, d = r = 0, f = null; null !== h && d < o.length; d++) {
                                h.index > d ? (f = h, h = null) : f = h.sibling;
                                var p = v(s, h, o[d], l);
                                if (null === p) {
                                    null === h && (h = f);
                                    break
                                }
                                t && h && null === p.alternate && e(s, h), r = a(p, r, d), null === u ? c = p : u.sibling = p, u = p, h = f
                            }
                            if (d === o.length) return n(s, h), Qi && Vi(s, d), c;
                            if (null === h) {
                                for (; d < o.length; d++) null !== (h = g(s, o[d], l)) && (r = a(h, r, d), null === u ? c = h : u.sibling = h, u = h);
                                return Qi && Vi(s, d), c
                            }
                            for (h = i(h); d < o.length; d++) null !== (f = b(h, s, d, o[d], l)) && (t && null !== f.alternate && h.delete(null === f.key ? d : f.key), r = a(f, r, d), null === u ? c = f : u.sibling = f, u = f);
                            return t && h.forEach((function (t) {
                                return e(s, t)
                            })), Qi && Vi(s, d), c
                        }(l, d, f, p);
                        if (x(f)) {
                            if ("function" !== typeof (w = x(f))) throw Error(r(150));
                            return function (s, o, l, c) {
                                if (null == l) throw Error(r(151));
                                for (var u = null, h = null, d = o, f = o = 0, p = null, m = l.next(); null !== d && !m.done; f++, m = l.next()) {
                                    d.index > f ? (p = d, d = null) : p = d.sibling;
                                    var y = v(s, d, m.value, c);
                                    if (null === y) {
                                        null === d && (d = p);
                                        break
                                    }
                                    t && d && null === y.alternate && e(s, d), o = a(y, o, f), null === h ? u = y : h.sibling = y, h = y, d = p
                                }
                                if (m.done) return n(s, d), Qi && Vi(s, f), u;
                                if (null === d) {
                                    for (; !m.done; f++, m = l.next()) null !== (m = g(s, m.value, c)) && (o = a(m, o, f), null === h ? u = m : h.sibling = m, h = m);
                                    return Qi && Vi(s, f), u
                                }
                                for (d = i(d); !m.done; f++, m = l.next()) null !== (m = b(d, s, f, m.value, c)) && (t && null !== m.alternate && d.delete(null === m.key ? f : m.key), o = a(m, o, f), null === h ? u = m : h.sibling = m, h = m);
                                return t && d.forEach((function (t) {
                                    return e(s, t)
                                })), Qi && Vi(s, f), u
                            }(l, d, f = w.call(f), p)
                        }
                        if ("function" === typeof f.then) return y(l, d, ms(f), p);
                        if (f.$$typeof === m) return y(l, d, Eo(l, f), p);
                        bs(l, f)
                    }
                    return "string" === typeof f && "" !== f || "number" === typeof f || "bigint" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (n(l, d.sibling), (p = s(d, f)).return = l, l = p) : (n(l, d), (p = Hl(f, l.mode, p)).return = l, l = p), o(l)) : n(l, d)
                }

                return function (t, e, n, i) {
                    try {
                        gs = 0;
                        var s = y(t, e, n, i);
                        return ps = null, s
                    } catch (r) {
                        if (r === rs) throw r;
                        var a = Dl(29, r, null, t.mode);
                        return a.lanes = i, a.return = t, a
                    }
                }
            }

            var As = ws(!0), ks = ws(!1), _s = q(null), Ss = q(0);

            function xs(t, e) {
                K(Ss, t = cc), K(_s, e), cc = t | e.baseLanes
            }

            function Es() {
                K(Ss, cc), K(_s, _s.current)
            }

            function Cs() {
                cc = Ss.current, X(_s), X(Ss)
            }

            var Ms = q(null), Ts = null;

            function Ps(t) {
                var e = t.alternate;
                K(Is, 1 & Is.current), K(Ms, t), null === Ts && (null === e || null !== _s.current || null !== e.memoizedState) && (Ts = t)
            }

            function Rs(t) {
                if (22 === t.tag) {
                    if (K(Is, Is.current), K(Ms, t), null === Ts) {
                        var e = t.alternate;
                        null !== e && null !== e.memoizedState && (Ts = t)
                    }
                } else Ls()
            }

            function Ls() {
                K(Is, Is.current), K(Ms, Ms.current)
            }

            function Fs(t) {
                X(Ms), Ts === t && (Ts = null), X(Is)
            }

            var Is = q(0);

            function Ds(t) {
                for (var e = t; null !== e;) {
                    if (13 === e.tag) {
                        var n = e.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return e
                    } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                        if (0 !== (128 & e.flags)) return e
                    } else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) return null;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return null
            }

            var Ns = "undefined" !== typeof AbortController ? AbortController : function () {
                var t = [], e = this.signal = {
                    aborted: !1, addEventListener: function (e, n) {
                        t.push(n)
                    }
                };
                this.abort = function () {
                    e.aborted = !0, t.forEach((function (t) {
                        return t()
                    }))
                }
            }, Os = i.unstable_scheduleCallback, zs = i.unstable_NormalPriority, Ws = {
                $$typeof: m,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };

            function js() {
                return {controller: new Ns, data: new Map, refCount: 0}
            }

            function Bs(t) {
                t.refCount--, 0 === t.refCount && Os(zs, (function () {
                    t.controller.abort()
                }))
            }

            var Hs = null, Us = 0, Vs = 0, Gs = null;

            function qs() {
                if (0 === --Us && null !== Hs) {
                    null !== Gs && (Gs.status = "fulfilled");
                    var t = Hs;
                    Hs = null, Vs = 0, Gs = null;
                    for (var e = 0; e < t.length; e++) (0, t[e])()
                }
            }

            var Xs = P.S;
            P.S = function (t, e) {
                "object" === typeof e && null !== e && "function" === typeof e.then && function (t, e) {
                    if (null === Hs) {
                        var n = Hs = [];
                        Us = 0, Vs = Au(), Gs = {
                            status: "pending", value: void 0, then: function (t) {
                                n.push(t)
                            }
                        }
                    }
                    Us++, e.then(qs, qs)
                }(0, e), null !== Xs && Xs(t, e)
            };
            var Ks = q(null);

            function Ys() {
                var t = Ks.current;
                return null !== t ? t : ec.pooledCache
            }

            function Qs(t, e) {
                K(Ks, null === e ? Ks.current : e.pool)
            }

            function $s() {
                var t = Ys();
                return null === t ? null : {parent: Ws._currentValue, pool: t}
            }

            var Js = 0, Zs = null, ta = null, ea = null, na = !1, ia = !1, sa = !1, aa = 0, ra = 0, oa = null, la = 0;

            function ca() {
                throw Error(r(321))
            }

            function ua(t, e) {
                if (null === e) return !1;
                for (var n = 0; n < e.length && n < t.length; n++) if (!Kn(t[n], e[n])) return !1;
                return !0
            }

            function ha(t, e, n, i, s, a) {
                return Js = a, Zs = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, P.H = null === t || null === t.memoizedState ? xr : Er, sa = !1, a = n(i, s), sa = !1, ia && (a = fa(e, n, i, s)), da(t), a
            }

            function da(t) {
                P.H = Sr;
                var e = null !== ta && null !== ta.next;
                if (Js = 0, ea = ta = Zs = null, na = !1, ra = 0, oa = null, e) throw Error(r(300));
                null === t || Ur || null !== (t = t.dependencies) && _o(t) && (Ur = !0)
            }

            function fa(t, e, n, i) {
                Zs = t;
                var s = 0;
                do {
                    if (ia && (oa = null), ra = 0, ia = !1, 25 <= s) throw Error(r(301));
                    if (s += 1, ea = ta = null, null != t.updateQueue) {
                        var a = t.updateQueue;
                        a.lastEffect = null, a.events = null, a.stores = null, null != a.memoCache && (a.memoCache.index = 0)
                    }
                    P.H = Cr, a = e(n, i)
                } while (ia);
                return a
            }

            function pa() {
                var t = P.H, e = t.useState()[0];
                return e = "function" === typeof e.then ? wa(e) : e, t = t.useState()[0], (null !== ta ? ta.memoizedState : null) !== t && (Zs.flags |= 1024), e
            }

            function ga() {
                var t = 0 !== aa;
                return aa = 0, t
            }

            function ma(t, e, n) {
                e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
            }

            function va(t) {
                if (na) {
                    for (t = t.memoizedState; null !== t;) {
                        var e = t.queue;
                        null !== e && (e.pending = null), t = t.next
                    }
                    na = !1
                }
                Js = 0, ea = ta = Zs = null, ia = !1, ra = aa = 0, oa = null
            }

            function ba() {
                var t = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === ea ? Zs.memoizedState = ea = t : ea = ea.next = t, ea
            }

            function ya() {
                if (null === ta) {
                    var t = Zs.alternate;
                    t = null !== t ? t.memoizedState : null
                } else t = ta.next;
                var e = null === ea ? Zs.memoizedState : ea.next;
                if (null !== e) ea = e, ta = t; else {
                    if (null === t) {
                        if (null === Zs.alternate) throw Error(r(467));
                        throw Error(r(310))
                    }
                    t = {
                        memoizedState: (ta = t).memoizedState,
                        baseState: ta.baseState,
                        baseQueue: ta.baseQueue,
                        queue: ta.queue,
                        next: null
                    }, null === ea ? Zs.memoizedState = ea = t : ea = ea.next = t
                }
                return ea
            }

            function wa(t) {
                var e = ra;
                return ra += 1, null === oa && (oa = []), t = hs(oa, t, e), e = Zs, null === (null === ea ? e.memoizedState : ea.next) && (e = e.alternate, P.H = null === e || null === e.memoizedState ? xr : Er), t
            }

            function Aa(t) {
                if (null !== t && "object" === typeof t) {
                    if ("function" === typeof t.then) return wa(t);
                    if (t.$$typeof === m) return xo(t)
                }
                throw Error(r(438, String(t)))
            }

            function ka(t) {
                var e = null, n = Zs.updateQueue;
                if (null !== n && (e = n.memoCache), null == e) {
                    var i = Zs.alternate;
                    null !== i && (null !== (i = i.updateQueue) && (null != (i = i.memoCache) && (e = {
                        data: i.data.map((function (t) {
                            return t.slice()
                        })), index: 0
                    })))
                }
                if (null == e && (e = {data: [], index: 0}), null === n && (n = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Zs.updateQueue = n), n.memoCache = e, void 0 === (n = e.data[e.index])) for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = _;
                return e.index++, n
            }

            function _a(t, e) {
                return "function" === typeof e ? e(t) : e
            }

            function Sa(t) {
                return xa(ya(), ta, t)
            }

            function xa(t, e, n) {
                var i = t.queue;
                if (null === i) throw Error(r(311));
                i.lastRenderedReducer = n;
                var s = t.baseQueue, a = i.pending;
                if (null !== a) {
                    if (null !== s) {
                        var o = s.next;
                        s.next = a.next, a.next = o
                    }
                    e.baseQueue = s = a, i.pending = null
                }
                if (a = t.baseState, null === s) t.memoizedState = a; else {
                    var l = o = null, c = null, u = e = s.next, h = !1;
                    do {
                        var d = -536870913 & u.lane;
                        if (d !== u.lane ? (ic & d) === d : (Js & d) === d) {
                            var f = u.revertLane;
                            if (0 === f) null !== c && (c = c.next = {
                                lane: 0,
                                revertLane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }), d === Vs && (h = !0); else {
                                if ((Js & f) === f) {
                                    u = u.next, f === Vs && (h = !0);
                                    continue
                                }
                                d = {
                                    lane: 0,
                                    revertLane: u.revertLane,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                }, null === c ? (l = c = d, o = a) : c = c.next = d, Zs.lanes |= f, hc |= f
                            }
                            d = u.action, sa && n(a, d), a = u.hasEagerState ? u.eagerState : n(a, d)
                        } else f = {
                            lane: d,
                            revertLane: u.revertLane,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }, null === c ? (l = c = f, o = a) : c = c.next = f, Zs.lanes |= d, hc |= d;
                        u = u.next
                    } while (null !== u && u !== e);
                    if (null === c ? o = a : c.next = l, !Kn(a, t.memoizedState) && (Ur = !0, h && null !== (n = Gs))) throw n;
                    t.memoizedState = a, t.baseState = o, t.baseQueue = c, i.lastRenderedState = a
                }
                return null === s && (i.lanes = 0), [t.memoizedState, i.dispatch]
            }

            function Ea(t) {
                var e = ya(), n = e.queue;
                if (null === n) throw Error(r(311));
                n.lastRenderedReducer = t;
                var i = n.dispatch, s = n.pending, a = e.memoizedState;
                if (null !== s) {
                    n.pending = null;
                    var o = s = s.next;
                    do {
                        a = t(a, o.action), o = o.next
                    } while (o !== s);
                    Kn(a, e.memoizedState) || (Ur = !0), e.memoizedState = a, null === e.baseQueue && (e.baseState = a), n.lastRenderedState = a
                }
                return [a, i]
            }

            function Ca(t, e, n) {
                var i = Zs, s = ya(), a = Qi;
                if (a) {
                    if (void 0 === n) throw Error(r(407));
                    n = n()
                } else n = e();
                var o = !Kn((ta || s).memoizedState, n);
                if (o && (s.memoizedState = n, Ur = !0), s = s.queue, Ja(Pa.bind(null, i, s, t), [t]), s.getSnapshot !== e || o || null !== ea && 1 & ea.memoizedState.tag) {
                    if (i.flags |= 2048, Xa(9, Ta.bind(null, i, s, n, e), {destroy: void 0}, null), null === ec) throw Error(r(349));
                    a || 0 !== (60 & Js) || Ma(i, e, n)
                }
                return n
            }

            function Ma(t, e, n) {
                t.flags |= 16384, t = {
                    getSnapshot: e,
                    value: n
                }, null === (e = Zs.updateQueue) ? (e = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Zs.updateQueue = e, e.stores = [t]) : null === (n = e.stores) ? e.stores = [t] : n.push(t)
            }

            function Ta(t, e, n, i) {
                e.value = n, e.getSnapshot = i, Ra(e) && La(t)
            }

            function Pa(t, e, n) {
                return n((function () {
                    Ra(e) && La(t)
                }))
            }

            function Ra(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !Kn(t, n)
                } catch (i) {
                    return !0
                }
            }

            function La(t) {
                var e = Ti(t, 2);
                null !== e && Lc(e, t, 2)
            }

            function Fa(t) {
                var e = ba();
                if ("function" === typeof t) {
                    var n = t;
                    if (t = n(), sa) {
                        yt(!0);
                        try {
                            n()
                        } finally {
                            yt(!1)
                        }
                    }
                }
                return e.memoizedState = e.baseState = t, e.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: _a,
                    lastRenderedState: t
                }, e
            }

            function Ia(t, e, n, i) {
                return t.baseState = n, xa(t, ta, "function" === typeof i ? i : _a)
            }

            function Da(t, e, n, i, s) {
                if (Ar(t)) throw Error(r(485));
                if (null !== (t = e.action)) {
                    var a = {
                        payload: s,
                        action: t,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function (t) {
                            a.listeners.push(t)
                        }
                    };
                    null !== P.T ? n(!0) : a.isTransition = !1, i(a), null === (n = e.pending) ? (a.next = e.pending = a, Na(e, a)) : (a.next = n.next, e.pending = n.next = a)
                }
            }

            function Na(t, e) {
                var n = e.action, i = e.payload, s = t.state;
                if (e.isTransition) {
                    var a = P.T, r = {};
                    P.T = r;
                    try {
                        var o = n(s, i), l = P.S;
                        null !== l && l(r, o), Oa(t, e, o)
                    } catch (c) {
                        Wa(t, e, c)
                    } finally {
                        P.T = a
                    }
                } else try {
                    Oa(t, e, a = n(s, i))
                } catch (u) {
                    Wa(t, e, u)
                }
            }

            function Oa(t, e, n) {
                null !== n && "object" === typeof n && "function" === typeof n.then ? n.then((function (n) {
                    za(t, e, n)
                }), (function (n) {
                    return Wa(t, e, n)
                })) : za(t, e, n)
            }

            function za(t, e, n) {
                e.status = "fulfilled", e.value = n, ja(e), t.state = n, null !== (e = t.pending) && ((n = e.next) === e ? t.pending = null : (n = n.next, e.next = n, Na(t, n)))
            }

            function Wa(t, e, n) {
                var i = t.pending;
                if (t.pending = null, null !== i) {
                    i = i.next;
                    do {
                        e.status = "rejected", e.reason = n, ja(e), e = e.next
                    } while (e !== i)
                }
                t.action = null
            }

            function ja(t) {
                t = t.listeners;
                for (var e = 0; e < t.length; e++) (0, t[e])()
            }

            function Ba(t, e) {
                return e
            }

            function Ha(t, e) {
                if (Qi) {
                    var n = ec.formState;
                    if (null !== n) {
                        t: {
                            var i = Zs;
                            if (Qi) {
                                if (Yi) {
                                    e: {
                                        for (var s = Yi, a = Ji; 8 !== s.nodeType;) {
                                            if (!a) {
                                                s = null;
                                                break e
                                            }
                                            if (null === (s = oh(s.nextSibling))) {
                                                s = null;
                                                break e
                                            }
                                        }
                                        s = "F!" === (a = s.data) || "F" === a ? s : null
                                    }
                                    if (s) {
                                        Yi = oh(s.nextSibling), i = "F!" === s.data;
                                        break t
                                    }
                                }
                                ts(i)
                            }
                            i = !1
                        }
                        i && (e = n[0])
                    }
                }
                return (n = ba()).memoizedState = n.baseState = e, i = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ba,
                    lastRenderedState: e
                }, n.queue = i, n = br.bind(null, Zs, i), i.dispatch = n, i = Fa(!1), a = wr.bind(null, Zs, !1, i.queue), s = {
                    state: e,
                    dispatch: null,
                    action: t,
                    pending: null
                }, (i = ba()).queue = s, n = Da.bind(null, Zs, s, a, n), s.dispatch = n, i.memoizedState = t, [e, n, !1]
            }

            function Ua(t) {
                return Va(ya(), ta, t)
            }

            function Va(t, e, n) {
                e = xa(t, e, Ba)[0], t = Sa(_a)[0], e = "object" === typeof e && null !== e && "function" === typeof e.then ? wa(e) : e;
                var i = ya(), s = i.queue, a = s.dispatch;
                return n !== i.memoizedState && (Zs.flags |= 2048, Xa(9, Ga.bind(null, s, n), {destroy: void 0}, null)), [e, a, t]
            }

            function Ga(t, e) {
                t.action = e
            }

            function qa(t) {
                var e = ya(), n = ta;
                if (null !== n) return Va(e, n, t);
                ya(), e = e.memoizedState;
                var i = (n = ya()).queue.dispatch;
                return n.memoizedState = t, [e, i, !1]
            }

            function Xa(t, e, n, i) {
                return t = {
                    tag: t,
                    create: e,
                    inst: n,
                    deps: i,
                    next: null
                }, null === (e = Zs.updateQueue) && (e = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Zs.updateQueue = e), null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t
            }

            function Ka() {
                return ya().memoizedState
            }

            function Ya(t, e, n, i) {
                var s = ba();
                Zs.flags |= t, s.memoizedState = Xa(1 | e, n, {destroy: void 0}, void 0 === i ? null : i)
            }

            function Qa(t, e, n, i) {
                var s = ya();
                i = void 0 === i ? null : i;
                var a = s.memoizedState.inst;
                null !== ta && null !== i && ua(i, ta.memoizedState.deps) ? s.memoizedState = Xa(e, n, a, i) : (Zs.flags |= t, s.memoizedState = Xa(1 | e, n, a, i))
            }

            function $a(t, e) {
                Ya(8390656, 8, t, e)
            }

            function Ja(t, e) {
                Qa(2048, 8, t, e)
            }

            function Za(t, e) {
                return Qa(4, 2, t, e)
            }

            function tr(t, e) {
                return Qa(4, 4, t, e)
            }

            function er(t, e) {
                if ("function" === typeof e) {
                    t = t();
                    var n = e(t);
                    return function () {
                        "function" === typeof n ? n() : e(null)
                    }
                }
                if (null !== e && void 0 !== e) return t = t(), e.current = t, function () {
                    e.current = null
                }
            }

            function nr(t, e, n) {
                n = null !== n && void 0 !== n ? n.concat([t]) : null, Qa(4, 4, er.bind(null, e, t), n)
            }

            function ir() {
            }

            function sr(t, e) {
                var n = ya();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                return null !== e && ua(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
            }

            function ar(t, e) {
                var n = ya();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                if (null !== e && ua(e, i[1])) return i[0];
                if (i = t(), sa) {
                    yt(!0);
                    try {
                        t()
                    } finally {
                        yt(!1)
                    }
                }
                return n.memoizedState = [i, e], i
            }

            function rr(t, e, n) {
                return void 0 === n || 0 !== (1073741824 & Js) ? t.memoizedState = e : (t.memoizedState = n, t = Rc(), Zs.lanes |= t, hc |= t, n)
            }

            function or(t, e, n, i) {
                return Kn(n, e) ? n : null !== _s.current ? (t = rr(t, n, i), Kn(t, e) || (Ur = !0), t) : 0 === (42 & Js) ? (Ur = !0, t.memoizedState = n) : (t = Rc(), Zs.lanes |= t, hc |= t, e)
            }

            function lr(t, e, n, i, s) {
                var a = H.p;
                H.p = 0 !== a && 8 > a ? a : 8;
                var r = P.T, o = {};
                P.T = o, wr(t, !1, e, n);
                try {
                    var l = s(), c = P.S;
                    if (null !== c && c(o, l), null !== l && "object" === typeof l && "function" === typeof l.then) yr(t, e, function (t, e) {
                        var n = [], i = {
                            status: "pending", value: null, reason: null, then: function (t) {
                                n.push(t)
                            }
                        };
                        return t.then((function () {
                            i.status = "fulfilled", i.value = e;
                            for (var t = 0; t < n.length; t++) (0, n[t])(e)
                        }), (function (t) {
                            for (i.status = "rejected", i.reason = t, t = 0; t < n.length; t++) (0, n[t])(void 0)
                        })), i
                    }(l, i), Pc()); else yr(t, e, i, Pc())
                } catch (u) {
                    yr(t, e, {
                        then: function () {
                        }, status: "rejected", reason: u
                    }, Pc())
                } finally {
                    H.p = a, P.T = r
                }
            }

            function cr() {
            }

            function ur(t, e, n, i) {
                if (5 !== t.tag) throw Error(r(476));
                var s = hr(t).queue;
                lr(t, s, e, U, null === n ? cr : function () {
                    return dr(t), n(i)
                })
            }

            function hr(t) {
                var e = t.memoizedState;
                if (null !== e) return e;
                var n = {};
                return (e = {
                    memoizedState: U,
                    baseState: U,
                    baseQueue: null,
                    queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: U},
                    next: null
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: n},
                    next: null
                }, t.memoizedState = e, null !== (t = t.alternate) && (t.memoizedState = e), e
            }

            function dr(t) {
                yr(t, hr(t).next.queue, {}, Pc())
            }

            function fr() {
                return xo(Nh)
            }

            function pr() {
                return ya().memoizedState
            }

            function gr() {
                return ya().memoizedState
            }

            function mr(t) {
                for (var e = t.return; null !== e;) {
                    switch (e.tag) {
                        case 24:
                        case 3:
                            var n = Pc(), i = Lo(e, t = Ro(n), n);
                            return null !== i && (Lc(i, e, n), Fo(i, e, n)), e = {cache: js()}, void (t.payload = e)
                    }
                    e = e.return
                }
            }

            function vr(t, e, n) {
                var i = Pc();
                n = {
                    lane: i,
                    revertLane: 0,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Ar(t) ? kr(e, n) : null !== (n = Mi(t, e, n, i)) && (Lc(n, t, i), _r(n, e, i))
            }

            function br(t, e, n) {
                yr(t, e, n, Pc())
            }

            function yr(t, e, n, i) {
                var s = {lane: i, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (Ar(t)) kr(e, s); else {
                    var a = t.alternate;
                    if (0 === t.lanes && (null === a || 0 === a.lanes) && null !== (a = e.lastRenderedReducer)) try {
                        var r = e.lastRenderedState, o = a(r, n);
                        if (s.hasEagerState = !0, s.eagerState = o, Kn(o, r)) return Ci(t, e, s, 0), null === ec && Ei(), !1
                    } catch (l) {
                    }
                    if (null !== (n = Mi(t, e, s, i))) return Lc(n, t, i), _r(n, e, i), !0
                }
                return !1
            }

            function wr(t, e, n, i) {
                if (i = {
                    lane: 2,
                    revertLane: Au(),
                    action: i,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Ar(t)) {
                    if (e) throw Error(r(479))
                } else null !== (e = Mi(t, n, i, 2)) && Lc(e, t, 2)
            }

            function Ar(t) {
                var e = t.alternate;
                return t === Zs || null !== e && e === Zs
            }

            function kr(t, e) {
                ia = na = !0;
                var n = t.pending;
                null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
            }

            function _r(t, e, n) {
                if (0 !== (4194176 & n)) {
                    var i = e.lanes;
                    n |= i &= t.pendingLanes, e.lanes = n, It(t, n)
                }
            }

            var Sr = {
                readContext: xo,
                use: Aa,
                useCallback: ca,
                useContext: ca,
                useEffect: ca,
                useImperativeHandle: ca,
                useLayoutEffect: ca,
                useInsertionEffect: ca,
                useMemo: ca,
                useReducer: ca,
                useRef: ca,
                useState: ca,
                useDebugValue: ca,
                useDeferredValue: ca,
                useTransition: ca,
                useSyncExternalStore: ca,
                useId: ca
            };
            Sr.useCacheRefresh = ca, Sr.useMemoCache = ca, Sr.useHostTransitionStatus = ca, Sr.useFormState = ca, Sr.useActionState = ca, Sr.useOptimistic = ca;
            var xr = {
                readContext: xo, use: Aa, useCallback: function (t, e) {
                    return ba().memoizedState = [t, void 0 === e ? null : e], t
                }, useContext: xo, useEffect: $a, useImperativeHandle: function (t, e, n) {
                    n = null !== n && void 0 !== n ? n.concat([t]) : null, Ya(4194308, 4, er.bind(null, e, t), n)
                }, useLayoutEffect: function (t, e) {
                    return Ya(4194308, 4, t, e)
                }, useInsertionEffect: function (t, e) {
                    Ya(4, 2, t, e)
                }, useMemo: function (t, e) {
                    var n = ba();
                    e = void 0 === e ? null : e;
                    var i = t();
                    if (sa) {
                        yt(!0);
                        try {
                            t()
                        } finally {
                            yt(!1)
                        }
                    }
                    return n.memoizedState = [i, e], i
                }, useReducer: function (t, e, n) {
                    var i = ba();
                    if (void 0 !== n) {
                        var s = n(e);
                        if (sa) {
                            yt(!0);
                            try {
                                n(e)
                            } finally {
                                yt(!1)
                            }
                        }
                    } else s = e;
                    return i.memoizedState = i.baseState = s, t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: s
                    }, i.queue = t, t = t.dispatch = vr.bind(null, Zs, t), [i.memoizedState, t]
                }, useRef: function (t) {
                    return t = {current: t}, ba().memoizedState = t
                }, useState: function (t) {
                    var e = (t = Fa(t)).queue, n = br.bind(null, Zs, e);
                    return e.dispatch = n, [t.memoizedState, n]
                }, useDebugValue: ir, useDeferredValue: function (t, e) {
                    return rr(ba(), t, e)
                }, useTransition: function () {
                    var t = Fa(!1);
                    return t = lr.bind(null, Zs, t.queue, !0, !1), ba().memoizedState = t, [!1, t]
                }, useSyncExternalStore: function (t, e, n) {
                    var i = Zs, s = ba();
                    if (Qi) {
                        if (void 0 === n) throw Error(r(407));
                        n = n()
                    } else {
                        if (n = e(), null === ec) throw Error(r(349));
                        0 !== (60 & ic) || Ma(i, e, n)
                    }
                    s.memoizedState = n;
                    var a = {value: n, getSnapshot: e};
                    return s.queue = a, $a(Pa.bind(null, i, a, t), [t]), i.flags |= 2048, Xa(9, Ta.bind(null, i, a, n, e), {destroy: void 0}, null), n
                }, useId: function () {
                    var t = ba(), e = ec.identifierPrefix;
                    if (Qi) {
                        var n = Ui;
                        e = ":" + e + "R" + (n = (Hi & ~(1 << 32 - wt(Hi) - 1)).toString(32) + n), 0 < (n = aa++) && (e += "H" + n.toString(32)), e += ":"
                    } else e = ":" + e + "r" + (n = la++).toString(32) + ":";
                    return t.memoizedState = e
                }, useCacheRefresh: function () {
                    return ba().memoizedState = mr.bind(null, Zs)
                }
            };
            xr.useMemoCache = ka, xr.useHostTransitionStatus = fr, xr.useFormState = Ha, xr.useActionState = Ha, xr.useOptimistic = function (t) {
                var e = ba();
                e.memoizedState = e.baseState = t;
                var n = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
                return e.queue = n, e = wr.bind(null, Zs, !0, n), n.dispatch = e, [t, e]
            };
            var Er = {
                readContext: xo,
                use: Aa,
                useCallback: sr,
                useContext: xo,
                useEffect: Ja,
                useImperativeHandle: nr,
                useInsertionEffect: Za,
                useLayoutEffect: tr,
                useMemo: ar,
                useReducer: Sa,
                useRef: Ka,
                useState: function () {
                    return Sa(_a)
                },
                useDebugValue: ir,
                useDeferredValue: function (t, e) {
                    return or(ya(), ta.memoizedState, t, e)
                },
                useTransition: function () {
                    var t = Sa(_a)[0], e = ya().memoizedState;
                    return ["boolean" === typeof t ? t : wa(t), e]
                },
                useSyncExternalStore: Ca,
                useId: pr
            };
            Er.useCacheRefresh = gr, Er.useMemoCache = ka, Er.useHostTransitionStatus = fr, Er.useFormState = Ua, Er.useActionState = Ua, Er.useOptimistic = function (t, e) {
                return Ia(ya(), 0, t, e)
            };
            var Cr = {
                readContext: xo,
                use: Aa,
                useCallback: sr,
                useContext: xo,
                useEffect: Ja,
                useImperativeHandle: nr,
                useInsertionEffect: Za,
                useLayoutEffect: tr,
                useMemo: ar,
                useReducer: Ea,
                useRef: Ka,
                useState: function () {
                    return Ea(_a)
                },
                useDebugValue: ir,
                useDeferredValue: function (t, e) {
                    var n = ya();
                    return null === ta ? rr(n, t, e) : or(n, ta.memoizedState, t, e)
                },
                useTransition: function () {
                    var t = Ea(_a)[0], e = ya().memoizedState;
                    return ["boolean" === typeof t ? t : wa(t), e]
                },
                useSyncExternalStore: Ca,
                useId: pr
            };

            function Mr(t, e, n, i) {
                n = null === (n = n(i, e = t.memoizedState)) || void 0 === n ? e : R({}, e, n), t.memoizedState = n, 0 === t.lanes && (t.updateQueue.baseState = n)
            }

            Cr.useCacheRefresh = gr, Cr.useMemoCache = ka, Cr.useHostTransitionStatus = fr, Cr.useFormState = qa, Cr.useActionState = qa, Cr.useOptimistic = function (t, e) {
                var n = ya();
                return null !== ta ? Ia(n, 0, t, e) : (n.baseState = t, [t, n.queue.dispatch])
            };
            var Tr = {
                isMounted: function (t) {
                    return !!(t = t._reactInternals) && O(t) === t
                }, enqueueSetState: function (t, e, n) {
                    t = t._reactInternals;
                    var i = Pc(), s = Ro(i);
                    s.payload = e, void 0 !== n && null !== n && (s.callback = n), null !== (e = Lo(t, s, i)) && (Lc(e, t, i), Fo(e, t, i))
                }, enqueueReplaceState: function (t, e, n) {
                    t = t._reactInternals;
                    var i = Pc(), s = Ro(i);
                    s.tag = 1, s.payload = e, void 0 !== n && null !== n && (s.callback = n), null !== (e = Lo(t, s, i)) && (Lc(e, t, i), Fo(e, t, i))
                }, enqueueForceUpdate: function (t, e) {
                    t = t._reactInternals;
                    var n = Pc(), i = Ro(n);
                    i.tag = 2, void 0 !== e && null !== e && (i.callback = e), null !== (e = Lo(t, i, n)) && (Lc(e, t, n), Fo(e, t, n))
                }
            };

            function Pr(t, e, n, i, s, a, r) {
                return "function" === typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(i, a, r) : !e.prototype || !e.prototype.isPureReactComponent || (!Yn(n, i) || !Yn(s, a))
            }

            function Rr(t, e, n, i) {
                t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, i), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Tr.enqueueReplaceState(e, e.state, null)
            }

            function Lr(t, e) {
                var n = e;
                if ("ref" in e) for (var i in n = {}, e) "ref" !== i && (n[i] = e[i]);
                if (t = t.defaultProps) for (var s in n === e && (n = R({}, n)), t) void 0 === n[s] && (n[s] = t[s]);
                return n
            }

            var Fr = "function" === typeof reportError ? reportError : function (t) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var e = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof t && null !== t && "string" === typeof t.message ? String(t.message) : String(t),
                        error: t
                    });
                    if (!window.dispatchEvent(e)) return
                } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", t);
                console.error(t)
            };

            function Ir(t) {
                Fr(t)
            }

            function Dr(t) {
                console.error(t)
            }

            function Nr(t) {
                Fr(t)
            }

            function Or(t, e) {
                try {
                    (0, t.onUncaughtError)(e.value, {componentStack: e.stack})
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }

            function zr(t, e, n) {
                try {
                    (0, t.onCaughtError)(n.value, {
                        componentStack: n.stack,
                        errorBoundary: 1 === e.tag ? e.stateNode : null
                    })
                } catch (i) {
                    setTimeout((function () {
                        throw i
                    }))
                }
            }

            function Wr(t, e, n) {
                return (n = Ro(n)).tag = 3, n.payload = {element: null}, n.callback = function () {
                    Or(t, e)
                }, n
            }

            function jr(t) {
                return (t = Ro(t)).tag = 3, t
            }

            function Br(t, e, n, i) {
                var s = n.type.getDerivedStateFromError;
                if ("function" === typeof s) {
                    var a = i.value;
                    t.payload = function () {
                        return s(a)
                    }, t.callback = function () {
                        zr(e, n, i)
                    }
                }
                var r = n.stateNode;
                null !== r && "function" === typeof r.componentDidCatch && (t.callback = function () {
                    zr(e, n, i), "function" !== typeof s && (null === kc ? kc = new Set([this]) : kc.add(this));
                    var t = i.stack;
                    this.componentDidCatch(i.value, {componentStack: null !== t ? t : ""})
                })
            }

            var Hr = Error(r(461)), Ur = !1;

            function Vr(t, e, n, i) {
                e.child = null === t ? ks(e, null, n, i) : As(e, t.child, n, i)
            }

            function Gr(t, e, n, i, s) {
                n = n.render;
                var a = e.ref;
                if ("ref" in i) {
                    var r = {};
                    for (var o in i) "ref" !== o && (r[o] = i[o])
                } else r = i;
                return So(e), i = ha(t, e, n, r, a, s), o = ga(), null === t || Ur ? (Qi && o && qi(e), e.flags |= 1, Vr(t, e, i, s), e.child) : (ma(t, e, s), ho(t, e, s))
            }

            function qr(t, e, n, i, s) {
                if (null === t) {
                    var a = n.type;
                    return "function" !== typeof a || Nl(a) || void 0 !== a.defaultProps || null !== n.compare ? ((t = Wl(n.type, null, i, e, e.mode, s)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, Xr(t, e, a, i, s))
                }
                if (a = t.child, !fo(t, s)) {
                    var r = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : Yn)(r, i) && t.ref === e.ref) return ho(t, e, s)
                }
                return e.flags |= 1, (t = Ol(a, i)).ref = e.ref, t.return = e, e.child = t
            }

            function Xr(t, e, n, i, s) {
                if (null !== t) {
                    var a = t.memoizedProps;
                    if (Yn(a, i) && t.ref === e.ref) {
                        if (Ur = !1, e.pendingProps = i = a, !fo(t, s)) return e.lanes = t.lanes, ho(t, e, s);
                        0 !== (131072 & t.flags) && (Ur = !0)
                    }
                }
                return $r(t, e, n, i, s)
            }

            function Kr(t, e, n) {
                var i = e.pendingProps, s = i.children, a = 0 !== (2 & e.stateNode._pendingVisibility),
                    r = null !== t ? t.memoizedState : null;
                if (Qr(t, e), "hidden" === i.mode || a) {
                    if (0 !== (128 & e.flags)) {
                        if (i = null !== r ? r.baseLanes | n : n, null !== t) {
                            for (s = e.child = t.child, a = 0; null !== s;) a = a | s.lanes | s.childLanes, s = s.sibling;
                            e.childLanes = a & ~i
                        } else e.childLanes = 0, e.child = null;
                        return Yr(t, e, i, n)
                    }
                    if (0 === (536870912 & n)) return e.lanes = e.childLanes = 536870912, Yr(t, e, null !== r ? r.baseLanes | n : n, n);
                    e.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    }, null !== t && Qs(0, null !== r ? r.cachePool : null), null !== r ? xs(e, r) : Es(), Rs(e)
                } else null !== r ? (Qs(0, r.cachePool), xs(e, r), Ls(), e.memoizedState = null) : (null !== t && Qs(0, null), Es(), Ls());
                return Vr(t, e, s, n), e.child
            }

            function Yr(t, e, n, i) {
                var s = Ys();
                return s = null === s ? null : {parent: Ws._currentValue, pool: s}, e.memoizedState = {
                    baseLanes: n,
                    cachePool: s
                }, null !== t && Qs(0, null), Es(), Rs(e), null !== t && ko(t, e, i, !0), null
            }

            function Qr(t, e) {
                var n = e.ref;
                if (null === n) null !== t && null !== t.ref && (e.flags |= 2097664); else {
                    if ("function" !== typeof n && "object" !== typeof n) throw Error(r(284));
                    null !== t && t.ref === n || (e.flags |= 2097664)
                }
            }

            function $r(t, e, n, i, s) {
                return So(e), n = ha(t, e, n, i, void 0, s), i = ga(), null === t || Ur ? (Qi && i && qi(e), e.flags |= 1, Vr(t, e, n, s), e.child) : (ma(t, e, s), ho(t, e, s))
            }

            function Jr(t, e, n, i, s, a) {
                return So(e), e.updateQueue = null, n = fa(e, i, n, s), da(t), i = ga(), null === t || Ur ? (Qi && i && qi(e), e.flags |= 1, Vr(t, e, n, a), e.child) : (ma(t, e, a), ho(t, e, a))
            }

            function Zr(t, e, n, i, s) {
                if (So(e), null === e.stateNode) {
                    var a = Li, r = n.contextType;
                    "object" === typeof r && null !== r && (a = xo(r)), a = new n(i, a), e.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, a.updater = Tr, e.stateNode = a, a._reactInternals = e, (a = e.stateNode).props = i, a.state = e.memoizedState, a.refs = {}, To(e), r = n.contextType, a.context = "object" === typeof r && null !== r ? xo(r) : Li, a.state = e.memoizedState, "function" === typeof (r = n.getDerivedStateFromProps) && (Mr(e, n, r, i), a.state = e.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (r = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), r !== a.state && Tr.enqueueReplaceState(a, a.state, null), Oo(e, i, a, s), No(), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308), i = !0
                } else if (null === t) {
                    a = e.stateNode;
                    var o = e.memoizedProps, l = Lr(n, o);
                    a.props = l;
                    var c = a.context, u = n.contextType;
                    r = Li, "object" === typeof u && null !== u && (r = xo(u));
                    var h = n.getDerivedStateFromProps;
                    u = "function" === typeof h || "function" === typeof a.getSnapshotBeforeUpdate, o = e.pendingProps !== o, u || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (o || c !== r) && Rr(e, a, i, r), Mo = !1;
                    var d = e.memoizedState;
                    a.state = d, Oo(e, i, a, s), No(), c = e.memoizedState, o || d !== c || Mo ? ("function" === typeof h && (Mr(e, n, h, i), c = e.memoizedState), (l = Mo || Pr(e, n, l, i, d, c, r)) ? (u || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (e.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = c), a.props = i, a.state = c, a.context = r, i = l) : ("function" === typeof a.componentDidMount && (e.flags |= 4194308), i = !1)
                } else {
                    a = e.stateNode, Po(t, e), u = Lr(n, r = e.memoizedProps), a.props = u, h = e.pendingProps, d = a.context, c = n.contextType, l = Li, "object" === typeof c && null !== c && (l = xo(c)), (c = "function" === typeof (o = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (r !== h || d !== l) && Rr(e, a, i, l), Mo = !1, d = e.memoizedState, a.state = d, Oo(e, i, a, s), No();
                    var f = e.memoizedState;
                    r !== h || d !== f || Mo || null !== t && null !== t.dependencies && _o(t.dependencies) ? ("function" === typeof o && (Mr(e, n, o, i), f = e.memoizedState), (u = Mo || Pr(e, n, u, i, d, f, l) || null !== t && null !== t.dependencies && _o(t.dependencies)) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(i, f, l), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(i, f, l)), "function" === typeof a.componentDidUpdate && (e.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (e.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || r === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || r === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = f), a.props = i, a.state = f, a.context = l, i = u) : ("function" !== typeof a.componentDidUpdate || r === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || r === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), i = !1)
                }
                return a = i, Qr(t, e), i = 0 !== (128 & e.flags), a || i ? (a = e.stateNode, n = i && "function" !== typeof n.getDerivedStateFromError ? null : a.render(), e.flags |= 1, null !== t && i ? (e.child = As(e, t.child, null, s), e.child = As(e, null, n, s)) : Vr(t, e, n, s), e.memoizedState = a.state, t = e.child) : t = ho(t, e, s), t
            }

            function to(t, e, n, i) {
                return ss(), e.flags |= 256, Vr(t, e, n, i), e.child
            }

            var eo = {dehydrated: null, treeContext: null, retryLane: 0};

            function no(t) {
                return {baseLanes: t, cachePool: $s()}
            }

            function io(t, e, n) {
                return t = null !== t ? t.childLanes & ~n : 0, e && (t |= pc), t
            }

            function so(t, e, n) {
                var i, s = e.pendingProps, a = !1, o = 0 !== (128 & e.flags);
                if ((i = o) || (i = (null === t || null !== t.memoizedState) && 0 !== (2 & Is.current)), i && (a = !0, e.flags &= -129), i = 0 !== (32 & e.flags), e.flags &= -33, null === t) {
                    if (Qi) {
                        if (a ? Ps(e) : Ls(), Qi) {
                            var l, c = Yi;
                            if (l = c) {
                                t: {
                                    for (l = c, c = Ji; 8 !== l.nodeType;) {
                                        if (!c) {
                                            c = null;
                                            break t
                                        }
                                        if (null === (l = oh(l.nextSibling))) {
                                            c = null;
                                            break t
                                        }
                                    }
                                    c = l
                                }
                                null !== c ? (e.memoizedState = {
                                    dehydrated: c,
                                    treeContext: null !== Bi ? {id: Hi, overflow: Ui} : null,
                                    retryLane: 536870912
                                }, (l = Dl(18, null, null, 0)).stateNode = c, l.return = e, e.child = l, Ki = e, Yi = null, l = !0) : l = !1
                            }
                            l || ts(e)
                        }
                        if (null !== (c = e.memoizedState) && null !== (c = c.dehydrated)) return "$!" === c.data ? e.lanes = 16 : e.lanes = 536870912, null;
                        Fs(e)
                    }
                    return c = s.children, s = s.fallback, a ? (Ls(), c = ro({
                        mode: "hidden",
                        children: c
                    }, a = e.mode), s = jl(s, a, n, null), c.return = e, s.return = e, c.sibling = s, e.child = c, (a = e.child).memoizedState = no(n), a.childLanes = io(t, i, n), e.memoizedState = eo, s) : (Ps(e), ao(e, c))
                }
                if (null !== (l = t.memoizedState) && null !== (c = l.dehydrated)) {
                    if (o) 256 & e.flags ? (Ps(e), e.flags &= -257, e = oo(t, e, n)) : null !== e.memoizedState ? (Ls(), e.child = t.child, e.flags |= 128, e = null) : (Ls(), a = s.fallback, c = e.mode, s = ro({
                        mode: "visible",
                        children: s.children
                    }, c), (a = jl(a, c, n, null)).flags |= 2, s.return = e, a.return = e, s.sibling = a, e.child = s, As(e, t.child, null, n), (s = e.child).memoizedState = no(n), s.childLanes = io(t, i, n), e.memoizedState = eo, e = a); else if (Ps(e), "$!" === c.data) {
                        if (i = c.nextSibling && c.nextSibling.dataset) var u = i.dgst;
                        i = u, (s = Error(r(419))).stack = "", s.digest = i, as({
                            value: s,
                            source: null,
                            stack: null
                        }), e = oo(t, e, n)
                    } else if (Ur || ko(t, e, n, !1), i = 0 !== (n & t.childLanes), Ur || i) {
                        if (null !== (i = ec)) {
                            if (0 !== (42 & (s = n & -n))) s = 1; else switch (s) {
                                case 2:
                                    s = 1;
                                    break;
                                case 8:
                                    s = 4;
                                    break;
                                case 32:
                                    s = 16;
                                    break;
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                    s = 64;
                                    break;
                                case 268435456:
                                    s = 134217728;
                                    break;
                                default:
                                    s = 0
                            }
                            if (0 !== (s = 0 !== (s & (i.suspendedLanes | n)) ? 0 : s) && s !== l.retryLane) throw l.retryLane = s, Ti(t, s), Lc(i, t, s), Hr
                        }
                        "$?" === c.data || Vc(), e = oo(t, e, n)
                    } else "$?" === c.data ? (e.flags |= 128, e.child = t.child, e = ou.bind(null, t), c._reactRetry = e, e = null) : (t = l.treeContext, Yi = oh(c.nextSibling), Ki = e, Qi = !0, $i = null, Ji = !1, null !== t && (Wi[ji++] = Hi, Wi[ji++] = Ui, Wi[ji++] = Bi, Hi = t.id, Ui = t.overflow, Bi = e), (e = ao(e, s.children)).flags |= 4096);
                    return e
                }
                return a ? (Ls(), a = s.fallback, c = e.mode, u = (l = t.child).sibling, (s = Ol(l, {
                    mode: "hidden",
                    children: s.children
                })).subtreeFlags = 31457280 & l.subtreeFlags, null !== u ? a = Ol(u, a) : (a = jl(a, c, n, null)).flags |= 2, a.return = e, s.return = e, s.sibling = a, e.child = s, s = a, a = e.child, null === (c = t.child.memoizedState) ? c = no(n) : (null !== (l = c.cachePool) ? (u = Ws._currentValue, l = l.parent !== u ? {
                    parent: u,
                    pool: u
                } : l) : l = $s(), c = {
                    baseLanes: c.baseLanes | n,
                    cachePool: l
                }), a.memoizedState = c, a.childLanes = io(t, i, n), e.memoizedState = eo, s) : (Ps(e), t = (n = t.child).sibling, (n = Ol(n, {
                    mode: "visible",
                    children: s.children
                })).return = e, n.sibling = null, null !== t && (null === (i = e.deletions) ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = n, e.memoizedState = null, n)
            }

            function ao(t, e) {
                return (e = ro({mode: "visible", children: e}, t.mode)).return = t, t.child = e
            }

            function ro(t, e) {
                return Bl(t, e, 0, null)
            }

            function oo(t, e, n) {
                return As(e, t.child, null, n), (t = ao(e, e.pendingProps.children)).flags |= 2, e.memoizedState = null, t
            }

            function lo(t, e, n) {
                t.lanes |= e;
                var i = t.alternate;
                null !== i && (i.lanes |= e), wo(t.return, e, n)
            }

            function co(t, e, n, i, s) {
                var a = t.memoizedState;
                null === a ? t.memoizedState = {
                    isBackwards: e,
                    rendering: null,
                    renderingStartTime: 0,
                    last: i,
                    tail: n,
                    tailMode: s
                } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = i, a.tail = n, a.tailMode = s)
            }

            function uo(t, e, n) {
                var i = e.pendingProps, s = i.revealOrder, a = i.tail;
                if (Vr(t, e, i.children, n), 0 !== (2 & (i = Is.current))) i = 1 & i | 2, e.flags |= 128; else {
                    if (null !== t && 0 !== (128 & t.flags)) t: for (t = e.child; null !== t;) {
                        if (13 === t.tag) null !== t.memoizedState && lo(t, n, e); else if (19 === t.tag) lo(t, n, e); else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break t;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) break t;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    i &= 1
                }
                switch (K(Is, i), s) {
                    case "forwards":
                        for (n = e.child, s = null; null !== n;) null !== (t = n.alternate) && null === Ds(t) && (s = n), n = n.sibling;
                        null === (n = s) ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), co(e, !1, s, n, a);
                        break;
                    case "backwards":
                        for (n = null, s = e.child, e.child = null; null !== s;) {
                            if (null !== (t = s.alternate) && null === Ds(t)) {
                                e.child = s;
                                break
                            }
                            t = s.sibling, s.sibling = n, n = s, s = t
                        }
                        co(e, !0, n, null, a);
                        break;
                    case "together":
                        co(e, !1, null, null, void 0);
                        break;
                    default:
                        e.memoizedState = null
                }
                return e.child
            }

            function ho(t, e, n) {
                if (null !== t && (e.dependencies = t.dependencies), hc |= e.lanes, 0 === (n & e.childLanes)) {
                    if (null === t) return null;
                    if (ko(t, e, n, !1), 0 === (n & e.childLanes)) return null
                }
                if (null !== t && e.child !== t.child) throw Error(r(153));
                if (null !== e.child) {
                    for (n = Ol(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Ol(t, t.pendingProps)).return = e;
                    n.sibling = null
                }
                return e.child
            }

            function fo(t, e) {
                return 0 !== (t.lanes & e) || !(null === (t = t.dependencies) || !_o(t))
            }

            function po(t, e, n) {
                if (null !== t) if (t.memoizedProps !== e.pendingProps) Ur = !0; else {
                    if (!fo(t, n) && 0 === (128 & e.flags)) return Ur = !1, function (t, e, n) {
                        switch (e.tag) {
                            case 3:
                                Z(e, e.stateNode.containerInfo), bo(e, Ws, t.memoizedState.cache), ss();
                                break;
                            case 27:
                            case 5:
                                et(e);
                                break;
                            case 4:
                                Z(e, e.stateNode.containerInfo);
                                break;
                            case 10:
                                bo(e, e.type, e.memoizedProps.value);
                                break;
                            case 13:
                                var i = e.memoizedState;
                                if (null !== i) return null !== i.dehydrated ? (Ps(e), e.flags |= 128, null) : 0 !== (n & e.child.childLanes) ? so(t, e, n) : (Ps(e), null !== (t = ho(t, e, n)) ? t.sibling : null);
                                Ps(e);
                                break;
                            case 19:
                                var s = 0 !== (128 & t.flags);
                                if ((i = 0 !== (n & e.childLanes)) || (ko(t, e, n, !1), i = 0 !== (n & e.childLanes)), s) {
                                    if (i) return uo(t, e, n);
                                    e.flags |= 128
                                }
                                if (null !== (s = e.memoizedState) && (s.rendering = null, s.tail = null, s.lastEffect = null), K(Is, Is.current), i) break;
                                return null;
                            case 22:
                            case 23:
                                return e.lanes = 0, Kr(t, e, n);
                            case 24:
                                bo(e, Ws, t.memoizedState.cache)
                        }
                        return ho(t, e, n)
                    }(t, e, n);
                    Ur = 0 !== (131072 & t.flags)
                } else Ur = !1, Qi && 0 !== (1048576 & e.flags) && Gi(e, zi, e.index);
                switch (e.lanes = 0, e.tag) {
                    case 16:
                        t: {
                            t = e.pendingProps;
                            var i = e.elementType, s = i._init;
                            if (i = s(i._payload), e.type = i, "function" !== typeof i) {
                                if (void 0 !== i && null !== i) {
                                    if ((s = i.$$typeof) === v) {
                                        e.tag = 11, e = Gr(null, e, i, t, n);
                                        break t
                                    }
                                    if (s === w) {
                                        e.tag = 14, e = qr(null, e, i, t, n);
                                        break t
                                    }
                                }
                                throw e = C(i) || i, Error(r(306, e, ""))
                            }
                            Nl(i) ? (t = Lr(i, t), e.tag = 1, e = Zr(null, e, i, t, n)) : (e.tag = 0, e = $r(null, e, i, t, n))
                        }
                        return e;
                    case 0:
                        return $r(t, e, e.type, e.pendingProps, n);
                    case 1:
                        return Zr(t, e, i = e.type, s = Lr(i, e.pendingProps), n);
                    case 3:
                        t: {
                            if (Z(e, e.stateNode.containerInfo), null === t) throw Error(r(387));
                            var a = e.pendingProps;
                            i = (s = e.memoizedState).element, Po(t, e), Oo(e, a, null, n);
                            var o = e.memoizedState;
                            if (a = o.cache, bo(e, Ws, a), a !== s.cache && Ao(e, [Ws], n, !0), No(), a = o.element, s.isDehydrated) {
                                if (s = {
                                    element: a,
                                    isDehydrated: !1,
                                    cache: o.cache
                                }, e.updateQueue.baseState = s, e.memoizedState = s, 256 & e.flags) {
                                    e = to(t, e, a, n);
                                    break t
                                }
                                if (a !== i) {
                                    as(i = Ii(Error(r(424)), e)), e = to(t, e, a, n);
                                    break t
                                }
                                for (Yi = oh(e.stateNode.containerInfo.firstChild), Ki = e, Qi = !0, $i = null, Ji = !0, n = ks(e, null, a, n), e.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (ss(), a === i) {
                                    e = ho(t, e, n);
                                    break t
                                }
                                Vr(t, e, a, n)
                            }
                            e = e.child
                        }
                        return e;
                    case 26:
                        return Qr(t, e), null === t ? (n = mh(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Qi || (n = e.type, t = e.pendingProps, (i = Yu($.current).createElement(n))[zt] = e, i[Wt] = t, qu(i, n, t), $t(i), e.stateNode = i) : e.memoizedState = mh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
                    case 27:
                        return et(e), null === t && Qi && (i = e.stateNode = ch(e.type, e.pendingProps, $.current), Ki = e, Ji = !0, Yi = oh(i.firstChild)), i = e.pendingProps.children, null !== t || Qi ? Vr(t, e, i, n) : e.child = As(e, null, i, n), Qr(t, e), e.child;
                    case 5:
                        return null === t && Qi && ((s = i = Yi) && (null !== (i = function (t, e, n, i) {
                            for (; 1 === t.nodeType;) {
                                var s = n;
                                if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                                    if (!i && ("INPUT" !== t.nodeName || "hidden" !== t.type)) break
                                } else if (i) {
                                    if (!t[Gt]) switch (e) {
                                        case "meta":
                                            if (!t.hasAttribute("itemprop")) break;
                                            return t;
                                        case "link":
                                            if ("stylesheet" === (a = t.getAttribute("rel")) && t.hasAttribute("data-precedence")) break;
                                            if (a !== s.rel || t.getAttribute("href") !== (null == s.href ? null : s.href) || t.getAttribute("crossorigin") !== (null == s.crossOrigin ? null : s.crossOrigin) || t.getAttribute("title") !== (null == s.title ? null : s.title)) break;
                                            return t;
                                        case "style":
                                            if (t.hasAttribute("data-precedence")) break;
                                            return t;
                                        case "script":
                                            if (((a = t.getAttribute("src")) !== (null == s.src ? null : s.src) || t.getAttribute("type") !== (null == s.type ? null : s.type) || t.getAttribute("crossorigin") !== (null == s.crossOrigin ? null : s.crossOrigin)) && a && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                                            return t;
                                        default:
                                            return t
                                    }
                                } else {
                                    if ("input" !== e || "hidden" !== t.type) return t;
                                    var a = null == s.name ? null : "" + s.name;
                                    if ("hidden" === s.type && t.getAttribute("name") === a) return t
                                }
                                if (null === (t = oh(t.nextSibling))) break
                            }
                            return null
                        }(i, e.type, e.pendingProps, Ji)) ? (e.stateNode = i, Ki = e, Yi = oh(i.firstChild), Ji = !1, s = !0) : s = !1), s || ts(e)), et(e), s = e.type, a = e.pendingProps, o = null !== t ? t.memoizedProps : null, i = a.children, Ju(s, a) ? i = null : null !== o && Ju(s, o) && (e.flags |= 32), null !== e.memoizedState && (s = ha(t, e, pa, null, null, n), Nh._currentValue = s), Qr(t, e), Vr(t, e, i, n), e.child;
                    case 6:
                        return null === t && Qi && ((t = n = Yi) && (null !== (n = function (t, e, n) {
                            if ("" === e) return null;
                            for (; 3 !== t.nodeType;) {
                                if ((1 !== t.nodeType || "INPUT" !== t.nodeName || "hidden" !== t.type) && !n) return null;
                                if (null === (t = oh(t.nextSibling))) return null
                            }
                            return t
                        }(n, e.pendingProps, Ji)) ? (e.stateNode = n, Ki = e, Yi = null, t = !0) : t = !1), t || ts(e)), null;
                    case 13:
                        return so(t, e, n);
                    case 4:
                        return Z(e, e.stateNode.containerInfo), i = e.pendingProps, null === t ? e.child = As(e, null, i, n) : Vr(t, e, i, n), e.child;
                    case 11:
                        return Gr(t, e, e.type, e.pendingProps, n);
                    case 7:
                        return Vr(t, e, e.pendingProps, n), e.child;
                    case 8:
                    case 12:
                        return Vr(t, e, e.pendingProps.children, n), e.child;
                    case 10:
                        return i = e.pendingProps, bo(e, e.type, i.value), Vr(t, e, i.children, n), e.child;
                    case 9:
                        return s = e.type._context, i = e.pendingProps.children, So(e), i = i(s = xo(s)), e.flags |= 1, Vr(t, e, i, n), e.child;
                    case 14:
                        return qr(t, e, e.type, e.pendingProps, n);
                    case 15:
                        return Xr(t, e, e.type, e.pendingProps, n);
                    case 19:
                        return uo(t, e, n);
                    case 22:
                        return Kr(t, e, n);
                    case 24:
                        return So(e), i = xo(Ws), null === t ? (null === (s = Ys()) && (s = ec, a = js(), s.pooledCache = a, a.refCount++, null !== a && (s.pooledCacheLanes |= n), s = a), e.memoizedState = {
                            parent: i,
                            cache: s
                        }, To(e), bo(e, Ws, s)) : (0 !== (t.lanes & n) && (Po(t, e), Oo(e, null, null, n), No()), s = t.memoizedState, a = e.memoizedState, s.parent !== i ? (s = {
                            parent: i,
                            cache: i
                        }, e.memoizedState = s, 0 === e.lanes && (e.memoizedState = e.updateQueue.baseState = s), bo(e, Ws, i)) : (i = a.cache, bo(e, Ws, i), i !== s.cache && Ao(e, [Ws], n, !0))), Vr(t, e, e.pendingProps.children, n), e.child;
                    case 29:
                        throw e.pendingProps
                }
                throw Error(r(156, e.tag))
            }

            var go = q(null), mo = null, vo = null;

            function bo(t, e, n) {
                K(go, e._currentValue), e._currentValue = n
            }

            function yo(t) {
                t._currentValue = go.current, X(go)
            }

            function wo(t, e, n) {
                for (; null !== t;) {
                    var i = t.alternate;
                    if ((t.childLanes & e) !== e ? (t.childLanes |= e, null !== i && (i.childLanes |= e)) : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
                    t = t.return
                }
            }

            function Ao(t, e, n, i) {
                var s = t.child;
                for (null !== s && (s.return = t); null !== s;) {
                    var a = s.dependencies;
                    if (null !== a) {
                        var o = s.child;
                        a = a.firstContext;
                        t: for (; null !== a;) {
                            var l = a;
                            a = s;
                            for (var c = 0; c < e.length; c++) if (l.context === e[c]) {
                                a.lanes |= n, null !== (l = a.alternate) && (l.lanes |= n), wo(a.return, n, t), i || (o = null);
                                break t
                            }
                            a = l.next
                        }
                    } else if (18 === s.tag) {
                        if (null === (o = s.return)) throw Error(r(341));
                        o.lanes |= n, null !== (a = o.alternate) && (a.lanes |= n), wo(o, n, t), o = null
                    } else o = s.child;
                    if (null !== o) o.return = s; else for (o = s; null !== o;) {
                        if (o === t) {
                            o = null;
                            break
                        }
                        if (null !== (s = o.sibling)) {
                            s.return = o.return, o = s;
                            break
                        }
                        o = o.return
                    }
                    s = o
                }
            }

            function ko(t, e, n, i) {
                t = null;
                for (var s = e, a = !1; null !== s;) {
                    if (!a) if (0 !== (524288 & s.flags)) a = !0; else if (0 !== (262144 & s.flags)) break;
                    if (10 === s.tag) {
                        var o = s.alternate;
                        if (null === o) throw Error(r(387));
                        if (null !== (o = o.memoizedProps)) {
                            var l = s.type;
                            Kn(s.pendingProps.value, o.value) || (null !== t ? t.push(l) : t = [l])
                        }
                    } else if (s === J.current) {
                        if (null === (o = s.alternate)) throw Error(r(387));
                        o.memoizedState.memoizedState !== s.memoizedState.memoizedState && (null !== t ? t.push(Nh) : t = [Nh])
                    }
                    s = s.return
                }
                null !== t && Ao(e, t, n, i), e.flags |= 262144
            }

            function _o(t) {
                for (t = t.firstContext; null !== t;) {
                    if (!Kn(t.context._currentValue, t.memoizedValue)) return !0;
                    t = t.next
                }
                return !1
            }

            function So(t) {
                mo = t, vo = null, null !== (t = t.dependencies) && (t.firstContext = null)
            }

            function xo(t) {
                return Co(mo, t)
            }

            function Eo(t, e) {
                return null === mo && So(t), Co(t, e)
            }

            function Co(t, e) {
                var n = e._currentValue;
                if (e = {context: e, memoizedValue: n, next: null}, null === vo) {
                    if (null === t) throw Error(r(308));
                    vo = e, t.dependencies = {lanes: 0, firstContext: e}, t.flags |= 524288
                } else vo = vo.next = e;
                return n
            }

            var Mo = !1;

            function To(t) {
                t.updateQueue = {
                    baseState: t.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, lanes: 0, hiddenCallbacks: null},
                    callbacks: null
                }
            }

            function Po(t, e) {
                t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    callbacks: null
                })
            }

            function Ro(t) {
                return {lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function Lo(t, e, n) {
                var i = t.updateQueue;
                if (null === i) return null;
                if (i = i.shared, 0 !== (2 & tc)) {
                    var s = i.pending;
                    return null === s ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, e = Ri(t), Pi(t, null, n), e
                }
                return Ci(t, i, e, n), Ri(t)
            }

            function Fo(t, e, n) {
                if (null !== (e = e.updateQueue) && (e = e.shared, 0 !== (4194176 & n))) {
                    var i = e.lanes;
                    n |= i &= t.pendingLanes, e.lanes = n, It(t, n)
                }
            }

            function Io(t, e) {
                var n = t.updateQueue, i = t.alternate;
                if (null !== i && n === (i = i.updateQueue)) {
                    var s = null, a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var r = {lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null};
                            null === a ? s = a = r : a = a.next = r, n = n.next
                        } while (null !== n);
                        null === a ? s = a = e : a = a.next = e
                    } else s = a = e;
                    return n = {
                        baseState: i.baseState,
                        firstBaseUpdate: s,
                        lastBaseUpdate: a,
                        shared: i.shared,
                        callbacks: i.callbacks
                    }, void (t.updateQueue = n)
                }
                null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
            }

            var Do = !1;

            function No() {
                if (Do) {
                    if (null !== Gs) throw Gs
                }
            }

            function Oo(t, e, n, i) {
                Do = !1;
                var s = t.updateQueue;
                Mo = !1;
                var a = s.firstBaseUpdate, r = s.lastBaseUpdate, o = s.shared.pending;
                if (null !== o) {
                    s.shared.pending = null;
                    var l = o, c = l.next;
                    l.next = null, null === r ? a = c : r.next = c, r = l;
                    var u = t.alternate;
                    null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== r && (null === o ? u.firstBaseUpdate = c : o.next = c, u.lastBaseUpdate = l))
                }
                if (null !== a) {
                    var h = s.baseState;
                    for (r = 0, u = c = l = null, o = a; ;) {
                        var d = -536870913 & o.lane, f = d !== o.lane;
                        if (f ? (ic & d) === d : (i & d) === d) {
                            0 !== d && d === Vs && (Do = !0), null !== u && (u = u.next = {
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: null,
                                next: null
                            });
                            t: {
                                var p = t, g = o;
                                d = e;
                                var m = n;
                                switch (g.tag) {
                                    case 1:
                                        if ("function" === typeof (p = g.payload)) {
                                            h = p.call(m, h, d);
                                            break t
                                        }
                                        h = p;
                                        break t;
                                    case 3:
                                        p.flags = -65537 & p.flags | 128;
                                    case 0:
                                        if (null === (d = "function" === typeof (p = g.payload) ? p.call(m, h, d) : p) || void 0 === d) break t;
                                        h = R({}, h, d);
                                        break t;
                                    case 2:
                                        Mo = !0
                                }
                            }
                            null !== (d = o.callback) && (t.flags |= 64, f && (t.flags |= 8192), null === (f = s.callbacks) ? s.callbacks = [d] : f.push(d))
                        } else f = {
                            lane: d,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null
                        }, null === u ? (c = u = f, l = h) : u = u.next = f, r |= d;
                        if (null === (o = o.next)) {
                            if (null === (o = s.shared.pending)) break;
                            o = (f = o).next, f.next = null, s.lastBaseUpdate = f, s.shared.pending = null
                        }
                    }
                    null === u && (l = h), s.baseState = l, s.firstBaseUpdate = c, s.lastBaseUpdate = u, null === a && (s.shared.lanes = 0), hc |= r, t.lanes = r, t.memoizedState = h
                }
            }

            function zo(t, e) {
                if ("function" !== typeof t) throw Error(r(191, t));
                t.call(e)
            }

            function Wo(t, e) {
                var n = t.callbacks;
                if (null !== n) for (t.callbacks = null, t = 0; t < n.length; t++) zo(n[t], e)
            }

            function jo(t, e) {
                try {
                    var n = e.updateQueue, i = null !== n ? n.lastEffect : null;
                    if (null !== i) {
                        var s = i.next;
                        n = s;
                        do {
                            if ((n.tag & t) === t) {
                                i = void 0;
                                var a = n.create, r = n.inst;
                                i = a(), r.destroy = i
                            }
                            n = n.next
                        } while (n !== s)
                    }
                } catch (o) {
                    iu(e, e.return, o)
                }
            }

            function Bo(t, e, n) {
                try {
                    var i = e.updateQueue, s = null !== i ? i.lastEffect : null;
                    if (null !== s) {
                        var a = s.next;
                        i = a;
                        do {
                            if ((i.tag & t) === t) {
                                var r = i.inst, o = r.destroy;
                                if (void 0 !== o) {
                                    r.destroy = void 0, s = e;
                                    var l = n;
                                    try {
                                        o()
                                    } catch (c) {
                                        iu(s, l, c)
                                    }
                                }
                            }
                            i = i.next
                        } while (i !== a)
                    }
                } catch (c) {
                    iu(e, e.return, c)
                }
            }

            function Ho(t) {
                var e = t.updateQueue;
                if (null !== e) {
                    var n = t.stateNode;
                    try {
                        Wo(e, n)
                    } catch (i) {
                        iu(t, t.return, i)
                    }
                }
            }

            function Uo(t, e, n) {
                n.props = Lr(t.type, t.memoizedProps), n.state = t.memoizedState;
                try {
                    n.componentWillUnmount()
                } catch (i) {
                    iu(t, e, i)
                }
            }

            function Vo(t, e) {
                try {
                    var n = t.ref;
                    if (null !== n) {
                        var i = t.stateNode;
                        switch (t.tag) {
                            case 26:
                            case 27:
                            case 5:
                                var s = i;
                                break;
                            default:
                                s = i
                        }
                        "function" === typeof n ? t.refCleanup = n(s) : n.current = s
                    }
                } catch (a) {
                    iu(t, e, a)
                }
            }

            function Go(t, e) {
                var n = t.ref, i = t.refCleanup;
                if (null !== n) if ("function" === typeof i) try {
                    i()
                } catch (s) {
                    iu(t, e, s)
                } finally {
                    t.refCleanup = null, null != (t = t.alternate) && (t.refCleanup = null)
                } else if ("function" === typeof n) try {
                    n(null)
                } catch (a) {
                    iu(t, e, a)
                } else n.current = null
            }

            function qo(t) {
                var e = t.type, n = t.memoizedProps, i = t.stateNode;
                try {
                    t: switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            n.autoFocus && i.focus();
                            break t;
                        case "img":
                            n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
                    }
                } catch (s) {
                    iu(t, t.return, s)
                }
            }

            function Xo(t, e, n) {
                try {
                    var i = t.stateNode;
                    !function (t, e, n, i) {
                        switch (e) {
                            case "div":
                            case "span":
                            case "svg":
                            case "path":
                            case "a":
                            case "g":
                            case "p":
                            case "li":
                                break;
                            case "input":
                                var s = null, a = null, o = null, l = null, c = null, u = null, h = null;
                                for (p in n) {
                                    var d = n[p];
                                    if (n.hasOwnProperty(p) && null != d) switch (p) {
                                        case "checked":
                                        case "value":
                                            break;
                                        case "defaultValue":
                                            c = d;
                                        default:
                                            i.hasOwnProperty(p) || Vu(t, e, p, null, i, d)
                                    }
                                }
                                for (var f in i) {
                                    var p = i[f];
                                    if (d = n[f], i.hasOwnProperty(f) && (null != p || null != d)) switch (f) {
                                        case "type":
                                            a = p;
                                            break;
                                        case "name":
                                            s = p;
                                            break;
                                        case "checked":
                                            u = p;
                                            break;
                                        case "defaultChecked":
                                            h = p;
                                            break;
                                        case "value":
                                            o = p;
                                            break;
                                        case "defaultValue":
                                            l = p;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != p) throw Error(r(137, e));
                                            break;
                                        default:
                                            p !== d && Vu(t, e, f, p, i, d)
                                    }
                                }
                                return void me(t, o, l, c, u, h, a, s);
                            case "select":
                                for (a in p = o = l = f = null, n) if (c = n[a], n.hasOwnProperty(a) && null != c) switch (a) {
                                    case "value":
                                        break;
                                    case "multiple":
                                        p = c;
                                    default:
                                        i.hasOwnProperty(a) || Vu(t, e, a, null, i, c)
                                }
                                for (s in i) if (a = i[s], c = n[s], i.hasOwnProperty(s) && (null != a || null != c)) switch (s) {
                                    case "value":
                                        f = a;
                                        break;
                                    case "defaultValue":
                                        l = a;
                                        break;
                                    case "multiple":
                                        o = a;
                                    default:
                                        a !== c && Vu(t, e, s, a, i, c)
                                }
                                return e = l, n = o, i = p, void (null != f ? ye(t, !!n, f, !1) : !!i !== !!n && (null != e ? ye(t, !!n, e, !0) : ye(t, !!n, n ? [] : "", !1)));
                            case "textarea":
                                for (l in p = f = null, n) if (s = n[l], n.hasOwnProperty(l) && null != s && !i.hasOwnProperty(l)) switch (l) {
                                    case "value":
                                    case "children":
                                        break;
                                    default:
                                        Vu(t, e, l, null, i, s)
                                }
                                for (o in i) if (s = i[o], a = n[o], i.hasOwnProperty(o) && (null != s || null != a)) switch (o) {
                                    case "value":
                                        f = s;
                                        break;
                                    case "defaultValue":
                                        p = s;
                                        break;
                                    case "children":
                                        break;
                                    case "dangerouslySetInnerHTML":
                                        if (null != s) throw Error(r(91));
                                        break;
                                    default:
                                        s !== a && Vu(t, e, o, s, i, a)
                                }
                                return void we(t, f, p);
                            case "option":
                                for (var g in n) if (f = n[g], n.hasOwnProperty(g) && null != f && !i.hasOwnProperty(g)) if ("selected" === g) t.selected = !1; else Vu(t, e, g, null, i, f);
                                for (c in i) if (f = i[c], p = n[c], i.hasOwnProperty(c) && f !== p && (null != f || null != p)) if ("selected" === c) t.selected = f && "function" !== typeof f && "symbol" !== typeof f; else Vu(t, e, c, f, i, p);
                                return;
                            case "img":
                            case "link":
                            case "area":
                            case "base":
                            case "br":
                            case "col":
                            case "embed":
                            case "hr":
                            case "keygen":
                            case "meta":
                            case "param":
                            case "source":
                            case "track":
                            case "wbr":
                            case "menuitem":
                                for (var m in n) f = n[m], n.hasOwnProperty(m) && null != f && !i.hasOwnProperty(m) && Vu(t, e, m, null, i, f);
                                for (u in i) if (f = i[u], p = n[u], i.hasOwnProperty(u) && f !== p && (null != f || null != p)) switch (u) {
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != f) throw Error(r(137, e));
                                        break;
                                    default:
                                        Vu(t, e, u, f, i, p)
                                }
                                return;
                            default:
                                if (Ee(e)) {
                                    for (var v in n) f = n[v], n.hasOwnProperty(v) && void 0 !== f && !i.hasOwnProperty(v) && Gu(t, e, v, void 0, i, f);
                                    for (h in i) f = i[h], p = n[h], !i.hasOwnProperty(h) || f === p || void 0 === f && void 0 === p || Gu(t, e, h, f, i, p);
                                    return
                                }
                        }
                        for (var b in n) f = n[b], n.hasOwnProperty(b) && null != f && !i.hasOwnProperty(b) && Vu(t, e, b, null, i, f);
                        for (d in i) f = i[d], p = n[d], !i.hasOwnProperty(d) || f === p || null == f && null == p || Vu(t, e, d, f, i, p)
                    }(i, t.type, n, e), i[Wt] = e
                } catch (s) {
                    iu(t, t.return, s)
                }
            }

            function Ko(t) {
                return 5 === t.tag || 3 === t.tag || 26 === t.tag || 27 === t.tag || 4 === t.tag
            }

            function Yo(t) {
                t: for (; ;) {
                    for (; null === t.sibling;) {
                        if (null === t.return || Ko(t.return)) return null;
                        t = t.return
                    }
                    for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 27 !== t.tag && 18 !== t.tag;) {
                        if (2 & t.flags) continue t;
                        if (null === t.child || 4 === t.tag) continue t;
                        t.child.return = t, t = t.child
                    }
                    if (!(2 & t.flags)) return t.stateNode
                }
            }

            function Qo(t, e, n) {
                var i = t.tag;
                if (5 === i || 6 === i) t = t.stateNode, e ? 8 === n.nodeType ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (8 === n.nodeType ? (e = n.parentNode).insertBefore(t, n) : (e = n).appendChild(t), null !== (n = n._reactRootContainer) && void 0 !== n || null !== e.onclick || (e.onclick = Uu)); else if (4 !== i && 27 !== i && null !== (t = t.child)) for (Qo(t, e, n), t = t.sibling; null !== t;) Qo(t, e, n), t = t.sibling
            }

            function $o(t, e, n) {
                var i = t.tag;
                if (5 === i || 6 === i) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t); else if (4 !== i && 27 !== i && null !== (t = t.child)) for ($o(t, e, n), t = t.sibling; null !== t;) $o(t, e, n), t = t.sibling
            }

            var Jo = !1, Zo = !1, tl = !1, el = "function" === typeof WeakSet ? WeakSet : Set, nl = null, il = !1;

            function sl(t, e, n) {
                var i = n.flags;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        vl(t, n), 4 & i && jo(5, n);
                        break;
                    case 1:
                        if (vl(t, n), 4 & i) if (t = n.stateNode, null === e) try {
                            t.componentDidMount()
                        } catch (o) {
                            iu(n, n.return, o)
                        } else {
                            var s = Lr(n.type, e.memoizedProps);
                            e = e.memoizedState;
                            try {
                                t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                            } catch (l) {
                                iu(n, n.return, l)
                            }
                        }
                        64 & i && Ho(n), 512 & i && Vo(n, n.return);
                        break;
                    case 3:
                        if (vl(t, n), 64 & i && null !== (i = n.updateQueue)) {
                            if (t = null, null !== n.child) switch (n.child.tag) {
                                case 27:
                                case 5:
                                case 1:
                                    t = n.child.stateNode
                            }
                            try {
                                Wo(i, t)
                            } catch (o) {
                                iu(n, n.return, o)
                            }
                        }
                        break;
                    case 26:
                        vl(t, n), 512 & i && Vo(n, n.return);
                        break;
                    case 27:
                    case 5:
                        vl(t, n), null === e && 4 & i && qo(n), 512 & i && Vo(n, n.return);
                        break;
                    case 12:
                    default:
                        vl(t, n);
                        break;
                    case 13:
                        vl(t, n), 4 & i && ul(t, n);
                        break;
                    case 22:
                        if (!(s = null !== n.memoizedState || Jo)) {
                            e = null !== e && null !== e.memoizedState || Zo;
                            var a = Jo, r = Zo;
                            Jo = s, (Zo = e) && !r ? yl(t, n, 0 !== (8772 & n.subtreeFlags)) : vl(t, n), Jo = a, Zo = r
                        }
                        512 & i && ("manual" === n.memoizedProps.mode ? Vo(n, n.return) : Go(n, n.return))
                }
            }

            function al(t) {
                var e = t.alternate;
                null !== e && (t.alternate = null, al(e)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && (null !== (e = t.stateNode) && qt(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
            }

            var rl = null, ol = !1;

            function ll(t, e, n) {
                for (n = n.child; null !== n;) cl(t, e, n), n = n.sibling
            }

            function cl(t, e, n) {
                if (bt && "function" === typeof bt.onCommitFiberUnmount) try {
                    bt.onCommitFiberUnmount(vt, n)
                } catch (r) {
                }
                switch (n.tag) {
                    case 26:
                        Zo || Go(n, e), ll(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                        break;
                    case 27:
                        Zo || Go(n, e);
                        var i = rl, s = ol;
                        for (rl = n.stateNode, ll(t, e, n), e = (n = n.stateNode).attributes; e.length;) n.removeAttributeNode(e[0]);
                        qt(n), rl = i, ol = s;
                        break;
                    case 5:
                        Zo || Go(n, e);
                    case 6:
                        s = rl;
                        var a = ol;
                        if (rl = null, ll(t, e, n), ol = a, null !== (rl = s)) if (ol) try {
                            t = rl, i = n.stateNode, 8 === t.nodeType ? t.parentNode.removeChild(i) : t.removeChild(i)
                        } catch (o) {
                            iu(n, e, o)
                        } else try {
                            rl.removeChild(n.stateNode)
                        } catch (o) {
                            iu(n, e, o)
                        }
                        break;
                    case 18:
                        null !== rl && (ol ? (e = rl, n = n.stateNode, 8 === e.nodeType ? ah(e.parentNode, n) : 1 === e.nodeType && ah(e, n), gd(e)) : ah(rl, n.stateNode));
                        break;
                    case 4:
                        i = rl, s = ol, rl = n.stateNode.containerInfo, ol = !0, ll(t, e, n), rl = i, ol = s;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Zo || Bo(2, n, e), Zo || Bo(4, n, e), ll(t, e, n);
                        break;
                    case 1:
                        Zo || (Go(n, e), "function" === typeof (i = n.stateNode).componentWillUnmount && Uo(n, e, i)), ll(t, e, n);
                        break;
                    case 21:
                        ll(t, e, n);
                        break;
                    case 22:
                        Zo || Go(n, e), Zo = (i = Zo) || null !== n.memoizedState, ll(t, e, n), Zo = i;
                        break;
                    default:
                        ll(t, e, n)
                }
            }

            function ul(t, e) {
                if (null === e.memoizedState && (null !== (t = e.alternate) && (null !== (t = t.memoizedState) && null !== (t = t.dehydrated)))) try {
                    gd(t)
                } catch (n) {
                    iu(e, e.return, n)
                }
            }

            function hl(t, e) {
                var n = function (t) {
                    switch (t.tag) {
                        case 13:
                        case 19:
                            var e = t.stateNode;
                            return null === e && (e = t.stateNode = new el), e;
                        case 22:
                            return null === (e = (t = t.stateNode)._retryCache) && (e = t._retryCache = new el), e;
                        default:
                            throw Error(r(435, t.tag))
                    }
                }(t);
                e.forEach((function (e) {
                    var i = lu.bind(null, t, e);
                    n.has(e) || (n.add(e), e.then(i, i))
                }))
            }

            function dl(t, e) {
                var n = e.deletions;
                if (null !== n) for (var i = 0; i < n.length; i++) {
                    var s = n[i], a = t, o = e, l = o;
                    t: for (; null !== l;) {
                        switch (l.tag) {
                            case 27:
                            case 5:
                                rl = l.stateNode, ol = !1;
                                break t;
                            case 3:
                            case 4:
                                rl = l.stateNode.containerInfo, ol = !0;
                                break t
                        }
                        l = l.return
                    }
                    if (null === rl) throw Error(r(160));
                    cl(a, o, s), rl = null, ol = !1, null !== (a = s.alternate) && (a.return = null), s.return = null
                }
                if (13878 & e.subtreeFlags) for (e = e.child; null !== e;) pl(e, t), e = e.sibling
            }

            var fl = null;

            function pl(t, e) {
                var n = t.alternate, i = t.flags;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        dl(e, t), gl(t), 4 & i && (Bo(3, t, t.return), jo(3, t), Bo(5, t, t.return));
                        break;
                    case 1:
                        dl(e, t), gl(t), 512 & i && (Zo || null === n || Go(n, n.return)), 64 & i && Jo && (null !== (t = t.updateQueue) && (null !== (i = t.callbacks) && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = null === n ? i : n.concat(i))));
                        break;
                    case 26:
                        var s = fl;
                        if (dl(e, t), gl(t), 512 & i && (Zo || null === n || Go(n, n.return)), 4 & i) {
                            var a = null !== n ? n.memoizedState : null;
                            if (i = t.memoizedState, null === n) if (null === i) if (null === t.stateNode) {
                                t: {
                                    i = t.type, n = t.memoizedProps, s = s.ownerDocument || s;
                                    e: switch (i) {
                                        case "title":
                                            (!(a = s.getElementsByTagName("title")[0]) || a[Gt] || a[zt] || "http://www.w3.org/2000/svg" === a.namespaceURI || a.hasAttribute("itemprop")) && (a = s.createElement(i), s.head.insertBefore(a, s.querySelector("head > title"))), qu(a, i, n), a[zt] = t, $t(a), i = a;
                                            break t;
                                        case "link":
                                            var o = Ch("link", "href", s).get(i + (n.href || ""));
                                            if (o) for (var l = 0; l < o.length; l++) if ((a = o[l]).getAttribute("href") === (null == n.href ? null : n.href) && a.getAttribute("rel") === (null == n.rel ? null : n.rel) && a.getAttribute("title") === (null == n.title ? null : n.title) && a.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                o.splice(l, 1);
                                                break e
                                            }
                                            qu(a = s.createElement(i), i, n), s.head.appendChild(a);
                                            break;
                                        case "meta":
                                            if (o = Ch("meta", "content", s).get(i + (n.content || ""))) for (l = 0; l < o.length; l++) if ((a = o[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) && a.getAttribute("name") === (null == n.name ? null : n.name) && a.getAttribute("property") === (null == n.property ? null : n.property) && a.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                o.splice(l, 1);
                                                break e
                                            }
                                            qu(a = s.createElement(i), i, n), s.head.appendChild(a);
                                            break;
                                        default:
                                            throw Error(r(468, i))
                                    }
                                    a[zt] = t, $t(a), i = a
                                }
                                t.stateNode = i
                            } else Mh(s, t.type, t.stateNode); else t.stateNode = kh(s, i, t.memoizedProps); else a !== i ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--, null === i ? Mh(s, t.type, t.stateNode) : kh(s, i, t.memoizedProps)) : null === i && null !== t.stateNode && Xo(t, t.memoizedProps, n.memoizedProps)
                        }
                        break;
                    case 27:
                        if (4 & i && null === t.alternate) {
                            s = t.stateNode, a = t.memoizedProps;
                            try {
                                for (var c = s.firstChild; c;) {
                                    var u = c.nextSibling, h = c.nodeName;
                                    c[Gt] || "HEAD" === h || "BODY" === h || "SCRIPT" === h || "STYLE" === h || "LINK" === h && "stylesheet" === c.rel.toLowerCase() || s.removeChild(c), c = u
                                }
                                for (var d = t.type, f = s.attributes; f.length;) s.removeAttributeNode(f[0]);
                                qu(s, d, a), s[zt] = t, s[Wt] = a
                            } catch (g) {
                                iu(t, t.return, g)
                            }
                        }
                    case 5:
                        if (dl(e, t), gl(t), 512 & i && (Zo || null === n || Go(n, n.return)), 32 & t.flags) {
                            s = t.stateNode;
                            try {
                                ke(s, "")
                            } catch (g) {
                                iu(t, t.return, g)
                            }
                        }
                        4 & i && null != t.stateNode && Xo(t, s = t.memoizedProps, null !== n ? n.memoizedProps : s), 1024 & i && (tl = !0);
                        break;
                    case 6:
                        if (dl(e, t), gl(t), 4 & i) {
                            if (null === t.stateNode) throw Error(r(162));
                            i = t.memoizedProps, n = t.stateNode;
                            try {
                                n.nodeValue = i
                            } catch (g) {
                                iu(t, t.return, g)
                            }
                        }
                        break;
                    case 3:
                        if (Eh = null, s = fl, fl = dh(e.containerInfo), dl(e, t), fl = s, gl(t), 4 & i && null !== n && n.memoizedState.isDehydrated) try {
                            gd(e.containerInfo)
                        } catch (g) {
                            iu(t, t.return, g)
                        }
                        tl && (tl = !1, ml(t));
                        break;
                    case 4:
                        i = fl, fl = dh(t.stateNode.containerInfo), dl(e, t), gl(t), fl = i;
                        break;
                    case 12:
                        dl(e, t), gl(t);
                        break;
                    case 13:
                        dl(e, t), gl(t), 8192 & t.child.flags && null !== t.memoizedState !== (null !== n && null !== n.memoizedState) && (yc = lt()), 4 & i && (null !== (i = t.updateQueue) && (t.updateQueue = null, hl(t, i)));
                        break;
                    case 22:
                        if (512 & i && (Zo || null === n || Go(n, n.return)), c = null !== t.memoizedState, u = null !== n && null !== n.memoizedState, Jo = (h = Jo) || c, Zo = (d = Zo) || u, dl(e, t), Zo = d, Jo = h, gl(t), (e = t.stateNode)._current = t, e._visibility &= -3, e._visibility |= 2 & e._pendingVisibility, 8192 & i && (e._visibility = c ? -2 & e._visibility : 1 | e._visibility, c && (e = Jo || Zo, null === n || u || e || bl(t)), null === t.memoizedProps || "manual" !== t.memoizedProps.mode)) t: for (n = null, e = t; ;) {
                            if (5 === e.tag || 26 === e.tag || 27 === e.tag) {
                                if (null === n) {
                                    u = n = e;
                                    try {
                                        if (s = u.stateNode, c) "function" === typeof (a = s.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none"; else {
                                            o = u.stateNode;
                                            var p = void 0 !== (l = u.memoizedProps.style) && null !== l && l.hasOwnProperty("display") ? l.display : null;
                                            o.style.display = null == p || "boolean" === typeof p ? "" : ("" + p).trim()
                                        }
                                    } catch (g) {
                                        iu(u, u.return, g)
                                    }
                                }
                            } else if (6 === e.tag) {
                                if (null === n) {
                                    u = e;
                                    try {
                                        u.stateNode.nodeValue = c ? "" : u.memoizedProps
                                    } catch (g) {
                                        iu(u, u.return, g)
                                    }
                                }
                            } else if ((22 !== e.tag && 23 !== e.tag || null === e.memoizedState || e === t) && null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break t;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break t;
                                n === e && (n = null), e = e.return
                            }
                            n === e && (n = null), e.sibling.return = e.return, e = e.sibling
                        }
                        4 & i && (null !== (i = t.updateQueue) && (null !== (n = i.retryQueue) && (i.retryQueue = null, hl(t, n))));
                        break;
                    case 19:
                        dl(e, t), gl(t), 4 & i && (null !== (i = t.updateQueue) && (t.updateQueue = null, hl(t, i)));
                        break;
                    case 21:
                        break;
                    default:
                        dl(e, t), gl(t)
                }
            }

            function gl(t) {
                var e = t.flags;
                if (2 & e) {
                    try {
                        if (27 !== t.tag) {
                            t: {
                                for (var n = t.return; null !== n;) {
                                    if (Ko(n)) {
                                        var i = n;
                                        break t
                                    }
                                    n = n.return
                                }
                                throw Error(r(160))
                            }
                            switch (i.tag) {
                                case 27:
                                    var s = i.stateNode;
                                    $o(t, Yo(t), s);
                                    break;
                                case 5:
                                    var a = i.stateNode;
                                    32 & i.flags && (ke(a, ""), i.flags &= -33), $o(t, Yo(t), a);
                                    break;
                                case 3:
                                case 4:
                                    var o = i.stateNode.containerInfo;
                                    Qo(t, Yo(t), o);
                                    break;
                                default:
                                    throw Error(r(161))
                            }
                        }
                    } catch (l) {
                        iu(t, t.return, l)
                    }
                    t.flags &= -3
                }
                4096 & e && (t.flags &= -4097)
            }

            function ml(t) {
                if (1024 & t.subtreeFlags) for (t = t.child; null !== t;) {
                    var e = t;
                    ml(e), 5 === e.tag && 1024 & e.flags && e.stateNode.reset(), t = t.sibling
                }
            }

            function vl(t, e) {
                if (8772 & e.subtreeFlags) for (e = e.child; null !== e;) sl(t, e.alternate, e), e = e.sibling
            }

            function bl(t) {
                for (t = t.child; null !== t;) {
                    var e = t;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Bo(4, e, e.return), bl(e);
                            break;
                        case 1:
                            Go(e, e.return);
                            var n = e.stateNode;
                            "function" === typeof n.componentWillUnmount && Uo(e, e.return, n), bl(e);
                            break;
                        case 26:
                        case 27:
                        case 5:
                            Go(e, e.return), bl(e);
                            break;
                        case 22:
                            Go(e, e.return), null === e.memoizedState && bl(e);
                            break;
                        default:
                            bl(e)
                    }
                    t = t.sibling
                }
            }

            function yl(t, e, n) {
                for (n = n && 0 !== (8772 & e.subtreeFlags), e = e.child; null !== e;) {
                    var i = e.alternate, s = t, a = e, r = a.flags;
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                            yl(s, a, n), jo(4, a);
                            break;
                        case 1:
                            if (yl(s, a, n), "function" === typeof (s = (i = a).stateNode).componentDidMount) try {
                                s.componentDidMount()
                            } catch (c) {
                                iu(i, i.return, c)
                            }
                            if (null !== (s = (i = a).updateQueue)) {
                                var o = i.stateNode;
                                try {
                                    var l = s.shared.hiddenCallbacks;
                                    if (null !== l) for (s.shared.hiddenCallbacks = null, s = 0; s < l.length; s++) zo(l[s], o)
                                } catch (c) {
                                    iu(i, i.return, c)
                                }
                            }
                            n && 64 & r && Ho(a), Vo(a, a.return);
                            break;
                        case 26:
                        case 27:
                        case 5:
                            yl(s, a, n), n && null === i && 4 & r && qo(a), Vo(a, a.return);
                            break;
                        case 12:
                        default:
                            yl(s, a, n);
                            break;
                        case 13:
                            yl(s, a, n), n && 4 & r && ul(s, a);
                            break;
                        case 22:
                            null === a.memoizedState && yl(s, a, n), Vo(a, a.return)
                    }
                    e = e.sibling
                }
            }

            function wl(t, e) {
                var n = null;
                null !== t && null !== t.memoizedState && null !== t.memoizedState.cachePool && (n = t.memoizedState.cachePool.pool), t = null, null !== e.memoizedState && null !== e.memoizedState.cachePool && (t = e.memoizedState.cachePool.pool), t !== n && (null != t && t.refCount++, null != n && Bs(n))
            }

            function Al(t, e) {
                t = null, null !== e.alternate && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache) !== t && (e.refCount++, null != t && Bs(t))
            }

            function kl(t, e, n, i) {
                if (10256 & e.subtreeFlags) for (e = e.child; null !== e;) _l(t, e, n, i), e = e.sibling
            }

            function _l(t, e, n, i) {
                var s = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        kl(t, e, n, i), 2048 & s && jo(9, e);
                        break;
                    case 3:
                        kl(t, e, n, i), 2048 & s && (t = null, null !== e.alternate && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache) !== t && (e.refCount++, null != t && Bs(t)));
                        break;
                    case 12:
                        if (2048 & s) {
                            kl(t, e, n, i), t = e.stateNode;
                            try {
                                var a = e.memoizedProps, r = a.id, o = a.onPostCommit;
                                "function" === typeof o && o(r, null === e.alternate ? "mount" : "update", t.passiveEffectDuration, -0)
                            } catch (l) {
                                iu(e, e.return, l)
                            }
                        } else kl(t, e, n, i);
                        break;
                    case 23:
                        break;
                    case 22:
                        a = e.stateNode, null !== e.memoizedState ? 4 & a._visibility ? kl(t, e, n, i) : xl(t, e) : 4 & a._visibility ? kl(t, e, n, i) : (a._visibility |= 4, Sl(t, e, n, i, 0 !== (10256 & e.subtreeFlags))), 2048 & s && wl(e.alternate, e);
                        break;
                    case 24:
                        kl(t, e, n, i), 2048 & s && Al(e.alternate, e);
                        break;
                    default:
                        kl(t, e, n, i)
                }
            }

            function Sl(t, e, n, i, s) {
                for (s = s && 0 !== (10256 & e.subtreeFlags), e = e.child; null !== e;) {
                    var a = t, r = e, o = n, l = i, c = r.flags;
                    switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Sl(a, r, o, l, s), jo(8, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            var u = r.stateNode;
                            null !== r.memoizedState ? 4 & u._visibility ? Sl(a, r, o, l, s) : xl(a, r) : (u._visibility |= 4, Sl(a, r, o, l, s)), s && 2048 & c && wl(r.alternate, r);
                            break;
                        case 24:
                            Sl(a, r, o, l, s), s && 2048 & c && Al(r.alternate, r);
                            break;
                        default:
                            Sl(a, r, o, l, s)
                    }
                    e = e.sibling
                }
            }

            function xl(t, e) {
                if (10256 & e.subtreeFlags) for (e = e.child; null !== e;) {
                    var n = t, i = e, s = i.flags;
                    switch (i.tag) {
                        case 22:
                            xl(n, i), 2048 & s && wl(i.alternate, i);
                            break;
                        case 24:
                            xl(n, i), 2048 & s && Al(i.alternate, i);
                            break;
                        default:
                            xl(n, i)
                    }
                    e = e.sibling
                }
            }

            var El = 8192;

            function Cl(t) {
                if (t.subtreeFlags & El) for (t = t.child; null !== t;) Ml(t), t = t.sibling
            }

            function Ml(t) {
                switch (t.tag) {
                    case 26:
                        Cl(t), t.flags & El && null !== t.memoizedState && function (t, e, n) {
                            if (null === Ph) throw Error(r(475));
                            var i = Ph;
                            if ("stylesheet" === e.type && ("string" !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & e.state.loading)) {
                                if (null === e.instance) {
                                    var s = vh(n.href), a = t.querySelector(bh(s));
                                    if (a) return null !== (t = a._p) && "object" === typeof t && "function" === typeof t.then && (i.count++, i = Lh.bind(i), t.then(i, i)), e.state.loading |= 4, e.instance = a, void $t(a);
                                    a = t.ownerDocument || t, n = yh(n), (s = uh.get(s)) && Sh(n, s), $t(a = a.createElement("link"));
                                    var o = a;
                                    o._p = new Promise((function (t, e) {
                                        o.onload = t, o.onerror = e
                                    })), qu(a, "link", n), e.instance = a
                                }
                                null === i.stylesheets && (i.stylesheets = new Map), i.stylesheets.set(e, t), (t = e.state.preload) && 0 === (3 & e.state.loading) && (i.count++, e = Lh.bind(i), t.addEventListener("load", e), t.addEventListener("error", e))
                            }
                        }(fl, t.memoizedState, t.memoizedProps);
                        break;
                    case 5:
                    default:
                        Cl(t);
                        break;
                    case 3:
                    case 4:
                        var e = fl;
                        fl = dh(t.stateNode.containerInfo), Cl(t), fl = e;
                        break;
                    case 22:
                        null === t.memoizedState && (null !== (e = t.alternate) && null !== e.memoizedState ? (e = El, El = 16777216, Cl(t), El = e) : Cl(t))
                }
            }

            function Tl(t) {
                var e = t.alternate;
                if (null !== e && null !== (t = e.child)) {
                    e.child = null;
                    do {
                        e = t.sibling, t.sibling = null, t = e
                    } while (null !== t)
                }
            }

            function Pl(t) {
                var e = t.deletions;
                if (0 !== (16 & t.flags)) {
                    if (null !== e) for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        nl = i, Fl(i, t)
                    }
                    Tl(t)
                }
                if (10256 & t.subtreeFlags) for (t = t.child; null !== t;) Rl(t), t = t.sibling
            }

            function Rl(t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pl(t), 2048 & t.flags && Bo(9, t, t.return);
                        break;
                    case 3:
                    case 12:
                    default:
                        Pl(t);
                        break;
                    case 22:
                        var e = t.stateNode;
                        null !== t.memoizedState && 4 & e._visibility && (null === t.return || 13 !== t.return.tag) ? (e._visibility &= -5, Ll(t)) : Pl(t)
                }
            }

            function Ll(t) {
                var e = t.deletions;
                if (0 !== (16 & t.flags)) {
                    if (null !== e) for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        nl = i, Fl(i, t)
                    }
                    Tl(t)
                }
                for (t = t.child; null !== t;) {
                    switch ((e = t).tag) {
                        case 0:
                        case 11:
                        case 15:
                            Bo(8, e, e.return), Ll(e);
                            break;
                        case 22:
                            4 & (n = e.stateNode)._visibility && (n._visibility &= -5, Ll(e));
                            break;
                        default:
                            Ll(e)
                    }
                    t = t.sibling
                }
            }

            function Fl(t, e) {
                for (; null !== nl;) {
                    var n = nl;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Bo(8, n, e);
                            break;
                        case 23:
                        case 22:
                            if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                var i = n.memoizedState.cachePool.pool;
                                null != i && i.refCount++
                            }
                            break;
                        case 24:
                            Bs(n.memoizedState.cache)
                    }
                    if (null !== (i = n.child)) i.return = n, nl = i; else t: for (n = t; null !== nl;) {
                        var s = (i = nl).sibling, a = i.return;
                        if (al(i), i === n) {
                            nl = null;
                            break t
                        }
                        if (null !== s) {
                            s.return = a, nl = s;
                            break t
                        }
                        nl = a
                    }
                }
            }

            function Il(t, e, n, i) {
                this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Dl(t, e, n, i) {
                return new Il(t, e, n, i)
            }

            function Nl(t) {
                return !(!(t = t.prototype) || !t.isReactComponent)
            }

            function Ol(t, e) {
                var n = t.alternate;
                return null === n ? ((n = Dl(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 31457280 & t.flags, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
            }

            function zl(t, e) {
                t.flags &= 31457282;
                var n = t.alternate;
                return null === n ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                }), t
            }

            function Wl(t, e, n, i, s, a) {
                var o = 0;
                if (i = t, "function" === typeof t) Nl(t) && (o = 1); else if ("string" === typeof t) o = function (t, e, n) {
                    if (1 === n || null != e.itemProp) return !1;
                    switch (t) {
                        case "meta":
                        case "title":
                            return !0;
                        case "style":
                            if ("string" !== typeof e.precedence || "string" !== typeof e.href || "" === e.href) break;
                            return !0;
                        case "link":
                            if ("string" !== typeof e.rel || "string" !== typeof e.href || "" === e.href || e.onLoad || e.onError) break;
                            return "stylesheet" !== e.rel || (t = e.disabled, "string" === typeof e.precedence && null == t);
                        case "script":
                            if (e.async && "function" !== typeof e.async && "symbol" !== typeof e.async && !e.onLoad && !e.onError && e.src && "string" === typeof e.src) return !0
                    }
                    return !1
                }(t, n, Y.current) ? 26 : "html" === t || "head" === t || "body" === t ? 27 : 5; else t: switch (t) {
                    case h:
                        return jl(n.children, s, a, e);
                    case d:
                        o = 8, s |= 24;
                        break;
                    case f:
                        return (t = Dl(12, n, e, 2 | s)).elementType = f, t.lanes = a, t;
                    case b:
                        return (t = Dl(13, n, e, s)).elementType = b, t.lanes = a, t;
                    case y:
                        return (t = Dl(19, n, e, s)).elementType = y, t.lanes = a, t;
                    case k:
                        return Bl(n, s, a, e);
                    default:
                        if ("object" === typeof t && null !== t) switch (t.$$typeof) {
                            case p:
                            case m:
                                o = 10;
                                break t;
                            case g:
                                o = 9;
                                break t;
                            case v:
                                o = 11;
                                break t;
                            case w:
                                o = 14;
                                break t;
                            case A:
                                o = 16, i = null;
                                break t
                        }
                        o = 29, n = Error(r(130, null === t ? "null" : typeof t, "")), i = null
                }
                return (e = Dl(o, n, e, s)).elementType = t, e.type = i, e.lanes = a, e
            }

            function jl(t, e, n, i) {
                return (t = Dl(7, t, i, e)).lanes = n, t
            }

            function Bl(t, e, n, i) {
                (t = Dl(22, t, i, e)).elementType = k, t.lanes = n;
                var s = {
                    _visibility: 1,
                    _pendingVisibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                    _current: null,
                    detach: function () {
                        var t = s._current;
                        if (null === t) throw Error(r(456));
                        if (0 === (2 & s._pendingVisibility)) {
                            var e = Ti(t, 2);
                            null !== e && (s._pendingVisibility |= 2, Lc(e, t, 2))
                        }
                    },
                    attach: function () {
                        var t = s._current;
                        if (null === t) throw Error(r(456));
                        if (0 !== (2 & s._pendingVisibility)) {
                            var e = Ti(t, 2);
                            null !== e && (s._pendingVisibility &= -3, Lc(e, t, 2))
                        }
                    }
                };
                return t.stateNode = s, t
            }

            function Hl(t, e, n) {
                return (t = Dl(6, t, null, e)).lanes = n, t
            }

            function Ul(t, e, n) {
                return (e = Dl(4, null !== t.children ? t.children : [], t.key, e)).lanes = n, e.stateNode = {
                    containerInfo: t.containerInfo,
                    pendingChildren: null,
                    implementation: t.implementation
                }, e
            }

            function Vl(t) {
                t.flags |= 4
            }

            function Gl(t, e) {
                if ("stylesheet" !== e.type || 0 !== (4 & e.state.loading)) t.flags &= -16777217; else if (t.flags |= 16777216, !Th(e)) {
                    if (null !== (e = Ms.current) && ((4194176 & ic) === ic ? null !== Ts : (62914560 & ic) !== ic && 0 === (536870912 & ic) || e !== Ts)) throw ds = ls, os;
                    t.flags |= 8192
                }
            }

            function ql(t, e) {
                null !== e && (t.flags |= 4), 16384 & t.flags && (e = 22 !== t.tag ? Pt() : 536870912, t.lanes |= e, gc |= e)
            }

            function Xl(t, e) {
                if (!Qi) switch (t.tailMode) {
                    case "hidden":
                        e = t.tail;
                        for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                        null === n ? t.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = t.tail;
                        for (var i = null; null !== n;) null !== n.alternate && (i = n), n = n.sibling;
                        null === i ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : i.sibling = null
                }
            }

            function Kl(t) {
                var e = null !== t.alternate && t.alternate.child === t.child, n = 0, i = 0;
                if (e) for (var s = t.child; null !== s;) n |= s.lanes | s.childLanes, i |= 31457280 & s.subtreeFlags, i |= 31457280 & s.flags, s.return = t, s = s.sibling; else for (s = t.child; null !== s;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
                return t.subtreeFlags |= i, t.childLanes = n, e
            }

            function Yl(t, e, n) {
                var i = e.pendingProps;
                switch (Xi(e), e.tag) {
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                    case 1:
                        return Kl(e), null;
                    case 3:
                        return n = e.stateNode, i = null, null !== t && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), yo(Ws), tt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== t && null !== t.child || (is(e) ? Vl(e) : null === t || t.memoizedState.isDehydrated && 0 === (256 & e.flags) || (e.flags |= 1024, null !== $i && (Ic($i), $i = null))), Kl(e), null;
                    case 26:
                        return n = e.memoizedState, null === t ? (Vl(e), null !== n ? (Kl(e), Gl(e, n)) : (Kl(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Vl(e), Kl(e), Gl(e, n)) : (Kl(e), e.flags &= -16777217) : (t.memoizedProps !== i && Vl(e), Kl(e), e.flags &= -16777217), null;
                    case 27:
                        nt(e), n = $.current;
                        var s = e.type;
                        if (null !== t && null != e.stateNode) t.memoizedProps !== i && Vl(e); else {
                            if (!i) {
                                if (null === e.stateNode) throw Error(r(166));
                                return Kl(e), null
                            }
                            t = Y.current, is(e) ? es(e) : (t = ch(s, i, n), e.stateNode = t, Vl(e))
                        }
                        return Kl(e), null;
                    case 5:
                        if (nt(e), n = e.type, null !== t && null != e.stateNode) t.memoizedProps !== i && Vl(e); else {
                            if (!i) {
                                if (null === e.stateNode) throw Error(r(166));
                                return Kl(e), null
                            }
                            if (t = Y.current, is(e)) es(e); else {
                                switch (s = Yu($.current), t) {
                                    case 1:
                                        t = s.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case 2:
                                        t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    default:
                                        switch (n) {
                                            case "svg":
                                                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                                                break;
                                            case "math":
                                                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                                break;
                                            case "script":
                                                (t = s.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                                break;
                                            case "select":
                                                t = "string" === typeof i.is ? s.createElement("select", {is: i.is}) : s.createElement("select"), i.multiple ? t.multiple = !0 : i.size && (t.size = i.size);
                                                break;
                                            default:
                                                t = "string" === typeof i.is ? s.createElement(n, {is: i.is}) : s.createElement(n)
                                        }
                                }
                                t[zt] = e, t[Wt] = i;
                                t: for (s = e.child; null !== s;) {
                                    if (5 === s.tag || 6 === s.tag) t.appendChild(s.stateNode); else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                                        s.child.return = s, s = s.child;
                                        continue
                                    }
                                    if (s === e) break t;
                                    for (; null === s.sibling;) {
                                        if (null === s.return || s.return === e) break t;
                                        s = s.return
                                    }
                                    s.sibling.return = s.return, s = s.sibling
                                }
                                e.stateNode = t;
                                t: switch (qu(t, n, i), n) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        t = !!i.autoFocus;
                                        break t;
                                    case "img":
                                        t = !0;
                                        break t;
                                    default:
                                        t = !1
                                }
                                t && Vl(e)
                            }
                        }
                        return Kl(e), e.flags &= -16777217, null;
                    case 6:
                        if (t && null != e.stateNode) t.memoizedProps !== i && Vl(e); else {
                            if ("string" !== typeof i && null === e.stateNode) throw Error(r(166));
                            if (t = $.current, is(e)) {
                                if (t = e.stateNode, n = e.memoizedProps, i = null, null !== (s = Ki)) switch (s.tag) {
                                    case 27:
                                    case 5:
                                        i = s.memoizedProps
                                }
                                t[zt] = e, (t = !!(t.nodeValue === n || null !== i && !0 === i.suppressHydrationWarning || Hu(t.nodeValue, n))) || ts(e)
                            } else (t = Yu(t).createTextNode(i))[zt] = e, e.stateNode = t
                        }
                        return Kl(e), null;
                    case 13:
                        if (i = e.memoizedState, null === t || null !== t.memoizedState && null !== t.memoizedState.dehydrated) {
                            if (s = is(e), null !== i && null !== i.dehydrated) {
                                if (null === t) {
                                    if (!s) throw Error(r(318));
                                    if (!(s = null !== (s = e.memoizedState) ? s.dehydrated : null)) throw Error(r(317));
                                    s[zt] = e
                                } else ss(), 0 === (128 & e.flags) && (e.memoizedState = null), e.flags |= 4;
                                Kl(e), s = !1
                            } else null !== $i && (Ic($i), $i = null), s = !0;
                            if (!s) return 256 & e.flags ? (Fs(e), e) : (Fs(e), null)
                        }
                        if (Fs(e), 0 !== (128 & e.flags)) return e.lanes = n, e;
                        if (n = null !== i, t = null !== t && null !== t.memoizedState, n) {
                            s = null, null !== (i = e.child).alternate && null !== i.alternate.memoizedState && null !== i.alternate.memoizedState.cachePool && (s = i.alternate.memoizedState.cachePool.pool);
                            var a = null;
                            null !== i.memoizedState && null !== i.memoizedState.cachePool && (a = i.memoizedState.cachePool.pool), a !== s && (i.flags |= 2048)
                        }
                        return n !== t && n && (e.child.flags |= 8192), ql(e, e.updateQueue), Kl(e), null;
                    case 4:
                        return tt(), null === t && Lu(e.stateNode.containerInfo), Kl(e), null;
                    case 10:
                        return yo(e.type), Kl(e), null;
                    case 19:
                        if (X(Is), null === (s = e.memoizedState)) return Kl(e), null;
                        if (i = 0 !== (128 & e.flags), null === (a = s.rendering)) if (i) Xl(s, !1); else {
                            if (0 !== uc || null !== t && 0 !== (128 & t.flags)) for (t = e.child; null !== t;) {
                                if (null !== (a = Ds(t))) {
                                    for (e.flags |= 128, Xl(s, !1), t = a.updateQueue, e.updateQueue = t, ql(e, t), e.subtreeFlags = 0, t = n, n = e.child; null !== n;) zl(n, t), n = n.sibling;
                                    return K(Is, 1 & Is.current | 2), e.child
                                }
                                t = t.sibling
                            }
                            null !== s.tail && lt() > wc && (e.flags |= 128, i = !0, Xl(s, !1), e.lanes = 4194304)
                        } else {
                            if (!i) if (null !== (t = Ds(a))) {
                                if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, ql(e, t), Xl(s, !0), null === s.tail && "hidden" === s.tailMode && !a.alternate && !Qi) return Kl(e), null
                            } else 2 * lt() - s.renderingStartTime > wc && 536870912 !== n && (e.flags |= 128, i = !0, Xl(s, !1), e.lanes = 4194304);
                            s.isBackwards ? (a.sibling = e.child, e.child = a) : (null !== (t = s.last) ? t.sibling = a : e.child = a, s.last = a)
                        }
                        return null !== s.tail ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = lt(), e.sibling = null, t = Is.current, K(Is, i ? 1 & t | 2 : 1 & t), e) : (Kl(e), null);
                    case 22:
                    case 23:
                        return Fs(e), Cs(), i = null !== e.memoizedState, null !== t ? null !== t.memoizedState !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? 0 !== (536870912 & n) && 0 === (128 & e.flags) && (Kl(e), 6 & e.subtreeFlags && (e.flags |= 8192)) : Kl(e), null !== (n = e.updateQueue) && ql(e, n.retryQueue), n = null, null !== t && null !== t.memoizedState && null !== t.memoizedState.cachePool && (n = t.memoizedState.cachePool.pool), i = null, null !== e.memoizedState && null !== e.memoizedState.cachePool && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), null !== t && X(Ks), null;
                    case 24:
                        return n = null, null !== t && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), yo(Ws), Kl(e), null;
                    case 25:
                        return null
                }
                throw Error(r(156, e.tag))
            }

            function Ql(t, e) {
                switch (Xi(e), e.tag) {
                    case 1:
                        return 65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
                    case 3:
                        return yo(Ws), tt(), 0 !== (65536 & (t = e.flags)) && 0 === (128 & t) ? (e.flags = -65537 & t | 128, e) : null;
                    case 26:
                    case 27:
                    case 5:
                        return nt(e), null;
                    case 13:
                        if (Fs(e), null !== (t = e.memoizedState) && null !== t.dehydrated) {
                            if (null === e.alternate) throw Error(r(340));
                            ss()
                        }
                        return 65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
                    case 19:
                        return X(Is), null;
                    case 4:
                        return tt(), null;
                    case 10:
                        return yo(e.type), null;
                    case 22:
                    case 23:
                        return Fs(e), Cs(), null !== t && X(Ks), 65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
                    case 24:
                        return yo(Ws), null;
                    default:
                        return null
                }
            }

            function $l(t, e) {
                switch (Xi(e), e.tag) {
                    case 3:
                        yo(Ws), tt();
                        break;
                    case 26:
                    case 27:
                    case 5:
                        nt(e);
                        break;
                    case 4:
                        tt();
                        break;
                    case 13:
                        Fs(e);
                        break;
                    case 19:
                        X(Is);
                        break;
                    case 10:
                        yo(e.type);
                        break;
                    case 22:
                    case 23:
                        Fs(e), Cs(), null !== t && X(Ks);
                        break;
                    case 24:
                        yo(Ws)
                }
            }

            var Jl = {
                    getCacheForType: function (t) {
                        var e = xo(Ws), n = e.data.get(t);
                        return void 0 === n && (n = t(), e.data.set(t, n)), n
                    }
                }, Zl = "function" === typeof WeakMap ? WeakMap : Map, tc = 0, ec = null, nc = null, ic = 0, sc = 0,
                ac = null, rc = !1, oc = !1, lc = !1, cc = 0, uc = 0, hc = 0, dc = 0, fc = 0, pc = 0, gc = 0, mc = null,
                vc = null, bc = !1, yc = 0, wc = 1 / 0, Ac = null, kc = null, _c = !1, Sc = null, xc = 0, Ec = 0,
                Cc = null, Mc = 0, Tc = null;

            function Pc() {
                if (0 !== (2 & tc) && 0 !== ic) return ic & -ic;
                if (null !== P.T) {
                    return 0 !== Vs ? Vs : Au()
                }
                return Nt()
            }

            function Rc() {
                0 === pc && (pc = 0 === (536870912 & ic) || Qi ? Tt() : 536870912);
                var t = Ms.current;
                return null !== t && (t.flags |= 32), pc
            }

            function Lc(t, e, n) {
                (t === ec && 2 === sc || null !== t.cancelPendingCommit) && (jc(t, 0), Oc(t, ic, pc, !1)), Lt(t, n), 0 !== (2 & tc) && t === ec || (t === ec && (0 === (2 & tc) && (dc |= n), 4 === uc && Oc(t, ic, pc, !1)), gu(t))
            }

            function Fc(t, e, n) {
                if (0 !== (6 & tc)) throw Error(r(327));
                for (var i = !n && 0 === (60 & e) && 0 === (e & t.expiredLanes) || Ct(t, e), s = i ? function (t, e) {
                    var n = tc;
                    tc |= 2;
                    var i = Hc(), s = Uc();
                    ec !== t || ic !== e ? (Ac = null, wc = lt() + 500, jc(t, e)) : oc = Ct(t, e);
                    t: for (; ;) try {
                        if (0 !== sc && null !== nc) {
                            e = nc;
                            var a = ac;
                            e: switch (sc) {
                                case 1:
                                    sc = 0, ac = null, Qc(t, e, a, 1);
                                    break;
                                case 2:
                                    if (cs(a)) {
                                        sc = 0, ac = null, Yc(e);
                                        break
                                    }
                                    e = function () {
                                        2 === sc && ec === t && (sc = 7), gu(t)
                                    }, a.then(e, e);
                                    break t;
                                case 3:
                                    sc = 7;
                                    break t;
                                case 4:
                                    sc = 5;
                                    break t;
                                case 7:
                                    cs(a) ? (sc = 0, ac = null, Yc(e)) : (sc = 0, ac = null, Qc(t, e, a, 7));
                                    break;
                                case 5:
                                    var o = null;
                                    switch (nc.tag) {
                                        case 26:
                                            o = nc.memoizedState;
                                        case 5:
                                        case 27:
                                            var l = nc;
                                            if (!o || Th(o)) {
                                                sc = 0, ac = null;
                                                var c = l.sibling;
                                                if (null !== c) nc = c; else {
                                                    var u = l.return;
                                                    null !== u ? (nc = u, $c(u)) : nc = null
                                                }
                                                break e
                                            }
                                    }
                                    sc = 0, ac = null, Qc(t, e, a, 5);
                                    break;
                                case 6:
                                    sc = 0, ac = null, Qc(t, e, a, 6);
                                    break;
                                case 8:
                                    Wc(), uc = 6;
                                    break t;
                                default:
                                    throw Error(r(462))
                            }
                        }
                        Xc();
                        break
                    } catch (h) {
                        Bc(t, h)
                    }
                    return vo = mo = null, P.H = i, P.A = s, tc = n, null !== nc ? 0 : (ec = null, ic = 0, Ei(), uc)
                }(t, e) : Gc(t, e, !0), a = i; ;) {
                    if (0 === s) {
                        oc && !i && Oc(t, e, 0, !1);
                        break
                    }
                    if (6 === s) Oc(t, e, 0, !rc); else {
                        if (n = t.current.alternate, a && !Nc(n)) {
                            s = Gc(t, e, !1), a = !1;
                            continue
                        }
                        if (2 === s) {
                            if (a = e, t.errorRecoveryDisabledLanes & a) var o = 0; else o = 0 !== (o = -536870913 & t.pendingLanes) ? o : 536870912 & o ? 536870912 : 0;
                            if (0 !== o) {
                                e = o;
                                t: {
                                    var l = t;
                                    s = mc;
                                    var c = l.current.memoizedState.isDehydrated;
                                    if (c && (jc(l, o).flags |= 256), 2 !== (o = Gc(l, o, !1))) {
                                        if (lc && !c) {
                                            l.errorRecoveryDisabledLanes |= a, dc |= a, s = 4;
                                            break t
                                        }
                                        a = vc, vc = s, null !== a && Ic(a)
                                    }
                                    s = o
                                }
                                if (a = !1, 2 !== s) continue
                            }
                        }
                        if (1 === s) {
                            jc(t, 0), Oc(t, e, 0, !0);
                            break
                        }
                        t: {
                            switch (i = t, s) {
                                case 0:
                                case 1:
                                    throw Error(r(345));
                                case 4:
                                    if ((4194176 & e) === e) {
                                        Oc(i, e, pc, !rc);
                                        break t
                                    }
                                    break;
                                case 2:
                                    vc = null;
                                    break;
                                case 3:
                                case 5:
                                    break;
                                default:
                                    throw Error(r(329))
                            }
                            if (i.finishedWork = n, i.finishedLanes = e, (62914560 & e) === e && 10 < (a = yc + 300 - lt())) {
                                if (Oc(i, e, pc, !rc), 0 !== Et(i, 0)) break t;
                                i.timeoutHandle = th(Dc.bind(null, i, n, vc, Ac, bc, e, pc, dc, gc, rc, 2, -0, 0), a)
                            } else Dc(i, n, vc, Ac, bc, e, pc, dc, gc, rc, 0, -0, 0)
                        }
                    }
                    break
                }
                gu(t)
            }

            function Ic(t) {
                null === vc ? vc = t : vc.push.apply(vc, t)
            }

            function Dc(t, e, n, i, s, a, o, l, c, u, h, d, f) {
                var p = e.subtreeFlags;
                if ((8192 & p || 16785408 === (16785408 & p)) && (Ph = {
                    stylesheets: null,
                    count: 0,
                    unsuspend: Rh
                }, Ml(e), null !== (e = function () {
                    if (null === Ph) throw Error(r(475));
                    var t = Ph;
                    return t.stylesheets && 0 === t.count && Ih(t, t.stylesheets), 0 < t.count ? function (e) {
                        var n = setTimeout((function () {
                            if (t.stylesheets && Ih(t, t.stylesheets), t.unsuspend) {
                                var e = t.unsuspend;
                                t.unsuspend = null, e()
                            }
                        }), 6e4);
                        return t.unsuspend = e, function () {
                            t.unsuspend = null, clearTimeout(n)
                        }
                    } : null
                }()))) return t.cancelPendingCommit = e(Zc.bind(null, t, n, i, s, o, l, c, 1, d, f)), void Oc(t, a, o, !u);
                Zc(t, n, i, s, o, l, c, h, d, f)
            }

            function Nc(t) {
                for (var e = t; ;) {
                    var n = e.tag;
                    if ((0 === n || 11 === n || 15 === n) && 16384 & e.flags && (null !== (n = e.updateQueue) && null !== (n = n.stores))) for (var i = 0; i < n.length; i++) {
                        var s = n[i], a = s.getSnapshot;
                        s = s.value;
                        try {
                            if (!Kn(a(), s)) return !1
                        } catch (r) {
                            return !1
                        }
                    }
                    if (n = e.child, 16384 & e.subtreeFlags && null !== n) n.return = e, e = n; else {
                        if (e === t) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) return !0;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                }
                return !0
            }

            function Oc(t, e, n, i) {
                e &= ~fc, e &= ~dc, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
                for (var s = e; 0 < s;) {
                    var a = 31 - wt(s), r = 1 << a;
                    i[a] = -1, s &= ~r
                }
                0 !== n && Ft(t, n, e)
            }

            function zc() {
                return 0 !== (6 & tc) || (mu(0, !1), !1)
            }

            function Wc() {
                if (null !== nc) {
                    if (0 === sc) var t = nc.return; else vo = mo = null, va(t = nc), ps = null, gs = 0, t = nc;
                    for (; null !== t;) $l(t.alternate, t), t = t.return;
                    nc = null
                }
            }

            function jc(t, e) {
                t.finishedWork = null, t.finishedLanes = 0;
                var n = t.timeoutHandle;
                -1 !== n && (t.timeoutHandle = -1, eh(n)), null !== (n = t.cancelPendingCommit) && (t.cancelPendingCommit = null, n()), Wc(), ec = t, nc = n = Ol(t.current, null), ic = e, sc = 0, ac = null, rc = !1, oc = Ct(t, e), lc = !1, gc = pc = fc = dc = hc = uc = 0, vc = mc = null, bc = !1, 0 !== (8 & e) && (e |= 32 & e);
                var i = t.entangledLanes;
                if (0 !== i) for (t = t.entanglements, i &= e; 0 < i;) {
                    var s = 31 - wt(i), a = 1 << s;
                    e |= t[s], i &= ~a
                }
                return cc = e, Ei(), n
            }

            function Bc(t, e) {
                Zs = null, P.H = Sr, e === rs ? (e = fs(), sc = 3) : e === os ? (e = fs(), sc = 4) : sc = e === Hr ? 8 : null !== e && "object" === typeof e && "function" === typeof e.then ? 6 : 1, ac = e, null === nc && (uc = 1, Or(t, Ii(e, t.current)))
            }

            function Hc() {
                var t = P.H;
                return P.H = Sr, null === t ? Sr : t
            }

            function Uc() {
                var t = P.A;
                return P.A = Jl, t
            }

            function Vc() {
                uc = 4, rc || (4194176 & ic) !== ic && null !== Ms.current || (oc = !0), 0 === (134217727 & hc) && 0 === (134217727 & dc) || null === ec || Oc(ec, ic, pc, !1)
            }

            function Gc(t, e, n) {
                var i = tc;
                tc |= 2;
                var s = Hc(), a = Uc();
                ec === t && ic === e || (Ac = null, jc(t, e)), e = !1;
                var r = uc;
                t: for (; ;) try {
                    if (0 !== sc && null !== nc) {
                        var o = nc, l = ac;
                        switch (sc) {
                            case 8:
                                Wc(), r = 6;
                                break t;
                            case 3:
                            case 2:
                            case 6:
                                null === Ms.current && (e = !0);
                                var c = sc;
                                if (sc = 0, ac = null, Qc(t, o, l, c), n && oc) {
                                    r = 0;
                                    break t
                                }
                                break;
                            default:
                                c = sc, sc = 0, ac = null, Qc(t, o, l, c)
                        }
                    }
                    qc(), r = uc;
                    break
                } catch (u) {
                    Bc(t, u)
                }
                return e && t.shellSuspendCounter++, vo = mo = null, tc = i, P.H = s, P.A = a, null === nc && (ec = null, ic = 0, Ei()), r
            }

            function qc() {
                for (; null !== nc;) Kc(nc)
            }

            function Xc() {
                for (; null !== nc && !rt();) Kc(nc)
            }

            function Kc(t) {
                var e = po(t.alternate, t, cc);
                t.memoizedProps = t.pendingProps, null === e ? $c(t) : nc = e
            }

            function Yc(t) {
                var e = t, n = e.alternate;
                switch (e.tag) {
                    case 15:
                    case 0:
                        e = Jr(n, e, e.pendingProps, e.type, void 0, ic);
                        break;
                    case 11:
                        e = Jr(n, e, e.pendingProps, e.type.render, e.ref, ic);
                        break;
                    case 5:
                        va(e);
                    default:
                        $l(n, e), e = po(n, e = nc = zl(e, cc), cc)
                }
                t.memoizedProps = t.pendingProps, null === e ? $c(t) : nc = e
            }

            function Qc(t, e, n, i) {
                vo = mo = null, va(e), ps = null, gs = 0;
                var s = e.return;
                try {
                    if (function (t, e, n, i, s) {
                        if (n.flags |= 32768, null !== i && "object" === typeof i && "function" === typeof i.then) {
                            if (null !== (e = n.alternate) && ko(e, n, s, !0), null !== (n = Ms.current)) {
                                switch (n.tag) {
                                    case 13:
                                        return null === Ts ? Vc() : null === n.alternate && 0 === uc && (uc = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === ls ? n.flags |= 16384 : (null === (e = n.updateQueue) ? n.updateQueue = new Set([i]) : e.add(i), su(t, i, s)), !1;
                                    case 22:
                                        return n.flags |= 65536, i === ls ? n.flags |= 16384 : (null === (e = n.updateQueue) ? (e = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([i])
                                        }, n.updateQueue = e) : null === (n = e.retryQueue) ? e.retryQueue = new Set([i]) : n.add(i), su(t, i, s)), !1
                                }
                                throw Error(r(435, n.tag))
                            }
                            return su(t, i, s), Vc(), !1
                        }
                        if (Qi) return null !== (e = Ms.current) ? (0 === (65536 & e.flags) && (e.flags |= 256), e.flags |= 65536, e.lanes = s, i !== Zi && as(Ii(t = Error(r(422), {cause: i}), n))) : (i !== Zi && as(Ii(e = Error(r(423), {cause: i}), n)), (t = t.current.alternate).flags |= 65536, s &= -s, t.lanes |= s, i = Ii(i, n), Io(t, s = Wr(t.stateNode, i, s)), 4 !== uc && (uc = 2)), !1;
                        var a = Error(r(520), {cause: i});
                        if (a = Ii(a, n), null === mc ? mc = [a] : mc.push(a), 4 !== uc && (uc = 2), null === e) return !0;
                        i = Ii(i, n), n = e;
                        do {
                            switch (n.tag) {
                                case 3:
                                    return n.flags |= 65536, t = s & -s, n.lanes |= t, Io(n, t = Wr(n.stateNode, i, t)), !1;
                                case 1:
                                    if (e = n.type, a = n.stateNode, 0 === (128 & n.flags) && ("function" === typeof e.getDerivedStateFromError || null !== a && "function" === typeof a.componentDidCatch && (null === kc || !kc.has(a)))) return n.flags |= 65536, s &= -s, n.lanes |= s, Br(s = jr(s), t, n, i), Io(n, s), !1
                            }
                            n = n.return
                        } while (null !== n);
                        return !1
                    }(t, s, e, n, ic)) return uc = 1, Or(t, Ii(n, t.current)), void (nc = null)
                } catch (a) {
                    if (null !== s) throw nc = s, a;
                    return uc = 1, Or(t, Ii(n, t.current)), void (nc = null)
                }
                32768 & e.flags ? (Qi || 1 === i ? t = !0 : oc || 0 !== (536870912 & ic) ? t = !1 : (rc = t = !0, (2 === i || 3 === i || 6 === i) && (null !== (i = Ms.current) && 13 === i.tag && (i.flags |= 16384))), Jc(e, t)) : $c(e)
            }

            function $c(t) {
                var e = t;
                do {
                    if (0 !== (32768 & e.flags)) return void Jc(e, rc);
                    t = e.return;
                    var n = Yl(e.alternate, e, cc);
                    if (null !== n) return void (nc = n);
                    if (null !== (e = e.sibling)) return void (nc = e);
                    nc = e = t
                } while (null !== e);
                0 === uc && (uc = 5)
            }

            function Jc(t, e) {
                do {
                    var n = Ql(t.alternate, t);
                    if (null !== n) return n.flags &= 32767, void (nc = n);
                    if (null !== (n = t.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && null !== (t = t.sibling)) return void (nc = t);
                    nc = t = n
                } while (null !== t);
                uc = 6, nc = null
            }

            function Zc(t, e, n, i, s, a, o, l, c, u) {
                var h = P.T, d = H.p;
                try {
                    H.p = 2, P.T = null, function (t, e, n, i, s, a, o, l) {
                        do {
                            eu()
                        } while (null !== Sc);
                        if (0 !== (6 & tc)) throw Error(r(327));
                        var c = t.finishedWork;
                        if (i = t.finishedLanes, null === c) return null;
                        if (t.finishedWork = null, t.finishedLanes = 0, c === t.current) throw Error(r(177));
                        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
                        var u = c.lanes | c.childLanes;
                        if (function (t, e, n, i, s, a) {
                            var r = t.pendingLanes;
                            t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
                            var o = t.entanglements, l = t.expirationTimes, c = t.hiddenUpdates;
                            for (n = r & ~n; 0 < n;) {
                                var u = 31 - wt(n), h = 1 << u;
                                o[u] = 0, l[u] = -1;
                                var d = c[u];
                                if (null !== d) for (c[u] = null, u = 0; u < d.length; u++) {
                                    var f = d[u];
                                    null !== f && (f.lane &= -536870913)
                                }
                                n &= ~h
                            }
                            0 !== i && Ft(t, i, 0), 0 !== a && 0 === s && 0 !== t.tag && (t.suspendedLanes |= a & ~(r & ~e))
                        }(t, i, u |= xi, a, o, l), t === ec && (nc = ec = null, ic = 0), 0 === (10256 & c.subtreeFlags) && 0 === (10256 & c.flags) || _c || (_c = !0, Ec = u, Cc = n, function (t, e) {
                            st(t, e)
                        }(dt, (function () {
                            return eu(), null
                        }))), n = 0 !== (15990 & c.flags), 0 !== (15990 & c.subtreeFlags) || n ? (n = P.T, P.T = null, a = H.p, H.p = 2, o = tc, tc |= 4, function (t, e) {
                            if (t = t.containerInfo, Xu = Vh, ti(t = Zn(t))) {
                                if ("selectionStart" in t) var n = {
                                    start: t.selectionStart,
                                    end: t.selectionEnd
                                }; else t: {
                                    var i = (n = (n = t.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                    if (i && 0 !== i.rangeCount) {
                                        n = i.anchorNode;
                                        var s = i.anchorOffset, a = i.focusNode;
                                        i = i.focusOffset;
                                        try {
                                            n.nodeType, a.nodeType
                                        } catch (m) {
                                            n = null;
                                            break t
                                        }
                                        var o = 0, l = -1, c = -1, u = 0, h = 0, d = t, f = null;
                                        e: for (; ;) {
                                            for (var p; d !== n || 0 !== s && 3 !== d.nodeType || (l = o + s), d !== a || 0 !== i && 3 !== d.nodeType || (c = o + i), 3 === d.nodeType && (o += d.nodeValue.length), null !== (p = d.firstChild);) f = d, d = p;
                                            for (; ;) {
                                                if (d === t) break e;
                                                if (f === n && ++u === s && (l = o), f === a && ++h === i && (c = o), null !== (p = d.nextSibling)) break;
                                                f = (d = f).parentNode
                                            }
                                            d = p
                                        }
                                        n = -1 === l || -1 === c ? null : {start: l, end: c}
                                    } else n = null
                                }
                                n = n || {start: 0, end: 0}
                            } else n = null;
                            for (Ku = {
                                focusedElem: t,
                                selectionRange: n
                            }, Vh = !1, nl = e; null !== nl;) if (t = (e = nl).child, 0 !== (1028 & e.subtreeFlags) && null !== t) t.return = e, nl = t; else for (; null !== nl;) {
                                switch (a = (e = nl).alternate, t = e.flags, e.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 26:
                                    case 27:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    case 1:
                                        if (0 !== (1024 & t) && null !== a) {
                                            t = void 0, n = e, s = a.memoizedProps, a = a.memoizedState, i = n.stateNode;
                                            try {
                                                var g = Lr(n.type, s, (n.elementType, n.type));
                                                t = i.getSnapshotBeforeUpdate(g, a), i.__reactInternalSnapshotBeforeUpdate = t
                                            } catch (v) {
                                                iu(n, n.return, v)
                                            }
                                        }
                                        break;
                                    case 3:
                                        if (0 !== (1024 & t)) if (9 === (n = (t = e.stateNode.containerInfo).nodeType)) rh(t); else if (1 === n) switch (t.nodeName) {
                                            case "HEAD":
                                            case "HTML":
                                            case "BODY":
                                                rh(t);
                                                break;
                                            default:
                                                t.textContent = ""
                                        }
                                        break;
                                    default:
                                        if (0 !== (1024 & t)) throw Error(r(163))
                                }
                                if (null !== (t = e.sibling)) {
                                    t.return = e.return, nl = t;
                                    break
                                }
                                nl = e.return
                            }
                            g = il, il = !1
                        }(t, c), pl(c, t), ei(Ku, t.containerInfo), Vh = !!Xu, Ku = Xu = null, t.current = c, sl(t, c.alternate, c), ot(), tc = o, H.p = a, P.T = n) : t.current = c, _c ? (_c = !1, Sc = t, xc = i) : tu(t, u), u = t.pendingLanes, 0 === u && (kc = null), function (t) {
                            if (bt && "function" === typeof bt.onCommitFiberRoot) try {
                                bt.onCommitFiberRoot(vt, t, void 0, 128 === (128 & t.current.flags))
                            } catch (e) {
                            }
                        }(c.stateNode), gu(t), null !== e) for (s = t.onRecoverableError, c = 0; c < e.length; c++) u = e[c], s(u.value, {componentStack: u.stack});
                        0 !== (3 & xc) && eu(), u = t.pendingLanes, 0 !== (4194218 & i) && 0 !== (42 & u) ? t === Tc ? Mc++ : (Mc = 0, Tc = t) : Mc = 0, mu(0, !1)
                    }(t, e, n, i, d, s, a, o)
                } finally {
                    P.T = h, H.p = d
                }
            }

            function tu(t, e) {
                0 === (t.pooledCacheLanes &= e) && (null != (e = t.pooledCache) && (t.pooledCache = null, Bs(e)))
            }

            function eu() {
                if (null !== Sc) {
                    var t = Sc, e = Ec;
                    Ec = 0;
                    var n = Dt(xc), i = P.T, s = H.p;
                    try {
                        if (H.p = 32 > n ? 32 : n, P.T = null, null === Sc) var a = !1; else {
                            n = Cc, Cc = null;
                            var o = Sc, l = xc;
                            if (Sc = null, xc = 0, 0 !== (6 & tc)) throw Error(r(331));
                            var c = tc;
                            if (tc |= 4, Rl(o.current), _l(o, o.current, l, n), tc = c, mu(0, !1), bt && "function" === typeof bt.onPostCommitFiberRoot) try {
                                bt.onPostCommitFiberRoot(vt, o)
                            } catch (u) {
                            }
                            a = !0
                        }
                        return a
                    } finally {
                        H.p = s, P.T = i, tu(t, e)
                    }
                }
                return !1
            }

            function nu(t, e, n) {
                e = Ii(n, e), null !== (t = Lo(t, e = Wr(t.stateNode, e, 2), 2)) && (Lt(t, 2), gu(t))
            }

            function iu(t, e, n) {
                if (3 === t.tag) nu(t, t, n); else for (; null !== e;) {
                    if (3 === e.tag) {
                        nu(e, t, n);
                        break
                    }
                    if (1 === e.tag) {
                        var i = e.stateNode;
                        if ("function" === typeof e.type.getDerivedStateFromError || "function" === typeof i.componentDidCatch && (null === kc || !kc.has(i))) {
                            t = Ii(n, t), null !== (i = Lo(e, n = jr(2), 2)) && (Br(n, i, e, t), Lt(i, 2), gu(i));
                            break
                        }
                    }
                    e = e.return
                }
            }

            function su(t, e, n) {
                var i = t.pingCache;
                if (null === i) {
                    i = t.pingCache = new Zl;
                    var s = new Set;
                    i.set(e, s)
                } else void 0 === (s = i.get(e)) && (s = new Set, i.set(e, s));
                s.has(n) || (lc = !0, s.add(n), t = au.bind(null, t, e, n), e.then(t, t))
            }

            function au(t, e, n) {
                var i = t.pingCache;
                null !== i && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, ec === t && (ic & n) === n && (4 === uc || 3 === uc && (62914560 & ic) === ic && 300 > lt() - yc ? 0 === (2 & tc) && jc(t, 0) : fc |= n, gc === ic && (gc = 0)), gu(t)
            }

            function ru(t, e) {
                0 === e && (e = Pt()), null !== (t = Ti(t, e)) && (Lt(t, e), gu(t))
            }

            function ou(t) {
                var e = t.memoizedState, n = 0;
                null !== e && (n = e.retryLane), ru(t, n)
            }

            function lu(t, e) {
                var n = 0;
                switch (t.tag) {
                    case 13:
                        var i = t.stateNode, s = t.memoizedState;
                        null !== s && (n = s.retryLane);
                        break;
                    case 19:
                        i = t.stateNode;
                        break;
                    case 22:
                        i = t.stateNode._retryCache;
                        break;
                    default:
                        throw Error(r(314))
                }
                null !== i && i.delete(e), ru(t, n)
            }

            var cu = null, uu = null, hu = !1, du = !1, fu = !1, pu = 0;

            function gu(t) {
                var e;
                t !== uu && null === t.next && (null === uu ? cu = uu = t : uu = uu.next = t), du = !0, hu || (hu = !0, e = vu, ih((function () {
                    0 !== (6 & tc) ? st(ut, e) : e()
                })))
            }

            function mu(t, e) {
                if (!fu && du) {
                    fu = !0;
                    do {
                        for (var n = !1, i = cu; null !== i;) {
                            if (!e) if (0 !== t) {
                                var s = i.pendingLanes;
                                if (0 === s) var a = 0; else {
                                    var r = i.suspendedLanes, o = i.pingedLanes;
                                    a = (1 << 31 - wt(42 | t) + 1) - 1, a = 201326677 & (a &= s & ~(r & ~o)) ? 201326677 & a | 1 : a ? 2 | a : 0
                                }
                                0 !== a && (n = !0, wu(i, a))
                            } else a = ic, 0 === (3 & (a = Et(i, i === ec ? a : 0))) || Ct(i, a) || (n = !0, wu(i, a));
                            i = i.next
                        }
                    } while (n);
                    fu = !1
                }
            }

            function vu() {
                du = hu = !1;
                var t = 0;
                0 !== pu && (function () {
                    var t = window.event;
                    if (t && "popstate" === t.type) return t !== Zu && (Zu = t, !0);
                    return Zu = null, !1
                }() && (t = pu), pu = 0);
                for (var e = lt(), n = null, i = cu; null !== i;) {
                    var s = i.next, a = bu(i, e);
                    0 === a ? (i.next = null, null === n ? cu = s : n.next = s, null === s && (uu = n)) : (n = i, (0 !== t || 0 !== (3 & a)) && (du = !0)), i = s
                }
                mu(t, !1)
            }

            function bu(t, e) {
                for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, a = -62914561 & t.pendingLanes; 0 < a;) {
                    var r = 31 - wt(a), o = 1 < < r, l = s[r];
                    -1 === l ? 0 !== (o & n) && 0 === (o & i) || (s[r] = Mt(o, e)) : l <= e && (t.expiredLanes |= o), a &= ~o
                }
                if (n = ic, n = Et(t, t === (e = ec) ? n : 0), i = t.callbackNode, 0 === n || t === e && 2 === sc || null !== t.cancelPendingCommit) return null !== i && null !== i && at(i), t.callbackNode = null, t.callbackPriority = 0;
                if (0 === (3 & n) || Ct(t, n)) {
                    if ((e = n & -n) === t.callbackPriority) return e;
                    switch (null !== i && at(i), Dt(n)) {
                        case 2:
                        case 8:
                            n = ht;
                            break;
                        case 32:
                        default:
                            n = dt;
                            break;
                        case 268435456:
                            n = pt
                    }
                    return i = yu.bind(null, t), n = st(n, i), t.callbackPriority = e, t.callbackNode = n, e
                }
                return null !== i && null !== i && at(i), t.callbackPriority = 2, t.callbackNode = null, 2
            }

            function yu(t, e) {
                var n = t.callbackNode;
                if (eu() && t.callbackNode !== n) return null;
                var i = ic;
                return 0 === (i = Et(t, t === ec ? i : 0)) ? null : (Fc(t, i, e), bu(t, lt()), null != t.callbackNode && t.callbackNode === n ? yu.bind(null, t) : null)
            }

            function wu(t, e) {
                if (eu()) return null;
                Fc(t, e, !0)
            }

            function Au() {
                return 0 === pu && (pu = Tt()), pu
            }

            function ku(t) {
                return null == t || "symbol" === typeof t || "boolean" === typeof t ? null : "function" === typeof t ? t : Te("" + t)
            }

            function _u(t, e) {
                var n = e.ownerDocument.createElement("input");
                return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
            }

            for (var Su = 0; Su < Ai.length; Su++) {
                var xu = Ai[Su];
                ki(xu.toLowerCase(), "on" + (xu[0].toUpperCase() + xu.slice(1)))
            }
            ki(fi, "onAnimationEnd"), ki(pi, "onAnimationIteration"), ki(gi, "onAnimationStart"), ki("dblclick", "onDoubleClick"), ki("focusin", "onFocus"), ki("focusout", "onBlur"), ki(mi, "onTransitionRun"), ki(vi, "onTransitionStart"), ki(bi, "onTransitionCancel"), ki(yi, "onTransitionEnd"), ee("onMouseEnter", ["mouseout", "mouseover"]), ee("onMouseLeave", ["mouseout", "mouseover"]), ee("onPointerEnter", ["pointerout", "pointerover"]), ee("onPointerLeave", ["pointerout", "pointerover"]), te("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), te("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), te("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), te("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Eu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Cu = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));

            function Mu(t, e) {
                e = 0 !== (4 & e);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], s = i.event;
                    i = i.listeners;
                    t: {
                        var a = void 0;
                        if (e) for (var r = i.length - 1; 0 <= r; r--) {
                            var o = i[r], l = o.instance, c = o.currentTarget;
                            if (o = o.listener, l !== a && s.isPropagationStopped()) break t;
                            a = o, s.currentTarget = c;
                            try {
                                a(s)
                            } catch (u) {
                                Fr(u)
                            }
                            s.currentTarget = null, a = l
                        } else for (r = 0; r < i.length; r++) {
                            if (l = (o = i[r]).instance, c = o.currentTarget, o = o.listener, l !== a && s.isPropagationStopped()) break t;
                            a = o, s.currentTarget = c;
                            try {
                                a(s)
                            } catch (u) {
                                Fr(u)
                            }
                            s.currentTarget = null, a = l
                        }
                    }
                }
            }

            function Tu(t, e) {
                var n = e[Bt];
                void 0 === n && (n = e[Bt] = new Set);
                var i = t + "__bubble";
                n.has(i) || (Fu(e, t, 2, !1), n.add(i))
            }

            function Pu(t, e, n) {
                var i = 0;
                e && (i |= 4), Fu(n, t, i, e)
            }

            var Ru = "_reactListening" + Math.random().toString(36).slice(2);

            function Lu(t) {
                if (!t[Ru]) {
                    t[Ru] = !0, Jt.forEach((function (e) {
                        "selectionchange" !== e && (Cu.has(e) || Pu(e, !1, t), Pu(e, !0, t))
                    }));
                    var e = 9 === t.nodeType ? t : t.ownerDocument;
                    null === e || e[Ru] || (e[Ru] = !0, Pu("selectionchange", !1, e))
                }
            }

            function Fu(t, e, n, i) {
                switch ($h(e)) {
                    case 2:
                        var s = Gh;
                        break;
                    case 8:
                        s = qh;
                        break;
                    default:
                        s = Xh
                }
                n = s.bind(null, e, n, t), s = void 0, !ze || "touchstart" !== e && "touchmove" !== e && "wheel" !== e || (s = !0), i ? void 0 !== s ? t.addEventListener(e, n, {
                    capture: !0,
                    passive: s
                }) : t.addEventListener(e, n, !0) : void 0 !== s ? t.addEventListener(e, n, {passive: s}) : t.addEventListener(e, n, !1)
            }

            function Iu(t, e, n, i, s) {
                var a = i;
                if (0 === (1 & e) && 0 === (2 & e) && null !== i) t: for (; ;) {
                    if (null === i) return;
                    var r = i.tag;
                    if (3 === r || 4 === r) {
                        var o = i.stateNode.containerInfo;
                        if (o === s || 8 === o.nodeType && o.parentNode === s) break;
                        if (4 === r) for (r = i.return; null !== r;) {
                            var l = r.tag;
                            if ((3 === l || 4 === l) && ((l = r.stateNode.containerInfo) === s || 8 === l.nodeType && l.parentNode === s)) return;
                            r = r.return
                        }
                        for (; null !== o;) {
                            if (null === (r = Xt(o))) return;
                            if (5 === (l = r.tag) || 6 === l || 26 === l || 27 === l) {
                                i = a = r;
                                continue t
                            }
                            o = o.parentNode
                        }
                    }
                    i = i.return
                }
                Ne((function () {
                    var i = a, s = Re(n), r = [];
                    t: {
                        var o = wi.get(t);
                        if (void 0 !== o) {
                            var l = Je, c = t;
                            switch (t) {
                                case "keypress":
                                    if (0 === Ve(n)) break t;
                                case "keydown":
                                case "keyup":
                                    l = pn;
                                    break;
                                case "focusin":
                                    c = "focus", l = an;
                                    break;
                                case "focusout":
                                    c = "blur", l = an;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    l = an;
                                    break;
                                case "click":
                                    if (2 === n.button) break t;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    l = nn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    l = sn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    l = mn;
                                    break;
                                case fi:
                                case pi:
                                case gi:
                                    l = rn;
                                    break;
                                case yi:
                                    l = vn;
                                    break;
                                case "scroll":
                                case "scrollend":
                                    l = tn;
                                    break;
                                case "wheel":
                                    l = bn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    l = on;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    l = gn;
                                    break;
                                case "toggle":
                                case "beforetoggle":
                                    l = yn
                            }
                            var u = 0 !== (4 & e), h = !u && ("scroll" === t || "scrollend" === t),
                                d = u ? null !== o ? o + "Capture" : null : o;
                            u = [];
                            for (var f, p = i; null !== p;) {
                                var g = p;
                                if (f = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === f || null === d || null != (g = Oe(p, d)) && u.push(Du(p, g, f)), h) break;
                                p = p.return
                            }
                            0 < u.length && (o = new l(o, c, null, n, s), r.push({event: o, listeners: u}))
                        }
                    }
                    if (0 === (7 & e)) {
                        if (l = "mouseout" === t || "pointerout" === t, (!(o = "mouseover" === t || "pointerover" === t) || n === Pe || !(c = n.relatedTarget || n.fromElement) || !Xt(c) && !c[jt]) && (l || o) && (o = s.window === s ? s : (o = s.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = i, null !== (c = (c = n.relatedTarget || n.toElement) ? Xt(c) : null) && (h = O(c), u = c.tag, c !== h || 5 !== u && 27 !== u && 6 !== u) && (c = null)) : (l = null, c = i), l !== c)) {
                            if (u = nn, g = "onMouseLeave", d = "onMouseEnter", p = "mouse", "pointerout" !== t && "pointerover" !== t || (u = gn, g = "onPointerLeave", d = "onPointerEnter", p = "pointer"), h = null == l ? o : Yt(l), f = null == c ? o : Yt(c), (o = new u(g, p + "leave", l, n, s)).target = h, o.relatedTarget = f, g = null, Xt(s) === i && ((u = new u(d, p + "enter", c, n, s)).target = f, u.relatedTarget = h, g = u), h = g, l && c) t: {
                                for (d = c, p = 0, f = u = l; f; f = Ou(f)) p++;
                                for (f = 0, g = d; g; g = Ou(g)) f++;
                                for (; 0 < p - f;) u = Ou(u), p--;
                                for (; 0 < f - p;) d = Ou(d), f--;
                                for (; p--;) {
                                    if (u === d || null !== d && u === d.alternate) break t;
                                    u = Ou(u), d = Ou(d)
                                }
                                u = null
                            } else u = null;
                            null !== l && zu(r, o, l, u, !1), null !== c && null !== h && zu(r, h, c, u, !0)
                        }
                        if ("select" === (l = (o = i ? Yt(i) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var m = On; else if (Rn(o)) if (zn) m = Xn; else {
                            m = Gn;
                            var v = Vn
                        } else !(l = o.nodeName) || "input" !== l.toLowerCase() || "checkbox" !== o.type && "radio" !== o.type ? i && Ee(i.elementType) && (m = On) : m = qn;
                        switch (m && (m = m(t, i)) ? Ln(r, m, n, s) : (v && v(t, o, i), "focusout" === t && i && "number" === o.type && null != i.memoizedProps.value && be(o, "number", o.value)), v = i ? Yt(i) : window, t) {
                            case "focusin":
                                (Rn(v) || "true" === v.contentEditable) && (ii = v, si = i, ai = null);
                                break;
                            case "focusout":
                                ai = si = ii = null;
                                break;
                            case "mousedown":
                                ri = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                ri = !1, oi(r, n, s);
                                break;
                            case "selectionchange":
                                if (ni) break;
                            case "keydown":
                            case "keyup":
                                oi(r, n, s)
                        }
                        var b;
                        if (An) t: {
                            switch (t) {
                                case "compositionstart":
                                    var y = "onCompositionStart";
                                    break t;
                                case "compositionend":
                                    y = "onCompositionEnd";
                                    break t;
                                case "compositionupdate":
                                    y = "onCompositionUpdate";
                                    break t
                            }
                            y = void 0
                        } else Tn ? Cn(t, n) && (y = "onCompositionEnd") : "keydown" === t && 229 === n.keyCode && (y = "onCompositionStart");
                        y && (Sn && "ko" !== n.locale && (Tn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Tn && (b = Ue()) : (Be = "value" in (je = s) ? je.value : je.textContent, Tn = !0)), 0 < (v = Nu(i, y)).length && (y = new ln(y, t, null, n, s), r.push({
                            event: y,
                            listeners: v
                        }), b ? y.data = b : null !== (b = Mn(n)) && (y.data = b))), (b = _n ? function (t, e) {
                            switch (t) {
                                case "compositionend":
                                    return Mn(e);
                                case "keypress":
                                    return 32 !== e.which ? null : (En = !0, xn);
                                case "textInput":
                                    return (t = e.data) === xn && En ? null : t;
                                default:
                                    return null
                            }
                        }(t, n) : function (t, e) {
                            if (Tn) return "compositionend" === t || !An && Cn(t, e) ? (t = Ue(), He = Be = je = null, Tn = !1, t) : null;
                            switch (t) {
                                case "paste":
                                default:
                                    return null;
                                case "keypress":
                                    if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                        if (e.char && 1 < e.char.length) return e.char;
                                        if (e.which) return String.fromCharCode(e.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return Sn && "ko" !== e.locale ? null : e.data
                            }
                        }(t, n)) && (0 < (y = Nu(i, "onBeforeInput")).length && (v = new ln("onBeforeInput", "beforeinput", null, n, s), r.push({
                            event: v,
                            listeners: y
                        }), v.data = b)), function (t, e, n, i, s) {
                            if ("submit" === e && n && n.stateNode === s) {
                                var a = ku((s[Wt] || null).action), r = i.submitter;
                                r && null !== (e = (e = r[Wt] || null) ? ku(e.formAction) : r.getAttribute("formAction")) && (a = e, r = null);
                                var o = new Je("action", "action", null, i, s);
                                t.push({
                                    event: o, listeners: [{
                                        instance: null, listener: function () {
                                            if (i.defaultPrevented) {
                                                if (0 !== pu) {
                                                    var t = r ? _u(s, r) : new FormData(s);
                                                    ur(n, {pending: !0, data: t, method: s.method, action: a}, null, t)
                                                }
                                            } else "function" === typeof a && (o.preventDefault(), t = r ? _u(s, r) : new FormData(s), ur(n, {
                                                pending: !0,
                                                data: t,
                                                method: s.method,
                                                action: a
                                            }, a, t))
                                        }, currentTarget: s
                                    }]
                                })
                            }
                        }(r, t, i, n, s)
                    }
                    Mu(r, e)
                }))
            }

            function Du(t, e, n) {
                return {instance: t, listener: e, currentTarget: n}
            }

            function Nu(t, e) {
                for (var n = e + "Capture", i = []; null !== t;) {
                    var s = t, a = s.stateNode;
                    5 !== (s = s.tag) && 26 !== s && 27 !== s || null === a || (null != (s = Oe(t, n)) && i.unshift(Du(t, s, a)), null != (s = Oe(t, e)) && i.push(Du(t, s, a))), t = t.return
                }
                return i
            }

            function Ou(t) {
                if (null === t) return null;
                do {
                    t = t.return
                } while (t && 5 !== t.tag && 27 !== t.tag);
                return t || null
            }

            function zu(t, e, n, i, s) {
                for (var a = e._reactName, r = []; null !== n && n !== i;) {
                    var o = n, l = o.alternate, c = o.stateNode;
                    if (o = o.tag, null !== l && l === i) break;
                    5 !== o && 26 !== o && 27 !== o || null === c || (l = c, s ? null != (c = Oe(n, a)) && r.unshift(Du(n, c, l)) : s || null != (c = Oe(n, a)) && r.push(Du(n, c, l))), n = n.return
                }
                0 !== r.length && t.push({event: e, listeners: r})
            }

            var Wu = /\r\n?/g, ju = /\u0000|\uFFFD/g;

            function Bu(t) {
                return ("string" === typeof t ? t : "" + t).replace(Wu, "\n").replace(ju, "")
            }

            function Hu(t, e) {
                return e = Bu(e), Bu(t) === e
            }

            function Uu() {
            }

            function Vu(t, e, n, i, s, a) {
                switch (n) {
                    case "children":
                        "string" === typeof i ? "body" === e || "textarea" === e && "" === i || ke(t, i) : ("number" === typeof i || "bigint" === typeof i) && "body" !== e && ke(t, "" + i);
                        break;
                    case "className":
                        oe(t, "class", i);
                        break;
                    case "tabIndex":
                        oe(t, "tabindex", i);
                        break;
                    case "dir":
                    case "role":
                    case "viewBox":
                    case "width":
                    case "height":
                        oe(t, n, i);
                        break;
                    case "style":
                        xe(t, i, a);
                        break;
                    case "data":
                        if ("object" !== e) {
                            oe(t, "data", i);
                            break
                        }
                    case "src":
                    case "href":
                        if ("" === i && ("a" !== e || "href" !== n)) {
                            t.removeAttribute(n);
                            break
                        }
                        if (null == i || "function" === typeof i || "symbol" === typeof i || "boolean" === typeof i) {
                            t.removeAttribute(n);
                            break
                        }
                        i = Te("" + i), t.setAttribute(n, i);
                        break;
                    case "action":
                    case "formAction":
                        if ("function" === typeof i) {
                            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                            break
                        }
                        if ("function" === typeof a && ("formAction" === n ? ("input" !== e && Vu(t, e, "name", s.name, s, null), Vu(t, e, "formEncType", s.formEncType, s, null), Vu(t, e, "formMethod", s.formMethod, s, null), Vu(t, e, "formTarget", s.formTarget, s, null)) : (Vu(t, e, "encType", s.encType, s, null), Vu(t, e, "method", s.method, s, null), Vu(t, e, "target", s.target, s, null))), null == i || "symbol" === typeof i || "boolean" === typeof i) {
                            t.removeAttribute(n);
                            break
                        }
                        i = Te("" + i), t.setAttribute(n, i);
                        break;
                    case "onClick":
                        null != i && (t.onclick = Uu);
                        break;
                    case "onScroll":
                        null != i && Tu("scroll", t);
                        break;
                    case "onScrollEnd":
                        null != i && Tu("scrollend", t);
                        break;
                    case "dangerouslySetInnerHTML":
                        if (null != i) {
                            if ("object" !== typeof i || !("__html" in i)) throw Error(r(61));
                            if (null != (n = i.__html)) {
                                if (null != s.children) throw Error(r(60));
                                t.innerHTML = n
                            }
                        }
                        break;
                    case "multiple":
                        t.multiple = i && "function" !== typeof i && "symbol" !== typeof i;
                        break;
                    case "muted":
                        t.muted = i && "function" !== typeof i && "symbol" !== typeof i;
                        break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "defaultValue":
                    case "defaultChecked":
                    case "innerHTML":
                    case "ref":
                    case "autoFocus":
                        break;
                    case "xlinkHref":
                        if (null == i || "function" === typeof i || "boolean" === typeof i || "symbol" === typeof i) {
                            t.removeAttribute("xlink:href");
                            break
                        }
                        n = Te("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                        break;
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                        null != i && "function" !== typeof i && "symbol" !== typeof i ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
                        break;
                    case "inert":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                        i && "function" !== typeof i && "symbol" !== typeof i ? t.setAttribute(n, "") : t.removeAttribute(n);
                        break;
                    case "capture":
                    case "download":
                        !0 === i ? t.setAttribute(n, "") : !1 !== i && null != i && "function" !== typeof i && "symbol" !== typeof i ? t.setAttribute(n, i) : t.removeAttribute(n);
                        break;
                    case "cols":
                    case "rows":
                    case "size":
                    case "span":
                        null != i && "function" !== typeof i && "symbol" !== typeof i && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
                        break;
                    case "rowSpan":
                    case "start":
                        null == i || "function" === typeof i || "symbol" === typeof i || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
                        break;
                    case "popover":
                        Tu("beforetoggle", t), Tu("toggle", t), re(t, "popover", i);
                        break;
                    case "xlinkActuate":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
                        break;
                    case "xlinkArcrole":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
                        break;
                    case "xlinkRole":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
                        break;
                    case "xlinkShow":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
                        break;
                    case "xlinkTitle":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
                        break;
                    case "xlinkType":
                        le(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
                        break;
                    case "xmlBase":
                        le(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
                        break;
                    case "xmlLang":
                        le(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
                        break;
                    case "xmlSpace":
                        le(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
                        break;
                    case "is":
                        re(t, "is", i);
                        break;
                    case "innerText":
                    case "textContent":
                        break;
                    default:
                        (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && re(t, n = Ce.get(n) || n, i)
                }
            }

            function Gu(t, e, n, i, s, a) {
                switch (n) {
                    case "style":
                        xe(t, i, a);
                        break;
                    case "dangerouslySetInnerHTML":
                        if (null != i) {
                            if ("object" !== typeof i || !("__html" in i)) throw Error(r(61));
                            if (null != (n = i.__html)) {
                                if (null != s.children) throw Error(r(60));
                                t.innerHTML = n
                            }
                        }
                        break;
                    case "children":
                        "string" === typeof i ? ke(t, i) : ("number" === typeof i || "bigint" === typeof i) && ke(t, "" + i);
                        break;
                    case "onScroll":
                        null != i && Tu("scroll", t);
                        break;
                    case "onScrollEnd":
                        null != i && Tu("scrollend", t);
                        break;
                    case "onClick":
                        null != i && (t.onclick = Uu);
                        break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "innerHTML":
                    case "ref":
                    case "innerText":
                    case "textContent":
                        break;
                    default:
                        Zt.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), "function" === typeof (a = null != (a = t[Wt] || null) ? a[n] : null) && t.removeEventListener(e, a, s), "function" !== typeof i) ? n in t ? t[n] = i : !0 === i ? t.setAttribute(n, "") : re(t, n, i) : ("function" !== typeof a && null !== a && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, s)))
                }
            }

            function qu(t, e, n) {
                switch (e) {
                    case "div":
                    case "span":
                    case "svg":
                    case "path":
                    case "a":
                    case "g":
                    case "p":
                    case "li":
                        break;
                    case "img":
                        Tu("error", t), Tu("load", t);
                        var i, s = !1, a = !1;
                        for (i in n) if (n.hasOwnProperty(i)) {
                            var o = n[i];
                            if (null != o) switch (i) {
                                case "src":
                                    s = !0;
                                    break;
                                case "srcSet":
                                    a = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(r(137, e));
                                default:
                                    Vu(t, e, i, o, n, null)
                            }
                        }
                        return a && Vu(t, e, "srcSet", n.srcSet, n, null), void (s && Vu(t, e, "src", n.src, n, null));
                    case "input":
                        Tu("invalid", t);
                        var l = i = o = a = null, c = null, u = null;
                        for (s in n) if (n.hasOwnProperty(s)) {
                            var h = n[s];
                            if (null != h) switch (s) {
                                case "name":
                                    a = h;
                                    break;
                                case "type":
                                    o = h;
                                    break;
                                case "checked":
                                    c = h;
                                    break;
                                case "defaultChecked":
                                    u = h;
                                    break;
                                case "value":
                                    i = h;
                                    break;
                                case "defaultValue":
                                    l = h;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != h) throw Error(r(137, e));
                                    break;
                                default:
                                    Vu(t, e, s, h, n, null)
                            }
                        }
                        return ve(t, i, l, c, u, o, a, !1), void he(t);
                    case "select":
                        for (a in Tu("invalid", t), s = o = i = null, n) if (n.hasOwnProperty(a) && null != (l = n[a])) switch (a) {
                            case "value":
                                i = l;
                                break;
                            case "defaultValue":
                                o = l;
                                break;
                            case "multiple":
                                s = l;
                            default:
                                Vu(t, e, a, l, n, null)
                        }
                        return e = i, n = o, t.multiple = !!s, void (null != e ? ye(t, !!s, e, !1) : null != n && ye(t, !!s, n, !0));
                    case "textarea":
                        for (o in Tu("invalid", t), i = a = s = null, n) if (n.hasOwnProperty(o) && null != (l = n[o])) switch (o) {
                            case "value":
                                s = l;
                                break;
                            case "defaultValue":
                                a = l;
                                break;
                            case "children":
                                i = l;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != l) throw Error(r(91));
                                break;
                            default:
                                Vu(t, e, o, l, n, null)
                        }
                        return Ae(t, s, a, i), void he(t);
                    case "option":
                        for (c in n) if (n.hasOwnProperty(c) && null != (s = n[c])) if ("selected" === c) t.selected = s && "function" !== typeof s && "symbol" !== typeof s; else Vu(t, e, c, s, n, null);
                        return;
                    case "dialog":
                        Tu("cancel", t), Tu("close", t);
                        break;
                    case "iframe":
                    case "object":
                        Tu("load", t);
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < Eu.length; s++) Tu(Eu[s], t);
                        break;
                    case "image":
                        Tu("error", t), Tu("load", t);
                        break;
                    case "details":
                        Tu("toggle", t);
                        break;
                    case "embed":
                    case "source":
                    case "link":
                        Tu("error", t), Tu("load", t);
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "hr":
                    case "keygen":
                    case "meta":
                    case "param":
                    case "track":
                    case "wbr":
                    case "menuitem":
                        for (u in n) if (n.hasOwnProperty(u) && null != (s = n[u])) switch (u) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, e));
                            default:
                                Vu(t, e, u, s, n, null)
                        }
                        return;
                    default:
                        if (Ee(e)) {
                            for (h in n) n.hasOwnProperty(h) && (void 0 !== (s = n[h]) && Gu(t, e, h, s, n, void 0));
                            return
                        }
                }
                for (l in n) n.hasOwnProperty(l) && (null != (s = n[l]) && Vu(t, e, l, s, n, null))
            }

            var Xu = null, Ku = null;

            function Yu(t) {
                return 9 === t.nodeType ? t : t.ownerDocument
            }

            function Qu(t) {
                switch (t) {
                    case "http://www.w3.org/2000/svg":
                        return 1;
                    case "http://www.w3.org/1998/Math/MathML":
                        return 2;
                    default:
                        return 0
                }
            }

            function $u(t, e) {
                if (0 === t) switch (e) {
                    case "svg":
                        return 1;
                    case "math":
                        return 2;
                    default:
                        return 0
                }
                return 1 === t && "foreignObject" === e ? 0 : t
            }

            function Ju(t, e) {
                return "textarea" === t || "noscript" === t || "string" === typeof e.children || "number" === typeof e.children || "bigint" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
            }

            var Zu = null;
            var th = "function" === typeof setTimeout ? setTimeout : void 0,
                eh = "function" === typeof clearTimeout ? clearTimeout : void 0,
                nh = "function" === typeof Promise ? Promise : void 0,
                ih = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof nh ? function (t) {
                    return nh.resolve(null).then(t).catch(sh)
                } : th;

            function sh(t) {
                setTimeout((function () {
                    throw t
                }))
            }

            function ah(t, e) {
                var n = e, i = 0;
                do {
                    var s = n.nextSibling;
                    if (t.removeChild(n), s && 8 === s.nodeType) if ("/$" === (n = s.data)) {
                        if (0 === i) return t.removeChild(s), void gd(e);
                        i--
                    } else "$" !== n && "$?" !== n && "$!" !== n || i++;
                    n = s
                } while (n);
                gd(e)
            }

            function rh(t) {
                var e = t.firstChild;
                for (e && 10 === e.nodeType && (e = e.nextSibling); e;) {
                    var n = e;
                    switch (e = e.nextSibling, n.nodeName) {
                        case "HTML":
                        case "HEAD":
                        case "BODY":
                            rh(n), qt(n);
                            continue;
                        case "SCRIPT":
                        case "STYLE":
                            continue;
                        case "LINK":
                            if ("stylesheet" === n.rel.toLowerCase()) continue
                    }
                    t.removeChild(n)
                }
            }

            function oh(t) {
                for (; null != t; t = t.nextSibling) {
                    var e = t.nodeType;
                    if (1 === e || 3 === e) break;
                    if (8 === e) {
                        if ("$" === (e = t.data) || "$!" === e || "$?" === e || "F!" === e || "F" === e) break;
                        if ("/$" === e) return null
                    }
                }
                return t
            }

            function lh(t) {
                t = t.previousSibling;
                for (var e = 0; t;) {
                    if (8 === t.nodeType) {
                        var n = t.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === e) return t;
                            e--
                        } else "/$" === n && e++
                    }
                    t = t.previousSibling
                }
                return null
            }

            function ch(t, e, n) {
                switch (e = Yu(n), t) {
                    case "html":
                        if (!(t = e.documentElement)) throw Error(r(452));
                        return t;
                    case "head":
                        if (!(t = e.head)) throw Error(r(453));
                        return t;
                    case "body":
                        if (!(t = e.body)) throw Error(r(454));
                        return t;
                    default:
                        throw Error(r(451))
                }
            }

            var uh = new Map, hh = new Set;

            function dh(t) {
                return "function" === typeof t.getRootNode ? t.getRootNode() : t.ownerDocument
            }

            var fh = H.d;
            H.d = {
                f: function () {
                    var t = fh.f(), e = zc();
                    return t || e
                }, r: function (t) {
                    var e = Kt(t);
                    null !== e && 5 === e.tag && "form" === e.type ? dr(e) : fh.r(t)
                }, D: function (t) {
                    fh.D(t), gh("dns-prefetch", t, null)
                }, C: function (t, e) {
                    fh.C(t, e), gh("preconnect", t, e)
                }, L: function (t, e, n) {
                    fh.L(t, e, n);
                    var i = ph;
                    if (i && t && e) {
                        var s = 'link[rel="preload"][as="' + ge(e) + '"]';
                        "image" === e && n && n.imageSrcSet ? (s += '[imagesrcset="' + ge(n.imageSrcSet) + '"]', "string" === typeof n.imageSizes && (s += '[imagesizes="' + ge(n.imageSizes) + '"]')) : s += '[href="' + ge(t) + '"]';
                        var a = s;
                        switch (e) {
                            case "style":
                                a = vh(t);
                                break;
                            case "script":
                                a = wh(t)
                        }
                        uh.has(a) || (t = R({
                            rel: "preload",
                            href: "image" === e && n && n.imageSrcSet ? void 0 : t,
                            as: e
                        }, n), uh.set(a, t), null !== i.querySelector(s) || "style" === e && i.querySelector(bh(a)) || "script" === e && i.querySelector(Ah(a)) || (qu(e = i.createElement("link"), "link", t), $t(e), i.head.appendChild(e)))
                    }
                }, m: function (t, e) {
                    fh.m(t, e);
                    var n = ph;
                    if (n && t) {
                        var i = e && "string" === typeof e.as ? e.as : "script",
                            s = 'link[rel="modulepreload"][as="' + ge(i) + '"][href="' + ge(t) + '"]', a = s;
                        switch (i) {
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                a = wh(t)
                        }
                        if (!uh.has(a) && (t = R({
                            rel: "modulepreload",
                            href: t
                        }, e), uh.set(a, t), null === n.querySelector(s))) {
                            switch (i) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    if (n.querySelector(Ah(a))) return
                            }
                            qu(i = n.createElement("link"), "link", t), $t(i), n.head.appendChild(i)
                        }
                    }
                }, X: function (t, e) {
                    fh.X(t, e);
                    var n = ph;
                    if (n && t) {
                        var i = Qt(n).hoistableScripts, s = wh(t), a = i.get(s);
                        a || ((a = n.querySelector(Ah(s))) || (t = R({
                            src: t,
                            async: !0
                        }, e), (e = uh.get(s)) && xh(t, e), $t(a = n.createElement("script")), qu(a, "link", t), n.head.appendChild(a)), a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        }, i.set(s, a))
                    }
                }, S: function (t, e, n) {
                    fh.S(t, e, n);
                    var i = ph;
                    if (i && t) {
                        var s = Qt(i).hoistableStyles, a = vh(t);
                        e = e || "default";
                        var r = s.get(a);
                        if (!r) {
                            var o = {loading: 0, preload: null};
                            if (r = i.querySelector(bh(a))) o.loading = 5; else {
                                t = R({
                                    rel: "stylesheet",
                                    href: t,
                                    "data-precedence": e
                                }, n), (n = uh.get(a)) && Sh(t, n);
                                var l = r = i.createElement("link");
                                $t(l), qu(l, "link", t), l._p = new Promise((function (t, e) {
                                    l.onload = t, l.onerror = e
                                })), l.addEventListener("load", (function () {
                                    o.loading |= 1
                                })), l.addEventListener("error", (function () {
                                    o.loading |= 2
                                })), o.loading |= 4, _h(r, e, i)
                            }
                            r = {type: "stylesheet", instance: r, count: 1, state: o}, s.set(a, r)
                        }
                    }
                }, M: function (t, e) {
                    fh.M(t, e);
                    var n = ph;
                    if (n && t) {
                        var i = Qt(n).hoistableScripts, s = wh(t), a = i.get(s);
                        a || ((a = n.querySelector(Ah(s))) || (t = R({
                            src: t,
                            async: !0,
                            type: "module"
                        }, e), (e = uh.get(s)) && xh(t, e), $t(a = n.createElement("script")), qu(a, "link", t), n.head.appendChild(a)), a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        }, i.set(s, a))
                    }
                }
            };
            var ph = "undefined" === typeof document ? null : document;

            function gh(t, e, n) {
                var i = ph;
                if (i && "string" === typeof e && e) {
                    var s = ge(e);
                    s = 'link[rel="' + t + '"][href="' + s + '"]', "string" === typeof n && (s += '[crossorigin="' + n + '"]'), hh.has(s) || (hh.add(s), t = {
                        rel: t,
                        crossOrigin: n,
                        href: e
                    }, null === i.querySelector(s) && (qu(e = i.createElement("link"), "link", t), $t(e), i.head.appendChild(e)))
                }
            }

            function mh(t, e, n, i) {
                var s, a, o, l, c = (c = $.current) ? dh(c) : null;
                if (!c) throw Error(r(446));
                switch (t) {
                    case "meta":
                    case "title":
                        return null;
                    case "style":
                        return "string" === typeof n.precedence && "string" === typeof n.href ? (e = vh(n.href), (i = (n = Qt(c).hoistableStyles).get(e)) || (i = {
                            type: "style",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(e, i)), i) : {type: "void", instance: null, count: 0, state: null};
                    case "link":
                        if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                            t = vh(n.href);
                            var u = Qt(c).hoistableStyles, h = u.get(t);
                            if (h || (c = c.ownerDocument || c, h = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: {loading: 0, preload: null}
                            }, u.set(t, h), (u = c.querySelector(bh(t))) && !u._p && (h.instance = u, h.state.loading = 5), uh.has(t) || (n = {
                                rel: "preload",
                                as: "style",
                                href: n.href,
                                crossOrigin: n.crossOrigin,
                                integrity: n.integrity,
                                media: n.media,
                                hrefLang: n.hrefLang,
                                referrerPolicy: n.referrerPolicy
                            }, uh.set(t, n), u || (s = c, a = t, o = n, l = h.state, s.querySelector('link[rel="preload"][as="style"][' + a + "]") ? l.loading = 1 : (a = s.createElement("link"), l.preload = a, a.addEventListener("load", (function () {
                                return l.loading |= 1
                            })), a.addEventListener("error", (function () {
                                return l.loading |= 2
                            })), qu(a, "link", o), $t(a), s.head.appendChild(a))))), e && null === i) throw Error(r(528, ""));
                            return h
                        }
                        if (e && null !== i) throw Error(r(529, ""));
                        return null;
                    case "script":
                        return e = n.async, "string" === typeof (n = n.src) && e && "function" !== typeof e && "symbol" !== typeof e ? (e = wh(n), (i = (n = Qt(c).hoistableScripts).get(e)) || (i = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(e, i)), i) : {type: "void", instance: null, count: 0, state: null};
                    default:
                        throw Error(r(444, t))
                }
            }

            function vh(t) {
                return 'href="' + ge(t) + '"'
            }

            function bh(t) {
                return 'link[rel="stylesheet"][' + t + "]"
            }

            function yh(t) {
                return R({}, t, {"data-precedence": t.precedence, precedence: null})
            }

            function wh(t) {
                return '[src="' + ge(t) + '"]'
            }

            function Ah(t) {
                return "script[async]" + t
            }

            function kh(t, e, n) {
                if (e.count++, null === e.instance) switch (e.type) {
                    case "style":
                        var i = t.querySelector('style[data-href~="' + ge(n.href) + '"]');
                        if (i) return e.instance = i, $t(i), i;
                        var s = R({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return $t(i = (t.ownerDocument || t).createElement("style")), qu(i, "style", s), _h(i, n.precedence, t), e.instance = i;
                    case "stylesheet":
                        s = vh(n.href);
                        var a = t.querySelector(bh(s));
                        if (a) return e.state.loading |= 4, e.instance = a, $t(a), a;
                        i = yh(n), (s = uh.get(s)) && Sh(i, s), $t(a = (t.ownerDocument || t).createElement("link"));
                        var o = a;
                        return o._p = new Promise((function (t, e) {
                            o.onload = t, o.onerror = e
                        })), qu(a, "link", i), e.state.loading |= 4, _h(a, n.precedence, t), e.instance = a;
                    case "script":
                        return a = wh(n.src), (s = t.querySelector(Ah(a))) ? (e.instance = s, $t(s), s) : (i = n, (s = uh.get(a)) && xh(i = R({}, n), s), $t(s = (t = t.ownerDocument || t).createElement("script")), qu(s, "link", i), t.head.appendChild(s), e.instance = s);
                    case "void":
                        return null;
                    default:
                        throw Error(r(443, e.type))
                } else "stylesheet" === e.type && 0 === (4 & e.state.loading) && (i = e.instance, e.state.loading |= 4, _h(i, n.precedence, t));
                return e.instance
            }

            function _h(t, e, n) {
                for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, a = s, r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (o.dataset.precedence === e) a = o; else if (a !== s) break
                }
                a ? a.parentNode.insertBefore(t, a.nextSibling) : (e = 9 === n.nodeType ? n.head : n).insertBefore(t, e.firstChild)
            }

            function Sh(t, e) {
                null == t.crossOrigin && (t.crossOrigin = e.crossOrigin), null == t.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), null == t.title && (t.title = e.title)
            }

            function xh(t, e) {
                null == t.crossOrigin && (t.crossOrigin = e.crossOrigin), null == t.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), null == t.integrity && (t.integrity = e.integrity)
            }

            var Eh = null;

            function Ch(t, e, n) {
                if (null === Eh) {
                    var i = new Map, s = Eh = new Map;
                    s.set(n, i)
                } else (i = (s = Eh).get(n)) || (i = new Map, s.set(n, i));
                if (i.has(t)) return i;
                for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
                    var a = n[s];
                    if (!(a[Gt] || a[zt] || "link" === t && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
                        var r = a.getAttribute(e) || "";
                        r = t + r;
                        var o = i.get(r);
                        o ? o.push(a) : i.set(r, [a])
                    }
                }
                return i
            }

            function Mh(t, e, n) {
                (t = t.ownerDocument || t).head.insertBefore(n, "title" === e ? t.querySelector("head > title") : null)
            }

            function Th(t) {
                return "stylesheet" !== t.type || 0 !== (3 & t.state.loading)
            }

            var Ph = null;

            function Rh() {
            }

            function Lh() {
                if (this.count--, 0 === this.count) if (this.stylesheets) Ih(this, this.stylesheets); else if (this.unsuspend) {
                    var t = this.unsuspend;
                    this.unsuspend = null, t()
                }
            }

            var Fh = null;

            function Ih(t, e) {
                t.stylesheets = null, null !== t.unsuspend && (t.count++, Fh = new Map, e.forEach(Dh, t), Fh = null, Lh.call(t))
            }

            function Dh(t, e) {
                if (!(4 & e.state.loading)) {
                    var n = Fh.get(t);
                    if (n) var i = n.get(null); else {
                        n = new Map, Fh.set(t, n);
                        for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < s.length; a++) {
                            var r = s[a];
                            "LINK" !== r.nodeName && "not all" === r.getAttribute("media") || (n.set(r.dataset.precedence, r), i = r)
                        }
                        i && n.set(null, i)
                    }
                    r = (s = e.instance).getAttribute("data-precedence"), (a = n.get(r) || i) === i && n.set(null, s), n.set(r, s), this.count++, i = Lh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), a ? a.parentNode.insertBefore(s, a.nextSibling) : (t = 9 === t.nodeType ? t.head : t).insertBefore(s, t.firstChild), e.state.loading |= 4
                }
            }

            var Nh = {
                $$typeof: m,
                Provider: null,
                Consumer: null,
                _currentValue: U,
                _currentValue2: U,
                _threadCount: 0
            };

            function Oh(t, e, n, i, s, a, r, o) {
                this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Rt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rt(0), this.hiddenUpdates = Rt(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = a, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = new Map
            }

            function zh(t, e, n, i, s, a, r, o, l, c, u, h) {
                return t = new Oh(t, e, n, r, o, l, c, h), e = 1, !0 === a && (e |= 24), a = Dl(3, null, null, e), t.current = a, a.stateNode = t, (e = js()).refCount++, t.pooledCache = e, e.refCount++, a.memoizedState = {
                    element: i,
                    isDehydrated: n,
                    cache: e
                }, To(a), t
            }

            function Wh(t) {
                return t ? t = Li : Li
            }

            function jh(t, e, n, i, s, a) {
                s = Wh(s), null === i.context ? i.context = s : i.pendingContext = s, (i = Ro(e)).payload = {element: n}, null !== (a = void 0 === a ? null : a) && (i.callback = a), null !== (n = Lo(t, i, e)) && (Lc(n, 0, e), Fo(n, t, e))
            }

            function Bh(t, e) {
                if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
                    var n = t.retryLane;
                    t.retryLane = 0 !== n && n < e ? n : e
                }
            }

            function Hh(t, e) {
                Bh(t, e), (t = t.alternate) && Bh(t, e)
            }

            function Uh(t) {
                if (13 === t.tag) {
                    var e = Ti(t, 67108864);
                    null !== e && Lc(e, 0, 67108864), Hh(t, 67108864)
                }
            }

            var Vh = !0;

            function Gh(t, e, n, i) {
                var s = P.T;
                P.T = null;
                var a = H.p;
                try {
                    H.p = 2, Xh(t, e, n, i)
                } finally {
                    H.p = a, P.T = s
                }
            }

            function qh(t, e, n, i) {
                var s = P.T;
                P.T = null;
                var a = H.p;
                try {
                    H.p = 8, Xh(t, e, n, i)
                } finally {
                    H.p = a, P.T = s
                }
            }

            function Xh(t, e, n, i) {
                if (Vh) {
                    var s = Kh(i);
                    if (null === s) Iu(t, e, i, Yh, n), rd(t, i); else if (function (t, e, n, i, s) {
                        switch (e) {
                            case "focusin":
                                return Zh = od(Zh, t, e, n, i, s), !0;
                            case "dragenter":
                                return td = od(td, t, e, n, i, s), !0;
                            case "mouseover":
                                return ed = od(ed, t, e, n, i, s), !0;
                            case "pointerover":
                                var a = s.pointerId;
                                return nd.set(a, od(nd.get(a) || null, t, e, n, i, s)), !0;
                            case "gotpointercapture":
                                return a = s.pointerId, id.set(a, od(id.get(a) || null, t, e, n, i, s)), !0
                        }
                        return !1
                    }(s, t, e, n, i)) i.stopPropagation(); else if (rd(t, i), 4 & e && -1 < ad.indexOf(t)) {
                        for (; null !== s;) {
                            var a = Kt(s);
                            if (null !== a) switch (a.tag) {
                                case 3:
                                    if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                        var r = xt(a.pendingLanes);
                                        if (0 !== r) {
                                            var o = a;
                                            for (o.pendingLanes |= 2, o.entangledLanes |= 2; r;) {
                                                var l = 1 << 31 - wt(r);
                                                o.entanglements[1] |= l, r &= ~l
                                            }
                                            gu(a), 0 === (6 & tc) && (wc = lt() + 500, mu(0, !1))
                                        }
                                    }
                                    break;
                                case 13:
                                    null !== (o = Ti(a, 2)) && Lc(o, 0, 2), zc(), Hh(a, 2)
                            }
                            if (null === (a = Kh(i)) && Iu(t, e, i, Yh, n), a === s) break;
                            s = a
                        }
                        null !== s && i.stopPropagation()
                    } else Iu(t, e, i, null, n)
                }
            }

            function Kh(t) {
                return Qh(t = Re(t))
            }

            var Yh = null;

            function Qh(t) {
                if (Yh = null, null !== (t = Xt(t))) {
                    var e = O(t);
                    if (null === e) t = null; else {
                        var n = e.tag;
                        if (13 === n) {
                            if (null !== (t = z(e))) return t;
                            t = null
                        } else if (3 === n) {
                            if (e.stateNode.current.memoizedState.isDehydrated) return 3 === e.tag ? e.stateNode.containerInfo : null;
                            t = null
                        } else e !== t && (t = null)
                    }
                }
                return Yh = t, null
            }

            function $h(t) {
                switch (t) {
                    case "beforetoggle":
                    case "cancel":
                    case "click":
                    case "close":
                    case "contextmenu":
                    case "copy":
                    case "cut":
                    case "auxclick":
                    case "dblclick":
                    case "dragend":
                    case "dragstart":
                    case "drop":
                    case "focusin":
                    case "focusout":
                    case "input":
                    case "invalid":
                    case "keydown":
                    case "keypress":
                    case "keyup":
                    case "mousedown":
                    case "mouseup":
                    case "paste":
                    case "pause":
                    case "play":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                    case "ratechange":
                    case "reset":
                    case "resize":
                    case "seeked":
                    case "submit":
                    case "toggle":
                    case "touchcancel":
                    case "touchend":
                    case "touchstart":
                    case "volumechange":
                    case "change":
                    case "selectionchange":
                    case "textInput":
                    case "compositionstart":
                    case "compositionend":
                    case "compositionupdate":
                    case "beforeblur":
                    case "afterblur":
                    case "beforeinput":
                    case "blur":
                    case "fullscreenchange":
                    case "focus":
                    case "hashchange":
                    case "popstate":
                    case "select":
                    case "selectstart":
                        return 2;
                    case "drag":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "mousemove":
                    case "mouseout":
                    case "mouseover":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "scroll":
                    case "touchmove":
                    case "wheel":
                    case "mouseenter":
                    case "mouseleave":
                    case "pointerenter":
                    case "pointerleave":
                        return 8;
                    case "message":
                        switch (ct()) {
                            case ut:
                                return 2;
                            case ht:
                                return 8;
                            case dt:
                            case ft:
                                return 32;
                            case pt:
                                return 268435456;
                            default:
                                return 32
                        }
                    default:
                        return 32
                }
            }

            var Jh = !1, Zh = null, td = null, ed = null, nd = new Map, id = new Map, sd = [],
                ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

            function rd(t, e) {
                switch (t) {
                    case "focusin":
                    case "focusout":
                        Zh = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        td = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        ed = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        nd.delete(e.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        id.delete(e.pointerId)
                }
            }

            function od(t, e, n, i, s, a) {
                return null === t || t.nativeEvent !== a ? (t = {
                    blockedOn: e,
                    domEventName: n,
                    eventSystemFlags: i,
                    nativeEvent: a,
                    targetContainers: [s]
                }, null !== e && (null !== (e = Kt(e)) && Uh(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, null !== s && -1 === e.indexOf(s) && e.push(s), t)
            }

            function ld(t) {
                var e = Xt(t.target);
                if (null !== e) {
                    var n = O(e);
                    if (null !== n) if (13 === (e = n.tag)) {
                        if (null !== (e = z(n))) return t.blockedOn = e, void function (t, e) {
                            var n = H.p;
                            try {
                                return H.p = t, e()
                            } finally {
                                H.p = n
                            }
                        }(t.priority, (function () {
                            if (13 === n.tag) {
                                var t = Pc(), e = Ti(n, t);
                                null !== e && Lc(e, 0, t), Hh(n, t)
                            }
                        }))
                    } else if (3 === e && n.stateNode.current.memoizedState.isDehydrated) return void (t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                t.blockedOn = null
            }

            function cd(t) {
                if (null !== t.blockedOn) return !1;
                for (var e = t.targetContainers; 0 < e.length;) {
                    var n = Kh(t.nativeEvent);
                    if (null !== n) return null !== (e = Kt(n)) && Uh(e), t.blockedOn = n, !1;
                    var i = new (n = t.nativeEvent).constructor(n.type, n);
                    Pe = i, n.target.dispatchEvent(i), Pe = null, e.shift()
                }
                return !0
            }

            function ud(t, e, n) {
                cd(t) && n.delete(e)
            }

            function hd() {
                Jh = !1, null !== Zh && cd(Zh) && (Zh = null), null !== td && cd(td) && (td = null), null !== ed && cd(ed) && (ed = null), nd.forEach(ud), id.forEach(ud)
            }

            function dd(t, e) {
                t.blockedOn === e && (t.blockedOn = null, Jh || (Jh = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, hd)))
            }

            var fd = null;

            function pd(t) {
                fd !== t && (fd = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, (function () {
                    fd === t && (fd = null);
                    for (var e = 0; e < t.length; e += 3) {
                        var n = t[e], i = t[e + 1], s = t[e + 2];
                        if ("function" !== typeof i) {
                            if (null === Qh(i || n)) continue;
                            break
                        }
                        var a = Kt(n);
                        null !== a && (t.splice(e, 3), e -= 3, ur(a, {
                            pending: !0,
                            data: s,
                            method: n.method,
                            action: i
                        }, i, s))
                    }
                })))
            }

            function gd(t) {
                function e(e) {
                    return dd(e, t)
                }

                null !== Zh && dd(Zh, t), null !== td && dd(td, t), null !== ed && dd(ed, t), nd.forEach(e), id.forEach(e);
                for (var n = 0; n < sd.length; n++) {
                    var i = sd[n];
                    i.blockedOn === t && (i.blockedOn = null)
                }
                for (; 0 < sd.length && null === (n = sd[0]).blockedOn;) ld(n), null === n.blockedOn && sd.shift();
                if (null != (n = (t.ownerDocument || t).$$reactFormReplay)) for (i = 0; i < n.length; i += 3) {
                    var s = n[i], a = n[i + 1], r = s[Wt] || null;
                    if ("function" === typeof a) r || pd(n); else if (r) {
                        var o = null;
                        if (a && a.hasAttribute("formAction")) {
                            if (s = a, r = a[Wt] || null) o = r.formAction; else if (null !== Qh(s)) continue
                        } else o = r.action;
                        "function" === typeof o ? n[i + 1] = o : (n.splice(i, 3), i -= 3), pd(n)
                    }
                }
            }

            function md(t) {
                this._internalRoot = t
            }

            function vd(t) {
                this._internalRoot = t
            }

            vd.prototype.render = md.prototype.render = function (t) {
                var e = this._internalRoot;
                if (null === e) throw Error(r(409));
                jh(e.current, Pc(), t, e, null, null)
            }, vd.prototype.unmount = md.prototype.unmount = function () {
                var t = this._internalRoot;
                if (null !== t) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    0 === t.tag && eu(), jh(t.current, 2, null, t, null, null), zc(), e[jt] = null
                }
            }, vd.prototype.unstable_scheduleHydration = function (t) {
                if (t) {
                    var e = Nt();
                    t = {blockedOn: null, target: t, priority: e};
                    for (var n = 0; n < sd.length && 0 !== e && e < sd[n].priority; n++) ;
                    sd.splice(n, 0, t), 0 === n && ld(t)
                }
            };
            var bd = s.version;
            if ("19.0.0" !== bd) throw Error(r(527, bd, "19.0.0"));
            H.findDOMNode = function (t) {
                var e = t._reactInternals;
                if (void 0 === e) {
                    if ("function" === typeof t.render) throw Error(r(188));
                    throw t = Object.keys(t).join(","), Error(r(268, t))
                }
                return t = function (t) {
                    var e = t.alternate;
                    if (!e) {
                        if (null === (e = O(t))) throw Error(r(188));
                        return e !== t ? null : t
                    }
                    for (var n = t, i = e; ;) {
                        var s = n.return;
                        if (null === s) break;
                        var a = s.alternate;
                        if (null === a) {
                            if (null !== (i = s.return)) {
                                n = i;
                                continue
                            }
                            break
                        }
                        if (s.child === a.child) {
                            for (a = s.child; a;) {
                                if (a === n) return W(s), t;
                                if (a === i) return W(s), e;
                                a = a.sibling
                            }
                            throw Error(r(188))
                        }
                        if (n.return !== i.return) n = s, i = a; else {
                            for (var o = !1, l = s.child; l;) {
                                if (l === n) {
                                    o = !0, n = s, i = a;
                                    break
                                }
                                if (l === i) {
                                    o = !0, i = s, n = a;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!o) {
                                for (l = a.child; l;) {
                                    if (l === n) {
                                        o = !0, n = a, i = s;
                                        break
                                    }
                                    if (l === i) {
                                        o = !0, i = a, n = s;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!o) throw Error(r(189))
                            }
                        }
                        if (n.alternate !== i) throw Error(r(190))
                    }
                    if (3 !== n.tag) throw Error(r(188));
                    return n.stateNode.current === n ? t : e
                }(e), t = null === (t = null !== t ? j(t) : null) ? null : t.stateNode
            };
            var yd = {
                bundleType: 0,
                version: "19.0.0",
                rendererPackageName: "react-dom",
                currentDispatcherRef: P,
                findFiberByHostInstance: Xt,
                reconcilerVersion: "19.0.0"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var wd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!wd.isDisabled && wd.supportsFiber) try {
                    vt = wd.inject(yd), bt = wd
                } catch (kd) {
                }
            }
            e.createRoot = function (t, e) {
                if (!o(t)) throw Error(r(299));
                var n = !1, i = "", s = Ir, a = Dr, l = Nr;
                return null !== e && void 0 !== e && (!0 === e.unstable_strictMode && (n = !0), void 0 !== e.identifierPrefix && (i = e.identifierPrefix), void 0 !== e.onUncaughtError && (s = e.onUncaughtError), void 0 !== e.onCaughtError && (a = e.onCaughtError), void 0 !== e.onRecoverableError && (l = e.onRecoverableError), void 0 !== e.unstable_transitionCallbacks && e.unstable_transitionCallbacks), e = zh(t, 1, !1, null, 0, n, i, s, a, l, 0, null), t[jt] = e.current, Lu(8 === t.nodeType ? t.parentNode : t), new md(e)
            }, e.hydrateRoot = function (t, e, n) {
                if (!o(t)) throw Error(r(299));
                var i = !1, s = "", a = Ir, l = Dr, c = Nr, u = null;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (s = n.identifierPrefix), void 0 !== n.onUncaughtError && (a = n.onUncaughtError), void 0 !== n.onCaughtError && (l = n.onCaughtError), void 0 !== n.onRecoverableError && (c = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (u = n.formState)), (e = zh(t, 1, !0, e, 0, i, s, a, l, c, 0, u)).context = Wh(null), n = e.current, (s = Ro(i = Pc())).callback = null, Lo(n, s, i), e.current.lanes = i, Lt(e, i), gu(e), t[jt] = e.current, Lu(t), new vd(e)
            }, e.version = "19.0.0"
        }, 672: (t, e, n) => {
            var i = n(43);

            function s(t) {
                var e = "https://react.dev/errors/" + t;
                if (1 < arguments.length) {
                    e += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function a() {
            }

            var r = {
                d: {
                    f: a, r: function () {
                        throw Error(s(522))
                    }, D: a, C: a, L: a, m: a, X: a, S: a, M: a
                }, p: 0, findDOMNode: null
            }, o = Symbol.for("react.portal");
            var l = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

            function c(t, e) {
                return "font" === t ? "" : "string" === typeof e ? "use-credentials" === e ? e : "" : void 0
            }

            e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, e.createPortal = function (t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) throw Error(s(299));
                return function (t, e, n) {
                    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: o,
                        key: null == i ? null : "" + i,
                        children: t,
                        containerInfo: e,
                        implementation: n
                    }
                }(t, e, null, n)
            }, e.flushSync = function (t) {
                var e = l.T, n = r.p;
                try {
                    if (l.T = null, r.p = 2, t) return t()
                } finally {
                    l.T = e, r.p = n, r.d.f()
                }
            }, e.preconnect = function (t, e) {
                "string" === typeof t && (e ? e = "string" === typeof (e = e.crossOrigin) ? "use-credentials" === e ? e : "" : void 0 : e = null, r.d.C(t, e))
            }, e.prefetchDNS = function (t) {
                "string" === typeof t && r.d.D(t)
            }, e.preinit = function (t, e) {
                if ("string" === typeof t && e && "string" === typeof e.as) {
                    var n = e.as, i = c(n, e.crossOrigin), s = "string" === typeof e.integrity ? e.integrity : void 0,
                        a = "string" === typeof e.fetchPriority ? e.fetchPriority : void 0;
                    "style" === n ? r.d.S(t, "string" === typeof e.precedence ? e.precedence : void 0, {
                        crossOrigin: i,
                        integrity: s,
                        fetchPriority: a
                    }) : "script" === n && r.d.X(t, {
                        crossOrigin: i,
                        integrity: s,
                        fetchPriority: a,
                        nonce: "string" === typeof e.nonce ? e.nonce : void 0
                    })
                }
            }, e.preinitModule = function (t, e) {
                if ("string" === typeof t) if ("object" === typeof e && null !== e) {
                    if (null == e.as || "script" === e.as) {
                        var n = c(e.as, e.crossOrigin);
                        r.d.M(t, {
                            crossOrigin: n,
                            integrity: "string" === typeof e.integrity ? e.integrity : void 0,
                            nonce: "string" === typeof e.nonce ? e.nonce : void 0
                        })
                    }
                } else null == e && r.d.M(t)
            }, e.preload = function (t, e) {
                if ("string" === typeof t && "object" === typeof e && null !== e && "string" === typeof e.as) {
                    var n = e.as, i = c(n, e.crossOrigin);
                    r.d.L(t, n, {
                        crossOrigin: i,
                        integrity: "string" === typeof e.integrity ? e.integrity : void 0,
                        nonce: "string" === typeof e.nonce ? e.nonce : void 0,
                        type: "string" === typeof e.type ? e.type : void 0,
                        fetchPriority: "string" === typeof e.fetchPriority ? e.fetchPriority : void 0,
                        referrerPolicy: "string" === typeof e.referrerPolicy ? e.referrerPolicy : void 0,
                        imageSrcSet: "string" === typeof e.imageSrcSet ? e.imageSrcSet : void 0,
                        imageSizes: "string" === typeof e.imageSizes ? e.imageSizes : void 0,
                        media: "string" === typeof e.media ? e.media : void 0
                    })
                }
            }, e.preloadModule = function (t, e) {
                if ("string" === typeof t) if (e) {
                    var n = c(e.as, e.crossOrigin);
                    r.d.m(t, {
                        as: "string" === typeof e.as && "script" !== e.as ? e.as : void 0,
                        crossOrigin: n,
                        integrity: "string" === typeof e.integrity ? e.integrity : void 0
                    })
                } else r.d.m(t)
            }, e.requestFormReset = function (t) {
                r.d.r(t)
            }, e.unstable_batchedUpdates = function (t, e) {
                return t(e)
            }, e.useFormState = function (t, e, n) {
                return l.H.useFormState(t, e, n)
            }, e.useFormStatus = function () {
                return l.H.useHostTransitionStatus()
            }, e.version = "19.0.0"
        }, 391: (t, e, n) => {
            !function t() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                } catch (e) {
                    console.error(e)
                }
            }(), t.exports = n(4)
        }, 950: (t, e, n) => {
            !function t() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                } catch (e) {
                    console.error(e)
                }
            }(), t.exports = n(672)
        }, 799: (t, e) => {
            var n = Symbol.for("react.transitional.element");

            function i(t, e, i) {
                var s = null;
                if (void 0 !== i && (s = "" + i), void 0 !== e.key && (s = "" + e.key), "key" in e) for (var a in i = {}, e) "key" !== a && (i[a] = e[a]); else i = e;
                return e = i.ref, {$$typeof: n, type: t, key: s, ref: void 0 !== e ? e : null, props: i}
            }

            Symbol.for("react.fragment"), e.jsx = i, e.jsxs = i
        }, 288: (t, e) => {
            var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"),
                s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"),
                o = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"),
                u = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"),
                f = Symbol.iterator;
            var p = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, g = Object.assign, m = {};

            function v(t, e, n) {
                this.props = t, this.context = e, this.refs = m, this.updater = n || p
            }

            function b() {
            }

            function y(t, e, n) {
                this.props = t, this.context = e, this.refs = m, this.updater = n || p
            }

            v.prototype.isReactComponent = {}, v.prototype.setState = function (t, e) {
                if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, t, e, "setState")
            }, v.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, b.prototype = v.prototype;
            var w = y.prototype = new b;
            w.constructor = y, g(w, v.prototype), w.isPureReactComponent = !0;
            var A = Array.isArray, k = {H: null, A: null, T: null, S: null}, _ = Object.prototype.hasOwnProperty;

            function S(t, e, i, s, a, r) {
                return i = r.ref, {$$typeof: n, type: t, key: e, ref: void 0 !== i ? i : null, props: r}
            }

            function x(t) {
                return "object" === typeof t && null !== t && t.$$typeof === n
            }

            var E = /\/+/g;

            function C(t, e) {
                return "object" === typeof t && null !== t && null != t.key ? function (t) {
                    var e = {"=": "=0", ":": "=2"};
                    return "$" + t.replace(/[=:]/g, (function (t) {
                        return e[t]
                    }))
                }("" + t.key) : e.toString(36)
            }

            function M() {
            }

            function T(t, e, s, a, r) {
                var o = typeof t;
                "undefined" !== o && "boolean" !== o || (t = null);
                var l, c, u = !1;
                if (null === t) u = !0; else switch (o) {
                    case "bigint":
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (t.$$typeof) {
                            case n:
                            case i:
                                u = !0;
                                break;
                            case d:
                                return T((u = t._init)(t._payload), e, s, a, r)
                        }
                }
                if (u) return r = r(t), u = "" === a ? "." + C(t, 0) : a, A(r) ? (s = "", null != u && (s = u.replace(E, "$&/") + "/"), T(r, e, s, "", (function (t) {
                    return t
                }))) : null != r && (x(r) && (l = r, c = s + (null == r.key || t && t.key === r.key ? "" : ("" + r.key).replace(E, "$&/") + "/") + u, r = S(l.type, c, void 0, 0, 0, l.props)), e.push(r)), 1;
                u = 0;
                var h, p = "" === a ? "." : a + ":";
                if (A(t)) for (var g = 0; g < t.length; g++) u += T(a = t[g], e, s, o = p + C(a, g), r); else if ("function" === typeof (g = null === (h = t) || "object" !== typeof h ? null : "function" === typeof (h = f && h[f] || h["@@iterator"]) ? h : null)) for (t = g.call(t), g = 0; !(a = t.next()).done;) u += T(a = a.value, e, s, o = p + C(a, g++), r); else if ("object" === o) {
                    if ("function" === typeof t.then) return T(function (t) {
                        switch (t.status) {
                            case "fulfilled":
                                return t.value;
                            case "rejected":
                                throw t.reason;
                            default:
                                switch ("string" === typeof t.status ? t.then(M, M) : (t.status = "pending", t.then((function (e) {
                                    "pending" === t.status && (t.status = "fulfilled", t.value = e)
                                }), (function (e) {
                                    "pending" === t.status && (t.status = "rejected", t.reason = e)
                                }))), t.status) {
                                    case "fulfilled":
                                        return t.value;
                                    case "rejected":
                                        throw t.reason
                                }
                        }
                        throw t
                    }(t), e, s, a, r);
                    throw e = String(t), Error("Objects are not valid as a React child (found: " + ("[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.")
                }
                return u
            }

            function P(t, e, n) {
                if (null == t) return t;
                var i = [], s = 0;
                return T(t, i, "", "", (function (t) {
                    return e.call(n, t, s++)
                })), i
            }

            function R(t) {
                if (-1 === t._status) {
                    var e = t._result;
                    (e = e()).then((function (e) {
                        0 !== t._status && -1 !== t._status || (t._status = 1, t._result = e)
                    }), (function (e) {
                        0 !== t._status && -1 !== t._status || (t._status = 2, t._result = e)
                    })), -1 === t._status && (t._status = 0, t._result = e)
                }
                if (1 === t._status) return t._result.default;
                throw t._result
            }

            var L = "function" === typeof reportError ? reportError : function (t) {
                if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
                    var e = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: "object" === typeof t && null !== t && "string" === typeof t.message ? String(t.message) : String(t),
                        error: t
                    });
                    if (!window.dispatchEvent(e)) return
                } else if ("object" === typeof process && "function" === typeof process.emit) return void process.emit("uncaughtException", t);
                console.error(t)
            };

            function F() {
            }

            e.Children = {
                map: P, forEach: function (t, e, n) {
                    P(t, (function () {
                        e.apply(this, arguments)
                    }), n)
                }, count: function (t) {
                    var e = 0;
                    return P(t, (function () {
                        e++
                    })), e
                }, toArray: function (t) {
                    return P(t, (function (t) {
                        return t
                    })) || []
                }, only: function (t) {
                    if (!x(t)) throw Error("React.Children.only expected to receive a single React element child.");
                    return t
                }
            }, e.Component = v, e.Fragment = s, e.Profiler = r, e.PureComponent = y, e.StrictMode = a, e.Suspense = u, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, e.act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, e.cache = function (t) {
                return function () {
                    return t.apply(null, arguments)
                }
            }, e.cloneElement = function (t, e, n) {
                if (null === t || void 0 === t) throw Error("The argument must be a React element, but you passed " + t + ".");
                var i = g({}, t.props), s = t.key;
                if (null != e) for (a in void 0 !== e.ref && void 0, void 0 !== e.key && (s = "" + e.key), e) !_.call(e, a) || "key" === a || "__self" === a || "__source" === a || "ref" === a && void 0 === e.ref || (i[a] = e[a]);
                var a = arguments.length - 2;
                if (1 === a) i.children = n; else if (1 < a) {
                    for (var r = Array(a), o = 0; o < a; o++) r[o] = arguments[o + 2];
                    i.children = r
                }
                return S(t.type, s, void 0, 0, 0, i)
            }, e.createContext = function (t) {
                return (t = {
                    $$typeof: l,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = t, t.Consumer = {$$typeof: o, _context: t}, t
            }, e.createElement = function (t, e, n) {
                var i, s = {}, a = null;
                if (null != e) for (i in void 0 !== e.key && (a = "" + e.key), e) _.call(e, i) && "key" !== i && "__self" !== i && "__source" !== i && (s[i] = e[i]);
                var r = arguments.length - 2;
                if (1 === r) s.children = n; else if (1 < r) {
                    for (var o = Array(r), l = 0; l < r; l++) o[l] = arguments[l + 2];
                    s.children = o
                }
                if (t && t.defaultProps) for (i in r = t.defaultProps) void 0 === s[i] && (s[i] = r[i]);
                return S(t, a, void 0, 0, 0, s)
            }, e.createRef = function () {
                return {current: null}
            }, e.forwardRef = function (t) {
                return {$$typeof: c, render: t}
            }, e.isValidElement = x, e.lazy = function (t) {
                return {$$typeof: d, _payload: {_status: -1, _result: t}, _init: R}
            }, e.memo = function (t, e) {
                return {$$typeof: h, type: t, compare: void 0 === e ? null : e}
            }, e.startTransition = function (t) {
                var e = k.T, n = {};
                k.T = n;
                try {
                    var i = t(), s = k.S;
                    null !== s && s(n, i), "object" === typeof i && null !== i && "function" === typeof i.then && i.then(F, L)
                } catch (a) {
                    L(a)
                } finally {
                    k.T = e
                }
            }, e.unstable_useCacheRefresh = function () {
                return k.H.useCacheRefresh()
            }, e.use = function (t) {
                return k.H.use(t)
            }, e.useActionState = function (t, e, n) {
                return k.H.useActionState(t, e, n)
            }, e.useCallback = function (t, e) {
                return k.H.useCallback(t, e)
            }, e.useContext = function (t) {
                return k.H.useContext(t)
            }, e.useDebugValue = function () {
            }, e.useDeferredValue = function (t, e) {
                return k.H.useDeferredValue(t, e)
            }, e.useEffect = function (t, e) {
                return k.H.useEffect(t, e)
            }, e.useId = function () {
                return k.H.useId()
            }, e.useImperativeHandle = function (t, e, n) {
                return k.H.useImperativeHandle(t, e, n)
            }, e.useInsertionEffect = function (t, e) {
                return k.H.useInsertionEffect(t, e)
            }, e.useLayoutEffect = function (t, e) {
                return k.H.useLayoutEffect(t, e)
            }, e.useMemo = function (t, e) {
                return k.H.useMemo(t, e)
            }, e.useOptimistic = function (t, e) {
                return k.H.useOptimistic(t, e)
            }, e.useReducer = function (t, e, n) {
                return k.H.useReducer(t, e, n)
            }, e.useRef = function (t) {
                return k.H.useRef(t)
            }, e.useState = function (t) {
                return k.H.useState(t)
            }, e.useSyncExternalStore = function (t, e, n) {
                return k.H.useSyncExternalStore(t, e, n)
            }, e.useTransition = function () {
                return k.H.useTransition()
            }, e.version = "19.0.0"
        }, 43: (t, e, n) => {
            t.exports = n(288)
        }, 579: (t, e, n) => {
            t.exports = n(799)
        }, 896: (t, e) => {
            function n(t, e) {
                var n = t.length;
                t.push(e);
                t: for (; 0 < n;) {
                    var i = n - 1 >>> 1, s = t[i];
                    if (!(0 < a(s, e))) break t;
                    t[i] = e, t[n] = s, n = i
                }
            }

            function i(t) {
                return 0 === t.length ? null : t[0]
            }

            function s(t) {
                if (0 === t.length) return null;
                var e = t[0], n = t.pop();
                if (n !== e) {
                    t[0] = n;
                    t: for (var i = 0, s = t.length, r = s >>> 1; i < r;) {
                        var o = 2 * (i + 1) - 1, l = t[o], c = o + 1, u = t[c];
                        if (0 > a(l, n)) c < s && 0 > a(u, l) ? (t[i] = u, t[c] = n, i = c) : (t[i] = l, t[o] = n, i = o); else {
                            if (!(c < s && 0 > a(u, n))) break t;
                            t[i] = u, t[c] = n, i = c
                        }
                    }
                }
                return e
            }

            function a(t, e) {
                var n = t.sortIndex - e.sortIndex;
                return 0 !== n ? n : t.id - e.id
            }

            if (e.unstable_now = void 0, "object" === typeof performance && "function" === typeof performance.now) {
                var r = performance;
                e.unstable_now = function () {
                    return r.now()
                }
            } else {
                var o = Date, l = o.now();
                e.unstable_now = function () {
                    return o.now() - l
                }
            }
            var c = [], u = [], h = 1, d = null, f = 3, p = !1, g = !1, m = !1,
                v = "function" === typeof setTimeout ? setTimeout : null,
                b = "function" === typeof clearTimeout ? clearTimeout : null,
                y = "undefined" !== typeof setImmediate ? setImmediate : null;

            function w(t) {
                for (var e = i(u); null !== e;) {
                    if (null === e.callback) s(u); else {
                        if (!(e.startTime <= t)) break;
                        s(u), e.sortIndex = e.expirationTime, n(c, e)
                    }
                    e = i(u)
                }
            }

            function A(t) {
                if (m = !1, w(t), !g) if (null !== i(c)) g = !0, R(); else {
                    var e = i(u);
                    null !== e && L(A, e.startTime - t)
                }
            }

            var k, _ = !1, S = -1, x = 5, E = -1;

            function C() {
                return !(e.unstable_now() - E < x)
            }

            function M() {
                if (_) {
                    var t = e.unstable_now();
                    E = t;
                    var n = !0;
                    try {
                        t: {
                            g = !1, m && (m = !1, b(S), S = -1), p = !0;
                            var a = f;
                            try {
                                e: {
                                    for (w(t), d = i(c); null !== d && !(d.expirationTime > t && C());) {
                                        var r = d.callback;
                                        if ("function" === typeof r) {
                                            d.callback = null, f = d.priorityLevel;
                                            var o = r(d.expirationTime <= t);
                                            if (t = e.unstable_now(), "function" === typeof o) {
                                                d.callback = o, w(t), n = !0;
                                                break e
                                            }
                                            d === i(c) && s(c), w(t)
                                        } else s(c);
                                        d = i(c)
                                    }
                                    if (null !== d) n = !0; else {
                                        var l = i(u);
                                        null !== l && L(A, l.startTime - t), n = !1
                                    }
                                }
                                break t
                            } finally {
                                d = null, f = a, p = !1
                            }
                            n = void 0
                        }
                    } finally {
                        n ? k() : _ = !1
                    }
                }
            }

            if ("function" === typeof y) k = function () {
                y(M)
            }; else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel, P = T.port2;
                T.port1.onmessage = M, k = function () {
                    P.postMessage(null)
                }
            } else k = function () {
                v(M, 0)
            };

            function R() {
                _ || (_ = !0, k())
            }

            function L(t, n) {
                S = v((function () {
                    t(e.unstable_now())
                }), n)
            }

            e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (t) {
                t.callback = null
            }, e.unstable_continueExecution = function () {
                g || p || (g = !0, R())
            }, e.unstable_forceFrameRate = function (t) {
                0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < t ? Math.floor(1e3 / t) : 5
            }, e.unstable_getCurrentPriorityLevel = function () {
                return f
            }, e.unstable_getFirstCallbackNode = function () {
                return i(c)
            }, e.unstable_next = function (t) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var e = 3;
                        break;
                    default:
                        e = f
                }
                var n = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = n
                }
            }, e.unstable_pauseExecution = function () {
            }, e.unstable_requestPaint = function () {
            }, e.unstable_runWithPriority = function (t, e) {
                switch (t) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        t = 3
                }
                var n = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = n
                }
            }, e.unstable_scheduleCallback = function (t, s, a) {
                var r = e.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? r + a : r : a = r, t) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return t = {
                    id: h++,
                    callback: s,
                    priorityLevel: t,
                    startTime: a,
                    expirationTime: o = a + o,
                    sortIndex: -1
                }, a > r ? (t.sortIndex = a, n(u, t), null === i(c) && t === i(u) && (m ? (b(S), S = -1) : m = !0, L(A, a - r))) : (t.sortIndex = o, n(c, t), g || p || (g = !0, R())), t
            }, e.unstable_shouldYield = C, e.unstable_wrapCallback = function (t) {
                var e = f;
                return function () {
                    var n = f;
                    f = e;
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        f = n
                    }
                }
            }
        }, 853: (t, e, n) => {
            t.exports = n(896)
        }, 440: t => {
            var e = function () {
            };
            t.exports = e
        }, 749: (t, e, n) => {
            t.exports = n.p + "static/media/pdf.worker.min.1208bd772ac28ea2cb21.mjs"
        }
    }, e = {};

    function n(i) {
        var s = e[i];
        if (void 0 !== s) return s.exports;
        var a = e[i] = {exports: {}};
        return t[i](a, a.exports, n), a.exports
    }

    n.m = t, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
    }, n.f = {}, n.e = t => Promise.all(Object.keys(n.f).reduce(((e, i) => (n.f[i](t, e), e)), [])), n.u = t => "static/js/" + t + ".d893b6f6.chunk.js", n.miniCssF = t => {
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        var t = {}, e = "pdf_storage:";
        n.l = (i, s, a, r) => {
            if (t[i]) t[i].push(s); else {
                var o, l;
                if (void 0 !== a) for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var h = c[u];
                    if (h.getAttribute("src") == i || h.getAttribute("data-webpack") == e + a) {
                        o = h;
                        break
                    }
                }
                o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", e + a), o.src = i), t[i] = [s];
                var d = (e, n) => {
                    o.onerror = o.onload = null, clearTimeout(f);
                    var s = t[i];
                    if (delete t[i], o.parentNode && o.parentNode.removeChild(o), s && s.forEach((t => t(n))), e) return e(n)
                }, f = setTimeout(d.bind(null, void 0, {type: "timeout", target: o}), 12e4);
                o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), l && document.head.appendChild(o)
            }
        }
    })(), n.r = t => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.p = "/pdf_storage/", (() => {
        n.b = document.baseURI || self.location.href;
        var t = {792: 0};
        n.f.j = (e, i) => {
            var s = n.o(t, e) ? t[e] : void 0;
            if (0 !== s) if (s) i.push(s[2]); else {
                var a = new Promise(((n, i) => s = t[e] = [n, i]));
                i.push(s[2] = a);
                var r = n.p + n.u(e), o = new Error;
                n.l(r, (i => {
                    if (n.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0), s)) {
                        var a = i && ("load" === i.type ? "missing" : i.type), r = i && i.target && i.target.src;
                        o.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", o.name = "ChunkLoadError", o.type = a, o.request = r, s[1](o)
                    }
                }), "chunk-" + e, e)
            }
        };
        var e = (e, i) => {
            var s, a, r = i[0], o = i[1], l = i[2], c = 0;
            if (r.some((e => 0 !== t[e]))) {
                for (s in o) n.o(o, s) && (n.m[s] = o[s]);
                if (l) l(n)
            }
            for (e && e(i); c < r.length; c++) a = r[c], n.o(t, a) && t[a] && t[a][0](), t[a] = 0
        }, i = self.webpackChunkpdf_storage = self.webpackChunkpdf_storage || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var i = {};
    n.r(i), n.d(i, {dU: () => xp, ng: () => Ep, EA: () => Cp, Tm: () => Mp, D6: () => Tp, YE: () => Pp});
    var s, a, r, o, l, c, u, h, d, f, p, g, m = n(43), v = n(391);

    function b(t) {
        return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, b(t)
    }

    function y(t) {
        var e = function (t, e) {
            if ("object" != b(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" != b(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == b(e) ? e : e + ""
    }

    function w(t, e, n) {
        return (e = y(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function k(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? A(Object(n), !0).forEach((function (e) {
                w(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function _(t, e, n) {
        e || (e = []);
        var i = e.length++;
        return Object.defineProperty({}, "_", {
            set: function (s) {
                e[i] = s, t.apply(n, e)
            }
        })
    }

    function S(t, e) {
        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function x(t, e) {
        S(t, e), e.add(t)
    }

    function E(t, e, n) {
        S(t, e), e.set(t, n)
    }

    function C(t, e, n) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError("Private element is not present on this object")
    }

    function M(t, e, n) {
        return n(C(t, e))
    }

    function T(t, e) {
        return t.get(C(t, e))
    }

    function P(t, e, n) {
        return t.set(C(t, e), n), n
    }

    var R = {
        d: (t, e) => {
            for (var n in e) R.o(e, n) && !R.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
        }, o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
    }, L = globalThis.pdfjsLib = {};
    R.d(L, {
        AbortException: () => Vt,
        AnnotationEditorLayer: () => cp,
        AnnotationEditorParamsType: () => X,
        AnnotationEditorType: () => q,
        AnnotationEditorUIManager: () => li,
        AnnotationLayer: () => vu,
        AnnotationMode: () => G,
        ColorPicker: () => Xh,
        DOMSVGFactory: () => Hl,
        DrawLayer: () => Ap,
        FeatureTest: () => Kt,
        GlobalWorkerOptions: () => er,
        ImageKind: () => et,
        InvalidPDFException: () => jt,
        MissingPDFException: () => Bt,
        OPS: () => Et,
        OutputScale: () => Le,
        PDFDataRangeTransport: () => tl,
        PDFDateString: () => xe,
        PDFWorker: () => dl,
        PasswordResponses: () => Ct,
        PermissionFlag: () => K,
        PixelsPerInch: () => fe,
        RenderingCancelledException: () => me,
        TextLayer: () => Ro,
        UnexpectedResponseException: () => Ht,
        Util: () => Qt,
        VerbosityLevel: () => xt,
        XfaLayer: () => Ul,
        build: () => Ol,
        createValidAbsoluteUrl: () => Dt,
        fetchData: () => pe,
        getDocument: () => Qo,
        getFilenameFromUrl: () => ye,
        getPdfFilenameFromUrl: () => we,
        getXfaPageViewport: () => Ce,
        isDataScheme: () => ve,
        isPdfFile: () => be,
        noContextMenu: () => _e,
        normalizeUnicode: () => ee,
        setLayerDimensions: () => Re,
        shadow: () => Nt,
        version: () => Nl
    });
    const F = "object" === typeof process && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && "browser" !== process.type),
        I = [1, 0, 0, 1, 0, 0], D = [.001, 0, 0, .001, 0, 0], N = 1.35, O = 1, z = 2, W = 4, j = 16, B = 32, H = 64,
        U = 128, V = 256, G = {DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3},
        q = {DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15}, X = {
            RESIZE: 1,
            CREATE: 2,
            FREETEXT_SIZE: 11,
            FREETEXT_COLOR: 12,
            FREETEXT_OPACITY: 13,
            INK_COLOR: 21,
            INK_THICKNESS: 22,
            INK_OPACITY: 23,
            HIGHLIGHT_COLOR: 31,
            HIGHLIGHT_DEFAULT_COLOR: 32,
            HIGHLIGHT_THICKNESS: 33,
            HIGHLIGHT_FREE: 34,
            HIGHLIGHT_SHOW_ALL: 35
        }, K = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048
        }, Y = 0, Q = 1, $ = 2, J = 3, Z = 3, tt = 4, et = {GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3}, nt = 1, it = 2,
        st = 3, at = 4, rt = 5, ot = 6, lt = 7, ct = 8, ut = 9, ht = 10, dt = 11, ft = 12, pt = 13, gt = 14, mt = 15,
        vt = 16, bt = 17, yt = 20, wt = 1, At = 2, kt = 3, _t = 4, St = 5, xt = {ERRORS: 0, WARNINGS: 1, INFOS: 5},
        Et = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91,
            setStrokeTransparent: 92,
            setFillTransparent: 93
        }, Ct = {NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2};
    let Mt = xt.WARNINGS;

    function Tt(t) {
        Number.isInteger(t) && (Mt = t)
    }

    function Pt() {
        return Mt
    }

    function Rt(t) {
        Mt >= xt.INFOS && console.log("Info: ".concat(t))
    }

    function Lt(t) {
        Mt >= xt.WARNINGS && console.log("Warning: ".concat(t))
    }

    function Ft(t) {
        throw new Error(t)
    }

    function It(t, e) {
        t || Ft(e)
    }

    function Dt(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t) return null;
        try {
            if (n && "string" === typeof t) {
                if (n.addDefaultProtocol && t.startsWith("www.")) {
                    const e = t.match(/\./g);
                    (null === e || void 0 === e ? void 0 : e.length) >= 2 && (t = "http://".concat(t))
                }
                if (n.tryConvertEncoding) try {
                    t = decodeURIComponent(escape(t))
                } catch (i) {
                }
            }
            const s = e ? new URL(t, e) : new URL(t);
            if (function (t) {
                switch (null === t || void 0 === t ? void 0 : t.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "mailto:":
                    case "tel:":
                        return !0;
                    default:
                        return !1
                }
            }(s)) return s
        } catch (s) {
        }
        return null
    }

    function Nt(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return Object.defineProperty(t, e, {value: n, enumerable: !i, configurable: !0, writable: !1}), n
    }

    const Ot = function () {
        function t(t, e) {
            this.message = t, this.name = e
        }

        return t.prototype = new Error, t.constructor = t, t
    }();

    class zt extends Ot {
        constructor(t, e) {
            super(t, "PasswordException"), this.code = e
        }
    }

    class Wt extends Ot {
        constructor(t, e) {
            super(t, "UnknownErrorException"), this.details = e
        }
    }

    class jt extends Ot {
        constructor(t) {
            super(t, "InvalidPDFException")
        }
    }

    class Bt extends Ot {
        constructor(t) {
            super(t, "MissingPDFException")
        }
    }

    class Ht extends Ot {
        constructor(t, e) {
            super(t, "UnexpectedResponseException"), this.status = e
        }
    }

    class Ut extends Ot {
        constructor(t) {
            super(t, "FormatError")
        }
    }

    class Vt extends Ot {
        constructor(t) {
            super(t, "AbortException")
        }
    }

    function Gt(t) {
        "object" === typeof t && void 0 !== (null === t || void 0 === t ? void 0 : t.length) || Ft("Invalid argument for bytesToString");
        const e = t.length, n = 8192;
        if (e < n) return String.fromCharCode.apply(null, t);
        const i = [];
        for (let s = 0; s < e; s += n) {
            const a = Math.min(s + n, e), r = t.subarray(s, a);
            i.push(String.fromCharCode.apply(null, r))
        }
        return i.join("")
    }

    function qt(t) {
        "string" !== typeof t && Ft("Invalid argument for stringToBytes");
        const e = t.length, n = new Uint8Array(e);
        for (let i = 0; i < e; ++i) n[i] = 255 & t.charCodeAt(i);
        return n
    }

    function Xt(t) {
        const e = Object.create(null);
        for (const [n, i] of t) e[n] = i;
        return e
    }

    class Kt {
        static get isLittleEndian() {
            return Nt(this, "isLittleEndian", function () {
                const t = new Uint8Array(4);
                return t[0] = 1, 1 === new Uint32Array(t.buffer, 0, 1)[0]
            }())
        }

        static get isEvalSupported() {
            return Nt(this, "isEvalSupported", function () {
                try {
                    return new Function(""), !0
                } catch (t) {
                    return !1
                }
            }())
        }

        static get isOffscreenCanvasSupported() {
            return Nt(this, "isOffscreenCanvasSupported", "undefined" !== typeof OffscreenCanvas)
        }

        static get platform() {
            var t, e;
            return "undefined" !== typeof navigator && "string" === typeof (null === (t = navigator) || void 0 === t ? void 0 : t.platform) ? Nt(this, "platform", {
                isMac: navigator.platform.includes("Mac"),
                isWindows: navigator.platform.includes("Win"),
                isFirefox: "string" === typeof (null === (e = navigator) || void 0 === e ? void 0 : e.userAgent) && navigator.userAgent.includes("Firefox")
            }) : Nt(this, "platform", {isMac: !1, isWindows: !1, isFirefox: !1})
        }

        static get isCSSRoundSupported() {
            var t, e;
            return Nt(this, "isCSSRoundSupported", null === (t = globalThis.CSS) || void 0 === t || null === (e = t.supports) || void 0 === e ? void 0 : e.call(t, "width: round(1.5px, 1px)"))
        }
    }

    const Yt = Array.from(Array(256).keys(), (t => t.toString(16).padStart(2, "0")));

    class Qt {
        static makeHexColor(t, e, n) {
            return "#".concat(Yt[t]).concat(Yt[e]).concat(Yt[n])
        }

        static scaleMinMax(t, e) {
            let n;
            t[0] ? (t[0] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[3], e[3] *= t[3]) : (n = e[0], e[0] = e[1], e[1] = n, n = e[2], e[2] = e[3], e[3] = n, t[1] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5]
        }

        static transform(t, e) {
            return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
        }

        static applyTransform(t, e) {
            return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
        }

        static applyInverseTransform(t, e) {
            const n = e[0] * e[3] - e[1] * e[2];
            return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n]
        }

        static getAxialAlignedBoundingBox(t, e) {
            const n = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e),
                s = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
            return [Math.min(n[0], i[0], s[0], a[0]), Math.min(n[1], i[1], s[1], a[1]), Math.max(n[0], i[0], s[0], a[0]), Math.max(n[1], i[1], s[1], a[1])]
        }

        static inverseTransform(t) {
            const e = t[0] * t[3] - t[1] * t[2];
            return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]
        }

        static singularValueDecompose2dScale(t) {
            const e = [t[0], t[2], t[1], t[3]], n = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3],
                s = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], r = (n + a) / 2,
                o = Math.sqrt((n + a) ** 2 - 4 * (n * a - s * i)) / 2, l = r + o || 1, c = r - o || 1;
            return [Math.sqrt(l), Math.sqrt(c)]
        }

        static normalizeRect(t) {
            const e = t.slice(0);
            return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e
        }

        static intersect(t, e) {
            const n = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
                i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
            if (n > i) return null;
            const s = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
                a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
            return s > a ? null : [n, s, i, a]
        }

        static bezierBoundingBox(t, e, n, i, s, a, r, o, l) {
            return l ? (l[0] = Math.min(l[0], t, r), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t, r), l[3] = Math.max(l[3], e, o)) : l = [Math.min(t, r), Math.min(e, o), Math.max(t, r), Math.max(e, o)], C(Qt, this, Jt).call(this, t, n, s, r, e, i, a, o, 3 * (3 * (n - s) - t + r), 6 * (t - 2 * n + s), 3 * (n - t), l), C(Qt, this, Jt).call(this, t, n, s, r, e, i, a, o, 3 * (3 * (i - a) - e + o), 6 * (e - 2 * i + a), 3 * (i - e), l), l
        }
    }

    function $t(t, e, n, i, s, a, r, o, l, c) {
        if (l <= 0 || l >= 1) return;
        const u = 1 - l, h = l * l, d = h * l, f = u * (u * (u * t + 3 * l * e) + 3 * h * n) + d * i,
            p = u * (u * (u * s + 3 * l * a) + 3 * h * r) + d * o;
        c[0] = Math.min(c[0], f), c[1] = Math.min(c[1], p), c[2] = Math.max(c[2], f), c[3] = Math.max(c[3], p)
    }

    function Jt(t, e, n, i, a, r, o, l, c, u, h, d) {
        if (Math.abs(c) < 1e-12) return void (Math.abs(u) >= 1e-12 && C(s, this, $t).call(this, t, e, n, i, a, r, o, l, -h / u, d));
        const f = u ** 2 - 4 * h * c;
        if (f < 0) return;
        const p = Math.sqrt(f), g = 2 * c;
        C(s, this, $t).call(this, t, e, n, i, a, r, o, l, (-u + p) / g, d), C(s, this, $t).call(this, t, e, n, i, a, r, o, l, (-u - p) / g, d)
    }

    s = Qt;
    let Zt = null, te = null;

    function ee(t) {
        return Zt || (Zt = /([\xA0\xB5\u037E\u0EB3\u2000-\u200A\u202F\u2126\uFB00-\uFB04\uFB06\uFB20-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBA1\uFBA4-\uFBA9\uFBAE-\uFBB1\uFBD3-\uFBDC\uFBDE-\uFBE7\uFBEA-\uFBF8\uFBFC\uFBFD\uFC00-\uFC5D\uFC64-\uFCF1\uFCF5-\uFD3D\uFD88\uFDF4\uFDFA\uFDFB\uFE71\uFE77\uFE79\uFE7B\uFE7D]+)|(\uFB05+)/g, te = new Map([["\ufb05", "\u017ft"]])), t.replaceAll(Zt, ((t, e, n) => e ? e.normalize("NFKC") : te.get(n)))
    }

    const ne = "pdfjs_internal_id_", ie = 0, se = 1, ae = 2, re = 3, oe = 4, le = 5, ce = 6, ue = 7, he = 8;
    const de = "http://www.w3.org/2000/svg";

    class fe {
    }

    async function pe(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        if (ke(t, document.baseURI)) {
            const n = await fetch(t);
            if (!n.ok) throw new Error(n.statusText);
            switch (e) {
                case "arraybuffer":
                    return n.arrayBuffer();
                case "blob":
                    return n.blob();
                case "json":
                    return n.json()
            }
            return n.text()
        }
        return new Promise(((n, i) => {
            const s = new XMLHttpRequest;
            s.open("GET", t, !0), s.responseType = e, s.onreadystatechange = () => {
                if (s.readyState === XMLHttpRequest.DONE) if (200 !== s.status && 0 !== s.status) i(new Error(s.statusText)); else {
                    switch (e) {
                        case "arraybuffer":
                        case "blob":
                        case "json":
                            return void n(s.response)
                    }
                    n(s.responseText)
                }
            }, s.send(null)
        }))
    }

    a = fe, w(fe, "CSS", 96), w(fe, "PDF", 72), w(fe, "PDF_TO_CSS_UNITS", a.CSS / a.PDF);

    class ge {
        constructor(t) {
            let {viewBox: e, scale: n, rotation: i, offsetX: s = 0, offsetY: a = 0, dontFlip: r = !1} = t;
            this.viewBox = e, this.scale = n, this.rotation = i, this.offsetX = s, this.offsetY = a;
            const o = (e[2] + e[0]) / 2, l = (e[3] + e[1]) / 2;
            let c, u, h, d, f, p, g, m;
            switch (i %= 360, i < 0 && (i += 360), i) {
                case 180:
                    c = -1, u = 0, h = 0, d = 1;
                    break;
                case 90:
                    c = 0, u = 1, h = 1, d = 0;
                    break;
                case 270:
                    c = 0, u = -1, h = -1, d = 0;
                    break;
                case 0:
                    c = 1, u = 0, h = 0, d = -1;
                    break;
                default:
                    throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")
            }
            r && (h = -h, d = -d), 0 === c ? (f = Math.abs(l - e[1]) * n + s, p = Math.abs(o - e[0]) * n + a, g = (e[3] - e[1]) * n, m = (e[2] - e[0]) * n) : (f = Math.abs(o - e[0]) * n + s, p = Math.abs(l - e[1]) * n + a, g = (e[2] - e[0]) * n, m = (e[3] - e[1]) * n), this.transform = [c * n, u * n, h * n, d * n, f - c * n * o - h * n * l, p - u * n * o - d * n * l], this.width = g, this.height = m
        }

        get rawDims() {
            const {viewBox: t} = this;
            return Nt(this, "rawDims", {pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1]})
        }

        clone() {
            let {
                scale: t = this.scale,
                rotation: e = this.rotation,
                offsetX: n = this.offsetX,
                offsetY: i = this.offsetY,
                dontFlip: s = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new ge({viewBox: this.viewBox.slice(), scale: t, rotation: e, offsetX: n, offsetY: i, dontFlip: s})
        }

        convertToViewportPoint(t, e) {
            return Qt.applyTransform([t, e], this.transform)
        }

        convertToViewportRectangle(t) {
            const e = Qt.applyTransform([t[0], t[1]], this.transform),
                n = Qt.applyTransform([t[2], t[3]], this.transform);
            return [e[0], e[1], n[0], n[1]]
        }

        convertToPdfPoint(t, e) {
            return Qt.applyInverseTransform([t, e], this.transform)
        }
    }

    class me extends Ot {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            super(t, "RenderingCancelledException"), this.extraDelay = e
        }
    }

    function ve(t) {
        const e = t.length;
        let n = 0;
        for (; n < e && "" === t[n].trim();) n++;
        return "data:" === t.substring(n, n + 5).toLowerCase()
    }

    function be(t) {
        return "string" === typeof t && /\.pdf$/i.test(t)
    }

    function ye(t) {
        return [t] = t.split(/[#?]/, 1), t.substring(t.lastIndexOf("/") + 1)
    }

    function we(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "document.pdf";
        if ("string" !== typeof t) return e;
        if (ve(t)) return Lt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
        const n = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
        let s = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
        if (s && (s = s[0], s.includes("%"))) try {
            s = n.exec(decodeURIComponent(s))[0]
        } catch (a) {
        }
        return s || e
    }

    class Ae {
        constructor() {
            w(this, "started", Object.create(null)), w(this, "times", [])
        }

        time(t) {
            t in this.started && Lt("Timer is already running for ".concat(t)), this.started[t] = Date.now()
        }

        timeEnd(t) {
            t in this.started || Lt("Timer has not been started for ".concat(t)), this.times.push({
                name: t,
                start: this.started[t],
                end: Date.now()
            }), delete this.started[t]
        }

        toString() {
            const t = [];
            let e = 0;
            for (const {name: n} of this.times) e = Math.max(n.length, e);
            for (const {
                name: n,
                start: i,
                end: s
            } of this.times) t.push("".concat(n.padEnd(e), " ").concat(s - i, "ms\n"));
            return t.join("")
        }
    }

    function ke(t, e) {
        try {
            const {protocol: n} = e ? new URL(t, e) : new URL(t);
            return "http:" === n || "https:" === n
        } catch (n) {
            return !1
        }
    }

    function _e(t) {
        t.preventDefault()
    }

    function Se(t) {
        console.log("Deprecated API usage: " + t)
    }

    class xe {
        static toDateObject(t) {
            if (!t || "string" !== typeof t) return null;
            C(xe, this, Ee)._ || (Ee._ = C(xe, this, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?")));
            const e = C(xe, this, Ee)._.exec(t);
            if (!e) return null;
            const n = parseInt(e[1], 10);
            let i = parseInt(e[2], 10);
            i = i >= 1 && i <= 12 ? i - 1 : 0;
            let s = parseInt(e[3], 10);
            s = s >= 1 && s <= 31 ? s : 1;
            let a = parseInt(e[4], 10);
            a = a >= 0 && a <= 23 ? a : 0;
            let r = parseInt(e[5], 10);
            r = r >= 0 && r <= 59 ? r : 0;
            let o = parseInt(e[6], 10);
            o = o >= 0 && o <= 59 ? o : 0;
            const l = e[7] || "Z";
            let c = parseInt(e[8], 10);
            c = c >= 0 && c <= 23 ? c : 0;
            let u = parseInt(e[9], 10) || 0;
            return u = u >= 0 && u <= 59 ? u : 0, "-" === l ? (a += c, r += u) : "+" === l && (a -= c, r -= u), new Date(Date.UTC(n, i, s, a, r, o))
        }
    }

    var Ee = {_: void 0};

    function Ce(t, e) {
        let {scale: n = 1, rotation: i = 0} = e;
        const {width: s, height: a} = t.attributes.style, r = [0, 0, parseInt(s), parseInt(a)];
        return new ge({viewBox: r, scale: n, rotation: i})
    }

    function Me(t) {
        if (t.startsWith("#")) {
            const e = parseInt(t.slice(1), 16);
            return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]
        }
        return t.startsWith("rgb(") ? t.slice(4, -1).split(",").map((t => parseInt(t))) : t.startsWith("rgba(") ? t.slice(5, -1).split(",").map((t => parseInt(t))).slice(0, 3) : (Lt('Not a valid color format: "'.concat(t, '"')), [0, 0, 0])
    }

    function Te(t) {
        const {a: e, b: n, c: i, d: s, e: a, f: r} = t.getTransform();
        return [e, n, i, s, a, r]
    }

    function Pe(t) {
        const {a: e, b: n, c: i, d: s, e: a, f: r} = t.getTransform().invertSelf();
        return [e, n, i, s, a, r]
    }

    function Re(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (e instanceof ge) {
            const {pageWidth: i, pageHeight: s} = e.rawDims, {style: a} = t, r = Kt.isCSSRoundSupported,
                o = "var(--scale-factor) * ".concat(i, "px"), l = "var(--scale-factor) * ".concat(s, "px"),
                c = r ? "round(down, ".concat(o, ", var(--scale-round-x, 1px))") : "calc(".concat(o, ")"),
                u = r ? "round(down, ".concat(l, ", var(--scale-round-y, 1px))") : "calc(".concat(l, ")");
            n && e.rotation % 180 !== 0 ? (a.width = u, a.height = c) : (a.width = c, a.height = u)
        }
        i && t.setAttribute("data-main-rotation", e.rotation)
    }

    class Le {
        constructor() {
            const t = window.devicePixelRatio || 1;
            this.sx = t, this.sy = t
        }

        get scaled() {
            return 1 !== this.sx || 1 !== this.sy
        }

        get symmetric() {
            return this.sx === this.sy
        }
    }

    var Fe = new WeakMap, Ie = new WeakMap, De = new WeakMap, Ne = new WeakMap, Oe = new WeakMap, ze = new WeakSet;

    class We {
        constructor(t) {
            x(this, ze), E(this, Fe, null), E(this, Ie, null), E(this, De, void 0), E(this, Ne, null), E(this, Oe, null), P(De, this, t), qe._ || (qe._ = Object.freeze({
                freetext: "pdfjs-editor-remove-freetext-button",
                highlight: "pdfjs-editor-remove-highlight-button",
                ink: "pdfjs-editor-remove-ink-button",
                stamp: "pdfjs-editor-remove-stamp-button"
            }))
        }

        render() {
            const t = P(Fe, this, document.createElement("div"));
            t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
            const e = T(De, this)._uiManager._signal;
            t.addEventListener("contextmenu", _e, {signal: e}), t.addEventListener("pointerdown", je, {signal: e});
            const n = P(Ne, this, document.createElement("div"));
            n.className = "buttons", t.append(n);
            const i = T(De, this).toolbarPosition;
            if (i) {
                const {style: e} = t, n = "ltr" === T(De, this)._uiManager.direction ? 1 - i[0] : i[0];
                e.insetInlineEnd = "".concat(100 * n, "%"), e.top = "calc(".concat(100 * i[1], "% + var(--editor-toolbar-vert-offset))")
            }
            return C(ze, this, Ve).call(this), t
        }

        get div() {
            return T(Fe, this)
        }

        hide() {
            var t;
            T(Fe, this).classList.add("hidden"), null === (t = T(Ie, this)) || void 0 === t || t.hideDropdown()
        }

        show() {
            var t;
            T(Fe, this).classList.remove("hidden"), null === (t = T(Oe, this)) || void 0 === t || t.shown()
        }

        async addAltText(t) {
            const e = await t.render();
            C(ze, this, Ue).call(this, e), T(Ne, this).prepend(e, M(ze, this, Ge)), P(Oe, this, t)
        }

        addColorPicker(t) {
            P(Ie, this, t);
            const e = t.renderButton();
            C(ze, this, Ue).call(this, e), T(Ne, this).prepend(e, M(ze, this, Ge))
        }

        remove() {
            var t;
            T(Fe, this).remove(), null === (t = T(Ie, this)) || void 0 === t || t.destroy(), P(Ie, this, null)
        }
    }

    function je(t) {
        t.stopPropagation()
    }

    function Be(t) {
        T(De, this)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation()
    }

    function He(t) {
        T(De, this)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation()
    }

    function Ue(t) {
        const e = T(De, this)._uiManager._signal;
        t.addEventListener("focusin", C(ze, this, Be).bind(this), {
            capture: !0,
            signal: e
        }), t.addEventListener("focusout", C(ze, this, He).bind(this), {
            capture: !0,
            signal: e
        }), t.addEventListener("contextmenu", _e, {signal: e})
    }

    function Ve() {
        const {editorType: t, _uiManager: e} = T(De, this), n = document.createElement("button");
        n.className = "delete", n.tabIndex = 0, n.setAttribute("data-l10n-id", qe._[t]), C(ze, this, Ue).call(this, n), n.addEventListener("click", (t => {
            e.delete()
        }), {signal: e._signal}), T(Ne, this).append(n)
    }

    function Ge(t) {
        const e = document.createElement("div");
        return e.className = "divider", e
    }

    var qe = {_: null}, Xe = new WeakMap, Ke = new WeakMap, Ye = new WeakMap, Qe = new WeakSet;

    class $e {
        constructor(t) {
            x(this, Qe), E(this, Xe, null), E(this, Ke, null), E(this, Ye, void 0), P(Ye, this, t)
        }

        show(t, e, n) {
            const [i, s] = C(Qe, this, Ze).call(this, e, n), {style: a} = T(Ke, this) || P(Ke, this, C(Qe, this, Je).call(this));
            t.append(T(Ke, this)), a.insetInlineEnd = "".concat(100 * i, "%"), a.top = "calc(".concat(100 * s, "% + var(--editor-toolbar-vert-offset))")
        }

        hide() {
            T(Ke, this).remove()
        }
    }

    function Je() {
        const t = P(Ke, this, document.createElement("div"));
        t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", _e, {signal: T(Ye, this)._signal});
        const e = P(Xe, this, document.createElement("div"));
        return e.className = "buttons", t.append(e), C(Qe, this, tn).call(this), t
    }

    function Ze(t, e) {
        let n = 0, i = 0;
        for (const s of t) {
            const t = s.y + s.height;
            if (t < n) continue;
            const a = s.x + (e ? s.width : 0);
            t > n ? (i = a, n = t) : e ? a > i && (i = a) : a < i && (i = a)
        }
        return [e ? 1 - i : i, n]
    }

    function tn() {
        const t = document.createElement("button");
        t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
        const e = document.createElement("span");
        t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
        const n = T(Ye, this)._signal;
        t.addEventListener("contextmenu", _e, {signal: n}), t.addEventListener("click", (() => {
            T(Ye, this).highlightSelection("floating_button")
        }), {signal: n}), T(Xe, this).append(t)
    }

    function en(t, e, n) {
        for (const i of n) e.addEventListener(i, t[i].bind(t))
    }

    var nn = new WeakMap;

    class sn {
        constructor() {
            E(this, nn, 0)
        }

        get id() {
            var t, e;
            return "".concat("pdfjs_internal_editor_").concat((P(nn, this, (t = T(nn, this), e = t++, t)), e))
        }
    }

    var an = new WeakMap, rn = new WeakMap, on = new WeakMap, ln = new WeakSet;

    class cn {
        constructor() {
            x(this, ln), E(this, an, function () {
                var t, e;
                if ("undefined" !== typeof crypto && "function" === typeof (null === (t = crypto) || void 0 === t ? void 0 : t.randomUUID)) return crypto.randomUUID();
                const n = new Uint8Array(32);
                if ("undefined" !== typeof crypto && "function" === typeof (null === (e = crypto) || void 0 === e ? void 0 : e.getRandomValues)) crypto.getRandomValues(n); else for (let i = 0; i < 32; i++) n[i] = Math.floor(255 * Math.random());
                return Gt(n)
            }()), E(this, rn, 0), E(this, on, null)
        }

        static get _isSVGFittingCanvas() {
            const t = new OffscreenCanvas(1, 3).getContext("2d", {willReadFrequently: !0}), e = new Image;
            e.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
            return Nt(this, "_isSVGFittingCanvas", e.decode().then((() => (t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3), 0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0]))))
        }

        async getFromFile(t) {
            const {lastModified: e, name: n, size: i, type: s} = t;
            return C(ln, this, un).call(this, "".concat(e, "_").concat(n, "_").concat(i, "_").concat(s), t)
        }

        async getFromUrl(t) {
            return C(ln, this, un).call(this, t, t)
        }

        async getFromBlob(t, e) {
            const n = await e;
            return C(ln, this, un).call(this, t, n)
        }

        async getFromId(t) {
            T(on, this) || P(on, this, new Map);
            const e = T(on, this).get(t);
            if (!e) return null;
            if (e.bitmap) return e.refCounter += 1, e;
            if (e.file) return this.getFromFile(e.file);
            if (e.blobPromise) {
                const {blobPromise: t} = e;
                return delete e.blobPromise, this.getFromBlob(e.id, t)
            }
            return this.getFromUrl(e.url)
        }

        getFromCanvas(t, e) {
            var n, i, s;
            T(on, this) || P(on, this, new Map);
            let a = T(on, this).get(t);
            if (null !== (s = a) && void 0 !== s && s.bitmap) return a.refCounter += 1, a;
            const r = new OffscreenCanvas(e.width, e.height);
            return r.getContext("2d").drawImage(e, 0, 0), a = {
                bitmap: r.transferToImageBitmap(),
                id: "image_".concat(T(an, this), "_").concat((P(rn, this, (n = T(rn, this), i = n++, n)), i)),
                refCounter: 1,
                isSvg: !1
            }, T(on, this).set(t, a), T(on, this).set(a.id, a), a
        }

        getSvgUrl(t) {
            const e = T(on, this).get(t);
            return null !== e && void 0 !== e && e.isSvg ? e.svgUrl : null
        }

        deleteId(t) {
            var e;
            T(on, this) || P(on, this, new Map);
            const n = T(on, this).get(t);
            if (!n) return;
            if (n.refCounter -= 1, 0 !== n.refCounter) return;
            const {bitmap: i} = n;
            if (!n.url && !n.file) {
                const t = new OffscreenCanvas(i.width, i.height);
                t.getContext("bitmaprenderer").transferFromImageBitmap(i), n.blobPromise = t.convertToBlob()
            }
            null === (e = i.close) || void 0 === e || e.call(i), n.bitmap = null
        }

        isValidId(t) {
            return t.startsWith("image_".concat(T(an, this), "_"))
        }
    }

    async function un(t, e) {
        var n;
        T(on, this) || P(on, this, new Map);
        let i = T(on, this).get(t);
        if (null === i) return null;
        if (null !== (n = i) && void 0 !== n && n.bitmap) return i.refCounter += 1, i;
        try {
            var s, a;
            let t;
            if (i || (i = {
                bitmap: null,
                id: "image_".concat(T(an, this), "_").concat((P(rn, this, (s = T(rn, this), a = s++, s)), a)),
                refCounter: 0,
                isSvg: !1
            }), "string" === typeof e ? (i.url = e, t = await pe(e, "blob")) : e instanceof File ? t = i.file = e : e instanceof Blob && (t = e), "image/svg+xml" === t.type) {
                const e = r._isSVGFittingCanvas, n = new FileReader, s = new Image, a = new Promise(((t, a) => {
                    s.onload = () => {
                        i.bitmap = s, i.isSvg = !0, t()
                    }, n.onload = async () => {
                        const t = i.svgUrl = n.result;
                        s.src = await e ? "".concat(t, "#svgView(preserveAspectRatio(none))") : t
                    }, s.onerror = n.onerror = a
                }));
                n.readAsDataURL(t), await a
            } else i.bitmap = await createImageBitmap(t);
            i.refCounter = 1
        } catch (o) {
            console.error(o), i = null
        }
        return T(on, this).set(t, i), i && T(on, this).set(i.id, i), i
    }

    r = cn;
    var hn = new WeakMap, dn = new WeakMap, fn = new WeakMap, pn = new WeakMap;

    class gn {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128;
            E(this, hn, []), E(this, dn, !1), E(this, fn, void 0), E(this, pn, -1), P(fn, this, t)
        }

        add(t) {
            let {
                cmd: e,
                undo: n,
                post: i,
                mustExec: s,
                type: a = NaN,
                overwriteIfSameType: r = !1,
                keepUndo: o = !1
            } = t;
            if (s && e(), T(dn, this)) return;
            const l = {cmd: e, undo: n, post: i, type: a};
            if (-1 === T(pn, this)) return T(hn, this).length > 0 && (T(hn, this).length = 0), P(pn, this, 0), void T(hn, this).push(l);
            if (r && T(hn, this)[T(pn, this)].type === a) return o && (l.undo = T(hn, this)[T(pn, this)].undo), void (T(hn, this)[T(pn, this)] = l);
            const c = T(pn, this) + 1;
            c === T(fn, this) ? T(hn, this).splice(0, 1) : (P(pn, this, c), c < T(hn, this).length && T(hn, this).splice(c)), T(hn, this).push(l)
        }

        undo() {
            if (-1 === T(pn, this)) return;
            P(dn, this, !0);
            const {undo: t, post: e} = T(hn, this)[T(pn, this)];
            t(), null === e || void 0 === e || e(), P(dn, this, !1), P(pn, this, T(pn, this) - 1)
        }

        redo() {
            if (T(pn, this) < T(hn, this).length - 1) {
                P(pn, this, T(pn, this) + 1), P(dn, this, !0);
                const {cmd: t, post: e} = T(hn, this)[T(pn, this)];
                t(), null === e || void 0 === e || e(), P(dn, this, !1)
            }
        }

        hasSomethingToUndo() {
            return -1 !== T(pn, this)
        }

        hasSomethingToRedo() {
            return T(pn, this) < T(hn, this).length - 1
        }

        destroy() {
            P(hn, this, null)
        }
    }

    var mn = new WeakSet;

    class vn {
        constructor(t) {
            x(this, mn), this.buffer = [], this.callbacks = new Map, this.allKeys = new Set;
            const {isMac: e} = Kt.platform;
            for (const [n, i, s = {}] of t) for (const t of n) {
                const n = t.startsWith("mac+");
                e && n ? (this.callbacks.set(t.slice(4), {
                    callback: i,
                    options: s
                }), this.allKeys.add(t.split("+").at(-1))) : e || n || (this.callbacks.set(t, {
                    callback: i,
                    options: s
                }), this.allKeys.add(t.split("+").at(-1)))
            }
        }

        exec(t, e) {
            if (!this.allKeys.has(e.key)) return;
            const n = this.callbacks.get(C(mn, this, bn).call(this, e));
            if (!n) return;
            const {callback: i, options: {bubbles: s = !1, args: a = [], checker: r = null}} = n;
            r && !r(t, e) || (i.bind(t, ...a, e)(), s || (e.stopPropagation(), e.preventDefault()))
        }
    }

    function bn(t) {
        t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
        const e = this.buffer.join("+");
        return this.buffer.length = 0, e
    }

    class yn {
        get _colors() {
            const t = new Map([["CanvasText", null], ["Canvas", null]]);
            return function (t) {
                const e = document.createElement("span");
                e.style.visibility = "hidden", document.body.append(e);
                for (const n of t.keys()) {
                    e.style.color = n;
                    const i = window.getComputedStyle(e).color;
                    t.set(n, Me(i))
                }
                e.remove()
            }(t), Nt(this, "_colors", t)
        }

        convert(t) {
            const e = Me(t);
            if (!window.matchMedia("(forced-colors: active)").matches) return e;
            for (const [n, i] of this._colors) if (i.every(((t, n) => t === e[n]))) return yn._colorsMapping.get(n);
            return e
        }

        getHexCode(t) {
            const e = this._colors.get(t);
            return e ? Qt.makeHexColor(...e) : t
        }
    }

    w(yn, "_colorsMapping", new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
    var wn = new WeakMap, An = new WeakMap, kn = new WeakMap, _n = new WeakMap, Sn = new WeakMap, xn = new WeakMap,
        En = new WeakMap, Cn = new WeakMap, Mn = new WeakMap, Tn = new WeakMap, Pn = new WeakMap, Rn = new WeakMap,
        Ln = new WeakMap, Fn = new WeakMap, In = new WeakMap, Dn = new WeakMap, Nn = new WeakMap, On = new WeakMap,
        zn = new WeakMap, Wn = new WeakMap, jn = new WeakMap, Bn = new WeakMap, Hn = new WeakMap, Un = new WeakMap,
        Vn = new WeakMap, Gn = new WeakMap, qn = new WeakMap, Xn = new WeakMap, Kn = new WeakMap, Yn = new WeakMap,
        Qn = new WeakMap, $n = new WeakMap, Jn = new WeakMap, Zn = new WeakMap, ti = new WeakMap, ei = new WeakMap,
        ni = new WeakMap, ii = new WeakMap, si = new WeakMap, ai = new WeakMap, ri = new WeakMap, oi = new WeakSet;

    class li {
        static get _keyboardManager() {
            const t = li.prototype,
                e = t => T(si, t).contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t.hasSomethingToControl(),
                n = (t, e) => {
                    let {target: n} = e;
                    if (n instanceof HTMLInputElement) {
                        const {type: t} = n;
                        return "text" !== t && "number" !== t
                    }
                    return !0
                }, i = this.TRANSLATE_SMALL, s = this.TRANSLATE_BIG;
            return Nt(this, "_keyboardManager", new vn([[["ctrl+a", "mac+meta+a"], t.selectAll, {checker: n}], [["ctrl+z", "mac+meta+z"], t.undo, {checker: n}], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {checker: n}], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {checker: n}], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
                checker: (t, e) => {
                    let {target: n} = e;
                    return !(n instanceof HTMLButtonElement) && T(si, t).contains(n) && !t.isEnterHandled
                }
            }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
                checker: (t, e) => {
                    let {target: n} = e;
                    return !(n instanceof HTMLButtonElement) && T(si, t).contains(document.activeElement)
                }
            }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
                args: [-i, 0],
                checker: e
            }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
                args: [-s, 0],
                checker: e
            }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
                args: [i, 0],
                checker: e
            }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
                args: [s, 0],
                checker: e
            }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
                args: [0, -i],
                checker: e
            }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
                args: [0, -s],
                checker: e
            }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
                args: [0, i],
                checker: e
            }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {args: [0, s], checker: e}]]))
        }

        constructor(t, e, n, i, s, a, r, o, l, c, u) {
            x(this, oi), E(this, wn, new AbortController), E(this, An, null), E(this, kn, new Map), E(this, _n, new Map), E(this, Sn, null), E(this, xn, null), E(this, En, null), E(this, Cn, new gn), E(this, Mn, null), E(this, Tn, 0), E(this, Pn, new Set), E(this, Rn, null), E(this, Ln, null), E(this, Fn, new Set), E(this, In, !1), E(this, Dn, !1), E(this, Nn, !1), E(this, On, null), E(this, zn, null), E(this, Wn, null), E(this, jn, null), E(this, Bn, !1), E(this, Hn, null), E(this, Un, new sn), E(this, Vn, !1), E(this, Gn, !1), E(this, qn, null), E(this, Xn, null), E(this, Kn, null), E(this, Yn, null), E(this, Qn, q.NONE), E(this, $n, new Set), E(this, Jn, null), E(this, Zn, null), E(this, ti, null), E(this, ei, {
                isEditing: !1,
                isEmpty: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1,
                hasSelectedText: !1
            }), E(this, ni, [0, 0]), E(this, ii, null), E(this, si, null), E(this, ai, null), E(this, ri, null);
            const h = this._signal = T(wn, this).signal;
            P(si, this, t), P(ai, this, e), P(Sn, this, n), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {signal: h}), i._on("pagechanging", this.onPageChanging.bind(this), {signal: h}), i._on("scalechanging", this.onScaleChanging.bind(this), {signal: h}), i._on("rotationchanging", this.onRotationChanging.bind(this), {signal: h}), i._on("setpreference", this.onSetPreference.bind(this), {signal: h}), i._on("switchannotationeditorparams", (t => this.updateParams(t.type, t.value)), {signal: h}), C(oi, this, pi).call(this), C(oi, this, Ai).call(this), C(oi, this, vi).call(this), P(xn, this, s.annotationStorage), P(On, this, s.filterFactory), P(Zn, this, a), P(jn, this, r || null), P(In, this, o), P(Dn, this, l), P(Nn, this, c), P(Yn, this, u || null), this.viewParameters = {
                realScale: fe.PDF_TO_CSS_UNITS,
                rotation: 0
            }, this.isShiftKeyDown = !1
        }

        destroy() {
            var t, e, n, i;
            null === (t = T(ri, this)) || void 0 === t || t.resolve(), P(ri, this, null), null === (e = T(wn, this)) || void 0 === e || e.abort(), P(wn, this, null), this._signal = null;
            for (const s of T(_n, this).values()) s.destroy();
            T(_n, this).clear(), T(kn, this).clear(), T(Fn, this).clear(), P(An, this, null), T($n, this).clear(), T(Cn, this).destroy(), null === (n = T(Sn, this)) || void 0 === n || n.destroy(), null === (i = T(Hn, this)) || void 0 === i || i.hide(), P(Hn, this, null), T(zn, this) && (clearTimeout(T(zn, this)), P(zn, this, null)), T(ii, this) && (clearTimeout(T(ii, this)), P(ii, this, null))
        }

        combinedSignal(t) {
            return AbortSignal.any([this._signal, t.signal])
        }

        get mlManager() {
            return T(Yn, this)
        }

        get useNewAltTextFlow() {
            return T(Dn, this)
        }

        get useNewAltTextWhenAddingImage() {
            return T(Nn, this)
        }

        get hcmFilter() {
            return Nt(this, "hcmFilter", T(Zn, this) ? T(On, this).addHCMFilter(T(Zn, this).foreground, T(Zn, this).background) : "none")
        }

        get direction() {
            return Nt(this, "direction", getComputedStyle(T(si, this)).direction)
        }

        get highlightColors() {
            return Nt(this, "highlightColors", T(jn, this) ? new Map(T(jn, this).split(",").map((t => t.split("=").map((t => t.trim()))))) : null)
        }

        get highlightColorNames() {
            return Nt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t => t.reverse()))) : null)
        }

        setMainHighlightColorPicker(t) {
            P(Kn, this, t)
        }

        editAltText(t) {
            var e;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null === (e = T(Sn, this)) || void 0 === e || e.editAltText(this, t, n)
        }

        switchToMode(t, e) {
            this._eventBus.on("annotationeditormodechanged", e, {
                once: !0,
                signal: this._signal
            }), this._eventBus.dispatch("showannotationeditorui", {source: this, mode: t})
        }

        setPreference(t, e) {
            this._eventBus.dispatch("setpreference", {source: this, name: t, value: e})
        }

        onSetPreference(t) {
            let {name: e, value: n} = t;
            if ("enableNewAltTextWhenAddingImage" === e) P(Nn, this, n)
        }

        onPageChanging(t) {
            let {pageNumber: e} = t;
            P(Tn, this, e - 1)
        }

        focusMainContainer() {
            T(si, this).focus()
        }

        findParent(t, e) {
            for (const n of T(_n, this).values()) {
                const {x: i, y: s, width: a, height: r} = n.div.getBoundingClientRect();
                if (t >= i && t <= i + a && e >= s && e <= s + r) return n
            }
            return null
        }

        disableUserSelect() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            T(ai, this).classList.toggle("noUserSelect", t)
        }

        addShouldRescale(t) {
            T(Fn, this).add(t)
        }

        removeShouldRescale(t) {
            T(Fn, this).delete(t)
        }

        onScaleChanging(t) {
            let {scale: e} = t;
            this.commitOrRemove(), this.viewParameters.realScale = e * fe.PDF_TO_CSS_UNITS;
            for (const n of T(Fn, this)) n.onScaleChanging()
        }

        onRotationChanging(t) {
            let {pagesRotation: e} = t;
            this.commitOrRemove(), this.viewParameters.rotation = e
        }

        highlightSelection() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            const e = document.getSelection();
            if (!e || e.isCollapsed) return;
            const {anchorNode: n, anchorOffset: i, focusNode: s, focusOffset: a} = e, r = e.toString(),
                o = C(oi, this, ci).call(this, e).closest(".textLayer"), l = this.getSelectionBoxes(o);
            if (!l) return;
            e.empty();
            const c = C(oi, this, ui).call(this, o), u = T(Qn, this) === q.NONE, h = () => {
                null === c || void 0 === c || c.createAndAddNewEditor({x: 0, y: 0}, !1, {
                    methodOfCreation: t,
                    boxes: l,
                    anchorNode: n,
                    anchorOffset: i,
                    focusNode: s,
                    focusOffset: a,
                    text: r
                }), u && this.showAllEditors("highlight", !0, !0)
            };
            u ? this.switchToMode(q.HIGHLIGHT, h) : h()
        }

        addToAnnotationStorage(t) {
            t.isEmpty() || !T(xn, this) || T(xn, this).has(t.id) || T(xn, this).setValue(t.id, t)
        }

        blur() {
            if (this.isShiftKeyDown = !1, T(Bn, this) && (P(Bn, this, !1), C(oi, this, fi).call(this, "main_toolbar")), !this.hasSelection) return;
            const {activeElement: t} = document;
            for (const e of T($n, this)) if (e.div.contains(t)) {
                P(Xn, this, [e, t]), e._focusEventsAllowed = !1;
                break
            }
        }

        focus() {
            if (!T(Xn, this)) return;
            const [t, e] = T(Xn, this);
            P(Xn, this, null), e.addEventListener("focusin", (() => {
                t._focusEventsAllowed = !0
            }), {once: !0, signal: this._signal}), e.focus()
        }

        addEditListeners() {
            C(oi, this, vi).call(this), C(oi, this, yi).call(this)
        }

        removeEditListeners() {
            C(oi, this, bi).call(this), C(oi, this, wi).call(this)
        }

        dragOver(t) {
            for (const {type: e} of t.dataTransfer.items) for (const n of T(Ln, this)) if (n.isHandlingMimeForPasting(e)) return t.dataTransfer.dropEffect = "copy", void t.preventDefault()
        }

        drop(t) {
            for (const e of t.dataTransfer.items) for (const n of T(Ln, this)) if (n.isHandlingMimeForPasting(e.type)) return n.paste(e, this.currentLayer), void t.preventDefault()
        }

        copy(t) {
            var e;
            if (t.preventDefault(), null === (e = T(An, this)) || void 0 === e || e.commitOrRemove(), !this.hasSelection) return;
            const n = [];
            for (const i of T($n, this)) {
                const t = i.serialize(!0);
                t && n.push(t)
            }
            0 !== n.length && t.clipboardData.setData("application/pdfjs", JSON.stringify(n))
        }

        cut(t) {
            this.copy(t), this.delete()
        }

        async paste(t) {
            t.preventDefault();
            const {clipboardData: e} = t;
            for (const a of e.items) for (const t of T(Ln, this)) if (t.isHandlingMimeForPasting(a.type)) return void t.paste(a, this.currentLayer);
            let n = e.getData("application/pdfjs");
            if (!n) return;
            try {
                n = JSON.parse(n)
            } catch (s) {
                return void Lt('paste: "'.concat(s.message, '".'))
            }
            if (!Array.isArray(n)) return;
            this.unselectAll();
            const i = this.currentLayer;
            try {
                const t = [];
                for (const a of n) {
                    const e = await i.deserialize(a);
                    if (!e) return;
                    t.push(e)
                }
                const e = () => {
                    for (const e of t) C(oi, this, Ei).call(this, e);
                    C(oi, this, Ti).call(this, t)
                }, s = () => {
                    for (const e of t) e.remove()
                };
                this.addCommands({cmd: e, undo: s, mustExec: !0})
            } catch (s) {
                Lt('paste: "'.concat(s.message, '".'))
            }
        }

        keydown(t) {
            this.isShiftKeyDown || "Shift" !== t.key || (this.isShiftKeyDown = !0), T(Qn, this) === q.NONE || this.isEditorHandlingKeyboard || li._keyboardManager.exec(this, t)
        }

        keyup(t) {
            this.isShiftKeyDown && "Shift" === t.key && (this.isShiftKeyDown = !1, T(Bn, this) && (P(Bn, this, !1), C(oi, this, fi).call(this, "main_toolbar")))
        }

        onEditingAction(t) {
            let {name: e} = t;
            switch (e) {
                case "undo":
                case "redo":
                case "delete":
                case "selectAll":
                    this[e]();
                    break;
                case "highlightSelection":
                    this.highlightSelection("context_menu")
            }
        }

        setEditingState(t) {
            t ? (C(oi, this, gi).call(this), C(oi, this, yi).call(this), C(oi, this, ki).call(this, {
                isEditing: T(Qn, this) !== q.NONE,
                isEmpty: C(oi, this, Mi).call(this),
                hasSomethingToUndo: T(Cn, this).hasSomethingToUndo(),
                hasSomethingToRedo: T(Cn, this).hasSomethingToRedo(),
                hasSelectedEditor: !1
            })) : (C(oi, this, mi).call(this), C(oi, this, wi).call(this), C(oi, this, ki).call(this, {isEditing: !1}), this.disableUserSelect(!1))
        }

        registerEditorTypes(t) {
            if (!T(Ln, this)) {
                P(Ln, this, t);
                for (const t of T(Ln, this)) C(oi, this, _i).call(this, t.defaultPropertiesToUpdate)
            }
        }

        getId() {
            return T(Un, this).id
        }

        get currentLayer() {
            return T(_n, this).get(T(Tn, this))
        }

        getLayer(t) {
            return T(_n, this).get(t)
        }

        get currentPageIndex() {
            return T(Tn, this)
        }

        addLayer(t) {
            T(_n, this).set(t.pageIndex, t), T(Vn, this) ? t.enable() : t.disable()
        }

        removeLayer(t) {
            T(_n, this).delete(t.pageIndex)
        }

        async updateMode(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (T(Qn, this) !== t && (!T(ri, this) || (await T(ri, this).promise, T(ri, this)))) {
                if (P(ri, this, Promise.withResolvers()), P(Qn, this, t), t === q.NONE) return this.setEditingState(!1), C(oi, this, xi).call(this), void T(ri, this).resolve();
                this.setEditingState(!0), await C(oi, this, Si).call(this), this.unselectAll();
                for (const e of T(_n, this).values()) e.updateMode(t);
                if (!e) return n && this.addNewEditorFromKeyboard(), void T(ri, this).resolve();
                for (const t of T(kn, this).values()) t.annotationElementId === e ? (this.setSelected(t), t.enterInEditMode()) : t.unselect();
                T(ri, this).resolve()
            }
        }

        addNewEditorFromKeyboard() {
            this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor()
        }

        updateToolbar(t) {
            t !== T(Qn, this) && this._eventBus.dispatch("switchannotationeditormode", {source: this, mode: t})
        }

        updateParams(t, e) {
            var n;
            if (T(Ln, this)) {
                switch (t) {
                    case X.CREATE:
                        return void this.currentLayer.addNewEditor();
                    case X.HIGHLIGHT_DEFAULT_COLOR:
                        null === (n = T(Kn, this)) || void 0 === n || n.updateColor(e);
                        break;
                    case X.HIGHLIGHT_SHOW_ALL:
                        this._eventBus.dispatch("reporttelemetry", {
                            source: this,
                            details: {type: "editing", data: {type: "highlight", action: "toggle_visibility"}}
                        }), (T(ti, this) || P(ti, this, new Map)).set(t, e), this.showAllEditors("highlight", e)
                }
                for (const n of T($n, this)) n.updateParams(t, e);
                for (const n of T(Ln, this)) n.updateDefaultParams(t, e)
            }
        }

        showAllEditors(t, e) {
            var n, i;
            for (const s of T(kn, this).values()) s.editorType === t && s.show(e);
            (null === (n = null === (i = T(ti, this)) || void 0 === i ? void 0 : i.get(X.HIGHLIGHT_SHOW_ALL)) || void 0 === n || n) !== e && C(oi, this, _i).call(this, [[X.HIGHLIGHT_SHOW_ALL, e]])
        }

        enableWaiting() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (T(Gn, this) !== t) {
                P(Gn, this, t);
                for (const e of T(_n, this).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t)
            }
        }

        getEditors(t) {
            const e = [];
            for (const n of T(kn, this).values()) n.pageIndex === t && e.push(n);
            return e
        }

        getEditor(t) {
            return T(kn, this).get(t)
        }

        addEditor(t) {
            T(kn, this).set(t.id, t)
        }

        removeEditor(t) {
            var e;
            (t.div.contains(document.activeElement) && (T(zn, this) && clearTimeout(T(zn, this)), P(zn, this, setTimeout((() => {
                this.focusMainContainer(), P(zn, this, null)
            }), 0))), T(kn, this).delete(t.id), this.unselect(t), t.annotationElementId && T(Pn, this).has(t.annotationElementId)) || (null === (e = T(xn, this)) || void 0 === e || e.remove(t.id))
        }

        addDeletedAnnotationElement(t) {
            T(Pn, this).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0
        }

        isDeletedAnnotationElement(t) {
            return T(Pn, this).has(t)
        }

        removeDeletedAnnotationElement(t) {
            T(Pn, this).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1
        }

        setActiveEditor(t) {
            T(An, this) !== t && (P(An, this, t), t && C(oi, this, _i).call(this, t.propertiesToUpdate))
        }

        updateUI(t) {
            M(oi, this, Ci) === t && C(oi, this, _i).call(this, t.propertiesToUpdate)
        }

        toggleSelected(t) {
            if (T($n, this).has(t)) return T($n, this).delete(t), t.unselect(), void C(oi, this, ki).call(this, {hasSelectedEditor: this.hasSelection});
            T($n, this).add(t), t.select(), C(oi, this, _i).call(this, t.propertiesToUpdate), C(oi, this, ki).call(this, {hasSelectedEditor: !0})
        }

        setSelected(t) {
            for (const e of T($n, this)) e !== t && e.unselect();
            T($n, this).clear(), T($n, this).add(t), t.select(), C(oi, this, _i).call(this, t.propertiesToUpdate), C(oi, this, ki).call(this, {hasSelectedEditor: !0})
        }

        isSelected(t) {
            return T($n, this).has(t)
        }

        get firstSelectedEditor() {
            return T($n, this).values().next().value
        }

        unselect(t) {
            t.unselect(), T($n, this).delete(t), C(oi, this, ki).call(this, {hasSelectedEditor: this.hasSelection})
        }

        get hasSelection() {
            return 0 !== T($n, this).size
        }

        get isEnterHandled() {
            return 1 === T($n, this).size && this.firstSelectedEditor.isEnterHandled
        }

        undo() {
            T(Cn, this).undo(), C(oi, this, ki).call(this, {
                hasSomethingToUndo: T(Cn, this).hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: C(oi, this, Mi).call(this)
            })
        }

        redo() {
            T(Cn, this).redo(), C(oi, this, ki).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: T(Cn, this).hasSomethingToRedo(),
                isEmpty: C(oi, this, Mi).call(this)
            })
        }

        addCommands(t) {
            T(Cn, this).add(t), C(oi, this, ki).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: C(oi, this, Mi).call(this)
            })
        }

        delete() {
            if (this.commitOrRemove(), !this.hasSelection) return;
            const t = [...T($n, this)];
            this.addCommands({
                cmd: () => {
                    for (const e of t) e.remove()
                }, undo: () => {
                    for (const e of t) C(oi, this, Ei).call(this, e)
                }, mustExec: !0
            })
        }

        commitOrRemove() {
            var t;
            null === (t = T(An, this)) || void 0 === t || t.commitOrRemove()
        }

        hasSomethingToControl() {
            return T(An, this) || this.hasSelection
        }

        selectAll() {
            for (const t of T($n, this)) t.commit();
            C(oi, this, Ti).call(this, T(kn, this).values())
        }

        unselectAll() {
            if ((!T(An, this) || (T(An, this).commitOrRemove(), T(Qn, this) === q.NONE)) && this.hasSelection) {
                for (const t of T($n, this)) t.unselect();
                T($n, this).clear(), C(oi, this, ki).call(this, {hasSelectedEditor: !1})
            }
        }

        translateSelectedEditors(t, e) {
            if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || this.commitOrRemove(), !this.hasSelection) return;
            T(ni, this)[0] += t, T(ni, this)[1] += e;
            const [n, i] = T(ni, this), s = [...T($n, this)];
            T(ii, this) && clearTimeout(T(ii, this)), P(ii, this, setTimeout((() => {
                P(ii, this, null), T(ni, this)[0] = T(ni, this)[1] = 0, this.addCommands({
                    cmd: () => {
                        for (const t of s) T(kn, this).has(t.id) && t.translateInPage(n, i)
                    }, undo: () => {
                        for (const t of s) T(kn, this).has(t.id) && t.translateInPage(-n, -i)
                    }, mustExec: !1
                })
            }), 1e3));
            for (const a of s) a.translateInPage(t, e)
        }

        setUpDragSession() {
            if (this.hasSelection) {
                this.disableUserSelect(!0), P(Rn, this, new Map);
                for (const t of T($n, this)) T(Rn, this).set(t, {
                    savedX: t.x,
                    savedY: t.y,
                    savedPageIndex: t.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                })
            }
        }

        endDragSession() {
            if (!T(Rn, this)) return !1;
            this.disableUserSelect(!1);
            const t = T(Rn, this);
            P(Rn, this, null);
            let e = !1;
            for (const [{
                x: i,
                y: s,
                pageIndex: a
            }, r] of t) r.newX = i, r.newY = s, r.newPageIndex = a, e || (e = i !== r.savedX || s !== r.savedY || a !== r.savedPageIndex);
            if (!e) return !1;
            const n = (t, e, n, i) => {
                if (T(kn, this).has(t.id)) {
                    const s = T(_n, this).get(i);
                    s ? t._setParentAndPosition(s, e, n) : (t.pageIndex = i, t.x = e, t.y = n)
                }
            };
            return this.addCommands({
                cmd: () => {
                    for (const [e, {newX: i, newY: s, newPageIndex: a}] of t) n(e, i, s, a)
                }, undo: () => {
                    for (const [e, {savedX: i, savedY: s, savedPageIndex: a}] of t) n(e, i, s, a)
                }, mustExec: !0
            }), !0
        }

        dragSelectedEditors(t, e) {
            if (T(Rn, this)) for (const n of T(Rn, this).keys()) n.drag(t, e)
        }

        rebuild(t) {
            if (null === t.parent) {
                const e = this.getLayer(t.pageIndex);
                e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild())
            } else t.parent.addOrRebuild(t)
        }

        get isEditorHandlingKeyboard() {
            var t;
            return (null === (t = this.getActive()) || void 0 === t ? void 0 : t.shouldGetKeyboardEvents()) || 1 === T($n, this).size && this.firstSelectedEditor.shouldGetKeyboardEvents()
        }

        isActive(t) {
            return T(An, this) === t
        }

        getActive() {
            return T(An, this)
        }

        getMode() {
            return T(Qn, this)
        }

        get imageManager() {
            return Nt(this, "imageManager", new cn)
        }

        getSelectionBoxes(t) {
            if (!t) return null;
            const e = document.getSelection();
            for (let l = 0, c = e.rangeCount; l < c; l++) if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
            const {x: n, y: i, width: s, height: a} = t.getBoundingClientRect();
            let r;
            switch (t.getAttribute("data-main-rotation")) {
                case "90":
                    r = (t, e, r, o) => ({x: (e - i) / a, y: 1 - (t + r - n) / s, width: o / a, height: r / s});
                    break;
                case "180":
                    r = (t, e, r, o) => ({x: 1 - (t + r - n) / s, y: 1 - (e + o - i) / a, width: r / s, height: o / a});
                    break;
                case "270":
                    r = (t, e, r, o) => ({x: 1 - (e + o - i) / a, y: (t - n) / s, width: o / a, height: r / s});
                    break;
                default:
                    r = (t, e, r, o) => ({x: (t - n) / s, y: (e - i) / a, width: r / s, height: o / a})
            }
            const o = [];
            for (let l = 0, c = e.rangeCount; l < c; l++) {
                const t = e.getRangeAt(l);
                if (!t.collapsed) for (const {
                    x: e,
                    y: n,
                    width: i,
                    height: s
                } of t.getClientRects()) 0 !== i && 0 !== s && o.push(r(e, n, i, s))
            }
            return 0 === o.length ? null : o
        }

        addChangedExistingAnnotation(t) {
            let {annotationElementId: e, id: n} = t;
            (T(En, this) || P(En, this, new Map)).set(e, n)
        }

        removeChangedExistingAnnotation(t) {
            var e;
            let {annotationElementId: n} = t;
            null === (e = T(En, this)) || void 0 === e || e.delete(n)
        }

        renderAnnotationElement(t) {
            var e;
            const n = null === (e = T(En, this)) || void 0 === e ? void 0 : e.get(t.data.id);
            if (!n) return;
            const i = T(xn, this).getRawValue(n);
            i && (T(Qn, this) !== q.NONE || i.hasBeenModified) && i.renderAnnotationElement(t)
        }
    }

    function ci(t) {
        let {anchorNode: e} = t;
        return e.nodeType === Node.TEXT_NODE ? e.parentElement : e
    }

    function ui(t) {
        const {currentLayer: e} = this;
        if (e.hasTextLayer(t)) return e;
        for (const n of T(_n, this).values()) if (n.hasTextLayer(t)) return n;
        return null
    }

    function hi() {
        const t = document.getSelection();
        if (!t || t.isCollapsed) return;
        const e = C(oi, this, ci).call(this, t).closest(".textLayer"), n = this.getSelectionBoxes(e);
        n && (T(Hn, this) || P(Hn, this, new $e(this)), T(Hn, this).show(e, n, "ltr" === this.direction))
    }

    function di() {
        var t;
        const e = document.getSelection();
        if (!e || e.isCollapsed) {
            var n;
            if (T(Jn, this)) null === (n = T(Hn, this)) || void 0 === n || n.hide(), P(Jn, this, null), C(oi, this, ki).call(this, {hasSelectedText: !1});
            return
        }
        const {anchorNode: i} = e;
        if (i === T(Jn, this)) return;
        const s = C(oi, this, ci).call(this, e).closest(".textLayer");
        var a;
        if (s) {
            if (null === (t = T(Hn, this)) || void 0 === t || t.hide(), P(Jn, this, i), C(oi, this, ki).call(this, {hasSelectedText: !0}), (T(Qn, this) === q.HIGHLIGHT || T(Qn, this) === q.NONE) && (T(Qn, this) === q.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), P(Bn, this, this.isShiftKeyDown), !this.isShiftKeyDown)) {
                const t = T(Qn, this) === q.HIGHLIGHT ? C(oi, this, ui).call(this, s) : null;
                null === t || void 0 === t || t.toggleDrawing();
                const e = new AbortController, n = this.combinedSignal(e), i = n => {
                    "pointerup" === n.type && 0 !== n.button || (e.abort(), null === t || void 0 === t || t.toggleDrawing(!0), "pointerup" === n.type && C(oi, this, fi).call(this, "main_toolbar"))
                };
                window.addEventListener("pointerup", i, {signal: n}), window.addEventListener("blur", i, {signal: n})
            }
        } else T(Jn, this) && (null === (a = T(Hn, this)) || void 0 === a || a.hide(), P(Jn, this, null), C(oi, this, ki).call(this, {hasSelectedText: !1}))
    }

    function fi() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        T(Qn, this) === q.HIGHLIGHT ? this.highlightSelection(t) : T(In, this) && C(oi, this, hi).call(this)
    }

    function pi() {
        document.addEventListener("selectionchange", C(oi, this, di).bind(this), {signal: this._signal})
    }

    function gi() {
        if (T(Wn, this)) return;
        P(Wn, this, new AbortController);
        const t = this.combinedSignal(T(Wn, this));
        window.addEventListener("focus", this.focus.bind(this), {signal: t}), window.addEventListener("blur", this.blur.bind(this), {signal: t})
    }

    function mi() {
        var t;
        null === (t = T(Wn, this)) || void 0 === t || t.abort(), P(Wn, this, null)
    }

    function vi() {
        if (T(qn, this)) return;
        P(qn, this, new AbortController);
        const t = this.combinedSignal(T(qn, this));
        window.addEventListener("keydown", this.keydown.bind(this), {signal: t}), window.addEventListener("keyup", this.keyup.bind(this), {signal: t})
    }

    function bi() {
        var t;
        null === (t = T(qn, this)) || void 0 === t || t.abort(), P(qn, this, null)
    }

    function yi() {
        if (T(Mn, this)) return;
        P(Mn, this, new AbortController);
        const t = this.combinedSignal(T(Mn, this));
        document.addEventListener("copy", this.copy.bind(this), {signal: t}), document.addEventListener("cut", this.cut.bind(this), {signal: t}), document.addEventListener("paste", this.paste.bind(this), {signal: t})
    }

    function wi() {
        var t;
        null === (t = T(Mn, this)) || void 0 === t || t.abort(), P(Mn, this, null)
    }

    function Ai() {
        const t = this._signal;
        document.addEventListener("dragover", this.dragOver.bind(this), {signal: t}), document.addEventListener("drop", this.drop.bind(this), {signal: t})
    }

    function ki(t) {
        Object.entries(t).some((t => {
            let [e, n] = t;
            return T(ei, this)[e] !== n
        })) && (this._eventBus.dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(T(ei, this), t)
        }), T(Qn, this) === q.HIGHLIGHT && !1 === t.hasSelectedEditor && C(oi, this, _i).call(this, [[X.HIGHLIGHT_FREE, !0]]))
    }

    function _i(t) {
        this._eventBus.dispatch("annotationeditorparamschanged", {source: this, details: t})
    }

    async function Si() {
        if (!T(Vn, this)) {
            P(Vn, this, !0);
            const t = [];
            for (const e of T(_n, this).values()) t.push(e.enable());
            await Promise.all(t);
            for (const e of T(kn, this).values()) e.enable()
        }
    }

    function xi() {
        if (this.unselectAll(), T(Vn, this)) {
            P(Vn, this, !1);
            for (const t of T(_n, this).values()) t.disable();
            for (const t of T(kn, this).values()) t.disable()
        }
    }

    function Ei(t) {
        const e = T(_n, this).get(t.pageIndex);
        e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t))
    }

    function Ci(t) {
        let e = null;
        for (e of T($n, t)) ;
        return e
    }

    function Mi() {
        if (0 === T(kn, this).size) return !0;
        if (1 === T(kn, this).size) for (const t of T(kn, this).values()) return t.isEmpty();
        return !1
    }

    function Ti(t) {
        for (const e of T($n, this)) e.unselect();
        T($n, this).clear();
        for (const e of t) e.isEmpty() || (T($n, this).add(e), e.select());
        C(oi, this, ki).call(this, {hasSelectedEditor: this.hasSelection})
    }

    w(li, "TRANSLATE_SMALL", 1), w(li, "TRANSLATE_BIG", 10);
    var Pi = new WeakMap, Ri = new WeakMap, Li = new WeakMap, Fi = new WeakMap, Ii = new WeakMap, Di = new WeakMap,
        Ni = new WeakMap, Oi = new WeakMap, zi = new WeakMap, Wi = new WeakMap, ji = new WeakMap, Bi = new WeakMap,
        Hi = new WeakSet;

    class Ui {
        constructor(t) {
            x(this, Hi), E(this, Pi, null), E(this, Ri, !1), E(this, Li, null), E(this, Fi, null), E(this, Ii, null), E(this, Di, null), E(this, Ni, !1), E(this, Oi, null), E(this, zi, null), E(this, Wi, null), E(this, ji, null), E(this, Bi, !1), P(zi, this, t), P(Bi, this, t._uiManager.useNewAltTextFlow), qi._ || (qi._ = Object.freeze({
                added: "pdfjs-editor-new-alt-text-added-button",
                "added-label": "pdfjs-editor-new-alt-text-added-button-label",
                missing: "pdfjs-editor-new-alt-text-missing-button",
                "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
                review: "pdfjs-editor-new-alt-text-to-review-button",
                "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
            }))
        }

        static initialize(t) {
            var e;
            null !== (e = Ui._l10n) && void 0 !== e || (Ui._l10n = t)
        }

        async render() {
            const t = P(Li, this, document.createElement("button"));
            t.className = "altText", t.tabIndex = "0";
            const e = P(Fi, this, document.createElement("span"));
            t.append(e), T(Bi, this) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", qi._.missing), e.setAttribute("data-l10n-id", qi._["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
            const n = T(zi, this)._uiManager._signal;
            t.addEventListener("contextmenu", _e, {signal: n}), t.addEventListener("pointerdown", (t => t.stopPropagation()), {signal: n});
            const i = t => {
                t.preventDefault(), T(zi, this)._uiManager.editAltText(T(zi, this)), T(Bi, this) && T(zi, this)._reportTelemetry({
                    action: "pdfjs.image.alt_text.image_status_label_clicked",
                    data: {label: M(Hi, this, Vi)}
                })
            };
            return t.addEventListener("click", i, {capture: !0, signal: n}), t.addEventListener("keydown", (e => {
                e.target === t && "Enter" === e.key && (P(Ni, this, !0), i(e))
            }), {signal: n}), await C(Hi, this, Gi).call(this), t
        }

        finish() {
            T(Li, this) && (T(Li, this).focus({focusVisible: T(Ni, this)}), P(Ni, this, !1))
        }

        isEmpty() {
            return T(Bi, this) ? null === T(Pi, this) : !T(Pi, this) && !T(Ri, this)
        }

        hasData() {
            return T(Bi, this) ? null !== T(Pi, this) || !!T(Wi, this) : this.isEmpty()
        }

        get guessedText() {
            return T(Wi, this)
        }

        async setGuessedText(t) {
            null === T(Pi, this) && (P(Wi, this, t), P(ji, this, await Ui._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {generatedAltText: t})), C(Hi, this, Gi).call(this))
        }

        toggleAltTextBadge() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var e;
            if (!T(Bi, this) || T(Pi, this)) return null === (e = T(Oi, this)) || void 0 === e || e.remove(), void P(Oi, this, null);
            if (!T(Oi, this)) {
                const t = P(Oi, this, document.createElement("div"));
                t.className = "noAltTextBadge", T(zi, this).div.append(t)
            }
            T(Oi, this).classList.toggle("hidden", !t)
        }

        serialize(t) {
            let e = T(Pi, this);
            return t || T(Wi, this) !== e || (e = T(ji, this)), {
                altText: e,
                decorative: T(Ri, this),
                guessedText: T(Wi, this),
                textWithDisclaimer: T(ji, this)
            }
        }

        get data() {
            return {altText: T(Pi, this), decorative: T(Ri, this)}
        }

        set data(t) {
            let {altText: e, decorative: n, guessedText: i, textWithDisclaimer: s, cancel: a = !1} = t;
            i && (P(Wi, this, i), P(ji, this, s)), T(Pi, this) === e && T(Ri, this) === n || (a || (P(Pi, this, e), P(Ri, this, n)), C(Hi, this, Gi).call(this))
        }

        toggle() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            T(Li, this) && (!t && T(Di, this) && (clearTimeout(T(Di, this)), P(Di, this, null)), T(Li, this).disabled = !t)
        }

        shown() {
            T(zi, this)._reportTelemetry({
                action: "pdfjs.image.alt_text.image_status_label_displayed",
                data: {label: M(Hi, this, Vi)}
            })
        }

        destroy() {
            var t, e;
            null === (t = T(Li, this)) || void 0 === t || t.remove(), P(Li, this, null), P(Fi, this, null), P(Ii, this, null), null === (e = T(Oi, this)) || void 0 === e || e.remove(), P(Oi, this, null)
        }
    }

    function Vi(t) {
        return (T(Pi, t) ? "added" : null === T(Pi, t) && t.guessedText && "review") || "missing"
    }

    async function Gi() {
        const t = T(Li, this);
        if (!t) return;
        if (T(Bi, this)) {
            var e, n;
            if (t.classList.toggle("done", !!T(Pi, this)), t.setAttribute("data-l10n-id", qi._[M(Hi, this, Vi)]), null === (e = T(Fi, this)) || void 0 === e || e.setAttribute("data-l10n-id", qi._["".concat(M(Hi, this, Vi), "-label")]), !T(Pi, this)) return void (null === (n = T(Ii, this)) || void 0 === n || n.remove())
        } else {
            var i;
            if (!T(Pi, this) && !T(Ri, this)) return t.classList.remove("done"), void (null === (i = T(Ii, this)) || void 0 === i || i.remove());
            t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button")
        }
        let s = T(Ii, this);
        if (!s) {
            P(Ii, this, s = document.createElement("span")), s.className = "tooltip", s.setAttribute("role", "tooltip"), s.id = "alt-text-tooltip-".concat(T(zi, this).id);
            const e = 100, n = T(zi, this)._uiManager._signal;
            n.addEventListener("abort", (() => {
                clearTimeout(T(Di, this)), P(Di, this, null)
            }), {once: !0}), t.addEventListener("mouseenter", (() => {
                P(Di, this, setTimeout((() => {
                    P(Di, this, null), T(Ii, this).classList.add("show"), T(zi, this)._reportTelemetry({action: "alt_text_tooltip"})
                }), e))
            }), {signal: n}), t.addEventListener("mouseleave", (() => {
                var t;
                T(Di, this) && (clearTimeout(T(Di, this)), P(Di, this, null)), null === (t = T(Ii, this)) || void 0 === t || t.classList.remove("show")
            }), {signal: n})
        }
        T(Ri, this) ? s.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (s.removeAttribute("data-l10n-id"), s.textContent = T(Pi, this)), s.parentNode || t.append(s);
        const a = T(zi, this).getImageForAltText();
        null === a || void 0 === a || a.setAttribute("aria-describedby", s.id)
    }

    var qi = {_: null};
    w(Ui, "_l10n", null);
    var Xi = new WeakMap, Ki = new WeakMap, Yi = new WeakMap, Qi = new WeakMap, $i = new WeakMap, Ji = new WeakMap,
        Zi = new WeakMap, ts = new WeakMap, es = new WeakMap, ns = new WeakMap, is = new WeakMap, ss = new WeakMap,
        as = new WeakMap, rs = new WeakMap, os = new WeakMap, ls = new WeakMap, cs = new WeakMap, us = new WeakMap,
        hs = new WeakMap, ds = new WeakMap, fs = new WeakSet;

    class ps {
        static get _resizerKeyboardManager() {
            const t = ps.prototype._resizeWithKeyboard, e = li.TRANSLATE_SMALL, n = li.TRANSLATE_BIG;
            return Nt(this, "_resizerKeyboardManager", new vn([[["ArrowLeft", "mac+ArrowLeft"], t, {args: [-e, 0]}], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {args: [-n, 0]}], [["ArrowRight", "mac+ArrowRight"], t, {args: [e, 0]}], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {args: [n, 0]}], [["ArrowUp", "mac+ArrowUp"], t, {args: [0, -e]}], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {args: [0, -n]}], [["ArrowDown", "mac+ArrowDown"], t, {args: [0, e]}], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {args: [0, n]}], [["Escape", "mac+Escape"], ps.prototype._stopResizingWithKeyboard]]))
        }

        constructor(t) {
            x(this, fs), E(this, Xi, null), E(this, Ki, null), E(this, Yi, null), E(this, Qi, !1), E(this, $i, !1), E(this, Ji, null), E(this, Zi, null), E(this, ts, null), E(this, es, ""), E(this, ns, !1), E(this, is, null), E(this, ss, !1), E(this, as, !1), E(this, rs, !1), E(this, os, null), E(this, ls, 0), E(this, cs, 0), E(this, us, null), w(this, "_editToolbar", null), w(this, "_initialOptions", Object.create(null)), w(this, "_initialData", null), w(this, "_isVisible", !0), w(this, "_uiManager", null), w(this, "_focusEventsAllowed", !0), E(this, hs, !1), E(this, ds, ps._zIndex++), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
            const {rotation: e, rawDims: {pageWidth: n, pageHeight: i, pageX: s, pageY: a}} = this.parent.viewport;
            this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [n, i], this.pageTranslation = [s, a];
            const [r, o] = this.parentDimensions;
            this.x = t.x / r, this.y = t.y / o, this.isAttachedToDOM = !1, this.deleted = !1
        }

        get editorType() {
            return Object.getPrototypeOf(this).constructor._type
        }

        static get _defaultLineColor() {
            return Nt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"))
        }

        static deleteAnnotationElement(t) {
            const e = new Ps({id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager});
            e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e)
        }

        static initialize(t, e) {
            var n;
            if (null !== (n = ps._l10n) && void 0 !== n || (ps._l10n = t), ps._l10nResizer || (ps._l10nResizer = Object.freeze({
                topLeft: "pdfjs-editor-resizer-top-left",
                topMiddle: "pdfjs-editor-resizer-top-middle",
                topRight: "pdfjs-editor-resizer-top-right",
                middleRight: "pdfjs-editor-resizer-middle-right",
                bottomRight: "pdfjs-editor-resizer-bottom-right",
                bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
                bottomLeft: "pdfjs-editor-resizer-bottom-left",
                middleLeft: "pdfjs-editor-resizer-middle-left"
            })), -1 !== ps._borderLineWidth) return;
            const i = getComputedStyle(document.documentElement);
            ps._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0
        }

        static updateDefaultParams(t, e) {
        }

        static get defaultPropertiesToUpdate() {
            return []
        }

        static isHandlingMimeForPasting(t) {
            return !1
        }

        static paste(t, e) {
            Ft("Not implemented")
        }

        get propertiesToUpdate() {
            return []
        }

        get _isDraggable() {
            return T(hs, this)
        }

        set _isDraggable(t) {
            var e;
            P(hs, this, t), null === (e = this.div) || void 0 === e || e.classList.toggle("draggable", t)
        }

        get isEnterHandled() {
            return !0
        }

        center() {
            const [t, e] = this.pageDimensions;
            switch (this.parentRotation) {
                case 90:
                    this.x -= this.height * e / (2 * t), this.y += this.width * t / (2 * e);
                    break;
                case 180:
                    this.x += this.width / 2, this.y += this.height / 2;
                    break;
                case 270:
                    this.x += this.height * e / (2 * t), this.y -= this.width * t / (2 * e);
                    break;
                default:
                    this.x -= this.width / 2, this.y -= this.height / 2
            }
            this.fixAndSetPosition()
        }

        addCommands(t) {
            this._uiManager.addCommands(t)
        }

        get currentLayer() {
            return this._uiManager.currentLayer
        }

        setInBackground() {
            this.div.style.zIndex = 0
        }

        setInForeground() {
            this.div.style.zIndex = T(ds, this)
        }

        setParent(t) {
            null !== t ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : C(fs, this, Ts).call(this), this.parent = t
        }

        focusin(t) {
            this._focusEventsAllowed && (T(ns, this) ? P(ns, this, !1) : this.parent.setSelected(this))
        }

        focusout(t) {
            var e;
            if (!this._focusEventsAllowed) return;
            if (!this.isAttachedToDOM) return;
            const n = t.relatedTarget;
            null !== n && void 0 !== n && n.closest("#".concat(this.id)) || (t.preventDefault(), null !== (e = this.parent) && void 0 !== e && e.isMultipleSelection || this.commitOrRemove())
        }

        commitOrRemove() {
            this.isEmpty() ? this.remove() : this.commit()
        }

        commit() {
            this.addToAnnotationStorage()
        }

        addToAnnotationStorage() {
            this._uiManager.addToAnnotationStorage(this)
        }

        setAt(t, e, n, i) {
            const [s, a] = this.parentDimensions;
            [n, i] = this.screenToPageTranslation(n, i), this.x = (t + n) / s, this.y = (e + i) / a, this.fixAndSetPosition()
        }

        translate(t, e) {
            C(fs, this, gs).call(this, this.parentDimensions, t, e)
        }

        translateInPage(t, e) {
            T(is, this) || P(is, this, [this.x, this.y]), C(fs, this, gs).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({block: "nearest"})
        }

        drag(t, e) {
            T(is, this) || P(is, this, [this.x, this.y]);
            const [n, i] = this.parentDimensions;
            if (this.x += t / n, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                const {x: t, y: e} = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, t, e) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y))
            }
            let {x: s, y: a} = this;
            const [r, o] = this.getBaseTranslation();
            s += r, a += o, this.div.style.left = "".concat((100 * s).toFixed(2), "%"), this.div.style.top = "".concat((100 * a).toFixed(2), "%"), this.div.scrollIntoView({block: "nearest"})
        }

        get _hasBeenMoved() {
            return !!T(is, this) && (T(is, this)[0] !== this.x || T(is, this)[1] !== this.y)
        }

        getBaseTranslation() {
            const [t, e] = this.parentDimensions, {_borderLineWidth: n} = ps, i = n / t, s = n / e;
            switch (this.rotation) {
                case 90:
                    return [-i, s];
                case 180:
                    return [i, s];
                case 270:
                    return [i, -s];
                default:
                    return [-i, -s]
            }
        }

        get _mustFixPosition() {
            return !0
        }

        fixAndSetPosition() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rotation;
            const [e, n] = this.pageDimensions;
            let {x: i, y: s, width: a, height: r} = this;
            if (a *= e, r *= n, i *= e, s *= n, this._mustFixPosition) switch (t) {
                case 0:
                    i = Math.max(0, Math.min(e - a, i)), s = Math.max(0, Math.min(n - r, s));
                    break;
                case 90:
                    i = Math.max(0, Math.min(e - r, i)), s = Math.min(n, Math.max(a, s));
                    break;
                case 180:
                    i = Math.min(e, Math.max(a, i)), s = Math.min(n, Math.max(r, s));
                    break;
                case 270:
                    i = Math.min(e, Math.max(r, i)), s = Math.max(0, Math.min(n - a, s))
            }
            this.x = i /= e, this.y = s /= n;
            const [o, l] = this.getBaseTranslation();
            i += o, s += l;
            const {style: c} = this.div;
            c.left = "".concat((100 * i).toFixed(2), "%"), c.top = "".concat((100 * s).toFixed(2), "%"), this.moveInDOM()
        }

        screenToPageTranslation(t, e) {
            return ms.call(ps, t, e, this.parentRotation)
        }

        pageTranslationToScreen(t, e) {
            return ms.call(ps, t, e, 360 - this.parentRotation)
        }

        get parentScale() {
            return this._uiManager.viewParameters.realScale
        }

        get parentRotation() {
            return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360
        }

        get parentDimensions() {
            const {parentScale: t, pageDimensions: [e, n]} = this;
            return [e * t, n * t]
        }

        setDims(t, e) {
            const [n, i] = this.parentDimensions;
            this.div.style.width = "".concat((100 * t / n).toFixed(2), "%"), T($i, this) || (this.div.style.height = "".concat((100 * e / i).toFixed(2), "%"))
        }

        fixDims() {
            const {style: t} = this.div, {height: e, width: n} = t, i = n.endsWith("%"),
                s = !T($i, this) && e.endsWith("%");
            if (i && s) return;
            const [a, r] = this.parentDimensions;
            i || (t.width = "".concat((100 * parseFloat(n) / a).toFixed(2), "%")), T($i, this) || s || (t.height = "".concat((100 * parseFloat(e) / r).toFixed(2), "%"))
        }

        getInitialTranslation() {
            return [0, 0]
        }

        altTextFinish() {
            var t;
            null === (t = T(Yi, this)) || void 0 === t || t.finish()
        }

        async addEditToolbar() {
            return this._editToolbar || T(as, this) || (this._editToolbar = new We(this), this.div.append(this._editToolbar.render()), T(Yi, this) && await this._editToolbar.addAltText(T(Yi, this))), this._editToolbar
        }

        removeEditToolbar() {
            var t;
            this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, null === (t = T(Yi, this)) || void 0 === t || t.destroy())
        }

        addContainer(t) {
            var e;
            const n = null === (e = this._editToolbar) || void 0 === e ? void 0 : e.div;
            n ? n.before(t) : this.div.append(t)
        }

        getClientDimensions() {
            return this.div.getBoundingClientRect()
        }

        async addAltTextButton() {
            T(Yi, this) || (Ui.initialize(ps._l10n), P(Yi, this, new Ui(this)), T(Xi, this) && (T(Yi, this).data = T(Xi, this), P(Xi, this, null)), await this.addEditToolbar())
        }

        get altTextData() {
            var t;
            return null === (t = T(Yi, this)) || void 0 === t ? void 0 : t.data
        }

        set altTextData(t) {
            T(Yi, this) && (T(Yi, this).data = t)
        }

        get guessedAltText() {
            var t;
            return null === (t = T(Yi, this)) || void 0 === t ? void 0 : t.guessedText
        }

        async setGuessedAltText(t) {
            var e;
            await (null === (e = T(Yi, this)) || void 0 === e ? void 0 : e.setGuessedText(t))
        }

        serializeAltText(t) {
            var e;
            return null === (e = T(Yi, this)) || void 0 === e ? void 0 : e.serialize(t)
        }

        hasAltText() {
            return !!T(Yi, this) && !T(Yi, this).isEmpty()
        }

        hasAltTextData() {
            var t, e;
            return null !== (t = null === (e = T(Yi, this)) || void 0 === e ? void 0 : e.hasData()) && void 0 !== t && t
        }

        render() {
            this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = T(Qi, this) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), C(fs, this, Ss).call(this);
            const [t, e] = this.parentDimensions;
            this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = "".concat((100 * e / t).toFixed(2), "%"), this.div.style.maxHeight = "".concat((100 * t / e).toFixed(2), "%"));
            const [n, i] = this.getInitialTranslation();
            return this.translate(n, i), en(this, this.div, ["pointerdown"]), this.div
        }

        pointerdown(t) {
            const {isMac: e} = Kt.platform;
            0 !== t.button || t.ctrlKey && e ? t.preventDefault() : (P(ns, this, !0), this._isDraggable ? C(fs, this, _s).call(this, t) : C(fs, this, ks).call(this, t))
        }

        get isSelected() {
            return this._uiManager.isSelected(this)
        }

        moveInDOM() {
            T(os, this) && clearTimeout(T(os, this)), P(os, this, setTimeout((() => {
                var t;
                P(os, this, null), null === (t = this.parent) || void 0 === t || t.moveEditorInDOM(this)
            }), 0))
        }

        _setParentAndPosition(t, e, n) {
            t.changeParent(this), this.x = e, this.y = n, this.fixAndSetPosition()
        }

        getRect(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.rotation;
            const i = this.parentScale, [s, a] = this.pageDimensions, [r, o] = this.pageTranslation, l = t / i,
                c = e / i, u = this.x * s, h = this.y * a, d = this.width * s, f = this.height * a;
            switch (n) {
                case 0:
                    return [u + l + r, a - h - c - f + o, u + l + d + r, a - h - c + o];
                case 90:
                    return [u + c + r, a - h + l + o, u + c + f + r, a - h + l + d + o];
                case 180:
                    return [u - l - d + r, a - h + c + o, u - l + r, a - h + c + f + o];
                case 270:
                    return [u - c - f + r, a - h - l - d + o, u - c + r, a - h - l + o];
                default:
                    throw new Error("Invalid rotation")
            }
        }

        getRectInCurrentCoords(t, e) {
            const [n, i, s, a] = t, r = s - n, o = a - i;
            switch (this.rotation) {
                case 0:
                    return [n, e - a, r, o];
                case 90:
                    return [n, e - i, o, r];
                case 180:
                    return [s, e - i, r, o];
                case 270:
                    return [s, e - a, o, r];
                default:
                    throw new Error("Invalid rotation")
            }
        }

        onceAdded() {
        }

        isEmpty() {
            return !1
        }

        enableEditMode() {
            P(as, this, !0)
        }

        disableEditMode() {
            P(as, this, !1)
        }

        isInEditMode() {
            return T(as, this)
        }

        shouldGetKeyboardEvents() {
            return T(rs, this)
        }

        needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM
        }

        rebuild() {
            C(fs, this, Ss).call(this)
        }

        rotate(t) {
        }

        serializeDeleted() {
            var t;
            return {
                id: this.annotationElementId,
                deleted: !0,
                pageIndex: this.pageIndex,
                popupRef: (null === (t = this._initialData) || void 0 === t ? void 0 : t.popupRef) || ""
            }
        }

        serialize() {
            Ft("An editor must be serializable")
        }

        static async deserialize(t, e, n) {
            const i = new this.prototype.constructor({parent: e, id: e.getNextId(), uiManager: n});
            i.rotation = t.rotation, P(Xi, i, t.accessibilityData);
            const [s, a] = i.pageDimensions, [r, o, l, c] = i.getRectInCurrentCoords(t.rect, a);
            return i.x = r / s, i.y = o / a, i.width = l / s, i.height = c / a, i
        }

        get hasBeenModified() {
            return !!this.annotationElementId && (this.deleted || null !== this.serialize())
        }

        remove() {
            var t;
            if (null === (t = T(ts, this)) || void 0 === t || t.abort(), P(ts, this, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), T(os, this) && (clearTimeout(T(os, this)), P(os, this, null)), C(fs, this, Ts).call(this), this.removeEditToolbar(), T(us, this)) {
                for (const t of T(us, this).values()) clearTimeout(t);
                P(us, this, null)
            }
            this.parent = null
        }

        get isResizable() {
            return !1
        }

        makeResizable() {
            this.isResizable && (C(fs, this, bs).call(this), T(Ji, this).classList.remove("hidden"), en(this, this.div, ["keydown"]))
        }

        get toolbarPosition() {
            return null
        }

        keydown(t) {
            if (!this.isResizable || t.target !== this.div || "Enter" !== t.key) return;
            this._uiManager.setSelected(this), P(Zi, this, {
                savedX: this.x,
                savedY: this.y,
                savedWidth: this.width,
                savedHeight: this.height
            });
            const e = T(Ji, this).children;
            if (!T(Ki, this)) {
                P(Ki, this, Array.from(e));
                const t = C(fs, this, xs).bind(this), n = C(fs, this, Es).bind(this), i = this._uiManager._signal;
                for (const e of T(Ki, this)) {
                    const s = e.getAttribute("data-resizer-name");
                    e.setAttribute("role", "spinbutton"), e.addEventListener("keydown", t, {signal: i}), e.addEventListener("blur", n, {signal: i}), e.addEventListener("focus", C(fs, this, Cs).bind(this, s), {signal: i}), e.setAttribute("data-l10n-id", ps._l10nResizer[s])
                }
            }
            const n = T(Ki, this)[0];
            let i = 0;
            for (const a of e) {
                if (a === n) break;
                i++
            }
            const s = (360 - this.rotation + this.parentRotation) % 360 / 90 * (T(Ki, this).length / 4);
            if (s !== i) {
                if (s < i) for (let e = 0; e < i - s; e++) T(Ji, this).append(T(Ji, this).firstChild); else if (s > i) for (let e = 0; e < s - i; e++) T(Ji, this).firstChild.before(T(Ji, this).lastChild);
                let t = 0;
                for (const n of e) {
                    const e = T(Ki, this)[t++].getAttribute("data-resizer-name");
                    n.setAttribute("data-l10n-id", ps._l10nResizer[e])
                }
            }
            C(fs, this, Ms).call(this, 0), P(rs, this, !0), T(Ji, this).firstChild.focus({focusVisible: !0}), t.preventDefault(), t.stopImmediatePropagation()
        }

        _resizeWithKeyboard(t, e) {
            T(rs, this) && C(fs, this, As).call(this, T(es, this), {movementX: t, movementY: e})
        }

        _stopResizingWithKeyboard() {
            C(fs, this, Ts).call(this), this.div.focus()
        }

        select() {
            var t, e, n;
            this.makeResizable(), null === (t = this.div) || void 0 === t || t.classList.add("selectedEditor"), this._editToolbar ? (null === (e = this._editToolbar) || void 0 === e || e.show(), null === (n = T(Yi, this)) || void 0 === n || n.toggleAltTextBadge(!1)) : this.addEditToolbar().then((() => {
                var t, e;
                null !== (t = this.div) && void 0 !== t && t.classList.contains("selectedEditor") && (null === (e = this._editToolbar) || void 0 === e || e.show())
            }))
        }

        unselect() {
            var t, e, n, i, s;
            null === (t = T(Ji, this)) || void 0 === t || t.classList.add("hidden"), null === (e = this.div) || void 0 === e || e.classList.remove("selectedEditor"), null !== (n = this.div) && void 0 !== n && n.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({preventScroll: !0}), null === (i = this._editToolbar) || void 0 === i || i.hide(), null === (s = T(Yi, this)) || void 0 === s || s.toggleAltTextBadge(!0)
        }

        updateParams(t, e) {
        }

        disableEditing() {
        }

        enableEditing() {
        }

        enterInEditMode() {
        }

        getImageForAltText() {
            return null
        }

        get contentDiv() {
            return this.div
        }

        get isEditing() {
            return T(ss, this)
        }

        set isEditing(t) {
            P(ss, this, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null))
        }

        setAspectRatio(t, e) {
            P($i, this, !0);
            const n = t / e, {style: i} = this.div;
            i.aspectRatio = n, i.height = "auto"
        }

        static get MIN_SIZE() {
            return 16
        }

        static canCreateNewEmptyEditor() {
            return !0
        }

        get telemetryInitialData() {
            return {action: "added"}
        }

        get telemetryFinalData() {
            return null
        }

        _reportTelemetry(t) {
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                T(us, this) || P(us, this, new Map);
                const {action: e} = t;
                let n = T(us, this).get(e);
                return n && clearTimeout(n), n = setTimeout((() => {
                    this._reportTelemetry(t), T(us, this).delete(e), 0 === T(us, this).size && P(us, this, null)
                }), ps._telemetryTimeout), void T(us, this).set(e, n)
            }
            t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
                source: this,
                details: {type: "editing", data: t}
            })
        }

        show() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._isVisible;
            this.div.classList.toggle("hidden", !t), this._isVisible = t
        }

        enable() {
            this.div && (this.div.tabIndex = 0), P(Qi, this, !1)
        }

        disable() {
            this.div && (this.div.tabIndex = -1), P(Qi, this, !0)
        }

        renderAnnotationElement(t) {
            let e = t.container.querySelector(".annotationContent");
            if (e) {
                if ("CANVAS" === e.nodeName) {
                    const t = e;
                    e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.before(e)
                }
            } else e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
            return e
        }

        resetAnnotationElement(t) {
            const {firstChild: e} = t.container;
            "DIV" === (null === e || void 0 === e ? void 0 : e.nodeName) && e.classList.contains("annotationContent") && e.remove()
        }
    }

    function gs(t, e, n) {
        let [i, s] = t;
        [e, n] = this.screenToPageTranslation(e, n), this.x += e / i, this.y += n / s, this.fixAndSetPosition()
    }

    function ms(t, e, n) {
        switch (n) {
            case 90:
                return [e, -t];
            case 180:
                return [-t, -e];
            case 270:
                return [-e, t];
            default:
                return [t, e]
        }
    }

    function vs(t) {
        switch (t) {
            case 90: {
                const [t, e] = this.pageDimensions;
                return [0, -t / e, e / t, 0]
            }
            case 180:
                return [-1, 0, 0, -1];
            case 270: {
                const [t, e] = this.pageDimensions;
                return [0, t / e, -e / t, 0]
            }
            default:
                return [1, 0, 0, 1]
        }
    }

    function bs() {
        if (T(Ji, this)) return;
        P(Ji, this, document.createElement("div")), T(Ji, this).classList.add("resizers");
        const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"],
            e = this._uiManager._signal;
        for (const n of t) {
            const t = document.createElement("div");
            T(Ji, this).append(t), t.classList.add("resizer", n), t.setAttribute("data-resizer-name", n), t.addEventListener("pointerdown", C(fs, this, ys).bind(this, n), {signal: e}), t.addEventListener("contextmenu", _e, {signal: e}), t.tabIndex = -1
        }
        this.div.prepend(T(Ji, this))
    }

    function ys(t, e) {
        var n;
        e.preventDefault();
        const {isMac: i} = Kt.platform;
        if (0 !== e.button || e.ctrlKey && i) return;
        null === (n = T(Yi, this)) || void 0 === n || n.toggle(!1);
        const s = this._isDraggable;
        this._isDraggable = !1;
        const a = new AbortController, r = this._uiManager.combinedSignal(a);
        this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", C(fs, this, As).bind(this, t), {
            passive: !0,
            capture: !0,
            signal: r
        }), window.addEventListener("contextmenu", _e, {signal: r});
        const o = this.x, l = this.y, c = this.width, u = this.height, h = this.parent.div.style.cursor,
            d = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
        const f = () => {
            var t;
            a.abort(), this.parent.togglePointerEvents(!0), null === (t = T(Yi, this)) || void 0 === t || t.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = h, this.div.style.cursor = d, C(fs, this, ws).call(this, o, l, c, u)
        };
        window.addEventListener("pointerup", f, {signal: r}), window.addEventListener("blur", f, {signal: r})
    }

    function ws(t, e, n, i) {
        const s = this.x, a = this.y, r = this.width, o = this.height;
        s === t && a === e && r === n && o === i || this.addCommands({
            cmd: () => {
                this.width = r, this.height = o, this.x = s, this.y = a;
                const [t, e] = this.parentDimensions;
                this.setDims(t * r, e * o), this.fixAndSetPosition()
            }, undo: () => {
                this.width = n, this.height = i, this.x = t, this.y = e;
                const [s, a] = this.parentDimensions;
                this.setDims(s * n, a * i), this.fixAndSetPosition()
            }, mustExec: !0
        })
    }

    function As(t, e) {
        const [n, i] = this.parentDimensions, s = this.x, a = this.y, r = this.width, l = this.height,
            c = o.MIN_SIZE / n, u = o.MIN_SIZE / i, h = t => Math.round(1e4 * t) / 1e4,
            d = C(fs, this, vs).call(this, this.rotation), f = (t, e) => [d[0] * t + d[2] * e, d[1] * t + d[3] * e],
            p = C(fs, this, vs).call(this, 360 - this.rotation);
        let g, m, v = !1, b = !1;
        switch (t) {
            case "topLeft":
                v = !0, g = (t, e) => [0, 0], m = (t, e) => [t, e];
                break;
            case "topMiddle":
                g = (t, e) => [t / 2, 0], m = (t, e) => [t / 2, e];
                break;
            case "topRight":
                v = !0, g = (t, e) => [t, 0], m = (t, e) => [0, e];
                break;
            case "middleRight":
                b = !0, g = (t, e) => [t, e / 2], m = (t, e) => [0, e / 2];
                break;
            case "bottomRight":
                v = !0, g = (t, e) => [t, e], m = (t, e) => [0, 0];
                break;
            case "bottomMiddle":
                g = (t, e) => [t / 2, e], m = (t, e) => [t / 2, 0];
                break;
            case "bottomLeft":
                v = !0, g = (t, e) => [0, e], m = (t, e) => [t, 0];
                break;
            case "middleLeft":
                b = !0, g = (t, e) => [0, e / 2], m = (t, e) => [t, e / 2]
        }
        const y = g(r, l), w = m(r, l);
        let A = f(...w);
        const k = h(s + A[0]), _ = h(a + A[1]);
        let S = 1, x = 1, [E, M] = this.screenToPageTranslation(e.movementX, e.movementY);
        var T, P;
        if ([E, M] = (T = E / n, P = M / i, [p[0] * T + p[2] * P, p[1] * T + p[3] * P]), v) {
            const t = Math.hypot(r, l);
            S = x = Math.max(Math.min(Math.hypot(w[0] - y[0] - E, w[1] - y[1] - M) / t, 1 / r, 1 / l), c / r, u / l)
        } else b ? S = Math.max(c, Math.min(1, Math.abs(w[0] - y[0] - E))) / r : x = Math.max(u, Math.min(1, Math.abs(w[1] - y[1] - M))) / l;
        const R = h(r * S), L = h(l * x);
        A = f(...m(R, L));
        const F = k - A[0], I = _ - A[1];
        this.width = R, this.height = L, this.x = F, this.y = I, this.setDims(n * R, i * L), this.fixAndSetPosition()
    }

    function ks(t) {
        const {isMac: e} = Kt.platform;
        t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this)
    }

    function _s(t) {
        const {isSelected: e} = this;
        this._uiManager.setUpDragSession();
        const n = new AbortController, i = this._uiManager.combinedSignal(n);
        if (e) {
            this.div.classList.add("moving"), P(ls, this, t.clientX), P(cs, this, t.clientY);
            const e = t => {
                const {
                    clientX: e,
                    clientY: n
                } = t, [i, s] = this.screenToPageTranslation(e - T(ls, this), n - T(cs, this));
                P(ls, this, e), P(cs, this, n), this._uiManager.dragSelectedEditors(i, s)
            };
            window.addEventListener("pointermove", e, {passive: !0, capture: !0, signal: i})
        }
        const s = () => {
            n.abort(), e && this.div.classList.remove("moving"), P(ns, this, !1), this._uiManager.endDragSession() || C(fs, this, ks).call(this, t)
        };
        window.addEventListener("pointerup", s, {signal: i}), window.addEventListener("blur", s, {signal: i})
    }

    function Ss() {
        if (T(ts, this) || !this.div) return;
        P(ts, this, new AbortController);
        const t = this._uiManager.combinedSignal(T(ts, this));
        this.div.addEventListener("focusin", this.focusin.bind(this), {signal: t}), this.div.addEventListener("focusout", this.focusout.bind(this), {signal: t})
    }

    function xs(t) {
        o._resizerKeyboardManager.exec(this, t)
    }

    function Es(t) {
        var e;
        T(rs, this) && (null === (e = t.relatedTarget) || void 0 === e ? void 0 : e.parentNode) !== T(Ji, this) && C(fs, this, Ts).call(this)
    }

    function Cs(t) {
        P(es, this, T(rs, this) ? t : "")
    }

    function Ms(t) {
        if (T(Ki, this)) for (const e of T(Ki, this)) e.tabIndex = t
    }

    function Ts() {
        if (P(rs, this, !1), C(fs, this, Ms).call(this, -1), T(Zi, this)) {
            const {savedX: t, savedY: e, savedWidth: n, savedHeight: i} = T(Zi, this);
            C(fs, this, ws).call(this, t, e, n, i), P(Zi, this, null)
        }
    }

    o = ps, w(ps, "_l10n", null), w(ps, "_l10nResizer", null), w(ps, "_borderLineWidth", -1), w(ps, "_colorManager", new yn), w(ps, "_zIndex", 1), w(ps, "_telemetryTimeout", 1e3);

    class Ps extends ps {
        constructor(t) {
            super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0
        }

        serialize() {
            return this.serializeDeleted()
        }
    }

    const Rs = 3285377520, Ls = 4294901760, Fs = 65535;

    class Is {
        constructor(t) {
            this.h1 = t ? 4294967295 & t : Rs, this.h2 = t ? 4294967295 & t : Rs
        }

        update(t) {
            let e, n;
            if ("string" === typeof t) {
                e = new Uint8Array(2 * t.length), n = 0;
                for (let i = 0, s = t.length; i < s; i++) {
                    const s = t.charCodeAt(i);
                    s <= 255 ? e[n++] = s : (e[n++] = s >>> 8, e[n++] = 255 & s)
                }
            } else {
                if (!ArrayBuffer.isView(t)) throw new Error("Invalid data format, must be a string or TypedArray.");
                e = t.slice(), n = e.byteLength
            }
            const i = n >> 2, s = n - 4 * i, a = new Uint32Array(e.buffer, 0, i);
            let r = 0, o = 0, l = this.h1, c = this.h2;
            const u = 3432918353, h = 461845907, d = 11601, f = 13715;
            for (let p = 0; p < i; p++) 1 & p ? (r = a[p], r = r * u & Ls | r * d & Fs, r = r << 15 | r >>> 17, r = r * h & Ls | r * f & Fs, l ^= r, l = l << 13 | l >>> 19, l = 5 * l + 3864292196) : (o = a[p], o = o * u & Ls | o * d & Fs, o = o << 15 | o >>> 17, o = o * h & Ls | o * f & Fs, c ^= o, c = c << 13 | c >>> 19, c = 5 * c + 3864292196);
            switch (r = 0, s) {
                case 3:
                    r ^= e[4 * i + 2] << 16;
                case 2:
                    r ^= e[4 * i + 1] << 8;
                case 1:
                    r ^= e[4 * i], r = r * u & Ls | r * d & Fs, r = r << 15 | r >>> 17, r = r * h & Ls | r * f & Fs, 1 & i ? l ^= r : c ^= r
            }
            this.h1 = l, this.h2 = c
        }

        hexdigest() {
            let t = this.h1, e = this.h2;
            return t ^= e >>> 1, t = 3981806797 * t & Ls | 36045 * t & Fs, e = 4283543511 * e & Ls | (2950163797 * (e << 16 | t >>> 16) & Ls) >>> 16, t ^= e >>> 1, t = 444984403 * t & Ls | 60499 * t & Fs, e = 3301882366 * e & Ls | (3120437893 * (e << 16 | t >>> 16) & Ls) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0")
        }
    }

    const Ds = Object.freeze({map: null, hash: "", transfer: void 0});
    var Ns = new WeakMap, Os = new WeakMap, zs = new WeakMap, Ws = new WeakSet;

    class js {
        constructor() {
            x(this, Ws), E(this, Ns, !1), E(this, Os, null), E(this, zs, new Map), this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null
        }

        getValue(t, e) {
            const n = T(zs, this).get(t);
            return void 0 === n ? e : Object.assign(e, n)
        }

        getRawValue(t) {
            return T(zs, this).get(t)
        }

        remove(t) {
            if (T(zs, this).delete(t), 0 === T(zs, this).size && this.resetModified(), "function" === typeof this.onAnnotationEditor) {
                for (const t of T(zs, this).values()) if (t instanceof ps) return;
                this.onAnnotationEditor(null)
            }
        }

        setValue(t, e) {
            const n = T(zs, this).get(t);
            let i = !1;
            if (void 0 !== n) for (const [s, a] of Object.entries(e)) n[s] !== a && (i = !0, n[s] = a); else i = !0, T(zs, this).set(t, e);
            i && C(Ws, this, Bs).call(this), e instanceof ps && "function" === typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type)
        }

        has(t) {
            return T(zs, this).has(t)
        }

        getAll() {
            return T(zs, this).size > 0 ? Xt(T(zs, this)) : null
        }

        setAll(t) {
            for (const [e, n] of Object.entries(t)) this.setValue(e, n)
        }

        get size() {
            return T(zs, this).size
        }

        resetModified() {
            T(Ns, this) && (P(Ns, this, !1), "function" === typeof this.onResetModified && this.onResetModified())
        }

        get print() {
            return new Us(this)
        }

        get serializable() {
            if (0 === T(zs, this).size) return Ds;
            const t = new Map, e = new Is, n = [], i = Object.create(null);
            let s = !1;
            for (const [a, r] of T(zs, this)) {
                const n = r instanceof ps ? r.serialize(!1, i) : r;
                n && (t.set(a, n), e.update("".concat(a, ":").concat(JSON.stringify(n))), s || (s = !!n.bitmap))
            }
            if (s) for (const a of t.values()) a.bitmap && n.push(a.bitmap);
            return t.size > 0 ? {map: t, hash: e.hexdigest(), transfer: n} : Ds
        }

        get editorStats() {
            let t = null;
            const e = new Map;
            for (const s of T(zs, this).values()) {
                var n;
                if (!(s instanceof ps)) continue;
                const a = s.telemetryFinalData;
                if (!a) continue;
                const {type: r} = a;
                e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t || (t = Object.create(null));
                const o = (n = t)[r] || (n[r] = new Map);
                for (const [t, e] of Object.entries(a)) {
                    var i;
                    if ("type" === t) continue;
                    let n = o.get(t);
                    n || (n = new Map, o.set(t, n));
                    const s = null !== (i = n.get(e)) && void 0 !== i ? i : 0;
                    n.set(e, s + 1)
                }
            }
            for (const [s, a] of e) t[s] = a.computeTelemetryFinalData(t[s]);
            return t
        }

        resetModifiedIds() {
            P(Os, this, null)
        }

        get modifiedIds() {
            if (T(Os, this)) return T(Os, this);
            const t = [];
            for (const e of T(zs, this).values()) e instanceof ps && e.annotationElementId && e.serialize() && t.push(e.annotationElementId);
            return P(Os, this, {ids: new Set(t), hash: t.join(",")})
        }
    }

    function Bs() {
        T(Ns, this) || (P(Ns, this, !0), "function" === typeof this.onSetModified && this.onSetModified())
    }

    var Hs = new WeakMap;

    class Us extends js {
        constructor(t) {
            super(), E(this, Hs, void 0);
            const {map: e, hash: n, transfer: i} = t.serializable, s = structuredClone(e, i ? {transfer: i} : null);
            P(Hs, this, {map: s, hash: n, transfer: i})
        }

        get print() {
            Ft("Should not call PrintAnnotationStorage.print")
        }

        get serializable() {
            return T(Hs, this)
        }

        get modifiedIds() {
            return Nt(this, "modifiedIds", {ids: new Set, hash: ""})
        }
    }

    var Vs = new WeakMap;

    class Gs {
        constructor(t) {
            let {ownerDocument: e = globalThis.document, styleElement: n = null} = t;
            E(this, Vs, new Set), this._document = e, this.nativeFontFaces = new Set, this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0
        }

        addNativeFontFace(t) {
            this.nativeFontFaces.add(t), this._document.fonts.add(t)
        }

        removeNativeFontFace(t) {
            this.nativeFontFaces.delete(t), this._document.fonts.delete(t)
        }

        insertRule(t) {
            this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
            const e = this.styleElement.sheet;
            e.insertRule(t, e.cssRules.length)
        }

        clear() {
            for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
            this.nativeFontFaces.clear(), T(Vs, this).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null)
        }

        async loadSystemFont(t) {
            let {systemFontInfo: e, _inspectFont: n} = t;
            if (e && !T(Vs, this).has(e.loadedName)) if (It(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                const {loadedName: t, src: s, style: a} = e, r = new FontFace(t, s, a);
                this.addNativeFontFace(r);
                try {
                    await r.load(), T(Vs, this).add(t), null === n || void 0 === n || n(e)
                } catch (i) {
                    Lt("Cannot load system font: ".concat(e.baseFontName, ", installing it could help to improve PDF rendering.")), this.removeNativeFontFace(r)
                }
            } else Ft("Not implemented: loadSystemFont without the Font Loading API.")
        }

        async bind(t) {
            if (t.attached || t.missingFile && !t.systemFontInfo) return;
            if (t.attached = !0, t.systemFontInfo) return void await this.loadSystemFont(t);
            if (this.isFontLoadingAPISupported) {
                const e = t.createNativeFontFace();
                if (e) {
                    this.addNativeFontFace(e);
                    try {
                        await e.loaded
                    } catch (n) {
                        throw Lt("Failed to load font '".concat(e.family, "': '").concat(n, "'.")), t.disableFontFace = !0, n
                    }
                }
                return
            }
            const e = t.createFontFaceRule();
            if (e) {
                if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
                await new Promise((e => {
                    const n = this._queueLoadingCallback(e);
                    this._prepareFontLoadEvent(t, n)
                }))
            }
        }

        get isFontLoadingAPISupported() {
            var t;
            return Nt(this, "isFontLoadingAPISupported", !(null === (t = this._document) || void 0 === t || !t.fonts))
        }

        get isSyncFontLoadingSupported() {
            var t;
            let e = !1;
            return (F || "undefined" !== typeof navigator && "string" === typeof (null === (t = navigator) || void 0 === t ? void 0 : t.userAgent) && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (e = !0), Nt(this, "isSyncFontLoadingSupported", e)
        }

        _queueLoadingCallback(t) {
            const {loadingRequests: e} = this, n = {
                done: !1, complete: function () {
                    for (It(!n.done, "completeRequest() cannot be called twice."), n.done = !0; e.length > 0 && e[0].done;) {
                        const t = e.shift();
                        setTimeout(t.callback, 0)
                    }
                }, callback: t
            };
            return e.push(n), n
        }

        get _loadTestFont() {
            return Nt(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))
        }

        _prepareFontLoadEvent(t, e) {
            function n(t, e) {
                return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3)
            }

            function i(t, e, n, i) {
                return t.substring(0, e) + i + t.substring(e + n)
            }

            let s, a;
            const r = this._document.createElement("canvas");
            r.width = 1, r.height = 1;
            const o = r.getContext("2d");
            let l = 0;
            const c = "lt".concat(Date.now()).concat(this.loadTestFontId++);
            let u = this._loadTestFont;
            u = i(u, 976, c.length, c);
            const h = 1482184792;
            let d = n(u, 16);
            for (s = 0, a = c.length - 3; s < a; s += 4) d = d - h + n(c, s) | 0;
            var f;
            s < c.length && (d = d - h + n(c + "XXX", s) | 0), u = i(u, 16, 4, (f = d, String.fromCharCode(f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f)));
            const p = "url(data:font/opentype;base64,".concat(btoa(u), ");"),
                g = '@font-face {font-family:"'.concat(c, '";src:').concat(p, "}");
            this.insertRule(g);
            const m = this._document.createElement("div");
            m.style.visibility = "hidden", m.style.width = m.style.height = "10px", m.style.position = "absolute", m.style.top = m.style.left = "0px";
            for (const v of [t.loadedName, c]) {
                const t = this._document.createElement("span");
                t.textContent = "Hi", t.style.fontFamily = v, m.append(t)
            }
            this._document.body.append(m), function t(e, n) {
                if (++l > 30) return Lt("Load test font never loaded."), void n();
                o.font = "30px " + e, o.fillText(".", 0, 20), o.getImageData(0, 0, 1, 1).data[3] > 0 ? n() : setTimeout(t.bind(null, e, n))
            }(c, (() => {
                m.remove(), e.complete()
            }))
        }
    }

    class qs {
        constructor(t, e) {
            let {disableFontFace: n = !1, inspectFont: i = null} = e;
            this.compiledGlyphs = Object.create(null);
            for (const s in t) this[s] = t[s];
            this.disableFontFace = !0 === n, this._inspectFont = i
        }

        createNativeFontFace() {
            var t;
            if (!this.data || this.disableFontFace) return null;
            let e;
            if (this.cssFontInfo) {
                const t = {weight: this.cssFontInfo.fontWeight};
                this.cssFontInfo.italicAngle && (t.style = "oblique ".concat(this.cssFontInfo.italicAngle, "deg")), e = new FontFace(this.cssFontInfo.fontFamily, this.data, t)
            } else e = new FontFace(this.loadedName, this.data, {});
            return null === (t = this._inspectFont) || void 0 === t || t.call(this, this), e
        }

        createFontFaceRule() {
            var t;
            if (!this.data || this.disableFontFace) return null;
            const e = "url(data:".concat(this.mimetype, ";base64,").concat((n = this.data, Uint8Array.prototype.toBase64 ? n.toBase64() : btoa(Gt(n))), ");");
            var n;
            let i;
            if (this.cssFontInfo) {
                let t = "font-weight: ".concat(this.cssFontInfo.fontWeight, ";");
                this.cssFontInfo.italicAngle && (t += "font-style: oblique ".concat(this.cssFontInfo.italicAngle, "deg;")), i = '@font-face {font-family:"'.concat(this.cssFontInfo.fontFamily, '";').concat(t, "src:").concat(e, "}")
            } else i = '@font-face {font-family:"'.concat(this.loadedName, '";src:').concat(e, "}");
            return null === (t = this._inspectFont) || void 0 === t || t.call(this, this, e), i
        }

        getPathGenerator(t, e) {
            if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
            let n;
            try {
                n = t.get(this.loadedName + "_path_" + e)
            } catch (s) {
                Lt('getPathGenerator - ignoring character: "'.concat(s, '".'))
            }
            if (!Array.isArray(n) || 0 === n.length) return this.compiledGlyphs[e] = function (t, e) {
            };
            const i = [];
            for (let a = 0, r = n.length; a < r;) switch (n[a++]) {
                case ie: {
                    const [t, e, s, r, o, l] = n.slice(a, a + 6);
                    i.push((n => n.bezierCurveTo(t, e, s, r, o, l))), a += 6
                }
                    break;
                case se: {
                    const [t, e] = n.slice(a, a + 2);
                    i.push((n => n.moveTo(t, e))), a += 2
                }
                    break;
                case ae: {
                    const [t, e] = n.slice(a, a + 2);
                    i.push((n => n.lineTo(t, e))), a += 2
                }
                    break;
                case re: {
                    const [t, e, s, r] = n.slice(a, a + 4);
                    i.push((n => n.quadraticCurveTo(t, e, s, r))), a += 4
                }
                    break;
                case oe:
                    i.push((t => t.restore()));
                    break;
                case le:
                    i.push((t => t.save()));
                    break;
                case ce:
                    It(2 === i.length, "Scale command is only valid at the third position.");
                    break;
                case ue: {
                    const [t, e, s, r, o, l] = n.slice(a, a + 6);
                    i.push((n => n.transform(t, e, s, r, o, l))), a += 6
                }
                    break;
                case he: {
                    const [t, e] = n.slice(a, a + 2);
                    i.push((n => n.translate(t, e))), a += 2
                }
            }
            return this.compiledGlyphs[e] = function (t, e) {
                i[0](t), i[1](t), t.scale(e, -e);
                for (let n = 2, s = i.length; n < s; n++) i[n](t)
            }
        }
    }

    var Xs = new WeakMap;

    class Ks {
        constructor(t) {
            let {enableHWA: e = !1} = t;
            E(this, Xs, !1), P(Xs, this, e)
        }

        create(t, e) {
            if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
            const n = this._createCanvas(t, e);
            return {canvas: n, context: n.getContext("2d", {willReadFrequently: !T(Xs, this)})}
        }

        reset(t, e, n) {
            if (!t.canvas) throw new Error("Canvas is not specified");
            if (e <= 0 || n <= 0) throw new Error("Invalid canvas size");
            t.canvas.width = e, t.canvas.height = n
        }

        destroy(t) {
            if (!t.canvas) throw new Error("Canvas is not specified");
            t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null
        }

        _createCanvas(t, e) {
            Ft("Abstract method `_createCanvas` called.")
        }
    }

    class Ys {
        constructor(t) {
            let {baseUrl: e = null, isCompressed: n = !0} = t;
            this.baseUrl = e, this.isCompressed = n
        }

        async fetch(t) {
            let {name: e} = t;
            if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
            if (!e) throw new Error("CMap name must be specified.");
            const n = this.baseUrl + e + (this.isCompressed ? ".bcmap" : "");
            return this._fetch(n).then((t => ({cMapData: t, isCompressed: this.isCompressed}))).catch((t => {
                throw new Error("Unable to load ".concat(this.isCompressed ? "binary " : "", "CMap at: ").concat(n))
            }))
        }

        async _fetch(t) {
            Ft("Abstract method `_fetch` called.")
        }
    }

    class Qs extends Ys {
        async _fetch(t) {
            const e = await pe(t, this.isCompressed ? "arraybuffer" : "text");
            return e instanceof ArrayBuffer ? new Uint8Array(e) : qt(e)
        }
    }

    class $s {
        addFilter(t) {
            return "none"
        }

        addHCMFilter(t, e) {
            return "none"
        }

        addAlphaFilter(t) {
            return "none"
        }

        addLuminosityFilter(t) {
            return "none"
        }

        addHighlightHCMFilter(t, e, n, i, s) {
            return "none"
        }

        destroy() {
        }
    }

    var Js = new WeakMap, Zs = new WeakMap, ta = new WeakMap, ea = new WeakMap, na = new WeakMap, ia = new WeakMap,
        sa = new WeakMap, aa = new WeakSet;

    function ra(t) {
        return T(Zs, t) || P(Zs, t, new Map)
    }

    function oa(t) {
        return T(ia, t) || P(ia, t, new Map)
    }

    function la(t) {
        if (!T(ta, t)) {
            const e = T(na, t).createElement("div"), {style: n} = e;
            n.visibility = "hidden", n.contain = "strict", n.width = n.height = 0, n.position = "absolute", n.top = n.left = 0, n.zIndex = -1;
            const i = T(na, t).createElementNS(de, "svg");
            i.setAttribute("width", 0), i.setAttribute("height", 0), P(ta, t, T(na, t).createElementNS(de, "defs")), e.append(i), i.append(T(ta, t)), T(na, t).body.append(e)
        }
        return T(ta, t)
    }

    function ca(t) {
        if (1 === t.length) {
            const e = t[0], n = new Array(256);
            for (let t = 0; t < 256; t++) n[t] = e[t] / 255;
            const i = n.join(",");
            return [i, i, i]
        }
        const [e, n, i] = t, s = new Array(256), a = new Array(256), r = new Array(256);
        for (let o = 0; o < 256; o++) s[o] = e[o] / 255, a[o] = n[o] / 255, r[o] = i[o] / 255;
        return [s.join(","), a.join(","), r.join(",")]
    }

    function ua(t) {
        if (void 0 === T(Js, this)) {
            P(Js, this, "");
            const t = T(na, this).URL;
            t !== T(na, this).baseURI && (ve(t) ? Lt('#createUrl: ignore "data:"-URL for performance reasons.') : P(Js, this, t.split("#", 1)[0]))
        }
        return "url(".concat(T(Js, this), "#").concat(t, ")")
    }

    function ha(t) {
        const e = T(na, this).createElementNS(de, "feColorMatrix");
        e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(e)
    }

    function da(t) {
        const e = T(na, this).createElementNS(de, "feColorMatrix");
        e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(e)
    }

    function fa(t) {
        const e = T(na, this).createElementNS(de, "filter");
        return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t), M(aa, this, la).append(e), e
    }

    function pa(t, e, n) {
        const i = T(na, this).createElementNS(de, e);
        i.setAttribute("type", "discrete"), i.setAttribute("tableValues", n), t.append(i)
    }

    function ga(t, e, n, i) {
        const s = T(na, this).createElementNS(de, "feComponentTransfer");
        i.append(s), C(aa, this, pa).call(this, s, "feFuncR", t), C(aa, this, pa).call(this, s, "feFuncG", e), C(aa, this, pa).call(this, s, "feFuncB", n)
    }

    function ma(t, e) {
        const n = T(na, this).createElementNS(de, "feComponentTransfer");
        e.append(n), C(aa, this, pa).call(this, n, "feFuncA", t)
    }

    function va(t) {
        return M(aa, this, la).style.color = t, Me(getComputedStyle(M(aa, this, la)).getPropertyValue("color"))
    }

    class ba {
        constructor(t) {
            let {baseUrl: e = null} = t;
            this.baseUrl = e
        }

        async fetch(t) {
            let {filename: e} = t;
            if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
            if (!e) throw new Error("Font filename must be specified.");
            const n = "".concat(this.baseUrl).concat(e);
            return this._fetch(n).catch((t => {
                throw new Error("Unable to load font data at: ".concat(n))
            }))
        }

        async _fetch(t) {
            Ft("Abstract method `_fetch` called.")
        }
    }

    class ya extends ba {
        async _fetch(t) {
            const e = await pe(t, "arraybuffer");
            return new Uint8Array(e)
        }
    }

    if (F) {
        var wa = Promise.withResolvers(), Aa = null;
        (async () => {
            const t = await import("fs"), e = await import("http"), n = await import("https"), i = await import("url");
            return new Map(Object.entries({fs: t, http: e, https: n, url: i, canvas: undefined, path2d: undefined}))
        })().then((t => {
            Aa = t, wa.resolve()
        }), (t => {
            Lt("loadPackages: ".concat(t)), Aa = new Map, wa.resolve()
        }))
    }

    class ka {
        static get promise() {
            return wa.promise
        }

        static get(t) {
            var e;
            return null === (e = Aa) || void 0 === e ? void 0 : e.get(t)
        }
    }

    async function _a(t) {
        const e = ka.get("fs"), n = await e.promises.readFile(t);
        return new Uint8Array(n)
    }

    const Sa = "Fill", xa = "Stroke", Ea = "Shading";

    function Ca(t, e) {
        if (!e) return;
        const n = e[2] - e[0], i = e[3] - e[1], s = new Path2D;
        s.rect(e[0], e[1], n, i), t.clip(s)
    }

    class Ma {
        getPattern() {
            Ft("Abstract method `getPattern` called.")
        }
    }

    class Ta extends Ma {
        constructor(t) {
            super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null
        }

        _createGradient(t) {
            let e;
            "axial" === this._type ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
            for (const n of this._colorStops) e.addColorStop(n[0], n[1]);
            return e
        }

        getPattern(t, e, n, i) {
            let s;
            if (i === xa || i === Sa) {
                const a = e.current.getClippedPathBoundingBox(i, Te(t)) || [0, 0, 0, 0],
                    r = Math.ceil(a[2] - a[0]) || 1, o = Math.ceil(a[3] - a[1]) || 1,
                    l = e.cachedCanvases.getCanvas("pattern", r, o), c = l.context;
                c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), n = Qt.transform(n, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), Ca(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), s = t.createPattern(l.canvas, "no-repeat");
                const u = new DOMMatrix(n);
                s.setTransform(u)
            } else Ca(t, this._bbox), s = this._createGradient(t);
            return s
        }
    }

    function Pa(t, e, n, i, s, a, r, o) {
        const l = e.coords, c = e.colors, u = t.data, h = 4 * t.width;
        let d;
        l[n + 1] > l[i + 1] && (d = n, n = i, i = d, d = a, a = r, r = d), l[i + 1] > l[s + 1] && (d = i, i = s, s = d, d = r, r = o, o = d), l[n + 1] > l[i + 1] && (d = n, n = i, i = d, d = a, a = r, r = d);
        const f = (l[n] + e.offsetX) * e.scaleX, p = (l[n + 1] + e.offsetY) * e.scaleY,
            g = (l[i] + e.offsetX) * e.scaleX, m = (l[i + 1] + e.offsetY) * e.scaleY, v = (l[s] + e.offsetX) * e.scaleX,
            b = (l[s + 1] + e.offsetY) * e.scaleY;
        if (p >= b) return;
        const y = c[a], w = c[a + 1], A = c[a + 2], k = c[r], _ = c[r + 1], S = c[r + 2], x = c[o], E = c[o + 1],
            C = c[o + 2], M = Math.round(p), T = Math.round(b);
        let P, R, L, F, I, D, N, O;
        for (let z = M; z <= T; z++) {
            if (z < m) {
                const t = z < p ? 0 : (p - z) / (p - m);
                P = f - (f - g) * t, R = y - (y - k) * t, L = w - (w - _) * t, F = A - (A - S) * t
            } else {
                let t;
                t = z > b ? 1 : m === b ? 0 : (m - z) / (m - b), P = g - (g - v) * t, R = k - (k - x) * t, L = _ - (_ - E) * t, F = S - (S - C) * t
            }
            let t;
            t = z < p ? 0 : z > b ? 1 : (p - z) / (p - b), I = f - (f - v) * t, D = y - (y - x) * t, N = w - (w - E) * t, O = A - (A - C) * t;
            const e = Math.round(Math.min(P, I)), n = Math.round(Math.max(P, I));
            let i = h * z + 4 * e;
            for (let s = e; s <= n; s++) t = (P - s) / (P - I), t < 0 ? t = 0 : t > 1 && (t = 1), u[i++] = R - (R - D) * t | 0, u[i++] = L - (L - N) * t | 0, u[i++] = F - (F - O) * t | 0, u[i++] = 255
        }
    }

    function Ra(t, e, n) {
        const i = e.coords, s = e.colors;
        let a, r;
        switch (e.type) {
            case "lattice":
                const o = e.verticesPerRow, l = Math.floor(i.length / o) - 1, c = o - 1;
                for (a = 0; a < l; a++) {
                    let e = a * o;
                    for (let a = 0; a < c; a++, e++) Pa(t, n, i[e], i[e + 1], i[e + o], s[e], s[e + 1], s[e + o]), Pa(t, n, i[e + o + 1], i[e + 1], i[e + o], s[e + o + 1], s[e + 1], s[e + o])
                }
                break;
            case "triangles":
                for (a = 0, r = i.length; a < r; a += 3) Pa(t, n, i[a], i[a + 1], i[a + 2], s[a], s[a + 1], s[a + 2]);
                break;
            default:
                throw new Error("illegal figure")
        }
    }

    class La extends Ma {
        constructor(t) {
            super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null
        }

        _createMeshCanvas(t, e, n) {
            const i = Math.floor(this._bounds[0]), s = Math.floor(this._bounds[1]), a = Math.ceil(this._bounds[2]) - i,
                r = Math.ceil(this._bounds[3]) - s, o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3), c = a / o, u = r / l, h = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -i,
                    offsetY: -s,
                    scaleX: 1 / c,
                    scaleY: 1 / u
                }, d = o + 4, f = l + 4, p = n.getCanvas("mesh", d, f), g = p.context, m = g.createImageData(o, l);
            if (e) {
                const t = m.data;
                for (let n = 0, i = t.length; n < i; n += 4) t[n] = e[0], t[n + 1] = e[1], t[n + 2] = e[2], t[n + 3] = 255
            }
            for (const v of this._figures) Ra(m, v, h);
            g.putImageData(m, 2, 2);
            return {canvas: p.canvas, offsetX: i - 2 * c, offsetY: s - 2 * u, scaleX: c, scaleY: u}
        }

        getPattern(t, e, n, i) {
            let s;
            if (Ca(t, this._bbox), i === Ea) s = Qt.singularValueDecompose2dScale(Te(t)); else if (s = Qt.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
                const t = Qt.singularValueDecompose2dScale(this.matrix);
                s = [s[0] * t[0], s[1] * t[1]]
            }
            const a = this._createMeshCanvas(s, i === Ea ? null : this._background, e.cachedCanvases);
            return i !== Ea && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat")
        }
    }

    class Fa extends Ma {
        getPattern() {
            return "hotpink"
        }
    }

    const Ia = 1, Da = 2;

    class Na {
        constructor(t, e, n, i, s) {
            this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = n, this.canvasGraphicsFactory = i, this.baseTransform = s
        }

        createPatternCanvas(t) {
            const {bbox: e, operatorList: n, paintType: i, tilingType: s, color: a, canvasGraphicsFactory: r} = this;
            let {xstep: o, ystep: l} = this;
            o = Math.abs(o), l = Math.abs(l), Rt("TilingType: " + s);
            const c = e[0], u = e[1], h = e[2], d = e[3], f = h - c, p = d - u,
                g = Qt.singularValueDecompose2dScale(this.matrix),
                m = Qt.singularValueDecompose2dScale(this.baseTransform), v = g[0] * m[0], b = g[1] * m[1];
            let y = f, w = p, A = !1, k = !1;
            const _ = Math.ceil(o * v), S = Math.ceil(l * b);
            _ >= Math.ceil(f * v) ? y = o : A = !0, S >= Math.ceil(p * b) ? w = l : k = !0;
            const x = this.getSizeAndScale(y, this.ctx.canvas.width, v),
                E = this.getSizeAndScale(w, this.ctx.canvas.height, b),
                C = t.cachedCanvases.getCanvas("pattern", x.size, E.size), M = C.context, T = r.createCanvasGraphics(M);
            if (T.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(T, i, a), M.translate(-x.scale * c, -E.scale * u), T.transform(x.scale, 0, 0, E.scale, 0, 0), M.save(), this.clipBbox(T, c, u, h, d), T.baseTransform = Te(T.ctx), T.executeOperatorList(n), T.endDrawing(), M.restore(), A || k) {
                const e = C.canvas;
                A && (y = o), k && (w = l);
                const n = this.getSizeAndScale(y, this.ctx.canvas.width, v),
                    i = this.getSizeAndScale(w, this.ctx.canvas.height, b), s = n.size, a = i.size,
                    r = t.cachedCanvases.getCanvas("pattern-workaround", s, a), h = r.context,
                    d = A ? Math.floor(f / o) : 0, g = k ? Math.floor(p / l) : 0;
                for (let t = 0; t <= d; t++) for (let n = 0; n <= g; n++) h.drawImage(e, s * t, a * n, s, a, 0, 0, s, a);
                return {canvas: r.canvas, scaleX: n.scale, scaleY: i.scale, offsetX: c, offsetY: u}
            }
            return {canvas: C.canvas, scaleX: x.scale, scaleY: E.scale, offsetX: c, offsetY: u}
        }

        getSizeAndScale(t, e, n) {
            const i = Math.max(Na.MAX_PATTERN_SIZE, e);
            let s = Math.ceil(t * n);
            return s >= i ? s = i : n = s / t, {scale: n, size: s}
        }

        clipBbox(t, e, n, i, s) {
            const a = i - e, r = s - n;
            t.ctx.rect(e, n, a, r), t.current.updateRectMinMax(Te(t.ctx), [e, n, i, s]), t.clip(), t.endPath()
        }

        setFillAndStrokeStyleToContext(t, e, n) {
            const i = t.ctx, s = t.current;
            switch (e) {
                case Ia:
                    const t = this.ctx;
                    i.fillStyle = t.fillStyle, i.strokeStyle = t.strokeStyle, s.fillColor = t.fillStyle, s.strokeColor = t.strokeStyle;
                    break;
                case Da:
                    const a = Qt.makeHexColor(n[0], n[1], n[2]);
                    i.fillStyle = a, i.strokeStyle = a, s.fillColor = a, s.strokeColor = a;
                    break;
                default:
                    throw new Ut("Unsupported paint type: ".concat(e))
            }
        }

        getPattern(t, e, n, i) {
            let s = n;
            i !== Ea && (s = Qt.transform(s, e.baseTransform), this.matrix && (s = Qt.transform(s, this.matrix)));
            const a = this.createPatternCanvas(e);
            let r = new DOMMatrix(s);
            r = r.translate(a.offsetX, a.offsetY), r = r.scale(1 / a.scaleX, 1 / a.scaleY);
            const o = t.createPattern(a.canvas, "repeat");
            return o.setTransform(r), o
        }
    }

    function Oa(t) {
        let {
            src: e,
            srcPos: n = 0,
            dest: i,
            width: s,
            height: a,
            nonBlackColor: r = 4294967295,
            inverseDecode: o = !1
        } = t;
        const l = Kt.isLittleEndian ? 4278190080 : 255, [c, u] = o ? [r, l] : [l, r], h = s >> 3, d = 7 & s,
            f = e.length;
        i = new Uint32Array(i.buffer);
        let p = 0;
        for (let g = 0; g < a; g++) {
            for (const s = n + h; n < s; n++) {
                const t = n < f ? e[n] : 255;
                i[p++] = 128 & t ? u : c, i[p++] = 64 & t ? u : c, i[p++] = 32 & t ? u : c, i[p++] = 16 & t ? u : c, i[p++] = 8 & t ? u : c, i[p++] = 4 & t ? u : c, i[p++] = 2 & t ? u : c, i[p++] = 1 & t ? u : c
            }
            if (0 === d) continue;
            const t = n < f ? e[n++] : 255;
            for (let e = 0; e < d; e++) i[p++] = t & 1 << 7 - e ? u : c
        }
        return {srcPos: n, destPos: p}
    }

    w(Na, "MAX_PATTERN_SIZE", 3e3);
    const za = 16;

    class Wa {
        constructor(t) {
            this.canvasFactory = t, this.cache = Object.create(null)
        }

        getCanvas(t, e, n) {
            let i;
            return void 0 !== this.cache[t] ? (i = this.cache[t], this.canvasFactory.reset(i, e, n)) : (i = this.canvasFactory.create(e, n), this.cache[t] = i), i
        }

        delete(t) {
            delete this.cache[t]
        }

        clear() {
            for (const t in this.cache) {
                const e = this.cache[t];
                this.canvasFactory.destroy(e), delete this.cache[t]
            }
        }
    }

    function ja(t, e, n, i, s, a, r, o, l, c) {
        const [u, h, d, f, p, g] = Te(t);
        if (0 === h && 0 === d) {
            const m = r * u + p, v = Math.round(m), b = o * f + g, y = Math.round(b), w = (r + l) * u + p,
                A = Math.abs(Math.round(w) - v) || 1, k = (o + c) * f + g, _ = Math.abs(Math.round(k) - y) || 1;
            return t.setTransform(Math.sign(u), 0, 0, Math.sign(f), v, y), t.drawImage(e, n, i, s, a, 0, 0, A, _), t.setTransform(u, h, d, f, p, g), [A, _]
        }
        if (0 === u && 0 === f) {
            const m = o * d + p, v = Math.round(m), b = r * h + g, y = Math.round(b), w = (o + c) * d + p,
                A = Math.abs(Math.round(w) - v) || 1, k = (r + l) * h + g, _ = Math.abs(Math.round(k) - y) || 1;
            return t.setTransform(0, Math.sign(h), Math.sign(d), 0, v, y), t.drawImage(e, n, i, s, a, 0, 0, _, A), t.setTransform(u, h, d, f, p, g), [_, A]
        }
        t.drawImage(e, n, i, s, a, r, o, l, c);
        return [Math.hypot(u, h) * l, Math.hypot(d, f) * c]
    }

    class Ba {
        constructor(t, e) {
            this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = I, this.textMatrixScale = 1, this.fontMatrix = D, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Y, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e])
        }

        clone() {
            const t = Object.create(this);
            return t.clipBox = this.clipBox.slice(), t
        }

        setCurrentPoint(t, e) {
            this.x = t, this.y = e
        }

        updatePathMinMax(t, e, n) {
            [e, n] = Qt.applyTransform([e, n], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, n), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, n)
        }

        updateRectMinMax(t, e) {
            const n = Qt.applyTransform(e, t), i = Qt.applyTransform(e.slice(2), t),
                s = Qt.applyTransform([e[0], e[3]], t), a = Qt.applyTransform([e[2], e[1]], t);
            this.minX = Math.min(this.minX, n[0], i[0], s[0], a[0]), this.minY = Math.min(this.minY, n[1], i[1], s[1], a[1]), this.maxX = Math.max(this.maxX, n[0], i[0], s[0], a[0]), this.maxY = Math.max(this.maxY, n[1], i[1], s[1], a[1])
        }

        updateScalingPathMinMax(t, e) {
            Qt.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3])
        }

        updateCurvePathMinMax(t, e, n, i, s, a, r, o, l, c) {
            const u = Qt.bezierBoundingBox(e, n, i, s, a, r, o, l, c);
            c || this.updateRectMinMax(t, u)
        }

        getPathBoundingBox() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sa,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const n = [this.minX, this.minY, this.maxX, this.maxY];
            if (t === xa) {
                e || Ft("Stroke bounding box must include transform.");
                const t = Qt.singularValueDecompose2dScale(e), i = t[0] * this.lineWidth / 2,
                    s = t[1] * this.lineWidth / 2;
                n[0] -= i, n[1] -= s, n[2] += i, n[3] += s
            }
            return n
        }

        updateClipFromPath() {
            const t = Qt.intersect(this.clipBox, this.getPathBoundingBox());
            this.startNewPathAndClipBox(t || [0, 0, 0, 0])
        }

        isEmptyClip() {
            return this.minX === 1 / 0
        }

        startNewPathAndClipBox(t) {
            this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0
        }

        getClippedPathBoundingBox() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sa,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return Qt.intersect(this.clipBox, this.getPathBoundingBox(t, e))
        }
    }

    function Ha(t, e) {
        if ("undefined" !== typeof ImageData && e instanceof ImageData) return void t.putImageData(e, 0, 0);
        const n = e.height, i = e.width, s = n % za, a = (n - s) / za, r = 0 === s ? a : a + 1,
            o = t.createImageData(i, za);
        let l, c = 0;
        const u = e.data, h = o.data;
        let d, f, p, g;
        if (e.kind === et.GRAYSCALE_1BPP) {
            const e = u.byteLength, n = new Uint32Array(h.buffer, 0, h.byteLength >> 2), g = n.length, m = i + 7 >> 3,
                v = 4294967295, b = Kt.isLittleEndian ? 4278190080 : 255;
            for (d = 0; d < r; d++) {
                for (p = d < a ? za : s, l = 0, f = 0; f < p; f++) {
                    const t = e - c;
                    let s = 0;
                    const a = t > m ? i : 8 * t - 7, r = -8 & a;
                    let o = 0, h = 0;
                    for (; s < r; s += 8) h = u[c++], n[l++] = 128 & h ? v : b, n[l++] = 64 & h ? v : b, n[l++] = 32 & h ? v : b, n[l++] = 16 & h ? v : b, n[l++] = 8 & h ? v : b, n[l++] = 4 & h ? v : b, n[l++] = 2 & h ? v : b, n[l++] = 1 & h ? v : b;
                    for (; s < a; s++) 0 === o && (h = u[c++], o = 128), n[l++] = h & o ? v : b, o >>= 1
                }
                for (; l < g;) n[l++] = 0;
                t.putImageData(o, 0, d * za)
            }
        } else if (e.kind === et.RGBA_32BPP) {
            for (f = 0, g = i * za * 4, d = 0; d < a; d++) h.set(u.subarray(c, c + g)), c += g, t.putImageData(o, 0, f), f += za;
            d < r && (g = i * s * 4, h.set(u.subarray(c, c + g)), t.putImageData(o, 0, f))
        } else {
            if (e.kind !== et.RGB_24BPP) throw new Error("bad image kind: ".concat(e.kind));
            for (p = za, g = i * p, d = 0; d < r; d++) {
                for (d >= a && (p = s, g = i * p), l = 0, f = g; f--;) h[l++] = u[c++], h[l++] = u[c++], h[l++] = u[c++], h[l++] = 255;
                t.putImageData(o, 0, d * za)
            }
        }
    }

    function Ua(t, e) {
        if (e.bitmap) return void t.drawImage(e.bitmap, 0, 0);
        const n = e.height, i = e.width, s = n % za, a = (n - s) / za, r = 0 === s ? a : a + 1,
            o = t.createImageData(i, za);
        let l = 0;
        const c = e.data, u = o.data;
        for (let h = 0; h < r; h++) {
            const e = h < a ? za : s;
            ({srcPos: l} = Oa({
                src: c,
                srcPos: l,
                dest: u,
                width: i,
                height: e,
                nonBlackColor: 0
            })), t.putImageData(o, 0, h * za)
        }
    }

    function Va(t, e) {
        const n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
        for (const i of n) void 0 !== t[i] && (e[i] = t[i]);
        void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()), e.lineDashOffset = t.lineDashOffset)
    }

    function Ga(t) {
        if (t.strokeStyle = t.fillStyle = "#000000", t.fillRule = "nonzero", t.globalAlpha = 1, t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.globalCompositeOperation = "source-over", t.font = "10px sans-serif", void 0 !== t.setLineDash && (t.setLineDash([]), t.lineDashOffset = 0), !F) {
            const {filter: e} = t;
            "none" !== e && "" !== e && (t.filter = "none")
        }
    }

    function qa(t, e) {
        if (e) return !0;
        const n = Qt.singularValueDecompose2dScale(t);
        n[0] = Math.fround(n[0]), n[1] = Math.fround(n[1]);
        const i = Math.fround((globalThis.devicePixelRatio || 1) * fe.PDF_TO_CSS_UNITS);
        return n[0] <= i && n[1] <= i
    }

    const Xa = ["butt", "round", "square"], Ka = ["miter", "round", "bevel"], Ya = {}, Qa = {};
    var $a = new WeakSet;

    class Ja {
        constructor(t, e, n, i, s, a, r, o) {
            let {optionalContentConfig: l, markedContentStack: c = null} = a;
            x(this, $a), this.ctx = t, this.current = new Ba(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = n, this.canvasFactory = i, this.filterFactory = s, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = c || [], this.optionalContentConfig = l, this.cachedCanvases = new Wa(this.canvasFactory), this.cachedPatterns = new Map, this.annotationCanvasMap = r, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = o, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = new Map
        }

        getObject(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return "string" === typeof t ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e
        }

        beginDrawing(t) {
            let {transform: e, viewport: n, transparency: i = !1, background: s = null} = t;
            const a = this.ctx.canvas.width, r = this.ctx.canvas.height, o = this.ctx.fillStyle;
            if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, a, r), this.ctx.fillStyle = o, i) {
                const t = this.cachedCanvases.getCanvas("transparent", a, r);
                this.compositeCtx = this.ctx, this.transparentCanvas = t.canvas, this.ctx = t.context, this.ctx.save(), this.ctx.transform(...Te(this.compositeCtx))
            }
            this.ctx.save(), Ga(this.ctx), e && (this.ctx.transform(...e), this.outputScaleX = e[0], this.outputScaleY = e[0]), this.ctx.transform(...n.transform), this.viewportScale = n.scale, this.baseTransform = Te(this.ctx)
        }

        executeOperatorList(t, e, n, i) {
            const s = t.argsArray, a = t.fnArray;
            let r = e || 0;
            const o = s.length;
            if (o === r) return r;
            const l = o - r > 10 && "function" === typeof n, c = l ? Date.now() + 15 : 0;
            let u = 0;
            const h = this.commonObjs, d = this.objs;
            let f;
            for (; ;) {
                if (void 0 !== i && r === i.nextBreakPoint) return i.breakIt(r, n), r;
                if (f = a[r], f !== Et.dependency) this[f].apply(this, s[r]); else for (const t of s[r]) {
                    const e = t.startsWith("g_") ? h : d;
                    if (!e.has(t)) return e.get(t, n), r
                }
                if (r++, r === o) return r;
                if (l && ++u > 10) {
                    if (Date.now() > c) return n(), r;
                    u = 0
                }
            }
        }

        endDrawing() {
            C($a, this, Za).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
            for (const t of this._cachedBitmapsMap.values()) {
                for (const e of t.values()) "undefined" !== typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
                t.clear()
            }
            this._cachedBitmapsMap.clear(), C($a, this, tr).call(this)
        }

        _scaleImage(t, e) {
            var n, i;
            const s = null !== (n = t.width) && void 0 !== n ? n : t.displayWidth,
                a = null !== (i = t.height) && void 0 !== i ? i : t.displayHeight;
            let r, o, l = Math.max(Math.hypot(e[0], e[1]), 1), c = Math.max(Math.hypot(e[2], e[3]), 1), u = s, h = a,
                d = "prescale1";
            for (; l > 2 && u > 1 || c > 2 && h > 1;) {
                let e = u, n = h;
                l > 2 && u > 1 && (e = u >= 16384 ? Math.floor(u / 2) - 1 || 1 : Math.ceil(u / 2), l /= u / e), c > 2 && h > 1 && (n = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, c /= h / n), r = this.cachedCanvases.getCanvas(d, e, n), o = r.context, o.clearRect(0, 0, e, n), o.drawImage(t, 0, 0, u, h, 0, 0, e, n), t = r.canvas, u = e, h = n, d = "prescale1" === d ? "prescale2" : "prescale1"
            }
            return {img: t, paintWidth: u, paintHeight: h}
        }

        _createMaskCanvas(t) {
            const e = this.ctx, {width: n, height: i} = t, s = this.current.fillColor, a = this.current.patternFill,
                r = Te(e);
            let o, l, c, u;
            if ((t.bitmap || t.data) && t.count > 1) {
                const e = t.bitmap || t.data.buffer;
                l = JSON.stringify(a ? r : [r.slice(0, 4), s]), o = this._cachedBitmapsMap.get(e), o || (o = new Map, this._cachedBitmapsMap.set(e, o));
                const n = o.get(l);
                if (n && !a) {
                    return {
                        canvas: n,
                        offsetX: Math.round(Math.min(r[0], r[2]) + r[4]),
                        offsetY: Math.round(Math.min(r[1], r[3]) + r[5])
                    }
                }
                c = n
            }
            c || (u = this.cachedCanvases.getCanvas("maskCanvas", n, i), Ua(u.context, t));
            let h = Qt.transform(r, [1 / n, 0, 0, -1 / i, 0, 0]);
            h = Qt.transform(h, [1, 0, 0, 1, 0, -i]);
            const [d, f, p, g] = Qt.getAxialAlignedBoundingBox([0, 0, n, i], h), m = Math.round(p - d) || 1,
                v = Math.round(g - f) || 1, b = this.cachedCanvases.getCanvas("fillCanvas", m, v), y = b.context, w = d,
                A = f;
            y.translate(-w, -A), y.transform(...h), c || (c = this._scaleImage(u.canvas, Pe(y)), c = c.img, o && a && o.set(l, c)), y.imageSmoothingEnabled = qa(Te(y), t.interpolate), ja(y, c, 0, 0, c.width, c.height, 0, 0, n, i), y.globalCompositeOperation = "source-in";
            const k = Qt.transform(Pe(y), [1, 0, 0, 1, -w, -A]);
            return y.fillStyle = a ? s.getPattern(e, this, k, Sa) : s, y.fillRect(0, 0, n, i), o && !a && (this.cachedCanvases.delete("fillCanvas"), o.set(l, b.canvas)), {
                canvas: b.canvas,
                offsetX: Math.round(w),
                offsetY: Math.round(A)
            }
        }

        setLineWidth(t) {
            t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t
        }

        setLineCap(t) {
            this.ctx.lineCap = Xa[t]
        }

        setLineJoin(t) {
            this.ctx.lineJoin = Ka[t]
        }

        setMiterLimit(t) {
            this.ctx.miterLimit = t
        }

        setDash(t, e) {
            const n = this.ctx;
            void 0 !== n.setLineDash && (n.setLineDash(t), n.lineDashOffset = e)
        }

        setRenderingIntent(t) {
        }

        setFlatness(t) {
        }

        setGState(t) {
            for (const [e, n] of t) switch (e) {
                case "LW":
                    this.setLineWidth(n);
                    break;
                case "LC":
                    this.setLineCap(n);
                    break;
                case "LJ":
                    this.setLineJoin(n);
                    break;
                case "ML":
                    this.setMiterLimit(n);
                    break;
                case "D":
                    this.setDash(n[0], n[1]);
                    break;
                case "RI":
                    this.setRenderingIntent(n);
                    break;
                case "FL":
                    this.setFlatness(n);
                    break;
                case "Font":
                    this.setFont(n[0], n[1]);
                    break;
                case "CA":
                    this.current.strokeAlpha = n;
                    break;
                case "ca":
                    this.current.fillAlpha = n, this.ctx.globalAlpha = n;
                    break;
                case "BM":
                    this.ctx.globalCompositeOperation = n;
                    break;
                case "SMask":
                    this.current.activeSMask = n ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                    break;
                case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n)
            }
        }

        get inSMaskMode() {
            return !!this.suspendedCtx
        }

        checkSMaskState() {
            const t = this.inSMaskMode;
            this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode()
        }

        beginSMaskMode() {
            if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
            const t = this.ctx.canvas.width, e = this.ctx.canvas.height, n = "smaskGroupAt" + this.groupLevel,
                i = this.cachedCanvases.getCanvas(n, t, e);
            this.suspendedCtx = this.ctx, this.ctx = i.context;
            const s = this.ctx;
            s.setTransform(...Te(this.suspendedCtx)), Va(this.suspendedCtx, s), function (t, e) {
                if (t._removeMirroring) throw new Error("Context is already forwarding operations.");
                t.__originalSave = t.save, t.__originalRestore = t.restore, t.__originalRotate = t.rotate, t.__originalScale = t.scale, t.__originalTranslate = t.translate, t.__originalTransform = t.transform, t.__originalSetTransform = t.setTransform, t.__originalResetTransform = t.resetTransform, t.__originalClip = t.clip, t.__originalMoveTo = t.moveTo, t.__originalLineTo = t.lineTo, t.__originalBezierCurveTo = t.bezierCurveTo, t.__originalRect = t.rect, t.__originalClosePath = t.closePath, t.__originalBeginPath = t.beginPath, t._removeMirroring = () => {
                    t.save = t.__originalSave, t.restore = t.__originalRestore, t.rotate = t.__originalRotate, t.scale = t.__originalScale, t.translate = t.__originalTranslate, t.transform = t.__originalTransform, t.setTransform = t.__originalSetTransform, t.resetTransform = t.__originalResetTransform, t.clip = t.__originalClip, t.moveTo = t.__originalMoveTo, t.lineTo = t.__originalLineTo, t.bezierCurveTo = t.__originalBezierCurveTo, t.rect = t.__originalRect, t.closePath = t.__originalClosePath, t.beginPath = t.__originalBeginPath, delete t._removeMirroring
                }, t.save = function () {
                    e.save(), this.__originalSave()
                }, t.restore = function () {
                    e.restore(), this.__originalRestore()
                }, t.translate = function (t, n) {
                    e.translate(t, n), this.__originalTranslate(t, n)
                }, t.scale = function (t, n) {
                    e.scale(t, n), this.__originalScale(t, n)
                }, t.transform = function (t, n, i, s, a, r) {
                    e.transform(t, n, i, s, a, r), this.__originalTransform(t, n, i, s, a, r)
                }, t.setTransform = function (t, n, i, s, a, r) {
                    e.setTransform(t, n, i, s, a, r), this.__originalSetTransform(t, n, i, s, a, r)
                }, t.resetTransform = function () {
                    e.resetTransform(), this.__originalResetTransform()
                }, t.rotate = function (t) {
                    e.rotate(t), this.__originalRotate(t)
                }, t.clip = function (t) {
                    e.clip(t), this.__originalClip(t)
                }, t.moveTo = function (t, n) {
                    e.moveTo(t, n), this.__originalMoveTo(t, n)
                }, t.lineTo = function (t, n) {
                    e.lineTo(t, n), this.__originalLineTo(t, n)
                }, t.bezierCurveTo = function (t, n, i, s, a, r) {
                    e.bezierCurveTo(t, n, i, s, a, r), this.__originalBezierCurveTo(t, n, i, s, a, r)
                }, t.rect = function (t, n, i, s) {
                    e.rect(t, n, i, s), this.__originalRect(t, n, i, s)
                }, t.closePath = function () {
                    e.closePath(), this.__originalClosePath()
                }, t.beginPath = function () {
                    e.beginPath(), this.__originalBeginPath()
                }
            }(s, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]])
        }

        endSMaskMode() {
            if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
            this.ctx._removeMirroring(), Va(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null
        }

        compose(t) {
            if (!this.current.activeSMask) return;
            t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
            const e = this.current.activeSMask, n = this.suspendedCtx;
            this.composeSMask(n, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore()
        }

        composeSMask(t, e, n, i) {
            const s = i[0], a = i[1], r = i[2] - s, o = i[3] - a;
            0 !== r && 0 !== o && (this.genericComposeSMask(e.context, n, r, o, e.subtype, e.backdrop, e.transferMap, s, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(n.canvas, 0, 0), t.restore())
        }

        genericComposeSMask(t, e, n, i, s, a, r, o, l, c, u) {
            let h = t.canvas, d = o - c, f = l - u;
            if (a) {
                const e = Qt.makeHexColor(...a);
                if (d < 0 || f < 0 || d + n > h.width || f + i > h.height) {
                    const t = this.cachedCanvases.getCanvas("maskExtension", n, i), s = t.context;
                    s.drawImage(h, -d, -f), s.globalCompositeOperation = "destination-atop", s.fillStyle = e, s.fillRect(0, 0, n, i), s.globalCompositeOperation = "source-over", h = t.canvas, d = f = 0
                } else {
                    t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
                    const s = new Path2D;
                    s.rect(d, f, n, i), t.clip(s), t.globalCompositeOperation = "destination-atop", t.fillStyle = e, t.fillRect(d, f, n, i), t.restore()
                }
            }
            e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), "Alpha" === s && r ? e.filter = this.filterFactory.addAlphaFilter(r) : "Luminosity" === s && (e.filter = this.filterFactory.addLuminosityFilter(r));
            const p = new Path2D;
            p.rect(o, l, n, i), e.clip(p), e.globalCompositeOperation = "destination-in", e.drawImage(h, d, f, n, i, o, l, n, i), e.restore()
        }

        save() {
            this.inSMaskMode ? (Va(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
            const t = this.current;
            this.stateStack.push(t), this.current = t.clone()
        }

        restore() {
            0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Va(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null)
        }

        transform(t, e, n, i, s, a) {
            this.ctx.transform(t, e, n, i, s, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null
        }

        constructPath(t, e, n) {
            const i = this.ctx, s = this.current;
            let a, r, o = s.x, l = s.y;
            const c = Te(i), u = 0 === c[0] && 0 === c[3] || 0 === c[1] && 0 === c[2], h = u ? n.slice(0) : null;
            for (let d = 0, f = 0, p = t.length; d < p; d++) switch (0 | t[d]) {
                case Et.rectangle:
                    o = e[f++], l = e[f++];
                    const t = e[f++], n = e[f++], d = o + t, p = l + n;
                    i.moveTo(o, l), 0 === t || 0 === n ? i.lineTo(d, p) : (i.lineTo(d, l), i.lineTo(d, p), i.lineTo(o, p)), u || s.updateRectMinMax(c, [o, l, d, p]), i.closePath();
                    break;
                case Et.moveTo:
                    o = e[f++], l = e[f++], i.moveTo(o, l), u || s.updatePathMinMax(c, o, l);
                    break;
                case Et.lineTo:
                    o = e[f++], l = e[f++], i.lineTo(o, l), u || s.updatePathMinMax(c, o, l);
                    break;
                case Et.curveTo:
                    a = o, r = l, o = e[f + 4], l = e[f + 5], i.bezierCurveTo(e[f], e[f + 1], e[f + 2], e[f + 3], o, l), s.updateCurvePathMinMax(c, a, r, e[f], e[f + 1], e[f + 2], e[f + 3], o, l, h), f += 6;
                    break;
                case Et.curveTo2:
                    a = o, r = l, i.bezierCurveTo(o, l, e[f], e[f + 1], e[f + 2], e[f + 3]), s.updateCurvePathMinMax(c, a, r, o, l, e[f], e[f + 1], e[f + 2], e[f + 3], h), o = e[f + 2], l = e[f + 3], f += 4;
                    break;
                case Et.curveTo3:
                    a = o, r = l, o = e[f + 2], l = e[f + 3], i.bezierCurveTo(e[f], e[f + 1], o, l, o, l), s.updateCurvePathMinMax(c, a, r, e[f], e[f + 1], o, l, o, l, h), f += 4;
                    break;
                case Et.closePath:
                    i.closePath()
            }
            u && s.updateScalingPathMinMax(c, h), s.setCurrentPoint(o, l)
        }

        closePath() {
            this.ctx.closePath()
        }

        stroke() {
            let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            const e = this.ctx, n = this.current.strokeColor;
            e.globalAlpha = this.current.strokeAlpha, this.contentVisible && ("object" === typeof n && null !== n && void 0 !== n && n.getPattern ? (e.save(), e.strokeStyle = n.getPattern(e, this, Pe(e), xa), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha
        }

        closeStroke() {
            this.closePath(), this.stroke()
        }

        fill() {
            let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            const e = this.ctx, n = this.current.fillColor;
            let i = !1;
            this.current.patternFill && (e.save(), e.fillStyle = n.getPattern(e, this, Pe(e), Sa), i = !0);
            const s = this.current.getClippedPathBoundingBox();
            this.contentVisible && null !== s && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), i && e.restore(), t && this.consumePath(s)
        }

        eoFill() {
            this.pendingEOFill = !0, this.fill()
        }

        fillStroke() {
            this.fill(!1), this.stroke(!1), this.consumePath()
        }

        eoFillStroke() {
            this.pendingEOFill = !0, this.fillStroke()
        }

        closeFillStroke() {
            this.closePath(), this.fillStroke()
        }

        closeEOFillStroke() {
            this.pendingEOFill = !0, this.closePath(), this.fillStroke()
        }

        endPath() {
            this.consumePath()
        }

        clip() {
            this.pendingClip = Ya
        }

        eoClip() {
            this.pendingClip = Qa
        }

        beginText() {
            this.current.textMatrix = I, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
        }

        endText() {
            const t = this.pendingTextPaths, e = this.ctx;
            if (void 0 !== t) {
                e.save(), e.beginPath();
                for (const n of t) e.setTransform(...n.transform), e.translate(n.x, n.y), n.addToPath(e, n.fontSize);
                e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths
            } else e.beginPath()
        }

        setCharSpacing(t) {
            this.current.charSpacing = t
        }

        setWordSpacing(t) {
            this.current.wordSpacing = t
        }

        setHScale(t) {
            this.current.textHScale = t / 100
        }

        setLeading(t) {
            this.current.leading = -t
        }

        setFont(t, e) {
            var n;
            const i = this.commonObjs.get(t), s = this.current;
            if (!i) throw new Error("Can't find font for ".concat(t));
            if (s.fontMatrix = i.fontMatrix || D, 0 !== s.fontMatrix[0] && 0 !== s.fontMatrix[3] || Lt("Invalid font matrix for font " + t), e < 0 ? (e = -e, s.fontDirection = -1) : s.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font) return;
            const a = i.loadedName || "sans-serif",
                r = (null === (n = i.systemFontInfo) || void 0 === n ? void 0 : n.css) || '"'.concat(a, '", ').concat(i.fallbackName);
            let o = "normal";
            i.black ? o = "900" : i.bold && (o = "bold");
            const l = i.italic ? "italic" : "normal";
            let c = e;
            e < 16 ? c = 16 : e > 100 && (c = 100), this.current.fontSizeScale = e / c, this.ctx.font = "".concat(l, " ").concat(o, " ").concat(c, "px ").concat(r)
        }

        setTextRenderingMode(t) {
            this.current.textRenderingMode = t
        }

        setTextRise(t) {
            this.current.textRise = t
        }

        moveText(t, e) {
            this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e
        }

        setLeadingMoveText(t, e) {
            this.setLeading(-e), this.moveText(t, e)
        }

        setTextMatrix(t, e, n, i, s, a) {
            this.current.textMatrix = [t, e, n, i, s, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
        }

        nextLine() {
            this.moveText(0, this.current.leading)
        }

        paintChar(t, e, n, i) {
            const s = this.ctx, a = this.current, r = a.font, o = a.textRenderingMode, l = a.fontSize / a.fontSizeScale,
                c = o & Z, u = !!(o & tt), h = a.patternFill && !r.missingFile;
            let d;
            if ((r.disableFontFace || u || h) && (d = r.getPathGenerator(this.commonObjs, t)), r.disableFontFace || h ? (s.save(), s.translate(e, n), s.beginPath(), d(s, l), i && s.setTransform(...i), c !== Y && c !== $ || s.fill(), c !== Q && c !== $ || s.stroke(), s.restore()) : (c !== Y && c !== $ || s.fillText(t, e, n), c !== Q && c !== $ || s.strokeText(t, e, n)), u) {
                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                    transform: Te(s),
                    x: e,
                    y: n,
                    fontSize: l,
                    addToPath: d
                })
            }
        }

        get isFontSubpixelAAEnabled() {
            const {context: t} = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            t.scale(1.5, 1), t.fillText("I", 0, 10);
            const e = t.getImageData(0, 0, 10, 10).data;
            let n = !1;
            for (let i = 3; i < e.length; i += 4) if (e[i] > 0 && e[i] < 255) {
                n = !0;
                break
            }
            return Nt(this, "isFontSubpixelAAEnabled", n)
        }

        showText(t) {
            const e = this.current, n = e.font;
            if (n.isType3Font) return this.showType3Text(t);
            const i = e.fontSize;
            if (0 === i) return;
            const s = this.ctx, a = e.fontSizeScale, r = e.charSpacing, o = e.wordSpacing, l = e.fontDirection,
                c = e.textHScale * l, u = t.length, h = n.vertical, d = h ? 1 : -1, f = n.defaultVMetrics,
                p = i * e.fontMatrix[0], g = e.textRenderingMode === Y && !n.disableFontFace && !e.patternFill;
            let m;
            if (s.save(), s.transform(...e.textMatrix), s.translate(e.x, e.y + e.textRise), l > 0 ? s.scale(c, -1) : s.scale(c, 1), e.patternFill) {
                s.save();
                const t = e.fillColor.getPattern(s, this, Pe(s), Sa);
                m = Te(s), s.restore(), s.fillStyle = t
            }
            let v = e.lineWidth;
            const b = e.textMatrixScale;
            if (0 === b || 0 === v) {
                const t = e.textRenderingMode & Z;
                t !== Q && t !== $ || (v = this.getSinglePixelWidth())
            } else v /= b;
            if (1 !== a && (s.scale(a, a), v /= a), s.lineWidth = v, n.isInvalidPDFjsFont) {
                const n = [];
                let i = 0;
                for (const e of t) n.push(e.unicode), i += e.width;
                return s.fillText(n.join(""), 0, 0), e.x += i * p * c, s.restore(), void this.compose()
            }
            let y, w = 0;
            for (y = 0; y < u; ++y) {
                const e = t[y];
                if ("number" === typeof e) {
                    w += d * e * i / 1e3;
                    continue
                }
                let c = !1;
                const u = (e.isSpace ? o : 0) + r, v = e.fontChar, b = e.accent;
                let A, k, _ = e.width;
                if (h) {
                    const t = e.vmetric || f, n = -(e.vmetric ? t[1] : .5 * _) * p, i = t[2] * p;
                    _ = t ? -t[0] : _, A = n / a, k = (w + i) / a
                } else A = w / a, k = 0;
                if (n.remeasure && _ > 0) {
                    const t = 1e3 * s.measureText(v).width / i * a;
                    if (_ < t && this.isFontSubpixelAAEnabled) {
                        const e = _ / t;
                        c = !0, s.save(), s.scale(e, 1), A /= e
                    } else _ !== t && (A += (_ - t) / 2e3 * i / a)
                }
                if (this.contentVisible && (e.isInFont || n.missingFile)) if (g && !b) s.fillText(v, A, k); else if (this.paintChar(v, A, k, m), b) {
                    const t = A + i * b.offset.x / a, e = k - i * b.offset.y / a;
                    this.paintChar(b.fontChar, t, e, m)
                }
                w += h ? _ * p - u * l : _ * p + u * l, c && s.restore()
            }
            h ? e.y -= w : e.x += w * c, s.restore(), this.compose()
        }

        showType3Text(t) {
            const e = this.ctx, n = this.current, i = n.font, s = n.fontSize, a = n.fontDirection,
                r = i.vertical ? 1 : -1, o = n.charSpacing, l = n.wordSpacing, c = n.textHScale * a,
                u = n.fontMatrix || D, h = t.length;
            let d, f, p, g;
            if (!(n.textRenderingMode === J) && 0 !== s) {
                for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...n.textMatrix), e.translate(n.x, n.y), e.scale(c, a), d = 0; d < h; ++d) {
                    if (f = t[d], "number" === typeof f) {
                        g = r * f * s / 1e3, this.ctx.translate(g, 0), n.x += g * c;
                        continue
                    }
                    const a = (f.isSpace ? l : 0) + o, h = i.charProcOperatorList[f.operatorListId];
                    if (!h) {
                        Lt('Type3 character "'.concat(f.operatorListId, '" is not available.'));
                        continue
                    }
                    this.contentVisible && (this.processingType3 = f, this.save(), e.scale(s, s), e.transform(...u), this.executeOperatorList(h), this.restore());
                    p = Qt.applyTransform([f.width, 0], u)[0] * s + a, e.translate(p, 0), n.x += p * c
                }
                e.restore(), this.processingType3 = null
            }
        }

        setCharWidth(t, e) {
        }

        setCharWidthAndBounds(t, e, n, i, s, a) {
            this.ctx.rect(n, i, s - n, a - i), this.ctx.clip(), this.endPath()
        }

        getColorN_Pattern(t) {
            let e;
            if ("TilingPattern" === t[0]) {
                const n = t[1], i = this.baseTransform || Te(this.ctx), s = {
                    createCanvasGraphics: t => new Ja(t, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                        optionalContentConfig: this.optionalContentConfig,
                        markedContentStack: this.markedContentStack
                    })
                };
                e = new Na(t, n, this.ctx, s, i)
            } else e = this._getPattern(t[1], t[2]);
            return e
        }

        setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments)
        }

        setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
        }

        setStrokeRGBColor(t, e, n) {
            this.ctx.strokeStyle = this.current.strokeColor = Qt.makeHexColor(t, e, n)
        }

        setStrokeTransparent() {
            this.ctx.strokeStyle = this.current.strokeColor = "transparent"
        }

        setFillRGBColor(t, e, n) {
            this.ctx.fillStyle = this.current.fillColor = Qt.makeHexColor(t, e, n), this.current.patternFill = !1
        }

        setFillTransparent() {
            this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1
        }

        _getPattern(t) {
            let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.cachedPatterns.has(t) ? e = this.cachedPatterns.get(t) : (e = function (t) {
                switch (t[0]) {
                    case "RadialAxial":
                        return new Ta(t);
                    case "Mesh":
                        return new La(t);
                    case "Dummy":
                        return new Fa
                }
                throw new Error("Unknown IR type: ".concat(t[0]))
            }(this.getObject(t)), this.cachedPatterns.set(t, e)), n && (e.matrix = n), e
        }

        shadingFill(t) {
            if (!this.contentVisible) return;
            const e = this.ctx;
            this.save();
            const n = this._getPattern(t);
            e.fillStyle = n.getPattern(e, this, Pe(e), Ea);
            const i = Pe(e);
            if (i) {
                const {width: t, height: n} = e.canvas, [s, a, r, o] = Qt.getAxialAlignedBoundingBox([0, 0, t, n], i);
                this.ctx.fillRect(s, a, r - s, o - a)
            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            this.compose(this.current.getClippedPathBoundingBox()), this.restore()
        }

        beginInlineImage() {
            Ft("Should not call beginInlineImage")
        }

        beginImageData() {
            Ft("Should not call beginImageData")
        }

        paintFormXObjectBegin(t, e) {
            if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = Te(this.ctx), e)) {
                const t = e[2] - e[0], n = e[3] - e[1];
                this.ctx.rect(e[0], e[1], t, n), this.current.updateRectMinMax(Te(this.ctx), e), this.clip(), this.endPath()
            }
        }

        paintFormXObjectEnd() {
            this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop())
        }

        beginGroup(t) {
            if (!this.contentVisible) return;
            this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
            const e = this.ctx;
            t.isolated || Rt("TODO: Support non-isolated groups."), t.knockout && Lt("Knockout groups not supported.");
            const n = Te(e);
            if (t.matrix && e.transform(...t.matrix), !t.bbox) throw new Error("Bounding box is required.");
            let i = Qt.getAxialAlignedBoundingBox(t.bbox, Te(e));
            const s = [0, 0, e.canvas.width, e.canvas.height];
            i = Qt.intersect(i, s) || [0, 0, 0, 0];
            const a = Math.floor(i[0]), r = Math.floor(i[1]), o = Math.max(Math.ceil(i[2]) - a, 1),
                l = Math.max(Math.ceil(i[3]) - r, 1);
            this.current.startNewPathAndClipBox([0, 0, o, l]);
            let c = "groupAt" + this.groupLevel;
            t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
            const u = this.cachedCanvases.getCanvas(c, o, l), h = u.context;
            h.translate(-a, -r), h.transform(...n), t.smask ? this.smaskStack.push({
                canvas: u.canvas,
                context: h,
                offsetX: a,
                offsetY: r,
                subtype: t.smask.subtype,
                backdrop: t.smask.backdrop,
                transferMap: t.smask.transferMap || null,
                startTransformInverse: null
            }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, r), e.save()), Va(e, h), this.ctx = h, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++
        }

        endGroup(t) {
            if (!this.contentVisible) return;
            this.groupLevel--;
            const e = this.ctx, n = this.groupStack.pop();
            if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, t.smask) this.tempSMask = this.smaskStack.pop(), this.restore(); else {
                this.ctx.restore();
                const t = Te(this.ctx);
                this.restore(), this.ctx.save(), this.ctx.setTransform(...t);
                const n = Qt.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
                this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n)
            }
        }

        beginAnnotation(t, e, n, i, s) {
            if (C($a, this, Za).call(this), Ga(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
                const i = e[2] - e[0], a = e[3] - e[1];
                if (s && this.annotationCanvasMap) {
                    (n = n.slice())[4] -= e[0], n[5] -= e[1], (e = e.slice())[0] = e[1] = 0, e[2] = i, e[3] = a;
                    const [s, r] = Qt.singularValueDecompose2dScale(Te(this.ctx)), {viewportScale: o} = this,
                        l = Math.ceil(i * this.outputScaleX * o), c = Math.ceil(a * this.outputScaleY * o);
                    this.annotationCanvas = this.canvasFactory.create(l, c);
                    const {canvas: u, context: h} = this.annotationCanvas;
                    this.annotationCanvasMap.set(t, u), this.annotationCanvas.savedCtx = this.ctx, this.ctx = h, this.ctx.save(), this.ctx.setTransform(s, 0, 0, -r, 0, a * r), Ga(this.ctx)
                } else Ga(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], i, a), this.ctx.clip(), this.ctx.beginPath()
            }
            this.current = new Ba(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...n), this.transform(...i)
        }

        endAnnotation() {
            this.annotationCanvas && (this.ctx.restore(), C($a, this, tr).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas)
        }

        paintImageMaskXObject(t) {
            if (!this.contentVisible) return;
            const e = t.count;
            (t = this.getObject(t.data, t)).count = e;
            const n = this.ctx, i = this.processingType3;
            if (i && (void 0 === i.compiled && (i.compiled = function (t) {
                const {width: e, height: n} = t;
                if (e > 1e3 || n > 1e3) return null;
                const i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), s = e + 1;
                let a, r, o, l = new Uint8Array(s * (n + 1));
                const c = e + 7 & -8;
                let u = new Uint8Array(c * n), h = 0;
                for (const g of t.data) {
                    let t = 128;
                    for (; t > 0;) u[h++] = g & t ? 0 : 255, t >>= 1
                }
                let d = 0;
                for (h = 0, 0 !== u[h] && (l[0] = 1, ++d), r = 1; r < e; r++) u[h] !== u[h + 1] && (l[r] = u[h] ? 2 : 1, ++d), h++;
                for (0 !== u[h] && (l[r] = 2, ++d), a = 1; a < n; a++) {
                    h = a * c, o = a * s, u[h - c] !== u[h] && (l[o] = u[h] ? 1 : 8, ++d);
                    let t = (u[h] ? 4 : 0) + (u[h - c] ? 8 : 0);
                    for (r = 1; r < e; r++) t = (t >> 2) + (u[h + 1] ? 4 : 0) + (u[h - c + 1] ? 8 : 0), i[t] && (l[o + r] = i[t], ++d), h++;
                    if (u[h - c] !== u[h] && (l[o + r] = u[h] ? 2 : 4, ++d), d > 1e3) return null
                }
                for (h = c * (n - 1), o = a * s, 0 !== u[h] && (l[o] = 8, ++d), r = 1; r < e; r++) u[h] !== u[h + 1] && (l[o + r] = u[h] ? 4 : 8, ++d), h++;
                if (0 !== u[h] && (l[o + r] = 4, ++d), d > 1e3) return null;
                const f = new Int32Array([0, s, -1, 0, -s, 0, 0, 0, 1]), p = new Path2D;
                for (a = 0; d && a <= n; a++) {
                    let t = a * s;
                    const n = t + e;
                    for (; t < n && !l[t];) t++;
                    if (t === n) continue;
                    p.moveTo(t % s, a);
                    const i = t;
                    let r = l[t];
                    do {
                        const e = f[r];
                        do {
                            t += e
                        } while (!l[t]);
                        const n = l[t];
                        5 !== n && 10 !== n ? (r = n, l[t] = 0) : (r = n & 51 * r >> 4, l[t] &= r >> 2 | r << 2), p.lineTo(t % s, t / s | 0), l[t] || --d
                    } while (i !== t);
                    --a
                }
                return u = null, l = null, function (t) {
                    t.save(), t.scale(1 / e, -1 / n), t.translate(0, -n), t.fill(p), t.beginPath(), t.restore()
                }
            }(t)), i.compiled)) return void i.compiled(n);
            const s = this._createMaskCanvas(t), a = s.canvas;
            n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, s.offsetX, s.offsetY), n.restore(), this.compose()
        }

        paintImageMaskXObjectRepeat(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                s = arguments.length > 4 ? arguments[4] : void 0, a = arguments.length > 5 ? arguments[5] : void 0;
            if (!this.contentVisible) return;
            t = this.getObject(t.data, t);
            const r = this.ctx;
            r.save();
            const o = Te(r);
            r.transform(e, n, i, s, 0, 0);
            const l = this._createMaskCanvas(t);
            r.setTransform(1, 0, 0, 1, l.offsetX - o[4], l.offsetY - o[5]);
            for (let c = 0, u = a.length; c < u; c += 2) {
                const t = Qt.transform(o, [e, n, i, s, a[c], a[c + 1]]), [u, h] = Qt.applyTransform([0, 0], t);
                r.drawImage(l.canvas, u, h)
            }
            r.restore(), this.compose()
        }

        paintImageMaskXObjectGroup(t) {
            if (!this.contentVisible) return;
            const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
            for (const s of t) {
                const {data: t, width: a, height: r, transform: o} = s,
                    l = this.cachedCanvases.getCanvas("maskCanvas", a, r), c = l.context;
                c.save();
                Ua(c, this.getObject(t, s)), c.globalCompositeOperation = "source-in", c.fillStyle = i ? n.getPattern(c, this, Pe(e), Sa) : n, c.fillRect(0, 0, a, r), c.restore(), e.save(), e.transform(...o), e.scale(1, -1), ja(e, l.canvas, 0, 0, a, r, 0, -1, 1, 1), e.restore()
            }
            this.compose()
        }

        paintImageXObject(t) {
            if (!this.contentVisible) return;
            const e = this.getObject(t);
            e ? this.paintInlineImageXObject(e) : Lt("Dependent image isn't ready yet")
        }

        paintImageXObjectRepeat(t, e, n, i) {
            if (!this.contentVisible) return;
            const s = this.getObject(t);
            if (!s) return void Lt("Dependent image isn't ready yet");
            const a = s.width, r = s.height, o = [];
            for (let l = 0, c = i.length; l < c; l += 2) o.push({
                transform: [e, 0, 0, n, i[l], i[l + 1]],
                x: 0,
                y: 0,
                w: a,
                h: r
            });
            this.paintInlineImageXObjectGroup(s, o)
        }

        applyTransferMapsToCanvas(t) {
            return "none" !== this.current.transferMaps && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas
        }

        applyTransferMapsToBitmap(t) {
            if ("none" === this.current.transferMaps) return t.bitmap;
            const {bitmap: e, width: n, height: i} = t, s = this.cachedCanvases.getCanvas("inlineImage", n, i),
                a = s.context;
            return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", s.canvas
        }

        paintInlineImageXObject(t) {
            if (!this.contentVisible) return;
            const e = t.width, n = t.height, i = this.ctx;
            if (this.save(), !F) {
                const {filter: t} = i;
                "none" !== t && "" !== t && (i.filter = "none")
            }
            let s;
            if (i.scale(1 / e, -1 / n), t.bitmap) s = this.applyTransferMapsToBitmap(t); else if ("function" === typeof HTMLElement && t instanceof HTMLElement || !t.data) s = t; else {
                const i = this.cachedCanvases.getCanvas("inlineImage", e, n).context;
                Ha(i, t), s = this.applyTransferMapsToCanvas(i)
            }
            const a = this._scaleImage(s, Pe(i));
            i.imageSmoothingEnabled = qa(Te(i), t.interpolate), ja(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -n, e, n), this.compose(), this.restore()
        }

        paintInlineImageXObjectGroup(t, e) {
            if (!this.contentVisible) return;
            const n = this.ctx;
            let i;
            if (t.bitmap) i = t.bitmap; else {
                const e = t.width, n = t.height, s = this.cachedCanvases.getCanvas("inlineImage", e, n).context;
                Ha(s, t), i = this.applyTransferMapsToCanvas(s)
            }
            for (const s of e) n.save(), n.transform(...s.transform), n.scale(1, -1), ja(n, i, s.x, s.y, s.w, s.h, 0, -1, 1, 1), n.restore();
            this.compose()
        }

        paintSolidColorImageMask() {
            this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose())
        }

        markPoint(t) {
        }

        markPointProps(t, e) {
        }

        beginMarkedContent(t) {
            this.markedContentStack.push({visible: !0})
        }

        beginMarkedContentProps(t, e) {
            "OC" === t ? this.markedContentStack.push({visible: this.optionalContentConfig.isVisible(e)}) : this.markedContentStack.push({visible: !0}), this.contentVisible = this.isContentVisible()
        }

        endMarkedContent() {
            this.markedContentStack.pop(), this.contentVisible = this.isContentVisible()
        }

        beginCompat() {
        }

        endCompat() {
        }

        consumePath(t) {
            const e = this.current.isEmptyClip();
            this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
            const n = this.ctx;
            this.pendingClip && (e || (this.pendingClip === Qa ? n.clip("evenodd") : n.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), n.beginPath()
        }

        getSinglePixelWidth() {
            if (!this._cachedGetSinglePixelWidth) {
                const t = Te(this.ctx);
                if (0 === t[1] && 0 === t[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3])); else {
                    const e = Math.abs(t[0] * t[3] - t[2] * t[1]), n = Math.hypot(t[0], t[2]),
                        i = Math.hypot(t[1], t[3]);
                    this._cachedGetSinglePixelWidth = Math.max(n, i) / e
                }
            }
            return this._cachedGetSinglePixelWidth
        }

        getScaleForStroking() {
            if (-1 === this._cachedScaleForStroking[0]) {
                const {lineWidth: t} = this.current, {a: e, b: n, c: i, d: s} = this.ctx.getTransform();
                let a, r;
                if (0 === n && 0 === i) {
                    const n = Math.abs(e), i = Math.abs(s);
                    if (n === i) if (0 === t) a = r = 1 / n; else {
                        const e = n * t;
                        a = r = e < 1 ? 1 / e : 1
                    } else if (0 === t) a = 1 / n, r = 1 / i; else {
                        const e = n * t, s = i * t;
                        a = e < 1 ? 1 / e : 1, r = s < 1 ? 1 / s : 1
                    }
                } else {
                    const o = Math.abs(e * s - n * i), l = Math.hypot(e, n), c = Math.hypot(i, s);
                    if (0 === t) a = c / o, r = l / o; else {
                        const e = t * o;
                        a = c > e ? c / e : 1, r = l > e ? l / e : 1
                    }
                }
                this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = r
            }
            return this._cachedScaleForStroking
        }

        rescaleAndStroke(t) {
            const {ctx: e} = this, {lineWidth: n} = this.current, [i, s] = this.getScaleForStroking();
            if (e.lineWidth = n || 1, 1 === i && 1 === s) return void e.stroke();
            const a = e.getLineDash();
            if (t && e.save(), e.scale(i, s), a.length > 0) {
                const t = Math.max(i, s);
                e.setLineDash(a.map((e => e / t))), e.lineDashOffset /= t
            }
            e.stroke(), t && e.restore()
        }

        isContentVisible() {
            for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
            return !0
        }
    }

    function Za() {
        for (; this.stateStack.length || this.inSMaskMode;) this.restore();
        this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null)
    }

    function tr() {
        if (this.pageColors) {
            const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if ("none" !== t) {
                const e = this.ctx.filter;
                this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e
            }
        }
    }

    for (const Gg in Et) void 0 !== Ja.prototype[Gg] && (Ja.prototype[Et[Gg]] = Ja.prototype[Gg]);

    class er {
        static get workerPort() {
            return C(er, this, nr)._
        }

        static set workerPort(t) {
            if (!("undefined" !== typeof Worker && t instanceof Worker) && null !== t) throw new Error("Invalid `workerPort` type.");
            nr._ = C(er, this, t)
        }

        static get workerSrc() {
            return C(er, this, ir)._
        }

        static set workerSrc(t) {
            if ("string" !== typeof t) throw new Error("Invalid `workerSrc` type.");
            ir._ = C(er, this, t)
        }
    }

    var nr = {_: null}, ir = {_: ""};
    const sr = 1, ar = 2, rr = 1, or = 2, lr = 3, cr = 4, ur = 5, hr = 6, dr = 7, fr = 8;

    function pr(t) {
        switch (t instanceof Error || "object" === typeof t && null !== t || Ft('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t.name) {
            case "AbortException":
                return new Vt(t.message);
            case "MissingPDFException":
                return new Bt(t.message);
            case "PasswordException":
                return new zt(t.message, t.code);
            case "UnexpectedResponseException":
                return new Ht(t.message, t.status);
            case "UnknownErrorException":
                return new Wt(t.message, t.details);
            default:
                return new Wt(t.message, t.toString())
        }
    }

    var gr = new WeakMap, mr = new WeakSet;

    class vr {
        constructor(t, e, n) {
            x(this, mr), E(this, gr, new AbortController), this.sourceName = t, this.targetName = e, this.comObj = n, this.callbackId = 1, this.streamId = 1, this.streamSinks = Object.create(null), this.streamControllers = Object.create(null), this.callbackCapabilities = Object.create(null), this.actionHandler = Object.create(null), n.addEventListener("message", C(mr, this, br).bind(this), {signal: T(gr, this).signal})
        }

        on(t, e) {
            const n = this.actionHandler;
            if (n[t]) throw new Error('There is already an actionName called "'.concat(t, '"'));
            n[t] = e
        }

        send(t, e, n) {
            this.comObj.postMessage({sourceName: this.sourceName, targetName: this.targetName, action: t, data: e}, n)
        }

        sendWithPromise(t, e, n) {
            const i = this.callbackId++, s = Promise.withResolvers();
            this.callbackCapabilities[i] = s;
            try {
                this.comObj.postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: t,
                    callbackId: i,
                    data: e
                }, n)
            } catch (a) {
                s.reject(a)
            }
            return s.promise
        }

        sendWithStream(t, e, n, i) {
            const s = this.streamId++, a = this.sourceName, r = this.targetName, o = this.comObj;
            return new ReadableStream({
                start: n => {
                    const l = Promise.withResolvers();
                    return this.streamControllers[s] = {
                        controller: n,
                        startCall: l,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: !1
                    }, o.postMessage({
                        sourceName: a,
                        targetName: r,
                        action: t,
                        streamId: s,
                        data: e,
                        desiredSize: n.desiredSize
                    }, i), l.promise
                }, pull: t => {
                    const e = Promise.withResolvers();
                    return this.streamControllers[s].pullCall = e, o.postMessage({
                        sourceName: a,
                        targetName: r,
                        stream: hr,
                        streamId: s,
                        desiredSize: t.desiredSize
                    }), e.promise
                }, cancel: t => {
                    It(t instanceof Error, "cancel must have a valid reason");
                    const e = Promise.withResolvers();
                    return this.streamControllers[s].cancelCall = e, this.streamControllers[s].isClosed = !0, o.postMessage({
                        sourceName: a,
                        targetName: r,
                        stream: rr,
                        streamId: s,
                        reason: pr(t)
                    }), e.promise
                }
            }, n)
        }

        destroy() {
            var t;
            null === (t = T(gr, this)) || void 0 === t || t.abort(), P(gr, this, null)
        }
    }

    function br(t) {
        let {data: e} = t;
        if (e.targetName !== this.sourceName) return;
        if (e.stream) return void C(mr, this, wr).call(this, e);
        if (e.callback) {
            const t = e.callbackId, n = this.callbackCapabilities[t];
            if (!n) throw new Error("Cannot resolve callback ".concat(t));
            if (delete this.callbackCapabilities[t], e.callback === sr) n.resolve(e.data); else {
                if (e.callback !== ar) throw new Error("Unexpected callback case");
                n.reject(pr(e.reason))
            }
            return
        }
        const n = this.actionHandler[e.action];
        if (!n) throw new Error("Unknown action from worker: ".concat(e.action));
        if (e.callbackId) {
            const t = this.sourceName, i = e.sourceName, s = this.comObj;
            new Promise((function (t) {
                t(n(e.data))
            })).then((function (n) {
                s.postMessage({sourceName: t, targetName: i, callback: sr, callbackId: e.callbackId, data: n})
            }), (function (n) {
                s.postMessage({sourceName: t, targetName: i, callback: ar, callbackId: e.callbackId, reason: pr(n)})
            }))
        } else e.streamId ? C(mr, this, yr).call(this, e) : n(e.data)
    }

    function yr(t) {
        const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, a = this,
            r = this.actionHandler[t.action], o = {
                enqueue(t) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    if (this.isCancelled) return;
                    const o = this.desiredSize;
                    this.desiredSize -= a, o > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), s.postMessage({
                        sourceName: n,
                        targetName: i,
                        stream: cr,
                        streamId: e,
                        chunk: t
                    }, r)
                },
                close() {
                    this.isCancelled || (this.isCancelled = !0, s.postMessage({
                        sourceName: n,
                        targetName: i,
                        stream: lr,
                        streamId: e
                    }), delete a.streamSinks[e])
                },
                error(t) {
                    It(t instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, s.postMessage({
                        sourceName: n,
                        targetName: i,
                        stream: ur,
                        streamId: e,
                        reason: pr(t)
                    }))
                },
                sinkCapability: Promise.withResolvers(),
                onPull: null,
                onCancel: null,
                isCancelled: !1,
                desiredSize: t.desiredSize,
                ready: null
            };
        o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, new Promise((function (e) {
            e(r(t.data, o))
        })).then((function () {
            s.postMessage({sourceName: n, targetName: i, stream: fr, streamId: e, success: !0})
        }), (function (t) {
            s.postMessage({sourceName: n, targetName: i, stream: fr, streamId: e, reason: pr(t)})
        }))
    }

    function wr(t) {
        const e = t.streamId, n = this.sourceName, i = t.sourceName, s = this.comObj, a = this.streamControllers[e],
            r = this.streamSinks[e];
        switch (t.stream) {
            case fr:
                t.success ? a.startCall.resolve() : a.startCall.reject(pr(t.reason));
                break;
            case dr:
                t.success ? a.pullCall.resolve() : a.pullCall.reject(pr(t.reason));
                break;
            case hr:
                if (!r) {
                    s.postMessage({sourceName: n, targetName: i, stream: dr, streamId: e, success: !0});
                    break
                }
                r.desiredSize <= 0 && t.desiredSize > 0 && r.sinkCapability.resolve(), r.desiredSize = t.desiredSize, new Promise((function (t) {
                    var e;
                    t(null === (e = r.onPull) || void 0 === e ? void 0 : e.call(r))
                })).then((function () {
                    s.postMessage({sourceName: n, targetName: i, stream: dr, streamId: e, success: !0})
                }), (function (t) {
                    s.postMessage({sourceName: n, targetName: i, stream: dr, streamId: e, reason: pr(t)})
                }));
                break;
            case cr:
                if (It(a, "enqueue should have stream controller"), a.isClosed) break;
                a.controller.enqueue(t.chunk);
                break;
            case lr:
                if (It(a, "close should have stream controller"), a.isClosed) break;
                a.isClosed = !0, a.controller.close(), C(mr, this, Ar).call(this, a, e);
                break;
            case ur:
                It(a, "error should have stream controller"), a.controller.error(pr(t.reason)), C(mr, this, Ar).call(this, a, e);
                break;
            case or:
                t.success ? a.cancelCall.resolve() : a.cancelCall.reject(pr(t.reason)), C(mr, this, Ar).call(this, a, e);
                break;
            case rr:
                if (!r) break;
                new Promise((function (e) {
                    var n;
                    e(null === (n = r.onCancel) || void 0 === n ? void 0 : n.call(r, pr(t.reason)))
                })).then((function () {
                    s.postMessage({sourceName: n, targetName: i, stream: or, streamId: e, success: !0})
                }), (function (t) {
                    s.postMessage({sourceName: n, targetName: i, stream: or, streamId: e, reason: pr(t)})
                })), r.sinkCapability.reject(pr(t.reason)), r.isCancelled = !0, delete this.streamSinks[e];
                break;
            default:
                throw new Error("Unexpected stream case")
        }
    }

    async function Ar(t, e) {
        var n, i, s;
        await Promise.allSettled([null === (n = t.startCall) || void 0 === n ? void 0 : n.promise, null === (i = t.pullCall) || void 0 === i ? void 0 : i.promise, null === (s = t.cancelCall) || void 0 === s ? void 0 : s.promise]), delete this.streamControllers[e]
    }

    var kr = new WeakMap, _r = new WeakMap;

    class Sr {
        constructor(t) {
            let {parsedData: e, rawData: n} = t;
            E(this, kr, void 0), E(this, _r, void 0), P(kr, this, e), P(_r, this, n)
        }

        getRaw() {
            return T(_r, this)
        }

        get(t) {
            var e;
            return null !== (e = T(kr, this).get(t)) && void 0 !== e ? e : null
        }

        getAll() {
            return Xt(T(kr, this))
        }

        has(t) {
            return T(kr, this).has(t)
        }
    }

    const xr = Symbol("INTERNAL");
    var Er = new WeakMap, Cr = new WeakMap, Mr = new WeakMap, Tr = new WeakMap;

    class Pr {
        constructor(t, e) {
            let {name: n, intent: i, usage: s, rbGroups: a} = e;
            E(this, Er, !1), E(this, Cr, !1), E(this, Mr, !1), E(this, Tr, !0), P(Er, this, !!(t & z)), P(Cr, this, !!(t & W)), this.name = n, this.intent = i, this.usage = s, this.rbGroups = a
        }

        get visible() {
            if (T(Mr, this)) return T(Tr, this);
            if (!T(Tr, this)) return !1;
            const {print: t, view: e} = this.usage;
            return T(Er, this) ? "OFF" !== (null === e || void 0 === e ? void 0 : e.viewState) : !T(Cr, this) || "OFF" !== (null === t || void 0 === t ? void 0 : t.printState)
        }

        _setVisible(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            t !== xr && Ft("Internal method `_setVisible` called."), P(Mr, this, n), P(Tr, this, e)
        }
    }

    var Rr = new WeakMap, Lr = new WeakMap, Fr = new WeakMap, Ir = new WeakMap, Dr = new WeakSet;

    class Nr {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z;
            if (x(this, Dr), E(this, Rr, null), E(this, Lr, new Map), E(this, Fr, null), E(this, Ir, null), this.renderingIntent = e, this.name = null, this.creator = null, null !== t) {
                this.name = t.name, this.creator = t.creator, P(Ir, this, t.order);
                for (const n of t.groups) T(Lr, this).set(n.id, new Pr(e, n));
                if ("OFF" === t.baseState) for (const t of T(Lr, this).values()) t._setVisible(xr, !1);
                for (const e of t.on) T(Lr, this).get(e)._setVisible(xr, !0);
                for (const e of t.off) T(Lr, this).get(e)._setVisible(xr, !1);
                P(Fr, this, this.getHash())
            }
        }

        isVisible(t) {
            if (0 === T(Lr, this).size) return !0;
            if (!t) return Rt("Optional content group not defined."), !0;
            if ("OCG" === t.type) return T(Lr, this).has(t.id) ? T(Lr, this).get(t.id).visible : (Lt("Optional content group not found: ".concat(t.id)), !0);
            if ("OCMD" === t.type) {
                if (t.expression) return C(Dr, this, Or).call(this, t.expression);
                if (!t.policy || "AnyOn" === t.policy) {
                    for (const e of t.ids) {
                        if (!T(Lr, this).has(e)) return Lt("Optional content group not found: ".concat(e)), !0;
                        if (T(Lr, this).get(e).visible) return !0
                    }
                    return !1
                }
                if ("AllOn" === t.policy) {
                    for (const e of t.ids) {
                        if (!T(Lr, this).has(e)) return Lt("Optional content group not found: ".concat(e)), !0;
                        if (!T(Lr, this).get(e).visible) return !1
                    }
                    return !0
                }
                if ("AnyOff" === t.policy) {
                    for (const e of t.ids) {
                        if (!T(Lr, this).has(e)) return Lt("Optional content group not found: ".concat(e)), !0;
                        if (!T(Lr, this).get(e).visible) return !0
                    }
                    return !1
                }
                if ("AllOff" === t.policy) {
                    for (const e of t.ids) {
                        if (!T(Lr, this).has(e)) return Lt("Optional content group not found: ".concat(e)), !0;
                        if (T(Lr, this).get(e).visible) return !1
                    }
                    return !0
                }
                return Lt("Unknown optional content policy ".concat(t.policy, ".")), !0
            }
            return Lt("Unknown group type ".concat(t.type, ".")), !0
        }

        setVisibility(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            const i = T(Lr, this).get(t);
            if (i) {
                if (n && e && i.rbGroups.length) for (const e of i.rbGroups) for (const n of e) {
                    var s;
                    if (n !== t) null === (s = T(Lr, this).get(n)) || void 0 === s || s._setVisible(xr, !1, !0)
                }
                i._setVisible(xr, !!e, !0), P(Rr, this, null)
            } else Lt("Optional content group not found: ".concat(t))
        }

        setOCGState(t) {
            let e, {state: n, preserveRB: i} = t;
            for (const s of n) {
                switch (s) {
                    case "ON":
                    case "OFF":
                    case "Toggle":
                        e = s;
                        continue
                }
                const t = T(Lr, this).get(s);
                if (t) switch (e) {
                    case "ON":
                        this.setVisibility(s, !0, i);
                        break;
                    case "OFF":
                        this.setVisibility(s, !1, i);
                        break;
                    case "Toggle":
                        this.setVisibility(s, !t.visible, i)
                }
            }
            P(Rr, this, null)
        }

        get hasInitialVisibility() {
            return null === T(Fr, this) || this.getHash() === T(Fr, this)
        }

        getOrder() {
            return T(Lr, this).size ? T(Ir, this) ? T(Ir, this).slice() : [...T(Lr, this).keys()] : null
        }

        getGroups() {
            return T(Lr, this).size > 0 ? Xt(T(Lr, this)) : null
        }

        getGroup(t) {
            return T(Lr, this).get(t) || null
        }

        getHash() {
            if (null !== T(Rr, this)) return T(Rr, this);
            const t = new Is;
            for (const [e, n] of T(Lr, this)) t.update("".concat(e, ":").concat(n.visible));
            return P(Rr, this, t.hexdigest())
        }
    }

    function Or(t) {
        const e = t.length;
        if (e < 2) return !0;
        const n = t[0];
        for (let i = 1; i < e; i++) {
            const e = t[i];
            let s;
            if (Array.isArray(e)) s = C(Dr, this, Or).call(this, e); else {
                if (!T(Lr, this).has(e)) return Lt("Optional content group not found: ".concat(e)), !0;
                s = T(Lr, this).get(e).visible
            }
            switch (n) {
                case "And":
                    if (!s) return !1;
                    break;
                case "Or":
                    if (s) return !0;
                    break;
                case "Not":
                    return !s;
                default:
                    return !0
            }
        }
        return "And" === n
    }

    class zr {
        constructor(t, e) {
            let {disableRange: n = !1, disableStream: i = !1} = e;
            It(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
            const {length: s, initialData: a, progressiveDone: r, contentDispositionFilename: o} = t;
            if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = o, (null === a || void 0 === a ? void 0 : a.length) > 0) {
                const t = a instanceof Uint8Array && a.byteLength === a.buffer.byteLength ? a.buffer : new Uint8Array(a).buffer;
                this._queuedChunks.push(t)
            }
            this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !n, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener(((t, e) => {
                this._onReceiveData({begin: t, chunk: e})
            })), t.addProgressListener(((t, e) => {
                this._onProgress({loaded: t, total: e})
            })), t.addProgressiveReadListener((t => {
                this._onReceiveData({chunk: t})
            })), t.addProgressiveDoneListener((() => {
                this._onProgressiveDone()
            })), t.transportReady()
        }

        _onReceiveData(t) {
            let {begin: e, chunk: n} = t;
            const i = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
            if (void 0 === e) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i); else {
                It(this._rangeReaders.some((function (t) {
                    return t._begin === e && (t._enqueue(i), !0)
                })), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")
            }
        }

        get _progressiveDataLength() {
            var t, e;
            return null !== (t = null === (e = this._fullRequestReader) || void 0 === e ? void 0 : e._loaded) && void 0 !== t ? t : 0
        }

        _onProgress(t) {
            var e, n, i, s;
            void 0 === t.total ? null === (e = this._rangeReaders[0]) || void 0 === e || null === (n = e.onProgress) || void 0 === n || n.call(e, {loaded: t.loaded}) : null === (i = this._fullRequestReader) || void 0 === i || null === (s = i.onProgress) || void 0 === s || s.call(i, {
                loaded: t.loaded,
                total: t.total
            })
        }

        _onProgressiveDone() {
            var t;
            null === (t = this._fullRequestReader) || void 0 === t || t.progressiveDone(), this._progressiveDone = !0
        }

        _removeRangeReader(t) {
            const e = this._rangeReaders.indexOf(t);
            e >= 0 && this._rangeReaders.splice(e, 1)
        }

        getFullReader() {
            It(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
            const t = this._queuedChunks;
            return this._queuedChunks = null, new Wr(this, t, this._progressiveDone, this._contentDispositionFilename)
        }

        getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null;
            const n = new jr(this, t, e);
            return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(n), n
        }

        cancelAllRequests(t) {
            var e;
            null === (e = this._fullRequestReader) || void 0 === e || e.cancel(t);
            for (const n of this._rangeReaders.slice(0)) n.cancel(t);
            this._pdfDataRangeTransport.abort()
        }
    }

    class Wr {
        constructor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this._stream = t, this._done = n || !1, this._filename = be(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
            for (const s of this._queuedChunks) this._loaded += s.byteLength;
            this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null
        }

        _enqueue(t) {
            if (!this._done) {
                if (this._requests.length > 0) {
                    this._requests.shift().resolve({value: t, done: !1})
                } else this._queuedChunks.push(t);
                this._loaded += t.byteLength
            }
        }

        get headersReady() {
            return this._headersReady
        }

        get filename() {
            return this._filename
        }

        get isRangeSupported() {
            return this._stream._isRangeSupported
        }

        get isStreamingSupported() {
            return this._stream._isStreamingSupported
        }

        get contentLength() {
            return this._stream._contentLength
        }

        async read() {
            if (this._queuedChunks.length > 0) {
                return {value: this._queuedChunks.shift(), done: !1}
            }
            if (this._done) return {value: void 0, done: !0};
            const t = Promise.withResolvers();
            return this._requests.push(t), t.promise
        }

        cancel(t) {
            this._done = !0;
            for (const e of this._requests) e.resolve({value: void 0, done: !0});
            this._requests.length = 0
        }

        progressiveDone() {
            this._done || (this._done = !0)
        }
    }

    class jr {
        constructor(t, e, n) {
            this._stream = t, this._begin = e, this._end = n, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null
        }

        _enqueue(t) {
            if (!this._done) {
                if (0 === this._requests.length) this._queuedChunk = t; else {
                    this._requests.shift().resolve({value: t, done: !1});
                    for (const t of this._requests) t.resolve({value: void 0, done: !0});
                    this._requests.length = 0
                }
                this._done = !0, this._stream._removeRangeReader(this)
            }
        }

        get isStreamingSupported() {
            return !1
        }

        async read() {
            if (this._queuedChunk) {
                const t = this._queuedChunk;
                return this._queuedChunk = null, {value: t, done: !1}
            }
            if (this._done) return {value: void 0, done: !0};
            const t = Promise.withResolvers();
            return this._requests.push(t), t.promise
        }

        cancel(t) {
            this._done = !0;
            for (const e of this._requests) e.resolve({value: void 0, done: !0});
            this._requests.length = 0, this._stream._removeRangeReader(this)
        }
    }

    function Br(t, e) {
        const n = new Headers;
        if (!t || !e || "object" !== typeof e) return n;
        for (const i in e) {
            const t = e[i];
            void 0 !== t && n.append(i, t)
        }
        return n
    }

    function Hr(t) {
        let {responseHeaders: e, isHttp: n, rangeChunkSize: i, disableRange: s} = t;
        const a = {allowRangeRequests: !1, suggestedLength: void 0}, r = parseInt(e.get("Content-Length"), 10);
        if (!Number.isInteger(r)) return a;
        if (a.suggestedLength = r, r <= 2 * i) return a;
        if (s || !n) return a;
        if ("bytes" !== e.get("Accept-Ranges")) return a;
        return "identity" !== (e.get("Content-Encoding") || "identity") || (a.allowRangeRequests = !0), a
    }

    function Ur(t) {
        const e = t.get("Content-Disposition");
        if (e) {
            let t = function (t) {
                let e = !0, n = i("filename\\*", "i").exec(t);
                if (n) {
                    n = n[1];
                    let t = r(n);
                    return t = unescape(t), t = o(t), t = l(t), a(t)
                }
                if (n = function (t) {
                    const e = [];
                    let n;
                    const s = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                    for (; null !== (n = s.exec(t));) {
                        let [, t, i, s] = n;
                        if (t = parseInt(t, 10), t in e) {
                            if (0 === t) break
                        } else e[t] = [i, s]
                    }
                    const a = [];
                    for (let i = 0; i < e.length && i in e; ++i) {
                        let [t, n] = e[i];
                        n = r(n), t && (n = unescape(n), 0 === i && (n = o(n))), a.push(n)
                    }
                    return a.join("")
                }(t), n) return a(l(n));
                if (n = i("filename", "i").exec(t), n) {
                    n = n[1];
                    let t = r(n);
                    return t = l(t), a(t)
                }

                function i(t, e) {
                    return new RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e)
                }

                function s(t, n) {
                    if (t) {
                        if (!/^[\x00-\xFF]+$/.test(n)) return n;
                        try {
                            const i = new TextDecoder(t, {fatal: !0}), s = qt(n);
                            n = i.decode(s), e = !1
                        } catch (i) {
                        }
                    }
                    return n
                }

                function a(t) {
                    return e && /[\x80-\xff]/.test(t) && (t = s("utf-8", t), e && (t = s("iso-8859-1", t))), t
                }

                function r(t) {
                    if (t.startsWith('"')) {
                        const e = t.slice(1).split('\\"');
                        for (let t = 0; t < e.length; ++t) {
                            const n = e[t].indexOf('"');
                            -1 !== n && (e[t] = e[t].slice(0, n), e.length = t + 1), e[t] = e[t].replaceAll(/\\(.)/g, "$1")
                        }
                        t = e.join('"')
                    }
                    return t
                }

                function o(t) {
                    const e = t.indexOf("'");
                    return -1 === e ? t : s(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""))
                }

                function l(t) {
                    return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t) ? t : t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (function (t, e, n, i) {
                        if ("q" === n || "Q" === n) return s(e, i = (i = i.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, (function (t, e) {
                            return String.fromCharCode(parseInt(e, 16))
                        })));
                        try {
                            i = atob(i)
                        } catch (a) {
                        }
                        return s(e, i)
                    }))
                }

                return ""
            }(e);
            if (t.includes("%")) try {
                t = decodeURIComponent(t)
            } catch (n) {
            }
            if (be(t)) return t
        }
        return null
    }

    function Vr(t, e) {
        return 404 === t || 0 === t && e.startsWith("file:") ? new Bt('Missing PDF "' + e + '".') : new Ht("Unexpected server response (".concat(t, ') while retrieving PDF "').concat(e, '".'), t)
    }

    function Gr(t) {
        return 200 === t || 206 === t
    }

    function qr(t, e, n) {
        return {
            method: "GET",
            headers: t,
            signal: n.signal,
            mode: "cors",
            credentials: e ? "include" : "same-origin",
            redirect: "follow"
        }
    }

    function Xr(t) {
        return t instanceof Uint8Array ? t.buffer : t instanceof ArrayBuffer ? t : (Lt("getArrayBuffer - unexpected data format: ".concat(t)), new Uint8Array(t).buffer)
    }

    class Kr {
        constructor(t) {
            this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Br(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = []
        }

        get _progressiveDataLength() {
            var t, e;
            return null !== (t = null === (e = this._fullRequestReader) || void 0 === e ? void 0 : e._loaded) && void 0 !== t ? t : 0
        }

        getFullReader() {
            return It(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Yr(this), this._fullRequestReader
        }

        getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null;
            const n = new Qr(this, t, e);
            return this._rangeRequestReaders.push(n), n
        }

        cancelAllRequests(t) {
            var e;
            null === (e = this._fullRequestReader) || void 0 === e || e.cancel(t);
            for (const n of this._rangeRequestReaders.slice(0)) n.cancel(t)
        }
    }

    class Yr {
        constructor(t) {
            this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
            const e = t.source;
            this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController, this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
            const n = new Headers(t.headers), i = e.url;
            fetch(i, qr(n, this._withCredentials, this._abortController)).then((e => {
                if (!Gr(e.status)) throw Vr(e.status, i);
                this._reader = e.body.getReader(), this._headersCapability.resolve();
                const n = e.headers, {allowRangeRequests: s, suggestedLength: a} = Hr({
                    responseHeaders: n,
                    isHttp: t.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                });
                this._isRangeSupported = s, this._contentLength = a || this._contentLength, this._filename = Ur(n), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Vt("Streaming is disabled."))
            })).catch(this._headersCapability.reject), this.onProgress = null
        }

        get headersReady() {
            return this._headersCapability.promise
        }

        get filename() {
            return this._filename
        }

        get contentLength() {
            return this._contentLength
        }

        get isRangeSupported() {
            return this._isRangeSupported
        }

        get isStreamingSupported() {
            return this._isStreamingSupported
        }

        async read() {
            var t;
            await this._headersCapability.promise;
            const {value: e, done: n} = await this._reader.read();
            return n ? {
                value: e,
                done: n
            } : (this._loaded += e.byteLength, null === (t = this.onProgress) || void 0 === t || t.call(this, {
                loaded: this._loaded,
                total: this._contentLength
            }), {value: Xr(e), done: !1})
        }

        cancel(t) {
            var e;
            null === (e = this._reader) || void 0 === e || e.cancel(t), this._abortController.abort()
        }
    }

    class Qr {
        constructor(t, e, n) {
            this._stream = t, this._reader = null, this._loaded = 0;
            const i = t.source;
            this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController;
            const s = new Headers(t.headers);
            s.append("Range", "bytes=".concat(e, "-").concat(n - 1));
            const a = i.url;
            fetch(a, qr(s, this._withCredentials, this._abortController)).then((t => {
                if (!Gr(t.status)) throw Vr(t.status, a);
                this._readCapability.resolve(), this._reader = t.body.getReader()
            })).catch(this._readCapability.reject), this.onProgress = null
        }

        get isStreamingSupported() {
            return this._isStreamingSupported
        }

        async read() {
            var t;
            await this._readCapability.promise;
            const {value: e, done: n} = await this._reader.read();
            return n ? {
                value: e,
                done: n
            } : (this._loaded += e.byteLength, null === (t = this.onProgress) || void 0 === t || t.call(this, {loaded: this._loaded}), {
                value: Xr(e),
                done: !1
            })
        }

        cancel(t) {
            var e;
            null === (e = this._reader) || void 0 === e || e.cancel(t), this._abortController.abort()
        }
    }

    class $r {
        constructor(t) {
            let {url: e, httpHeaders: n, withCredentials: i} = t;
            this.url = e, this.isHttp = /^https?:/i.test(e), this.headers = Br(this.isHttp, n), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = Object.create(null)
        }

        requestRange(t, e, n) {
            const i = {begin: t, end: e};
            for (const s in n) i[s] = n[s];
            return this.request(i)
        }

        requestFull(t) {
            return this.request(t)
        }

        request(t) {
            const e = new XMLHttpRequest, n = this.currXhrId++, i = this.pendingRequests[n] = {xhr: e};
            e.open("GET", this.url), e.withCredentials = this.withCredentials;
            for (const [s, a] of this.headers) e.setRequestHeader(s, a);
            return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", "bytes=".concat(t.begin, "-").concat(t.end - 1)), i.expectedStatus = 206) : i.expectedStatus = 200, e.responseType = "arraybuffer", t.onError && (e.onerror = function (n) {
                t.onError(e.status)
            }), e.onreadystatechange = this.onStateChange.bind(this, n), e.onprogress = this.onProgress.bind(this, n), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), n
        }

        onProgress(t, e) {
            var n;
            const i = this.pendingRequests[t];
            i && (null === (n = i.onProgress) || void 0 === n || n.call(i, e))
        }

        onStateChange(t, e) {
            const n = this.pendingRequests[t];
            if (!n) return;
            const i = n.xhr;
            if (i.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), 4 !== i.readyState) return;
            if (!(t in this.pendingRequests)) return;
            var s;
            if (delete this.pendingRequests[t], 0 === i.status && this.isHttp) return void (null === (s = n.onError) || void 0 === s || s.call(n, i.status));
            const a = i.status || 200;
            var r;
            if (!(200 === a && 206 === n.expectedStatus) && a !== n.expectedStatus) return void (null === (r = n.onError) || void 0 === r || r.call(n, i.status));
            const o = function (t) {
                const e = t.response;
                return "string" !== typeof e ? e : qt(e).buffer
            }(i);
            if (206 === a) {
                const t = i.getResponseHeader("Content-Range"), e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                n.onDone({begin: parseInt(e[1], 10), chunk: o})
            } else if (o) n.onDone({begin: 0, chunk: o}); else {
                var l;
                null === (l = n.onError) || void 0 === l || l.call(n, i.status)
            }
        }

        getRequestXhr(t) {
            return this.pendingRequests[t].xhr
        }

        isPendingRequest(t) {
            return t in this.pendingRequests
        }

        abortRequest(t) {
            const e = this.pendingRequests[t].xhr;
            delete this.pendingRequests[t], e.abort()
        }
    }

    class Jr {
        constructor(t) {
            this._source = t, this._manager = new $r(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = []
        }

        _onRangeRequestReaderClosed(t) {
            const e = this._rangeRequestReaders.indexOf(t);
            e >= 0 && this._rangeRequestReaders.splice(e, 1)
        }

        getFullReader() {
            return It(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Zr(this._manager, this._source), this._fullRequestReader
        }

        getRangeReader(t, e) {
            const n = new to(this._manager, t, e);
            return n.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n), n
        }

        cancelAllRequests(t) {
            var e;
            null === (e = this._fullRequestReader) || void 0 === e || e.cancel(t);
            for (const n of this._rangeRequestReaders.slice(0)) n.cancel(t)
        }
    }

    class Zr {
        constructor(t, e) {
            this._manager = t;
            const n = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
            };
            this._url = e.url, this._fullRequestId = t.requestFull(n), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null
        }

        _onHeadersReceived() {
            const t = this._fullRequestId, e = this._manager.getRequestXhr(t),
                n = new Headers(e.getAllResponseHeaders().trim().split(/[\r\n]+/).map((t => {
                    const [e, ...n] = t.split(": ");
                    return [e, n.join(": ")]
                }))), {allowRangeRequests: i, suggestedLength: s} = Hr({
                    responseHeaders: n,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                });
            i && (this._isRangeSupported = !0), this._contentLength = s || this._contentLength, this._filename = Ur(n), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve()
        }

        _onDone(t) {
            if (t) if (this._requests.length > 0) {
                this._requests.shift().resolve({value: t.chunk, done: !1})
            } else this._cachedChunks.push(t.chunk);
            if (this._done = !0, !(this._cachedChunks.length > 0)) {
                for (const t of this._requests) t.resolve({value: void 0, done: !0});
                this._requests.length = 0
            }
        }

        _onError(t) {
            this._storedError = Vr(t, this._url), this._headersCapability.reject(this._storedError);
            for (const e of this._requests) e.reject(this._storedError);
            this._requests.length = 0, this._cachedChunks.length = 0
        }

        _onProgress(t) {
            var e;
            null === (e = this.onProgress) || void 0 === e || e.call(this, {
                loaded: t.loaded,
                total: t.lengthComputable ? t.total : this._contentLength
            })
        }

        get filename() {
            return this._filename
        }

        get isRangeSupported() {
            return this._isRangeSupported
        }

        get isStreamingSupported() {
            return this._isStreamingSupported
        }

        get contentLength() {
            return this._contentLength
        }

        get headersReady() {
            return this._headersCapability.promise
        }

        async read() {
            if (this._storedError) throw this._storedError;
            if (this._cachedChunks.length > 0) {
                return {value: this._cachedChunks.shift(), done: !1}
            }
            if (this._done) return {value: void 0, done: !0};
            const t = Promise.withResolvers();
            return this._requests.push(t), t.promise
        }

        cancel(t) {
            this._done = !0, this._headersCapability.reject(t);
            for (const e of this._requests) e.resolve({value: void 0, done: !0});
            this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null
        }
    }

    class to {
        constructor(t, e, n) {
            this._manager = t;
            const i = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
            };
            this._url = t.url, this._requestId = t.requestRange(e, n, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null
        }

        _close() {
            var t;
            null === (t = this.onClosed) || void 0 === t || t.call(this, this)
        }

        _onDone(t) {
            const e = t.chunk;
            if (this._requests.length > 0) {
                this._requests.shift().resolve({value: e, done: !1})
            } else this._queuedChunk = e;
            this._done = !0;
            for (const n of this._requests) n.resolve({value: void 0, done: !0});
            this._requests.length = 0, this._close()
        }

        _onError(t) {
            this._storedError = Vr(t, this._url);
            for (const e of this._requests) e.reject(this._storedError);
            this._requests.length = 0, this._queuedChunk = null
        }

        _onProgress(t) {
            var e;
            this.isStreamingSupported || (null === (e = this.onProgress) || void 0 === e || e.call(this, {loaded: t.loaded}))
        }

        get isStreamingSupported() {
            return !1
        }

        async read() {
            if (this._storedError) throw this._storedError;
            if (null !== this._queuedChunk) {
                const t = this._queuedChunk;
                return this._queuedChunk = null, {value: t, done: !1}
            }
            if (this._done) return {value: void 0, done: !0};
            const t = Promise.withResolvers();
            return this._requests.push(t), t.promise
        }

        cancel(t) {
            this._done = !0;
            for (const e of this._requests) e.resolve({value: void 0, done: !0});
            this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close()
        }
    }

    const eo = /^[a-z][a-z0-9\-+.]+:/i;

    function no(t, e, n) {
        if ("http:" === t.protocol) {
            return ka.get("http").request(t, {headers: e}, n)
        }
        return ka.get("https").request(t, {headers: e}, n)
    }

    class io {
        constructor(t) {
            this.source = t, this.url = function (t) {
                if (eo.test(t)) return new URL(t);
                const e = ka.get("url");
                return new URL(e.pathToFileURL(t))
            }(t.url), this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol, this.isFsUrl = "file:" === this.url.protocol, this.headers = Br(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = []
        }

        get _progressiveDataLength() {
            var t, e;
            return null !== (t = null === (e = this._fullRequestReader) || void 0 === e ? void 0 : e._loaded) && void 0 !== t ? t : 0
        }

        getFullReader() {
            return It(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new lo(this) : new ro(this), this._fullRequestReader
        }

        getRangeReader(t, e) {
            if (e <= this._progressiveDataLength) return null;
            const n = this.isFsUrl ? new co(this, t, e) : new oo(this, t, e);
            return this._rangeRequestReaders.push(n), n
        }

        cancelAllRequests(t) {
            var e;
            null === (e = this._fullRequestReader) || void 0 === e || e.cancel(t);
            for (const n of this._rangeRequestReaders.slice(0)) n.cancel(t)
        }
    }

    class so {
        constructor(t) {
            this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
            const e = t.source;
            this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers()
        }

        get headersReady() {
            return this._headersCapability.promise
        }

        get filename() {
            return this._filename
        }

        get contentLength() {
            return this._contentLength
        }

        get isRangeSupported() {
            return this._isRangeSupported
        }

        get isStreamingSupported() {
            return this._isStreamingSupported
        }

        async read() {
            var t;
            if (await this._readCapability.promise, this._done) return {value: void 0, done: !0};
            if (this._storedError) throw this._storedError;
            const e = this._readableStream.read();
            if (null === e) return this._readCapability = Promise.withResolvers(), this.read();
            this._loaded += e.length, null === (t = this.onProgress) || void 0 === t || t.call(this, {
                loaded: this._loaded,
                total: this._contentLength
            });
            return {value: new Uint8Array(e).buffer, done: !1}
        }

        cancel(t) {
            this._readableStream ? this._readableStream.destroy(t) : this._error(t)
        }

        _error(t) {
            this._storedError = t, this._readCapability.resolve()
        }

        _setReadableStream(t) {
            this._readableStream = t, t.on("readable", (() => {
                this._readCapability.resolve()
            })), t.on("end", (() => {
                t.destroy(), this._done = !0, this._readCapability.resolve()
            })), t.on("error", (t => {
                this._error(t)
            })), !this._isStreamingSupported && this._isRangeSupported && this._error(new Vt("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError)
        }
    }

    class ao {
        constructor(t) {
            this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
            const e = t.source;
            this._isStreamingSupported = !e.disableStream
        }

        get isStreamingSupported() {
            return this._isStreamingSupported
        }

        async read() {
            var t;
            if (await this._readCapability.promise, this._done) return {value: void 0, done: !0};
            if (this._storedError) throw this._storedError;
            const e = this._readableStream.read();
            if (null === e) return this._readCapability = Promise.withResolvers(), this.read();
            this._loaded += e.length, null === (t = this.onProgress) || void 0 === t || t.call(this, {loaded: this._loaded});
            return {value: new Uint8Array(e).buffer, done: !1}
        }

        cancel(t) {
            this._readableStream ? this._readableStream.destroy(t) : this._error(t)
        }

        _error(t) {
            this._storedError = t, this._readCapability.resolve()
        }

        _setReadableStream(t) {
            this._readableStream = t, t.on("readable", (() => {
                this._readCapability.resolve()
            })), t.on("end", (() => {
                t.destroy(), this._done = !0, this._readCapability.resolve()
            })), t.on("error", (t => {
                this._error(t)
            })), this._storedError && this._readableStream.destroy(this._storedError)
        }
    }

    class ro extends so {
        constructor(t) {
            super(t);
            const e = Object.fromEntries(t.headers);
            this._request = no(this._url, e, (e => {
                if (404 === e.statusCode) {
                    const t = new Bt('Missing PDF "'.concat(this._url, '".'));
                    return this._storedError = t, void this._headersCapability.reject(t)
                }
                this._headersCapability.resolve(), this._setReadableStream(e);
                const n = new Headers(this._readableStream.headers), {
                    allowRangeRequests: i,
                    suggestedLength: s
                } = Hr({
                    responseHeaders: n,
                    isHttp: t.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                });
                this._isRangeSupported = i, this._contentLength = s || this._contentLength, this._filename = Ur(n)
            })), this._request.on("error", (t => {
                this._storedError = t, this._headersCapability.reject(t)
            })), this._request.end()
        }
    }

    class oo extends ao {
        constructor(t, e, n) {
            super(t);
            const i = Object.fromEntries(t.headers);
            i.Range = "bytes=".concat(e, "-").concat(n - 1);
            this._request = no(this._url, i, (t => {
                if (404 !== t.statusCode) this._setReadableStream(t); else {
                    const t = new Bt('Missing PDF "'.concat(this._url, '".'));
                    this._storedError = t
                }
            })), this._request.on("error", (t => {
                this._storedError = t
            })), this._request.end()
        }
    }

    class lo extends so {
        constructor(t) {
            super(t);
            const e = ka.get("fs");
            e.promises.lstat(this._url).then((t => {
                this._contentLength = t.size, this._setReadableStream(e.createReadStream(this._url)), this._headersCapability.resolve()
            }), (t => {
                "ENOENT" === t.code && (t = new Bt('Missing PDF "'.concat(this._url, '".'))), this._storedError = t, this._headersCapability.reject(t)
            }))
        }
    }

    class co extends ao {
        constructor(t, e, n) {
            super(t);
            const i = ka.get("fs");
            this._setReadableStream(i.createReadStream(this._url, {start: e, end: n - 1}))
        }
    }

    const uo = 30;
    var ho = new WeakMap, fo = new WeakMap, po = new WeakMap, go = new WeakMap, mo = new WeakMap, vo = new WeakMap,
        bo = new WeakMap, yo = new WeakMap, wo = new WeakMap, Ao = new WeakMap, ko = new WeakMap, _o = new WeakMap,
        So = new WeakMap, xo = new WeakMap, Eo = new WeakMap, Co = new WeakMap, Mo = new WeakMap, To = new WeakMap,
        Po = new WeakSet;

    class Ro {
        constructor(t) {
            var e;
            let {textContentSource: n, container: i, viewport: s} = t;
            if (x(this, Po), E(this, ho, Promise.withResolvers()), E(this, fo, null), E(this, po, !1), E(this, go, !(null === (e = globalThis.FontInspector) || void 0 === e || !e.enabled)), E(this, mo, null), E(this, vo, null), E(this, bo, 0), E(this, yo, 0), E(this, wo, null), E(this, Ao, null), E(this, ko, 0), E(this, _o, 0), E(this, So, Object.create(null)), E(this, xo, []), E(this, Eo, null), E(this, Co, []), E(this, Mo, new WeakMap), E(this, To, null), n instanceof ReadableStream) P(Eo, this, n); else {
                if ("object" !== typeof n) throw new Error('No "textContentSource" parameter specified.');
                P(Eo, this, new ReadableStream({
                    start(t) {
                        t.enqueue(n), t.close()
                    }
                }))
            }
            P(fo, this, P(Ao, this, i)), P(_o, this, s.scale * (globalThis.devicePixelRatio || 1)), P(ko, this, s.rotation), P(vo, this, {
                div: null,
                properties: null,
                ctx: null
            });
            const {pageWidth: a, pageHeight: r, pageX: o, pageY: l} = s.rawDims;
            P(To, this, [1, 0, 0, -1, -o, l + r]), P(yo, this, a), P(bo, this, r), Oo.call(Ro), Re(i, s), T(ho, this).promise.finally((() => {
                Uo._.delete(this), P(vo, this, null), P(So, this, null)
            })).catch((() => {
            }))
        }

        static get fontFamilyMap() {
            const {isWindows: t, isFirefox: e} = Kt.platform;
            return Nt(this, "fontFamilyMap", new Map([["sans-serif", "".concat(t && e ? "Calibri, " : "", "sans-serif")], ["monospace", "".concat(t && e ? "Lucida Console, " : "", "monospace")]]))
        }

        render() {
            const t = () => {
                T(wo, this).read().then((e => {
                    var n;
                    let {value: i, done: s} = e;
                    s ? T(ho, this).resolve() : (null !== (n = T(mo, this)) && void 0 !== n || P(mo, this, i.lang), Object.assign(T(So, this), i.styles), C(Po, this, Lo).call(this, i.items), t())
                }), T(ho, this).reject)
            };
            return P(wo, this, T(Eo, this).getReader()), Uo._.add(this), t(), T(ho, this).promise
        }

        update(t) {
            let {viewport: e, onBefore: n = null} = t;
            const i = e.scale * (globalThis.devicePixelRatio || 1), s = e.rotation;
            if (s !== T(ko, this) && (null === n || void 0 === n || n(), P(ko, this, s), Re(T(Ao, this), {rotation: s})), i !== T(_o, this)) {
                null === n || void 0 === n || n(), P(_o, this, i);
                const t = {div: null, properties: null, ctx: Do.call(Ro, T(mo, this))};
                for (const e of T(Co, this)) t.properties = T(Mo, this).get(e), t.div = e, C(Po, this, Io).call(this, t)
            }
        }

        cancel() {
            var t;
            const e = new Vt("TextLayer task cancelled.");
            null === (t = T(wo, this)) || void 0 === t || t.cancel(e).catch((() => {
            })), P(wo, this, null), T(ho, this).reject(e)
        }

        get textDivs() {
            return T(Co, this)
        }

        get textContentItemsStr() {
            return T(xo, this)
        }

        static cleanup() {
            if (!(C(Ro, this, Uo)._.size > 0)) {
                C(Ro, this, Wo)._.clear();
                for (const {canvas: t} of C(Ro, this, jo)._.values()) t.remove();
                C(Ro, this, jo)._.clear()
            }
        }
    }

    function Lo(t) {
        var e, n;
        if (T(po, this)) return;
        null !== (n = (e = T(vo, this)).ctx) && void 0 !== n || (e.ctx = Do.call(l, T(mo, this)));
        const i = T(Co, this), s = T(xo, this);
        for (const a of t) {
            if (i.length > 1e5) return Lt("Ignoring additional textDivs for performance reasons."), void P(po, this, !0);
            if (void 0 !== a.str) s.push(a.str), C(Po, this, Fo).call(this, a); else if ("beginMarkedContentProps" === a.type || "beginMarkedContent" === a.type) {
                const t = T(fo, this);
                P(fo, this, document.createElement("span")), T(fo, this).classList.add("markedContent"), null !== a.id && T(fo, this).setAttribute("id", "".concat(a.id)), t.append(T(fo, this))
            } else "endMarkedContent" === a.type && P(fo, this, T(fo, this).parentNode)
        }
    }

    function Fo(t) {
        const e = document.createElement("span"),
            n = {angle: 0, canvasWidth: 0, hasText: "" !== t.str, hasEOL: t.hasEOL, fontSize: 0};
        T(Co, this).push(e);
        const i = Qt.transform(T(To, this), t.transform);
        let s = Math.atan2(i[1], i[0]);
        const a = T(So, this)[t.fontName];
        a.vertical && (s += Math.PI / 2);
        let r = T(go, this) && a.fontSubstitution || a.fontFamily;
        r = l.fontFamilyMap.get(r) || r;
        const o = Math.hypot(i[2], i[3]), c = o * zo.call(l, r, T(mo, this));
        let u, h;
        0 === s ? (u = i[4], h = i[5] - c) : (u = i[4] + c * Math.sin(s), h = i[5] - c * Math.cos(s));
        const d = "calc(var(--scale-factor)*", f = e.style;
        T(fo, this) === T(Ao, this) ? (f.left = "".concat((100 * u / T(yo, this)).toFixed(2), "%"), f.top = "".concat((100 * h / T(bo, this)).toFixed(2), "%")) : (f.left = "".concat(d).concat(u.toFixed(2), "px)"), f.top = "".concat(d).concat(h.toFixed(2), "px)")), f.fontSize = "".concat(d).concat((Ho._ * o).toFixed(2), "px)"), f.fontFamily = r, n.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, T(go, this) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), 0 !== s && (n.angle = s * (180 / Math.PI));
        let p = !1;
        if (t.str.length > 1) p = !0; else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
            const e = Math.abs(t.transform[0]), n = Math.abs(t.transform[3]);
            e !== n && Math.max(e, n) / Math.min(e, n) > 1.5 && (p = !0)
        }
        if (p && (n.canvasWidth = a.vertical ? t.height : t.width), T(Mo, this).set(e, n), T(vo, this).div = e, T(vo, this).properties = n, C(Po, this, Io).call(this, T(vo, this)), n.hasText && T(fo, this).append(e), n.hasEOL) {
            const t = document.createElement("br");
            t.setAttribute("role", "presentation"), T(fo, this).append(t)
        }
    }

    function Io(t) {
        const {div: e, properties: n, ctx: i} = t, {style: s} = e;
        let a = "";
        if (Ho._ > 1 && (a = "scale(".concat(1 / Ho._, ")")), 0 !== n.canvasWidth && n.hasText) {
            const {fontFamily: t} = s, {canvasWidth: r, fontSize: o} = n;
            No.call(l, i, o * T(_o, this), t);
            const {width: c} = i.measureText(e.textContent);
            c > 0 && (a = "scaleX(".concat(r * T(_o, this) / c, ") ").concat(a))
        }
        0 !== n.angle && (a = "rotate(".concat(n.angle, "deg) ").concat(a)), a.length > 0 && (s.transform = a)
    }

    function Do() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            e = C(l, this, jo)._.get(t || (t = ""));
        if (!e) {
            const n = document.createElement("canvas");
            n.className = "hiddenCanvasElement", n.lang = t, document.body.append(n), e = n.getContext("2d", {
                alpha: !1,
                willReadFrequently: !0
            }), C(l, this, jo)._.set(t, e), C(l, this, Bo)._.set(e, {size: 0, family: ""})
        }
        return e
    }

    function No(t, e, n) {
        const i = C(l, this, Bo)._.get(t);
        e === i.size && n === i.family || (t.font = "".concat(e, "px ").concat(n), i.size = e, i.family = n)
    }

    function Oo() {
        if (null !== C(l, this, Ho)._) return;
        const t = document.createElement("div");
        t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), Ho._ = C(l, this, t.getBoundingClientRect().height), t.remove()
    }

    function zo(t, e) {
        const n = C(l, this, Wo)._.get(t);
        if (n) return n;
        const i = C(l, this, Do).call(this, e);
        i.canvas.width = i.canvas.height = uo, C(l, this, No).call(this, i, uo, t);
        const s = i.measureText("");
        let a = s.fontBoundingBoxAscent, r = Math.abs(s.fontBoundingBoxDescent);
        if (a) {
            const e = a / (a + r);
            return C(l, this, Wo)._.set(t, e), i.canvas.width = i.canvas.height = 0, e
        }
        i.strokeStyle = "red", i.clearRect(0, 0, uo, uo), i.strokeText("g", 0, 0);
        let o = i.getImageData(0, 0, uo, uo).data;
        r = 0;
        for (let l = o.length - 1 - 3; l >= 0; l -= 4) if (o[l] > 0) {
            r = Math.ceil(l / 4 / uo);
            break
        }
        i.clearRect(0, 0, uo, uo), i.strokeText("A", 0, uo), o = i.getImageData(0, 0, uo, uo).data, a = 0;
        for (let l = 0, u = o.length; l < u; l += 4) if (o[l] > 0) {
            a = uo - Math.floor(l / 4 / uo);
            break
        }
        i.canvas.width = i.canvas.height = 0;
        const c = a ? a / (a + r) : .8;
        return C(l, this, Wo)._.set(t, c), c
    }

    l = Ro;
    var Wo = {_: new Map}, jo = {_: new Map}, Bo = {_: new WeakMap}, Ho = {_: null}, Uo = {_: new Set};

    class Vo {
        static textContent(t) {
            const e = [], n = {items: e, styles: Object.create(null)};
            return function t(n) {
                var i;
                if (!n) return;
                let s = null;
                const a = n.name;
                if ("#text" === a) s = n.value; else {
                    if (!Vo.shouldBuildText(a)) return;
                    null !== n && void 0 !== n && null !== (i = n.attributes) && void 0 !== i && i.textContent ? s = n.attributes.textContent : n.value && (s = n.value)
                }
                if (null !== s && e.push({str: s}), n.children) for (const e of n.children) t(e)
            }(t), n
        }

        static shouldBuildText(t) {
            return !("textarea" === t || "input" === t || "option" === t || "select" === t)
        }
    }

    const Go = 65536, qo = F ? class extends Ks {
        _createCanvas(t, e) {
            return ka.get("canvas").createCanvas(t, e)
        }
    } : class extends Ks {
        constructor(t) {
            let {ownerDocument: e = globalThis.document, enableHWA: n = !1} = t;
            super({enableHWA: n}), this._document = e
        }

        _createCanvas(t, e) {
            const n = this._document.createElement("canvas");
            return n.width = t, n.height = e, n
        }
    }, Xo = F ? class extends Ys {
        async _fetch(t) {
            return _a(t)
        }
    } : Qs, Ko = F ? class extends $s {
    } : class extends $s {
        constructor(t) {
            let {docId: e, ownerDocument: n = globalThis.document} = t;
            super(), x(this, aa), E(this, Js, void 0), E(this, Zs, void 0), E(this, ta, void 0), E(this, ea, void 0), E(this, na, void 0), E(this, ia, void 0), E(this, sa, 0), P(ea, this, e), P(na, this, n)
        }

        addFilter(t) {
            var e, n;
            if (!t) return "none";
            let i = M(aa, this, ra).get(t);
            if (i) return i;
            const [s, a, r] = C(aa, this, ca).call(this, t), o = 1 === t.length ? s : "".concat(s).concat(a).concat(r);
            if (i = M(aa, this, ra).get(o), i) return M(aa, this, ra).set(t, i), i;
            const l = "g_".concat(T(ea, this), "_transfer_map_").concat((P(sa, this, (e = T(sa, this), n = e++, e)), n)),
                c = C(aa, this, ua).call(this, l);
            M(aa, this, ra).set(t, c), M(aa, this, ra).set(o, c);
            const u = C(aa, this, fa).call(this, l);
            return C(aa, this, ga).call(this, s, a, r, u), c
        }

        addHCMFilter(t, e) {
            var n;
            const i = "".concat(t, "-").concat(e), s = "base";
            let a = M(aa, this, oa).get(s);
            if ((null === (n = a) || void 0 === n ? void 0 : n.key) === i) return a.url;
            var r;
            a ? (null === (r = a.filter) || void 0 === r || r.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
                key: i,
                url: "none",
                filter: null
            }, M(aa, this, oa).set(s, a));
            if (!t || !e) return a.url;
            const o = C(aa, this, va).call(this, t);
            t = Qt.makeHexColor(...o);
            const l = C(aa, this, va).call(this, e);
            if (e = Qt.makeHexColor(...l), M(aa, this, la).style.color = "", "#000000" === t && "#ffffff" === e || t === e) return a.url;
            const c = new Array(256);
            for (let p = 0; p <= 255; p++) {
                const t = p / 255;
                c[p] = t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4
            }
            const u = c.join(","), h = "g_".concat(T(ea, this), "_hcm_filter"),
                d = a.filter = C(aa, this, fa).call(this, h);
            C(aa, this, ga).call(this, u, u, u, d), C(aa, this, da).call(this, d);
            const f = (t, e) => {
                const n = o[t] / 255, i = l[t] / 255, s = new Array(e + 1);
                for (let a = 0; a <= e; a++) s[a] = n + a / e * (i - n);
                return s.join(",")
            };
            return C(aa, this, ga).call(this, f(0, 5), f(1, 5), f(2, 5), d), a.url = C(aa, this, ua).call(this, h), a.url
        }

        addAlphaFilter(t) {
            var e, n;
            let i = M(aa, this, ra).get(t);
            if (i) return i;
            const [s] = C(aa, this, ca).call(this, [t]), a = "alpha_".concat(s);
            if (i = M(aa, this, ra).get(a), i) return M(aa, this, ra).set(t, i), i;
            const r = "g_".concat(T(ea, this), "_alpha_map_").concat((P(sa, this, (e = T(sa, this), n = e++, e)), n)),
                o = C(aa, this, ua).call(this, r);
            M(aa, this, ra).set(t, o), M(aa, this, ra).set(a, o);
            const l = C(aa, this, fa).call(this, r);
            return C(aa, this, ma).call(this, s, l), o
        }

        addLuminosityFilter(t) {
            var e, n;
            let i, s, a = M(aa, this, ra).get(t || "luminosity");
            if (a) return a;
            if (t ? ([i] = C(aa, this, ca).call(this, [t]), s = "luminosity_".concat(i)) : s = "luminosity", a = M(aa, this, ra).get(s), a) return M(aa, this, ra).set(t, a), a;
            const r = "g_".concat(T(ea, this), "_luminosity_map_").concat((P(sa, this, (e = T(sa, this), n = e++, e)), n)),
                o = C(aa, this, ua).call(this, r);
            M(aa, this, ra).set(t, o), M(aa, this, ra).set(s, o);
            const l = C(aa, this, fa).call(this, r);
            return C(aa, this, ha).call(this, l), t && C(aa, this, ma).call(this, i, l), o
        }

        addHighlightHCMFilter(t, e, n, i, s) {
            var a;
            const r = "".concat(e, "-").concat(n, "-").concat(i, "-").concat(s);
            let o = M(aa, this, oa).get(t);
            if ((null === (a = o) || void 0 === a ? void 0 : a.key) === r) return o.url;
            var l;
            o ? (null === (l = o.filter) || void 0 === l || l.remove(), o.key = r, o.url = "none", o.filter = null) : (o = {
                key: r,
                url: "none",
                filter: null
            }, M(aa, this, oa).set(t, o));
            if (!e || !n) return o.url;
            const [c, u] = [e, n].map(C(aa, this, va).bind(this));
            let h = Math.round(.2126 * c[0] + .7152 * c[1] + .0722 * c[2]),
                d = Math.round(.2126 * u[0] + .7152 * u[1] + .0722 * u[2]), [f, p] = [i, s].map(C(aa, this, va).bind(this));
            d < h && ([h, d, f, p] = [d, h, p, f]), M(aa, this, la).style.color = "";
            const g = (t, e, n) => {
                const i = new Array(256), s = (d - h) / n, a = t / 255, r = (e - t) / (255 * n);
                let o = 0;
                for (let l = 0; l <= n; l++) {
                    const t = Math.round(h + l * s), e = a + l * r;
                    for (let n = o; n <= t; n++) i[n] = e;
                    o = t + 1
                }
                for (let l = o; l < 256; l++) i[l] = i[o - 1];
                return i.join(",")
            }, m = "g_".concat(T(ea, this), "_hcm_").concat(t, "_filter"), v = o.filter = C(aa, this, fa).call(this, m);
            return C(aa, this, da).call(this, v), C(aa, this, ga).call(this, g(f[0], p[0], 5), g(f[1], p[1], 5), g(f[2], p[2], 5), v), o.url = C(aa, this, ua).call(this, m), o.url
        }

        destroy() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && 0 !== M(aa, this, oa).size || (T(ta, this) && (T(ta, this).parentNode.parentNode.remove(), P(ta, this, null)), T(Zs, this) && (T(Zs, this).clear(), P(Zs, this, null)), P(sa, this, 0))
        }
    }, Yo = F ? class extends ba {
        async _fetch(t) {
            return _a(t)
        }
    } : ya;

    function Qo() {
        var t, e, n;
        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        "string" === typeof i || i instanceof URL ? i = {url: i} : (i instanceof ArrayBuffer || ArrayBuffer.isView(i)) && (i = {data: i});
        const s = new Jo, {docId: a} = s, r = i.url ? function (t) {
                if (t instanceof URL) return t.href;
                try {
                    return new URL(t, window.location).href
                } catch (e) {
                    if (F && "string" === typeof t) return t
                }
                throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.")
            }(i.url) : null, o = i.data ? function (t) {
                if (F && "undefined" !== typeof Buffer && t instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
                if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) return t;
                if ("string" === typeof t) return qt(t);
                if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || "object" === typeof t && !isNaN(null === t || void 0 === t ? void 0 : t.length)) return new Uint8Array(t);
                throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")
            }(i.data) : null, l = i.httpHeaders || null, c = !0 === i.withCredentials,
            u = null !== (t = i.password) && void 0 !== t ? t : null, h = i.range instanceof tl ? i.range : null,
            d = Number.isInteger(i.rangeChunkSize) && i.rangeChunkSize > 0 ? i.rangeChunkSize : Go;
        let f = i.worker instanceof dl ? i.worker : null;
        const p = i.verbosity, g = "string" !== typeof i.docBaseUrl || ve(i.docBaseUrl) ? null : i.docBaseUrl,
            m = "string" === typeof i.cMapUrl ? i.cMapUrl : null, v = !1 !== i.cMapPacked,
            b = i.CMapReaderFactory || Xo, y = "string" === typeof i.standardFontDataUrl ? i.standardFontDataUrl : null,
            w = i.StandardFontDataFactory || Yo, A = !0 !== i.stopAtErrors,
            k = Number.isInteger(i.maxImageSize) && i.maxImageSize > -1 ? i.maxImageSize : -1,
            _ = !1 !== i.isEvalSupported,
            S = "boolean" === typeof i.isOffscreenCanvasSupported ? i.isOffscreenCanvasSupported : !F,
            x = "boolean" === typeof i.isChrome ? i.isChrome : !Kt.platform.isFirefox && "undefined" !== typeof window && !(null === (e = window) || void 0 === e || !e.chrome),
            E = Number.isInteger(i.canvasMaxAreaInBytes) ? i.canvasMaxAreaInBytes : -1,
            C = "boolean" === typeof i.disableFontFace ? i.disableFontFace : F, M = !0 === i.fontExtraProperties,
            T = !0 === i.enableXfa, P = i.ownerDocument || globalThis.document, R = !0 === i.disableRange,
            L = !0 === i.disableStream, I = !0 === i.disableAutoFetch, D = !0 === i.pdfBug, N = i.CanvasFactory || qo,
            O = i.FilterFactory || Ko, z = !0 === i.enableHWA,
            W = h ? h.length : null !== (n = i.length) && void 0 !== n ? n : NaN,
            j = "boolean" === typeof i.useSystemFonts ? i.useSystemFonts : !F && !C,
            B = "boolean" === typeof i.useWorkerFetch ? i.useWorkerFetch : b === Qs && w === ya && m && y && ke(m, document.baseURI) && ke(y, document.baseURI);
        i.canvasFactory && Se("`canvasFactory`-instance option, please use `CanvasFactory` instead."), i.filterFactory && Se("`filterFactory`-instance option, please use `FilterFactory` instead.");
        Tt(p);
        const H = {
            canvasFactory: new N({ownerDocument: P, enableHWA: z}),
            filterFactory: new O({docId: a, ownerDocument: P}),
            cMapReaderFactory: B ? null : new b({baseUrl: m, isCompressed: v}),
            standardFontDataFactory: B ? null : new w({baseUrl: y})
        };
        if (!f) {
            const t = {verbosity: p, port: er.workerPort};
            f = t.port ? dl.fromPort(t) : new dl(t), s._worker = f
        }
        const U = {
            docId: a,
            apiVersion: "4.8.69",
            data: o,
            password: u,
            disableAutoFetch: I,
            rangeChunkSize: d,
            length: W,
            docBaseUrl: g,
            enableXfa: T,
            evaluatorOptions: {
                maxImageSize: k,
                disableFontFace: C,
                ignoreErrors: A,
                isEvalSupported: _,
                isOffscreenCanvasSupported: S,
                isChrome: x,
                canvasMaxAreaInBytes: E,
                fontExtraProperties: M,
                useSystemFonts: j,
                cMapUrl: B ? m : null,
                standardFontDataUrl: B ? y : null
            }
        }, V = {
            disableFontFace: C,
            fontExtraProperties: M,
            ownerDocument: P,
            pdfBug: D,
            styleElement: null,
            loadingParams: {disableAutoFetch: I, enableXfa: T}
        };
        return f.promise.then((function () {
            if (s.destroyed) throw new Error("Loading aborted");
            if (f.destroyed) throw new Error("Worker was destroyed");
            const t = f.messageHandler.sendWithPromise("GetDocRequest", U, o ? [o.buffer] : null);
            let e;
            if (h) e = new zr(h, {disableRange: R, disableStream: L}); else if (!o) {
                if (!r) throw new Error("getDocument - no `url` parameter provided.");
                let t;
                if (F) {
                    t = "undefined" !== typeof fetch && "undefined" !== typeof Response && "body" in Response.prototype && ke(r) ? Kr : io
                } else t = ke(r) ? Kr : Jr;
                e = new t({
                    url: r,
                    length: W,
                    httpHeaders: l,
                    withCredentials: c,
                    rangeChunkSize: d,
                    disableRange: R,
                    disableStream: L
                })
            }
            return t.then((t => {
                if (s.destroyed) throw new Error("Loading aborted");
                if (f.destroyed) throw new Error("Worker was destroyed");
                const n = new vr(a, t, f.port), i = new Sl(n, s, e, V, H);
                s._transport = i, n.send("Ready", null)
            }))
        })).catch(s._capability.reject), s
    }

    function $o(t) {
        return "object" === typeof t && Number.isInteger(null === t || void 0 === t ? void 0 : t.num) && t.num >= 0 && Number.isInteger(null === t || void 0 === t ? void 0 : t.gen) && t.gen >= 0
    }

    class Jo {
        constructor() {
            var t, e;
            this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = "d".concat((Zo._ = (t = Zo._, e = t++, t), e)), this.destroyed = !1, this.onPassword = null, this.onProgress = null
        }

        get promise() {
            return this._capability.promise
        }

        async destroy() {
            this.destroyed = !0;
            try {
                var t, e;
                null !== (t = this._worker) && void 0 !== t && t.port && (this._worker._pendingDestroy = !0), await (null === (e = this._transport) || void 0 === e ? void 0 : e.destroy())
            } catch (i) {
                var n;
                throw null !== (n = this._worker) && void 0 !== n && n.port && delete this._worker._pendingDestroy, i
            }
            this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
        }
    }

    var Zo = {_: 0};

    class tl {
        constructor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.length = t, this.initialData = e, this.progressiveDone = n, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers()
        }

        addRangeListener(t) {
            this._rangeListeners.push(t)
        }

        addProgressListener(t) {
            this._progressListeners.push(t)
        }

        addProgressiveReadListener(t) {
            this._progressiveReadListeners.push(t)
        }

        addProgressiveDoneListener(t) {
            this._progressiveDoneListeners.push(t)
        }

        onDataRange(t, e) {
            for (const n of this._rangeListeners) n(t, e)
        }

        onDataProgress(t, e) {
            this._readyCapability.promise.then((() => {
                for (const n of this._progressListeners) n(t, e)
            }))
        }

        onDataProgressiveRead(t) {
            this._readyCapability.promise.then((() => {
                for (const e of this._progressiveReadListeners) e(t)
            }))
        }

        onDataProgressiveDone() {
            this._readyCapability.promise.then((() => {
                for (const t of this._progressiveDoneListeners) t()
            }))
        }

        transportReady() {
            this._readyCapability.resolve()
        }

        requestDataRange(t, e) {
            Ft("Abstract method PDFDataRangeTransport.requestDataRange")
        }

        abort() {
        }
    }

    class el {
        constructor(t, e) {
            this._pdfInfo = t, this._transport = e
        }

        get annotationStorage() {
            return this._transport.annotationStorage
        }

        get canvasFactory() {
            return this._transport.canvasFactory
        }

        get filterFactory() {
            return this._transport.filterFactory
        }

        get numPages() {
            return this._pdfInfo.numPages
        }

        get fingerprints() {
            return this._pdfInfo.fingerprints
        }

        get isPureXfa() {
            return Nt(this, "isPureXfa", !!this._transport._htmlForXfa)
        }

        get allXfaHtml() {
            return this._transport._htmlForXfa
        }

        getPage(t) {
            return this._transport.getPage(t)
        }

        getPageIndex(t) {
            return this._transport.getPageIndex(t)
        }

        getDestinations() {
            return this._transport.getDestinations()
        }

        getDestination(t) {
            return this._transport.getDestination(t)
        }

        getPageLabels() {
            return this._transport.getPageLabels()
        }

        getPageLayout() {
            return this._transport.getPageLayout()
        }

        getPageMode() {
            return this._transport.getPageMode()
        }

        getViewerPreferences() {
            return this._transport.getViewerPreferences()
        }

        getOpenAction() {
            return this._transport.getOpenAction()
        }

        getAttachments() {
            return this._transport.getAttachments()
        }

        getJSActions() {
            return this._transport.getDocJSActions()
        }

        getOutline() {
            return this._transport.getOutline()
        }

        getOptionalContentConfig() {
            let {intent: t = "display"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const {renderingIntent: e} = this._transport.getRenderingIntent(t);
            return this._transport.getOptionalContentConfig(e)
        }

        getPermissions() {
            return this._transport.getPermissions()
        }

        getMetadata() {
            return this._transport.getMetadata()
        }

        getMarkInfo() {
            return this._transport.getMarkInfo()
        }

        getData() {
            return this._transport.getData()
        }

        saveDocument() {
            return this._transport.saveDocument()
        }

        getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise
        }

        cleanup() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return this._transport.startCleanup(t || this.isPureXfa)
        }

        destroy() {
            return this.loadingTask.destroy()
        }

        cachedPageNumber(t) {
            return this._transport.cachedPageNumber(t)
        }

        get loadingParams() {
            return this._transport.loadingParams
        }

        get loadingTask() {
            return this._transport.loadingTask
        }

        getFieldObjects() {
            return this._transport.getFieldObjects()
        }

        hasJSActions() {
            return this._transport.hasJSActions()
        }

        getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds()
        }
    }

    var nl = new WeakMap, il = new WeakMap, sl = new WeakSet;

    class al {
        constructor(t, e, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            x(this, sl), E(this, nl, null), E(this, il, !1), this._pageIndex = t, this._pageInfo = e, this._transport = n, this._stats = i ? new Ae : null, this._pdfBug = i, this.commonObjs = n.commonObjs, this.objs = new Tl, this._maybeCleanupAfterRender = !1, this._intentStates = new Map, this.destroyed = !1
        }

        get pageNumber() {
            return this._pageIndex + 1
        }

        get rotate() {
            return this._pageInfo.rotate
        }

        get ref() {
            return this._pageInfo.ref
        }

        get userUnit() {
            return this._pageInfo.userUnit
        }

        get view() {
            return this._pageInfo.view
        }

        getViewport() {
            let {
                scale: t,
                rotation: e = this.rotate,
                offsetX: n = 0,
                offsetY: i = 0,
                dontFlip: s = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new ge({viewBox: this.view, scale: t, rotation: e, offsetX: n, offsetY: i, dontFlip: s})
        }

        getAnnotations() {
            let {intent: t = "display"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const {renderingIntent: e} = this._transport.getRenderingIntent(t);
            return this._transport.getAnnotations(this._pageIndex, e)
        }

        getJSActions() {
            return this._transport.getPageJSActions(this._pageIndex)
        }

        get filterFactory() {
            return this._transport.filterFactory
        }

        get isPureXfa() {
            return Nt(this, "isPureXfa", !!this._transport._htmlForXfa)
        }

        async getXfa() {
            var t;
            return (null === (t = this._transport._htmlForXfa) || void 0 === t ? void 0 : t.children[this._pageIndex]) || null
        }

        render(t) {
            var e, n;
            let {
                canvasContext: i,
                viewport: s,
                intent: a = "display",
                annotationMode: r = G.ENABLE,
                transform: o = null,
                background: l = null,
                optionalContentConfigPromise: c = null,
                annotationCanvasMap: u = null,
                pageColors: h = null,
                printAnnotationStorage: d = null,
                isEditing: f = !1
            } = t;
            null === (e = this._stats) || void 0 === e || e.time("Overall");
            const p = this._transport.getRenderingIntent(a, r, d, f), {renderingIntent: g, cacheKey: m} = p;
            P(il, this, !1), C(sl, this, ol).call(this), c || (c = this._transport.getOptionalContentConfig(g));
            let v = this._intentStates.get(m);
            v || (v = Object.create(null), this._intentStates.set(m, v)), v.streamReaderCancelTimeout && (clearTimeout(v.streamReaderCancelTimeout), v.streamReaderCancelTimeout = null);
            const b = !!(g & W);
            var y;
            v.displayReadyCapability || (v.displayReadyCapability = Promise.withResolvers(), v.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
            }, null === (y = this._stats) || void 0 === y || y.time("Page Request"), this._pumpOperatorList(p));
            const w = t => {
                var e;
                (v.renderTasks.delete(A), (this._maybeCleanupAfterRender || b) && P(il, this, !0), C(sl, this, rl).call(this, !b), t ? (A.capability.reject(t), this._abortOperatorList({
                    intentState: v,
                    reason: t instanceof Error ? t : new Error(t)
                })) : A.capability.resolve(), this._stats) && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), null !== (e = globalThis.Stats) && void 0 !== e && e.enabled && globalThis.Stats.add(this.pageNumber, this._stats))
            }, A = new Il({
                callback: w,
                params: {canvasContext: i, viewport: s, transform: o, background: l},
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: u,
                operatorList: v.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !b,
                pdfBug: this._pdfBug,
                pageColors: h
            });
            ((n = v).renderTasks || (n.renderTasks = new Set)).add(A);
            const k = A.task;
            return Promise.all([v.displayReadyCapability.promise, c]).then((t => {
                var e;
                let [n, i] = t;
                if (this.destroyed) w(); else {
                    if (null === (e = this._stats) || void 0 === e || e.time("Rendering"), !(i.renderingIntent & g)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                    A.initializeGraphics({transparency: n, optionalContentConfig: i}), A.operatorListChanged()
                }
            })).catch(w), k
        }

        getOperatorList() {
            let {
                intent: t = "display",
                annotationMode: e = G.ENABLE,
                printAnnotationStorage: n = null,
                isEditing: i = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const s = this._transport.getRenderingIntent(t, e, n, i, !0);
            let a, r = this._intentStates.get(s.cacheKey);
            var o, l;
            (r || (r = Object.create(null), this._intentStates.set(s.cacheKey, r)), r.opListReadCapability) || (a = Object.create(null), a.operatorListChanged = function () {
                r.operatorList.lastChunk && (r.opListReadCapability.resolve(r.operatorList), r.renderTasks.delete(a))
            }, r.opListReadCapability = Promise.withResolvers(), ((o = r).renderTasks || (o.renderTasks = new Set)).add(a), r.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
            }, null === (l = this._stats) || void 0 === l || l.time("Page Request"), this._pumpOperatorList(s));
            return r.opListReadCapability.promise
        }

        streamTextContent() {
            let {
                includeMarkedContent: t = !1,
                disableNormalization: e = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: !0 === t,
                disableNormalization: !0 === e
            }, {highWaterMark: 100, size: t => t.items.length})
        }

        getTextContent() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this._transport._htmlForXfa) return this.getXfa().then((t => Vo.textContent(t)));
            const e = this.streamTextContent(t);
            return new Promise((function (t, n) {
                const i = e.getReader(), s = {items: [], styles: Object.create(null), lang: null};
                !function e() {
                    i.read().then((function (n) {
                        var i;
                        let {value: a, done: r} = n;
                        r ? t(s) : (null !== (i = s.lang) && void 0 !== i || (s.lang = a.lang), Object.assign(s.styles, a.styles), s.items.push(...a.items), e())
                    }), n)
                }()
            }))
        }

        getStructTree() {
            return this._transport.getStructTree(this._pageIndex)
        }

        _destroy() {
            this.destroyed = !0;
            const t = [];
            for (const e of this._intentStates.values()) if (this._abortOperatorList({
                intentState: e,
                reason: new Error("Page was destroyed."),
                force: !0
            }), !e.opListReadCapability) for (const n of e.renderTasks) t.push(n.completed), n.cancel();
            return this.objs.clear(), P(il, this, !1), C(sl, this, ol).call(this), Promise.all(t)
        }

        cleanup() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            P(il, this, !0);
            const e = C(sl, this, rl).call(this, !1);
            return t && e && this._stats && (this._stats = new Ae), e
        }

        _startRenderPage(t, e) {
            var n, i;
            const s = this._intentStates.get(e);
            s && (null === (n = this._stats) || void 0 === n || n.timeEnd("Page Request"), null === (i = s.displayReadyCapability) || void 0 === i || i.resolve(t))
        }

        _renderPageChunk(t, e) {
            for (let n = 0, i = t.length; n < i; n++) e.operatorList.fnArray.push(t.fnArray[n]), e.operatorList.argsArray.push(t.argsArray[n]);
            e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
            for (const n of e.renderTasks) n.operatorListChanged();
            t.lastChunk && C(sl, this, rl).call(this, !0)
        }

        _pumpOperatorList(t) {
            let {renderingIntent: e, cacheKey: n, annotationStorageSerializable: i, modifiedIds: s} = t;
            const {map: a, transfer: r} = i, o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: e,
                cacheKey: n,
                annotationStorage: a,
                modifiedIds: s
            }, r).getReader(), l = this._intentStates.get(n);
            l.streamReader = o;
            const c = () => {
                o.read().then((t => {
                    let {value: e, done: n} = t;
                    n ? l.streamReader = null : this._transport.destroyed || (this._renderPageChunk(e, l), c())
                }), (t => {
                    if (l.streamReader = null, !this._transport.destroyed) {
                        if (l.operatorList) {
                            l.operatorList.lastChunk = !0;
                            for (const t of l.renderTasks) t.operatorListChanged();
                            C(sl, this, rl).call(this, !0)
                        }
                        if (l.displayReadyCapability) l.displayReadyCapability.reject(t); else {
                            if (!l.opListReadCapability) throw t;
                            l.opListReadCapability.reject(t)
                        }
                    }
                }))
            };
            c()
        }

        _abortOperatorList(t) {
            let {intentState: e, reason: n, force: i = !1} = t;
            if (e.streamReader) {
                if (e.streamReaderCancelTimeout && (clearTimeout(e.streamReaderCancelTimeout), e.streamReaderCancelTimeout = null), !i) {
                    if (e.renderTasks.size > 0) return;
                    if (n instanceof me) {
                        let t = 100;
                        return n.extraDelay > 0 && n.extraDelay < 1e3 && (t += n.extraDelay), void (e.streamReaderCancelTimeout = setTimeout((() => {
                            e.streamReaderCancelTimeout = null, this._abortOperatorList({
                                intentState: e,
                                reason: n,
                                force: !0
                            })
                        }), t))
                    }
                }
                if (e.streamReader.cancel(new Vt(n.message)).catch((() => {
                })), e.streamReader = null, !this._transport.destroyed) {
                    for (const [t, n] of this._intentStates) if (n === e) {
                        this._intentStates.delete(t);
                        break
                    }
                    this.cleanup()
                }
            }
        }

        get stats() {
            return this._stats
        }
    }

    function rl() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (C(sl, this, ol).call(this), !T(il, this) || this.destroyed) return !1;
        if (t) return P(nl, this, setTimeout((() => {
            P(nl, this, null), C(sl, this, rl).call(this, !1)
        }), 5e3)), !1;
        for (const {
            renderTasks: e,
            operatorList: n
        } of this._intentStates.values()) if (e.size > 0 || !n.lastChunk) return !1;
        return this._intentStates.clear(), this.objs.clear(), P(il, this, !1), !0
    }

    function ol() {
        T(nl, this) && (clearTimeout(T(nl, this)), P(nl, this, null))
    }

    var ll = new WeakMap, cl = new WeakMap;

    class ul {
        constructor() {
            E(this, ll, new Map), E(this, cl, Promise.resolve())
        }

        postMessage(t, e) {
            const n = {data: structuredClone(t, e ? {transfer: e} : null)};
            T(cl, this).then((() => {
                for (const [t] of T(ll, this)) t.call(this, n)
            }))
        }

        addEventListener(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = null;
            if ((null === n || void 0 === n ? void 0 : n.signal) instanceof AbortSignal) {
                const {signal: s} = n;
                if (s.aborted) return void Lt("LoopbackPort - cannot use an `aborted` signal.");
                const a = () => this.removeEventListener(t, e);
                i = () => s.removeEventListener("abort", a), s.addEventListener("abort", a)
            }
            T(ll, this).set(e, i)
        }

        removeEventListener(t, e) {
            const n = T(ll, this).get(e);
            null === n || void 0 === n || n(), T(ll, this).delete(e)
        }

        terminate() {
            for (const [, t] of T(ll, this)) null === t || void 0 === t || t();
            T(ll, this).clear()
        }
    }

    var hl = new WeakSet;

    class dl {
        constructor() {
            let {
                name: t = null,
                port: e = null,
                verbosity: n = Pt()
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (x(this, hl), this.name = t, this.destroyed = !1, this.verbosity = n, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
                var i;
                if (null !== (i = vl._) && void 0 !== i && i.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
                return (vl._ || (vl._ = new WeakMap)).set(e, this), void this._initializeFromPort(e)
            }
            this._initialize()
        }

        get promise() {
            return F ? Promise.all([ka.promise, this._readyCapability.promise]) : this._readyCapability.promise
        }

        get port() {
            return this._port
        }

        get messageHandler() {
            return this._messageHandler
        }

        _initializeFromPort(t) {
            this._port = t, this._messageHandler = new vr("main", "worker", t), this._messageHandler.on("ready", (function () {
            })), C(hl, this, fl).call(this)
        }

        _initialize() {
            if (ml._ || pl(dl)) return void this._setupFakeWorker();
            let {workerSrc: t} = dl;
            try {
                dl._isSameOrigin(window.location.href, t) || (t = dl._createCDNWrapper(new URL(t, window.location).href));
                const e = new Worker(t, {type: "module"}), n = new vr("main", "worker", e), i = () => {
                    s.abort(), n.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                }, s = new AbortController;
                e.addEventListener("error", (() => {
                    this._webWorker || i()
                }), {signal: s.signal}), n.on("test", (t => {
                    s.abort(), !this.destroyed && t ? (this._messageHandler = n, this._port = e, this._webWorker = e, C(hl, this, fl).call(this)) : i()
                })), n.on("ready", (t => {
                    if (s.abort(), this.destroyed) i(); else try {
                        a()
                    } catch (e) {
                        this._setupFakeWorker()
                    }
                }));
                const a = () => {
                    const t = new Uint8Array;
                    n.send("test", t, [t.buffer])
                };
                return void a()
            } catch (e) {
                Rt("The worker has been disabled.")
            }
            this._setupFakeWorker()
        }

        _setupFakeWorker() {
            ml._ || (Lt("Setting up fake worker."), ml._ = !0), dl._setupFakeWorkerGlobal.then((t => {
                var e, n;
                if (this.destroyed) return void this._readyCapability.reject(new Error("Worker was destroyed"));
                const i = new ul;
                this._port = i;
                const s = "fake".concat((gl._ = (e = gl._, n = e++, e), n)), a = new vr(s + "_worker", s, i);
                t.setup(a, i), this._messageHandler = new vr(s, s + "_worker", i), C(hl, this, fl).call(this)
            })).catch((t => {
                this._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message, '".')))
            }))
        }

        destroy() {
            var t;
            this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), null === (t = vl._) || void 0 === t || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
        }

        static fromPort(t) {
            var e;
            if (null === t || void 0 === t || !t.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
            const n = null === (e = C(dl, this, vl)._) || void 0 === e ? void 0 : e.get(t.port);
            if (n) {
                if (n._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return n
            }
            return new dl(t)
        }

        static get workerSrc() {
            if (er.workerSrc) return er.workerSrc;
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')
        }

        static get _setupFakeWorkerGlobal() {
            return Nt(this, "_setupFakeWorkerGlobal", (async () => {
                if (M(dl, this, pl)) return M(dl, this, pl);
                return (await import(this.workerSrc)).WorkerMessageHandler
            })())
        }
    }

    function fl() {
        this._readyCapability.resolve(), this._messageHandler.send("configure", {verbosity: this.verbosity})
    }

    function pl(t) {
        try {
            var e;
            return (null === (e = globalThis.pdfjsWorker) || void 0 === e ? void 0 : e.WorkerMessageHandler) || null
        } catch (n) {
            return null
        }
    }

    c = dl;
    var gl = {_: 0}, ml = {_: !1}, vl = {_: void 0};
    F && (ml._ = C(c, c, !0), er.workerSrc || (er.workerSrc = "./pdf.worker.mjs")), c._isSameOrigin = (t, e) => {
        let n;
        try {
            if (n = new URL(t), !n.origin || "null" === n.origin) return !1
        } catch (s) {
            return !1
        }
        const i = new URL(e, n);
        return n.origin === i.origin
    }, c._createCDNWrapper = t => {
        const e = 'await import("'.concat(t, '");');
        return URL.createObjectURL(new Blob([e], {type: "text/javascript"}))
    };
    var bl = new WeakMap, yl = new WeakMap, wl = new WeakMap, Al = new WeakMap, kl = new WeakMap, _l = new WeakSet;

    class Sl {
        constructor(t, e, n, i, s) {
            x(this, _l), E(this, bl, new Map), E(this, yl, new Map), E(this, wl, new Map), E(this, Al, new Map), E(this, kl, null), this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Tl, this.fontLoader = new Gs({
                ownerDocument: i.ownerDocument,
                styleElement: i.styleElement
            }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = s.canvasFactory, this.filterFactory = s.filterFactory, this.cMapReaderFactory = s.cMapReaderFactory, this.standardFontDataFactory = s.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = n, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler()
        }

        get annotationStorage() {
            return Nt(this, "annotationStorage", new js)
        }

        getRenderingIntent(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.ENABLE,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a = z, r = Ds;
            switch (t) {
                case "any":
                    a = O;
                    break;
                case "display":
                    break;
                case "print":
                    a = W;
                    break;
                default:
                    Lt("getRenderingIntent - invalid intent: ".concat(t))
            }
            const o = a & W && n instanceof Us ? n : this.annotationStorage;
            switch (e) {
                case G.DISABLE:
                    a += H;
                    break;
                case G.ENABLE:
                    break;
                case G.ENABLE_FORMS:
                    a += j;
                    break;
                case G.ENABLE_STORAGE:
                    a += B, r = o.serializable;
                    break;
                default:
                    Lt("getRenderingIntent - invalid annotationMode: ".concat(e))
            }
            i && (a += U), s && (a += V);
            const {ids: l, hash: c} = o.modifiedIds;
            return {
                renderingIntent: a,
                cacheKey: [a, r.hash, c].join("_"),
                annotationStorageSerializable: r,
                modifiedIds: l
            }
        }

        destroy() {
            var t;
            if (this.destroyCapability) return this.destroyCapability.promise;
            this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), null === (t = T(kl, this)) || void 0 === t || t.reject(new Error("Worker was destroyed during onPassword callback"));
            const e = [];
            for (const i of T(yl, this).values()) e.push(i._destroy());
            T(yl, this).clear(), T(wl, this).clear(), T(Al, this).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            const n = this.messageHandler.sendWithPromise("Terminate", null);
            return e.push(n), Promise.all(e).then((() => {
                var t;
                this.commonObjs.clear(), this.fontLoader.clear(), T(bl, this).clear(), this.filterFactory.destroy(), Ro.cleanup(), null === (t = this._networkStream) || void 0 === t || t.cancelAllRequests(new Vt("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve()
            }), this.destroyCapability.reject), this.destroyCapability.promise
        }

        setupMessageHandler() {
            const {messageHandler: t, loadingTask: e} = this;
            t.on("GetReader", ((t, e) => {
                It(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = t => {
                    this._lastProgress = {loaded: t.loaded, total: t.total}
                }, e.onPull = () => {
                    this._fullReader.read().then((function (t) {
                        let {value: n, done: i} = t;
                        i ? e.close() : (It(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(n), 1, [n]))
                    })).catch((t => {
                        e.error(t)
                    }))
                }, e.onCancel = t => {
                    this._fullReader.cancel(t), e.ready.catch((t => {
                        if (!this.destroyed) throw t
                    }))
                }
            })), t.on("ReaderHeadersReady", (async t => {
                await this._fullReader.headersReady;
                const {isStreamingSupported: n, isRangeSupported: i, contentLength: s} = this._fullReader;
                if (!n || !i) {
                    var a;
                    if (this._lastProgress) null === (a = e.onProgress) || void 0 === a || a.call(e, this._lastProgress);
                    this._fullReader.onProgress = t => {
                        var n;
                        null === (n = e.onProgress) || void 0 === n || n.call(e, {loaded: t.loaded, total: t.total})
                    }
                }
                return {isStreamingSupported: n, isRangeSupported: i, contentLength: s}
            })), t.on("GetRangeReader", ((t, e) => {
                It(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const n = this._networkStream.getRangeReader(t.begin, t.end);
                n ? (e.onPull = () => {
                    n.read().then((function (t) {
                        let {value: n, done: i} = t;
                        i ? e.close() : (It(n instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(n), 1, [n]))
                    })).catch((t => {
                        e.error(t)
                    }))
                }, e.onCancel = t => {
                    n.cancel(t), e.ready.catch((t => {
                        if (!this.destroyed) throw t
                    }))
                }) : e.close()
            })), t.on("GetDoc", (t => {
                let {pdfInfo: n} = t;
                this._numPages = n.numPages, this._htmlForXfa = n.htmlForXfa, delete n.htmlForXfa, e._capability.resolve(new el(n, this))
            })), t.on("DocException", (function (t) {
                let n;
                switch (t.name) {
                    case "PasswordException":
                        n = new zt(t.message, t.code);
                        break;
                    case "InvalidPDFException":
                        n = new jt(t.message);
                        break;
                    case "MissingPDFException":
                        n = new Bt(t.message);
                        break;
                    case "UnexpectedResponseException":
                        n = new Ht(t.message, t.status);
                        break;
                    case "UnknownErrorException":
                        n = new Wt(t.message, t.details);
                        break;
                    default:
                        Ft("DocException - expected a valid Error.")
                }
                e._capability.reject(n)
            })), t.on("PasswordRequest", (t => {
                if (P(kl, this, Promise.withResolvers()), e.onPassword) {
                    const i = t => {
                        t instanceof Error ? T(kl, this).reject(t) : T(kl, this).resolve({password: t})
                    };
                    try {
                        e.onPassword(i, t.code)
                    } catch (n) {
                        T(kl, this).reject(n)
                    }
                } else T(kl, this).reject(new zt(t.message, t.code));
                return T(kl, this).promise
            })), t.on("DataLoaded", (t => {
                var n;
                null === (n = e.onProgress) || void 0 === n || n.call(e, {
                    loaded: t.length,
                    total: t.length
                }), this.downloadInfoCapability.resolve(t)
            })), t.on("StartRenderPage", (t => {
                if (this.destroyed) return;
                T(yl, this).get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey)
            })), t.on("commonobj", (e => {
                var n;
                let [i, s, a] = e;
                if (this.destroyed) return null;
                if (this.commonObjs.has(i)) return null;
                switch (s) {
                    case "Font":
                        const {disableFontFace: e, fontExtraProperties: r, pdfBug: o} = this._params;
                        if ("error" in a) {
                            const t = a.error;
                            Lt("Error during font loading: ".concat(t)), this.commonObjs.resolve(i, t);
                            break
                        }
                        const l = o && null !== (n = globalThis.FontInspector) && void 0 !== n && n.enabled ? (t, e) => globalThis.FontInspector.fontAdded(t, e) : null,
                            c = new qs(a, {disableFontFace: e, inspectFont: l});
                        this.fontLoader.bind(c).catch((() => t.sendWithPromise("FontFallback", {id: i}))).finally((() => {
                            !r && c.data && (c.data = null), this.commonObjs.resolve(i, c)
                        }));
                        break;
                    case "CopyLocalImage":
                        const {imageRef: u} = a;
                        It(u, "The imageRef must be defined.");
                        for (const t of T(yl, this).values()) for (const [, e] of t.objs) if ((null === e || void 0 === e ? void 0 : e.ref) === u) return e.dataLen ? (this.commonObjs.resolve(i, structuredClone(e)), e.dataLen) : null;
                        break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                        this.commonObjs.resolve(i, a);
                        break;
                    default:
                        throw new Error("Got unknown common object type ".concat(s))
                }
                return null
            })), t.on("obj", (t => {
                let [e, n, i, s] = t;
                if (this.destroyed) return;
                const a = T(yl, this).get(n);
                var r;
                if (!a.objs.has(e)) if (0 !== a._intentStates.size) switch (i) {
                    case "Image":
                        a.objs.resolve(e, s), (null === s || void 0 === s ? void 0 : s.dataLen) > 1e7 && (a._maybeCleanupAfterRender = !0);
                        break;
                    case "Pattern":
                        a.objs.resolve(e, s);
                        break;
                    default:
                        throw new Error("Got unknown object type ".concat(i))
                } else null === s || void 0 === s || null === (r = s.bitmap) || void 0 === r || r.close()
            })), t.on("DocProgress", (t => {
                var n;
                this.destroyed || null === (n = e.onProgress) || void 0 === n || n.call(e, {
                    loaded: t.loaded,
                    total: t.total
                })
            })), t.on("FetchBuiltInCMap", (async t => {
                if (this.destroyed) throw new Error("Worker was destroyed.");
                if (!this.cMapReaderFactory) throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
                return this.cMapReaderFactory.fetch(t)
            })), t.on("FetchStandardFontData", (async t => {
                if (this.destroyed) throw new Error("Worker was destroyed.");
                if (!this.standardFontDataFactory) throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
                return this.standardFontDataFactory.fetch(t)
            }))
        }

        getData() {
            return this.messageHandler.sendWithPromise("GetData", null)
        }

        saveDocument() {
            var t, e;
            this.annotationStorage.size <= 0 && Lt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
            const {map: n, transfer: i} = this.annotationStorage.serializable;
            return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: n,
                filename: null !== (t = null === (e = this._fullReader) || void 0 === e ? void 0 : e.filename) && void 0 !== t ? t : null
            }, i).finally((() => {
                this.annotationStorage.resetModified()
            }))
        }

        getPage(t) {
            if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
            const e = t - 1, n = T(wl, this).get(e);
            if (n) return n;
            const i = this.messageHandler.sendWithPromise("GetPage", {pageIndex: e}).then((n => {
                if (this.destroyed) throw new Error("Transport destroyed");
                n.refStr && T(Al, this).set(n.refStr, t);
                const i = new al(e, n, this, this._params.pdfBug);
                return T(yl, this).set(e, i), i
            }));
            return T(wl, this).set(e, i), i
        }

        getPageIndex(t) {
            return $o(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
                num: t.num,
                gen: t.gen
            }) : Promise.reject(new Error("Invalid pageIndex request."))
        }

        getAnnotations(t, e) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {pageIndex: t, intent: e})
        }

        getFieldObjects() {
            return C(_l, this, xl).call(this, "GetFieldObjects")
        }

        hasJSActions() {
            return C(_l, this, xl).call(this, "HasJSActions")
        }

        getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null)
        }

        getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null)
        }

        getDestination(t) {
            return "string" !== typeof t ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {id: t})
        }

        getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null)
        }

        getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null)
        }

        getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null)
        }

        getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null)
        }

        getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null)
        }

        getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null)
        }

        getDocJSActions() {
            return C(_l, this, xl).call(this, "GetDocJSActions")
        }

        getPageJSActions(t) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {pageIndex: t})
        }

        getStructTree(t) {
            return this.messageHandler.sendWithPromise("GetStructTree", {pageIndex: t})
        }

        getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null)
        }

        getOptionalContentConfig(t) {
            return C(_l, this, xl).call(this, "GetOptionalContentConfig").then((e => new Nr(e, t)))
        }

        getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null)
        }

        getMetadata() {
            const t = "GetMetadata", e = T(bl, this).get(t);
            if (e) return e;
            const n = this.messageHandler.sendWithPromise(t, null).then((t => {
                var e, n, i, s;
                return {
                    info: t[0],
                    metadata: t[1] ? new Sr(t[1]) : null,
                    contentDispositionFilename: null !== (e = null === (n = this._fullReader) || void 0 === n ? void 0 : n.filename) && void 0 !== e ? e : null,
                    contentLength: null !== (i = null === (s = this._fullReader) || void 0 === s ? void 0 : s.contentLength) && void 0 !== i ? i : null
                }
            }));
            return T(bl, this).set(t, n), n
        }

        getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null)
        }

        async startCleanup() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const t of T(yl, this).values()) {
                    if (!t.cleanup()) throw new Error("startCleanup: Page ".concat(t.pageNumber, " is currently rendering."))
                }
                this.commonObjs.clear(), t || this.fontLoader.clear(), T(bl, this).clear(), this.filterFactory.destroy(!0), Ro.cleanup()
            }
        }

        cachedPageNumber(t) {
            var e;
            if (!$o(t)) return null;
            const n = 0 === t.gen ? "".concat(t.num, "R") : "".concat(t.num, "R").concat(t.gen);
            return null !== (e = T(Al, this).get(n)) && void 0 !== e ? e : null
        }
    }

    function xl(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const n = T(bl, this).get(t);
        if (n) return n;
        const i = this.messageHandler.sendWithPromise(t, e);
        return T(bl, this).set(t, i), i
    }

    const El = Symbol("INITIAL_DATA");
    var Cl = new WeakMap, Ml = new WeakSet;

    class Tl {
        constructor() {
            x(this, Ml), E(this, Cl, Object.create(null))
        }

        get(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (e) {
                const n = C(Ml, this, Pl).call(this, t);
                return n.promise.then((() => e(n.data))), null
            }
            const n = T(Cl, this)[t];
            if (!n || n.data === El) throw new Error("Requesting object that isn't resolved yet ".concat(t, "."));
            return n.data
        }

        has(t) {
            const e = T(Cl, this)[t];
            return !!e && e.data !== El
        }

        resolve(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const n = C(Ml, this, Pl).call(this, t);
            n.data = e, n.resolve()
        }

        clear() {
            for (const e in T(Cl, this)) {
                var t;
                const {data: n} = T(Cl, this)[e];
                null === n || void 0 === n || null === (t = n.bitmap) || void 0 === t || t.close()
            }
            P(Cl, this, Object.create(null))
        }

        * [Symbol.iterator]() {
            for (const t in T(Cl, this)) {
                const {data: e} = T(Cl, this)[t];
                e !== El && (yield [t, e])
            }
        }
    }

    function Pl(t) {
        var e;
        return (e = T(Cl, this))[t] || (e[t] = k(k({}, Promise.withResolvers()), {}, {data: El}))
    }

    var Rl = new WeakMap;

    class Ll {
        constructor(t) {
            E(this, Rl, null), P(Rl, this, t), this.onContinue = null
        }

        get promise() {
            return T(Rl, this).capability.promise
        }

        cancel() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            T(Rl, this).cancel(null, t)
        }

        get separateAnnots() {
            const {separateAnnots: t} = T(Rl, this).operatorList;
            if (!t) return !1;
            const {annotationCanvasMap: e} = T(Rl, this);
            return t.form || t.canvas && (null === e || void 0 === e ? void 0 : e.size) > 0
        }
    }

    var Fl = new WeakMap;

    class Il {
        constructor(t) {
            let {
                callback: e,
                params: n,
                objs: i,
                commonObjs: s,
                annotationCanvasMap: a,
                operatorList: r,
                pageIndex: o,
                canvasFactory: l,
                filterFactory: c,
                useRequestAnimationFrame: u = !1,
                pdfBug: h = !1,
                pageColors: d = null
            } = t;
            E(this, Fl, null), this.callback = e, this.params = n, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = a, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = c, this._pdfBug = h, this.pageColors = d, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = !0 === u && "undefined" !== typeof window, this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Ll(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = n.canvasContext.canvas
        }

        get completed() {
            return this.capability.promise.catch((function () {
            }))
        }

        initializeGraphics(t) {
            var e, n;
            let {transparency: i = !1, optionalContentConfig: s} = t;
            if (this.cancelled) return;
            if (this._canvas) {
                if (Dl._.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                Dl._.add(this._canvas)
            }
            this._pdfBug && null !== (e = globalThis.StepperManager) && void 0 !== e && e.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
            const {canvasContext: a, viewport: r, transform: o, background: l} = this.params;
            this.gfx = new Ja(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {optionalContentConfig: s}, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: o,
                viewport: r,
                transparency: i,
                background: l
            }), this.operatorListIdx = 0, this.graphicsReady = !0, null === (n = this.graphicsReadyCallback) || void 0 === n || n.call(this)
        }

        cancel() {
            var t;
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.running = !1, this.cancelled = !0, null === (t = this.gfx) || void 0 === t || t.endDrawing(), T(Fl, this) && (window.cancelAnimationFrame(T(Fl, this)), P(Fl, this, null)), Dl._.delete(this._canvas), this.callback(e || new me("Rendering cancelled, page ".concat(this._pageIndex + 1), n))
        }

        operatorListChanged() {
            var t;
            this.graphicsReady ? (null === (t = this.stepper) || void 0 === t || t.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound)
        }

        _continue() {
            this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
        }

        _scheduleNext() {
            this._useRequestAnimationFrame ? P(Fl, this, window.requestAnimationFrame((() => {
                P(Fl, this, null), this._nextBound().catch(this._cancelBound)
            }))) : Promise.resolve().then(this._nextBound).catch(this._cancelBound)
        }

        async _next() {
            this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Dl._.delete(this._canvas), this.callback())))
        }
    }

    var Dl = {_: new WeakSet};
    const Nl = "4.8.69", Ol = "3634dab10";

    function zl(t) {
        return Math.floor(255 * Math.max(0, Math.min(1, t))).toString(16).padStart(2, "0")
    }

    function Wl(t) {
        return Math.max(0, Math.min(255, 255 * t))
    }

    class jl {
        static CMYK_G(t) {
            let [e, n, i, s] = t;
            return ["G", 1 - Math.min(1, .3 * e + .59 * i + .11 * n + s)]
        }

        static G_CMYK(t) {
            let [e] = t;
            return ["CMYK", 0, 0, 0, 1 - e]
        }

        static G_RGB(t) {
            let [e] = t;
            return ["RGB", e, e, e]
        }

        static G_rgb(t) {
            let [e] = t;
            return e = Wl(e), [e, e, e]
        }

        static G_HTML(t) {
            let [e] = t;
            const n = zl(e);
            return "#".concat(n).concat(n).concat(n)
        }

        static RGB_G(t) {
            let [e, n, i] = t;
            return ["G", .3 * e + .59 * n + .11 * i]
        }

        static RGB_rgb(t) {
            return t.map(Wl)
        }

        static RGB_HTML(t) {
            return "#".concat(t.map(zl).join(""))
        }

        static T_HTML() {
            return "#00000000"
        }

        static T_rgb() {
            return [null]
        }

        static CMYK_RGB(t) {
            let [e, n, i, s] = t;
            return ["RGB", 1 - Math.min(1, e + s), 1 - Math.min(1, i + s), 1 - Math.min(1, n + s)]
        }

        static CMYK_rgb(t) {
            let [e, n, i, s] = t;
            return [Wl(1 - Math.min(1, e + s)), Wl(1 - Math.min(1, i + s)), Wl(1 - Math.min(1, n + s))]
        }

        static CMYK_HTML(t) {
            const e = this.CMYK_RGB(t).slice(1);
            return this.RGB_HTML(e)
        }

        static RGB_CMYK(t) {
            let [e, n, i] = t;
            const s = 1 - e, a = 1 - n, r = 1 - i;
            return ["CMYK", s, a, r, Math.min(s, a, r)]
        }
    }

    class Bl {
        create(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
            const i = this._createSVG("svg:svg");
            return i.setAttribute("version", "1.1"), n || (i.setAttribute("width", "".concat(t, "px")), i.setAttribute("height", "".concat(e, "px"))), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", "0 0 ".concat(t, " ").concat(e)), i
        }

        createElement(t) {
            if ("string" !== typeof t) throw new Error("Invalid SVG element type");
            return this._createSVG(t)
        }

        _createSVG(t) {
            Ft("Abstract method `_createSVG` called.")
        }
    }

    class Hl extends Bl {
        _createSVG(t) {
            return document.createElementNS(de, t)
        }
    }

    class Ul {
        static setupStorage(t, e, n, i, s) {
            const a = i.getValue(e, {value: null});
            switch (n.name) {
                case "textarea":
                    if (null !== a.value && (t.textContent = a.value), "print" === s) break;
                    t.addEventListener("input", (t => {
                        i.setValue(e, {value: t.target.value})
                    }));
                    break;
                case "input":
                    if ("radio" === n.attributes.type || "checkbox" === n.attributes.type) {
                        if (a.value === n.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === n.attributes.xfaOff && t.removeAttribute("checked"), "print" === s) break;
                        t.addEventListener("change", (t => {
                            i.setValue(e, {value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")})
                        }))
                    } else {
                        if (null !== a.value && t.setAttribute("value", a.value), "print" === s) break;
                        t.addEventListener("input", (t => {
                            i.setValue(e, {value: t.target.value})
                        }))
                    }
                    break;
                case "select":
                    if (null !== a.value) {
                        t.setAttribute("value", a.value);
                        for (const t of n.children) t.attributes.value === a.value ? t.attributes.selected = !0 : t.attributes.hasOwnProperty("selected") && delete t.attributes.selected
                    }
                    t.addEventListener("input", (t => {
                        const n = t.target.options, s = -1 === n.selectedIndex ? "" : n[n.selectedIndex].value;
                        i.setValue(e, {value: s})
                    }))
            }
        }

        static setAttributes(t) {
            let {html: e, element: n, storage: i = null, intent: s, linkService: a} = t;
            const {attributes: r} = n, o = e instanceof HTMLAnchorElement;
            "radio" === r.type && (r.name = "".concat(r.name, "-").concat(s));
            for (const [l, c] of Object.entries(r)) if (null !== c && void 0 !== c) switch (l) {
                case "class":
                    c.length && e.setAttribute(l, c.join(" "));
                    break;
                case "dataId":
                    break;
                case "id":
                    e.setAttribute("data-element-id", c);
                    break;
                case "style":
                    Object.assign(e.style, c);
                    break;
                case "textContent":
                    e.textContent = c;
                    break;
                default:
                    (!o || "href" !== l && "newWindow" !== l) && e.setAttribute(l, c)
            }
            o && a.addLinkAttributes(e, r.href, r.newWindow), i && r.dataId && this.setupStorage(e, r.dataId, n, i)
        }

        static render(t) {
            const e = t.annotationStorage, n = t.linkService, i = t.xfaHtml, s = t.intent || "display",
                a = document.createElement(i.name);
            i.attributes && this.setAttributes({html: a, element: i, intent: s, linkService: n});
            const r = "richText" !== s, o = t.div;
            if (o.append(a), t.viewport) {
                const e = "matrix(".concat(t.viewport.transform.join(","), ")");
                o.style.transform = e
            }
            r && o.setAttribute("class", "xfaLayer xfaFont");
            const l = [];
            if (0 === i.children.length) {
                if (i.value) {
                    const t = document.createTextNode(i.value);
                    a.append(t), r && Vo.shouldBuildText(i.name) && l.push(t)
                }
                return {textDivs: l}
            }
            const c = [[i, -1, a]];
            for (; c.length > 0;) {
                var u, h;
                const [t, i, a] = c.at(-1);
                if (i + 1 === t.children.length) {
                    c.pop();
                    continue
                }
                const o = t.children[++c.at(-1)[1]];
                if (null === o) continue;
                const {name: d} = o;
                if ("#text" === d) {
                    const t = document.createTextNode(o.value);
                    l.push(t), a.append(t);
                    continue
                }
                const f = null !== o && void 0 !== o && null !== (u = o.attributes) && void 0 !== u && u.xmlns ? document.createElementNS(o.attributes.xmlns, d) : document.createElement(d);
                if (a.append(f), o.attributes && this.setAttributes({
                    html: f,
                    element: o,
                    storage: e,
                    intent: s,
                    linkService: n
                }), (null === (h = o.children) || void 0 === h ? void 0 : h.length) > 0) c.push([o, -1, f]); else if (o.value) {
                    const t = document.createTextNode(o.value);
                    r && Vo.shouldBuildText(d) && l.push(t), f.append(t)
                }
            }
            for (const d of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) d.setAttribute("readOnly", !0);
            return {textDivs: l}
        }

        static update(t) {
            const e = "matrix(".concat(t.viewport.transform.join(","), ")");
            t.div.style.transform = e, t.div.hidden = !1
        }
    }

    const Vl = 1e3, Gl = new WeakSet;

    function ql(t) {
        return {width: t[2] - t[0], height: t[3] - t[1]}
    }

    class Xl {
        static create(t) {
            switch (t.data.annotationType) {
                case it:
                    return new ec(t);
                case nt:
                    return new ac(t);
                case yt:
                    switch (t.data.fieldType) {
                        case "Tx":
                            return new oc(t);
                        case "Btn":
                            return t.data.radioButton ? new uc(t) : t.data.checkBox ? new cc(t) : new hc(t);
                        case "Ch":
                            return new dc(t);
                        case "Sig":
                            return new lc(t)
                    }
                    return new rc(t);
                case vt:
                    return new fc(t);
                case st:
                    return new Vc(t);
                case at:
                    return new qc(t);
                case rt:
                    return new Kc(t);
                case ot:
                    return new Qc(t);
                case ct:
                    return new Jc(t);
                case gt:
                    return new tu(t);
                case mt:
                    return new nu(t);
                case lt:
                    return new Zc(t);
                case ut:
                    return new iu(t);
                case ht:
                    return new su(t);
                case dt:
                    return new au(t);
                case ft:
                    return new ru(t);
                case pt:
                    return new ou(t);
                case bt:
                    return new uu(t);
                default:
                    return new Jl(t)
            }
        }
    }

    var Kl = new WeakMap, Yl = new WeakMap, Ql = new WeakMap, $l = new WeakSet;

    class Jl {
        constructor(t) {
            let {
                isRenderable: e = !1,
                ignoreBorder: n = !1,
                createQuadrilaterals: i = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            x(this, $l), E(this, Kl, null), E(this, Yl, !1), E(this, Ql, null), this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(n)), i && this._createQuadrilaterals()
        }

        static _hasPopupData(t) {
            let {titleObj: e, contentsObj: n, richText: i} = t;
            return !!(null !== e && void 0 !== e && e.str || null !== n && void 0 !== n && n.str || null !== i && void 0 !== i && i.str)
        }

        get _isEditable() {
            return this.data.isEditable
        }

        get hasPopupData() {
            return Jl._hasPopupData(this.data)
        }

        updateEdited(t) {
            var e;
            if (!this.container) return;
            T(Kl, this) || P(Kl, this, {rect: this.data.rect.slice(0)});
            const {rect: n} = t;
            n && C($l, this, Zl).call(this, n), null === (e = T(Ql, this)) || void 0 === e || e.popup.updateEdited(t)
        }

        resetEdited() {
            var t;
            T(Kl, this) && (C($l, this, Zl).call(this, T(Kl, this).rect), null === (t = T(Ql, this)) || void 0 === t || t.popup.resetEdited(), P(Kl, this, null))
        }

        _createContainer(t) {
            const {data: e, parent: {page: n, viewport: i}} = this, s = document.createElement("section");
            s.setAttribute("data-annotation-id", e.id), this instanceof rc || (s.tabIndex = Vl);
            const {style: a} = s;
            if (a.zIndex = this.parent.zIndex++, e.alternativeText && (s.title = e.alternativeText), e.noRotate && s.classList.add("norotate"), !e.rect || this instanceof fc) {
                const {rotation: t} = e;
                return e.hasOwnCanvas || 0 === t || this.setRotation(t, s), s
            }
            const {width: r, height: o} = ql(e.rect);
            if (!t && e.borderStyle.width > 0) {
                a.borderWidth = "".concat(e.borderStyle.width, "px");
                const t = e.borderStyle.horizontalCornerRadius, n = e.borderStyle.verticalCornerRadius;
                if (t > 0 || n > 0) {
                    const e = "calc(".concat(t, "px * var(--scale-factor)) / calc(").concat(n, "px * var(--scale-factor))");
                    a.borderRadius = e
                } else if (this instanceof uc) {
                    const t = "calc(".concat(r, "px * var(--scale-factor)) / calc(").concat(o, "px * var(--scale-factor))");
                    a.borderRadius = t
                }
                switch (e.borderStyle.style) {
                    case wt:
                        a.borderStyle = "solid";
                        break;
                    case At:
                        a.borderStyle = "dashed";
                        break;
                    case kt:
                        Lt("Unimplemented border style: beveled");
                        break;
                    case _t:
                        Lt("Unimplemented border style: inset");
                        break;
                    case St:
                        a.borderBottomStyle = "solid"
                }
                const i = e.borderColor || null;
                i ? (P(Yl, this, !0), a.borderColor = Qt.makeHexColor(0 | i[0], 0 | i[1], 0 | i[2])) : a.borderWidth = 0
            }
            const l = Qt.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]), {
                pageWidth: c,
                pageHeight: u,
                pageX: h,
                pageY: d
            } = i.rawDims;
            a.left = "".concat(100 * (l[0] - h) / c, "%"), a.top = "".concat(100 * (l[1] - d) / u, "%");
            const {rotation: f} = e;
            return e.hasOwnCanvas || 0 === f ? (a.width = "".concat(100 * r / c, "%"), a.height = "".concat(100 * o / u, "%")) : this.setRotation(f, s), s
        }

        setRotation(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.container;
            if (!this.data.rect) return;
            const {pageWidth: n, pageHeight: i} = this.parent.viewport.rawDims, {
                width: s,
                height: a
            } = ql(this.data.rect);
            let r, o;
            t % 180 === 0 ? (r = 100 * s / n, o = 100 * a / i) : (r = 100 * a / n, o = 100 * s / i), e.style.width = "".concat(r, "%"), e.style.height = "".concat(o, "%"), e.setAttribute("data-main-rotation", (360 - t) % 360)
        }

        get _commonActions() {
            const t = (t, e, n) => {
                const i = n.detail[t], s = i[0], a = i.slice(1);
                n.target.style[e] = jl["".concat(s, "_HTML")](a), this.annotationStorage.setValue(this.data.id, {[e]: jl["".concat(s, "_rgb")](a)})
            };
            return Nt(this, "_commonActions", {
                display: t => {
                    const {display: e} = t.detail, n = e % 2 === 1;
                    this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                        noView: n,
                        noPrint: 1 === e || 2 === e
                    })
                }, print: t => {
                    this.annotationStorage.setValue(this.data.id, {noPrint: !t.detail.print})
                }, hidden: t => {
                    const {hidden: e} = t.detail;
                    this.container.style.visibility = e ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                        noPrint: e,
                        noView: e
                    })
                }, focus: t => {
                    setTimeout((() => t.target.focus({preventScroll: !1})), 0)
                }, userName: t => {
                    t.target.title = t.detail.userName
                }, readonly: t => {
                    t.target.disabled = t.detail.readonly
                }, required: t => {
                    this._setRequired(t.target, t.detail.required)
                }, bgColor: e => {
                    t("bgColor", "backgroundColor", e)
                }, fillColor: e => {
                    t("fillColor", "backgroundColor", e)
                }, fgColor: e => {
                    t("fgColor", "color", e)
                }, textColor: e => {
                    t("textColor", "color", e)
                }, borderColor: e => {
                    t("borderColor", "borderColor", e)
                }, strokeColor: e => {
                    t("strokeColor", "borderColor", e)
                }, rotation: t => {
                    const e = t.detail.rotation;
                    this.setRotation(e), this.annotationStorage.setValue(this.data.id, {rotation: e})
                }
            })
        }

        _dispatchEventFromSandbox(t, e) {
            const n = this._commonActions;
            for (const i of Object.keys(e.detail)) {
                const s = t[i] || n[i];
                null === s || void 0 === s || s(e)
            }
        }

        _setDefaultPropertiesFromJS(t) {
            if (!this.enableScripting) return;
            const e = this.annotationStorage.getRawValue(this.data.id);
            if (!e) return;
            const n = this._commonActions;
            for (const [i, s] of Object.entries(e)) {
                const a = n[i];
                if (a) {
                    a({detail: {[i]: s}, target: t}), delete e[i]
                }
            }
        }

        _createQuadrilaterals() {
            if (!this.container) return;
            const {quadPoints: t} = this.data;
            if (!t) return;
            const [e, n, i, s] = this.data.rect.map((t => Math.fround(t)));
            if (8 === t.length) {
                const [a, r, o, l] = t.subarray(2, 6);
                if (i === a && s === r && e === o && n === l) return
            }
            const {style: a} = this.container;
            let r;
            if (T(Yl, this)) {
                const {borderColor: t, borderWidth: e} = a;
                a.borderWidth = 0, r = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', '<g fill="transparent" stroke="'.concat(t, '" stroke-width="').concat(e, '">')], this.container.classList.add("hasBorder")
            }
            const o = i - e, l = s - n, {svgFactory: c} = this, u = c.createElement("svg");
            u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
            const h = c.createElement("defs");
            u.append(h);
            const d = c.createElement("clipPath"), f = "clippath_".concat(this.data.id);
            d.setAttribute("id", f), d.setAttribute("clipPathUnits", "objectBoundingBox"), h.append(d);
            for (let g = 2, m = t.length; g < m; g += 8) {
                var p;
                const n = t[g], i = t[g + 1], a = t[g + 2], u = t[g + 3], h = c.createElement("rect"), f = (a - e) / o,
                    m = (s - i) / l, v = (n - a) / o, b = (i - u) / l;
                h.setAttribute("x", f), h.setAttribute("y", m), h.setAttribute("width", v), h.setAttribute("height", b), d.append(h), null === (p = r) || void 0 === p || p.push('<rect vector-effect="non-scaling-stroke" x="'.concat(f, '" y="').concat(m, '" width="').concat(v, '" height="').concat(b, '"/>'))
            }
            T(Yl, this) && (r.push("</g></svg>')"), a.backgroundImage = r.join("")), this.container.append(u), this.container.style.clipPath = "url(#".concat(f, ")")
        }

        _createPopup() {
            const {data: t} = this, e = P(Ql, this, new fc({
                data: {
                    color: t.color,
                    titleObj: t.titleObj,
                    modificationDate: t.modificationDate,
                    contentsObj: t.contentsObj,
                    richText: t.richText,
                    parentRect: t.rect,
                    borderStyle: 0,
                    id: "popup_".concat(t.id),
                    rotation: t.rotation
                }, parent: this.parent, elements: [this]
            }));
            this.parent.div.append(e.render())
        }

        render() {
            Ft("Abstract method `AnnotationElement.render` called")
        }

        _getElementsByName(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            const n = [];
            if (this._fieldObjects) {
                const i = this._fieldObjects[t];
                if (i) for (const {page: t, id: s, exportValues: a} of i) {
                    if (-1 === t) continue;
                    if (s === e) continue;
                    const i = "string" === typeof a ? a : null,
                        r = document.querySelector('[data-element-id="'.concat(s, '"]'));
                    !r || Gl.has(r) ? n.push({
                        id: s,
                        exportValue: i,
                        domElement: r
                    }) : Lt("_getElementsByName - element not allowed: ".concat(s))
                }
                return n
            }
            for (const i of document.getElementsByName(t)) {
                const {exportValue: t} = i, s = i.getAttribute("data-element-id");
                s !== e && (Gl.has(i) && n.push({id: s, exportValue: t, domElement: i}))
            }
            return n
        }

        show() {
            var t;
            this.container && (this.container.hidden = !1), null === (t = this.popup) || void 0 === t || t.maybeShow()
        }

        hide() {
            var t;
            this.container && (this.container.hidden = !0), null === (t = this.popup) || void 0 === t || t.forceHide()
        }

        getElementsToTriggerPopup() {
            return this.container
        }

        addHighlightArea() {
            const t = this.getElementsToTriggerPopup();
            if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea"); else t.classList.add("highlightArea")
        }

        _editOnDoubleClick() {
            if (!this._isEditable) return;
            const {annotationEditorType: t, data: {id: e}} = this;
            this.container.addEventListener("dblclick", (() => {
                var n;
                null === (n = this.linkService.eventBus) || void 0 === n || n.dispatch("switchannotationeditormode", {
                    source: this,
                    mode: t,
                    editId: e
                })
            }))
        }
    }

    function Zl(t) {
        const {
            container: {style: e},
            data: {rect: n, rotation: i},
            parent: {viewport: {rawDims: {pageWidth: s, pageHeight: a, pageX: r, pageY: o}}}
        } = this;
        null === n || void 0 === n || n.splice(0, 4, ...t);
        const {width: l, height: c} = ql(t);
        e.left = "".concat(100 * (t[0] - r) / s, "%"), e.top = "".concat(100 * (a - t[3] + o) / a, "%"), 0 === i ? (e.width = "".concat(100 * l / s, "%"), e.height = "".concat(100 * c / a, "%")) : this.setRotation(i)
    }

    var tc = new WeakSet;

    class ec extends Jl {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            super(t, {
                isRenderable: !0,
                ignoreBorder: !(null === e || void 0 === e || !e.ignoreBorder),
                createQuadrilaterals: !0
            }), x(this, tc), this.isTooltipOnly = t.data.isTooltipOnly
        }

        render() {
            const {data: t, linkService: e} = this, n = document.createElement("a");
            n.setAttribute("data-element-id", t.id);
            let i = !1;
            return t.url ? (e.addLinkAttributes(n, t.url, t.newWindow), i = !0) : t.action ? (this._bindNamedAction(n, t.action), i = !0) : t.attachment ? (C(tc, this, ic).call(this, n, t.attachment, t.attachmentDest), i = !0) : t.setOCGState ? (C(tc, this, sc).call(this, n, t.setOCGState), i = !0) : t.dest ? (this._bindLink(n, t.dest), i = !0) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, t), i = !0), t.resetForm ? (this._bindResetFormAction(n, t.resetForm), i = !0) : this.isTooltipOnly && !i && (this._bindLink(n, ""), i = !0)), this.container.classList.add("linkAnnotation"), i && this.container.append(n), this.container
        }

        _bindLink(t, e) {
            t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), !1), (e || "" === e) && C(tc, this, nc).call(this)
        }

        _bindNamedAction(t, e) {
            t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), !1), C(tc, this, nc).call(this)
        }

        _bindJSAction(t, e) {
            t.href = this.linkService.getAnchorUrl("");
            const n = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
            for (const i of Object.keys(e.actions)) {
                const s = n.get(i);
                s && (t[s] = () => {
                    var t;
                    return null === (t = this.linkService.eventBus) || void 0 === t || t.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {id: e.id, name: i}
                    }), !1
                })
            }
            t.onclick || (t.onclick = () => !1), C(tc, this, nc).call(this)
        }

        _bindResetFormAction(t, e) {
            const n = t.onclick;
            if (n || (t.href = this.linkService.getAnchorUrl("")), C(tc, this, nc).call(this), !this._fieldObjects) return Lt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), void (n || (t.onclick = () => !1));
            t.onclick = () => {
                null === n || void 0 === n || n();
                const {fields: t, refs: i, include: s} = e, a = [];
                if (0 !== t.length || 0 !== i.length) {
                    const e = new Set(i);
                    for (const n of t) {
                        const t = this._fieldObjects[n] || [];
                        for (const {id: n} of t) e.add(n)
                    }
                    for (const t of Object.values(this._fieldObjects)) for (const n of t) e.has(n.id) === s && a.push(n)
                } else for (const e of Object.values(this._fieldObjects)) a.push(...e);
                const r = this.annotationStorage, o = [];
                for (const e of a) {
                    const {id: t} = e;
                    switch (o.push(t), e.type) {
                        case "text": {
                            const n = e.defaultValue || "";
                            r.setValue(t, {value: n});
                            break
                        }
                        case "checkbox":
                        case "radiobutton": {
                            const n = e.defaultValue === e.exportValues;
                            r.setValue(t, {value: n});
                            break
                        }
                        case "combobox":
                        case "listbox": {
                            const n = e.defaultValue || "";
                            r.setValue(t, {value: n});
                            break
                        }
                        default:
                            continue
                    }
                    const n = document.querySelector('[data-element-id="'.concat(t, '"]'));
                    n && (Gl.has(n) ? n.dispatchEvent(new Event("resetform")) : Lt("_bindResetFormAction - element not allowed: ".concat(t)))
                }
                var l;
                this.enableScripting && (null === (l = this.linkService.eventBus) || void 0 === l || l.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {id: "app", ids: o, name: "ResetForm"}
                }));
                return !1
            }
        }
    }

    function nc() {
        this.container.setAttribute("data-internal-link", "")
    }

    function ic(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        t.href = this.linkService.getAnchorUrl(""), e.description && (t.title = e.description), t.onclick = () => {
            var t;
            return null === (t = this.downloadManager) || void 0 === t || t.openOrDownloadData(e.content, e.filename, n), !1
        }, C(tc, this, nc).call(this)
    }

    function sc(t, e) {
        t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), !1), C(tc, this, nc).call(this)
    }

    class ac extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0})
        }

        render() {
            this.container.classList.add("textAnnotation");
            const t = document.createElement("img");
            return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({type: this.data.name})), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container
        }
    }

    class rc extends Jl {
        render() {
            return this.container
        }

        showElementAndHideCanvas(t) {
            var e;
            this.data.hasOwnCanvas && ("CANVAS" === (null === (e = t.previousSibling) || void 0 === e ? void 0 : e.nodeName) && (t.previousSibling.hidden = !0), t.hidden = !1)
        }

        _getKeyModifier(t) {
            return Kt.platform.isMac ? t.metaKey : t.ctrlKey
        }

        _setEventListener(t, e, n, i, s) {
            n.includes("mouse") ? t.addEventListener(n, (t => {
                var e;
                null === (e = this.linkService.eventBus) || void 0 === e || e.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                        id: this.data.id,
                        name: i,
                        value: s(t),
                        shift: t.shiftKey,
                        modifier: this._getKeyModifier(t)
                    }
                })
            })) : t.addEventListener(n, (t => {
                var a;
                if ("blur" === n) {
                    if (!e.focused || !t.relatedTarget) return;
                    e.focused = !1
                } else if ("focus" === n) {
                    if (e.focused) return;
                    e.focused = !0
                }
                s && (null === (a = this.linkService.eventBus) || void 0 === a || a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {id: this.data.id, name: i, value: s(t)}
                }))
            }))
        }

        _setEventListeners(t, e, n, i) {
            for (const [o, l] of n) {
                var s, a, r;
                if ("Action" === l || null !== (s = this.data.actions) && void 0 !== s && s[l]) "Focus" !== l && "Blur" !== l || e || (e = {focused: !1}), this._setEventListener(t, e, o, l, i), "Focus" !== l || null !== (a = this.data.actions) && void 0 !== a && a.Blur ? "Blur" !== l || null !== (r = this.data.actions) && void 0 !== r && r.Focus || this._setEventListener(t, e, "focus", "Focus", null) : this._setEventListener(t, e, "blur", "Blur", null)
            }
        }

        _setBackgroundColor(t) {
            const e = this.data.backgroundColor || null;
            t.style.backgroundColor = null === e ? "transparent" : Qt.makeHexColor(e[0], e[1], e[2])
        }

        _setTextStyle(t) {
            const e = ["left", "center", "right"], {fontColor: n} = this.data.defaultAppearanceData,
                i = this.data.defaultAppearanceData.fontSize || 9, s = t.style;
            let a;
            const r = t => Math.round(10 * t) / 10;
            if (this.data.multiLine) {
                const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e = t / (Math.round(t / (N * i)) || 1);
                a = Math.min(i, r(e / N))
            } else {
                const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
                a = Math.min(i, r(t / N))
            }
            s.fontSize = "calc(".concat(a, "px * var(--scale-factor))"), s.color = Qt.makeHexColor(n[0], n[1], n[2]), null !== this.data.textAlignment && (s.textAlign = e[this.data.textAlignment])
        }

        _setRequired(t, e) {
            e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e)
        }
    }

    class oc extends rc {
        constructor(t) {
            super(t, {isRenderable: t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue})
        }

        setPropertyOnSiblings(t, e, n, i) {
            const s = this.annotationStorage;
            for (const a of this._getElementsByName(t.name, t.id)) a.domElement && (a.domElement[e] = n), s.setValue(a.id, {[i]: n})
        }

        render() {
            const t = this.annotationStorage, e = this.data.id;
            this.container.classList.add("textWidgetAnnotation");
            let n = null;
            if (this.renderForms) {
                var i;
                const a = t.getValue(e, {value: this.data.fieldValue});
                let r = a.value || "";
                const o = t.getValue(e, {charLimit: this.data.maxLen}).charLimit;
                o && r.length > o && (r = r.slice(0, o));
                let l = a.formattedValue || (null === (i = this.data.textContent) || void 0 === i ? void 0 : i.join("\n")) || null;
                l && this.data.comb && (l = l.replaceAll(/\s+/g, ""));
                const c = {userValue: r, formattedValue: l, lastCommittedValue: null, commitKey: 1, focused: !1};
                this.data.multiLine ? (n = document.createElement("textarea"), n.textContent = null !== l && void 0 !== l ? l : r, this.data.doNotScroll && (n.style.overflowY = "hidden")) : (n = document.createElement("input"), n.type = "text", n.setAttribute("value", null !== l && void 0 !== l ? l : r), this.data.doNotScroll && (n.style.overflowX = "hidden")), this.data.hasOwnCanvas && (n.hidden = !0), Gl.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, n.name = this.data.fieldName, n.tabIndex = Vl, this._setRequired(n, this.data.required), o && (n.maxLength = o), n.addEventListener("input", (i => {
                    t.setValue(e, {value: i.target.value}), this.setPropertyOnSiblings(n, "value", i.target.value, "value"), c.formattedValue = null
                })), n.addEventListener("resetform", (t => {
                    var e;
                    const i = null !== (e = this.data.defaultFieldValue) && void 0 !== e ? e : "";
                    n.value = c.userValue = i, c.formattedValue = null
                }));
                let u = t => {
                    const {formattedValue: e} = c;
                    null !== e && void 0 !== e && (t.target.value = e), t.target.scrollLeft = 0
                };
                if (this.enableScripting && this.hasJSActions) {
                    var s;
                    n.addEventListener("focus", (t => {
                        var e;
                        if (c.focused) return;
                        const {target: n} = t;
                        c.userValue && (n.value = c.userValue), c.lastCommittedValue = n.value, c.commitKey = 1, null !== (e = this.data.actions) && void 0 !== e && e.Focus || (c.focused = !0)
                    })), n.addEventListener("updatefromsandbox", (n => {
                        this.showElementAndHideCanvas(n.target);
                        const i = {
                            value(n) {
                                var i;
                                c.userValue = null !== (i = n.detail.value) && void 0 !== i ? i : "", t.setValue(e, {value: c.userValue.toString()}), n.target.value = c.userValue
                            }, formattedValue(n) {
                                const {formattedValue: i} = n.detail;
                                c.formattedValue = i, null !== i && void 0 !== i && n.target !== document.activeElement && (n.target.value = i), t.setValue(e, {formattedValue: i})
                            }, selRange(t) {
                                t.target.setSelectionRange(...t.detail.selRange)
                            }, charLimit: n => {
                                var i;
                                const {charLimit: s} = n.detail, {target: a} = n;
                                if (0 === s) return void a.removeAttribute("maxLength");
                                a.setAttribute("maxLength", s);
                                let r = c.userValue;
                                !r || r.length <= s || (r = r.slice(0, s), a.value = c.userValue = r, t.setValue(e, {value: r}), null === (i = this.linkService.eventBus) || void 0 === i || i.dispatch("dispatcheventinsandbox", {
                                    source: this,
                                    detail: {
                                        id: e,
                                        name: "Keystroke",
                                        value: r,
                                        willCommit: !0,
                                        commitKey: 1,
                                        selStart: a.selectionStart,
                                        selEnd: a.selectionEnd
                                    }
                                }))
                            }
                        };
                        this._dispatchEventFromSandbox(i, n)
                    })), n.addEventListener("keydown", (t => {
                        var n;
                        c.commitKey = 1;
                        let i = -1;
                        if ("Escape" === t.key ? i = 0 : "Enter" !== t.key || this.data.multiLine ? "Tab" === t.key && (c.commitKey = 3) : i = 2, -1 === i) return;
                        const {value: s} = t.target;
                        c.lastCommittedValue !== s && (c.lastCommittedValue = s, c.userValue = s, null === (n = this.linkService.eventBus) || void 0 === n || n.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                                id: e,
                                name: "Keystroke",
                                value: s,
                                willCommit: !0,
                                commitKey: i,
                                selStart: t.target.selectionStart,
                                selEnd: t.target.selectionEnd
                            }
                        }))
                    }));
                    const i = u;
                    u = null, n.addEventListener("blur", (t => {
                        var n;
                        if (!c.focused || !t.relatedTarget) return;
                        null !== (n = this.data.actions) && void 0 !== n && n.Blur || (c.focused = !1);
                        const {value: s} = t.target;
                        var a;
                        (c.userValue = s, c.lastCommittedValue !== s) && (null === (a = this.linkService.eventBus) || void 0 === a || a.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                                id: e,
                                name: "Keystroke",
                                value: s,
                                willCommit: !0,
                                commitKey: c.commitKey,
                                selStart: t.target.selectionStart,
                                selEnd: t.target.selectionEnd
                            }
                        }));
                        i(t)
                    })), null !== (s = this.data.actions) && void 0 !== s && s.Keystroke && n.addEventListener("beforeinput", (t => {
                        var n;
                        c.lastCommittedValue = null;
                        const {data: i, target: s} = t, {value: a, selectionStart: r, selectionEnd: o} = s;
                        let l = r, u = o;
                        switch (t.inputType) {
                            case "deleteWordBackward": {
                                const t = a.substring(0, r).match(/\w*[^\w]*$/);
                                t && (l -= t[0].length);
                                break
                            }
                            case "deleteWordForward": {
                                const t = a.substring(r).match(/^[^\w]*\w*/);
                                t && (u += t[0].length);
                                break
                            }
                            case "deleteContentBackward":
                                r === o && (l -= 1);
                                break;
                            case "deleteContentForward":
                                r === o && (u += 1)
                        }
                        t.preventDefault(), null === (n = this.linkService.eventBus) || void 0 === n || n.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                                id: e,
                                name: "Keystroke",
                                value: a,
                                change: i || "",
                                willCommit: !1,
                                selStart: l,
                                selEnd: u
                            }
                        })
                    })), this._setEventListeners(n, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t => t.target.value))
                }
                if (u && n.addEventListener("blur", u), this.data.comb) {
                    const t = (this.data.rect[2] - this.data.rect[0]) / o;
                    n.classList.add("comb"), n.style.letterSpacing = "calc(".concat(t, "px * var(--scale-factor) - 1ch)")
                }
            } else n = document.createElement("div"), n.textContent = this.data.fieldValue, n.style.verticalAlign = "middle", n.style.display = "table-cell", this.data.hasOwnCanvas && (n.hidden = !0);
            return this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container
        }
    }

    class lc extends rc {
        constructor(t) {
            super(t, {isRenderable: !!t.data.hasOwnCanvas})
        }
    }

    class cc extends rc {
        constructor(t) {
            super(t, {isRenderable: t.renderForms})
        }

        render() {
            const t = this.annotationStorage, e = this.data, n = e.id;
            let i = t.getValue(n, {value: e.exportValue === e.fieldValue}).value;
            "string" === typeof i && (i = "Off" !== i, t.setValue(n, {value: i})), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
            const s = document.createElement("input");
            return Gl.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "checkbox", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.setAttribute("exportValue", e.exportValue), s.tabIndex = Vl, s.addEventListener("change", (i => {
                const {name: s, checked: a} = i.target;
                for (const r of this._getElementsByName(s, n)) {
                    const n = a && r.exportValue === e.exportValue;
                    r.domElement && (r.domElement.checked = n), t.setValue(r.id, {value: n})
                }
                t.setValue(n, {value: a})
            })), s.addEventListener("resetform", (t => {
                const n = e.defaultFieldValue || "Off";
                t.target.checked = n === e.exportValue
            })), this.enableScripting && this.hasJSActions && (s.addEventListener("updatefromsandbox", (e => {
                const i = {
                    value(e) {
                        e.target.checked = "Off" !== e.detail.value, t.setValue(n, {value: e.target.checked})
                    }
                };
                this._dispatchEventFromSandbox(i, e)
            })), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t => t.target.checked))), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container
        }
    }

    class uc extends rc {
        constructor(t) {
            super(t, {isRenderable: t.renderForms})
        }

        render() {
            this.container.classList.add("buttonWidgetAnnotation", "radioButton");
            const t = this.annotationStorage, e = this.data, n = e.id;
            let i = t.getValue(n, {value: e.fieldValue === e.buttonValue}).value;
            if ("string" === typeof i && (i = i !== e.buttonValue, t.setValue(n, {value: i})), i) for (const a of this._getElementsByName(e.fieldName, n)) t.setValue(a.id, {value: !1});
            const s = document.createElement("input");
            if (Gl.add(s), s.setAttribute("data-element-id", n), s.disabled = e.readOnly, this._setRequired(s, this.data.required), s.type = "radio", s.name = e.fieldName, i && s.setAttribute("checked", !0), s.tabIndex = Vl, s.addEventListener("change", (e => {
                const {name: i, checked: s} = e.target;
                for (const a of this._getElementsByName(i, n)) t.setValue(a.id, {value: !1});
                t.setValue(n, {value: s})
            })), s.addEventListener("resetform", (t => {
                const n = e.defaultFieldValue;
                t.target.checked = null !== n && void 0 !== n && n === e.buttonValue
            })), this.enableScripting && this.hasJSActions) {
                const i = e.buttonValue;
                s.addEventListener("updatefromsandbox", (e => {
                    const s = {
                        value: e => {
                            const s = i === e.detail.value;
                            for (const i of this._getElementsByName(e.target.name)) {
                                const e = s && i.id === n;
                                i.domElement && (i.domElement.checked = e), t.setValue(i.id, {value: e})
                            }
                        }
                    };
                    this._dispatchEventFromSandbox(s, e)
                })), this._setEventListeners(s, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t => t.target.checked))
            }
            return this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container
        }
    }

    class hc extends ec {
        constructor(t) {
            super(t, {ignoreBorder: t.data.hasAppearance})
        }

        render() {
            const t = super.render();
            t.classList.add("buttonWidgetAnnotation", "pushButton");
            const e = t.lastChild;
            return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (t => {
                this._dispatchEventFromSandbox({}, t)
            }))), t
        }
    }

    class dc extends rc {
        constructor(t) {
            super(t, {isRenderable: t.renderForms})
        }

        render() {
            this.container.classList.add("choiceWidgetAnnotation");
            const t = this.annotationStorage, e = this.data.id, n = t.getValue(e, {value: this.data.fieldValue}),
                i = document.createElement("select");
            Gl.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Vl;
            let s = this.data.combo && this.data.options.length > 0;
            this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (t => {
                const e = this.data.defaultFieldValue;
                for (const n of i.options) n.selected = n.value === e
            }));
            for (const c of this.data.options) {
                const t = document.createElement("option");
                t.textContent = c.displayValue, t.value = c.exportValue, n.value.includes(c.exportValue) && (t.setAttribute("selected", !0), s = !1), i.append(t)
            }
            let a = null;
            if (s) {
                const t = document.createElement("option");
                t.value = " ", t.setAttribute("hidden", !0), t.setAttribute("selected", !0), i.prepend(t), a = () => {
                    t.remove(), i.removeEventListener("input", a), a = null
                }, i.addEventListener("input", a)
            }
            const r = t => {
                const e = t ? "value" : "textContent", {options: n, multiple: s} = i;
                return s ? Array.prototype.filter.call(n, (t => t.selected)).map((t => t[e])) : -1 === n.selectedIndex ? null : n[n.selectedIndex][e]
            };
            let o = r(!1);
            const l = t => {
                const e = t.target.options;
                return Array.prototype.map.call(e, (t => ({displayValue: t.textContent, exportValue: t.value})))
            };
            return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (n => {
                const s = {
                    value(n) {
                        var s;
                        null === (s = a) || void 0 === s || s();
                        const l = n.detail.value, c = new Set(Array.isArray(l) ? l : [l]);
                        for (const t of i.options) t.selected = c.has(t.value);
                        t.setValue(e, {value: r(!0)}), o = r(!1)
                    }, multipleSelection(t) {
                        i.multiple = !0
                    }, remove(n) {
                        const s = i.options, a = n.detail.remove;
                        if (s[a].selected = !1, i.remove(a), s.length > 0) {
                            -1 === Array.prototype.findIndex.call(s, (t => t.selected)) && (s[0].selected = !0)
                        }
                        t.setValue(e, {value: r(!0), items: l(n)}), o = r(!1)
                    }, clear(n) {
                        for (; 0 !== i.length;) i.remove(0);
                        t.setValue(e, {value: null, items: []}), o = r(!1)
                    }, insert(n) {
                        const {index: s, displayValue: a, exportValue: c} = n.detail.insert, u = i.children[s],
                            h = document.createElement("option");
                        h.textContent = a, h.value = c, u ? u.before(h) : i.append(h), t.setValue(e, {
                            value: r(!0),
                            items: l(n)
                        }), o = r(!1)
                    }, items(n) {
                        const {items: s} = n.detail;
                        for (; 0 !== i.length;) i.remove(0);
                        for (const t of s) {
                            const {displayValue: e, exportValue: n} = t, s = document.createElement("option");
                            s.textContent = e, s.value = n, i.append(s)
                        }
                        i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
                            value: r(!0),
                            items: l(n)
                        }), o = r(!1)
                    }, indices(n) {
                        const i = new Set(n.detail.indices);
                        for (const t of n.target.options) t.selected = i.has(t.index);
                        t.setValue(e, {value: r(!0)}), o = r(!1)
                    }, editable(t) {
                        t.target.disabled = !t.detail.editable
                    }
                };
                this._dispatchEventFromSandbox(s, n)
            })), i.addEventListener("input", (n => {
                var i;
                const s = r(!0), a = r(!1);
                t.setValue(e, {value: s}), n.preventDefault(), null === (i = this.linkService.eventBus) || void 0 === i || i.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                        id: e,
                        name: "Keystroke",
                        value: o,
                        change: a,
                        changeEx: s,
                        willCommit: !1,
                        commitKey: 1,
                        keyDown: !1
                    }
                })
            })), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (t => t.target.value))) : i.addEventListener("input", (function (n) {
                t.setValue(e, {value: r(!0)})
            })), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container
        }
    }

    class fc extends Jl {
        constructor(t) {
            const {data: e, elements: n} = t;
            super(t, {isRenderable: Jl._hasPopupData(e)}), this.elements = n, this.popup = null
        }

        render() {
            this.container.classList.add("popupAnnotation");
            const t = this.popup = new Ic({
                container: this.container,
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText,
                rect: this.data.rect,
                parentRect: this.data.parentRect || null,
                parent: this.parent,
                elements: this.elements,
                open: this.data.open
            }), e = [];
            for (const n of this.elements) n.popup = t, n.container.ariaHasPopup = "dialog", e.push(n.data.id), n.addHighlightArea();
            return this.container.setAttribute("aria-controls", e.map((t => "".concat(ne).concat(t))).join(",")), this.container
        }
    }

    var pc = new WeakMap, gc = new WeakMap, mc = new WeakMap, vc = new WeakMap, bc = new WeakMap, yc = new WeakMap,
        wc = new WeakMap, Ac = new WeakMap, kc = new WeakMap, _c = new WeakMap, Sc = new WeakMap, xc = new WeakMap,
        Ec = new WeakMap, Cc = new WeakMap, Mc = new WeakMap, Tc = new WeakMap, Pc = new WeakMap, Rc = new WeakMap,
        Lc = new WeakMap, Fc = new WeakSet;

    class Ic {
        constructor(t) {
            let {
                container: e,
                color: n,
                elements: i,
                titleObj: s,
                modificationDate: a,
                contentsObj: r,
                richText: o,
                parent: l,
                rect: c,
                parentRect: u,
                open: h
            } = t;
            x(this, Fc), E(this, pc, C(Fc, this, Wc).bind(this)), E(this, gc, C(Fc, this, Uc).bind(this)), E(this, mc, C(Fc, this, Hc).bind(this)), E(this, vc, C(Fc, this, Bc).bind(this)), E(this, bc, null), E(this, yc, null), E(this, wc, null), E(this, Ac, null), E(this, kc, null), E(this, _c, null), E(this, Sc, null), E(this, xc, !1), E(this, Ec, null), E(this, Cc, null), E(this, Mc, null), E(this, Tc, null), E(this, Pc, null), E(this, Rc, null), E(this, Lc, !1), P(yc, this, e), P(Pc, this, s), P(wc, this, r), P(Tc, this, o), P(_c, this, l), P(bc, this, n), P(Mc, this, c), P(Sc, this, u), P(kc, this, i), P(Ac, this, xe.toDateObject(a)), this.trigger = i.flatMap((t => t.getElementsToTriggerPopup()));
            for (const f of this.trigger) f.addEventListener("click", T(vc, this)), f.addEventListener("mouseenter", T(mc, this)), f.addEventListener("mouseleave", T(gc, this)), f.classList.add("popupTriggerArea");
            for (const f of i) {
                var d;
                null === (d = f.container) || void 0 === d || d.addEventListener("keydown", T(pc, this))
            }
            T(yc, this).hidden = !0, h && C(Fc, this, Bc).call(this)
        }

        render() {
            if (T(Ec, this)) return;
            const t = P(Ec, this, document.createElement("div"));
            if (t.className = "popup", T(bc, this)) {
                const e = t.style.outlineColor = Qt.makeHexColor(...T(bc, this));
                if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) t.style.backgroundColor = "color-mix(in srgb, ".concat(e, " 30%, white)"); else {
                    const e = .7;
                    t.style.backgroundColor = Qt.makeHexColor(...T(bc, this).map((t => Math.floor(e * (255 - t) + t))))
                }
            }
            const e = document.createElement("span");
            e.className = "header";
            const n = document.createElement("h1");
            if (e.append(n), ({dir: n.dir, str: n.textContent} = T(Pc, this)), t.append(e), T(Ac, this)) {
                const t = document.createElement("span");
                t.classList.add("popupDate"), t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), t.setAttribute("data-l10n-args", JSON.stringify({dateObj: T(Ac, this).valueOf()})), e.append(t)
            }
            const i = M(Fc, this, Dc);
            if (i) Ul.render({
                xfaHtml: i,
                intent: "richText",
                div: t
            }), t.lastChild.classList.add("richText", "popupContent"); else {
                const e = this._formatContents(T(wc, this));
                t.append(e)
            }
            T(yc, this).append(t)
        }

        _formatContents(t) {
            let {str: e, dir: n} = t;
            const i = document.createElement("p");
            i.classList.add("popupContent"), i.dir = n;
            const s = e.split(/(?:\r\n?|\n)/);
            for (let a = 0, r = s.length; a < r; ++a) {
                const t = s[a];
                i.append(document.createTextNode(t)), a < r - 1 && i.append(document.createElement("br"))
            }
            return i
        }

        updateEdited(t) {
            var e;
            let {rect: n, popupContent: i} = t;
            T(Rc, this) || P(Rc, this, {
                contentsObj: T(wc, this),
                richText: T(Tc, this)
            }), n && P(Cc, this, null), i && (P(Tc, this, C(Fc, this, zc).call(this, i)), P(wc, this, null)), null === (e = T(Ec, this)) || void 0 === e || e.remove(), P(Ec, this, null)
        }

        resetEdited() {
            var t;
            T(Rc, this) && (({
                contentsObj: _(P, [wc, this])._,
                richText: _(P, [Tc, this])._
            } = T(Rc, this)), P(Rc, this, null), null === (t = T(Ec, this)) || void 0 === t || t.remove(), P(Ec, this, null), P(Cc, this, null))
        }

        forceHide() {
            P(Lc, this, this.isVisible), T(Lc, this) && (T(yc, this).hidden = !0)
        }

        maybeShow() {
            T(Lc, this) && (T(Ec, this) || C(Fc, this, Hc).call(this), P(Lc, this, !1), T(yc, this).hidden = !1)
        }

        get isVisible() {
            return !1 === T(yc, this).hidden
        }
    }

    function Dc(t) {
        const e = T(Tc, t), n = T(wc, t);
        return null === e || void 0 === e || !e.str || null !== n && void 0 !== n && n.str && n.str !== e.str ? null : T(Tc, t).html || null
    }

    function Nc(t) {
        var e;
        return (null === (e = M(Fc, t, Dc)) || void 0 === e || null === (e = e.attributes) || void 0 === e || null === (e = e.style) || void 0 === e ? void 0 : e.fontSize) || 0
    }

    function Oc(t) {
        var e;
        return (null === (e = M(Fc, t, Dc)) || void 0 === e || null === (e = e.attributes) || void 0 === e || null === (e = e.style) || void 0 === e ? void 0 : e.color) || null
    }

    function zc(t) {
        const e = [],
            n = {str: t, html: {name: "div", attributes: {dir: "auto"}, children: [{name: "p", children: e}]}}, i = {
                style: {
                    color: M(Fc, this, Oc),
                    fontSize: M(Fc, this, Nc) ? "calc(".concat(M(Fc, this, Nc), "px * var(--scale-factor))") : ""
                }
            };
        for (const s of t.split("\n")) e.push({name: "span", value: s, attributes: i});
        return n
    }

    function Wc(t) {
        t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || ("Enter" === t.key || "Escape" === t.key && T(xc, this)) && C(Fc, this, Bc).call(this)
    }

    function jc() {
        if (null !== T(Cc, this)) return;
        const {page: {view: t}, viewport: {rawDims: {pageWidth: e, pageHeight: n, pageX: i, pageY: s}}} = T(_c, this);
        let a = !!T(Sc, this), r = T(a ? Sc : Mc, this);
        for (const d of T(kc, this)) if (!r || null !== Qt.intersect(d.data.rect, r)) {
            r = d.data.rect, a = !0;
            break
        }
        const o = Qt.normalizeRect([r[0], t[3] - r[1] + t[1], r[2], t[3] - r[3] + t[1]]), l = a ? r[2] - r[0] + 5 : 0,
            c = o[0] + l, u = o[1];
        P(Cc, this, [100 * (c - i) / e, 100 * (u - s) / n]);
        const {style: h} = T(yc, this);
        h.left = "".concat(T(Cc, this)[0], "%"), h.top = "".concat(T(Cc, this)[1], "%")
    }

    function Bc() {
        P(xc, this, !T(xc, this)), T(xc, this) ? (C(Fc, this, Hc).call(this), T(yc, this).addEventListener("click", T(vc, this)), T(yc, this).addEventListener("keydown", T(pc, this))) : (C(Fc, this, Uc).call(this), T(yc, this).removeEventListener("click", T(vc, this)), T(yc, this).removeEventListener("keydown", T(pc, this)))
    }

    function Hc() {
        T(Ec, this) || this.render(), this.isVisible ? T(xc, this) && T(yc, this).classList.add("focused") : (C(Fc, this, jc).call(this), T(yc, this).hidden = !1, T(yc, this).style.zIndex = parseInt(T(yc, this).style.zIndex) + 1e3)
    }

    function Uc() {
        T(yc, this).classList.remove("focused"), !T(xc, this) && this.isVisible && (T(yc, this).hidden = !0, T(yc, this).style.zIndex = parseInt(T(yc, this).style.zIndex) - 1e3)
    }

    class Vc extends Jl {
        constructor(t) {
            super(t, {
                isRenderable: !0,
                ignoreBorder: !0
            }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = q.FREETEXT
        }

        render() {
            if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                const t = document.createElement("div");
                t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
                for (const e of this.textContent) {
                    const n = document.createElement("span");
                    n.textContent = e, t.append(n)
                }
                this.container.append(t)
            }
            return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container
        }
    }

    var Gc = new WeakMap;

    class qc extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0}), E(this, Gc, null)
        }

        render() {
            this.container.classList.add("lineAnnotation");
            const t = this.data, {width: e, height: n} = ql(t.rect), i = this.svgFactory.create(e, n, !0),
                s = P(Gc, this, this.svgFactory.createElement("svg:line"));
            return s.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), s.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), s.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), s.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), s.setAttribute("stroke-width", t.borderStyle.width || 1), s.setAttribute("stroke", "transparent"), s.setAttribute("fill", "transparent"), i.append(s), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
        }

        getElementsToTriggerPopup() {
            return T(Gc, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    var Xc = new WeakMap;

    class Kc extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0}), E(this, Xc, null)
        }

        render() {
            this.container.classList.add("squareAnnotation");
            const t = this.data, {width: e, height: n} = ql(t.rect), i = this.svgFactory.create(e, n, !0),
                s = t.borderStyle.width, a = P(Xc, this, this.svgFactory.createElement("svg:rect"));
            return a.setAttribute("x", s / 2), a.setAttribute("y", s / 2), a.setAttribute("width", e - s), a.setAttribute("height", n - s), a.setAttribute("stroke-width", s || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), i.append(a), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
        }

        getElementsToTriggerPopup() {
            return T(Xc, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    var Yc = new WeakMap;

    class Qc extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0}), E(this, Yc, null)
        }

        render() {
            this.container.classList.add("circleAnnotation");
            const t = this.data, {width: e, height: n} = ql(t.rect), i = this.svgFactory.create(e, n, !0),
                s = t.borderStyle.width, a = P(Yc, this, this.svgFactory.createElement("svg:ellipse"));
            return a.setAttribute("cx", e / 2), a.setAttribute("cy", n / 2), a.setAttribute("rx", e / 2 - s / 2), a.setAttribute("ry", n / 2 - s / 2), a.setAttribute("stroke-width", s || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), i.append(a), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container
        }

        getElementsToTriggerPopup() {
            return T(Yc, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    var $c = new WeakMap;

    class Jc extends Jl {
        constructor(t) {
            super(t, {
                isRenderable: !0,
                ignoreBorder: !0
            }), E(this, $c, null), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline"
        }

        render() {
            this.container.classList.add(this.containerClassName);
            const {data: {rect: t, vertices: e, borderStyle: n, popupRef: i}} = this;
            if (!e) return this.container;
            const {width: s, height: a} = ql(t), r = this.svgFactory.create(s, a, !0);
            let o = [];
            for (let c = 0, u = e.length; c < u; c += 2) {
                const n = e[c] - t[0], i = t[3] - e[c + 1];
                o.push("".concat(n, ",").concat(i))
            }
            o = o.join(" ");
            const l = P($c, this, this.svgFactory.createElement(this.svgElementName));
            return l.setAttribute("points", o), l.setAttribute("stroke-width", n.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), r.append(l), this.container.append(r), !i && this.hasPopupData && this._createPopup(), this.container
        }

        getElementsToTriggerPopup() {
            return T($c, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    class Zc extends Jc {
        constructor(t) {
            super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon"
        }
    }

    class tu extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0})
        }

        render() {
            return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container
        }
    }

    var eu = new WeakMap;

    class nu extends Jl {
        constructor(t) {
            super(t, {
                isRenderable: !0,
                ignoreBorder: !0
            }), E(this, eu, []), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = "InkHighlight" === this.data.it ? q.HIGHLIGHT : q.INK
        }

        render() {
            this.container.classList.add(this.containerClassName);
            const {data: {rect: t, inkLists: e, borderStyle: n, popupRef: i}} = this, {width: s, height: a} = ql(t),
                r = this.svgFactory.create(s, a, !0);
            for (const o of e) {
                let e = [];
                for (let n = 0, s = o.length; n < s; n += 2) {
                    const i = o[n] - t[0], s = t[3] - o[n + 1];
                    e.push("".concat(i, ",").concat(s))
                }
                e = e.join(" ");
                const i = this.svgFactory.createElement(this.svgElementName);
                T(eu, this).push(i), i.setAttribute("points", e), i.setAttribute("stroke-width", n.width || 1), i.setAttribute("stroke", "transparent"), i.setAttribute("fill", "transparent"), r.append(i)
            }
            return !i && this.hasPopupData && this._createPopup(), this.container.append(r), this._editOnDoubleClick(), this.container
        }

        getElementsToTriggerPopup() {
            return T(eu, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    class iu extends Jl {
        constructor(t) {
            super(t, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
            }), this.annotationEditorType = q.HIGHLIGHT
        }

        render() {
            return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container
        }
    }

    class su extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
        }

        render() {
            return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container
        }
    }

    class au extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
        }

        render() {
            return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container
        }
    }

    class ru extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0})
        }

        render() {
            return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container
        }
    }

    class ou extends Jl {
        constructor(t) {
            super(t, {isRenderable: !0, ignoreBorder: !0}), this.annotationEditorType = q.STAMP
        }

        render() {
            return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container
        }
    }

    var lu = new WeakMap, cu = new WeakSet;

    class uu extends Jl {
        constructor(t) {
            var e;
            super(t, {isRenderable: !0}), x(this, cu), E(this, lu, null);
            const {file: n} = this.data;
            this.filename = n.filename, this.content = n.content, null === (e = this.linkService.eventBus) || void 0 === e || e.dispatch("fileattachmentannotation", k({source: this}, n))
        }

        render() {
            this.container.classList.add("fileAttachmentAnnotation");
            const {container: t, data: e} = this;
            let n;
            e.hasAppearance || 0 === e.fillAlpha ? n = document.createElement("div") : (n = document.createElement("img"), n.src = "".concat(this.imageResourcesPath, "annotation-").concat(/paperclip/i.test(e.name) ? "paperclip" : "pushpin", ".svg"), e.fillAlpha && e.fillAlpha < 1 && (n.style = "filter: opacity(".concat(Math.round(100 * e.fillAlpha), "%);"))), n.addEventListener("dblclick", C(cu, this, hu).bind(this)), P(lu, this, n);
            const {isMac: i} = Kt.platform;
            return t.addEventListener("keydown", (t => {
                "Enter" === t.key && (i ? t.metaKey : t.ctrlKey) && C(cu, this, hu).call(this)
            })), !e.popupRef && this.hasPopupData ? this._createPopup() : n.classList.add("popupTriggerArea"), t.append(n), t
        }

        getElementsToTriggerPopup() {
            return T(lu, this)
        }

        addHighlightArea() {
            this.container.classList.add("highlightArea")
        }
    }

    function hu() {
        var t;
        null === (t = this.downloadManager) || void 0 === t || t.openOrDownloadData(this.content, this.filename)
    }

    var du = new WeakMap, fu = new WeakMap, pu = new WeakMap, gu = new WeakMap, mu = new WeakSet;

    class vu {
        constructor(t) {
            let {
                div: e,
                accessibilityManager: n,
                annotationCanvasMap: i,
                annotationEditorUIManager: s,
                page: a,
                viewport: r,
                structTreeLayer: o
            } = t;
            x(this, mu), E(this, du, null), E(this, fu, null), E(this, pu, new Map), E(this, gu, null), this.div = e, P(du, this, n), P(fu, this, i), P(gu, this, o || null), this.page = a, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = s
        }

        hasEditableAnnotations() {
            return T(pu, this).size > 0
        }

        async render(t) {
            const {annotations: e} = t, n = this.div;
            Re(n, this.viewport);
            const i = new Map, s = {
                data: null,
                layer: n,
                linkService: t.linkService,
                downloadManager: t.downloadManager,
                imageResourcesPath: t.imageResourcesPath || "",
                renderForms: !1 !== t.renderForms,
                svgFactory: new Hl,
                annotationStorage: t.annotationStorage || new js,
                enableScripting: !0 === t.enableScripting,
                hasJSActions: t.hasJSActions,
                fieldObjects: t.fieldObjects,
                parent: this,
                elements: null
            };
            for (const r of e) {
                if (r.noHTML) continue;
                const t = r.annotationType === vt;
                if (t) {
                    const t = i.get(r.id);
                    if (!t) continue;
                    s.elements = t
                } else {
                    const {width: t, height: e} = ql(r.rect);
                    if (t <= 0 || e <= 0) continue
                }
                s.data = r;
                const e = Xl.create(s);
                if (!e.isRenderable) continue;
                if (!t && r.popupRef) {
                    const t = i.get(r.popupRef);
                    t ? t.push(e) : i.set(r.popupRef, [e])
                }
                const n = e.render();
                var a;
                if (r.hidden && (n.style.visibility = "hidden"), await C(mu, this, bu).call(this, n, r.id), e._isEditable) T(pu, this).set(e.data.id, e), null === (a = this._annotationEditorUIManager) || void 0 === a || a.renderAnnotationElement(e)
            }
            C(mu, this, yu).call(this)
        }

        update(t) {
            let {viewport: e} = t;
            const n = this.div;
            this.viewport = e, Re(n, {rotation: e.rotation}), C(mu, this, yu).call(this), n.hidden = !1
        }

        getEditableAnnotations() {
            return Array.from(T(pu, this).values())
        }

        getEditableAnnotation(t) {
            return T(pu, this).get(t)
        }
    }

    async function bu(t, e) {
        var n, i;
        const s = t.firstChild || t, a = s.id = "".concat(ne).concat(e),
            r = await (null === (n = T(gu, this)) || void 0 === n ? void 0 : n.getAriaAttributes(a));
        if (r) for (const [o, l] of r) s.setAttribute(o, l);
        this.div.append(t), null === (i = T(du, this)) || void 0 === i || i.moveElementInDOM(this.div, t, s, !1)
    }

    function yu() {
        if (!T(fu, this)) return;
        const t = this.div;
        for (const [e, n] of T(fu, this)) {
            const i = t.querySelector('[data-annotation-id="'.concat(e, '"]'));
            if (!i) continue;
            n.className = "annotationContent";
            const {firstChild: s} = i;
            s ? "CANVAS" === s.nodeName ? s.replaceWith(n) : s.classList.contains("annotationContent") ? s.after(n) : s.before(n) : i.append(n)
        }
        T(fu, this).clear()
    }

    const wu = /\r\n?|\n/g;
    var Au = new WeakMap, ku = new WeakMap, _u = new WeakMap, Su = new WeakMap, xu = new WeakMap, Eu = new WeakSet;

    class Cu extends ps {
        static get _keyboardManager() {
            const t = Cu.prototype, e = t => t.isEmpty(), n = li.TRANSLATE_SMALL, i = li.TRANSLATE_BIG;
            return Nt(this, "_keyboardManager", new vn([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, {bubbles: !0}], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, {
                args: [-n, 0],
                checker: e
            }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, {
                args: [-i, 0],
                checker: e
            }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, {
                args: [n, 0],
                checker: e
            }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, {
                args: [i, 0],
                checker: e
            }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, {
                args: [0, -n],
                checker: e
            }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, {
                args: [0, -i],
                checker: e
            }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, {
                args: [0, n],
                checker: e
            }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, {args: [0, i], checker: e}]]))
        }

        constructor(t) {
            super(k(k({}, t), {}, {name: "freeTextEditor"})), x(this, Eu), E(this, Au, void 0), E(this, ku, ""), E(this, _u, "".concat(this.id, "-editor")), E(this, Su, null), E(this, xu, void 0), P(Au, this, t.color || Cu._defaultColor || ps._defaultLineColor), P(xu, this, t.fontSize || Cu._defaultFontSize)
        }

        static initialize(t, e) {
            ps.initialize(t, e);
            const n = getComputedStyle(document.documentElement);
            this._internalPadding = parseFloat(n.getPropertyValue("--freetext-padding"))
        }

        static updateDefaultParams(t, e) {
            switch (t) {
                case X.FREETEXT_SIZE:
                    Cu._defaultFontSize = e;
                    break;
                case X.FREETEXT_COLOR:
                    Cu._defaultColor = e
            }
        }

        updateParams(t, e) {
            switch (t) {
                case X.FREETEXT_SIZE:
                    C(Eu, this, Mu).call(this, e);
                    break;
                case X.FREETEXT_COLOR:
                    C(Eu, this, Tu).call(this, e)
            }
        }

        static get defaultPropertiesToUpdate() {
            return [[X.FREETEXT_SIZE, Cu._defaultFontSize], [X.FREETEXT_COLOR, Cu._defaultColor || ps._defaultLineColor]]
        }

        get propertiesToUpdate() {
            return [[X.FREETEXT_SIZE, T(xu, this)], [X.FREETEXT_COLOR, T(Au, this)]]
        }

        _translateEmpty(t, e) {
            this._uiManager.translateSelectedEditors(t, e, !0)
        }

        getInitialTranslation() {
            const t = this.parentScale;
            return [-Cu._internalPadding * t, -(Cu._internalPadding + T(xu, this)) * t]
        }

        rebuild() {
            this.parent && (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)))
        }

        enableEditMode() {
            if (this.isInEditMode()) return;
            this.parent.setEditingState(!1), this.parent.updateToolbar(q.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), P(Su, this, new AbortController);
            const t = this._uiManager.combinedSignal(T(Su, this));
            this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {signal: t}), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {signal: t}), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {signal: t}), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {signal: t}), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {signal: t})
        }

        disableEditMode() {
            var t;
            this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", T(_u, this)), this._isDraggable = !0, null === (t = T(Su, this)) || void 0 === t || t.abort(), P(Su, this, null), this.div.focus({preventScroll: !0}), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"))
        }

        focusin(t) {
            this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus())
        }

        onceAdded() {
            var t;
            this.width || (this.enableEditMode(), this.editorDiv.focus(), null !== (t = this._initialOptions) && void 0 !== t && t.isCentered && this.center(), this._initialOptions = null)
        }

        isEmpty() {
            return !this.editorDiv || "" === this.editorDiv.innerText.trim()
        }

        remove() {
            this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove()
        }

        commit() {
            if (!this.isInEditMode()) return;
            super.commit(), this.disableEditMode();
            const t = T(ku, this), e = P(ku, this, C(Eu, this, Pu).call(this).trimEnd());
            if (t === e) return;
            const n = t => {
                P(ku, this, t), t ? (C(Eu, this, Fu).call(this), this._uiManager.rebuild(this), C(Eu, this, Ru).call(this)) : this.remove()
            };
            this.addCommands({
                cmd: () => {
                    n(e)
                }, undo: () => {
                    n(t)
                }, mustExec: !1
            }), C(Eu, this, Ru).call(this)
        }

        shouldGetKeyboardEvents() {
            return this.isInEditMode()
        }

        enterInEditMode() {
            this.enableEditMode(), this.editorDiv.focus()
        }

        dblclick(t) {
            this.enterInEditMode()
        }

        keydown(t) {
            t.target === this.div && "Enter" === t.key && (this.enterInEditMode(), t.preventDefault())
        }

        editorDivKeydown(t) {
            Cu._keyboardManager.exec(this, t)
        }

        editorDivFocus(t) {
            this.isEditing = !0
        }

        editorDivBlur(t) {
            this.isEditing = !1
        }

        editorDivInput(t) {
            this.parent.div.classList.toggle("freetextEditing", this.isEmpty())
        }

        disableEditing() {
            this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline")
        }

        enableEditing() {
            this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0)
        }

        render() {
            if (this.div) return this.div;
            let t, e;
            this.width && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", T(_u, this)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
            const {style: n} = this.editorDiv;
            if (n.fontSize = "calc(".concat(T(xu, this), "px * var(--scale-factor))"), n.color = T(Au, this), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), en(this, this.div, ["dblclick", "keydown"]), this.width) {
                const [n, i] = this.parentDimensions;
                if (this.annotationElementId) {
                    const {position: s} = this._initialData;
                    let [a, r] = this.getInitialTranslation();
                    [a, r] = this.pageTranslationToScreen(a, r);
                    const [o, l] = this.pageDimensions, [c, u] = this.pageTranslation;
                    let h, d;
                    switch (this.rotation) {
                        case 0:
                            h = t + (s[0] - c) / o, d = e + this.height - (s[1] - u) / l;
                            break;
                        case 90:
                            h = t + (s[0] - c) / o, d = e - (s[1] - u) / l, [a, r] = [r, -a];
                            break;
                        case 180:
                            h = t - this.width + (s[0] - c) / o, d = e - (s[1] - u) / l, [a, r] = [-a, -r];
                            break;
                        case 270:
                            h = t + (s[0] - c - this.height * l) / o, d = e + (s[1] - u - this.width * o) / l, [a, r] = [-r, a]
                    }
                    this.setAt(h * n, d * i, a, r)
                } else this.setAt(t * n, e * i, this.width * n, this.height * i);
                C(Eu, this, Fu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1
            } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
            return this.div
        }

        editorDivPaste(t) {
            const e = t.clipboardData || window.clipboardData, {types: n} = e;
            if (1 === n.length && "text/plain" === n[0]) return;
            t.preventDefault();
            const i = Du.call(Cu, e.getData("text") || "").replaceAll(wu, "\n");
            if (!i) return;
            const s = window.getSelection();
            if (!s.rangeCount) return;
            this.editorDiv.normalize(), s.deleteFromDocument();
            const a = s.getRangeAt(0);
            if (!i.includes("\n")) return a.insertNode(document.createTextNode(i)), this.editorDiv.normalize(), void s.collapseToStart();
            const {startContainer: r, startOffset: o} = a, l = [], c = [];
            if (r.nodeType === Node.TEXT_NODE) {
                const t = r.parentElement;
                if (c.push(r.nodeValue.slice(o).replaceAll(wu, "")), t !== this.editorDiv) {
                    let e = l;
                    for (const n of this.editorDiv.childNodes) n !== t ? e.push(Lu.call(Cu, n)) : e = c
                }
                l.push(r.nodeValue.slice(0, o).replaceAll(wu, ""))
            } else if (r === this.editorDiv) {
                let t = l, e = 0;
                for (const n of this.editorDiv.childNodes) e++ === o && (t = c), t.push(Lu.call(Cu, n))
            }
            P(ku, this, "".concat(l.join("\n")).concat(i).concat(c.join("\n"))), C(Eu, this, Fu).call(this);
            const u = new Range;
            let h = l.reduce(((t, e) => t + e.length), 0);
            for (const {firstChild: d} of this.editorDiv.childNodes) if (d.nodeType === Node.TEXT_NODE) {
                const t = d.nodeValue.length;
                if (h <= t) {
                    u.setStart(d, h), u.setEnd(d, h);
                    break
                }
                h -= t
            }
            s.removeAllRanges(), s.addRange(u)
        }

        get contentDiv() {
            return this.editorDiv
        }

        static async deserialize(t, e, n) {
            let i = null;
            if (t instanceof Vc) {
                const {
                    data: {
                        defaultAppearanceData: {fontSize: e, fontColor: n},
                        rect: s,
                        rotation: a,
                        id: r,
                        popupRef: o
                    }, textContent: l, textPosition: c, parent: {page: {pageNumber: u}}
                } = t;
                if (!l || 0 === l.length) return null;
                i = t = {
                    annotationType: q.FREETEXT,
                    color: Array.from(n),
                    fontSize: e,
                    value: l.join("\n"),
                    position: c,
                    pageIndex: u - 1,
                    rect: s.slice(0),
                    rotation: a,
                    id: r,
                    deleted: !1,
                    popupRef: o
                }
            }
            const s = await super.deserialize(t, e, n);
            return P(xu, s, t.fontSize), P(Au, s, Qt.makeHexColor(...t.color)), P(ku, s, Du.call(Cu, t.value)), s.annotationElementId = t.id || null, s._initialData = i, s
        }

        serialize() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            const e = Cu._internalPadding * this.parentScale, n = this.getRect(e, e),
                i = ps._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : T(Au, this)),
                s = {
                    annotationType: q.FREETEXT,
                    color: i,
                    fontSize: T(xu, this),
                    value: C(Eu, this, Iu).call(this),
                    pageIndex: this.pageIndex,
                    rect: n,
                    rotation: this.rotation,
                    structTreeParentId: this._structTreeParentId
                };
            return t ? s : this.annotationElementId && !C(Eu, this, Nu).call(this, s) ? null : (s.id = this.annotationElementId, s)
        }

        renderAnnotationElement(t) {
            const e = super.renderAnnotationElement(t);
            if (this.deleted) return e;
            const {style: n} = e;
            n.fontSize = "calc(".concat(T(xu, this), "px * var(--scale-factor))"), n.color = T(Au, this), e.replaceChildren();
            for (const s of T(ku, this).split("\n")) {
                const t = document.createElement("div");
                t.append(s ? document.createTextNode(s) : document.createElement("br")), e.append(t)
            }
            const i = Cu._internalPadding * this.parentScale;
            return t.updateEdited({rect: this.getRect(i, i), popupContent: T(ku, this)}), e
        }

        resetAnnotationElement(t) {
            super.resetAnnotationElement(t), t.resetEdited()
        }
    }

    function Mu(t) {
        const e = t => {
            this.editorDiv.style.fontSize = "calc(".concat(t, "px * var(--scale-factor))"), this.translate(0, -(t - T(xu, this)) * this.parentScale), P(xu, this, t), C(Eu, this, Ru).call(this)
        }, n = T(xu, this);
        this.addCommands({
            cmd: e.bind(this, t),
            undo: e.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.FREETEXT_SIZE,
            overwriteIfSameType: !0,
            keepUndo: !0
        })
    }

    function Tu(t) {
        const e = t => {
            P(Au, this, this.editorDiv.style.color = t)
        }, n = T(Au, this);
        this.addCommands({
            cmd: e.bind(this, t),
            undo: e.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.FREETEXT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
        })
    }

    function Pu() {
        const t = [];
        this.editorDiv.normalize();
        let e = null;
        for (const i of this.editorDiv.childNodes) {
            var n;
            (null === (n = e) || void 0 === n ? void 0 : n.nodeType) === Node.TEXT_NODE && "BR" === i.nodeName || (t.push(Lu.call(u, i)), e = i)
        }
        return t.join("\n")
    }

    function Ru() {
        const [t, e] = this.parentDimensions;
        let n;
        if (this.isAttachedToDOM) n = this.div.getBoundingClientRect(); else {
            const {currentLayer: t, div: e} = this, i = e.style.display, s = e.classList.contains("hidden");
            e.classList.remove("hidden"), e.style.display = "hidden", t.div.append(this.div), n = e.getBoundingClientRect(), e.remove(), e.style.display = i, e.classList.toggle("hidden", s)
        }
        this.rotation % 180 === this.parentRotation % 180 ? (this.width = n.width / t, this.height = n.height / e) : (this.width = n.height / t, this.height = n.width / e), this.fixAndSetPosition()
    }

    function Lu(t) {
        return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(wu, "")
    }

    function Fu() {
        if (this.editorDiv.replaceChildren(), T(ku, this)) for (const t of T(ku, this).split("\n")) {
            const e = document.createElement("div");
            e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e)
        }
    }

    function Iu() {
        return T(ku, this).replaceAll("\xa0", " ")
    }

    function Du(t) {
        return t.replaceAll(" ", "\xa0")
    }

    function Nu(t) {
        const {value: e, fontSize: n, color: i, pageIndex: s} = this._initialData;
        return this._hasBeenMoved || t.value !== e || t.fontSize !== n || t.color.some(((t, e) => t !== i[e])) || t.pageIndex !== s
    }

    u = Cu, w(Cu, "_freeTextDefaultContent", ""), w(Cu, "_internalPadding", 0), w(Cu, "_defaultColor", null), w(Cu, "_defaultFontSize", 10), w(Cu, "_type", "freetext"), w(Cu, "_editorType", q.FREETEXT);

    class Ou {
        toSVGPath() {
            Ft("Abstract method `toSVGPath` must be implemented.")
        }

        get box() {
            Ft("Abstract getter `box` must be implemented.")
        }

        serialize(t, e) {
            Ft("Abstract method `serialize` must be implemented.")
        }

        get classNamesForDrawing() {
            Ft("Abstract getter `classNamesForDrawing` must be implemented.")
        }

        get classNamesForOutlining() {
            Ft("Abstract getter `classNamesForOutlining` must be implemented.")
        }

        get mustRemoveSelfIntersections() {
            return !1
        }
    }

    var zu = new WeakMap, Wu = new WeakMap, ju = new WeakMap, Bu = new WeakMap, Hu = new WeakMap, Uu = new WeakMap,
        Vu = new WeakMap, Gu = new WeakMap, qu = new WeakMap, Xu = new WeakMap, Ku = new WeakMap, Yu = new WeakMap,
        Qu = new WeakMap, $u = new WeakSet;

    class Ju {
        constructor(t, e, n, i, s) {
            let {x: a, y: r} = t, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            x(this, $u), E(this, zu, void 0), E(this, Wu, []), E(this, ju, void 0), E(this, Bu, void 0), E(this, Hu, []), E(this, Uu, new Float64Array(18)), E(this, Vu, void 0), E(this, Gu, void 0), E(this, qu, void 0), E(this, Xu, void 0), E(this, Ku, void 0), E(this, Yu, void 0), E(this, Qu, []), P(zu, this, e), P(Yu, this, i * n), P(Bu, this, s), T(Uu, this).set([NaN, NaN, NaN, NaN, a, r], 6), P(ju, this, o), P(Xu, this, rh._ * n), P(qu, this, oh._ * n), P(Ku, this, n), T(Qu, this).push(a, r)
        }

        isEmpty() {
            return isNaN(T(Uu, this)[8])
        }

        add(t) {
            var e;
            let {x: n, y: i} = t;
            P(Vu, this, n), P(Gu, this, i);
            const [s, a, r, o] = T(zu, this);
            let [l, c, u, h] = T(Uu, this).subarray(8, 12);
            const d = n - u, f = i - h, p = Math.hypot(d, f);
            if (p < T(qu, this)) return !1;
            const g = p - T(Xu, this), m = g / p, v = m * d, b = m * f;
            let y = l, w = c;
            l = u, c = h, u += v, h += b, null === (e = T(Qu, this)) || void 0 === e || e.push(n, i);
            const A = v / g, k = -b / g * T(Yu, this), _ = A * T(Yu, this);
            if (T(Uu, this).set(T(Uu, this).subarray(2, 8), 0), T(Uu, this).set([u + k, h + _], 4), T(Uu, this).set(T(Uu, this).subarray(14, 18), 12), T(Uu, this).set([u - k, h - _], 16), isNaN(T(Uu, this)[6])) return 0 === T(Hu, this).length && (T(Uu, this).set([l + k, c + _], 2), T(Hu, this).push(NaN, NaN, NaN, NaN, (l + k - s) / r, (c + _ - a) / o), T(Uu, this).set([l - k, c - _], 14), T(Wu, this).push(NaN, NaN, NaN, NaN, (l - k - s) / r, (c - _ - a) / o)), T(Uu, this).set([y, w, l, c, u, h], 6), !this.isEmpty();
            T(Uu, this).set([y, w, l, c, u, h], 6);
            return Math.abs(Math.atan2(w - c, y - l) - Math.atan2(b, v)) < Math.PI / 2 ? ([l, c, u, h] = T(Uu, this).subarray(2, 6), T(Hu, this).push(NaN, NaN, NaN, NaN, ((l + u) / 2 - s) / r, ((c + h) / 2 - a) / o), [l, c, y, w] = T(Uu, this).subarray(14, 18), T(Wu, this).push(NaN, NaN, NaN, NaN, ((y + l) / 2 - s) / r, ((w + c) / 2 - a) / o), !0) : ([y, w, l, c, u, h] = T(Uu, this).subarray(0, 6), T(Hu, this).push(((y + 5 * l) / 6 - s) / r, ((w + 5 * c) / 6 - a) / o, ((5 * l + u) / 6 - s) / r, ((5 * c + h) / 6 - a) / o, ((l + u) / 2 - s) / r, ((c + h) / 2 - a) / o), [u, h, l, c, y, w] = T(Uu, this).subarray(12, 18), T(Wu, this).push(((y + 5 * l) / 6 - s) / r, ((w + 5 * c) / 6 - a) / o, ((5 * l + u) / 6 - s) / r, ((5 * c + h) / 6 - a) / o, ((l + u) / 2 - s) / r, ((c + h) / 2 - a) / o), !0)
        }

        toSVGPath() {
            if (this.isEmpty()) return "";
            const t = T(Hu, this), e = T(Wu, this);
            if (isNaN(T(Uu, this)[6]) && !this.isEmpty()) return C($u, this, th).call(this);
            const n = [];
            n.push("M".concat(t[4], " ").concat(t[5]));
            for (let i = 6; i < t.length; i += 6) isNaN(t[i]) ? n.push("L".concat(t[i + 4], " ").concat(t[i + 5])) : n.push("C".concat(t[i], " ").concat(t[i + 1], " ").concat(t[i + 2], " ").concat(t[i + 3], " ").concat(t[i + 4], " ").concat(t[i + 5]));
            C($u, this, nh).call(this, n);
            for (let i = e.length - 6; i >= 6; i -= 6) isNaN(e[i]) ? n.push("L".concat(e[i + 4], " ").concat(e[i + 5])) : n.push("C".concat(e[i], " ").concat(e[i + 1], " ").concat(e[i + 2], " ").concat(e[i + 3], " ").concat(e[i + 4], " ").concat(e[i + 5]));
            return C($u, this, eh).call(this, n), n.join(" ")
        }

        newFreeDrawOutline(t, e, n, i, s, a) {
            return new mh(t, e, n, i, s, a)
        }

        getOutlines() {
            var t, e;
            const n = T(Hu, this), i = T(Wu, this), s = T(Uu, this), [a, r, o, l] = T(zu, this),
                c = new Float64Array((null !== (t = null === (e = T(Qu, this)) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) + 2);
            for (let d = 0, f = c.length - 2; d < f; d += 2) c[d] = (T(Qu, this)[d] - a) / o, c[d + 1] = (T(Qu, this)[d + 1] - r) / l;
            if (c[c.length - 2] = (T(Vu, this) - a) / o, c[c.length - 1] = (T(Gu, this) - r) / l, isNaN(s[6]) && !this.isEmpty()) return C($u, this, ih).call(this, c);
            const u = new Float64Array(T(Hu, this).length + 24 + T(Wu, this).length);
            let h = n.length;
            for (let d = 0; d < h; d += 2) isNaN(n[d]) ? u[d] = u[d + 1] = NaN : (u[d] = n[d], u[d + 1] = n[d + 1]);
            h = C($u, this, ah).call(this, u, h);
            for (let d = i.length - 6; d >= 6; d -= 6) for (let t = 0; t < 6; t += 2) isNaN(i[d + t]) ? (u[h] = u[h + 1] = NaN, h += 2) : (u[h] = i[d + t], u[h + 1] = i[d + t + 1], h += 2);
            return C($u, this, sh).call(this, u, h), this.newFreeDrawOutline(u, c, T(zu, this), T(Ku, this), T(ju, this), T(Bu, this))
        }
    }

    function Zu() {
        const t = T(Uu, this).subarray(4, 6), e = T(Uu, this).subarray(16, 18), [n, i, s, a] = T(zu, this);
        return [(T(Vu, this) + (t[0] - e[0]) / 2 - n) / s, (T(Gu, this) + (t[1] - e[1]) / 2 - i) / a, (T(Vu, this) + (e[0] - t[0]) / 2 - n) / s, (T(Gu, this) + (e[1] - t[1]) / 2 - i) / a]
    }

    function th() {
        const [t, e, n, i] = T(zu, this), [s, a, r, o] = C($u, this, Zu).call(this);
        return "M".concat((T(Uu, this)[2] - t) / n, " ").concat((T(Uu, this)[3] - e) / i, " L").concat((T(Uu, this)[4] - t) / n, " ").concat((T(Uu, this)[5] - e) / i, " L").concat(s, " ").concat(a, " L").concat(r, " ").concat(o, " L").concat((T(Uu, this)[16] - t) / n, " ").concat((T(Uu, this)[17] - e) / i, " L").concat((T(Uu, this)[14] - t) / n, " ").concat((T(Uu, this)[15] - e) / i, " Z")
    }

    function eh(t) {
        const e = T(Wu, this);
        t.push("L".concat(e[4], " ").concat(e[5], " Z"))
    }

    function nh(t) {
        const [e, n, i, s] = T(zu, this), a = T(Uu, this).subarray(4, 6),
            r = T(Uu, this).subarray(16, 18), [o, l, c, u] = C($u, this, Zu).call(this);
        t.push("L".concat((a[0] - e) / i, " ").concat((a[1] - n) / s, " L").concat(o, " ").concat(l, " L").concat(c, " ").concat(u, " L").concat((r[0] - e) / i, " ").concat((r[1] - n) / s))
    }

    function ih(t) {
        const e = T(Uu, this), [n, i, s, a] = T(zu, this), [r, o, l, c] = C($u, this, Zu).call(this),
            u = new Float64Array(36);
        return u.set([NaN, NaN, NaN, NaN, (e[2] - n) / s, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - n) / s, (e[5] - i) / a, NaN, NaN, NaN, NaN, r, o, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, (e[16] - n) / s, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - n) / s, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, T(zu, this), T(Ku, this), T(ju, this), T(Bu, this))
    }

    function sh(t, e) {
        const n = T(Wu, this);
        return t.set([NaN, NaN, NaN, NaN, n[4], n[5]], e), e + 6
    }

    function ah(t, e) {
        const n = T(Uu, this).subarray(4, 6),
            i = T(Uu, this).subarray(16, 18), [s, a, r, o] = T(zu, this), [l, c, u, h] = C($u, this, Zu).call(this);
        return t.set([NaN, NaN, NaN, NaN, (n[0] - s) / r, (n[1] - a) / o, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, u, h, NaN, NaN, NaN, NaN, (i[0] - s) / r, (i[1] - a) / o], e), e + 24
    }

    var rh = {_: 8}, oh = {_: rh._ + 2}, lh = new WeakMap, ch = new WeakMap, uh = new WeakMap, hh = new WeakMap,
        dh = new WeakMap, fh = new WeakMap, ph = new WeakMap, gh = new WeakSet;

    class mh extends Ou {
        constructor(t, e, n, i, s, a) {
            super(), x(this, gh), E(this, lh, void 0), E(this, ch, null), E(this, uh, void 0), E(this, hh, void 0), E(this, dh, void 0), E(this, fh, void 0), E(this, ph, void 0), P(ph, this, t), P(dh, this, e), P(lh, this, n), P(fh, this, i), P(uh, this, s), P(hh, this, a), C(gh, this, yh).call(this, a);
            const {x: r, y: o, width: l, height: c} = T(ch, this);
            for (let u = 0, h = t.length; u < h; u += 2) t[u] = (t[u] - r) / l, t[u + 1] = (t[u + 1] - o) / c;
            for (let u = 0, h = e.length; u < h; u += 2) e[u] = (e[u] - r) / l, e[u + 1] = (e[u + 1] - o) / c
        }

        toSVGPath() {
            const t = ["M".concat(T(ph, this)[4], " ").concat(T(ph, this)[5])];
            for (let e = 6, n = T(ph, this).length; e < n; e += 6) isNaN(T(ph, this)[e]) ? t.push("L".concat(T(ph, this)[e + 4], " ").concat(T(ph, this)[e + 5])) : t.push("C".concat(T(ph, this)[e], " ").concat(T(ph, this)[e + 1], " ").concat(T(ph, this)[e + 2], " ").concat(T(ph, this)[e + 3], " ").concat(T(ph, this)[e + 4], " ").concat(T(ph, this)[e + 5]));
            return t.push("Z"), t.join(" ")
        }

        serialize(t, e) {
            let [n, i, s, a] = t;
            const r = s - n, o = a - i;
            let l, c;
            switch (e) {
                case 0:
                    l = C(gh, this, vh).call(this, T(ph, this), n, a, r, -o), c = C(gh, this, vh).call(this, T(dh, this), n, a, r, -o);
                    break;
                case 90:
                    l = C(gh, this, bh).call(this, T(ph, this), n, i, r, o), c = C(gh, this, bh).call(this, T(dh, this), n, i, r, o);
                    break;
                case 180:
                    l = C(gh, this, vh).call(this, T(ph, this), s, i, -r, o), c = C(gh, this, vh).call(this, T(dh, this), s, i, -r, o);
                    break;
                case 270:
                    l = C(gh, this, bh).call(this, T(ph, this), s, a, -r, -o), c = C(gh, this, bh).call(this, T(dh, this), s, a, -r, -o)
            }
            return {outline: Array.from(l), points: [Array.from(c)]}
        }

        get box() {
            return T(ch, this)
        }

        newOutliner(t, e, n, i, s) {
            return new Ju(t, e, n, i, s, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0)
        }

        getNewOutline(t, e) {
            const {x: n, y: i, width: s, height: a} = T(ch, this), [r, o, l, c] = T(lh, this), u = s * l, h = a * c,
                d = n * l + r, f = i * c + o, p = this.newOutliner({
                    x: T(dh, this)[0] * u + d,
                    y: T(dh, this)[1] * h + f
                }, T(lh, this), T(fh, this), t, T(hh, this), null !== e && void 0 !== e ? e : T(uh, this));
            for (let g = 2; g < T(dh, this).length; g += 2) p.add({
                x: T(dh, this)[g] * u + d,
                y: T(dh, this)[g + 1] * h + f
            });
            return p.getOutlines()
        }

        get mustRemoveSelfIntersections() {
            return !0
        }
    }

    function vh(t, e, n, i, s) {
        const a = new Float64Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) a[r] = e + t[r] * i, a[r + 1] = n + t[r + 1] * s;
        return a
    }

    function bh(t, e, n, i, s) {
        const a = new Float64Array(t.length);
        for (let r = 0, o = t.length; r < o; r += 2) a[r] = e + t[r + 1] * i, a[r + 1] = n + t[r] * s;
        return a
    }

    function yh(t) {
        const e = T(ph, this);
        let n = e[4], i = e[5], s = n, a = i, r = n, o = i, l = n, c = i;
        const u = t ? Math.max : Math.min;
        for (let g = 6, m = e.length; g < m; g += 6) {
            if (isNaN(e[g])) s = Math.min(s, e[g + 4]), a = Math.min(a, e[g + 5]), r = Math.max(r, e[g + 4]), o = Math.max(o, e[g + 5]), c < e[g + 5] ? (l = e[g + 4], c = e[g + 5]) : c === e[g + 5] && (l = u(l, e[g + 4])); else {
                const t = Qt.bezierBoundingBox(n, i, ...e.slice(g, g + 6));
                s = Math.min(s, t[0]), a = Math.min(a, t[1]), r = Math.max(r, t[2]), o = Math.max(o, t[3]), c < t[3] ? (l = t[2], c = t[3]) : c === t[3] && (l = u(l, t[2]))
            }
            n = e[g + 4], i = e[g + 5]
        }
        const h = s - T(uh, this), d = a - T(uh, this), f = r - s + 2 * T(uh, this), p = o - a + 2 * T(uh, this);
        P(ch, this, {x: h, y: d, width: f, height: p, lastPoint: [l, c]})
    }

    var wh = new WeakMap, Ah = new WeakMap, kh = new WeakMap, _h = new WeakSet;

    class Sh {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            x(this, _h), E(this, wh, void 0), E(this, Ah, []), E(this, kh, []);
            let s = 1 / 0, a = -1 / 0, r = 1 / 0, o = -1 / 0;
            const l = 10 ** -4;
            for (const {x: g, y: m, width: v, height: b} of t) {
                const t = Math.floor((g - e) / l) * l, n = Math.ceil((g + v + e) / l) * l,
                    i = Math.floor((m - e) / l) * l, c = Math.ceil((m + b + e) / l) * l, u = [t, i, c, !0],
                    h = [n, i, c, !1];
                T(Ah, this).push(u, h), s = Math.min(s, t), a = Math.max(a, n), r = Math.min(r, i), o = Math.max(o, c)
            }
            const c = a - s + 2 * n, u = o - r + 2 * n, h = s - n, d = r - n, f = T(Ah, this).at(i ? -1 : -2),
                p = [f[0], f[2]];
            for (const g of T(Ah, this)) {
                const [t, e, n] = g;
                g[0] = (t - h) / c, g[1] = (e - d) / u, g[2] = (n - d) / u
            }
            P(wh, this, {x: h, y: d, width: c, height: u, lastPoint: p})
        }

        getOutlines() {
            T(Ah, this).sort(((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]));
            const t = [];
            for (const e of T(Ah, this)) e[3] ? (t.push(...C(_h, this, Th).call(this, e)), C(_h, this, Ch).call(this, e)) : (C(_h, this, Mh).call(this, e), t.push(...C(_h, this, Th).call(this, e)));
            return C(_h, this, xh).call(this, t)
        }
    }

    function xh(t) {
        const e = [], n = new Set;
        for (const a of t) {
            const [t, n, i] = a;
            e.push([t, n, a], [t, i, a])
        }
        e.sort(((t, e) => t[1] - e[1] || t[0] - e[0]));
        for (let a = 0, r = e.length; a < r; a += 2) {
            const t = e[a][2], i = e[a + 1][2];
            t.push(i), i.push(t), n.add(t), n.add(i)
        }
        const i = [];
        let s;
        for (; n.size > 0;) {
            const t = n.values().next().value;
            let [e, a, r, o, l] = t;
            n.delete(t);
            let c = e, u = a;
            for (s = [e, r], i.push(s); ;) {
                let t;
                if (n.has(o)) t = o; else {
                    if (!n.has(l)) break;
                    t = l
                }
                n.delete(t), [e, a, r, o, l] = t, c !== e && (s.push(c, u, e, u === a ? a : r), c = e), u = u === a ? r : a
            }
            s.push(c, u)
        }
        return new Lh(i, T(wh, this))
    }

    function Eh(t) {
        const e = T(kh, this);
        let n = 0, i = e.length - 1;
        for (; n <= i;) {
            const s = n + i >> 1, a = e[s][0];
            if (a === t) return s;
            a < t ? n = s + 1 : i = s - 1
        }
        return i + 1
    }

    function Ch(t) {
        let [, e, n] = t;
        const i = C(_h, this, Eh).call(this, e);
        T(kh, this).splice(i, 0, [e, n])
    }

    function Mh(t) {
        let [, e, n] = t;
        const i = C(_h, this, Eh).call(this, e);
        for (let s = i; s < T(kh, this).length; s++) {
            const [t, i] = T(kh, this)[s];
            if (t !== e) break;
            if (t === e && i === n) return void T(kh, this).splice(s, 1)
        }
        for (let s = i - 1; s >= 0; s--) {
            const [t, i] = T(kh, this)[s];
            if (t !== e) break;
            if (t === e && i === n) return void T(kh, this).splice(s, 1)
        }
    }

    function Th(t) {
        const [e, n, i] = t, s = [[e, n, i]], a = C(_h, this, Eh).call(this, i);
        for (let r = 0; r < a; r++) {
            const [t, n] = T(kh, this)[r];
            for (let i = 0, a = s.length; i < a; i++) {
                const [, r, o] = s[i];
                if (!(n <= r || o <= t)) if (r >= t) if (o > n) s[i][1] = n; else {
                    if (1 === a) return [];
                    s.splice(i, 1), i--, a--
                } else s[i][2] = t, o > n && s.push([e, n, o])
            }
        }
        return s
    }

    var Ph = new WeakMap, Rh = new WeakMap;

    class Lh extends Ou {
        constructor(t, e) {
            super(), E(this, Ph, void 0), E(this, Rh, void 0), P(Rh, this, t), P(Ph, this, e)
        }

        toSVGPath() {
            const t = [];
            for (const e of T(Rh, this)) {
                let [n, i] = e;
                t.push("M".concat(n, " ").concat(i));
                for (let s = 2; s < e.length; s += 2) {
                    const a = e[s], r = e[s + 1];
                    a === n ? (t.push("V".concat(r)), i = r) : r === i && (t.push("H".concat(a)), n = a)
                }
                t.push("Z")
            }
            return t.join(" ")
        }

        serialize(t, e) {
            let [n, i, s, a] = t;
            const r = [], o = s - n, l = a - i;
            for (const c of T(Rh, this)) {
                const t = new Array(c.length);
                for (let e = 0; e < c.length; e += 2) t[e] = n + c[e] * o, t[e + 1] = a - c[e + 1] * l;
                r.push(t)
            }
            return r
        }

        get box() {
            return T(Ph, this)
        }

        get classNamesForDrawing() {
            return ["highlight"]
        }

        get classNamesForOutlining() {
            return ["highlightOutline"]
        }
    }

    class Fh extends Ju {
        newFreeDrawOutline(t, e, n, i, s, a) {
            return new Ih(t, e, n, i, s, a)
        }

        get classNamesForDrawing() {
            return ["highlight", "free"]
        }
    }

    class Ih extends mh {
        get classNamesForDrawing() {
            return ["highlight", "free"]
        }

        get classNamesForOutlining() {
            return ["highlightOutline", "free"]
        }

        newOutliner(t, e, n, i, s) {
            return new Fh(t, e, n, i, s, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0)
        }
    }

    var Dh = new WeakMap, Nh = new WeakMap, Oh = new WeakMap, zh = new WeakMap, Wh = new WeakMap, jh = new WeakMap,
        Bh = new WeakMap, Hh = new WeakMap, Uh = new WeakMap, Vh = new WeakMap, Gh = new WeakMap, qh = new WeakSet;

    class Xh {
        static get _keyboardManager() {
            return Nt(this, "_keyboardManager", new vn([[["Escape", "mac+Escape"], Xh.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Xh.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Xh.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Xh.prototype._moveToPrevious], [["Home", "mac+Home"], Xh.prototype._moveToBeginning], [["End", "mac+End"], Xh.prototype._moveToEnd]]))
        }

        constructor(t) {
            var e;
            let {editor: n = null, uiManager: i = null} = t;
            x(this, qh), E(this, Dh, null), E(this, Nh, null), E(this, Oh, void 0), E(this, zh, null), E(this, Wh, !1), E(this, jh, !1), E(this, Bh, null), E(this, Hh, void 0), E(this, Uh, null), E(this, Vh, null), E(this, Gh, void 0), n ? (P(jh, this, !1), P(Gh, this, X.HIGHLIGHT_COLOR), P(Bh, this, n)) : (P(jh, this, !0), P(Gh, this, X.HIGHLIGHT_DEFAULT_COLOR)), P(Vh, this, (null === n || void 0 === n ? void 0 : n._uiManager) || i), P(Hh, this, T(Vh, this)._eventBus), P(Oh, this, (null === n || void 0 === n ? void 0 : n.color) || (null === (e = T(Vh, this)) || void 0 === e ? void 0 : e.highlightColors.values().next().value) || "#FFFF98"), td._ || (td._ = Object.freeze({
                blue: "pdfjs-editor-colorpicker-blue",
                green: "pdfjs-editor-colorpicker-green",
                pink: "pdfjs-editor-colorpicker-pink",
                red: "pdfjs-editor-colorpicker-red",
                yellow: "pdfjs-editor-colorpicker-yellow"
            }))
        }

        renderButton() {
            const t = P(Dh, this, document.createElement("button"));
            t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
            const e = T(Vh, this)._signal;
            t.addEventListener("click", C(qh, this, $h).bind(this), {signal: e}), t.addEventListener("keydown", C(qh, this, Qh).bind(this), {signal: e});
            const n = P(Nh, this, document.createElement("span"));
            return n.className = "swatch", n.setAttribute("aria-hidden", !0), n.style.backgroundColor = T(Oh, this), t.append(n), t
        }

        renderMainDropdown() {
            const t = P(zh, this, C(qh, this, Kh).call(this));
            return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t
        }

        _colorSelectFromKeyboard(t) {
            if (t.target === T(Dh, this)) return void C(qh, this, $h).call(this, t);
            const e = t.target.getAttribute("data-color");
            e && C(qh, this, Yh).call(this, e, t)
        }

        _moveToNext(t) {
            var e, n;
            M(qh, this, Zh) ? t.target !== T(Dh, this) ? null === (e = t.target.nextSibling) || void 0 === e || e.focus() : null === (n = T(zh, this).firstChild) || void 0 === n || n.focus() : C(qh, this, $h).call(this, t)
        }

        _moveToPrevious(t) {
            var e, n;
            t.target !== (null === (e = T(zh, this)) || void 0 === e ? void 0 : e.firstChild) && t.target !== T(Dh, this) ? (M(qh, this, Zh) || C(qh, this, $h).call(this, t), null === (n = t.target.previousSibling) || void 0 === n || n.focus()) : M(qh, this, Zh) && this._hideDropdownFromKeyboard()
        }

        _moveToBeginning(t) {
            var e;
            M(qh, this, Zh) ? null === (e = T(zh, this).firstChild) || void 0 === e || e.focus() : C(qh, this, $h).call(this, t)
        }

        _moveToEnd(t) {
            var e;
            M(qh, this, Zh) ? null === (e = T(zh, this).lastChild) || void 0 === e || e.focus() : C(qh, this, $h).call(this, t)
        }

        hideDropdown() {
            var t, e;
            null === (t = T(zh, this)) || void 0 === t || t.classList.add("hidden"), null === (e = T(Uh, this)) || void 0 === e || e.abort(), P(Uh, this, null)
        }

        _hideDropdownFromKeyboard() {
            var t;
            T(jh, this) || (M(qh, this, Zh) ? (this.hideDropdown(), T(Dh, this).focus({
                preventScroll: !0,
                focusVisible: T(Wh, this)
            })) : null === (t = T(Bh, this)) || void 0 === t || t.unselect())
        }

        updateColor(t) {
            if (T(Nh, this) && (T(Nh, this).style.backgroundColor = t), !T(zh, this)) return;
            const e = T(Vh, this).highlightColors.values();
            for (const n of T(zh, this).children) n.setAttribute("aria-selected", e.next().value === t)
        }

        destroy() {
            var t, e;
            null === (t = T(Dh, this)) || void 0 === t || t.remove(), P(Dh, this, null), P(Nh, this, null), null === (e = T(zh, this)) || void 0 === e || e.remove(), P(zh, this, null)
        }
    }

    function Kh() {
        const t = document.createElement("div"), e = T(Vh, this)._signal;
        t.addEventListener("contextmenu", _e, {signal: e}), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
        for (const [n, i] of T(Vh, this).highlightColors) {
            const s = document.createElement("button");
            s.tabIndex = "0", s.role = "option", s.setAttribute("data-color", i), s.title = n, s.setAttribute("data-l10n-id", td._[n]);
            const a = document.createElement("span");
            s.append(a), a.className = "swatch", a.style.backgroundColor = i, s.setAttribute("aria-selected", i === T(Oh, this)), s.addEventListener("click", C(qh, this, Yh).bind(this, i), {signal: e}), t.append(s)
        }
        return t.addEventListener("keydown", C(qh, this, Qh).bind(this), {signal: e}), t
    }

    function Yh(t, e) {
        e.stopPropagation(), T(Hh, this).dispatch("switchannotationeditorparams", {
            source: this,
            type: T(Gh, this),
            value: t
        })
    }

    function Qh(t) {
        h._keyboardManager.exec(this, t)
    }

    function $h(t) {
        if (M(qh, this, Zh)) return void this.hideDropdown();
        if (P(Wh, this, 0 === t.detail), T(Uh, this) || (P(Uh, this, new AbortController), window.addEventListener("pointerdown", C(qh, this, Jh).bind(this), {signal: T(Vh, this).combinedSignal(T(Uh, this))})), T(zh, this)) return void T(zh, this).classList.remove("hidden");
        const e = P(zh, this, C(qh, this, Kh).call(this));
        T(Dh, this).append(e)
    }

    function Jh(t) {
        var e;
        null !== (e = T(zh, this)) && void 0 !== e && e.contains(t.target) || this.hideDropdown()
    }

    function Zh(t) {
        return T(zh, t) && !T(zh, t).classList.contains("hidden")
    }

    h = Xh;
    var td = {_: null}, ed = new WeakMap, nd = new WeakMap, id = new WeakMap, sd = new WeakMap, ad = new WeakMap,
        rd = new WeakMap, od = new WeakMap, ld = new WeakMap, cd = new WeakMap, ud = new WeakMap, hd = new WeakMap,
        dd = new WeakMap, fd = new WeakMap, pd = new WeakMap, gd = new WeakMap, md = new WeakMap, vd = new WeakMap,
        bd = new WeakMap, yd = new WeakSet;

    class wd extends ps {
        static get _keyboardManager() {
            const t = wd.prototype;
            return Nt(this, "_keyboardManager", new vn([[["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, {args: [0]}], [["ArrowRight", "mac+ArrowRight"], t._moveCaret, {args: [1]}], [["ArrowUp", "mac+ArrowUp"], t._moveCaret, {args: [2]}], [["ArrowDown", "mac+ArrowDown"], t._moveCaret, {args: [3]}]]))
        }

        constructor(t) {
            super(k(k({}, t), {}, {name: "highlightEditor"})), x(this, yd), E(this, ed, null), E(this, nd, 0), E(this, id, void 0), E(this, sd, null), E(this, ad, null), E(this, rd, null), E(this, od, null), E(this, ld, 0), E(this, cd, null), E(this, ud, null), E(this, hd, null), E(this, dd, !1), E(this, fd, null), E(this, pd, void 0), E(this, gd, null), E(this, md, ""), E(this, vd, void 0), E(this, bd, ""), this.color = t.color || wd._defaultColor, P(vd, this, t.thickness || wd._defaultThickness), P(pd, this, t.opacity || wd._defaultOpacity), P(id, this, t.boxes || null), P(bd, this, t.methodOfCreation || ""), P(md, this, t.text || ""), this._isDraggable = !1, t.highlightId > -1 ? (P(dd, this, !0), C(yd, this, kd).call(this, t), C(yd, this, Cd).call(this)) : T(id, this) && (P(ed, this, t.anchorNode), P(nd, this, t.anchorOffset), P(od, this, t.focusNode), P(ld, this, t.focusOffset), C(yd, this, Ad).call(this), C(yd, this, Cd).call(this), this.rotate(this.rotation))
        }

        get telemetryInitialData() {
            return {
                action: "added",
                type: T(dd, this) ? "free_highlight" : "highlight",
                color: this._uiManager.highlightColorNames.get(this.color),
                thickness: T(vd, this),
                methodOfCreation: T(bd, this)
            }
        }

        get telemetryFinalData() {
            return {type: "highlight", color: this._uiManager.highlightColorNames.get(this.color)}
        }

        static computeTelemetryFinalData(t) {
            return {numberOfColors: t.get("color").size}
        }

        static initialize(t, e) {
            var n;
            ps.initialize(t, e), wd._defaultColor || (wd._defaultColor = (null === (n = e.highlightColors) || void 0 === n ? void 0 : n.values().next().value) || "#fff066")
        }

        static updateDefaultParams(t, e) {
            switch (t) {
                case X.HIGHLIGHT_DEFAULT_COLOR:
                    wd._defaultColor = e;
                    break;
                case X.HIGHLIGHT_THICKNESS:
                    wd._defaultThickness = e
            }
        }

        translateInPage(t, e) {
        }

        get toolbarPosition() {
            return T(fd, this)
        }

        updateParams(t, e) {
            switch (t) {
                case X.HIGHLIGHT_COLOR:
                    C(yd, this, _d).call(this, e);
                    break;
                case X.HIGHLIGHT_THICKNESS:
                    C(yd, this, Sd).call(this, e)
            }
        }

        static get defaultPropertiesToUpdate() {
            return [[X.HIGHLIGHT_DEFAULT_COLOR, wd._defaultColor], [X.HIGHLIGHT_THICKNESS, wd._defaultThickness]]
        }

        get propertiesToUpdate() {
            return [[X.HIGHLIGHT_COLOR, this.color || wd._defaultColor], [X.HIGHLIGHT_THICKNESS, T(vd, this) || wd._defaultThickness], [X.HIGHLIGHT_FREE, T(dd, this)]]
        }

        async addEditToolbar() {
            const t = await super.addEditToolbar();
            return t ? (this._uiManager.highlightColors && (P(ad, this, new Xh({editor: this})), t.addColorPicker(T(ad, this))), t) : null
        }

        disableEditing() {
            super.disableEditing(), this.div.classList.toggle("disabled", !0)
        }

        enableEditing() {
            super.enableEditing(), this.div.classList.toggle("disabled", !1)
        }

        fixAndSetPosition() {
            return super.fixAndSetPosition(C(yd, this, Rd).call(this))
        }

        getBaseTranslation() {
            return [0, 0]
        }

        getRect(t, e) {
            return super.getRect(t, e, C(yd, this, Rd).call(this))
        }

        onceAdded() {
            this.annotationElementId || this.parent.addUndoableEditor(this), this.div.focus()
        }

        remove() {
            C(yd, this, Ed).call(this), this._reportTelemetry({action: "deleted"}), super.remove()
        }

        rebuild() {
            this.parent && (super.rebuild(), null !== this.div && (C(yd, this, Cd).call(this), this.isAttachedToDOM || this.parent.add(this)))
        }

        setParent(t) {
            let e = !1;
            if (this.parent && !t) C(yd, this, Ed).call(this); else if (t) {
                var n;
                C(yd, this, Cd).call(this, t), e = !this.parent && (null === (n = this.div) || void 0 === n ? void 0 : n.classList.contains("selectedEditor"))
            }
            super.setParent(t), this.show(this._isVisible), e && this.select()
        }

        rotate(t) {
            const {drawLayer: e} = this.parent;
            let n;
            T(dd, this) ? (t = (t - this.rotation + 360) % 360, n = Md.call(wd, T(ud, this).box, t)) : n = Md.call(wd, this, t), e.rotate(T(hd, this), t), e.rotate(T(gd, this), t), e.updateBox(T(hd, this), n), e.updateBox(T(gd, this), Md.call(wd, T(rd, this).box, t))
        }

        render() {
            if (this.div) return this.div;
            const t = super.render();
            T(md, this) && (t.setAttribute("aria-label", T(md, this)), t.setAttribute("role", "mark")), T(dd, this) ? t.classList.add("free") : this.div.addEventListener("keydown", C(yd, this, Td).bind(this), {signal: this._uiManager._signal});
            const e = P(cd, this, document.createElement("div"));
            t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = T(sd, this);
            const [n, i] = this.parentDimensions;
            return this.setDims(this.width * n, this.height * i), en(this, T(cd, this), ["pointerover", "pointerleave"]), this.enableEditing(), t
        }

        pointerover() {
            this.isSelected || this.parent.drawLayer.addClass(T(gd, this), "hovered")
        }

        pointerleave() {
            this.isSelected || this.parent.drawLayer.removeClass(T(gd, this), "hovered")
        }

        _moveCaret(t) {
            switch (this.parent.unselect(this), t) {
                case 0:
                case 2:
                    C(yd, this, Pd).call(this, !0);
                    break;
                case 1:
                case 3:
                    C(yd, this, Pd).call(this, !1)
            }
        }

        select() {
            var t, e;
            super.select(), T(gd, this) && (null === (t = this.parent) || void 0 === t || t.drawLayer.removeClass(T(gd, this), "hovered"), null === (e = this.parent) || void 0 === e || e.drawLayer.addClass(T(gd, this), "selected"))
        }

        unselect() {
            var t;
            super.unselect(), T(gd, this) && (null === (t = this.parent) || void 0 === t || t.drawLayer.removeClass(T(gd, this), "selected"), T(dd, this) || C(yd, this, Pd).call(this, !1))
        }

        get _mustFixPosition() {
            return !T(dd, this)
        }

        show() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._isVisible;
            super.show(t), this.parent && (this.parent.drawLayer.show(T(hd, this), t), this.parent.drawLayer.show(T(gd, this), t))
        }

        static startHighlighting(t, e, n) {
            let {target: i, x: s, y: a} = n;
            const {x: r, y: o, width: l, height: c} = i.getBoundingClientRect(), u = new AbortController,
                h = t.combinedSignal(u), d = e => {
                    u.abort(), C(wd, this, Dd).call(this, t, e)
                };
            window.addEventListener("blur", d, {signal: h}), window.addEventListener("pointerup", d, {signal: h}), window.addEventListener("pointerdown", (t => {
                t.preventDefault(), t.stopPropagation()
            }), {
                capture: !0,
                passive: !1,
                signal: h
            }), window.addEventListener("contextmenu", _e, {signal: h}), i.addEventListener("pointermove", C(wd, this, Id).bind(this, t), {signal: h}), this._freeHighlight = new Fh({
                x: s,
                y: a
            }, [r, o, l, c], t.scale, this._defaultThickness / 2, e, .001), ({
                id: this._freeHighlightId,
                clipPathId: this._freeHighlightClipId
            } = t.drawLayer.draw(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0))
        }

        static async deserialize(t, e, n) {
            let i = null;
            if (t instanceof iu) {
                const {
                    data: {quadPoints: e, rect: n, rotation: s, id: a, color: r, opacity: o, popupRef: l},
                    parent: {page: {pageNumber: c}}
                } = t;
                i = t = {
                    annotationType: q.HIGHLIGHT,
                    color: Array.from(r),
                    opacity: o,
                    quadPoints: e,
                    boxes: null,
                    pageIndex: c - 1,
                    rect: n.slice(0),
                    rotation: s,
                    id: a,
                    deleted: !1,
                    popupRef: l
                }
            } else if (t instanceof nu) {
                const {
                    data: {
                        inkLists: e,
                        rect: n,
                        rotation: s,
                        id: a,
                        color: r,
                        borderStyle: {rawWidth: o},
                        popupRef: l
                    }, parent: {page: {pageNumber: c}}
                } = t;
                i = t = {
                    annotationType: q.HIGHLIGHT,
                    color: Array.from(r),
                    thickness: o,
                    inkLists: e,
                    boxes: null,
                    pageIndex: c - 1,
                    rect: n.slice(0),
                    rotation: s,
                    id: a,
                    deleted: !1,
                    popupRef: l
                }
            }
            const {color: s, quadPoints: a, inkLists: r, opacity: o} = t, l = await super.deserialize(t, e, n);
            l.color = Qt.makeHexColor(...s), P(pd, l, o || 1), r && P(vd, l, t.thickness), l.annotationElementId = t.id || null, l._initialData = i;
            const [c, u] = l.pageDimensions, [h, d] = l.pageTranslation;
            if (a) {
                const t = P(id, l, []);
                for (let e = 0; e < a.length; e += 8) t.push({
                    x: (a[e] - h) / c,
                    y: 1 - (a[e + 1] - d) / u,
                    width: (a[e + 2] - a[e]) / c,
                    height: (a[e + 1] - a[e + 5]) / u
                });
                C(yd, l, Ad).call(l), C(yd, l, Cd).call(l), l.rotate(l.rotation)
            } else if (r) {
                P(dd, l, !0);
                const t = r[0], n = {x: t[0] - h, y: u - (t[1] - d)},
                    i = new Fh(n, [0, 0, c, u], 1, T(vd, l) / 2, !0, .001);
                for (let e = 0, r = t.length; e < r; e += 2) n.x = t[e] - h, n.y = u - (t[e + 1] - d), i.add(n);
                const {id: s, clipPathId: a} = e.drawLayer.draw(i, l.color, l._defaultOpacity, !0);
                C(yd, l, kd).call(l, {
                    highlightOutlines: i.getOutlines(),
                    highlightId: s,
                    clipPathId: a
                }), C(yd, l, Cd).call(l)
            }
            return l
        }

        serialize() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.isEmpty() || t) return null;
            if (this.deleted) return this.serializeDeleted();
            const e = this.getRect(0, 0), n = ps._colorManager.convert(this.color), i = {
                annotationType: q.HIGHLIGHT,
                color: n,
                opacity: T(pd, this),
                thickness: T(vd, this),
                quadPoints: C(yd, this, Ld).call(this),
                outlines: C(yd, this, Fd).call(this, e),
                pageIndex: this.pageIndex,
                rect: e,
                rotation: C(yd, this, Rd).call(this),
                structTreeParentId: this._structTreeParentId
            };
            return this.annotationElementId && !C(yd, this, Nd).call(this, i) ? null : (i.id = this.annotationElementId, i)
        }

        renderAnnotationElement(t) {
            return t.updateEdited({rect: this.getRect(0, 0)}), null
        }

        static canCreateNewEmptyEditor() {
            return !1
        }
    }

    function Ad() {
        const t = new Sh(T(id, this), .001);
        P(ud, this, t.getOutlines()), ({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        } = T(ud, this).box);
        const e = new Sh(T(id, this), .0025, .001, "ltr" === this._uiManager.direction);
        P(rd, this, e.getOutlines());
        const {lastPoint: n} = T(rd, this).box;
        P(fd, this, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height])
    }

    function kd(t) {
        let {highlightOutlines: e, highlightId: n, clipPathId: i} = t;
        P(ud, this, e);
        if (P(rd, this, e.getNewOutline(T(vd, this) / 2 + 1.5, .0025)), n >= 0) P(hd, this, n), P(sd, this, i), this.parent.drawLayer.finalizeLine(n, e), P(gd, this, this.parent.drawLayer.drawOutline(T(rd, this))); else if (this.parent) {
            const t = this.parent.viewport.rotation;
            this.parent.drawLayer.updateLine(T(hd, this), e), this.parent.drawLayer.updateBox(T(hd, this), Md.call(d, T(ud, this).box, (t - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(T(gd, this), T(rd, this)), this.parent.drawLayer.updateBox(T(gd, this), Md.call(d, T(rd, this).box, t))
        }
        const {x: s, y: a, width: r, height: o} = e.box;
        switch (this.rotation) {
            case 0:
                this.x = s, this.y = a, this.width = r, this.height = o;
                break;
            case 90: {
                const [t, e] = this.parentDimensions;
                this.x = a, this.y = 1 - s, this.width = r * e / t, this.height = o * t / e;
                break
            }
            case 180:
                this.x = 1 - s, this.y = 1 - a, this.width = r, this.height = o;
                break;
            case 270: {
                const [t, e] = this.parentDimensions;
                this.x = 1 - a, this.y = s, this.width = r * e / t, this.height = o * t / e;
                break
            }
        }
        const {lastPoint: l} = T(rd, this).box;
        P(fd, this, [(l[0] - s) / r, (l[1] - a) / o])
    }

    function _d(t) {
        const e = (t, e) => {
            var n, i, s;
            this.color = t, null === (n = this.parent) || void 0 === n || n.drawLayer.changeColor(T(hd, this), t), null === (i = T(ad, this)) || void 0 === i || i.updateColor(t), P(pd, this, e), null === (s = this.parent) || void 0 === s || s.drawLayer.changeOpacity(T(hd, this), e)
        }, n = this.color, i = T(pd, this);
        this.addCommands({
            cmd: e.bind(this, t, d._defaultOpacity),
            undo: e.bind(this, n, i),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.HIGHLIGHT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
        }), this._reportTelemetry({action: "color_changed", color: this._uiManager.highlightColorNames.get(t)}, !0)
    }

    function Sd(t) {
        const e = T(vd, this), n = t => {
            P(vd, this, t), C(yd, this, xd).call(this, t)
        };
        this.addCommands({
            cmd: n.bind(this, t),
            undo: n.bind(this, e),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
        }), this._reportTelemetry({action: "thickness_changed", thickness: t}, !0)
    }

    function xd(t) {
        if (!T(dd, this)) return;
        C(yd, this, kd).call(this, {highlightOutlines: T(ud, this).getNewOutline(t / 2)}), this.fixAndSetPosition();
        const [e, n] = this.parentDimensions;
        this.setDims(this.width * e, this.height * n)
    }

    function Ed() {
        null !== T(hd, this) && this.parent && (this.parent.drawLayer.remove(T(hd, this)), P(hd, this, null), this.parent.drawLayer.remove(T(gd, this)), P(gd, this, null))
    }

    function Cd() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent;
        null === T(hd, this) && (({
            id: _(P, [hd, this])._,
            clipPathId: _(P, [sd, this])._
        } = t.drawLayer.draw(T(ud, this), this.color, T(pd, this))), P(gd, this, t.drawLayer.drawOutline(T(rd, this))), T(cd, this) && (T(cd, this).style.clipPath = T(sd, this)))
    }

    function Md(t, e) {
        let {x: n, y: i, width: s, height: a} = t;
        switch (e) {
            case 90:
                return {x: 1 - i - a, y: n, width: a, height: s};
            case 180:
                return {x: 1 - n - s, y: 1 - i - a, width: s, height: a};
            case 270:
                return {x: i, y: 1 - n - s, width: a, height: s}
        }
        return {x: n, y: i, width: s, height: a}
    }

    function Td(t) {
        d._keyboardManager.exec(this, t)
    }

    function Pd(t) {
        if (!T(ed, this)) return;
        const e = window.getSelection();
        t ? e.setPosition(T(ed, this), T(nd, this)) : e.setPosition(T(od, this), T(ld, this))
    }

    function Rd() {
        return T(dd, this) ? this.rotation : 0
    }

    function Ld() {
        if (T(dd, this)) return null;
        const [t, e] = this.pageDimensions, [n, i] = this.pageTranslation, s = T(id, this),
            a = new Float32Array(8 * s.length);
        let r = 0;
        for (const {x: o, y: l, width: c, height: u} of s) {
            const s = o * t + n, h = (1 - l - u) * e + i;
            a[r] = a[r + 4] = s, a[r + 1] = a[r + 3] = h, a[r + 2] = a[r + 6] = s + c * t, a[r + 5] = a[r + 7] = h + u * e, r += 8
        }
        return a
    }

    function Fd(t) {
        return T(ud, this).serialize(t, C(yd, this, Rd).call(this))
    }

    function Id(t, e) {
        this._freeHighlight.add(e) && t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight)
    }

    function Dd(t, e) {
        this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(e, !1, {
            highlightId: this._freeHighlightId,
            highlightOutlines: this._freeHighlight.getOutlines(),
            clipPathId: this._freeHighlightClipId,
            methodOfCreation: "main_toolbar"
        }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = ""
    }

    function Nd(t) {
        const {color: e} = this._initialData;
        return t.color.some(((t, n) => t !== e[n]))
    }

    d = wd, w(wd, "_defaultColor", null), w(wd, "_defaultOpacity", 1), w(wd, "_defaultThickness", 12), w(wd, "_type", "highlight"), w(wd, "_editorType", q.HIGHLIGHT), w(wd, "_freeHighlightId", -1), w(wd, "_freeHighlight", null), w(wd, "_freeHighlightClipId", "");
    var Od = new WeakMap, zd = new WeakMap, Wd = new WeakMap, jd = new WeakMap, Bd = new WeakMap, Hd = new WeakMap,
        Ud = new WeakMap, Vd = new WeakMap, Gd = new WeakMap, qd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap,
        Yd = new WeakMap, Qd = new WeakSet;

    class $d extends ps {
        constructor(t) {
            super(k(k({}, t), {}, {name: "inkEditor"})), x(this, Qd), E(this, Od, 0), E(this, zd, 0), E(this, Wd, null), E(this, jd, new Path2D), E(this, Bd, !1), E(this, Hd, null), E(this, Ud, !1), E(this, Vd, !1), E(this, Gd, null), E(this, qd, null), E(this, Xd, 0), E(this, Kd, 0), E(this, Yd, null), this.color = t.color || null, this.thickness = t.thickness || null, this.opacity = t.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0
        }

        static initialize(t, e) {
            ps.initialize(t, e)
        }

        static updateDefaultParams(t, e) {
            switch (t) {
                case X.INK_THICKNESS:
                    $d._defaultThickness = e;
                    break;
                case X.INK_COLOR:
                    $d._defaultColor = e;
                    break;
                case X.INK_OPACITY:
                    $d._defaultOpacity = e / 100
            }
        }

        updateParams(t, e) {
            switch (t) {
                case X.INK_THICKNESS:
                    C(Qd, this, Jd).call(this, e);
                    break;
                case X.INK_COLOR:
                    C(Qd, this, Zd).call(this, e);
                    break;
                case X.INK_OPACITY:
                    C(Qd, this, tf).call(this, e)
            }
        }

        static get defaultPropertiesToUpdate() {
            return [[X.INK_THICKNESS, $d._defaultThickness], [X.INK_COLOR, $d._defaultColor || ps._defaultLineColor], [X.INK_OPACITY, Math.round(100 * $d._defaultOpacity)]]
        }

        get propertiesToUpdate() {
            var t;
            return [[X.INK_THICKNESS, this.thickness || $d._defaultThickness], [X.INK_COLOR, this.color || $d._defaultColor || ps._defaultLineColor], [X.INK_OPACITY, Math.round(100 * (null !== (t = this.opacity) && void 0 !== t ? t : $d._defaultOpacity))]]
        }

        rebuild() {
            this.parent && (super.rebuild(), null !== this.div && (this.canvas || (C(Qd, this, gf).call(this), C(Qd, this, mf).call(this)), this.isAttachedToDOM || (this.parent.add(this), C(Qd, this, vf).call(this)), C(Qd, this, Ef).call(this)))
        }

        remove() {
            var t;
            null !== this.canvas && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, T(Wd, this) && (clearTimeout(T(Wd, this)), P(Wd, this, null)), null === (t = T(Gd, this)) || void 0 === t || t.disconnect(), P(Gd, this, null), super.remove())
        }

        setParent(t) {
            !this.parent && t ? this._uiManager.removeShouldRescale(this) : this.parent && null === t && this._uiManager.addShouldRescale(this), super.setParent(t)
        }

        onScaleChanging() {
            const [t, e] = this.parentDimensions, n = this.width * t, i = this.height * e;
            this.setDimensions(n, i)
        }

        enableEditMode() {
            T(Bd, this) || null === this.canvas || (super.enableEditMode(), this._isDraggable = !1, C(Qd, this, df).call(this))
        }

        disableEditMode() {
            this.isInEditMode() && null !== this.canvas && (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), C(Qd, this, ff).call(this))
        }

        onceAdded() {
            this._isDraggable = !this.isEmpty()
        }

        isEmpty() {
            return 0 === this.paths.length || 1 === this.paths.length && 0 === this.paths[0].length
        }

        commit() {
            T(Bd, this) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), P(Bd, this, !0), this.div.classList.add("disabled"), C(Qd, this, Ef).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({preventScroll: !0}))
        }

        focusin(t) {
            this._focusEventsAllowed && (super.focusin(t), this.enableEditMode())
        }

        canvasPointerdown(t) {
            0 === t.button && this.isInEditMode() && !T(Bd, this) && (this.setInForeground(), t.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({preventScroll: !0}), C(Qd, this, sf).call(this, t.offsetX, t.offsetY))
        }

        canvasPointermove(t) {
            t.preventDefault(), C(Qd, this, af).call(this, t.offsetX, t.offsetY)
        }

        canvasPointerup(t) {
            t.preventDefault(), C(Qd, this, pf).call(this, t)
        }

        canvasPointerleave(t) {
            C(Qd, this, pf).call(this, t)
        }

        get isResizable() {
            return !this.isEmpty() && T(Bd, this)
        }

        render() {
            if (this.div) return this.div;
            let t, e;
            this.width && (t = this.x, e = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
            const [n, i, s, a] = C(Qd, this, ef).call(this);
            if (this.setAt(n, i, 0, 0), this.setDims(s, a), C(Qd, this, gf).call(this), this.width) {
                const [n, i] = this.parentDimensions;
                this.setAspectRatio(this.width * n, this.height * i), this.setAt(t * n, e * i, this.width * n, this.height * i), P(Vd, this, !0), C(Qd, this, vf).call(this), this.setDims(this.width * n, this.height * i), C(Qd, this, hf).call(this), this.div.classList.add("disabled")
            } else this.div.classList.add("editing"), this.enableEditMode();
            return C(Qd, this, mf).call(this), this.div
        }

        setDimensions(t, e) {
            const n = Math.round(t), i = Math.round(e);
            if (T(Xd, this) === n && T(Kd, this) === i) return;
            P(Xd, this, n), P(Kd, this, i), this.canvas.style.visibility = "hidden";
            const [s, a] = this.parentDimensions;
            this.width = t / s, this.height = e / a, this.fixAndSetPosition(), T(Bd, this) && C(Qd, this, bf).call(this, t, e), C(Qd, this, vf).call(this), C(Qd, this, hf).call(this), this.canvas.style.visibility = "visible", this.fixDims()
        }

        static async deserialize(t, e, n) {
            if (t instanceof nu) return null;
            const i = await super.deserialize(t, e, n);
            i.thickness = t.thickness, i.color = Qt.makeHexColor(...t.color), i.opacity = t.opacity;
            const [s, a] = i.pageDimensions, r = i.width * s, o = i.height * a, l = i.parentScale, c = t.thickness / 2;
            P(Bd, i, !0), P(Xd, i, Math.round(r)), P(Kd, i, Math.round(o));
            const {paths: u, rect: h, rotation: d} = t;
            for (let {bezier: p} of u) {
                p = kf.call($d, p, h, d);
                const t = [];
                i.paths.push(t);
                let e = l * (p[0] - c), n = l * (p[1] - c);
                for (let i = 2, a = p.length; i < a; i += 6) {
                    const s = l * (p[i] - c), a = l * (p[i + 1] - c), r = l * (p[i + 2] - c), o = l * (p[i + 3] - c),
                        u = l * (p[i + 4] - c), h = l * (p[i + 5] - c);
                    t.push([[e, n], [s, a], [r, o], [u, h]]), e = u, n = h
                }
                const s = C($d, this, wf).call(this, t);
                i.bezierPath2D.push(s)
            }
            const f = C(Qd, i, Sf).call(i);
            return P(zd, i, Math.max(ps.MIN_SIZE, f[2] - f[0])), P(Od, i, Math.max(ps.MIN_SIZE, f[3] - f[1])), C(Qd, i, bf).call(i, r, o), i
        }

        serialize() {
            if (this.isEmpty()) return null;
            const t = this.getRect(0, 0), e = ps._colorManager.convert(this.ctx.strokeStyle);
            return {
                annotationType: q.INK,
                color: e,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: C(Qd, this, _f).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, t),
                pageIndex: this.pageIndex,
                rect: t,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
            }
        }
    }

    function Jd(t) {
        const e = t => {
            this.thickness = t, C(Qd, this, Ef).call(this)
        }, n = this.thickness;
        this.addCommands({
            cmd: e.bind(this, t),
            undo: e.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
        })
    }

    function Zd(t) {
        const e = t => {
            this.color = t, C(Qd, this, hf).call(this)
        }, n = this.color;
        this.addCommands({
            cmd: e.bind(this, t),
            undo: e.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.INK_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
        })
    }

    function tf(t) {
        const e = t => {
            this.opacity = t, C(Qd, this, hf).call(this)
        };
        t /= 100;
        const n = this.opacity;
        this.addCommands({
            cmd: e.bind(this, t),
            undo: e.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: X.INK_OPACITY,
            overwriteIfSameType: !0,
            keepUndo: !0
        })
    }

    function ef() {
        const {parentRotation: t, parentDimensions: [e, n]} = this;
        switch (t) {
            case 90:
                return [0, n, n, e];
            case 180:
                return [e, n, e, n];
            case 270:
                return [e, 0, n, e];
            default:
                return [0, 0, e, n]
        }
    }

    function nf() {
        const {ctx: t, color: e, opacity: n, thickness: i, parentScale: s, scaleFactor: a} = this;
        t.lineWidth = i * s / a, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = 10, t.strokeStyle = "".concat(e).concat(function (t) {
            return Math.round(Math.min(255, Math.max(1, 255 * t))).toString(16).padStart(2, "0")
        }(n))
    }

    function sf(t, e) {
        this.canvas.addEventListener("contextmenu", _e, {signal: this._uiManager._signal}), C(Qd, this, ff).call(this), P(Hd, this, new AbortController);
        const n = this._uiManager.combinedSignal(T(Hd, this));
        var i;
        (this.canvas.addEventListener("pointerleave", this.canvasPointerleave.bind(this), {signal: n}), this.canvas.addEventListener("pointermove", this.canvasPointermove.bind(this), {signal: n}), this.canvas.addEventListener("pointerup", this.canvasPointerup.bind(this), {signal: n}), this.isEditing = !0, T(Vd, this)) || (P(Vd, this, !0), C(Qd, this, vf).call(this), this.thickness || (this.thickness = f._defaultThickness), this.color || (this.color = f._defaultColor || ps._defaultLineColor), null !== (i = this.opacity) && void 0 !== i || (this.opacity = f._defaultOpacity));
        this.currentPath.push([t, e]), P(Ud, this, !1), C(Qd, this, nf).call(this), P(Yd, this, (() => {
            C(Qd, this, lf).call(this), T(Yd, this) && window.requestAnimationFrame(T(Yd, this))
        })), window.requestAnimationFrame(T(Yd, this))
    }

    function af(t, e) {
        const [n, i] = this.currentPath.at(-1);
        if (this.currentPath.length > 1 && t === n && e === i) return;
        const s = this.currentPath;
        let a = T(jd, this);
        if (s.push([t, e]), P(Ud, this, !0), s.length <= 2) return a.moveTo(...s[0]), void a.lineTo(t, e);
        3 === s.length && (P(jd, this, a = new Path2D), a.moveTo(...s[0])), C(Qd, this, cf).call(this, a, ...s.at(-3), ...s.at(-2), t, e)
    }

    function rf() {
        if (0 === this.currentPath.length) return;
        const t = this.currentPath.at(-1);
        T(jd, this).lineTo(...t)
    }

    function of(t, e) {
        let n;
        if (P(Yd, this, null), t = Math.min(Math.max(t, 0), this.canvas.width), e = Math.min(Math.max(e, 0), this.canvas.height), C(Qd, this, af).call(this, t, e), C(Qd, this, rf).call(this), 1 !== this.currentPath.length) n = C(Qd, this, uf).call(this); else {
            const i = [t, e];
            n = [[i, i.slice(), i.slice(), i]]
        }
        const i = T(jd, this), s = this.currentPath;
        this.currentPath = [], P(jd, this, new Path2D);
        this.addCommands({
            cmd: () => {
                this.allRawPaths.push(s), this.paths.push(n), this.bezierPath2D.push(i), this._uiManager.rebuild(this)
            }, undo: () => {
                this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), 0 === this.paths.length ? this.remove() : (this.canvas || (C(Qd, this, gf).call(this), C(Qd, this, mf).call(this)), C(Qd, this, Ef).call(this))
            }, mustExec: !0
        })
    }

    function lf() {
        if (!T(Ud, this)) return;
        P(Ud, this, !1);
        const t = Math.ceil(this.thickness * this.parentScale), e = this.currentPath.slice(-3), n = e.map((t => t[0])),
            i = e.map((t => t[1])), {ctx: s} = (Math.min(...n), Math.max(...n), Math.min(...i), Math.max(...i), this);
        s.save(), s.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const a of this.bezierPath2D) s.stroke(a);
        s.stroke(T(jd, this)), s.restore()
    }

    function cf(t, e, n, i, s, a, r) {
        const o = (e + i) / 2, l = (n + s) / 2, c = (i + a) / 2, u = (s + r) / 2;
        t.bezierCurveTo(o + 2 * (i - o) / 3, l + 2 * (s - l) / 3, c + 2 * (i - c) / 3, u + 2 * (s - u) / 3, c, u)
    }

    function uf() {
        const t = this.currentPath;
        if (t.length <= 2) return [[t[0], t[0], t.at(-1), t.at(-1)]];
        const e = [];
        let n, [i, s] = t[0];
        for (n = 1; n < t.length - 2; n++) {
            const [a, r] = t[n], [o, l] = t[n + 1], c = (a + o) / 2, u = (r + l) / 2,
                h = [i + 2 * (a - i) / 3, s + 2 * (r - s) / 3], d = [c + 2 * (a - c) / 3, u + 2 * (r - u) / 3];
            e.push([[i, s], h, d, [c, u]]), [i, s] = [c, u]
        }
        const [a, r] = t[n], [o, l] = t[n + 1], c = [i + 2 * (a - i) / 3, s + 2 * (r - s) / 3],
            u = [o + 2 * (a - o) / 3, l + 2 * (r - l) / 3];
        return e.push([[i, s], c, u, [o, l]]), e
    }

    function hf() {
        if (this.isEmpty()) return void C(Qd, this, yf).call(this);
        C(Qd, this, nf).call(this);
        const {canvas: t, ctx: e} = this;
        e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height), C(Qd, this, yf).call(this);
        for (const n of this.bezierPath2D) e.stroke(n)
    }

    function df() {
        if (T(qd, this)) return;
        P(qd, this, new AbortController);
        const t = this._uiManager.combinedSignal(T(qd, this));
        this.canvas.addEventListener("pointerdown", this.canvasPointerdown.bind(this), {signal: t})
    }

    function ff() {
        var t;
        null === (t = this.pointerdownAC) || void 0 === t || t.abort(), this.pointerdownAC = null
    }

    function pf(t) {
        var e;
        null === (e = T(Hd, this)) || void 0 === e || e.abort(), P(Hd, this, null), C(Qd, this, df).call(this), T(Wd, this) && clearTimeout(T(Wd, this)), P(Wd, this, setTimeout((() => {
            P(Wd, this, null), this.canvas.removeEventListener("contextmenu", _e)
        }), 10)), C(Qd, this, of).call(this, t.offsetX, t.offsetY), this.addToAnnotationStorage(), this.setInBackground()
    }

    function gf() {
        this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d")
    }

    function mf() {
        P(Gd, this, new ResizeObserver((t => {
            const e = t[0].contentRect;
            e.width && e.height && this.setDimensions(e.width, e.height)
        }))), T(Gd, this).observe(this.div), this._uiManager._signal.addEventListener("abort", (() => {
            var t;
            null === (t = T(Gd, this)) || void 0 === t || t.disconnect(), P(Gd, this, null)
        }), {once: !0})
    }

    function vf() {
        if (!T(Vd, this)) return;
        const [t, e] = this.parentDimensions;
        this.canvas.width = Math.ceil(this.width * t), this.canvas.height = Math.ceil(this.height * e), C(Qd, this, yf).call(this)
    }

    function bf(t, e) {
        const n = C(Qd, this, xf).call(this), i = (t - n) / T(zd, this), s = (e - n) / T(Od, this);
        this.scaleFactor = Math.min(i, s)
    }

    function yf() {
        const t = C(Qd, this, xf).call(this) / 2;
        this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + t, this.translationY * this.scaleFactor + t)
    }

    function wf(t) {
        const e = new Path2D;
        for (let n = 0, i = t.length; n < i; n++) {
            const [i, s, a, r] = t[n];
            0 === n && e.moveTo(...i), e.bezierCurveTo(s[0], s[1], a[0], a[1], r[0], r[1])
        }
        return e
    }

    function Af(t, e, n) {
        const [i, s, a, r] = e;
        switch (n) {
            case 0:
                for (let e = 0, n = t.length; e < n; e += 2) t[e] += i, t[e + 1] = r - t[e + 1];
                break;
            case 90:
                for (let e = 0, n = t.length; e < n; e += 2) {
                    const n = t[e];
                    t[e] = t[e + 1] + i, t[e + 1] = n + s
                }
                break;
            case 180:
                for (let e = 0, n = t.length; e < n; e += 2) t[e] = a - t[e], t[e + 1] += s;
                break;
            case 270:
                for (let e = 0, n = t.length; e < n; e += 2) {
                    const n = t[e];
                    t[e] = a - t[e + 1], t[e + 1] = r - n
                }
                break;
            default:
                throw new Error("Invalid rotation")
        }
        return t
    }

    function kf(t, e, n) {
        const [i, s, a, r] = e;
        switch (n) {
            case 0:
                for (let e = 0, n = t.length; e < n; e += 2) t[e] -= i, t[e + 1] = r - t[e + 1];
                break;
            case 90:
                for (let e = 0, n = t.length; e < n; e += 2) {
                    const n = t[e];
                    t[e] = t[e + 1] - s, t[e + 1] = n - i
                }
                break;
            case 180:
                for (let e = 0, n = t.length; e < n; e += 2) t[e] = a - t[e], t[e + 1] -= s;
                break;
            case 270:
                for (let e = 0, n = t.length; e < n; e += 2) {
                    const n = t[e];
                    t[e] = r - t[e + 1], t[e + 1] = a - n
                }
                break;
            default:
                throw new Error("Invalid rotation")
        }
        return t
    }

    function _f(t, e, n, i) {
        const s = [], a = this.thickness / 2, r = t * e + a, o = t * n + a;
        for (const l of this.paths) {
            const e = [], n = [];
            for (let i = 0, s = l.length; i < s; i++) {
                const [a, c, u, h] = l[i];
                if (a[0] === h[0] && a[1] === h[1] && 1 === s) {
                    const i = t * a[0] + r, s = t * a[1] + o;
                    e.push(i, s), n.push(i, s);
                    break
                }
                const d = t * a[0] + r, f = t * a[1] + o, p = t * c[0] + r, g = t * c[1] + o, m = t * u[0] + r,
                    v = t * u[1] + o, b = t * h[0] + r, y = t * h[1] + o;
                0 === i && (e.push(d, f), n.push(d, f)), e.push(p, g, m, v, b, y), n.push(p, g), i === s - 1 && n.push(b, y)
            }
            s.push({bezier: Af.call(f, e, i, this.rotation), points: Af.call(f, n, i, this.rotation)})
        }
        return s
    }

    function Sf() {
        let t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0;
        for (const s of this.paths) for (const [a, r, o, l] of s) {
            const s = Qt.bezierBoundingBox(...a, ...r, ...o, ...l);
            t = Math.min(t, s[0]), n = Math.min(n, s[1]), e = Math.max(e, s[2]), i = Math.max(i, s[3])
        }
        return [t, n, e, i]
    }

    function xf() {
        return T(Bd, this) ? Math.ceil(this.thickness * this.parentScale) : 0
    }

    function Ef() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isEmpty()) return;
        if (!T(Bd, this)) return void C(Qd, this, hf).call(this);
        const e = C(Qd, this, Sf).call(this), n = C(Qd, this, xf).call(this);
        P(zd, this, Math.max(ps.MIN_SIZE, e[2] - e[0])), P(Od, this, Math.max(ps.MIN_SIZE, e[3] - e[1]));
        const i = Math.ceil(n + T(zd, this) * this.scaleFactor),
            s = Math.ceil(n + T(Od, this) * this.scaleFactor), [a, r] = this.parentDimensions;
        this.width = i / a, this.height = s / r, this.setAspectRatio(i, s);
        const o = this.translationX, l = this.translationY;
        this.translationX = -e[0], this.translationY = -e[1], C(Qd, this, vf).call(this), C(Qd, this, hf).call(this), P(Xd, this, i), P(Kd, this, s), this.setDims(i, s);
        const c = t ? n / this.scaleFactor / 2 : 0;
        this.translate(o - this.translationX - c, l - this.translationY - c)
    }

    f = $d, w($d, "_defaultColor", null), w($d, "_defaultOpacity", 1), w($d, "_defaultThickness", 1), w($d, "_type", "ink"), w($d, "_editorType", q.INK);
    var Cf = new WeakMap, Mf = new WeakMap, Tf = new WeakMap, Pf = new WeakMap, Rf = new WeakMap, Lf = new WeakMap,
        Ff = new WeakMap, If = new WeakMap, Df = new WeakMap, Nf = new WeakMap, Of = new WeakMap, zf = new WeakSet;

    class Wf extends ps {
        constructor(t) {
            super(k(k({}, t), {}, {name: "stampEditor"})), x(this, zf), E(this, Cf, null), E(this, Mf, null), E(this, Tf, null), E(this, Pf, null), E(this, Rf, null), E(this, Lf, ""), E(this, Ff, null), E(this, If, null), E(this, Df, null), E(this, Nf, !1), E(this, Of, !1), P(Pf, this, t.bitmapUrl), P(Rf, this, t.bitmapFile)
        }

        static initialize(t, e) {
            ps.initialize(t, e)
        }

        static get supportedTypes() {
            return Nt(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((t => "image/".concat(t))))
        }

        static get supportedTypesStr() {
            return Nt(this, "supportedTypesStr", this.supportedTypes.join(","))
        }

        static isHandlingMimeForPasting(t) {
            return this.supportedTypes.includes(t)
        }

        static paste(t, e) {
            e.pasteEditor(q.STAMP, {bitmapFile: t.getAsFile()})
        }

        altTextFinish() {
            this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish()
        }

        get telemetryFinalData() {
            var t;
            return {type: "stamp", hasAltText: !(null === (t = this.altTextData) || void 0 === t || !t.altText)}
        }

        static computeTelemetryFinalData(t) {
            var e, n;
            const i = t.get("hasAltText");
            return {
                hasAltText: null !== (e = i.get(!0)) && void 0 !== e ? e : 0,
                hasNoAltText: null !== (n = i.get(!1)) && void 0 !== n ? n : 0
            }
        }

        async mlGuessAltText() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.hasAltTextData()) return null;
            const {mlManager: n} = this._uiManager;
            if (!n) throw new Error("No ML.");
            if (!await n.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
            const {data: i, width: s, height: a} = t || this.copyCanvas(null, null, !0).imageData, r = await n.guess({
                name: "altText",
                request: {data: i, width: s, height: a, channels: i.length / (s * a)}
            });
            if (!r) throw new Error("No response from the AI service.");
            if (r.error) throw new Error("Error from the AI service.");
            if (r.cancel) return null;
            if (!r.output) throw new Error("No valid response from the AI service.");
            const o = r.output;
            return await this.setGuessedAltText(o), e && !this.hasAltTextData() && (this.altTextData = {
                alt: o,
                decorative: !1
            }), o
        }

        remove() {
            var t, e;
            T(Mf, this) && (P(Cf, this, null), this._uiManager.imageManager.deleteId(T(Mf, this)), null === (t = T(Ff, this)) || void 0 === t || t.remove(), P(Ff, this, null), null === (e = T(If, this)) || void 0 === e || e.disconnect(), P(If, this, null), T(Df, this) && (clearTimeout(T(Df, this)), P(Df, this, null)));
            super.remove()
        }

        rebuild() {
            this.parent ? (super.rebuild(), null !== this.div && (T(Mf, this) && null === T(Ff, this) && C(zf, this, Hf).call(this), this.isAttachedToDOM || this.parent.add(this))) : T(Mf, this) && C(zf, this, Hf).call(this)
        }

        onceAdded() {
            this._isDraggable = !0, this.div.focus()
        }

        isEmpty() {
            return !(T(Tf, this) || T(Cf, this) || T(Pf, this) || T(Rf, this) || T(Mf, this))
        }

        get isResizable() {
            return !0
        }

        render() {
            if (this.div) return this.div;
            let t, e;
            if (this.width && (t = this.x, e = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), T(Cf, this) ? C(zf, this, Uf).call(this) : C(zf, this, Hf).call(this), this.width && !this.annotationElementId) {
                const [n, i] = this.parentDimensions;
                this.setAt(t * n, e * i, this.width * n, this.height * i)
            }
            return this.div
        }

        copyCanvas(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            t || (t = 224);
            const {width: i, height: s} = T(Cf, this), a = new Le;
            let r = T(Cf, this), o = i, l = s, c = null;
            if (e) {
                var u, h;
                if (i > e || s > e) {
                    const t = Math.min(e / i, e / s);
                    o = Math.floor(i * t), l = Math.floor(s * t)
                }
                c = document.createElement("canvas");
                const t = c.width = Math.ceil(o * a.sx), n = c.height = Math.ceil(l * a.sy);
                T(Nf, this) || (r = C(zf, this, Gf).call(this, t, n));
                const d = c.getContext("2d");
                d.filter = this._uiManager.hcmFilter;
                let f = "white", p = "#cfcfd8";
                "none" !== this._uiManager.hcmFilter ? p = "black" : null !== (u = (h = window).matchMedia) && void 0 !== u && u.call(h, "(prefers-color-scheme: dark)").matches && (f = "#8f8f9d", p = "#42414d");
                const g = 15, m = g * a.sx, v = g * a.sy, b = new OffscreenCanvas(2 * m, 2 * v), y = b.getContext("2d");
                y.fillStyle = f, y.fillRect(0, 0, 2 * m, 2 * v), y.fillStyle = p, y.fillRect(0, 0, m, v), y.fillRect(m, v, m, v), d.fillStyle = d.createPattern(b, "repeat"), d.fillRect(0, 0, t, n), d.drawImage(r, 0, 0, r.width, r.height, 0, 0, t, n)
            }
            let d = null;
            if (n) {
                let e, n;
                if (a.symmetric && r.width < t && r.height < t) e = r.width, n = r.height; else if (r = T(Cf, this), i > t || s > t) {
                    const a = Math.min(t / i, t / s);
                    e = Math.floor(i * a), n = Math.floor(s * a), T(Nf, this) || (r = C(zf, this, Gf).call(this, e, n))
                }
                const o = new OffscreenCanvas(e, n).getContext("2d", {willReadFrequently: !0});
                o.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, n), d = {
                    width: e,
                    height: n,
                    data: o.getImageData(0, 0, e, n).data
                }
            }
            return {canvas: c, width: o, height: l, imageData: d}
        }

        getImageForAltText() {
            return T(Ff, this)
        }

        static async deserialize(t, e, n) {
            let i = null;
            if (t instanceof ou) {
                var s;
                const {
                    data: {rect: a, rotation: r, id: o, structParent: l, popupRef: c},
                    container: u,
                    parent: {page: {pageNumber: h}}
                } = t, d = u.querySelector("canvas"), f = n.imageManager.getFromCanvas(u.id, d);
                d.remove();
                const p = (null === (s = await e._structTree.getAriaAttributes("".concat(ne).concat(o))) || void 0 === s ? void 0 : s.get("aria-label")) || "";
                i = t = {
                    annotationType: q.STAMP,
                    bitmapId: f.id,
                    bitmap: f.bitmap,
                    pageIndex: h - 1,
                    rect: a.slice(0),
                    rotation: r,
                    id: o,
                    deleted: !1,
                    accessibilityData: {decorative: !1, altText: p},
                    isSvg: !1,
                    structParent: l,
                    popupRef: c
                }
            }
            const a = await super.deserialize(t, e, n), {
                rect: r,
                bitmap: o,
                bitmapUrl: l,
                bitmapId: c,
                isSvg: u,
                accessibilityData: h
            } = t;
            c && n.imageManager.isValidId(c) ? (P(Mf, a, c), o && P(Cf, a, o)) : P(Pf, a, l), P(Nf, a, u);
            const [d, f] = a.pageDimensions;
            return a.width = (r[2] - r[0]) / d, a.height = (r[3] - r[1]) / f, a.annotationElementId = t.id || null, h && (a.altTextData = h), a._initialData = i, P(Of, a, !!i), a
        }

        serialize() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (this.isEmpty()) return null;
            if (this.deleted) return this.serializeDeleted();
            const n = {
                annotationType: q.STAMP,
                bitmapId: T(Mf, this),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: T(Nf, this),
                structTreeParentId: this._structTreeParentId
            };
            if (t) return n.bitmapUrl = C(zf, this, Xf).call(this, !0), n.accessibilityData = this.serializeAltText(!0), n;
            const {decorative: i, altText: s} = this.serializeAltText(!1);
            if (!i && s && (n.accessibilityData = {type: "Figure", alt: s}), this.annotationElementId) {
                const t = C(zf, this, Yf).call(this, n);
                if (t.isSame) return null;
                var a;
                if (t.isSameAltText) delete n.accessibilityData; else n.accessibilityData.structParent = null !== (a = this._initialData.structParent) && void 0 !== a ? a : -1
            }
            if (n.id = this.annotationElementId, null === e) return n;
            e.stamps || (e.stamps = new Map);
            const r = T(Nf, this) ? (n.rect[2] - n.rect[0]) * (n.rect[3] - n.rect[1]) : null;
            if (e.stamps.has(T(Mf, this))) {
                if (T(Nf, this)) {
                    const t = e.stamps.get(T(Mf, this));
                    r > t.area && (t.area = r, t.serialized.bitmap.close(), t.serialized.bitmap = C(zf, this, Xf).call(this, !1))
                }
            } else e.stamps.set(T(Mf, this), {area: r, serialized: n}), n.bitmap = C(zf, this, Xf).call(this, !1);
            return n
        }

        renderAnnotationElement(t) {
            return t.updateEdited({rect: this.getRect(0, 0)}), null
        }
    }

    function jf(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (P(Cf, this, t.bitmap), e || (P(Mf, this, t.id), P(Nf, this, t.isSvg)), t.file && P(Lf, this, t.file.name), C(zf, this, Uf).call(this)) : this.remove()
    }

    function Bf() {
        if (P(Tf, this, null), this._uiManager.enableWaiting(!1), T(Ff, this)) {
            if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && T(Cf, this)) return this._editToolbar.hide(), void this._uiManager.editAltText(this, !0);
            if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && T(Cf, this)) {
                this._reportTelemetry({
                    action: "pdfjs.image.image_added",
                    data: {alt_text_modal: !1, alt_text_type: "empty"}
                });
                try {
                    this.mlGuessAltText()
                } catch (t) {
                }
            }
            this.div.focus()
        }
    }

    function Hf() {
        if (T(Mf, this)) return this._uiManager.enableWaiting(!0), void this._uiManager.imageManager.getFromId(T(Mf, this)).then((t => C(zf, this, jf).call(this, t, !0))).finally((() => C(zf, this, Bf).call(this)));
        if (T(Pf, this)) {
            const t = T(Pf, this);
            return P(Pf, this, null), this._uiManager.enableWaiting(!0), void P(Tf, this, this._uiManager.imageManager.getFromUrl(t).then((t => C(zf, this, jf).call(this, t))).finally((() => C(zf, this, Bf).call(this))))
        }
        if (T(Rf, this)) {
            const t = T(Rf, this);
            return P(Rf, this, null), this._uiManager.enableWaiting(!0), void P(Tf, this, this._uiManager.imageManager.getFromFile(t).then((t => C(zf, this, jf).call(this, t))).finally((() => C(zf, this, Bf).call(this))))
        }
        const t = document.createElement("input");
        t.type = "file", t.accept = p.supportedTypesStr;
        const e = this._uiManager._signal;
        P(Tf, this, new Promise((n => {
            t.addEventListener("change", (async () => {
                if (t.files && 0 !== t.files.length) {
                    this._uiManager.enableWaiting(!0);
                    const e = await this._uiManager.imageManager.getFromFile(t.files[0]);
                    this._reportTelemetry({
                        action: "pdfjs.image.image_selected",
                        data: {alt_text_modal: this._uiManager.useNewAltTextFlow}
                    }), C(zf, this, jf).call(this, e)
                } else this.remove();
                n()
            }), {signal: e}), t.addEventListener("cancel", (() => {
                this.remove(), n()
            }), {signal: e})
        })).finally((() => C(zf, this, Bf).call(this)))), t.click()
    }

    function Uf() {
        const {div: t} = this;
        let {width: e, height: n} = T(Cf, this);
        const [i, s] = this.pageDimensions, a = .75;
        if (this.width) e = this.width * i, n = this.height * s; else if (e > a * i || n > a * s) {
            const t = Math.min(a * i / e, a * s / n);
            e *= t, n *= t
        }
        const [r, o] = this.parentDimensions;
        this.setDims(e * r / i, n * o / s), this._uiManager.enableWaiting(!1);
        const l = P(Ff, this, document.createElement("canvas"));
        l.setAttribute("role", "img"), this.addContainer(l), this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t.hidden = !1), C(zf, this, qf).call(this, e, n), C(zf, this, Kf).call(this), T(Of, this) || (this.parent.addUndoableEditor(this), P(Of, this, !0)), this._reportTelemetry({action: "inserted_image"}), T(Lf, this) && l.setAttribute("aria-label", T(Lf, this))
    }

    function Vf(t, e) {
        var n;
        const [i, s] = this.parentDimensions;
        this.width = t / i, this.height = e / s, null !== (n = this._initialOptions) && void 0 !== n && n.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, null !== T(Df, this) && clearTimeout(T(Df, this));
        P(Df, this, setTimeout((() => {
            P(Df, this, null), C(zf, this, qf).call(this, t, e)
        }), 200))
    }

    function Gf(t, e) {
        const {width: n, height: i} = T(Cf, this);
        let s = n, a = i, r = T(Cf, this);
        for (; s > 2 * t || a > 2 * e;) {
            const n = s, i = a;
            s > 2 * t && (s = s >= 16384 ? Math.floor(s / 2) - 1 : Math.ceil(s / 2)), a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2));
            const o = new OffscreenCanvas(s, a);
            o.getContext("2d").drawImage(r, 0, 0, n, i, 0, 0, s, a), r = o.transferToImageBitmap()
        }
        return r
    }

    function qf(t, e) {
        const n = new Le, i = Math.ceil(t * n.sx), s = Math.ceil(e * n.sy), a = T(Ff, this);
        if (!a || a.width === i && a.height === s) return;
        a.width = i, a.height = s;
        const r = T(Nf, this) ? T(Cf, this) : C(zf, this, Gf).call(this, i, s), o = a.getContext("2d");
        o.filter = this._uiManager.hcmFilter, o.drawImage(r, 0, 0, r.width, r.height, 0, 0, i, s)
    }

    function Xf(t) {
        if (t) {
            if (T(Nf, this)) {
                const t = this._uiManager.imageManager.getSvgUrl(T(Mf, this));
                if (t) return t
            }
            const t = document.createElement("canvas");
            ({width: t.width, height: t.height} = T(Cf, this));
            return t.getContext("2d").drawImage(T(Cf, this), 0, 0), t.toDataURL()
        }
        if (T(Nf, this)) {
            const [t, e] = this.pageDimensions, n = Math.round(this.width * t * fe.PDF_TO_CSS_UNITS),
                i = Math.round(this.height * e * fe.PDF_TO_CSS_UNITS), s = new OffscreenCanvas(n, i);
            return s.getContext("2d").drawImage(T(Cf, this), 0, 0, T(Cf, this).width, T(Cf, this).height, 0, 0, n, i), s.transferToImageBitmap()
        }
        return structuredClone(T(Cf, this))
    }

    function Kf() {
        this._uiManager._signal && (P(If, this, new ResizeObserver((t => {
            const e = t[0].contentRect;
            e.width && e.height && C(zf, this, Vf).call(this, e.width, e.height)
        }))), T(If, this).observe(this.div), this._uiManager._signal.addEventListener("abort", (() => {
            var t;
            null === (t = T(If, this)) || void 0 === t || t.disconnect(), P(If, this, null)
        }), {once: !0}))
    }

    function Yf(t) {
        var e;
        const {rect: n, pageIndex: i, accessibilityData: {altText: s}} = this._initialData,
            a = t.rect.every(((t, e) => Math.abs(t - n[e]) < 1)), r = t.pageIndex === i,
            o = ((null === (e = t.accessibilityData) || void 0 === e ? void 0 : e.alt) || "") === s;
        return {isSame: a && r && o, isSameAltText: o}
    }

    p = Wf, w(Wf, "_type", "stamp"), w(Wf, "_editorType", q.STAMP);
    var Qf = new WeakMap, $f = new WeakMap, Jf = new WeakMap, Zf = new WeakMap, tp = new WeakMap, ep = new WeakMap,
        np = new WeakMap, ip = new WeakMap, sp = new WeakMap, ap = new WeakMap, rp = new WeakMap, op = new WeakMap,
        lp = new WeakSet;

    class cp {
        constructor(t) {
            let {
                uiManager: e,
                pageIndex: n,
                div: i,
                structTreeLayer: s,
                accessibilityManager: a,
                annotationLayer: r,
                drawLayer: o,
                textLayer: l,
                viewport: c,
                l10n: u
            } = t;
            x(this, lp), E(this, Qf, void 0), E(this, $f, !1), E(this, Jf, null), E(this, Zf, null), E(this, tp, null), E(this, ep, new Map), E(this, np, !1), E(this, ip, !1), E(this, sp, !1), E(this, ap, null), E(this, rp, null), E(this, op, void 0);
            const h = [...gp._.values()];
            if (!cp._initialized) {
                cp._initialized = !0;
                for (const t of h) t.initialize(u, e)
            }
            e.registerEditorTypes(h), P(op, this, e), this.pageIndex = n, this.div = i, P(Qf, this, a), P(Jf, this, r), this.viewport = c, P(ap, this, l), this.drawLayer = o, this._structTree = s, T(op, this).addLayer(this)
        }

        get isEmpty() {
            return 0 === T(ep, this).size
        }

        get isInvisible() {
            return this.isEmpty && T(op, this).getMode() === q.NONE
        }

        updateToolbar(t) {
            T(op, this).updateToolbar(t)
        }

        updateMode() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T(op, this).getMode();
            switch (C(lp, this, pp).call(this), t) {
                case q.NONE:
                    return this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), void this.disableClick();
                case q.INK:
                    this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
                    break;
                case q.HIGHLIGHT:
                    this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
                    break;
                default:
                    this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick()
            }
            this.toggleAnnotationLayerPointerEvents(!1);
            const {classList: e} = this.div;
            for (const n of gp._.values()) e.toggle("".concat(n._type, "Editing"), t === n._editorType);
            this.div.hidden = !1
        }

        hasTextLayer(t) {
            var e;
            return t === (null === (e = T(ap, this)) || void 0 === e ? void 0 : e.div)
        }

        addInkEditorIfNeeded(t) {
            if (T(op, this).getMode() !== q.INK) return;
            if (!t) for (const e of T(ep, this).values()) if (e.isEmpty()) return void e.setInBackground();
            this.createAndAddNewEditor({offsetX: 0, offsetY: 0}, !1).setInBackground()
        }

        setEditingState(t) {
            T(op, this).setEditingState(t)
        }

        addCommands(t) {
            T(op, this).addCommands(t)
        }

        toggleDrawing() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.div.classList.toggle("drawing", !t)
        }

        togglePointerEvents() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.div.classList.toggle("disabled", !t)
        }

        toggleAnnotationLayerPointerEvents() {
            var t;
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            null === (t = T(Jf, this)) || void 0 === t || t.div.classList.toggle("disabled", !e)
        }

        async enable() {
            this.div.tabIndex = 0, this.togglePointerEvents(!0);
            const t = new Set;
            for (const n of T(ep, this).values()) n.enableEditing(), n.show(!0), n.annotationElementId && (T(op, this).removeChangedExistingAnnotation(n), t.add(n.annotationElementId));
            if (!T(Jf, this)) return;
            const e = T(Jf, this).getEditableAnnotations();
            for (const n of e) {
                if (n.hide(), T(op, this).isDeletedAnnotationElement(n.data.id)) continue;
                if (t.has(n.data.id)) continue;
                const e = await this.deserialize(n);
                e && (this.addOrRebuild(e), e.enableEditing())
            }
        }

        disable() {
            P(sp, this, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
            const t = new Map, e = new Map;
            for (const s of T(ep, this).values()) {
                var n;
                s.disableEditing(), s.annotationElementId && (null === s.serialize() ? (e.set(s.annotationElementId, s), null === (n = this.getEditableAnnotation(s.annotationElementId)) || void 0 === n || n.show(), s.remove()) : t.set(s.annotationElementId, s))
            }
            if (T(Jf, this)) {
                const n = T(Jf, this).getEditableAnnotations();
                for (const i of n) {
                    const {id: n} = i.data;
                    if (T(op, this).isDeletedAnnotationElement(n)) continue;
                    let s = e.get(n);
                    s ? (s.resetAnnotationElement(i), s.show(!1), i.show()) : (s = t.get(n), s && (T(op, this).addChangedExistingAnnotation(s), s.renderAnnotationElement(i) && s.show(!1)), i.show())
                }
            }
            C(lp, this, pp).call(this), this.isEmpty && (this.div.hidden = !0);
            const {classList: i} = this.div;
            for (const s of gp._.values()) i.remove("".concat(s._type, "Editing"));
            this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), P(sp, this, !1)
        }

        getEditableAnnotation(t) {
            var e;
            return (null === (e = T(Jf, this)) || void 0 === e ? void 0 : e.getEditableAnnotation(t)) || null
        }

        setActiveEditor(t) {
            T(op, this).getActive() !== t && T(op, this).setActiveEditor(t)
        }

        enableTextSelection() {
            var t;
            if (this.div.tabIndex = -1, null !== (t = T(ap, this)) && void 0 !== t && t.div && !T(rp, this)) {
                P(rp, this, new AbortController);
                const t = T(op, this).combinedSignal(T(rp, this));
                T(ap, this).div.addEventListener("pointerdown", C(lp, this, up).bind(this), {signal: t}), T(ap, this).div.classList.add("highlighting")
            }
        }

        disableTextSelection() {
            var t;
            this.div.tabIndex = 0, null !== (t = T(ap, this)) && void 0 !== t && t.div && T(rp, this) && (T(rp, this).abort(), P(rp, this, null), T(ap, this).div.classList.remove("highlighting"))
        }

        enableClick() {
            if (T(Zf, this)) return;
            P(Zf, this, new AbortController);
            const t = T(op, this).combinedSignal(T(Zf, this));
            this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {signal: t}), this.div.addEventListener("pointerup", this.pointerup.bind(this), {signal: t})
        }

        disableClick() {
            var t;
            null === (t = T(Zf, this)) || void 0 === t || t.abort(), P(Zf, this, null)
        }

        attach(t) {
            T(ep, this).set(t.id, t);
            const {annotationElementId: e} = t;
            e && T(op, this).isDeletedAnnotationElement(e) && T(op, this).removeDeletedAnnotationElement(t)
        }

        detach(t) {
            var e;
            T(ep, this).delete(t.id), null === (e = T(Qf, this)) || void 0 === e || e.removePointerInTextLayer(t.contentDiv), !T(sp, this) && t.annotationElementId && T(op, this).addDeletedAnnotationElement(t)
        }

        remove(t) {
            this.detach(t), T(op, this).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, T(ip, this) || this.addInkEditorIfNeeded(!1)
        }

        changeParent(t) {
            var e;
            t.parent !== this && (t.parent && t.annotationElementId && (T(op, this).addDeletedAnnotationElement(t.annotationElementId), ps.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), null === (e = t.parent) || void 0 === e || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)))
        }

        add(t) {
            if (t.parent !== this || !t.isAttachedToDOM) {
                if (this.changeParent(t), T(op, this).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
                    const e = t.render();
                    this.div.append(e), t.isAttachedToDOM = !0
                }
                t.fixAndSetPosition(), t.onceAdded(), T(op, this).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData)
            }
        }

        moveEditorInDOM(t) {
            var e;
            if (!t.isAttachedToDOM) return;
            const {activeElement: n} = document;
            t.div.contains(n) && !T(tp, this) && (t._focusEventsAllowed = !1, P(tp, this, setTimeout((() => {
                P(tp, this, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", (() => {
                    t._focusEventsAllowed = !0
                }), {once: !0, signal: T(op, this)._signal}), n.focus())
            }), 0))), t._structTreeParentId = null === (e = T(Qf, this)) || void 0 === e ? void 0 : e.moveElementInDOM(this.div, t.div, t.contentDiv, !0)
        }

        addOrRebuild(t) {
            t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t)
        }

        addUndoableEditor(t) {
            this.addCommands({
                cmd: () => t._uiManager.rebuild(t), undo: () => {
                    t.remove()
                }, mustExec: !1
            })
        }

        getNextId() {
            return T(op, this).getId()
        }

        combinedSignal(t) {
            return T(op, this).combinedSignal(t)
        }

        canCreateNewEmptyEditor() {
            var t;
            return null === (t = M(lp, this, hp)) || void 0 === t ? void 0 : t.canCreateNewEmptyEditor()
        }

        pasteEditor(t, e) {
            T(op, this).updateToolbar(t), T(op, this).updateMode(t);
            const {offsetX: n, offsetY: i} = C(lp, this, fp).call(this), s = this.getNextId(),
                a = C(lp, this, dp).call(this, k({
                    parent: this,
                    id: s,
                    x: n,
                    y: i,
                    uiManager: T(op, this),
                    isCentered: !0
                }, e));
            a && this.add(a)
        }

        async deserialize(t) {
            var e, n;
            return await (null === (e = gp._.get(null !== (n = t.annotationType) && void 0 !== n ? n : t.annotationEditorType)) || void 0 === e ? void 0 : e.deserialize(t, this, T(op, this))) || null
        }

        createAndAddNewEditor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const i = this.getNextId(), s = C(lp, this, dp).call(this, k({
                parent: this,
                id: i,
                x: t.offsetX,
                y: t.offsetY,
                uiManager: T(op, this),
                isCentered: e
            }, n));
            return s && this.add(s), s
        }

        addNewEditor() {
            this.createAndAddNewEditor(C(lp, this, fp).call(this), !0)
        }

        setSelected(t) {
            T(op, this).setSelected(t)
        }

        toggleSelected(t) {
            T(op, this).toggleSelected(t)
        }

        unselect(t) {
            T(op, this).unselect(t)
        }

        pointerup(t) {
            const {isMac: e} = Kt.platform;
            0 !== t.button || t.ctrlKey && e || t.target === this.div && T(np, this) && (P(np, this, !1), T($f, this) ? T(op, this).getMode() !== q.STAMP ? this.createAndAddNewEditor(t, !1) : T(op, this).unselectAll() : P($f, this, !0))
        }

        pointerdown(t) {
            if (T(op, this).getMode() === q.HIGHLIGHT && this.enableTextSelection(), T(np, this)) return void P(np, this, !1);
            const {isMac: e} = Kt.platform;
            if (0 !== t.button || t.ctrlKey && e) return;
            if (t.target !== this.div) return;
            P(np, this, !0);
            const n = T(op, this).getActive();
            P($f, this, !n || n.isEmpty())
        }

        findNewParent(t, e, n) {
            const i = T(op, this).findParent(e, n);
            return null !== i && i !== this && (i.changeParent(t), !0)
        }

        destroy() {
            var t;
            (null === (t = T(op, this).getActive()) || void 0 === t ? void 0 : t.parent) === this && (T(op, this).commitOrRemove(), T(op, this).setActiveEditor(null)), T(tp, this) && (clearTimeout(T(tp, this)), P(tp, this, null));
            for (const n of T(ep, this).values()) {
                var e;
                null === (e = T(Qf, this)) || void 0 === e || e.removePointerInTextLayer(n.contentDiv), n.setParent(null), n.isAttachedToDOM = !1, n.div.remove()
            }
            this.div = null, T(ep, this).clear(), T(op, this).removeLayer(this)
        }

        render(t) {
            let {viewport: e} = t;
            this.viewport = e, Re(this.div, e);
            for (const n of T(op, this).getEditors(this.pageIndex)) this.add(n), n.rebuild();
            this.updateMode()
        }

        update(t) {
            let {viewport: e} = t;
            T(op, this).commitOrRemove(), C(lp, this, pp).call(this);
            const n = this.viewport.rotation, i = e.rotation;
            if (this.viewport = e, Re(this.div, {rotation: i}), n !== i) for (const s of T(ep, this).values()) s.rotate(i);
            this.addInkEditorIfNeeded(!1)
        }

        get pageDimensions() {
            const {pageWidth: t, pageHeight: e} = this.viewport.rawDims;
            return [t, e]
        }

        get scale() {
            return T(op, this).viewParameters.realScale
        }
    }

    function up(t) {
        T(op, this).unselectAll();
        const {target: e} = t;
        if (e === T(ap, this).div || ("img" === e.getAttribute("role") || e.classList.contains("endOfContent")) && T(ap, this).div.contains(e)) {
            const {isMac: e} = Kt.platform;
            if (0 !== t.button || t.ctrlKey && e) return;
            T(op, this).showAllEditors("highlight", !0, !0), T(ap, this).div.classList.add("free"), this.toggleDrawing(), wd.startHighlighting(this, "ltr" === T(op, this).direction, {
                target: T(ap, this).div,
                x: t.x,
                y: t.y
            }), T(ap, this).div.addEventListener("pointerup", (() => {
                T(ap, this).div.classList.remove("free"), this.toggleDrawing(!0)
            }), {once: !0, signal: T(op, this)._signal}), t.preventDefault()
        }
    }

    function hp(t) {
        return gp._.get(T(op, t).getMode())
    }

    function dp(t) {
        const e = M(lp, this, hp);
        return e ? new e.prototype.constructor(t) : null
    }

    function fp() {
        const {x: t, y: e, width: n, height: i} = this.div.getBoundingClientRect(), s = Math.max(0, t),
            a = Math.max(0, e), r = (s + Math.min(window.innerWidth, t + n)) / 2 - t,
            o = (a + Math.min(window.innerHeight, e + i)) / 2 - e, [l, c] = this.viewport.rotation % 180 === 0 ? [r, o] : [o, r];
        return {offsetX: l, offsetY: c}
    }

    function pp() {
        P(ip, this, !0);
        for (const t of T(ep, this).values()) t.isEmpty() && t.remove();
        P(ip, this, !1)
    }

    w(cp, "_initialized", !1);
    var gp = {_: new Map([Cu, $d, Wf, wd].map((t => [t._editorType, t])))}, mp = new WeakMap, vp = new WeakMap,
        bp = new WeakMap, yp = new WeakMap, wp = new WeakSet;

    class Ap {
        constructor(t) {
            let {pageIndex: e} = t;
            x(this, wp), E(this, mp, null), E(this, vp, 0), E(this, bp, new Map), E(this, yp, new Map), this.pageIndex = e
        }

        setParent(t) {
            if (T(mp, this)) {
                if (T(mp, this) !== t) {
                    if (T(bp, this).size > 0) for (const e of T(bp, this).values()) e.remove(), t.append(e);
                    P(mp, this, t)
                }
            } else P(mp, this, t)
        }

        static get _svgFactory() {
            return Nt(this, "_svgFactory", new Hl)
        }

        draw(t, e, n) {
            var i, s;
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const r = (P(vp, this, (i = T(vp, this), s = i++, i)), s), o = C(wp, this, _p).call(this, t.box);
            o.classList.add(...t.classNamesForDrawing);
            const l = Ap._svgFactory.createElement("defs");
            o.append(l);
            const c = Ap._svgFactory.createElement("path");
            l.append(c);
            const u = "path_p".concat(this.pageIndex, "_").concat(r);
            c.setAttribute("id", u), c.setAttribute("d", t.toSVGPath()), a && T(yp, this).set(r, c);
            const h = C(wp, this, Sp).call(this, l, u), d = Ap._svgFactory.createElement("use");
            return o.append(d), o.setAttribute("fill", e), o.setAttribute("fill-opacity", n), d.setAttribute("href", "#".concat(u)), T(bp, this).set(r, o), {
                id: r,
                clipPathId: "url(#".concat(h, ")")
            }
        }

        drawOutline(t) {
            var e, n;
            const i = (P(vp, this, (e = T(vp, this), n = e++, e)), n), s = C(wp, this, _p).call(this, t.box);
            s.classList.add(...t.classNamesForOutlining);
            const a = Ap._svgFactory.createElement("defs");
            s.append(a);
            const r = Ap._svgFactory.createElement("path");
            a.append(r);
            const o = "path_p".concat(this.pageIndex, "_").concat(i);
            let l;
            if (r.setAttribute("id", o), r.setAttribute("d", t.toSVGPath()), r.setAttribute("vector-effect", "non-scaling-stroke"), t.mustRemoveSelfIntersections) {
                const t = Ap._svgFactory.createElement("mask");
                a.append(t), l = "mask_p".concat(this.pageIndex, "_").concat(i), t.setAttribute("id", l), t.setAttribute("maskUnits", "objectBoundingBox");
                const e = Ap._svgFactory.createElement("rect");
                t.append(e), e.setAttribute("width", "1"), e.setAttribute("height", "1"), e.setAttribute("fill", "white");
                const n = Ap._svgFactory.createElement("use");
                t.append(n), n.setAttribute("href", "#".concat(o)), n.setAttribute("stroke", "none"), n.setAttribute("fill", "black"), n.setAttribute("fill-rule", "nonzero"), n.classList.add("mask")
            }
            const c = Ap._svgFactory.createElement("use");
            s.append(c), c.setAttribute("href", "#".concat(o)), l && c.setAttribute("mask", "url(#".concat(l, ")"));
            const u = c.cloneNode();
            return s.append(u), c.classList.add("mainOutline"), u.classList.add("secondaryOutline"), T(bp, this).set(i, s), i
        }

        finalizeLine(t, e) {
            const n = T(yp, this).get(t);
            T(yp, this).delete(t), this.updateBox(t, e.box), n.setAttribute("d", e.toSVGPath())
        }

        updateLine(t, e) {
            T(bp, this).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath())
        }

        updatePath(t, e) {
            T(yp, this).get(t).setAttribute("d", e.toSVGPath())
        }

        updateBox(t, e) {
            kp.call(Ap, T(bp, this).get(t), e)
        }

        show(t, e) {
            T(bp, this).get(t).classList.toggle("hidden", !e)
        }

        rotate(t, e) {
            T(bp, this).get(t).setAttribute("data-main-rotation", e)
        }

        changeColor(t, e) {
            T(bp, this).get(t).setAttribute("fill", e)
        }

        changeOpacity(t, e) {
            T(bp, this).get(t).setAttribute("fill-opacity", e)
        }

        addClass(t, e) {
            T(bp, this).get(t).classList.add(e)
        }

        removeClass(t, e) {
            T(bp, this).get(t).classList.remove(e)
        }

        getSVGRoot(t) {
            return T(bp, this).get(t)
        }

        remove(t) {
            T(yp, this).delete(t), null !== T(mp, this) && (T(bp, this).get(t).remove(), T(bp, this).delete(t))
        }

        destroy() {
            P(mp, this, null);
            for (const t of T(bp, this).values()) t.remove();
            T(bp, this).clear(), T(yp, this).clear()
        }
    }

    function kp(t) {
        let {
            x: e = 0,
            y: n = 0,
            width: i = 1,
            height: s = 1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {style: a} = t;
        a.top = "".concat(100 * n, "%"), a.left = "".concat(100 * e, "%"), a.width = "".concat(100 * i, "%"), a.height = "".concat(100 * s, "%")
    }

    function _p(t) {
        const e = g._svgFactory.create(1, 1, !0);
        return T(mp, this).append(e), e.setAttribute("aria-hidden", !0), kp.call(g, e, t), e
    }

    function Sp(t, e) {
        const n = g._svgFactory.createElement("clipPath");
        t.append(n);
        const i = "clip_".concat(e);
        n.setAttribute("id", i), n.setAttribute("clipPathUnits", "objectBoundingBox");
        const s = g._svgFactory.createElement("use");
        return n.append(s), s.setAttribute("href", "#".concat(e)), s.classList.add("clip"), i
    }

    g = Ap;
    var xp = L.AnnotationLayer, Ep = L.AnnotationMode, Cp = L.GlobalWorkerOptions, Mp = L.PDFDataRangeTransport,
        Tp = L.TextLayer, Pp = L.getDocument, Rp = n(579), Lp = function (t, e, n) {
            if (n || 2 === arguments.length) for (var i, s = 0, a = e.length; s < a; s++) !i && s in e || (i || (i = Array.prototype.slice.call(e, 0, s)), i[s] = e[s]);
            return t.concat(i || Array.prototype.slice.call(e))
        },
        Fp = Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp(Lp([], ["onCopy", "onCut", "onPaste"], !0), ["onCompositionEnd", "onCompositionStart", "onCompositionUpdate"], !0), ["onFocus", "onBlur"], !0), ["onInput", "onInvalid", "onReset", "onSubmit"], !0), ["onLoad", "onError"], !0), ["onKeyDown", "onKeyPress", "onKeyUp"], !0), ["onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting"], !0), ["onClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp"], !0), ["onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop"], !0), ["onSelect"], !0), ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], !0), ["onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut"], !0), ["onScroll"], !0), ["onWheel"], !0), ["onAnimationStart", "onAnimationEnd", "onAnimationIteration"], !0), ["onTransitionEnd"], !0), ["onChange"], !0), ["onToggle"], !0);

    function Ip(t, e) {
        var n = {};
        return Fp.forEach((function (i) {
            var s = t[i];
            s && (n[i] = e ? function (t) {
                return s(t, e(i))
            } : s)
        })), n
    }

    function Dp(t) {
        var e = !1;
        return {
            promise: new Promise((function (n, i) {
                t.then((function (t) {
                    return !e && n(t)
                })).catch((function (t) {
                    return !e && i(t)
                }))
            })), cancel: function () {
                e = !0
            }
        }
    }

    function Np(t) {
        var e, n, i = "";
        if ("string" == typeof t || "number" == typeof t) i += t; else if ("object" == typeof t) if (Array.isArray(t)) {
            var s = t.length;
            for (e = 0; e < s; e++) t[e] && (n = Np(t[e])) && (i && (i += " "), i += n)
        } else for (n in t) t[n] && (i && (i += " "), i += n);
        return i
    }

    const Op = function () {
        for (var t, e, n = 0, i = "", s = arguments.length; n < s; n++) (t = arguments[n]) && (e = Np(t)) && (i && (i += " "), i += e);
        return i
    };
    var zp = "Invariant failed";

    function Wp(t, e) {
        if (!t) throw new Error(zp)
    }

    var jp = n(440), Bp = Object.prototype.hasOwnProperty;

    function Hp(t, e, n) {
        for (n of t.keys()) if (Up(n, e)) return n
    }

    function Up(t, e) {
        var n, i, s;
        if (t === e) return !0;
        if (t && e && (n = t.constructor) === e.constructor) {
            if (n === Date) return t.getTime() === e.getTime();
            if (n === RegExp) return t.toString() === e.toString();
            if (n === Array) {
                if ((i = t.length) === e.length) for (; i-- && Up(t[i], e[i]);) ;
                return -1 === i
            }
            if (n === Set) {
                if (t.size !== e.size) return !1;
                for (i of t) {
                    if ((s = i) && "object" === typeof s && !(s = Hp(e, s))) return !1;
                    if (!e.has(s)) return !1
                }
                return !0
            }
            if (n === Map) {
                if (t.size !== e.size) return !1;
                for (i of t) {
                    if ((s = i[0]) && "object" === typeof s && !(s = Hp(e, s))) return !1;
                    if (!Up(i[1], e.get(s))) return !1
                }
                return !0
            }
            if (n === ArrayBuffer) t = new Uint8Array(t), e = new Uint8Array(e); else if (n === DataView) {
                if ((i = t.byteLength) === e.byteLength) for (; i-- && t.getInt8(i) === e.getInt8(i);) ;
                return -1 === i
            }
            if (ArrayBuffer.isView(t)) {
                if ((i = t.byteLength) === e.byteLength) for (; i-- && t[i] === e[i];) ;
                return -1 === i
            }
            if (!n || "object" === typeof t) {
                for (n in i = 0, t) {
                    if (Bp.call(t, n) && ++i && !Bp.call(e, n)) return !1;
                    if (!(n in e) || !Up(t[n], e[n])) return !1
                }
                return Object.keys(e).length === i
            }
        }
        return t !== t && e !== e
    }

    const Vp = (0, m.createContext)(null);

    function Gp(t) {
        let {children: e, type: n} = t;
        return (0, Rp.jsx)("div", {className: "react-pdf__message react-pdf__message--".concat(n), children: e})
    }

    class qp {
        constructor() {
            this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0
        }

        setDocument(t) {
            this.pdfDocument = t
        }

        setViewer(t) {
            this.pdfViewer = t
        }

        setExternalLinkRel(t) {
            this.externalLinkRel = t
        }

        setExternalLinkTarget(t) {
            this.externalLinkTarget = t
        }

        setHistory() {
        }

        get pagesCount() {
            return this.pdfDocument ? this.pdfDocument.numPages : 0
        }

        get page() {
            return Wp(this.pdfViewer), this.pdfViewer.currentPageNumber || 0
        }

        set page(t) {
            Wp(this.pdfViewer), this.pdfViewer.currentPageNumber = t
        }

        get rotation() {
            return 0
        }

        set rotation(t) {
        }

        goToDestination(t) {
            return new Promise((e => {
                Wp(this.pdfDocument), Wp(t), "string" === typeof t ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e)
            })).then((t => {
                Wp(Array.isArray(t), '"'.concat(t, '" is not a valid destination array.'));
                const e = t[0];
                new Promise((t => {
                    Wp(this.pdfDocument), e instanceof Object ? this.pdfDocument.getPageIndex(e).then((e => {
                        t(e)
                    })).catch((() => {
                        Wp(!1, '"'.concat(e, '" is not a valid page reference.'))
                    })) : "number" === typeof e ? t(e) : Wp(!1, '"'.concat(e, '" is not a valid destination reference.'))
                })).then((e => {
                    const n = e + 1;
                    Wp(this.pdfViewer), Wp(n >= 1 && n <= this.pagesCount, '"'.concat(n, '" is not a valid page number.')), this.pdfViewer.scrollPageIntoView({
                        dest: t,
                        pageIndex: e,
                        pageNumber: n
                    })
                }))
            }))
        }

        navigateTo(t) {
            this.goToDestination(t)
        }

        goToPage(t) {
            const e = t - 1;
            Wp(this.pdfViewer), Wp(t >= 1 && t <= this.pagesCount, '"'.concat(t, '" is not a valid page number.')), this.pdfViewer.scrollPageIntoView({
                pageIndex: e,
                pageNumber: t
            })
        }

        addLinkAttributes(t, e, n) {
            t.href = e, t.rel = this.externalLinkRel || "noopener noreferrer nofollow", t.target = n ? "_blank" : this.externalLinkTarget || ""
        }

        getDestinationHash() {
            return "#"
        }

        getAnchorUrl() {
            return "#"
        }

        setHash() {
        }

        executeNamedAction() {
        }

        cachePageRef() {
        }

        isPageVisible() {
            return !0
        }

        isPageCached() {
            return !0
        }

        executeSetOCGState() {
        }
    }

    const Xp = {NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2}, Kp = "undefined" !== typeof window,
        Yp = Kp && "file:" === window.location.protocol;

    function Qp(t) {
        return function (t) {
            return "undefined" !== typeof t
        }(t) && null !== t
    }

    function $p(t) {
        return function (t) {
            return "string" === typeof t
        }(t) && /^data:/.test(t)
    }

    function Jp(t) {
        Wp($p(t));
        const [e = "", n = ""] = t.split(",");
        return -1 !== e.split(";").indexOf("base64") ? atob(n) : unescape(n)
    }

    function Zp() {
        return Kp && window.devicePixelRatio || 1
    }

    const tg = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";

    function eg() {
        jp(!Yp, "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(tg))
    }

    function ng(t) {
        (null === t || void 0 === t ? void 0 : t.cancel) && t.cancel()
    }

    function ig(t, e) {
        return Object.defineProperty(t, "width", {
            get() {
                return this.view[2] * e
            }, configurable: !0
        }), Object.defineProperty(t, "height", {
            get() {
                return this.view[3] * e
            }, configurable: !0
        }), Object.defineProperty(t, "originalWidth", {
            get() {
                return this.view[2]
            }, configurable: !0
        }), Object.defineProperty(t, "originalHeight", {
            get() {
                return this.view[3]
            }, configurable: !0
        }), t
    }

    function sg(t, e) {
        switch (e.type) {
            case "RESOLVE":
                return {value: e.value, error: void 0};
            case "REJECT":
                return {value: !1, error: e.error};
            case "RESET":
                return {value: void 0, error: void 0};
            default:
                return t
        }
    }

    function ag() {
        return (0, m.useReducer)(sg, {value: void 0, error: void 0})
    }

    var rg = function (t, e, n, i) {
        return new (n || (n = Promise))((function (s, a) {
            function r(t) {
                try {
                    l(i.next(t))
                } catch (e) {
                    a(e)
                }
            }

            function o(t) {
                try {
                    l(i.throw(t))
                } catch (e) {
                    a(e)
                }
            }

            function l(t) {
                var e;
                t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(r, o)
            }

            l((i = i.apply(t, e || [])).next())
        }))
    }, og = function (t, e) {
        var n = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (i = Object.getOwnPropertySymbols(t); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]])
        }
        return n
    };
    const {Tm: lg} = i, cg = (t, e) => {
        switch (e) {
            case Xp.NEED_PASSWORD:
                t(prompt("Enter the password to open this PDF file."));
                break;
            case Xp.INCORRECT_PASSWORD:
                t(prompt("Invalid password. Please try again."));
                break
        }
    };

    function ug(t) {
        return "object" === typeof t && null !== t && ("data" in t || "range" in t || "url" in t)
    }

    const hg = (0, m.forwardRef)((function (t, e) {
        var {
                children: n,
                className: i,
                error: s = "Failed to load PDF file.",
                externalLinkRel: a,
                externalLinkTarget: r,
                file: o,
                inputRef: l,
                imageResourcesPath: c,
                loading: u = "Loading PDF\u2026",
                noData: h = "No PDF file specified.",
                onItemClick: d,
                onLoadError: f,
                onLoadProgress: p,
                onLoadSuccess: g,
                onPassword: v = cg,
                onSourceError: b,
                onSourceSuccess: y,
                options: w,
                renderMode: A,
                rotate: k
            } = t,
            _ = og(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
        const [S, x] = ag(), {value: E, error: C} = S, [M, T] = ag(), {value: P, error: R} = M,
            L = (0, m.useRef)(new qp), F = (0, m.useRef)([]), I = (0, m.useRef)(void 0), D = (0, m.useRef)(void 0);
        o && o !== I.current && ug(o) && (jp(!Up(o, I.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), I.current = o), w && w !== D.current && (jp(!Up(w, D.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), D.current = w);
        const N = (0, m.useRef)({
            scrollPageIntoView: t => {
                const {dest: e, pageNumber: n, pageIndex: i = n - 1} = t;
                if (d) return void d({dest: e, pageIndex: i, pageNumber: n});
                const s = F.current[i];
                s ? s.scrollIntoView() : jp(!1, "An internal link leading to page ".concat(n, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."))
            }
        });
        (0, m.useImperativeHandle)(e, (() => ({
            linkService: L,
            pages: F,
            viewer: N
        })), []), (0, m.useEffect)((function () {
            x({type: "RESET"})
        }), [o, x]);
        const O = (0, m.useCallback)((() => rg(this, void 0, void 0, (function* () {
            if (!o) return null;
            if ("string" === typeof o) {
                if ($p(o)) {
                    return {data: Jp(o)}
                }
                return eg(), {url: o}
            }
            if (o instanceof lg) return {range: o};
            if (o instanceof ArrayBuffer) return {data: o};
            if (Kp && function (t) {
                return Wp(Kp), t instanceof Blob
            }(o)) {
                const t = yield function (t) {
                    return new Promise(((e, n) => {
                        const i = new FileReader;
                        i.onload = () => {
                            if (!i.result) return n(new Error("Error while reading a file."));
                            e(i.result)
                        }, i.onerror = t => {
                            if (!t.target) return n(new Error("Error while reading a file."));
                            const {error: e} = t.target;
                            if (!e) return n(new Error("Error while reading a file."));
                            switch (e.code) {
                                case e.NOT_FOUND_ERR:
                                    return n(new Error("Error while reading a file: File not found."));
                                case e.SECURITY_ERR:
                                    return n(new Error("Error while reading a file: Security error."));
                                case e.ABORT_ERR:
                                    return n(new Error("Error while reading a file: Aborted."));
                                default:
                                    return n(new Error("Error while reading a file."))
                            }
                        }, i.readAsArrayBuffer(t)
                    }))
                }(o);
                return {data: t}
            }
            if (Wp("object" === typeof o), Wp(ug(o)), "url" in o && "string" === typeof o.url) {
                if ($p(o.url)) {
                    const {url: t} = o, e = og(o, ["url"]), n = Jp(t);
                    return Object.assign({data: n}, e)
                }
                eg()
            }
            return o
        }))), [o]);
        (0, m.useEffect)((() => {
            const t = Dp(O());
            return t.promise.then((t => {
                x({type: "RESOLVE", value: t})
            })).catch((t => {
                x({type: "REJECT", error: t})
            })), () => {
                ng(t)
            }
        }), [O, x]), (0, m.useEffect)((() => {
            "undefined" !== typeof E && (!1 !== E ? y && y() : C && (jp(!1, C.toString()), b && b(C)))
        }), [E]), (0, m.useEffect)((function () {
            T({type: "RESET"})
        }), [T, E]), (0, m.useEffect)((function () {
            if (!E) return;
            const t = w ? Object.assign(Object.assign({}, E), w) : E, e = Pp(t);
            p && (e.onProgress = p), v && (e.onPassword = v);
            const n = e, i = n.promise.then((t => {
                T({type: "RESOLVE", value: t})
            })).catch((t => {
                n.destroyed || T({type: "REJECT", error: t})
            }));
            return () => {
                i.finally((() => n.destroy()))
            }
        }), [w, T, E]), (0, m.useEffect)((() => {
            "undefined" !== typeof P && (!1 !== P ? P && (g && g(P), F.current = new Array(P.numPages), L.current.setDocument(P)) : R && (jp(!1, R.toString()), f && f(R)))
        }), [P]), (0, m.useEffect)((function () {
            L.current.setViewer(N.current), L.current.setExternalLinkRel(a), L.current.setExternalLinkTarget(r)
        }), [a, r]);
        const z = (0, m.useCallback)(((t, e) => {
            F.current[t] = e
        }), []), W = (0, m.useCallback)((t => {
            delete F.current[t]
        }), []), j = (0, m.useMemo)((() => ({
            imageResourcesPath: c,
            linkService: L.current,
            onItemClick: d,
            pdf: P,
            registerPage: z,
            renderMode: A,
            rotate: k,
            unregisterPage: W
        })), [c, d, P, z, A, k, W]), B = (0, m.useMemo)((() => Ip(_, (() => P))), [_, P]);
        return (0, Rp.jsx)("div", Object.assign({
            className: Op("react-pdf__Document", i),
            ref: l,
            style: {"--scale-factor": "1"}
        }, B, {
            children: o ? void 0 === P || null === P ? (0, Rp.jsx)(Gp, {
                type: "loading",
                children: "function" === typeof u ? u() : u
            }) : !1 === P ? (0, Rp.jsx)(Gp, {
                type: "error",
                children: "function" === typeof s ? s() : s
            }) : (0, Rp.jsx)(Vp.Provider, {value: j, children: n}) : (0, Rp.jsx)(Gp, {
                type: "no-data",
                children: "function" === typeof h ? h() : h
            })
        }))
    }));

    function dg() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.filter(Boolean);
        return n.length <= 1 ? n[0] || null : function (t) {
            n.forEach((function (e) {
                "function" === typeof e ? e(t) : e && (e.current = t)
            }))
        }
    }

    const fg = (0, m.createContext)(null), pg = {
        Document: null,
        DocumentFragment: null,
        Part: "group",
        Sect: "group",
        Div: "group",
        Aside: "note",
        NonStruct: "none",
        P: null,
        H: "heading",
        Title: null,
        FENote: "note",
        Sub: "group",
        Lbl: null,
        Span: null,
        Em: null,
        Strong: null,
        Link: "link",
        Annot: "note",
        Form: "form",
        Ruby: null,
        RB: null,
        RT: null,
        RP: null,
        Warichu: null,
        WT: null,
        WP: null,
        L: "list",
        LI: "listitem",
        LBody: null,
        Table: "table",
        TR: "row",
        TH: "columnheader",
        TD: "cell",
        THead: "columnheader",
        TBody: null,
        TFoot: null,
        Caption: null,
        Figure: "figure",
        Formula: null,
        Artifact: null
    }, gg = /^H(\d+)$/;

    function mg(t) {
        return "children" in t
    }

    function vg(t) {
        return !!mg(t) && (1 === t.children.length && 0 in t.children && "id" in t.children[0])
    }

    function bg(t) {
        const e = {};
        if (mg(t)) {
            const {role: n} = t, i = n.match(gg);
            if (i) e.role = "heading", e["aria-level"] = Number(i[1]); else if (function (t) {
                return t in pg
            }(n)) {
                const t = pg[n];
                t && (e.role = t)
            }
        }
        return e
    }

    function yg(t) {
        const e = {};
        if (mg(t)) {
            if (void 0 !== t.alt && (e["aria-label"] = t.alt), void 0 !== t.lang && (e.lang = t.lang), vg(t)) {
                const [n] = t.children;
                if (n) {
                    const t = yg(n);
                    return Object.assign(Object.assign({}, e), t)
                }
            }
        } else "id" in t && (e["aria-owns"] = t.id);
        return e
    }

    function wg(t) {
        return t ? Object.assign(Object.assign({}, bg(t)), yg(t)) : null
    }

    function Ag(t) {
        let {className: e, node: n} = t;
        const i = (0, m.useMemo)((() => wg(n)), [n]),
            s = (0, m.useMemo)((() => mg(n) ? vg(n) ? null : n.children.map(((t, e) => (0, Rp.jsx)(Ag, {node: t}, e))) : null), [n]);
        return (0, Rp.jsx)("span", Object.assign({className: e}, i, {children: s}))
    }

    function kg() {
        return (0, m.useContext)(fg)
    }

    function _g() {
        const t = kg();
        Wp(t);
        const {onGetStructTreeError: e, onGetStructTreeSuccess: n} = t, [i, s] = ag(), {
            value: a,
            error: r
        } = i, {customTextRenderer: o, page: l} = t;
        return (0, m.useEffect)((function () {
            s({type: "RESET"})
        }), [s, l]), (0, m.useEffect)((function () {
            if (o) return;
            if (!l) return;
            const t = Dp(l.getStructTree()), e = t;
            return t.promise.then((t => {
                s({type: "RESOLVE", value: t})
            })).catch((t => {
                s({type: "REJECT", error: t})
            })), () => ng(e)
        }), [o, l, s]), (0, m.useEffect)((() => {
            void 0 !== a && (!1 !== a ? a && n && n(a) : r && (jp(!1, r.toString()), e && e(r)))
        }), [a]), a ? (0, Rp.jsx)(Ag, {className: "react-pdf__Page__structTree structTree", node: a}) : null
    }

    const Sg = Ep;

    function xg(t) {
        const e = kg();
        Wp(e);
        const n = Object.assign(Object.assign({}, e), t), {
            _className: i,
            canvasBackground: s,
            devicePixelRatio: a = Zp(),
            onRenderError: r,
            onRenderSuccess: o,
            page: l,
            renderForms: c,
            renderTextLayer: u,
            rotate: h,
            scale: d
        } = n, {canvasRef: f} = t;
        Wp(l);
        const p = (0, m.useRef)(null);

        function g(t) {
            (function (t) {
                return "RenderingCancelledException" === t.name
            })(t) || (jp(!1, t.toString()), r && r(t))
        }

        const v = (0, m.useMemo)((() => l.getViewport({scale: d * a, rotation: h})), [a, l, h, d]),
            b = (0, m.useMemo)((() => l.getViewport({scale: d, rotation: h})), [l, h, d]);
        (0, m.useEffect)((function () {
            if (!l) return;
            l.cleanup();
            const {current: t} = p;
            if (!t) return;
            t.width = v.width, t.height = v.height, t.style.width = "".concat(Math.floor(b.width), "px"), t.style.height = "".concat(Math.floor(b.height), "px"), t.style.visibility = "hidden";
            const e = {
                annotationMode: c ? Sg.ENABLE_FORMS : Sg.ENABLE,
                canvasContext: t.getContext("2d", {alpha: !1}),
                viewport: v
            };
            s && (e.background = s);
            const n = l.render(e), i = n;
            return n.promise.then((() => {
                t.style.visibility = "", l && o && o(ig(l, d))
            })).catch(g), () => ng(i)
        }), [s, l, c, v, b]);
        const y = (0, m.useCallback)((() => {
            const {current: t} = p;
            t && (t.width = 0, t.height = 0)
        }), []);
        return (0, m.useEffect)((() => y), [y]), (0, Rp.jsx)("canvas", {
            className: "".concat(i, "__canvas"),
            dir: "ltr",
            ref: dg(f, p),
            style: {display: "block", userSelect: "none"},
            children: u ? (0, Rp.jsx)(_g, {}) : null
        })
    }

    function Eg() {
        const t = kg();
        Wp(t);
        const {
            customTextRenderer: e,
            onGetTextError: n,
            onGetTextSuccess: i,
            onRenderTextLayerError: s,
            onRenderTextLayerSuccess: a,
            page: r,
            pageIndex: o,
            pageNumber: l,
            rotate: c,
            scale: u
        } = t;
        Wp(r);
        const [h, d] = ag(), {value: f, error: p} = h, g = (0, m.useRef)(null);
        jp(1 === Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10), "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer"), (0, m.useEffect)((function () {
            d({type: "RESET"})
        }), [r, d]), (0, m.useEffect)((function () {
            if (!r) return;
            const t = Dp(r.getTextContent()), e = t;
            return t.promise.then((t => {
                d({type: "RESOLVE", value: t})
            })).catch((t => {
                d({type: "REJECT", error: t})
            })), () => ng(e)
        }), [r, d]), (0, m.useEffect)((() => {
            void 0 !== f && (!1 !== f ? f && i && i(f) : p && (jp(!1, p.toString()), n && n(p)))
        }), [f]);
        const v = (0, m.useCallback)((() => {
            a && a()
        }), [a]), b = (0, m.useCallback)((t => {
            jp(!1, t.toString()), s && s(t)
        }), [s]);
        const y = (0, m.useMemo)((() => r.getViewport({scale: u, rotation: c})), [r, c, u]);
        return (0, m.useLayoutEffect)((function () {
            if (!r || !f) return;
            const {current: t} = g;
            if (!t) return;
            t.innerHTML = "";
            const n = r.streamTextContent({includeMarkedContent: !0}),
                i = new Tp({container: t, textContentSource: n, viewport: y}), s = i;
            return i.render().then((() => {
                const n = document.createElement("div");
                n.className = "endOfContent", t.append(n);
                const i = t.querySelectorAll('[role="presentation"]');
                if (e) {
                    let t = 0;
                    f.items.forEach(((n, s) => {
                        if (!function (t) {
                            return "str" in t
                        }(n)) return;
                        const a = i[t];
                        if (!a) return;
                        const r = e(Object.assign({pageIndex: o, pageNumber: l, itemIndex: s}, n));
                        a.innerHTML = r, t += n.str && n.hasEOL ? 2 : 1
                    }))
                }
                v()
            })).catch(b), () => ng(s)
        }), [e, b, v, r, o, l, f, y]), (0, Rp.jsx)("div", {
            className: Op("react-pdf__Page__textContent", "textLayer"),
            onMouseUp: function () {
                const t = g.current;
                t && t.classList.remove("selecting")
            },
            onMouseDown: function () {
                const t = g.current;
                t && t.classList.add("selecting")
            },
            ref: g
        })
    }

    function Cg() {
        return (0, m.useContext)(Vp)
    }

    function Mg() {
        const t = Cg(), e = kg();
        Wp(e);
        const n = Object.assign(Object.assign({}, t), e), {
            imageResourcesPath: i,
            linkService: s,
            onGetAnnotationsError: a,
            onGetAnnotationsSuccess: r,
            onRenderAnnotationLayerError: o,
            onRenderAnnotationLayerSuccess: l,
            page: c,
            pdf: u,
            renderForms: h,
            rotate: d,
            scale: f = 1
        } = n;
        Wp(u), Wp(c), Wp(s);
        const [p, g] = ag(), {value: v, error: b} = p, y = (0, m.useRef)(null);
        jp(1 === Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10), "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations"), (0, m.useEffect)((function () {
            g({type: "RESET"})
        }), [g, c]), (0, m.useEffect)((function () {
            if (!c) return;
            const t = Dp(c.getAnnotations()), e = t;
            return t.promise.then((t => {
                g({type: "RESOLVE", value: t})
            })).catch((t => {
                g({type: "REJECT", error: t})
            })), () => {
                ng(e)
            }
        }), [g, c]), (0, m.useEffect)((() => {
            void 0 !== v && (!1 !== v ? v && r && r(v) : b && (jp(!1, b.toString()), a && a(b)))
        }), [v]);
        const w = (0, m.useMemo)((() => c.getViewport({scale: f, rotation: d})), [c, d, f]);
        return (0, m.useEffect)((function () {
            if (!u || !c || !s || !v) return;
            const {current: t} = y;
            if (!t) return;
            const e = w.clone({dontFlip: !0}), n = {
                accessibilityManager: null,
                annotationCanvasMap: null,
                annotationEditorUIManager: null,
                div: t,
                l10n: null,
                page: c,
                structTreeLayer: null,
                viewport: e
            }, a = {
                annotations: v,
                annotationStorage: u.annotationStorage,
                div: t,
                imageResourcesPath: i,
                linkService: s,
                page: c,
                renderForms: h,
                viewport: e
            };
            t.innerHTML = "";
            try {
                new xp(n).render(a), l && l()
            } catch (r) {
                !function (t) {
                    jp(!1, "".concat(t)), o && o(t)
                }(r)
            }
            return () => {
            }
        }), [v, i, s, c, u, h, w]), (0, Rp.jsx)("div", {
            className: Op("react-pdf__Page__annotations", "annotationLayer"),
            ref: y
        })
    }

    var Tg = function (t, e) {
        var n = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (i = Object.getOwnPropertySymbols(t); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]])
        }
        return n
    };
    const Pg = 1;

    function Rg(t) {
        const e = Cg(), n = Object.assign(Object.assign({}, e), t), {
                _className: i = "react-pdf__Page",
                _enableRegisterUnregisterPage: s = !0,
                canvasBackground: a,
                canvasRef: r,
                children: o,
                className: l,
                customRenderer: c,
                customTextRenderer: u,
                devicePixelRatio: h,
                error: d = "Failed to load the page.",
                height: f,
                inputRef: p,
                loading: g = "Loading page\u2026",
                noData: v = "No page specified.",
                onGetAnnotationsError: b,
                onGetAnnotationsSuccess: y,
                onGetStructTreeError: w,
                onGetStructTreeSuccess: A,
                onGetTextError: k,
                onGetTextSuccess: _,
                onLoadError: S,
                onLoadSuccess: x,
                onRenderAnnotationLayerError: E,
                onRenderAnnotationLayerSuccess: C,
                onRenderError: M,
                onRenderSuccess: T,
                onRenderTextLayerError: P,
                onRenderTextLayerSuccess: R,
                pageIndex: L,
                pageNumber: F,
                pdf: I,
                registerPage: D,
                renderAnnotationLayer: N = !0,
                renderForms: O = !1,
                renderMode: z = "canvas",
                renderTextLayer: W = !0,
                rotate: j,
                scale: B = Pg,
                unregisterPage: H,
                width: U
            } = n,
            V = Tg(n, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [G, q] = ag(), {
                value: X,
                error: K
            } = G, Y = (0, m.useRef)(null);
        Wp(I);
        const Q = Qp(F) ? F - 1 : null !== L && void 0 !== L ? L : null,
            $ = null !== F && void 0 !== F ? F : Qp(L) ? L + 1 : null,
            J = null !== j && void 0 !== j ? j : X ? X.rotate : null, Z = (0, m.useMemo)((() => {
                if (!X) return null;
                let t = 1;
                const e = null !== B && void 0 !== B ? B : Pg;
                if (U || f) {
                    const e = X.getViewport({scale: 1, rotation: J});
                    U ? t = U / e.width : f && (t = f / e.height)
                }
                return e * t
            }), [f, X, J, B, U]);
        (0, m.useEffect)((function () {
            return () => {
                Qp(Q) && s && H && H(Q)
            }
        }), [s, I, Q, H]), (0, m.useEffect)((function () {
            q({type: "RESET"})
        }), [q, I, Q]), (0, m.useEffect)((function () {
            if (!I || !$) return;
            const t = Dp(I.getPage($)), e = t;
            return t.promise.then((t => {
                q({type: "RESOLVE", value: t})
            })).catch((t => {
                q({type: "REJECT", error: t})
            })), () => ng(e)
        }), [q, I, $]), (0, m.useEffect)((() => {
            void 0 !== X && (!1 !== X ? function () {
                if (x) {
                    if (!X || !Z) return;
                    x(ig(X, Z))
                }
                if (s && D) {
                    if (!Qp(Q) || !Y.current) return;
                    D(Q, Y.current)
                }
            }() : K && (jp(!1, K.toString()), S && S(K)))
        }), [X, Z]);
        const tt = (0, m.useMemo)((() => X && Qp(Q) && $ && Qp(J) && Qp(Z) ? {
                _className: i,
                canvasBackground: a,
                customTextRenderer: u,
                devicePixelRatio: h,
                onGetAnnotationsError: b,
                onGetAnnotationsSuccess: y,
                onGetStructTreeError: w,
                onGetStructTreeSuccess: A,
                onGetTextError: k,
                onGetTextSuccess: _,
                onRenderAnnotationLayerError: E,
                onRenderAnnotationLayerSuccess: C,
                onRenderError: M,
                onRenderSuccess: T,
                onRenderTextLayerError: P,
                onRenderTextLayerSuccess: R,
                page: X,
                pageIndex: Q,
                pageNumber: $,
                renderForms: O,
                renderTextLayer: W,
                rotate: J,
                scale: Z
            } : null), [i, a, u, h, b, y, w, A, k, _, E, C, M, T, P, R, X, Q, $, O, W, J, Z]),
            et = (0, m.useMemo)((() => Ip(V, (() => X ? Z ? ig(X, Z) : void 0 : X))), [V, X, Z]),
            nt = "".concat(Q, "@").concat(Z, "/").concat(J);

        function it() {
            switch (z) {
                case "custom":
                    return Wp(c), (0, Rp.jsx)(c, {}, "".concat(nt, "_custom"));
                case "none":
                    return null;
                default:
                    return (0, Rp.jsx)(xg, {canvasRef: r}, "".concat(nt, "_canvas"))
            }
        }

        return (0, Rp.jsx)("div", Object.assign({
            className: Op(i, l),
            "data-page-number": $,
            ref: dg(p, Y),
            style: {
                "--scale-factor": "".concat(Z),
                backgroundColor: a || "white",
                position: "relative",
                minWidth: "min-content",
                minHeight: "min-content"
            }
        }, et, {
            children: $ ? null === I || void 0 === X || null === X ? (0, Rp.jsx)(Gp, {
                type: "loading",
                children: "function" === typeof g ? g() : g
            }) : !1 === I || !1 === X ? (0, Rp.jsx)(Gp, {
                type: "error",
                children: "function" === typeof d ? d() : d
            }) : (0, Rp.jsxs)(fg.Provider, {
                value: tt,
                children: [it(), W ? (0, Rp.jsx)(Eg, {}, "".concat(nt, "_text")) : null, N ? (0, Rp.jsx)(Mg, {}, "".concat(nt, "_annotations")) : null, o]
            }) : (0, Rp.jsx)(Gp, {type: "no-data", children: "function" === typeof v ? v() : v})
        }))
    }

    const Lg = function (t) {
            let {path_file: e} = t;
            const [n, i] = (0, m.useState)(null), [s, a] = (0, m.useState)(1);
            return (0, Rp.jsxs)("div", {
                children: [(0, Rp.jsx)(hg, {
                    file: e, onLoadSuccess: function (t) {
                        let {numPages: e} = t;
                        i(e)
                    }, children: (0, Rp.jsx)(Rg, {pageNumber: s})
                }), (0, Rp.jsxs)("p", {children: ["Page ", s, " of ", n]})]
            })
        },
        Fg = n.p + "static/media/01.a3ff26f28deccc576ffb.pdf",
        Ig = n.p + "static/media/02.3c7e06e542922332ee0b.pdf",
        Dg = n.p + "static/media/03.8263fbc2df5fbf881408.pdf",
        Ng = n.p + "static/media/04.c52b41121f6d2dca8a55.pdf",
        Og = n.p + "static/media/05.1d37cdb62c1099ac3fbf.pdf",
        zg = n.p + "static/media/06.ff7775ba6c59bcbf88d6.pdf",
        Wg = n.p + "static/media/07.4b2ce5824ed2a51e23b5.pdf",
        jg = n.p + "static/media/08.e0889aeee496475ab6e9.pdf",
        Bg = n.p + "static/media/09.d5beed1f5d99d19b2854.pdf",
        Hg = n.p + "static/media/10.2e05c16f62a071f7d851.pdf";
    Cp.workerSrc = new URL(n(749), n.b).toString();
    const Ug = function () {
        const [t, e] = (0, m.useState)("");

        function n(t) {
            t && e(t)
        }

        for (const i of document.getElementsByClassName("item-pdf")) i.addEventListener("click", (() => {
            for (const t of document.getElementsByClassName("item-pdf")) t === i ? t.classList.add("link-selected") : t.classList.remove("link-selected")
        }));
        return (0, Rp.jsxs)("div", {
            className: "container my-5",
            children: [(0, Rp.jsx)("h1", {children: "PDF Storage"}), (0, Rp.jsx)("hr", {}), (0, Rp.jsxs)("div", {
                className: "items-container",
                children: [(0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Fg),
                    children: "File 01"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Ig),
                    children: "File 02"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Dg),
                    children: "File 03"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Ng),
                    children: "File 04"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Og),
                    children: "File 05"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(zg),
                    children: "File 06"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Wg),
                    children: "File 07"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(jg),
                    children: "File 08"
                }), (0, Rp.jsx)("a", {
                    href: "#",
                    className: "item-pdf",
                    onClick: () => n(Bg),
                    children: "File 09"
                }), (0, Rp.jsx)("a", {href: "#", className: "item-pdf", onClick: () => n(Hg), children: "File 10"})]
            }), (0, Rp.jsx)("div", {className: "col-10", children: (0, Rp.jsx)(Lg, {path_file: t})})]
        })
    }, Vg = t => {
        t && t instanceof Function && n.e(488).then(n.bind(n, 488)).then((e => {
            let {getCLS: n, getFID: i, getFCP: s, getLCP: a, getTTFB: r} = e;
            n(t), i(t), s(t), a(t), r(t)
        }))
    };
    v.createRoot(document.getElementById("root")).render((0, Rp.jsx)(m.StrictMode, {children: (0, Rp.jsx)(Ug, {})})), Vg()
})();
//# sourceMappingURL=main.968ea260.js.map
