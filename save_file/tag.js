(function(n, q, z) {
    function F(a, b, c) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (e) {
                c || cb(e, b)
            }
        }
    }
    function cb(a, b) {
        var c;
        if (.01 > Math.random())
            try {
                var e = a && a.message || "";
                (c = -1 < e.indexOf("network error occurred") || -1 < e.indexOf("send beacon") && -1 < e.indexOf("Content Security Policy")) || (new Ta).log("jserrs", ya, a.message, b, I.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
            } catch (g) {}
    }
    function D(a, b, c, e) {
        return n.setTimeout(F(a, c || "setTimeout", e), b)
    }
    function Lb(a, b, c, e, g) {
        function p(a, d) {
            d = Math.max(0, Math.min(d, 65535));
            k.mergeArrays(a, [d >> 8, d & 255])
        }
        function h(a, d) {
            k.mergeArrays(a, [d & 255])
        }
        function m(a, d) {
            if (-1 == qa.indexOf(d))
                return !0;
            h(a, d)
        }
        function f(a, d) {
            for (d = Math.max(0, d | 0); 127 < d; )
                k.mergeArrays(a, [d & 127 | 128]),
                d >>= 7;
            k.mergeArrays(a, [d])
        }
        function d(a, d) {
            255 < d.length && (d = d.substr(0, 255));
            k.mergeArrays(a, [d.length]);
            for (var f = 0; f < d.length; f++)
                p(a, d.charCodeAt(f))
        }
        function l(a, d) {
            f(a, d.length);
            for (var b = 0; b < d.length; b++)
                f(a, d.charCodeAt(b))
        }
        function x(a) {
            if (!a.nodeName)
                return a[ba] = -1,
                null;
            var b = +a[ba];
            if (!isFinite(b) || 0 >= b)
                return null;
            if (a.attributes)
                for (var l = a; l; ) {
                    if (l.attributes.__ym_wv_ign)
                        return null;
                    l = l.parentElement
                }
            l = 64;
            var c = 0
              , e = t.getElementParent(a)
              , g = e && e[ba] ? e[ba] : 0;
            0 > g && (g = 0);
            var x = a.nodeName.toUpperCase()
              , y = Ea[x];
            y || (l |= 2);
            var J = t.getElementNeighborPosition(a);
            J || (l |= 4);
            var r = t.getElementRegion(a);
            (e = e ? t.getElementRegion(e) : null) && r[0] == e[0] && r[1] == e[1] && r[2] == e[2] && r[3] == e[3] && (l |= 8);
            Fa[b].pos = r[0] + "x" + r[1];
            Fa[b].size = r[2] + "x" + r[3];
            a.id && "string" == typeof a.id && (l |= 32);
            (e = t.calcTextChecksum(a)) && (l |= 16);
            var B = t.calcAttribChecksum(a);
            B && (c |= 2);
            a: {
                var k = t.getElementChildren(t.getElementParent(a), a.tagName);
                for (var Q = 0; Q < k.length; Q++)
                    if ((!k[Q].id || "string" != typeof k[Q].id) && t.calcAttribChecksum(k[Q]) == B && t.calcTextChecksum(k[Q]) == e) {
                        k = !0;
                        break a
                    }
                k = !1
            }
            if (k) {
                l |= 1;
                var n = t.calcChildrenChecksum(a)
            }
            k = [];
            if (m(k, 1))
                return null;
            f(k, b);
            h(k, l);
            f(k, g);
            y ? h(k, y) : d(k, x);
            J && f(k, J);
            l & 8 || (f(k, r[0]),
            f(k, r[1]),
            f(k, r[2]),
            f(k, r[3]));
            l & 32 && d(k, a.id);
            e && p(k, e);
            l & 1 && p(k, n);
            h(k, c);
            B && p(k, B);
            return k
        }
        function y(a, d, b, l, c, e) {
            for (var g; b && (g = t.getElementSize(b)) && (!g[0] || !g[1]); )
                b = t.getElementParent(b);
            if (!b)
                return null;
            g = b[ba];
            if (!g || 0 > g)
                return null;
            var x = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[d];
            if (!x)
                return null;
            var y = t.getElementXY(b);
            b = [];
            if (m(b, x))
                return null;
            f(b, a);
            f(b, g);
            f(b, Math.max(0, l[0] - y[0]));
            f(b, Math.max(0, l[1] - y[1]));
            /^mouse(up|down)|click$/.test(d) && (a = c || e,
            h(b, 2 > a ? 1 : a == (c ? 2 : 4) ? 4 : 2));
            return b
        }
        function J(a, d, b, l, c) {
            var e = [];
            if (m(e, 38))
                return null;
            f(e, a);
            p(e, d);
            h(e, b);
            a = l[ba];
            if (!a || 0 > a)
                a = 0;
            f(e, a);
            h(e, c ? 1 : 0);
            return e
        }
        function r(a, d) {
            var b;
            if (0 == d.length)
                var c = b = "";
            else
                100 >= d.length ? (b = d,
                c = "") : 200 >= d.length ? (b = d.substr(0, 100),
                c = d.substr(100)) : (b = d.substr(0, 97),
                c = d.substr(d.length - 97));
            var h = [];
            if (m(h, 29))
                return null;
            f(h, a);
            l(h, b);
            l(h, c);
            return h
        }
        function Q(a) {
            var d = [];
            if (m(d, 27))
                return null;
            f(d, a);
            return d
        }
        function fa(a) {
            var d = [];
            h(d, 14);
            f(d, a);
            return d
        }
        function B(a) {
            var d = [];
            if (m(d, 15))
                return null;
            f(d, a);
            return d
        }
        function T(a, d) {
            var b = [];
            if (m(b, 17))
                return null;
            f(b, a);
            f(b, d[ba]);
            return b
        }
        function ka(a, d) {
            var b = [];
            if (m(b, 18))
                return null;
            f(b, a);
            f(b, d[ba]);
            return b
        }
        function Na(a, b, l, c) {
            var e = [];
            if (m(e, 39))
                return null;
            f(e, a);
            f(e, b[ba]);
            d(e, String(l));
            h(e, c ? 1 : 0);
            return e
        }
        function Ua(a, d) {
            var b = d[ba];
            if (0 < b) {
                var l = []
                  , c = t.getElementRegion(d)
                  , h = Fa[b]
                  , e = c[0] + "x" + c[1]
                  , g = c[2] + "x" + c[3];
                if (e != h.pos) {
                    h.pos = e;
                    if (m(l, 9))
                        return null;
                    f(l, a);
                    f(l, b);
                    f(l, c[0]);
                    f(l, c[1])
                }
                if (g != h.size) {
                    h.size = g;
                    if (m(l, 10))
                        return null;
                    f(l, a);
                    f(l, b);
                    f(l, c[2]);
                    f(l, c[3])
                }
                if (l.length)
                    return l
            }
            return null
        }
        function K(a) {
            var d = a[ba];
            if (!d || 0 > d || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || sa(a.form))
                return null;
            var b = t.getFormNumber(a.form);
            if (0 > b)
                return null;
            var c = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[a.nodeName];
            if ("number" != typeof c)
                return null;
            for (var h = -1, e = a.form.elements, g = e.length, x = 0, y = 0; x < g; x++)
                if (e[x].name == a.name) {
                    if (e[x] == a) {
                        h = y;
                        break
                    }
                    y++
                }
            if (0 > h)
                return null;
            e = [];
            if (m(e, 7))
                return null;
            f(e, d);
            f(e, b);
            f(e, c);
            l(e, a.name || "");
            f(e, h);
            return e
        }
        function Ga(a, d) {
            var b = t.getFormNumber(d);
            if (0 > b)
                return null;
            for (var l = d.elements, c = l.length, h = [], e = 0; e < c; e++)
                if (!t.isEmptyField(l[e])) {
                    var g = l[e][ba];
                    g && 0 < g && k.mergeArrays(h, [g])
                }
            l = [];
            if (m(l, 11))
                return null;
            f(l, a);
            f(l, b);
            f(l, h.length);
            for (b = 0; b < h.length; b++)
                f(l, h[b]);
            return l
        }
        function ha(a, d, f) {
            a = a.apply(n, d);
            S.append(a, f)
        }
        function z(a) {
            if (a[ba])
                a = Ua(w.nowEventTime(), a);
            else {
                var d = t.getElementParent(a);
                d && z(d);
                a[ba] = V;
                Fa[V] = {};
                V++;
                d = x(a);
                S.append(d, void 0);
                a = K(a)
            }
            S.append(a, void 0)
        }
        function v(a, d) {
            var f = a && t.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            d && a && (f = f || !!t.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return f
        }
        function sa(a) {
            return a && t.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }
        function A(a) {
            var d = W.getTarget(a);
            if (d && "SCROLLBAR" != d.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(d.tagName))
                    if (d[ba])
                        z(d);
                    else {
                        var f = d.form;
                        if (f) {
                            f = f.elements;
                            for (var b = f.length, l = 0; l < b; l++)
                                /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(f[l].tagName) && !f[l][ba] && z(f[l])
                        } else
                            z(d)
                    }
                else
                    z(d);
                ha(y, [w.nowEventTime(), a.type, d, W.getPos(a), a.which, a.button])
            }
        }
        function Ha(a) {
            A(a);
            Y()
        }
        function rb(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }
        function da(a) {
            if (!a)
                return {
                    ignore: !0,
                    forceRecord: !1,
                    isPrivate: !1,
                    privateFlag: !1,
                    recordData: !0
                };
            var d = "password" === a.type || ea.test(a.name) || ea.test(a.id)
              , f = k.reduce(function(d, f) {
                return d || Z.generalRegex.test(a[f])
            }, !1, ["className", "id", "name"]) || Z.placeholderRegex.test(a.placeholder)
              , b = Z.forceRecordRegex.test(a.className);
            return {
                forceRecord: b,
                ignore: d,
                isPrivate: f,
                privateFlag: !b && (f || d),
                recordData: b || !(f && g.get("isEU") || d)
            }
        }
        function ta(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && ea.test(a.name) || a.id && ea.test(a.id) : !1
        }
        function N(a, d, f) {
            a = W.getTarget(a);
            var b = da(a);
            b.ignore || !b.forceRecord && (b.isPrivate && g.get("isEU") || v(a)) || (z(a),
            ha(J, [w.nowEventTime(), d, f, a, b.privateFlag]))
        }
        function X(a) {
            var d = a.keyCode
              , f = rb(a);
            if ({
                3: 1,
                8: 1,
                9: 1,
                13: 1,
                16: 1,
                17: 1,
                18: 1,
                19: 1,
                20: 1,
                27: 1,
                33: 1,
                34: 1,
                35: 1,
                36: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                45: 1,
                46: 1,
                91: 1,
                92: 1,
                93: 1,
                106: 1,
                110: 1,
                111: 1,
                144: 1,
                145: 1
            }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || f & 16)
                19 == d && 4 == (f & -17) && (d = 144),
                N(a, d, f | 16),
                la = !1,
                k.setTimeout(function() {
                    la = !0
                }, 1, "fvl.keyDown"),
                !(67 == d && f & 4) || f & 1 || f & 2 || ca()
        }
        function ma(a) {
            la && !Oa && 0 !== a.which && (N(a, a.charCode || a.keyCode, rb(a)),
            Oa = !0,
            k.setTimeout(function() {
                Oa = !1
            }, 1, "fvl.keyPress"))
        }
        function Y() {
            if (n.getSelection) {
                try {
                    var a = n.getSelection()
                } catch (Mb) {
                    return
                }
                var d = a.toString();
                var f = a.anchorNode
            } else
                q.selection && q.selection.createRange && (a = q.selection.createRange(),
                d = a.text,
                f = a.parentElement());
            if ("string" == typeof d) {
                try {
                    for (; f && 1 != f.nodeType; )
                        f = f.parentNode
                } catch (Mb) {
                    return
                }
                if (f) {
                    a = da(f).privateFlag || v(f, !0);
                    f = f.getElementsByTagName("*");
                    for (var b = 0; b < f.length && !a; )
                        a = da(f[b]).privateFlag || v(f[b], !0),
                        b++;
                    d != Pa && (Pa = d,
                    d = a ? k.map(function() {
                        return Z.obfuscatedSymbol
                    }, d.split("")).join("") : d,
                    ha(r, [w.nowEventTime(), d]))
                }
            }
        }
        function ca() {
            eb || (eb = !0,
            Pa && ha(Q, [w.nowEventTime()]),
            k.setTimeout(function() {
                eb = !1
            }, 1, "fvl.copy"))
        }
        function M() {
            Aa || (Aa = !0,
            ha(fa, [w.nowEventTime()]))
        }
        function C() {
            Aa && (Aa = !1,
            ha(B, [w.nowEventTime()]))
        }
        function P(a) {
            (!Aa || a && !a.fromElement) && M()
        }
        function D(a) {
            a && !a.toElement && C()
        }
        function F(a) {
            if ((a = W.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[ba])
                    z(a);
                else {
                    var d = a.form;
                    if (d) {
                        d = d.elements;
                        for (var f = d.length, b = 0; b < f; b++)
                            /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(d[b].tagName) && !d[b][ba] && z(d[b])
                    } else
                        z(a)
                }
                ha(T, [w.nowEventTime(), a])
            }
        }
        function E(a) {
            (a = W.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (z(a),
            ha(ka, [w.nowEventTime(), a]))
        }
        function I(a) {
            if ((a = W.getTarget(a)) && !ta(a) && !v(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var d = da(a)
                  , f = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                f = d.recordData ? f : k.map(function() {
                    return Z.obfuscatedSymbol
                }, f.split("")).join("");
                z(a);
                ha(Na, [w.nowEventTime(), a, f, d.privateFlag])
            }
        }
        function G(a) {
            if ((a = W.getTarget(a)) && !sa(a) && "FORM" == a.nodeName) {
                for (var d = a.elements, f = 0; f < d.length; f++)
                    t.isEmptyField(d[f]) || z(d[f]);
                ha(Ga, [w.nowEventTime(), a], !0)
            }
        }
        function O(a) {
            (a = W.getTarget(a)) && "BODY" == a.tagName && S.append([], !0)
        }
        var S = new sb({
            protocol: a,
            counterId: b,
            globalConfig: g,
            counterType: c,
            meta: {
                url: L().href,
                hitId: e,
                timezone: fb,
                timestamp: gb
            }
        })
          , Ea = {
            A: 1,
            ABBR: 2,
            ACRONYM: 3,
            ADDRESS: 4,
            APPLET: 5,
            AREA: 6,
            B: 7,
            BASE: 8,
            BASEFONT: 9,
            BDO: 10,
            BIG: 11,
            BLOCKQUOTE: 12,
            BODY: 13,
            BR: 14,
            BUTTON: 15,
            CAPTION: 16,
            CENTER: 17,
            CITE: 18,
            CODE: 19,
            COL: 20,
            COLGROUP: 21,
            DD: 22,
            DEL: 23,
            DFN: 24,
            DIR: 25,
            DIV: 26,
            DL: 27,
            DT: 28,
            EM: 29,
            FIELDSET: 30,
            FONT: 31,
            FORM: 32,
            FRAME: 33,
            FRAMESET: 34,
            H1: 35,
            H2: 36,
            H3: 37,
            H4: 38,
            H5: 39,
            H6: 40,
            HEAD: 41,
            HR: 42,
            HTML: 43,
            I: 44,
            IFRAME: 45,
            IMG: 46,
            INPUT: 47,
            INS: 48,
            ISINDEX: 49,
            KBD: 50,
            LABEL: 51,
            LEGEND: 52,
            LI: 53,
            LINK: 54,
            MAP: 55,
            MENU: 56,
            META: 57,
            NOFRAMES: 58,
            NOSCRIPT: 59,
            OBJECT: 60,
            OL: 61,
            OPTGROUP: 62,
            OPTION: 63,
            P: 64,
            PARAM: 65,
            PRE: 66,
            Q: 67,
            S: 68,
            SAMP: 69,
            SCRIPT: 70,
            SELECT: 71,
            SMALL: 72,
            SPAN: 73,
            STRIKE: 74,
            STRONG: 75,
            STYLE: 76,
            SUB: 77,
            SUP: 78,
            TABLE: 79,
            TBODY: 80,
            TD: 81,
            TEXTAREA: 82,
            TFOOT: 83,
            TH: 84,
            THEAD: 85,
            TITLE: 86,
            TR: 87,
            TT: 88,
            U: 89,
            UL: 90,
            VAR: 91,
            NOINDEX: 100
        }
          , qa = [17, 18, 38, 32, 39, 15, 11, 7, 1]
          , Z = function() {
            var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
            return {
                generalRegex: new RegExp("(" + a.join("|") + ")","i"),
                placeholderRegex: new RegExp("(" + a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";")).join("|") + ")","i"),
                forceRecordRegex: /ym-record-keys/i,
                obfuscatedSymbol: String.fromCharCode(8226),
                obfuscatedKeyCode: 88
            }
        }()
          , V = 1
          , ea = /^(password|passwd|pswd)$/
          , la = !0
          , Oa = !1
          , Pa = ""
          , eb = !1
          , Aa = !0;
        w.initCorrector();
        w.nowTime();
        var ba = "metrikaId_" + Math.random()
          , Fa = {}
          , Ia = ":submit" + Math.random();
        if (!k.isMetrikaPlayer()) {
            u.on(q, "click,dblclick,mousedown", A);
            u.on(q, "mouseup", Ha);
            u.on(q, "keydown", X);
            u.on(q, "keypress", ma);
            u.on(q, "copy", ca);
            if (t.getBody())
                u.on(q, "mouseleave", O);
            q.attachEvent && !n.opera ? (u.on(q, "focusin", P),
            u.on(q, "focusout", D)) : (u.on(n, "focus", M),
            u.on(n, "blur", C),
            u.on(q, "blur", C));
            q.addEventListener ? (u.on(q, "focus", F),
            u.on(q, "blur", E),
            u.on(q, "change", I),
            u.on(q, "submit", G)) : q.attachEvent && (u.on(q, "focusin", F),
            u.on(q, "focusout", E),
            function() {
                for (var a = q.getElementsByTagName("form"), d = 0; d < a.length; d++) {
                    for (var f = a[d].getElementsByTagName("*"), b = 0; b < f.length; b++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(f[b].tagName))
                            u.on(f[b], "change", I);
                    u.on(a[d], "submit", G)
                }
            }());
            (function() {
                var a = q.getElementsByTagName("form");
                if (a.length)
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d].submit;
                        if ("function" == typeof f || "object" == typeof f && /^\s*function submit\(\)/.test(String(f)))
                            a[d][Ia] = f,
                            a[d].submit = function() {
                                G({
                                    target: this
                                });
                                return this[Ia]()
                            }
                    }
            }
            )()
        }
        return {
            start: function() {
                S.activate()
            },
            stop: function() {
                S.clear();
                u.un(q, "click", A);
                u.un(q, "dblclick", A);
                u.un(q, "mousedown", A);
                u.un(q, "mouseup", Ha);
                u.un(q, "keydown", X);
                u.un(q, "keypress", ma);
                u.un(q, "copy", ca);
                u.un(q, "focusin", P);
                u.un(q, "focusout", D);
                u.un(n, "focus", M);
                u.un(n, "blur", C);
                u.un(q, "blur", C);
                q.removeEventListener ? (u.un(q, "focus", F),
                u.un(q, "blur", E),
                u.un(q, "change", I),
                u.un(q, "submit", G)) : q.detachEvent && (u.un(q, "focusin", F),
                u.un(q, "focusout", E),
                function() {
                    for (var a = q.getElementsByTagName("form"), d = 0; d < a.length; d++) {
                        for (var f = a[d].getElementsByTagName("*"), b = 0; b < f.length; b++)
                            /^INPUT|SELECT|TEXTAREA$/.test(f[b].tagName) && u.un(f[b], "change", I);
                        u.un(a[d], "submit", G)
                    }
                }());
                (function() {
                    for (var a = q.getElementsByTagName("form"), d = 0; d < a.length; d++)
                        a[d][Ia] && (a[d].submit = a[d][Ia])
                }
                )()
            }
        }
    }
    function L() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, e = c, g, p; e--; )
            a[b[e]] = "";
        try {
            for (g = n.location,
            e = c; e--; )
                p = b[e],
                a[p] = "" + g[p]
        } catch (h) {
            I && (a = I)
        }
        return a
    }
    function ua() {
        return 0 == L().hostname.search(/^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex)$/)
    }
    function hb(a) {
        return -1 !== ("" + n.navigator.userAgent).toLowerCase().search(a)
    }
    function tb(a) {
        return (a = a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, "")) ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }
    function ub(a, b) {
        var c;
        if (!a || !b)
            return !1;
        var e = [];
        for (c = 0; c < b.length; c++)
            e.push(b[c].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + e.join("|") + ")$","i")).test(a)
    }
    function Ob(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }
    function vb() {
        var a = n.performance || n.webkitPerformance, b = a && a.timing, c, e = [];
        if (b && (c = b.navigationStart))
            for (e = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - c, b.redirectEnd - b.redirectStart, b.redirectCount || a.navigation && a.navigation.redirectCount],
            e.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null),
            e.push(b.domContentLoadedEventStart && b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart : null),
            e.push(b.domComplete ? b.domComplete - c : null),
            e.push(b.loadEventStart ? b.loadEventStart - c : null),
            e.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null),
            e.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - c : null),
            a = 0; a < e.length; a++)
                b = e[a],
                null !== b && (0 > b || 36E5 < b) && (e[a] = null);
        return e
    }
    function Pb(a) {
        var b = [], c = a._lastPerformanceTiming, e = vb(), g;
        if (c) {
            var p = 0;
            for (g = c.length; p < g; p++)
                null === e[p] ? b.push(e[p]) : b.push(c[p] === e[p] ? "" : e[p])
        } else
            b = e;
        a._lastPerformanceTiming = e;
        return b.join(",")
    }
    function Qb(a) {
        return "first-contentful-paint" === a.name
    }
    function Rb() {
        var a = n.performance && n.performance.getEntriesByType
          , b = a ? k.filter(Qb, n.performance.getEntriesByType("paint")) : [];
        if (b.length)
            return b = b[0],
            Math.round(b.startTime);
        if (a)
            return 0;
        if ("object" == typeof n.chrome && n.chrome.loadTimes) {
            if (b = n.chrome.loadTimes(),
            b.requestTime && b.firstPaintTime && n.performance && n.performance.timing)
                return Math.round(1E3 * b.firstPaintTime - n.performance.timing.navigationStart)
        } else if (n.performance && n.performance.timing && (b = n.performance.timing,
        b.navigationStart && b.msFirstPaint))
            return b.msFirstPaint - b.navigationStart;
        return null
    }
    var Qa = !1;
    try {
        var Sb = function(a) {
            function b(e) {
                if (c[e])
                    return c[e].exports;
                var g = c[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                a[e].call(g.exports, g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var c = {};
            b.m = a;
            b.c = c;
            b.d = function(a, c, p) {
                b.o(a, c) || Object.defineProperty(a, c, {
                    enumerable: !0,
                    get: p
                })
            }
            ;
            b.r = function(a) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            ;
            b.t = function(a, c) {
                c & 1 && (a = b(a));
                if (c & 8 || c & 4 && "object" === typeof a && a && a.__esModule)
                    return a;
                var e = Object.create(null);
                b.r(e);
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                });
                if (c & 2 && "string" != typeof a)
                    for (var h in a)
                        b.d(e, h, function(b) {
                            return a[b]
                        }
                        .bind(null, h));
                return e
            }
            ;
            b.n = function(a) {
                var c = a && a.__esModule ? function() {
                    return a["default"]
                }
                : function() {
                    return a
                }
                ;
                b.d(c, "a", c);
                return c
            }
            ;
            b.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            ;
            b.p = "";
            return b(b.s = 67)
        }([function(a, b, c) {
            c.r(b);
            c.d(b, "IterableUtils", function() {
                return x
            });
            var e = c(26)
              , g = c(19)
              , p = c(29)
              , h = c(8)
              , m = c(12);
            a = c(9);
            var f = c(2)
              , d = a.a.Map
              , l = a.a.Set
              , x = {
                binarySearch: function(a, d, f) {
                    var b = 0
                      , l = a.length - 1;
                    for (f = "function" === typeof f ? f : function(a) {
                        return a
                    }
                    ; b <= l; ) {
                        var c = Math.round((b + l) / 2)
                          , h = f(a[c]);
                        if (h === d) {
                            var e = a[c];
                            break
                        } else
                            d > h ? b = c + 1 : l = c - 1
                    }
                    return e
                },
                forof: function(a, d) {
                    a instanceof h.List ? a.forEach(d) : a instanceof m.KeyValue ? a.forEach(d) : Object(e.a)(a, d)
                },
                forin: function(a, d) {
                    Object(g.a)(a, d)
                },
                fastIterate: function(a, d) {
                    for (var f = 0, b = a.length; f < b; f++)
                        d(f, a[f])
                },
                toArray: function(a) {
                    return a instanceof h.List || a instanceof m.KeyValue ? l && a instanceof l || d && a instanceof d ? Object(p.a)(a) : a.toArray() : Object(p.a)(a)
                },
                toList: function(a) {
                    a = this.isArray(a) ? a : this.toArray(a);
                    for (var d = new h.List, f = 0; f < a.length; f++)
                        d.add(a[f]);
                    return d
                },
                addToArray: function(a) {
                    for (var d, f = arguments.length, b = Array(1 < f ? f - 1 : 0), l = 1; l < f; l++)
                        b[l - 1] = arguments[l];
                    return (d = []).concat.apply(d, b).reduce(function(a, d) {
                        0 > a.indexOf(d) && a.push(d);
                        return a
                    }, a)
                },
                removeFromArray: function(a) {
                    for (var d, f = arguments.length, b = Array(1 < f ? f - 1 : 0), l = 1; l < f; l++)
                        b[l - 1] = arguments[l];
                    return (d = []).concat.apply(d, b).reduce(function(a, d) {
                        var f = a.indexOf(d);
                        0 <= f && a.splice(f, 1);
                        return a
                    }, a)
                },
                isArray: function(a) {
                    return "function" === typeof Array.isArray ? Array.isArray(a) : "[object Array]" === {}.toString.call(a)
                },
                inArray: function(a, d) {
                    return a ? "function" === typeof a.includes ? a.includes(d) : 0 <= a.indexOf(d) : !1
                },
                fill: function(a, d) {
                    if (Array.prototype.fill)
                        return a.fill(d);
                    for (var f = a.length; 0 < f--; )
                        a[f] = d;
                    return a
                },
                reduce: function(a, d, f) {
                    return this.toArray(a).reduce(d, f)
                },
                reduceRight: function(a, d, f) {
                    return this.toArray(a).reduceRight(d, f)
                },
                map: function(a, d) {
                    var b = this.toArray(a);
                    if (f.ObjectUtils.isNative(b.map, "map"))
                        return b.map(d);
                    for (var l = [], c = 0; c < b.length; c++)
                        l[c] = d(b[c], c, b);
                    return l
                },
                find: function(a, d) {
                    if (Array.prototype.find)
                        return a.find(d);
                    var f;
                    this.forof(a, function(b, l) {
                        return !0 === !!d(b, l, a) ? (f = b,
                        !1) : !0
                    });
                    return f
                },
                keys: function(a) {
                    if ("function" === typeof a.keys)
                        return a.keys();
                    var d = [];
                    this.forof(a, function(a, f) {
                        d.push(f)
                    });
                    return d
                },
                values: function(a) {
                    if (a.hasOwnProperty("values"))
                        return a.values();
                    var d = [];
                    this.forof(a, function(a, f) {
                        d.push(a)
                    });
                    return d
                },
                includes: function(a, d, b) {
                    void 0 === b && (b = 0);
                    if (f.ObjectUtils.isNative(Array.prototype.includes, "includes"))
                        return a.includes(d, b);
                    for (var l = a.length; b < l; b++)
                        if (a[b] === d)
                            return !0;
                    return !1
                }
            }
        }
        , function(a, b) {
            a.exports = function(a, b, g) {
                b in a ? Object.defineProperty(a, b, {
                    value: g,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = g;
                return a
            }
        }
        , function(a, b, c) {
            c.r(b);
            a = c(5);
            var e = c.n(a)
              , g = c(9)
              , p = g.a.Object.assign || function(a) {
                for (var d = 1; d < arguments.length; d++) {
                    var f = arguments[d], b = g.a.Object.prototype.hasOwnProperty.bind(f), l;
                    for (l in f)
                        b(l) && (a[l] = f[l])
                }
                return a
            }
              , h = c(19)
              , m = c(26)
              , f = c(28);
            c.d(b, "ObjectUtils", function() {
                return d
            });
            var d = {
                sizeof: function(a, d) {
                    void 0 === a && (a = {});
                    void 0 === d && (d = !1);
                    var b = JSON.stringify(a);
                    b = -~encodeURI(b).split(/%..|./).length;
                    return d ? f.NumberUtils.bytesToSize(b) : b
                },
                assign: function(a) {
                    for (var d = arguments.length, f = Array(1 < d ? d - 1 : 0), b = 1; b < d; b++)
                        f[b - 1] = arguments[b];
                    return p.apply(void 0, [a].concat(f))
                },
                deleteProps: function(a, d) {
                    void 0 === d && (d = []);
                    Object(m.a)(d, function(d) {
                        delete a[d]
                    });
                    return a
                },
                copyObject: function(a) {
                    return e()({}, a)
                },
                type: function(a) {
                    return {}.toString.call(a)
                },
                deepCopyObject: function(a) {
                    return JSON.parse(JSON.stringify(a))
                },
                combine: function() {
                    for (var a = arguments.length, d = Array(a), f = 0; f < a; f++)
                        d[f] = arguments[f];
                    return d.reduce(function(a, d) {
                        return null != d ? e()({}, a, d) : a
                    }, {})
                },
                findNativeImplementation: function(a) {
                    if (this.isNative(g.a[a], a))
                        return g.a[a];
                    var d = ["webkit", "moz", "ms", "o"];
                    a = "" + a.slice(0, 1).toUpperCase() + a.slice(1);
                    for (var f = 0; f < d.length; f++) {
                        var b = "" + d[f] + a;
                        if (this.isNative(g.a[b], b))
                            return g.a[b]
                    }
                    return null
                },
                isNative: function(a, d) {
                    return a ? (new RegExp("function\\s*" + d + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}","i")).test(a.toString()) : !1
                },
                isMonkeyPatchedOrUndefined: function(a, d) {
                    var f = g.a;
                    if (f[a] === z || !this.isNative(f[a], a))
                        return !0;
                    if (d)
                        for (var b = 0; b < d.length; b++)
                            if (!this.isNative(f[a].prototype[d[b]], d[b]))
                                return !0;
                    return !1
                },
                objectKeys: function(a) {
                    var d = [];
                    Object(h.a)(a, function(a) {
                        return d.push(a)
                    });
                    return d
                },
                objectValues: function(a) {
                    var d = [];
                    Object(h.a)(a, function(a, f) {
                        return d.push(f)
                    });
                    return d
                },
                safeAccess: function(a, d) {
                    if (null == a || "string" !== typeof d)
                        return z;
                    for (var f = d.split("."), b = a, l = 0, c = f.length; l < c; l++)
                        if (b = b[f[l]],
                        null == b)
                            return z;
                    return b
                },
                objectIsWindow: function(a) {
                    return "undefined" !== typeof Window && a && a.window && a.window === a
                }
            }
        }
        , function(a, b, c) {
            b.a = "undefined" !== typeof n ? n : "undefined" !== typeof self ? self : global
        }
        , function(a, b, c) {
            function e(a) {
                var d = {};
                "string" === typeof a && 0 < a.length && "?" !== a && (a = a.replace(/^\?/, "").split("\x26"),
                Object(p.a)(a, function(a) {
                    var f = a.split("\x3d");
                    a = f[0];
                    f = f[1];
                    try {
                        d[a] = decodeURIComponent(f)
                    } catch (fa) {
                        d[a] = ""
                    }
                }));
                return d
            }
            c.r(b);
            var g = c(2)
              , p = c(26);
            a = c(19);
            var h = c(3)
              , m = c(9);
            g.ObjectUtils.objectIsWindow(h.a) && e(h.a.location.search);
            c = g.ObjectUtils.objectIsWindow(h.a) && h.a !== h.a.top;
            var f = m.a.console || h.a.console;
            "undefined" === h.a.WV_DEBUG && Object.defineProperty(h.a, "WV_DEBUG", {
                value: {}
            });
            var d = function() {
                var a = !1
                  , d = !1;
                if (g.ObjectUtils.objectIsWindow(h.a)) {
                    a = "1" === e(h.a.location.search)._ym_debug;
                    try {
                        d = /ym_debug=1/.test(h.a.document.cookie)
                    } catch (r) {
                        return a
                    }
                }
                return a || d
            }()
              , l = {
                __native: f,
                __debugMode: d,
                __addDebug: function(a, d) {},
                devLog: function() {}
            }
              , x = ["%cWV:", "font-weight: bold;"];
            c && x.length && (x[1] += "color: purple");
            Object(a.a)(f, function(a) {
                var b, c = f[a]instanceof m.a.Function;
                l[a] = d ? c ? (b = f[a]).bind.apply(b, [f].concat(x)) : f[a] : c ? function() {}
                : f[a]
            }, !0);
            d && (l.devLog = f.log);
            b["default"] = l
        }
        , function(a, b, c) {
            var e = c(1);
            a.exports = function(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = null != arguments[b] ? arguments[b] : {}
                      , m = Object.keys(c);
                    "function" === typeof Object.getOwnPropertySymbols && (m = m.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
                        return Object.getOwnPropertyDescriptor(c, a).enumerable
                    })));
                    m.forEach(function(f) {
                        e(a, f, c[f])
                    })
                }
                return a
            }
        }
        , function(a, b) {
            a.exports = function(a) {
                if (void 0 === a)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "DO_NOT_TRACK", function() {
                return p
            });
            c.d(b, "IS_INCOGNITO", function() {
                return h
            });
            c.d(b, "IS_MOBILE_DEVICE", function() {
                return m
            });
            c.d(b, "IS_DEVELOPMENT", function() {
                return f
            });
            a = c(5);
            var e = c.n(a);
            a = c(13);
            var g = c(3);
            c = e()({}, c(30).BrowserUtils, c(37).DocumentUtils, c(11).DOMUtils, c(23).FunctionUtils, c(0).IterableUtils, c(91).MapUtils, c(28).NumberUtils, c(2).ObjectUtils, c(18).StringUtils, c(38).TimeUtils, c(16).Tools, {
                math: c(92).MathUtils
            });
            try {
                var p = a.a.respectDoNotTrack && !0 === navigator.doNotTrack
            } catch (d) {
                p = !1
            }
            var h = function() {
                try {
                    g.a.localStorage.setItem("test", "test");
                    var a = "test" !== g.a.localStorage.getItem("test");
                    g.a.localStorage.removeItem("test");
                    return a
                } catch (l) {
                    return !0
                }
            }();
            try {
                var m = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ? !0 : !1
            } catch (d) {
                m = !1
            }
            var f = "development" === a.a.environment;
            Object.defineProperties(c, {
                DO_NOT_TRACK: {
                    value: p
                },
                IS_INCOGNITO: {
                    value: h
                },
                IS_MOBILE_DEVICE: {
                    value: m
                },
                IS_DEVELOPMENT: {
                    value: f
                }
            });
            b["default"] = c
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "List", function() {
                return m
            });
            a = c(14);
            var e = c.n(a);
            a = c(1);
            var g = c.n(a)
              , p = c(9);
            a = c(2);
            var h = c(0);
            c = p.a.Set;
            a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Set", "add has clear delete forEach toString".split(" "));
            var m = function() {
                function a(d) {
                    g()(this, "list", []);
                    d && (d instanceof a ? this.create(h.IterableUtils.toArray(d)) : d instanceof Array && this.create(d))
                }
                var d = a.prototype;
                d.add = function(a) {
                    !1 === this.has(a) && this.list.push(a);
                    return this
                }
                ;
                d.has = function(a) {
                    return 0 <= this.list.indexOf(a)
                }
                ;
                d.clear = function() {
                    this.list.length = 0;
                    return this
                }
                ;
                d["delete"] = function(a) {
                    a = this.list.indexOf(a);
                    return 0 <= a ? (this.list.splice(a, 1),
                    !0) : !1
                }
                ;
                d.each = function(a) {
                    if ("function" === typeof a)
                        for (var d = 0; d < this.list.length; ) {
                            var f = this.list[d];
                            2 === a.length ? a(f, f) : a(f);
                            d++
                        }
                }
                ;
                d.forEach = function(a) {
                    this.each(a)
                }
                ;
                d.values = function() {
                    return this.list.slice(0)
                }
                ;
                d.keys = function() {
                    return this.list.slice(0)
                }
                ;
                d.toArray = function() {
                    return this.list.slice(0)
                }
                ;
                d.toString = function() {
                    return "List(" + this.size + ")"
                }
                ;
                d.create = function(a) {
                    for (var d = 0; d < a.length; )
                        this.add(a[d]),
                        d++
                }
                ;
                e()(a, [{
                    key: "size",
                    get: function() {
                        return this.list.length
                    }
                }]);
                return a
            }();
            b["default"] = a ? m : c
        }
        , function(a, b, c) {
            var e = c(13)
              , g = function(a, b) {
                var c = a.contentWindow;
                return c ? b.reduce(function(a, d) {
                    return a && c.hasOwnProperty(d)
                }, !0) : !1
            };
            b.a = function() {
                var a = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : n;
                if ("undefined" !== typeof q && q.body) {
                    var b = q.createElement("iframe");
                    b.name = e.a.NATIVE_IFRAME_NAME;
                    b.title = e.a.NATIVE_IFRAME_NAME;
                    b.frameBorder = "0";
                    b.style.opacity = "0";
                    b.style.width = "0px";
                    b.style.height = "0px";
                    b.style.position = "absolute";
                    b.style.left = "100%";
                    b.style.bottom = "100%";
                    b.style.setProperty("border", "0", "important");
                    b.setAttribute("aria-hidden", "true");
                    try {
                        /Trident|MSIE/.test(navigator.userAgent) ? q.body.parentNode && q.body.parentNode.appendChild(b) : q.body.appendChild(b),
                        g(b, ["Set", "Map"]) && (a = b.contentWindow || a)
                    } catch (m) {
                        b.parentElement && b.parentElement.removeChild(b)
                    }
                }
                return a
            }()
        }
        , function(a, b, c) {
            c.d(b, "b", function() {
                return l
            });
            c.d(b, "a", function() {
                return x
            });
            a = c(33);
            var e = c.n(a);
            a = c(5);
            var g = c.n(a);
            a = c(13);
            var p = c(2)
              , h = c(0)
              , m = c(11)
              , f = c(16)
              , d = c(4);
            c = a.a.DOMIndexer;
            var l = c.IGNORED_NODES
              , x = c.IGNORED_ATTRIBUTES
              , y = c.SKIPPED_ATTRIBUTES
              , J = c.EXTRA_ATTRIBUTES
              , r = []
              , k = {}
              , n = {
                INPUT: function(a, d) {
                    var f = g()({}, d);
                    "checkbox" === d.type || "radio" === d.type ? a.checked ? d.checked = "checked" : delete d.checked : f.value = a.value;
                    return f
                },
                IMG: function(a, d) {
                    var f = g()({}, d);
                    a.currentSrc && (f.src = a.currentSrc || d.src);
                    return f
                }
            }
              , B = function(a) {
                if (null == a)
                    return !1;
                a = a.nodeType;
                return a === Node.TEXT_NODE || a === Node.COMMENT_NODE
            }
              , T = function da(a, d) {
                var f = [];
                if ("function" === typeof d) {
                    var b = d(a);
                    null != b && b !== NodeFilter.FILTER_ACCEPT || f.push(a)
                } else
                    f.push(a);
                if (a.childNodes && 0 < a.childNodes.length) {
                    b = a.childNodes;
                    for (var c = 0, l = b.length; c < l; c++)
                        f.push.apply(f, da(b[c]))
                }
                return f
            }
              , ka = function(a, d, f) {
                var b = function(a) {
                    return "function" === typeof f ? f(a) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                };
                if ("function" === typeof d && b(a) === NodeFilter.FILTER_ACCEPT && (d(a),
                !1 === B(a)))
                    for (a = q.createTreeWalker(a, -1, f ? {
                        acceptNode: b
                    } : null, !1); a.nextNode() && !1 !== d(a.currentNode); )
                        ;
            }
              , Na = function(a, d) {
                var f = [];
                a && (m.DOMUtils.nodeIsInTree(a) ? ka(null == a ? q.documentElement : a, function(a) {
                    f.push(a)
                }, d) : f.push.apply(f, T(a, d)));
                return f
            }
              , Ua = function(a) {
                var d = a["*"]
                  , f = e()(a, ["*"])
                  , b = {}
                  , c = new RegExp(d.join("|"),"i");
                h.IterableUtils.forin(f, function(a) {
                    var c, l = (c = []).concat.apply(c, f[a].concat(d));
                    b[a] = new RegExp(l.join("|"),"i")
                });
                return function(a, d) {
                    if (a && d) {
                        var f = "string" === typeof a ? a : a.nodeName;
                        if (f)
                            return (f = b[f.toLowerCase()]) && !!d.match(f) || !!d.match(c)
                    }
                    return !1
                }
            }(x)
              , K = [function(a, d, f) {
                return null == f || /^javascript/.test(f)
            }
            , function(a, d) {
                return "SCRIPT" === a.nodeName && "src" === d
            }
            , function(a, d) {
                return "A" === a.nodeName && "href" === d
            }
            ]
              , Ga = function(a, d, f) {
                for (var b = 0, c = K.length; b < c; b++)
                    if (!0 === K[b](a, d, f))
                        return !1;
                return !0
            }
              , ha = function(a, f, b) {
                var c = b;
                if (Ga(a, f, b)) {
                    c = r.reduce(function(b, c) {
                        try {
                            var l = c(a, f, b);
                            return null != l ? l : b
                        } catch (Y) {
                            return d["default"].warn("Filtering error", Y),
                            b
                        }
                    }, c);
                    if ("string" === typeof c)
                        return (b = k[f]) ? b(a, f, c) || c : c;
                    if (null != c && !1 !== c)
                        return c.baseVal
                }
                return null
            }
              , t = function(a, d) {
                a: {
                    try {
                        q.createAttribute(d)
                    } catch (ta) {
                        var f = !1;
                        break a
                    }
                    f = !0
                }
                return !f || Ua({
                    nodeName: a
                }, d) ? !1 : d
            }
              , u = function(a, f, b) {
                if (b && b.name) {
                    if (!1 !== t(f, b.name))
                        try {
                            var c, l = ha(a, b.name, b.value);
                            return c = {},
                            c[b.name] = l || "",
                            c
                        } catch (X) {
                            d["default"].warn("Error while reading attribute", b, a),
                            d["default"].warn(X)
                        }
                } else
                    d["default"].warn("Error while reading attribute", b, a);
                return null
            };
            c = function(a) {
                var d = new RegExp(a.join("|"),"gi");
                return function(a) {
                    return a && !!a.nodeName.match(d)
                }
            }(l);
            var v = function(a) {
                return a && a.namespaceURI ? /svg/.test(a.namespaceURI) : !1
            };
            c = {
                all: Na,
                map: function(a, d, f) {
                    var b = [];
                    a = Na(a, f);
                    h.IterableUtils.fastIterate(a, function(a, f) {
                        b.push(d(f))
                    });
                    return b
                },
                walk: ka,
                each: function(a, d, f) {
                    a && (a = Na(a, f),
                    h.IterableUtils.fastIterate(a, d))
                },
                getAttributes: function(a) {
                    var d = {}
                      , f = a.nodeName
                      , b = h.IterableUtils.toArray(a.attributes);
                    b && b.length && (h.IterableUtils.fastIterate(b, function(b, c) {
                        var l = u(a, f, c);
                        l && p.ObjectUtils.assign(d, l)
                    }),
                    (b = J[f] || z) && h.IterableUtils.fastIterate(b, function(b, c) {
                        u(d, f, {
                            name: c,
                            value: a[c]
                        })
                    }));
                    return (b = n[f]) ? b(a, d) : d
                },
                getContent: function(a) {
                    if (null != a && B(a))
                        return a.textContent
                },
                getNamespace: function(a) {
                    if (v(a))
                        return a.namespaceURI
                },
                normalizeAttributeValue: ha,
                cloneAttributes: function(a, d) {
                    var b = h.IterableUtils.toArray(a.attributes);
                    h.IterableUtils.fastIterate(b, function(a, b) {
                        var c = !1 === f.Tools.isNULL(b.namespaceURI)
                          , l = b.cloneNode();
                        c ? d.attributes.setNamedItemNS(l) : d.attributes.setNamedItem(l)
                    });
                    return d
                },
                isSVG: v,
                isTextNode: B,
                isIgnoredNode: c,
                isIgnoredAttr: Ua,
                isAttributeNameValid: t,
                isSkippedAttribute: function(a) {
                    return h.IterableUtils.includes(y, a)
                }
            };
            Object.defineProperty(c, "addAttributesFilter", {
                value: function(a) {
                    "function" === typeof a && r.push(a)
                }
            });
            b.c = c
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "DOMUtils", function() {
                return m
            });
            var e = c(3)
              , g = c(0)
              , p = c(2)
              , h = c(18)
              , m = {
                base: function() {
                    var a = q.createElement("a");
                    a.href = "/";
                    var d = q.querySelector("base");
                    d && d.href && (a.href = d.href);
                    return a.href
                },
                getScroll: function(a) {
                    return null == a ? {
                        left: 0,
                        top: 0
                    } : a.window === a ? {
                        top: a.scrollY || 0,
                        left: a.scrollX || 0
                    } : null === a.ownerDocument ? this.getScroll(this.scrollingElement(a)) : {
                        top: a.scrollTop || 0,
                        left: a.scrollLeft || 0
                    }
                },
                documentVisible: function() {
                    if ("undefined" !== typeof q) {
                        var a = "undefined" !== typeof q.msHidden ? "msHidden" : "undefined" !== typeof q.webkitHidden ? "webkitHidden" : "hidden";
                        return function() {
                            return q[a]
                        }
                    }
                }(),
                isDOMNode: function(a) {
                    if (a)
                        try {
                            var d = a.ownerDocument;
                            if (null === d)
                                return !1;
                            if (d.defaultView)
                                return a instanceof d.defaultView.Node
                        } catch (l) {
                            return "object" === typeof a && "object" === typeof a.style && "object" === typeof a.ownerDocument
                        }
                    return !1
                },
                isScrollable: function(a) {
                    var d = a.scrollHeight !== a.clientHeight;
                    return a.scrollWidth !== a.clientWidth || d
                },
                scrollingElement: function(a) {
                    a = a || q;
                    return a.scrollingElement || (a.documentElement.scrollHeight >= a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
                },
                convertNode: function(a, d, b) {
                    var f = void 0 === b ? {
                        doc: q,
                        saveChildren: !0
                    } : b;
                    b = f.doc;
                    f = f.saveChildren;
                    b = b || a.ownerDocument;
                    var c = b.createElement(d);
                    g.IterableUtils.forof(a.attributes, function(a) {
                        c.setAttribute(a.name, a.value)
                    });
                    f && g.IterableUtils.forof(a.childNodes, function(a) {
                        c.appendChild(a.cloneNode(!0))
                    });
                    return c
                },
                isBlankOrSameOriginIframe: function(a, d) {
                    var f = a.getAttribute("src")
                      , b = a.getAttribute("sandbox");
                    return b && !b.match(/allow-same-origin/) || f && "about:blank" !== f && (f = h.StringUtils.parseURLNative(f).host) && (d || n).location.host !== f ? !1 : !0
                },
                nodeIsRecordable: function(a) {
                    if (null !== a) {
                        var d = null != a.getAttribute("metrika-ignore") || /-metrika-ignore/.test(a.className)
                          , f = null != a.getAttribute("metrika-force") || /-metrika-force/.test(a.className);
                        a = a.getAttribute("type");
                        return f ? !0 : !d && "password" !== a
                    }
                    return !1
                },
                contentSizeChanged: function(a, d) {
                    var f = a.ownerDocument ? a.ownerDocument.defaultView : n
                      , b = {
                        stopped: !1,
                        height: null,
                        width: null,
                        runner: function() {
                            if (!this.stopped) {
                                var b = null == a ? {} : "function" === typeof a ? a() || {} : a;
                                var c = b.scrollHeight;
                                b = b.scrollWidth;
                                if (c !== this.height || b !== this.width)
                                    this.height = c,
                                    this.width = b,
                                    d({
                                        width: b,
                                        height: c
                                    });
                                f && f.requestAnimationFrame(this.runner.bind(this))
                            }
                        },
                        stop: function() {
                            this.stopped = !0
                        }
                    };
                    b.runner();
                    return b
                },
                elementsFromPoint: function(a, d, b) {
                    b = b || q;
                    var f = b.elementsFromPoint;
                    if (f)
                        return f.call(b, a, d);
                    f = [];
                    for (var c = [], l; (l = b.elementFromPoint(a, d)) && -1 === f.indexOf(l); ) {
                        f.push(l);
                        var h = l.style;
                        c.push({
                            value: h.getPropertyValue("pointer-events"),
                            priority: h.getPropertyPriority("pointer-events")
                        });
                        h.setProperty("pointer-events", "none", "important")
                    }
                    for (a = c.length; d = c[--a]; )
                        f[a].style.setProperty("pointer-events", d.value ? d.value : "", d.priority);
                    return f
                },
                nodeIndentLevel: function(a) {
                    for (var d = 0; a.parentNode; )
                        a = a.parentNode,
                        d++;
                    return d
                },
                offsets: function(a, d) {
                    var f = void 0 === d ? {} : d
                      , b = f.excludeBorder
                      , c = void 0 === b ? !1 : b;
                    f = f.excludePadding;
                    var h = void 0 === f ? !1 : f;
                    !1 === "getBoundingClientRect"in a && ("documentElement"in a ? a = a.documentElement : "document"in a && (a = a.document.documentElement));
                    var e = (a.ownerDocument || q).defaultView || n
                      , m = a.getBoundingClientRect();
                    f = m.top;
                    b = m.right;
                    var g = m.bottom;
                    m = m.left;
                    if (c || h) {
                        e = e.getComputedStyle(a);
                        if (c) {
                            c = e.borderRightWidth;
                            var p = e.borderBottomWidth
                              , k = e.borderLeftWidth;
                            f += parseInt(e.borderTopWidth || "0", 10);
                            b += parseInt(c || "0", 10);
                            g += parseInt(p || "0", 10);
                            m += parseInt(k || "0", 10)
                        }
                        h && (h = e.paddingRight,
                        c = e.paddingBottom,
                        p = e.paddingLeft,
                        f += parseInt(e.paddingTop || "0", 10),
                        b += parseInt(h || "0", 10),
                        g += parseInt(c || "0", 10),
                        m += parseInt(p || "0", 10))
                    }
                    return {
                        top: f,
                        right: b,
                        bottom: g,
                        left: m
                    }
                },
                nodeIsInTree: function(a) {
                    if (this.isDOMNode(a)) {
                        var d = a.ownerDocument;
                        if (null != d)
                            return d.documentElement.contains(a)
                    }
                    return !1
                },
                waitForNode: function(a, d, b) {
                    var f = this;
                    void 0 === b && (b = 500);
                    var c = {
                        disconnect: function() {}
                    };
                    if (f.nodeIsInTree(a))
                        d(!0);
                    else {
                        var l = a.ownerDocument || q
                          , h = new MutationObserver(function() {
                            f.nodeIsInTree(a) && (d(!0),
                            h.disconnect())
                        }
                        );
                        h.observe(l.documentElement, {
                            subtree: !0,
                            childList: !0
                        });
                        var e = isFinite(b) ? D(function() {
                            f.nodeIsInTree(a) || (d(!1),
                            h.disconnect())
                        }, b) : z;
                        c.disconnect = function() {
                            e && clearTimeout(e);
                            h.disconnect()
                        }
                    }
                    return c
                },
                createElement: function(a, d, b) {
                    b = b || q;
                    var f = b.createElement(a);
                    g.IterableUtils.forin(d, function(a) {
                        var b = d[a];
                        "style" === a ? p.ObjectUtils.assign(f[a], b) : f[a] = b
                    });
                    return f
                },
                matchesSelector: function(a, d) {
                    var f = g.IterableUtils.find(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(a) {
                        return a in q.body
                    });
                    this.matchesSelector = function(a, d) {
                        if (f) {
                            if (null == a || null == a.ownerDocument)
                                return !1;
                            try {
                                if (f in a)
                                    return a[f](d)
                            } catch (J) {}
                        }
                        return !1
                    }
                    ;
                    return this.matchesSelector(a, d)
                },
                closestParent: function(a, d, b) {
                    void 0 === b && (b = !1);
                    for (a = b && !this.isTextNode(a) ? a : a.parentNode; a; ) {
                        if (a && this.matchesSelector(a, d))
                            return a;
                        a = a.parentNode
                    }
                    return null
                },
                isTextNode: function(a) {
                    return 0 <= [Node.TEXT_NODE, Node.COMMENT_NODE].indexOf(a.nodeType)
                },
                isChildOf: function(a, d, b) {
                    void 0 === b && (b = !1);
                    return null != this.closestParent(a, d, b)
                },
                copyAttributes: function(a, d) {
                    g.IterableUtils.forof(a.attributes, function(f) {
                        try {
                            d.setAttribute(f.name, f.value)
                        } catch (x) {
                            e.a.console.warn("Can't copy attribute [" + f.name + "\x3d" + f.value + "]", {
                                sourceNode: a
                            })
                        }
                    });
                    return d
                },
                isHiddenContent: function(a) {
                    if (null == a)
                        return !1;
                    if ("#text" === a.nodeName)
                        return this.isHiddenContent(a.parentNode);
                    if (/ym-hidden-content/.test(a.className))
                        return !1;
                    if (/ym-hide-content/.test(a.className))
                        return !0;
                    var d = this.matchesSelector(a, ".ym-hide-content *");
                    return d && (/ym-show-content/.test(a.className) || this.matchesSelector(a, ".ym-hide-content .ym-show-content *")) ? !1 : d
                }
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "KeyValue", function() {
                return m
            });
            a = c(14);
            var e = c.n(a);
            a = c(1);
            var g = c.n(a);
            a = c(2);
            var p = c(9)
              , h = c(0);
            c = p.a.Map;
            a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Map", "set get has clear delete forEach toString".split(" "));
            var m = function() {
                function a(d) {
                    g()(this, "lastIndex", 0);
                    g()(this, "list", []);
                    g()(this, "index", []);
                    d instanceof a ? this.create(h.IterableUtils.toArray(d)) : d instanceof Array && this.create(d)
                }
                var d = a.prototype;
                d.allocate = function(a) {
                    void 0 === a && (a = 0);
                    this.list.length = a;
                    this.index.length = a
                }
                ;
                d.set = function(a, d) {
                    var f = this.indexOf(this.index, a);
                    -1 !== f ? this.list[f].value = d : (this.list[this.lastIndex] = {
                        key: a,
                        value: d
                    },
                    this.index[this.lastIndex] = a,
                    this.lastIndex++);
                    return this
                }
                ;
                d.get = function(a) {
                    return (a = this.find(a)) ? a.value : z
                }
                ;
                d.keys = function() {
                    return this.list.map(function(a) {
                        return a.key
                    })
                }
                ;
                d.values = function() {
                    return this.list.map(function(a) {
                        return a.value
                    })
                }
                ;
                d.has = function(a) {
                    return -1 !== this.indexOf(this.index, a)
                }
                ;
                d.clear = function() {
                    this.lastIndex = 0;
                    this.list.length = 0;
                    this.index.length = 0;
                    return this
                }
                ;
                d["delete"] = function(a) {
                    if (a = this.find(a))
                        if (a = this.indexOf(this.list, a),
                        -1 !== a)
                            return this.list.splice(a, 1),
                            this.index.splice(a, 1),
                            this.lastIndex--,
                            !0;
                    return !1
                }
                ;
                d.each = function(a) {
                    "function" === typeof a && this.loop(function(d) {
                        var f = d.key;
                        d = d.value;
                        2 === a.length ? a(f, d) : a([f, d])
                    })
                }
                ;
                d.forEach = function(a) {
                    var d = this;
                    "function" === typeof a && this.loop(function(f) {
                        a(f.value, f.key, d)
                    })
                }
                ;
                d.toArray = function() {
                    return this.list.map(function(a) {
                        return [a.key, a.value]
                    })
                }
                ;
                d.toString = function() {
                    return "KeyValue(" + this.size + ")"
                }
                ;
                d.loop = function(a) {
                    if ("function" === typeof a)
                        for (var d = 0; d < this.list.length; )
                            a.call(this, this.list[d]),
                            d++
                }
                ;
                d.create = function(a) {
                    var d = 0;
                    if (a && 0 < a.length)
                        for (; d < a.length; ) {
                            var f = a[d];
                            this.set(f[0], f[1]);
                            d++
                        }
                }
                ;
                d.find = function(a) {
                    a = this.indexOf(this.index, a);
                    if (-1 !== a)
                        return this.list[a]
                }
                ;
                d.indexOf = function(a, d) {
                    return [].indexOf.call(a, d)
                }
                ;
                e()(a, [{
                    key: "size",
                    get: function() {
                        return this.lastIndex
                    }
                }]);
                return a
            }();
            b["default"] = a ? m : c
        }
        , function(a, b, c) {
            a = c(5);
            a = c.n(a);
            c.d(b, "a", function() {
                return e
            });
            var e = a()({}, {
                NATIVE_IFRAME_NAME: "ym-native-frame"
            }, {
                environment: "production",
                "package": {
                    version: "2.6.2"
                },
                respectDoNotTrack: !0,
                experimentalWebSocket: !0,
                captors: {
                    input: !0,
                    keystrokes: !0,
                    media: !1,
                    mouse: !0,
                    focus: !0,
                    mutations: !0,
                    resize: !0,
                    deviceRotation: !0,
                    selection: !0,
                    scroll: !0,
                    touch: !0,
                    zoom: !0,
                    window: !0,
                    srcset: !0
                },
                captorsConfig: {
                    input: {
                        PD: function() {
                            return {
                                delimiter: "(-|\\.|_|\\s){0,2}",
                                suspiciousWords: "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                                placeholderSuspiciousWords: "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")
                            }
                        }
                    }
                },
                DOMIndexer: {
                    IGNORED_NODES: ["script", "noscript", "audio"],
                    IGNORED_ATTRIBUTES: {
                        "*": ["^on.+", "srcset", "integrity", "crossorigin"],
                        iframe: ["src"],
                        script: ["src", "type"]
                    },
                    SKIPPED_ATTRIBUTES: [],
                    EXTRA_ATTRIBUTES: {
                        VIDEO: ["width", "height"]
                    },
                    URL_NODES: ["link", "img", "svg"],
                    URL_ATTRIBUTES: "href link content poster style src srcset".split(" "),
                    IGNORE_NODES_ORDER: ["HEAD"],
                    HIDABLE_NODES: "#text IMG INPUT BUTTON SELECT TEXTAREA".split(" "),
                    REPLACE_ATTRIBUTES: {
                        a: {
                            href: "#"
                        }
                    }
                }
            })
        }
        , function(a, b) {
            function c(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var h = b[c];
                    h.enumerable = h.enumerable || !1;
                    h.configurable = !0;
                    "value"in h && (h.writable = !0);
                    Object.defineProperty(a, h.key, h)
                }
            }
            a.exports = function(a, b, p) {
                b && c(a.prototype, b);
                p && c(a, p);
                return a
            }
        }
        , function(a, b, c) {
            (function(a, g) {
                var e = c(8)
                  , h = c(0)
                  , m = c(2)
                  , f = function() {
                    function d(d, f) {
                        var b = void 0 === f ? {} : f
                          , c = b.context;
                        c = void 0 === c ? null : c;
                        b = b.expose;
                        b = void 0 === b ? !1 : b;
                        this.allowedEvents = h.IterableUtils.toList((this.eventsList || d || []).map(function(a) {
                            return a.split(":")[0]
                        }));
                        this.context = c || this;
                        this._define("_events", new a)._define("_memory", new a)._define("_namespaces", new a)._define("_options", new a)._define("_once", new a);
                        this._setupEvents();
                        this._exposeEvents(c, b)
                    }
                    var f = d.prototype;
                    f.emit = function(a) {
                        for (var d = this, f = arguments.length, b = Array(1 < f ? f - 1 : 0), c = 1; c < f; c++)
                            b[c - 1] = arguments[c];
                        return new g(function(f, c) {
                            var l = a.split(" ");
                            h.IterableUtils.forof(l, function(a) {
                                d._invokeEvent(a, b, f, c)
                            });
                            return d
                        }
                        )
                    }
                    ;
                    f.on = function(a, d) {
                        var f = this;
                        if ("function" === typeof d) {
                            var b = a.split(" ");
                            h.IterableUtils.forof(b, function(a) {
                                f._saveEvent(a, d)
                            })
                        } else
                            throw Error("Callback sould be a function");
                        return this
                    }
                    ;
                    f.off = function(a, d) {
                        var f = this;
                        var b = a ? a.split(" ") : h.IterableUtils.keys(f._events);
                        h.IterableUtils.forof(b, function(a) {
                            f._removeEvent(a, d)
                        });
                        return this
                    }
                    ;
                    f._define = function(a, d) {
                        Object.defineProperty(this, a, {
                            value: d,
                            writable: !1
                        });
                        return this
                    }
                    ;
                    f._exposeEvents = function(a, d) {
                        d && m.ObjectUtils.assign(a, {
                            on: this.on.bind(this),
                            off: this.off.bind(this),
                            emit: this.emit.bind(this)
                        })
                    }
                    ;
                    f._getNamespace = function(a, d) {
                        var f = this._namespaces.get(a);
                        return f ? f.get(d) || this._events.get(a) : this._events.get(a)
                    }
                    ;
                    f._hasOption = function(a, d) {
                        var f = this._options.get(a);
                        return !!f && f.has(d)
                    }
                    ;
                    f._invokeEvent = function(a, d, f) {
                        var b = this;
                        a = a.split(".");
                        var c = a[0];
                        a = a[1];
                        var l = this._hasOption(c, "stop");
                        if ((a = this._getNamespace(c, a)) && 0 < a.size) {
                            var e = g.resolve();
                            d = this._saveMemory(c, d);
                            h.IterableUtils.forof(a, function(a) {
                                if (b._isAlreadyCalled(c, a))
                                    return !0;
                                e = e.then(function(h) {
                                    return !1 !== h ? (h = b._runCallback(c, a, d),
                                    f(h),
                                    l ? h : null) : !1
                                })
                            })
                        }
                    }
                    ;
                    f._isAlreadyCalled = function(a, d) {
                        if (this._hasOption(a, "once")) {
                            var f = this._once.get(a) || new e["default"];
                            if (f.has(d))
                                return !0;
                            f.add(d);
                            this._once.set(a, f)
                        }
                        return !1
                    }
                    ;
                    f._runCallback = function(a, d, f) {
                        f = this._saveMemory(a, f);
                        return d.call.apply(d, [this.context].concat(f))
                    }
                    ;
                    f._saveEvent = function(a, d) {
                        var f = a.split(":")
                          , b = f[0];
                        f = f.slice(1);
                        var c = b.split(".");
                        b = c[0];
                        c = c[1];
                        var l = this._events.get(b) || new e["default"];
                        f = this._options.get(b) || h.IterableUtils.toList(f);
                        var m = this._memory.get(b) || !1;
                        l.has(d) || (l.add(d),
                        this._events.set(b, l),
                        this._options.set(b, f),
                        this._saveNamespace(b, c, d),
                        m && this._runCallback(b, d, m))
                    }
                    ;
                    f._saveMemory = function(a, d) {
                        return this._hasOption(a, "memory") ? this._memory.has(a) ? this._memory.get(a) || [] : this._memory.set(a, d) && d : d
                    }
                    ;
                    f._saveNamespace = function(d, f, b) {
                        var c = this._namespaces.get(d) || new a
                          , l = c.get(f || "__global") || new e["default"];
                        l.add(b);
                        c.set(f || "__global", l);
                        this._namespaces.set(d, c)
                    }
                    ;
                    f._setupEvents = function() {
                        var a = this;
                        this.allowedEvents.size && h.IterableUtils.forof(this.allowedEvents, function(d) {
                            var f = d.split(":");
                            d = f[0];
                            f = f.slice(1);
                            a._options.set(d, h.IterableUtils.toList(f));
                            a._events.set(d, new e["default"])
                        })
                    }
                    ;
                    f._removeCallbacks = function(a, d) {
                        if (d instanceof e["default"]) {
                            var f = this._events.get(a);
                            h.IterableUtils.forof(d, function(a) {
                                f && f["delete"](a)
                            })
                        }
                    }
                    ;
                    f._removeEvent = function(a, d) {
                        var f = a.split(".")
                          , b = f[0];
                        f = f[1];
                        var c = this._events.get(b) || new e["default"];
                        c.has(d) ? (f || c["delete"](d),
                        this._removeNamespace(b, f, d)) : (f || (this._events["delete"](b),
                        this._options["delete"](b)),
                        this._removeNamespace(b, f))
                    }
                    ;
                    f._removeNamespace = function(a, d) {
                        var f = this
                          , b = this._namespaces.get(a);
                        b && (d ? (this._removeCallbacks(a, b.get(d)),
                        b["delete"](d)) : (h.IterableUtils.forof(b, function(d) {
                            f._removeCallbacks(a, d)
                        }),
                        this._namespaces["delete"](a)))
                    }
                    ;
                    return d
                }();
                b.a = f
            }
            ).call(this, c(12)["default"], c(22).Promise)
        }
        , function(a, b, c) {
            c.r(b);
            (function(a) {
                c.d(b, "Tools", function() {
                    return d
                });
                var e = c(3)
                  , p = c(41)
                  , h = c(2)
                  , m = c(4)
                  , f = {
                    "null": null,
                    undefined: z,
                    "true": !0,
                    "false": !1
                }
                  , d = {
                    delay: function(d, f) {
                        void 0 === f && (f = 0);
                        return new a(function(a) {
                            D(function() {
                                a(d())
                            }, f)
                        }
                        )
                    },
                    copyText: function(d) {
                        return new a(function(a) {
                            var f = q.createElement("textarea")
                              , b = q.body;
                            f.value = d;
                            f.style.opacity = "0";
                            f.style.position = "absolute";
                            f.style.top = "-99999px";
                            f.style.left = "-99999px";
                            f.onselect = function() {
                                try {
                                    f.onselect = null,
                                    q.execCommand && q.execCommand("copy"),
                                    a()
                                } catch (r) {
                                    m["default"].warn("Error while copying text " + d, r)
                                }
                                b.removeChild(f)
                            }
                            ;
                            b.appendChild(f);
                            f.select()
                        }
                        )
                    },
                    globalize: function(a, d) {
                        "undefined" !== typeof e.a && Object.defineProperty(e.a, d, {
                            value: a
                        })
                    },
                    guid: function() {
                        var a = function() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        };
                        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
                    },
                    measure: function(a, d, f) {
                        if (null != d)
                            return "function" === typeof d ? d() : d
                    },
                    apiMock: function(a) {
                        var d = {
                            properties: [],
                            methods: []
                        };
                        a = a.prototype;
                        for (var f in a)
                            if (a.hasOwnProperty(f))
                                try {
                                    a[f]instanceof Function ? d.methods.push(f) : d.properties.push(f)
                                } catch (J) {
                                    d.properties.push(f)
                                }
                        return d
                    },
                    cast: function(a) {
                        if (f.hasOwnProperty(a))
                            return f[a];
                        var d = Number(a);
                        return String(d) === a ? d : a
                    },
                    "catch": function(a) {
                        try {
                            a()
                        } catch (x) {
                            return m["default"].warn(x),
                            x
                        }
                    },
                    fetch: p.a,
                    promise: function(d) {
                        return (new a(function(a, f) {
                            d(a, f)
                        }
                        ))["catch"](function(a) {
                            return m["default"].warn(a)
                        })
                    },
                    isNULL: function(a) {
                        return null == a
                    },
                    isFunction: function(a) {
                        return "function" === typeof a
                    },
                    promiseError: function(d) {
                        m["default"].warn(d);
                        return a.reject(d)
                    },
                    promiseExec: function(d) {
                        return new a(function(a) {
                            a(d())
                        }
                        )
                    },
                    requestAnimationFrame: function(a) {
                        var d = h.ObjectUtils.findNativeImplementation("requestAnimationFrame")
                          , f = h.ObjectUtils.findNativeImplementation("cancelAnimationFrame");
                        if (d && f)
                            return this.requestAnimationFrame = d.bind(n),
                            this.requestAnimationFrame(a);
                        this.requestAnimationFrame = d = function(a) {
                            return D(a, 4)
                        }
                        ;
                        return d(a)
                    },
                    cancelAnimationFrame: function(a) {
                        var d = h.ObjectUtils.findNativeImplementation("requestAnimationFrame")
                          , f = h.ObjectUtils.findNativeImplementation("cancelAnimationFrame");
                        d && f ? (this.cancelAnimationFrame = f.bind(n),
                        this.cancelAnimationFrame(a)) : (this.cancelAnimationFrame = function(a) {
                            clearTimeout(a)
                        }
                        ,
                        clearTimeout(a))
                    },
                    throwError: function(a) {
                        throw Error(a);
                    },
                    errorProxy: function(a, d, f) {
                        void 0 === d && (d = !1);
                        try {
                            return a()
                        } catch (J) {
                            return n.console.warn("Error while running " + (f || a.name), J),
                            d
                        }
                    }
                }
            }
            ).call(this, c(22).Promise)
        }
        , function(a, b) {
            a.exports = function(a, b) {
                a.prototype = Object.create(b.prototype);
                a.prototype.constructor = a;
                a.__proto__ = b
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "StringUtils", function() {
                return p
            });
            var e = c(3)
              , g = c(0)
              , p = {
                dasherize: function(a) {
                    return a.replace(/[A-Z]/g, function(b, f) {
                        var d = /[A-Z]/g.test(a[f - 1]);
                        return (0 === f || d ? "" : "-") + b.toLowerCase()
                    })
                },
                pad: function(a, b, f, d) {
                    void 0 === b && (b = 2);
                    void 0 === f && (f = " ");
                    void 0 === d && (d = !1);
                    a = String(a);
                    b = g.IterableUtils.fill(Array(Math.max(0, Math.min(b - a.length, b))), f);
                    return d ? "" + a + b.join("") : "" + b.join("") + a
                },
                stringToBlobURL: function(a, b, f) {
                    void 0 === f && (f = e.a.location);
                    var d = function() {
                        try {
                            return new Blob([a],{
                                type: b
                            })
                        } catch (y) {
                            var d = e.a;
                            d = new (d.BlobBuilder || d.WebKitBlobBuilder || d.MozBlobBuilder || d.MSBlobBuilder);
                            d.append(a);
                            return d.getBlob(b)
                        }
                    }()
                      , c = function(a) {
                        return a ? (a = (URL || webkitURL).createObjectURL(a),
                        /blob:(?!http[s]?).*/.test(a) ? a.replace("blob:", "blob:" + (f.protocol + "//" + f.host) + "/") : a) : z
                    }(d);
                    return d ? {
                        blob: d,
                        url: c
                    } : null
                },
                repeatString: function(a, b) {
                    void 0 === b && (b = 1);
                    return Array(b + 1).join(a)
                },
                parseURLNative: function(a) {
                    var b = q.createElement("a");
                    b.href = a;
                    return {
                        protocol: b.protocol,
                        hostname: b.hostname,
                        host: b.host,
                        port: b.port,
                        pathname: b.pathname,
                        search: b.search,
                        url: a
                    }
                },
                parseURL: function(a) {
                    if (!a)
                        return z;
                    if ("string" !== typeof a)
                        return e.a.console.warn("URL was expected to be a string", a),
                        z;
                    var b = a.match(/^(http[s]?|file):\/\/([^/\n]*)([^?\n]*)(\?[^\n]*)?/);
                    if (b) {
                        var f = b.slice(1);
                        b = f[0];
                        var d = f[1]
                          , c = f[2];
                        f = f[3];
                        var h = d ? (d.match(/([^:\s]+)(:[0-9]*)?/) || []).slice(1) : []
                          , g = h[0];
                        g = void 0 === g ? z : g;
                        h = h[1];
                        h = void 0 === h ? z : h;
                        var p = g ? (g.match(/\.([^.]+)$/) || [])[1] : z
                          , r = c ? function() {
                            var a = c.match(/([^/]+)\.([^/]*)$/);
                            return a ? a[0] : z
                        }() : z
                          , k = c && r ? c.replace("/" + r, "") : c || "/";
                        return {
                            protocol: b ? b + ":" : z,
                            hostname: d,
                            host: g,
                            port: (h || "80").replace(/:/, ""),
                            path: c || "/",
                            tld: p,
                            file: r,
                            pathname: k,
                            search: f ? f.replace(/^\?/, "") : z,
                            url: a,
                            assemble: function(a) {
                                var d = this;
                                return a ? a.replace(/(\{([^}]+)\})/g, function() {
                                    return d[2 >= arguments.length ? z : arguments[2]]
                                }) : this.url
                            }
                        }
                    }
                    return z
                }
            }
        }
        , function(a, b, c) {
            b.a = function(a, b, c) {
                void 0 === c && (c = !1);
                var h = 2 === b.length;
                if (a && b instanceof Function)
                    for (var e in a)
                        if (a.hasOwnProperty(e) || !0 === c) {
                            var f = h ? b(e, a[e]) : b(e);
                            if (!0 !== f && !1 === f)
                                break
                        }
            }
        }
        , function(a, b, c) {
            (function(a, c) {
                var e = new a;
                b.a = {
                    throttledFunctions: e,
                    invokeAll: function(a) {
                        c.fastIterate(e, function(b, f) {
                            f.invoke.call(a)
                        })
                    },
                    create: function(a, b) {
                        var f = void 0 === b ? {} : b
                          , d = f.timeout
                          , l = void 0 === d ? 0 : d;
                        d = f.immediateFirstRun;
                        var h = void 0 === d ? !1 : d;
                        f = f.context;
                        var m = !0
                          , g = null
                          , p = null
                          , k = null
                          , n = null
                          , B = !1
                          , T = null
                          , ka = null;
                        f = {
                            invoke: function() {
                                var d = this.context || this;
                                k !== g && (n = c.now(),
                                k = g,
                                a.call(d, {
                                    object: g,
                                    prevObject: null,
                                    timeDifff: 0,
                                    args: ka
                                }))
                            },
                            run: function(d) {
                                var f = this.context || this;
                                h && (clearTimeout(T),
                                T = D(function() {
                                    return m = !0
                                }, l));
                                if (!B) {
                                    g = d;
                                    for (var b = arguments.length, e = Array(1 < b ? b - 1 : 0), x = 1; x < b; x++)
                                        e[x - 1] = arguments[x];
                                    ka = e;
                                    m && h ? (m = !1,
                                    k = d,
                                    a.call(f, {
                                        object: d,
                                        prevObject: null,
                                        timeDifff: 0,
                                        args: ka
                                    })) : (n = c.now(),
                                    B = !0,
                                    D(function za() {
                                        var d = parseInt(c.now() - n, 10);
                                        d >= l ? (B = !1,
                                        n = c.now(),
                                        k !== g && (p = k,
                                        k = g,
                                        a.call(f, {
                                            object: g,
                                            prevObject: p,
                                            timeDiff: d,
                                            args: ka
                                        }))) : D(za)
                                    }))
                                }
                            },
                            context: void 0 === f ? null : f,
                            call: function() {
                                var a;
                                (a = this.run).call.apply(a, arguments)
                            }
                        };
                        e.set(a, f);
                        return f
                    },
                    setContext: function(a, b) {
                        if (e.has(a)) {
                            var f = e.get(a);
                            null == f.context && (f.context = b)
                        }
                    }
                }
            }
            ).call(this, c(12)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            c.d(b, "a", function() {
                return l
            });
            a = c(13);
            b = c(12);
            var e = c(11)
              , g = c(18)
              , p = new b.KeyValue
              , h = String.fromCharCode(8226);
            a = a.a.captorsConfig.input.PD();
            c = a.suspiciousWords;
            a = a.placeholderSuspiciousWords;
            var m = new RegExp("(" + c.join("|") + ")","i")
              , f = new RegExp("(" + c.concat(a).join("|") + ")","i")
              , d = /color|radio|checkbox|date|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/i
              , l = {
                isValidType: function(a) {
                    return d.test(a)
                },
                isValidNode: function(a) {
                    var d = a.nodeName;
                    a = a.type;
                    return "INPUT" === d ? !a || l.isValidType(a) : /textarea|select|progress/i.test(d)
                },
                isPrivateInformationField: function(a) {
                    var d = a.placeholder;
                    return [a.className, a.id, a.name].reduce(function(a, d) {
                        return a || m.test(d)
                    }, !1) || f.test(d)
                },
                isIgnored: function(a) {
                    return /password/i.test(a.type) || /ym-disable-keys/i.test(a.className) || e.DOMUtils.isHiddenContent(a) ? !0 : !1
                },
                isRecordable: function(a) {
                    return this.matchesClass(a.className, "ym-record-keys") ? !0 : !1
                },
                matchesClass: function(a, d) {
                    return (new RegExp(d,"i")).test(a)
                },
                isAllowed: function(a, d) {
                    void 0 === d && (d = !1);
                    return d ? !0 === l.isRecordable(a) : !1 === l.isIgnored(a)
                },
                isChanged: function(a, d) {
                    var f = !0;
                    if (p.has(a)) {
                        var b = p.get(a);
                        b && (f = d !== b[0])
                    }
                    f && p.set(a, [d]);
                    return f
                },
                validate: function(a, d) {
                    var f = d || {}
                      , b = f.isEU
                      , c = f.recording.keysMode;
                    f = l.isRecordable(a);
                    var h = l.isPrivateInformationField(a);
                    b = l.isAllowed(a, "explicit" === c) && (!b || !h);
                    return {
                        forceRecord: f,
                        isPrivate: h,
                        isAllowed: b
                    }
                },
                encode: function(a) {
                    void 0 === a && (a = "");
                    return a && 0 < a.length ? a.split(/\n/).map(function(a) {
                        return g.StringUtils.repeatString(h, a.length)
                    }).join("\n") : a
                }
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "Promise", function() {
                return e
            });
            var e = c(3).a.Promise || c(87).Promise
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "FunctionUtils", function() {
                return e
            });
            var e = {
                invoke: function(a, b, c) {
                    void 0 === b && (b = []);
                    return "function" === typeof a ? (c && (a = a.bind(c)),
                    a.apply(void 0, b)) : a
                },
                lazy: function(a, b) {
                    void 0 === b && (b = 0);
                    var c;
                    return function() {
                        for (var h = arguments.length, f = Array(h), d = 0; d < h; d++)
                            f[d] = arguments[d];
                        clearTimeout(c);
                        c = D(function() {
                            a.apply(void 0, f)
                        }, b)
                    }
                },
                once: function(a) {
                    var b = function() {
                        var c = a.apply(void 0, arguments);
                        b = function() {
                            return c
                        }
                        ;
                        return c
                    };
                    return function() {
                        return b.apply(void 0, arguments)
                    }
                },
                noop: function() {
                    return function() {}
                },
                toFunction: function(a) {
                    return "function" === typeof a ? a : this.noop()
                },
                repeat: function(a, b) {
                    var c = void 0 === b ? {} : b
                      , e = c.context
                      , f = void 0 === e ? null : e;
                    e = c.args;
                    var d = void 0 === e ? [] : e;
                    e = c.delay;
                    var l = void 0 === e ? 0 : e;
                    c = c.raf;
                    c = void 0 === c ? !0 : c;
                    var g = Date.now()
                      , p = !1
                      , k = null
                      , r = c ? this.requestAnimationFrame.bind(this) : D
                      , Q = c ? this.cancelAnimationFrame.bind(this) : clearTimeout;
                    c = function B() {
                        p ? Q(k) : (Date.now() - g >= l && (g = Date.now(),
                        a.apply(f, d)),
                        k = r(B))
                    }
                    ;
                    c.stop = function() {
                        p = !0
                    }
                    ;
                    c();
                    return c
                }
            }
        }
        , function(a, b, c) {
            a.exports = c(89)
        }
        , function(a, b, c) {
            c.r(b);
            a = c(3).a.Symbol;
            c = a instanceof Function && a.iterator ? a : c(68);
            b["default"] = c
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(29)
                  , p = function(a, b, f) {
                    a.forEach(function(a, c) {
                        2 === b.length ? f ? b(a, c) : b([a, c]) : b(a)
                    })
                };
                b.a = function(b, c) {
                    var f = 2 === c.length;
                    if (b && c instanceof Function)
                        if (null != b[a.iterator])
                            if (f)
                                if (b instanceof Array) {
                                    f = 0;
                                    for (var d = b.length; f < d; f++) {
                                        var l = c(f, b[f]);
                                        if (!0 !== l && !1 === l)
                                            break
                                    }
                                } else {
                                    if (b[a.iterator])
                                        for (f = b,
                                        d = Array.isArray(f),
                                        l = 0,
                                        f = d ? f : f[a.iterator](); ; ) {
                                            if (d) {
                                                if (l >= f.length)
                                                    break;
                                                var h = f[l++]
                                            } else {
                                                l = f.next();
                                                if (l.done)
                                                    break;
                                                h = l.value
                                            }
                                            h = c(h[0], h[1]);
                                            if (!0 !== h && !1 === h)
                                                break
                                        }
                                }
                            else
                                for (f = b,
                                d = Array.isArray(f),
                                l = 0,
                                f = d ? f : f[a.iterator](); ; ) {
                                    if (d) {
                                        if (l >= f.length)
                                            break;
                                        h = f[l++]
                                    } else {
                                        l = f.next();
                                        if (l.done)
                                            break;
                                        h = l.value
                                    }
                                    h = c(h);
                                    if (!0 !== h && !1 === h)
                                        break
                                }
                        else if ("forEach"in b)
                            p(b, c, f);
                        else if (b instanceof Array)
                            for (d = Object(e.a)(b),
                            l = 0; l < d.length && (h = d[l],
                            h = f ? c.apply(void 0, h) : c(h),
                            !0 === h || !1 !== h); l++)
                                ;
                }
            }
            ).call(this, c(25)["default"])
        }
        , function(a, b, c) {
            var e = c(3)
              , g = c(2)
              , p = function() {
                var a = !1;
                if (g.ObjectUtils.objectIsWindow(e.a))
                    try {
                        e.a.addEventListener("test", function() {}, Object.defineProperties({}, {
                            passive: {
                                get: function() {
                                    return a = !0
                                },
                                configurable: !0,
                                enumerable: !0
                            }
                        }))
                    } catch (f) {}
                return a
            }()
              , h = function(a, f, d, b, c) {
                void 0 === c && (c = {});
                a += "EventListener";
                if (f && f[a])
                    return p ? f[a](d, b, c) : f[a](d, b, "boolean" === typeof c ? c : c.capture || !1)
            };
            a = function() {
                function a() {}
                a.on = function(a, d, b, c) {
                    void 0 === c && (c = {});
                    return h("add", a, d, b, c)
                }
                ;
                a.off = function(a, d, b, c) {
                    void 0 === c && (c = {});
                    return h("remove", a, d, b, c)
                }
                ;
                return a
            }();
            b.a = a
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "NumberUtils", function() {
                return e
            });
            var e = {
                size: function(a, b) {
                    void 0 === b && (b = "kb");
                    switch (b.toLowerCase()) {
                    case "b":
                    case "byte":
                    case "bytes":
                        return a;
                    case "kb":
                    case "kilobyte":
                    case "kilobytes":
                        return a * this.size(1024, "bytes");
                    case "mb":
                    case "megabyte":
                    case "megabytes":
                        return a * this.size(1024, "kilobytes");
                    case "gb":
                    case "gigabyte":
                    case "gigabytes":
                        return a * this.size(1024, "megabytes");
                    case "tb":
                    case "terabyte":
                    case "terabytes":
                        return a * this.size(1024, "gigabytes");
                    default:
                        return a
                    }
                },
                bytesToSize: function(a) {
                    if (0 === a)
                        return "0 Byte";
                    var b = Math.round(Math.floor(Math.log(a) / Math.log(1024)));
                    return Math.round(a / Math.pow(1024, b)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][b]
                },
                closestNumber: function(a, b) {
                    return a.length ? a.reduce(function(a, c) {
                        return Math.abs(c - b) < Math.abs(a - b) ? c : a
                    }) : null
                }
            }
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(9)
                  , p = c(2);
                b.a = function(b) {
                    var c = [];
                    if (!b)
                        return c;
                    if (b instanceof Array)
                        return [].slice.call(b, 0);
                    if (p.ObjectUtils.isNative(e.a.Array.from, "from"))
                        return e.a.Array.from(b);
                    var f = "length"in b ? b.length : "size"in b ? b.size : 0;
                    var d = c.slice.call(b, 0);
                    if (d.length === f)
                        return d;
                    try {
                        if (b.forEach)
                            b.forEach(function(a, d) {
                                var f = a;
                                d && a && d !== a && (f = [d, a]);
                                c.push(f)
                            });
                        else
                            for (var l = b[a.iterator](), h, g; h = l.next(),
                            g = h.value,
                            !h.done; )
                                c.push(g);
                        return c
                    } catch (J) {
                        return []
                    }
                }
            }
            ).call(this, c(25)["default"])
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "BrowserUtils", function() {
                return p
            });
            var e = c(3)
              , g = c(11)
              , p = {
                isMSIE: function() {
                    var a = e.a.navigator.userAgent
                      , b = a.indexOf("MSIE ");
                    if (0 < b)
                        return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
                    if (0 < a.indexOf("Trident/"))
                        return b = a.indexOf("rv:"),
                        parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
                    b = a.indexOf("Edge/");
                    return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
                },
                isIframe: function(a) {
                    return a.top !== a
                },
                isMobile: function(a) {
                    a = a || n && n.navigator ? navigator.userAgent : null;
                    if (null == a)
                        return !1;
                    var b = !1;
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4)))
                        b = !0;
                    return b
                },
                isAndroid: function() {
                    return /android/i.test(navigator.userAgent)
                },
                isIOS: function() {
                    return /ipad|iphone|ipod/i.test(navigator.userAgent)
                },
                orientation: function(a) {
                    a = a || e.a;
                    return null != a ? a : (a = a.screen.orientation || a.screen.mozOrientation || a.screen.msOrientation) && a.angle || 0
                },
                devicePixelRatio: function() {
                    return e.a.devicePixelRatio || 1
                },
                meta: function(a) {
                    return (a = q.querySelector('meta[name\x3d"ym:' + a + '"]')) ? a.content : null
                },
                scaleFactor: function(a, b) {
                    var f = a.clientWidth
                      , d = a.clientHeight
                      , c = b.clientWidth
                      , h = b.clientHeight;
                    return c > f || h > d ? (f /= c,
                    d /= h,
                    Math.min(1, Math.max(f > d ? .1 : .35, Math.min(f, d)))) : 1
                },
                viewportGetter: function(a) {
                    a = a || n.document;
                    var b = a.defaultView
                      , f = function(d) {
                        /Trident|MSIE/.test(b.navigator.userAgent) ? a.body.parentNode && a.body.parentNode.appendChild(d) : a.body.appendChild(d)
                    }
                      , d = a.querySelector("ym-measure.ym-viewport")
                      , c = a.querySelector("ym-measure.ym-zoom");
                    null === d && (d = g.DOMUtils.createElement("ym-measure", {
                        className: "ym-viewport",
                        style: {
                            display: "block",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            position: "fixed",
                            transform: "translate(0, -100%)",
                            msTransform: "translate(0, -100%)",
                            webkitTransform: "translate(0, -100%)",
                            transformOrigin: "0 0",
                            msTransformOrigin: "0 0",
                            webkitTransformOrigin: "0 0"
                        }
                    }),
                    f(d));
                    null === c && (c = g.DOMUtils.createElement("ym-measure", {
                        className: "ym-zoom",
                        style: {
                            bottom: "100%",
                            position: "fixed",
                            width: "100vw"
                        }
                    }),
                    f(c));
                    return Object.defineProperties({
                        getSize: function(a) {
                            void 0 === a && (a = 1);
                            var f = d;
                            return {
                                width: Math.round(f.clientWidth * a),
                                height: Math.round(f.clientHeight * a)
                            }
                        }
                    }, {
                        zoomLevel: {
                            get: function() {
                                try {
                                    return parseFloat((c.clientWidth / b.innerWidth).toFixed(3))
                                } catch (x) {
                                    return 1
                                }
                            },
                            configurable: !0,
                            enumerable: !0
                        },
                        scrollingElement: {
                            get: function() {
                                return a.scrollingElement || (a.documentElement.scrollHeight > a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
                            },
                            configurable: !0,
                            enumerable: !0
                        },
                        orientation: {
                            get: function() {
                                var a = ja ? ja.orientation || ja.mozOrientation || ja.msOrientation : null;
                                return a && a.angle || 0
                            },
                            configurable: !0,
                            enumerable: !0
                        }
                    })
                }
            }
        }
        , function(a, b, c) {
            (function(a, g, p) {
                c.d(b, "b", function() {
                    return y
                });
                var h = c(1);
                h = c.n(h);
                var e = c(15)
                  , f = "2d webgl experimental-webgl webgl2 experimental-webgl2 bitmaprenderer".split(" ")
                  , d = function() {
                    var a = q.createElement("canvas");
                    a.proxy = !1;
                    return f.filter(function(d) {
                        return null != a.getContext(d)
                    })
                }()
                  , l = new a
                  , x = HTMLCanvasElement.prototype.getContext
                  , y = function(a) {
                    var d = q.createElement("canvas");
                    d.width = a.width;
                    d.height = a.height;
                    d.proxy = !1;
                    d.getContext("2d").drawImage(a, 0, 0);
                    return d.toDataURL("image/jpeg")
                }
                  , k = function(a) {
                    a = a.constructor;
                    if (l.has(a))
                        return l.has(a);
                    var d = g.apiMock(a);
                    l.set(a, d);
                    return d
                };
                a = function() {
                    function a() {}
                    a.mock = function() {
                        if (!this.mocked) {
                            this.mocked = !0;
                            HTMLCanvasElement.prototype.getContext = function(f) {
                                var b = x.call(this, f);
                                if (null !== b)
                                    return !1 !== this.proxy && 0 <= d.indexOf(f) && a.update(b),
                                    b
                            }
                            ;
                            var b = q.querySelectorAll("canvas");
                            g.forof(b, function(a) {
                                g.forof(f, a.getContext.bind(a))
                            })
                        }
                    }
                    ;
                    a.remove = function() {
                        this.mocked && (this.mocked = !1,
                        this.events.off(),
                        HTMLCanvasElement.prototype.getContext = x)
                    }
                    ;
                    a.update = function(d) {
                        if (!1 === a.proxies.has(d)) {
                            var f = this
                              , b = d.canvas
                              , c = Object.getPrototypeOf(d)
                              , l = k(d);
                            g.nodeIsRecordable(b) && l.properties && (g.forof(l.properties, function(a) {
                                var b = Object.getOwnPropertyDescriptor(c, a)
                                  , l = g.combine(b);
                                b.get && (l.get = b.get.bind(d));
                                b.set && (l.set = function(c) {
                                    f.setterInvoked(d, a, c);
                                    return b.set.call(d, c)
                                }
                                );
                                Object.defineProperty(d, a, l)
                            }),
                            g.forof(l.methods, function(a) {
                                var b = d[a];
                                Object.defineProperty(d, a, {
                                    configurable: !0,
                                    value: function() {
                                        for (var c = arguments.length, l = Array(c), h = 0; h < c; h++)
                                            l[h] = arguments[h];
                                        f.methodInvoked(d, a, l);
                                        return b.bind.apply(b, [d].concat(l))
                                    }
                                })
                            }));
                            a.proxies.add(d)
                        }
                    }
                    ;
                    a.setterInvoked = function(a, d, f) {
                        var b = this;
                        this.mocked && D(function() {
                            b.send(a, "setter", {
                                name: d,
                                value: String(f)
                            })
                        })
                    }
                    ;
                    a.methodInvoked = function(a, d, f) {
                        var b = this;
                        this.mocked && D(function() {
                            f = f.map(function(a) {
                                return a instanceof Image ? y(a) : String(a)
                            });
                            b.send(a, "method", {
                                name: d,
                                args: f
                            })
                        })
                    }
                    ;
                    a.send = function() {}
                    ;
                    return a
                }();
                h()(a, "proxies", new p);
                h()(a, "mocked", !1);
                h()(a, "events", new e.a(["setter:memory", "method:memory"]));
                b.a = a
            }
            ).call(this, c(12)["default"], c(7)["default"], c(8)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(14)
                  , p = c.n(e);
                e = c(1);
                var h = c.n(e)
                  , m = c(4);
                e = function() {
                    function f() {
                        h()(this, "executionFrameId", null);
                        h()(this, "jobExecutionStartStamp", null);
                        this.jobs = [];
                        this.isRunning = !1
                    }
                    var d = f.prototype;
                    d.push = function(d, f) {
                        var b, c = this;
                        void 0 === f && (f = !1);
                        (b = this.jobs).push.apply(b, [].concat(d));
                        f ? this.start(!0) : a.requestAnimationFrame(function() {
                            return c.start(f)
                        })
                    }
                    ;
                    d.start = function(a) {
                        void 0 === a && (a = !1);
                        this.isRunning || this.executeNextJob(a)
                    }
                    ;
                    d.executeNextJob = function(a) {
                        void 0 === a && (a = !1);
                        this.hasJobs && (a ? this._executeJobsSync() : this._executeJobsAsync())
                    }
                    ;
                    d._executeJobsSync = function() {
                        if (this.hasJobs && this.isRunning) {
                            for (a.cancelAnimationFrame(this.executionFrameId); this.hasJobs; )
                                this._executeJob();
                            this.jobExecutionStartStamp = null;
                            this.isRunning = !1
                        }
                    }
                    ;
                    d._executeJobsAsync = function() {
                        var d = this;
                        if (this.hasJobs) {
                            this.isRunning = !0;
                            var f;
                            this.executionFrameId = a.requestAnimationFrame(function() {
                                for (; d.hasJobs && (!d.jobExecutionStartStamp || 150 > f); )
                                    f = d._executeJob(!d.jobExecutionStartStamp);
                                d.jobExecutionStartStamp = null;
                                d._executeJobsAsync()
                            })
                        } else
                            this.isRunning = !1
                    }
                    ;
                    d._executeJob = function(a) {
                        void 0 === a && (a = !0);
                        a && (this.jobExecutionStartStamp = (new Date).valueOf());
                        a = this.jobs.shift();
                        try {
                            a()
                        } catch (x) {
                            m["default"].log("Error occurred when running job"),
                            m["default"].log(x),
                            m["default"].log(a.toString())
                        }
                        return (new Date).valueOf() - this.jobExecutionStartStamp
                    }
                    ;
                    p()(f, [{
                        key: "hasJobs",
                        get: function() {
                            return 0 < this.jobs.length
                        }
                    }]);
                    return f
                }();
                b.a = e
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b) {
            a.exports = function(a, b) {
                if (null == a)
                    return {};
                var c = {}, e = Object.keys(a), h;
                for (h = 0; h < e.length; h++) {
                    var m = e[h];
                    0 <= b.indexOf(m) || (c[m] = a[m])
                }
                return c
            }
        }
        , function(a, b, c) {
            c.d(b, "a", function() {
                return e
            });
            c.d(b, "b", function() {
                return g
            });
            var e = function() {
                function a() {
                    this.m = []
                }
                var b = a.prototype;
                b.use = function(a) {
                    this.m.push(a)
                }
                ;
                b.useRight = function(a) {
                    this.m.unshift(a)
                }
                ;
                b.run = function(a, f) {
                    this._execute(a, f)
                }
                ;
                b._execute = function(a, f) {
                    this.m.reduceRight(function(d, f) {
                        return function(b) {
                            return f(b || a, d)
                        }
                    }, function(d) {
                        return f(d || a)
                    })(a)
                }
                ;
                return a
            }()
              , g = function() {
                function a() {
                    this.m = []
                }
                var b = a.prototype;
                b.use = function(a) {
                    this.m.push(a)
                }
                ;
                b.useRight = function(a) {
                    this.m.unshift(a)
                }
                ;
                b.run = function(a, f) {
                    return this._execute(a, f)
                }
                ;
                b._execute = function(a) {
                    for (var f = 0, d = this.m.length; f < d; f++) {
                        var b = this.m[f](a);
                        if (b === z)
                            break;
                        a = b
                    }
                    return a
                }
                ;
                return a
            }()
        }
        , function(a, b, c) {
            (function(b) {
                function c(a, c, e, f, d, l, g) {
                    try {
                        var h = a[l](g)
                          , m = h.value
                    } catch (r) {
                        e(r);
                        return
                    }
                    h.done ? c(m) : b.resolve(m).then(f, d)
                }
                a.exports = function(a) {
                    return function() {
                        var h = this
                          , e = arguments;
                        return new b(function(b, d) {
                            function f(a) {
                                c(m, b, d, f, g, "next", a)
                            }
                            function g(a) {
                                c(m, b, d, f, g, "throw", a)
                            }
                            var m = a.apply(h, e);
                            f(z)
                        }
                        )
                    }
                }
            }
            ).call(this, c(22).Promise)
        }
        , function(a, b, c) {
            var e = c(78)();
            a.exports = function(a) {
                return a !== e && null !== a
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "DocumentUtils", function() {
                return g
            });
            var e = function(a) {
                return a ? "IFRAME" === a.nodeName ? a.contentDocument : a : null
            }
              , g = {
                open: function(a) {
                    (a = e(a)) && a.open()
                },
                write: function(a, b) {
                    var c = e(a);
                    c && c.write(b)
                },
                close: function(a) {
                    (a = e(a)) && a.close()
                },
                initDocument: function(a) {
                    var b = void 0 === a ? {} : a;
                    a = b.html;
                    var c = b.doctype;
                    b = b.doc || q.cloneNode(!1);
                    this.open(b);
                    this.write(b, a || c + "\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                    this.close(b);
                    return b
                }
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "TimeUtils", function() {
                return g
            });
            a = c(42);
            var e = c(18)
              , g = {
                now: function() {
                    return (new Date).getTime()
                },
                formatTime: function(a, b) {
                    void 0 === b && (b = !0);
                    a = Number(a);
                    return [Math.floor(a / 3600), Math.floor(a / 60 % 60), Math.floor(a % 60)].filter(function(a, b) {
                        return !(0 === a && 0 === b)
                    }).map(function(a, f) {
                        return e.StringUtils.pad(a, 0 !== f || b ? 2 : 0, "0")
                    })
                },
                formattedTime: function(a, b, c) {
                    void 0 === b && (b = ["sec", "min", "hours"]);
                    void 0 === c && (c = !0);
                    var f = g.formatTime(a, c).reverse();
                    return b.reduce(function(a, b, c) {
                        f[c] && parseInt(f[c], 10) && a.push(parseInt(f[c], 10) + " " + b);
                        return a
                    }, []).reverse().join(" ")
                },
                timer: a.a
            }
        }
        , function(a, b) {
            function c() {
                throw Error("setTimeout has not been defined");
            }
            function e() {
                throw Error("clearTimeout has not been defined");
            }
            function g(a) {
                if (x === D)
                    return D(a, 0);
                if ((x === c || !x) && D)
                    return x = D,
                    D(a, 0);
                try {
                    return x(a, 0)
                } catch (T) {
                    try {
                        return x.call(null, a, 0)
                    } catch (ka) {
                        return x.call(this, a, 0)
                    }
                }
            }
            function p(a) {
                if (y === clearTimeout)
                    return clearTimeout(a);
                if ((y === e || !y) && clearTimeout)
                    return y = clearTimeout,
                    clearTimeout(a);
                try {
                    return y(a)
                } catch (T) {
                    try {
                        return y.call(null, a)
                    } catch (ka) {
                        return y.call(this, a)
                    }
                }
            }
            function h() {
                r && Q && (r = !1,
                Q.length ? k = Q.concat(k) : n = -1,
                k.length && m())
            }
            function m() {
                if (!r) {
                    var a = g(h);
                    r = !0;
                    for (var d = k.length; d; ) {
                        Q = k;
                        for (k = []; ++n < d; )
                            Q && Q[n].run();
                        n = -1;
                        d = k.length
                    }
                    Q = null;
                    r = !1;
                    p(a)
                }
            }
            function f(a, d) {
                this.fun = a;
                this.array = d
            }
            function d() {}
            var l = a.exports = {};
            try {
                var x = "function" === typeof D ? D : c
            } catch (B) {
                x = c
            }
            try {
                var y = "function" === typeof clearTimeout ? clearTimeout : e
            } catch (B) {
                y = e
            }
            var k = [], r = !1, Q, n = -1;
            l.nextTick = function(a) {
                var d = Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var b = 1; b < arguments.length; b++)
                        d[b - 1] = arguments[b];
                k.push(new f(a,d));
                1 !== k.length || r || g(m)
            }
            ;
            f.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ;
            l.title = "browser";
            l.browser = !0;
            l.env = {};
            l.argv = [];
            l.version = "";
            l.versions = {};
            l.on = d;
            l.addListener = d;
            l.once = d;
            l.off = d;
            l.removeListener = d;
            l.removeAllListeners = d;
            l.emit = d;
            l.prependListener = d;
            l.prependOnceListener = d;
            l.listeners = function(a) {
                return []
            }
            ;
            l.binding = function(a) {
                throw Error("process.binding is not supported");
            }
            ;
            l.cwd = function() {
                return "/"
            }
            ;
            l.chdir = function(a) {
                throw Error("process.chdir is not supported");
            }
            ;
            l.umask = function() {
                return 0
            }
        }
        , function(a, b, c) {
            function e() {
                if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (h) {
                    return !1
                }
            }
            function g(b, c, f) {
                e() ? a.exports = g = Reflect.construct : a.exports = g = function(a, b, f) {
                    var d = [null];
                    d.push.apply(d, b);
                    a = new (Function.bind.apply(a, d));
                    f && p(a, f.prototype);
                    return a
                }
                ;
                return g.apply(null, arguments)
            }
            var p = c(88);
            a.exports = g
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(37)
                  , p = c(2)
                  , h = c(19);
                b.a = function(b) {
                    var f = p.ObjectUtils.assign({
                        url: "",
                        headers: {},
                        method: "get",
                        type: "json",
                        data: null
                    }, b);
                    if (b.headers === z || b.headers["Content-Type"] === z)
                        f.headers = f.headers || {},
                        f.headers["Content-Type"] = function() {
                            switch (f.type) {
                            case "json":
                                return "application/json";
                            case "css":
                                return "text/css";
                            case "html":
                                return "text/html";
                            default:
                                return "text/plain"
                            }
                        }();
                    return (new a(function(a, b) {
                        var d = new XMLHttpRequest
                          , c = new FileReader;
                        "css" === f.type && (d.responseType = "blob");
                        d.addEventListener("readystatechange", function() {
                            var l = d.status;
                            4 === d.readyState && (200 <= l && 301 > l ? "css" === f.type ? (l = ((d.getResponseHeader("Content-Type") || "").split("; ").map(function(a) {
                                return a.split("\x3d")
                            }).find(function(a) {
                                return "charset" === a[0]
                            }) || ["charset", "UTF-8"])[1],
                            c.addEventListener("load", function(d) {
                                a({
                                    result: c.result
                                })
                            }),
                            c.readAsText(d.response, l)) : (l = function(a) {
                                switch (f.type) {
                                case "json":
                                    return JSON.parse(a);
                                case "html":
                                    return e.DocumentUtils.initDocument({
                                        html: a
                                    });
                                default:
                                    return a
                                }
                            }(d.responseText),
                            a({
                                result: l
                            })) : b(Error(l + " " + d.statusText)))
                        });
                        d.addEventListener("error", b);
                        d.open(f.method.toUpperCase(), f.url);
                        Object(h.a)(f.headers, function(a, b) {
                            d.setRequestHeader(a, b)
                        });
                        d.send(f.data ? JSON.stringify(f.data) : z)
                    }
                    ))["catch"](function(a) {
                        return {}
                    })
                }
            }
            ).call(this, c(22).Promise)
        }
        , function(a, b, c) {
            (function(a, c) {
                var e = function() {
                    if ("undefined" !== typeof n)
                        return n;
                    if ("undefined" !== typeof global)
                        return global;
                    if ("undefined" !== typeof self)
                        return self
                }()
                  , h = function() {
                    return Date.now()
                }
                  , g = function(d) {
                    return d ? (d = this._getTime() - d,
                    0 > d && a.warn("Invalid stamp: " + d),
                    d) : 0
                }
                  , f = function(a, b) {
                    var d;
                    (d = e.console).log.apply(d, a.concat([b + "ms"]))
                };
                b.a = function(a) {
                    void 0 === a && (a = {});
                    var d = a.getStamp || g
                      , b = a.printLog || f
                      , c = {
                        start: function() {
                            var a = this._getTime();
                            this._initializedAt = this._initializedAt || a;
                            this._startedAt = a;
                            return c
                        },
                        stamp: function() {
                            return this._getStamp(this._startedAt)
                        },
                        stampSinceCreated: function() {
                            return this._getStamp(this._initializedAt)
                        },
                        reset: function() {
                            return this.start()
                        },
                        log: function() {
                            for (var a = arguments.length, d = Array(a), f = 0; f < a; f++)
                                d[f] = arguments[f];
                            b(d, this.stamp());
                            return this
                        },
                        logSinceCreated: function() {
                            for (var a = arguments.length, d = Array(a), f = 0; f < a; f++)
                                d[f] = arguments[f];
                            b(d, this.stampSinceCreated());
                            return this
                        }
                    };
                    Object.defineProperties(c, {
                        _getTime: {
                            value: (a.getTime || h).bind(c)
                        },
                        _getStamp: {
                            value: d.bind(c)
                        }
                    });
                    return c
                }
            }
            ).call(this, c(4)["default"], c(39))
        }
        , function(a, b, c) {
            (function(a, g) {
                var e = c(5)
                  , h = c.n(e)
                  , m = c(21);
                b.a = function() {
                    var b = new a
                      , d = {
                        input: {
                            capture: !0,
                            passive: !0
                        },
                        change: {
                            capture: !0
                        },
                        keyup: {
                            capture: !0
                        },
                        paste: {
                            capture: !0
                        },
                        cut: {
                            capture: !0
                        }
                    };
                    return {
                        inputs: {},
                        events: {},
                        create: function(a) {
                            var f = this;
                            this.checkInpudDescriptorOverrideAbility = this.checkInpudDescriptorOverrideAbility.bind(this);
                            this.handleInputValueChange = this.handleInputValueChange.bind(this);
                            this.handleInputChangeValueEvent = this.handleInputChangeValueEvent.bind(this);
                            this.handleNodeIndex = this.handleNodeIndex.bind(this);
                            this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
                            this.recorder = a;
                            this.checkInpudDescriptorOverrideAbility(a) && (a.indexer.dom.forEach(function(a) {
                                f.handleNodeIndex(a)
                            }),
                            a.indexer.on("add", this.handleNodeIndex),
                            a.indexer.on("remove", this.handleNodeRemoval));
                            g.forin(d, function(c) {
                                b.add(a.attachEvent(a.document, c, f.handleInputChangeValueEvent, d[c]))
                            })
                        },
                        handleNodeIndex: function(a) {
                            if (m.a.isValidNode(a.nativeNode) && "__ym_input_override_test" !== a.nativeNode.getAttribute("class")) {
                                var d = a.nativeNode
                                  , b = a.id
                                  , f = "radio" === a.attributes.type || "checkbox" === a.attributes.type;
                                a = this.getPropertyName(f);
                                this.inputs[b] = {
                                    checkable: f,
                                    value: d[a]
                                };
                                f = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), a) || {};
                                var c = Object.getOwnPropertyDescriptor(d, a) || {}
                                  , l = h()({}, f, c);
                                if (g.isNative(l.set, "((set)?(\\s?" + a + ")?)?")) {
                                    var e = this;
                                    try {
                                        Object.defineProperty(d, a, h()({}, l, {
                                            configurable: !0,
                                            set: function(a) {
                                                var d = this;
                                                e.recorder.errorLogger(function() {
                                                    e.handleInputValueChange(b, a, d)
                                                }, "inpVC");
                                                return l.set.call(this, a)
                                            }
                                        }))
                                    } catch (B) {
                                        delete this.inputs[b]
                                    }
                                }
                            }
                        },
                        handleInputChangeValueEvent: function(a) {
                            var d = this;
                            this.recorder.errorLogger(function() {
                                var b = a.target
                                  , f = d.recorder.indexer.get(b);
                                if (f) {
                                    var c = f.id;
                                    if (!d.inputs[c] && (d.handleNodeIndex(f),
                                    !d.inputs[c]))
                                        return;
                                    f = d.getPropertyName(d.inputs[c].checkable);
                                    d.handleInputValueChange(c, b[f], b)
                                }
                            }, "inpChV")
                        },
                        handleInputValueChange: function(a, d, b) {
                            var f = this.inputs[a]
                              , c = f.checkable;
                            f = f.value;
                            if ((!d || -1 !== ["string", "boolean", "number"].indexOf(typeof d)) && d !== f) {
                                if (c)
                                    b = this.recorder._getEventObject("change", a, {
                                        checked: d
                                    });
                                else {
                                    var l = m.a.validate(b, this.recorder.options);
                                    f = l.forceRecord;
                                    var e = l.isPrivate;
                                    l = l.isAllowed || f ? d : m.a.encode(d);
                                    b = this.recorder._getEventObject("change", b, {
                                        value: l,
                                        hidden: e && !f
                                    })
                                }
                                this.inputs[a] = {
                                    checkable: c,
                                    value: d
                                };
                                this.recorder._publishActions(b)
                            }
                        },
                        handleNodeRemoval: function(a) {
                            a.nativeNode && "__ym_input_override_test" === a.nativeNode.getAttribute("class") || delete this.inputs[a.id]
                        },
                        getPropertyName: function(a) {
                            return a ? "checked" : "value"
                        },
                        checkInpudDescriptorOverrideAbility: function(a) {
                            var d = !0
                              , b = a.document.createElement("input");
                            b.value = "INPUT_VALUE";
                            b.setAttribute("style", "display: none !important;");
                            b.setAttribute("type", "text");
                            b.setAttribute("class", "__ym_input_override_test");
                            a.document.documentElement.appendChild(b);
                            try {
                                var f = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") || {}
                                  , c = Object.getOwnPropertyDescriptor(b, "value") || {}
                                  , l = h()({}, f, c);
                                Object.defineProperty(b, "value", h()({}, l, {
                                    configurable: !0,
                                    set: function(a) {
                                        return l.set.call(b, a)
                                    }
                                }));
                                "INPUT_VALUE" !== b.value && (d = !1);
                                b.value = "INPUT_TEST";
                                "INPUT_TEST" !== b.value && (d = !1)
                            } catch (fa) {
                                d = !1
                            }
                            a.document.documentElement.removeChild(b);
                            return d
                        },
                        destroy: function(a) {
                            var d = this;
                            Object.keys(this.inputs).forEach(function(b) {
                                var f = a.indexer.findByID(b);
                                if (f) {
                                    b = d.getPropertyName(d.inputs[b].checkable);
                                    var c = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(f), b);
                                    Object.defineProperty(f, b, c)
                                }
                            });
                            Object.keys(this.events).forEach(function(b) {
                                a.removeEvent(d.events[b])
                            });
                            a.indexer.off("add", this.handleNodeIndex);
                            a.indexer.off("remove", this.handleNodeRemoval)
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, g) {
                var e = c(20);
                b.a = function() {
                    var b = {
                        mousemove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        mousedown: {
                            capture: !0
                        },
                        mouseup: {
                            capture: !0
                        },
                        click: {
                            capture: !0
                        }
                    }
                      , c = new a
                      , f = function(a) {
                        var d = a.object;
                        a = a.args[0];
                        var b = d.type
                          , f = d.target
                          , c = d.pageX
                          , l = d.pageY
                          , e = d.clientX;
                        e = void 0 === e ? null : e;
                        d = d.clientY;
                        d = void 0 === d ? null : d;
                        f = this.document.elementFromPoint(void 0 === c ? null : c, void 0 === l ? null : l) || f;
                        a = this._getEventObject(b, f, {
                            x: e,
                            y: d
                        }, a);
                        this._publishActions(a)
                    }
                      , d = e.a.create(f, {
                        timeout: 0
                    })
                      , l = function(a) {
                        var b = this.stamp;
                        "mousemove" === a.type ? d.call(this, a, b) : f.call(this, {
                            object: a,
                            args: [b]
                        })
                    };
                    return {
                        create: function(a) {
                            var d = a._universalHandler(l);
                            g.forin(b, function(f) {
                                c.add(a.attachEvent(a.document, f, d, b[f]))
                            })
                        },
                        destroy: function(a) {
                            g.forof(c, function(d) {
                                return a.removeEvent(d)
                            });
                            c.clear()
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, c) {
                b.a = function() {
                    var b = {
                        focus: {
                            capture: !0
                        },
                        blur: {
                            capture: !0
                        }
                    }
                      , e = new a
                      , g = function(a) {
                        a = this._getEventObject(a.type, a.target);
                        this._publishActions(a)
                    };
                    return {
                        create: function(a) {
                            var d = a._universalHandler(g);
                            c.forin(b, function(f) {
                                e.add(a.attachEvent(a.document, f, d, b[f]))
                            })
                        },
                        destroy: function(a) {
                            c.forof(e, function(d) {
                                return a.removeEvent(d)
                            });
                            e.clear()
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                b.a = function() {
                    var b, c = function(b, c) {
                        var f = this
                          , d = a.now();
                        this._blockUpcomingCaptor("resize");
                        this._executeCaptor("deviceRotation", function() {
                            D(function() {
                                var l = a.now() - d;
                                f._publishActions(c.getValue.call(f, b, l))
                            }, 300)
                        })
                    };
                    return {
                        getValue: function(a, b) {
                            var f = this.viewport.getSize(1);
                            f = this._getEventObject("deviceRotation", 0, {
                                width: f.width,
                                height: f.height,
                                orientation: this.viewport.orientation
                            });
                            f.stamp -= b;
                            return f
                        },
                        create: function(a) {
                            b = a.attachEvent(a.window, "orientationchange", a._universalHandler(c, {
                                extra: [this]
                            }), {
                                passive: !0
                            })
                        },
                        destroy: function(a) {
                            a.removeEvent(b)
                        }
                    }
                }
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, g) {
                var e = c(20);
                b.a = function() {
                    var b, c = new a, f = function(a) {
                        var d = a.args[0]
                          , b = this.viewport.scrollingElement;
                        a = a.object.target;
                        var f = this.document
                          , c = this.window
                          , l = g.getScroll(a);
                        d = this._getEventObject("scroll", a, {
                            x: Math.max(l.left, 0),
                            y: Math.max(l.top, 0),
                            page: a === b || a === c || a === f || a === f.body
                        }, d);
                        this._publishActions(d)
                    }, d = function(a) {
                        var d = a.target;
                        if (c.has(d))
                            d = c.get(d);
                        else {
                            var b = e.a.create(f, {
                                timeout: g.isAndroid() ? 0 : 100,
                                immediateFirstRun: !0
                            });
                            c.set(d, b);
                            d = b
                        }
                        d.call(this, a)
                    };
                    return {
                        create: function(a) {
                            var f = a._universalHandler(d);
                            b = a.attachEvent(a.document, "scroll", f.bind(a), {
                                capture: !0,
                                passive: !0
                            })
                        },
                        destroy: function(a) {
                            a.removeEvent(b);
                            c.clear()
                        }
                    }
                }
            }
            ).call(this, c(12)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, c) {
                b.a = function() {
                    var b = {
                        mousemove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        touchmove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        mousedown: {
                            capture: !0
                        },
                        touchdown: {
                            capture: !0
                        }
                    }
                      , e = new a
                      , g = !1
                      , f = function(a) {
                        var d = "select" === a.type ? this.selection.getSelectionFor(a.target) : this.selection.getPageSelection();
                        d && d.start !== d.end && -1 !== ["mousemove", "touchmove", "touchdown"].indexOf(a.type) ? (g = !0,
                        a = this._getEventObject("selection", "select" === a.type ? a.target : this.rootNode, d),
                        this._publishActions(a)) : g && -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(a.type) && (g = !1,
                        a = this._getEventObject("selection", null, {
                            start: 0,
                            end: 0
                        }),
                        this._publishActions(a))
                    };
                    return {
                        create: function(a) {
                            var d = a._universalHandler(function(d) {
                                ("mousemove" === d.type && 1 === d.which || -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(d.type)) && f.call(a, d)
                            });
                            c.forin(b, function(f) {
                                e.add(a.attachEvent(a.document, f, d, b[f]))
                            })
                        },
                        destroy: function(a) {
                            c.forof(e, function(d) {
                                return a.removeEvent(d)
                            })
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, g, p) {
                var e = c(20);
                b.a = function() {
                    var b = {
                        touchmove: {
                            capture: !0,
                            passive: !0
                        },
                        touchstart: {
                            capture: !0
                        },
                        touchend: {
                            capture: !0
                        },
                        touchcancel: {
                            capture: !0
                        },
                        touchforcechange: {
                            capture: !0
                        }
                    }
                      , f = new a
                      , d = new g
                      , c = !1
                      , h = function(a) {
                        var d = a.object;
                        a = a.args[0];
                        var b = d.type
                          , f = p.map(d.changedTouches, function(a) {
                            return {
                                id: a.__id,
                                x: Math.round(a.clientX),
                                y: Math.round(a.clientY),
                                force: a.force
                            }
                        });
                        d = this._getEventObject(b, d.target, {
                            touches: f
                        }, a);
                        this._publishActions(d)
                    }
                      , y = e.a.create(h, {
                        timeout: p.isAndroid() ? 0 : 300
                    })
                      , k = function(a) {
                        var b = this.stamp
                          , f = "touchcancel" === a.type || "touchend" === a.type;
                        a.changedTouches && 0 < a.changedTouches.length && p.forof(a.changedTouches, function(a) {
                            var b = void 0 === f ? !1 : f;
                            if (d.has(a.identifier))
                                var c = d.get(a.identifier);
                            else
                                c = p.guid(),
                                d.set(a.identifier, c);
                            b && d["delete"](a.identifier);
                            a.__id = c
                        });
                        "touchmove" === a.type ? c ? h.call(this, {
                            object: a,
                            args: [b]
                        }) : y.call(this, a, b) : h.call(this, {
                            object: a,
                            args: [b]
                        })
                    };
                    return {
                        create: function(a) {
                            var d = a._universalHandler(k);
                            p.forin(b, function(c) {
                                f.add(a.attachEvent(a.document, c, d, b[c]))
                            });
                            var l = null
                              , e = a._universalHandler(function() {
                                clearTimeout(l);
                                c = !0;
                                l = D(function() {
                                    return c = !1
                                }, 150)
                            });
                            f.add(a.attachEvent(a.document, "scroll", e, {
                                passive: !0,
                                capture: !0
                            }))
                        },
                        destroy: function(a) {
                            p.forof(f, function(d) {
                                return a.removeEvent(d)
                            });
                            f.clear()
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(12)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, c) {
                b.a = function() {
                    var b = new a
                      , e = []
                      , g = null
                      , f = function() {
                        var a = this
                          , b = this.stamp
                          , f = this.viewport.zoomLevel;
                        if (this.zoomLevel !== f) {
                            clearTimeout(g);
                            var h = c.scrollingElement()
                              , m = h.scrollLeft;
                            h = h.scrollTop;
                            this.zoomLevel = f;
                            e.push([b, f, m, h]);
                            g = D(function() {
                                var d = e[0]
                                  , b = e[e.length - 1]
                                  , f = b[0];
                                d = a._getEventObject("zoom", 0, {
                                    zoomFrom: {
                                        level: d[1],
                                        x: d[2],
                                        y: d[3]
                                    },
                                    zoomTo: {
                                        level: b[1],
                                        x: b[2],
                                        y: b[3]
                                    },
                                    duration: f - d[0]
                                }, f);
                                e.length = 0;
                                a._publishActions(d)
                            }, 100)
                        }
                    };
                    return {
                        create: function(a) {
                            a = a._universalHandler(f);
                            this.captor = c.repeat(a)
                        },
                        destroy: function() {
                            this.captor.stop();
                            b.clear()
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, c) {
                b.a = function() {
                    var b, e = "undefined" !== typeof q.hidden ? {
                        hidden: "hidden",
                        event: "visibilitychange"
                    } : "undefined" !== typeof q.msHidden ? {
                        hidden: "msHidden",
                        event: "msvisibilitychange"
                    } : "undefined" !== typeof q.webkitHidden ? {
                        hidden: "webkitHidden",
                        event: "webkitvisibilitychange"
                    } : null, g = e ? (b = {},
                    b[e.event] = {
                        capture: !0
                    },
                    b) : {
                        focus: {
                            capture: !0
                        },
                        blur: {
                            capture: !0
                        }
                    }, f = {
                        focus: "windowfocus",
                        blur: "windowblur"
                    }, d = new a, l = function(a) {
                        a = e ? this._getEventObject(f[q[e.hidden] ? "blur" : "focus"], this.window) : this._getEventObject(f[a.type], this.window);
                        this._publishActions(a)
                    };
                    return {
                        create: function(a) {
                            var b = a._universalHandler(l);
                            c.forin(g, function(f) {
                                d.add(a.attachEvent(a.window, f, b, g[f]))
                            })
                        },
                        destroy: function(a) {
                            c.forof(d, function(d) {
                                return a.removeEvent(d)
                            });
                            d.clear()
                        }
                    }
                }
            }
            ).call(this, c(8)["default"], c(7)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(14)
                  , p = c.n(e);
                e = c(6);
                var h = c.n(e);
                e = c(17);
                var m = c.n(e);
                e = c(1);
                var f = c.n(e);
                e = c(15);
                var d = c(53)
                  , l = c(32)
                  , x = c(10);
                e = function(b) {
                    function c(c, e) {
                        var g = b.call(this) || this;
                        f()(h()(g), "IGNORE_NODE_ATTRIBUTE", "__ym_wv_ign");
                        f()(h()(g), "eventsList", ["mutation"]);
                        g.indexer = e;
                        g.originalHTML = g.indexer.html;
                        g.target = c;
                        g.watcher = new d.a(g.target);
                        g.queue = new l.a;
                        g._timer = a.timer();
                        g.watcher.on("mutation", g.collectMutations.bind(h()(g)));
                        return g
                    }
                    m()(c, b);
                    var e = c.prototype;
                    e.addChanges = function(d, b) {
                        for (var f = arguments.length, c = Array(2 < f ? f - 2 : 0), e = 2; e < f; e++)
                            c[e - 2] = arguments[e];
                        if (null != d[b] && 0 < c.length) {
                            var l, h = d[b].length;
                            a.fastIterate(c, function(a, d) {
                                return d.i = h + a
                            });
                            d[b] = (l = d[b]).concat.apply(l, c)
                        }
                    }
                    ;
                    e.collectMutations = function(a) {
                        var d = this;
                        this.queue.push(function() {
                            var b = d.processMutations(a);
                            b.hasData && d.emit("mutation", b.store)
                        })
                    }
                    ;
                    e.destroy = function() {
                        this.queue.start(!0);
                        this.off();
                        this.watcher.off();
                        this.watcher.stop()
                    }
                    ;
                    e.cleanChangesObject = function(d) {
                        a.forin(d, function(a) {
                            0 === d[a].length && delete d[a]
                        });
                        return d
                    }
                    ;
                    e.initObserver = function() {
                        this.initObserver = a.noop();
                        this.watcher.start();
                        this._timer.start()
                    }
                    ;
                    e.processMutations = function(d) {
                        var b = this
                          , f = !1
                          , c = [];
                        a.fastIterate(d, function(a, d) {
                            if (d.target.parentNode && !x.c.isIgnoredNode(d.target.parentNode)) {
                                var e = b.changesObject;
                                !1 !== function() {
                                    var a = d.type
                                      , f = d.target
                                      , c = b.indexer.getIndexedNodeId(f);
                                    if (null == c)
                                        return !1;
                                    f = [d, c, f, e];
                                    switch (a) {
                                    case "childList":
                                        return b.processTreeChanges.apply(b, f);
                                    case "attributes":
                                        return b.processAttributesChanges.apply(b, f);
                                    case "characterData":
                                        return b.processContentChanges.apply(b, f)
                                    }
                                }() && (f = !0,
                                c.push(b.cleanChangesObject(e)))
                            }
                        });
                        return {
                            store: c,
                            hasData: f
                        }
                    }
                    ;
                    e.combineMutations = function(d, b) {
                        return a.reduce(Object.keys(b), function(a, d) {
                            var f;
                            null == a[d] && (a[d] = []);
                            a[d] = (f = a[d]).concat.apply(f, b[d]);
                            return a
                        }, d)
                    }
                    ;
                    e.processTreeChanges = function(d, b, f, c) {
                        var e = this
                          , l = d.nextSibling
                          , h = d.previousSibling;
                        f = d.meta;
                        d = f.addedNodes;
                        f = f.removedNodes;
                        f = void 0 === f ? [] : f;
                        var g = []
                          , m = [];
                        a.fastIterate(void 0 === d ? [] : d, function(d, f) {
                            e.indexer.reindexNodeTree(f, {
                                parentID: b,
                                callback: function(d, b) {
                                    if (d) {
                                        var c = a.combine({
                                            id: d.id,
                                            pa: d.parent,
                                            nm: d.name
                                        }, b === f && {
                                            pr: e.getIDForNode(h),
                                            nx: e.getIDForNode(l)
                                        });
                                        d.content && (c.ct = d.content);
                                        d.namespace && (c.ns = d.namespace);
                                        c.at = x.c.getAttributes(d.nativeNode);
                                        g.push(c)
                                    }
                                }
                            })
                        });
                        a.fastIterate(f, function(a, d) {
                            var f = {
                                id: e.indexer.removeNodeTree(d),
                                pa: b,
                                pr: e.getIDForNode(h),
                                nx: e.getIDForNode(l)
                            };
                            f.id && m.push(f)
                        });
                        if (0 === g.length && 0 === m.length)
                            return !1;
                        this.addChanges.apply(this, [c, "a"].concat(m));
                        this.addChanges.apply(this, [c, "b"].concat(g))
                    }
                    ;
                    e.processAttributesChanges = function(a, d, b, f) {
                        var c, e = a.meta;
                        a = e.name;
                        b = e.oldValue;
                        e = e.newValue;
                        var l = null === e || e === z;
                        this.addChanges(f, "c", {
                            id: d,
                            at: (c = {},
                            c[a] = {
                                n: e,
                                o: b,
                                r: l
                            },
                            c)
                        })
                    }
                    ;
                    e.processContentChanges = function(a, d, b, f) {
                        this.addChanges(f, "d", {
                            id: d,
                            ct: {
                                n: a.meta.newValue,
                                o: a.meta.oldValue
                            }
                        })
                    }
                    ;
                    e.getIDForNode = function(a) {
                        if (a) {
                            var d = this.indexer.getNodeId(a);
                            if (null != d)
                                return d;
                            this.indexer.reindexNodeTree(a);
                            return this.indexer.getNodeId(a)
                        }
                    }
                    ;
                    p()(c, [{
                        key: "changesObject",
                        get: function() {
                            return {
                                a: [],
                                b: [],
                                c: [],
                                d: []
                            }
                        }
                    }, {
                        key: "html",
                        get: function() {
                            return this.originalHTML
                        }
                    }]);
                    return c
                }(e.a);
                b.a = e
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            (function(a, g, p) {
                var e = c(6)
                  , m = c.n(e);
                e = c(17);
                var f = c.n(e);
                e = c(1);
                var d = c.n(e)
                  , l = c(10);
                e = function(b) {
                    function c(a) {
                        var f = b.call(this) || this;
                        d()(m()(f), "eventsList", ["mutation"]);
                        f.paused = !0;
                        f.element = a;
                        f.document = a.ownerDocument;
                        f.observer = null;
                        f.initMutationObserver();
                        return f
                    }
                    f()(c, b);
                    var e = c.prototype;
                    e.start = function() {
                        this.observer && this.observer.observe(this.element, {
                            childList: !0,
                            attributes: !0,
                            characterData: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    }
                    ;
                    e.stop = function() {
                        this.observer.disconnect()
                    }
                    ;
                    e.initMutationObserver = function() {
                        var d = this
                          , b = this.document.defaultView.MutationObserver;
                        b ? this.observer = new b(function() {
                            try {
                                for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
                                    b[f] = arguments[f];
                                d.processMutations.apply(d, b)
                            } catch (ka) {}
                        }
                        ) : a.warn("Can't access MutationObserver of a window", n)
                    }
                    ;
                    e.processMutations = function(a) {
                        var d = this;
                        a = g.toArray(a);
                        var b = {
                            added: new p,
                            removed: new p
                        };
                        a = g.reduceRight(a, function(a, f) {
                            var c = f.type
                              , e = f.target
                              , l = d.collectSummary(c, e, b, f);
                            null != l && a.unshift({
                                target: e,
                                type: c,
                                meta: l,
                                nextSibling: f.nextSibling,
                                previousSibling: f.previousSibling
                            });
                            return a
                        }, []);
                        0 < a.length && this.emit("mutation", a);
                        b.added.clear();
                        b.removed.clear()
                    }
                    ;
                    e.collectSummary = function(a, d, b, f) {
                        switch (a) {
                        case "childList":
                            d = g.reduce(f.addedNodes, function(a, d) {
                                !1 === b.added.has(d) && (a.push(d),
                                l.c.walk(d, function(a) {
                                    return b.added.add(a)
                                }));
                                return a
                            }, []);
                            f = g.reduce(f.removedNodes, function(a, d) {
                                !1 === b.removed.has(d) && (a.push(d),
                                l.c.walk(d, function(a) {
                                    return b.removed.add(a)
                                }));
                                return a
                            }, []);
                            if (0 < d.length || 0 < f.length)
                                return {
                                    addedNodes: d,
                                    removedNodes: f
                                };
                            break;
                        case "attributes":
                            a = f.attributeName;
                            f = f.oldValue;
                            var c = d.getAttribute(a);
                            if (f !== c)
                                return {
                                    name: a,
                                    oldValue: l.c.normalizeAttributeValue(d, a, f),
                                    newValue: l.c.normalizeAttributeValue(d, a, c)
                                };
                            break;
                        case "characterData":
                            if (f = f.oldValue,
                            d = d.textContent,
                            d !== f)
                                return {
                                    oldValue: f,
                                    newValue: d
                                }
                        }
                    }
                    ;
                    return c
                }(c(15).a);
                b.a = e
            }
            ).call(this, c(4)["default"], c(7)["default"], c(8)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(17)
                  , p = c.n(e);
                e = function(b) {
                    function c(d) {
                        void 0 === d && (d = []);
                        var f = b.call(this) || this;
                        a.fastIterate(d, function(a, d) {
                            f.use(d)
                        });
                        return f
                    }
                    p()(c, b);
                    var f = c.prototype;
                    f.main = function(a, b) {
                        "function" === typeof b && b()
                    }
                    ;
                    f.send = function(a) {
                        this.run(a, this.main.bind(this))
                    }
                    ;
                    return c
                }(c(34).a);
                b.a = e
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            a = c(1);
            var e = c.n(a)
              , g = c(3);
            c = function() {
                function a(a) {
                    var b = this;
                    e()(this, "_options", {
                        checkOnLoad: !1,
                        resetOnEnd: !1,
                        loopCheckTime: 50,
                        loopMaxNumber: 5,
                        baitClass: "adsbygoogle yap-reset ya_partner",
                        baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                        debug: !1
                    });
                    e()(this, "_var", {
                        version: "3.2.1",
                        bait: null,
                        checking: !1,
                        loop: null,
                        loopNumber: 0,
                        event: {
                            detected: [],
                            notDetected: []
                        }
                    });
                    a !== z && this.setOption(a);
                    a = function() {
                        D(function() {
                            !0 === b._options.checkOnLoad && (!0 === b._options.debug && b._log("onload-\x3eeventCallback", "A check loading is launched"),
                            null === b._var.bait && b._creatBait(),
                            D(function() {
                                b.check()
                            }, 1))
                        }, 1)
                    }
                    ;
                    g.a.addEventListener !== z ? g.a.addEventListener("load", a, !1) : g.a.attachEvent("onload", a)
                }
                var b = a.prototype;
                b._log = function() {}
                ;
                b.setOption = function(a, b) {
                    if (b !== z) {
                        var d = a;
                        a = {};
                        a[d] = b
                    }
                    for (var f in a)
                        this._options[f] = a[f],
                        !0 === this._options.debug && this._log("setOption", 'The option "' + f + '" he was assigned to "' + a[f] + '"');
                    return this
                }
                ;
                b._creatBait = function() {
                    var a = q.createElement("div");
                    a.setAttribute("class", this._options.baitClass);
                    a.setAttribute("style", this._options.baitStyle);
                    this._var.bait = g.a.document.body.appendChild(a);
                    this._var.bait = g.a.document.body.appendChild(a);
                    this._var.bait.offsetParent;
                    this._var.bait.offsetHeight;
                    this._var.bait.offsetLeft;
                    this._var.bait.offsetTop;
                    this._var.bait.offsetWidth;
                    this._var.bait.clientHeight;
                    this._var.bait.clientWidth;
                    !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
                }
                ;
                b._destroyBait = function() {
                    g.a.document.body.removeChild(this._var.bait);
                    this._var.bait = null;
                    !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
                }
                ;
                b.check = function(a) {
                    var b = this;
                    a === z && (a = !0);
                    !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === a ? "with a" : "without") + " loop");
                    if (!0 === this._var.checking)
                        return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"),
                        !1;
                    this._var.checking = !0;
                    null === this._var.bait && this._creatBait();
                    this._var.loopNumber = 0;
                    !0 === a && (this._var.loop = setInterval(function() {
                        b._checkBait(a)
                    }, this._options.loopCheckTime));
                    D(function() {
                        b._checkBait(a)
                    }, 1);
                    !0 === this._options.debug && this._log("check", "A check is in progress ...");
                    return !0
                }
                ;
                b.checkSync = function() {
                    return this._checkBait()
                }
                ;
                b._checkBait = function(a) {
                    var b = !1;
                    if (!g.a.document.body)
                        return !1;
                    null === this._var.bait && this._creatBait();
                    if (null !== g.a.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 === parseInt(this._var.bait.offsetHeight, 10) || 0 === parseInt(this._var.bait.offsetLeft, 10) || 0 === parseInt(this._var.bait.offsetTop, 10) || 0 === parseInt(this._var.bait.offsetWidth, 10) || 0 === parseInt(this._var.bait.clientHeight, 10) || 0 === parseInt(this._var.bait.clientWidth, 10))
                        b = !0;
                    if (g.a.getComputedStyle !== z) {
                        var d = g.a.getComputedStyle(this._var.bait, null);
                        !d || "none" !== d.getPropertyValue("display") && "hidden" !== d.getPropertyValue("visibility") || (b = !0)
                    }
                    !0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === b ? "positive" : "negative"));
                    !0 === a && (this._var.loopNumber++,
                    this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
                    if (!0 === b)
                        this._stopLoop(),
                        this._destroyBait(),
                        this.emitEvent(!0),
                        !0 === a && (this._var.checking = !1);
                    else if (null === this._var.loop || !1 === a)
                        this._destroyBait(),
                        this.emitEvent(!1),
                        !0 === a && (this._var.checking = !1);
                    return b
                }
                ;
                b._stopLoop = function() {
                    clearInterval(this._var.loop);
                    this._var.loop = null;
                    this._var.loopNumber = 0;
                    !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
                }
                ;
                b.emitEvent = function(a) {
                    !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === a ? "positive" : "negative") + " detection was called");
                    a = this._var.event[!0 === a ? "detected" : "notDetected"];
                    for (var b in a)
                        if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(b, 10) + 1) + "/" + a.length),
                        a.hasOwnProperty(b))
                            a[b]();
                    !0 === this._options.resetOnEnd && this.clearEvent();
                    return this
                }
                ;
                b.clearEvent = function() {
                    this._var.event.detected = [];
                    this._var.event.notDetected = [];
                    !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
                }
                ;
                b.on = function(a, b) {
                    this._var.event[!0 === a ? "detected" : "notDetected"].push(b);
                    !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === a ? "detected" : "notDetected") + '" was added');
                    return this
                }
                ;
                b.onDetected = function(a) {
                    return this.on(!0, a)
                }
                ;
                b.onNotDetected = function(a) {
                    return this.on(!1, a)
                }
                ;
                return a
            }();
            b.a = c
        }
        , function(a, b, c) {
            a = function() {
                function a(a, b) {
                    void 0 === a && (a = "body");
                    void 0 === b && (b = {});
                    this.root = "string" === typeof a ? q.querySelector(a) : a;
                    this.ctx = b;
                    var c = -1 !== navigator.appVersion.indexOf("Mac") ? "macos" : "other";
                    this.OS = c;
                    this.modifierCodes = {
                        91: "super",
                        93: "super",
                        224: "super",
                        18: "alt",
                        17: "ctrl",
                        16: "shift",
                        9: "tab",
                        8: "backspace",
                        46: "delete"
                    };
                    this.keyOrder = {
                        "super": 1,
                        ctrl: 2,
                        alt: 3,
                        shift: 4,
                        tab: 5,
                        "delete": 6,
                        backspace: 6
                    };
                    this.singleKeys = [4, 9, 8, 32, 37, 38, 39, 40, 46];
                    this.keyDict = {
                        macos: {
                            91: "\x26#8984;",
                            93: "\x26#8984;",
                            224: "\x26#8984;",
                            18: "\x26#8997;",
                            17: "\x26#8963;",
                            16: "\x26#8679;",
                            9: "\x26#8677;",
                            8: "\x26#9003;",
                            46: "\x26#9003;"
                        },
                        other: {
                            91: "\x26#xff;",
                            93: "\x26#xff;",
                            224: "\x26#xff;",
                            18: "Alt",
                            17: "Ctrl",
                            16: "Shift",
                            9: "Tab",
                            8: "Backspace",
                            46: "Delete"
                        },
                        multi: {
                            32: "SPACEBAR",
                            37: "\x26larr;",
                            38: "\x26uarr;",
                            39: "\x26rarr;",
                            40: "\x26darr;",
                            13: "Enter"
                        }
                    };
                    this.initialModifier = null;
                    this.modifierPressed = 0;
                    this.events = [];
                    this.modifiers = {};
                    this.captors = [];
                    this.filters = [];
                    this.keyStroke = [];
                    this.holding = [];
                    this.initHandler()
                }
                var b = a.prototype;
                b.onCapture = function(a) {
                    "function" === typeof a && 0 > this.captors.indexOf(a) && this.captors.push(a)
                }
                ;
                b.addElementFilter = function(a) {
                    "function" === typeof a && 0 > this.captors.indexOf(a) && this.filters.push(a)
                }
                ;
                b.applyFilters = function(a) {
                    var b = this;
                    return this.filters.reduce(function(c, f) {
                        return !0 === c ? c && f.call(b, a) : !1
                    }, !0)
                }
                ;
                b.initHandler = function() {
                    this.attachEvent("keydown", this.keydownHandler);
                    this.attachEvent("keyup", this.keyupHandler)
                }
                ;
                b.getKeystroke = function(a) {
                    var b = this
                      , c = this.keyOrder;
                    return a.map(function(a) {
                        var d = a.keyCode
                          , f = b.modifierCodes[a.keyCode]
                          , c = b.getKeySymbol(a);
                        return {
                            id: d,
                            key: b.getKeySymbol(a),
                            isMeta: !!f && /^&#/.test(c),
                            modifier: f
                        }
                    }).sort(function(a, d) {
                        return (c[a.modifier] || 100) - (c[d.modifier] || 100)
                    })
                }
                ;
                b.getKeySymbol = function(a) {
                    return this.keyDict[this.OS][a.keyCode] || this.keyDict.multi[a.keyCode] || String.fromCharCode(a.keyCode)
                }
                ;
                b.startCapture = function(a) {
                    this.initialModifier = a;
                    this.pushKey(a);
                    this.cancelCapture()
                }
                ;
                b.sendKeys = function(a, b) {
                    var c = this;
                    void 0 === b && (b = !1);
                    if (1 < a.length || b) {
                        var f = this.getKeystroke(a);
                        this.captors.forEach(function(a) {
                            return a.call(c, f, b)
                        })
                    }
                }
                ;
                b.endCapture = function() {
                    var a = this;
                    this._keyStroke = this.keyStroke.slice(0);
                    clearTimeout(this._endCapture);
                    this._endCapture = D(function() {
                        a.sendKeys(a._keyStroke)
                    })
                }
                ;
                b.pushKey = function(a) {
                    !1 === this.isCaptured(a) && this.keyStroke.push(a)
                }
                ;
                b.removeKey = function(a) {
                    this.keyStroke = this.keyStroke.reduce(function(b, c) {
                        c.keyCode !== a.keyCode && b.push(c);
                        return b
                    }, [])
                }
                ;
                b.cancelCapture = function() {
                    this.isModifierPressed() ? D(this.cancelCapture.bind(this), 100) : this.keyStroke.length = 0
                }
                ;
                b.reset = function() {
                    var a = this;
                    this._reset = D(function() {
                        a.resetImmediate()
                    }, 300)
                }
                ;
                b.resetImmediate = function() {
                    this.modifierPressed = 0;
                    this.keyStroke.length = 0;
                    this.holding.length = 0;
                    clearTimeout(this._endCapture)
                }
                ;
                b.cancelReset = function() {
                    clearTimeout(this._reset)
                }
                ;
                b.keydownHandler = function(a) {
                    this.applyFilters(a.target) && !1 === this.isInputWithShift(a) && !a.repeat && 0 > this.held(a.keyCode) && (this.holding.push(a.keyCode),
                    this.isModifier(a.keyCode) && !this.isModifierPressed() ? (this.modifierPressed += 1,
                    this.startCapture(a),
                    this.reset()) : this.isModifierPressed() ? (this.cancelReset(),
                    this.pushKey(a),
                    this.endCapture()) : (this.resetImmediate(),
                    this.pushKey(a)))
                }
                ;
                b.keyupHandler = function(a) {
                    if (this.applyFilters(a.target)) {
                        var b = this.isModifier(a.keyCode)
                          , c = this.held(a.keyCode);
                        0 <= c && this.holding.splice(c, 1);
                        b && this.isModifierPressed() && (this.modifierPressed = 0,
                        this.holding.length = 0);
                        1 === this.keyStroke.length && (b = this.keyStroke[0],
                        0 <= this.singleKeys.indexOf(b.keyCode) && (this.sendKeys([b], !0),
                        this.resetImmediate()));
                        this.removeKey(a);
                        clearTimeout(this._endCapture)
                    }
                }
                ;
                b.attachEvent = function(a, b) {
                    var c = this;
                    if ("function" === typeof b) {
                        var f = this.ctx.attachEvent(this.ctx.document, a, function(a) {
                            (c.root && c.root.contains(a.target) || a.target === c.root) && c.ctx.errorLogger(function() {
                                b.call(c, a)
                            })
                        }, !0);
                        this.events.push(function() {
                            c.ctx.removeEvent(f)
                        })
                    }
                }
                ;
                b.held = function(a) {
                    return this.holding.indexOf(a)
                }
                ;
                b.isModifier = function(a) {
                    return null != this.modifierCodes[a]
                }
                ;
                b.isModifierPressed = function() {
                    return 0 < this.modifierPressed
                }
                ;
                b.isInitialModifier = function(a) {
                    return this.initialModifier ? this.initialModifier.keyCode === a.keyCode : !1
                }
                ;
                b.isCaptured = function(a) {
                    return null != this.keyStroke.reduce(function(b, c) {
                        null == b && c.keyCode === a.keyCode && (b = c);
                        return b
                    }, null)
                }
                ;
                b.isInputWithShift = function(a) {
                    return "INPUT" === a.target.nodeName ? a.shiftKey || 32 === a.keyCode || "shift" === this.modifierCodes[a.keyCode] : !1
                }
                ;
                b.destroy = function() {
                    var a;
                    for (this.resetImmediate(); a = this.events.pop(); )
                        a();
                    this.filters.length = 0
                }
                ;
                return a
            }();
            b.a = a
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(1)
                  , p = c.n(e)
                  , h = c(15)
                  , m = c(31)
                  , f = c(2)
                  , d = c(16)
                  , l = c(0);
                e = "HTMLMediaElement"in n;
                var x = {}
                  , y = l.IterableUtils.toList(["addEventListener", "removeEventListener"])
                  , k = function() {
                    function b() {
                        p()(this, "originalDescriptors", new a);
                        p()(this, "mocked", !1);
                        p()(this, "events", new h.a(["setter", "method"]));
                        f.ObjectUtils.assign(x, d.Tools.apiMock(HTMLMediaElement))
                    }
                    var c = b.prototype;
                    c.descriptor = function(a, d) {
                        return Object.getOwnPropertyDescriptor(a, d)
                    }
                    ;
                    c.mock = function() {
                        var a = this
                          , d = HTMLMediaElement.prototype
                          , b = this;
                        l.IterableUtils.forof(x.properties, function(c) {
                            if (y.has(c))
                                return !0;
                            var e = a.descriptor(d, c);
                            if (e) {
                                a.originalDescriptors.set(c, e);
                                var l = f.ObjectUtils.combine(e);
                                e.get && (l.get = function() {
                                    return e.get.call(this)
                                }
                                );
                                e.set && (l.set = function(a) {
                                    b.setterInvoked(this, c, a);
                                    return e.set.call(this, a)
                                }
                                );
                                Object.defineProperty(d, c, l)
                            }
                        });
                        l.IterableUtils.forof(x.methods, function(f) {
                            if (y.has(f))
                                return !0;
                            var c = a.descriptor(d, f);
                            a.originalDescriptors.set(f, c);
                            Object.defineProperty(d, f, {
                                configurable: !0,
                                value: function() {
                                    for (var a, d = arguments.length, e = Array(d), l = 0; l < d; l++)
                                        e[l] = arguments[l];
                                    b.methodInvoked(this, f, e);
                                    return (a = c.value).call.apply(a, [this].concat(e))
                                }
                            })
                        });
                        this.mocked = !0
                    }
                    ;
                    c.remove = function() {
                        this.events.off();
                        var a = HTMLMediaElement.prototype;
                        l.IterableUtils.forof(this.originalDescriptors, function(d, b) {
                            delete a[b];
                            Object.defineProperty(a, b, d)
                        });
                        this.mocked = !1
                    }
                    ;
                    c.setterInvoked = function(a, d, b) {
                        var f = this;
                        this.mocked && D(function() {
                            f.send(a, "setter", {
                                name: d,
                                value: b
                            })
                        })
                    }
                    ;
                    c.methodInvoked = function(a, d, b) {
                        var f = this;
                        this.mocked && D(function() {
                            b = b.map(function(a) {
                                return a instanceof Image ? Object(m.b)(a) : a
                            });
                            f.send(a, "method", {
                                name: d,
                                args: b
                            })
                        })
                    }
                    ;
                    c.send = function(a, d, b) {
                        this.events.emit(d, f.ObjectUtils.combine(b, {
                            media: a
                        }))
                    }
                    ;
                    return b
                }();
                p()(k, "supported", e);
                b.a = k
            }
            ).call(this, c(12)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                c.d(b, "a", function() {
                    return e
                });
                var e = function(b, c) {
                    void 0 === c && (c = "body");
                    return new a(function(a) {
                        null == b.querySelector(c) || q.hidden || q.msHidden || q.webkitHidden ? function d() {
                            null == b.querySelector(c) || q.hidden || q.msHidden || q.webkitHidden ? D(d, 100) : a()
                        }() : a()
                    }
                    )
                }
            }
            ).call(this, c(22).Promise)
        }
        , function(a, b, c) {
            (function(a, g) {
                var e = c(14)
                  , h = c.n(e);
                e = c(6);
                var m = c.n(e);
                e = c(17);
                var f = c.n(e);
                e = c(1);
                var d = c.n(e)
                  , l = c(10);
                e = c(15);
                var x = c(34)
                  , y = c(0)
                  , k = c(2)
                  , r = c(23)
                  , n = c(16)
                  , q = c(4)
                  , B = "attributes namespace content parent next prev".split(" ");
                e = function(b) {
                    function c(f, c) {
                        var e = (void 0 === c ? {} : c).disabled;
                        var l = void 0 === e ? !1 : e;
                        e = b.call(this) || this;
                        d()(m()(e), "eventsList", ["initialIndex:once:memory", "add", "remove", "node"]);
                        e.disabled = l;
                        e.nextID = 0;
                        e.closed = !1;
                        e.dom = new a;
                        e.index = new a;
                        e.initialDOM = new g;
                        e.middleware = new x.b;
                        e.document = f;
                        e.quickAccess = {};
                        return e
                    }
                    f()(c, b);
                    var e = c.prototype;
                    e.initialIndex = function() {
                        this.fastIndex(this.document.documentElement)
                    }
                    ;
                    e.use = function(a) {
                        this.middleware.use(a)
                    }
                    ;
                    e.initDOMCache = function() {
                        this.domCache = new a(this.index)
                    }
                    ;
                    e.writeCache = function(a, d, b) {
                        this.domCache && this.domCache.set(a, {
                            node: d,
                            data: b
                        })
                    }
                    ;
                    e.findCache = function(a) {
                        if (this.domCache)
                            return this.domCache.get(a)
                    }
                    ;
                    e.addQuckAccessItem = function(a, d) {
                        null == this.quickAccess[a] && null == this[a] && (this.quickAccess[a] = d,
                        Object.defineProperty(this, a, {
                            get: function() {
                                return this.quickAccess[a]
                            }
                        }))
                    }
                    ;
                    e.addToIndex = function(a, d, b) {
                        void 0 === b && (b = null);
                        if (a = this.middleware.run(a)) {
                            this.emit("node", a);
                            var f = a._DOMIndexerInfo;
                            if (!1 === this.dom.has(a) || null == f)
                                b = this.generateNodeID(b),
                                f = {
                                    id: b,
                                    name: a.tagName || a.nodeName,
                                    parent: d,
                                    nativeNode: a,
                                    namespace: l.c.getNamespace(a),
                                    attributes: l.c.getAttributes(a),
                                    content: l.c.getContent(a)
                                },
                                this.domCache && this.writeCache(b, a, f),
                                this.dom.set(a, f),
                                this.index.set(b, a),
                                a._DOMIndexerID = b,
                                a._DOMIndexerInfo = f;
                            this.emit("add", f);
                            return f
                        }
                        q["default"].warn("Can't index undefined node")
                    }
                    ;
                    e.clear = function(a) {
                        void 0 === a && (a = !0);
                        y.IterableUtils.forof(y.IterableUtils.keys(this.dom), function(a) {
                            y.IterableUtils.forof(["_DOMIndexerID", "_DOMIndexerInfo"], function(d) {
                                a[d] = null;
                                delete a[d]
                            })
                        });
                        a && (this.document = null);
                        this.dom.clear();
                        this.index.clear()
                    }
                    ;
                    e.dump = function() {
                        return {
                            dom: new a(this.dom),
                            index: new a(this.index)
                        }
                    }
                    ;
                    e.dumpRestore = function(a) {
                        k.ObjectUtils.assign(this, a);
                        this.document.body.innerHTML = ""
                    }
                    ;
                    e.findByID = function(a) {
                        return this.find(a)
                    }
                    ;
                    e.findByNode = function(a) {
                        return this.get(a)
                    }
                    ;
                    e.find = function(a) {
                        if (null != a) {
                            var d = this.index.get(a);
                            return null == d && this.domCache ? (a = this.findCache(a)) && a.node : d
                        }
                    }
                    ;
                    e.findInfo = function(a) {
                        return this.dom.get(this.find(a))
                    }
                    ;
                    e.generateNodeID = function(a) {
                        return null != a ? a : this.nextID++
                    }
                    ;
                    e.get = function(a) {
                        return this.dom.get(a)
                    }
                    ;
                    e.getNodeId = function(a) {
                        return (a = this.get(a)) && a.id
                    }
                    ;
                    e.getIndexedNodeId = function(a) {
                        var d = this.getNodeId(a);
                        return null == d ? (this.reindexNodeTree(a),
                        this.getNodeId(a)) : d
                    }
                    ;
                    e.getNodesIds = function(a) {
                        var d = this;
                        return y.IterableUtils.toArray(a).map(function(a) {
                            return {
                                id: d.getNodeId(a),
                                nodes: d.getNodesIds(a.childNodes)
                            }
                        })
                    }
                    ;
                    e.reindexNodeTree = function(a, d) {
                        var b = this
                          , f = void 0 === d ? {} : d
                          , c = f.returnAll;
                        c = void 0 === c ? !1 : c;
                        var e = f.callback
                          , h = void 0 === e ? null : e;
                        f = f.parentID;
                        var g = void 0 === f ? null : f;
                        if (a) {
                            var m = [];
                            if (a.parentNode || g)
                                h = r.FunctionUtils.toFunction(h),
                                l.c.each(a, function(a, d) {
                                    g = d.parentNode && b.getNodeId(d.parentNode) || g;
                                    if (null != g) {
                                        var f = b.addToIndex(d, g);
                                        m.push(f);
                                        h(f, d)
                                    }
                                });
                            return c ? m : a._DOMIndexerID
                        }
                    }
                    ;
                    e.removeFromIndex = function(a) {
                        var d = this.getNodeId(a);
                        this.dom["delete"](a);
                        this.index["delete"](d);
                        y.IterableUtils.toArray(a.childNodes).map(this.removeFromIndex.bind(this));
                        this.emit("remove", a);
                        return d
                    }
                    ;
                    e.replaceBody = function(a) {
                        this.removeNodeTree(this.BODY.id);
                        var d = this.BODY.nativeNode;
                        delete d._DOMIndexerInfo;
                        delete d._DOMIndexerID;
                        this.addToIndex(d, this.HTML.id, a)
                    }
                    ;
                    e.removeNodeTree = function(a, d) {
                        var b = this;
                        void 0 === d && (d = !1);
                        if (a) {
                            var f = []
                              , c = a._DOMIndexerID;
                            l.c.each(a, function(a, d) {
                                var c = d._DOMIndexerID;
                                b.dom["delete"](d);
                                b.index["delete"](c);
                                b.emit("remove", d);
                                f.push(c)
                            });
                            return d ? f : c
                        }
                    }
                    ;
                    e.fastIndex = function(a) {
                        if (!this.disabled) {
                            var d = this.addToIndex.bind(this)
                              , b = this.initialDOM.add.bind(this.initialDOM);
                            l.c.each(a, function(a, f) {
                                var c = d(f, f.parentNode && f.parentNode._DOMIndexerID);
                                b(k.ObjectUtils.copyObject(c))
                            });
                            this.initialDOM.forEach(function(a) {
                                var d = a.nativeNode
                                  , b = d.previousSibling;
                                d = d.nextSibling;
                                b && b._DOMIndexerID && (a.prev = b._DOMIndexerID);
                                d && d._DOMIndexerID && (a.next = d._DOMIndexerID)
                            })
                        }
                    }
                    ;
                    e.isIndexed = function(a) {
                        return this.dom.has(a)
                    }
                    ;
                    e.showMissingNodes = function(a) {
                        var d = this;
                        void 0 === a && (a = !1);
                        a && n.Tools.measure("Show missing nodes", function() {
                            var a = l.c.all(d.document.documentElement);
                            y.IterableUtils.fastIterate(a, function(a, b) {
                                !1 === d.dom.has(b) && q["default"].log("Missing node", b)
                            });
                            q["default"].log("Index diff: [DOM: " + a.length + "] [INDEX: " + d.dom.size + "] [DIFF: " + (d.dom.size - a.length) + "]")
                        })
                    }
                    ;
                    e.getCurrentHtml = function() {
                        var a = y.IterableUtils.map(this.dom, function(a) {
                            return a[1]
                        });
                        return c.simplify(a)
                    }
                    ;
                    e.getDocument = function() {
                        return this.document
                    }
                    ;
                    e.setDocument = function(a) {
                        this.document = a
                    }
                    ;
                    h()(c, [{
                        key: "HTML",
                        get: function() {
                            return this.document.documentElement._DOMIndexerInfo
                        }
                    }, {
                        key: "BODY",
                        get: function() {
                            return this.document.body._DOMIndexerInfo
                        }
                    }, {
                        key: "html",
                        get: function() {
                            return c.simplify(this.initialDOM)
                        }
                    }]);
                    return c
                }(e.a);
                d()(e, "simplify", function(a) {
                    return y.IterableUtils.map(a, function(a) {
                        var d = {
                            id: a.id,
                            name: a.name.toLowerCase()
                        };
                        y.IterableUtils.forof(B, function(b) {
                            null != a[b] && (d[b] = a[b])
                        });
                        return d
                    })
                });
                d()(e, "toNodesTree", function(a) {
                    var d = {};
                    a = y.IterableUtils.toArray(a);
                    y.IterableUtils.forof(a, function(a) {
                        if (null == d[a.id]) {
                            var b = k.ObjectUtils.combine(a);
                            d[a.id] = b;
                            null != a.parent && (a = d[a.parent]) && (a.children = a.children || [],
                            a.children.push(b))
                        }
                    });
                    return d[0]
                });
                b.a = e
            }
            ).call(this, c(12)["default"], c(8)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(5)
                  , p = c.n(e);
                e = c(14);
                var h = c.n(e);
                e = c(1);
                var m = c.n(e)
                  , f = c(4)
                  , d = c(11);
                e = function() {
                    function b(d) {
                        void 0 === d && (d = n);
                        m()(this, "_cancelMainHandler", null);
                        m()(this, "subscriptions", {});
                        this.window = a.isIframe(d) ? d.parent : d;
                        d.Ya || (d.Ya = {});
                        d.Ya._metrika || (d.Ya._metrika = {});
                        if (d.Ya._metrika._m)
                            return d.Ya._metrika._m;
                        this.targetWindow = d;
                        d.Ya._metrika._m = this;
                        d = this.targetWindow.Ya._metrika;
                        var b = this.targetWindow.Ya._metrika.fi || "";
                        b = /^ym-/.test(b) ? b : "ym-" + a.guid();
                        d.fi = b;
                        this.identifier = this.targetWindow.Ya._metrika.fi;
                        this._handleMessages();
                        return this
                    }
                    var c = b.prototype;
                    c.send = function(a, d) {
                        var b = this, c = void 0 === d ? {} : d, e = c.data, l = c.onResponse, h = c.onTimeout, g = c.receiver, m = c.awaitResponse, p = c.timeoutTime, x = null, y = !1, k = !1, J, n = [], q = Date.now();
                        "function" === typeof l && (y = !0,
                        x = a + "." + this.timestamp,
                        this.listenOnce(function(a) {
                            var d = a.data
                              , c = d._ym_cancel_response
                              , e = d.data;
                            if (d.type === x)
                                c ? f["default"].warn("Seems like you forgot to call `answer` in a message handler. This message requires response.") : (k = !0,
                                l(e, {
                                    origin: a.origin,
                                    location: b.targetWindow.location.href,
                                    identifier: b.identifier
                                }),
                                clearTimeout(J));
                            else
                                return !1
                        }, this.targetWindow));
                        x && n.push("response:" + x);
                        (function Ha() {
                            b._sendMessage({
                                data: e,
                                type: a,
                                target: b._getReceiver(g),
                                flags: n
                            });
                            if (m && y) {
                                var d = p;
                                void 0 === d && (d = 3E4);
                                d = Date.now() - q >= d;
                                !1 === k && (d ? "function" === typeof h && h() : J = D(Ha, 100))
                            }
                        }
                        )()
                    }
                    ;
                    c.subscribe = function(a, d) {
                        var b = this._createSubscriptionsGroup(a);
                        if (!1 === this._isSubscribed(b, d))
                            b.push(d);
                        else
                            throw Error("This callback has already been subscribed to " + a);
                    }
                    ;
                    c.unsubscribe = function(d, b) {
                        var f = this._getSubcribers(d);
                        !0 === this._isSubscribed(f, b) && a.removeFromArray(f, b)
                    }
                    ;
                    c.unsubscribeAll = function(a) {
                        this._getSubcribers(a).splice(0)
                    }
                    ;
                    c.listen = function(a) {
                        var d = this;
                        this._attachEvent("message", a);
                        return function() {
                            return d._removeEvent("message", a)
                        }
                    }
                    ;
                    c.listenOnce = function(a, d) {
                        var b = this;
                        d = d || this.window;
                        var f = function(d) {
                            !1 !== a(d) && c()
                        }
                          , c = function() {
                            b._removeEvent("message", f, d)
                        };
                        this._attachEvent("message", f, d);
                        return c
                    }
                    ;
                    c._attachEvent = function(a, d, b) {
                        var f = this;
                        (b || this.window).addEventListener(a, d);
                        return function() {
                            return f._removeEvent(a, d)
                        }
                    }
                    ;
                    c._createSubscriptionsGroup = function(a) {
                        return this._getSubcribers(a)
                    }
                    ;
                    c._isSubscribed = function(a, d) {
                        return d && 0 <= a.indexOf(d)
                    }
                    ;
                    c._removeEvent = function(a, d, b) {
                        (b || this.window).removeEventListener(a, d)
                    }
                    ;
                    c._getSubcribers = function(a) {
                        this.subscriptions[a] || (this.subscriptions[a] = []);
                        return this.subscriptions[a]
                    }
                    ;
                    c._sendMessage = function(a) {
                        var d = void 0 === a ? {} : a;
                        a = d.target;
                        var b = d.flags;
                        b = void 0 === b ? [] : b;
                        d = {
                            _ym_messenger: !0,
                            _ym_identifier: this.identifier,
                            type: d.type,
                            data: d.data
                        };
                        if (b && 0 < b.length)
                            for (var f = 0, c = b.length; f < c; f++) {
                                var e = b[f].split(":");
                                d["_ym_" + e[0]] = e[1] || !0
                            }
                        this._postMessage(d, a)
                    }
                    ;
                    c._postMessage = function(a, d) {
                        (d || this.window).postMessage(a, "*")
                    }
                    ;
                    c._getReceiver = function(a) {
                        if (null != a) {
                            if (a.postMessage)
                                return a;
                            if (a.contentWindow)
                                return a.contentWindow
                        }
                    }
                    ;
                    c._handleMessages = function() {
                        var a = this;
                        if (null == this._cancelMainHandler) {
                            var d = this._attachEvent("message", function(d) {
                                var b = d.data || {}
                                  , c = b._ym_response
                                  , e = b._ym_identifier
                                  , l = b.data
                                  , h = b.type;
                                if (!0 === b._ym_messenger && h && !/\.([0-9]+)$/.test(h)) {
                                    b = a._getSubcribers(h) || [];
                                    var g = a._findIframe(d.source, e);
                                    if (null === g)
                                        f["default"].warn("Cannot find iframe with id " + e);
                                    else {
                                        var m = {
                                            id: e,
                                            sender: g,
                                            data: l,
                                            type: h
                                        };
                                        d = 0;
                                        for (e = b.length; d < e; d++) {
                                            var x = b[d];
                                            c ? function() {
                                                var d = {
                                                    type: c,
                                                    target: g.contentWindow
                                                }
                                                  , b = 2 === x.length
                                                  , e = null
                                                  , l = function(f) {
                                                    clearTimeout(e);
                                                    f = b ? p()({}, d, {
                                                        data: f
                                                    }) : p()({}, d, {
                                                        flags: ["cancel_response"]
                                                    });
                                                    a._sendMessage(f)
                                                };
                                                b ? (e = D(function() {
                                                    f["default"].warn("Response has been canceled because `answer` was never called");
                                                    b = !1;
                                                    l()
                                                }, 2E3),
                                                x(m, l)) : (x(m),
                                                l())
                                            }() : x(m)
                                        }
                                    }
                                }
                            }, this.targetWindow);
                            this._cancelMainHandler = function() {
                                d();
                                a._cancelMainHandler = null
                            }
                        }
                    }
                    ;
                    c._findIframe = function(b, f) {
                        var c = this
                          , e = [].slice.call(q.querySelectorAll("iframe"));
                        return a.find(e, function(a) {
                            if (a.contentWindow === b)
                                return !0;
                            if (d.DOMUtils.isBlankOrSameOriginIframe(a, c.win))
                                try {
                                    return a.contentWindow.Ya._metrika.fi === f
                                } catch (B) {}
                            return !1
                        }) || null
                    }
                    ;
                    h()(b, [{
                        key: "timestamp",
                        get: function() {
                            return a.now()
                        }
                    }]);
                    return b
                }();
                b.a = e
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(5)
                  , p = c.n(e)
                  , h = c(4);
                e = function() {
                    function b(a, b, f) {
                        void 0 === a && (a = n);
                        void 0 === b && (b = q);
                        Object.defineProperty(this, "_indexer", {
                            value: f
                        });
                        this.window = a;
                        this.document = b;
                        this.indexer = this._indexer;
                        this.selection = this.window.getSelection()
                    }
                    var f = b.prototype;
                    f.getPageSelection = function() {
                        var a = this.getSelection();
                        if (a) {
                            var b = this.indexer.getNodeId(a.startNode)
                              , f = this.indexer.getNodeId(a.endNode);
                            this.restoreIndexer();
                            return p()({}, a, {
                                startNode: b,
                                endNode: f
                            })
                        }
                    }
                    ;
                    f.restorePageSelection = function(d) {
                        if (d) {
                            var b = this.indexer.find(d.startNode)
                              , f = this.indexer.find(d.endNode);
                            this.restoreIndexer();
                            a.isDOMNode(b) && a.isDOMNode(f) && this.restoreSelection(p()({}, d, {
                                startNode: b,
                                endNode: f
                            }))
                        }
                    }
                    ;
                    f.getSelection = function() {
                        if (0 < this.selection.rangeCount) {
                            var a = this.selection.getRangeAt(0) || this.document.createRange();
                            return {
                                start: a.startOffset,
                                end: a.endOffset,
                                startNode: a.startContainer,
                                endNode: a.endContainer
                            }
                        }
                    }
                    ;
                    f.restoreSelection = function(a) {
                        var d = a.start
                          , b = a.end
                          , f = a.startNode;
                        a = a.endNode;
                        try {
                            var c = f.ownerDocument
                              , e = c.defaultView.getSelection()
                              , g = c.createRange();
                            g.setStart(f, d);
                            g.setEnd(a, b);
                            e.removeAllRanges();
                            e.addRange(g)
                        } catch (fa) {
                            h["default"].log({
                                start: {
                                    startNode: f,
                                    start: d
                                },
                                end: {
                                    endNode: a,
                                    end: b
                                }
                            }, fa)
                        }
                    }
                    ;
                    f.getSelectionFor = function(a) {
                        if (/text|search|password|tel|url/.test(a.type))
                            return {
                                start: a.selectionStart,
                                end: a.selectionEnd
                            }
                    }
                    ;
                    f.restoreSelectionFor = function(a, b) {
                        b && null != b.start && null != b.end && /text|search|password|tel|url/.test(a.type) && (a.selectionStart = b.start,
                        a.selectionEnd = b.end)
                    }
                    ;
                    f.clear = function() {
                        var a = this.document.createRange();
                        a.setStart(this.document.body, 0);
                        a.setEnd(this.document.body, 0);
                        this.selection.removeAllRanges();
                        this.selection.addRange(a)
                    }
                    ;
                    f.setIndexer = function(a) {
                        a !== this.indexer && (this.indexer = a)
                    }
                    ;
                    f.restoreIndexer = function() {
                        this.indexer = this._indexer
                    }
                    ;
                    return b
                }();
                b.a = e
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(3)
                  , p = c(4)
                  , h = {
                    doNotTrack: function() {
                        return !0 !== navigator.doNotTrack
                    },
                    localStorage: function() {
                        try {
                            return e.a.localStorage.setItem("test", "value"),
                            e.a.localStorage.removeItem("test"),
                            !0
                        } catch (m) {
                            return !1
                        }
                    },
                    defineProperty: function() {
                        try {
                            return Object.defineProperty({}, "test", {
                                value: 123
                            }),
                            !0
                        } catch (m) {
                            return !1
                        }
                    }
                };
                b.a = function() {
                    a.forin(h, function(a) {
                        if (!h[a]())
                            return p["default"].log("Feature not supported: " + a),
                            !1
                    });
                    return !0
                }()
            }
            ).call(this, c(7)["default"])
        }
        , function(a, b, c) {
            (function(a) {
                var e = c(33)
                  , p = c.n(e);
                e = c(12);
                var h = c(0)
                  , m = c(18)
                  , f = c(2)
                  , d = {
                    items: {
                        extnameFinder: /\.(css|png|gif|svg|jp[e]?g|mp4|ogv|webm|webp|mp3|ico|woff|ttf|eot)/gi,
                        urlPartsFinder: /([?./]*)/gi,
                        anchorFinder: /^(?!#).*([#]+)/g,
                        cssURLFinder: /url\(['"]?((?!#|data|blob))([^()'"]+)['"]?\)/g,
                        URLImportFinder: /@import ['"]((?!#|data|blob)([^()'"]+))['"]/g,
                        protocolMissing: /^(?!http[s]?).*/,
                        dataurlTest: /^(data|blob):/,
                        selectorTest: /^#(.*)/,
                        protocolIncomplete: /^(http[s]?)?(:?\/\/)/,
                        resourceFinder: /{{RESOURCE_URL}}/,
                        proxiedURL: /proxy([^?]*)\?url=/i,
                        relativePath: /^(?!\\)/
                    },
                    get: function(a) {
                        return this.items[a]
                    },
                    reset: function(a) {
                        this.items[a].lastIndex = 0
                    },
                    test: function(a, d) {
                        var b = this.get(a);
                        this.reset(a);
                        return b.test(d)
                    },
                    resetMultiple: function() {
                        for (var a, d = this, b = arguments.length, f = Array(b), c = 0; c < b; c++)
                            f[c] = arguments[c];
                        f = (a = []).concat.apply(a, f);
                        h.IterableUtils.fastIterate(f, function(a, b) {
                            return d.reset(b)
                        })
                    },
                    resetAll: function() {
                        this.resetMultiple(h.IterableUtils.keys(this.items))
                    }
                }
                  , l = {
                    location: null,
                    proxy: null,
                    base: null,
                    window: "object" === typeof n && n || null,
                    document: "object" === typeof q && q || null
                }
                  , x = new e["default"]
                  , y = new e["default"]
                  , k = function(a) {
                    return "string" === typeof a ? URL.parse ? URL.parse(a) : new URL(a) : a
                }
                  , r = function(a) {
                    return y.get(a) || a
                }
                  , Q = function() {
                    var a = k(function() {
                        if (l.base)
                            return l.base;
                        if (l.document) {
                            var a = l.document.querySelector("base[href]");
                            return a ? a.href : l.location
                        }
                        return l.location
                    }());
                    return l.location = {
                        host: a.host,
                        protocol: a.protocol,
                        path: (a.pathname || a.path || "").replace(/[^/]*$/, "")
                    }
                }
                  , fa = [];
                e = Object.defineProperties({
                    regexp: d,
                    patchCSS: function(a, b) {
                        var f = this
                          , c = (void 0 === b ? {} : b).location
                          , e = void 0 === c ? null : c
                          , l = {
                            cssURLFinder: function(a) {
                                return "url('" + a + "')"
                            },
                            URLImportFinder: function(a) {
                                return '@import "' + a + '"'
                            }
                        };
                        ["cssURLFinder", "URLImportFinder"].forEach(function(a) {
                            return d.reset(a)
                        });
                        return ["cssURLFinder", "URLImportFinder"].reduce(function(a, b) {
                            return f.patchURLS(a, d.get(b), e, l[b])
                        }, a)
                    },
                    patchURLS: function(a, d, b, f) {
                        var c = this
                          , e = a
                          , l = function(a) {
                            return "function" === typeof a ? a : function(a) {
                                return a
                            }
                        }(f);
                        "string" === typeof a && a.match(d) && (e = a.replace(d, function() {
                            var a = c.patchURL(2 >= arguments.length ? z : arguments[2], {
                                location: b
                            });
                            return l(a)
                        }));
                        return e
                    },
                    patchURL: function(a, d) {
                        var b = this
                          , f = void 0 === d ? {} : d
                          , c = f.location
                          , e = void 0 === c ? null : c;
                        f = f.split;
                        var l = void 0 === f ? !1 : f;
                        return "string" === typeof a ? function(a) {
                            return l ? a.split(",") : [a]
                        }(a).reduce(function(a, d) {
                            var f = d.trim().split(" ")
                              , c = f[0];
                            f = f.slice(1);
                            c = b.applyPatch(c, e);
                            a.push([c].concat(f).join(" "));
                            return a
                        }, []).join(", ") : a
                    },
                    applyPatch: function(b, f) {
                        var c = d.test("relativePath", b)
                          , e = this.getRelativeLocation(f)
                          , h = e.host
                          , g = e.protocol;
                        e = e.path || e.pathname || "";
                        c = c ? this.resolvePath(b, e) : b;
                        if (0 <= fa.indexOf(c))
                            return c;
                        if (y.has(c))
                            return x.get(c);
                        e = b;
                        d.resetAll();
                        if (d.test("dataurlTest", b) || d.test("selectorTest", b))
                            return b;
                        d.test("protocolMissing", b) && (e = d.test("protocolIncomplete", b) ? b.replace(d.get("protocolIncomplete"), g + "//") : g + "//" + (h + "/" + c));
                        y.set(b, e);
                        /http[s]?/.test(e) ? (h = e,
                        d.test("proxiedURL", h) ? e = h : (l.isWhitelisted ? (g = l.isWhitelisted(h)) && a.warn("Whitelisted: " + h) : g = !1,
                        e = g ? h : (g = l.proxy) && d.test("resourceFinder", g) ? g.replace(d.get("resourceFinder"), h.replace(/&/g, "%26")) : h),
                        fa.push(e),
                        x.set(b, e),
                        h = e) : (fa.push(b),
                        x.set(b, e),
                        h = b);
                        return l.noEncode ? decodeURIComponent(h) : h
                    },
                    getRelativeLocation: function(a) {
                        var b = d.test("relativePath", a);
                        return a ? b ? (b = m.StringUtils.parseURL(r(a)),
                        a = this.resolvePath(a, this.location.protocol + "//" + this.location.host + (this.location.path || this.location.pathname || "")),
                        b || f.ObjectUtils.assign({}, this.location, {
                            path: a
                        })) : f.ObjectUtils.assign({}, this.location, {
                            path: a
                        }) : this.location
                    },
                    resolvePath: function(a, d) {
                        if (/^\//.test(a) || /^https?:\/\//.test(a))
                            return a;
                        for (var b = (d.replace(/\/[^\/]*$/, "") + "/" + a).split("/"), f = [], c = 0, e = b.length; c < e; c++) {
                            var l = b[c];
                            "" === l ? f.length = 0 : "." !== l && (".." === l ? 0 < f.length && --f.length : f.push(l))
                        }
                        f.unshift("");
                        return f.join("/")
                    },
                    configure: function(a) {
                        void 0 === a && (a = {});
                        var d = a;
                        a = d.proxyWhitelist;
                        d = p()(d, ["proxyWhitelist"]);
                        l = f.ObjectUtils.assign({}, l, d);
                        if (a) {
                            a = a.map(function(a) {
                                return a.replace("*", "(.*)")
                            }).join("|");
                            var b = new RegExp("" + a,"ig");
                            l.isWhitelisted = function(a) {
                                b.lastIndex = 0;
                                return b.test(a)
                            }
                        }
                    },
                    isURLLike: function(a) {
                        d.resetMultiple(["dataurlTest", "selectorTest", "extnameFinder", "protocolMissing"]);
                        return d.test("dataurlTest", a) || d.test("selectorTest", a) ? !1 : d.test("extnameFinder", a) && d.test("protocolMissing", a)
                    },
                    clearCache: function() {
                        x.clear();
                        y.clear()
                    },
                    isProxiedURL: function(a) {
                        return a ? d.test("proxiedURL", a) : !1
                    }
                }, {
                    location: {
                        get: function() {
                            return Q()
                        },
                        set: function(a) {
                            return (l = f.ObjectUtils.assign({}, l, {
                                location: a
                            })).location
                        },
                        configurable: !0,
                        enumerable: !0
                    },
                    config: {
                        get: function() {
                            return l
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                });
                b.a = e
            }
            ).call(this, c(4)["default"])
        }
        , function(a, b, c) {
            function e() {
                try {
                    if (!n.sessionStorage)
                        return null;
                    var a = n.sessionStorage.getItem(p)
                      , b = !1;
                    try {
                        var f = n.opener ? n.opener.sessionStorage : null;
                        b = !!f && a === f.getItem(p)
                    } catch (d) {
                        b = !0
                    }
                    if (!a || b)
                        a = g.Tools.guid(),
                        n.sessionStorage.setItem(p, a);
                    return a
                } catch (d) {
                    return null
                }
            }
            c.d(b, "a", function() {
                return e
            });
            var g = c(16)
              , p = "__vw_tab_guid"
        }
        , function(a, b, c) {
            a = c(43);
            var e = c(32)
              , g = c(44)
              , p = c(45)
              , h = c(46)
              , m = c(47)
              , f = c(48)
              , d = c(49)
              , l = c(50);
            c = c(51);
            b.a = {
                input: a.a,
                keystrokes: function() {
                    return {
                        create: function(a) {
                            a.keyCapture.onCapture(function(d) {
                                "OBJECT" === q.activeElement.nodeName && /flash/.test(q.getAttribute("type")) || (d = a._getEventObject("keystroke", -1, d),
                                a._publishActions(d))
                            })
                        },
                        destroy: function(a) {
                            a.keyCapture.destroy()
                        }
                    }
                },
                media: function() {
                    return {
                        create: function(a) {
                            var d = new a.MediaProxy
                              , b = a._universalHandler(function(d) {
                                d = a._getEventObject("mediaProperty", d.media, {
                                    property: d.name,
                                    value: d.value
                                });
                                a._publishActions(d)
                            })
                              , f = a._universalHandler(function(d) {
                                d = a._getEventObject("mediaMethod", d.media, {
                                    method: d.name,
                                    args: d.args
                                });
                                a._publishActions(d)
                            });
                            d.events.on("setter", b);
                            d.events.on("method", f);
                            d.mock()
                        },
                        destroy: function(a) {
                            a.mediaProxy.remove()
                        }
                    }
                },
                mutations: function() {
                    var a = new e.a
                      , d = 0
                      , b = 0
                      , f = function(f) {
                        var c = this
                          , e = this.stamp;
                        a.push(function() {
                            e !== d && (b = 0);
                            d = e;
                            c._publishMutations(c._getMutationObject(f, e, b++))
                        })
                    };
                    return {
                        create: function(a) {
                            a.summary.on("mutation", a._universalHandler(f))
                        },
                        destroy: function(d) {
                            d.summary.off("mutation");
                            a.start(!0)
                        }
                    }
                },
                mouse: g.a,
                focus: p.a,
                resize: function() {
                    var a, d = function(a, d) {
                        if (!this.IS_MOBILE_DEVICE) {
                            var b = 0
                              , f = function() {
                                var c = d.getValue.call(this, a);
                                c && (0 !== c.stamp ? this._publishActions(c) : 3 > b && (D(f, 300),
                                b += 1))
                            }
                            .bind(this);
                            f()
                        }
                    };
                    return {
                        getValue: function() {
                            var a = this.viewport.getSize(1)
                              , d = a.width;
                            a = a.height;
                            var b = this.viewport.scrollingElement;
                            if (0 < d && 0 < a)
                                return this._getEventObject("resize", 0, {
                                    width: d,
                                    height: a,
                                    pageWidth: b.scrollWidth,
                                    pageHeight: b.scrollHeight
                                })
                        },
                        create: function(b) {
                            a = b.attachEvent(b.window, "resize", b._universalHandler(d, {
                                extra: [this]
                            }), {
                                passive: !0
                            })
                        },
                        destroy: function(d) {
                            d.removeEvent(a)
                        }
                    }
                },
                deviceRotation: h.a,
                scroll: m.a,
                selection: f.a,
                touch: d.a,
                zoom: l.a,
                window: c.a,
                srcset: function() {
                    return {
                        create: function(a) {
                            this.onImageLoad = this.onImageLoad.bind(this);
                            a.document.addEventListener("load", this.onImageLoad, !0);
                            this.recorder = a
                        },
                        onImageLoad: function(a) {
                            var d = this;
                            this.recorder.errorLogger(function() {
                                var b = a.target;
                                "IMG" === (b.tagName || b.nodeName) && b.getAttribute("srcset") && d.recorder.summary.collectMutations([{
                                    meta: {
                                        name: "src",
                                        oldValue: null,
                                        newValue: b.currentSrc
                                    },
                                    target: b,
                                    type: "attributes"
                                }])
                            })
                        },
                        destroy: function(a) {
                            a.document.removeEventListener("load", this.onImageLoad)
                        }
                    }
                }
            }
        }
        , function(a, b, c) {
            a = c(13);
            var e = c(12)
              , g = c(11)
              , p = {
                rand: function(a, b) {
                    return Math.round(Math.random() * (b - a)) + a
                },
                charFromRange: function(a, b) {
                    var d = this.rand(a, b);
                    return String.fromCharCode(d)
                },
                isLetter: function(a) {
                    return /[\w\u0410-\u042f\u0430-\u044f]/.test(a)
                },
                isNumber: function(a) {
                    return /[0-9]/.test(a)
                },
                isUpperCase: function(a) {
                    return a === a.toUpperCase()
                },
                randomizeString: function(a) {
                    var d = this;
                    return (a || "").split("").map(function(a) {
                        return d.isNumber(a) ? d.rand(0, 9) : d.isLetter(a) ? d.isUpperCase(a) ? d.charFromRange(65, 90) : d.charFromRange(97, 122) : a
                    }).join("")
                },
                getNodeBounds: function(a) {
                    if (a.getBoundingClientRect)
                        return a.getBoundingClientRect();
                    var d = a.ownerDocument.createRange();
                    d.selectNode(a);
                    a = d.getBoundingClientRect();
                    d.detach();
                    return a
                }
            }
              , h = a.a.DOMIndexer.HIDABLE_NODES
              , m = new e.KeyValue
              , f = function(a, b) {
                var d = a.ownerDocument.createElement(b)
                  , f = p.getNodeBounds(a);
                d.setAttribute("ym-node-type", a.nodeName.toLowerCase());
                a.attributes && (g.DOMUtils.copyAttributes(a, d),
                d.className = a.className);
                d.className += " ym-hidden-content";
                return {
                    placeholder: d,
                    bounds: f
                }
            };
            b.a = function(a) {
                if (0 <= h.indexOf(a.nodeName)) {
                    var d = g.DOMUtils.isHiddenContent(a);
                    if (m.has(a))
                        return m.get(a);
                    if (d) {
                        var b = a.nodeName;
                        d = a.textContent;
                        if ("#text" === b && d && "" === d.trim())
                            return a;
                        d = function(a) {
                            switch (b) {
                            case "#text":
                                var d = f(a, "span").placeholder;
                                d.setAttribute("ym-text-content", p.randomizeString(a.textContent || ""));
                                return d;
                            case "IMG":
                                return d = f(a, "img"),
                                a = d.placeholder,
                                d = d.bounds,
                                a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII\x3d",
                                a.width = d.width,
                                a.height = d.height,
                                a;
                            case "TEXTAREA":
                            case "INPUT":
                                return d = f(a, "input"),
                                a = d.placeholder,
                                d = d.bounds,
                                a.style.width = d.width + "px",
                                a.style.height = d.height + "px",
                                a;
                            default:
                                return d = f(a, "span"),
                                a = d.placeholder,
                                d = d.bounds,
                                a.style.width = d.width + "px",
                                a.style.height = d.height + "px",
                                a
                            }
                        }(a);
                        m.set(a, d);
                        return d
                    }
                }
                return a
            }
        }
        , function(a, b, c) {
            c.r(b);
            (function(a, g, p) {
                c.d(b, "default", function() {
                    return ea
                });
                var e = c(40)
                  , m = c.n(e);
                e = c(24);
                var f = c.n(e);
                e = c(35);
                var d = c.n(e);
                e = c(5);
                var l = c.n(e);
                e = c(14);
                var x = c.n(e);
                e = c(6);
                var k = c.n(e);
                e = c(17);
                var J = c.n(e);
                e = c(1);
                var r = c.n(e)
                  , Q = c(16)
                  , fa = c(23)
                  , B = c(0)
                  , T = c(13)
                  , t = c(31)
                  , u = c(65)
                  , v = c(52)
                  , w = c(54)
                  , A = c(21);
                e = c(55);
                var C = c(56)
                  , F = c(57)
                  , E = c(58)
                  , sa = c(59)
                  , G = c(15)
                  , L = c(27)
                  , O = c(60)
                  , da = c(61)
                  , ta = c(62)
                  , N = c(20)
                  , X = c(63)
                  , ma = c(10)
                  , Y = c(64)
                  , ca = c(30)
                  , M = c(11)
                  , Ba = c(38)
                  , P = c(7)
                  , ia = c(2)
                  , U = c(4)
                  , H = c(28)
                  , R = c(66)
                  , W = new e.a({
                    checkOnLoad: !1,
                    resetOnEnd: !0
                })
                  , aa = {}
                  , S = {
                    counterId: null,
                    maxSize: H.NumberUtils.size(50, "mb"),
                    maxDuration: 864E5,
                    compression: !1,
                    isEU: !1,
                    recording: {
                        keysMode: "explicit"
                    }
                }
                  , Ea = {
                    disableIndex: !1
                }
                  , qa = !0 === ta.a
                  , Z = P.IS_INCOGNITO || P.DO_NOT_TRACK || "disable" === ca.BrowserUtils.meta("webvisor")
                  , V = n !== n.top;
                n.__YM_WV_RECORDABLE__ === z && Object.defineProperty(n, "__YM_WV_RECORDABLE__", {
                    value: !0
                });
                var ea = function(b) {
                    function c(d, f) {
                        void 0 === d && (d = {});
                        void 0 === f && (f = {});
                        var c = b.call(this) || this;
                        r()(k()(c), "middlewares", []);
                        r()(k()(c), "options", ia.ObjectUtils.assign({}, S));
                        r()(k()(c), "initOptions", ia.ObjectUtils.assign({}, Ea));
                        r()(k()(c), "iframes", []);
                        r()(k()(c), "waitingBody", null);
                        r()(k()(c), "ableToStart", !1);
                        r()(k()(c), "_identifier", Q.Tools.guid());
                        r()(k()(c), "offsets", {
                            left: 0,
                            top: 0
                        });
                        r()(k()(c), "fatalError", !1);
                        r()(k()(c), "captors", new a);
                        r()(k()(c), "prevMutationStamp", null);
                        r()(k()(c), "prevMutationOrderingID", 0);
                        r()(k()(c), "inited", !1);
                        r()(k()(c), "startOptions", null);
                        r()(k()(c), "precache", []);
                        r()(k()(c), "paused", !0);
                        r()(k()(c), "started", !1);
                        r()(k()(c), "stopped", !1);
                        r()(k()(c), "snapshotSent", !1);
                        r()(k()(c), "eventsList", ["error"]);
                        r()(k()(c), "_slaveMessengerRegistrationHandler", function(a, d) {
                            return function(b, f) {
                                var e = b.offsets
                                  , h = b.counterId
                                  , g = f.origin;
                                try {
                                    var m = l()({}, c.options)
                                      , p = g.split("//").pop()
                                      , x = h === m.counterId
                                      , k = p === n.location.host
                                      , y = -1 !== (m.trustedDomains || []).indexOf(p);
                                    k || y && x ? (c.offsets = e,
                                    c.sender.useRight(function(a) {
                                        var d = a.data
                                          , b = {};
                                        B.IterableUtils.fastIterate(["page", "events", "mutations"], function(a, f) {
                                            d[f] && (b[f] = d[f])
                                        });
                                        c.messenger.send("iframe_data", {
                                            data: b
                                        })
                                    })) : U["default"].warn("Counter or domain mismatch, iframe will be recorded as master window");
                                    return a()
                                } catch (Nb) {
                                    d(Nb)
                                }
                            }
                        });
                        r()(k()(c), "_sendEOF", fa.FunctionUtils.once(function() {
                            if (!c._EOF_SENT) {
                                var a = c._getEventObject("eof");
                                c._saveChanges({
                                    events: [a]
                                });
                                c._EOF_SENT = !0
                            }
                        }));
                        c._context = function(a) {
                            var d = {};
                            return a ? (d.window = a.window || n,
                            d.document = a.document || q,
                            d) : {
                                window: n,
                                document: q
                            }
                        }(f);
                        c.sender = new w.a(c.middlewares.splice(0));
                        c.captors = new a;
                        c._timer = Ba.TimeUtils.timer();
                        c._tabId = Object(Y.a)();
                        c._configOptions = l()({}, d);
                        Object.defineProperty(c.window, "__WV_ENABLED__", {
                            value: !0
                        });
                        return !qa || Z ? k()(c) || k()(c) : c
                    }
                    J()(c, b);
                    var e = c.prototype;
                    e.configure = function() {
                        var a = ia.ObjectUtils.combine({}, l()({}, S, this._configOptions));
                        this.frames = [];
                        this.viewport = ca.BrowserUtils.viewportGetter(this.document);
                        this.zoomLevel = this.viewport.zoomLevel;
                        this.prevMutationStamp = null;
                        this.prevMutationOrderingID = 0;
                        this.ableToStart = this.inited = !1;
                        this.startOptions = this.initException = null;
                        this.precache = [];
                        this.options = l()({}, a);
                        this.canvasProxy = t.a;
                        this.MediaProxy = F.a;
                        ma.c.addAttributesFilter(function(d, b, f) {
                            if (A.a.isValidNode(d) && "value" === b)
                                return d = A.a.validate(d, a),
                                b = d.forceRecord,
                                d.isAllowed || b ? f : A.a.encode(f)
                        })
                    }
                    ;
                    e.attachEvent = function() {
                        for (var a, d = arguments.length, b = Array(d), f = 0; f < d; f++)
                            b[f] = arguments[f];
                        L.a.on.apply(L.a, (a = []).concat.apply(a, b));
                        return b
                    }
                    ;
                    e.removeEvent = function() {
                        for (var a, d = arguments.length, b = Array(d), f = 0; f < d; f++)
                            b[f] = arguments[f];
                        L.a.off.apply(L.a, (a = []).concat.apply(a, b));
                        return b
                    }
                    ;
                    e["continue"] = function() {
                        Z || (this.paused = !1)
                    }
                    ;
                    e.findNode = function(a) {
                        return this.indexer.getNodeId(a)
                    }
                    ;
                    e.pause = function() {
                        Z || (this.paused = !0)
                    }
                    ;
                    e.middleware = function(a) {
                        this.sender ? this.sender.use(a) : this.middlewares.push(a);
                        return this
                    }
                    ;
                    e.init = function(a) {
                        var b = this;
                        void 0 === a && (a = {});
                        this.initOptions = ia.ObjectUtils.assign({}, this.initOptions, a || {});
                        this.errorLogger(d()(f.a.mark(function Ia() {
                            return f.a.wrap(function(a) {
                                for (; ; )
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (qa && !Z) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return a.prev = 2,
                                        a.next = 5,
                                        Object(E.a)(b.document);
                                    case 5:
                                        b.waitingDocument = a.sent;
                                        a.next = 11;
                                        break;
                                    case 8:
                                        a.prev = 8,
                                        a.t0 = a["catch"](2),
                                        b.__handleDocumentLoadError(a.t0);
                                    case 11:
                                        return a.next = 13,
                                        b.__handleDocumentLoad();
                                    case 13:
                                    case "end":
                                        return a.stop()
                                    }
                            }, Ia, null, [[2, 8]])
                        })), "init")["catch"](function(a) {
                            clearTimeout(b.cancelIfNotStarted);
                            b.waitingDocument = !1;
                            b.fatal("init-failed", a);
                            b.sendErrors = D(function() {
                                b.stop(!0, !1)
                            }, 3E4)
                        })
                    }
                    ;
                    e.__handleDocumentLoadError = function(a) {
                        var d = a;
                        "timeout" === a.message && (d = Error("No \x3cbody\x3e found. Can't continue"));
                        this.fatal("init-failed", d)
                    }
                    ;
                    e.__handleDocumentLoad = function() {
                        var a = d()(f.a.mark(function Fa() {
                            var a = this;
                            return f.a.wrap(function(d) {
                                for (; ; )
                                    switch (d.prev = d.next) {
                                    case 0:
                                        return this.configure(),
                                        this.__initIndexer(),
                                        this.__initEventHandlers(),
                                        d.next = 5,
                                        this._initMessenger();
                                    case 5:
                                        this.waitingDocument = !1,
                                        this.ableToStart = !0,
                                        this.cancelIfNotStarted = D(function() {
                                            a.stop(!0, !1)
                                        }, 3E4),
                                        this.emit("ready"),
                                        this.inited = !0,
                                        this.startOptions && this.start(this.startOptions);
                                    case 11:
                                    case "end":
                                        return d.stop()
                                    }
                            }, Fa, this)
                        }));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                    e.__initIndexer = function() {
                        var a = this;
                        this.indexer = new sa.a(this.document,{
                            disabled: this.initOptions.disableIndex
                        });
                        if (l()({}, this.options).childIframe)
                            this.indexer.on("node", function(d) {
                                return a.connectSlaveRecorder(d)
                            });
                        this.indexer.use(R.a);
                        this.indexer.initialIndex()
                    }
                    ;
                    e.__initEventHandlers = function() {
                        this.summary = new v.a(this.document.documentElement,this.indexer);
                        this.selection = new da.a(n,this.document,this.indexer);
                        this.keyCapture = new C.a("body",this);
                        this.initOptions.disableMutations || this.summary.initObserver();
                        this._initCaptors();
                        this._createSnapshot()
                    }
                    ;
                    e.connectSlaveRecorder = function(a) {
                        var d = this;
                        if ("IFRAME" === a.nodeName && a.name !== T.a.NATIVE_IFRAME_NAME && M.DOMUtils.isBlankOrSameOriginIframe(a, this.window)) {
                            try {
                                var b = 0 < a.contentDocument.documentElement.childNodes.length && "complete" === a.contentDocument.readyState
                            } catch (mc) {
                                b = !0
                            }
                            var f = function db(a) {
                                var b = a.contentWindow
                                  , f = a.contentDocument;
                                U["default"].log("creating recorder");
                                if (b && f) {
                                    if (!0 === b.__YM_WV_RECORDABLE__)
                                        return U["default"].warn("Iframe has internal counter installed");
                                    if (!0 === b.__YM_RECORDING__)
                                        return U["default"].warn("We're already recording this iframe", a);
                                    a.contentWindow.__YM_RECORDING__ = !0;
                                    b = d._createInstance(d._configOptions, {
                                        window: b,
                                        document: f
                                    });
                                    b.init(d.initOptions);
                                    b.start(d.startOptions);
                                    return U["default"].info("Recorder injected into the iframe", a)
                                }
                                D(function() {
                                    return db(a)
                                }, 10)
                            }
                              , c = function(b) {
                                d.errorLogger(function() {
                                    if (b && b.parentElement && b.contentDocument && M.DOMUtils.isBlankOrSameOriginIframe(a, d.window) && !0 !== b.contentWindow.__WV_ENABLED__)
                                        try {
                                            f(b)
                                        } catch (db) {
                                            U["default"].error(db),
                                            U["default"].warn("Probably this iframe is cross-origin")
                                        }
                                }, "ifLo")
                            };
                            this.attachEvent(a, "load", function() {
                                c(a)
                            }, {
                                capture: !0,
                                passive: !0
                            });
                            b && c(a)
                        }
                    }
                    ;
                    e.start = function(a) {
                        var d = this;
                        void 0 === a && (a = {});
                        this.errorLogger(function() {
                            if (d.ableToStart)
                                if (!1 === d.fatalError)
                                    if (!d.inited)
                                        d.savePageSnapshot(),
                                        d.fatal("init-failed", Error("Unknown error"));
                                    else {
                                        if (qa && !Z) {
                                            clearTimeout(d.cancelIfNotStarted);
                                            var b = (a || {}).forms;
                                            d.options.recording = ia.ObjectUtils.combine({}, S.recording, {
                                                keysMode: void 0 === b || b ? "regular" : "explicit"
                                            });
                                            d.start = fa.FunctionUtils.noop();
                                            d.started = !0;
                                            d.sendSnapshot().then(function(a) {
                                                a && (d._sendInitialEvents(),
                                                d._sendPreCachedData(),
                                                d._timer.start())
                                            })["catch"](function(a) {
                                                d.fatal("recording-interrupted", a);
                                                d.start()
                                            });
                                            d["continue"]()
                                        }
                                    }
                                else
                                    d.stop(!0, !0);
                            else
                                (function Ma() {
                                    d.ableToStart ? d.start(a) : D(Ma, 50)
                                }
                                )()
                        }, "start")
                    }
                    ;
                    e.stop = function(a, d) {
                        var b = this;
                        void 0 === a && (a = !1);
                        void 0 === d && (d = !0);
                        qa && !Z && (!1 !== this.started && this.inited || a) && !0 !== this.stopped && (clearTimeout(this.cancelIfNotStarted),
                        clearTimeout(this.sendErrors),
                        this.captors.forEach(function(a) {
                            a && a.hasOwnProperty("destroy") && a.destroy(b)
                        }),
                        this.indexer && this.indexer.clear(),
                        this.captors && this.captors.clear(),
                        N.a.invokeAll(this),
                        this.summary && this.summary.destroy(),
                        this.keyCapture && this.keyCapture.destroy(),
                        d ? (this._sendEOF(),
                        !0 === this.fatalError && this._sendPreCachedData({
                            force: !0
                        }),
                        this.emit("stop")) : a && this.emit("close"),
                        this.started = !1,
                        this.stopped = !0)
                    }
                    ;
                    e.fatal = function(a, d) {
                        void 0 === d && (d = null);
                        U["default"].error(d);
                        this.fatal = fa.FunctionUtils.noop();
                        d = d || {
                            message: "Unknown exception",
                            stack: "No stack provided"
                        };
                        this.fatalError || (this.fatalError = !0,
                        this.savePageSnapshot(),
                        this.sendCustomEvent("fatalError", {
                            code: a,
                            exception: d.message,
                            stack: d.stack
                        }),
                        this.stop(!0, !0))
                    }
                    ;
                    e.setURLProxy = function(a) {
                        X.a.proxy = function() {
                            if ("string" === typeof a)
                                return a;
                            if ("function" === typeof a)
                                return a.call(this)
                        }(a)
                    }
                    ;
                    e.sendCustomEvent = function(a, d) {
                        var b = this._getEventObject(a, null, d);
                        this._saveChanges({
                            events: [b]
                        })
                    }
                    ;
                    e._initCaptors = function() {
                        var a = this;
                        this.keyCapture.addElementFilter(function(a) {
                            return "INPUT" === a.nodeName ? "password" !== a.type && !1 === /ym-disable-keys/.test(a.className) : !0
                        });
                        var d = ia.ObjectUtils.combine({}, T.a.captors, V ? T.a.iframeCaptors : null);
                        B.IterableUtils.forin(d, function(b) {
                            if (!0 === d[b]) {
                                var f = u.a[b]();
                                a.errorLogger(function() {
                                    return f.create(a)
                                }, "init-captor-" + b);
                                a.captors.set(b, f)
                            }
                        });
                        L.a.on(this.window, "beforeunload", this.stop.bind(this))
                    }
                    ;
                    e.throwError = function(a, d) {
                        void 0 === d && (d = "recorder");
                        this.emit("error", {
                            error: a,
                            namespace: "recorder:" + d
                        })
                    }
                    ;
                    e.errorLogger = function(a, d) {
                        var b = this;
                        void 0 === d && (d = "recorder");
                        try {
                            var f = a();
                            return f instanceof g ? f["catch"](function(a) {
                                b.throwError(a, d + ":async")
                            }) : f
                        } catch (Ma) {
                            this.throwError(Ma, d)
                        }
                    }
                    ;
                    e._blockUpcomingCaptor = function(a, d) {
                        var b = this;
                        void 0 === d && (d = Infinity);
                        a && (this._blockedCaptors = this._blockedCaptors || new p,
                        this._blockedCaptors.add(a),
                        Infinity > d && D(function() {
                            return b._releaseCaptor(a)
                        }, d))
                    }
                    ;
                    e._releaseCaptor = function(a) {
                        a && this._blockedCaptors.has(a) && this._blockedCaptors["delete"](a)
                    }
                    ;
                    e._executeCaptor = function(a, d) {
                        a && "function" === typeof d && (this._blockedCaptors && this._blockedCaptors.has(a) ? this._releaseCaptor(a) : d())
                    }
                    ;
                    e._getEventObject = function(a, d, b, f) {
                        d = "number" === typeof d ? d : d ? this.findNode(d) || -1 : null;
                        return {
                            stamp: this._stampForType(a, f),
                            type: a,
                            target: d,
                            meta: b || null
                        }
                    }
                    ;
                    e._getMutationObject = function(a, d, b) {
                        void 0 === b && (b = 0);
                        return {
                            stamp: d,
                            meta: {
                                changes: a,
                                index: b
                            }
                        }
                    }
                    ;
                    e._stampForType = function(a, d) {
                        var b = d || this.stamp;
                        return aa[a] = b + (b === aa[a] ? 1 : 0)
                    }
                    ;
                    e._getInitialScroll = function() {
                        var a = []
                          , d = this.document.body
                          , b = this._getScroll(d);
                        null != b && a.push(b);
                        a.concat(this._getScrollForEachNode(d.childNodes));
                        return a
                    }
                    ;
                    e._getScrollForEachNode = function(a) {
                        var d = this;
                        return B.IterableUtils.toArray(a).reduce(function(a, b) {
                            var f = d._getScroll(b);
                            null != f && a.push(f);
                            0 < b.childNodes.length && (a = a.concat(d._getScrollForEachNode(b.childNodes)));
                            return a
                        }, [])
                    }
                    ;
                    e._getScroll = function(a) {
                        var d = a.scrollTop
                          , b = a.scrollLeft;
                        if (0 < d || 0 < b)
                            return {
                                target: this.findNode(a),
                                scroll: [d, b]
                            }
                    }
                    ;
                    e._initMessenger = function() {
                        var a = this;
                        return new g(function() {
                            var b = d()(f.a.mark(function Ma(d) {
                                var b;
                                return f.a.wrap(function(f) {
                                    for (; ; )
                                        switch (f.prev = f.next) {
                                        case 0:
                                            a.messenger = new O.a(a.window);
                                            a._initMasterMessenger();
                                            if (!ca.BrowserUtils.isIframe(a.window)) {
                                                f.next = 7;
                                                break
                                            }
                                            f.next = 5;
                                            return a._initSlaveMessenger();
                                        case 5:
                                            (b = f.sent) && a.fatal("messenger-init-failed", b);
                                        case 7:
                                            d();
                                        case 8:
                                        case "end":
                                            return f.stop()
                                        }
                                }, Ma)
                            }));
                            return function(a) {
                                return b.apply(this, arguments)
                            }
                        }())
                    }
                    ;
                    e._initMasterMessenger = function() {
                        var a = this
                          , d = l()({}, this.options);
                        this.messenger.subscribe("iframe_register", function(a, b) {
                            var f = M.DOMUtils.offsets(a.sender);
                            b({
                                counterId: d.counterId,
                                offsets: {
                                    top: f.top,
                                    left: f.left
                                }
                            })
                        });
                        this.messenger.subscribe("iframe_data", function(d) {
                            var b = d.data;
                            d = d.sender;
                            var f = a.findNode(d);
                            if (null != f) {
                                var c = {
                                    frameId: f
                                };
                                b.page && (f = l()({}, b.page, c, {
                                    tabId: a.tabId,
                                    recordStamp: (new Date).getTime(),
                                    stamp: a._stampForType("page")
                                }),
                                a._request("/dump", {
                                    page: f
                                }));
                                if (b.events) {
                                    d = M.DOMUtils.offsets(d, {
                                        excludeBorder: !0
                                    });
                                    var e = d.left
                                      , h = d.top;
                                    d = b.events.map(function(d) {
                                        /mouse/.test(d.type) && (d.meta.x = Math.round(d.meta.x + e),
                                        d.meta.y = Math.round(d.meta.y + h));
                                        return l()({}, d, c, {
                                            stamp: a._stampForType(d.type)
                                        })
                                    });
                                    a._publishActions(d)
                                }
                                b.mutations && (b = b.mutations.map(function(d) {
                                    return l()({}, d, c, {
                                        stamp: a._stampForType("mutation")
                                    })
                                }),
                                a._publishMutations(b))
                            }
                        })
                    }
                    ;
                    e._initSlaveMessenger = function() {
                        var a = this;
                        return (new g(function(d, b) {
                            U["default"].log("Awaiting subscription", a.document.documentElement);
                            a.messenger.send("iframe_register", {
                                awaitResponse: !0,
                                timeoutTime: 3E3,
                                onResponse: a._slaveMessengerRegistrationHandler(d, b),
                                onTimeout: function() {
                                    U["default"].warn("Slave recorder stopped due to a timeout: no response from the parent page within 1 seconds. This frame will be used as if it is master");
                                    d()
                                }
                            })
                        }
                        ))["catch"](function(d) {
                            U["default"].warn("Cant init recorder in frame");
                            a.throwError(d, "slave-recorder");
                            U["default"].warn(d, a.document);
                            return d
                        })
                    }
                    ;
                    e._publishActions = function() {
                        var a;
                        this._saveChanges({
                            events: (a = []).concat.apply(a, arguments)
                        })
                    }
                    ;
                    e._publishMutations = function() {
                        var a;
                        this._saveChanges({
                            mutations: (a = []).concat.apply(a, arguments)
                        })
                    }
                    ;
                    e._request = function(a, d, b) {
                        void 0 === d && (d = {});
                        void 0 === b && (b = !1);
                        this._EOF_SENT && !0 !== b || (!0 === this.started || !0 === b ? (d = ia.ObjectUtils.combine({
                            _v: T.a["package"].version
                        }, l()({}, d)),
                        this.sender.send({
                            url: a,
                            data: l()({}, d)
                        })) : this.precache.push([a, d]))
                    }
                    ;
                    e._saveChanges = function(a) {
                        this._request("/dump", a);
                        !this._EOF_SENT && this.started && (this.dataSent >= this.options.maxSize || this.hitDuration >= this.options.maxDuration) && this.stop()
                    }
                    ;
                    e.sendSnapshot = function() {
                        var a = this;
                        return this.snapshot.get({
                            onSuccess: function(d) {
                                a.savePageSnapshot(d);
                                return !0
                            },
                            onFail: function() {
                                return !1
                            }
                        })
                    }
                    ;
                    e._createSnapshot = function() {
                        var a = this
                          , d = g.resolve().then(function() {
                            return {
                                content: a.summary.html
                            }
                        })["catch"](function(a) {
                            return {
                                error: a
                            }
                        }).then(function(a) {
                            return {
                                content: a.content,
                                error: a.error
                            }
                        });
                        this.snapshot = {
                            get: function(b) {
                                var f = b.onSuccess
                                  , c = b.onFail;
                                return d.then(function(d) {
                                    var b = d.error;
                                    d = d.content;
                                    b ? (d = c.call(a, d, b),
                                    a.fatal("invalid-snapshot", b)) : d = f.call(a, d);
                                    return d
                                })
                            }
                        }
                    }
                    ;
                    e.savePageSnapshot = function(a) {
                        if (this.indexer && !this.indexer.disabled && !this.snapshotSent)
                            return this.snapshotSent = !0,
                            a = l()({
                                content: a,
                                frameId: 0,
                                tabId: this.tabId,
                                recordStamp: (new Date).getTime()
                            }, this.page),
                            this._saveChanges({
                                page: a
                            })
                    }
                    ;
                    e._sendInitialEvents = function() {
                        var a = this
                          , d = []
                          , b = function() {
                            var d = a.captors.get("resize");
                            return d && d.getValue.call(a)
                        }()
                          , f = this.viewport.scrollingElement
                          , c = this._getInitialScroll().map(function(d) {
                            var b = d.scroll
                              , c = b[0];
                            b = b[1];
                            d = a.indexer.find(d.target);
                            d = d === a.document || d === a.window ? f : d;
                            return a._getEventObject("scroll", d, {
                                x: b,
                                y: c,
                                page: d === f
                            })
                        });
                        b && d.push(b);
                        d.push.apply(d, c);
                        this._saveChanges({
                            events: d
                        })
                    }
                    ;
                    e._sendPreCachedData = function(a) {
                        a = (void 0 === a ? {} : a).force;
                        a = void 0 === a ? !1 : a;
                        if (this.precache.length)
                            for (var d; null != (d = this.precache.shift()); )
                                this._request(d[0], d[1], a)
                    }
                    ;
                    e._connectToParent = function() {
                        this._sendMessage("connect", {
                            id: this._identifier
                        })
                    }
                    ;
                    e._sendMessage = function(a, d) {
                        (V ? this.window.top : this.window).postMessage({
                            type: a,
                            data: d
                        }, "*")
                    }
                    ;
                    e._universalHandler = function(a, d) {
                        var b = this
                          , f = (void 0 === d ? {} : d).extra
                          , c = void 0 === f ? [] : f;
                        return function() {
                            for (var d = arguments.length, f = Array(d), e = 0; e < d; e++)
                                f[e] = arguments[e];
                            b.errorLogger(function() {
                                b.paused || a.apply(b, f.concat(c))
                            }, "universal-handler")
                        }
                    }
                    ;
                    e._createInstance = function() {
                        for (var a = arguments.length, d = Array(a), b = 0; b < a; b++)
                            d[b] = arguments[b];
                        return m()(this.constructor, d)
                    }
                    ;
                    x()(c, [{
                        key: "window",
                        get: function() {
                            return this._context.window
                        }
                    }, {
                        key: "document",
                        get: function() {
                            return this._context.document
                        }
                    }, {
                        key: "bodyNode",
                        get: function() {
                            return this.__bodyNode || (this.__bodyNode = this.document.body)
                        }
                    }, {
                        key: "fpsDelay",
                        get: function() {
                            return 1E3 / this.fps
                        }
                    }, {
                        key: "doctype",
                        get: function() {
                            if (!this.document.doctype)
                                return "";
                            var a = this.document.doctype || {}
                              , d = a.publicId
                              , b = a.systemId;
                            return "\x3c!DOCTYPE " + [a.name || "html", d ? ' PUBLIC "' + d + '"' : "", !d && b ? " SYSTEM" : "", b ? ' "' + b + '"' : ""].join("") + "\x3e"
                        }
                    }, {
                        key: "rootNode",
                        get: function() {
                            return this.__rootNode || (this.__rootNode = this.document.documentElement)
                        }
                    }, {
                        key: "stamp",
                        get: function() {
                            return this._timer ? this._timer.stamp() : 0
                        }
                    }, {
                        key: "eventID",
                        get: function() {
                            return this._eventID ? this._eventID += 1 : this._eventID = 1
                        }
                    }, {
                        key: "page",
                        get: function() {
                            var a = this.viewport ? this.viewport.getSize() : {
                                width: 0,
                                height: 0
                            }
                              , d = M.DOMUtils.base()
                              , b = !!this.document.querySelector("base[href]");
                            return {
                                meta: {
                                    base: d,
                                    hasBase: b,
                                    viewport: a,
                                    title: this.document.title,
                                    doctype: this.doctype,
                                    address: I.href,
                                    ua: navigator.userAgent,
                                    referrer: this.document.referrer,
                                    adblocking: W.checkSync(),
                                    screen: {
                                        width: ja.width,
                                        height: ja.height
                                    },
                                    location: {
                                        host: I.host,
                                        protocol: I.protocol,
                                        path: I.pathname
                                    }
                                }
                            }
                        }
                    }, {
                        key: "domain",
                        get: function() {
                            return I.protocol + "//" + (I.host || I.hostname) + (I.port ? ":" + I.port : "")
                        }
                    }, {
                        key: "tabId",
                        get: function() {
                            return this._tabId
                        }
                    }]);
                    return c
                }(G.a)
                  , la = {
                    IS_INCOGNITO: P.IS_INCOGNITO,
                    IS_MOBILE_DEVICE: P.IS_MOBILE_DEVICE,
                    DO_NOT_TRACK: P.DO_NOT_TRACK
                };
                B.IterableUtils.forin(la, function(a) {
                    var d = {
                        value: la[a]
                    };
                    Object.defineProperty(ea, a, d);
                    Object.defineProperty(ea.prototype, a, d)
                })
            }
            ).call(this, c(12)["default"], c(22).Promise, c(8)["default"])
        }
        , function(a, b, c) {
            b = c(25)["default"];
            a.exports = c(69)() ? b : c(70)
        }
        , function(a, b, c) {
            (function(b) {
                var c = {
                    object: !0,
                    symbol: !0
                };
                a.exports = function() {
                    if ("function" !== typeof b)
                        return !1;
                    var a = b("test symbol");
                    try {
                        String(a)
                    } catch (h) {
                        return !1
                    }
                    return c[typeof b.iterator] && c[typeof b.toPrimitive] && c[typeof b.toStringTag] ? !0 : !1
                }
            }
            ).call(this, c(25)["default"])
        }
        , function(a, b, c) {
            (function(b) {
                var e = c(71), p = c(85), h = Object.create, m = Object.defineProperties, f = Object.defineProperty, d = Object.prototype, l, x = h(null);
                if ("function" === typeof b) {
                    var k = b;
                    try {
                        String(k());
                        var n = !0
                    } catch (fa) {}
                }
                var r = function() {
                    var a = h(null);
                    return function(b) {
                        for (var c = 0, l, h; a[b + (c || "")]; )
                            ++c;
                        b += c || "";
                        a[b] = !0;
                        l = "@@" + b;
                        f(d, l, e.gs(null, function(a) {
                            h || (h = !0,
                            f(this, l, e(a)),
                            h = !1)
                        }));
                        return l
                    }
                }();
                var q = function(a) {
                    if (this instanceof q)
                        throw new TypeError("Symbol is not a constructor");
                    return l(a)
                };
                a.exports = l = function T(a) {
                    if (this instanceof T)
                        throw new TypeError("Symbol is not a constructor");
                    if (n)
                        return k(a);
                    var d = h(q.prototype);
                    a = a === z ? "" : String(a);
                    return m(d, {
                        __description__: e("", a),
                        __name__: e("", r(a))
                    })
                }
                ;
                m(l, {
                    "for": e(function(a) {
                        return x[a] ? x[a] : x[a] = l(String(a))
                    }),
                    keyFor: e(function(a) {
                        var d;
                        p(a);
                        for (d in x)
                            if (x[d] === a)
                                return d
                    }),
                    hasInstance: e("", k && k.hasInstance || l("hasInstance")),
                    isConcatSpreadable: e("", k && k.isConcatSpreadable || l("isConcatSpreadable")),
                    iterator: e("", k && k.iterator || l("iterator")),
                    match: e("", k && k.match || l("match")),
                    replace: e("", k && k.replace || l("replace")),
                    search: e("", k && k.search || l("search")),
                    species: e("", k && k.species || l("species")),
                    split: e("", k && k.split || l("split")),
                    toPrimitive: e("", k && k.toPrimitive || l("toPrimitive")),
                    toStringTag: e("", k && k.toStringTag || l("toStringTag")),
                    unscopables: e("", k && k.unscopables || l("unscopables"))
                });
                m(q.prototype, {
                    constructor: e(l),
                    toString: e("", function() {
                        return this.__name__
                    })
                });
                m(l.prototype, {
                    toString: e(function() {
                        return "Symbol (" + p(this).__description__ + ")"
                    }),
                    valueOf: e(function() {
                        return p(this)
                    })
                });
                f(l.prototype, l.toPrimitive, e("", function() {
                    var a = p(this);
                    return "symbol" === typeof a ? a : a.toString()
                }));
                f(l.prototype, l.toStringTag, e("c", "Symbol"));
                f(q.prototype, l.toStringTag, e("c", l.prototype[l.toStringTag]));
                f(q.prototype, l.toPrimitive, e("c", l.prototype[l.toPrimitive]))
            }
            ).call(this, c(25)["default"])
        }
        , function(a, b, c) {
            var e = c(72)
              , g = c(80)
              , p = c(81)
              , h = c(82);
            (a.exports = function(a, b) {
                var d;
                if (2 > arguments.length || "string" !== typeof a) {
                    var f = b;
                    b = a;
                    a = null
                } else
                    f = arguments[2];
                if (null == a) {
                    var c = d = !0;
                    var m = !1
                } else
                    c = h.call(a, "c"),
                    m = h.call(a, "e"),
                    d = h.call(a, "w");
                c = {
                    value: b,
                    configurable: c,
                    enumerable: m,
                    writable: d
                };
                return f ? e(g(f), c) : c
            }
            ).gs = function(a, b, d, c) {
                "string" !== typeof a && (c = d,
                d = b,
                b = a,
                a = null);
                null == b ? b = z : p(b) ? null == d ? d = z : p(d) || (c = d,
                d = z) : (c = b,
                b = d = z);
                if (null == a) {
                    var f = !0;
                    a = !1
                } else
                    f = h.call(a, "c"),
                    a = h.call(a, "e");
                b = {
                    get: b,
                    set: d,
                    configurable: f,
                    enumerable: a
                };
                return c ? e(g(c), b) : b
            }
        }
        , function(a, b, c) {
            a.exports = c(73)() ? Object.assign : c(74)
        }
        , function(a, b, c) {
            a.exports = function() {
                var a = Object.assign;
                if ("function" !== typeof a)
                    return !1;
                var b = {
                    foo: "raz"
                };
                a(b, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                });
                return "razdwatrzy" === b.foo + b.bar + b.trzy
            }
        }
        , function(a, b, c) {
            var e = c(75)
              , g = c(79)
              , p = Math.max;
            a.exports = function(a, b) {
                var f, d, c = p(arguments.length, 2);
                a = Object(g(a));
                var h = function(d) {
                    try {
                        a[d] = b[d]
                    } catch (J) {
                        f || (f = J)
                    }
                };
                for (d = 1; d < c; ++d)
                    b = arguments[d],
                    e(b).forEach(h);
                if (f !== z)
                    throw f;
                return a
            }
        }
        , function(a, b, c) {
            a.exports = c(76)() ? Object.keys : c(77)
        }
        , function(a, b, c) {
            a.exports = function() {
                try {
                    return Object.keys("primitive"),
                    !0
                } catch (e) {
                    return !1
                }
            }
        }
        , function(a, b, c) {
            var e = c(36)
              , g = Object.keys;
            a.exports = function(a) {
                return g(e(a) ? Object(a) : a)
            }
        }
        , function(a, b, c) {
            a.exports = function() {}
        }
        , function(a, b, c) {
            var e = c(36);
            a.exports = function(a) {
                if (!e(a))
                    throw new TypeError("Cannot use null or undefined");
                return a
            }
        }
        , function(a, b, c) {
            var e = c(36)
              , g = Array.prototype.forEach
              , p = Object.create;
            a.exports = function(a) {
                var b = p(null);
                g.call(arguments, function(a) {
                    if (e(a)) {
                        a = Object(a);
                        for (var d in a)
                            b[d] = a[d]
                    }
                });
                return b
            }
        }
        , function(a, b, c) {
            a.exports = function(a) {
                return "function" === typeof a
            }
        }
        , function(a, b, c) {
            a.exports = c(83)() ? String.prototype.contains : c(84)
        }
        , function(a, b, c) {
            a.exports = function() {
                return "function" !== typeof "razdwatrzy".contains ? !1 : !0 === "razdwatrzy".contains("dwa") && !1 === "razdwatrzy".contains("foo")
            }
        }
        , function(a, b, c) {
            var e = String.prototype.indexOf;
            a.exports = function(a, b) {
                return -1 < e.call(this, a, b)
            }
        }
        , function(a, b, c) {
            var e = c(86);
            a.exports = function(a) {
                if (!e(a))
                    throw new TypeError(a + " is not a symbol");
                return a
            }
        }
        , function(a, b, c) {
            a.exports = function(a) {
                return a ? "symbol" === typeof a ? !0 : a.constructor && "Symbol" === a.constructor.name ? "Symbol" === a[a.constructor.toStringTag] : !1 : !1
            }
        }
        , function(a, b, c) {
            (function(b) {
                (function(b, c) {
                    a.exports = c()
                }
                )(this, function() {
                    function a(a) {
                        return "function" === typeof a
                    }
                    function c() {
                        return function() {
                            return b.nextTick(l)
                        }
                    }
                    function e() {
                        return "undefined" !== typeof ta ? function() {
                            ta(l)
                        }
                        : d()
                    }
                    function m() {
                        var a = 0
                          , d = new Y(l)
                          , b = q.createTextNode("");
                        d.observe(b, {
                            characterData: !0
                        });
                        return function() {
                            b.data = a = ++a % 2
                        }
                    }
                    function f() {
                        var a = new MessageChannel;
                        a.port1.onmessage = l;
                        return function() {
                            return a.port2.postMessage(0)
                        }
                    }
                    function d() {
                        return function() {
                            return D(l, 1)
                        }
                    }
                    function l() {
                        for (var a = 0; a < da; a += 2)
                            (0,
                            M[a])(M[a + 1]),
                            M[a] = z,
                            M[a + 1] = z;
                        da = 0
                    }
                    function k() {
                        try {
                            var a = Function("return this")().require("vertx");
                            ta = a.runOnLoop || a.runOnContext;
                            return e()
                        } catch (qa) {
                            return d()
                        }
                    }
                    function y(a, d) {
                        var b = this
                          , f = new this.constructor(r);
                        f[P] === z && I(f);
                        var c = b._state;
                        if (c) {
                            var e = arguments[c - 1];
                            X(function() {
                                return E(c, f, e, b._result)
                            })
                        } else
                            C(b, f, a, d);
                        return f
                    }
                    function J(a) {
                        if (a && "object" === typeof a && a.constructor === this)
                            return a;
                        var d = new this(r);
                        u(d, a);
                        return d
                    }
                    function r() {}
                    function Q(a) {
                        try {
                            return a.then
                        } catch (qa) {
                            return R.error = qa,
                            R
                        }
                    }
                    function fa(a, d, b, f) {
                        try {
                            a.call(d, b, f)
                        } catch (ea) {
                            return ea
                        }
                    }
                    function B(a, d, b) {
                        X(function(a) {
                            var f = !1
                              , c = fa(b, d, function(b) {
                                f || (f = !0,
                                d !== b ? u(a, b) : w(a, b))
                            }, function(d) {
                                f || (f = !0,
                                A(a, d))
                            }, "Settle: " + (a._label || " unknown promise"));
                            !f && c && (f = !0,
                            A(a, c))
                        }, a)
                    }
                    function T(a, d) {
                        d._state === U ? w(a, d._result) : d._state === H ? A(a, d._result) : C(d, z, function(d) {
                            return u(a, d)
                        }, function(d) {
                            return A(a, d)
                        })
                    }
                    function t(d, b, f) {
                        b.constructor === d.constructor && f === y && b.constructor.resolve === J ? T(d, b) : f === R ? (A(d, R.error),
                        R.error = null) : f === z ? w(d, b) : a(f) ? B(d, b, f) : w(d, b)
                    }
                    function u(a, d) {
                        if (a === d)
                            A(a, new TypeError("You cannot resolve a promise with itself"));
                        else {
                            var b = typeof d;
                            null === d || "object" !== b && "function" !== b ? w(a, d) : t(a, d, Q(d))
                        }
                    }
                    function v(a) {
                        a._onerror && a._onerror(a._result);
                        F(a)
                    }
                    function w(a, d) {
                        a._state === ia && (a._result = d,
                        a._state = U,
                        0 !== a._subscribers.length && X(F, a))
                    }
                    function A(a, d) {
                        a._state === ia && (a._state = H,
                        a._result = d,
                        X(v, a))
                    }
                    function C(a, d, b, f) {
                        var c = a._subscribers
                          , e = c.length;
                        a._onerror = null;
                        c[e] = d;
                        c[e + U] = b;
                        c[e + H] = f;
                        0 === e && a._state && X(F, a)
                    }
                    function F(a) {
                        var d = a._subscribers
                          , b = a._state;
                        if (0 !== d.length) {
                            for (var f, c, e = a._result, l = 0; l < d.length; l += 3)
                                f = d[l],
                                c = d[l + b],
                                f ? E(b, f, c, e) : c(e);
                            a._subscribers.length = 0
                        }
                    }
                    function E(d, b, f, c) {
                        var e = a(f)
                          , l = void 0
                          , h = void 0
                          , g = void 0
                          , m = void 0;
                        if (e) {
                            try {
                                l = f(c)
                            } catch (Aa) {
                                R.error = Aa,
                                l = R
                            }
                            l === R ? (m = !0,
                            h = l.error,
                            l.error = null) : g = !0;
                            if (b === l) {
                                A(b, new TypeError("A promises callback cannot return that same promise."));
                                return
                            }
                        } else
                            l = c,
                            g = !0;
                        b._state === ia && (e && g ? u(b, l) : m ? A(b, h) : d === U ? w(b, l) : d === H && A(b, l))
                    }
                    function L(a, d) {
                        try {
                            d(function(d) {
                                u(a, d)
                            }, function(d) {
                                A(a, d)
                            })
                        } catch (Z) {
                            A(a, Z)
                        }
                    }
                    function I(a) {
                        a[P] = W++;
                        a._state = z;
                        a._result = z;
                        a._subscribers = []
                    }
                    var G = void 0
                      , O = G = Array.isArray ? Array.isArray : function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    }
                      , da = 0
                      , ta = void 0
                      , N = void 0
                      , X = function(a, d) {
                        M[da] = a;
                        M[da + 1] = d;
                        da += 2;
                        2 === da && (N ? N(l) : Ba())
                    }
                      , ma = (G = "undefined" !== typeof n ? n : z) || {}
                      , Y = ma.MutationObserver || ma.WebKitMutationObserver;
                    ma = "undefined" === typeof self && "undefined" !== typeof b && "[object process]" === {}.toString.call(b);
                    var ca = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel
                      , M = Array(1E3)
                      , Ba = void 0;
                    Ba = ma ? c() : Y ? m() : ca ? f() : G === z ? k() : d();
                    var P = Math.random().toString(36).substring(2)
                      , ia = void 0
                      , U = 1
                      , H = 2
                      , R = {
                        error: null
                    }
                      , W = 0
                      , aa = function() {
                        function a(a, d) {
                            this._instanceConstructor = a;
                            this.promise = new a(r);
                            this.promise[P] || I(this.promise);
                            O(d) ? (this._remaining = this.length = d.length,
                            this._result = Array(this.length),
                            0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0,
                            this._enumerate(d),
                            0 === this._remaining && w(this.promise, this._result))) : A(this.promise, Error("Array Methods must be provided an Array"))
                        }
                        a.prototype._enumerate = function(a) {
                            for (var d = 0; this._state === ia && d < a.length; d++)
                                this._eachEntry(a[d], d)
                        }
                        ;
                        a.prototype._eachEntry = function(a, d) {
                            var b = this._instanceConstructor
                              , f = b.resolve;
                            f === J ? (f = Q(a),
                            f === y && a._state !== ia ? this._settledAt(a._state, d, a._result) : "function" !== typeof f ? (this._remaining--,
                            this._result[d] = a) : b === S ? (b = new b(r),
                            t(b, a, f),
                            this._willSettleAt(b, d)) : this._willSettleAt(new b(function(d) {
                                return d(a)
                            }
                            ), d)) : this._willSettleAt(f(a), d)
                        }
                        ;
                        a.prototype._settledAt = function(a, d, b) {
                            var f = this.promise;
                            f._state === ia && (this._remaining--,
                            a === H ? A(f, b) : this._result[d] = b);
                            0 === this._remaining && w(f, this._result)
                        }
                        ;
                        a.prototype._willSettleAt = function(a, d) {
                            var b = this;
                            C(a, z, function(a) {
                                return b._settledAt(U, d, a)
                            }, function(a) {
                                return b._settledAt(H, d, a)
                            })
                        }
                        ;
                        return a
                    }()
                      , S = function() {
                        function d(a) {
                            this[P] = W++;
                            this._result = this._state = z;
                            this._subscribers = [];
                            if (r !== a) {
                                if ("function" !== typeof a)
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                if (this instanceof d)
                                    L(this, a);
                                else
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                            }
                        }
                        d.prototype["catch"] = function(a) {
                            return this.then(null, a)
                        }
                        ;
                        d.prototype["finally"] = function(d) {
                            var b = this.constructor;
                            return a(d) ? this.then(function(a) {
                                return b.resolve(d()).then(function() {
                                    return a
                                })
                            }, function(a) {
                                return b.resolve(d()).then(function() {
                                    throw a;
                                })
                            }) : this.then(d, d)
                        }
                        ;
                        return d
                    }();
                    S.prototype.then = y;
                    S.all = function(a) {
                        return (new aa(this,a)).promise
                    }
                    ;
                    S.race = function(a) {
                        var d = this;
                        return O(a) ? new d(function(b, f) {
                            for (var c = a.length, e = 0; e < c; e++)
                                d.resolve(a[e]).then(b, f)
                        }
                        ) : new d(function(a, d) {
                            return d(new TypeError("You must pass an array to race."))
                        }
                        )
                    }
                    ;
                    S.resolve = J;
                    S.reject = function(a) {
                        var d = new this(r);
                        A(d, a);
                        return d
                    }
                    ;
                    S._setScheduler = function(a) {
                        N = a
                    }
                    ;
                    S._setAsap = function(a) {
                        X = a
                    }
                    ;
                    S._asap = X;
                    S.polyfill = function() {
                        var a = void 0;
                        if ("undefined" !== typeof global)
                            a = global;
                        else if ("undefined" !== typeof self)
                            a = self;
                        else
                            try {
                                a = Function("return this")()
                            } catch (V) {
                                throw Error("polyfill failed because global object is unavailable in this environment");
                            }
                        var d = a.Promise;
                        if (d) {
                            var b = null;
                            try {
                                b = Object.prototype.toString.call(d.resolve())
                            } catch (V) {}
                            if ("[object Promise]" === b && !d.cast)
                                return
                        }
                        a.Promise = S
                    }
                    ;
                    return S.Promise = S
                })
            }
            ).call(this, c(39))
        }
        , function(a, b) {
            function c(b, g) {
                a.exports = c = Object.setPrototypeOf || function(a, b) {
                    a.__proto__ = b;
                    return a
                }
                ;
                return c(b, g)
            }
            a.exports = c
        }
        , function(a, b, c) {
            b = function() {
                return this || "object" === typeof self && self
            }() || Function("return this")();
            var e = b.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(b).indexOf("regeneratorRuntime")
              , g = e && b.regeneratorRuntime;
            b.regeneratorRuntime = z;
            a.exports = c(90);
            if (e)
                b.regeneratorRuntime = g;
            else
                try {
                    delete b.regeneratorRuntime
                } catch (p) {
                    b.regeneratorRuntime = z
                }
        }
        , function(a, b, c) {
            (function(b, c) {
                !function(e) {
                    function h(a, d, b, c) {
                        d = Object.create((d && d.prototype instanceof f ? d : f).prototype);
                        c = new B(c || []);
                        d._invoke = n(a, b, c);
                        return d
                    }
                    function g(a, d, b) {
                        try {
                            return {
                                type: "normal",
                                arg: a.call(d, b)
                            }
                        } catch (ca) {
                            return {
                                type: "throw",
                                arg: ca
                            }
                        }
                    }
                    function f() {}
                    function d() {}
                    function l() {}
                    function p(a) {
                        ["next", "throw", "return"].forEach(function(d) {
                            a[d] = function(a) {
                                return this._invoke(d, a)
                            }
                        })
                    }
                    function k(a) {
                        function d(b, f, e, l) {
                            b = g(a[b], a, f);
                            if ("throw" === b.type)
                                l(b.arg);
                            else {
                                var h = b.arg;
                                return (b = h.value) && "object" === typeof b && w.call(b, "__await") ? c.resolve(b.__await).then(function(a) {
                                    d("next", a, e, l)
                                }, function(a) {
                                    d("throw", a, e, l)
                                }) : c.resolve(b).then(function(a) {
                                    h.value = a;
                                    e(h)
                                }, function(a) {
                                    return d("throw", a, e, l)
                                })
                            }
                        }
                        var b;
                        this._invoke = function(a, f) {
                            function e() {
                                return new c(function(b, c) {
                                    d(a, f, b, c)
                                }
                                )
                            }
                            return b = b ? b.then(e, e) : e()
                        }
                    }
                    function n(a, d, b) {
                        var f = I;
                        return function(c, e) {
                            if (f === G)
                                throw Error("Generator is already running");
                            if (f === O) {
                                if ("throw" === c)
                                    throw e;
                                return t()
                            }
                            b.method = c;
                            for (b.arg = e; ; ) {
                                var l = b.delegate;
                                if (l && (l = r(l, b))) {
                                    if (l === H)
                                        continue;
                                    return l
                                }
                                if ("next" === b.method)
                                    b.sent = b._sent = b.arg;
                                else if ("throw" === b.method) {
                                    if (f === I)
                                        throw f = O,
                                        b.arg;
                                    b.dispatchException(b.arg)
                                } else
                                    "return" === b.method && b.abrupt("return", b.arg);
                                f = G;
                                l = g(a, d, b);
                                if ("normal" === l.type) {
                                    f = b.done ? O : L;
                                    if (l.arg === H)
                                        continue;
                                    return {
                                        value: l.arg,
                                        done: b.done
                                    }
                                }
                                "throw" === l.type && (f = O,
                                b.method = "throw",
                                b.arg = l.arg)
                            }
                        }
                    }
                    function r(a, d) {
                        var b = a.iterator[d.method];
                        if (b === v) {
                            d.delegate = null;
                            if ("throw" === d.method) {
                                if (a.iterator["return"] && (d.method = "return",
                                d.arg = v,
                                r(a, d),
                                "throw" === d.method))
                                    return H;
                                d.method = "throw";
                                d.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return H
                        }
                        b = g(b, a.iterator, d.arg);
                        if ("throw" === b.type)
                            return d.method = "throw",
                            d.arg = b.arg,
                            d.delegate = null,
                            H;
                        b = b.arg;
                        if (!b)
                            return d.method = "throw",
                            d.arg = new TypeError("iterator result is not an object"),
                            d.delegate = null,
                            H;
                        if (b.done)
                            d[a.resultName] = b.value,
                            d.next = a.nextLoc,
                            "return" !== d.method && (d.method = "next",
                            d.arg = v);
                        else
                            return b;
                        d.delegate = null;
                        return H
                    }
                    function q(a) {
                        var d = {
                            tryLoc: a[0]
                        };
                        1 in a && (d.catchLoc = a[1]);
                        2 in a && (d.finallyLoc = a[2],
                        d.afterLoc = a[3]);
                        this.tryEntries.push(d)
                    }
                    function u(a) {
                        var d = a.completion || {};
                        d.type = "normal";
                        delete d.arg;
                        a.completion = d
                    }
                    function B(a) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }];
                        a.forEach(q, this);
                        this.reset(!0)
                    }
                    function T(a) {
                        if (a) {
                            var d = a[C];
                            if (d)
                                return d.call(a);
                            if ("function" === typeof a.next)
                                return a;
                            if (!isNaN(a.length)) {
                                var b = -1;
                                d = function M() {
                                    for (; ++b < a.length; )
                                        if (w.call(a, b))
                                            return M.value = a[b],
                                            M.done = !1,
                                            M;
                                    M.value = v;
                                    M.done = !0;
                                    return M
                                }
                                ;
                                return d.next = d
                            }
                        }
                        return {
                            next: t
                        }
                    }
                    function t() {
                        return {
                            value: v,
                            done: !0
                        }
                    }
                    var z = Object.prototype, w = z.hasOwnProperty, v, A = "function" === typeof b ? b : {}, C = A.iterator || "@@iterator", F = A.asyncIterator || "@@asyncIterator", D = A.toStringTag || "@@toStringTag";
                    A = "object" === typeof a;
                    var E = e.regeneratorRuntime;
                    if (E)
                        A && (a.exports = E);
                    else {
                        E = e.regeneratorRuntime = A ? a.exports : {};
                        E.wrap = h;
                        var I = "suspendedStart"
                          , L = "suspendedYield"
                          , G = "executing"
                          , O = "completed"
                          , H = {};
                        e = {};
                        e[C] = function() {
                            return this
                        }
                        ;
                        (A = (A = Object.getPrototypeOf) && A(A(T([])))) && A !== z && w.call(A, C) && (e = A);
                        var N = l.prototype = f.prototype = Object.create(e);
                        d.prototype = N.constructor = l;
                        l.constructor = d;
                        l[D] = d.displayName = "GeneratorFunction";
                        E.isGeneratorFunction = function(a) {
                            return (a = "function" === typeof a && a.constructor) ? a === d || "GeneratorFunction" === (a.displayName || a.name) : !1
                        }
                        ;
                        E.mark = function(a) {
                            Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : (a.__proto__ = l,
                            D in a || (a[D] = "GeneratorFunction"));
                            a.prototype = Object.create(N);
                            return a
                        }
                        ;
                        E.awrap = function(a) {
                            return {
                                __await: a
                            }
                        }
                        ;
                        p(k.prototype);
                        k.prototype[F] = function() {
                            return this
                        }
                        ;
                        E.AsyncIterator = k;
                        E.async = function(a, d, b, f) {
                            var c = new k(h(a, d, b, f));
                            return E.isGeneratorFunction(d) ? c : c.next().then(function(a) {
                                return a.done ? a.value : c.next()
                            })
                        }
                        ;
                        p(N);
                        N[D] = "Generator";
                        N[C] = function() {
                            return this
                        }
                        ;
                        N.toString = function() {
                            return "[object Generator]"
                        }
                        ;
                        E.keys = function(a) {
                            var d = [], b;
                            for (b in a)
                                d.push(b);
                            d.reverse();
                            return function M() {
                                for (; d.length; ) {
                                    var b = d.pop();
                                    if (b in a)
                                        return M.value = b,
                                        M.done = !1,
                                        M
                                }
                                M.done = !0;
                                return M
                            }
                        }
                        ;
                        E.values = T;
                        B.prototype = {
                            constructor: B,
                            reset: function(a) {
                                this.next = this.prev = 0;
                                this.sent = this._sent = v;
                                this.done = !1;
                                this.delegate = null;
                                this.method = "next";
                                this.arg = v;
                                this.tryEntries.forEach(u);
                                if (!a)
                                    for (var d in this)
                                        "t" === d.charAt(0) && w.call(this, d) && !isNaN(+d.slice(1)) && (this[d] = v)
                            },
                            stop: function() {
                                this.done = !0;
                                var a = this.tryEntries[0].completion;
                                if ("throw" === a.type)
                                    throw a.arg;
                                return this.rval
                            },
                            dispatchException: function(a) {
                                function d(d, f) {
                                    e.type = "throw";
                                    e.arg = a;
                                    b.next = d;
                                    f && (b.method = "next",
                                    b.arg = v);
                                    return !!f
                                }
                                if (this.done)
                                    throw a;
                                for (var b = this, f = this.tryEntries.length - 1; 0 <= f; --f) {
                                    var c = this.tryEntries[f]
                                      , e = c.completion;
                                    if ("root" === c.tryLoc)
                                        return d("end");
                                    if (c.tryLoc <= this.prev) {
                                        var l = w.call(c, "catchLoc")
                                          , h = w.call(c, "finallyLoc");
                                        if (l && h) {
                                            if (this.prev < c.catchLoc)
                                                return d(c.catchLoc, !0);
                                            if (this.prev < c.finallyLoc)
                                                return d(c.finallyLoc)
                                        } else if (l) {
                                            if (this.prev < c.catchLoc)
                                                return d(c.catchLoc, !0)
                                        } else if (h) {
                                            if (this.prev < c.finallyLoc)
                                                return d(c.finallyLoc)
                                        } else
                                            throw Error("try statement without catch or finally");
                                    }
                                }
                            },
                            abrupt: function(a, d) {
                                for (var b = this.tryEntries.length - 1; 0 <= b; --b) {
                                    var f = this.tryEntries[b];
                                    if (f.tryLoc <= this.prev && w.call(f, "finallyLoc") && this.prev < f.finallyLoc) {
                                        var c = f;
                                        break
                                    }
                                }
                                c && ("break" === a || "continue" === a) && c.tryLoc <= d && d <= c.finallyLoc && (c = null);
                                b = c ? c.completion : {};
                                b.type = a;
                                b.arg = d;
                                return c ? (this.method = "next",
                                this.next = c.finallyLoc,
                                H) : this.complete(b)
                            },
                            complete: function(a, d) {
                                if ("throw" === a.type)
                                    throw a.arg;
                                "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg,
                                this.method = "return",
                                this.next = "end") : "normal" === a.type && d && (this.next = d);
                                return H
                            },
                            finish: function(a) {
                                for (var d = this.tryEntries.length - 1; 0 <= d; --d) {
                                    var b = this.tryEntries[d];
                                    if (b.finallyLoc === a)
                                        return this.complete(b.completion, b.afterLoc),
                                        u(b),
                                        H
                                }
                            },
                            "catch": function(a) {
                                for (var d = this.tryEntries.length - 1; 0 <= d; --d) {
                                    var b = this.tryEntries[d];
                                    if (b.tryLoc === a) {
                                        a = b.completion;
                                        if ("throw" === a.type) {
                                            var f = a.arg;
                                            u(b)
                                        }
                                        return f
                                    }
                                }
                                throw Error("illegal catch attempt");
                            },
                            delegateYield: function(a, d, b) {
                                this.delegate = {
                                    iterator: T(a),
                                    resultName: d,
                                    nextLoc: b
                                };
                                "next" === this.method && (this.arg = v);
                                return H
                            }
                        }
                    }
                }(function() {
                    return this || "object" === typeof self && self
                }() || Function("return this")())
            }
            ).call(this, c(25)["default"], c(22).Promise)
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "MapUtils", function() {
                return e
            });
            var e = {
                setIfNotExists: function(a, b, c) {
                    !1 === a.has(b) && a.set(b, this.invoke(c))
                },
                getOrSet: function(a, b, c) {
                    if (a.has(b))
                        return a.get(b);
                    c = this.invoke(c);
                    a.set(b, c);
                    return c
                },
                getAndUpdate: function(a, b, c) {
                    var e = c = this.invoke(c);
                    a.has(b) && (e = a.get(b));
                    a.set(b, c);
                    return e
                }
            }
        }
        , function(a, b, c) {
            c.r(b);
            c.d(b, "MathUtils", function() {
                return g
            });
            var e = c(4)
              , g = {
                toChunks: function(a, b) {
                    var c = a.slice(0)
                      , f = c.length
                      , d = f === b ? Math.round : Math.floor
                      , l = 0;
                    return c.reduce(function(a, h, g) {
                        var m = d(b / (f / g));
                        0 < g && 1 < m - l && e["default"].warn("Invalid index " + m + ": " + d(b / (f / (g - 1))) + " \x3c\x3d\x3e " + d(b / (f / g)), [c.length, g, b], [c.length / g], [b / (c.length / g)]);
                        l = m;
                        a[m] = a[m] || [];
                        a[m].push(h);
                        return a
                    }, [])
                },
                split: function(a, b) {
                    return a.reduce(function(a, f, d) {
                        d = Math.floor(d / b);
                        a[d] = (a[d] || []).concat(f);
                        return a
                    }, [])
                },
                avg: function(a) {
                    return a.length ? a.reduce(function(a, b) {
                        return a + b
                    }) / a.length : NaN
                },
                max: function(a) {
                    var b = NaN;
                    if (0 < a.length) {
                        var c = a.length - 2;
                        for (b = a[a.length - 1]; 0 <= c; c--)
                            b = b > a[c] ? b : a[c]
                    }
                    return b
                },
                random: function(a, b) {
                    void 0 === a && (a = 0);
                    return Math.round(Math.random() * b + a)
                }
            }
        }
        ])["default"]
    } catch (a) {
        Qa = {
            error: a,
            scope: "recoder"
        }
    }
    var k = {
        mixin: function(a) {
            var b, c;
            for (b = 1; b < arguments.length; b++)
                if (arguments[b]) {
                    for (c in arguments[b])
                        arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                    arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
                }
            return a
        }
    }
      , G = function(a) {
        a = a || {};
        k.mixin(this, a);
        this._initComponent()
    };
    G.prototype._initComponent = function() {}
    ;
    G.inherit = function(a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        }
        );
        var c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        k.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = G.inherit;
        return a.constructor
    }
    ;
    k.forEachKey = function(a, b, c) {
        for (var e in a)
            a.hasOwnProperty(e) && b.call(c, e, a[e], a)
    }
    ;
    k.isEqual = function(a, b) {
        var c = !0;
        k.forEachKey(a, function(a, g) {
            b.hasOwnProperty(a) && b[a] === g || (c = !1)
        });
        if (!c)
            return c;
        k.forEachKey(b, function(b, g) {
            a.hasOwnProperty(b) && a[b] === g || (c = !1)
        });
        return c
    }
    ;
    k.getNativeFunction = function(a, b) {
        b = b || n;
        var c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a];
        try {
            if (c && c.apply)
                return function() {
                    return c.apply(b, arguments)
                }
        } catch (e) {
            return b[a]
        }
        return c
    }
    ;
    k.setTimeout = function(a, b, c) {
        return k.getNativeFunction("setTimeout")(F(a, c || "setTimeout"), b)
    }
    ;
    var u = G.inherit({
        _initComponent: function() {
            u.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        },
        on: function(a, b, c, e, g) {
            g = u._getOpts(g);
            b = b.split(",");
            var p = b.length, h = this._listeners, m;
            for (m = 0; m < p; m++) {
                var f = b[m];
                var d = F(function(a) {
                    c.call(e || this, a || n.event)
                }, "on" + (f || "") + (g.name || ""));
                h[h.length] = [a, f, c, e, g, d];
                a.addEventListener ? a.addEventListener(f, d, u._prepOpts(g)) : a.attachEvent && a.attachEvent("on" + f, d)
            }
        },
        un: function(a, b, c, e, g) {
            g = u._getOpts(g);
            var p = this._listeners, h = p.length, m;
            for (m = 0; m < h; m++) {
                var f = p[m];
                if (f[0] == a && f[1] == b && f[2] == c && f[3] == e && k.isEqual(f[4], g)) {
                    p.splice(m, 1);
                    this._removeListener(a, b, f[5], g);
                    break
                }
            }
        },
        unAll: function() {
            var a = this._listeners, b = a.length, c;
            for (c = 0; c < b; c++) {
                var e = a[c];
                this._removeListener(e[0], e[1], e[5], e[4])
            }
            a.length = 0
        },
        _removeListener: function(a, b, c, e) {
            a.removeEventListener ? a.removeEventListener(b, c, u._prepOpts(e)) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    u.supportsPassive = function() {
        if (u._supportsPassive !== z)
            return u._supportsPassive;
        u._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    u._supportsPassive = !0
                }
            });
            n.addEventListener("test", null, a)
        } catch (b) {}
        return u._supportsPassive
    }
    ;
    u._getOpts = function(a) {
        return k.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    }
    ;
    u._prepOpts = function(a) {
        return u.supportsPassive() ? a : !!a.capture
    }
    ;
    u.on = function() {
        u._instance || (u._instance = new u);
        u._instance.on.apply(u._instance, arguments)
    }
    ;
    u.un = function() {
        u._instance && u._instance.un.apply(u._instance, arguments)
    }
    ;
    var w = {
        UNLOAD_MS: 0,
        isPerfomance: n.performance && n.performance.timing && n.performance.timing.navigationStart && n.performance.now,
        getMs: function() {
            return 0 < this.UNLOAD_MS ? this.UNLOAD_MS : this.isPerfomance ? Math.round(n.performance.timing.navigationStart + n.performance.now()) : w.oldMs()
        },
        getFormStart: function() {
            return this.isPerfomance ? Math.round(n.performance.now()) : this.getMs() - this.initTime
        }
    };
    w.oldMs = Date.now ? Date.now : function() {
        return (new Date).getTime()
    }
    ;
    w.initTime = w.getMs();
    u.on(n, "beforeunload,unload", function() {
        0 === w.UNLOAD_MS && (w.UNLOAD_MS = w.getMs())
    });
    k.pad = function(a) {
        return (10 > a ? "0" : "") + a
    }
    ;
    w.getTimestamp = function() {
        var a = new Date;
        a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()];
        var b = "", c;
        for (c = 0; c < a.length; c++)
            b += k.pad(a[c]);
        return b
    }
    ;
    w.getTimezone = function() {
        return -(new Date).getTimezoneOffset()
    }
    ;
    w.getMinutes = function() {
        return Math.floor(this.getMs() / 1E3 / 60)
    }
    ;
    w.getSeconds = function() {
        return Math.round(this.getMs() / 1E3)
    }
    ;
    w.isPerfomance || (w.deltaTime = 0,
    w.lastNowTime = 0,
    w.correctTime = 0,
    w.timeCorrector = function(a) {
        w.correctTime = w.getMs();
        a && w.correctTime < w.lastTime && (w.deltaTime += a - w.correctTime + 20);
        k.setTimeout(function() {
            w.timeCorrector(w.correctTime)
        }, 20, "timeCorrector")
    }
    );
    w.initCorrector = function() {
        w.isPerfomance || w.timeCorrector(0)
    }
    ;
    w.nowTime = function() {
        if (this.isPerfomance)
            return this.getMs();
        var a = this.getMs() + w.deltaTime;
        a < w.lastNowTime && (a += w.lastNowTime + 10);
        return w.lastNowTime = a
    }
    ;
    w.nowEventTime = function() {
        return Math.round((w.nowTime() - w.initTime) / 50)
    }
    ;
    k.toString = function(a) {
        return Object.prototype.toString.call(a)
    }
    ;
    k.isFunction = function(a) {
        return "function" === typeof a
    }
    ;
    k.isArray = function(a) {
        return "function" === k.isFunction(Array.isArray) ? Array.isArray(a) : "[object Array]" === k.toString(a)
    }
    ;
    k.mergeArrays = function(a) {
        var b, c, e = arguments.length;
        for (b = 1; b < e; b++) {
            var g = arguments[b];
            if (k.isArray(g) || g && "[object Arguments]" === g.toString())
                for (c = 0; c < g.length; c++)
                    a[a.length] = g[c]
        }
        return a
    }
    ;
    k.defer = function(a, b, c, e, g) {
        return k.setTimeout(function() {
            a.apply(c, e || [])
        }, b, g)
    }
    ;
    k.throttle = function(a, b, c, e) {
        var g, p, h;
        return function() {
            p = arguments;
            h = this;
            g || function() {
                g = null;
                p && (a.apply(c || h, p),
                p = null,
                g = k.setTimeout(arguments.callee, b, e))
            }()
        }
    }
    ;
    var Ja = G.inherit({
        storage: null,
        storageKey: "dataBuffer",
        store: {
            _keys: [],
            _values: [],
            get: function(a) {
                a = k.arrayIndexOf(this._keys, a);
                return -1 == a ? null : this._values[a]
            },
            set: function(a, b) {
                this._keys.push(a);
                this._values.push(b)
            },
            pop: function(a) {
                a = k.arrayIndexOf(this._keys, a);
                if (-1 == a)
                    return null;
                var b = this._values[a];
                this._keys.splice(a, 1);
                this._values.splice(a, 1);
                return b
            }
        },
        maxBufferSize: 255,
        flushTimeout: 1E4,
        startBufferTime: 0,
        active: !0,
        meta: null,
        onFlush: function() {},
        onFlushCtx: null,
        bufferExpireTime: 864E5,
        _initComponent: function() {
            var a;
            Ja.superclass._initComponent.apply(this, arguments);
            this.wrappers = [];
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = k.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            this.storage && (a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +w.getMs() && this.onFlush.call(this.onFlushCtx || this, this.dataFromStorage(a.data), a.meta, a.pnum);
            this.clear()
        },
        setWVType: function(a) {
            this.wvType = a;
            this._sender.version = a
        },
        getFlushSize: function() {
            return this._data.length
        },
        mergeData: function(a, b) {
            k.mergeArrays(a, b)
        },
        updateStamp: function(a, b) {
            a.stamp !== z && (b.stamp = a.stamp,
            "eof" !== a.type && delete a.stamp)
        },
        append: function(a, b) {
            this.mergeData(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this.getFlushSize() >= this.maxBufferSize || this.getFlushSize() === this.maxChunkSize) && this._flush(b),
            this._flushTID || (this._flushTID = k.defer(this._flush, this.flushTimeout, this, [b], "DataBuffer._flush")))
        },
        activate: function() {
            this.active || (this.active = !0,
            this.append([]))
        },
        clear: function() {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        },
        _flush: function(a) {
            if (!this.getFlushSize())
                return this.clear(),
                !1;
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber, a);
            this._packetNumber++;
            this.clear()
        },
        dataFromStorage: function(a) {
            return a
        },
        dataToStorage: function(a) {
            return a
        },
        _saveToStorage: function() {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this.dataToStorage(this._data),
                meta: this.meta,
                pnum: this._packetNumber,
                time: w.getMs()
            })
        }
    })
      , wb = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" ")
      , A = {
        storage: {},
        init: function() {
            var a = this;
            F(function() {
                n.Ya = n.Ya || {};
                n.Ya._metrika = n.Ya._metrika || {};
                a.storage = n.Ya._metrika
            }, "", !0)();
            return this
        },
        setSafe: function(a, b) {
            var c = this;
            F(function() {
                c.storage[a] === z && (c.storage[a] = b)
            }, "", !0)();
            return this
        },
        set: function(a, b) {
            F(function() {
                n.Ya._metrika[a] = b
            }, "", !0)();
            return this
        },
        get: function(a, b) {
            return F(function() {
                var c = n.Ya._metrika[a];
                return c === z ? b : c
            }, "", !0)()
        }
    };
    k.async = function(a, b, c) {
        if (n.postMessage) {
            var e = "__ym__promise" + Math.random() + "_" + w.getMs();
            var g = function(c) {
                try {
                    var h = c.data
                } catch (m) {
                    return
                }
                h === e && (c.stopPropagation && c.stopPropagation(),
                a.call(b),
                u.un(n, "message", g, null, {
                    passive: !1
                }))
            };
            u.on(n, "message", g, null, {
                passive: !1,
                name: ".async." + (c || "")
            });
            n.postMessage(e, "*")
        } else
            k.setTimeout(function() {
                a.call(b)
            }, 0)
    }
    ;
    var Tb = G.inherit({
        transports: [],
        globalConfig: A,
        postParams: [],
        isDisabled: function() {
            return this.globalConfig.get("oo")
        },
        send: function(a, b, c, e) {
            var g = [a]
              , p = this
              , h = c || function() {}
            ;
            p.isDisabled() ? h.call(e) : function d(a) {
                if (a < this.transports.length)
                    try {
                        var f = new this.transports[a]({
                            postParams: this.postParams,
                            queryStringParams: this.queryStringParams
                        });
                        b["browser-info"] = f.logInfo(b["browser-info"]);
                        (function J(c) {
                            c >= g.length ? f.blockNext() || d.call(this, a + 1) : f.request(g[c], b, function(a, d, b) {
                                a ? h.call(e, d, b) : k.async(function() {
                                    J.call(p, c + 1)
                                }, this, "senderCall")
                            }, this)
                        }
                        ).call(this, 0)
                    } catch (x) {
                        cb(x, "send by " + (f && f.id)),
                        d.call(this, a + 1)
                    }
            }
            .call(this, 0)
        }
    })
      , Da = {};
    k.keys = function(a) {
        var b, c = [];
        for (b in a)
            a.hasOwnProperty(b) && c.push(b);
        return c
    }
    ;
    k.map = function(a, b) {
        var c, e = [];
        for (c = 0; c < b.length; c++)
            e.push(a(b[c], c));
        return e
    }
    ;
    Da.stringify = function(a, b) {
        var c = [], e = b || {}, g = {}, p = k.keys(a).length, h, m;
        if (e.lastOrdering !== z)
            for (m = 1; m <= b.lastOrdering.length; m++)
                g[b.lastOrdering[m - 1]] = p + m;
        if (e.firstOrdering !== z)
            for (m = 0; m < b.firstOrdering.length; m++)
                g[b.firstOrdering[m]] = m;
        for (h in a)
            if (a.hasOwnProperty(h))
                if (e = a[h],
                k.isArray(e))
                    for (m = 0; m < e.length; m++)
                        c.push({
                            key: h,
                            value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(e[m]))
                        });
                else
                    c.push({
                        key: h,
                        value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(e))
                    });
        c.sort(function(a, d) {
            var b = g[a.key]
              , f = g[d.key];
            "undefined" === typeof b && (b = p);
            "undefined" === typeof f && (f = p);
            return b - f
        });
        return k.map(function(a) {
            return a.value
        }, c).join("\x26")
    }
    ;
    k.inArray = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    var va = G.inherit({
        postParams: [],
        index: 0,
        blockNext: function() {
            return !1
        },
        logInfo: function(a) {
            var b;
            if (a)
                return a = (b = a.match(/^ti:\d:/)) ? a.replace(b[0], "") : a,
                "ti:" + this.index + ":" + a
        },
        _buildUrl: function(a, b) {
            var c = Da.stringify(b, this.queryStringParams);
            return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
        },
        _splitParams: function(a) {
            var b = {}
              , c = {};
            k.forEachKey(a, function(a, g) {
                k.inArray(this.postParams, a) ? c[a] = g : b[a] = g
            }, this);
            return {
                get: b,
                post: c
            }
        },
        _parseResp: function(a) {
            return a
        }
    })
      , Va = va.inherit({
        id: "XHR",
        index: 7,
        method: "POST",
        withCredentials: !0,
        request: function(a, b, c, e) {
            var g = this, p;
            if (/[^a-z0-9.:-]/.test(I.host) && n.opera && "function" === typeof n.opera.version) {
                var h = n.opera.version();
                if ("string" === typeof h && "12" === h.split(".")[0])
                    return c.call(e, !1)
            }
            if (n.XMLHttpRequest) {
                var m = new XMLHttpRequest;
                if ("withCredentials"in m) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    try {
                        m.open(this.method, a, !0)
                    } catch (f) {
                        return c.call(e, !1)
                    }
                    m.withCredentials = this.withCredentials;
                    this._setHeaders(m);
                    m.send(this._preparePostParams(b));
                    m.onreadystatechange = function() {
                        if (4 === m.readyState) {
                            try {
                                p = g._parseResp(m.responseText)
                            } catch (f) {
                                return c.call(e, !1)
                            }
                            c.apply(e, [200 === m.status].concat(p))
                        }
                    }
                    ;
                    this._timeOutCheck(m, c, e);
                    return
                }
            }
            c.call(e, !1)
        },
        _timeOutCheck: function(a, b, c) {
            this.timeout && (a.timeout = this.timeout,
            k.setTimeout(function() {
                a.abort ? a.abort() : b.call(c, !1)
            }, this.timeout + 100))
        },
        setMethod: function(a) {
            this.method = a
        },
        _preparePostParams: function(a) {
            return Da.stringify(a.post)
        },
        _setHeaders: function(a) {
            a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        }
    })
      , v = {};
    k.memorize = function(a, b) {
        var c = "memorize";
        return function() {
            "memorize" === c && (c = a.apply(b || this, arguments));
            return c
        }
    }
    ;
    v.isAndroidWebView = F(function() {
        var a = navigator.userAgent || "";
        return a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) || a.match(/Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/) || a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
    }, "isAndroidWebView");
    var Ub = va.inherit({
        id: "beacon",
        index: 1,
        request: function(a, b, c, e) {
            "function" === typeof navigator.sendBeacon && !v.isAndroidWebView() && navigator.onLine ? (b = this._splitParams(b),
            b.get["force-urlencoded"] = 1,
            c.call(e, navigator.sendBeacon(this._buildUrl(a, b.get), Da.stringify(b.post)))) : c.call(e, !1)
        }
    });
    k.random = function(a, b) {
        2 > arguments.length && (b = a,
        a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    }
    ;
    var Wa = va.inherit({
        id: "form",
        index: 2,
        enctype: "application/x-www-form-urlencoded",
        htmlfileOnly: !1,
        _initComponent: function() {
            Wa.superclass._initComponent.apply(this, arguments);
            "_htmlfile"in Wa.prototype || (Wa.prototype._htmlfile = this._createHtmlfile());
            this._doc = this._htmlfile || (this.htmlfileOnly ? null : q)
        },
        request: function(a, b, c, e) {
            var g = this._doc;
            if (!g)
                return c.call(e, !1);
            b = this._splitParams(b);
            var p = "ifr" + k.random();
            var h = g.createElement("div");
            h.style.position = "absolute";
            h.style.left = "-99999px";
            h.style.top = "-99999px";
            var m = ['\x3ciframe name\x3d"', p, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', p, '" enctype\x3d"', this.enctype, '"\x3e'];
            k.forEachKey(b.post, function(a) {
                k.mergeArrays(m, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'])
            });
            k.mergeArrays(m, ["\x3c/form\x3e"]);
            h.innerHTML = m.join("");
            g.body.appendChild(h);
            var f = h.getElementsByTagName("form")[0];
            k.forEachKey(b.post, function(a, b) {
                f[a].value = b
            });
            f.submit();
            k.setTimeout(function() {
                g.body.removeChild(h)
            }, 1E4, "TransportForm.request.2");
            return c.call(e, !0, "tf.request")
        },
        _createHtmlfile: function() {
            try {
                if (n.ActiveXObject) {
                    var a = new ActiveXObject("htmlfile");
                    a.open();
                    a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                    a.close();
                    return a
                }
            } catch (b) {}
            return null
        }
    })
      , Vb = Wa.inherit({
        id: "htmlfile",
        index: 3,
        htmlfileOnly: !0
    })
      , wa = va.inherit({
        id: "img",
        index: 4,
        request: function(a, b, c, e) {
            a = this._buildUrl(a, b);
            var g = !1;
            b = q.createElement("img");
            c = c || function() {}
            ;
            b.onload = F(function() {
                g || (c.call(e, !0),
                g = !0)
            }, "TransportImage.request");
            b.onerror = F(function() {
                g || (c.call(e, !1),
                g = !0)
            }, "TransportImage.request");
            b.src = a;
            this.timeout && k.setTimeout(function() {
                g || (c.call(e, !1),
                g = !0)
            }, this.timeout, "ti.request")
        }
    })
      , aa = {
        stringify: function(a) {
            try {
                var b = JSON.stringify(a)
            } catch (c) {}
            return k.inArray(["{}", z], b) ? "null" : b
        }
    };
    k.toJSON = function(a) {
        var b;
        if (a === z)
            return "";
        if (null === a)
            return "null";
        switch (a.constructor) {
        case Boolean:
            return a.toString();
        case Number:
            return isFinite(a) ? a.toString() : "null";
        case String:
            return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
        case Array:
            var c = [];
            var e = 0;
            for (b = a.length; e < b; e++)
                c[c.length] = k.toJSON(a[e]);
            return "[" + c.join(",") + "]";
        case Object:
            c = [];
            for (e in a)
                a.hasOwnProperty(e) && a[e] !== z && (c[c.length] = k.toJSON(e) + ":" + k.toJSON(a[e]));
            return "{" + c.join(",") + "}";
        default:
            return aa.stringify(a)
        }
    }
    ;
    var na = G.inherit({
        counterId: "",
        _initComponent: function() {
            na.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = n.localStorage
            } catch (a) {}
        },
        set: function(a, b) {
            if (this.isEnabled())
                try {
                    !b || b && k.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), k.toJSON(b))
                } catch (c) {}
        },
        get: function(a) {
            if (this.isEnabled())
                try {
                    return JSON.parse(this._ls.getItem(this._getLsKey(a)))
                } catch (b) {}
            return null
        },
        remove: function(a) {
            if (this.isEnabled())
                try {
                    this._ls.removeItem(this._getLsKey(a))
                } catch (b) {}
        },
        isEnabled: function() {
            return this._ls && n.JSON && "object" == typeof this._ls && "object" == typeof n.JSON
        },
        getStorageId: function() {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * w.getMs()),
            this.set("lsid", a));
            return a
        },
        clearStorageId: function() {
            this.remove("lsid")
        },
        _getLsKey: function(a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    k.fnv32a = function(a) {
        var b = 2166136261, c;
        var e = 0;
        for (c = a.length; e < c; ++e)
            b ^= a.charCodeAt(e),
            b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    }
    ;
    k.getTld = function() {
        if (!this._tld) {
            var a = I.hostname.split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    }
    ;
    var oa = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/\x3d",
        tailSafe: "*-_"
    }
      , O = G.inherit({
        counterId: "",
        onlyCurrentDomain: !1,
        skipPrefix: !1,
        _initComponent: function() {
            var a;
            O.superclass._initComponent.apply(this, arguments);
            this._domain = null;
            if (!this.onlyCurrentDomain) {
                var b = n.location.host.split(".");
                for (a = 2; ; )
                    if (a <= b.length) {
                        if (this._domain = "." + b.slice(-a).join("."),
                        a++,
                        this.isEnabled())
                            break
                    } else {
                        this._domain = null;
                        break
                    }
            }
        },
        create: function(a, b, c) {
            a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)];
            c && (b = new Date,
            b.setTime(b.getTime() + 6E4 * c),
            a.push("expires\x3d" + b.toGMTString()));
            this._domain && a.push("domain\x3d" + this._domain);
            a.push("path\x3d/");
            try {
                q.cookie = a.join(";")
            } catch (e) {}
        },
        read: function(a) {
            try {
                var b = q.cookie
            } catch (c) {}
            return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
        },
        erase: function(a) {
            this.create(a, "", -1)
        },
        isEnabled: function() {
            this.create("metrika_enabled", "1", 60);
            var a = !!this.read("metrika_enabled");
            this.erase("metrika_enabled");
            return a
        },
        _prepareName: function(a) {
            return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
        }
    });
    O.get = function(a) {
        return (new O({
            onlyCurrentDomain: !0
        })).read(a)
    }
    ;
    O.set = function(a, b, c) {
        return (new O({
            onlyCurrentDomain: !0
        })).create(a, b, c)
    }
    ;
    O.isEnabled = function() {
        return (new O({
            onlyCurrentDomain: !0
        })).isEnabled()
    }
    ;
    k.isNativeFunction = function(a, b) {
        return a && "function" === typeof a ? (new RegExp("function\\s*" + b + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}","i")).test(a.toString()) : !1
    }
    ;
    var t = {
        removeNode: function(a) {
            var b = a && a.parentNode;
            b && b.removeChild(a)
        }
    };
    v.isSafariWebView = F(function() {
        var a = navigator.userAgent || "";
        return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && (!a.match(/Safari/) && a.match(/Mobile/) || a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== a.indexOf("FB_IAB") || -1 !== a.indexOf("FBAV") || -1 !== a.indexOf("OKApp") || -1 !== a.indexOf("GSA/"))
    }, "isSafariWebView");
    v.isSafari = function() {
        try {
            return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
        } catch (a) {}
        return !1
    }
    ;
    v.getMacOSVersion = F(function() {
        var a = navigator.userAgent.match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/);
        return a ? [+a[1], +a[2], +a[2]] : [0, 0, 0]
    }, "", !0);
    v.getPlatform = F(function() {
        return "" + navigator.platform
    }, "", !0);
    v.isIOS = F(function() {
        var a = v.getPlatform() || "";
        return "iPhone" === a || "iPad" === a
    }, "", !0);
    v.isFF = F(function(a) {
        var b = !1;
        n && n.document && n.document.documentElement && n.document.documentElement.style && (b = "MozAppearance"in n.document.documentElement.style && "undefined" !== typeof n.InstallTrigger);
        if (b && a && n.navigator && n.navigator.userAgent && n.navigator.userAgent.match) {
            var c = n.navigator.userAgent.match(/Firefox\/([0-9]+)/);
            b = !1;
            c && c.length && (c = +c[1],
            b = c >= a)
        }
        return b
    }, "isFF");
    var Ka = {
        _storage: new na,
        key: "zzlc",
        userInfo: "",
        updateInfo: function(a) {
            k.forEachKey(this.getInfoFlags(), function(b, c) {
                var e = c.call(this);
                e && (a[b] = e)
            }, this);
            return a
        },
        getZZ: function() {
            return this._storage.get(this.key) ? this._storage.get(this.key) : this.zz
        },
        getPP: function() {
            return this.globalConfig && this.globalConfig.get("pp") ? this.globalConfig.get("pp") : this.pp
        },
        getPU: function() {
            return this.globalConfig && this.globalConfig.get("pu") ? this.globalConfig.get("pu") : this.pu
        },
        getFip: function() {
            if (this._storage.get(this.fipKey))
                return this._storage.get(this.fipKey)
        },
        getInfoFlags: function() {
            return {
                zz: this.getZZ,
                pp: this.getPP,
                pu: this.getPU,
                fip: this.getFip
            }
        },
        checkVersion: function() {
            var a = v.getMacOSVersion();
            return !((v.isIOS() || 10 <= a[0] && 13 <= a[2]) && v.isSafari()) || v.isSafariWebView()
        },
        noop: function() {},
        genPu: function(a) {
            var b = k.fnv32a(n.location.host) + this.userInfo;
            this.pu = b;
            a.set("pu", b);
            return b
        },
        initPU: function(a, b) {
            var c = this
              , e = v.isFF(68);
            b.get("pu") !== z || this.checkVersion() && !e || (this.globalConfig = b,
            b.setSafe("pu", null),
            a.addHandler("gpu-get", function() {
                return {
                    type: "gpu-get",
                    pu: b.get("pu")
                }
            }, this),
            n.opener ? (k.setTimeout(function() {
                c.genPu(b)
            }, 200, "pu"),
            a.sendToIframe(n.opener, {
                type: "gpu-get"
            }, this.handleGpu, this)) : this.genPu(b))
        },
        handleGpu: function(a) {
            if (a = a.pu)
                this.pu = a,
                this.globalConfig.set("pu", a)
        },
        onicecandidate: F(function(a) {
            var b;
            try {
                var c = (b = a.localDescription.sdp) && b.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
            } catch (e) {
                a.onicecandidate = this.noop;
                "closed" !== a.iceConnectionState && a.close();
                return
            }
            c && 0 < c.length && (this.pp = k.fnv32a(c[1]),
            this.globalConfig.set("pp", this.pp));
            a.onicecandidate = this.noop;
            a.close()
        }, "wrt"),
        onOffer: function(a, b) {
            k.isFunction(a.setLocalDescription) && a.setLocalDescription(b, this.noop, this.noop)
        },
        initPP: F(function(a) {
            var b = n.RTCPeerConnection || n.mozRTCPeerConnection || n.webkitRTCPeerConnection;
            this.globalConfig = a;
            if (n.navigator.onLine && b && a.get("pp") == z && (this.globalConfig.setSafe("pp", null),
            b && b.prototype && b.prototype.constructor && b.prototype.constructor.name)) {
                try {
                    var c = new b({
                        iceServers: []
                    });
                    c.createDataChannel("y.metrika")
                } catch (g) {
                    return
                }
                if (k.isFunction(c.createOffer) && !c.createOffer.length) {
                    try {
                        var e = c.createOffer()
                    } catch (g) {
                        return
                    }
                    k.isFunction(e.then) && e.then(k.bind(this.onOffer, this, c));
                    c.onicecandidate = k.bind(this.onicecandidate, this, c)
                }
            }
        }, "rcinit"),
        initZZ: function() {
            var a = "ru";
            var b = v.isFF(68);
            var c = this;
            this.getZZ() || this.checkVersion() && !b || (b && (a = "md"),
            b = k.getNativeFunction("createElement", q)("iframe"),
            b.style.display = "none",
            b.style.width = "1px",
            b.style.height = "1px",
            b.style.visibility = "hidden",
            b.src = "https://mc.yandex." + a + oa.decode("L21ldHJpa2EvenpsYy5odG1s"),
            n.document.documentElement.appendChild(b),
            u.on(n, "message", this.onMessage, this, {
                passive: !1
            }),
            this.frame = b,
            this.timeout = k.setTimeout(function() {
                u.un(n, "message", c.onMessage, c, {
                    passive: !1
                });
                t.removeNode(c.frame);
                c.zz = "na"
            }, 3E3, "cd.initZZ"))
        },
        onMessage: function(a) {
            a.data && a.data.substr && "__ym__zz" === a.data.substr(0, 8) && (this.zz = a.data.substr(8),
            t.removeNode(this.frame),
            this._storage.set(this.key, this.zz),
            u.un(n, "message", this.onMessage, this, {
                passive: !1
            }),
            clearTimeout(this.timeout))
        },
        fipKey: "fip",
        fpFactors: ["webGL", "plugins", "applePay", "dnt"],
        initFip: function() {
            if (Object.keys && !this.checkVersion() && !this._storage.get(this.fipKey)) {
                var a = new ib(k.reduce(function(a, c) {
                    a[c] = 1;
                    return a
                }, {}, this.fpFactors));
                a = a.toString(!1).join("-");
                this._storage.set(this.fipKey, a)
            }
        }
    }
      , H = Tb.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        queryStringParams: {
            firstOrdering: ["wmode", "callback", "cnt-class"],
            lastOrdering: ["browser-info"]
        },
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [Ub, Va, wa, Vb],
        _initComponent: function() {
            H.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new na)
        },
        send: function(a, b, c, e) {
            var g = this.globalConfig.get(xa.globalKey)
              , p = this;
            g && 3 !== this.counterId ? g(function() {
                var h = p._registerRequest(a, b);
                p._sendSavedRequest(h, a, b, c, e)
            }, a) : (g = p._registerRequest(a, b),
            p._sendSavedRequest(g, a, b, c, e))
        },
        _sendSavedRequest: function(a, b, c, e, g) {
            var p = this.globalConfig.get("firstReqStatus")
              , h = b.forceNoRedirect;
            if ("process" == p)
                this.globalConfig.set("firstReqCallbacks", k.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [[this, arguments]]));
            else {
                p || this.globalConfig.set("firstReqStatus", "process");
                this.counterType && (b["cnt-class"] = this.counterType);
                this.globalConfig.get("pri") && (c.pri = this.globalConfig.get("pri"));
                c.st = w.getSeconds();
                c.u = H._userID;
                Ka.userInfo = H._userID;
                c = Ka.updateInfo(c);
                p = [this.protocol, "//", this.host, "/", this.resource, "/", this.counterId, h ? "/1" : ""].join("");
                delete b.forceNoRedirect;
                var m = [];
                c && (k.forEachKey(c, function(a, d) {
                    "t" != a && k.mergeArrays(m, [a, d])
                }),
                c.t && k.mergeArrays(m, ["t", c.t]));
                m.length && (b["browser-info"] = m.join(":"));
                return H.superclass.send.call(this, p, b, function() {
                    var b;
                    this.globalConfig.set("firstReqStatus", "complete");
                    this._unregisterRequest(a);
                    var d = this.globalConfig.get("firstReqCallbacks");
                    this.globalConfig.set("firstReqCallbacks", null);
                    if (d)
                        for (b = 0; b < d.length; b++)
                            d[b][0]._sendSavedRequest.apply(d[b][0], d[b][1]);
                    e && e.apply(g, arguments)
                }, this)
            }
        },
        _isRetryEnabled: function() {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function(a, b) {
            var c;
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                var e = this._storage.get("retryReqs") || {};
                for (c = 1; e[c]; )
                    c++;
                e[c] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: this.globalConfig.get("_globalMetrikaHitId"),
                    time: w.getMs()
                };
                this._storage.set("retryReqs", e);
                return c
            }
        },
        _unregisterRequest: function(a) {
            if (a && this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a],
                this._storage.set("retryReqs", b))
            }
        },
        _getVersion: F(function() {
            return ya
        }, "", !0)
    });
    H._storage = new na;
    H.initCookie = function(a) {
        var b = new O({
            onlyCurrentDomain: "uid" !== a
        })
          , c = b.read(a)
          , e = H._storage.get(a)
          , g = !1
          , p = b.read("d")
          , h = w.getSeconds();
        e && !c && (c = e,
        g = !0,
        b.create(a, c, 525600),
        b.create("d", h, 525600));
        if (!c)
            c = h + "" + k.random(),
            b.create(a, c, 525600),
            b.create("d", h, 525600);
        else if (!p || 15768E3 < h - parseInt(p))
            b.create(a, c, 525600),
            b.create("d", h, 525600);
        H._storage.set(a, c);
        H._userID = c;
        return g
    }
    ;
    H.retransmit = function(a) {
        var b = H._storage, c = b.get("retryReqs") || {}, e;
        b.remove("retryReqs");
        k.forEachKey(c, function(b, c) {
            var h = w.getMs();
            a.get("firstReqStatus") || a.set("firstReqStatus", "complete");
            c.ghid && c.ghid != a.get("_globalMetrikaHitId") && c.time && c.time + 1728E5 > h && 500 < h - c.time && 2 >= c.browserInfo.rqnl && (e = new H({
                protocol: c.protocol,
                host: c.host,
                resource: c.resource,
                counterId: c.counterId,
                counterType: c.counterType,
                postParams: c.postParams || [],
                retry: !0
            }),
            e.send(c.params, c.browserInfo))
        })
    }
    ;
    k.fletcher = function(a) {
        for (var b = a.length, c = 0, e = 255, g = 255, p, h, m; b; ) {
            p = 21 < b ? 21 : b;
            b -= p;
            do
                h = "string" == typeof a ? a.charCodeAt(c) : a[c],
                c++,
                255 < h && (m = h >> 8,
                h &= 255,
                h ^= m),
                e += h,
                g += e;
            while (--p);e = (e & 255) + (e >> 8);
            g = (g & 255) + (g >> 8)
        }
        a = (e & 255) + (e >> 8) << 8 | (g & 255) + (g >> 8);
        return 65535 == a ? 0 : a
    }
    ;
    oa.encode = function(a, b) {
        var c = (oa.abc + (b ? oa.tailSafe : oa.tail)).split(""), e = a.length, g = [], p = e - e % 3, h;
        for (h = 0; h < p; h += 3) {
            var m = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2];
            k.mergeArrays(g, [c[m >> 18 & 63], c[m >> 12 & 63], c[m >> 6 & 63], c[m & 63]])
        }
        switch (e - p) {
        case 1:
            m = a[p] << 4;
            k.mergeArrays(g, [c[m >> 6 & 63], c[m & 63], c[64], c[64]]);
            break;
        case 2:
            m = (a[p] << 10) + (a[p + 1] << 2),
            k.mergeArrays(g, [c[m >> 12 & 63], c[m >> 6 & 63], c[m & 63], c[64]])
        }
        return g.join("")
    }
    ;
    k.arrayEvery = function(a, b, c) {
        var e;
        for (e = 0; e < a.length; e++)
            if (!b.call(c, a[e], e, a))
                return !1;
        return !0
    }
    ;
    k.is4Bytes = function(a) {
        return !k.arrayEvery((encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) || []).join("").split("%"), function(a) {
            return 240 > parseInt(a, 16)
        })
    }
    ;
    k.trim = function(a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    }
    ;
    k.isNumber = function(a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" === k.toString(a)
    }
    ;
    k.isString = function(a) {
        return "[object String]" === k.toString(a)
    }
    ;
    k._hasIndexOf = [].indexOf && 0 === [z].indexOf(z);
    k.arrayIndexOf = k._hasIndexOf ? function(a, b) {
        return a.indexOf(b)
    }
    : function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    ;
    k.warning = function() {
        n.console && "function" === typeof n.console.warn && console.warn.apply(console, arguments)
    }
    ;
    k.isObject = function(a) {
        try {
            return a && null !== a && "[object Object]" === k.toString(a)
        } catch (b) {
            return !1
        }
    }
    ;
    k._urlParser = null;
    k.parseUrl = function(a) {
        if (!this._urlParser)
            try {
                this._urlParser = q.createElement("a")
            } catch (b) {}
        return this._urlParser ? (this._urlParser.href = a,
        {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    }
    ;
    k._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    k.isMetrikaPlayer = function() {
        return "MetrikaPlayer" == n.name || this._playerRegexp.test(n.location.hostname)
    }
    ;
    t.getDocumentCharset = function() {
        return ("" + (q.characterSet || q.charset || "")).toLowerCase()
    }
    ;
    t.getBody = function() {
        for (var a = q.getElementsByTagName("body"); 0 < a.length; )
            return a[0]
    }
    ;
    t.getRootElement = function() {
        var a = q.documentElement
          , b = t.getBody();
        return "CSS1Compat" == q.compatMode ? a : b || a
    }
    ;
    t.getViewportSize = function() {
        var a = t.getRootElement();
        return [a.clientWidth || n.innerWidth, a.clientHeight || n.innerHeight]
    }
    ;
    t.getDocumentTitle = function() {
        var a = q.title;
        "string" != typeof a && (a = (a = q.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    }
    ;
    v.getSilverlightVersion = k.memorize(function() {
        if (n.ActiveXObject)
            try {
                var a = new ActiveXObject("AgControl.AgControl");
                var b = function(a, b, e, f) {
                    for (; c(a, b); )
                        b[e] += f;
                    b[e] -= f
                };
                var c = function(a, b) {
                    return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                };
                var e = [1, 0, 0, 0];
                b(a, e, 0, 1);
                b(a, e, 1, 1);
                b(a, e, 2, 1E4);
                b(a, e, 2, 1E3);
                b(a, e, 2, 100);
                b(a, e, 2, 10);
                b(a, e, 2, 1);
                b(a, e, 3, 1);
                var g = e.join(".")
            } catch (p) {}
        else if (b = n.navigator,
        b = b.plugins && b.plugins["Silverlight Plug-In"])
            g = b.description;
        return g || ""
    });
    v.getFlashVersion = k.memorize(function() {
        var a = n.navigator;
        if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
            var b = a.plugins["Shockwave Flash"];
            var c = b.version;
            if ((b = b.description) || c)
                if (a = a.mimeTypes,
                "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin)
                    c ? v._flashVersion = c : b && (v._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
        } else if ("undefined" != typeof n.ActiveXObject)
            try {
                if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                b = c.GetVariable("$version"))
                    v._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
            } catch (e) {}
        return v._flashVersion
    });
    v.getLanguage = k.memorize(function() {
        var a = (n.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage : "").toLowerCase();
        return k.isString(a) ? a : ""
    });
    v.getJavaEnabled = k.memorize(function() {
        try {
            return navigator.javaEnabled()
        } catch (a) {
            return !1
        }
    });
    v.getFingerPrint = k.memorize(function() {
        var a = [], b;
        if (navigator.plugins && navigator.plugins.length)
            for (b = 0; b < navigator.plugins.length; b++) {
                var c = navigator.plugins[b];
                k.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (navigator.mimeTypes && navigator.mimeTypes.length)
            for (b = 0; b < navigator.mimeTypes.length; b++)
                c = navigator.mimeTypes[b],
                k.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return k.fnv32a(a.join(";")) + "01"
    });
    v.getNotificationPermission = function() {
        try {
            var a = Notification.permission
        } catch (b) {}
        switch (a) {
        case "denied":
            return 1;
        case "granted":
            return 2
        }
    }
    ;
    v.isIframe = k.memorize(function() {
        try {
            return n.top != n
        } catch (a) {
            return !1
        }
    });
    v._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    v.netType = function() {
        var a = (navigator.connection || {
            type: ""
        }).type;
        return v._nMap[a] || a
    }
    ;
    v.isHeadLess = k.memorize(function() {
        var a, b = ["_phantom", "__nightmare", "callPhantom"];
        for (a = 0; a < b.length; a++)
            if (n[b[a]])
                return !0;
        return /PhantomJS/.test(n.navigator.userAgent) || n.navigator.webdriver || n.isChrome && !n.chrome ? !0 : /HeadlessChrome/.test(n.navigator.userAgent)
    });
    v.getNavigationStart = k.memorize(function() {
        var a = n.performance || n.webkitPerformance;
        return a && a.timing && a.timing.navigationStart
    });
    v.isSameOriginTopFrame = function() {
        try {
            return n.top.contentWindow || !0
        } catch (a) {
            return !1
        }
    }
    ;
    v.isDesktop = function(a) {
        var b = a.get("bt", {});
        a.get("bt") === z && (b.p = navigator.getBattery ? navigator.getBattery() : null,
        a.set("bt", b),
        b.p && b.p.then && b.p.then(function(a) {
            b.v = a.charging && 0 === a.chargingTime
        }));
        return b.v
    }
    ;
    v.isSelenium = k.memorize(function() {
        var a = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"], b = ["selenium", "webdriver", "driver"], c, e = n.document, g = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ");
        for (c = 0; c < a.length; c++)
            if (n[a[c]])
                return !0;
        for (c = 0; c < g.length; c++)
            if (e && e[g[c]])
                return !0;
        if (n.external && n.external.toString && 0 <= n.external.toString().indexOf("Sequentum"))
            return !0;
        if (e.documentElement && e.documentElement.getAttribute)
            for (c = 0; c < b.length; c++)
                if (e.documentElement.getAttribute(b[c]))
                    return !0;
        return !1
    });
    u.ready = function(a) {
        var b = q.readyState;
        if ("interactive" === b || "complete" === b)
            k.setTimeout(a, 0, "evt::ready");
        else {
            var c = function() {
                u.un(q, "DOMContentLoaded", c);
                u.un(n, "load", c);
                a()
            };
            u.on(q, "DOMContentLoaded", c);
            u.on(n, "load", c)
        }
    }
    ;
    var xb = {
        url: "https://mc.yandex.ru/metrika/",
        _value: null,
        init: function(a) {
            var b = this._getLs().read("isad");
            this.globalConfig = a || A;
            b ? this._set(b) : this._getReqStatus() || this._send()
        },
        getVal: function() {
            return this._value
        },
        _set: function(a) {
            this._value = "1" == a || "2" == a ? a : null
        },
        _send: function() {
            var a = this;
            this._setReqStatus("process");
            u.ready(function() {
                var b = q.createElement("img");
                b.onload = function() {
                    a._saveReq(!1);
                    t.removeNode(this)
                }
                ;
                b.onerror = function() {
                    a._saveReq(!0);
                    t.removeNode(this)
                }
                ;
                b.src = a.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                v.isSafari() && (b.style.position = "absolute",
                b.style.visibility = "hidden",
                b.style.width = "0px",
                b.style.height = "0px",
                t.getRootElement().appendChild(b))
            })
        },
        _saveReq: function(a) {
            this._value = a = a ? "1" : "2";
            this._setReqStatus("complete");
            this._getLs().create("isad", a, 1200)
        },
        _setReqStatus: function(a) {
            try {
                this.globalConfig.set("adStatus", a)
            } catch (b) {}
        },
        _getReqStatus: function() {
            try {
                return this.globalConfig.get("adStatus")
            } catch (a) {
                return "complete"
            }
        },
        _getLs: function() {
            this._ls || (this._ls = new O);
            return this._ls
        }
    }
      , jb = {
        encode: function(a) {
            var b = [], c;
            var e = 0;
            for (c = a.length; e < c; e++) {
                var g = a.charCodeAt(e);
                128 > g ? b.push(g) : (127 < g && 2048 > g ? b.push(g >> 6 | 192) : (b.push(g >> 12 | 224),
                b.push(g >> 6 & 63 | 128)),
                b.push(g & 63 | 128))
            }
            return b
        },
        decode: function(a) {
            for (var b = "", c = 0, e, g, p; c < a.length; )
                e = a.charCodeAt(c),
                128 > e ? (b += String.fromCharCode(e),
                c++) : 191 < e && 224 > e ? (g = a.charCodeAt(c + 1),
                b += String.fromCharCode((e & 31) << 6 | g & 63),
                c += 2) : (g = a.charCodeAt(c + 1),
                p = a.charCodeAt(c + 2),
                b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | p & 63),
                c += 3);
            return b
        }
    };
    oa.decode = function(a, b) {
        for (var c = oa.abc + (b ? oa.tailSafe : oa.tail), e = 0, g = "", p, h, m, f, d; a.length % 4; )
            a += "\x3d";
        do {
            p = c.indexOf(a.charAt(e++));
            h = c.indexOf(a.charAt(e++));
            f = c.indexOf(a.charAt(e++));
            d = c.indexOf(a.charAt(e++));
            if (0 > p || 0 > h || 0 > f || 0 > d)
                return null;
            m = p << 18 | h << 12 | f << 6 | d;
            p = m >> 16 & 255;
            h = m >> 8 & 255;
            m &= 255;
            g = 64 == f ? g + String.fromCharCode(p) : 64 == d ? g + String.fromCharCode(p, h) : g + String.fromCharCode(p, h, m)
        } while (e < a.length);return g
    }
    ;
    k.reduce = function(a, b, c) {
        var e = 0;
        b == z && (b = c[0],
        e++);
        for (; e < c.length; )
            b = a(b, c[e]),
            e++;
        return b
    }
    ;
    k.filter = function(a, b) {
        var c, e = [];
        for (c = 0; c < b.length; c++)
            a(b[c]) && e.push(b[c]);
        return e
    }
    ;
    aa.parse = function(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    }
    ;
    var Ra = H.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        paramsQueue: {
            paramsQueue: [],
            length: function() {
                return this.paramsQueue.length
            },
            push: function(a) {
                this.paramsQueue.push(a)
            },
            _reduce: function(a) {
                return function(b, c) {
                    k.arrayEvery(k.keys(c), function(e) {
                        if (b.hasOwnProperty(e))
                            return 1;
                        -1 == k.arrayIndexOf(a, e) && (b[e] = c[e],
                        delete c[e]);
                        return 1
                    });
                    return b
                }
            },
            _filter: function(a) {
                return k.keys(a).length
            },
            mixin: function(a) {
                var b = {};
                this.paramsQueue.length && (b = k.reduce(this._reduce(k.keys(a)), {}, this.paramsQueue),
                this.paramsQueue = k.filter(this._filter, this.paramsQueue));
                return k.mixin({}, a, b)
            }
        },
        postParams: ["site-info"],
        countersNoTitle: "22836271 9928105 26128362 29850769 22327510 40081755 16082914 279297 23323747 16082899".split(" "),
        fake: !1,
        sendTitle: !0,
        _initComponent: function() {
            Ra.superclass._initComponent.apply(this, arguments);
            this._trackHash = this.trackHash;
            "0" === "" + this.counterType && (this.sendTitle = -1 === k.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function(a) {
            this._trackHash = a
        },
        sendHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: k.mixin(a.modes || {}, {
                    ar: !0,
                    saveRef: !0,
                    pv: !0
                }),
                callback: a.callback,
                hasPrerender: a.hasPrerender,
                ctx: a.ctx
            }, "hit")
        },
        sendExperiments: function(a) {
            this._hitExt({
                url: L().href,
                title: "",
                referrer: "",
                modes: {
                    ex: !0,
                    ar: !0
                },
                experiments: a.experiments,
                callback: a.callback,
                ctx: a.ctx
            }, "exp")
        },
        sendPrerenderHit: function(a) {
            this._hitExt({
                url: a.url,
                vParams: a.vParams,
                title: a.title,
                referrer: a.referrer,
                modes: {
                    ar: !0,
                    pq: !0
                }
            }, "hit")
        },
        sendAjaxHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: a.modes
            }, "hit")
        },
        sendParams: function(a, b, c, e) {
            this._hitExt({
                url: e || L().href,
                title: "",
                referrer: "",
                forceNoRedirect: !0,
                vParams: a,
                modes: {
                    ar: !0,
                    pa: !0,
                    onlyData: !0
                },
                callback: b,
                ctx: c
            }, "pa")
        },
        sendGoal: function(a, b) {
            if (/[/&=?#]/.test(a))
                k.warning("Incorrect goal");
            else if (a) {
                var c = b.url ? k.parseUrl(b.url) : L();
                this._hitExt({
                    url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
                    title: t.getDocumentTitle(),
                    referrer: c.href,
                    forceNoRedirect: !0,
                    vParams: b.vParams,
                    modes: {
                        ar: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                }, "go")
            } else
                k.warning("Empty goal")
        },
        sendClickLink: function(a, b) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: b || L().href,
                modes: a.modes
            })
        },
        sendExtLink: function(a, b) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: b || L().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    ut: kb
                },
                callback: a.callback,
                ctx: a.ctx
            }, "cl")
        },
        sendFileUpload: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: L().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    dl: !0
                },
                callback: a.callback,
                ctx: a.ctx
            }, "fu")
        },
        sendNotBounce: function(a, b) {
            this._hitExt({
                url: b.url || L().href,
                title: "",
                referrer: "",
                modes: {
                    cl: a,
                    ar: !0,
                    nb: !0,
                    onlyData: !0
                },
                callback: b.callback,
                ctx: b.ctx
            }, "nb")
        },
        sendDevice: function(a) {
            this._hitExt({
                browserInfo: {
                    di: a.data,
                    dip: a.port
                },
                callback: a.callback,
                ctx: a.ctx
            }, "de")
        },
        _hitExt: function(a, b) {
            function c(a, d) {
                d && (x[a] = d)
            }
            var e, g, p, h = {};
            if (!k.isMetrikaPlayer()) {
                var m = a.modes || {};
                var f = a.browserInfo || {};
                var d = "undefined" !== typeof a.referrer ? a.referrer : Xa.lastReferrer;
                var l = a.url || "";
                var x = {};
                a.nohit && c("nohit", 1);
                m.ar && !m.onlyData && (d = null === d || "" === d ? "" : this._prepareHitUrl(d),
                l = this._prepareHitUrl(a.url));
                c("forceNoRedirect", a.forceNoRedirect);
                c("page-ref", k.trim(d, lb));
                c("page-url", k.trim(l, lb));
                k.is4Bytes(a.title) && c("charset", "utf-8");
                -1 != L().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/) ? c("ut", kb) : "undefined" != typeof m.ut && c("ut", k.trim(m.ut, Wb));
                c("exp", a.experiments);
                (g = a.vParams) && this.counter && g.__ym && (k.isNumber(g.__ym.turbo_page) && (this.counter.tp = g.__ym.turbo_page),
                k.isNumber(g.__ym.turbo_page_id) && (this.counter.tpid = g.__ym.turbo_page_id));
                (!g || k.isObject(g) && !g.__ym && !g.__ymu) && this.paramsQueue.length() && k.inArray(["go", "hit", "pa"], b) && (g = this.paramsQueue.mixin(g));
                g && (l = k.toJSON(g),
                this.trimParams && l.length > Xb ? p = !0 : 7E5 < l ? k.warning("Too big params") : c("site-info", l));
                m.saveRef && (Xa.lastReferrer = d);
                h = function(a, d) {
                    var b = {};
                    k.forEachKey(d, function(a, d) {
                        -1 === k.arrayIndexOf(["", 0, z, null], d) && (b[a] = d)
                    });
                    return k.mixin({}, a, b)
                }(h, {
                    gdpr: xa.getState(this.globalConfig),
                    tp: this.counter && this.counter.tp,
                    tpid: this.counter && this.counter.tpid,
                    fu: this.getFu(a.url, a.referrer),
                    eu: this.globalConfig.get("isEU"),
                    v: this._getVersion(),
                    pr: a.hasPrerender ? 1 : null
                });
                this.fake || (e = this._getTechInfo(a.title, m, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter, a.nohit));
                h.wv = 2;
                k.mixin(f, e, h);
                this.send(x, f, function() {
                    p && this.counter.params(g);
                    a.userParams && this.counter.userParams(a.userParams);
                    k.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function(a) {
            var b = L()
              , c = b.host;
            b = b.href;
            if (!k.isString(a))
                return b;
            if (-1 != a.search(/^[a-z][\w.+-]+:\/\//i))
                return a;
            var e = a.charAt(0);
            if ("?" == e)
                return e = b.search(/\?/),
                -1 == e ? b + a : b.substr(0, e) + a;
            if ("#" == e)
                return e = b.search(/#/),
                -1 == e ? b + a : b.substr(0, e) + a;
            if ("/" == e) {
                if (e = b.search(c),
                -1 != e)
                    return b.substr(0, e + c.length) + a
            } else
                return c = b.split("/"),
                c[c.length - 1] = a,
                c.join("/");
            return a
        },
        getFu: function(a, b) {
            var c = a !== L().href
              , e = q.referrer.replace(/\/$/, "")
              , g = (b || "").replace(/\/$/, "");
            e = e !== g;
            g = 0;
            e && c ? g = 3 : e ? g = 1 : c && (g = 2);
            return g
        },
        _getTechInfo: function(a, b, c, e, g, p, h, m, f, d) {
            function l(a, d, b) {
                var f = "" + d;
                a && d && (b || -1 === f.indexOf(":")) && (y[a] = f)
            }
            function x(a) {
                b[a] && l(a, "1")
            }
            var y = {};
            b = b || {};
            e = e || w.getTimestamp();
            g = g || w.getTimezone();
            l("j", v.getJavaEnabled() ? "1" : "");
            var J = v.isDesktop(this.globalConfig);
            J !== z && l("dp", J ? "1" : "0");
            l("nt", v.netType());
            l("ns", v.getNavigationStart());
            ja && l("s", ja.width + "x" + ja.height + "x" + (ja.colorDepth || ja.pixelDepth));
            n.devicePixelRatio && l("sk", n.devicePixelRatio);
            v.isSelenium() && l("iss", "1");
            v.isHeadLess() && l("hdl", "1");
            v.isIframe() && (l("ifr", "1"),
            l("sti", v.isSameOriginTopFrame() ? "1" : "0"));
            n.ia_document && n.ia_document.shareURL && n.ia_document.referrer && l("iia", "1");
            l("adb", xb.getVal());
            l("f", v.getFlashVersion());
            l("l", v.getSilverlightVersion());
            l("fpr", v.getFingerPrint());
            l("cn", this.counterNum);
            b.pa || (J = t.getViewportSize(),
            l("w", J[0] + "x" + J[1]));
            l("z", g);
            l("i", e);
            l("et", w.getSeconds());
            l("en", t.getDocumentCharset());
            l("c", navigator.cookieEnabled ? "1" : "");
            l("la", v.getLanguage());
            l("ntf", v.getNotificationPermission());
            k.random(100) || l("np", oa.encode(jb.encode(k.trim(v.getPlatform(), 100))));
            p && l("wh", "1");
            g = "ar ln re dl cpf ad nb pa pq pv ex".split(" ");
            for (e = 0; e < g.length; e++)
                x(g[e]);
            g = "va vt sn sa he pai".split(" ");
            b.nb && g.push("cl");
            for (e = 0; e < g.length; e++)
                p = g[e],
                l(p, b[p]);
            g = new na({
                counterId: c
            });
            g.isEnabled() && (c = g.getStorageId(),
            e = g.get("reqNum"),
            d || (e ? e++ : e = 1),
            g.set("reqNum", e),
            g.get("reqNum") == e ? (l("ls", c),
            l("rqn", e)) : (g.remove("reqNum"),
            g.clearStorageId(),
            1 < e && (l("ls", c),
            l("rqn", 0))));
            l("rn", k.random());
            l("hid", h);
            d || 3 == this.counterId || b.pq || l("ds", Pb(f));
            f._firstPaint || d || (f._firstPaint = Rb(),
            l("fp", f._firstPaint));
            if (m) {
                n.name || (n.name = Math.round(65535 * Math.random()));
                if (h = +n.name)
                    0 > h && (h *= -1),
                    h %= 65535;
                l("wn", h || k.fletcher(n.name));
                try {
                    n.history && l("hl", String(n.history.length))
                } catch (r) {}
            }
            h = "";
            this.sendTitle && (h = this._getTitle(a));
            l("t", h, !0);
            return y
        },
        _getTitle: function(a) {
            a = "undefined" == typeof a ? (a = t.getDocumentTitle()) ? k.trim(a, yb) : "" : k.trim(a, yb);
            return a
        }
    });
    k.array2Props = function(a) {
        var b = a.length, c = {}, e = c, g;
        for (g = 0; g < b - 1; g++) {
            var p = a[g];
            e[p] = {};
            g < b - 2 && (e = e[p])
        }
        e[p] = a[b - 1];
        return c
    }
    ;
    var Ta = G.inherit({
        sampling: 1,
        counterId: 26302566,
        _initComponent: function() {
            Ta.superclass._initComponent.apply(this, arguments);
            this._sender = new Ra({
                protocol: "https:",
                counterId: this.counterId,
                retry: !1,
                counter: {}
            })
        },
        log: function() {
            this.logParams(k.array2Props(arguments))
        },
        logParams: function(a) {
            Math.random() < this.sampling && this._sender.sendHit({
                url: I.href,
                title: "",
                referrer: "",
                vParams: a
            })
        }
    })
      , Yb = H.inherit({
        resource: "webvisor",
        retry: !0,
        postParams: ["wv-data"],
        sendPacket: function(a, b, c, e, g, p, h, m) {
            if (!a || !a.length)
                return !1;
            var f = oa.encode(a, !0);
            if (0 == f.indexOf("AAAAAAAAADw") && n.Error) {
                var d = Error();
                "string" == typeof d.stack && (new Ta({
                    sampling: .1
                })).log("bad visor packet 5", 1)
            }
            a = {
                rn: k.random(),
                "page-url": b,
                wmode: 0,
                "wv-type": 0,
                "wv-hit": c,
                "wv-part": e + 1,
                "wv-check": k.fletcher(a),
                "wv-data": f
            };
            g = {
                v: this._getVersion(),
                z: g,
                i: p
            };
            return this.send(a, g, h, m)
        }
    })
      , sb = Ja.inherit({
        protocol: "",
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7500,
        flushTimeout: 3E4,
        storageKey: "visorbuff",
        active: !1,
        _initComponent: function() {
            this.storage = new na({
                counterId: this.counterId
            });
            this._sender = new Yb({
                globalConfig: this.globalConfig,
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            sb.superclass._initComponent.apply(this, arguments)
        },
        onFlush: function(a, b, c) {
            this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
        }
    });
    t.getDocumentHTML = function() {
        var a = "";
        var b = q.documentElement;
        var c = b.outerHTML, e, g;
        if (c)
            b = c;
        else {
            c = b.attributes;
            var p = "";
            for (e = 0; e < c.length; e++)
                (g = c[e]) && (p += " " + g.name + '\x3d"' + (g.value || "") + '"');
            b = "\x3chtml" + p + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (c = q.doctype)
            a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "",
            p = c.systemId ? ' "' + c.systemId + '"' : "",
            a = "\x3c!DOCTYPE " + c.name + a + p + "\x3e\n";
        return a + b
    }
    ;
    t.getElementParent = function(a) {
        if (!a || a == q.documentElement)
            return null;
        if (a == t.getBody())
            return q.documentElement;
        var b = null;
        try {
            b = a.parentNode
        } catch (c) {}
        return b
    }
    ;
    t.getElementChildren = function(a, b) {
        var c = [], e, g, p;
        if (a && (e = a.childNodes)) {
            var h = 0;
            for (p = e.length; h < p; h++) {
                var m = e[h];
                (g = "INPUT" == m.nodeName && m.type && "hidden" == m.type.toLocaleLowerCase()) || b && m.nodeName != b || k.mergeArrays(c, [m])
            }
        }
        return c
    }
    ;
    t.getElementNeighborPosition = function(a) {
        var b = t.getElementParent(a), c;
        if (b) {
            var e = 0;
            b = b.childNodes;
            var g = a && a.nodeName;
            for (c = 0; c < b.length; c++) {
                var p = b[c] && b[c].nodeName;
                if (g == p) {
                    if (a == b[c])
                        return e;
                    e++
                }
            }
        }
        return 0
    }
    ;
    t.getDocumentScroll = function() {
        var a = t.getBody();
        return [n.pageXOffset || q.documentElement && q.documentElement.scrollLeft || a && a.scrollLeft || 0, n.pageYOffset || q.documentElement && q.documentElement.scrollTop || a && a.scrollTop || 0]
    }
    ;
    t.getElementXY = function(a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == t.getBody() || a == q.documentElement)
            return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var c = t.getDocumentScroll();
            return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
        }
        for (b = c = 0; a; )
            c += a.offsetLeft,
            b += a.offsetTop,
            a = a.offsetParent;
        return [c, b]
    }
    ;
    t.getDocumentSize = function() {
        var a = t.getRootElement()
          , b = t.getViewportSize();
        return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    }
    ;
    t.getElementSize = function(a) {
        var b;
        return a == t.getBody() || a == q.documentElement ? t.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    }
    ;
    t.getElementRegion = function(a) {
        var b = t.getElementXY(a);
        a = t.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    }
    ;
    t.calcChildrenChecksum = function(a) {
        var b = F(function() {
            return a.innerHTML
        }, "", !0)() || "";
        return k.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    }
    ;
    t.getFormNumber = function(a) {
        var b = q.getElementsByTagName("form"), c;
        var e = 0;
        for (c = b.length; e < c; e++)
            if (b[e] == a)
                return e;
        return -1
    }
    ;
    t.isEmptyField = function(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    }
    ;
    t.calcTextChecksum = function(a) {
        var b = "";
        a = a.childNodes;
        var c;
        var e = 0;
        for (c = a.length; e < c; e++)
            a[e] && 3 == a[e].nodeType && (b += a[e].nodeValue);
        return k.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    }
    ;
    t.calcAttribChecksum = function(a) {
        var b = "", c = "width height align title alt name".split(" "), e;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (e = 0; e < c.length; e++)
            a.getAttribute && (b += String(a.getAttribute(c[e]) || "").toLowerCase());
        return k.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    }
    ;
    t.classNameExists = function(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    }
    ;
    t.getElementsByClassName = function(a, b) {
        var c;
        b = b || q;
        var e = b.getElementsByTagName("*");
        var g = [];
        for (c = 0; c < e.length; c++)
            t.classNameExists(e[c], a) && g.push(e[c]);
        return g
    }
    ;
    try {
        var ib = function(a) {
            function b(e) {
                if (c[e])
                    return c[e].f;
                var g = c[e] = {
                    Z: e,
                    L: !1,
                    f: {}
                };
                return a[e].call(g.f, g, g.f, b),
                g.L = !0,
                g.f
            }
            var c = {};
            return b.aa = a,
            b.W = c,
            b.o = function(a, c, p) {
                b.D(a, c) || Object.defineProperty(a, c, {
                    enumerable: !0,
                    get: p
                })
            }
            ,
            b.C = function(a) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            ,
            b.$ = function(a, c) {
                if ((1 & c && (a = b(a)),
                8 & c) || 4 & c && "object" == typeof a && a && a.a)
                    return a;
                var e = Object.create(null);
                if (b.C(e),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a
                }),
                2 & c && "string" != typeof a)
                    for (var h in a)
                        b.o(e, h, function(b) {
                            return a[b]
                        }
                        .bind(null, h));
                return e
            }
            ,
            b.X = function(a) {
                var c = a && a.a ? function() {
                    return a["default"]
                }
                : function() {
                    return a
                }
                ;
                return b.o(c, "a", c),
                c
            }
            ,
            b.D = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            ,
            b.Y = "",
            b(b.ba = 0)
        }([function(a, b, c) {
            var e = this && this.U || function() {
                return (e = Object.assign || function(a) {
                    for (var d, b = 1, f = arguments.length; b < f; b++)
                        for (var c in d = arguments[b])
                            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
                    return a
                }
                ).apply(this, arguments)
            }
            ;
            b.a = !0;
            var g = c(1)
              , p = c(2)
              , h = c(4)
              , m = c(5)
              , f = c(6);
            a = function() {
                function a(a) {
                    var d = this;
                    this.l = a;
                    this.H = {
                        webGL: g.B,
                        dnt: m.w,
                        plugins: p.A,
                        applePay: h.v
                    };
                    this.l = e({
                        webGL: !1,
                        dnt: !1,
                        plugins: !1,
                        applePay: !1
                    }, a);
                    this.G = Object.keys(this.l).filter(function(a) {
                        return d.l[a]
                    }).map(function(a) {
                        return new d.H[a]
                    })
                }
                return a.prototype.toString = function(a) {
                    void 0 === a && (a = !0);
                    var d = this.G.map(function(a) {
                        var d = "";
                        try {
                            d = a.g()
                        } catch (r) {}
                        return d
                    });
                    return a ? [f.hash(d.join(""), 210)] : d.map(function(a) {
                        return f.hash(a, 210)
                    })
                }
                ,
                a
            }();
            b.T = a;
            b["default"] = a
        }
        , function(a, b) {
            var c = this && this.V || function() {
                function a(b, c) {
                    return (a = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(a, b) {
                        a.__proto__ = b
                    }
                    || function(a, b) {
                        for (var d in b)
                            b.hasOwnProperty(d) && (a[d] = b[d])
                    }
                    )(b, c)
                }
                return function(b, c) {
                    function e() {
                        this.constructor = b
                    }
                    a(b, c);
                    b.prototype = null === c ? Object.create(c) : (e.prototype = c.prototype,
                    new e)
                }
            }();
            b.a = !0;
            var e = function(a) {
                function b() {
                    var b = a.call(this, "webgl") || this;
                    return b.h && !b.J() && (b.h = !1),
                    b
                }
                return c(b, a),
                b.prototype.J = function() {
                    var a = this.canvas.getContext && (this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl"));
                    return !!n.WebGLRenderingContext && !!a
                }
                ,
                b.prototype.j = function(a) {
                    var b = this.c;
                    return b.clearColor(0, 0, 0, 1),
                    b.enable(b.DEPTH_TEST),
                    b.depthFunc(b.LEQUAL),
                    b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT),
                    "[" + a[0] + ", " + a[1] + "]"
                }
                ,
                b.prototype.M = function(a) {
                    var b, f = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return f ? (0 === (b = a.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (b = 2),
                    b) : null
                }
                ,
                b.prototype.s = function() {
                    var a = this.c
                      , b = []
                      , f = a.createBuffer();
                    a.bindBuffer(a.ARRAY_BUFFER, f);
                    a.bufferData(a.ARRAY_BUFFER, new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]), a.STATIC_DRAW);
                    f.K = 3;
                    f.O = 3;
                    var d = a.createProgram()
                      , c = a.createShader(a.VERTEX_SHADER);
                    a.shaderSource(c, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate\x3dattrVertex+uniformOffset;gl_Position\x3dvec4(attrVertex,0,1);}");
                    a.compileShader(c);
                    var e = a.createShader(a.FRAGMENT_SHADER);
                    a.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor\x3dvec4(varyinTexCoordinate,0,1);}");
                    a.compileShader(e);
                    a.attachShader(d, c);
                    a.attachShader(d, e);
                    a.linkProgram(d);
                    a.useProgram(d);
                    d.R = a.getAttribLocation(d, "attrVertex");
                    d.P = a.getUniformLocation(d, "uniformOffset");
                    a.enableVertexAttribArray(d.ca);
                    a.vertexAttribPointer(d.R, f.K, a.FLOAT, !1, 0, 0);
                    a.uniform2f(d.P, 1, 1);
                    a.drawArrays(a.TRIANGLE_STRIP, 0, f.O);
                    null != a.canvas && b.push(a.canvas.toDataURL());
                    b.push("extensions:" + a.getSupportedExtensions().join(";"));
                    b.push("webgl aliased line width range:" + this.j(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
                    b.push("webgl aliased point size range:" + this.j(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
                    b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
                    b.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
                    b.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
                    b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
                    b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
                    b.push("webgl max anisotropy:" + this.M(a));
                    b.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
                    b.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
                    b.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
                    b.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
                    b.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
                    b.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
                    b.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
                    b.push("webgl max viewport dims:" + this.j(a.getParameter(a.MAX_VIEWPORT_DIMS)));
                    b.push("webgl red bits:" + a.getParameter(a.RED_BITS));
                    b.push("webgl renderer:" + a.getParameter(a.RENDERER));
                    b.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
                    b.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS));
                    b.push("webgl vendor:" + a.getParameter(a.VENDOR));
                    b.push("webgl version:" + a.getParameter(a.VERSION));
                    try {
                        var g = a.getExtension("WEBGL_debug_renderer_info");
                        g && (b.push("webgl unmasked vendor:" + a.getParameter(g.UNMASKED_VENDOR_WEBGL)),
                        b.push("webgl unmasked renderer:" + a.getParameter(g.UNMASKED_RENDERER_WEBGL)))
                    } catch (J) {}
                    return a.getShaderPrecisionFormat ? (b.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision),
                    b.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin),
                    b.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax),
                    b.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision),
                    b.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin),
                    b.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax),
                    b.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision),
                    b.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin),
                    b.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax),
                    b.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision),
                    b.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin),
                    b.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax),
                    b.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision),
                    b.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin),
                    b.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax),
                    b.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision),
                    b.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin),
                    b.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax),
                    b.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision),
                    b.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin),
                    b.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax),
                    b.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision),
                    b.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin),
                    b.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax),
                    b.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision),
                    b.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin),
                    b.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax),
                    b.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision),
                    b.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin),
                    b.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax),
                    b.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision),
                    b.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin),
                    b.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax),
                    b.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision),
                    b.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin),
                    b.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax),
                    b.join("~")) : b.join("~")
                }
                ,
                b
            }(a = function() {
                function a(a) {
                    this.F = a;
                    this.h = !0;
                    this.canvas = q.createElement("canvas");
                    this.I() || (this.h = !1)
                }
                return a.prototype.I = function() {
                    return this.c = this.canvas.getContext(this.F),
                    !(!this.canvas.getContext || !this.c)
                }
                ,
                a.prototype.g = function() {
                    return this.h ? this.s() : this.id
                }
                ,
                a
            }());
            b.B = e;
            a = function(a) {
                function b() {
                    return a.call(this, "2d") || this
                }
                return c(b, a),
                b.prototype.s = function() {
                    var a = this.canvas
                      , b = this.c
                      , f = [];
                    return a.width = 2E3,
                    a.height = 200,
                    a.style.display = "inline",
                    b.rect(0, 0, 10, 10),
                    b.rect(2, 2, 6, 6),
                    f.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
                    b.textBaseline = "alphabetic",
                    b.fillStyle = "#f60",
                    b.fillRect(125, 1, 62, 20),
                    b.fillStyle = "#069",
                    b.font = "11pt Arial",
                    b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15),
                    b.fillStyle = "rgba(102, 204, 0, 0.2)",
                    b.font = "18pt Arial",
                    b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45),
                    b.globalCompositeOperation = "multiply",
                    b.fillStyle = "rgb(255,0,255)",
                    b.beginPath(),
                    b.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                    b.closePath(),
                    b.fill(),
                    b.fillStyle = "rgb(0,255,255)",
                    b.beginPath(),
                    b.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                    b.closePath(),
                    b.fill(),
                    b.fillStyle = "rgb(255,255,0)",
                    b.beginPath(),
                    b.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                    b.closePath(),
                    b.fill(),
                    b.fillStyle = "rgb(255,0,255)",
                    b.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                    b.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                    b.fill("evenodd"),
                    f.push("canvas fp:" + a.toDataURL()),
                    f.join("~")
                }
                ,
                b
            }(a);
            b.S = a
        }
        , function(a, b, c) {
            b.a = !0;
            var e = c(3);
            a = function() {
                function a() {}
                return a.prototype.g = function() {
                    return e.u(navigator.plugins).sort(function(a, b) {
                        return a.name > b.name ? 1 : 2
                    }).map(function(a) {
                        return [a.name, a.description, e.u(a).map(function(a) {
                            return [a.description, a.suffixes, a.type].join()
                        }).join()].join()
                    }).join()
                }
                ,
                a
            }();
            b.A = a
        }
        , function(a, b) {
            b.a = !0;
            b.u = function(a) {
                return Array.prototype.slice.call(a)
            }
        }
        , function(a, b) {
            b.a = !0;
            a = function() {
                function a() {
                    this.m = n.ApplePaySession
                }
                return a.prototype.g = function() {
                    var a = !1;
                    try {
                        a = n.self !== n.top
                    } catch (p) {}
                    if (!this.m || "https:" !== I.protocol || a)
                        return "";
                    a = "";
                    for (var b = 1; 10 >= b; b++)
                        a += this.m.supportsVersion(b) ? b : "0";
                    return a + this.m.canMakePayments()
                }
                ,
                a
            }();
            b.v = a
        }
        , function(a, b) {
            b.a = !0;
            a = function() {
                function a() {
                    this.b = n.navigator
                }
                return a.prototype.g = function() {
                    return this.b.i ? this.b.i : this.b.N ? this.b.N : this.b.i ? this.b.i : "unknown"
                }
                ,
                a
            }();
            b.w = a
        }
        , function(a, b) {
            function c(a, d) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
                d = [d[0] >>> 16, 65535 & d[0], d[1] >>> 16, 65535 & d[1]];
                var b = [0, 0, 0, 0];
                return b[3] += a[3] * d[3],
                b[2] += b[3] >>> 16,
                b[3] &= 65535,
                b[2] += a[2] * d[3],
                b[1] += b[2] >>> 16,
                b[2] &= 65535,
                b[2] += a[3] * d[2],
                b[1] += b[2] >>> 16,
                b[2] &= 65535,
                b[1] += a[1] * d[3],
                b[0] += b[1] >>> 16,
                b[1] &= 65535,
                b[1] += a[2] * d[2],
                b[0] += b[1] >>> 16,
                b[1] &= 65535,
                b[1] += a[3] * d[1],
                b[0] += b[1] >>> 16,
                b[1] &= 65535,
                b[0] += a[0] * d[3] + a[1] * d[2] + a[2] * d[1] + a[3] * d[0],
                b[0] &= 65535,
                [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }
            function e(a, d) {
                a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]];
                d = [d[0] >>> 16, 65535 & d[0], d[1] >>> 16, 65535 & d[1]];
                var b = [0, 0, 0, 0];
                return b[3] += a[3] + d[3],
                b[2] += b[3] >>> 16,
                b[3] &= 65535,
                b[2] += a[2] + d[2],
                b[1] += b[2] >>> 16,
                b[2] &= 65535,
                b[1] += a[1] + d[1],
                b[0] += b[1] >>> 16,
                b[1] &= 65535,
                b[0] += a[0] + d[0],
                b[0] &= 65535,
                [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }
            function g(a, b) {
                return 32 === (b %= 64) ? [a[1], a[0]] : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32,
                [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
            }
            function k(a, b) {
                return 0 === (b %= 64) ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
            }
            function h(a, b) {
                return [a[0] ^ b[0], a[1] ^ b[1]]
            }
            function m(a) {
                return a = h(a, [0, a[0] >>> 1]),
                a = h(a = c(a, [4283543511, 3981806797]), [0, a[0] >>> 1]),
                h(a = c(a, [3301882366, 444984403]), [0, a[0] >>> 1])
            }
            b.a = !0;
            b.hash = function(a, b) {
                b = b || 0;
                var d = (a = a || "").length % 16
                  , f = a.length - d
                  , p = [0, b];
                b = [0, b];
                for (var n, r, q = [2277735313, 289559509], u = [1291169091, 658871167], B = 0; B < f; B += 16)
                    n = [255 & a.charCodeAt(B + 4) | (255 & a.charCodeAt(B + 5)) << 8 | (255 & a.charCodeAt(B + 6)) << 16 | (255 & a.charCodeAt(B + 7)) << 24, 255 & a.charCodeAt(B) | (255 & a.charCodeAt(B + 1)) << 8 | (255 & a.charCodeAt(B + 2)) << 16 | (255 & a.charCodeAt(B + 3)) << 24],
                    r = [255 & a.charCodeAt(B + 12) | (255 & a.charCodeAt(B + 13)) << 8 | (255 & a.charCodeAt(B + 14)) << 16 | (255 & a.charCodeAt(B + 15)) << 24, 255 & a.charCodeAt(B + 8) | (255 & a.charCodeAt(B + 9)) << 8 | (255 & a.charCodeAt(B + 10)) << 16 | (255 & a.charCodeAt(B + 11)) << 24],
                    n = g(n = c(n, q), 31),
                    p = e(p = g(p = h(p, c(n, u)), 27), b),
                    p = e(c(p, [0, 5]), [0, 1390208809]),
                    r = g(r = c(r, u), 33),
                    b = e(b = g(b = h(b, c(r, q)), 31), p),
                    b = e(c(b, [0, 5]), [0, 944331445]);
                switch (n = [0, 0],
                r = [0, 0],
                d) {
                case 15:
                    r = h(r, k([0, a.charCodeAt(B + 14)], 48));
                case 14:
                    r = h(r, k([0, a.charCodeAt(B + 13)], 40));
                case 13:
                    r = h(r, k([0, a.charCodeAt(B + 12)], 32));
                case 12:
                    r = h(r, k([0, a.charCodeAt(B + 11)], 24));
                case 11:
                    r = h(r, k([0, a.charCodeAt(B + 10)], 16));
                case 10:
                    r = h(r, k([0, a.charCodeAt(B + 9)], 8));
                case 9:
                    r = c(r = h(r, [0, a.charCodeAt(B + 8)]), u),
                    b = h(b, c(g(r, 33), q));
                case 8:
                    n = h(n, k([0, a.charCodeAt(B + 7)], 56));
                case 7:
                    n = h(n, k([0, a.charCodeAt(B + 6)], 48));
                case 6:
                    n = h(n, k([0, a.charCodeAt(B + 5)], 40));
                case 5:
                    n = h(n, k([0, a.charCodeAt(B + 4)], 32));
                case 4:
                    n = h(n, k([0, a.charCodeAt(B + 3)], 24));
                case 3:
                    n = h(n, k([0, a.charCodeAt(B + 2)], 16));
                case 2:
                    n = h(n, k([0, a.charCodeAt(B + 1)], 8));
                case 1:
                    n = c(n = h(n, [0, a.charCodeAt(B)]), q),
                    p = h(p, c(g(n, 31), u))
                }
                return p = e(p = h(p, [0, a.length]), b = h(b, [0, a.length])),
                b = e(b, p),
                p = e(p = m(p), b = m(b)),
                b = e(b, p),
                ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
            }
        }
        ]);
        ib = ib["default"]
    } catch (a) {
        Qa = {
            error: a,
            scope: "fip"
        }
    }
    k.arrayFilter = function(a, b, c) {
        var e = [], g;
        for (g = 0; g < a.length; g++)
            b.call(c, a[g], g, a) && e.push(a[g]);
        return e
    }
    ;
    k.arrDiff = function(a, b) {
        return k.arrayFilter(a, function(a) {
            return -1 === k.arrayIndexOf(b, a)
        })
    }
    ;
    k.encodeURIComponent = function(a, b) {
        a = String(a);
        b && a.length > b && (a = a.substr(0, b));
        return (n.encodeURIComponent || n.escape)(a).replace(/\+/g, "%2B")
    }
    ;
    k.bind = function(a, b) {
        var c = [].slice.call(arguments, 2);
        return function() {
            return a.apply(b || this, c.concat([].slice.call(arguments, 0)))
        }
    }
    ;
    k.clearTimeout = function(a) {
        return k.getNativeFunction("clearTimeout")(a)
    }
    ;
    k.safeDecodeURIComponent = function(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    }
    ;
    k.isDev = function() {
        return !1
    }
    ;
    k.noop = function() {}
    ;
    !hb(/webkit/) && hb(/gecko/);
    var mb = {
        asyncChunk: 400,
        maxDuration: 20,
        restTime: 100,
        asyncBuffer: [],
        timeout: null,
        rest: 0,
        addAsyncItem: function(a, b, c, e, g) {
            var p = this;
            this.asyncBuffer.push({
                fn: a,
                ctx: b,
                args: e || [],
                loggerName: g || ""
            });
            c ? (clearTimeout(this.timeout),
            p.flushAsync(!0)) : w.getMs() - this.rest >= this.restTime && !this.timeout ? (this.rest = w.getMs(),
            p.flushAsync()) : this.timeout || (this.timeout = k.setTimeout(function() {
                p.rest = w.getMs();
                p.flushAsync();
                p.timeout = !1
            }, this.restTime))
        },
        chain: function(a, b, c, e) {
            var g = this;
            a.push = function(a) {
                throw 'Try to push in Executor when it started "' + a + '"';
            }
            ;
            (function d(b, c, f) {
                g.addAsyncItem(function(b, f, c) {
                    f = a[b++](f);
                    b <= a.length - 1 && d(b, f, c)
                }, null, f, [b, c], e + "." + b)
            }
            )(0, b, c)
        },
        callByTimeout: function(a, b) {
            for (var c = w.getMs(), e = 0, g, p = (b || 0) + 1, h = 0, m = this; this.asyncBuffer.length; )
                if (g = this.asyncBuffer.shift(),
                h += 1,
                !g.isExecuted && (F(function() {
                    g.fn.apply(g.ctx, g.args)
                }, "AsyncExecutor." + g.loggerName)(),
                e = w.getMs() - c,
                g.isExecuted = !0,
                !a && (h >= this.asyncChunk || e >= this.maxDuration))) {
                    k.setTimeout(function() {
                        m.callByTimeout(a, p)
                    }, this.restTime);
                    break
                }
        },
        flushAsync: function(a) {
            this.asyncBuffer.length && this.callByTimeout(a)
        }
    }
      , Zb = Va.inherit({
        id: "XHRPlain",
        index: 8,
        _splitParams: function(a) {
            var b = {}
              , c = {};
            k.forEachKey(a, function(a, g) {
                k.inArray(this.postParams, a) ? this.postParams.isSingle ? c = g : c[a] = g : b[a] = g
            }, this);
            return {
                get: b,
                post: c
            }
        },
        _preparePostParams: function(a) {
            return a.post
        },
        _setHeaders: function(a) {
            a.setRequestHeader("Content-Type", "text/plain")
        }
    })
      , nb = H.inherit({
        resource: "webvisor",
        version: 2,
        retry: !1,
        postParams: ["wv-data"],
        transports: [Zb],
        _initComponent: function() {
            nb.superclass._initComponent.apply(this, arguments);
            this.postParams.isSingle = !0
        },
        sendPacket: function(a, b, c, e, g, p, h, m, f) {
            var d = t.getViewportSize();
            if (!a || !a.length)
                return !1;
            a = {
                rn: k.random(),
                "page-url": b,
                wmode: 0,
                "wv-type": this.version,
                "wv-hit": c,
                "wv-part": e + 1,
                "wv-data": a
            };
            g = {
                et: h,
                w: d[0] + "x" + d[1],
                v: this._getVersion(),
                z: g,
                i: p
            };
            this.browserInfoMix && (g = k.mixin(g, this.browserInfoMix));
            return this.send(a, g, m, f)
        }
    })
      , Za = Ja.inherit({
        protocol: "",
        chunkSize: 0,
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7E5,
        flushTimeout: 2E3,
        storageKey: "visorbuff2",
        active: !1,
        wvType: 2,
        _v: "",
        _initComponent: function() {
            this._sender = new nb({
                version: this.wvType,
                protocol: this.protocol,
                globalConfig: this.globalConfig,
                counterId: this.counterId,
                browserInfoMix: this.browserInfoMix,
                counterType: this.counterType
            });
            Za.superclass._initComponent.apply(this, arguments)
        },
        append: function(a) {
            !this._data.length && a && a.length && (this.startBufferTime = w.getSeconds());
            Za.superclass.append.apply(this, arguments)
        },
        _getSize: function(a) {
            var b = this;
            this.chunkSize += encodeURIComponent(a).length;
            this.wrappers.length && k.reduce(function(a, e) {
                var c = e.getBufferData();
                b.chunkSize += k.toJSON(c).length
            }, 0, this.wrappers);
            return this.chunkSize
        },
        addData: function(a, b, c, e, g) {
            var p = 0
              , h = 1
              , m = {
                type: a
            }
              , f = .9 * this.maxBufferSize;
            this._v = c;
            this.wrappers.length && k.arrayEvery(this.wrappers, function(d) {
                d.trigger && d.trigger(a, b);
                return 1
            });
            if (g)
                this._getSize("{}"),
                this.append([], e);
            else {
                this.updateStamp(b, m);
                c = aa.stringify(b);
                g = this._getSize(c);
                if (g > this.maxBufferSize)
                    for (this._data.length && this._flush(),
                    e = Math.ceil(g / f); p < c.length; )
                        m.partNum = h,
                        m.end = h === e,
                        m.data = c.slice(p, p += f),
                        h++,
                        this._getSize(m.data),
                        this.append([m], !0);
                else
                    m.data = c,
                    this.append([m], e);
                this.store.set(m, {
                    id: a,
                    data: b
                })
            }
        },
        onFlush: function(a, b, c) {
            this.chunkSize = 0;
            k.arrayEvery(this.wrappers, function(b) {
                if (!b.onFlush)
                    return 1;
                k.arrayEvery(a, function(a) {
                    a = this.store.pop(a);
                    if (!a)
                        return 1;
                    b.onFlush(a.id, a.data);
                    return 1
                }, this);
                return 1
            }, this);
            k.arrayEvery(this.wrappers, function(b) {
                b = b.getBufferData();
                b.data = aa.stringify(b.data);
                a.push(b);
                return 1
            });
            this._sender.sendPacket(aa.stringify(a), b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime)
        },
        getFlushSize: function() {
            return this.chunkSize
        }
    })
      , E = {};
    try {
        E = function(a) {
            function b(e) {
                if (c[e])
                    return c[e].exports;
                var g = c[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                a[e].call(g.exports, g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var c = {};
            b.m = a;
            b.c = c;
            b.d = function(a, c, k) {
                b.o(a, c) || Object.defineProperty(a, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: k
                })
            }
            ;
            b.r = function(a) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }
            ;
            b.n = function(a) {
                var c = a && a.__esModule ? function() {
                    return a["default"]
                }
                : function() {
                    return a
                }
                ;
                b.d(c, "a", c);
                return c
            }
            ;
            b.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            ;
            b.p = "";
            return b(b.s = 18)
        }([function(a, b, c) {
            function e(a, b, c) {
                for (var f = Object.keys(b), d = 0; d < f.length; ++d)
                    void 0 !== a[f[d]] && c || (a[f[d]] = b[f[d]]);
                return a
            }
            function g(a) {
                function b(a, f) {
                    if (!(this instanceof b))
                        return new b(a,f);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return a
                        }
                    });
                    Error.captureStackTrace ? Error.captureStackTrace(this, b) : Object.defineProperty(this, "stack", {
                        value: Error().stack || ""
                    });
                    f && e(this, f)
                }
                (b.prototype = Object.create(Error.prototype)).constructor = b;
                Object.defineProperty(b.prototype, "name", {
                    get: function() {
                        return a
                    }
                });
                b.prototype.toString = function() {
                    return this.name + ": " + this.message
                }
                ;
                return b
            }
            b.asPromise = c(15);
            b.base64 = c(14);
            b.EventEmitter = c(13);
            b["float"] = c(12);
            b.inquire = c(11);
            b.utf8 = c(10);
            b.pool = c(9);
            b.LongBits = c(8);
            b.global = "undefined" != typeof n && n || "undefined" != typeof global && global || "undefined" != typeof self && self || this;
            b.emptyArray = Object.freeze ? Object.freeze([]) : [];
            b.emptyObject = Object.freeze ? Object.freeze({}) : {};
            b.isNode = !!(b.global.process && b.global.process.versions && b.global.process.versions.node);
            b.isInteger = Number.isInteger || function(a) {
                return "number" == typeof a && isFinite(a) && Math.floor(a) === a
            }
            ;
            b.isString = function(a) {
                return "string" == typeof a || a instanceof String
            }
            ;
            b.isObject = function(a) {
                return a && "object" == typeof a
            }
            ;
            b.isset = b.isSet = function(a, b) {
                var c = a[b];
                return !(null == c || !a.hasOwnProperty(b)) && ("object" != typeof c || 0 < (Array.isArray(c) ? c.length : Object.keys(c).length))
            }
            ;
            b.Buffer = function() {
                try {
                    var a = b.inquire("buffer").Buffer;
                    return a.prototype.utf8Write ? a : null
                } catch (h) {
                    return null
                }
            }();
            b._Buffer_from = null;
            b._Buffer_allocUnsafe = null;
            b.newBuffer = function(a) {
                return "number" == typeof a ? b.Buffer ? b._Buffer_allocUnsafe(a) : new b.Array(a) : b.Buffer ? b._Buffer_from(a) : "undefined" == typeof Uint8Array ? a : new Uint8Array(a)
            }
            ;
            b.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
            b.Long = b.global.dcodeIO && b.global.dcodeIO.Long || b.global.Long || b.inquire("long");
            b.key2Re = /^true|false|0|1$/;
            b.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
            b.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
            b.longToHash = function(a) {
                return a ? b.LongBits.from(a).toHash() : b.LongBits.zeroHash
            }
            ;
            b.longFromHash = function(a, c) {
                var e = b.LongBits.fromHash(a);
                return b.Long ? b.Long.fromBits(e.lo, e.hi, c) : e.toNumber(!!c)
            }
            ;
            b.merge = e;
            b.lcFirst = function(a) {
                return a.charAt(0).toLowerCase() + a.substring(1)
            }
            ;
            b.newError = g;
            b.ProtocolError = g("ProtocolError");
            b.oneOfGetter = function(a) {
                for (var b = {}, c = 0; c < a.length; ++c)
                    b[a[c]] = 1;
                return function() {
                    for (var a = Object.keys(this), d = a.length - 1; -1 < d; --d)
                        if (1 === b[a[d]] && void 0 !== this[a[d]] && null !== this[a[d]])
                            return a[d]
                }
            }
            ;
            b.oneOfSetter = function(a) {
                return function(b) {
                    for (var c = 0; c < a.length; ++c)
                        a[c] !== b && delete this[a[c]]
                }
            }
            ;
            b.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            };
            b._configure = function() {
                var a = b.Buffer;
                a ? (b._Buffer_from = a.from !== Uint8Array.from && a.from || function(b, c) {
                    return new a(b,c)
                }
                ,
                b._Buffer_allocUnsafe = a.allocUnsafe || function(b) {
                    return new a(b)
                }
                ) : b._Buffer_from = b._Buffer_allocUnsafe = null
            }
        }
        , function(a, b, c) {
            function e(a, b) {
                return RangeError("index out of range: " + a.pos + " + " + (b || 1) + " \x3e " + a.len)
            }
            function g(a) {
                this.buf = a;
                this.pos = 0;
                this.len = a.length
            }
            function k() {
                var a = new l(0,0)
                  , b = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; 3 > b; ++b) {
                        if (this.pos >= this.len)
                            throw e(this);
                        a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0;
                        if (128 > this.buf[this.pos++])
                            return a
                    }
                    a.lo = (a.lo | (127 & this.buf[this.pos++]) << 7 * b) >>> 0;
                    return a
                }
                for (; 4 > b; ++b)
                    if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * b) >>> 0,
                    128 > this.buf[this.pos++])
                        return a;
                a.lo = (a.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
                a.hi = (a.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
                if (128 > this.buf[this.pos++])
                    return a;
                b = 0;
                if (4 < this.len - this.pos)
                    for (; 5 > b; ++b) {
                        if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0,
                        128 > this.buf[this.pos++])
                            return a
                    }
                else
                    for (; 5 > b; ++b) {
                        if (this.pos >= this.len)
                            throw e(this);
                        a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * b + 3) >>> 0;
                        if (128 > this.buf[this.pos++])
                            return a
                    }
                throw Error("invalid varint encoding");
            }
            function h(a, b) {
                return (a[b - 4] | a[b - 3] << 8 | a[b - 2] << 16 | a[b - 1] << 24) >>> 0
            }
            function m() {
                if (this.pos + 8 > this.len)
                    throw e(this, 8);
                return new l(h(this.buf, this.pos += 4),h(this.buf, this.pos += 4))
            }
            a.exports = g;
            var f, d = c(0), l = d.LongBits, x = d.utf8, y, n = "undefined" != typeof Uint8Array ? function(a) {
                if (a instanceof Uint8Array || Array.isArray(a))
                    return new g(a);
                throw Error("illegal buffer");
            }
            : function(a) {
                if (Array.isArray(a))
                    return new g(a);
                throw Error("illegal buffer");
            }
            ;
            g.create = d.Buffer ? function(a) {
                return (g.create = function(a) {
                    return d.Buffer.isBuffer(a) ? new f(a) : n(a)
                }
                )(a)
            }
            : n;
            g.prototype._slice = d.Array.prototype.subarray || d.Array.prototype.slice;
            g.prototype.uint32 = (y = 4294967295,
            function() {
                y = (127 & this.buf[this.pos]) >>> 0;
                if (128 > this.buf[this.pos++])
                    return y;
                y = (y | (127 & this.buf[this.pos]) << 7) >>> 0;
                if (128 > this.buf[this.pos++])
                    return y;
                y = (y | (127 & this.buf[this.pos]) << 14) >>> 0;
                if (128 > this.buf[this.pos++])
                    return y;
                y = (y | (127 & this.buf[this.pos]) << 21) >>> 0;
                if (128 > this.buf[this.pos++])
                    return y;
                y = (y | (15 & this.buf[this.pos]) << 28) >>> 0;
                if (128 > this.buf[this.pos++])
                    return y;
                if ((this.pos += 5) > this.len)
                    throw this.pos = this.len,
                    e(this, 10);
                return y
            }
            );
            g.prototype.int32 = function() {
                return 0 | this.uint32()
            }
            ;
            g.prototype.sint32 = function() {
                var a = this.uint32();
                return a >>> 1 ^ -(1 & a) | 0
            }
            ;
            g.prototype.bool = function() {
                return 0 !== this.uint32()
            }
            ;
            g.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len)
                    throw e(this, 4);
                return h(this.buf, this.pos += 4)
            }
            ;
            g.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len)
                    throw e(this, 4);
                return 0 | h(this.buf, this.pos += 4)
            }
            ;
            g.prototype["float"] = function() {
                if (this.pos + 4 > this.len)
                    throw e(this, 4);
                var a = d["float"].readFloatLE(this.buf, this.pos);
                this.pos += 4;
                return a
            }
            ;
            g.prototype["double"] = function() {
                if (this.pos + 8 > this.len)
                    throw e(this, 4);
                var a = d["float"].readDoubleLE(this.buf, this.pos);
                this.pos += 8;
                return a
            }
            ;
            g.prototype.bytes = function() {
                var a = this.uint32()
                  , b = this.pos
                  , d = this.pos + a;
                if (d > this.len)
                    throw e(this, a);
                this.pos += a;
                return Array.isArray(this.buf) ? this.buf.slice(b, d) : b === d ? new this.buf.constructor(0) : this._slice.call(this.buf, b, d)
            }
            ;
            g.prototype.string = function() {
                var a = this.bytes();
                return x.read(a, 0, a.length)
            }
            ;
            g.prototype.skip = function(a) {
                if ("number" == typeof a) {
                    if (this.pos + a > this.len)
                        throw e(this, a);
                    this.pos += a
                } else {
                    do
                        if (this.pos >= this.len)
                            throw e(this);
                    while (128 & this.buf[this.pos++])
                }
                return this
            }
            ;
            g.prototype.skipType = function(a) {
                switch (a) {
                case 0:
                    this.skip();
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    for (; 4 != (a = 7 & this.uint32()); )
                        this.skipType(a);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + a + " at offset " + this.pos);
                }
                return this
            }
            ;
            g._configure = function(a) {
                f = a;
                var b = d.Long ? "toLong" : "toNumber";
                d.merge(g.prototype, {
                    int64: function() {
                        return k.call(this)[b](!1)
                    },
                    uint64: function() {
                        return k.call(this)[b](!0)
                    },
                    sint64: function() {
                        return k.call(this).zzDecode()[b](!1)
                    },
                    fixed64: function() {
                        return m.call(this)[b](!0)
                    },
                    sfixed64: function() {
                        return m.call(this)[b](!1)
                    }
                })
            }
        }
        , function(a, b, c) {
            function e(a, b, d) {
                this.fn = a;
                this.len = b;
                this.next = void 0;
                this.val = d
            }
            function g() {}
            function k(a) {
                this.head = a.head;
                this.tail = a.tail;
                this.len = a.len;
                this.next = a.states
            }
            function h() {
                this.len = 0;
                this.tail = this.head = new e(g,0,0);
                this.states = null
            }
            function m(a, b, d) {
                b[d] = 255 & a
            }
            function f(a, b) {
                this.len = a;
                this.next = void 0;
                this.val = b
            }
            function d(a, b, d) {
                for (; a.hi; )
                    b[d++] = 127 & a.lo | 128,
                    a.lo = (a.lo >>> 7 | a.hi << 25) >>> 0,
                    a.hi >>>= 7;
                for (; 127 < a.lo; )
                    b[d++] = 127 & a.lo | 128,
                    a.lo >>>= 7;
                b[d++] = a.lo
            }
            function l(a, b, d) {
                b[d] = 255 & a;
                b[d + 1] = a >>> 8 & 255;
                b[d + 2] = a >>> 16 & 255;
                b[d + 3] = a >>> 24
            }
            a.exports = h;
            var x, y = c(0), n = y.LongBits, r = y.base64, q = y.utf8;
            h.create = y.Buffer ? function() {
                return (h.create = function() {
                    return new x
                }
                )()
            }
            : function() {
                return new h
            }
            ;
            h.alloc = function(a) {
                return new y.Array(a)
            }
            ;
            y.Array !== Array && (h.alloc = y.pool(h.alloc, y.Array.prototype.subarray));
            h.prototype._push = function(a, b, d) {
                this.tail = this.tail.next = new e(a,b,d);
                this.len += b;
                return this
            }
            ;
            f.prototype = Object.create(e.prototype);
            f.prototype.fn = function(a, b, d) {
                for (; 127 < a; )
                    b[d++] = 127 & a | 128,
                    a >>>= 7;
                b[d] = a
            }
            ;
            h.prototype.uint32 = function(a) {
                this.len += (this.tail = this.tail.next = new f(128 > (a >>>= 0) ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,a)).len;
                return this
            }
            ;
            h.prototype.int32 = function(a) {
                return 0 > a ? this._push(d, 10, n.fromNumber(a)) : this.uint32(a)
            }
            ;
            h.prototype.sint32 = function(a) {
                return this.uint32((a << 1 ^ a >> 31) >>> 0)
            }
            ;
            h.prototype.uint64 = function(a) {
                a = n.from(a);
                return this._push(d, a.length(), a)
            }
            ;
            h.prototype.int64 = h.prototype.uint64;
            h.prototype.sint64 = function(a) {
                a = n.from(a).zzEncode();
                return this._push(d, a.length(), a)
            }
            ;
            h.prototype.bool = function(a) {
                return this._push(m, 1, a ? 1 : 0)
            }
            ;
            h.prototype.fixed32 = function(a) {
                return this._push(l, 4, a >>> 0)
            }
            ;
            h.prototype.sfixed32 = h.prototype.fixed32;
            h.prototype.fixed64 = function(a) {
                a = n.from(a);
                return this._push(l, 4, a.lo)._push(l, 4, a.hi)
            }
            ;
            h.prototype.sfixed64 = h.prototype.fixed64;
            h.prototype["float"] = function(a) {
                return this._push(y["float"].writeFloatLE, 4, a)
            }
            ;
            h.prototype["double"] = function(a) {
                return this._push(y["float"].writeDoubleLE, 8, a)
            }
            ;
            var u = y.Array.prototype.set ? function(a, b, d) {
                b.set(a, d)
            }
            : function(a, b, d) {
                for (var f = 0; f < a.length; ++f)
                    b[d + f] = a[f]
            }
            ;
            h.prototype.bytes = function(a) {
                var b = a.length >>> 0;
                if (!b)
                    return this._push(m, 1, 0);
                if (y.isString(a)) {
                    var d = h.alloc(b = r.length(a));
                    r.decode(a, d, 0);
                    a = d
                }
                return this.uint32(b)._push(u, b, a)
            }
            ;
            h.prototype.string = function(a) {
                var b = q.length(a);
                return b ? this.uint32(b)._push(q.write, b, a) : this._push(m, 1, 0)
            }
            ;
            h.prototype.fork = function() {
                this.states = new k(this);
                this.head = this.tail = new e(g,0,0);
                this.len = 0;
                return this
            }
            ;
            h.prototype.reset = function() {
                this.states ? (this.head = this.states.head,
                this.tail = this.states.tail,
                this.len = this.states.len,
                this.states = this.states.next) : (this.head = this.tail = new e(g,0,0),
                this.len = 0);
                return this
            }
            ;
            h.prototype.ldelim = function() {
                var a = this.head
                  , b = this.tail
                  , d = this.len;
                this.reset().uint32(d);
                d && (this.tail.next = a.next,
                this.tail = b,
                this.len += d);
                return this
            }
            ;
            h.prototype.finish = function() {
                for (var a = this.head.next, b = this.constructor.alloc(this.len), d = 0; a; )
                    a.fn(a.val, b, d),
                    d += a.len,
                    a = a.next;
                return b
            }
            ;
            h._configure = function(a) {
                x = a
            }
        }
        , function(a, b, c) {
            a.exports = {}
        }
        , function(a, b, c) {
            function e(a, b, c) {
                if ("function" != typeof a)
                    throw TypeError("rpcImpl must be a function");
                g.EventEmitter.call(this);
                this.rpcImpl = a;
                this.requestDelimited = !!b;
                this.responseDelimited = !!c
            }
            a.exports = e;
            var g = c(0);
            (e.prototype = Object.create(g.EventEmitter.prototype)).constructor = e;
            e.prototype.rpcCall = function x(a, b, f, d, c) {
                if (!d)
                    throw TypeError("request must be specified");
                var e = this;
                if (!c)
                    return g.asPromise(x, e, a, b, f, d);
                if (e.rpcImpl)
                    try {
                        return e.rpcImpl(a, b[e.requestDelimited ? "encodeDelimited" : "encode"](d).finish(), function(b, d) {
                            if (b)
                                return e.emit("error", b, a),
                                c(b);
                            if (null !== d) {
                                if (!(d instanceof f))
                                    try {
                                        d = f[e.responseDelimited ? "decodeDelimited" : "decode"](d)
                                    } catch (Q) {
                                        return e.emit("error", Q, a),
                                        c(Q)
                                    }
                                e.emit("data", d, a);
                                return c(null, d)
                            }
                            e.end(!0)
                        })
                    } catch (J) {
                        e.emit("error", J, a),
                        D(function() {
                            c(J)
                        }, 0)
                    }
                else
                    D(function() {
                        c(Error("already ended"))
                    }, 0)
            }
            ;
            e.prototype.end = function(a) {
                this.rpcImpl && (a || this.rpcImpl(null, null, null),
                this.rpcImpl = null,
                this.emit("end").off());
                return this
            }
        }
        , function(a, b, c) {
            b.Service = c(4)
        }
        , function(a, b, c) {
            function e(a) {
                g.call(this, a)
            }
            a.exports = e;
            var g = c(1);
            (e.prototype = Object.create(g.prototype)).constructor = e;
            a = c(0);
            a.Buffer && (e.prototype._slice = a.Buffer.prototype.slice);
            e.prototype.string = function() {
                var a = this.uint32();
                return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + a, this.len))
            }
        }
        , function(a, b, c) {
            function e() {
                k.call(this)
            }
            function g(a, b, f) {
                40 > a.length ? h.utf8.write(a, b, f) : b.utf8Write(a, f)
            }
            a.exports = e;
            var k = c(2);
            (e.prototype = Object.create(k.prototype)).constructor = e;
            var h = c(0)
              , m = h.Buffer;
            e.alloc = function(a) {
                return (e.alloc = h._Buffer_allocUnsafe)(a)
            }
            ;
            var f = m && m.prototype instanceof Uint8Array && "set" === m.prototype.set.name ? function(a, b, f) {
                b.set(a, f)
            }
            : function(a, b, f) {
                if (a.copy)
                    a.copy(b, f, 0, a.length);
                else
                    for (var d = 0; d < a.length; )
                        b[f++] = a[d++]
            }
            ;
            e.prototype.bytes = function(a) {
                h.isString(a) && (a = h._Buffer_from(a, "base64"));
                var b = a.length >>> 0;
                this.uint32(b);
                b && this._push(f, b, a);
                return this
            }
            ;
            e.prototype.string = function(a) {
                var b = m.byteLength(a);
                this.uint32(b);
                b && this._push(g, b, a);
                return this
            }
        }
        , function(a, b, c) {
            function e(a, b) {
                this.lo = a >>> 0;
                this.hi = b >>> 0
            }
            a.exports = e;
            var g = c(0)
              , k = e.zero = new e(0,0);
            k.toNumber = function() {
                return 0
            }
            ;
            k.zzEncode = k.zzDecode = function() {
                return this
            }
            ;
            k.length = function() {
                return 1
            }
            ;
            var h = e.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
            e.fromNumber = function(a) {
                if (0 === a)
                    return k;
                var b = 0 > a;
                b && (a = -a);
                var f = a >>> 0;
                a = (a - f) / 4294967296 >>> 0;
                b && (a = ~a >>> 0,
                f = ~f >>> 0,
                4294967295 < ++f && (f = 0,
                4294967295 < ++a && (a = 0)));
                return new e(f,a)
            }
            ;
            e.from = function(a) {
                if ("number" == typeof a)
                    return e.fromNumber(a);
                if (g.isString(a)) {
                    if (!g.Long)
                        return e.fromNumber(parseInt(a, 10));
                    a = g.Long.fromString(a)
                }
                return a.low || a.high ? new e(a.low >>> 0,a.high >>> 0) : k
            }
            ;
            e.prototype.toNumber = function(a) {
                if (!a && this.hi >>> 31) {
                    a = 1 + ~this.lo >>> 0;
                    var b = ~this.hi >>> 0;
                    a || (b = b + 1 >>> 0);
                    return -(a + 4294967296 * b)
                }
                return this.lo + 4294967296 * this.hi
            }
            ;
            e.prototype.toLong = function(a) {
                return g.Long ? new g.Long(0 | this.lo,0 | this.hi,!!a) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!a
                }
            }
            ;
            var m = String.prototype.charCodeAt;
            e.fromHash = function(a) {
                return a === h ? k : new e((m.call(a, 0) | m.call(a, 1) << 8 | m.call(a, 2) << 16 | m.call(a, 3) << 24) >>> 0,(m.call(a, 4) | m.call(a, 5) << 8 | m.call(a, 6) << 16 | m.call(a, 7) << 24) >>> 0)
            }
            ;
            e.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }
            ;
            e.prototype.zzEncode = function() {
                var a = this.hi >> 31;
                this.hi = ((this.hi << 1 | this.lo >>> 31) ^ a) >>> 0;
                this.lo = (this.lo << 1 ^ a) >>> 0;
                return this
            }
            ;
            e.prototype.zzDecode = function() {
                var a = -(1 & this.lo);
                this.lo = ((this.lo >>> 1 | this.hi << 31) ^ a) >>> 0;
                this.hi = (this.hi >>> 1 ^ a) >>> 0;
                return this
            }
            ;
            e.prototype.length = function() {
                var a = this.lo
                  , b = (this.lo >>> 28 | this.hi << 4) >>> 0
                  , c = this.hi >>> 24;
                return 0 === c ? 0 === b ? 16384 > a ? 128 > a ? 1 : 2 : 2097152 > a ? 3 : 4 : 16384 > b ? 128 > b ? 5 : 6 : 2097152 > b ? 7 : 8 : 128 > c ? 9 : 10
            }
        }
        , function(a, b, c) {
            a.exports = function(a, b, c) {
                var e = c || 8192
                  , g = e >>> 1
                  , f = null
                  , d = e;
                return function(c) {
                    if (1 > c || c > g)
                        return a(c);
                    d + c > e && (f = a(e),
                    d = 0);
                    c = b.call(f, d, d += c);
                    7 & d && (d = 1 + (7 | d));
                    return c
                }
            }
        }
        , function(a, b, c) {
            b.length = function(a) {
                for (var b = 0, c, e = 0; e < a.length; ++e)
                    c = a.charCodeAt(e),
                    128 > c ? b += 1 : 2048 > c ? b += 2 : 55296 == (64512 & c) && 56320 == (64512 & a.charCodeAt(e + 1)) ? (++e,
                    b += 4) : b += 3;
                return b
            }
            ;
            b.read = function(a, b, c) {
                if (1 > c - b)
                    return "";
                for (var e, g = null, f = [], d = 0; b < c; )
                    e = a[b++],
                    128 > e ? f[d++] = e : 191 < e && 224 > e ? f[d++] = (31 & e) << 6 | 63 & a[b++] : 239 < e && 365 > e ? (e = ((7 & e) << 18 | (63 & a[b++]) << 12 | (63 & a[b++]) << 6 | 63 & a[b++]) - 65536,
                    f[d++] = 55296 + (e >> 10),
                    f[d++] = 56320 + (1023 & e)) : f[d++] = (15 & e) << 12 | (63 & a[b++]) << 6 | 63 & a[b++],
                    8191 < d && ((g || (g = [])).push(String.fromCharCode.apply(String, f)),
                    d = 0);
                return g ? (d && g.push(String.fromCharCode.apply(String, f.slice(0, d))),
                g.join("")) : String.fromCharCode.apply(String, f.slice(0, d))
            }
            ;
            b.write = function(a, b, c) {
                for (var e, g, f = c, d = 0; d < a.length; ++d)
                    e = a.charCodeAt(d),
                    128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (64512 & e) && 56320 == (64512 & (g = a.charCodeAt(d + 1))) ? (e = 65536 + ((1023 & e) << 10) + (1023 & g),
                    ++d,
                    b[c++] = e >> 18 | 240,
                    b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
                    b[c++] = e >> 6 & 63 | 128),
                    b[c++] = 63 & e | 128);
                return c - f
            }
        }
        , function(a, b, c) {
            a.exports = function(a) {
                return null
            }
        }
        , function(a, b, c) {
            function e(a) {
                "undefined" != typeof Float32Array ? function() {
                    function b(a, b, d) {
                        g[0] = a;
                        b[d] = h[0];
                        b[d + 1] = h[1];
                        b[d + 2] = h[2];
                        b[d + 3] = h[3]
                    }
                    function c(a, b, d) {
                        g[0] = a;
                        b[d] = h[3];
                        b[d + 1] = h[2];
                        b[d + 2] = h[1];
                        b[d + 3] = h[0]
                    }
                    function f(a, b) {
                        h[0] = a[b];
                        h[1] = a[b + 1];
                        h[2] = a[b + 2];
                        h[3] = a[b + 3];
                        return g[0]
                    }
                    function e(a, b) {
                        h[3] = a[b];
                        h[2] = a[b + 1];
                        h[1] = a[b + 2];
                        h[0] = a[b + 3];
                        return g[0]
                    }
                    var g = new Float32Array([-0])
                      , h = new Uint8Array(g.buffer)
                      , m = 128 === h[3];
                    a.writeFloatLE = m ? b : c;
                    a.writeFloatBE = m ? c : b;
                    a.readFloatLE = m ? f : e;
                    a.readFloatBE = m ? e : f
                }() : function() {
                    function b(a, b, d, c) {
                        var f = 0 > b ? 1 : 0;
                        f && (b = -b);
                        if (0 === b)
                            a(0 < 1 / b ? 0 : 2147483648, d, c);
                        else if (isNaN(b))
                            a(2143289344, d, c);
                        else if (3.4028234663852886e+38 < b)
                            a((f << 31 | 2139095040) >>> 0, d, c);
                        else if (1.1754943508222875e-38 > b)
                            a((f << 31 | Math.round(b / 1.401298464324817e-45)) >>> 0, d, c);
                        else {
                            var e = Math.floor(Math.log(b) / Math.LN2);
                            a((f << 31 | e + 127 << 23 | 8388607 & Math.round(b * Math.pow(2, -e) * 8388608)) >>> 0, d, c)
                        }
                    }
                    function c(a, b, d) {
                        d = a(b, d);
                        a = 2 * (d >> 31) + 1;
                        b = d >>> 23 & 255;
                        d &= 8388607;
                        return 255 === b ? d ? NaN : 1 / 0 * a : 0 === b ? 1.401298464324817e-45 * a * d : a * Math.pow(2, b - 150) * (d + 8388608)
                    }
                    a.writeFloatLE = b.bind(null, g);
                    a.writeFloatBE = b.bind(null, k);
                    a.readFloatLE = c.bind(null, h);
                    a.readFloatBE = c.bind(null, m)
                }();
                "undefined" != typeof Float64Array ? function() {
                    function b(a, b, d) {
                        g[0] = a;
                        b[d] = h[0];
                        b[d + 1] = h[1];
                        b[d + 2] = h[2];
                        b[d + 3] = h[3];
                        b[d + 4] = h[4];
                        b[d + 5] = h[5];
                        b[d + 6] = h[6];
                        b[d + 7] = h[7]
                    }
                    function c(a, b, d) {
                        g[0] = a;
                        b[d] = h[7];
                        b[d + 1] = h[6];
                        b[d + 2] = h[5];
                        b[d + 3] = h[4];
                        b[d + 4] = h[3];
                        b[d + 5] = h[2];
                        b[d + 6] = h[1];
                        b[d + 7] = h[0]
                    }
                    function f(a, b) {
                        h[0] = a[b];
                        h[1] = a[b + 1];
                        h[2] = a[b + 2];
                        h[3] = a[b + 3];
                        h[4] = a[b + 4];
                        h[5] = a[b + 5];
                        h[6] = a[b + 6];
                        h[7] = a[b + 7];
                        return g[0]
                    }
                    function e(a, b) {
                        h[7] = a[b];
                        h[6] = a[b + 1];
                        h[5] = a[b + 2];
                        h[4] = a[b + 3];
                        h[3] = a[b + 4];
                        h[2] = a[b + 5];
                        h[1] = a[b + 6];
                        h[0] = a[b + 7];
                        return g[0]
                    }
                    var g = new Float64Array([-0])
                      , h = new Uint8Array(g.buffer)
                      , m = 128 === h[7];
                    a.writeDoubleLE = m ? b : c;
                    a.writeDoubleBE = m ? c : b;
                    a.readDoubleLE = m ? f : e;
                    a.readDoubleBE = m ? e : f
                }() : function() {
                    function b(a, b, d, c, f, e) {
                        var l = 0 > c ? 1 : 0;
                        l && (c = -c);
                        if (0 === c)
                            a(0, f, e + b),
                            a(0 < 1 / c ? 0 : 2147483648, f, e + d);
                        else if (isNaN(c))
                            a(0, f, e + b),
                            a(2146959360, f, e + d);
                        else if (1.7976931348623157e+308 < c)
                            a(0, f, e + b),
                            a((l << 31 | 2146435072) >>> 0, f, e + d);
                        else if (2.2250738585072014e-308 > c)
                            c /= 5e-324,
                            a(c >>> 0, f, e + b),
                            a((l << 31 | c / 4294967296) >>> 0, f, e + d);
                        else {
                            var g = Math.floor(Math.log(c) / Math.LN2);
                            1024 === g && (g = 1023);
                            c *= Math.pow(2, -g);
                            a(4503599627370496 * c >>> 0, f, e + b);
                            a((l << 31 | g + 1023 << 20 | 1048576 * c & 1048575) >>> 0, f, e + d)
                        }
                    }
                    function c(a, b, d, c, f) {
                        b = a(c, f + b);
                        c = a(c, f + d);
                        a = 2 * (c >> 31) + 1;
                        d = c >>> 20 & 2047;
                        b = 4294967296 * (1048575 & c) + b;
                        return 2047 === d ? b ? NaN : 1 / 0 * a : 0 === d ? 5e-324 * a * b : a * Math.pow(2, d - 1075) * (b + 4503599627370496)
                    }
                    a.writeDoubleLE = b.bind(null, g, 0, 4);
                    a.writeDoubleBE = b.bind(null, k, 4, 0);
                    a.readDoubleLE = c.bind(null, h, 0, 4);
                    a.readDoubleBE = c.bind(null, m, 4, 0)
                }();
                return a
            }
            function g(a, b, c) {
                b[c] = 255 & a;
                b[c + 1] = a >>> 8 & 255;
                b[c + 2] = a >>> 16 & 255;
                b[c + 3] = a >>> 24
            }
            function k(a, b, c) {
                b[c] = a >>> 24;
                b[c + 1] = a >>> 16 & 255;
                b[c + 2] = a >>> 8 & 255;
                b[c + 3] = 255 & a
            }
            function h(a, b) {
                return (a[b] | a[b + 1] << 8 | a[b + 2] << 16 | a[b + 3] << 24) >>> 0
            }
            function m(a, b) {
                return (a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]) >>> 0
            }
            a.exports = e(e)
        }
        , function(a, b, c) {
            function e() {
                this._listeners = {}
            }
            a.exports = e;
            e.prototype.on = function(a, b, c) {
                (this._listeners[a] || (this._listeners[a] = [])).push({
                    fn: b,
                    ctx: c || this
                });
                return this
            }
            ;
            e.prototype.off = function(a, b) {
                if (void 0 === a)
                    this._listeners = {};
                else if (void 0 === b)
                    this._listeners[a] = [];
                else
                    for (var c = this._listeners[a], e = 0; e < c.length; )
                        c[e].fn === b ? c.splice(e, 1) : ++e;
                return this
            }
            ;
            e.prototype.emit = function(a) {
                var b = this._listeners[a];
                if (b) {
                    for (var c = [], e = 1; e < arguments.length; )
                        c.push(arguments[e++]);
                    for (e = 0; e < b.length; )
                        b[e].fn.apply(b[e++].ctx, c)
                }
                return this
            }
        }
        , function(a, b, c) {
            b.length = function(a) {
                var b = a.length;
                if (!b)
                    return 0;
                for (var c = 0; 1 < --b % 4 && "\x3d" === a.charAt(b); )
                    ++c;
                return Math.ceil(3 * a.length) / 4 - c
            }
            ;
            var e = Array(64)
              , g = Array(123);
            for (a = 0; 64 > a; )
                g[e[a] = 26 > a ? a + 65 : 52 > a ? a + 71 : 62 > a ? a - 4 : a - 59 | 43] = a++;
            b.encode = function(a, b, c) {
                for (var f, d = null, l = [], g = 0, h = 0; b < c; ) {
                    var m = a[b++];
                    switch (h) {
                    case 0:
                        l[g++] = e[m >> 2];
                        f = (3 & m) << 4;
                        h = 1;
                        break;
                    case 1:
                        l[g++] = e[f | m >> 4];
                        f = (15 & m) << 2;
                        h = 2;
                        break;
                    case 2:
                        l[g++] = e[f | m >> 6],
                        l[g++] = e[63 & m],
                        h = 0
                    }
                    8191 < g && ((d || (d = [])).push(String.fromCharCode.apply(String, l)),
                    g = 0)
                }
                h && (l[g++] = e[f],
                l[g++] = 61,
                1 === h && (l[g++] = 61));
                return d ? (g && d.push(String.fromCharCode.apply(String, l.slice(0, g))),
                d.join("")) : String.fromCharCode.apply(String, l.slice(0, g))
            }
            ;
            b.decode = function(a, b, c) {
                for (var f, d = c, e = 0, h = 0; h < a.length; ) {
                    var m = a.charCodeAt(h++);
                    if (61 === m && 1 < e)
                        break;
                    if (void 0 === (m = g[m]))
                        throw Error("invalid encoding");
                    switch (e) {
                    case 0:
                        f = m;
                        e = 1;
                        break;
                    case 1:
                        b[c++] = f << 2 | (48 & m) >> 4;
                        f = m;
                        e = 2;
                        break;
                    case 2:
                        b[c++] = (15 & f) << 4 | (60 & m) >> 2;
                        f = m;
                        e = 3;
                        break;
                    case 3:
                        b[c++] = (3 & f) << 6 | m,
                        e = 0
                    }
                }
                if (1 === e)
                    throw Error("invalid encoding");
                return c - d
            }
            ;
            b.test = function(a) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)
            }
        }
        , function(a, b, c) {
            a.exports = function(a, b) {
                for (var c = Array(arguments.length - 1), e = 0, g = 2, f = !0; g < arguments.length; )
                    c[e++] = arguments[g++];
                return new Promise(function(d, l) {
                    c[e] = function(a) {
                        if (f)
                            if (f = !1,
                            a)
                                l(a);
                            else {
                                for (var b = Array(arguments.length - 1), c = 0; c < b.length; )
                                    b[c++] = arguments[c];
                                d.apply(null, b)
                            }
                    }
                    ;
                    try {
                        a.apply(b || null, c)
                    } catch (x) {
                        f && (f = !1,
                        l(x))
                    }
                }
                )
            }
        }
        , function(a, b, c) {
            function e() {
                g.Reader._configure(g.BufferReader);
                g.util._configure()
            }
            var g = b;
            g.build = "minimal";
            g.Writer = c(2);
            g.BufferWriter = c(7);
            g.Reader = c(1);
            g.BufferReader = c(6);
            g.util = c(0);
            g.rpc = c(5);
            g.roots = c(3);
            g.configure = e;
            g.Writer._configure(g.BufferWriter);
            e()
        }
        , function(a, b, c) {
            a.exports = c(16)
        }
        , function(a, b, c) {
            b = c(17);
            var e = b.Reader
              , g = b.Writer
              , k = b.util
              , h = b.roots["default"] || (b.roots["default"] = {});
            h.BufferWrapper = function() {
                function a(a) {
                    this.buffer = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.buffer = k.emptyArray;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    if (null != a.buffer && a.buffer.length)
                        for (var d = 0; d < a.buffer.length; ++d)
                            h.Buffer.encode(a.buffer[d], b.uint32(10).fork()).ldelim();
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.BufferWrapper; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.buffer && c.buffer.length || (c.buffer = []);
                            c.buffer.push(h.Buffer.decode(a, a.uint32()));
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.Buffer = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.stamp = 0;
                a.prototype.data = null;
                a.prototype.page = 0;
                a.prototype.chunk = k.newBuffer([]);
                a.prototype.end = !1;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.stamp && Object.hasOwnProperty.call(a, "stamp") && b.uint32(8).int32(a.stamp);
                    null != a.data && Object.hasOwnProperty.call(a, "data") && h.Wrapper.encode(a.data, b.uint32(18).fork()).ldelim();
                    null != a.page && Object.hasOwnProperty.call(a, "page") && b.uint32(24).int32(a.page);
                    null != a.chunk && Object.hasOwnProperty.call(a, "chunk") && b.uint32(34).bytes(a.chunk);
                    null != a.end && Object.hasOwnProperty.call(a, "end") && b.uint32(40).bool(a.end);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Buffer; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.stamp = a.int32();
                            break;
                        case 2:
                            c.data = h.Wrapper.decode(a, a.uint32());
                            break;
                        case 3:
                            c.page = a.int32();
                            break;
                        case 4:
                            c.chunk = a.bytes();
                            break;
                        case 5:
                            c.end = a.bool();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.Wrapper = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                            null != a[b[d]] && (this[b[d]] = a[b[d]])
                }
                a.prototype.page = null;
                a.prototype.mutation = null;
                a.prototype.event = null;
                a.prototype.articleInfo = null;
                a.prototype.publishersHeader = null;
                a.prototype.activity = 0;
                var b;
                Object.defineProperty(a.prototype, "data", {
                    get: k.oneOfGetter(b = "page mutation event articleInfo publishersHeader activity".split(" ")),
                    set: k.oneOfSetter(b)
                });
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.page && Object.hasOwnProperty.call(a, "page") && h.Page.encode(a.page, b.uint32(10).fork()).ldelim();
                    null != a.mutation && Object.hasOwnProperty.call(a, "mutation") && h.Mutation.encode(a.mutation, b.uint32(18).fork()).ldelim();
                    null != a.event && Object.hasOwnProperty.call(a, "event") && h.Event.encode(a.event, b.uint32(26).fork()).ldelim();
                    null != a.articleInfo && Object.hasOwnProperty.call(a, "articleInfo") && h.ArticleInfo.encode(a.articleInfo, b.uint32(34).fork()).ldelim();
                    null != a.publishersHeader && Object.hasOwnProperty.call(a, "publishersHeader") && h.PublishersHeader.encode(a.publishersHeader, b.uint32(42).fork()).ldelim();
                    null != a.activity && Object.hasOwnProperty.call(a, "activity") && b.uint32(48).uint32(a.activity);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Wrapper; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.page = h.Page.decode(a, a.uint32());
                            break;
                        case 2:
                            c.mutation = h.Mutation.decode(a, a.uint32());
                            break;
                        case 3:
                            c.event = h.Event.decode(a, a.uint32());
                            break;
                        case 4:
                            c.articleInfo = h.ArticleInfo.decode(a, a.uint32());
                            break;
                        case 5:
                            c.publishersHeader = h.PublishersHeader.decode(a, a.uint32());
                            break;
                        case 6:
                            c.activity = a.uint32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.Page = function() {
                function a(a) {
                    this.content = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.meta = null;
                a.prototype.content = k.emptyArray;
                a.prototype.frameId = 0;
                a.prototype.tabId = "";
                a.prototype.recordStamp = k.Long ? k.Long.fromBits(0, 0, !1) : 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.meta && Object.hasOwnProperty.call(a, "meta") && h.Page.Meta.encode(a.meta, b.uint32(10).fork()).ldelim();
                    if (null != a.content && a.content.length)
                        for (var d = 0; d < a.content.length; ++d)
                            h.Page.Content.encode(a.content[d], b.uint32(18).fork()).ldelim();
                    null != a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(24).sint32(a.frameId);
                    null != a.tabId && Object.hasOwnProperty.call(a, "tabId") && b.uint32(34).string(a.tabId);
                    null != a.recordStamp && Object.hasOwnProperty.call(a, "recordStamp") && b.uint32(40).int64(a.recordStamp);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Page; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.meta = h.Page.Meta.decode(a, a.uint32());
                            break;
                        case 2:
                            c.content && c.content.length || (c.content = []);
                            c.content.push(h.Page.Content.decode(a, a.uint32()));
                            break;
                        case 3:
                            c.frameId = a.sint32();
                            break;
                        case 4:
                            c.tabId = a.string();
                            break;
                        case 5:
                            c.recordStamp = a.int64();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                a.Box = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                        null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(16).int32(a.height);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Page.Box; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.width = a.int32();
                                break;
                            case 2:
                                c.height = a.int32();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Location = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.host = "";
                    a.prototype.protocol = "";
                    a.prototype.path = "";
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.host && Object.hasOwnProperty.call(a, "host") && b.uint32(10).string(a.host);
                        null != a.protocol && Object.hasOwnProperty.call(a, "protocol") && b.uint32(18).string(a.protocol);
                        null != a.path && Object.hasOwnProperty.call(a, "path") && b.uint32(26).string(a.path);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Page.Location; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.host = a.string();
                                break;
                            case 2:
                                c.protocol = a.string();
                                break;
                            case 3:
                                c.path = a.string();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Scroll = function() {
                    function a(a) {
                        this.scroll = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.target = 0;
                    a.prototype.scroll = k.emptyArray;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.target && Object.hasOwnProperty.call(a, "target") && b.uint32(8).int32(a.target);
                        if (null != a.scroll && a.scroll.length) {
                            b.uint32(18).fork();
                            for (var d = 0; d < a.scroll.length; ++d)
                                b.int32(a.scroll[d]);
                            b.ldelim()
                        }
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Page.Scroll; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.target = a.int32();
                                break;
                            case 2:
                                c.scroll && c.scroll.length || (c.scroll = []);
                                if (2 == (7 & f))
                                    for (f = a.uint32() + a.pos; a.pos < f; )
                                        c.scroll.push(a.int32());
                                else
                                    c.scroll.push(a.int32());
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Meta = function() {
                    function a(a) {
                        this.initialScroll = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.doctype = "";
                    a.prototype.title = "";
                    a.prototype.address = "";
                    a.prototype.ua = "";
                    a.prototype.referrer = "";
                    a.prototype.base = "";
                    a.prototype.hasBase = !1;
                    a.prototype.screen = null;
                    a.prototype.viewport = null;
                    a.prototype.location = null;
                    a.prototype.initialScroll = k.emptyArray;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.doctype && Object.hasOwnProperty.call(a, "doctype") && b.uint32(10).string(a.doctype);
                        null != a.title && Object.hasOwnProperty.call(a, "title") && b.uint32(18).string(a.title);
                        null != a.address && Object.hasOwnProperty.call(a, "address") && b.uint32(26).string(a.address);
                        null != a.ua && Object.hasOwnProperty.call(a, "ua") && b.uint32(34).string(a.ua);
                        null != a.referrer && Object.hasOwnProperty.call(a, "referrer") && b.uint32(42).string(a.referrer);
                        null != a.base && Object.hasOwnProperty.call(a, "base") && b.uint32(50).string(a.base);
                        null != a.hasBase && Object.hasOwnProperty.call(a, "hasBase") && b.uint32(56).bool(a.hasBase);
                        null != a.screen && Object.hasOwnProperty.call(a, "screen") && h.Page.Box.encode(a.screen, b.uint32(66).fork()).ldelim();
                        null != a.viewport && Object.hasOwnProperty.call(a, "viewport") && h.Page.Box.encode(a.viewport, b.uint32(74).fork()).ldelim();
                        null != a.location && Object.hasOwnProperty.call(a, "location") && h.Page.Location.encode(a.location, b.uint32(82).fork()).ldelim();
                        if (null != a.initialScroll && a.initialScroll.length)
                            for (var d = 0; d < a.initialScroll.length; ++d)
                                h.Page.Scroll.encode(a.initialScroll[d], b.uint32(90).fork()).ldelim();
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Page.Meta; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.doctype = a.string();
                                break;
                            case 2:
                                c.title = a.string();
                                break;
                            case 3:
                                c.address = a.string();
                                break;
                            case 4:
                                c.ua = a.string();
                                break;
                            case 5:
                                c.referrer = a.string();
                                break;
                            case 6:
                                c.base = a.string();
                                break;
                            case 7:
                                c.hasBase = a.bool();
                                break;
                            case 8:
                                c.screen = h.Page.Box.decode(a, a.uint32());
                                break;
                            case 9:
                                c.viewport = h.Page.Box.decode(a, a.uint32());
                                break;
                            case 10:
                                c.location = h.Page.Location.decode(a, a.uint32());
                                break;
                            case 11:
                                c.initialScroll && c.initialScroll.length || (c.initialScroll = []);
                                c.initialScroll.push(h.Page.Scroll.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Content = function() {
                    function a(a) {
                        this.attributes = {};
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.name = "";
                    a.prototype.attributes = k.emptyObject;
                    a.prototype.parent = 0;
                    a.prototype.content = "";
                    a.prototype.next = 0;
                    a.prototype.prev = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(18).string(a.name);
                        if (null != a.attributes && Object.hasOwnProperty.call(a, "attributes"))
                            for (var d = Object.keys(a.attributes), c = 0; c < d.length; ++c)
                                b.uint32(26).fork().uint32(10).string(d[c]).uint32(18).string(a.attributes[d[c]]).ldelim();
                        null != a.parent && Object.hasOwnProperty.call(a, "parent") && b.uint32(32).int32(a.parent);
                        null != a.content && Object.hasOwnProperty.call(a, "content") && b.uint32(42).string(a.content);
                        null != a.next && Object.hasOwnProperty.call(a, "next") && b.uint32(48).int32(a.next);
                        null != a.prev && Object.hasOwnProperty.call(a, "prev") && b.uint32(56).int32(a.prev);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d, c = void 0 === b ? a.len : a.pos + b, f = new h.Page.Content; a.pos < c; )
                            switch (d = a.uint32(),
                            d >>> 3) {
                            case 1:
                                f.id = a.int32();
                                break;
                            case 2:
                                f.name = a.string();
                                break;
                            case 3:
                                a.skip().pos++;
                                f.attributes === k.emptyObject && (f.attributes = {});
                                d = a.string();
                                a.pos++;
                                f.attributes[d] = a.string();
                                break;
                            case 4:
                                f.parent = a.int32();
                                break;
                            case 5:
                                f.content = a.string();
                                break;
                            case 6:
                                f.next = a.int32();
                                break;
                            case 7:
                                f.prev = a.int32();
                                break;
                            default:
                                a.skipType(7 & d)
                            }
                        return f
                    }
                    ;
                    return a
                }();
                return a
            }();
            h.Mutation = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.target = 0;
                a.prototype.stamp = 0;
                a.prototype.meta = null;
                a.prototype.frameId = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.target && Object.hasOwnProperty.call(a, "target") && b.uint32(8).int32(a.target);
                    null != a.stamp && Object.hasOwnProperty.call(a, "stamp") && b.uint32(16).int32(a.stamp);
                    null != a.meta && Object.hasOwnProperty.call(a, "meta") && h.Mutation.Meta.encode(a.meta, b.uint32(26).fork()).ldelim();
                    null != a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(32).sint32(a.frameId);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.target = a.int32();
                            break;
                        case 2:
                            c.stamp = a.int32();
                            break;
                        case 3:
                            c.meta = h.Mutation.Meta.decode(a, a.uint32());
                            break;
                        case 4:
                            c.frameId = a.sint32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                a.Delete = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.pr = 0;
                    a.prototype.nx = 0;
                    a.prototype.pa = 0;
                    a.prototype.i = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.pr && Object.hasOwnProperty.call(a, "pr") && b.uint32(16).int32(a.pr);
                        null != a.nx && Object.hasOwnProperty.call(a, "nx") && b.uint32(24).int32(a.nx);
                        null != a.pa && Object.hasOwnProperty.call(a, "pa") && b.uint32(32).int32(a.pa);
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(40).int32(a.i);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation.Delete; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.id = a.int32();
                                break;
                            case 2:
                                c.pr = a.int32();
                                break;
                            case 3:
                                c.nx = a.int32();
                                break;
                            case 4:
                                c.pa = a.int32();
                                break;
                            case 5:
                                c.i = a.int32();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Add = function() {
                    function a(a) {
                        this.at = {};
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.nm = "";
                    a.prototype.pa = 0;
                    a.prototype.ns = "";
                    a.prototype.pr = 0;
                    a.prototype.at = k.emptyObject;
                    a.prototype.ct = "";
                    a.prototype.nx = 0;
                    a.prototype.i = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.nm && Object.hasOwnProperty.call(a, "nm") && b.uint32(18).string(a.nm);
                        null != a.pa && Object.hasOwnProperty.call(a, "pa") && b.uint32(24).int32(a.pa);
                        null != a.ns && Object.hasOwnProperty.call(a, "ns") && b.uint32(34).string(a.ns);
                        null != a.pr && Object.hasOwnProperty.call(a, "pr") && b.uint32(40).int32(a.pr);
                        if (null != a.at && Object.hasOwnProperty.call(a, "at"))
                            for (var d = Object.keys(a.at), c = 0; c < d.length; ++c)
                                b.uint32(50).fork().uint32(10).string(d[c]).uint32(18).string(a.at[d[c]]).ldelim();
                        null != a.ct && Object.hasOwnProperty.call(a, "ct") && b.uint32(58).string(a.ct);
                        null != a.nx && Object.hasOwnProperty.call(a, "nx") && b.uint32(64).int32(a.nx);
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(72).int32(a.i);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d, c = void 0 === b ? a.len : a.pos + b, f = new h.Mutation.Add; a.pos < c; )
                            switch (d = a.uint32(),
                            d >>> 3) {
                            case 1:
                                f.id = a.int32();
                                break;
                            case 2:
                                f.nm = a.string();
                                break;
                            case 3:
                                f.pa = a.int32();
                                break;
                            case 4:
                                f.ns = a.string();
                                break;
                            case 5:
                                f.pr = a.int32();
                                break;
                            case 6:
                                a.skip().pos++;
                                f.at === k.emptyObject && (f.at = {});
                                d = a.string();
                                a.pos++;
                                f.at[d] = a.string();
                                break;
                            case 7:
                                f.ct = a.string();
                                break;
                            case 8:
                                f.nx = a.int32();
                                break;
                            case 9:
                                f.i = a.int32();
                                break;
                            default:
                                a.skipType(7 & d)
                            }
                        return f
                    }
                    ;
                    return a
                }();
                a.BeforeAfter = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.o = "";
                    a.prototype.n = "";
                    a.prototype.r = !1;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.o && Object.hasOwnProperty.call(a, "o") && b.uint32(10).string(a.o);
                        null != a.n && Object.hasOwnProperty.call(a, "n") && b.uint32(18).string(a.n);
                        null != a.r && Object.hasOwnProperty.call(a, "r") && b.uint32(24).bool(a.r);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation.BeforeAfter; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.o = a.string();
                                break;
                            case 2:
                                c.n = a.string();
                                break;
                            case 3:
                                c.r = a.bool();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.AttributeChange = function() {
                    function a(a) {
                        this.at = {};
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.at = k.emptyObject;
                    a.prototype.i = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        if (null != a.at && Object.hasOwnProperty.call(a, "at"))
                            for (var d = Object.keys(a.at), c = 0; c < d.length; ++c)
                                b.uint32(18).fork().uint32(10).string(d[c]),
                                h.Mutation.BeforeAfter.encode(a.at[d[c]], b.uint32(18).fork()).ldelim().ldelim();
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(24).int32(a.i);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d, c = void 0 === b ? a.len : a.pos + b, f = new h.Mutation.AttributeChange; a.pos < c; )
                            switch (d = a.uint32(),
                            d >>> 3) {
                            case 1:
                                f.id = a.int32();
                                break;
                            case 2:
                                a.skip().pos++;
                                f.at === k.emptyObject && (f.at = {});
                                d = a.string();
                                a.pos++;
                                f.at[d] = h.Mutation.BeforeAfter.decode(a, a.uint32());
                                break;
                            case 3:
                                f.i = a.int32();
                                break;
                            default:
                                a.skipType(7 & d)
                            }
                        return f
                    }
                    ;
                    return a
                }();
                a.TextChange = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.ct = null;
                    a.prototype.i = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.ct && Object.hasOwnProperty.call(a, "ct") && h.Mutation.BeforeAfter.encode(a.ct, b.uint32(18).fork()).ldelim();
                        null != a.i && Object.hasOwnProperty.call(a, "i") && b.uint32(24).int32(a.i);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation.TextChange; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.id = a.int32();
                                break;
                            case 2:
                                c.ct = h.Mutation.BeforeAfter.decode(a, a.uint32());
                                break;
                            case 3:
                                c.i = a.int32();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Changes = function() {
                    function a(a) {
                        this.a = [];
                        this.b = [];
                        this.c = [];
                        this.d = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.a = k.emptyArray;
                    a.prototype.b = k.emptyArray;
                    a.prototype.c = k.emptyArray;
                    a.prototype.d = k.emptyArray;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        if (null != a.a && a.a.length)
                            for (var d = 0; d < a.a.length; ++d)
                                h.Mutation.Delete.encode(a.a[d], b.uint32(10).fork()).ldelim();
                        if (null != a.b && a.b.length)
                            for (d = 0; d < a.b.length; ++d)
                                h.Mutation.Add.encode(a.b[d], b.uint32(18).fork()).ldelim();
                        if (null != a.c && a.c.length)
                            for (d = 0; d < a.c.length; ++d)
                                h.Mutation.AttributeChange.encode(a.c[d], b.uint32(26).fork()).ldelim();
                        if (null != a.d && a.d.length)
                            for (d = 0; d < a.d.length; ++d)
                                h.Mutation.TextChange.encode(a.d[d], b.uint32(34).fork()).ldelim();
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation.Changes; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.a && c.a.length || (c.a = []);
                                c.a.push(h.Mutation.Delete.decode(a, a.uint32()));
                                break;
                            case 2:
                                c.b && c.b.length || (c.b = []);
                                c.b.push(h.Mutation.Add.decode(a, a.uint32()));
                                break;
                            case 3:
                                c.c && c.c.length || (c.c = []);
                                c.c.push(h.Mutation.AttributeChange.decode(a, a.uint32()));
                                break;
                            case 4:
                                c.d && c.d.length || (c.d = []);
                                c.d.push(h.Mutation.TextChange.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                a.Meta = function() {
                    function a(a) {
                        this.changes = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.index = 0;
                    a.prototype.changes = k.emptyArray;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.index && Object.hasOwnProperty.call(a, "index") && b.uint32(8).int32(a.index);
                        if (null != a.changes && a.changes.length)
                            for (var d = 0; d < a.changes.length; ++d)
                                h.Mutation.Changes.encode(a.changes[d], b.uint32(18).fork()).ldelim();
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Mutation.Meta; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.index = a.int32();
                                break;
                            case 2:
                                c.changes && c.changes.length || (c.changes = []);
                                c.changes.push(h.Mutation.Changes.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                return a
            }();
            h.Event = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                            null != a[b[d]] && (this[b[d]] = a[b[d]])
                }
                a.prototype.type = 0;
                a.prototype.target = 0;
                a.prototype.frameId = 0;
                a.prototype.mouseEvent = null;
                a.prototype.scrollEvent = null;
                a.prototype.windowEvent = null;
                a.prototype.selectionEvent = null;
                a.prototype.changeEvent = null;
                a.prototype.touchEvent = null;
                a.prototype.methodEvent = null;
                a.prototype.propertyEvent = null;
                a.prototype.zoomEvent = null;
                a.prototype.resizeEvent = null;
                a.prototype.keystrokesEvent = null;
                a.prototype.deviceRotationEvent = null;
                a.prototype.fatalErrorEvent = null;
                a.prototype.hashchangeEvent = null;
                var b;
                Object.defineProperty(a.prototype, "meta", {
                    get: k.oneOfGetter(b = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent".split(" ")),
                    set: k.oneOfSetter(b)
                });
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.type && Object.hasOwnProperty.call(a, "type") && b.uint32(8).int32(a.type);
                    null != a.target && Object.hasOwnProperty.call(a, "target") && b.uint32(16).sint32(a.target);
                    null != a.frameId && Object.hasOwnProperty.call(a, "frameId") && b.uint32(24).sint32(a.frameId);
                    null != a.mouseEvent && Object.hasOwnProperty.call(a, "mouseEvent") && h.MouseEvent.encode(a.mouseEvent, b.uint32(34).fork()).ldelim();
                    null != a.scrollEvent && Object.hasOwnProperty.call(a, "scrollEvent") && h.ScrollEvent.encode(a.scrollEvent, b.uint32(42).fork()).ldelim();
                    null != a.windowEvent && Object.hasOwnProperty.call(a, "windowEvent") && h.WindowEvent.encode(a.windowEvent, b.uint32(50).fork()).ldelim();
                    null != a.selectionEvent && Object.hasOwnProperty.call(a, "selectionEvent") && h.SelectionEvent.encode(a.selectionEvent, b.uint32(58).fork()).ldelim();
                    null != a.changeEvent && Object.hasOwnProperty.call(a, "changeEvent") && h.ChangeEvent.encode(a.changeEvent, b.uint32(66).fork()).ldelim();
                    null != a.touchEvent && Object.hasOwnProperty.call(a, "touchEvent") && h.TouchEvent.encode(a.touchEvent, b.uint32(74).fork()).ldelim();
                    null != a.methodEvent && Object.hasOwnProperty.call(a, "methodEvent") && h.MethodEvent.encode(a.methodEvent, b.uint32(82).fork()).ldelim();
                    null != a.propertyEvent && Object.hasOwnProperty.call(a, "propertyEvent") && h.PropertyEvent.encode(a.propertyEvent, b.uint32(90).fork()).ldelim();
                    null != a.zoomEvent && Object.hasOwnProperty.call(a, "zoomEvent") && h.ZoomEvent.encode(a.zoomEvent, b.uint32(98).fork()).ldelim();
                    null != a.resizeEvent && Object.hasOwnProperty.call(a, "resizeEvent") && h.ResizeEvent.encode(a.resizeEvent, b.uint32(106).fork()).ldelim();
                    null != a.keystrokesEvent && Object.hasOwnProperty.call(a, "keystrokesEvent") && h.KeystrokesEvent.encode(a.keystrokesEvent, b.uint32(114).fork()).ldelim();
                    null != a.deviceRotationEvent && Object.hasOwnProperty.call(a, "deviceRotationEvent") && h.DeviceRotationEvent.encode(a.deviceRotationEvent, b.uint32(122).fork()).ldelim();
                    null != a.fatalErrorEvent && Object.hasOwnProperty.call(a, "fatalErrorEvent") && h.FatalErrorEvent.encode(a.fatalErrorEvent, b.uint32(130).fork()).ldelim();
                    null != a.hashchangeEvent && Object.hasOwnProperty.call(a, "hashchangeEvent") && h.HashchangeEvent.encode(a.hashchangeEvent, b.uint32(138).fork()).ldelim();
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.Event; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.type = a.int32();
                            break;
                        case 2:
                            c.target = a.sint32();
                            break;
                        case 3:
                            c.frameId = a.sint32();
                            break;
                        case 4:
                            c.mouseEvent = h.MouseEvent.decode(a, a.uint32());
                            break;
                        case 5:
                            c.scrollEvent = h.ScrollEvent.decode(a, a.uint32());
                            break;
                        case 6:
                            c.windowEvent = h.WindowEvent.decode(a, a.uint32());
                            break;
                        case 7:
                            c.selectionEvent = h.SelectionEvent.decode(a, a.uint32());
                            break;
                        case 8:
                            c.changeEvent = h.ChangeEvent.decode(a, a.uint32());
                            break;
                        case 9:
                            c.touchEvent = h.TouchEvent.decode(a, a.uint32());
                            break;
                        case 10:
                            c.methodEvent = h.MethodEvent.decode(a, a.uint32());
                            break;
                        case 11:
                            c.propertyEvent = h.PropertyEvent.decode(a, a.uint32());
                            break;
                        case 12:
                            c.zoomEvent = h.ZoomEvent.decode(a, a.uint32());
                            break;
                        case 13:
                            c.resizeEvent = h.ResizeEvent.decode(a, a.uint32());
                            break;
                        case 14:
                            c.keystrokesEvent = h.KeystrokesEvent.decode(a, a.uint32());
                            break;
                        case 15:
                            c.deviceRotationEvent = h.DeviceRotationEvent.decode(a, a.uint32());
                            break;
                        case 16:
                            c.fatalErrorEvent = h.FatalErrorEvent.decode(a, a.uint32());
                            break;
                        case 17:
                            c.hashchangeEvent = h.HashchangeEvent.decode(a, a.uint32());
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.MouseEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.x = 0;
                a.prototype.y = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(8).int32(a.x);
                    null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(16).int32(a.y);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.MouseEvent; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.x = a.int32();
                            break;
                        case 2:
                            c.y = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.ScrollEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.x = 0;
                a.prototype.y = 0;
                a.prototype.page = !1;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(8).int32(a.x);
                    null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(16).int32(a.y);
                    null != a.page && Object.hasOwnProperty.call(a, "page") && b.uint32(24).bool(a.page);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.ScrollEvent; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.x = a.int32();
                            break;
                        case 2:
                            c.y = a.int32();
                            break;
                        case 3:
                            c.page = a.bool();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.WindowEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.WindowEvent; a.pos < d; ) {
                        var f = a.uint32();
                        a.skipType(7 & f)
                    }
                    return c
                }
                ;
                return a
            }();
            h.SelectionEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.start = 0;
                a.prototype.end = 0;
                a.prototype.startNode = 0;
                a.prototype.endNode = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.start && Object.hasOwnProperty.call(a, "start") && b.uint32(8).int32(a.start);
                    null != a.end && Object.hasOwnProperty.call(a, "end") && b.uint32(16).int32(a.end);
                    null != a.startNode && Object.hasOwnProperty.call(a, "startNode") && b.uint32(24).int32(a.startNode);
                    null != a.endNode && Object.hasOwnProperty.call(a, "endNode") && b.uint32(32).int32(a.endNode);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.SelectionEvent; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.start = a.int32();
                            break;
                        case 2:
                            c.end = a.int32();
                            break;
                        case 3:
                            c.startNode = a.int32();
                            break;
                        case 4:
                            c.endNode = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.ChangeEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.value = "";
                a.prototype.checked = !1;
                a.prototype.hidden = !1;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.value && Object.hasOwnProperty.call(a, "value") && b.uint32(10).string(a.value);
                    null != a.checked && Object.hasOwnProperty.call(a, "checked") && b.uint32(16).bool(a.checked);
                    null != a.hidden && Object.hasOwnProperty.call(a, "hidden") && b.uint32(24).bool(a.hidden);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.ChangeEvent; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.value = a.string();
                            break;
                        case 2:
                            c.checked = a.bool();
                            break;
                        case 3:
                            c.hidden = a.bool();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                return a
            }();
            h.TouchEvent = function() {
                function a(a) {
                    this.touches = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.touches = k.emptyArray;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    if (null != a.touches && a.touches.length)
                        for (var d = 0; d < a.touches.length; ++d)
                            h.TouchEvent.SubMeta.encode(a.touches[d], b.uint32(10).fork()).ldelim();
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var d = void 0 === b ? a.len : a.pos + b, c = new h.TouchEvent; a.pos < d; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            c.touches && c.touches.length || (c.touches = []);
                            c.touches.push(h.TouchEvent.SubMeta.decode(a, a.uint32()));
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return c
                }
                ;
                a.SubMeta = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d)
                                null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = "";
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.prototype.force = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(10).string(a.id);
                        null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(21)["float"](a.x);
                        null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(29)["float"](a.y);
                        null != a.force && Object.hasOwnProperty.call(a, "force") && b.uint32(37)["float"](a.force);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var d = void 0 === b ? a.len : a.pos + b, c = new h.TouchEvent.SubMeta; a.pos < d; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                c.id = a.string();
                                break;
                            case 2:
                                c.x = a["float"]();
                                break;
                            case 3:
                                c.y = a["float"]();
                                break;
                            case 4:
                                c.force = a["float"]();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return c
                    }
                    ;
                    return a
                }();
                return a
            }();
            h.ZoomEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.zoomFrom = null;
                a.prototype.zoomTo = null;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.zoomFrom && Object.hasOwnProperty.call(a, "zoomFrom") && h.ZoomEvent.ZoomPoint.encode(a.zoomFrom, b.uint32(10).fork()).ldelim();
                    null != a.zoomTo && Object.hasOwnProperty.call(a, "zoomTo") && h.ZoomEvent.ZoomPoint.encode(a.zoomTo, b.uint32(18).fork()).ldelim();
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ZoomEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.zoomFrom = h.ZoomEvent.ZoomPoint.decode(a, a.uint32());
                            break;
                        case 2:
                            d.zoomTo = h.ZoomEvent.ZoomPoint.decode(a, a.uint32());
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                a.ZoomPoint = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                                null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.level = 0;
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.level && Object.hasOwnProperty.call(a, "level") && b.uint32(13)["float"](a.level);
                        null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(16).int32(a.x);
                        null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(24).int32(a.y);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ZoomEvent.ZoomPoint; a.pos < c; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                d.level = a["float"]();
                                break;
                            case 2:
                                d.x = a.int32();
                                break;
                            case 3:
                                d.y = a.int32();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return d
                    }
                    ;
                    return a
                }();
                return a
            }();
            h.ResizeEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.width = 0;
                a.prototype.height = 0;
                a.prototype.pageWidth = 0;
                a.prototype.pageHeight = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                    null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(16).int32(a.height);
                    null != a.pageWidth && Object.hasOwnProperty.call(a, "pageWidth") && b.uint32(24).int32(a.pageWidth);
                    null != a.pageHeight && Object.hasOwnProperty.call(a, "pageHeight") && b.uint32(32).int32(a.pageHeight);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ResizeEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.width = a.int32();
                            break;
                        case 2:
                            d.height = a.int32();
                            break;
                        case 3:
                            d.pageWidth = a.int32();
                            break;
                        case 4:
                            d.pageHeight = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.MethodEvent = function() {
                function a(a) {
                    this.args = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.method = "";
                a.prototype.args = k.emptyArray;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.method && Object.hasOwnProperty.call(a, "method") && b.uint32(10).string(a.method);
                    if (null != a.args && a.args.length)
                        for (var c = 0; c < a.args.length; ++c)
                            b.uint32(18).string(a.args[c]);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.MethodEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.method = a.string();
                            break;
                        case 2:
                            d.args && d.args.length || (d.args = []);
                            d.args.push(a.string());
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.PropertyEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.property = "";
                a.prototype.value = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.property && Object.hasOwnProperty.call(a, "property") && b.uint32(10).string(a.property);
                    null != a.value && Object.hasOwnProperty.call(a, "value") && b.uint32(18).string(a.value);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.PropertyEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.property = a.string();
                            break;
                        case 2:
                            d.value = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.KeystrokesEvent = function() {
                function a(a) {
                    this.keystrokes = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.keystrokes = k.emptyArray;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    if (null != a.keystrokes && a.keystrokes.length)
                        for (var c = 0; c < a.keystrokes.length; ++c)
                            h.KeystrokesEvent.KeystrokeEvent.encode(a.keystrokes[c], b.uint32(10).fork()).ldelim();
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.KeystrokesEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.keystrokes && d.keystrokes.length || (d.keystrokes = []);
                            d.keystrokes.push(h.KeystrokesEvent.KeystrokeEvent.decode(a, a.uint32()));
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                a.KeystrokeEvent = function() {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                                null != a[b[c]] && (this[b[c]] = a[b[c]])
                    }
                    a.prototype.id = 0;
                    a.prototype.key = "";
                    a.prototype.isMeta = !1;
                    a.prototype.modifier = "";
                    a.create = function(b) {
                        return new a(b)
                    }
                    ;
                    a.encode = function(a, b) {
                        b || (b = g.create());
                        null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).int32(a.id);
                        null != a.key && Object.hasOwnProperty.call(a, "key") && b.uint32(18).string(a.key);
                        null != a.isMeta && Object.hasOwnProperty.call(a, "isMeta") && b.uint32(24).bool(a.isMeta);
                        null != a.modifier && Object.hasOwnProperty.call(a, "modifier") && b.uint32(34).string(a.modifier);
                        return b
                    }
                    ;
                    a.decode = function(a, b) {
                        a instanceof e || (a = e.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.KeystrokesEvent.KeystrokeEvent; a.pos < c; ) {
                            var f = a.uint32();
                            switch (f >>> 3) {
                            case 1:
                                d.id = a.int32();
                                break;
                            case 2:
                                d.key = a.string();
                                break;
                            case 3:
                                d.isMeta = a.bool();
                                break;
                            case 4:
                                d.modifier = a.string();
                                break;
                            default:
                                a.skipType(7 & f)
                            }
                        }
                        return d
                    }
                    ;
                    return a
                }();
                return a
            }();
            h.DeviceRotationEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.width = 0;
                a.prototype.height = 0;
                a.prototype.orientation = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(8).int32(a.width);
                    null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(16).int32(a.height);
                    null != a.orientation && Object.hasOwnProperty.call(a, "orientation") && b.uint32(24).int32(a.orientation);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.DeviceRotationEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.width = a.int32();
                            break;
                        case 2:
                            d.height = a.int32();
                            break;
                        case 3:
                            d.orientation = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.FatalErrorEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.code = "";
                a.prototype.exception = "";
                a.prototype.stack = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.code && Object.hasOwnProperty.call(a, "code") && b.uint32(10).string(a.code);
                    null != a.exception && Object.hasOwnProperty.call(a, "exception") && b.uint32(18).string(a.exception);
                    null != a.stack && Object.hasOwnProperty.call(a, "stack") && b.uint32(26).string(a.stack);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.FatalErrorEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.code = a.string();
                            break;
                        case 2:
                            d.exception = a.string();
                            break;
                        case 3:
                            d.stack = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.HashchangeEvent = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.hash = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.hash && Object.hasOwnProperty.call(a, "hash") && b.uint32(10).string(a.hash);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.HashchangeEvent; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.hash = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.EventType = function() {
                var a = {}
                  , b = Object.create(a);
                b[a[0] = "mousemove"] = 0;
                b[a[1] = "mouseup"] = 1;
                b[a[2] = "mousedown"] = 2;
                b[a[3] = "click"] = 3;
                b[a[4] = "scroll"] = 4;
                b[a[5] = "windowblur"] = 5;
                b[a[6] = "windowfocus"] = 6;
                b[a[7] = "focus"] = 7;
                b[a[8] = "blur"] = 8;
                b[a[9] = "eof"] = 9;
                b[a[10] = "selection"] = 10;
                b[a[11] = "change"] = 11;
                b[a[12] = "input"] = 12;
                b[a[13] = "touchmove"] = 13;
                b[a[14] = "touchstart"] = 14;
                b[a[15] = "touchend"] = 15;
                b[a[16] = "touchcancel"] = 16;
                b[a[17] = "touchforcechange"] = 17;
                b[a[18] = "canvasMethod"] = 18;
                b[a[19] = "canvasProperty"] = 19;
                b[a[20] = "zoom"] = 20;
                b[a[21] = "resize"] = 21;
                b[a[22] = "mediaMethod"] = 22;
                b[a[23] = "mediaProperty"] = 23;
                b[a[24] = "keystroke"] = 24;
                b[a[25] = "deviceRotation"] = 25;
                b[a[26] = "fatalError"] = 26;
                b[a[27] = "hashchange"] = 27;
                return b
            }();
            h.PublishersHeader = function() {
                function a(a) {
                    this.articleMeta = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.articleMeta = k.emptyArray;
                a.prototype.involvedTime = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    if (null != a.articleMeta && a.articleMeta.length)
                        for (var c = 0; c < a.articleMeta.length; ++c)
                            h.ArticleMeta.encode(a.articleMeta[c], b.uint32(10).fork()).ldelim();
                    null != a.involvedTime && Object.hasOwnProperty.call(a, "involvedTime") && b.uint32(16).int32(a.involvedTime);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.PublishersHeader; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.articleMeta && d.articleMeta.length || (d.articleMeta = []);
                            d.articleMeta.push(h.ArticleMeta.decode(a, a.uint32()));
                            break;
                        case 2:
                            d.involvedTime = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.ArticleMeta = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.id = 0;
                a.prototype.x = 0;
                a.prototype.y = 0;
                a.prototype.width = 0;
                a.prototype.height = 0;
                a.prototype.involvedTime = 0;
                a.prototype.maxScrolled = 0;
                a.prototype.chars = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).uint32(a.id);
                    null != a.x && Object.hasOwnProperty.call(a, "x") && b.uint32(16).int32(a.x);
                    null != a.y && Object.hasOwnProperty.call(a, "y") && b.uint32(24).int32(a.y);
                    null != a.width && Object.hasOwnProperty.call(a, "width") && b.uint32(32).int32(a.width);
                    null != a.height && Object.hasOwnProperty.call(a, "height") && b.uint32(40).int32(a.height);
                    null != a.involvedTime && Object.hasOwnProperty.call(a, "involvedTime") && b.uint32(48).int32(a.involvedTime);
                    null != a.maxScrolled && Object.hasOwnProperty.call(a, "maxScrolled") && b.uint32(61)["float"](a.maxScrolled);
                    null != a.chars && Object.hasOwnProperty.call(a, "chars") && b.uint32(64).int32(a.chars);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleMeta; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.id = a.uint32();
                            break;
                        case 2:
                            d.x = a.int32();
                            break;
                        case 3:
                            d.y = a.int32();
                            break;
                        case 4:
                            d.width = a.int32();
                            break;
                        case 5:
                            d.height = a.int32();
                            break;
                        case 6:
                            d.involvedTime = a.int32();
                            break;
                        case 7:
                            d.maxScrolled = a["float"]();
                            break;
                        case 8:
                            d.chars = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.ArticleInfo = function() {
                function a(a) {
                    this.authors = [];
                    this.topics = [];
                    this.rubric = [];
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.id = 0;
                a.prototype.pageUrlCanonical = "";
                a.prototype.pageTitle = "";
                a.prototype.authors = k.emptyArray;
                a.prototype.topics = k.emptyArray;
                a.prototype.publicationDate = "";
                a.prototype.chars = 0;
                a.prototype.rubric = k.emptyArray;
                a.prototype.updateDate = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.id && Object.hasOwnProperty.call(a, "id") && b.uint32(8).uint32(a.id);
                    null != a.pageUrlCanonical && Object.hasOwnProperty.call(a, "pageUrlCanonical") && b.uint32(18).string(a.pageUrlCanonical);
                    null != a.pageTitle && Object.hasOwnProperty.call(a, "pageTitle") && b.uint32(26).string(a.pageTitle);
                    if (null != a.authors && a.authors.length)
                        for (var c = 0; c < a.authors.length; ++c)
                            h.ArticleAuthor.encode(a.authors[c], b.uint32(34).fork()).ldelim();
                    if (null != a.topics && a.topics.length)
                        for (c = 0; c < a.topics.length; ++c)
                            h.ArticleTopic.encode(a.topics[c], b.uint32(42).fork()).ldelim();
                    null != a.publicationDate && Object.hasOwnProperty.call(a, "publicationDate") && b.uint32(50).string(a.publicationDate);
                    null != a.chars && Object.hasOwnProperty.call(a, "chars") && b.uint32(56).int32(a.chars);
                    if (null != a.rubric && a.rubric.length)
                        for (c = 0; c < a.rubric.length; ++c)
                            h.ArticleRubric.encode(a.rubric[c], b.uint32(66).fork()).ldelim();
                    null != a.updateDate && Object.hasOwnProperty.call(a, "updateDate") && b.uint32(74).string(a.updateDate);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleInfo; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.id = a.uint32();
                            break;
                        case 2:
                            d.pageUrlCanonical = a.string();
                            break;
                        case 3:
                            d.pageTitle = a.string();
                            break;
                        case 4:
                            d.authors && d.authors.length || (d.authors = []);
                            d.authors.push(h.ArticleAuthor.decode(a, a.uint32()));
                            break;
                        case 5:
                            d.topics && d.topics.length || (d.topics = []);
                            d.topics.push(h.ArticleTopic.decode(a, a.uint32()));
                            break;
                        case 6:
                            d.publicationDate = a.string();
                            break;
                        case 7:
                            d.chars = a.int32();
                            break;
                        case 8:
                            d.rubric && d.rubric.length || (d.rubric = []);
                            d.rubric.push(h.ArticleRubric.decode(a, a.uint32()));
                            break;
                        case 9:
                            d.updateDate = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.ArticleAuthor = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.name = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleAuthor; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.name = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.ArticleTopic = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.name = "";
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleTopic; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.name = a.string();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            h.ArticleRubric = function() {
                function a(a) {
                    if (a)
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            null != a[b[c]] && (this[b[c]] = a[b[c]])
                }
                a.prototype.name = "";
                a.prototype.position = 0;
                a.create = function(b) {
                    return new a(b)
                }
                ;
                a.encode = function(a, b) {
                    b || (b = g.create());
                    null != a.name && Object.hasOwnProperty.call(a, "name") && b.uint32(10).string(a.name);
                    null != a.position && Object.hasOwnProperty.call(a, "position") && b.uint32(16).int32(a.position);
                    return b
                }
                ;
                a.decode = function(a, b) {
                    a instanceof e || (a = e.create(a));
                    for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleRubric; a.pos < c; ) {
                        var f = a.uint32();
                        switch (f >>> 3) {
                        case 1:
                            d.name = a.string();
                            break;
                        case 2:
                            d.position = a.int32();
                            break;
                        default:
                            a.skipType(7 & f)
                        }
                    }
                    return d
                }
                ;
                return a
            }();
            a.exports = h
        }
        ])
    } catch (a) {}
    var $a = {
        ScrollEvent: {
            type: E.ScrollEvent,
            events: ["scroll"]
        },
        SelectionEvent: {
            type: E.SelectionEvent,
            events: ["selection"]
        },
        ChangeEvent: {
            type: E.ChangeEvent,
            events: ["change", "input"]
        },
        MethodEvent: {
            type: E.MethodEvent,
            repeated: "args",
            events: ["canvasMethod", "mediaMethod"]
        },
        PropertyEvent: {
            type: E.PropertyEvent,
            events: ["canvasProperty", "mediaProperty"]
        },
        KeystrokesEvent: {
            type: E.KeystrokesEvent,
            repeated: "keystrokes",
            events: ["keystroke"]
        },
        ZoomEvent: {
            type: E.ZoomEvent,
            events: ["zoom"]
        },
        ResizeEvent: {
            type: E.ResizeEvent,
            events: ["resize"]
        },
        WindowEvent: {
            type: E.WindowEvent,
            events: ["windowfocus", "windowblur", "focus", "blur", "eof"]
        },
        MouseEvent: {
            type: E.MouseEvent,
            events: ["mousemove", "mouseup", "mousedown", "click"]
        },
        DeviceRotationEvent: {
            type: E.DeviceRotationEvent,
            events: ["deviceRotation"]
        },
        FatalErrorEvent: {
            type: E.FatalErrorEvent,
            events: ["fatalError"]
        },
        TouchEvent: {
            type: E.TouchEvent,
            repeated: "touches",
            events: ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"]
        }
    }
      , $b = k.reduce(function(a, b) {
        return a.concat(k.map(function(a) {
            return {
                eventName: a,
                type: $a[b].type,
                repeated: $a[b].repeated,
                typeStr: b
            }
        }, $a[b].events))
    }, [], k.keys($a))
      , zb = Ja.inherit({
        protocol: "",
        chunkSize: 0,
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7E5,
        serializer: {
            nullToStr: function(a) {
                var b = this;
                if (k.isArray(a))
                    return k.map(function(a) {
                        return b.nullToStr(a)
                    }, a);
                if (k.isObject(a))
                    k.forEachKey(a, function(c, e) {
                        a[c] = b.nullToStr(e);
                        return !0
                    });
                else if (null === a || a === z)
                    a = "";
                return a
            },
            uncapitalize: function(a, b) {
                var c = a.slice(1);
                return a.charAt(0).toLowerCase() + (b ? c.toLowerCase() : c)
            },
            capitalize: function(a, b) {
                var c = a.slice(1);
                return a.charAt(0).toUpperCase() + (b ? c.toLowerCase() : c)
            },
            notNaN: function(a) {
                return isNaN(a) && "number" == typeof a ? 0 : a
            },
            eventSerialize: function(a) {
                var b = k.filter(function(b) {
                    return b.eventName == a.type
                }, $b), c;
                for (c = 0; c < b.length; c++)
                    var e = b[c];
                if (e)
                    return e.repeated ? (c = new e.type,
                    c[e.repeated] = a.meta[e.repeated] || a.meta) : c = new e.type(this.nullToStr(a.meta)),
                    b = new E.Event({
                        type: E.EventType[e.eventName],
                        target: a.target,
                        frameId: a.frameId
                    }),
                    b[this.uncapitalize(e.typeStr)] = c,
                    b
            },
            pageSerialize: function(a) {
                return new E.Page(this.nullToStr(a))
            },
            articleInfoSerialize: function(a) {
                return new E.ArticleInfo(this.nullToStr(a))
            },
            publishersHeaderSerialize: function(a) {
                return new E.PublishersHeader(this.nullToStr(a))
            },
            mutationSerialize: function(a) {
                return new E.Mutation(this.nullToStr(a))
            },
            initBuffer: function() {
                return new E.BufferWrapper
            },
            appendBuffer: function(a, b) {
                a.buffer.push(b)
            },
            serializeChunk: function(a) {
                return this.serializeBuffer(null, a)
            },
            serializeBuffer: function(a, b, c) {
                var e = new E.Buffer(b);
                a = a || new E.Wrapper;
                b || (e.data = a);
                c !== z && (e.stamp = c);
                b && b.stamp === z && (e.stamp = w.getFormStart());
                return e
            },
            toTransport: function(a, b, c, e) {
                var g = b || "BufferWrapper"
                  , k = this;
                if (c)
                    mb.chain([function() {
                        return k.nullToStr(a)
                    }
                    , function(a) {
                        return E[g].encode(a)
                    }
                    , function(a) {
                        return a.finish()
                    }
                    , function(a) {
                        return c.call(e, a)
                    }
                    ], "", !1, "toTransportChain." + g);
                else
                    return E[g].encode(this.nullToStr(a)).finish()
            },
            fromTrasport: function(a, b) {
                if ("number" == typeof a[0])
                    return E[b || "BufferWrapper"].decode(a)
            },
            serialize: function(a, b, c) {
                var e = {}
                  , g = {}
                  , k = this[a + "Serialize"];
                if (k)
                    e[a] = k.call(this, b),
                    g = new E.Wrapper(e);
                else if (c && E.Wrapper.prototype[a] !== z)
                    g[a] = b;
                else
                    throw "Unrecoginze type of message";
                return c ? E.Wrapper.encode(g).finish() : g
            }
        },
        _dataSize: 0,
        flushTimeout: 2E3,
        storageKey: "visorbuff3",
        active: !1,
        wvType: 3,
        _v: "",
        _initComponent: function() {
            this._sender = new nb({
                version: this.wvType,
                protocol: this.protocol,
                browserInfoMix: this.browserInfoMix,
                globalConfig: this.globalConfig,
                counterId: this.counterId,
                counterType: this.counterType
            });
            this.maxChunkSize = .9 * this.maxBufferSize;
            Za.superclass._initComponent.apply(this, arguments)
        },
        activate: function() {
            this.active || (this.active = !0)
        },
        mergeData: function(a, b) {
            b.data && 0 === b.data.size || (this.serializer.appendBuffer(a, b),
            this._dataSize = 0)
        },
        _getSize: function(a) {
            return a.length
        },
        sendEncoded: function(a, b, c, e, g) {
            var k = this._getSize(a)
              , h = this.getFlushSize()
              , m = 0
              , f = 0
              , d = 1;
            c.size = k;
            h + k > this.maxBufferSize && h && this._flush(e);
            if (k > this.maxBufferSize)
                for (h = Math.ceil(k / this.maxChunkSize); f < k; ) {
                    b.page = d;
                    b.end = d === h;
                    b.chunk = a.slice(m, m += this.maxChunkSize);
                    if (0 == b.chunk.length)
                        break;
                    b.size = this._getSize(b.chunk);
                    f += b.size;
                    c = this.serializer.serializeChunk(b);
                    this.store.set(c, g);
                    this.append(c, e);
                    d++
                }
            else
                c = this.serializer.serializeBuffer(c, null, b.stamp),
                this.store.set(c, g),
                this.append(c, e)
        },
        addData: function(a, b, c, e, g) {
            var p = {
                type: a
            };
            this._v = c;
            this.wrappers.length && k.arrayEvery(this.wrappers, function(c) {
                c.trigger && c.trigger(a, b);
                return 1
            });
            if (g) {
                var h = this.serializer.serializeBuffer({
                    size: 0
                });
                this.append(h, e)
            } else
                this._data && 0 == this._data.buffer.length && (this.startBufferTime = w.getSeconds()),
                this.updateStamp(b, p),
                h = this.serializer.serialize(a, b),
                e ? (c = this.serializer.toTransport(h, "Wrapper"),
                this.sendEncoded(c, p, h, !0, {
                    id: a,
                    data: b
                })) : this.serializer.toTransport(h, "Wrapper", function(c) {
                    this.sendEncoded(c, p, h, !1, {
                        id: a,
                        data: b
                    })
                }, this)
        },
        dataFromStorage: function(a) {
            return this.serializer.fromTrasport(a)
        },
        dataToStorage: function(a) {
            return this.serializer.toTransport(a)
        },
        getFlushSize: function() {
            var a = this
              , b = k.reduce(function(a, b) {
                return a + (b.data ? b.data.size : b.size)
            }, 0, this._data.buffer);
            this.wrappers.length && (b += k.reduce(function(b, e) {
                var c = e.getBufferData();
                return b += a.serializer.serialize(c.type, c.data, !0).length
            }, b, this.wrappers));
            return b
        },
        onFlush: function(a, b, c, e) {
            var g = this;
            this._dataSize = 0;
            a && (this.wrappers.length && (k.arrayEvery(this.wrappers, function(b) {
                if (!b.onFlush)
                    return 1;
                k.arrayEvery(a.buffer, function(a) {
                    a = this.store.pop(a);
                    if (!a)
                        return 1;
                    b.onFlush(a.id, a.data);
                    return 1
                }, this)
            }, this),
            a = k.reduce(function(a, b) {
                var c = b.getBufferData()
                  , e = {
                    data: {}
                };
                e.data[c.type] = c.data;
                c = new g.serializer.serializeBuffer(null,e);
                g.mergeData(a, c);
                return a
            }, a, this.wrappers)),
            e ? this._sender.sendPacket(this.serializer.toTransport(a), b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime) : this.serializer.toTransport(a, "BufferWrapper", function(a) {
                this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp, this.startBufferTime)
            }, this))
        },
        clear: function() {
            this._data = this.serializer.initBuffer();
            this._dataSize = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        }
    })
      , R = {};
    R._cookie = new O({
        onlyCurrentDomain: !0
    });
    R._check = F(function() {
        return -1 < n.location.href.indexOf("_ym_debug\x3d1") || n._ym_debug || "1" === R._cookie.read("debug")
    });
    R.enabled = R._check();
    R.log = F(function() {
        (-1 < I.href.indexOf("_ym_debug\x3d1") || n._ym_debug) && this._cookie.create("debug", "1");
        n.console && console.log && this._check() && (R.enabled = !0,
        console.log.apply(console, arguments))
    }, "DebugConsole.log");
    var ac = G.inherit({
        eventMap: {
            mousemove: {
                val: 0,
                multiply: 1 / .68
            },
            click: {
                val: 0,
                multiply: 1 / .00975
            },
            input: {
                val: 0,
                multiply: 1 / .0116
            },
            scroll: {
                val: 0,
                multiply: 1 / .31
            },
            fatalError: {
                val: 0,
                multiply: 1
            }
        },
        getBufferData: function() {
            var a = this;
            return {
                type: "activity",
                data: k.reduce(function(b, c) {
                    var e = a.eventMap[c];
                    return Math.round(b + e.val * e.multiply)
                }, 0, k.keys(this.eventMap))
            }
        },
        onFlush: function(a, b) {
            var c;
            if (c = this.eventMap["event" !== a ? a : b.type])
                c.val += 1
        }
    });
    t.closest = function(a, b) {
        var c;
        if (!(n && n.Element && n.Element.prototype))
            return null;
        if (n.Element.prototype.closest && k.isNativeFunction(n.Element.prototype.closest, "closest"))
            return a.closest(b);
        if (n.Element.prototype.matches && k.isNativeFunction(n.Element.prototype.matches, "matches")) {
            do {
                if (a.matches(b))
                    return a;
                a = a.parentElement || a.parentNode
            } while (null !== a && 1 === a.nodeType)
        }
        if (n.document.querySelectorAll && k.isNativeFunction(n.Element.prototype.querySelectorAll, "querySelectorAll")) {
            var e = (n.document || n.ownerDocument).querySelectorAll(b);
            do
                for (c = e.length; 0 <= --c && e.item(c) !== a; )
                    a;
            while (0 > c && (a = a.parentElement));return a
        }
        return null
    }
    ;
    var C = {
        select: function(a, b) {
            return a ? a.querySelectorAll(b) : null
        },
        looksLikeFullUrl: function(a) {
            return "string" !== typeof a ? !1 : /^(https?:)\/\//.test(a)
        },
        selectOne: function(a, b) {
            var c = this.select(a, b);
            return c && c.length ? c[0] : null
        },
        closest: function(a, b) {
            return t.closest(a, b)
        },
        testAttr: function(a, b, c) {
            return c.test(a.getAttribute(b))
        },
        selectPropOne: function(a, b) {
            var c = this.selectProp(a, b);
            return c && c.length ? c[0] : null
        },
        selectProp: function(a, b) {
            var c = a.getAttribute("itemtype")
              , e = null
              , g = this.select(a, '[itemprop\x3d"' + b + '"]');
            c && (e = k.filter(function(b) {
                return b.parentNode && t.closest(b.parentNode, "[itemtype]") === a
            }, g));
            return e || g || []
        },
        getVal: function(a) {
            if (!a || 0 == a.length)
                return "";
            a.length === z && (a = [a]);
            return a[0].getAttribute("content") || a[0].innerText || ""
        },
        getDate: function(a) {
            return a ? a.attributes && a.attributes.datetime ? "" + a.attributes.datetime.value : this.getVal(a) : ""
        }
    }
      , ob = G.inherit({
        fields: {},
        schemaEntities: {
            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Question".split(" "),
            opengraph: ["article"]
        },
        _getContentNode: function(a) {
            return a.element
        },
        _getFieldData: function(a, b) {
            var c, e = this;
            F(function() {
                c = e.fields[b].call(e, a)
            }, "P.s." + b)();
            return c
        },
        _postprocessData: function(a, b) {
            var c = this._getContentNode(b);
            a.pageTitle || (a.pageTitle = this._getTitleFromContent(c));
            a.pageUrlCanonical || (a.pageUrlCanonical = C.looksLikeFullUrl(a.id) ? a.id : this.getPageUrlCanonical());
            a.id || (a.id = a.pageTitle || a.pageUrlCanonical);
            return a
        },
        _getContentData: function(a) {
            var b = {}
              , c = this;
            k.map(function(e) {
                b[e] = c._getFieldData(a, e)
            }, k.keys(this.fields));
            b.stamp = w.getFormStart();
            b = this._postprocessData(b, a);
            b.id = b.id ? k.fnv32a(b.id) : 1;
            b.update = k.bind(this._getFieldData, this, a);
            return b
        },
        _getTitleFromContent: function(a) {
            var b, c;
            for (b = 1; 5 >= b; b++)
                if (c = C.getVal(C.selectOne(a, "h" + b)))
                    return c;
            return null
        },
        getPageUrlCanonical: function() {
            var a = C.selectOne(this.root, '[rel\x3d"canonical"]');
            if (a)
                return a.href
        },
        findContent: function() {
            var a, b = [], c, e = this._findContentDescriptionNodes();
            for (a = 0; a < e.length; a++)
                if (c = this._getContentData({
                    element: e[a]
                }))
                    k.isArray(c) || (c = [c]),
                    k.map(function(a) {
                        a && (a = k.mixin({
                            sended: !1,
                            involvedTime: 0
                        }, a),
                        a.index = b.push(a))
                    }, c);
            return b
        }
    })
      , ab = ob.inherit({
        id: "s",
        fields: {
            node: function(a) {
                return this._getContentNode(a)
            },
            id: function(a) {
                a = a.element;
                var b = C.selectPropOne(a, "identifier");
                return b ? C.getVal(b) : (b = C.selectPropOne(a, "mainEntityOfPage")) && b.getAttribute("itemid") ? b.getAttribute("itemid") : null
            },
            chars: function(a) {
                var b = 0;
                a = a.element;
                var c, e, g = "articleBody reviewBody recipeInstructions acceptedAnswer description text".split(" ");
                for (c = 0; c < g.length; c++)
                    if (e = C.selectPropOne(a, g[c])) {
                        b = C.getVal(e).length;
                        break
                    }
                0 === b && a.innerText && (b += a.innerText.length);
                return b
            },
            topics: function(a) {
                var b = [];
                a = C.selectProp(a.element, "about");
                return b = k.map(function(a) {
                    var b = {
                        name: C.getVal(a)
                    };
                    if (a = C.selectPropOne(a, "name"))
                        b.name = C.getVal(a);
                    return b
                }, a)
            },
            rubric: function(a) {
                var b = [];
                (a = C.selectOne(a.element, '[itemtype$\x3d"schema.org/BreadcrumbList"]')) || (a = C.selectOne(this.root, '[itemtype$\x3d"schema.org/BreadcrumbList"]'));
                a && (a = C.selectProp(a, "itemListElement"),
                b = k.map(function(a) {
                    return {
                        name: C.getVal(C.selectPropOne(a, "name")),
                        position: C.getVal(C.selectPropOne(a, "position"))
                    }
                }, a));
                return b
            },
            updateDate: function(a) {
                return (a = C.selectPropOne(a.element, "dateModified")) ? C.getDate(a) : ""
            },
            publicationDate: function(a) {
                return (a = C.selectPropOne(a.element, "datePublished")) ? C.getDate(a) : ""
            },
            pageUrlCanonical: function(a) {
                a = C.selectProp(a.element, "url");
                return a.length ? a[0].href ? a[0].href : C.getVal(a) : null
            },
            pageTitle: function(a) {
                var b = "";
                a = a.element;
                var c = C.selectPropOne(a, "headline");
                c && (b += C.getVal(c));
                (c = C.selectPropOne(a, "alternativeHeadline")) && (b += " " + C.getVal(c));
                "" === b && ((c = C.selectPropOne(a, "name")) || (c = C.selectPropOne(a, "itemReviewed")),
                c && (b += C.getVal(c)));
                return b
            },
            authors: function(a) {
                a = C.selectProp(a.element, "author");
                var b = [];
                return b = k.map(function(a) {
                    var b = {}, c;
                    C.testAttr(a, "itemtype", /.+schema.org\/(Person|Organization)/) && (c = C.selectPropOne(a, "name")) && (b.name = C.getVal(c));
                    b.name || (b.name = a.getAttribute("content") || a.innerText || a.getAttribute("href"));
                    return b
                }, a)
            }
        },
        _getContentData: function(a) {
            return a.element && a.element.innerText && a.element.innerText.length ? ab.superclass._getContentData.call(this, a) : null
        },
        _postprocessData: function(a, b) {
            var c = "";
            c = b.element;
            if (!a.id) {
                if (c.getAttribute && (c = c.getAttribute("itemtype"),
                c.match(/Review|Question/))) {
                    var e = k.map(function(a) {
                        return a.name
                    }, a.authors).join(", ");
                    c && (a.pageTitle = e + ": " + a.pageTitle)
                }
                a.id = a.pageTitle
            }
            return ab.superclass._postprocessData.call(this, a, b)
        },
        _findContentDescriptionNodes: function() {
            var a = k.map(function(a) {
                return '[itemtype$\x3d"schema.org/' + a + '"]'
            }, this.schemaEntities["schema.org"]).join(",");
            return C.select(q, a)
        }
    })
      , ra = ob.inherit({
        id: "j",
        dataNodesSelector: 'script[type\x3d"application/ld+json"],script[type\x3d"application/json+ld"],script[type\x3d"ld+json"],script[type\x3d"json+ld"]',
        fields: {
            node: function(a) {
                return this._getContentNode(a)
            },
            id: function(a) {
                var b = a.data["@id"];
                a = a.data.mainEntity || a.data.mainEntityOfPage;
                !b && a && (b = a["@id"]);
                return b
            },
            chars: function(a) {
                return "string" === typeof a.data.text ? a.data.text.length : this._getContentNode(a).innerText.length
            },
            authors: function(a) {
                var b = [];
                b = b.concat(this._extractAuthors(a.data));
                b = b.concat(this._extractAuthors(a.data.mainEntity));
                return b.concat(this._extractAuthors(a.data.mainEntityOfPage))
            },
            pageTitle: function(a) {
                var b = a.data.headline || "";
                a.data.alternativeHeadline && (b += " " + a.data.alternativeHeadline);
                "" === b && (a.data.name ? b = a.data.name : a.data.itemReviewed && (b = a.data.itemReviewed));
                return b
            },
            updateDate: function(a) {
                return a.data.dateModified || ""
            },
            publicationDate: function(a) {
                return a.data.datePublished || ""
            },
            pageUrlCanonical: function(a) {
                return a.data.url
            },
            topics: function(a) {
                a = a.data.about ? a.data.about ? k.isArray(a.data.about) : [a.data.about] : [];
                return k.map(function(a) {
                    return {
                        name: a.name || a.alternateName
                    }
                }, a)
            },
            rubric: function(a) {
                a = this._getContentNode(a);
                a = k.map(function(a) {
                    return (a = aa.parse(a.innerText)) && "BreadcrumbList" === a["@type"] ? a : null
                }, C.select(a, this.dataNodesSelector) || []);
                a = k.filter(Boolean, a);
                return a.length && (a = a[0].itemListElement,
                k.isArray(a)) ? k.map(function(a) {
                    return {
                        name: a.item.name,
                        position: a.position
                    }
                }, a) : []
            }
        },
        _extractAuthors: function(a) {
            if (!a || !a.author)
                return [];
            a = k.isArray(a.author) ? a.author : [a.author];
            return k.map(function(a) {
                return {
                    name: a.name
                }
            }, a)
        },
        _getContentNode: function(a) {
            var b = a.element
              , c = a.data["@id"];
            a = a.data.url;
            var e, g = b.parentNode;
            a && "string" === typeof a && (e = this._extractElementByHashedUrl(a));
            !e && c && "string" === typeof c && (e = this._extractElementByHashedUrl(c));
            return e ? e : C.closest(b, "head") || 0 === g.innerText.length ? n.document.body : g
        },
        _extractElementByHashedUrl: function(a) {
            var b, c;
            try {
                if (b = k.parseUrl(a).hash)
                    if (c = C.selectOne(q.body, b))
                        return c
            } catch (e) {
                return null
            }
        },
        _getContentData: function(a) {
            var b = a.element
              , c = this
              , e = [];
            return a.data || (a.data = aa.parse(b.innerText),
            a.data && /schema\.org/.test(a.data["@context"])) ? k.isArray(a.data["@graph"]) ? k.map(function(a) {
                if (!k.inArray(c.schemaEntities["schema.org"], a["@type"]))
                    return null;
                a = {
                    element: b,
                    data: a
                };
                return ra.superclass._getContentData.call(c, a)
            }, a.data["@graph"]) : "QAPage" === a.data["@type"] ? (a = {
                element: b,
                data: a.data.mainEntity || a.data.mainEntityOfPage
            },
            e.push(ra.superclass._getContentData.call(c, a)),
            e) : k.inArray(this.schemaEntities["schema.org"], a.data["@type"]) ? e = ra.superclass._getContentData.call(this, a) : null : null
        },
        _postprocessData: function(a, b) {
            var c = "";
            if (!a.id) {
                c = b.data["@type"];
                if (c.match(/Review|Question|QAPage/)) {
                    var e = k.map(function(a) {
                        return a.name
                    }, a.authors).join(", ");
                    c && (a.pageTitle = e + ": " + a.pageTitle)
                }
                a.id = a.pageTitle
            }
            return ra.superclass._postprocessData.call(this, a, b)
        },
        _findContentDescriptionNodes: function() {
            return C.select(n.document, this.dataNodesSelector)
        }
    })
      , Ab = ob.inherit({
        id: "o",
        fields: {
            node: function(a) {
                return this._getContentNode(a.element)
            },
            chars: function(a) {
                a = this._getContentNode(a.element);
                return a.innerText ? a.innerText.length : 0
            },
            authors: function(a) {
                return this._getArrayValue(a.data.author)
            },
            pageTitle: function(a) {
                return this._getSimpleValue(a.data.title) || ""
            },
            updateDate: function(a) {
                return this._getSimpleValue(a.data.modified_time)
            },
            publicationDate: function(a) {
                return this._getSimpleValue(a.data.published_time)
            },
            pageUrlCanonical: function(a) {
                return this._getSimpleValue(a.data.url)
            },
            topics: function(a) {
                return this._getArrayValue(a.data.tag)
            },
            rubric: function(a) {
                return this._getArrayValue(a.data.section)
            }
        },
        _getArrayValue: function(a) {
            return a ? k.isArray(a) ? k.map(function(a) {
                return {
                    name: a
                }
            }, a) : [{
                name: a
            }] : []
        },
        _getSimpleValue: function(a) {
            return k.isArray(a) ? a.length ? a[0] : null : a
        },
        _findContentDescriptionNodes: function() {
            var a = [q.head]
              , b = C.select(q.body, 'meta[property\x3d"og:type"]');
            b && (a = a.concat([].map.call(b, function(a) {
                return a
            })));
            return a
        },
        _getEntityData: function(a) {
            var b, c, e = {}, g = this._getContentNode(a);
            if ((g = C.select(a === q.head ? a : g, 'meta[property^\x3d"og:"]')) && g.length)
                k.map(function(a) {
                    try {
                        b = a.getAttribute("property").replace("og:", ""),
                        c = C.getVal(a),
                        e[b] ? k.isArray(e[b]) ? e[b].push(c) : e[b] = [e[b], c] : e[b] = c
                    } catch (h) {}
                }, g);
            else
                return null;
            return k.inArray(this.schemaEntities.opengraph, e.type) ? {
                data: e,
                element: a
            } : null
        },
        _getContentNode: function(a) {
            return a === q.head ? q.body : a.parentNode
        },
        _getContentData: function(a) {
            return (a = this._getEntityData(a.element)) ? Ab.superclass._getContentData.call(this, a) : null
        }
    })
      , bc = G.inherit({
        buffer: null,
        meta: !1,
        activeEvents: "page resize scroll mousemove mousedown click windowfocus keystroke deviceRotation input touchmove touchstart".split(" "),
        isStopped: !1,
        schemas: {
            json_ld: ra,
            schema: ab,
            microdata: ab,
            opengraph: Ab
        },
        checkSize: function() {
            var a = this
              , b = "pai" + this._schema.id
              , c = this.globalConfig.get(b, []);
            c.push(function(b) {
                !a.isStopped && b.length && (a.findContent(b),
                a.meta = a.getMeta(),
                a.send())
            });
            this.globalConfig.setSafe(b, c);
            if (1 == c.length) {
                var e = function(c) {
                    var g = a.globalConfig.get(b)
                      , h = a._schema.findContent();
                    a.findContent(h);
                    a.meta = a.getMeta();
                    var m = k.toJSON(a.meta);
                    if (!a.isStopped) {
                        if (c !== m)
                            for (c = 0; c < g.length; c++) {
                                var f = k.map(function(a) {
                                    return k.mixin({}, a)
                                }, h);
                                g[c](f)
                            }
                        a.timeout = k.setTimeout(function() {
                            e(m)
                        }, 1E3)
                    }
                };
                e()
            }
        },
        stop: function() {
            this.isStopped = !0
        },
        getBufferData: function() {
            return {
                type: "publishersHeader",
                data: {
                    articleMeta: this.meta || {},
                    involvedTime: this.involvedTime || 0
                }
            }
        },
        findContent: function(a) {
            var b = k.map(function(a) {
                return a.id
            }, this.articles);
            this.articles = this.articles.concat(k.filter(function(a) {
                return !k.inArray(b, a.id)
            }, a))
        },
        getScroll: function() {
            this.scroll = {
                x: n.pageXOffset || this.root.scrollLeft,
                y: n.pageYOffset || this.root.scrollTop
            }
        },
        _initComponent: function() {
            var a = t.getViewportSize();
            this.handlers = [];
            this.events = [];
            this.articles = [];
            this.root = t.getRootElement();
            this.getScroll();
            this.viewbox = {
                width: a[0],
                height: a[1]
            }
        },
        getMeta: function() {
            var a = this;
            this.getScroll();
            return k.map(function(b) {
                var c = {
                    id: b.id,
                    involvedTime: b.involvedTime || 0,
                    maxScrolled: b.maxScrolled || 0,
                    chars: b.update ? b.update("chars") : 0
                };
                b.node && k.isFunction(b.node.getBoundingClientRect) && (b = b.node.getBoundingClientRect(),
                c.x = Math.round(b.left) + a.scroll.x,
                c.y = Math.round(b.top) + a.scroll.y,
                c.width = Math.round(b.width),
                c.height = Math.round(b.height));
                return c
            }, this.articles)
        },
        getArticalsToSend: function() {
            var a = [], b;
            for (b = 0; b < this.articles.length; b++)
                if (!this.articles[b].sended) {
                    var c = k.mixin({}, this.articles[b]);
                    delete c.node;
                    delete c.sended;
                    delete c.index;
                    delete c.involvedTime;
                    delete c.visibility;
                    delete c.maxScrolled;
                    delete c.update;
                    a.push(c)
                }
            return a
        },
        send: function() {
            var a = this.getArticalsToSend();
            a.length && (this.push({
                articleInfo: a
            }),
            R.log("Publisher content info found:", a),
            k.arrayEvery(this.articles, function(a) {
                a.sended = !0;
                return 1
            }))
        },
        start: function(a) {
            var b = this
              , c = this.globalConfig.get("counters", {})[this.counterId + ":0"];
            a && a.schema && c && c.tp && (a.schema = "microdata");
            a && a.schema && this.schemas[a.schema] && n.document && k.isNativeFunction(n.document.querySelectorAll, "querySelectorAll") ? (this.globalConfig.setSafe("pai", function() {
                return k.reduce(function(a, b) {
                    (a.visibility || 0) <= b.visibility && (a = b);
                    return a
                }, {}, b.articles).id
            }),
            this._schema = new this.schemas[a.schema],
            this._schema.root = this.root,
            R.log('Publishers analytics schema "' + a.schema + '"'),
            this.checkSize()) : this.stop()
        },
        push: function(a) {
            k.arrayEvery(this.handlers, function(b) {
                b(a);
                return 1
            });
            this.events.push(a)
        },
        middleware: function(a) {
            this.handlers.push(a);
            k.arrayEvery(this.events, function(b) {
                a(b)
            })
        },
        lastStamp: 0,
        involvedTime: 0,
        MAX_INACTIVE: 5E3,
        trigger: function(a, b) {
            var c = "event" !== a ? a : b.type;
            if (k.inArray(this.activeEvents, c)) {
                "scroll" == c && b.meta && b.meta.page && (this.scroll = b.meta);
                "resize" == c && 0 == b.target && (this.viewbox = b.meta);
                var e = w.getMs() - this.lastStamp;
                e = Math.min(e, this.MAX_INACTIVE);
                this.involvedTime += Math.round(e);
                this.lastStamp = w.getMs();
                this.meta && this.scroll && this.viewbox && k.arrayEvery(this.articles, function(a, b) {
                    var c = this.meta[b]
                      , g = Math.max((Math.min(this.scroll.y + this.viewbox.height, c.y + c.height) - Math.max(this.scroll.y, c.y)) / this.viewbox.height, 0)
                      , f = Math.max((this.scroll.y + this.viewbox.height - c.y) / c.height, 0);
                    a.involvedTime += Math.round(g * e);
                    a.maxScrolled = Math.round(1E4 * f) / 1E4;
                    a.visibility = g;
                    c.involvedTime = a.involvedTime;
                    return 1
                }, this)
            }
        }
    })
      , Bb = G.inherit({
        hid: 0,
        tz: 0,
        ts: 0,
        counterId: 0,
        counterType: 0,
        url: "",
        protocol: "",
        executor: mb,
        enabled: !1,
        _map: {
            page: {
                iterate: !1,
                name: "page"
            },
            events: {
                iterate: !0,
                name: "event"
            },
            mutations: {
                iterate: !0,
                name: "mutation"
            },
            articleInfo: {
                iterate: !0,
                name: "articleInfo"
            }
        },
        _getBufferType: function() {
            var a = Za
              , b = !1;
            if (!R.enabled) {
                try {
                    b = (b = 2 === (new Blob(["\u00e4"])).size) && 2 === (new Blob([new n.Uint8Array([1, 2])])).size
                } catch (c) {}
                b && n.Uint8Array && n.Uint8Array.prototype.slice && (a = zb)
            }
            return a
        },
        _initComponent: F(function() {
            var a = this._getBufferType();
            this._localStorage = new na({
                counterId: this.counterId
            });
            var b = this._localStorage.get("pai");
            var c = this._getStorage();
            var e = c.read("visorc");
            "b" !== e && "w" !== e && (e = "");
            if (!c.isEnabled() || hb("opera mini"))
                e = "b";
            this._publisher = new bc({
                counterId: this.counterId,
                globalConfig: this.globalConfig
            });
            this._vc = e;
            c = {
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType,
                globalConfig: this.globalConfig,
                meta: {
                    url: this.url,
                    hitId: this.hid,
                    timezone: this.tz,
                    timestamp: this.ts
                }
            };
            this._recorder = new Sb({
                counterId: this.counterId,
                trustedDomains: this.trustedDomains,
                childIframe: this.childIframe
            });
            this._buffer = new a(k.mixin({}, c, {
                browserInfoMix: {
                    bt: 1
                }
            }));
            this._eventsBuffer = new a(k.mixin(c, b && {
                browserInfoMix: {
                    pai: b
                }
            }));
            this._localStorage.remove("pai");
            this._buffer.activate();
            this._eventsBuffer.activate();
            "b" !== e && (this._formRecorder = new Lb(this.protocol,this.counterId,this.counterType,this.hid,this.globalConfig),
            this._recorder.on("error", function(a) {
                cb(a.error, a.namespace)
            }),
            this._activity = new ac);
            Bb.superclass._initComponent.apply(this, arguments)
        }, "wv2.init"),
        start: F(function(a, b) {
            var c = this
              , e = this._vc;
            if (this._recorder) {
                a = a || {};
                var g = +a.recp;
                if (!isFinite(g) || 0 > g || 1 < g)
                    e = "w";
                e || (e = this.hid % 1E4 / 1E4 < g ? "w" : "b");
                this._getStorage().create("visorc", e, 30);
                this._publisher.start(b);
                "w" === e && this.isEnabled() && this.globalConfig.setSafe("wv2Counter", this.counterId);
                "w" === e && this.isEnabled() && this._isCorrectCounter() ? (this._recorder.middleware(function(a) {
                    c.send(a.data)
                }),
                this._recorder.init(),
                this._eventsBuffer.wrappers.push(this._activity),
                this._recorder.start(a),
                this._formRecorder.start(),
                this.globalConfig.get("stopRecoder", function() {})(),
                this.globalConfig.set("stopRecoder", function() {
                    c.stop()
                })) : this._publisher && !this._publisher.isStopped ? (this._recorder.middleware(function(a) {
                    c.send(a.data, !0)
                }),
                this._recorder.init({
                    disableIndex: !0,
                    disableMutations: !0
                }),
                this._recorder.start(a)) : this.stop();
                this._publisher && !this._publisher.isStopped && (this._eventsBuffer.wrappers.push(this._publisher),
                this._eventsBuffer.setWVType(this._buffer instanceof zb ? 5 : 4),
                this._publisher.middleware(function(a) {
                    c.send(a)
                }))
            }
        }, "wv2.start"),
        stop: function() {
            this._publisher && this._publisher.stop();
            this._recorder && (this._recorder.stop(),
            this._formRecorder && this._formRecorder.stop())
        },
        isEnabled: function() {
            var a = !this.globalConfig.get("oo");
            return this.enabled && n.MutationObserver && a
        },
        send: function(a, b) {
            var c = a._v;
            k.forEachKey(a, function(a, g) {
                var e = this._map[a]
                  , h = this._buffer;
                if (e) {
                    var m = e.name;
                    k.inArray(["event", "articleInfo"], m) && (h = this._eventsBuffer);
                    e.iterate ? k.forEachKey(g, function(a, d) {
                        var e = "eof" === d.type && !d.frameId, f = [h], g;
                        e && (f = [this._eventsBuffer, this._buffer]);
                        for (g = 0; g < f.length; g++)
                            this.executor.addAsyncItem(f[g].addData, f[g], e, [m, d, c, e, b], "send." + (d ? d.type || d.group || "" : "empty"))
                    }, this) : h.addData(m, g, c)
                }
            }, this)
        },
        getVc: function() {
            return this._vc
        },
        _getStorage: function() {
            this._storage || (this._storage = new O({
                counterId: this.counterId
            }));
            return this._storage
        },
        _isCorrectCounter: function() {
            return this.counterId === this.globalConfig.get("wv2Counter")
        }
    })
      , Cb = {
        FN: "ym",
        STACK: "a",
        counters: [],
        waitPool: {},
        handle: function(a) {
            if (2 > a.length)
                return 1;
            var b = "" + a[0];
            k.inArray(b, ":") || (b += ":0");
            var c = b.split(":")[0];
            var e = a[1];
            var g = this.globalConfig.get("counters", {})[b];
            "init" == e ? (e = "yaCounter" + c,
            n[e] || (a = k.mixin(a[2] || {}, {
                id: +c
            }),
            n[e] = new n.Ya[this.constructorName](a))) : k.inArray(this.counters, b) && g && g[e] ? (a = [].slice.call(a, 2),
            g[e].apply(g, a)) : k.inArray(this.counters, b) || (this.waitPool[b] || (this.waitPool[b] = []),
            this.waitPool[b].push(a));
            return 1
        },
        subscribe: function(a) {
            a && (this.counters.push(a),
            this.waitPool[a] && (k.arrayEvery(this.waitPool[a], this.handle, this),
            delete this.waitPool[a]))
        },
        init: function(a, b) {
            var c = this
              , e = n[this.FN];
            if (e) {
                var g = e[this.STACK];
                this.constructorName = a;
                this.globalConfig = b;
                g || (e[this.STACK] = g = []);
                var p = g.push;
                g.push = function() {
                    var a = p.apply(g, arguments);
                    k.arrayEvery(arguments, c.handle, c);
                    return a
                }
                ;
                e && k.isArray(g) && k.arrayEvery(g, this.handle, this)
            }
        }
    };
    t.loadScript = function(a, b) {
        b = b || n;
        var c = k.mixin({
            type: "text/javascript",
            charset: "utf-8",
            async: !0
        }, a)
          , e = b.document
          , g = k.getNativeFunction("createElement", e)
          , p = g("script");
        if (p) {
            p.type = c.type;
            p.charset = c.charset;
            p.src = c.src;
            c.async && (p.async = !0);
            try {
                var h = e.getElementsByTagName("head")[0];
                if (!h) {
                    var m = e.getElementsByTagName("html")[0];
                    h = g("head");
                    m && m.appendChild(h)
                }
                h.insertBefore(p, h.firstChild);
                return p
            } catch (f) {}
        }
    }
    ;
    var cc = va.inherit({
        id: "script",
        index: 6,
        request: function(a, b, c, e) {
            var g = !1
              , p = k.getNativeFunction("createElement", q)("script");
            this.timeout && k.setTimeout(function() {
                g || (g = !0,
                t.removeNode(p),
                c.call(e, !1))
            }, this.timeout, "ts.request");
            if (!p)
                return g = !0,
                c.call(e, !1),
                !1;
            var h = "_ymjsp" + k.random();
            n[h] = F(function() {
                if (!g) {
                    try {
                        delete n[h]
                    } catch (f) {
                        n[h] = z
                    }
                    c.apply(e, k.mergeArrays([!0], arguments));
                    g = !0;
                    t.removeNode(p)
                }
            }, "transport.script");
            p.type = "text/javascript";
            p.src = this._buildUrl(a, k.mixin({
                wmode: 5,
                callback: h
            }, b));
            p.async = "async";
            var m = q.getElementsByTagName("head")[0];
            m || (m = q.createElement("head"),
            q.documentElement.appendChild(m));
            k.async(function() {
                m.insertBefore(p, m.firstChild)
            });
            p.onerror = function() {
                g = !0;
                c.call(e, !1);
                n[h] = z
            }
            ;
            return !0
        }
    })
      , Db = Va.inherit({
        id: "XHRhit",
        index: 10,
        _buildUrl: function(a, b) {
            b.wmode = 7;
            return Db.superclass._buildUrl.apply(this, [a, b])
        },
        _parseResp: function(a) {
            var b = aa.parse(a);
            if (!b)
                throw "";
            return k.map(function(a) {
                return b[a]
            }, k.keys(b))
        }
    })
      , pb = Ra.inherit({
        transports: [Db, cc],
        trimParams: !0,
        _initComponent: function() {
            pb.superclass._initComponent.apply(this, arguments);
            this._ilStorage = new na({
                counterId: this.counterId
            })
        },
        postParams: [],
        checkYandexHost: function(a) {
            if (a) {
                a: {
                    if (a = k.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
                        if (a = a[0].split("yandex").reverse()[0].substring(1),
                        -1 != k.arrayIndexOf(wb, a))
                            break a;
                    a = !1
                }
                a && (this.host = "mc.yandex." + a)
            }
        },
        sendHit: function(a) {
            var b = {}
              , c = this._ilStorage.get("il");
            a.visitColor && (b.vc = a.visitColor);
            c && (this._ilStorage.remove("il"),
            b.ilt = oa.encode(jb.encode(k.trim(c, Eb))));
            this.checkYandexHost(a.referrer);
            this._hitExt({
                url: a.url,
                forceNoRedirect: a.forceNoRedirect,
                nohit: a.nohit,
                hasPrerender: a.hasPrerender,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                userParams: a.userParams,
                experiments: a.experiments,
                modes: a.modes,
                browserInfo: b,
                ts: a.ts,
                tz: a.tz,
                callback: a.callback,
                ctx: a.ctx
            }, "hit")
        }
    })
      , Fb = G.inherit({
        cid: 3,
        cnt: 0,
        KEY_NAME: "wasSynced",
        _initComponent: function() {
            this._storage = new na;
            this._cookie = new O
        },
        hit: function(a, b) {
            var c = this
              , e = b === z ? !0 : !1
              , g = e ? this._storage.get(this.KEY_NAME) : !1
              , p = []
              , h = this.globalConfig.get("fakeHit");
            if (h)
                return h(function(b) {
                    a(b)
                });
            !g && e && (g = this._cookie.read(this.KEY_NAME)) && (g = aa.parse(g));
            g && g.params && g.time + 864E5 > w.getMs() ? (c.globalConfig.set("isEU", g.params.eu),
            a(g)) : (this.globalConfig.set("fakeHit", function(a) {
                p.push(a)
            }),
            this._getSender().sendHit({
                forceNoRedirect: this.forceNoRedirect,
                callback: function(b, e) {
                    var d = b || {};
                    g = {
                        time: w.getMs(),
                        params: d,
                        bkParams: e
                    };
                    c.globalConfig.set("isEU", d.eu);
                    c._storage.set(c.KEY_NAME, g);
                    c._cookie.create(c.KEY_NAME, aa.stringify(g), 1728);
                    a(g);
                    c.globalConfig.set("fakeHit", function(a) {
                        a(g)
                    });
                    k.arrayEvery(p, function(a) {
                        a(g);
                        return 1
                    })
                }
            }))
        },
        _getSender: function() {
            this._sender || (this._sender = new pb({
                protocol: "https:",
                counterType: this.cnt,
                counterId: this.cid,
                sendTitle: !1,
                globalConfig: this.globalConfig,
                fake: !0
            }));
            return this._sender
        }
    })
      , Gb = G.inherit({
        baseUrl: "mc.yandex.",
        globalConfig: A,
        baseTld: "ru",
        partners: {
            "mc.yandexsport.ru": {
                regex: /^([^/]+\.)?yandexsport\.ru$/,
                tld: "ru"
            },
            "mc.beru.ru": {
                regex: /^([^/]+\.)?beru\.ru$/,
                tld: "ru"
            },
            "mc.kinopoisk.ru": {
                regex: /^([^/]+\.)?kinopoisk\.ru$/,
                tld: "ru"
            }
        },
        _initComponent: function() {
            var a = this;
            Gb.superclass._initComponent.apply(this, arguments);
            this.syncTlds = k.reduce(function(a, c) {
                return c(a)
            }, wb, [k.bind(k.filter, null, function(b) {
                return b !== a.baseTld
            }), k.bind(k.reduce, null, function(a, c) {
                a[c] = [c];
                return a
            }, {})]);
            k.forEachKey(this.partners, function(a, c) {
                c.regex.test(n.location.hostname) && (this.syncTlds[c.tld] || (this.syncTlds[c.tld] = []),
                this.syncTlds[c.tld].push(a),
                this._replaceBase[a] = !0)
            }, this)
        },
        _replaceBase: {},
        langToDomain: {
            ka: "ge",
            ro: "md",
            tg: "tj",
            tk: "tm",
            et: "ee",
            hy: "com.am",
            he: "co.li",
            ky: "kg",
            uk: "ua",
            be: "by",
            tr: "com.tr",
            kk: "kz"
        },
        sync: function(a) {
            var b = this
              , c = this._need()
              , e = -1 != L().hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/);
            this._is() ? a() : (e && b._syncAdmetrica(),
            c ? (this._setStatus(!0),
            e ? this._getCn().hit(function() {
                b._sync(c, a)
            }) : a()) : a());
            e && this._addMda()
        },
        _addMda: function() {
            var a = new O({
                skipPrefix: !0
            })
              , b = new O
              , c = a.read("mda");
            "0" !== c && "1" !== c && a.create("mda", "0", 1036800);
            b.read("mda") && b.erase("mda")
        },
        _is: function() {
            try {
                return !!this.globalConfig.get("startSync")
            } catch (a) {
                return !1
            }
        },
        _setStatus: function(a) {
            try {
                this.globalConfig.set("startSync", a)
            } catch (b) {}
        },
        _need: function() {
            var a = this._getDomainByLang(), b = this._getTld(), c = [], e;
            (e = this.syncTlds[b]) && c.push.apply(c, e);
            e = this.syncTlds[a];
            a !== b && e && c.push.apply(c, e);
            var g = this._getLs().get("synced") || {};
            c = k.arrayFilter(c, function(a) {
                return (g[a] || 1) + 1440 < w.getMinutes()
            });
            return c.length && c || !1
        },
        _syncAdmetrica: function() {
            var a = new wa({})
              , b = this._getLs();
            ((b.get("synced") || {}).SYNCED_ADM || 1) + 1440 < w.getMinutes() && a.request("https://mc.admetrica.ru/sync_cookie_image_check", {}, function(a) {
                b.get("synced");
                var c = w.getMinutes();
                a || (c -= 1435);
                a = b.get("synced") || {};
                a.SYNCED_ADM = c;
                b.set("synced", a)
            })
        },
        _sync: function(a, b) {
            var c, e = 0, g = a.length, k = this;
            if (0 < g) {
                b = b || function() {}
                ;
                var h = function() {
                    e++;
                    g === e && b()
                };
                var m = k._getLs();
                var f = new wa({});
                for (c = 0; c < g; c++)
                    (function(a) {
                        f.request("https://" + (k._replaceBase[a] ? a : k.baseUrl + a) + "/sync_cookie_image_check", {}, function(b) {
                            h();
                            var c = w.getMinutes();
                            b || (c -= 1435);
                            b = m.get("synced") || {};
                            b[a] = c;
                            m.set("synced", b)
                        })
                    }
                    )(a[c])
            } else
                b()
        },
        _getCn: function() {
            this._cn || (this._cn = new Fb({
                fake: !0,
                globalConfig: this.globalConfig
            }));
            return this._cn
        },
        _getLs: function() {
            this._ls || (this._ls = new na);
            return this._ls
        },
        _getTld: function() {
            var a = k.getTld();
            return {
                am: "com.am",
                tr: "com.tr",
                ge: "com.ge",
                il: "co.il",
                "\u0440\u0444": "ru",
                "xn--p1ai": "ru",
                "\u0443\u043a\u0440": "ua",
                "xn--j1amh": "ua",
                "\u0431\u0435\u043b": "by",
                "xn--90ais": "by"
            }[a] || a
        },
        _getDomainByLang: function() {
            if (!n.navigator)
                return "ru";
            try {
                var a = navigator.languages ? navigator.languages[0] : v.getLanguage()
            } catch (b) {}
            a && a.toLowerCase && (a = a.toLowerCase().split("-")[0]);
            return this.langToDomain[a] || "ru"
        }
    })
      , dc = Va.inherit({
        id: "RawBodyXHR",
        index: 9,
        postParams: ["body"],
        _setHeaders: function() {},
        _preparePostParams: function(a) {
            return a.post.body || ""
        }
    });
    v.isAndroid = F(function() {
        var a = navigator.userAgent.toLowerCase()
          , b = v.getPlatform() || "";
        return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && b.match(/^android|linux armv/i)
    }, "", !0);
    var Sa = {
        _url: "https://mc.yandex.ru/user_storage_set?",
        _params: {},
        init: function(a) {
            this._params = a || {}
        },
        save: function(a, b) {
            this._getReq().request(this._url + Da.stringify({
                key: a,
                value: k.toJSON(b)
            }));
            this._getLs().set(a, b)
        },
        get: function(a) {
            return {
                remote: this._params[a],
                local: this._getLs().get(a)
            }
        },
        getNum: function(a) {
            a = this.get(a);
            return Math.max(+a.remote || 0, +a.local || 0)
        },
        _getLs: function() {
            this._ls || (this._ls = new na);
            return this._ls
        },
        _getReq: function() {
            this._req || (this._req = new wa);
            return this._req
        }
    }
      , ec = {
        sync: F(function(a, b, c, e) {
            var g = {
                t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
            };
            this.globalConfig = e || A;
            if (this._enabled(a, b, c)) {
                this._setStatus(!0);
                var k = new dc({
                    method: "GET",
                    withCredentials: !1
                });
                var h = this._getHosts();
                var m = h.length;
                (function l(a) {
                    var b = h[a];
                    a < m ? k.request(b[0] + ":" + b[1] + "/p", g, function(c, d) {
                        c ? this._save(c, d, b[1]) : l.call(this, a + 1)
                    }, this) : this._save(!1)
                }
                ).call(this, 0)
            }
        }, "ds"),
        _getHosts: function() {
            var a = []
              , b = I.protocol
              , c = v.isIOS();
            (v.isAndroid() || c && "http:" === b) && a.push(["http://127.0.0.1", "30102"], ["http://127.0.0.1", "29009"]);
            c && "https:" === b && a.push(["https://yandexmetrica.com", "30103"], ["https://yandexmetrica.com", "29010"]);
            return a
        },
        _save: function(a, b, c) {
            var e = w.getMinutes();
            a ? (new Ra({
                protocol: "https:",
                counterType: 0,
                counterId: 42822899,
                sendTitle: !1,
                fake: !0
            })).sendDevice({
                data: k.trim(b),
                port: c
            }) : e -= 45;
            Sa.save("ds", e)
        },
        _is: function() {
            try {
                return !!this.globalConfig.get("dSync")
            } catch (a) {
                return !1
            }
        },
        _enabled: function(a, b, c) {
            if (!(60 < w.getMinutes() - Sa.getNum("ds")) || this._is() || k.isDev(this.globalConfig))
                return !1;
            a = 0 === b && 0 <= k.arrayIndexOf([39370095, 1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 5564395, 2580487], a);
            a = ua() || !c && .1 >= Math.random() && a;
            c = v.isIOS() && a;
            return v.isAndroid() && a || c
        },
        _setStatus: function(a) {
            try {
                this.globalConfig.set("dSync", a)
            } catch (b) {}
        }
    }
      , W = {
        getPos: function(a) {
            var b = t.getRootElement()
              , c = t.getDocumentScroll();
            return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
        },
        getTarget: function(a) {
            var b = null;
            try {
                if (b = a.target || a.srcElement)
                    !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== q && (b = null)
            } catch (c) {}
            return b
        },
        getMouseButton: function(a) {
            return a.which || a.button == z ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
        },
        prevent: function(a) {
            a = a || n.event;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
    };
    W.dispatchCustomEvent = F(function(a, b) {
        var c;
        b = b || q;
        if (c = k.getNativeFunction("createEvent", q)("Event"))
            c.initEvent(a, !1, !1),
            k.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    var Xa = {
        lastReferrer: null
    }
      , La = G.inherit({
        counter: null,
        prefsEcommerce: null,
        status: {
            NEW: z,
            PENDING: 1,
            OK: 2,
            FAIL: 3
        },
        dataLayerName: "dataLayer",
        _initComponent: function() {
            La.superclass._initComponent.apply(this, arguments);
            this.frameConnector && this.frameConnector.addHandler("params", function(a, b) {
                if (this.counter && this.counter.params)
                    this.onCookies(function(a) {
                        this.counter.params(a.data)
                    }, this, b)
            }, this);
            this._overridePush(this.globalConfig.get("dataLayer"))
        },
        waitPool: [],
        onCookies: function(a, b) {
            this.waitPool.push({
                fn: a,
                ctx: b,
                args: [].slice.call(arguments, 2)
            })
        },
        initUserLayer: function() {
            var a = "customArr";
            k.arrayEvery(this.waitPool, function(a) {
                a.fn.apply(a.ctx, a.args);
                return 1
            });
            this.onCookies = function(a, c) {
                a.apply(c, [].slice.call(arguments, 2))
            }
            ;
            if (this.prefsEcommerce || this.prefsUseDataLayer)
                this._overridePush(this.prefsEcommerce) || (k.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce),
                a = this.dataLayerName,
                this._tryTimeout = k.bind(this._tryTimeout, this),
                this._tryTimeout()),
                this.counter._ecommerce = a
        },
        _overridePush: function(a) {
            if (a && "function" == typeof a.push) {
                var b = this;
                b._send(a);
                var c = a.push;
                a.push = function() {
                    var a = c.apply(this, arguments);
                    b._send([].slice.call(arguments, 0));
                    return a
                }
                ;
                return !0
            }
            return !1
        },
        _tryTimeout: function() {
            this._overridePush(n[this.dataLayerName]) || k.setTimeout(this._tryTimeout, 1E3, "dlObserver")
        },
        _callHandlers: function(a) {
            k.arrayEvery(La.handlers, function(b) {
                b && b.type && k.arrayEvery(b.type.split(","), function(c) {
                    c.replace(" ", "") === a.type && b.callback && b.callback(a);
                    return 1
                });
                return 1
            })
        },
        allowedEvents: "currencyCode add delete remove purchase checkout detail".split(" "),
        _convert: function(a, b) {
            var c = k.keys(b)
              , e = !1
              , g = {
                transaction_id: "id",
                value: "revenue"
            };
            if (b.items) {
                var p = {};
                p[a] = {
                    products: b.items
                };
                1 < c.length && (p[a].actionField = k.reduce(function(a, c) {
                    g[c] ? a[g[c]] = b[c] : "currency" === c ? e = b[c] : "items" !== c && b[c] && (a[c] = b[c]);
                    return a
                }, {}, c));
                e && (p.currencyCode = e);
                return p
            }
        },
        _checkGtag: function(a) {
            var b = {
                view_item: "detail",
                add_to_cart: "add",
                remove_from_cart: "remove",
                begin_checkout: "checkout",
                purchase: "purchase"
            }
              , c = [];
            a && "event" === a[0] && b[a[1]] && (a = this._convert(b[a[1]], a[2])) && c.push(a);
            return c
        },
        _send: function(a) {
            var b = [], c = this.allowedEvents, e, g;
            var p = 0;
            for (g = a.length; p < g; p++) {
                if ((e = a[p]) && e.ymetrikaEvent) {
                    var h = e.ymetrikaEvent;
                    this._callHandlers(h);
                    if ("params" === h.type && h.data) {
                        h.sended || (h.sended = []);
                        if (h.counter)
                            this.counter && this.counter.params && this.counterId == h.counter && (this.onCookies(function(a) {
                                this.counter.params(a.data)
                            }, this, k.mixin({}, h)),
                            h.sended.push(this.counterId));
                        else
                            this.onCookies(function(a) {
                                k.forEachKey(this.globalConfig.get("counters"), function(b, c) {
                                    var d = b.split(":")[0];
                                    !k.inArray(a.sended, d) && c && c.params && (c.params(a.data),
                                    a.sended.push(d))
                                }, this)
                            }, this, k.mixin({}, h));
                        h.status == this.status.NEW && h.parent && this.frameConnector && this.frameConnector.checkFrame(n.parent) && n.parent !== n && (this.frameConnector.sendToParents({
                            type: "params",
                            data: h.data
                        }, function() {
                            h.status = this.status.OK
                        }, this),
                        h.status = this.status.PENDING)
                    }
                }
                if (e && e.ecommerce) {
                    var m = {};
                    var f = !1;
                    k.forEachKey(e.ecommerce, function(a, b) {
                        0 <= k.arrayIndexOf(c, a) && (f = !0,
                        m[a] = b)
                    });
                    f && b.push(m)
                }
                b = b.concat(this._checkGtag(e))
            }
            if (b.length)
                this.onCookies(function(a) {
                    this.counter.params({
                        __ym: {
                            ecommerce: a
                        }
                    })
                }, this, b)
        }
    });
    La.handlers = [];
    var Hb = "GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv".split(" ")
      , fc = ["https://brozen.yandex.ru", "https://yabro1.zen-test.yandex.ru/yabro/index.html", "https://yabro2.zen-test.yandex.ru/yabro/index.html"]
      , xa = G.inherit({
        globalKey: "f1",
        MAX_SIZE: 1E6,
        isYAN: !1,
        trigger: function(a) {
            this.globalConfig.get("dataLayer").push({
                ymetrikaEvent: {
                    type: a
                }
            })
        },
        initCounter: function() {},
        enabled: ua() && -1 < n.location.href.indexOf("yagdprcheck\x3d1"),
        _initComponent: function() {
            this._cookie = xa.cookie;
            this._sender = new Fb({
                fake: !0,
                globalConfig: this.globalConfig,
                forceNoRedirect: !0
            })
        },
        realise: function(a, b) {
            this.initCounter.apply(n, a);
            this.globalConfig.set(this.globalKey, function(a) {
                a()
            });
            b.length && mb.chain(b.concat([function() {
                b = []
            }
            ]), null, !1, "GDPR")
        },
        showPopup: function(a, b, c, e, g) {
            var k = this;
            a = t.loadScript({
                src: "https://yastatic.net/q/global-notifications/cc/_lego-cc" + a + "." + b + ".js"
            });
            k.trigger("GDPR-open-start");
            a.onerror = function(a) {
                F(function() {
                    throw a;
                }, "gdpr-popup")();
                k.trigger("GDPR-open-fail");
                k.realise(c, e);
                k.frameConnector.sendToChildren({
                    type: "GDPR-ok"
                })
            }
            ;
            a.onload = function() {
                k.trigger("GDPR-open-success");
                La.handlers = La.handlers.concat([{
                    type: "GDPR-ok, GDPR-cross",
                    callback: function(a) {
                        a.once || (g.create("gdpr", "0", 525600),
                        k.realise(c, e),
                        k.frameConnector.sendToChildren({
                            type: "GDPR-ok"
                        }),
                        a.once = !0)
                    }
                }, {
                    type: "GDPR-cancel",
                    callback: function() {
                        g.create("gdpr", "1");
                        k.logCancel();
                        k.frameConnector.sendToChildren({
                            type: "GDPR-cancel"
                        })
                    }
                }])
            }
        },
        askGDPR: function(a, b, c, e, g, p) {
            if (k.inArray([null, ""], a))
                this.showPopup(b, c, e, g, p);
            else if ("0" === a)
                this.trigger("GDPR-cookie-success"),
                this.realise(e, g);
            else if ("1" === a)
                return this.trigger("GDPR-cookie-fail"),
                this.logCancel(),
                !1
        },
        logCancel: function() {
            this._sender.hit(function() {}, !1)
        },
        handle: function() {
            var a = this._sender
              , b = []
              , c = (v.getLanguage() || "").toLowerCase().split("-")[0]
              , e = "ontouchstart"in n ? "-touch" : ""
              , g = this._cookie
              , p = g.read("gdpr")
              , h = g.read("yaGdprCheck")
              , m = this
              , f = this.globalConfig.get(this.globalKey)
              , d = arguments;
            b.size = 0;
            if (f)
                return f(function() {
                    m.realise(d, b)
                });
            k.inArray("ru en kk be ky tr tt uk".split(" "), c) || (c = "en");
            if (!this.enabled && ("0" === p || v.isSafariWebView() || v.isAndroidWebView() || k.inArray(fc, n.location.href.split("?")[0]) || !ua() || g.read("yandex_login") || this.disable))
                return g.read("yandex_login") ? this.trigger("GDPR-skip-login") : ua() ? "0" === p ? this.trigger("GDPR-skip") : v.isSafariWebView() || v.isAndroidWebView() ? this.trigger("GDPR-skip-wv") : this.trigger("GDPR-skip-na") : this.trigger("GDPR-skip-domain"),
                this.realise(d, b);
            this.globalConfig.set(this.globalKey, function(a, c) {
                var d = 0;
                try {
                    d = JSON.stringify(c).length || 0
                } catch (J) {}
                b.size + d < m.MAX_SIZE ? (b.push(a),
                b.size += d) : k.warning("GDPR buffer is exceeded")
            });
            a.hit(function(a) {
                if (a.params.eu || h || m.enabled)
                    if (m.frameConnector && m.frameConnector.addHandler("isYandex", function() {
                        return {
                            type: "isYandex",
                            isYandex: ua()
                        }
                    }),
                    m.frameConnector.isIframe) {
                        m.frameConnector.sendToParents({
                            type: "isYandex"
                        }, function(a, c) {
                            var d = !1;
                            clearTimeout(f);
                            c[0].isYandex ? (m.trigger("GDPR-frame-ya"),
                            m.frameConnector.addHandler("GDPR-ok", function() {
                                d || (g.create("gdpr", "0", 525600),
                                m.realise(c, b),
                                d = !0)
                            }),
                            m.frameConnector.addHandler("GDPR-cancel", function() {
                                g.create("gdpr", "1")
                            })) : (m.trigger("GDPR-frame-noya"),
                            m.realise(c, b))
                        });
                        var f = k.setTimeout(function() {
                            m.trigger("GDPR-frame-skip");
                            m.realise(d, b)
                        }, 2E3)
                    } else
                        m.askGDPR(p, e, c, d, b, g);
                else
                    return a.params.eu ? m.trigger("GDPR-skip-eu-na") : m.trigger("GDPR-eu-skip"),
                    m.realise(d, b)
            })
        }
    });
    xa.globalKey = "f1";
    xa.cookie = new O({
        skipPrefix: !0
    });
    xa.getState = function(a) {
        var b = xa.cookie.read("gdpr");
        a = k.reduce(function(a, b) {
            b.ymetrikaEvent && k.inArray(Hb, b.ymetrikaEvent.type) && a.push(k.arrayIndexOf(Hb, b.ymetrikaEvent.type));
            return a
        }, [], a.get("dataLayer"));
        return a.length ? (a = a.join(","),
        b && (a += "-" + (k.inArray(["0", "1"], b) ? b : "2")),
        a) : ""
    }
    ;
    var gc = {
        init: function(a, b, c) {
            "22663942" == c && (c = q.createElement("img"),
            a && a.account && a.tmsec && b && (c.src = "https://www.tns-counter.ru/V13a****" + a.account + "/ru/UTF-8/tmsec\x3d" + a.tmsec + "/" + b))
        }
    };
    v.isIE = k.memorize(function() {
        return q && !q.addEventListener || !1
    });
    v.isChromePdf = k.memorize(function() {
        var a, b = navigator.plugins;
        if (b && b.length)
            for (a = 0; a < b.length; a++)
                if (/Chrome PDF Viewer/.test(b[a].name))
                    return !0;
        return !1
    });
    v.isPrivate = F(function(a) {
        var b = k.bind(a, null, 0);
        a = k.bind(a, null, 1);
        if (k.isFunction(n.webkitRequestFileSystem) && !v.isAndroid())
            return n.webkitRequestFileSystem(0, 0, b, a);
        if (v.isFF())
            return "undefined" == typeof navigator.serviceWorker;
        if (v.isSafari() && k.isFunction(n.openDatabase))
            try {
                n.openDatabase(null, null, null, null),
                b()
            } catch (c) {
                a()
            }
        else {
            if (n.indexedDB || !n.PointerEvent && !n.MSPointerEvent)
                return b();
            a()
        }
    }, "isPrivate");
    v.findTarget = function(a) {
        a = a.target || a.srcElement;
        var b;
        if (!a)
            return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" !== b && "area" !== b || !a.href && !a["xlink:href"]); )
            b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }
    ;
    v.getHref = function(a) {
        if (!a)
            return "";
        a = a.href;
        return k.isString(a) ? "" + a : "[object SVGAnimatedString]" === k.toString(a) ? "" + a.baseVal : ""
    }
    ;
    v.getLinkComponents = function(a) {
        return a && "A" === a.nodeName ? {
            href: a.href,
            hostname: a.hostname || k.parseUrl(a.href).hostname || "",
            host: a.host,
            protocol: a.protocol,
            pathname: a.pathname,
            hash: a.hash,
            port: a.port,
            search: a.search,
            query: a.search.slice(Math.min(1, a.search.length)),
            path: (a.pathname || "/") + a.search
        } : k.isString(a) ? k.parseUrl(a) : {
            href: "",
            hostname: "",
            host: "",
            protocol: "",
            pathname: "",
            hash: "",
            port: "",
            search: "",
            query: "",
            path: ""
        }
    }
    ;
    var hc = H.inherit({
        resource: "clmap",
        retry: !0,
        transports: [wa],
        sendClick: function(a, b, c, e) {
            this.send({
                "page-url": a,
                "pointer-click": b
            }, {}, c, e)
        }
    })
      , ic = G.inherit({
        filter: null,
        ignoreTags: [],
        quota: 0,
        isTrackHash: !1,
        protocol: "",
        counterId: 0,
        counterType: 0,
        startTime: 0,
        MAX_LEN_PATH: 128,
        TIMEOUT_CLICK: 50,
        TIMEOUT_SAME_CLICKS: 1E3,
        DELTA_SAME_CLICKS: 2,
        tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
        _initComponent: function() {
            var a, b;
            this._lastClick = null;
            this.hasQuota = !!this.quota;
            this._quota = this.quota;
            this._ignoreTags = [];
            if (this.ignoreTags)
                for (a = 0; a < this.ignoreTags.length; a++)
                    this.ignoreTags[a] && k.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
            this._cacheTags = {};
            a = 59;
            var c = String.fromCharCode;
            for (b = 0; b < this.tags.length; b++)
                this._cacheTags[this.tags[b]] = c(a),
                c(a),
                a++;
            this._sender = new hc({
                globalConfig: this.globalConfig,
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            this._start = !1;
            this.start()
        },
        destroy: function() {
            this.stop()
        },
        start: function() {
            if (!this._start)
                u.on(q, "click", this._handler, this);
            this._start = !0
        },
        stop: function() {
            this._start && u.un(q, "click", this._handler, this);
            this._start = !1
        },
        setTrackHash: function(a) {
            this.isTrackHash = a
        },
        _isIgnore: function(a) {
            return t.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
        },
        _handler: function(a) {
            a = {
                el: W.getTarget(a),
                pos: W.getPos(a),
                button: W.getMouseButton(a),
                time: +new Date
            };
            if (this._isTrackingClick(a)) {
                var b = t.getElementSize(a.el);
                var c = t.getElementXY(a.el);
                b = ["rn", k.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el), "X", a.pos[0], "Y", a.pos[1]];
                c = L().href;
                this.isTrackHash ? k.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                this._sender.sendClick(k.trim(c, lb), b.join(":"));
                this._lastClick = a
            }
        },
        _isTrackingClick: function(a) {
            var b;
            if (n.ymDisabledClickmap || k.isMetrikaPlayer() || !a.el)
                return !1;
            var c = a.el.tagName;
            if ((2 == a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c))
                return !1;
            for (b = 0; b < this._ignoreTags.length; b++)
                if (this._ignoreTags[b] == c)
                    return !1;
            for (c = a.el; c; ) {
                if (this._isIgnore(c))
                    return !1;
                c = c.parentNode
            }
            if (this._lastClick) {
                if (a.time - this._lastClick.time < this.TIMEOUT_CLICK)
                    return !1;
                c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                var e = a.time - this._lastClick.time;
                if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS && e < this.TIMEOUT_SAME_CLICKS)
                    return !1
            }
            if (this.hasQuota) {
                if (!this._quota)
                    return !1;
                this._quota--
            }
            return !0
        },
        _getElPath: function(a) {
            for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName; )
                b += this._cacheTags[a.tagName] || "*",
                b += t.getElementNeighborPosition(a) || "",
                a = a.parentNode;
            return k.trim(b, this.MAX_LEN_PATH)
        }
    })
      , Ib = G.inherit({
        injectHash: {
            Wjw75ghm7fa7JW8p: "https://yastatic.net/metrika-static-watch/assessor-init.js",
            Z4RhWJNDJanzkGJa: "https://yastatic.net/metrika-static-watch/assessor-compare.js"
        },
        ASSESSOR_COOKIE: "assessor",
        REMOTE_CONTROL: "i",
        getInjectHash: function() {
            var a = {};
            k.forEachKey(this.injectHash, function(b) {
                a[ya + ("" + k.fnv32a(b))] = this.injectHash[b]
            }, this);
            return a
        },
        checkAssessor: function() {
            var a = []
              , b = this.getInjectHash();
            k.forEachKey(b, function(c) {
                if ((new RegExp(c)).test(n.location.hash) || O.get(this.ASSESSOR_COOKIE + c))
                    O.set(this.ASSESSOR_COOKIE + c),
                    a.push(b[c])
            }, this);
            return a
        },
        _initComponent: function() {
            var a = this.checkAssessor();
            this.globalConfig.get(this.REMOTE_CONTROL) || (this.globalConfig.set(this.REMOTE_CONTROL, !0),
            Ib.superclass._initComponent.apply(this, arguments),
            this._executedMsgs = {},
            u.on(n, "message", this._onMessage, this),
            a.length && (this.globalConfig.set("oo", !0),
            this.globalConfig.get("stopRecoder", function() {})(),
            k.arrayEvery(a, function(a) {
                t.loadScript({
                    src: a
                }, n);
                return 1
            })))
        },
        _buildRemoteIframe: function(a) {
            var b = k.getNativeFunction("createElement", q)("div")
              , c = t.getBody() || q.documentElement;
            if (c) {
                b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
                var e = b.firstChild;
                e.onload = function() {
                    t.loadScript({
                        src: a
                    }, e.contentWindow)
                }
                ;
                n._ym__remoteIframeEl = e;
                b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b),
                b.removeChild(e),
                (c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && c.appendChild(e),
                n._ym__remoteIframeContainer = b) : (c.appendChild(e),
                n._ym__remoteIframeContainer = e)
            }
        },
        _isAllowedLang: function(a) {
            return -1 !== k.arrayIndexOf(["ru", "uk", "en", "tr"], a)
        },
        _isAllowedOrigin: function(a) {
            return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
        },
        _isAllowedStatic: function(a) {
            return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net|[\w\-.]+\.s3\.yandex\.net)$/.test(a)
        },
        _onMessage: function(a) {
            try {
                var b = a.origin
            } catch (c) {}
            b && this._isAllowedOrigin(b) && (b = aa.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(k.parseUrl(b.domain).host) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0,
            n._ym__postMessageEvent = a,
            n._ym__inpageMode = b.inpageMode,
            n._ym__initMessage = b.initMessage,
            this._buildRemoteIframe(b.domain + "/cdn/inpage-remote/" + (b.newScriptAddr ? "_inpage-remote_" : "inpage-remote.") + b.lang + ".js"))
        }
    })
      , jc = {
        match: function() {
            this.enabled() && u.ready(function() {
                var a = k.getNativeFunction("createElement", q)("iframe");
                a.onload = function() {
                    Sa.save("cm", w.getMinutes());
                    t.removeNode(a)
                }
                ;
                a.style.display = "none";
                a.src = "https://mc.yandex.ru/metrika/watch_match.html";
                q.documentElement.appendChild(a)
            })
        },
        enabled: function() {
            return 1440 < w.getMinutes() - Sa.getNum("cm") && "tr" === k.getTld()
        }
    };
    F(function() {
        (function(a) {
            function b(e) {
                if (c[e])
                    return c[e].exports;
                var g = c[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                a[e].call(g.exports, g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var c = {};
            b.m = a;
            b.c = c;
            b.d = function(a, c, k) {
                b.o(a, c) || Object.defineProperty(a, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: k
                })
            }
            ;
            b.n = function(a) {
                var c = a && a.__esModule ? function() {
                    return a["default"]
                }
                : function() {
                    return a
                }
                ;
                b.d(c, "a", c);
                return c
            }
            ;
            b.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            ;
            b.p = "";
            return b(b.s = 3)
        }
        )({
            0: function(a, b, c) {
                b.__esModule = !0;
                b.listToArray = function(a) {
                    return a ? [].slice.call(a) : []
                }
            },
            1: function(a, b, c) {
                b.__esModule = !0;
                var e = [".googlesyndication.com/", "/googleads"];
                b.isGoogleSrc = function(a) {
                    return !(!a || !e.filter(function(b) {
                        return 0 < a.indexOf(b)
                    }).length)
                }
            },
            3: function(a, b, c) {
                b.__esModule = !0;
                a = {
                    detectAd: c(4).detectAd
                };
                n.Ya ? n.Ya.AdDetector ? a = n.Ya.AdDetector : n.Ya.AdDetector = a : n.Ya = {
                    AdDetector: a
                };
                b.AdDetector = a
            },
            34: function(a, b, c) {
                b.__esModule = !0;
                b.getParentElementsCount = function(a) {
                    for (var b = 0; ; )
                        if (a = a.parentElement)
                            b++;
                        else
                            return b
                }
            },
            4: function(a, b, c) {
                b.__esModule = !0;
                var e = c(5)
                  , g = c(9)
                  , k = c(34)
                  , h = c(6)
                  , m = q.body
                  , f = q.documentElement;
                b.detectAd = function() {
                    var a = n.pageYOffset || f.scrollTop || m.scrollTop
                      , b = n.pageXOffset || f.scrollLeft || m.scrollLeft
                      , c = f.clientTop || m.clientTop || 0
                      , p = f.clientLeft || m.clientLeft || 0
                      , q = f.scrollWidth || f.offsetWidth || n.innerWidth
                      , r = f.scrollHeight || f.offsetHeight || n.innerHeight
                      , u = h.getFrienlyWindowsTree(n)
                      , t = [];
                    h.windowsTreeEach(u, function(a) {
                        var b = a.window
                          , c = a.parent
                          , d = 0 < e.getParentFriendlyIFrames(b.document.documentElement).length
                          , f = g.getAdsInWindow(b, {
                            isInIFrame: d
                        });
                        d = f.adElements;
                        f = f.iframeProviders;
                        if (c) {
                            var h = b.frameElement
                              , k = t.filter(function(a) {
                                return a.windowsTree === c
                            })[0].adElements;
                            f.forEach(function(a) {
                                k.push({
                                    provider: a,
                                    element: h
                                })
                            })
                        }
                        t.push({
                            windowsTree: a,
                            adElements: d
                        })
                    });
                    t.forEach(function(a) {
                        a.adElements = a.adElements.sort(function(a, b) {
                            return k.getParentElementsCount(a.element) - k.getParentElementsCount(b.element)
                        })
                    });
                    var w = []
                      , v = [];
                    t.forEach(function(a) {
                        var b = a.windowsTree
                          , c = b.parent;
                        a = a.adElements;
                        b = e.getParentFriendlyIFrames(b.window.document.documentElement);
                        var d = b[b.length - 1];
                        a.forEach(function(a) {
                            var b = a.element;
                            v.push({
                                provider: a.provider,
                                element: c ? d : b
                            })
                        })
                    });
                    v.forEach(function(d) {
                        var e = d.element;
                        var f = e.getBoundingClientRect();
                        var g = f.top + a - c;
                        f = f.left + b - p;
                        var h = e.clientWidth;
                        e = e.clientHeight;
                        var k = f + h
                          , l = g + e
                          , m = 0 > f ? 0 : f < q ? f : q
                          , n = 0 > g ? 0 : g < r ? g : r;
                        100 <= ((k > q ? q : k > m ? k : m) - m) * ((l > r ? r : l > n ? l : n) - n) && w.push({
                            top: g,
                            left: f,
                            width: h,
                            height: e,
                            provider: d.provider
                        })
                    });
                    return {
                        page: {
                            width: q,
                            height: r
                        },
                        window: {
                            top: a,
                            left: b,
                            width: n.innerWidth,
                            height: n.innerHeight
                        },
                        ads: w
                    }
                }
            },
            5: function(a, b, c) {
                b.__esModule = !0;
                b.getParentFriendlyIFrames = function(a) {
                    for (var b = []; ; )
                        try {
                            if (a = a.ownerDocument.defaultView.frameElement)
                                b.push(a);
                            else
                                return b
                        } catch (p) {
                            return b
                        }
                }
            },
            6: function(a, b, c) {
                function e(a) {
                    return m.listToArray(a.document.getElementsByTagName("iframe")).filter(function(a) {
                        if (h.isSafari)
                            return !1;
                        try {
                            return a.contentWindow.document
                        } catch (l) {
                            return !1
                        }
                    }).map(function(a) {
                        return a.contentWindow
                    })
                }
                function g(a, b) {
                    var c = {
                        window: a,
                        children: [],
                        parent: b
                    };
                    c.children = e(a).map(function(a) {
                        return g(a, c)
                    });
                    return c
                }
                function k(a, b) {
                    b(a);
                    a.children.forEach(function(a) {
                        return k(a, b)
                    })
                }
                b.__esModule = !0;
                var h = c(7)
                  , m = c(0);
                b.getFrienlyWindowsTree = g;
                b.windowsTreeEach = k
            },
            7: function(a, b, c) {
                b.__esModule = !0;
                a = c(8);
                b.isSafari = a.isSafari()
            },
            8: function(a, b, c) {
                b.__esModule = !0;
                b.isSafari = function() {
                    var a = navigator.userAgent.toLowerCase();
                    return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf("android")
                }
            },
            9: function(a, b, c) {
                b.__esModule = !0;
                var e = c(0)
                  , g = c(1);
                b.getAdsInWindow = function(a, b) {
                    function c(a, b) {
                        b.forEach(function(b) {
                            q.push({
                                provider: a,
                                element: b
                            })
                        })
                    }
                    var f = b.isInIFrame
                      , d = a.document.body
                      , h = e.listToArray(d.querySelectorAll("img"))
                      , k = e.listToArray(d.querySelectorAll("iframe"))
                      , n = e.listToArray(d.querySelectorAll("script"))
                      , p = e.listToArray(d.querySelectorAll("div"))
                      , q = []
                      , u = []
                      , t = e.listToArray(d.querySelectorAll("yatag"))
                      , w = e.listToArray(d.querySelectorAll("yatag yatag"));
                    c("yandex", t.filter(function(a) {
                        return -1 === w.indexOf(a)
                    }));
                    c("adriver", k.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
                    }));
                    c("adfox", k.filter(function(a) {
                        return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
                    }));
                    c("adfox", h.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
                    }));
                    c("adfox", p.filter(function(a) {
                        return -1 < a.id.indexOf("AdFox_banner_")
                    }));
                    f && h.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
                    }).length && u.push("adfox");
                    k.filter(function(a) {
                        return g.isGoogleSrc(a.src)
                    }).forEach(function(a) {
                        q.push({
                            provider: "google",
                            element: a
                        })
                    });
                    f && n.filter(function(a) {
                        return g.isGoogleSrc(a.src)
                    }).length && u.push("google");
                    c("awaps", k.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
                    }));
                    c("criteo", k.filter(function(a) {
                        var b = a.src;
                        a = a.id;
                        return b && (-1 < b.indexOf(".criteo.com/") || a && -1 < a.indexOf("cto_iframe_")) ? !0 : !1
                    }));
                    return {
                        adElements: q,
                        iframeProviders: u
                    }
                }
            }
        })
    }, "", !0)();
    var kc = {
        init: function(a, b) {
            if (Math.random() < (b || .005) && !A.get("adDetect")) {
                A.set("adDetect", !0);
                var c = function(b) {
                    var c = n.Ya.AdDetector.detectAd();
                    var e = c.window;
                    var g = c.page;
                    a.sendParams({
                        __ym: {
                            ads: {
                                w: {
                                    t: e.top,
                                    l: e.left,
                                    w: e.width,
                                    h: e.height
                                },
                                p: {
                                    w: g.width,
                                    h: g.height
                                },
                                a: k.map(function(a) {
                                    return {
                                        t: a.top,
                                        l: a.left,
                                        w: a.width,
                                        h: a.height,
                                        p: a.provider
                                    }
                                }, c.ads),
                                full: b ? 1 : 0
                            }
                        }
                    })
                };
                var e = F(function() {
                    u.un(n, "load", e);
                    c(!0)
                }, "", !0);
                u.on(n, "load", e);
                k.setTimeout(c, 1E4, "AdDetector", !0)
            }
        }
    }, Jb = G.inherit({
        message: n.postMessage,
        spliter: ":",
        nameSpace: "__yminfo",
        pending: {},
        childs: {},
        isIframe: !1,
        parents: {},
        dataToSend: {
            parents: [],
            childs: []
        },
        checkFrame: function(a) {
            try {
                var b = a && a.postMessage
            } catch (c) {
                return !1
            }
            return b
        },
        checkChildrenData: function(a, b) {
            k.arrayEvery(this.dataToSend.childs, function(c) {
                -1 == k.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId),
                k.mixin(c.data, {
                    toCounter: b.counterId
                }),
                this.sendToIframe(a, c.data, function() {
                    c.sendedTo.push(b.counterId);
                    c.callback && c.callback(b, arguments)
                }));
                return !0
            }, this)
        },
        checkParentData: function(a, b) {
            k.arrayEvery(this.dataToSend.parents, function(c) {
                -1 == k.arrayIndexOf(c.tryTo, b.counterId) && (c.tryTo.push(b.counterId),
                k.mixin(c.data, {
                    toCounter: b.counterId
                }),
                this.sendToIframe(a, c.data, function() {
                    c.sendedTo.push(b.counterId);
                    c.callback && c.callback(b, arguments)
                }));
                return !0
            }, this)
        },
        getHandlers: function() {
            return {
                initToChild: [{
                    fn: function(a, b) {
                        a.source === n.top && this.trigger("parentConnect", a, b)
                    }
                }],
                initToParent: [{
                    fn: function(a, b) {
                        this.childs[b.counterId] = {
                            info: b,
                            window: a.source
                        };
                        this.checkChildrenData(a.source, b)
                    }
                }],
                parentConnect: [{
                    fn: function(a, b) {
                        this.parents[b.counterId] = {
                            info: b,
                            window: a.source
                        };
                        this.checkParentData(a.source, b)
                    }
                }]
            }
        },
        genMessage: function(a, b) {
            var c = {
                date: w.getMs(),
                key: Math.random(),
                dir: 0
            };
            b && (c = {
                date: b[0],
                key: b[1],
                dir: b[2]
            });
            k.mixin(a, {
                counterId: this.counterId,
                hid: this.hid
            });
            var e = {
                data: a
            };
            e[this.nameSpace] = [this.nameSpace, c.date, c.key, c.dir].join(this.spliter);
            return {
                meta: c,
                string: aa.stringify(e)
            }
        },
        sendToIframe: function(a, b, c, e) {
            b = this.genMessage(b);
            var g = this
              , n = [b.meta.date, b.meta.key].join(this.spliter);
            this.checkFrame(a) && (a.postMessage(b.string, "*"),
            this.pending[n] = k.bind(c, e || this),
            k.setTimeout(function() {
                delete g.pending[n]
            }, 5E3, this, "fc.toSendToIframe"))
        },
        sendToChildren: function(a, b, c) {
            var e = this
              , g = this.dataToSend.childs.push({
                sendedTo: [],
                tryTo: [],
                callback: b ? k.bind(b, c || this) : !1,
                data: a
            }) - 1;
            k.forEachKey(this.childs, function(a) {
                this.dataToSend.childs[g].tryTo.push(a);
                return 1
            }, this);
            k.keys(this.childs).length && k.forEachKey(this.childs, function(b) {
                this.sendToIframe(e.childs[b].window, k.mixin(a, {
                    toCounter: b
                }), function(a) {
                    this.dataToSend.childs[g].sendedTo.push(b);
                    this.dataToSend.childs[g].callback && this.dataToSend.childs[g].callback(a)
                }, this)
            }, this)
        },
        sendToParents: function(a, b, c) {
            var e = this.dataToSend.parents.push({
                sendedTo: [],
                tryTo: [],
                callback: b ? k.bind(b, c || this) : !1,
                data: a
            }) - 1;
            k.forEachKey(this.parents, function(a) {
                this.dataToSend.parents[e].tryTo.push(a);
                return 1
            }, this);
            k.keys(this.parents).length && this.sendToIframe(n.parent, a, function(a) {
                k.forEachKey(this.parents, function(b) {
                    this.dataToSend.parents[e].sendedTo.push(b);
                    this.dataToSend.parents[e].callback && this.dataToSend.parents[e].callback(a)
                }, this)
            }, this)
        },
        addHandler: function(a, b, c) {
            this.handlers[a] || (this.handlers[a] = []);
            this.handlers[a].push({
                fn: b,
                ctx: c
            })
        },
        _initComponent: function() {
            var a = n.document.getElementsByTagName("iframe")
              , b = 0;
            Jb.superclass._initComponent.apply(this, arguments);
            this.handlers = k.mixin({}, this.getHandlers());
            this.isIframe = v.isIframe();
            if (this.message) {
                for (b = 0; b < a.length; b++) {
                    var c = a[b];
                    (function(a, b) {
                        a.sendToIframe(b.contentWindow, {
                            type: "initToChild"
                        }, function(c) {
                            a.childs[c.counterId] = {
                                info: c,
                                window: b.contentWindow
                            }
                        })
                    }
                    )(this, c)
                }
                this.isIframe && this.sendToIframe(n.parent, {
                    type: "initToParent"
                }, function(a) {
                    this.trigger("parentConnect", {
                        source: n.parent
                    }, a)
                });
                u.on(n, "message", this.onMessage, this, {
                    passive: !1,
                    name: "FrameConnector"
                })
            }
        },
        trigger: function(a, b, c) {
            var e = this;
            return k.map(function(a) {
                a = a.fn.call(a.ctx || e, b, c) || {};
                return k.mixin(a, {
                    counterId: e.counterId,
                    hid: e.hid
                })
            }, this.handlers[a])
        },
        DIR_INDEX: 2,
        onMessage: function(a) {
            var b, c = [];
            try {
                var e = a.data;
                e = aa.parse(a.data);
                var g = e[this.nameSpace]
            } catch (h) {
                return
            }
            if (g && g.substring && g.substring(0, this.nameSpace.length) == this.nameSpace) {
                for (b = 0; 3 >= b; b++) {
                    var n = k.arrayIndexOf(g, this.spliter);
                    -1 !== n ? c.push(g.substring(0, n)) : c.push(g);
                    g = g.substring(n + 1)
                }
                b = c.splice(1, 3);
                if ((e = e.data) && e.type && this.handlers[e.type] && "0" === b[this.DIR_INDEX]) {
                    if (!e.toCounter || e.toCounter === this.counterId) {
                        try {
                            a.source
                        } catch (h) {
                            return
                        }
                        e.counterId && this.checkFrame(a.source) && (n = this.trigger(e.type, a, e),
                        a.source.postMessage(this.genMessage(n, [b[0], b[1], e.counterId]).string, "*"))
                    }
                } else
                    b[this.DIR_INDEX] == this.counterId && k.isArray(e) && k.arrayEvery(e, function(a) {
                        return a.counterId && a.hid
                    }) && (a = this.pending[[b[0], b[1]].join(this.spliter)]) && a.apply(this, e)
            }
        }
    }), I = L(), fb = w.getTimezone(), gb = w.getTimestamp(), ja = n.screen, Wb = 64, lb = v.isIE() ? 512 : 2048, Xb = v.isIE() ? 512 : 2048, yb = v.isIE() ? 100 : 400, Eb = 100, kb = "noindex", Kb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i, lc = +new Date, pa = "Metrika", qb, bb, ya = function() {
        return "1731"
    }();
    A.init().setSafe("counters", {}).setSafe("hitParam", {}).setSafe("counterNum", 0).setSafe("dataLayer", []).setSafe("hitId", k.random(1, 1073741824)).setSafe("_globalMetrikaHitId", k.random()).setSafe("v", ya);
    pa = "Metrika2";
    n.Ya[pa] = function(a, b, c, e) {
        var g = this;
        return F(function() {
            function p(a) {
                var b = q.referrer || "", c, d;
                if ((new RegExp("^https?://" + I.host + "/")).test(b))
                    return !1;
                var e = a.patterns;
                for (c = 0; c < e.length; c++) {
                    var f = new RegExp(e[c],"i");
                    if (b.match(f))
                        if (f = a.params || [],
                        f.length) {
                            var g = k.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                            for (d = 0; d < f.length; d++)
                                if (g == k.safeDecodeURIComponent(f[d]))
                                    return !0
                        } else
                            return !0
                }
                return !1
            }
            function h(a, b) {
                var c = !1, d;
                if (a && "string" != typeof a && a.length)
                    for (d = 0; d < a.length; d++) {
                        var e = a[d].selector;
                        var f = a[d].text;
                        var g = e.charAt(0);
                        e = e.slice(1);
                        if ("#" == g) {
                            if (g = q.getElementById(e))
                                c = !0,
                                b && ma.unshift([g, g.innerHTML]),
                                g.innerHTML = f
                        } else if ("." == g)
                            for (g = t.getElementsByClassName(e),
                            e = 0; e < g.length; e++) {
                                c = !0;
                                var h = g[e]
                                  , k = f;
                                b && ma.unshift([h, h.innerHTML]);
                                h.innerHTML = k
                            }
                    }
                return c
            }
            function m() {
                var a;
                for (a = 0; a < ma.length; a++)
                    ma[a][0].innerHTML = ma[a][1]
            }
            function f(a, b) {
                var c, d = "";
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "") || "";
                if (a) {
                    var e = a.split("\x26");
                    for (c = 0; c < e.length; c++) {
                        var f = e[c].split("\x3d");
                        "_openstat" === f[0] && (d = f[1])
                    }
                }
                var g = b.split("?");
                for (c = 0; c < g.length; c++) {
                    var h = g[c].split("\x26");
                    for (e = 0; e < h.length; e++)
                        f = h[e].split("\x3d"),
                        "_openstat" === f[0] && (d = f[1])
                }
                d && (d = -1 < d.indexOf(";") ? k.safeDecodeURIComponent(d) : jb.decode(oa.decode(d.replace(/[-*_]/g, function(a) {
                    return {
                        "*": "+",
                        "-": "/",
                        _: "\x3d"
                    }[a] || a
                }))));
                return d && (c = d.split(";"),
                4 == c.length) ? {
                    service: c[0],
                    campaign: c[1],
                    ad: c[2],
                    source: c[3]
                } : null
            }
            function d(a, b) {
                return F(function() {
                    if (!g.isDestructing())
                        return a.apply(this, arguments)
                }, b || "")
            }
            function l() {
                var d = !1
                  , l = !1;
                ta || (l = H.initCookie(va),
                xb.init(A));
                Ka.initPU(M, A);
                v.isAndroidWebView() || Ka.initPP(A);
                H.retransmit(A);
                wa && gc.init(wa, ca, a);
                A.get("pri") != z || v.isAndroidWebView() || (A.setSafe("pri", null),
                v.isPrivate(F(function(a) {
                    A.set("pri", a)
                }, "privCb")));
                ia.init(ua);
                Cb.subscribe(Y);
                if (A.get("hitParam")[Y]) {
                    if (1 != c || A.get("counters")[Y])
                        return !1;
                    d = !0
                }
                A.get("counters")[Y] = g;
                A.get("hitParam")[Y] = 1;
                k.async(function() {
                    Ka.initFip(A)
                }, this, "initFip");
                g._webvisor = K.webvisor || !1;
                g._directCampaign = K.directCampaign;
                K.trackHash && G(!0);
                if (!d) {
                    sa = new Bb({
                        protocol: "https:",
                        globalConfig: A,
                        counterId: a,
                        counterType: c,
                        hid: ca,
                        tz: fb,
                        ts: gb,
                        url: I.href,
                        enabled: g._webvisor,
                        trustedDomains: K.trustedDomains,
                        childIframe: K.childIframe
                    });
                    g.replacePhones();
                    d = new Gb({
                        globalConfig: A
                    });
                    var w = function(d) {
                        var Z = new pb({
                            protocol: "https:",
                            counterType: c,
                            counterId: a,
                            trackHash: Ca,
                            hitId: ca,
                            webvisor: g._webvisor,
                            counter: g,
                            globalConfig: A,
                            counterNum: Ba
                        })
                          , V = {
                            ut: pa,
                            re: l,
                            he: ~~K.httpError,
                            ad: 1 == c && n.Ya && n.Ya.Direct,
                            pv: !0,
                            cpf: v.isChromePdf(),
                            saveRef: !0
                        };
                        qb = +new Date;
                        Z.sendHit({
                            url: N,
                            referrer: X,
                            title: t.getDocumentTitle(),
                            vParams: b,
                            userParams: Ha,
                            nohit: e,
                            experiments: da,
                            modes: V,
                            visitColor: sa.getVc(),
                            hasPrerender: za,
                            ts: gb,
                            tz: fb,
                            callback: function(l, Z) {
                                var V;
                                e || (za = !1);
                                l = l || {};
                                (V = "0" !== l.pcs) || Ka.initZZ();
                                l.eu !== z && A.set("isEU", l.eu);
                                Sa.init(Z);
                                jc.match();
                                ec.sync(a, c, V, A);
                                R.log("PageView. Counter ", a, ". URL: ", I.href, ". Referrer: " + q.referrer, ". Params: ", b);
                                bb || (bb = +new Date);
                                l.webvisor && (l.webvisor.isEU = A.get("isEU"));
                                if (!g.isDestructing()) {
                                    sa.start(l.webvisor, l.publisher);
                                    var r = l.mp2;
                                    V = new O({
                                        counterId: a
                                    });
                                    V.erase("mp2_substs");
                                    if (r) {
                                        b: {
                                            var t = r.conditions;
                                            var w;
                                            if (t && t.length)
                                                for (w = 0; w < t.length; w++) {
                                                    var v = t[w];
                                                    if ("ref" == v.type)
                                                        v = p(v);
                                                    else if ("adv" == v.type) {
                                                        var x;
                                                        var y = v;
                                                        var ea = n.Ya._metrika.counter._directCampaign;
                                                        var la = y.ServiceNamePattern;
                                                        var B = y.RefererPattern;
                                                        v = ea ? y.direct_orders : y.direct_camp;
                                                        var C = q.referrer
                                                          , E = Da.parse(I.search)
                                                          , D = f(I.search, I.hash)
                                                          , F = {};
                                                        var G = ["source", "medium", "campaign", "term", "content"];
                                                        for (x = 0; x < G.length; x++)
                                                            E["utm_" + G[x]] && (F[G[x]] = E["utm_" + G[x]]);
                                                        var Pa = ea ? "direct.yandex.ru" : D && D.service || F.source;
                                                        x = !1;
                                                        if (!x && la && la.length)
                                                            for (G = 0; G < la.length; G++)
                                                                if ((new RegExp(la[G],"i")).test(Pa)) {
                                                                    x = !0;
                                                                    break
                                                                }
                                                        if (!x && !y.yandex_direct && B && B.length)
                                                            for (la = 0; la < B.length; la++)
                                                                if ((new RegExp(B[la],"i")).test(C)) {
                                                                    x = !0;
                                                                    break
                                                                }
                                                        !x && y.google_adwords && E.gclid && (x = !0);
                                                        if (x && v && v.length && (x = !1,
                                                        ea = ea || D && D.campaign || F && F.campaign))
                                                            for (y = 0; y < v.length; y++)
                                                                if (v[y] == ea) {
                                                                    x = !0;
                                                                    break
                                                                }
                                                        v = x
                                                    } else
                                                        v = !1;
                                                    if (v) {
                                                        t[w].track_id && V.create("mp2_track", t[w].track_id, 43200);
                                                        break b
                                                    }
                                                }
                                        }
                                        t = V.read("mp2_track");
                                        r = r.substs && r.substs[t];
                                        t && r ? (V.create("mp2_substs", k.toJSON(r)),
                                        V = h(r),
                                        g.params("__ym", V ? "mp_trackid" : "mp_trackid_bad", t)) : m()
                                    } else
                                        m();
                                    u.on(n, "load", g.replacePhones, g)
                                }
                                g._inited = !0;
                                d && d()
                            }
                        })
                    };
                    d.sync(w)
                }
                y(!1);
                u.on(q, "click", C, null, {
                    name: "extLinkClick"
                });
                0 != k.keys(K).length && (Ea && Ea.initUserLayer(),
                K.enableAll ? (y(!0),
                r(!0),
                D()) : (K.clickmap && r(K.clickmap),
                K.trackLinks && y(K.trackLinks),
                K.accurateTrackBounce && D(K.accurateTrackBounce)),
                K.triggerEvent && k.async(function() {
                    W.dispatchCustomEvent("yacounter" + a + "inited")
                }, this, "yacounterInit"))
            }
            function x(a) {
                var b = new xa({
                    frameConnector: M,
                    globalConfig: A,
                    initCounter: l,
                    disable: K.yaDisableGDPR
                });
                za = a;
                b.handle.apply(b, arguments)
            }
            function y(a) {
                var b = {};
                switch (typeof a) {
                case "string":
                    b.on = !0;
                    break;
                case "object":
                    b.on = !0;
                    break;
                case "boolean":
                    b.on = a;
                    break;
                default:
                    return
                }
                g._trackLinks = b
            }
            function C(a) {
                if (g._trackLinks && g._trackLinks.on) {
                    a = v.findTarget(a);
                    var b = v.getLinkComponents(a)
                      , c = b.href
                      , d = A.get("pai", k.noop)();
                    if (c && !t.classNameExists(a, "ym-disable-tracklink")) {
                        var e = b.protocol + "//" + b.hostname + b.pathname;
                        d = {
                            pai: d && d + "-" + ca,
                            ln: !0
                        };
                        var f = tb(a);
                        f = c === f ? "" : f;
                        if (t.classNameExists(a, "ym-external-link"))
                            P.sendClickLink({
                                url: c,
                                title: f,
                                modes: d
                            }, N);
                        else {
                            var h = K.url ? k.parseUrl(N).hostname : L().hostname;
                            d.dl = Kb.test(e) || Kb.test(c) || ub(c, ra) || ub(e, ra);
                            b = b.hostname;
                            (h ? h.replace(/^www\./, "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase() ? d.dl ? (d.ln = !1,
                            P.sendClickLink({
                                url: c,
                                title: f,
                                modes: d
                            }, N)) : (f = tb(a),
                            U.set("pai", d.pai),
                            f && f !== c && U.set("il", k.trim(f, Eb))) : c && -1 !== c.search(/^ *(data|javascript):/i) || (d.ut = kb,
                            P.sendClickLink({
                                url: c,
                                title: f,
                                modes: d
                            }, N))
                        }
                    }
                }
            }
            function r(b) {
                "undefined" === typeof b && (b = !0);
                !0 === b && (b = {});
                g._clickmap && g._clickmap.destroy();
                b && (g._clickmap = new ic({
                    globalConfig: A,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: lc
                }))
            }
            function E(a, b) {
                function c() {
                    if (!t) {
                        p && k.clearTimeout(p);
                        var c = h ? l : l + +new Date - m;
                        c = b - c;
                        0 > c && (c = 0);
                        p = k.setTimeout(function() {
                            t = !0;
                            e(!1);
                            a()
                        }, c, "trackUserTime")
                    }
                }
                function d() {
                    g || (f = !0,
                    h = !1,
                    g = !0,
                    c())
                }
                function e(a) {
                    var b;
                    for (b = 0; b < r.length; b += 3)
                        if (a)
                            u.on(r[b], r[b + 1], r[b + 2], {
                                name: "tabTrack"
                            });
                        else
                            u.un(r[b], r[b + 1], r[b + 2])
                }
                var f = !1
                  , g = !1
                  , h = !0
                  , l = 0
                  , m = +new Date
                  , p = null
                  , t = !1;
                if (v.isIE())
                    k.setTimeout(a, b, "trackUserTime");
                else {
                    var r = [n, "blur", function() {
                        h = f = g = !0;
                        l += +new Date - m;
                        m = +new Date;
                        c()
                    }
                    , n, "focus", function() {
                        f || g || (l = 0);
                        m = +new Date;
                        f = g = !0;
                        h = !1;
                        c()
                    }
                    , q, "click", d, q, "mousemove", d, q, "keydown", d, q, "scroll", d];
                    e(!0);
                    c()
                }
            }
            function D(b) {
                var c = K.referrer ? X : q.referrer
                  , d = K.url ? N : L().href;
                "number" !== typeof b && (b = 15E3);
                if (!g._isAccurateTrackBounce) {
                    g._isAccurateTrackBounce = !0;
                    var e = new na({
                        counterId: a
                    });
                    var f = e.get("lastHit");
                    e.set("lastHit", w.getMs());
                    ((e = e.get("lastHit")) && (!f || f < e - 18E5) || !Ob(c, d) || .1 > Math.random()) && E(function() {
                        g.notBounce()
                    }, b)
                }
            }
            function B(a) {
                var b = function() {
                    var a = L().hash.split("#")[1];
                    if ("undefined" == typeof a)
                        return !1;
                    var b = a.indexOf("?");
                    0 < b && (a = a.substring(0, b));
                    return a
                };
                var c = b();
                (function Oa() {
                    var d = b();
                    d !== c && (a(),
                    c = d);
                    ya = k.setTimeout(Oa, 200, "trackHash")
                }
                )()
            }
            function G(a) {
                if (!1 === a)
                    Ca && ("onhashchange"in n ? u.un(n, "hashchange", ka) : k.clearTimeout(ya),
                    Ca = !1);
                else if (a = ka,
                !Ca) {
                    if ("onhashchange"in n)
                        u.on(n, "hashchange", a);
                    else
                        B(a);
                    Ca = !0
                }
                P.setTrackHash(Ca);
                g._trackHash = Ca
            }
            function ka() {
                var a = {
                    ut: pa,
                    ad: 1 == c && n.Ya && n.Ya.Direct,
                    wh: !0,
                    saveRef: !0,
                    pv: !0
                };
                Ga = Xa.lastReferrer = ha;
                P.sendAjaxHit({
                    url: K.url ? N : L().href,
                    title: t.getDocumentTitle(),
                    referrer: Ga,
                    modes: a
                });
                ha = L().href
            }
            function ja(a, b, c) {
                a = Ja.parseValidate(a, b);
                b = [];
                a && (b.push(a),
                c = c || {},
                k.isFunction(c.callback) && (b.push(c.callback),
                c.ctx && b.push(c.ctx)));
                b.length && g.params.apply(g, b)
            }
            var pa = "", K = {}, Ga = "", ha = Xa.lastReferrer = I.href, ua = 0, za = !1, sa;
            A.setSafe("counter", g);
            Qa && F(function() {
                throw Qa.error;
            }, "include." + Qa.scope)();
            if ("object" === typeof a) {
                K = a;
                e = a.defer;
                pa = a.ut;
                var va = a.ldc || "uid";
                c = a.type;
                b = a.params;
                var Ha = a.userParams;
                var wa = a.tns;
                var da = K.experiments;
                var ta = K.nck;
                var N = a.url;
                var X = a.referrer;
                a = a.id
            }
            if (!n["disableYaCounter" + a]) {
                Da.parse = function(a, b) {
                    var c = {}, d;
                    a = a && a.replace(/^\?/, "") || "";
                    if (a.length) {
                        var e = a.split("\x26");
                        for (d = 0; d < e.length; d++)
                            if (e[d]) {
                                var f = e[d].split("\x3d");
                                if (f[0]) {
                                    var g = k.safeDecodeURIComponent(f[0]);
                                    f = k.safeDecodeURIComponent((f[1] || "").replace(/\+/g, "%20"));
                                    b && g in c ? k.isArray(c[g]) ? c[g].push(f) : c[g] = [c[g], f] : c[g] = f
                                }
                            }
                    }
                    return c
                }
                ;
                var ma = [];
                N = N ? N : L().href;
                X = X ? X : q.referrer;
                a = a || 0;
                /^\d+$/.test(a) || (a = 0);
                c = c || 0;
                var Y = a + ":" + c;
                if (A.get("counters")[Y])
                    return R.log("Duplicate counter " + Y + " initialization"),
                    A.get("counters")[Y];
                var ca = A.get("hitId");
                var M = new Jb({
                    counterId: a,
                    hid: ca
                });
                A.set("counterNum", A.get("counterNum") + 1);
                var Ba = A.get("counterNum");
                var P = new Ra({
                    protocol: "https:",
                    counterType: c,
                    counterId: a,
                    hitId: ca,
                    counter: g,
                    globalConfig: A,
                    counterNum: Ba
                });
                var ia = {
                    init: function(a, b) {
                        if (n.performance && "function" === typeof performance.getEntries && (a === z && (a = 1),
                        !(Math.random() >= a))) {
                            var c = {
                                1882689622: 1,
                                2318205080: 1,
                                3115871109: 1,
                                3604875100: 1,
                                339366994: 1,
                                2890452365: 1,
                                849340123: 1,
                                173872646: 1,
                                2343947156: 1,
                                655012937: 1,
                                1996539654: 1,
                                2065498185: 1,
                                823651274: 1,
                                12282461: 1,
                                1555719328: 1,
                                1417229093: 1,
                                138396985: 1
                            }, d = performance.getEntries(), e = {}, f = {}, g = {}, h = {}, l;
                            b && (g.counterId = 51533966);
                            for (l = 0; l < d.length; l++) {
                                var m = d[l];
                                var p = m.name.replace(/^https?:\/\//, "").split("?")[0];
                                var q = k.fnv32a(p);
                                "script" == m.initiatorType && b && (f[p] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    name: m.name,
                                    decodedBodySize: m.decodedBodySize
                                });
                                !c[q] || e[p] || b || (e[p] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    pages: I.href
                                })
                            }
                            k.keys(e).length && (h.timings8 = e);
                            k.keys(f).length && (h.scripts = f);
                            k.keys(h).length && (new Ta(g)).logParams(h)
                        }
                    }
                };
                ua = 24226447 == a ? 1 : .002;
                g.replacePhones = d(function() {
                    var b, c;
                    try {
                        (b = (new O({
                            counterId: a
                        })).read("mp2_substs")) && (c = aa.parse(b)) && h(c, !0)
                    } catch (ea) {}
                    return g
                }, "counter.replacePhones");
                g.reachGoal = d(function(b, c, d, e) {
                    2 <= arguments.length && "function" === typeof c && (e = d,
                    d = c,
                    c = z);
                    R.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                    P.sendGoal(b, {
                        url: K.url ? N : L().href,
                        vParams: c,
                        callback: d,
                        ctx: e
                    });
                    return g
                }, "counter.reachGoal");
                g.trackLinks = d(function(a) {
                    y(a);
                    return g
                }, "counter.trackLinks");
                var U = new na({
                    counterId: a
                });
                g.hit = d(function(b, c, d, e, f, h) {
                    (b = b && k.isFunction(b.toString) ? b.toString() : !1) ? (k.isObject(c) && (d = c.referer,
                    e = c.params,
                    f = c.callback,
                    h = c.ctx,
                    c = c.title),
                    N = b,
                    R.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " + d, ". Params: ", e),
                    P.sendHit({
                        url: b,
                        title: c,
                        hasPrerender: za,
                        referrer: d,
                        vParams: e,
                        callback: f,
                        ctx: h
                    }),
                    za = !1) : k.warning("Empty hit url");
                    return g
                }, "counter.hit");
                g.params = d(function(b) {
                    var c = arguments.length
                      , d = c
                      , e = [].slice.call(arguments, 0);
                    if (b) {
                        if (1 < arguments.length) {
                            if (k.isFunction(arguments[c - 1])) {
                                var f = arguments[c - 1];
                                d = c - 1
                            } else if (k.isFunction(arguments[c - 2])) {
                                f = arguments[c - 2];
                                var h = arguments[c - 1];
                                d = c - 2
                            }
                            e = [].slice.call(e, 0, d);
                            1 < e.length && (e = [k.array2Props(e)])
                        }
                        c = -1 !== k.arrayIndexOf(k.keys(e[0]), "__ymu");
                        (d = -1 !== k.arrayIndexOf(k.keys(e[0]), "__ym") && e[0].__ym.user_id) ? R.log('Set user id "' + e[0].__ym.user_id + '"') : R.log((c ? "User p" : "P") + "arams. Counter " + a + ". Params: ", e[0]);
                        P.sendParams(e[0], f, h, K.url ? N : L().href)
                    } else
                        k.warning("Wrong params");
                    return g
                }, "counter.params");
                M.addHandler("pluginInfo", function() {
                    return K
                }, this);
                M.addHandler("parentConnect", function(a, b) {
                    P.paramsQueue.push({
                        __ym: {
                            parentIframe: {
                                counterId: b.counterId,
                                hid: b.hid
                            }
                        }
                    })
                }, this);
                g.file = d(function(a, b) {
                    a ? (b = b || {},
                    P.sendFileUpload({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: K.url ? N : L().href
                    })) : k.warning("Empty file url");
                    return g
                }, "counter.file");
                g.extLink = d(function(a, b) {
                    a ? (b = b || {},
                    P.sendExtLink({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: K.url ? N : L().href
                    }, N)) : k.warning("Empty link");
                    return g
                }, "counter.extLink");
                g.notBounce = d(function(a) {
                    var b = 0;
                    a = a || {};
                    qb && bb && (b = bb - qb);
                    P.sendNotBounce(b, {
                        url: K.url ? N : L().href,
                        callback: a.callback,
                        ctx: a.ctx
                    });
                    return g
                }, "counter.notBounce");
                var ra = [];
                g.addFileExtension = d(function(a) {
                    if (!a)
                        return k.warning("Empty extension"),
                        g;
                    "string" === typeof a ? ra.push(a) : ra = ra.concat(a);
                    return g
                });
                g.clickmap = function(a) {
                    r(a);
                    return g
                }
                ;
                g.accurateTrackBounce = d(function(a) {
                    D(a);
                    return g
                });
                var ya = null;
                var Ca = !1;
                g.trackHash = d(function(a) {
                    G(a);
                    return g
                });
                var Ja = {
                    requiredEcommerceFields: ["currency", "goods"],
                    parseValidate: function(a, b) {
                        var c = this.validate(a, b), d;
                        if (!c.isValid)
                            return console && console.log(c.message),
                            !1;
                        c = {};
                        c[a] = {};
                        b.currency && (c.currencyCode = b.currency);
                        b.goods && (c[a].products = b.goods);
                        for (d in b)
                            b.hasOwnProperty(d) && -1 === k.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}),
                            c[a].actionField[d] = b[d]);
                        return {
                            __ym: {
                                ecommerce: [c]
                            }
                        }
                    },
                    validate: function(a, b) {
                        var c = !1
                          , d = "";
                        if (k.isObject(b))
                            switch (a) {
                            case "detail":
                            case "add":
                            case "remove":
                                k.isArray(b.goods) && b.goods.length ? (c = k.arrayEvery(b.goods, function(a) {
                                    return k.isObject(a) && (k.isString(a.id) || k.isNumber(a.id) || k.isString(a.name) || k.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case "purchase":
                                k.isNumber(b.id) || k.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                            }
                        else
                            d = "Ecommerce data should be an object";
                        return {
                            isValid: c,
                            message: d
                        }
                    }
                };
                g.ecommerceDetail = d(function(a, b) {
                    ja("detail", a, b);
                    return g
                }, "ecommerce.detail");
                g.ecommerceAdd = d(function(a, b) {
                    ja("add", a, b);
                    return g
                }, "ecommerce.add");
                g.ecommerceRemove = d(function(a, b) {
                    ja("remove", a, b);
                    return g
                }, "ecommerce.remove");
                g.ecommercePurchase = d(function(a, b) {
                    ja("purchase", a, b);
                    return g
                }, "ecommerce.purchase");
                g.userParams = d(function(a, b, c) {
                    k.isObject(a) ? g.params({
                        __ymu: a
                    }, b || function() {}
                    , c) : k.warning("Wrong user params");
                    return g
                }, "uparams");
                g.experiments = d(function(a, b, c) {
                    P.sendExperiments({
                        callback: b,
                        ctx: c,
                        experiments: a
                    });
                    return g
                }, "exps");
                g.id = g.setUserID = d(function(a, b, c) {
                    k.isString(a) || k.isNumber(a) ? g.params({
                        __ym: {
                            user_id: a
                        }
                    }, b || function() {}
                    , c) : k.warning("Incorrect user ID");
                    return g
                }, "id");
                var S = new O;
                g.getClientID = d(function(a) {
                    var b = S.read(va);
                    a && k.isFunction(a) && a(b);
                    return b
                }, "guid");
                g.enableAll = function() {
                    y(!0);
                    r(!0);
                    D();
                    return g
                }
                ;
                g.uploadPage = function() {}
                ;
                g.destruct = d(function() {
                    g._isDestructing = !0;
                    u.un(q, "click", C, null, {
                        name: "extLinkClick"
                    });
                    u.un(n, "load", g.replacePhones, g);
                    G(!1);
                    sa && sa.stop();
                    A.set("stopRecoder", z);
                    A.set("counter", z);
                    r(!1);
                    try {
                        delete n["yaCounter" + a],
                        delete A.get("counters")[Y],
                        delete A.get("hitParam")[Y]
                    } catch (Z) {}
                });
                g.isDestructing = function() {
                    return !!g._isDestructing
                }
                ;
                kc.init(P);
                g._performanceTiming = vb;
                if (a) {
                    var Ea = new La({
                        counter: g,
                        counterId: a,
                        globalConfig: A,
                        frameConnector: M,
                        prefsEcommerce: K.ecommerce,
                        prefsUseDataLayer: K.useDataLayer
                    });
                    if ("prerender" === q.webkitVisibilityState || "prerender" === q.visibilityState) {
                        P.sendPrerenderHit({
                            url: N,
                            vParams: b,
                            title: t.getDocumentTitle(),
                            referrer: q.referrer
                        });
                        var qa = function() {
                            "prerender" !== q.webkitVisibilityState && "prerender" !== q.visibilityState && (u.un(q, "webkitvisibilitychange,visibilitychange", qa),
                            x(!0))
                        };
                        u.on(q, "webkitvisibilitychange,visibilitychange", qa)
                    } else
                        x(!1)
                }
            }
        }, "init")()
    }
    ;
    Cb.init(pa, A);
    new Ib({
        globalConfig: A
    });
    n.Ya[pa].counters = function() {
        var a = [];
        k.forEachKey(A.get("counters"), function(b, c) {
            var e = b.split(":");
            a.push({
                id: +e[0],
                type: +e[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!n.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    }
    ;
    A.setSafe("getCounters", function() {
        var a = [];
        k.forEachKey(A.get("counters"), function(b, c) {
            var e = b.split(":");
            a.push({
                id: +e[0],
                type: +e[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!n.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    });
    n.ya_cid && n.Ya.Metrika && new n.Ya.Metrika(n.ya_cid,n.ya_params,n.ya_class);
    n.ya_cid && !n.ya_hit && (n.ya_hit = function(a, b) {
        n.Ya._metrika.counter && n.Ya._metrika.counter.reachGoal(a, b)
    }
    );
    (function() {
        function a(a) {
            try {
                delete n[a]
            } catch (m) {
                n[a] = z
            }
        }
        var b = "yandex_metrika_callback"
          , c = "yandex_metrika_callbacks";
        b = "yandex_metrika_callback2";
        c = "yandex_metrika_callbacks2";
        var e = n[b], g = n[c], k;
        "function" == typeof e && e();
        if ("object" == typeof g)
            for (e = 0; e < g.length; e++)
                if (k = g[e])
                    g[e] = null,
                    k();
        a(b);
        a(c)
    }
    )();
    n.Ya[pa].informer = function(a) {
        var b = !!n.Ya[pa]._informer;
        Ya[pa]._informer = a;
        Ya[pa]._informer.domain = "informer.yandex.ru";
        b || t.loadScript({
            src: "https://informer.yandex.ru/metrika/informer.js"
        })
    }
    ;
    u.on(q, "click", F(function(a) {
        var b = W.getTarget(a);
        if (b && ("ym-advanced-informer" === b.className || b.classList && b.classList.contains("ym-advanced-informer"))) {
            var c = b.getAttribute("data-lang");
            var e = b.getAttribute("data-cid");
            n.Ya[pa].informer({
                i: b,
                id: +e,
                lang: c
            });
            W.prevent(a)
        }
    }, "adv-inf"), null, {
        passive: !1
    })
}
)(this, this.document);
