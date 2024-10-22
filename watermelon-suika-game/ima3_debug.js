// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var m, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, da = ca(this), r = function(a, b) {
        if (b)
            a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    };
    r("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
      , ia = function(a) {
        return fa(a, a)
    }
      , fa = function(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a),
        Object.freeze(b));
        return a
    }
      , u = function(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , ka = function(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , la = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ma = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    la(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    r("Object.assign", function(a) {
        return a || ma
    });
    var na = typeof Object.create == "function" ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , oa = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if (typeof Reflect != "undefined" && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            e === void 0 && (e = c);
            e = na(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), pa;
    if (typeof Object.setPrototypeOf == "function")
        pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                a: !0
            }
              , sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ta = pa
      , w = function(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ta)
            ta(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ka = b.prototype
    }
      , ua = function() {
        this.B = !1;
        this.o = null;
        this.j = void 0;
        this.g = 1;
        this.I = this.l = 0;
        this.A = null
    }
      , wa = function(a) {
        if (a.B)
            throw new TypeError("Generator is already running");
        a.B = !0
    };
    ua.prototype.C = function(a) {
        this.j = a
    }
    ;
    var xa = function(a, b) {
        a.A = {
            Se: b,
            Yg: !0
        };
        a.g = a.l || a.I
    };
    ua.prototype.return = function(a) {
        this.A = {
            return: a
        };
        this.g = this.I
    }
    ;
    var ya = function(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
      , za = function(a) {
        a.g = 0;
        a.l = 0
    }
      , Aa = function(a) {
        a.l = 0;
        var b = a.A.Se;
        a.A = null;
        return b
    }
      , Ca = function(a) {
        this.g = new ua;
        this.j = a
    }
      , Fa = function(a, b) {
        wa(a.g);
        var c = a.g.o;
        if (c)
            return Da(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return Ea(a)
    }
      , Da = function(a, b, c, d) {
        try {
            var e = b.call(a.g.o, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.B = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.o = null,
            xa(a.g, g),
            Ea(a)
        }
        a.g.o = null;
        d.call(a.g, f);
        return Ea(a)
    }
      , Ea = function(a) {
        for (; a.g.g; )
            try {
                var b = a.j(a.g);
                if (b)
                    return a.g.B = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.j = void 0,
                xa(a.g, c)
            }
        a.g.B = !1;
        if (a.g.A) {
            b = a.g.A;
            a.g.A = null;
            if (b.Yg)
                throw b.Se;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , Ha = function(a) {
        this.next = function(b) {
            wa(a.g);
            a.g.o ? b = Da(a, a.g.o.next, b, a.g.C) : (a.g.C(b),
            b = Ea(a));
            return b
        }
        ;
        this.throw = function(b) {
            wa(a.g);
            a.g.o ? b = Da(a, a.g.o["throw"], b, a.g.C) : (xa(a.g, b),
            b = Ea(a));
            return b
        }
        ;
        this.return = function(b) {
            return Fa(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , Ia = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , Ja = function(a) {
        return Ia(new Ha(new Ca(a)))
    }
      , Ka = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    r("Reflect", function(a) {
        return a ? a : {}
    });
    r("Reflect.construct", function() {
        return oa
    });
    r("Reflect.setPrototypeOf", function(a) {
        return a ? a : ta ? function(b, c) {
            try {
                return ta(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    r("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.j = function(g) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.A()
                })
            }
            this.g.push(g)
        }
        ;
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.A = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.o(l)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0,
                    l.call(h, n))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.A)
            }
        }
        ;
        e.prototype.H = function(g) {
            if (g === this)
                this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.K(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = g != null;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.F(g) : this.B(g)
            }
        }
        ;
        e.prototype.F = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.A(k);
                return
            }
            typeof h == "function" ? this.O(h, g) : this.B(g)
        }
        ;
        e.prototype.A = function(g) {
            this.I(2, g)
        }
        ;
        e.prototype.B = function(g) {
            this.I(1, g)
        }
        ;
        e.prototype.I = function(g, h) {
            if (this.g != 0)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            this.g === 2 && this.J();
            this.L()
        }
        ;
        e.prototype.J = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.l)
                }
            }, 1)
        }
        ;
        e.prototype.D = function() {
            if (this.C)
                return !1;
            var g = da.CustomEvent
              , h = da.Event
              , k = da.dispatchEvent;
            if (typeof k === "undefined")
                return !0;
            typeof g === "function" ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        }
        ;
        e.prototype.L = function() {
            if (this.j != null) {
                for (var g = 0; g < this.j.length; ++g)
                    f.j(this.j[g]);
                this.j = null
            }
        }
        ;
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.o();
            g.Hc(h.resolve, h.reject)
        }
        ;
        e.prototype.O = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(q, t) {
                return typeof q == "function" ? function(v) {
                    try {
                        l(q(v))
                    } catch (x) {
                        n(x)
                    }
                }
                : t
            }
            var l, n, p = new e(function(q, t) {
                l = q;
                n = t
            }
            );
            this.Hc(k(g, l), k(h, n));
            return p
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.Hc = function(g, h) {
            function k() {
                switch (l.g) {
                case 1:
                    g(l.l);
                    break;
                case 2:
                    h(l.l);
                    break;
                default:
                    throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            this.j == null ? f.j(k) : this.j.push(k);
            this.C = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = u(g), n = l.next(); !n.done; n = l.next())
                    c(n.value).Hc(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = u(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function p(v) {
                    return function(x) {
                        q[v] = x;
                        t--;
                        t == 0 && l(q)
                    }
                }
                var q = []
                  , t = 0;
                do
                    q.push(void 0),
                    t++,
                    c(k.value).Hc(p(q.length - 1), n),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    r("Object.setPrototypeOf", function(a) {
        return a || ta
    });
    r("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    r("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    r("WeakMap", function(a) {
        function b() {}
        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }
        function d(k) {
            if (!la(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }
        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(n) {
                if (n instanceof b)
                    return n;
                Object.isExtensible(n) && d(n);
                return l(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , l = Object.seal({})
                  , n = new a([[k, 2], [l, 3]]);
                if (n.get(k) != 2 || n.get(l) != 3)
                    return !1;
                n.delete(k);
                n.set(l, 4);
                return !n.has(k) && n.get(l) == 4
            } catch (p) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0
          , h = function(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        };
        h.prototype.set = function(k, l) {
            if (!c(k))
                throw Error("Invalid WeakMap key");
            d(k);
            if (!la(k, f))
                throw Error("WeakMap key fail: " + k);
            k[f][this.g] = l;
            return this
        }
        ;
        h.prototype.get = function(k) {
            return c(k) && la(k, f) ? k[f][this.g] : void 0
        }
        ;
        h.prototype.has = function(k) {
            return c(k) && la(k, f) && la(k[f], this.g)
        }
        ;
        h.prototype.delete = function(k) {
            return c(k) && la(k, f) && la(k[f], this.g) ? delete k[f][this.g] : !1
        }
        ;
        return h
    });
    r("Map", function(a) {
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(u([[h, "s"]]));
                if (k.get(h) != "s" || k.size != 1 || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || k.size != 2)
                    return !1;
                var l = k.entries()
                  , n = l.next();
                if (n.done || n.value[0] != h || n.value[1] != "s")
                    return !1;
                n = l.next();
                return n.done || n.value[0].x != 4 || n.value[1] != "t" || !l.next().done ? !1 : !0
            } catch (p) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.ra ? l.ra.value = k : (l.ra = {
                next: this[1],
                fb: this[1].fb,
                head: this[1],
                key: h,
                value: k
            },
            l.list.push(l.ra),
            this[1].fb.next = l.ra,
            this[1].fb = l.ra,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ra && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.ra.fb.next = h.ra.next,
            h.ra.next.fb = h.ra.fb,
            h.ra.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].fb = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).ra
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).ra) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), n; !(n = l.next()).done; )
                n = n.value,
                h.call(k, n[1], n[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
            b.set(k, l)) : l = "p_" + k;
            var n = h[0][l];
            if (n && la(h[0], l))
                for (h = 0; h < n.length; h++) {
                    var p = n[h];
                    if (k !== k && p.key !== p.key || k === p.key)
                        return {
                            id: l,
                            list: n,
                            index: h,
                            ra: p
                        }
                }
            return {
                id: l,
                list: n,
                index: -1,
                ra: void 0
            }
        }
          , e = function(h, k) {
            var l = h[1];
            return ea(function() {
                if (l) {
                    for (; l.head != h[1]; )
                        l = l.fb;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.fb = h.next = h.head = h
        }
          , g = 0;
        return c
    });
    r("Set", function(a) {
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(u([c]));
                if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                    x: 4
                }) != d || d.size != 2)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.g.entries()
        }
        ;
        b.prototype.values = function() {
            return this.g.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    r("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                la(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    var La = function(a, b, c) {
        if (a == null)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return La(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                la(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    r("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    r("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    r("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    r("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    r("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "startsWith");
            b += "";
            var e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    r("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "endsWith");
            b += "";
            c === void 0 && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0; )
                if (d[--c] != b[--e])
                    return !1;
            return e <= 0
        }
    });
    var Ma = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    r("globalThis", function(a) {
        return a || da
    });
    r("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
                return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    });
    r("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b))
                throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d)
                    throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    r("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = La(this, null, "repeat");
            if (b < 0 || b > 1342177279)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    var Na = function(a, b) {
        a = a !== void 0 ? String(a) : " ";
        return b > 0 && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
    };
    r("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, null, "padStart");
            return Na(c, b - d.length) + d
        }
    });
    r("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, null, "padStart");
            return d + Na(c, b - d.length)
        }
    });
    r("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return b === 0 || isNaN(b) ? b : b > 0 ? 1 : -1
        }
    });
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var Oa = Oa || {}
      , y = this || self
      , z = function(a, b, c) {
        a = a.split(".");
        c = c || y;
        a[0]in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
      , Ra = function(a, b) {
        var c = Pa("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }
      , Pa = function(a, b) {
        a = a.split(".");
        b = b || y;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            b == null)
                return null;
        return b
    }
      , Sa = function(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
      , Ta = function(a) {
        var b = Sa(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
      , Va = function(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
      , Za = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Wa) && a[Wa] || (a[Wa] = ++Ya)
    }
      , $a = function(a) {
        a !== null && "removeAttribute"in a && a.removeAttribute(Wa);
        try {
            delete a[Wa]
        } catch (b) {}
    }
      , Wa = "closure_uid_" + (Math.random() * 1E9 >>> 0)
      , Ya = 0
      , ab = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , cb = function(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , db = function(a, b, c) {
        db = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ab : cb;
        return db.apply(null, arguments)
    }
      , eb = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , fb = function() {
        return Date.now()
    }
      , gb = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ka = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Jj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    function ib(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ib);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    gb(ib, Error);
    ib.prototype.name = "CustomError";
    var jb;
    function kb(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        ib.call(this, c + a[d])
    }
    gb(kb, ib);
    kb.prototype.name = "AssertionError";
    function lb(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else
            a && (e += ": " + a,
            f = b);
        throw new kb("" + e,f || []);
    }
    var A = function(a, b, c) {
        a || lb("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , pb = function(a, b, c) {
        a == null && lb("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , qb = function(a, b) {
        throw new kb("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
    }
      , rb = function(a, b, c) {
        typeof a !== "number" && lb("Expected number but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , sb = function(a, b, c) {
        typeof a !== "string" && lb("Expected string but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , tb = function(a, b, c) {
        typeof a !== "function" && lb("Expected function but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , vb = function(a, b, c) {
        Va(a) || lb("Expected object but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
      , wb = function(a, b, c) {
        Array.isArray(a) || lb("Expected array but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , xb = function(a, b, c) {
        typeof a !== "boolean" && lb("Expected boolean but got %s: %s.", [Sa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
      , zb = function(a, b, c, d) {
        a instanceof b || lb("Expected instanceof %s but got %s.", [yb(b), yb(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    };
    function yb(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a
    }
    ;var Bb, Cb = typeof String.prototype.isWellFormed === "function", Db = typeof TextEncoder !== "undefined";
    function Eb(a) {
        var b = !0;
        b = b === void 0 ? !1 : b;
        sb(a);
        if (Db) {
            if (b && (Cb ? !a.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))
                throw Error("Found an unpaired surrogate");
            a = (Bb || (Bb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128)
                    d[c++] = f;
                else {
                    if (f < 2048)
                        d[c++] = f >> 6 | 192;
                    else {
                        A(f < 65536);
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (g >= 56320 && g <= 57343) {
                                    f = (f - 55296) * 1024 + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else
                                    e--
                            }
                            if (b)
                                throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    }
    ;function Fb(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var Gb = function(a, b) {
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    }
      , Hb = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , Ib = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Kb = function(a, b) {
        return a.indexOf(b) != -1
    }
      , Lb = function(a, b) {
        return Kb(a.toLowerCase(), b.toLowerCase())
    }
      , Nb = function(a, b) {
        var c = 0;
        a = Ib(String(a)).split(".");
        b = Ib(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (f[0].length == 0 && g[0].length == 0)
                    break;
                c = Mb(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Mb(f[2].length == 0, g[2].length == 0) || Mb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (c == 0)
        }
        return c
    }
      , Mb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ob = Ra(610401301, !1)
      , Pb = Ra(660014094, !0);
    function Qb() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Rb, Sb = y.navigator;
    Rb = Sb ? Sb.userAgentData || null : null;
    function Tb(a) {
        return Ob ? Rb ? Rb.brands.some(function(b) {
            return (b = b.brand) && Kb(b, a)
        }) : !1 : !1
    }
    function B(a) {
        return Kb(Qb(), a)
    }
    ;function Ub() {
        return Ob ? !!Rb && Rb.brands.length > 0 : !1
    }
    function Vb() {
        return Ub() ? !1 : B("Opera")
    }
    function Wb() {
        return Ub() ? !1 : B("Trident") || B("MSIE")
    }
    function Xb() {
        return B("Firefox") || B("FxiOS")
    }
    function Yb() {
        return B("Safari") && !(Zb() || (Ub() ? 0 : B("Coast")) || Vb() || (Ub() ? 0 : B("Edge")) || (Ub() ? Tb("Microsoft Edge") : B("Edg/")) || (Ub() ? Tb("Opera") : B("OPR")) || Xb() || B("Silk") || B("Android"))
    }
    function Zb() {
        return Ub() ? Tb("Chromium") : (B("Chrome") || B("CriOS")) && !(Ub() ? 0 : B("Edge")) || B("Silk")
    }
    ;function $b() {
        return Ob && Rb && Rb.platform ? Rb.platform === "Android" : B("Android")
    }
    function ac() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    }
    ;var bc = function(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , cc = function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    };
    function dc(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var ec = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , fc = function(a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , gc = function(a, b, c) {
        var d = c;
        cc(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
      , hc = function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
      , ic = function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a))
                return !1;
        return !0
    };
    function jc(a, b) {
        b = kc(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }
    function kc(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function lc(a, b) {
        b = mc(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }
    function mc(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
            if (d in c && b.call(void 0, c[d], d, a))
                return d;
        return -1
    }
    function nc(a, b) {
        return bc(a, b) >= 0
    }
    function oc(a, b) {
        b = bc(a, b);
        var c;
        (c = b >= 0) && pc(a, b);
        return c
    }
    function pc(a, b) {
        A(a.length != null);
        return Array.prototype.splice.call(a, b, 1).length == 1
    }
    function qc(a, b) {
        var c = 0;
        dc(a, function(d, e) {
            b.call(void 0, d, e, a) && pc(a, e) && c++
        })
    }
    function rc(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function sc(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function tc(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = Va(e) ? "o" + Za(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    function uc(a, b) {
        a.sort(b || vc)
    }
    function vc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function wc(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = "";
        return b
    }
    ;var xc = function(a) {
        xc[" "](a);
        return a
    };
    xc[" "] = function() {}
    ;
    var yc = function(a, b) {
        try {
            return xc(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , Ac = function(a) {
        var b = zc;
        return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
    };
    var Bc = Vb(), Cc = Wb(), Dc = B("Edge"), Ec = B("Gecko") && !(Lb(Qb(), "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), Fc = Lb(Qb(), "WebKit") && !B("Edge"), Gc = Ob && Rb && Rb.platform ? Rb.platform === "macOS" : B("Macintosh"), Hc = $b(), Ic = ac(), Jc = B("iPad"), Kc = B("iPod"), Mc = ac() || B("iPad") || B("iPod"), Nc;
    a: {
        var Oc = ""
          , Pc = function() {
            var a = Qb();
            if (Ec)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Dc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Cc)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Fc)
                return /WebKit\/(\S+)/.exec(a);
            if (Bc)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Pc && (Oc = Pc ? Pc[1] : "");
        if (Cc) {
            var Qc, Rc = y.document;
            Qc = Rc ? Rc.documentMode : void 0;
            if (Qc != null && Qc > parseFloat(Oc)) {
                Nc = String(Qc);
                break a
            }
        }
        Nc = Oc
    }
    var Sc = Nc
      , zc = {}
      , Tc = function() {
        return Ac(function() {
            return Nb(Sc, 8) >= 0
        })
    };
    var Uc = Xb()
      , Vc = B("Android") && !(Zb() || Xb() || Vb() || B("Silk"))
      , Wc = Zb();
    Yb();
    var Xc = {}
      , Yc = null
      , $c = function(a, b) {
        A(Ta(a), "encodeByteArray takes an array as a parameter");
        b === void 0 && (b = 0);
        Zc();
        b = Xc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = "" + l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            l = a[e + 1],
            k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }
      , bd = function(a) {
        var b = [];
        ad(a, function(c) {
            b.push(c)
        });
        return b
    }
      , cd = function(a) {
        var b = a.length
          , c = b * 3 / 4;
        c % 3 ? c = Math.floor(c) : Kb("=.", a[b - 1]) && (c = Kb("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c)
          , e = 0;
        ad(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }
      , ad = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , n = Yc[l];
                if (n != null)
                    return n;
                if (!Hb(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Zc();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (h === 64 && e === -1)
                break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2),
            h != 64 && b(g << 6 & 192 | h))
        }
    }
      , Zc = function() {
        if (!Yc) {
            Yc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                Xc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e]
                      , g = Yc[f];
                    g === void 0 ? Yc[f] = e : A(g === e)
                }
            }
        }
    };
    var gd = typeof Uint8Array !== "undefined"
      , hd = !Cc && typeof btoa === "function";
    function id(a) {
        if (!hd)
            return $c(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d; )
            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var jd = /[-_.]/g
      , kd = {
        "-": "+",
        _: "/",
        ".": "="
    };
    function ld(a) {
        return kd[a] || ""
    }
    var md = {};
    function nd(a) {
        if (a !== md)
            throw Error("illegal external caller");
    }
    var pd = function(a, b) {
        nd(b);
        this.g = a;
        if (a != null && a.length === 0)
            throw Error("ByteString should be constructed with non-empty values");
        this.dontPassByteStringToStructuredClone = od
    };
    pd.prototype.isEmpty = function() {
        return this.g == null
    }
    ;
    function od() {}
    ;var qd = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    function rd(a) {
        a = Error(a);
        qd(a, "incident");
        Fb(a)
    }
    function sd(a) {
        a = Error(a);
        qd(a, "warning");
        return a
    }
    ;function td() {
        return typeof BigInt === "function"
    }
    ;function ud(a) {
        return Array.prototype.slice.call(a)
    }
    ;var vd = typeof Symbol === "function" && typeof Symbol() === "symbol";
    function wd(a, b) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol(a) : b
    }
    var xd = wd("INTERNAL_ARRAY_STATE")
      , yd = wd("defaultInstance", "0di")
      , zd = wd("oneofCases", "1oa")
      , Ad = wd("STRING_TYPE_DOWNGRADES", "0dg");
    A(Math.round(Math.log2(Math.max.apply(Math, ka(Object.values({
        Wi: 1,
        Ui: 2,
        Ti: 4,
        hj: 8,
        gj: 16,
        cj: 32,
        bi: 64,
        vj: 128,
        Ci: 256,
        Bi: 512,
        Vi: 1024,
        ri: 2048,
        pj: 4096,
        ti: 8192,
        ei: 16384
    }))))) === 14);
    function Bd(a) {
        A((a & 33554431) == a)
    }
    var Cd = vd ? function(a, b) {
        Bd(b);
        wb(a, "state is only maintained on arrays.");
        a[xd] |= b
    }
    : function(a, b) {
        Bd(b);
        wb(a, "state is only maintained on arrays.");
        a.Fa !== void 0 ? a.Fa |= b : Object.defineProperties(a, {
            Fa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
      , Dd = vd ? function(a, b) {
        Bd(b);
        wb(a, "state is only maintained on arrays.");
        a[xd] &= ~b
    }
    : function(a, b) {
        Bd(b);
        wb(a, "state is only maintained on arrays.");
        a.Fa !== void 0 && (a.Fa &= ~b)
    }
      , Ed = Object.getOwnPropertyDescriptor(Array.prototype, "eh");
    Object.defineProperties(Array.prototype, {
        eh: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Fd(this)
                  , c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(4096, "STRING_FORMATTED");
                a(8192, "GBIGINT_FORMATTED");
                a(8192, "BINARY");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                a(2048, "FROZEN_ARRAY");
                var d = b >> 15 & 1023 || 536870912;
                d !== 536870912 && c.push("pivot: " + d);
                d = c.join(",");
                return Ed ? Ed.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Fd = vd ? function(a) {
        wb(a, "state is only maintained on arrays.");
        return a[xd] | 0
    }
    : function(a) {
        wb(a, "state is only maintained on arrays.");
        return a.Fa | 0
    }
    ;
    function Gd(a, b) {
        A(b & 64, "state for messages must be constructed");
        A((b & 5) === 0, "state for messages should not contain repeated field state");
        var c = b >> 15 & 1023 || 536870912
          , d = a.length;
        A(c + Hd(b) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && A(typeof a[0] === "string", "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        A((a != null && typeof a === "object" && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Id = vd ? function(a) {
        wb(a, "state is only maintained on arrays.");
        var b = a[xd];
        Gd(a, b);
        return b
    }
    : function(a) {
        wb(a, "state is only maintained on arrays.");
        var b = a.Fa;
        Gd(a, b);
        return b
    }
      , Jd = vd ? function(a, b) {
        wb(a, "state is only maintained on arrays.");
        Bd(b);
        a[xd] = b
    }
    : function(a, b) {
        wb(a, "state is only maintained on arrays.");
        Bd(b);
        a.Fa !== void 0 ? a.Fa = b : Object.defineProperties(a, {
            Fa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    ;
    function Kd(a) {
        return !!(Fd(a) & 2)
    }
    function Ld(a) {
        Cd(a, 34);
        return a
    }
    function Md(a) {
        Cd(a, 32);
        return a
    }
    function Nd(a, b) {
        Jd(b, (a | 0) & -14591)
    }
    function Od(a, b) {
        Jd(b, (a | 34) & -14557)
    }
    function Pd(a, b) {
        rb(b);
        A(b > 0 && b <= 1023 || 536870912 === b);
        return a & -33521665 | (b & 1023) << 15
    }
    function Hd(a) {
        return +!!(a & 512) - 1
    }
    ;var Qd, Rd = {};
    function Sd(a) {
        var b = a.j === Rd;
        A(!Qd || b === a instanceof Qd);
        return b
    }
    var Td = {};
    function Ud(a) {
        var b = !(!a || typeof a !== "object" || a.fh !== Td);
        A(b === a instanceof Map);
        return b && zb(a, Map).size === 0
    }
    function Vd(a, b) {
        rb(a);
        A(a > 0);
        A(b === 0 || b === -1);
        return a + b
    }
    function Wd(a, b) {
        rb(a);
        A(a >= 0);
        A(b === 0 || b === -1);
        return a - b
    }
    function Xd(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }
    function Yd(a) {
        return !Array.isArray(a) || a.length ? !1 : Fd(a) & 1 ? !0 : !1
    }
    var Zd, $d = [];
    Jd($d, 55);
    Zd = Object.freeze($d);
    function ae(a) {
        if (a & 2)
            throw Error("Cannot mutate an immutable Message");
    }
    var be = typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined";
    function ce() {}
    var de = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.j = b;
        this.o = c
    };
    de.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.j ? this.j.call(this.o, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    }
    ;
    de.prototype[Symbol.iterator] = function() {
        return new de(this.g,this.j,this.o)
    }
    ;
    var ee;
    function fe(a, b) {
        wb(a);
        if (b) {
            ee || (ee = Symbol("unknownBinaryFields"));
            var c = a[ee];
            c ? c.push(b) : a[ee] = [b]
        }
    }
    function ge(a, b) {
        wb(a);
        wb(b);
        (b = ee ? wb(b)[ee] : void 0) && (a[ee] = ud(b))
    }
    function he(a, b) {
        var c = Fd(wb(a));
        b || A(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && Sd(g) && (Kd(g.W) ? e = !0 : d = !0)
            });
            f && A(!e && !d);
            c && A(!f && !d);
            b && A(!f && !e)
        }
        ie(a)
    }
    function ie(a) {
        var b = Fd(a)
          , c = b & 4
          , d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        A(c && d <= 1 || !c && d === 0, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Fd(a))
            for (b = 0; b < a.length; b++)
                typeof a[b] !== "string" && qb("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var je = Object.freeze({})
      , ke = Object.freeze({})
      , le = Object.freeze({});
    function me(a, b) {
        b = b === void 0 ? new Set : b;
        if (b.has(a))
            return "(Recursive reference)";
        switch (typeof a) {
        case "object":
            if (a) {
                var c = Object.getPrototypeOf(a);
                switch (c) {
                case Map.prototype:
                case Set.prototype:
                case Array.prototype:
                    b.add(a);
                    var d = "[" + Array.from(a, function(e) {
                        return me(e, b)
                    }).join(", ") + "]";
                    b.delete(a);
                    c !== Array.prototype && (d = ne(c.constructor) + "(" + d + ")");
                    return d;
                case Object.prototype:
                    return b.add(a),
                    c = "{" + Object.entries(a).map(function(e) {
                        var f = u(e);
                        e = f.next().value;
                        f = f.next().value;
                        return e + ": " + me(f, b)
                    }).join(", ") + "}",
                    b.delete(a),
                    c;
                default:
                    return d = "Object",
                    c && c.constructor && (d = ne(c.constructor)),
                    typeof a.toString === "function" && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                }
            }
            break;
        case "function":
            return "function " + ne(a);
        case "number":
            if (!Number.isFinite(a))
                return String(a);
            break;
        case "bigint":
            return a.toString(10) + "n";
        case "symbol":
            return a.toString()
        }
        return JSON.stringify(a)
    }
    function ne(a) {
        var b = a.displayName;
        return b && typeof b === "string" || (b = a.name) && typeof b === "string" ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
    }
    ;function oe(a, b) {
        var c = pe
          , d = [];
        qe(b, a, d) || re.apply(null, [void 0, c, "Guard " + b.ec().trim() + " failed:"].concat(ka(d.reverse())))
    }
    function se(a, b) {
        oe(a, b);
        return a
    }
    function te(a, b) {
        var c = pe;
        a || re("Guard truthy failed:", b || c || "Expected truthy, got " + me(a))
    }
    function ue(a) {
        return se(a, ve)
    }
    function we(a, b) {
        a.Tj = !0;
        a.ec = typeof b === "function" ? b : function() {
            return b
        }
        ;
        return a
    }
    function qe(a, b, c, d) {
        var e = a(b, c);
        e || xe(c, function() {
            var f = d ? (typeof d === "function" ? d() : d).trim() : "";
            f.length > 0 && (f += ": ");
            return f + "Expected " + a.ec().trim() + ", got " + me(b)
        });
        return e
    }
    function xe(a, b) {
        a == null || a.push((typeof b === "function" ? b() : b).trim())
    }
    var pe = void 0;
    function ye(a) {
        return typeof a === "function" ? a() : a
    }
    function re() {
        throw Error(Ka.apply(0, arguments).map(ye).filter(Boolean).join("\n").trim().replace(/:$/, ""));
    }
    var ve = we(function(a) {
        return a !== null && a !== void 0
    }, "exists");
    var ze = we(function(a) {
        return typeof a === "number"
    }, "number")
      , Ae = we(function(a) {
        return typeof a === "string"
    }, "string")
      , Be = we(function(a) {
        return typeof a === "boolean"
    }, "boolean")
      , Ce = we(function(a) {
        return typeof a === "bigint"
    }, "bigint")
      , De = we(function(a) {
        return !!a && (typeof a === "object" || typeof a === "function")
    }, "object");
    function Ee(a) {
        return we(function(b) {
            return b instanceof a
        }, function() {
            return ne(a)
        })
    }
    function Fe(a) {
        a.Zg = !0;
        return a
    }
    var Ge = we(function(a) {
        return Array.isArray(a)
    }, "Array<unknown>");
    function He() {
        return we(function(a, b) {
            return qe(Ge, a, b) ? a.every(function(c, d) {
                return qe(Ae, c, b, "At index " + d)
            }) : !1
        }, function() {
            return "Array<" + Ae.ec().trim() + ">"
        })
    }
    function Ie() {
        var a = Ka.apply(0, arguments);
        return we(function(b) {
            return a.some(function(c) {
                return c(b)
            })
        }, function() {
            return "" + a.map(function(b) {
                return b.ec().trim()
            }).join(" | ")
        })
    }
    ;var Je = typeof y.BigInt === "function" && typeof y.BigInt(0) === "bigint";
    var Ke = function(a) {
        this.g = a
    };
    Ke.prototype.toString = function(a) {
        return this.g.toString(a)
    }
    ;
    Ke.prototype.valueOf = function() {
        throw Error("Convert JSBI instances to native numbers using `toNumber`.");
    }
    ;
    Ke.prototype[Symbol.toPrimitive] = function() {
        return this.g
    }
    ;
    /*

 Copyright 2018 Google Inc
 SPDX-License-Identifier: Apache-2.0
*/
    var Le = function(a, b) {
        var c = oa(Array, [a], this.constructor);
        c.sign = b;
        Object.setPrototypeOf(c, Le.prototype);
        if (a > Me)
            throw new RangeError("Maximum BigInt size exceeded");
        return c
    };
    w(Le, Array);
    Le.prototype.toString = function(a) {
        a = a === void 0 ? 10 : a;
        if (a < 2 || a > 36)
            throw new RangeError("toString() radix argument must be between 2 and 36");
        if (this.length === 0)
            var b = "0";
        else if ((a & a - 1) === 0) {
            b = this.length;
            var c = a - 1;
            c = (c >>> 1 & 85) + (c & 85);
            c = (c >>> 2 & 51) + (c & 51);
            c = (c >>> 4 & 15) + (c & 15);
            --a;
            var d = this.ca(b - 1)
              , e = (b * 30 - Ne(d) + c - 1) / c | 0;
            this.sign && e++;
            if (e > 268435456)
                throw Error("string too long");
            var f = Array(e);
            --e;
            for (var g = 0, h = 0, k = 0; k < b - 1; k++) {
                var l = this.ca(k);
                g = (g | l << h) & a;
                f[e--] = Oe[g];
                h = c - h;
                g = l >>> h;
                for (h = 30 - h; h >= c; )
                    f[e--] = Oe[g & a],
                    g >>>= c,
                    h -= c
            }
            f[e--] = Oe[(g | d << h) & a];
            for (g = d >>> c - h; g !== 0; )
                f[e--] = Oe[g & a],
                g >>>= c;
            this.sign && (f[e--] = "-");
            if (e !== -1)
                throw Error("implementation bug");
            b = f.join("")
        } else
            b = Pe(this, a, !1);
        return b
    }
    ;
    Le.prototype.valueOf = function() {
        throw Error("Convert JSBI instances to native numbers using `toNumber`.");
    }
    ;
    var Ue = function(a, b) {
        if (b.sign)
            throw new RangeError("Exponent must be positive");
        if (b.length === 0)
            return Qe(1);
        if (a.length === 0)
            return a;
        if (a.length === 1 && a.ca(0) === 1)
            return a.sign && (b.ca(0) & 1) === 0 && a.length !== 0 && (b = a.gg(),
            b.sign = !a.sign,
            a = b),
            a;
        if (b.length > 1)
            throw new RangeError("BigInt too big");
        b = b.Bc(0);
        if (b === 1)
            return a;
        if (b >= Re)
            throw new RangeError("BigInt too big");
        if (a.length === 1 && a.ca(0) === 2) {
            var c = 1 + (b / 30 | 0);
            a = new Le(c,a.sign && (b & 1) !== 0);
            a.Ub();
            a.ha(c - 1, 1 << b % 30);
            return a
        }
        c = null;
        var d = a;
        (b & 1) !== 0 && (c = a);
        for (b >>= 1; b !== 0; b >>= 1)
            d = Te(d, d),
            (b & 1) !== 0 && (c = c === null ? d : Te(c, d));
        return c
    }
      , Te = function(a, b) {
        if (a.length === 0)
            return a;
        if (b.length === 0)
            return b;
        var c = a.length + b.length;
        a.Fe() + b.Fe() >= 30 && c--;
        c = new Le(c,a.sign !== b.sign);
        c.Ub();
        for (var d = 0; d < a.length; d++) {
            var e = b
              , f = a.ca(d)
              , g = c
              , h = d;
            if (f !== 0) {
                for (var k = f & 32767, l = f >>> 15, n = f = 0, p = 0; p < e.length; p++,
                h++) {
                    var q = g.ca(h)
                      , t = e.ca(p)
                      , v = t & 32767
                      , x = t >>> 15;
                    t = Ve(v, l);
                    var D = Ve(x, k);
                    x = Ve(x, l);
                    q += n + Ve(v, k) + f;
                    f = q >>> 30;
                    q &= 1073741823;
                    q += ((t & 32767) << 15) + ((D & 32767) << 15);
                    f += q >>> 30;
                    n = x + (t >>> 15) + (D >>> 15);
                    g.ha(h, q & 1073741823)
                }
                for (; f !== 0 || n !== 0; h++)
                    e = g.ca(h),
                    e += f + n,
                    n = 0,
                    f = e >>> 30,
                    g.ha(h, e & 1073741823)
            }
        }
        return c.Bd()
    }
      , Qe = function(a) {
        var b = new Le(1,!1);
        b.ha(0, a);
        return b
    };
    Le.prototype.gg = function() {
        for (var a = new Le(this.length,this.sign), b = 0; b < this.length; b++)
            a[b] = this[b];
        return a
    }
    ;
    Le.prototype.Bd = function() {
        for (var a = this.length, b = this[a - 1]; b === 0; )
            a--,
            b = this[a - 1],
            this.pop();
        a === 0 && (this.sign = !1);
        return this
    }
    ;
    Le.prototype.Ub = function() {
        for (var a = 0; a < this.length; a++)
            this[a] = 0
    }
    ;
    var Pe = function(a, b, c) {
        var d = a.length;
        if (d === 0)
            return "";
        if (d === 1)
            return b = a.Bc(0).toString(b),
            c === !1 && a.sign && (b = "-" + b),
            b;
        var e = We[b] - 1;
        d = (((d * 30 - Ne(a.ca(d - 1))) * Xe + (e - 1)) / e | 0) + 1 >> 1;
        var f = Ue(Qe(b), Qe(d));
        e = f.Bc(0);
        if (f.length === 1 && e <= 32767) {
            f = new Le(a.length,!1);
            f.Ub();
            for (var g = 0, h = a.length * 2 - 1; h >= 0; h--)
                g = g << 15 | a.La(h),
                f.zd(h, g / e | 0),
                g = g % e | 0;
            e = g.toString(b)
        } else {
            h = f.Ge();
            g = f.length;
            var k = a.Ge() - h;
            var l = new Le(k + 2 >>> 1,!1);
            l.Ub();
            var n = new Le(h + 2 >>> 1,!1);
            n.Ub();
            var p = Ne(f.La(h - 1)) - 15;
            p > 0 && (f = Ye(f, p, 0));
            e = Ye(a, p, 1);
            for (var q = f.La(h - 1), t = 0; k >= 0; k--) {
                var v = 32767
                  , x = e.La(k + h);
                if (x !== q) {
                    x = (x << 15 | e.La(k + h - 1)) >>> 0;
                    v = x / q | 0;
                    x = x % q | 0;
                    for (var D = f.La(h - 2), M = e.La(k + h - 2); Ve(v, D) >>> 0 > (x << 16 | M) >>> 0 && !(v--,
                    x += q,
                    x > 32767); )
                        ;
                }
                x = f;
                D = v;
                M = g;
                for (var Q = 0, W = 0, Ba = 0; Ba < M; Ba++) {
                    var Y = x.ca(Ba)
                      , Xa = Ve(Y >>> 15, D);
                    Y = Ve(Y & 32767, D) + ((Xa & 32767) << 15) + W + Q;
                    Q = Y >>> 30;
                    W = Xa >>> 15;
                    n.ha(Ba, Y & 1073741823)
                }
                if (n.length > M)
                    for (n.ha(M++, Q + W); M < n.length; )
                        n.ha(M++, 0);
                else if (Q + W !== 0)
                    throw Error("implementation bug");
                x = e.jg(n, k, h + 1);
                x !== 0 && (x = e.hg(f, k, h),
                e.zd(k + h, e.La(k + h) + x & 32767),
                v--);
                k & 1 ? t = v << 15 : l.ha(k >>> 1, t | v)
            }
            e.ig(p);
            f = l;
            e = e.Bd();
            e = Pe(e, b, !0)
        }
        f.Bd();
        for (b = Pe(f, b, !0); e.length < d; )
            e = "0" + e;
        c === !1 && a.sign && (b = "-" + b);
        return b + e
    };
    m = Le.prototype;
    m.Fe = function() {
        return Ne(this.ca(this.length - 1))
    }
    ;
    m.Ej = function(a, b, c) {
        c > this.length && (c = this.length);
        var d = a & 32767;
        a >>>= 15;
        for (var e = 0, f = 0; f < c; f++) {
            var g = this.ca(f)
              , h = g & 32767
              , k = g >>> 15;
            g = Ve(h, a);
            var l = Ve(k, d);
            k = Ve(k, a);
            h = b + Ve(h, d) + e;
            e = h >>> 30;
            h &= 1073741823;
            h += ((g & 32767) << 15) + ((l & 32767) << 15);
            e += h >>> 30;
            b = k + (g >>> 15) + (l >>> 15);
            this.ha(f, h & 1073741823)
        }
        if (e !== 0 || b !== 0)
            throw Error("implementation bug");
    }
    ;
    m.hg = function(a, b, c) {
        for (var d = 0, e = 0; e < c; e++) {
            var f = this.La(b + e) + a.La(e) + d;
            d = f >>> 15;
            this.zd(b + e, f & 32767)
        }
        return d
    }
    ;
    m.jg = function(a, b, c) {
        var d = c - 1 >>> 1
          , e = 0;
        if (b & 1) {
            b >>= 1;
            for (var f = this.ca(b), g = f & 32767, h = 0; h < d; h++) {
                var k = a.ca(h);
                f = (f >>> 15) - (k & 32767) - e;
                e = f >>> 15 & 1;
                this.ha(b + h, (f & 32767) << 15 | g & 32767);
                f = this.ca(b + h + 1);
                g = (f & 32767) - (k >>> 15) - e;
                e = g >>> 15 & 1
            }
            d = a.ca(h);
            f = (f >>> 15) - (d & 32767) - e;
            e = f >>> 15 & 1;
            this.ha(b + h, (f & 32767) << 15 | g & 32767);
            if (b + h + 1 >= this.length)
                throw new RangeError("out of bounds");
            (c & 1) === 0 && (f = this.ca(b + h + 1),
            g = (f & 32767) - (d >>> 15) - e,
            e = g >>> 15 & 1,
            this.ha(b + a.length, f & 1073709056 | g & 32767))
        } else {
            b >>= 1;
            for (g = 0; g < a.length - 1; g++)
                d = this.ca(b + g),
                f = a.ca(g),
                h = (d & 32767) - (f & 32767) - e,
                e = h >>> 15 & 1,
                d = (d >>> 15) - (f >>> 15) - e,
                e = d >>> 15 & 1,
                this.ha(b + g, (d & 32767) << 15 | h & 32767);
            h = this.ca(b + g);
            a = a.ca(g);
            d = (h & 32767) - (a & 32767) - e;
            e = d >>> 15 & 1;
            f = 0;
            (c & 1) === 0 && (f = (h >>> 15) - (a >>> 15) - e,
            e = f >>> 15 & 1);
            this.ha(b + g, (f & 32767) << 15 | d & 32767)
        }
        return e
    }
    ;
    m.ig = function(a) {
        if (a !== 0) {
            for (var b = this.ca(0) >>> a, c = this.length - 1, d = 0; d < c; d++) {
                var e = this.ca(d + 1);
                this.ha(d, e << 30 - a & 1073741823 | b);
                b = e >>> a
            }
            this.ha(c, b)
        }
    }
    ;
    var Ye = function(a, b, c) {
        var d = a.length
          , e = new Le(d + c,!1);
        if (b === 0) {
            for (b = 0; b < d; b++)
                e.ha(b, a.ca(b));
            c > 0 && e.ha(d, 0);
            return e
        }
        for (var f = 0, g = 0; g < d; g++) {
            var h = a.ca(g);
            e.ha(g, h << b & 1073741823 | f);
            f = h >>> 30 - b
        }
        c > 0 && e.ha(d, f);
        return e
    };
    m = Le.prototype;
    m.ca = function(a) {
        return this[a]
    }
    ;
    m.Bc = function(a) {
        return this[a] >>> 0
    }
    ;
    m.ha = function(a, b) {
        this[a] = b | 0
    }
    ;
    m.Fj = function(a, b) {
        this[a] = b | 0
    }
    ;
    m.Ge = function() {
        var a = this.length;
        return this.Bc(a - 1) <= 32767 ? a * 2 - 1 : a * 2
    }
    ;
    m.La = function(a) {
        return this[a >>> 1] >>> (a & 1) * 15 & 32767
    }
    ;
    m.zd = function(a, b) {
        var c = a >>> 1
          , d = this.ca(c);
        this.ha(c, a & 1 ? d & 32767 | b << 15 : d & 1073709056 | b & 32767)
    }
    ;
    var Me = 33554432
      , Re = Me << 5
      , We = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166]
      , Xe = 32
      , Oe = "0123456789abcdefghijklmnopqrstuvwxyz".split("")
      , Ne = Math.clz32 ? function(a) {
        return Math.clz32(a) - 2
    }
    : function(a) {
        return a === 0 ? 30 : 29 - (Math.log(a >>> 0) / Math.LN2 | 0) | 0
    }
      , Ve = Math.imul || function(a, b) {
        return a * b | 0
    }
    ;
    var Ze = Ee(Le)
      , $e = Ee(Ke);
    var af = Je ? $e : Ze;
    function bf(a) {
        var b = a;
        if (Ae(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
                throw Error("Invalid string for toGbigint: " + b);
        } else if (ze(b) && !Number.isSafeInteger(b))
            throw Error("Invalid number for toGbigint: " + b);
        if (Je) {
            if (af(a)) {
                if (!Je)
                    throw Error("This platform does not use BigInt.");
                a = se(a, $e).g
            } else
                Ce(a) || (oe(a, Ie(Ae, Be, ze)),
                a = BigInt(a));
            b = a % BigInt(2);
            var c = BigInt;
            if (Je) {
                var d = typeof Window === "function" && globalThis.top instanceof Window ? globalThis.top : globalThis;
                d.gbigintUseStrInDebugToggleVal !== 0 && d.gbigintUseStrInDebugToggleVal !== 1 && (d.gbigintUseStrInDebugToggleVal = Math.round(Math.random()));
                d = d.gbigintUseStrInDebugToggleVal
            } else
                d = 1;
            return b === c(d) ? a.toString() : a
        }
        return a = Be(a) ? a ? "1" : "0" : Ae(a) ? a.trim() || "0" : String(a)
    }
    var hf = we(function(a) {
        if (Je)
            return oe(cf, Ce),
            oe(df, Ce),
            a = BigInt(a),
            a >= cf && a <= df;
        a = se(a, Ae);
        return a[0] === "-" ? ef(a, ff) : ef(a, gf)
    }, "isSafeInt52")
      , ff = Number.MIN_SAFE_INTEGER.toString()
      , cf = Je ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
      , gf = Number.MAX_SAFE_INTEGER.toString()
      , df = Je ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    function ef(a, b) {
        if (a.length > b.length)
            return !1;
        if (a.length < b.length || a === b)
            return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c]
              , e = b[c];
            if (d > e)
                return !1;
            if (d < e)
                return !0
        }
        c = pe;
        re("Assertion fail:", "isInRange weird case. Value was: " + a + ". Boundary was: " + b + "." || c)
    }
    ;var jf = 0, kf = 0, lf;
    function mf(a) {
        var b = a >>> 0;
        jf = b;
        kf = (a - b) / 4294967296 >>> 0
    }
    function nf(a) {
        if (a < 0) {
            mf(0 - a);
            var b = u(of(jf, kf));
            a = b.next().value;
            b = b.next().value;
            jf = a >>> 0;
            kf = b >>> 0
        } else
            mf(a)
    }
    function pf(a) {
        A(a <= 8);
        return lf || (lf = new DataView(new ArrayBuffer(8)))
    }
    function qf(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151)
            var c = "" + (4294967296 * b + a);
        else
            td() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0,
            a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0,
            c %= 1E7),
            A(b),
            c = b + rf(c) + rf(a));
        return c
    }
    function rf(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function sf() {
        var a = jf
          , b = kf;
        b & 2147483648 ? td() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = u(of(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + qf(a, b)) : a = qf(a, b);
        return a
    }
    function tf(a) {
        A(a.length > 0);
        if (a.length < 16)
            nf(Number(a));
        else if (td())
            a = BigInt(a),
            jf = Number(a & BigInt(4294967295)) >>> 0,
            kf = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            A(a.length > 0);
            var b = +(a[0] === "-");
            kf = jf = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                kf *= 1E6,
                jf = jf * 1E6 + d,
                jf >= 4294967296 && (kf += Math.trunc(jf / 4294967296),
                kf >>>= 0,
                jf >>>= 0);
            b && (b = u(of(jf, kf)),
            a = b.next().value,
            b = b.next().value,
            jf = a,
            kf = b)
        }
    }
    function of(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;function uf(a) {
        if (a == null || typeof a === "number")
            return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity")
            return Number(a)
    }
    function vf(a) {
        return a.displayName || a.name || "unknown type name"
    }
    function wf(a) {
        if (typeof a !== "boolean")
            throw Error("Expected boolean but got " + Sa(a) + ": " + a);
        return a
    }
    function xf(a) {
        if (a == null || typeof a === "boolean")
            return a;
        if (typeof a === "number")
            return !!a
    }
    var yf = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function zf(a) {
        var b = typeof a;
        switch (b) {
        case "bigint":
            return !0;
        case "number":
            return Number.isFinite(a)
        }
        return b !== "string" ? !1 : yf.test(a)
    }
    function Af(a) {
        if (!Number.isFinite(a))
            throw sd("Expected enum as finite number but got " + Sa(a) + ": " + a);
        return a | 0
    }
    function Bf(a) {
        return a == null ? a : Af(a)
    }
    function Cf(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function Df(a) {
        return "Expected int32 as finite number but got " + Sa(a) + ": " + a
    }
    function Ef(a) {
        if (typeof a !== "number")
            throw sd(Df(a));
        if (!Number.isFinite(a))
            throw sd(Df(a));
        return a | 0
    }
    function Ff(a) {
        if (a == null)
            return a;
        if (typeof a === "string") {
            if (!a)
                return;
            a = +a
        }
        if (typeof a === "number")
            return Number.isFinite(a) ? a | 0 : void 0
    }
    function Gf(a) {
        if (a == null)
            return a;
        if (typeof a === "string") {
            if (!a)
                return;
            a = +a
        }
        if (typeof a === "number")
            return Number.isFinite(a) ? a >>> 0 : void 0
    }
    function Hf(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!zf(a))
            throw sd("Expected an int64 value encoded as a number or a string but got " + Sa(a) + ": " + a);
        var c = typeof a;
        switch (b) {
        case 4096:
            switch (c) {
            case "string":
                return If(a, !0);
            case "bigint":
                return String(BigInt.asIntN(64, a));
            default:
                return Jf(se(a, ze), !0)
            }
        case 8192:
            switch (c) {
            case "string":
                return b = Math.trunc(Number(a)),
                Number.isSafeInteger(b) ? a = bf(b) : (b = a.indexOf("."),
                b !== -1 && (a = a.substring(0, b)),
                a = td() ? Kf(BigInt(a)) : bf(Lf(a))),
                a;
            case "bigint":
                return Kf(a);
            default:
                return bf(Mf(se(a, ze), !0))
            }
        case 0:
            switch (c) {
            case "string":
                return If(a, !1);
            case "bigint":
                return Kf(a);
            default:
                return Mf(se(a, ze), !1)
            }
        default:
            throw Error("Unknown format requested type for int64");
        }
    }
    function Nf(a) {
        return a == null ? a : Hf(a)
    }
    function Of(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }
    function Pf(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }
    function Qf(a) {
        A(a < 0 || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        A(Number.isInteger(a));
        if (a < 0) {
            nf(a);
            var b = qf(jf, kf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Of(String(a)))
            return a;
        nf(a);
        return kf * 4294967296 + (jf >>> 0)
    }
    function Lf(a) {
        A(a.indexOf(".") === -1);
        if (Pf(a))
            return a;
        tf(a);
        return sf()
    }
    function Mf(a, b) {
        A(zf(a));
        A(b || !0);
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            A(!Number.isSafeInteger(a));
            A(Number.isInteger(a));
            nf(a);
            b = jf;
            var c = kf;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Jf(a, b) {
        A(zf(a));
        A(b || !0);
        a = Math.trunc(a);
        Number.isSafeInteger(a) ? a = String(a) : (A(!Number.isSafeInteger(a)),
        A(Number.isInteger(a)),
        b = String(a),
        Pf(b) ? a = b : (nf(a),
        a = sf()));
        return a
    }
    function If(a, b) {
        A(zf(a));
        A(b || !0);
        b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Lf(a)
    }
    function Kf(a) {
        A(typeof a === "bigint");
        return bf(BigInt.asIntN(64, a))
    }
    function Rf(a) {
        if (a == null)
            return a;
        if (typeof a === "bigint")
            return hf(a) ? a = Number(a) : (a = BigInt.asIntN(64, a),
            a = hf(a) ? Number(a) : String(a)),
            a;
        if (zf(a)) {
            if (typeof a === "number")
                return Mf(a, !1);
            a = se(a, Ae);
            A(zf(a));
            A(!0);
            A(!0);
            var b = Math.trunc(Number(a));
            Number.isSafeInteger(b) ? a = b : (a = If(a, !1),
            b = Number(a),
            a = Number.isSafeInteger(b) ? b : a);
            return a
        }
    }
    function Sf(a) {
        var b = !0;
        b = b === void 0 ? !1 : b;
        var c = typeof a;
        if (a == null)
            return a;
        if (c === "bigint")
            return String(BigInt.asIntN(64, a));
        if (zf(a)) {
            if (c === "string")
                return If(a, b);
            a = se(a, ze);
            return Jf(a, b)
        }
    }
    function Tf(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(BigInt.asIntN(64, a));
        if (zf(a)) {
            if (b === "string")
                return If(a, !1);
            if (b === "number")
                return Mf(a, !1)
        }
    }
    function Uf(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(BigInt.asUintN(64, a));
        if (zf(a)) {
            if (b === "string")
                return A(zf(a)),
                A(!0),
                b = Math.trunc(Number(a)),
                Number.isSafeInteger(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."),
                b !== -1 && (a = a.substring(0, b)),
                A(a.indexOf(".") === -1),
                Of(a) || (tf(a),
                a = qf(jf, kf))),
                a;
            if (b === "number")
                return A(zf(a)),
                A(!0),
                a = Math.trunc(a),
                a >= 0 && Number.isSafeInteger(a) ? a : Qf(a)
        }
    }
    function Vf(a) {
        if (typeof a !== "string")
            throw Error("Expected a string but got " + a + " a " + Sa(a));
        return a
    }
    function Wf(a) {
        if (a != null && typeof a !== "string")
            throw Error("Expected a string or null or undefined but got " + a + " a " + Sa(a));
        return a
    }
    function Xf(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function Yf(a, b) {
        if (!(a instanceof b))
            throw Error("Expected instanceof " + vf(b) + " but got " + (a && vf(a.constructor)));
        return a
    }
    function Zf(a, b, c, d) {
        if (a != null && typeof a === "object" && Sd(a))
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? $f(b) : new b : void 0;
        var e = c = Fd(a);
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && Jd(a, e);
        return new b(a)
    }
    function ag(a) {
        if (!Array.isArray(a))
            throw sd("Expected array but got " + Sa(a) + ": " + a);
    }
    function $f(a) {
        var b = a[yd];
        if (b)
            return b;
        b = new a;
        Ld(b.W);
        return a[yd] = b
    }
    function bg(a, b, c) {
        if (b)
            return wf(a);
        var d;
        return (d = xf(a)) != null ? d : c ? !1 : void 0
    }
    function cg(a, b, c) {
        if (b)
            return Vf(a);
        var d;
        return (d = Xf(a)) != null ? d : c ? "" : void 0
    }
    ;var kg = function(a) {
        dg === void 0 && (dg = typeof Proxy === "function" ? eg(Proxy) : null);
        if (!dg || !fg())
            return a;
        var b = gg(a);
        if (b)
            return b;
        var c = Error().stack;
        hg(a);
        b = new dg(a,{
            set: function(d, e, f) {
                ig(c);
                d[e] = f;
                return !0
            }
        });
        jg(a, b);
        return b
    };
    function ig(a) {
        rd("Warning: Forbidden array mutation. This will be a hard error in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray origin at " + a + "\nMutation at " + Error().stack + "\n...")
    }
    var lg = void 0
      , mg = void 0
      , gg = function(a) {
        var b;
        return (b = lg) == null ? void 0 : b.get(a)
    }
      , ng = function(a) {
        var b;
        return ((b = mg) == null ? void 0 : b.get(a)) || a
    };
    function jg(a, b) {
        (lg || (lg = new og)).set(a, b);
        (mg || (mg = new og)).set(b, a)
    }
    var dg = void 0
      , og = void 0;
    function fg() {
        og === void 0 && (og = typeof WeakMap === "function" ? eg(WeakMap) : null);
        return og
    }
    function eg(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    var pg = void 0;
    function hg(a) {
        if (pg === void 0) {
            var b = new dg([],{});
            pg = Array.prototype.concat.call([], b).length === 1
        }
        pg && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }
    var wg = function(a, b, c) {
        if (fg() && (!qg(a, b) || !c)) {
            c = a.length;
            for (var d = {
                length: c
            }, e = 0; e < Math.min(c, 10); e++) {
                if (c <= 10)
                    var f = e;
                else {
                    f = c / 10;
                    var g = Math.floor(e * f);
                    f = g + Math.floor(Math.random() * (Math.floor((e + 1) * f) - g))
                }
                d[f] = a[f]
            }
            rg(a, d) ? (sg(tg || (tg = new og), b, a, d),
            sg(ug || (ug = new og), b, a, Error().stack)) : (rd(),
            vg(a, b))
        }
    }
      , yg = function(a, b) {
        var c = qg(a, b);
        c && !rg(a, c) && (xg(a, b),
        vg(a, b))
    };
    function rg(a, b) {
        if (a.length !== b.length)
            return !1;
        for (var c in b) {
            var d = Number(c), e;
            if (e = Number.isInteger(d))
                e = a[d],
                d = b[d],
                e = !(Number.isNaN(e) ? Number.isNaN(d) : e === d);
            if (e)
                return !1
        }
        return !0
    }
    var zg = function(a) {
        var b;
        if (a && (b = tg) != null && b.has(a) && (b = a.W))
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (c === b.length - 1 && Xd(d))
                    for (var e in d) {
                        var f = d[e];
                        Array.isArray(f) && yg(f, a)
                    }
                else
                    Array.isArray(d) && yg(d, a)
            }
    };
    function xg(a, b) {
        var c, d;
        var e = (c = ug) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a);
        rd("Warning: Array transferred to proto has been mutated. This mutation will be ignored in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray transferred at " + e + "\nMutation prior to " + Error().stack + "\n...")
    }
    var tg = void 0
      , ug = void 0;
    function sg(a, b, c, d) {
        var e = a.get(b);
        e || (e = new og,
        a.set(b, e));
        e.set(c, d)
    }
    function qg(a, b) {
        var c, d;
        return (c = tg) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a)
    }
    var vg = function(a, b) {
        var c, d;
        (c = tg) == null || (d = c.get(b)) == null || d.delete(a);
        var e, f;
        (e = ug) == null || (f = e.get(b)) == null || f.delete(a)
    };
    var Ag;
    function Bg(a, b) {
        A(!!(Fd(b) & 32));
        Ag = b;
        a = new a(b);
        Ag = void 0;
        return a
    }
    var Cg, Dg;
    function Eg(a) {
        switch (typeof a) {
        case "boolean":
            return Cg || (Cg = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? Dg || (Dg = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return wb(a),
            A(a.length === 2 || a.length === 3 && a[2] === !0),
            A(a[0] == null || typeof a[0] === "number" && a[0] >= 0),
            A(a[1] == null || typeof a[1] === "string"),
            a
        }
    }
    function Fg(a, b) {
        wb(b);
        a = Gg(a, b[0], b[1]);
        Cd(a, 16384);
        return a
    }
    function Gg(a, b, c) {
        a == null && (a = Ag);
        Ag = void 0;
        if (a != null)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && he(e)
            }
        if (a == null)
            e = 96,
            c ? (a = [c],
            e |= 512) : a = [],
            b && (e = Pd(e, b));
        else {
            if (!Array.isArray(a))
                throw Error("data passed to JSPB constructors must be an Array, got '" + JSON.stringify(a) + "' a " + Sa(a));
            e = Fd(a);
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
                throw Error("data passed to JSPB constructors must be mutable");
            if (e & 2048)
                throw Error("farr");
            if (e & 64)
                return Gd(a, e),
                a;
            e |= 64;
            if (c && (e |= 512,
            c !== a[0]))
                throw Error('Expected message to have a message id: "' + c + '" in the array, got: ' + JSON.stringify(a[0]) + " a " + Sa(a[0]) + ", are you parsing with the wrong proto?");
            a: {
                d = a;
                c = e;
                if (e = d.length) {
                    var f = e - 1;
                    if (Xd(d[f])) {
                        c |= 256;
                        b = Wd(f, Hd(c));
                        if (b >= 1024)
                            throw Error("Found a message with a sparse object at fieldNumber " + b + " is >= the limit 1024");
                        e = Pd(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, Wd(e, Hd(c)));
                    if (b > 1024)
                        throw Error("a message was constructed with an array of length " + e + " which is longer than 1024, are you using a supported serializer?");
                    e = Pd(c, b)
                } else
                    e = c
            }
        }
        Jd(a, e);
        A(e & 64);
        return a
    }
    ;var Hg = {}
      , Ig = function() {
        try {
            var a = function() {
                return oa(Map, [], this.constructor)
            };
            w(a, Map);
            xc(new a);
            return !1
        } catch (b) {
            return !0
        }
    }()
      , Jg = function() {
        this.g = new Map
    };
    m = Jg.prototype;
    m.get = function(a) {
        A(this.size === this.g.size);
        return this.g.get(a)
    }
    ;
    m.set = function(a, b) {
        A(this.size === this.g.size);
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    }
    ;
    m.delete = function(a) {
        A(this.size === this.g.size);
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    }
    ;
    m.clear = function() {
        A(this.size === this.g.size);
        this.g.clear();
        this.size = this.g.size
    }
    ;
    m.has = function(a) {
        A(this.size === this.g.size);
        return this.g.has(a)
    }
    ;
    m.entries = function() {
        A(this.size === this.g.size);
        return this.g.entries()
    }
    ;
    m.keys = function() {
        A(this.size === this.g.size);
        return this.g.keys()
    }
    ;
    m.values = function() {
        A(this.size === this.g.size);
        return this.g.values()
    }
    ;
    m.forEach = function(a, b) {
        A(this.size === this.g.size);
        return this.g.forEach(a, b)
    }
    ;
    Jg.prototype[Symbol.iterator] = function() {
        A(this.size === this.g.size);
        return this.entries()
    }
    ;
    var Kg = function() {
        if (Ig)
            return Object.setPrototypeOf(Jg.prototype, Map.prototype),
            Object.defineProperties(Jg.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }),
            Jg;
        var a = function() {
            return oa(Map, [], this.constructor)
        };
        w(a, Map);
        return a
    }();
    function Lg(a) {
        return a
    }
    var Ng = function(a, b, c, d) {
        c = c === void 0 ? Lg : c;
        d = d === void 0 ? Lg : d;
        var e = Kg.call(this) || this;
        A(!0);
        A(!0);
        var f = Fd(a);
        A(f & 2 || (f & 96) !== 96, "owned maps should not be constructed twice");
        f |= 64;
        Jd(a, f);
        e.Ua = f;
        e.wd = b;
        e.kc = c;
        e.we = e.wd ? Mg : d;
        for (var g = 0; g < a.length; g++) {
            var h = a[g]
              , k = c(h[0], !1, !0)
              , l = h[1];
            b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
            Kg.prototype.set.call(e, k, l)
        }
        return e
    };
    w(Ng, Kg);
    var Og = function(a) {
        if (a.Ua & 2)
            throw Error("Cannot mutate an immutable Map");
    }
      , Rg = function(a, b) {
        b = b === void 0 ? Pg : b;
        if (a.size !== 0)
            return Qg(a, b)
    }
      , Qg = function(a, b) {
        b = b === void 0 ? Pg : b;
        var c = [];
        a = Kg.prototype.entries.call(a);
        for (var d; !(d = a.next()).done; )
            d = d.value,
            d[0] = b(d[0]),
            d[1] = b(d[1]),
            c.push(d);
        return c
    };
    m = Ng.prototype;
    m.clear = function() {
        Og(this);
        Kg.prototype.clear.call(this)
    }
    ;
    m.delete = function(a) {
        Og(this);
        return Kg.prototype.delete.call(this, this.kc(a, !0, !1))
    }
    ;
    m.entries = function() {
        var a = Array.from(Kg.prototype.keys.call(this));
        return new de(a,Sg,this)
    }
    ;
    m.keys = function() {
        return Kg.prototype.keys.call(this)
    }
    ;
    m.values = function() {
        var a = Array.from(Kg.prototype.keys.call(this));
        return new de(a,Ng.prototype.get,this)
    }
    ;
    m.forEach = function(a, b) {
        var c = this;
        Kg.prototype.forEach.call(this, function(d, e) {
            a.call(b, pb(c.get(e)), e, c)
        })
    }
    ;
    m.set = function(a, b) {
        Og(this);
        a = this.kc(a, !0, !1);
        return a == null ? this : b == null ? (Kg.prototype.delete.call(this, a),
        this) : Kg.prototype.set.call(this, a, this.we(b, !0, !0, this.wd, !1, this.Ua))
    }
    ;
    m.has = function(a) {
        return Kg.prototype.has.call(this, this.kc(a, !1, !1))
    }
    ;
    m.get = function(a) {
        a = this.kc(a, !1, !1);
        var b = Kg.prototype.get.call(this, a);
        if (b !== void 0) {
            var c = this.wd;
            return c ? (c = this.we(b, !1, !0, c, this.tg, this.Ua),
            c !== b && Kg.prototype.set.call(this, a, c),
            c) : b
        }
    }
    ;
    Ng.prototype[Symbol.iterator] = function() {
        return this.entries()
    }
    ;
    Ng.prototype.toJSON = void 0;
    Ng.prototype.fh = Td;
    var Tg = function() {
        throw Error("please construct maps as mutable then call toImmutable");
    };
    if (be) {
        var Ug = function() {
            throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
        }
          , Vg = {};
        Object.defineProperties(Tg, (Vg[Symbol.hasInstance] = {
            value: Ug,
            configurable: !1,
            writable: !1,
            enumerable: !1
        },
        Vg));
        A(Tg[Symbol.hasInstance] === Ug, "defineProperties did not work: was it monkey-patched?")
    }
    function Mg(a, b, c, d, e, f) {
        b && Yf(a, d);
        a = Zf(a, d, c, f);
        e && (a = Wg(a));
        A(!(f & 2) || Kd(a.W));
        return a
    }
    function Pg(a) {
        return a
    }
    function Sg(a) {
        return [a, pb(this.get(a))]
    }
    var Xg;
    function Yg() {
        return Xg || (Xg = new Ng(Ld([]),void 0,void 0,void 0,Hg))
    }
    ;function Zg(a, b) {
        return $g(b)
    }
    function $g(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "bigint":
            return hf(a) ? Number(a) : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Yd(a))
                        return
                } else {
                    if (gd && a != null && a instanceof Uint8Array)
                        return id(a);
                    if (a instanceof pd) {
                        var b = a.g;
                        return b == null ? "" : typeof b === "string" ? b : a.g = id(b)
                    }
                    if (a instanceof Ng)
                        return Rg(a)
                }
        }
        return a
    }
    ;function ah(a, b, c) {
        var d = ud(a)
          , e = d.length
          , f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++)
            d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f)
                A(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."),
                b[g] = c(f[g])
        }
        ge(d, a);
        return d
    }
    function bh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a))
                a = Yd(a) ? void 0 : e && Fd(a) & 2 ? a : ch(a, b, c, d !== void 0, e);
            else if (Xd(a)) {
                var f = {}, g;
                for (g in a)
                    f[g] = bh(a[g], b, c, d, e);
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function ch(a, b, c, d, e) {
        var f = d || c ? Fd(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = ud(a), h = 0; h < g.length; h++)
            g[h] = bh(g[h], b, c, d, e);
        c && (ge(g, a),
        c(f, g));
        return g
    }
    function dh(a) {
        return bh(a, eh, void 0, void 0, !1)
    }
    function eh(a) {
        return Sd(a) ? a.toJSON() : a instanceof Ng ? Rg(a, dh) : $g(a)
    }
    ;function fh(a, b, c) {
        c = c === void 0 ? Od : c;
        if (a != null) {
            if (gd && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Fd(a);
                if (d & 2)
                    return a;
                he(a);
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Jd(a, (d | 34) & -12293),
                a) : ch(a, fh, d & 4 ? Od : c, !0, !0)
            }
            Sd(a) ? (A(Sd(a)),
            c = a.W,
            d = Id(c),
            a = d & 2 ? a : gh(a, c, d, !0)) : a instanceof Ng && !(a.Ua & 2) && (c = Ld(Qg(a, fh)),
            a = new Ng(c,a.wd,a.kc,a.we));
            return a
        }
    }
    function gh(a, b, c, d) {
        zg(a);
        return Bg(a.constructor, hh(b, c, d))
    }
    function hh(a, b, c) {
        var d = c || b & 2 ? Od : Nd
          , e = !!(b & 32);
        a = ah(a, b, function(f) {
            return fh(f, e, d)
        });
        Cd(a, 32 | (c ? 2 : 0));
        return a
    }
    function Wg(a) {
        var b = a.W
          , c = Id(b);
        return c & 2 ? gh(a, b, c, !1) : a
    }
    ;function ih(a, b, c, d) {
        if (!(4 & b))
            return !0;
        if (c == null)
            return !1;
        A(c === 0 || c === 4096 || c === 8192, "Expected format type to be one of legacy, string, or gbigint, but got " + c);
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Ad] = (a.constructor[Ad] | 0) + 1) < 5 && rd("an _asLegacyNumberOrString accessor was called after an _asString accessor: this can cause type errors when numeric values are expected -- we recommend standardizing your whole application on the _asString version. See go/jspb-gencode?polyglot=typescript#int64-string-accessors for more information.");
        return c === 0 ? !1 : !(c & b)
    }
    var kh = function(a, b) {
        a = a.W;
        return jh(a, Id(a), b)
    };
    function lh(a, b, c, d) {
        b = Vd(d, Hd(b));
        if (!(b < 0 || b >= a.length || b >= c))
            return a[b]
    }
    var jh = function(a, b, c, d) {
        if (c === -1)
            return null;
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c],
            d != null)) {
                if (lh(a, b, e, c))
                    throw Error("b/316921031: message had field number " + c + " in both the sparse object and the array portion.");
                return d
            }
            return lh(a, b, e, c)
        }
    }
      , nh = function(a, b, c) {
        var d = a.W
          , e = Id(d);
        ae(e);
        mh(d, e, b, c);
        return a
    };
    function mh(a, b, c, d) {
        A(!Xd(d), "Invalid object passed to a setter");
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            A(e !== 536870912);
            var f = b;
            if (b & 256)
                var g = a[a.length - 1];
            else {
                if (d == null)
                    return f;
                g = Vd(e, Hd(b));
                A(g >= a.length && Number.isInteger(g) && g < 4294967295, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[Vd(c, Hd(b))] = void 0);
            f !== b && Jd(a, f);
            return f
        }
        a[Vd(c, Hd(b))] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function oh(a, b) {
        if (!a)
            return a;
        A(Kd(b) ? Kd(a.W) : !0);
        return a
    }
    function ph(a, b) {
        A(a.Ua & 2 || a.Ua & 64 || !(a.Ua & 32));
        A((a instanceof Ng && !!(a.Ua & 2)) === Kd(b));
        return a
    }
    function qh(a, b, c, d) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        he(a, c);
        A(!!(Fd(a) & 1));
        c || (d || A(Object.isFrozen(a) || !(Fd(a) & 32)),
        A(Kd(b) ? Object.isFrozen(a) : !0));
        return a
    }
    function rh(a, b, c, d, e) {
        A((d & 3) === d);
        var f = b & 2;
        e = jh(a, b, c, e);
        Array.isArray(e) || (e = Zd);
        var g = !(d & 2);
        d = !(d & 1);
        var h = !!(b & 32)
          , k = Fd(e);
        k !== 0 || !h || f || g ? k & 1 || (k |= 1,
        Jd(e, k)) : (k |= 33,
        Jd(e, k));
        f ? (a = !1,
        k & 2 || (Ld(e),
        a = !!(4 & k)),
        (d || a) && Object.freeze(e)) : (f = !!(2 & k) || !!(2048 & k),
        d && f ? (e = ud(e),
        f = 1,
        h && !g && (f |= 32),
        Jd(e, f),
        mh(a, b, c, e)) : g && k & 32 && !f && Dd(e, 32));
        return e
    }
    var sh = function(a) {
        return a === je ? 2 : 4
    };
    function th(a, b, c, d, e, f) {
        var g = a.W
          , h = Id(g);
        d = 2 & h ? 1 : d;
        f = !!f;
        e = uh(g, h, b, e);
        var k = Fd(e)
          , l = e;
        yg(l, a);
        d !== 2 && d !== 1 || vg(l, a);
        ie(e);
        if (ih(a, k, void 0, f)) {
            4 & k && (e = ud(e),
            k = vh(k, h),
            h = mh(g, h, b, e));
            for (var n = l = 0; l < e.length; l++) {
                var p = c(e[l]);
                p != null && (e[n++] = p)
            }
            n < l && (e.length = n);
            k = wh(k, h);
            k = (k | 20) & -4097;
            k &= -8193;
            Jd(e, k);
            2 & k && Object.freeze(e)
        }
        if (d === 1 || d === 4 && 32 & k)
            xh(k) || (a = k,
            k |= 2,
            k !== a && Jd(e, k),
            Object.freeze(e));
        else if (c = d !== 5 ? !1 : !!(32 & k) || xh(k) || !!gg(e),
        (d === 2 || c) && xh(k) && (e = ud(e),
        k = vh(k, h),
        k = yh(k, h, f),
        Jd(e, k),
        h = mh(g, h, b, e)),
        xh(k) || (b = k,
        k = yh(k, h, f),
        k !== b && Jd(e, k)),
        c) {
            var q = kg(e);
            wg(e, a, !0)
        } else if (d === 2 && !f) {
            var t;
            (t = lg) == null || t.delete(e)
        }
        ie(e);
        f || qh(e, g, !1, f);
        return q || e
    }
    function uh(a, b, c, d) {
        a = jh(a, b, c, d);
        return Array.isArray(a) ? a : Zd
    }
    function wh(a, b) {
        a === 0 && (a = vh(a, b));
        return a | 1
    }
    function xh(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function zh(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c
              , k = b & 2;
            c = !1;
            if (h == null) {
                if (k) {
                    a = ph(Yg(), a);
                    break a
                }
                h = []
            } else if (h.constructor === Ng) {
                if ((h.Ua & 2) == 0 || k) {
                    a = ph(h, a);
                    break a
                }
                h = Qg(h)
            } else
                Array.isArray(h) ? c = Kd(h) : h = [];
            if (k) {
                if (!h.length) {
                    a = Yg();
                    break a
                }
                c || (c = !0,
                Ld(h))
            } else if (c) {
                c = !1;
                k = ud(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = ud(k[h]);
                    Array.isArray(l[1]) && (l[1] = Ld(l[1]))
                }
                h = k
            }
            c || (Fd(h) & 64 ? Dd(h, 32) : 32 & b && Md(h));
            f = new Ng(h,e,cg,f);
            mh(a, b, d, f);
            a = ph(f, a)
        }
        !g && e && (a.tg = !0);
        return a
    }
    function Ah(a, b, c) {
        a = a.W;
        var d = Id(a);
        return ph(zh(a, d, jh(a, d, b), b, void 0, c), a)
    }
    function Bh(a) {
        var b = Ch;
        a = a.W;
        var c = Id(a);
        return ph(zh(a, c, jh(a, c, 24), 24, b), a)
    }
    function Dh(a, b, c, d) {
        var e = a.W
          , f = Id(e);
        ae(f);
        if (c == null)
            return mh(e, f, b),
            a;
        c = ng(c);
        ag(c);
        var g = Fd(c)
          , h = g
          , k = !!(2 & g) || Object.isFrozen(c)
          , l = !k && (void 0 === le || void 0 !== ke);
        if (ih(a, g)) {
            g = 21;
            k && (c = ud(c),
            h = 0,
            g = vh(g, f),
            g = yh(g, f, !0));
            for (var n = 0; n < c.length; n++)
                c[n] = d(c[n])
        }
        l ? (c = ud(c),
        h = 0,
        g = vh(g, f),
        g = yh(g, f, !0)) : k || wg(c, a);
        g !== h && Jd(c, g);
        he(c);
        mh(e, f, b, c);
        return a
    }
    function Eh(a, b, c, d) {
        var e = a.W
          , f = Id(e);
        ae(f);
        mh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    var Hh = function(a, b, c, d) {
        var e = a.W
          , f = Id(e);
        ae(f);
        if (d == null) {
            var g = Fh(e);
            if (Gh(g, e, f, c) === b)
                g.set(c, 0);
            else
                return a
        } else {
            A(c.includes(b));
            g = Fh(e);
            var h = Gh(g, e, f, c);
            h !== b && (h && (f = mh(e, f, h)),
            g.set(c, b))
        }
        mh(e, f, b, d);
        return a
    }
      , Jh = function(a, b, c) {
        return Ih(a, b) === c ? c : -1
    }
      , Ih = function(a, b) {
        a = a.W;
        return Gh(Fh(a), a, Id(a), b)
    };
    function Fh(a) {
        if (vd) {
            var b;
            return (b = a[zd]) != null ? b : a[zd] = new Map
        }
        if (zd in a)
            return zb(a[zd], Map);
        b = new Map;
        Object.defineProperty(a, zd, {
            value: b
        });
        return b
    }
    function Gh(a, b, c, d) {
        var e = a.get(d);
        if (e != null)
            return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            jh(b, c, g) != null && (e !== 0 && (c = mh(b, c, e)),
            e = g)
        }
        a.set(d, e);
        return e
    }
    var Lh = function(a) {
        var b = Kh;
        a = a.W;
        var c = Id(a);
        ae(c);
        var d = jh(a, c, 4);
        b = Wg(Zf(d, b, !0, c));
        d !== b && mh(a, c, 4, b);
        return b
    }
      , Mh = function(a, b, c, d) {
        var e = Id(a);
        d = jh(a, e, c, d);
        var f;
        if (d != null && Sd(d))
            return b = Wg(d),
            b !== d && mh(a, e, c, b),
            b.W;
        if (Array.isArray(d)) {
            var g = Fd(d);
            g & 2 ? f = hh(d, g, !1) : f = d;
            f = Fg(f, b)
        } else
            f = Fg(void 0, b);
        f !== d && mh(a, e, c, f);
        return f
    };
    function Nh(a, b, c) {
        var d = !1;
        a = a.W;
        var e = Id(a);
        d = jh(a, e, c, d);
        b = Zf(d, b, !1, e);
        b !== d && b != null && mh(a, e, c, b);
        return oh(b, a)
    }
    var Oh = function(a, b, c) {
        return (a = Nh(a, b, c)) ? a : $f(b)
    }
      , Ph = function(a, b, c) {
        b = Nh(a, b, c);
        if (b == null)
            return b;
        a = a.W;
        var d = Id(a);
        if (!(d & 2)) {
            var e = Wg(b);
            e !== b && (b = e,
            mh(a, d, c, b))
        }
        return oh(b, a)
    };
    function Qh(a, b, c, d, e, f, g) {
        var h = a.W
          , k = !!(2 & b);
        e = k ? 1 : e;
        f = !!f;
        g && (g = !k);
        k = uh(h, b, d);
        var l = Fd(k)
          , n = k;
        yg(n, a);
        e !== 2 && e !== 1 || vg(n, a);
        n = !!(4 & l);
        if (!n) {
            l = wh(l, b);
            var p = k
              , q = b
              , t = !!(2 & l);
            t && (q |= 2);
            for (var v = !t, x = !0, D = 0, M = 0; D < p.length; D++) {
                var Q = Zf(p[D], c, !1, q);
                if (Q instanceof c) {
                    if (!t) {
                        var W = Kd(Q.W);
                        v && (v = !W);
                        x && (x = W)
                    }
                    p[M++] = Q
                }
            }
            M < D && (p.length = M);
            l |= 4;
            l = x ? l | 16 : l & -17;
            l = v ? l | 8 : l & -9;
            Jd(p, l);
            t && Object.freeze(p)
        }
        if (g && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            xh(l) ? (k = ud(k),
            l = vh(l, b),
            b = mh(h, b, d, k)) : vg(k, a);
            c = k;
            g = l;
            for (p = 0; p < c.length; p++)
                l = c[p],
                q = Wg(l),
                l !== q && (c[p] = q);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            Jd(c, g);
            l = g
        }
        if (e === 1 || e === 4 && 32 & l)
            xh(l) || (a = l,
            l |= !k.length || 16 & l && (!n || 32 & l) ? 2 : 2048,
            l !== a && Jd(k, l),
            Object.freeze(k));
        else if (n = e !== 5 ? !1 : !!(32 & l) || xh(l) || !!gg(k),
        (e === 2 || n) && xh(l) && (k = ud(k),
        l = vh(l, b),
        l = yh(l, b, f),
        Jd(k, l),
        b = mh(h, b, d, k)),
        xh(l) || (d = l,
        l = yh(l, b, f),
        l !== d && Jd(k, l)),
        n) {
            var Ba = kg(k);
            wg(k, a, !0)
        } else if (e === 2 && !f) {
            var Y;
            (Y = lg) == null || Y.delete(k)
        }
        if (!f) {
            f = k;
            e = e === 2;
            e = e === void 0 ? !1 : e;
            a = Kd(h);
            b = Kd(f);
            Y = Object.isFrozen(f) && b;
            qh(f, h, e);
            if (a || b)
                e ? A(b) : A(Y);
            A(!!(Fd(f) & 4));
            if (b && f.length)
                for (e = 0; e < 1; e++)
                    oh(f[e], h)
        }
        return Ba || k
    }
    var Rh = function(a, b, c, d) {
        var e = Id(a.W);
        return Qh(a, e, b, c, d, !1, !(2 & e))
    }
      , C = function(a, b, c, d) {
        d != null ? Yf(d, pb(b)) : d = void 0;
        return nh(a, c, d)
    }
      , Sh = function(a, b, c, d, e) {
        e != null ? Yf(e, pb(b)) : e = void 0;
        return Hh(a, c, d, e)
    }
      , Th = function(a, b, c, d) {
        var e = a.W
          , f = Id(e);
        ae(f);
        if (d == null)
            return mh(e, f, c),
            a;
        d = ng(d);
        ag(d);
        var g = Fd(d)
          , h = g
          , k = !!(2 & g) || !!(2048 & g);
        A(!k || Object.isFrozen(d));
        for (var l = k || Object.isFrozen(d), n = !l && (void 0 === le || void 0 !== ke), p = !0, q = !0, t = 0; t < d.length; t++) {
            var v = d[t];
            Yf(v, pb(b));
            k || (v = Kd(v.W),
            p && (p = !v),
            q && (q = v))
        }
        k || (g |= 5,
        g = p ? g | 8 : g & -9,
        g = q ? g | 16 : g & -17);
        n || l && g !== h ? (d = ud(d),
        h = 0,
        g = vh(g, f),
        g = yh(g, f, !0)) : l || wg(d, a);
        g !== h && Jd(d, g);
        he(d);
        mh(e, f, c, d);
        return a
    };
    function vh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }
    function yh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }
    function Uh(a, b, c, d, e) {
        var f = Id(a.W);
        ae(f);
        a = e(a, b, 2, void 0, !0);
        b = Fd(a);
        b = 4 & b ? 4096 & b ? 4096 : 8192 & b ? 8192 : 0 : void 0;
        b = b != null ? b : 0;
        if (Array.isArray(d))
            for (d = ng(d),
            e = d.length,
            f = 0; f < e; f++)
                a.push(c(d[f], b));
        else
            for (d = u(d),
            e = d.next(); !e.done; e = d.next())
                a.push(c(e.value, b));
        ie(a)
    }
    function Vh(a, b, c, d) {
        var e = Id(a.W);
        ae(e);
        a = Qh(a, e, c, b, 2, !0);
        c = d != null ? Yf(d, c) : new c;
        a.push(c);
        Kd(c.W) ? Dd(a, 8) : Dd(a, 16);
        return c
    }
    var Wh = function(a, b, c, d) {
        Vh(a, b, c, d);
        return a
    };
    function Xh(a, b) {
        return a != null ? a : b
    }
    var Yh = function(a, b) {
        return Xf(kh(a, b))
    }
      , Zh = function(a, b) {
        var c = c === void 0 ? !1 : c;
        return Xh(xf(kh(a, b)), c)
    }
      , $h = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return Xh(Ff(kh(a, b)), c)
    }
      , ai = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return Xh(Gf(kh(a, b)), c)
    }
      , bi = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return Xh(Rf(kh(a, b)), c)
    }
      , ci = function(a, b) {
        var c = c === void 0 ? 0 : c;
        a = a.W;
        var d = Id(a)
          , e = jh(a, d, b)
          , f = uf(e);
        f != null && f !== e && mh(a, d, b, f);
        return Xh(f, c)
    }
      , E = function(a, b) {
        var c = c === void 0 ? "" : c;
        return Xh(Yh(a, b), c)
    }
      , di = function(a, b) {
        var c = 0;
        c = c === void 0 ? 0 : c;
        return Xh(Cf(kh(a, b)), c)
    }
      , ei = function(a, b) {
        var c = c === void 0 ? "0" : c;
        return Xh(Sf(kh(a, b)), c)
    }
      , fi = function(a, b) {
        return th(a, b, Ff, sh())
    }
      , gi = function(a, b, c, d, e) {
        return th(a, b, Xf, c, d, e)
    }
      , hi = function(a, b, c, d, e) {
        return th(a, b, Cf, c, d, e)
    }
      , ii = function(a, b, c) {
        return di(a, Jh(a, c, b))
    }
      , ji = function(a, b, c) {
        return nh(a, b, c == null ? c : wf(c))
    }
      , ki = function(a, b, c) {
        return Eh(a, b, c == null ? c : wf(c), !1)
    }
      , li = function(a, b, c) {
        return nh(a, b, c == null ? c : Ef(c))
    }
      , mi = function(a, b, c) {
        return Eh(a, b, c == null ? c : Ef(c), 0)
    }
      , ni = function(a, b, c) {
        return Eh(a, b, Nf(c), "0")
    }
      , oi = function(a, b, c) {
        return nh(a, b, Wf(c))
    }
      , pi = function(a, b, c) {
        return nh(a, b, Bf(c))
    }
      , F = function(a, b, c) {
        return Eh(a, b, Bf(c), 0)
    };
    A(!0);
    if (typeof Proxy !== "undefined") {
        var ri = qi;
        new Proxy({},{
            getPrototypeOf: ri,
            setPrototypeOf: ri,
            isExtensible: ri,
            preventExtensions: ri,
            getOwnPropertyDescriptor: ri,
            defineProperty: ri,
            has: ri,
            get: ri,
            set: ri,
            deleteProperty: ri,
            apply: ri,
            construct: ri
        })
    }
    function qi() {
        throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
    }
    ;var si, ti = function(a, b, c) {
        zb(this, ti, "The message constructor should only be used by subclasses");
        A(this.constructor !== ti, "Message is an abstract class and cannot be directly constructed");
        this.W = Gg(a, b, c);
        this.preventPassingToStructuredClone = ce
    }, vi = function(a) {
        A(!0);
        A(!si && !0);
        return ui(a)
    };
    ti.prototype.toJSON = function() {
        return ui(this)
    }
    ;
    var wi = function(a) {
        A(!0);
        try {
            return si = !0,
            A(si && !0),
            JSON.stringify(ui(a), Zg)
        } finally {
            si = !1
        }
    };
    Qd = ti;
    ti.prototype.j = Rd;
    ti.prototype.toString = function() {
        try {
            return si = !0,
            ui(this).toString()
        } finally {
            si = !1
        }
    }
    ;
    function ui(a) {
        zg(a);
        if (si)
            var b = a.W;
        else
            b = a.W,
            wb(b),
            b = ch(b, eh, void 0, void 0, !1);
        var c = !si
          , d = Id(c ? a.W : b);
        if (a = b.length) {
            var e = b[a - 1]
              , f = Xd(e);
            f ? a-- : e = void 0;
            var g = Hd(d)
              , h = Wd(a, g)
              , k = (d = !(d & 512) && h !== h) ? Array.prototype.slice.call(b, 0, a) : b;
            if (f || d) {
                b: {
                    var l = k;
                    var n = e;
                    var p;
                    f = !1;
                    if (d)
                        for (var q = Math.max(0, h + g); q < l.length; q++) {
                            var t = l[q]
                              , v = Wd(q, g);
                            t == null || Yd(t) || Ud(t) || (f = l[q] = void 0,
                            ((f = p) != null ? f : p = {})[v] = t,
                            f = !0)
                        }
                    if (n)
                        for (var x in n)
                            if (q = +x,
                            isNaN(q))
                                q = void 0,
                                ((q = p) != null ? q : p = {})[x] = n[x];
                            else if (t = n[x],
                            Array.isArray(t) && (Yd(t) || Ud(t)) && (t = null),
                            t == null && (f = !0),
                            d && q < h) {
                                f = !0;
                                t = Vd(q, g);
                                for (v = l.length; v <= t; v++)
                                    l.push(void 0);
                                l[t] = n[q]
                            } else
                                t != null && (q = void 0,
                                ((q = p) != null ? q : p = {})[x] = t);
                    f || (p = n);
                    if (p)
                        for (var D in p) {
                            n = p;
                            break b
                        }
                    n = null
                }
                l = n == null ? e != null : n !== e
            }
            d && (a = k.length);
            for (; a > 0; a--) {
                p = a - 1;
                x = k[p];
                Wd(p, g);
                if (x != null && !Yd(x) && !Ud(x))
                    break;
                var M = !0
            }
            if (k !== b || l || M) {
                if (!d && !c)
                    k = Array.prototype.slice.call(k, 0, a);
                else if (M || l || n)
                    k.length = a;
                n && k.push(n)
            }
            M = k
        } else
            M = b;
        return M
    }
    ;var xi = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, zi = function(a) {
        if (!a)
            return yi || (yi = new xi(0,0));
        if (!/^\d+$/.test(a))
            return null;
        tf(a);
        return new xi(jf,kf)
    }, yi, Ai = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, Ci = function(a) {
        if (!a)
            return Bi || (Bi = new Ai(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        tf(a);
        return new Ai(jf,kf)
    }, Bi;
    var Di = function() {
        this.g = []
    };
    Di.prototype.length = function() {
        return this.g.length
    }
    ;
    Di.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    var Ei = function(a, b, c) {
        A(b == Math.floor(b));
        A(c == Math.floor(c));
        A(b >= 0 && b < 4294967296);
        for (A(c >= 0 && c < 4294967296); c > 0 || b > 127; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
      , Fi = function(a, b) {
        A(b == Math.floor(b));
        for (A(b >= 0 && b < 4294967296); b > 127; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , Gi = function(a, b) {
        A(b == Math.floor(b));
        A(b >= -2147483648 && b < 2147483648);
        if (b >= 0)
            Fi(a, b);
        else {
            for (var c = 0; c < 9; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    }
      , Hi = function(a, b) {
        A(b == Math.floor(b));
        A(b >= 0 && b < 4294967296);
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };
    var Ii = function() {
        this.l = [];
        this.j = 0;
        this.g = new Di
    }
      , Ji = function(a, b) {
        b.length !== 0 && (a.l.push(b),
        a.j += b.length)
    }
      , Li = function(a, b) {
        Ki(a, b, 2);
        b = a.g.end();
        Ji(a, b);
        b.push(a.j);
        return b
    }
      , Mi = function(a, b) {
        var c = b.pop();
        c = a.j + a.g.length() - c;
        for (A(c >= 0); c > 127; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.j++;
        b.push(c);
        a.j++
    }
      , Ki = function(a, b, c) {
        A(b >= 1 && b == Math.floor(b));
        Fi(a.g, b * 8 + c)
    }
      , Ni = function(a, b, c) {
        Ki(a, b, 2);
        Fi(a.g, c.length);
        Ji(a, a.g.end());
        Ji(a, c)
    };
    function Oi(a, b) {
        Pi(a, b, b === Math.floor(b));
        Pi(a, b, b >= -2147483648 && b < 2147483648)
    }
    function Pi(a, b, c) {
        c || qb("for [" + b + "] at [" + a + "]")
    }
    ;var Qi = function(a, b, c, d) {
        this.g = a;
        this.j = b;
        this.Df = d
    };
    function Ri(a) {
        return Array.isArray(a) ? a[0]instanceof Qi ? (A(a.length === 2),
        Si(a[1]),
        a) : [Ti, Si(a)] : [zb(a, Qi), void 0]
    }
    var Wi = function(a, b, c) {
        wb(a);
        for (var d = c.Zb, e = {}; b.o() && !b.l(); e = {
            se: void 0
        })
            if (b.F()) {
                var f = b.L();
                e.se = !1;
                b.P(function(g) {
                    return function(h, k) {
                        var l = c[h];
                        if (!l) {
                            var n = d[h];
                            if (n) {
                                l = Si(n);
                                var p = Ui(l)
                                  , q = Vi(l).g;
                                l = c[h] = function(t, v, x) {
                                    return p(Mh(v, q, x, !0), t)
                                }
                            }
                        }
                        l ? l(k, a, h) : (g.se = !0,
                        k.ba())
                    }
                }(e));
                e.se && fe(a, b.Z(f))
            } else
                fe(a, b.I())
    }
      , Yi = function(a, b) {
        return function(c, d, e) {
            d = Xi(d, a);
            d != null && (Ki(c, 1, 3),
            Ki(c, 2, 0),
            Gi(c.g, e),
            e = Li(c, 3),
            b(d, c),
            Mi(c, e),
            Ki(c, 1, 4))
        }
    };
    function Zi(a, b) {
        if (Array.isArray(b)) {
            var c = Fd(b);
            if (c & 4)
                return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            Jd(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    function Xi(a, b) {
        return a instanceof ti ? (zg(a),
        a.W) : Array.isArray(a) ? Fg(a, b) : void 0
    }
    var $i = Symbol("deserializeBinaryFromReaderCache");
    function Ui(a) {
        var b = a[$i];
        if (!b) {
            var c = Vi(a)
              , d = c.j;
            b = d ? function(e, f) {
                return d(e, f, c)
            }
            : function(e, f) {
                for (; f.o() && !f.l(); ) {
                    var g = f.D()
                      , h = c[g]
                      , k = !h
                      , l = !1;
                    if (!h) {
                        var n = c.Zb;
                        if (n) {
                            var p = n[g];
                            if (p) {
                                var q = void 0;
                                l = (q = n.g) == null ? void 0 : q[g];
                                (!Pb || l) && (n = aj(p)) && (h = c[g] = n)
                            }
                        }
                    }
                    h && h(f, e, g) || fe(e, f.I());
                    k && h && !l && bj(g)
                }
            }
            ;
            a[$i] = b
        }
        return b
    }
    function aj(a) {
        a = Ri(a);
        var b = zb(a[0], Qi).g;
        if (a = a[1]) {
            Si(a);
            var c = Ui(a)
              , d = Vi(A(a)).g;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    function Si(a) {
        wb(a);
        var b;
        if (!(b = cj in a || dj in a) && (b = a.length > 0)) {
            b = a[0];
            var c = Eg(b);
            c != null && c !== b && (a[0] = c);
            b = c != null
        }
        A(b);
        return a
    }
    function ej(a, b, c) {
        a[b] = c
    }
    function fj(a, b, c, d) {
        var e = e === void 0 ? ej : e;
        b.g = A(Eg(a[0]));
        var f = 0
          , g = a[++f];
        g && g.constructor === Object && (b.Zb = g,
        g = a[++f],
        typeof g === "function" && (b.j = g,
        b.l = tb(a[++f]),
        A(b.j === Wi),
        A(b.l === Yi),
        g = a[++f]));
        for (var h = {}; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0; ) {
            for (var k = 0; k < g.length; k++)
                h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; g !== void 0; ) {
            typeof g === "number" && (A(g > 0),
            k += g,
            g = a[++f]);
            var l = void 0;
            if (g instanceof Qi)
                var n = g;
            else
                n = gj,
                f--;
            if (n.Df) {
                g = a[++f];
                l = a;
                var p = f;
                typeof g == "function" && (A(g.length === 0),
                g = g(),
                l[p] = g);
                Si(g);
                l = g
            }
            g = a[++f];
            p = k + 1;
            typeof g === "number" && g < 0 && (p -= g,
            g = a[++f]);
            for (; k < p; k++) {
                var q = h[k];
                e(b, k, l ? d(n, l, q) : c(n, q))
            }
        }
        return b
    }
    var hj = Symbol("serializeBinaryToWriterCache");
    function ij(a) {
        var b = a[hj];
        if (!b) {
            var c = jj(a);
            b = function(d, e) {
                return kj(d, e, c)
            }
            ;
            a[hj] = b
        }
        return b
    }
    var dj = Symbol("serializerFnCache");
    function lj(a) {
        return a.j
    }
    function mj(a, b) {
        var c, d, e = a.j;
        return function(f, g, h) {
            return e(f, g, h, d || (d = jj(b).g), c || (c = ij(b)))
        }
    }
    function jj(a) {
        var b = a[dj];
        return b ? b : b = fj(a, a[dj] = {}, lj, mj)
    }
    var cj = Symbol("deserializerFnCache");
    function nj(a, b) {
        var c = a.g;
        return b ? function(d, e, f) {
            return c(d, e, f, b)
        }
        : c
    }
    function oj(a, b, c) {
        var d = a.g, e, f;
        return function(g, h, k) {
            return d(g, h, k, f || (f = Vi(b).g), e || (e = Ui(b)), c)
        }
    }
    function Vi(a) {
        var b = a[cj];
        return b ? b : b = fj(a, a[cj] = {}, nj, oj)
    }
    function pj(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.Zb) {
            var d = c[b];
            if (d) {
                d = Ri(d);
                var e = zb(d[0], Qi).j;
                d = d[1];
                var f;
                c = (f = c.g) == null ? void 0 : f[b];
                if (!Pb || c) {
                    if (d) {
                        Si(d);
                        var g = ij(d)
                          , h = jj(d).g;
                        c = (f = a.l) ? f(h, g) : function(k, l, n) {
                            return e(k, l, n, h, g)
                        }
                    } else
                        c = e;
                    return a[b] = c
                }
            }
        }
    }
    function kj(a, b, c) {
        for (var d = Id(a), e = Hd(d), f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (k != null) {
                var l = Wd(h, e)
                  , n = pj(c, l);
                if (n) {
                    var p = c.Zb
                      , q = void 0
                      , t = void 0
                      , v = void 0;
                    (q = p) == null || !q[l] || ((t = p) == null ? 0 : (v = t.g) == null ? 0 : v[l]) || bj(l);
                    n(b, k, l)
                }
            }
        }
        if (d & 256) {
            d = a[f - 1];
            for (var x in d)
                if (e = +x,
                !Number.isNaN(e) && (f = d[x],
                f != null && (g = pj(c, e))))
                    h = c.Zb,
                    n = l = k = void 0,
                    (k = h) == null || !k[e] || ((l = h) == null ? 0 : (n = l.g) == null ? 0 : n[e]) || bj(e),
                    g(b, f, e)
        }
        if (a = ee ? wb(a)[ee] : void 0)
            for (Ji(b, b.g.end()),
            c = 0; c < a.length; c++) {
                x = a[c];
                zb(x, pd);
                nd(md);
                e = x.g;
                if (e == null || gd && e != null && e instanceof Uint8Array)
                    d = e;
                else if (typeof e === "string")
                    if (d = void 0,
                    hd) {
                        f = e;
                        jd.test(f) && (f = f.replace(jd, ld));
                        try {
                            d = atob(f)
                        } catch (D) {
                            throw Error("invalid encoding '" + e + "': " + D);
                        }
                        e = new Uint8Array(d.length);
                        for (f = 0; f < d.length; f++)
                            e[f] = d.charCodeAt(f);
                        d = e
                    } else
                        d = cd(e);
                else
                    qb("Cannot coerce to Uint8Array: " + Sa(e)),
                    d = null;
                x = (d == null ? d : x.g = d) || new Uint8Array(0);
                Ji(b, x)
            }
    }
    function qj(a, b) {
        return new Qi(a,b,!1,!1)
    }
    function rj(a, b, c) {
        mh(a, Id(a), b, c)
    }
    var zj = 0;
    function bj(a) {
        zj++ < 5 && rd("binary extension " + a + " accessed via indirect require")
    }
    function Aj(a, b, c) {
        b = Tf(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                Pi(c, b, Ci(b));
                break;
            case "number":
                Pi(c, b, b >= -0x7fffffffffffffff && b < 0x7fffffffffffffff);
                break;
            default:
                Pi(c, b, b >= BigInt(-0x7fffffffffffffff) && b < BigInt(0x7fffffffffffffff))
            }
            if (b != null)
                switch (Ki(a, c, 0),
                typeof b) {
                case "number":
                    a = a.g;
                    A(b == Math.floor(b));
                    A(b >= -0x7fffffffffffffff && b < 0x7fffffffffffffff);
                    nf(b);
                    Ei(a, jf, kf);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new Ai(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                    Ei(a.g, c.j, c.g);
                    break;
                default:
                    c = Ci(b),
                    Ei(a.g, c.j, c.g)
                }
        }
    }
    function Bj(a, b, c) {
        b = Ff(b);
        b != null && (Pi(c, b, b >= -2147483648 && b < 2147483648),
        b != null && (Oi(c, b),
        Ki(a, c, 0),
        Gi(a.g, b)))
    }
    function Cj(a, b, c, d, e) {
        b = Xi(b, d);
        b != null && (c = Li(a, c),
        e(b, a),
        Mi(a, c))
    }
    var Dj = qj(function(a, b, c) {
        if (a.g() !== 1)
            return !1;
        a = a.J();
        rj(b, c, a === 0 ? void 0 : a);
        return !0
    }, function(a, b, c) {
        b = uf(b);
        b != null && (Ki(a, c, 1),
        a = a.g,
        A(typeof b === "number" || b === "Infinity" || b === "-Infinity" || b === "NaN"),
        c = pf(8),
        c.setFloat64(0, +b, !0),
        jf = c.getUint32(0, !0),
        kf = c.getUint32(4, !0),
        Hi(a, jf),
        Hi(a, kf))
    }), Ej = qj(function(a, b, c) {
        if (a.g() !== 5)
            return !1;
        rj(b, c, a.O());
        return !0
    }, function(a, b, c) {
        b = uf(b);
        b != null && (Ki(a, c, 5),
        a = a.g,
        A(b == Infinity || b == -Infinity || isNaN(b) || typeof b === "number" && b >= -3.4028234663852886E38 && b <= 3.4028234663852886E38),
        c = pf(4),
        c.setFloat32(0, +b, !0),
        kf = 0,
        jf = c.getUint32(0, !0),
        Hi(a, jf))
    }), Fj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.B());
        return !0
    }, Aj), Gj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        a = a.B();
        rj(b, c, a === 0 ? void 0 : a);
        return !0
    }, Aj), Hj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.X());
        return !0
    }, function(a, b, c) {
        b = Uf(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                Pi(c, b, zi(b));
                break;
            case "number":
                Pi(c, b, b >= 0 && b < 1.8446744073709552E19);
                break;
            default:
                Pi(c, b, b >= BigInt(0) && b < BigInt(1.8446744073709552E19))
            }
            if (b != null)
                switch (Ki(a, c, 0),
                typeof b) {
                case "number":
                    a = a.g;
                    A(b == Math.floor(b));
                    A(b >= 0 && b < 1.8446744073709552E19);
                    nf(b);
                    Ei(a, jf, kf);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new xi(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                    Ei(a.g, c.j, c.g);
                    break;
                default:
                    c = zi(b),
                    Ei(a.g, c.j, c.g)
                }
        }
    }), Ij = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.A());
        return !0
    }, Bj), Jj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        a = a.A();
        rj(b, c, a === 0 ? void 0 : a);
        return !0
    }, Bj), Kj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.H());
        return !0
    }, function(a, b, c) {
        b = xf(b);
        b != null && (Pi(c, b, typeof b === "boolean" || typeof b === "number"),
        Ki(a, c, 0),
        a = a.g,
        A(typeof b === "boolean" || typeof b === "number"),
        a.g.push(b ? 1 : 0))
    }), Lj = qj(function(a, b, c) {
        if (a.g() !== 2)
            return !1;
        rj(b, c, a.C());
        return !0
    }, function(a, b, c) {
        b = Xf(b);
        b != null && Ni(a, c, Eb(b))
    }), Mj;
    Mj = new Qi(function(a, b, c) {
        if (a.g() !== 2)
            return !1;
        a = a.C();
        var d = Id(b);
        ae(d);
        b = rh(b, d, c, 2);
        b.push(a);
        ie(b);
        return !0
    }
    ,function(a, b, c) {
        b = Zi(Xf, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a
                  , f = c
                  , g = b[d];
                g != null && Ni(e, f, Eb(g))
            }
    }
    ,!0,!1);
    var Ti = new Qi(function(a, b, c, d, e) {
        if (a.g() !== 2)
            return !1;
        a.j(Mh(b, d, c, !0), e);
        return !0
    }
    ,Cj,!1,!0), gj = new Qi(function(a, b, c, d, e) {
        if (a.g() !== 2)
            return !1;
        a.j(Mh(b, d, c), e);
        return !0
    }
    ,Cj,!1,!0), Nj;
    Nj = new Qi(function(a, b, c, d, e) {
        if (a.g() !== 2)
            return !1;
        var f = a.j;
        d = Fg(void 0, d);
        var g = Id(b);
        ae(g);
        var h = rh(b, g, c, 3);
        g = Id(b);
        if (Fd(h) & 4) {
            h = ud(h);
            var k = Fd(h);
            Jd(h, (k | 1) & -2079);
            mh(b, g, c, h)
        }
        h.push(d);
        f.call(a, d, e);
        return !0
    }
    ,function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Cj(a, b[f], c, d, e)
    }
    ,!0,!0);
    var Oj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.V());
        return !0
    }, function(a, b, c) {
        b = Gf(b);
        b != null && (Pi(c, b, b >= 0 && b < 4294967296),
        b != null && (Ki(a, c, 0),
        Fi(a.g, b)))
    }), Pj = qj(function(a, b, c) {
        if (a.g() !== 0)
            return !1;
        rj(b, c, a.K());
        return !0
    }, function(a, b, c) {
        b = Ff(b);
        b != null && (b = parseInt(b, 10),
        Oi(c, b),
        Ki(a, c, 0),
        Gi(a.g, b))
    }), Qj;
    Qj = new Qi(function(a, b, c) {
        if (a.g() !== 0 && a.g() !== 2)
            return !1;
        var d = a.U;
        var e = e === void 0 ? !1 : e;
        b = qh(rh(b, Id(b), c, 2, e), b, !1, !0);
        d.call(a, b);
        return !0
    }
    ,function(a, b, c) {
        b = Zi(Ff, b);
        if (b != null && b.length) {
            c = Li(a, c);
            for (var d = 0; d < b.length; d++) {
                var e = a.g
                  , f = b[d];
                A(f == Math.floor(f));
                A(f >= -2147483648 && f < 2147483648);
                Gi(e, f)
            }
            Mi(a, c)
        }
    }
    ,!0,!1);
    function Rj(a) {
        if (a instanceof ti)
            return a.constructor.g
    }
    ;(function() {
        var a = y.jspbGetTypeName;
        y.jspbGetTypeName = a ? function(b) {
            return a(b) || Rj(b)
        }
        : Rj
    }
    )();
    var G = ti;
    function Sj(a) {
        return function() {
            zg(this);
            var b = new Ii;
            kj(zb(this, ti).W, b, jj(a));
            Ji(b, b.g.end());
            for (var c = new Uint8Array(b.j), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            A(f == c.length);
            b.l = [c];
            return c
        }
    }
    function Tj(a) {
        return function(b) {
            tb(a);
            if (b == null || b == "")
                b = zb(new a, ti);
            else {
                sb(b);
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("Expected to deserialize an Array but got " + Sa(b) + ": " + b);
                b = Bg(a, Md(b))
            }
            return b
        }
    }
    ;var Uj = function(a) {
        G.call(this, a)
    };
    w(Uj, G);
    Uj.g = "contentads.shared.capture.remote.ClientPingMetadata";
    var Vj = function(a, b, c) {
        c = c === void 0 ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
      , Wj = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Xj = function() {}
      , Yj = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
      , Zj = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
      , ak = function(a) {
        var b = 0
          , c = !1
          , d = []
          , e = function() {
            b = 0;
            c && (c = !1,
            f())
        }
          , f = function() {
            b = y.setTimeout(e, 1E3);
            var g = d;
            d = [];
            a.apply(void 0, g)
        };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var bk = Yj(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            y.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function ck(a) {
        return a ? a.passive && bk() ? a : a.capture || !1 : !1
    }
    var dk = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ck(d)),
        !0) : !1
    }
      , ek = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, ck())
    };
    /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    var fk = {};
    function gk() {
        if (fk !== fk)
            throw Error("Bad secret");
    }
    ;var hk = globalThis.trustedTypes, ik;
    function jk() {
        var a = null;
        if (!hk)
            return a;
        try {
            var b = function(c) {
                return c
            };
            a = hk.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {
            throw c;
        }
        return a
    }
    function kk() {
        ik === void 0 && (ik = jk());
        return ik
    }
    ;var lk = function(a) {
        gk();
        this.g = a
    };
    lk.prototype.toString = function() {
        return this.g + ""
    }
    ;
    function mk(a) {
        var b = kk();
        return new lk(b ? b.createScriptURL(a) : a)
    }
    ;var nk = ia([""])
      , ok = fa(["\x00"], ["\\0"])
      , pk = fa(["\n"], ["\\n"])
      , qk = fa(["\x00"], ["\\u0000"])
      , rk = ia([""])
      , sk = fa(["\x00"], ["\\0"])
      , tk = fa(["\n"], ["\\n"])
      , uk = fa(["\x00"], ["\\u0000"]);
    function vk(a, b) {
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !wk && a === a.raw || !(wk && !xk || yk(a)) || b + 1 !== a.length)
            throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
    }
    function yk(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }
    function zk(a) {
        return a.toString().indexOf("`") === -1
    }
    var wk = zk(function(a) {
        return a(nk)
    }) || zk(function(a) {
        return a(ok)
    }) || zk(function(a) {
        return a(pk)
    }) || zk(function(a) {
        return a(qk)
    })
      , xk = yk(rk) && yk(sk) && yk(tk) && yk(uk);
    var Ak = function(a) {
        gk();
        this.g = a
    };
    Ak.prototype.toString = function() {
        return this.g
    }
    ;
    new Ak("about:blank");
    var Bk = new Ak("about:invalid#zClosurez");
    var Ck = function(a) {
        this.bh = a
    };
    function Dk(a) {
        return new Ck(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var Ek = [Dk("data"), Dk("http"), Dk("https"), Dk("mailto"), Dk("ftp"), new Ck(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function Fk(a) {
        if (typeof MediaSource !== "undefined" && a instanceof MediaSource)
            return new Ak(URL.createObjectURL(a));
        var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
        if ((b == null ? void 0 : b.length) !== 2 || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1])))
            throw Error("unsafe blob MIME type: " + a.type);
        return new Ak(URL.createObjectURL(a))
    }
    var Gk = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
      , Hk = []
      , Ik = function() {};
    Jk(function(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    });
    function Jk(a) {
        Hk.indexOf(a) === -1 && Hk.push(a);
        Ik = function(b) {
            Hk.forEach(function(c) {
                c(b)
            })
        }
    }
    ;var Kk = function(a) {
        gk();
        this.g = a
    };
    Kk.prototype.toString = function() {
        return this.g + ""
    }
    ;
    function Lk(a) {
        if (a instanceof Kk)
            return a.g;
        throw Error("Unexpected type when unwrapping SafeHtml");
    }
    ;var Mk = function(a) {
        gk();
        this.g = a
    };
    Mk.prototype.toString = function() {
        return this.g
    }
    ;
    function Nk(a) {
        var b = Ka.apply(1, arguments);
        vk(a, b.length);
        if (b.length === 0)
            return mk(a[0]);
        var c = a[0].toLowerCase();
        if (/^data:/.test(c))
            throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d)
                throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d))
                throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d))
                throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(d))
                throw Error("The top-level domain must start with a letter.");
            d = !0
        } else
            d = !1;
        if (!d)
            if (/^\//.test(c))
                if (c === "/" || c.length > 1 && c[1] !== "/" && c[1] !== "\\")
                    d = !0;
                else
                    throw Error("The path start in the url is invalid.");
            else
                d = !1;
        if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
            if (/^about:blank/.test(c)) {
                if (c !== "about:blank" && !/^about:blank#/.test(c))
                    throw Error("The about url is invalid.");
                d = !0
            } else
                d = !1;
        if (!d)
            throw Error("Trying to interpolate expressions in an unsupported url format.");
        c = a[0];
        for (d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return mk(c)
    }
    ;function Ok(a) {
        var b = Ka.apply(1, arguments);
        vk(a, b.length);
        for (var c = a[0], d = 0; d < a.length - 1; d++)
            c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c))
            throw Error("Forbidden characters in style string: " + c);
        if (c.length === 0)
            return new Mk(c);
        if (!/;$/.test(c))
            throw Error('Style string does not end with ";": ' + c);
        if (!/:/.test(c))
            throw Error('Style string should contain one or more ":": ' + c);
        return new Mk(c)
    }
    ;function Pk(a) {
        if (typeof a !== "string" || a.trim() === "")
            throw Error("Calls to uncheckedconversion functions must go through security review. A justification must be provided to capture what security assumptions are being made. See go/unchecked-conversions");
    }
    function Qk(a) {
        Pk("Output of CSS sanitizer");
        return new Mk(a)
    }
    ;var Rk = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    m = Rk.prototype;
    m.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    }
    ;
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    }
    ;
    var Sk = function(a, b) {
        this.width = a;
        this.height = b
    }
      , Tk = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    m = Sk.prototype;
    m.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    }
    ;
    m.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    m.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function Uk(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Vk(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Wk(a) {
        var b = Xk, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function Yk(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Zk(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function $k(a, b) {
        var c = Ta(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (a == null)
                return;
            a = a[d[c]]
        }
        return a
    }
    function al(a, b) {
        return a !== null && b in a
    }
    function bl(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function cl(a) {
        var b = dl, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    function el(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function fl(a) {
        for (var b in a)
            delete a[b]
    }
    function gl(a, b, c) {
        return a !== null && b in a ? a[b] : c
    }
    var hl = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function il(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < hl.length; f++)
                c = hl[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;function jl(a, b) {
        if (a.nodeType === 1) {
            var c = a.tagName;
            if (c === "SCRIPT" || c === "STYLE")
                throw Error(c === "SCRIPT" ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Lk(b)
    }
    ;function kl(a, b) {
        if (b instanceof lk)
            b = b.g;
        else
            throw Error("Unexpected type when unwrapping TrustedResourceUrl");
        a.src = b;
        var c, d;
        (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;var ll = function(a) {
        var b = []
          , c = []
          , d = {}
          , e = function(f, g) {
            var h = g + "  ";
            try {
                if (f === void 0)
                    b.push("undefined");
                else if (f === null)
                    b.push("NULL");
                else if (typeof f === "string")
                    b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                else if (typeof f === "function")
                    b.push(String(f).replace(/\n/g, "\n" + g));
                else if (Va(f)) {
                    f[Wa] || c.push(f);
                    var k = Za(f);
                    if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                    else {
                        d[k] = !0;
                        b.push("{");
                        for (var l in f)
                            typeof f[l] !== "function" && (b.push("\n"),
                            b.push(h),
                            b.push(l + " = "),
                            e(f[l], h));
                        b.push("\n" + g + "}");
                        delete d[k]
                    }
                } else
                    b.push(f)
            } catch (n) {
                b.push("*** " + n + " ***")
            }
        };
        e(a, "");
        for (a = 0; a < c.length; a++)
            $a(c[a]);
        return b.join("")
    }
      , ml = Object.freeze || function(a) {
        return a
    }
    ;
    var nl = function(a, b) {
        this.name = a;
        this.value = b
    };
    nl.prototype.toString = function() {
        return this.name
    }
    ;
    var ol = new nl("OFF",Infinity), pl = new nl("SEVERE",1E3), ql = new nl("WARNING",900), rl = new nl("INFO",800), sl = new nl("CONFIG",700), tl = new nl("FINE",500), ul = function() {
        this.clear()
    }, vl;
    ul.prototype.clear = function() {}
    ;
    var wl = function(a, b, c) {
        this.g = void 0;
        this.reset(a || ol, b, c, void 0, void 0)
    };
    wl.prototype.reset = function(a, b, c, d, e) {
        this.l = d || fb();
        this.o = a;
        this.A = b;
        this.j = c;
        this.g = void 0;
        this.B = typeof e === "number" ? e : xl
    }
    ;
    wl.prototype.getLevel = function() {
        return this.o
    }
    ;
    wl.prototype.getMessage = function() {
        return this.A
    }
    ;
    wl.prototype.Pd = function() {
        return this.B
    }
    ;
    var xl = 0, yl = function(a, b) {
        this.level = null;
        this.j = [];
        this.g = (b === void 0 ? null : b) || null;
        this.children = [];
        this.l = {
            getName: function() {
                return a
            }
        }
    }, zl = function(a) {
        if (a.level)
            return a.level;
        if (a.g)
            return zl(a.g);
        qb("Root logger has no level set.");
        return ol
    }, Al = function(a, b) {
        for (; a; )
            a.j.forEach(function(c) {
                c(b)
            }),
            a = a.g
    }, Bl = function() {
        this.entries = {};
        var a = new yl("");
        a.level = sl;
        this.entries[""] = a
    }, Cl, Dl = function(a, b) {
        var c = a.entries[b];
        if (c)
            return c;
        c = Dl(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
        var d = new yl(b,c);
        a.entries[b] = d;
        c.children.push(d);
        return d
    }, El = function() {
        Cl || (Cl = new Bl);
        return Cl
    }, Fl = function(a) {
        return Dl(El(), a).l
    }, Gl = function(a, b, c, d) {
        var e;
        if (e = a)
            if (e = a && b) {
                e = b.value;
                var f = a ? zl(Dl(El(), a.getName())) : ol;
                e = e >= f.value
            }
        e && (b = b || ol,
        e = Dl(El(), a.getName()),
        typeof c === "function" && (c = c()),
        vl || (vl = new ul),
        a = a.getName(),
        a = new wl(b,c,a),
        a.g = d,
        Al(e, a))
    }, Hl = function(a, b, c) {
        a && Gl(a, pl, b, c)
    }, Il = function(a, b) {
        a && Gl(a, ql, b)
    }, Jl = function(a, b) {
        a && Gl(a, rl, b)
    }, Kl = function(a, b) {
        a && Gl(a, tl, b)
    };
    function Ll(a, b) {
        a.write(Lk(b))
    }
    ;var Ml = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Nl = function(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
      , Ol = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Pl = function(a) {
        return a == null ? "" : String(a)
    }
      , Ql = Math.random() * 2147483648 | 0
      , Rl = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Sl = function() {
        return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
    }
      , Tl = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
      , Ul = function(a) {
        isFinite(a) && (a = String(a));
        return typeof a === "string" ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    var Xl = function(a) {
        return a ? new Vl(Wl(a)) : jb || (jb = new Vl)
    }
      , Yl = function(a) {
        var b = document;
        return typeof a === "string" ? b.getElementById(a) : a
    }
      , $l = function(a, b) {
        Uk(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Zl.hasOwnProperty(d) ? a.setAttribute(Zl[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , Zl = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , am = function(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new Sk(a.clientWidth,a.clientHeight)
    }
      , bm = function(a) {
        var b = a.scrollingElement ? a.scrollingElement : Fc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new Rk(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , cm = function(a) {
        return a ? a.defaultView : window
    }
      , fm = function(a, b, c) {
        var d = arguments
          , e = document
          , f = d[1]
          , g = dm(e, String(d[0]));
        f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : $l(g, f));
        d.length > 2 && em(e, g, d, 2);
        return g
    }
      , em = function(a, b, c, d) {
        function e(h) {
            h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Ta(f) || Va(f) && f.nodeType > 0)
                e(f);
            else {
                a: {
                    if (f && typeof f.length == "number") {
                        if (Va(f)) {
                            var g = typeof f.item == "function" || typeof f.item == "string";
                            break a
                        }
                        if (typeof f === "function") {
                            g = typeof f.item == "function";
                            break a
                        }
                    }
                    g = !1
                }
                cc(g ? sc(f) : f, e)
            }
        }
    }
      , dm = function(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , gm = function(a, b) {
        A(a != null && b != null, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    }
      , hm = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
      , im = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && b.nodeType == 1)
            return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined")
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , Wl = function(a) {
        A(a, "Node cannot be null or undefined.");
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
      , jm = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? cm(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
      , km = function(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            A(a.name != "parentNode");
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
      , Vl = function(a) {
        this.g = a || y.document || document
    };
    m = Vl.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    m.appendChild = gm;
    m.append = function(a, b) {
        em(Wl(a), a, arguments, 1)
    }
    ;
    m.canHaveChildren = function(a) {
        if (a.nodeType != 1)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    m.contains = im;
    var mm = function() {
        return Ob && Rb ? Rb.mobile : !lm() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))
    }
      , lm = function() {
        return Ob && Rb ? !Rb.mobile && (B("iPad") || B("Android") || B("Silk")) : B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var nm = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , om = function(a) {
        var b = a.match(nm);
        a = b[1];
        var c = b[3];
        b = b[4];
        var d = "";
        a && (d += a + ":");
        c && (d = d + "//" + c,
        b && (d += ":" + b));
        return d
    }
      , pm = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (d >= 0) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Ml(e) : "")
            }
        }
    }
      , qm = /#|$/
      , rm = function(a, b) {
        var c = a.search(qm);
        a: {
            var d = 0;
            for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e),
                    !f || f == 61 || f == 38 || f == 35)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0)
            return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c)
            e = c;
        d += b.length + 1;
        return Ml(a.slice(d, e !== -1 ? e : 0))
    };
    var sm = function(a) {
        try {
            return !!a && a.location.href != null && yc(a, "foo")
        } catch (b) {
            return !1
        }
    }
      , um = function(a) {
        var b = b === void 0 ? !1 : b;
        var c = c === void 0 ? y : c;
        for (var d = 0; c && d++ < 40 && (!b && !sm(c) || !a(c)); )
            c = tm(c)
    }
      , vm = function() {
        var a = window;
        um(function(b) {
            a = b;
            return !1
        });
        return a
    }
      , tm = function(a) {
        try {
            var b = a.parent;
            if (b && b != a)
                return b
        } catch (c) {}
        return null
    }
      , wm = function() {
        var a = window;
        return sm(a.top) ? a.top : null
    }
      , xm = function() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , ym = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , zm = function(a) {
        var b = a.length;
        if (b == 0)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    };
    function Am(a) {
        var b, c;
        return (c = (b = /https?:\/\/[^\/]+/.exec(a)) == null ? void 0 : b[0]) != null ? c : ""
    }
    var Bm = function() {
        var a = y;
        try {
            for (var b = null; b != a; b = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
                }
        } catch (c) {}
        return !0
    }
      , Cm = function(a) {
        a = a && a.toString && a.toString();
        return typeof a === "string" && Kb(a, "[native code]")
    }
      , Dm = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , Em = function(a, b) {
        for (var c = 0; c < 50; ++c) {
            if (Dm(a, b))
                return a;
            if (!(a = tm(a)))
                break
        }
        return null
    }
      , Fm = Yj(function() {
        return mm() ? 2 : lm() ? 1 : 0
    })
      , Gm = function() {
        var a = window;
        if (typeof a.goog_pvsid !== "number")
            try {
                var b = Object
                  , c = b.defineProperty
                  , d = void 0;
                d = d === void 0 ? Math.random : d;
                var e = Math.floor(d() * 4503599627370496);
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !0
                })
            } catch (f) {}
        return Number(a.goog_pvsid) || -1
    }
      , Hm = function(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
      , Im = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            sm(a) && (b = a);
        return b
    };
    var Km = function(a, b, c, d, e) {
        Jm(a, b, c === void 0 ? null : c, d === void 0 ? !1 : d, e === void 0 ? !1 : e)
    };
    function Jm(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Hm("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && oc(a.google_image_requests, f);
                ek(f, "load", g);
                ek(f, "error", g)
            };
            dk(f, "load", g);
            dk(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Mm = function(a, b) {
        var c = c === void 0 ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        ym(a, function(e, f) {
            if (e || e === 0)
                d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        Lm(d, c)
    }
      , Lm = function(a, b) {
        var c = window;
        b = b === void 0 ? !1 : b;
        var d = d === void 0 ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : Km(c, a, void 0, b, d)
    };
    function Nm(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Af] = d.af,
                e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Vd
            }).map(c), vi(b), a.filter(function(d) {
                return !d.Vd
            }).map(c)])
        } catch (d) {
            return Om(d, b),
            ""
        }
    }
    function Om(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a))
              , d = c.toString();
            c.name && d.indexOf(c.name) == -1 && (d += ": " + c.name);
            c.message && d.indexOf(c.message) == -1 && (d += ": " + c.message);
            if (c.stack)
                a: {
                    var e = c.stack;
                    a = d;
                    try {
                        e.indexOf(a) == -1 && (e = a + "\n" + e);
                        for (var f; e != f; )
                            f = e,
                            e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                        d = e.replace(RegExp("\n *", "g"), "\n");
                        break a
                    } catch (g) {
                        d = a;
                        break a
                    }
                    d = void 0
                }
            Mm({
                m: d,
                b: di(b, 1) || null,
                v: E(b, 2) || null
            }, "rcs_internal")
        } catch (g) {}
    }
    var Pm = function(a, b) {
        var c = new Uj;
        a = F(c, 1, a);
        b = Eh(a, 2, Wf(b), "");
        a = b.W;
        c = Id(a);
        this.l = c & 2 ? b : gh(b, a, c, !0)
    };
    var Qm = function(a) {
        G.call(this, a)
    };
    w(Qm, G);
    Qm.g = "contentads.shared.capture.remote.ClientMetricUpdate.ColumnValue";
    var Rm = [1, 2, 3];
    var Sm = function(a) {
        G.call(this, a)
    };
    w(Sm, G);
    Sm.g = "contentads.shared.capture.remote.ClientMetricUpdate.MetricValue";
    var Tm = [2, 4];
    var Um = function(a) {
        G.call(this, a)
    };
    w(Um, G);
    Um.g = "contentads.shared.capture.remote.ClientMetricUpdate";
    var Vm = function(a) {
        G.call(this, a)
    };
    w(Vm, G);
    Vm.g = "tagging.common.experiments.GenotypeDisjointConditionCollisionEvent";
    var Wm = function(a) {
        G.call(this, a)
    };
    w(Wm, G);
    var Xm = function(a, b) {
        return F(a, 1, b)
    }
      , Ym = function(a, b) {
        return F(a, 2, b)
    };
    Wm.g = "tagging.common.experiments.GenotypeDiversionEvent.DiversionPointInBinary";
    var Zm = function(a) {
        G.call(this, a)
    };
    w(Zm, G);
    Zm.g = "tagging.common.experiments.GenotypeDiversionEvent.ModAssignment";
    var jn = [1, 2];
    var kn = function(a) {
        G.call(this, a)
    };
    w(kn, G);
    var ln = function(a, b) {
        return C(a, Wm, 1, b)
    }
      , mn = function(a, b) {
        return Th(a, Wm, 2, b)
    }
      , nn = function(a, b) {
        return Dh(a, 4, b, Ef)
    }
      , on = function(a, b) {
        return Th(a, Zm, 5, b)
    }
      , pn = function(a, b) {
        return F(a, 6, b)
    };
    kn.g = "tagging.common.experiments.GenotypeDiversionEvent";
    var qn = function(a) {
        G.call(this, a)
    };
    w(qn, G);
    qn.g = "tagging.common.experiments.GenotypeFlagsOverriddenAfterAccessEvent.FlagOverriddenAfterAccess";
    var rn = [1, 2, 3, 4, 6];
    var sn = function(a) {
        G.call(this, a)
    };
    w(sn, G);
    sn.g = "tagging.common.experiments.GenotypeFlagsOverriddenAfterAccessEvent";
    var tn = function(a) {
        G.call(this, a)
    };
    w(tn, G);
    tn.g = "tagging.common.experiments.GenotypePropertyErrorEvent.PropertyError";
    var un = [2, 3, 4];
    var vn = function(a) {
        G.call(this, a)
    };
    w(vn, G);
    vn.g = "tagging.common.experiments.Condition";
    var wn = [3, 4, 5]
      , xn = [6, 7];
    var yn = function(a) {
        G.call(this, a)
    };
    w(yn, G);
    yn.g = "tagging.common.experiments.GenotypePropertyErrorEvent";
    var zn = [4, 5];
    var An = function(a) {
        G.call(this, a)
    };
    w(An, G);
    var Cn = function(a) {
        var b = new An;
        return Sh(b, kn, 4, Bn, a)
    };
    An.g = "tagging.common.experiments.GenotypeEvent";
    var Bn = [4, 5, 7, 8, 9];
    var Dn = function(a) {
        G.call(this, a)
    };
    w(Dn, G);
    Dn.g = "ima.Duration";
    var En = function(a) {
        G.call(this, a)
    };
    w(En, G);
    En.g = "ima.ElementPosition";
    var Fn = function(a) {
        G.call(this, a)
    };
    w(Fn, G);
    Fn.g = "ima.ElementSize";
    var Gn = function(a) {
        G.call(this, a)
    };
    w(Gn, G);
    Gn.prototype.pb = function() {
        return Ph(this, En, 1)
    }
    ;
    Gn.prototype.getSize = function() {
        return Ph(this, Fn, 2)
    }
    ;
    Gn.prototype.getDuration = function() {
        return Ph(this, Dn, 3)
    }
    ;
    Gn.g = "ima.IMAContentVerificationVideoFoundSignals";
    var Hn = function(a) {
        G.call(this, a)
    };
    w(Hn, G);
    Hn.g = "ima.ImaContentVerificationMeasurement";
    var In = function(a) {
        G.call(this, a)
    };
    w(In, G);
    In.g = "ima.Interval";
    var Jn = function(a) {
        G.call(this, a)
    };
    w(Jn, G);
    Jn.g = "ima.LatencyEvents";
    new function(a) {
        A(a > 0);
        this.defaultValue = void 0
    }
    (4156379);
    var Kn = function(a) {
        G.call(this, a)
    };
    w(Kn, G);
    Kn.prototype.getEscapedQemQueryId = function() {
        return E(this, 4)
    }
    ;
    Kn.g = "tagging.turtledove.common.GoogleBuyerSignals";
    var Ln = function(a) {
        G.call(this, a)
    };
    w(Ln, G);
    Ln.g = "tagging.turtledove.common.SellerSignals.AuctionData";
    var Mn = function(a) {
        G.call(this, a)
    };
    w(Mn, G);
    Mn.prototype.getEscapedQemQueryId = function() {
        return E(this, 2)
    }
    ;
    Mn.g = "tagging.turtledove.common.SellerSignals";
    var On = function(a) {
        this.g = a;
        this.Dh = new Nn(this.g)
    }
      , Nn = function(a) {
        this.g = a;
        this.Hh = new Pn(this.g)
    }
      , Pn = function(a) {
        this.g = a;
        this.rg = new Qn(this.g)
    }
      , Qn = function(a) {
        this.g = a
    }
      , Rn = function(a, b) {
        a = a.g;
        var c = a.H;
        var d = new Um;
        d = Eh(d, 1, Wf("SOomke"), "");
        var e = new Qm;
        e = Hh(e, 1, Rm, Wf(b.Dd));
        d = Wh(d, 4, Qm, e);
        e = new Qm;
        e = Hh(e, 1, Rm, Wf(b.status));
        d = Wh(d, 4, Qm, e);
        e = new Sm;
        b = b.qe;
        var f = Math.round(b);
        te(f === b, "Expected integer, but got " + b);
        b = Hh(e, 2, Tm, Nf(f));
        b = C(d, Sm, 3, b);
        c.call(a, b)
    }
      , Sn = function() {
        Pm.apply(this, arguments);
        this.hh = new On(this)
    };
    w(Sn, Pm);
    var Tn = function() {
        Sn.apply(this, arguments)
    };
    w(Tn, Sn);
    Tn.prototype.nd = function() {
        this.B.apply(this, ka(Ka.apply(0, arguments).map(function(a) {
            return {
                Vd: !0,
                Af: 4,
                af: vi(a)
            }
        })))
    }
    ;
    Tn.prototype.H = function() {
        this.B.apply(this, ka(Ka.apply(0, arguments).map(function(a) {
            return {
                Vd: !1,
                Af: 1,
                af: vi(a)
            }
        })))
    }
    ;
    var Un = function(a, b) {
        if (globalThis.fetch)
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Vn = function(a, b, c, d, e, f, g, h) {
        Tn.call(this, a, b);
        this.D = c;
        this.L = d;
        this.F = e;
        this.C = f;
        this.I = g;
        this.o = h;
        this.g = [];
        this.j = null;
        this.A = !1
    };
    w(Vn, Tn);
    var Wn = function(a) {
        a.j !== null && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = Nm(a.g, a.l);
            a.L(a.D + "?e=1", b);
            a.g = []
        }
    };
    Vn.prototype.B = function() {
        var a = Ka.apply(0, arguments)
          , b = this;
        try {
            this.I && Nm(this.g.concat(a), this.l).length >= 65536 && Wn(this),
            this.o && !this.A && (this.A = !0,
            this.o.g(function() {
                Wn(b)
            })),
            this.g.push.apply(this.g, ka(a)),
            this.g.length >= this.C && Wn(this),
            this.g.length && this.j === null && (this.j = setTimeout(function() {
                Wn(b)
            }, this.F))
        } catch (c) {
            Om(c, this.l)
        }
    }
    ;
    var Xn = function(a, b, c, d, e, f) {
        Vn.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Un, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!globalThis.fetch, f)
    };
    w(Xn, Vn);
    var H = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    H.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    H.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    var Yn = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    };
    m = H.prototype;
    m.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    }
    ;
    m.contains = function(a) {
        return this && a ? a instanceof H ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    m.expand = function(a, b, c, d) {
        Va(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var Zn = function(a, b, c) {
        b instanceof Rk ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (rb(b),
        a.left += b,
        a.right += b,
        typeof c === "number" && (a.top += c,
        a.bottom += c));
        return a
    };
    H.prototype.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var $n = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , ao = function(a) {
        return new H(a.top,a.left + a.width,a.top + a.height,a.left)
    };
    m = $n.prototype;
    m.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    }
    ;
    m.contains = function(a) {
        return a instanceof Rk ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    m.getSize = function() {
        return new Sk(this.width,this.height)
    }
    ;
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    m.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    function bo(a) {
        a = a === void 0 ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (e) {}
        var c, d;
        return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
    }
    ;var co = function() {
        this.S = {}
    }
      , eo = function() {
        var a = bo(window);
        if (a) {
            if (a) {
                var b = a.pageViewId;
                a = a.clientId;
                typeof a === "string" && (b += a.replace(/\D/g, "").substr(0, 6))
            } else
                b = null;
            return +b
        }
        b = Im(window);
        a = b.google_global_correlator;
        a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * 8796093022208));
        return a
    }
      , go = function(a, b) {
        var c = fo[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        return d === void 0 ? (a[c] = b(),
        a[c]) : d
    }
      , ho = function(a) {
        var b = eo();
        return go(a, function() {
            return b
        })
    }
      , jo = function() {
        if (io)
            var a = io;
        else {
            a = ((a = a === void 0 ? bo() : a) ? sm(a.master) ? a.master : null : null) || window;
            var b = a.google_persistent_state_async;
            a = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? io = b : a.google_persistent_state_async = io = new co
        }
        return ho(a)
    }
      , io = null
      , ko = {}
      , fo = (ko[8] = "google_prev_ad_formats_by_region",
    ko[9] = "google_prev_ad_slotnames_by_region",
    ko);
    var lo = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , mo = function() {
        var a = a === void 0 ? "jserror" : a;
        var b = b === void 0 ? .01 : b;
        var c = c === void 0 ? Nk(lo) : c;
        this.j = a;
        this.l = !0;
        this.g = null;
        this.o = !1;
        this.C = Math.random();
        this.A = b;
        this.B = this.ab;
        this.I = c
    };
    m = mo.prototype;
    m.ne = function(a) {
        this.j = a
    }
    ;
    m.od = function(a) {
        this.g = a
    }
    ;
    m.oe = function(a) {
        this.l = a
    }
    ;
    m.pe = function(a) {
        this.o = a
    }
    ;
    m.ab = function(a, b, c, d, e) {
        c = c === void 0 ? this.A : c;
        e = e === void 0 ? this.j : e;
        if ((this.o ? this.C : Math.random()) > c)
            return this.l;
        Wj(b) || (b = new Vj(b,{
            context: a,
            id: e
        }));
        if (d || this.g)
            b.meta = {},
            this.g && this.g(b.meta),
            d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (b = y.document,
        a = Hm("SCRIPT", b),
        kl(a, this.I),
        (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b),
        y.error_rep_loaded = !0);
        return this.l
    }
    ;
    m.Eb = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.B(a, d, this.A, c, this.j))
                throw d;
        }
    }
    ;
    m.fe = function(a, b, c, d) {
        var e = this;
        tb(b);
        return function() {
            var f = Ka.apply(0, arguments);
            return e.Eb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    var no = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , oo = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    var po = null
      , qo = function() {
        if (po === null) {
            po = "";
            try {
                var a = "";
                try {
                    a = y.top.location.hash
                } catch (c) {
                    a = y.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    po = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return po
    };
    function ro() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : fb()
    }
    function so() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    function to(a, b) {
        b = b === void 0 ? y : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    }
    function uo() {
        var a = a === void 0 ? y : a;
        var b = Math.min(to("domLoading", a) || Infinity, to("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(to("responseEnd", a), to("navigationStart", a)) : b
    }
    ;var vo = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var wo = y.performance
      , xo = !!(wo && wo.mark && wo.measure && wo.clearMarks)
      , yo = Yj(function() {
        var a;
        if (a = xo)
            a = qo(),
            a = !!a.indexOf && a.indexOf("1337") >= 0;
        return a
    })
      , zo = function(a, b) {
        this.events = [];
        this.g = b || y;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.l = yo() || (c != null ? c : Math.random() < a)
    };
    zo.prototype.B = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (yo() && cc(this.events, Ao),
        this.events.length = 0)
    }
    ;
    zo.prototype.C = function(a) {
        !this.l || this.events.length > 2048 || this.events.push(a)
    }
    ;
    var Ao = function(a) {
        a && wo && yo() && (wo.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        wo.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    zo.prototype.start = function(a, b) {
        if (!this.l)
            return null;
        a = new vo(a,b,so() || ro());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        wo && yo() && wo.mark(b);
        return a
    }
    ;
    zo.prototype.end = function(a) {
        if (this.l && (A(a),
        typeof a.value === "number")) {
            a.duration = (so() || ro()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            wo && yo() && wo.mark(b);
            this.C(a)
        }
    }
    ;
    var Bo = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    function Co(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        if (typeof a !== "string")
            throw Error("Expected a string");
        var b = kk();
        return new Kk(b ? b.createHTML(a) : a)
    }
    ;function Do(a, b, c) {
        ym(b, function(d, e) {
            var f = c && c[e];
            !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)),
            c && (c[e] = !0))
        });
        return a
    }
    var Jo = function(a, b, c, d, e, f, g, h) {
        f = f === void 0 ? Infinity : f;
        g = g === void 0 ? !1 : g;
        zo.call(this, a, h);
        var k = this;
        this.U = b;
        this.domain = c;
        this.path = d;
        this.X = e;
        this.I = 0;
        this.A = {};
        this.F = {};
        this.V = [];
        this.report = {};
        this.j = 0;
        this.D = [];
        this.H = f;
        a = this.g.navigator;
        this.P = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || Eo(this, "dat", 1);
        a && a.deviceMemory && Eo(this, "dmc", a.deviceMemory);
        this.g === this.g.top && Eo(this, "top", 1);
        this.O = !g;
        this.J = function() {
            k.g.setTimeout(function() {
                Fo(k)
            }, 1100)
        }
        ;
        this.K = function() {
            Eo(k, "uet", 2);
            for (var n = u(k.V), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                try {
                    p()
                } catch (t) {}
            }
            n = k.g;
            var q = q === void 0 ? {} : q;
            typeof window.CustomEvent === "function" ? p = new CustomEvent("rum_blp",q) : (p = document.createEvent("CustomEvent"),
            p.initCustomEvent("rum_blp", !!q.bubbles, !!q.cancelable, q.detail));
            n.dispatchEvent(p);
            Fo(k);
            k.A.uet != null && (k.o -= 3 + k.A.uet.length + 2,
            delete k.A.uet)
        }
        ;
        this.Z = ak(function() {
            Fo(k)
        });
        this.ba = function() {
            var n = k.g.document;
            (n.hidden != null ? n.hidden : n.mozHidden != null ? n.mozHidden : n.webkitHidden != null && n.webkitHidden) && k.Z()
        }
        ;
        this.L = this.g.setTimeout(function() {
            Fo(k)
        }, 5E3);
        this.o = b.length + c.length + d.length + e.length + 3;
        cc(this.events, function(n) {
            Go(k, n)
        });
        b = Bo(this.g);
        var l = function() {
            var n = Ka.apply(0, arguments)[0];
            oe(n, He());
            te(n.length === 2);
            var p = n[0];
            n = n[1];
            var q = p.length + n.length + 2;
            k.o + k.j + q > 8E3 && Fo(k);
            k.D.push([p, n]);
            k.j += q;
            Ho(k);
            return 0
        };
        cc(b, function(n) {
            return l(n)
        });
        b.length = 0;
        b.push = l;
        Eo(this, "puid", (this.I + 1).toString(36) + "~" + fb().toString(36));
        Io(this)
    };
    w(Jo, zo);
    var Io = function(a) {
        a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
            Fo(a)
        }, 0) : dk(a.g, "load", a.J);
        var b = oo(a.g.document);
        typeof b !== "undefined" && dk(a.g, b, a.ba);
        dk(a.g, "pagehide", a.K)
    }
      , Eo = function(a, b, c) {
        c = String(c);
        a.o = a.A[b] != null ? a.o + (c.length - a.A[b].length) : a.o + (b.length + c.length + 2);
        a.A[b] = c
    }
      , Mo = function(a, b, c, d, e) {
        e = e === void 0 ? "" : e;
        var f = Ko(a, b, c, d, e);
        a.o + a.j + f > 8E3 && (Fo(a),
        f = b.length + c.length + 2);
        Lo(a, b, c, d, e);
        a.j += f;
        Ho(a)
    }
      , Ko = function(a, b, c, d, e) {
        return a.report[b] == null ? b.length + c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.report[b].length
    }
      , Lo = function(a, b, c, d, e) {
        a.report[b] = d && a.report[b] != null ? a.report[b] + ("" + (e === void 0 ? "" : e) + c) : c
    }
      , Ho = function(a) {
        a.o + a.j >= 6E3 && Fo(a)
    }
      , Fo = function(a) {
        if (a.l && a.O) {
            try {
                a.j && (a.sendBeacon(a.report),
                a.I === a.H && a.B())
            } catch (b) {
                (new mo).ab(358, b)
            }
            a.report = {};
            a.j = 0;
            a.events.length = 0;
            a.g.clearTimeout(a.L);
            a.L = 0
        }
    }
      , No = function(a, b) {
        te(a.path.split("?").length === 2);
        te(a.path[a.path.length - 1] === "=");
        var c = a.U + "//" + a.domain + a.path + a.X
          , d = {};
        c = Do(c, a.A, d);
        c = Do(c, b, d);
        b = a.g;
        b.google_timing_params && (c = Do(c, b.google_timing_params, d),
        b.google_timing_params = void 0);
        cc(a.D, function(e) {
            te(e.length === 2);
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Do(c, (g[e] = f,
            g))
        });
        a.D.length = 0;
        return c
    };
    Jo.prototype.sendBeacon = function(a) {
        this.I++;
        a = No(this, a);
        var b = !1;
        try {
            b = !!(this.P && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.P = !1
        }
        b || Km(this.g, a);
        Eo(this, "puid", (this.I + 1).toString(36) + "~" + fb().toString(36))
    }
    ;
    var Go = function(a, b) {
        var c = "met." + b.type
          , d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value
          , e = Math.round(b.duration);
        b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
        Mo(a, c, b, !0, "~")
    };
    Jo.prototype.C = function(a) {
        this.l && this.I < this.H && (zo.prototype.C.call(this, a),
        Go(this, a))
    }
    ;
    Jo.prototype.B = function() {
        zo.prototype.B.call(this);
        this.g.clearTimeout(this.L);
        this.j = this.L = 0;
        this.report = {};
        fl(this.F);
        fl(this.A);
        ek(this.g, "load", this.J);
        ek(this.g, "pagehide", this.K)
    }
    ;
    var Oo = []
      , I = function(a) {
        A(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
        var b = "Bb";
        if (a.Bb && a.hasOwnProperty(b))
            return a.Bb;
        Oo.push(a);
        var c = new a;
        a.Bb = c;
        A(a.hasOwnProperty(b), "Could not instantiate singleton.");
        return c
    };
    var J = function() {
        this.g = new Jo(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);
        var a = jo();
        a != null && Eo(this.g, "c", a);
        a = parseInt(this.g.A.c, 10) / 2;
        a != null && Eo(this.g, "slotId", a);
        Fl("google3.javascript.ads.imalib.instrumentation.instrumentation")
    }
      , K = function(a, b, c) {
        if (c != null) {
            a = a.g;
            var d = b + "=" + c;
            a.F[d] || (Mo(a, b, c, !1),
            d.length < 1E3 && (a.F[d] = !0))
        }
    }
      , Po = function(a, b) {
        for (var c in b)
            b[c] = typeof b[c] === "object" ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
        a = a.g;
        var d = !1;
        c = 0;
        for (var e = u(Object.keys(b)), f = e.next(); !f.done; f = e.next())
            f = f.value,
            a.report[f] != null && (d = !0),
            c += Ko(a, f, b[f], !1);
        (a.o + a.j + c > 8E3 || d) && Fo(a);
        d = u(Object.keys(b));
        for (e = d.next(); !e.done; e = d.next())
            e = e.value,
            Lo(a, e, b[e], !1);
        a.j += c;
        Ho(a)
    }
      , Qo = function(a) {
        var b = J.getInstance().g;
        b.l && b.C(new vo(a,4,ro() - 0,0))
    };
    J.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; d != void 0 && d != document.documentElement; ) {
            var g = void 0
              , h = void 0;
            if (((g = d) == null ? 0 : g.getAttribute("data-ck-navigates")) || ((h = d) == null ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = (g = (f = d) == null ? void 0 : f.getAttribute("data-ck-navigates")) != null ? g : !1;
                h = g = void 0;
                f = (h = (g = d) == null ? void 0 : g.getAttribute("data-ck-tag")) != null ? h : "notag";
                break
            }
            g = void 0;
            d = (g = d.parentElement) != null ? g : void 0
        }
        d = this.g;
        d.l && d.C(new vo(a + "_" + b + "x" + c + "|" + e + "|" + f,4,ro(),0))
    }
    ;
    J.getInstance = function() {
        return I(J)
    }
    ;
    var Ro = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , So = function(a) {
        try {
            return y.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (Ro(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , To = function(a) {
        this.g = a
    }
      , Vo = function(a, b) {
        var c = [];
        Uo(a, b, c);
        return c.join("")
    }
      , Uo = function(a, b, c) {
        if (b == null)
            c.push("null");
        else {
            if (typeof b == "object") {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Uo(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        typeof e != "function" && (c.push(f),
                        Wo(d, c),
                        c.push(":"),
                        Uo(a, a.g ? a.g.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Wo(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , Xo = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\u000b"
    }
      , Yo = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , Wo = function(a, b) {
        b.push('"', a.replace(Yo, function(c) {
            var d = Xo[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
            Xo[c] = d);
            return d
        }), '"')
    };
    var Zo = function() {
        this.l = null;
        this.g = "missing-id";
        this.j = !1
    }
      , ap = function(a) {
        var b = null;
        try {
            b = document.getElementsByClassName("lima-exp-data")
        } catch (c) {
            return $o("missing-element", a.g),
            null
        }
        if (b.length > 1)
            return $o("multiple-elements", a.g),
            null;
        b = b[0];
        return b ? b.innerHTML : ($o("missing-element", a.g),
        null)
    }
      , cp = function() {
        var a = bp
          , b = ap(a);
        if (b !== null)
            if (Ro(b)) {
                var c = JSON.parse(b);
                b = c.experimentIds;
                var d = c.binaryIdentifier;
                c = c.adEventId;
                var e = typeof d === "string";
                if (typeof c == "string") {
                    var f = J.getInstance();
                    c != null && Eo(f.g, "qqid", c)
                }
                e && (a.g = d);
                typeof b !== "string" ? $o("missing-flags", a.g) : (e || $o("missing-binary-id", a.g),
                a.l = b)
            } else
                $o("invalid-json", a.g)
    };
    Zo.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    }
    ;
    var dp = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    m = dp.prototype;
    m.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.tf;
            d = c.md || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Xc
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    }
    ;
    m.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ib(d[e]);
            if (f.lastIndexOf(c, 0) == 0)
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    m.remove = function(a, b, c) {
        var d = this.get(a) !== void 0;
        this.set(a, "", {
            Xc: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    m.Oc = function() {
        return ep(this).keys
    }
    ;
    m.Kb = function() {
        return ep(this).values
    }
    ;
    m.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    m.clear = function() {
        for (var a = ep(this).keys, b = a.length - 1; b >= 0; b--)
            this.remove(a[b])
    }
    ;
    var ep = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = Ib(a[f]),
            d = e.indexOf("="),
            d == -1 ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    function fp(a, b, c) {
        return Zh(b, 5) ? gp(a, c) : null
    }
    var hp;
    function ip(a) {
        return hp ? hp : a.origin === "null" ? hp = !1 : hp = jp(a)
    }
    function jp(a) {
        if (!a.navigator.cookieEnabled)
            return !1;
        var b = new dp(a.document);
        if (!b.isEmpty())
            return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Xc: 60,
            tf: a.isSecureContext ? "none" : void 0,
            md: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1")
            return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }
    function gp(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new dp({
            cookie: b
        })).get(a) || ""
    }
    function kp(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = Object.assign({}, c, {
            tf: "none",
            md: !0
        })),
        (new dp(d.document)).set(a, b, c))
    }
    ;function lp(a, b) {
        var c = Rh(a, vn, 2, sh());
        if (!c.length)
            return mp(a, b);
        a = di(a, 1);
        if (a === 1) {
            var d = lp(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = fc(c, function(h) {
            return lp(h, b)
        });
        switch (a) {
        case 2:
            var e;
            return (e = (d = c.find(function(h) {
                return h.success && !h.value
            })) != null ? d : c.find(function(h) {
                return !h.success
            })) != null ? e : {
                success: !0,
                value: !0
            };
        case 3:
            var f, g;
            return (g = (f = c.find(function(h) {
                return h.success && h.value
            })) != null ? f : c.find(function(h) {
                return !h.success
            })) != null ? g : {
                success: !0,
                value: !1
            };
        default:
            return {
                success: !1,
                Ea: 3
            }
        }
    }
    function mp(a, b) {
        var c = Ih(a, wn);
        a: {
            switch (c) {
            case 3:
                var d = ii(a, 3, wn);
                break a;
            case 4:
                d = ii(a, 4, wn);
                break a;
            case 5:
                d = ii(a, 5, wn);
                break a
            }
            d = void 0
        }
        if (!d)
            return {
                success: !1,
                Ea: 2
            };
        b = (b = b[c]) && b[d];
        if (!b)
            return {
                success: !1,
                Ob: d,
                tc: c,
                Ea: 1
            };
        try {
            var e = b.apply;
            var f = gi(a, 8, sh());
            var g = e.call(b, null, ka(f))
        } catch (h) {
            return {
                success: !1,
                Ob: d,
                tc: c,
                Ea: 2
            }
        }
        e = di(a, 1);
        if (e === 4)
            return {
                success: !0,
                value: !!g
            };
        if (e === 5)
            return {
                success: !0,
                value: g != null
            };
        if (e === 12)
            a = E(a, Jh(a, xn, 7));
        else
            a: {
                switch (c) {
                case 4:
                    a = ci(a, Jh(a, xn, 6));
                    break a;
                case 5:
                    a = E(a, Jh(a, xn, 7));
                    break a
                }
                a = void 0
            }
        if (a == null)
            return {
                success: !1,
                Ob: d,
                tc: c,
                Ea: 3
            };
        if (e === 6)
            return {
                success: !0,
                value: g === a
            };
        if (e === 9)
            return {
                success: !0,
                value: g != null && Nb(String(g), a) === 0
            };
        if (g == null)
            return {
                success: !1,
                Ob: d,
                tc: c,
                Ea: 4
            };
        switch (e) {
        case 7:
            c = g < a;
            break;
        case 8:
            c = g > a;
            break;
        case 12:
            c = Ae(a) && Ae(g) && (new RegExp(a)).test(g);
            break;
        case 10:
            c = g != null && Nb(String(g), a) === -1;
            break;
        case 11:
            c = g != null && Nb(String(g), a) === 1;
            break;
        default:
            return {
                success: !1,
                Ea: 3
            }
        }
        return {
            success: !0,
            value: c
        }
    }
    function np(a, b) {
        return a ? b ? lp(a, b) : {
            success: !1,
            Ea: 1
        } : {
            success: !0,
            value: !0
        }
    }
    ;var Kh = function(a) {
        G.call(this, a)
    };
    w(Kh, G);
    Kh.g = "tagging.common.experiments.FlagValue";
    var op = function(a) {
        G.call(this, a)
    };
    w(op, G);
    op.prototype.getValue = function() {
        return Ph(this, Kh, 2)
    }
    ;
    op.g = "tagging.common.experiments.ConditionalValue";
    var pp = function(a) {
        G.call(this, a)
    };
    w(pp, G);
    var qp = Tj(pp);
    pp.g = "tagging.common.experiments.FlagDefinition";
    var rp = [1, 2, 3, 6, 7, 8];
    var sp = function(a, b, c) {
        var d = d === void 0 ? new Xn(6,"unknown",b) : d;
        this.o = a;
        this.A = c;
        this.j = d;
        this.g = [];
        this.l = a > 0 && xm() < 1 / a
    }
      , up = function(a, b, c, d, e, f) {
        if (a.l) {
            var g = Ym(Xm(new Wm, b), c);
            b = pn(mn(ln(on(nn(new kn, d), e), g), a.g.slice()), f);
            b = Cn(b);
            a.j.nd(tp(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(function(h) {
                return di(h, 1) === di(g, 1) && di(h, 2) === c
            }))
                a.g.push(g),
                a.g.length > 100 && a.g.shift()
        }
    }
      , vp = function(a, b, c, d) {
        if (a.l) {
            var e = new Vm;
            b = li(e, 1, b);
            c = li(b, 2, c);
            d = pi(c, 3, d);
            c = new An;
            d = Sh(c, Vm, 8, Bn, d);
            a.j.nd(tp(a, d))
        }
    }
      , wp = function(a, b, c, d, e) {
        if (a.l) {
            var f = new yn;
            b = C(f, vn, 1, b);
            c = pi(b, 2, c);
            d = li(c, 3, d);
            if (e.tc === void 0)
                Hh(d, 4, zn, Bf(e.Ea));
            else
                switch (e.tc) {
                case 3:
                    c = new tn;
                    c = Hh(c, 2, un, Bf(e.Ob));
                    e = pi(c, 1, e.Ea);
                    Sh(d, tn, 5, zn, e);
                    break;
                case 4:
                    c = new tn;
                    c = Hh(c, 3, un, Bf(e.Ob));
                    e = pi(c, 1, e.Ea);
                    Sh(d, tn, 5, zn, e);
                    break;
                case 5:
                    c = new tn,
                    c = Hh(c, 4, un, Bf(e.Ob)),
                    e = pi(c, 1, e.Ea),
                    Sh(d, tn, 5, zn, e)
                }
            e = new An;
            e = Sh(e, yn, 9, Bn, d);
            a.j.nd(tp(a, e))
        }
    }
      , tp = function(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = ni(b, 1, c);
        c = Gm();
        b = ni(b, 2, c);
        return ni(b, 6, a.o)
    };
    var xp = function() {
        var a = {};
        this.Ja = (a[3] = {},
        a[4] = {},
        a[5] = {},
        a)
    };
    var yp = /^true$/.test("false");
    function zp(a, b) {
        switch (b) {
        case 1:
            return ii(a, 1, rp);
        case 2:
            return ii(a, 2, rp);
        case 3:
            return ii(a, 3, rp);
        case 6:
            return ii(a, 6, rp);
        case 8:
            return ii(a, 8, rp);
        default:
            return null
        }
    }
    function Ap(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return Zh(a, 1);
        case 7:
            return E(a, 3);
        case 2:
            return ci(a, 2);
        case 3:
            return E(a, 3);
        case 6:
            return gi(a, 4, sh());
        case 8:
            return gi(a, 4, sh());
        default:
            return null
        }
    }
    var Bp = Yj(function() {
        if (!yp)
            return {};
        try {
            var a;
            var b = b === void 0 ? window : b;
            try {
                var c = b.sessionStorage
            } catch (e) {
                c = null
            }
            var d = (a = c) == null ? void 0 : a.getItem("GGDFSSK");
            if (d)
                return JSON.parse(d)
        } catch (e) {}
        return {}
    });
    function Cp(a, b, c, d) {
        var e = d = d === void 0 ? 0 : d, f, g;
        I(Dp).l[e] = (g = (f = I(Dp).l[e]) == null ? void 0 : f.add(b)) != null ? g : (new Set).add(b);
        e = Bp();
        if (e[b] != null)
            return e[b];
        b = Ep(d)[b];
        if (!b)
            return c;
        b = qp(JSON.stringify(b));
        b = Fp(b);
        a = Ap(b, a);
        return a != null ? a : c
    }
    function Fp(a) {
        var b = I(xp).Ja;
        if (b && Ih(a, rp) !== 8) {
            var c = lc(Rh(a, op, 5, sh()), function(f) {
                f = np(Ph(f, vn, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return (d = c.getValue()) != null ? d : null
            }
        }
        var e;
        return (e = Ph(a, Kh, 4)) != null ? e : null
    }
    var Dp = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new Map
    };
    function Gp(a, b, c) {
        return !!Cp(1, a, b === void 0 ? !1 : b, c)
    }
    function Hp(a, b, c) {
        b = b === void 0 ? 0 : b;
        a = Number(Cp(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function Ip(a, b, c) {
        b = b === void 0 ? "" : b;
        a = Cp(3, a, b, c);
        return typeof a === "string" ? a : b
    }
    function Jp(a, b, c) {
        b = b === void 0 ? [] : b;
        a = Cp(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Kp(a, b, c) {
        b = b === void 0 ? [] : b;
        a = Cp(8, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Ep(a) {
        return I(Dp).j[a] || (I(Dp).j[a] = {})
    }
    function Lp(a, b) {
        var c = Ep(b);
        ym(a, function(d, e) {
            if (c[e]) {
                d = qp(JSON.stringify(d));
                var f = Jh(d, rp, 8);
                if (Cf(kh(d, f)) != null) {
                    var g = qp(JSON.stringify(c[e]));
                    f = Lh(d);
                    g = gi(Oh(g, Kh, 4), 4, sh());
                    Uh(f, 4, Vf, g, gi)
                }
                c[e] = vi(d)
            } else
                c[e] = d
        })
    }
    function Mp(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = []
          , g = [];
        b = u(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = Ep(h), l = u(a), n = l.next(); !n.done; n = l.next()) {
                n = n.value;
                var p = Ih(n, rp)
                  , q = zp(n, p);
                if (q) {
                    var t = void 0
                      , v = void 0
                      , x = void 0;
                    var D = (t = (x = I(Dp).g.get(h)) == null ? void 0 : (v = x.get(q)) == null ? void 0 : v.slice(0)) != null ? t : [];
                    a: {
                        t = q;
                        v = p;
                        x = new qn;
                        switch (v) {
                        case 1:
                            Hh(x, 1, rn, Bf(t));
                            break;
                        case 2:
                            Hh(x, 2, rn, Bf(t));
                            break;
                        case 3:
                            Hh(x, 3, rn, Bf(t));
                            break;
                        case 6:
                            Hh(x, 4, rn, Bf(t));
                            break;
                        case 8:
                            Hh(x, 6, rn, Bf(t));
                            break;
                        default:
                            D = void 0;
                            break a
                        }
                        Dh(x, 5, D, Ef);
                        D = x
                    }
                    if (t = D)
                        v = void 0,
                        t = !((v = I(Dp).l[h]) == null || !v.has(q));
                    t && f.push(D);
                    if (p === 8 && k[q])
                        D = qp(JSON.stringify(k[q])),
                        p = Lh(n),
                        D = gi(Oh(D, Kh, 4), 4, sh()),
                        Uh(p, 4, Vf, D, gi);
                    else {
                        if (p = D)
                            t = void 0,
                            p = !((t = I(Dp).g.get(h)) == null || !t.has(q));
                        p && g.push(D)
                    }
                    e || (p = q,
                    D = h,
                    t = d,
                    v = I(Dp),
                    v.g.has(D) || v.g.set(D, new Map),
                    v.g.get(D).has(p) || v.g.get(D).set(p, []),
                    t && v.g.get(D).get(p).push(t));
                    k[q] = vi(n)
                }
            }
        }
        if (f.length || g.length)
            a = d != null ? d : void 0,
            c.l && c.A && (d = new sn,
            f = Th(d, qn, 2, f),
            g = Th(f, qn, 3, g),
            a && mi(g, 1, a),
            f = new An,
            g = Sh(f, sn, 7, Bn, g),
            c.j.nd(tp(c, g)))
    }
    function Np(a, b) {
        b = Ep(b);
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = qp(JSON.stringify(c))
              , e = Ih(d, rp);
            (d = zp(d, e)) && (b[d] || (b[d] = c))
        }
    }
    function Op() {
        return Object.keys(I(Dp).j).map(function(a) {
            return Number(a)
        })
    }
    function Pp(a) {
        I(Dp).o.includes(a) || Lp(Ep(4), a)
    }
    ;function Qp(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function Rp(a, b, c) {
        return b[a] || c
    }
    function Sp(a) {
        Qp(5, Gp, a);
        Qp(6, Hp, a);
        Qp(7, Ip, a);
        Qp(8, Jp, a);
        Qp(17, Kp, a);
        Qp(13, Np, a);
        Qp(15, Pp, a)
    }
    function Tp(a) {
        Qp(4, function(b) {
            I(xp).Ja = b
        }, a);
        Qp(9, function(b, c) {
            var d = I(xp);
            d.Ja[3][b] == null && (d.Ja[3][b] = c)
        }, a);
        Qp(10, function(b, c) {
            var d = I(xp);
            d.Ja[4][b] == null && (d.Ja[4][b] = c)
        }, a);
        Qp(11, function(b, c) {
            var d = I(xp);
            d.Ja[5][b] == null && (d.Ja[5][b] = c)
        }, a);
        Qp(14, function(b) {
            for (var c = I(xp), d = u([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                Object.assign(ue(c.Ja[e]), b[e])
        }, a)
    }
    function Up(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;var Vp = function() {};
    Vp.prototype.j = function() {}
    ;
    Vp.prototype.g = function() {
        return []
    }
    ;
    var Wp = function(a, b, c) {
        a.j = function(d, e) {
            Rp(2, b, function() {
                return []
            })(d, c, e)
        }
        ;
        a.g = function() {
            return Rp(3, b, function() {
                return []
            })(c)
        }
    };
    var Xp = function(a, b, c) {
        this.id = a;
        this.G = b;
        this.j = c;
        this.g = !1
    }
      , Yp = function(a) {
        return a.g || a.j
    }
      , Zp = function() {
        this.g = []
    }
      , $p = function() {
        this.g = new Map;
        this.j = !1;
        this.A = new Zp;
        this.o = new Xp(0,0,!1);
        this.l = [this.A]
    }
      , L = function(a) {
        var b = aq;
        if (b.j)
            return qb("Cannot register Experiments after selection."),
            b.o;
        if (b.g.has(a.id))
            return qb("Cannot define multiple experiments with Id: " + a.id + "."),
            b.o;
        if (a.G == null && a.control == null)
            return qb('Experiment Mods must be defined with the name "mods" or a control must be specified with the name "control".'),
            b.o;
        if (a.Nj == 0)
            return b.o;
        var c = b.A;
        if (a.control != null)
            for (var d = u(b.l), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value,
                e.g.includes(a.control)) {
                    c = e;
                    break
                }
            }
        else
            a.da != null && (c = a.da);
        d = 0;
        a.control != null ? d = a.control.G : a.G != null && (d = a.G);
        a = new Xp(a.id,d,!!a.Qj);
        c.g.push(a);
        b.l.includes(c) || b.l.push(c);
        b.g.set(a.id, a);
        return a
    }
      , bq = function() {
        var a = aq;
        a = [].concat(ka(a.g.keys())).filter(function(c) {
            return Yp(this.g.get(c))
        }, a);
        var b = I(Vp).g();
        return [].concat(ka(a), ka(b))
    }
      , cq = function(a) {
        var b = aq;
        b.j ? qb("Cannot select experiments more than once.") : (a.g(b.l, b.g),
        b.j = !0)
    };
    $p.prototype.reset = function() {
        for (var a = u(this.g), b = a.next(); !b.done; b = a.next())
            b = u(b.value),
            b.next(),
            b.next().value.g = !1;
        this.j = !1
    }
    ;
    var aq = new $p
      , eq = function() {
        return dq.g.filter(function(a) {
            return Yp(a)
        }).map(function(a) {
            return a.id
        })
    };
    var fq = function() {};
    fq.prototype.g = function(a) {
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0
              , d = Math.floor(Math.random() * 1E3);
            b = u(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value,
                c += e.G,
                d < c) {
                    e.g = !0;
                    break
                }
        }
    }
    ;
    var gq = function(a) {
        this.j = a
    };
    gq.prototype.g = function(a, b) {
        a = u(this.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value))
                c.g = !0
    }
    ;
    var hq = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(hq, gq);
    hq.prototype.g = function(a, b) {
        gq.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = u(this.j), e = d.next(); !e.done; e = d.next())
            e = e.value,
            b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        K(J.getInstance(), "sei", b);
        K(J.getInstance(), "nsei", a);
        K(J.getInstance(), "bi", this.l)
    }
    ;
    var iq = function() {
        Zo.apply(this, arguments)
    };
    w(iq, Zo);
    var $o = function(a, b) {
        var c = J.getInstance();
        K(c, "eee", a);
        K(c, "bi", b)
    };
    iq.getInstance = function() {
        return I(iq)
    }
    ;
    function jq() {
        return kq.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    }
    ;var dq = new Zp
      , lq = new Zp
      , mq = new Zp
      , nq = new Zp
      , oq = new Zp
      , pq = new Zp
      , qq = new Zp
      , rq = new Zp
      , sq = new Zp;
    L({
        id: 95342636,
        G: 30
    });
    L({
        id: 95342637,
        G: 30
    });
    L({
        id: 318475490,
        G: 0
    });
    L({
        id: 324123032,
        G: 0
    });
    L({
        id: 420706097,
        G: 10
    });
    L({
        id: 420706098,
        G: 10
    });
    L({
        id: 95342168,
        G: 10
    });
    L({
        id: 95342169,
        G: 10
    });
    L({
        id: 21062100,
        G: 0
    });
    L({
        id: 420706142,
        G: 0
    });
    L({
        id: 44745813,
        G: 0
    });
    L({
        id: 44746068,
        G: 0
    });
    L({
        id: 21064565,
        G: 0
    });
    L({
        id: 21064567,
        G: 0
    });
    L({
        id: 418572006,
        G: 10
    });
    L({
        id: 95338773,
        G: 10,
        da: nq
    });
    L({
        id: 95338774,
        G: 10,
        da: nq
    });
    L({
        id: 95334214,
        G: 10
    });
    L({
        id: 95334215,
        G: 10
    });
    L({
        id: 44749839,
        G: 0
    });
    L({
        id: 44714743,
        G: 0
    });
    L({
        id: 44715336,
        G: 10
    });
    L({
        id: 44724516,
        G: 0
    });
    L({
        id: 44726389,
        G: 10
    });
    L({
        id: 44752711,
        G: 50
    });
    L({
        id: 44752052,
        G: 50
    });
    L({
        id: 44752657,
        G: 50
    });
    L({
        id: 44733246,
        G: 10
    });
    L({
        id: 44750823,
        G: 10,
        da: lq
    });
    L({
        id: 44750824,
        G: 10,
        da: lq
    });
    L({
        id: 44794282,
        G: 10,
        da: lq
    });
    L({
        id: 44797013,
        G: 10,
        da: lq
    });
    L({
        id: 44797014,
        G: 10,
        da: lq
    });
    L({
        id: 44750822,
        G: 10,
        da: lq
    });
    L({
        id: 44751889,
        G: 10
    });
    L({
        id: 44751890,
        G: 10
    });
    L({
        id: 44752995,
        G: 10
    });
    L({
        id: 44752996,
        G: 10
    });
    L({
        id: 44762627,
        G: 0
    });
    L({
        id: 44762628,
        G: 0
    });
    L({
        id: 44801479,
        G: 10,
        da: mq
    });
    L({
        id: 44801480,
        G: 10,
        da: mq
    });
    L({
        id: 44752538,
        G: 0
    });
    L({
        id: 44754608,
        G: 10
    });
    L({
        id: 44754609,
        G: 10
    });
    L({
        id: 44776384,
        G: 0
    });
    L({
        id: 95322945,
        G: 10
    });
    var tq = L({
        id: 95322946,
        G: 10
    });
    L({
        id: 44787954,
        G: 0
    });
    L({
        id: 44789282,
        G: 0
    });
    L({
        id: 44792636,
        G: 0
    });
    L({
        id: 44794298,
        G: 0
    });
    L({
        id: 44803996,
        G: 0
    });
    L({
        id: 44805453,
        G: 0
    });
    L({
        id: 44804917,
        G: 0
    });
    L({
        id: 95334260,
        G: 0
    });
    var uq = L({
        id: 75259416,
        G: 0
    })
      , vq = L({
        id: 75259420,
        G: 0
    })
      , wq = L({
        id: 75259421,
        G: 0
    });
    L({
        id: 44785452,
        G: 10
    });
    L({
        id: 44785453,
        G: 10
    });
    L({
        id: 45401791,
        G: 0
    });
    L({
        id: 95326337,
        G: 990,
        da: oq
    });
    var xq = window.navigator || {}
      , yq = xq.cookieDeprecationLabel ? 990 : 0;
    L({
        id: 95322906,
        G: xq.cookieDeprecationLabel ? 10 : 0,
        da: pq
    });
    var zq = L({
        id: 95320461,
        G: 0,
        da: pq
    })
      , Aq = L({
        id: 95322907,
        G: yq,
        da: pq
    });
    L({
        id: 44807614,
        G: 10
    });
    L({
        id: 44807615,
        G: 10
    });
    L({
        id: 44809192,
        G: 10,
        da: rq
    });
    L({
        id: 44809193,
        G: 10,
        da: rq
    });
    L({
        id: 95320804,
        G: 10,
        da: rq
    });
    L({
        id: 95320805,
        G: 10,
        da: rq
    });
    L({
        id: 95322027,
        G: 1E3,
        da: qq
    });
    var Bq = L({
        id: 46130031,
        G: 0
    });
    L({
        id: 95328713,
        G: 10
    });
    L({
        id: 95328714,
        G: 10
    });
    var Cq = L({
        id: 95327848,
        G: 0
    });
    L({
        id: 31065644,
        G: 1
    });
    var Dq = L({
        id: 31065645,
        G: 1
    })
      , Eq = new Zp;
    L({
        id: 95331588,
        G: 0,
        da: Eq
    });
    L({
        id: 95331589,
        G: 1E3,
        da: Eq
    });
    var Fq = L({
        id: 95332182,
        G: 0
    });
    L({
        id: 95342563,
        G: 0,
        da: sq
    });
    L({
        id: 95342564,
        G: 1E3,
        da: sq
    });
    if (typeof window.initializeVirtualDom === "undefined") {
        var bp = iq.getInstance();
        bp.j || (cp(),
        bp.j = !0);
        var kq = bp.l, Gq;
        bp.j || (cp(),
        bp.j = !0);
        Gq = bp.g;
        if (kq != null) {
            var Hq = new hq(jq(),Gq);
            cq(Hq)
        }
    }
    ;var Iq = function(a) {
        G.call(this, a)
    };
    w(Iq, G);
    Iq.prototype.getId = function() {
        return $h(this, 1)
    }
    ;
    Iq.g = "tagging.common.experiments.Experiment";
    var Jq = function(a) {
        G.call(this, a)
    };
    w(Jq, G);
    var Kq = function(a) {
        return Rh(a, Iq, 2, sh())
    };
    Jq.g = "tagging.common.experiments.Study";
    var Lq = function(a) {
        G.call(this, a)
    };
    w(Lq, G);
    Lq.g = "tagging.common.experiments.ExperimentState.DiversionPointToStudy";
    var Mq = function(a) {
        G.call(this, a)
    };
    w(Mq, G);
    Mq.g = "tagging.common.experiments.ExperimentState.ObservabilityConfig";
    var Nq = function(a) {
        G.call(this, a)
    };
    w(Nq, G);
    Nq.g = "tagging.common.experiments.ExperimentState";
    var Oq = function(a) {
        return function(b) {
            sb(b);
            tb(a);
            b = JSON.parse(b);
            if (!Array.isArray(b))
                throw Error("Expected jspb data to be an array, got " + Sa(b) + ": " + b);
            Ld(b);
            b = new a(b);
            A(Sd(b));
            return b
        }
    }(Nq);
    function Pq() {
        return Wg(Oq("[[[45641707,null,null,[1]],[45642592,null,null,[]],[45642676,null,null,[]],[45640378,null,null,[]],[null,45645574,null,[]],[45650866,null,null,[]],[45652001,null,null,[]],[45652000,null,null,[]],[45651995,null,null,[]],[45651993,null,null,[]],[45651997,null,null,[]],[45651996,null,null,[]],[45647593,null,null,[]],[45647592,null,null,[]],[45650216,null,null,[]]],[[16,[[1000,[[95332046]]],[null,[[95332047]]],[10,[[95333808],[95333809,[[635466687,null,null,[1]]]]]],[10,[[95336351],[95336352,[[45640378,null,null,[1]]]]]],[null,[[95337286],[95337287,[[45642676,null,null,[1]]]]]],[50,[[95337288],[95337289,[[45642592,null,null,[1]]]]]],[10,[[95338769,[[null,45645574,null,[null,1]]]],[95338770,[[null,45645574,null,[null,2]]]]]],[10,[[95339943,[[45647593,null,null,[1]]]],[95339944,[[45647592,null,null,[1]]]]]],[50,[[95340921],[95340922,[[45650090,null,null,[1]]]]]],[10,[[95341047],[95341048,[[45650216,null,null,[1]]]]]],[10,[[95341383],[95341384,[[45650866,null,null,[1]]]]]]]]],null,null,[null,1000,1,1000]]"))
    }
    ;var Qq = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
    function Rq(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.features().includes(a))
    }
    function Sq(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }
    function Tq() {
        var a = window.navigator
          , b = window.document;
        return !!(window.isSecureContext && "runAdAuction"in a && a.runAdAuction instanceof Function && Sq("run-ad-auction", b))
    }
    ;function Uq(a, b) {
        try {
            var c = a.split(".");
            a = y;
            for (var d = 0, e; a != null && d < c.length; d++)
                e = a,
                a = a[c[d]],
                typeof a === "function" && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (g) {}
    }
    var Vq = {}
      , Wq = {}
      , Xq = {}
      , Yq = {}
      , Zq = (Yq[3] = (Vq[8] = function(a) {
        try {
            return Pa(a) != null
        } catch (b) {}
    }
    ,
    Vq[9] = function(a) {
        try {
            var b = Pa(a)
        } catch (c) {
            return
        }
        return typeof b === "function" && Cm(b)
    }
    ,
    Vq[10] = function() {
        return window === window.top
    }
    ,
    Vq[6] = function(a) {
        return nc(I(Vp).g(), Number(a))
    }
    ,
    Vq[27] = function(a) {
        a = Uq(a, "boolean");
        return a !== void 0 ? a : void 0
    }
    ,
    Vq[60] = function(a) {
        try {
            return !!y.document.querySelector(a)
        } catch (b) {}
    }
    ,
    Vq[80] = function(a) {
        try {
            return !!y.matchMedia(a).matches
        } catch (b) {}
    }
    ,
    Vq[69] = function(a) {
        return Rq(a, y.document)
    }
    ,
    Vq[70] = function(a) {
        return Sq(a, y.document)
    }
    ,
    Vq[79] = function(a) {
        var b = y.navigator;
        b = b === void 0 ? navigator : b;
        try {
            var c, d;
            var e = !!((c = b.protectedAudience) == null ? 0 : (d = c.queryFeatureSupport) == null ? 0 : d.call(c, a))
        } catch (f) {
            e = !1
        }
        return e
    }
    ,
    Vq),
    Yq[4] = (Wq[3] = function() {
        return Fm()
    }
    ,
    Wq[6] = function(a) {
        a = Uq(a, "number");
        return a !== void 0 ? a : void 0
    }
    ,
    Wq),
    Yq[5] = (Xq[2] = function() {
        return window.location.href
    }
    ,
    Xq[3] = function() {
        try {
            return window.top.location.hash
        } catch (a) {
            return ""
        }
    }
    ,
    Xq[4] = function(a) {
        a = Uq(a, "string");
        return a !== void 0 ? a : void 0
    }
    ,
    Xq),
    Yq);
    function $q() {
        var a = a === void 0 ? y : a;
        return a.ggeac || (a.ggeac = {})
    }
    ;function ar(a) {
        var b = {};
        return br((b[0] = new Map,
        b[1] = new Map,
        b[2] = new Map,
        b), a)
    }
    function br(a, b) {
        for (var c = new Map, d = u(a[1].entries()), e = d.next(); !e.done; e = d.next()) {
            var f = u(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.xf + f.bf * f.cf)
        }
        b = u(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value,
            e = Rh(d, Jq, 2, sh()),
            e = u(e),
            f = e.next(); !f.done; f = e.next())
                if (f = f.value,
                Kq(f).length !== 0) {
                    var g = ai(f, 8);
                    if (di(f, 4) && !di(f, 13) && !di(f, 14)) {
                        var h = void 0;
                        g = (h = c.get(di(f, 4))) != null ? h : 0;
                        h = ai(f, 1) * Kq(f).length;
                        c.set(di(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < Kq(f).length; k++) {
                        var l = {
                            xf: g,
                            bf: ai(f, 1),
                            cf: Kq(f).length,
                            ih: k,
                            Lc: di(d, 1),
                            ud: f,
                            Pa: Kq(f)[k]
                        };
                        h.push(l)
                    }
                    cr(a[2], di(f, 10), h) || cr(a[1], di(f, 4), h) || cr(a[0], Kq(f)[0].getId(), h)
                }
        return a
    }
    function cr(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = ue(a.get(b))).push.apply(d, ka(c));
        return !0
    }
    ;var dr = [12, 13, 20]
      , er = function(a, b, c, d) {
        d = d === void 0 ? {} : d;
        var e = d.Md === void 0 ? !1 : d.Md;
        d = d.vh === void 0 ? [] : d.vh;
        this.lc = a;
        this.ub = c;
        this.o = {};
        this.Md = e;
        a = {};
        this.g = (a[b] = [],
        a[4] = [],
        a);
        this.j = {};
        this.l = {};
        if (b = qo())
            for (b = u(b.split(",") || []),
            a = b.next(); !a.done; a = b.next())
                (a = Number(a.value)) && (this.j[a] = !0);
        d = u(d);
        for (b = d.next(); !b.done; b = d.next())
            this.j[b.value] = !0
    }
      , hr = function(a, b, c, d) {
        var e = [], f;
        if (f = b !== 9)
            a.o[b] ? f = !0 : (a.o[b] = !0,
            f = !1);
        if (f)
            return up(a.ub, b, c, e, [], 4),
            e;
        f = dr.includes(b);
        for (var g = [], h = [], k = u([0, 1, 2]), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            for (var n = u(a.lc[l].entries()), p = n.next(); !p.done; p = n.next()) {
                var q = u(p.value);
                p = q.next().value;
                q = q.next().value;
                var t = p
                  , v = q;
                p = new Zm;
                q = v.filter(function(W) {
                    return W.Lc === b && a.j[W.Pa.getId()] && fr(a, W)
                });
                if (q.length)
                    for (p = u(q),
                    q = p.next(); !q.done; q = p.next())
                        h.push(q.value.Pa);
                else if (!a.Md) {
                    q = void 0;
                    l === 2 ? (q = d[1],
                    Hh(p, 2, jn, Bf(t))) : q = d[0];
                    var x = void 0
                      , D = void 0;
                    q = (D = (x = q) == null ? void 0 : x(String(t))) != null ? D : l === 2 && di(v[0].ud, 11) === 1 ? void 0 : d[0](String(t));
                    if (q !== void 0) {
                        t = u(v);
                        for (v = t.next(); !v.done; v = t.next())
                            if (v = v.value,
                            v.Lc === b) {
                                x = q - v.xf;
                                var M = v;
                                D = M.bf;
                                var Q = M.cf;
                                M = M.ih;
                                x < 0 || x >= D * Q || x % Q !== M || !fr(a, v) || (x = di(v.ud, 13),
                                x !== 0 && x !== void 0 && (D = a.l[String(x)],
                                D !== void 0 && D !== v.Pa.getId() ? vp(a.ub, a.l[String(x)], v.Pa.getId(), x) : a.l[String(x)] = v.Pa.getId()),
                                h.push(v.Pa))
                            }
                        Ih(p, jn) !== 0 && (mi(p, 3, q),
                        g.push(p))
                    }
                }
            }
        }
        d = u(h);
        for (h = d.next(); !h.done; h = d.next())
            h = h.value,
            k = h.getId(),
            e.push(k),
            gr(a, k, f ? 4 : c),
            Mp(Rh(h, pp, 2, sh()), f ? Op() : [c], a.ub, k);
        up(a.ub, b, c, e, g, 1);
        return e
    }
      , gr = function(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }
      , fr = function(a, b) {
        var c = I(xp).Ja
          , d = np(Ph(b.ud, vn, 3), c);
        if (!d.success)
            return wp(a.ub, Ph(b.ud, vn, 3), b.Lc, b.Pa.getId(), d),
            !1;
        if (!d.value)
            return !1;
        c = np(Ph(b.Pa, vn, 3), c);
        return c.success ? c.value ? !0 : !1 : (wp(a.ub, Ph(b.Pa, vn, 3), b.Lc, b.Pa.getId(), c),
        !1)
    }
      , ir = function(a, b) {
        b = b.map(function(c) {
            return new Lq(c)
        }).filter(function(c) {
            return !dr.includes(di(c, 1))
        });
        a.lc = br(a.lc, b)
    }
      , jr = function(a, b) {
        Qp(1, function(c) {
            a.j[c] = !0
        }, b);
        Qp(2, function(c, d, e) {
            return hr(a, c, d, e)
        }, b);
        Qp(3, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        Qp(12, function(c) {
            return void ir(a, c)
        }, b);
        Qp(16, function(c, d) {
            return void gr(a, c, d)
        }, b)
    };
    var kr = function() {
        var a = {};
        this.g = function(b, c) {
            return a[b] != null ? xb(a[b]) : c
        }
        ;
        this.j = function(b, c) {
            return a[b] != null ? rb(a[b]) : c
        }
        ;
        this.A = function(b, c) {
            return a[b] != null ? sb(a[b]) : c
        }
        ;
        this.B = function(b, c) {
            return a[b] != null ? wb(a[b]) : c
        }
        ;
        this.o = function(b, c) {
            return a[b] != null ? c.concat(wb(a[b])) : c
        }
        ;
        this.l = function() {}
    };
    function lr(a) {
        return I(kr).g(a.g, a.defaultValue)
    }
    ;var mr = function() {
        this.g = function() {}
    }
      , nr = function(a, b) {
        a.g = Rp(14, b, function() {})
    };
    function or(a) {
        I(mr).g(a)
    }
    ;var pr, qr, rr, sr, tr, ur;
    function vr(a, b) {
        var c = b = b === void 0 ? $q() : b;
        Wp(I(Vp), c, a);
        wr(b, a);
        a = b;
        nr(I(mr), a);
        I(kr).l()
    }
    function wr(a, b) {
        var c = I(kr);
        c.g = function(d, e) {
            return Rp(5, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.j = function(d, e) {
            return Rp(6, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.A = function(d, e) {
            return Rp(7, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.B = function(d, e) {
            return Rp(8, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.o = function(d, e) {
            return Rp(17, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.l = function() {
            Rp(15, a, function() {})(b)
        }
    }
    ;aq.reset();
    cq(new fq);
    (function(a) {
        var b = a.Eg;
        var c = a.Ja;
        var d = a.config;
        var e = a.og === void 0 ? $q() : a.og;
        var f = a.Ke === void 0 ? 0 : a.Ke;
        var g = a.ub === void 0 ? new sp((sr = (pr = Ph(b, Mq, 5)) == null ? void 0 : bi(pr, 2)) != null ? sr : 0,(tr = (qr = Ph(b, Mq, 5)) == null ? void 0 : bi(qr, 4)) != null ? tr : 0,(ur = (rr = Ph(b, Mq, 5)) == null ? void 0 : Zh(rr, 3)) != null ? ur : !1) : a.ub;
        a = a.lc === void 0 ? ar(Rh(b, Lq, 2, sh(je))) : a.lc;
        e.hasOwnProperty("init-done") ? (Rp(12, e, function() {})(Rh(b, Lq, 2, sh()).map(function(h) {
            return vi(h)
        })),
        Rp(13, e, function() {})(Rh(b, pp, 1, sh()).map(function(h) {
            return vi(h)
        }), f),
        c && Rp(14, e, function() {})(c),
        vr(f, e)) : (jr(new er(a,f,g,d), e),
        Sp(e),
        Tp(e),
        Up(e),
        vr(f, e),
        Mp(Rh(b, pp, 1, sh(je)), [f], g, void 0, !0),
        yp = yp || !(!d || !d.Sj),
        or(Zq),
        c && or(c))
    }
    )({
        Eg: Pq(),
        Ke: 7
    });
    var xr = Gm()
      , yr = {}
      , zr = (yr[0] = function(a) {
        a = a === void 0 ? xm() : a;
        return function(b) {
            return zm(b + " + " + a) % 1E3
        }
    }(xr),
    yr);
    I(Vp).j(16, zr);
    var Ar = function(a) {
        var b = {};
        cc(a, function(c) {
            var d = c.g
              , e = b[d];
            b.hasOwnProperty(d) ? e !== null && (c.j(e) || (b[d] = null)) : b[d] = c
        });
        qc(a, function(c) {
            return b[c.g] === null
        })
    };
    var Br = {
        NONE: 0,
        gi: 1
    }
      , Cr = {
        di: 0,
        mj: 1,
        lj: 2,
        nj: 3
    }
      , Dr = {
        Ff: "a",
        fi: "d",
        VIDEO: "v"
    };
    var Er = function() {
        this.aa = 0;
        this.g = !1;
        this.j = -1;
        this.Cb = !1;
        this.va = 0
    };
    Er.prototype.isVisible = function() {
        return this.Cb ? this.aa >= .3 : this.aa >= .5
    }
    ;
    var Fr = {
        ci: 0,
        ki: 1
    }
      , Gr = {
        668123728: 0,
        668123729: 1
    }
      , Hr = {
        44731964: 0,
        44731965: 1
    }
      , Ir = {
        NONE: 0,
        Si: 1,
        wi: 2
    }
      , Jr = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    var Kr = function() {
        this.g = null;
        this.o = !1;
        this.l = null
    }
      , Lr = function(a) {
        a.o = !0;
        return a
    }
      , Mr = function(a, b) {
        a.l && cc(b, function(c) {
            c = a.l[c];
            c !== void 0 && a.j(c)
        })
    };
    Kr.prototype.getValue = function() {
        return this.g
    }
    ;
    var Nr = function(a) {
        Kr.call(this);
        this.A = a
    };
    w(Nr, Kr);
    Nr.prototype.j = function(a) {
        this.g === null && bl(this.A, a) && (this.g = a)
    }
    ;
    var Or = function() {
        Kr.call(this)
    };
    w(Or, Kr);
    Or.prototype.j = function(a) {
        this.g === null && typeof a === "number" && (this.g = a)
    }
    ;
    var Pr = function() {
        Kr.call(this)
    };
    w(Pr, Kr);
    Pr.prototype.j = function(a) {
        this.g === null && typeof a === "string" && (this.g = a)
    }
    ;
    var Qr = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    Qr.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    }
    ;
    var Rr = function(a, b, c) {
        a.g[b] || (a.g[b] = new Nr(c));
        return a.g[b]
    }
      , Sr = function(a) {
        a.g.queryid || (a.g.queryid = new Pr)
    }
      , Tr = function(a, b, c) {
        (a = a.g[b]) && a.j(c)
    }
      , Ur = function(a, b) {
        if (al(a.j, b))
            return a.j[b];
        if (a = a.g[b])
            return a.getValue()
    }
      , Vr = function(a) {
        var b = {}
          , c = Vk(a.g, function(d) {
            return d.o
        });
        Uk(c, function(d, e) {
            d = a.j[e] !== void 0 ? String(a.j[e]) : d.o && d.g !== null ? String(d.g) : "";
            d.length > 0 && (b[e] = d)
        }, a);
        return b
    }
      , Wr = function(a) {
        a = Vr(a);
        var b = [];
        Uk(a, function(c, d) {
            d in Object.prototype || typeof c != "undefined" && b.push([d, ":", c].join(""))
        });
        return b
    }
      , Xr = function() {
        var a = N().R
          , b = eq();
        a.l && cc(Yk(a.g), function(c) {
            return Mr(c, b)
        })
    };
    var Yr = function(a) {
        Rr(a, "od", Br);
        Lr(Rr(a, "opac", Fr));
        Lr(Rr(a, "sbeos", Fr));
        Lr(Rr(a, "prf", Fr));
        Lr(Rr(a, "mwt", Fr));
        Rr(a, "iogeo", Fr)
    };
    var Zr = document
      , O = window;
    var $r = !Cc && !Yb();
    var as = function() {
        this.g = this.tb = null
    };
    var bs = function() {};
    bs.prototype.now = function() {
        return 0
    }
    ;
    bs.prototype.j = function() {
        return 0
    }
    ;
    bs.prototype.l = function() {
        return 0
    }
    ;
    bs.prototype.g = function() {
        return 0
    }
    ;
    var ds = function() {
        if (!cs())
            throw Error();
    };
    w(ds, bs);
    var cs = function() {
        return !(!O || !O.performance)
    };
    ds.prototype.now = function() {
        return cs() && O.performance.now ? O.performance.now() : bs.prototype.now.call(this)
    }
    ;
    ds.prototype.j = function() {
        return cs() && O.performance.memory ? O.performance.memory.totalJSHeapSize || 0 : bs.prototype.j.call(this)
    }
    ;
    ds.prototype.l = function() {
        return cs() && O.performance.memory ? O.performance.memory.usedJSHeapSize || 0 : bs.prototype.l.call(this)
    }
    ;
    ds.prototype.g = function() {
        return cs() && O.performance.memory ? O.performance.memory.jsHeapSizeLimit || 0 : bs.prototype.g.call(this)
    }
    ;
    var es = function() {};
    es.prototype.isVisible = function() {
        return no(Zr) === 1
    }
    ;
    var fs = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)")
      , As = function(a) {
        a = a || gs();
        for (var b = new ys(y.location.href,!1), c = null, d = a.length - 1, e = d; e >= 0; --e) {
            var f = a[e];
            !c && fs.test(f.url) && (c = f);
            if (f.url && !f.Td) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        b.depth != 0 && f && (e = a[d]);
        return new zs(b,e,c)
    }
      , gs = function() {
        var a = y
          , b = []
          , c = null;
        do {
            var d = a;
            if (sm(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new ys(e || ""));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = y;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.Td = !0);
        return b
    }
      , zs = function(a, b, c) {
        this.g = a;
        this.j = b;
        this.l = c
    }
      , ys = function(a, b) {
        this.url = a;
        this.Td = !!b;
        this.depth = null
    };
    var Bs = function() {
        this.l = "&";
        this.g = {};
        this.o = 0;
        this.j = []
    }
      , Cs = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , Es = function(a, b, c, d, e) {
        var f = [];
        ym(a, function(g, h) {
            (g = Ds(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
      , Ds = function(a, b, c, d, e) {
        if (a == null)
            return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0),
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Ds(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object")
            return e || (e = 0),
            e < 2 ? encodeURIComponent(Es(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , Fs = function(a, b, c) {
        A(!a.g[b]);
        a.j.push(b);
        a.g[b] = c
    }
      , Gs = function(a, b, c, d) {
        A(!a.g[b]);
        a.j.push(b);
        a.g[b] = Cs(c, d)
    }
      , Is = function(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Hs(a) - c.length;
        if (d < 0)
            return "";
        a.j.sort(function(n, p) {
            return n - p
        });
        c = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.g[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = c == null ? g : c;
                    break
                }
                var l = Es(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.l;
                        break
                    }
                    c = c == null ? g : c
                }
            }
        a = "";
        c != null && (a = "" + e + "trn=" + c);
        return b + a
    }
      , Hs = function(a) {
        var b = 1, c;
        for (c in a.g)
            c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    };
    var Js = function(a, b) {
        this.g = a;
        this.depth = b
    }
      , Ls = function() {
        var a = gs()
          , b = Math.max(a.length - 1, 0)
          , c = As(a);
        a = c.g;
        var d = c.j
          , e = c.l
          , f = [];
        c = function(h, k) {
            return h == null ? k : h
        }
        ;
        e && f.push(new Js([e.url, e.Td ? 2 : 0],c(e.depth, 1)));
        d && d != e && f.push(new Js([d.url, 2],0));
        a.url && a != e && f.push(new Js([a.url, 0],c(a.depth, b)));
        var g = fc(f, function(h, k) {
            return f.slice(0, f.length - k)
        });
        !a.url || (e || d) && a != e || (d = Am(a.url)) && g.push([new Js([d, 1],c(a.depth, b))]);
        g.push([]);
        return fc(g, function(h) {
            return Ks(b, h)
        })
    };
    function Ks(a, b) {
        A(ic(b, function(e) {
            return e.depth >= 0
        }));
        var c = gc(b, function(e, f) {
            return Math.max(e, f.depth)
        }, -1)
          , d = wc(c + 2);
        d[0] = a;
        cc(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    function Ms() {
        var a = a === void 0 ? Ls() : a;
        return a.map(function(b) {
            return Ds(b)
        })
    }
    ;var Ns = function() {
        this.j = new es;
        this.g = cs() ? new ds : new bs
    }
      , Ps = function() {
        Os();
        var a = O.document;
        return !!(a && a.body && a.body.getBoundingClientRect && typeof O.setInterval === "function" && typeof O.clearInterval === "function" && typeof O.setTimeout === "function" && typeof O.clearTimeout === "function")
    };
    Ns.prototype.setTimeout = function(a, b) {
        return O.setTimeout(a, b)
    }
    ;
    Ns.prototype.clearTimeout = function(a) {
        O.clearTimeout(a)
    }
    ;
    var Qs = function() {
        Os();
        return Ms()
    };
    var Rs = function() {}
      , Os = function() {
        var a = I(Rs);
        if (!a.g) {
            if (!O)
                throw Error("Context has not been set and window is undefined.");
            a.g = I(Ns)
        }
        return a.g
    };
    var Ss = function(a) {
        G.call(this, a)
    };
    w(Ss, G);
    Ss.g = "ads.branding.measurement.active_view.legacy_js.performance.performance.Snapshot";
    Ss.prototype.g = Sj([0, Dj, Gj, -2, Jj]);
    var Ts = function(a) {
        this.l = a;
        this.g = -1;
        this.j = this.o = 0
    }
      , Us = function(a, b) {
        return function() {
            var c = Ka.apply(0, arguments);
            if (a.g > -1)
                return b.apply(null, ka(c));
            try {
                return a.g = a.l.g.now(),
                b.apply(null, ka(c))
            } finally {
                a.o += a.l.g.now() - a.g,
                a.g = -1,
                a.j += 1
            }
        }
    };
    var Vs = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new Ts(a)
    };
    var Ws = function() {
        this.g = {}
    }
      , Ys = function() {
        var a = N().flags
          , b = Xs;
        a = a.g[b.key];
        if (b.valueType === "proto") {
            try {
                var c = JSON.parse(a);
                if (Array.isArray(c))
                    return c
            } catch (d) {}
            return b.defaultValue
        }
        return typeof a === typeof b.defaultValue ? a : b.defaultValue
    };
    var Zs = {
        ij: 1,
        Bj: 2,
        bj: 3
    };
    var $s = function() {
        this.l = void 0;
        this.j = this.B = 0;
        this.A = -1;
        this.R = new Qr;
        Lr(Rr(this.R, "mv", Ir)).l = Jr === void 0 ? null : Jr;
        Rr(this.R, "omid", Fr);
        Lr(Rr(this.R, "epoh", Fr));
        Lr(Rr(this.R, "epph", Fr));
        Lr(Rr(this.R, "umt", Fr)).l = Gr === void 0 ? null : Gr;
        Lr(Rr(this.R, "phel", Fr));
        Lr(Rr(this.R, "phell", Fr));
        Lr(Rr(this.R, "oseid", Zs));
        var a = this.R;
        a.g.sloi || (a.g.sloi = new Or);
        Lr(a.g.sloi);
        Rr(this.R, "mm", Dr);
        Lr(Rr(this.R, "ovms", Cr));
        Lr(Rr(this.R, "xdi", Fr));
        Lr(Rr(this.R, "amp", Fr));
        Lr(Rr(this.R, "prf", Fr));
        Lr(Rr(this.R, "gtx", Fr));
        Lr(Rr(this.R, "mvp_lv", Fr));
        Lr(Rr(this.R, "ssmol", Fr)).l = Hr === void 0 ? null : Hr;
        Lr(Rr(this.R, "fmd", Fr));
        Rr(this.R, "gen204simple", Fr);
        this.g = new Vs(Os(),this.R);
        this.o = !1;
        this.flags = new Ws
    };
    $s.prototype.ee = function(a) {
        if (typeof a === "string" && a.length != 0) {
            var b = this.R;
            if (b.l) {
                A(/^(http|https):\/\/[^ "]/.test(a) == 0);
                A(a.length == 0 || a.endsWith("&"));
                a = a.split("&");
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c].split("=")
                      , e = decodeURIComponent(d[0]);
                    d.length > 1 ? (d = decodeURIComponent(d[1]),
                    d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    }
    ;
    var N = function() {
        return I($s)
    };
    var at = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g))
            try {
                if (c instanceof Bs)
                    var f = c;
                else
                    f = new Bs,
                    ym(c, function(h, k) {
                        var l = f
                          , n = l.o++;
                        Fs(l, n, Cs(k, h))
                    });
                var g = Is(f, a.j, "/pagead/gen_204?id=" + b + "&");
                g && (Os(),
                Km(O, g))
            } catch (h) {}
    };
    var dt = function() {
        var a = bt;
        this.B = ct;
        this.A = "jserror";
        this.l = !1;
        this.j = null;
        this.C = this.ab;
        this.g = a === void 0 ? null : a;
        this.o = !1
    };
    m = dt.prototype;
    m.od = function(a) {
        this.j = a
    }
    ;
    m.ne = function(a) {
        this.A = a
    }
    ;
    m.oe = function(a) {
        this.l = a
    }
    ;
    m.pe = function(a) {
        this.o = a
    }
    ;
    m.Eb = function(a, b, c) {
        var d = this;
        return Us(N().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else
                    f = b()
            } catch (h) {
                var g = d.l;
                try {
                    Ao(e),
                    g = d.C(a, new et(ft(h)), void 0, c)
                } catch (k) {
                    d.ab(217, k)
                }
                if (!g)
                    throw h;
            }
            return f
        })()
    }
    ;
    m.fe = function(a, b, c, d) {
        var e = this;
        return Us(N().g.g, function() {
            var f = Ka.apply(0, arguments);
            return e.Eb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    }
    ;
    m.ab = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new Bs;
            Gs(f, 1, "context", a);
            Wj(b) || (b = new et(ft(b)));
            b.msg && Gs(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j)
                try {
                    this.j(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            Fs(f, 3, [g]);
            var h = As();
            h.j && Gs(f, 4, "top", h.j.url || "");
            Fs(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? om(h.g.url) : ""
            }]);
            at(this.B, e, f, this.o, c)
        } catch (k) {
            try {
                at(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ft(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (l) {}
        }
        return this.l
    }
    ;
    var ft = function(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
      , et = function(a) {
        Vj.call(this, Error(a), {
            message: a
        })
    };
    w(et, Vj);
    var ct, gt, bt = new zo(1,window), ht = function() {
        O && typeof O.google_measure_js_timing != "undefined" && (O.google_measure_js_timing || bt.B())
    };
    ct = new function() {
        var a = "https:";
        O && O.location && O.location.protocol === "http:" && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    }
    ;
    gt = new dt;
    O && O.document && (O.document.readyState == "complete" ? ht() : bt.l && dk(O, "load", function() {
        ht()
    }));
    var it = function(a) {
        gt.od(function(b) {
            cc(a, function(c) {
                c(b)
            })
        })
    }
      , jt = function(a, b) {
        return gt.Eb(a, b)
    }
      , kt = function(a, b, c, d) {
        return gt.fe(a, b, c, d)
    }
      , lt = function(a, b, c, d) {
        gt.ab(a, b, c, d)
    };
    var mt = Date.now(), nt = -1, ot = -1, pt, qt = -1, rt = !1, tt = function() {
        return Date.now() - mt
    }, ut = function() {
        var a = N().l
          , b = ot >= 0 ? tt() - ot : -1
          , c = rt ? tt() - nt : -1
          , d = qt >= 0 ? tt() - qt : -1;
        if (a == 947190542)
            return 100;
        if (a == 79463069)
            return 200;
        a = [2E3, 4E3];
        var e = [250, 500, 1E3];
        lt(637, Error(), .001);
        var f = b;
        c != -1 && c < b && (f = c);
        for (b = 0; b < a.length; ++b)
            if (f < a[b]) {
                var g = e[b];
                break
            }
        g === void 0 && (g = e[a.length]);
        return d != -1 && d > 1500 && d < 4E3 ? 500 : g
    };
    var vt = function(a, b, c) {
        var d = new H(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    var wt = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.j = b;
        this.A = c;
        this.g = d;
        this.o = e;
        this.C = f;
        this.B = g
    };
    wt.prototype.getTimestamp = function() {
        return this.C
    }
    ;
    var xt = {
        currentTime: 1,
        duration: 2,
        isVpaid: 4,
        volume: 8,
        isYouTube: 16,
        isPlaying: 32
    }
      , dl = {
        Ee: "start",
        FIRST_QUARTILE: "firstquartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdquartile",
        COMPLETE: "complete",
        ERROR: "error",
        Sf: "metric",
        PAUSE: "pause",
        bg: "resume",
        SKIPPED: "skip",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Tf: "mute",
        fg: "unmute",
        FULLSCREEN: "fullscreen",
        Pf: "exitfullscreen",
        Kf: "bufferstart",
        Jf: "bufferfinish",
        ze: "fully_viewable_audible_half_duration_impression",
        De: "measurable_impression",
        Ef: "abandon",
        ye: "engagedview",
        IMPRESSION: "impression",
        Mf: "creativeview",
        LOADED: "loaded",
        PROGRESS: "progress",
        Vh: "close",
        Wh: "collapse",
        Uf: "overlay_resize",
        Vf: "overlay_unmeasurable_impression",
        Wf: "overlay_unviewable_impression",
        Yf: "overlay_viewable_immediate_impression",
        Xf: "overlay_viewable_end_of_session_impression",
        Nf: "custom_metric_viewable",
        Gf: "audio_audible",
        If: "audio_measurable",
        Hf: "audio_impression"
    }
      , yt = "start firstquartile midpoint thirdquartile resume loaded".split(" ")
      , zt = ["start", "firstquartile", "midpoint", "thirdquartile"]
      , At = ["abandon"]
      , Bt = {
        UNKNOWN: -1,
        Ee: 0,
        FIRST_QUARTILE: 1,
        MIDPOINT: 2,
        THIRD_QUARTILE: 3,
        COMPLETE: 4,
        Sf: 5,
        PAUSE: 6,
        bg: 7,
        SKIPPED: 8,
        VIEWABLE_IMPRESSION: 9,
        Tf: 10,
        fg: 11,
        FULLSCREEN: 12,
        Pf: 13,
        ze: 14,
        De: 15,
        Ef: 16,
        ye: 17,
        IMPRESSION: 18,
        Mf: 19,
        LOADED: 20,
        Nf: 21,
        Kf: 22,
        Jf: 23,
        Hf: 27,
        If: 28,
        Gf: 29
    };
    var Xk = {
        Rh: "addEventListener",
        xi: "getMaxSize",
        yi: "getScreenSize",
        zi: "getState",
        Ai: "getVersion",
        kj: "removeEventListener",
        Xi: "isViewable"
    }
      , Ct = function(a) {
        var b = a !== a.top
          , c = a.top === Im(a)
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        Wk(function(g) {
            return typeof f[g] === "function"
        }) || (e = 1));
        return {
            Ha: f,
            Kc: e,
            Ah: d
        }
    };
    var Dt = function() {
        var a = window.document;
        return a && typeof a.elementFromPoint === "function"
    };
    function Et(a, b, c) {
        try {
            a && (b = b.top);
            var d = b;
            a && d !== null && d != d.top && (d = d.top);
            try {
                var e = (c === void 0 ? 0 : c) ? (new Sk(d.innerWidth,d.innerHeight)).round() : am(d || window).round()
            } catch (n) {
                e = new Sk(-12245933,-12245933)
            }
            a = e;
            var f = a.height
              , g = a.width;
            if (g === -12245933)
                return new H(g,g,g,g);
            var h = bm(Xl(b.document).g)
              , k = h.x
              , l = h.y;
            return new H(l,k + g,l + f,k)
        } catch (n) {
            return new H(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var Gt = function(a, b) {
        if (typeof b === "string")
            (b = Ft(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a
                  , e = b[c]
                  , f = Ft(d, c);
                f && (d.style[f] = e)
            }
    }
      , Ht = {}
      , Ft = function(a, b) {
        var c = Ht[b];
        if (!c) {
            var d = Rl(b);
            c = d;
            a.style[d] === void 0 && (d = (Fc ? "Webkit" : Ec ? "Moz" : Cc ? "ms" : null) + Tl(d),
            a.style[d] !== void 0 && (c = d));
            Ht[b] = c
        }
        return c
    }
      , It = function(a, b) {
        var c = a.style[Rl(b)];
        return typeof c !== "undefined" ? c : a.style[Ft(a, b)] || ""
    }
      , Jt = function(a, b) {
        var c = Wl(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
      , Kt = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
      , Lt = function(a) {
        var b = Wl(a);
        vb(a, "Parameter is required");
        var c = new Rk(0,0)
          , d = (b ? Wl(b) : document).documentElement;
        if (a == d)
            return c;
        a = Kt(a);
        b = bm(Xl(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , Mt = function(a, b) {
        var c = new Rk(0,0)
          , d = cm(Wl(a));
        if (!yc(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = Lt(a);
            else
                e = A(a),
                e = Kt(e),
                e = new Rk(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
      , Nt = function() {
        var a = "100%";
        typeof a == "number" && (a = Math.round(a) + "px");
        return a
    }
      , Pt = function(a) {
        var b = Ot, c;
        (c = Jt(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
        if ((c || a.style && a.style.display) != "none")
            return b(a);
        c = a.style;
        var d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , Ot = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Fc && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Kt(a),
        new Sk(a.right - a.left,a.bottom - a.top)) : new Sk(b,c)
    }
      , Qt = function(a) {
        var b = new Sk(a.offsetWidth,a.offsetHeight);
        var c = Jt(a, "paddingLeft");
        var d = Jt(a, "paddingRight")
          , e = Jt(a, "paddingTop")
          , f = Jt(a, "paddingBottom");
        c = new H(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c));
        d = Jt(a, "borderLeftWidth");
        e = Jt(a, "borderRightWidth");
        f = Jt(a, "borderTopWidth");
        a = Jt(a, "borderBottomWidth");
        a = new H(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d));
        return new Sk(b.width - a.left - c.left - c.right - a.right,b.height - a.top - c.top - c.bottom - a.bottom)
    };
    var Rt = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function St(a, b, c, d) {
        if (!a)
            return {
                value: d,
                done: !1
            };
        d = b(d, a);
        var e = c(d, a);
        return !e && yc(a, "parentElement") ? St(a.parentElement || null, b, c, d) : {
            done: e,
            value: d
        }
    }
    var Tt = function(a, b, c, d) {
        if (!a)
            return d;
        d = St(a, b, c, d);
        if (!d.done)
            try {
                var e = Wl(a)
                  , f = e && cm(e);
                return Tt(f && f.frameElement, b, c, d.value)
            } catch (g) {}
        return d.value
    };
    function Ut(a) {
        var b = !Cc || Tc();
        return Tt(a, function(c, d) {
            c = yc(d, "style") && d.style && It(d, "visibility");
            return {
                hidden: c === "hidden",
                visible: b && c === "visible"
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Vt = function(a) {
        return Tt(a, function(b, c) {
            return !(!yc(c, "style") || !c.style || It(c, "display") !== "none")
        }, function(b) {
            return b
        }, !1) ? !0 : Ut(a)
    }
      , Wt = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    }
      , Xt = function(a) {
        var b = a.top || 0
          , c = a.left || 0;
        return new H(b,c + (a.width || 0),b + (a.height || 0),c)
    }
      , Yt = function(a) {
        return a != null && a >= 0 && a <= 1
    };
    function Zt() {
        var a = Qb();
        return a ? hc("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Lb(a, b)
        }) || Lb(a, "OMI/") && !Lb(a, "XiaoMi/") ? !0 : Lb(a, "Presto") && Lb(a, "Linux") && !Lb(a, "X11") && !Lb(a, "Android") && !Lb(a, "Mobi") : !1
    }
    function $t() {
        var a = Qb();
        return Lb(a, "AppleTV") || Lb(a, "Apple TV") || Lb(a, "CFNetwork") || Lb(a, "tvOS")
    }
    function au() {
        var a;
        (a = Lb(Qb(), "CrKey") && !(Lb(Qb(), "CrKey") && Lb(Qb(), "SmartSpeaker")) || Lb(Qb(), "PlayStation") || Lb(Qb(), "Roku") || Zt() || Lb(Qb(), "Xbox") || $t()) || (a = Qb(),
        a = Lb(a, "sdk_google_atv_x86") || Lb(a, "Android TV"));
        return a
    }
    ;var cu = function() {
        this.l = !sm(O.top);
        this.C = lm() || mm();
        var a = gs();
        a = a.length > 0 && a[a.length - 1] != null && a[a.length - 1].url != null ? ((a = a[a.length - 1].url.match(nm)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new H(0,0,0,0);
        this.A = new Sk(0,0);
        this.o = new Sk(0,0);
        this.I = new H(0,0,0,0);
        this.frameOffset = new Rk(0,0);
        this.B = 0;
        this.L = !1;
        this.j = !(!O || !Ct(O).Ha);
        bu(this)
    }
      , du = function(a, b) {
        b && b.screen && (a.A = new Sk(b.screen.width,b.screen.height))
    }
      , eu = function(a, b) {
        a: {
            var c = a.g ? new Sk(a.g.getWidth(),a.g.getHeight()) : new Sk(0,0);
            b = b === void 0 ? O : b;
            b !== null && b != b.top && (b = b.top);
            var d = 0
              , e = 0;
            try {
                var f = b.document
                  , g = f.body
                  , h = f.documentElement;
                if (f.compatMode == "CSS1Compat" && h.scrollHeight)
                    d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                    e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight
                      , l = h.scrollWidth
                      , n = h.offsetHeight
                      , p = h.offsetWidth;
                    h.clientHeight != n && (k = g.scrollHeight,
                    l = g.scrollWidth,
                    n = g.offsetHeight,
                    p = g.offsetWidth);
                    k > c.height ? k > n ? (d = k,
                    e = l) : (d = n,
                    e = p) : k < n ? (d = k,
                    e = l) : (d = n,
                    e = p)
                }
                var q = new Sk(e,d);
                break a
            } catch (t) {
                q = new Sk(-12245933,-12245933);
                break a
            }
            q = void 0
        }
        a.o = q
    }
      , bu = function(a) {
        O && O.document && (a.I = Et(!1, O, a.C),
        a.g = Et(!0, O, a.C),
        eu(a, O),
        du(a, O))
    }
      , gu = function() {
        var a = fu();
        if (a.B > 0 || a.L)
            return !0;
        a = Os().j.isVisible();
        var b = no(Zr) === 0;
        return a || b
    }
      , fu = function() {
        return I(cu)
    };
    var hu = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    hu.prototype.cancel = function() {
        Os().clearTimeout(this.g);
        this.g = null
    }
    ;
    var iu = function(a) {
        var b = Os()
          , c = N().g.g;
        a.g = b.setTimeout(Us(c, kt(143, function() {
            a.j++;
            a.l.sample()
        })), ut())
    };
    var ju = function(a, b, c) {
        this.l = a;
        this.ka = c === void 0 ? "na" : c;
        this.A = [];
        this.xa = !1;
        this.o = new vt(-1,!0,this);
        this.g = this;
        this.L = b;
        this.H = this.D = !1;
        this.V = "uk";
        this.O = !1;
        this.C = !0
    };
    ju.prototype.F = function() {
        return !1
    }
    ;
    ju.prototype.initialize = function() {
        return this.xa = !0
    }
    ;
    ju.prototype.Jb = function() {
        return this.g.V
    }
    ;
    ju.prototype.fc = function() {
        return this.g.H
    }
    ;
    var lu = function(a, b, c) {
        if (!a.H || (c === void 0 ? 0 : c))
            a.H = !0,
            a.V = b,
            a.L = 0,
            a.g != a || ku(a)
    };
    ju.prototype.getName = function() {
        return this.g.ka
    }
    ;
    ju.prototype.ob = function() {
        return this.g.X()
    }
    ;
    ju.prototype.X = function() {
        return {}
    }
    ;
    ju.prototype.Wa = function() {
        return this.g.L
    }
    ;
    var mu = function(a, b) {
        nc(a.A, b) || (a.A.push(b),
        b.Lb(a.g),
        b.qb(a.o),
        b.Ra() && (a.D = !0))
    };
    ju.prototype.P = function() {
        var a = fu();
        a.g = Et(!0, this.l, a.C)
    }
    ;
    ju.prototype.U = function() {
        du(fu(), this.l)
    }
    ;
    ju.prototype.Z = function() {
        return this.o.g
    }
    ;
    var nu = function(a) {
        a = a.g;
        a.U();
        a.P();
        var b = fu();
        b.I = Et(!1, a.l, b.C);
        eu(fu(), a.l);
        a.o.g = a.Z()
    };
    ju.prototype.sample = function() {}
    ;
    ju.prototype.isActive = function() {
        return this.g.C
    }
    ;
    var ou = function(a) {
        a.D = a.A.length ? hc(a.A, function(b) {
            return b.Ra()
        }) : !1
    }
      , pu = function(a) {
        var b = sc(a.A);
        cc(b, function(c) {
            c.qb(a.o)
        })
    }
      , ku = function(a) {
        var b = sc(a.A);
        cc(b, function(c) {
            c.Lb(a.g)
        });
        a.g != a || pu(a)
    };
    m = ju.prototype;
    m.Lb = function(a) {
        var b = this.g;
        this.g = a.Wa() >= this.L ? a : this;
        b !== this.g ? (this.C = this.g.C,
        ku(this)) : this.C !== this.g.C && (this.C = this.g.C,
        ku(this))
    }
    ;
    m.qb = function(a) {
        if (a.j === this.g) {
            var b = this.o
              , c = this.D;
            if (c = a && (c === void 0 || !c || b.volume == a.volume) && b.l == a.l)
                b = b.g,
                c = a.g,
                c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.o = a;
            !c && pu(this)
        }
    }
    ;
    m.Ra = function() {
        return this.D
    }
    ;
    m.dispose = function() {
        this.O = !0
    }
    ;
    m.Ga = function() {
        return this.O
    }
    ;
    var qu = function(a, b, c, d) {
        this.l = a;
        this.g = new H(0,0,0,0);
        this.A = new H(0,0,0,0);
        this.j = b;
        this.R = c;
        this.H = d;
        this.F = !1;
        this.timestamp = -1;
        this.I = new wt(b.o,this.g,new H(0,0,0,0),0,0,tt(),0)
    };
    m = qu.prototype;
    m.yd = function() {
        return !0
    }
    ;
    m.yc = function() {}
    ;
    m.dispose = function() {
        if (!this.Ga()) {
            var a = this.j;
            oc(a.A, this);
            a.D && this.Ra() && ou(a);
            this.yc();
            this.F = !0
        }
    }
    ;
    m.Ga = function() {
        return this.F
    }
    ;
    m.ob = function() {
        return this.j.ob()
    }
    ;
    m.Wa = function() {
        return this.j.Wa()
    }
    ;
    m.Jb = function() {
        return this.j.Jb()
    }
    ;
    m.fc = function() {
        return this.j.fc()
    }
    ;
    m.Lb = function() {}
    ;
    m.qb = function() {
        this.kb()
    }
    ;
    m.Ra = function() {
        return this.H
    }
    ;
    var ru = function(a) {
        this.A = !1;
        this.g = a;
        this.o = function() {}
    };
    m = ru.prototype;
    m.Wa = function() {
        return this.g.Wa()
    }
    ;
    m.Jb = function() {
        return this.g.Jb()
    }
    ;
    m.fc = function() {
        return this.g.fc()
    }
    ;
    m.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.zc(a, b, c),
        mu(this.g, d));
        return d
    }
    ;
    m.Ae = function() {
        return this.Sb()
    }
    ;
    m.Sb = function() {
        return !1
    }
    ;
    m.init = function(a) {
        return this.g.initialize() ? (mu(this.g, this),
        this.o = a,
        !0) : !1
    }
    ;
    m.Lb = function(a) {
        a.Wa() == 0 && this.o(a.Jb(), this)
    }
    ;
    m.qb = function() {}
    ;
    m.Ra = function() {
        return !1
    }
    ;
    m.dispose = function() {
        this.A = !0
    }
    ;
    m.Ga = function() {
        return this.A
    }
    ;
    m.ob = function() {
        return {}
    }
    ;
    var tu = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        A(0 < a.length);
        A(typeof b !== "function");
        A(-16 <= c);
        A(c < 17);
        this.l = c;
        this.j = a;
        this.g = b == null ? "" : b
    }
      , uu = function(a) {
        switch (Math.trunc(a.l)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return A(!1),
            16
        }
    }
      , vu = function(a, b) {
        return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };
    var wu = function() {
        this.j = 0;
        this.g = [];
        this.l = !1
    };
    wu.prototype.add = function(a, b, c) {
        ++this.j;
        A(this.j < 4096);
        var d = this.j / 4096
          , e = this.g
          , f = e.push;
        a = new tu(a,b,c);
        A(0 < d && d < 1);
        d = new tu(a.j,a.g,a.l + d);
        f.call(e, d);
        this.l = !0;
        return this
    }
    ;
    var xu = function(a, b) {
        cc(b.g, function(c) {
            a.add(c.j, c.g, uu(c))
        })
    }
      , yu = function(a, b) {
        var c = c === void 0 ? 0 : c;
        var d = d === void 0 ? !0 : d;
        ym(b, function(e, f) {
            d && e === void 0 || a.add(f, e, c)
        });
        return a
    }
      , Au = function(a) {
        var b = zu;
        a.l && (uc(a.g, function(c, d) {
            return vu(d, c) ? 1 : vu(c, d) ? -1 : 0
        }),
        a.l = !1);
        return gc(a.g, function(c, d) {
            d = b(d);
            return "" + c + (c != "" && d != "" ? "&" : "") + d
        }, "")
    };
    var zu = function(a) {
        var b = a.j;
        a = a.g;
        return a === "" ? b : typeof a === "boolean" ? a ? b : "" : Array.isArray(a) ? a.length === 0 ? b : b + "=" + a.join() : b + "=" + (nc(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Bu = function(a) {
        var b = b === void 0 ? !0 : b;
        A(!0);
        this.g = new wu;
        a !== void 0 && xu(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    Bu.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = Au(this.g);
        b.length > 0 && (a += "?" + b);
        return a
    }
    ;
    var Cu = function(a) {
        var b = []
          , c = [];
        Uk(a, function(d, e) {
            if (!(e in Object.prototype) && typeof d != "undefined")
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
      , Du = function(a) {
        a = a.toString();
        Os();
        Km(O, a)
    };
    var Eu = function() {
        this.g = 0
    };
    function Fu(a) {
        a && typeof a.dispose == "function" && a.dispose()
    }
    ;var P = function() {
        this.L = this.L;
        this.I = this.I
    };
    P.prototype.L = !1;
    P.prototype.Ga = function() {
        return this.L
    }
    ;
    P.prototype.dispose = function() {
        this.L || (this.L = !0,
        this.M())
    }
    ;
    P.prototype[Symbol.dispose] = function() {
        this.dispose()
    }
    ;
    var Hu = function(a, b) {
        Gu(a, eb(Fu, b))
    }
      , Gu = function(a, b) {
        a.L ? b() : (a.I || (a.I = []),
        a.I.push(b))
    };
    P.prototype.M = function() {
        if (this.I)
            for (; this.I.length; )
                this.I.shift()()
    }
    ;
    var Iu = function(a, b, c) {
        cc(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c),
            d.o())) {
                d.g = !0;
                var f = d.j()
                  , g = new wu;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = I(Eu);
                g.add("i", d.g++);
                g.add("adk", e);
                yu(g, f);
                e = new Bu(g);
                Du(e)
            }
        })
    };
    var Ju = function() {
        this.j = this.l = this.o = this.g = 0
    }
      , Ku = function(a, b, c, d) {
        b && (a.g += c,
        a.j += c,
        a.o += c,
        a.l = Math.max(a.l, a.o));
        if (d === void 0 ? !b : d)
            a.o = 0
    };
    var Lu = [1, .75, .5, .3, 0]
      , Mu = function(a) {
        this.j = a = a === void 0 ? Lu : a;
        this.g = fc(this.j, function() {
            return new Ju
        })
    }
      , Ou = function(a, b) {
        return Nu(a, function(c) {
            return c.g
        }, b === void 0 ? !0 : b)
    }
      , Qu = function(a, b) {
        return Pu(a, b, function(c) {
            return c.g
        })
    }
      , Ru = function(a, b) {
        return Nu(a, function(c) {
            return c.l
        }, b === void 0 ? !0 : b)
    }
      , Su = function(a, b) {
        return Pu(a, b, function(c) {
            return c.l
        })
    }
      , Tu = function(a, b) {
        return Pu(a, b, function(c) {
            return c.j
        })
    }
      , Uu = function(a) {
        cc(a.g, function(b) {
            b.j = 0
        })
    }
      , Vu = function(a, b, c, d, e, f, g) {
        g = g === void 0 ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.j.length; f++) {
            var h = a.j[f]
              , k = c > 0 && c >= h;
            h = !(b > 0 && b >= h) || d;
            Ku(a.g[f], g && k, e, !g || h)
        }
    }
      , Nu = function(a, b, c) {
        a = fc(a.g, function(d) {
            return b(d)
        });
        return c ? a : Wu(a)
    }
      , Pu = function(a, b, c) {
        var d = mc(a.j, function(e) {
            return b <= e
        });
        return d == -1 ? 0 : c(a.g[d])
    }
      , Wu = function(a) {
        return fc(a, function(b, c, d) {
            return c > 0 ? d[c] - d[c - 1] : d[c]
        })
    };
    var Xu = function() {
        this.j = new Mu;
        this.V = this.U = 0;
        this.Z = new Ju;
        this.H = this.C = -1;
        this.ka = 1E3;
        this.oa = new Mu([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
        this.O = this.J = -1
    }
      , Yu = function(a, b) {
        return Ru(a.j, b === void 0 ? !0 : b)
    };
    Xu.prototype.L = function(a, b, c, d) {
        this.C = this.C != -1 ? Math.min(this.C, b.aa) : b.aa;
        this.H = Math.max(this.H, b.aa);
        this.J = this.J != -1 ? Math.min(this.J, b.va) : b.va;
        this.O = Math.max(this.O, b.va);
        Vu(this.oa, b.va, c.va, b.g, a, d);
        this.U += a;
        b.aa === 0 && (this.V += a);
        Vu(this.j, b.aa, c.aa, b.g, a, d);
        c = d || c.Cb != b.Cb ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        Ku(this.Z, c, a, b)
    }
    ;
    Xu.prototype.Za = function() {
        return this.Z.l >= this.ka
    }
    ;
    if (Zr && Zr.URL) {
        var Zu = Zr.URL, $u;
        if ($u = !!Zu) {
            var av;
            a: {
                if (Zu) {
                    var bv = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var cv = bv.exec(decodeURIComponent(Zu));
                        if (cv) {
                            av = cv[1] && cv[1].length > 1 ? cv[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                av = ""
            }
            $u = av.length > 0
        }
        gt.oe(!$u)
    }
    var dv = function(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        c = kt(d, c);
        dk(a, b, c, {
            capture: e
        })
    };
    var ev = new H(0,0,0,0);
    function fv(a, b) {
        b = gv(b);
        return b === 0 ? 0 : gv(a) / b
    }
    function gv(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function hv(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; a !== null && c++ < 100; ) {
            if (a === b)
                return !0;
            try {
                if (a = a.parentElement || a) {
                    var d = Wl(a)
                      , e = d && cm(d)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function iv(a, b, c) {
        if (!a || !b)
            return !1;
        b = Zn(Yn(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        sm(window.top) && window.top && window.top.document && (window = window.top);
        if (!Dt())
            return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = Wl(c)) && b.defaultView && b.defaultView.frameElement) && hv(b, a);
        var d = a === c;
        a = !d && a && km(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function jv(a, b, c, d) {
        return fu().l ? !1 : a.getWidth() <= 0 || a.getHeight() <= 0 ? !0 : c && d ? jt(208, function() {
            return iv(a, b, c)
        }) : !1
    }
    ;var kv = new H(0,0,0,0)
      , mv = function(a, b, c) {
        P.call(this);
        this.position = Yn(kv);
        this.cd = this.Pc();
        this.Ud = -2;
        this.Fh = Date.now();
        this.zf = -1;
        this.Sc = b;
        this.Rc = null;
        this.Yb = !1;
        this.hd = null;
        this.opacity = -1;
        this.th = c;
        this.Gh = !1;
        this.Xd = function() {}
        ;
        this.Bf = function() {}
        ;
        this.wa = new as;
        this.wa.tb = a;
        this.wa.g = a;
        this.Xa = !1;
        this.zb = {
            Zd: null,
            Yd: null
        };
        this.uf = !0;
        this.xc = null;
        this.Mb = this.ah = !1;
        N().B++;
        this.ta = this.Od();
        this.yf = -1;
        this.fa = null;
        this.Xe = this.Xg = !1;
        this.R = new Qr;
        Yr(this.R);
        lv(this);
        this.th == 1 ? Tr(this.R, "od", 1) : Tr(this.R, "od", 0)
    };
    w(mv, P);
    mv.prototype.M = function() {
        this.wa.g && (this.zb.Zd && (ek(this.wa.g, "mouseover", this.zb.Zd),
        this.zb.Zd = null),
        this.zb.Yd && (ek(this.wa.g, "mouseout", this.zb.Yd),
        this.zb.Yd = null));
        this.xc && this.xc.dispose();
        this.fa && this.fa.dispose();
        delete this.cd;
        delete this.Xd;
        delete this.Bf;
        delete this.wa.tb;
        delete this.wa.g;
        delete this.zb;
        delete this.xc;
        delete this.fa;
        delete this.R;
        P.prototype.M.call(this)
    }
    ;
    mv.prototype.pb = function() {
        return this.fa ? this.fa.g : this.position
    }
    ;
    mv.prototype.ee = function(a) {
        N().ee(a)
    }
    ;
    var lv = function(a) {
        a = a.wa.tb;
        var b;
        if (b = a && a.getAttribute)
            b = /-[a-z]/.test("googleAvInapp") ? !1 : $r && a.dataset ? "googleAvInapp"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Sl()) : !!a.getAttribute("data-" + Sl());
        b && (fu().j = !0)
    };
    mv.prototype.Ra = function() {
        return !1
    }
    ;
    mv.prototype.Pc = function() {
        return new Xu
    }
    ;
    mv.prototype.sa = function() {
        return this.cd
    }
    ;
    var nv = function(a, b) {
        b != a.Mb && (a.Mb = b,
        a = fu(),
        b ? a.B++ : a.B > 0 && a.B--)
    }
      , ov = function(a, b) {
        if (a.fa) {
            if (b.getName() === a.fa.getName())
                return;
            a.fa.dispose();
            a.fa = null
        }
        b = b.create(a.wa.g, a.R, a.Ra());
        if (b = b != null && b.yd() ? b : null)
            a.fa = b
    }
      , pv = function(a, b, c) {
        if (!a.Rc || a.Sc == -1 || b.getTimestamp() === -1 || a.Rc.getTimestamp() === -1)
            return 0;
        a = b.getTimestamp() - a.Rc.getTimestamp();
        return a > c ? 0 : a
    };
    mv.prototype.Ue = function(a) {
        return pv(this, a, 1E4)
    }
    ;
    var qv = function(a, b, c) {
        if (a.fa) {
            a.fa.kb();
            var d = a.fa.I
              , e = d.l
              , f = e.g;
            if (d.A != null) {
                var g = d.j;
                a.hd = new Rk(g.left - f.left,g.top - f.top)
            }
            f = a.qd() ? Math.max(d.g, d.o) : d.g;
            g = {};
            e.volume !== null && (g.volume = e.volume);
            e = a.Ue(d);
            a.Rc = d;
            a.te(f, b, c, !1, g, e, d.B)
        }
    }
      , rv = function(a) {
        if (a.Yb && a.xc) {
            var b = Ur(a.R, "od") == 1
              , c = fu().g
              , d = a.xc
              , e = a.fa ? a.fa.getName() : "ns"
              , f = a.hd
              , g = new Sk(c.getWidth(),c.getHeight());
            c = a.qd();
            a = {
                Ch: e,
                hd: f,
                Qh: g,
                qd: c,
                aa: a.ta.aa,
                Lh: b
            };
            if (b = d.j) {
                b.kb();
                e = b.I;
                f = e.l.g;
                var h = g = null;
                e.A != null && f && (g = e.j,
                g = new Rk(g.left - f.left,g.top - f.top),
                h = new Sk(f.right - f.left,f.bottom - f.top));
                e = c ? Math.max(e.g, e.o) : e.g;
                c = {
                    Ch: b.getName(),
                    hd: g,
                    Qh: h,
                    qd: c,
                    Lh: !1,
                    aa: e
                }
            } else
                c = null;
            c && Iu(d, a, c)
        }
    };
    m = mv.prototype;
    m.te = function(a, b, c, d, e, f, g) {
        this.Xa || (this.Yb && (a = this.Cd(a, c, e, g),
        d = d && this.ta.aa >= (this.Cb() ? .3 : .5),
        this.ue(f, a, d),
        this.Sc = b,
        a.aa > 0 && (A(-1 !== b, "The ad cannot have been exposed at INVALID_TIME."),
        -1 === this.yf && (this.yf = b)),
        this.zf == -1 && this.Za() && (this.zf = b),
        this.Ud == -2 && (this.Ud = gv(this.pb()) ? a.aa : -1),
        this.ta = a),
        this.Xd(this))
    }
    ;
    m.ue = function(a, b, c) {
        this.sa().L(a, b, this.ta, c)
    }
    ;
    m.Od = function() {
        return new Er
    }
    ;
    m.Cd = function(a, b, c, d) {
        c = this.Od();
        c.g = b;
        b = Os().j;
        b = no(Zr) === 0 ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.aa = this.Gd(a);
        c.Cb = this.Cb();
        c.va = d;
        return c
    }
    ;
    m.Gd = function(a) {
        return this.opacity === 0 && Ur(this.R, "opac") === 1 ? 0 : a
    }
    ;
    m.Cb = function() {
        return !1
    }
    ;
    m.qd = function() {
        return this.Xg || this.ah
    }
    ;
    m.Ba = function() {
        return 0
    }
    ;
    m.Za = function() {
        return this.cd.Za()
    }
    ;
    m.We = function() {
        var a = this.Yb;
        a = (this.Xe || this.Ga()) && !a;
        var b = N().j !== 2 || this.Gh;
        return this.Xa || b && a ? 2 : this.Za() ? 4 : 3
    }
    ;
    m.Nc = function() {
        return 0
    }
    ;
    var tv = function(a, b, c) {
        b && (a.Xd = b);
        c && (a.Bf = c)
    };
    var uv = function() {};
    uv.prototype.next = function() {
        return vv
    }
    ;
    var vv = ml({
        done: !0,
        value: void 0
    });
    uv.prototype.Hb = function() {
        return this
    }
    ;
    var wv = function() {
        this.o = this.g = this.l = this.j = this.A = 0
    }
      , xv = function(a) {
        var b = {};
        b = (b.ptlt = fb() - a.A,
        b);
        var c = a.j;
        c && (b.pnk = c);
        (c = a.l) && (b.pnc = c);
        (c = a.o) && (b.pnmm = c);
        (a = a.g) && (b.pns = a);
        return b
    };
    var yv = function() {
        Er.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    w(yv, Er);
    var zv = function(a) {
        return Yt(a.volume) && a.volume > 0
    };
    var Bv = function(a, b, c, d) {
        c = c === void 0 ? !0 : c;
        d = d === void 0 ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return Av(f, b, c)
        }
    }
      , Cv = function(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
      , Dv = function(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || a[c] === void 0 && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
      , Av = function(a, b, c) {
        return c === void 0 || c ? ec(a, function(d, e) {
            return nc(b, e)
        }) : fc(b, function(d, e, f) {
            return a.slice(e > 0 ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    };
    var Ev = Dv([void 0, 1, 2, 3, 4, 8, 16])
      , Fv = Dv([void 0, 4, 8, 16])
      , Gv = {
        sv: "sv",
        v: "v",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: Cv("p0", Fv),
        p1: Cv("p1", Fv),
        p2: Cv("p2", Fv),
        p3: Cv("p3", Fv),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        amtos: "amtos",
        mtos1: Bv("mtos1", [0, 2, 4], !1, Fv),
        mtos2: Bv("mtos2", [0, 2, 4], !1, Fv),
        mtos3: Bv("mtos3", [0, 2, 4], !1, Fv),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: Cv("a0", Fv),
        a1: Cv("a1", Fv),
        a2: Cv("a2", Fv),
        a3: Cv("a3", Fv),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: Cv("c0", Fv),
        c1: Cv("c1", Fv),
        c2: Cv("c2", Fv),
        c3: Cv("c3", Fv),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: Cv("qmtos", Ev),
        qnc: Cv("qnc", Ev),
        qmv: Cv("qmv", Ev),
        qnv: Cv("qnv", Ev),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: Cv("ss0", Fv),
        ss1: Cv("ss1", Fv),
        ss2: Cv("ss2", Fv),
        ss3: Cv("ss3", Fv),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia",
        omiddc: "omiddc",
        omidlat: "omidlat",
        omiddit: "omiddit",
        nopd: "nopd",
        co: "co",
        tm: "tm",
        tu: "tu"
    }
      , Hv = Object.assign({}, Gv, {
        avid: function(a) {
            return function() {
                return a
            }
        }("audio"),
        avas: "avas",
        vs: "vs"
    })
      , Iv = {
        atos: "atos",
        avt: Bv("atos", [2]),
        davs: "davs",
        dafvs: "dafvs",
        dav: "dav",
        ss: function(a, b) {
            return function(c) {
                return c[a] === void 0 && b !== void 0 ? b : c[a]
            }
        }("ss", 0),
        t: "t"
    };
    var Jv = function() {
        this.j = this.g = ""
    };
    var Kv = function() {}
      , Lv = function(a, b) {
        var c = {};
        if (a !== void 0)
            if (b != null)
                for (var d in b) {
                    var e = b[d];
                    d in Object.prototype || e != null && (c[d] = typeof e === "function" ? e(a) : a[e])
                }
            else
                il(c, a);
        return Au(yu(new wu, c))
    };
    var Mv = function() {
        var a = {};
        this.j = (a.vs = [1, 0],
        a.vw = [0, 1],
        a.am = [2, 2],
        a.a = [4, 4],
        a.f = [8, 8],
        a.bm = [16, 16],
        a.b = [32, 32],
        a.avw = [0, 64],
        a.avs = [64, 0],
        a.pv = [256, 256],
        a.gdr = [0, 512],
        a.p = [0, 1024],
        a.r = [0, 2048],
        a.m = [0, 4096],
        a.um = [0, 8192],
        a.ef = [0, 16384],
        a.s = [0, 32768],
        a.pmx = [0, 16777216],
        a.mut = [33554432, 33554432],
        a.umutb = [67108864, 67108864],
        a.tvoff = [134217728, 134217728],
        a);
        this.g = {};
        for (var b in this.j)
            this.j[b][1] > 0 && (this.g[b] = 0);
        this.l = 0
    };
    Mv.prototype.reportEvent = function(a) {
        var b = this.j[a]
          , c = b[1];
        this.l += b[0];
        c > 0 && this.g[a] == 0 && (this.g[a] = 1)
    }
    ;
    var Nv = function(a) {
        var b = Zk(a.j), c = 0, d;
        for (d in a.g)
            nc(b, d) && a.g[d] == 1 && (c += a.j[d][1],
            a.g[d] = 2);
        return c
    }
      , Ov = function(a) {
        var b = 0, c;
        for (c in a.g) {
            var d = a.g[c];
            if (d == 1 || d == 2)
                b += a.j[c][1]
        }
        return b
    };
    var Pv = function() {
        this.g = this.j = 0
    };
    Pv.prototype.getValue = function() {
        return this.j
    }
    ;
    var Qv = function(a, b, c) {
        b >= 32 || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b),
        a.g |= 1 << b)
    };
    var Rv = function() {
        Xu.call(this);
        this.l = new Ju;
        this.X = this.D = this.K = 0;
        this.I = -1;
        this.ya = new Ju;
        this.A = new Ju;
        this.g = new Mu;
        this.B = this.o = -1;
        this.F = new Ju;
        this.ka = 2E3;
        this.P = new Pv;
        this.na = new Pv;
        this.ba = new Pv
    };
    w(Rv, Xu);
    var Sv = function(a, b, c) {
        var d = a.X;
        rt || c || a.I == -1 || (d += b - a.I);
        return d
    };
    Rv.prototype.L = function(a, b, c, d) {
        if (!b.l) {
            Xu.prototype.L.call(this, a, b, c, d);
            var e = zv(b) && zv(c)
              , f = (d ? Math.min(b.aa, c.aa) : c.aa) >= .5;
            Yt(b.volume) && (this.o = this.o != -1 ? Math.min(this.o, b.volume) : b.volume,
            this.B = Math.max(this.B, b.volume));
            f && (this.K += a,
            this.D += e ? a : 0);
            Vu(this.g, b.aa, c.aa, b.g, a, d, e);
            Ku(this.l, !0, a);
            Ku(this.A, e, a);
            Ku(this.F, c.fullscreen, a);
            Ku(this.ya, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            Qv(this.P, a, b.isVisible());
            Qv(this.na, a, b.aa >= 1);
            Qv(this.ba, a, zv(b))
        }
    }
    ;
    var Tv = function() {
        this.l = !1
    };
    Tv.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.L.report(this.o, a),
        this.A |= a,
        a = a == 0) : a = !1,
        this.l = a)
    }
    ;
    var Uv = function(a, b) {
        this.l = !1;
        this.o = a;
        this.L = b;
        this.A = 0
    };
    w(Uv, Tv);
    Uv.prototype.g = function() {
        return !0
    }
    ;
    Uv.prototype.B = function() {
        return !1
    }
    ;
    Uv.prototype.getId = function() {
        var a = this
          , b = cl(function(c) {
            return c == a.o
        });
        return Bt[b].toString()
    }
    ;
    Uv.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.l && (a += "s");
        this.A > 0 && (a += ":" + this.A);
        return this.getId() + a
    }
    ;
    var Vv = function(a, b) {
        Uv.call(this, a, b);
        this.C = []
    };
    w(Vv, Uv);
    Vv.prototype.j = function(a, b) {
        b = b === void 0 ? null : b;
        b != null && this.C.push(b);
        Uv.prototype.j.call(this, a)
    }
    ;
    var Wv = function() {};
    var Xv = function() {};
    w(Xv, Wv);
    Xv.prototype.j = function() {
        return null
    }
    ;
    Xv.prototype.l = function() {
        return []
    }
    ;
    var Yv = function(a, b, c, d) {
        qu.call(this, a, b, c, d)
    };
    w(Yv, qu);
    m = Yv.prototype;
    m.Ed = function() {
        if (this.l) {
            var a = this.l
              , b = this.j.g.l;
            try {
                try {
                    var c = Wt(a.getBoundingClientRect())
                } catch (l) {
                    c = new H(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = Mt(a, b)
                  , g = f.x
                  , h = f.y;
                var k = new H(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (l) {
                k = Yn(ev)
            }
            this.g = k
        }
    }
    ;
    m.Le = function() {
        this.A = this.j.o.g
    }
    ;
    m.Ye = function(a) {
        var b = Ur(this.R, "od") == 1;
        return jv(a, this.A, this.l, b)
    }
    ;
    m.Me = function() {
        this.timestamp = tt()
    }
    ;
    m.kb = function() {
        this.Me();
        this.Ed();
        if (this.l && typeof this.l.videoWidth === "number" && typeof this.l.videoHeight === "number") {
            var a = this.l;
            var b = new Sk(a.videoWidth,a.videoHeight);
            a = this.g;
            var c = a.getWidth()
              , d = a.getHeight()
              , e = b.width;
            b = b.height;
            e <= 0 || b <= 0 || c <= 0 || d <= 0 || (e /= b,
            a = Yn(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            d > 0 && (d = a.top + d,
            a.top = Math.round(d),
            a.bottom = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            c > 0 && (c = a.left + c,
            a.left = Math.round(c),
            a.right = Math.round(c + d))));
            this.g = a
        }
        this.Le();
        a = this.g;
        c = this.A;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new H(Math.max(a.top, c.top),Math.min(a.right, c.right),Math.min(a.bottom, c.bottom),Math.max(a.left, c.left)) : new H(0,0,0,0);
        c = a.top >= a.bottom || a.left >= a.right ? new H(0,0,0,0) : a;
        a = this.j.o;
        b = e = d = 0;
        (this.g.bottom - this.g.top) * (this.g.right - this.g.left) > 0 && (this.Ye(c) ? c = new H(0,0,0,0) : (d = fu().A,
        b = new H(0,d.height,d.width,0),
        d = fv(c, this.g),
        e = fv(c, fu().g),
        b = fv(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new H(0,0,0,0) : Zn(c, -this.g.left, -this.g.top);
        gu() || (e = d = 0);
        this.I = new wt(a,this.g,c,d,e,this.timestamp,b)
    }
    ;
    m.getName = function() {
        return this.j.getName()
    }
    ;
    var Zv = new H(0,0,0,0)
      , $v = function(a, b, c) {
        qu.call(this, null, a, b, c);
        this.C = a.isActive();
        this.B = 0
    };
    w($v, Yv);
    m = $v.prototype;
    m.yd = function() {
        this.o();
        return !0
    }
    ;
    m.qb = function() {
        Yv.prototype.kb.call(this)
    }
    ;
    m.Me = function() {}
    ;
    m.Ed = function() {}
    ;
    m.kb = function() {
        this.o();
        Yv.prototype.kb.call(this)
    }
    ;
    m.Lb = function(a) {
        a = a.isActive();
        a !== this.C && (a ? this.o() : (fu().g = new H(0,0,0,0),
        this.g = new H(0,0,0,0),
        this.A = new H(0,0,0,0),
        this.timestamp = -1));
        this.C = a
    }
    ;
    function aw(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var bw = {}
      , cw = (bw.firstquartile = 0,
    bw.midpoint = 1,
    bw.thirdquartile = 2,
    bw.complete = 3,
    bw)
      , dw = function(a, b, c, d, e, f) {
        f = f === void 0 ? new Xv : f;
        mv.call(this, b, c, d);
        this.de = e;
        this.Jd = 0;
        this.la = {};
        this.ia = new Mv;
        this.Cf = {};
        this.qa = "";
        this.vb = null;
        this.Va = !1;
        this.g = [];
        this.bb = f.j();
        this.B = f.l();
        this.A = null;
        this.l = -1;
        this.X = this.F = void 0;
        this.J = this.H = 0;
        this.P = -1;
        this.ka = this.na = !1;
        this.O = this.D = this.j = this.Rb = this.Ta = 0;
        new Mu;
        this.U = this.Z = 0;
        this.ba = -1;
        this.pa = 0;
        this.C = Xj;
        this.K = [this.Pc()];
        this.lb = 2;
        this.Gb = {};
        this.Gb.pause = "p";
        this.Gb.resume = "r";
        this.Gb.skip = "s";
        this.Gb.mute = "m";
        this.Gb.unmute = "um";
        this.Gb.exitfullscreen = "ef";
        this.o = null;
        this.oa = this.ya = !1;
        this.Ib = Math.floor(Date.now() / 1E3 - 1704067200);
        this.V = 0
    };
    w(dw, mv);
    dw.prototype.Ra = function() {
        return !0
    }
    ;
    var ew = function(a) {
        a.Xe = !0;
        a.pa != 0 && (a.pa = 3)
    }
      , fw = function(a) {
        return a === void 0 ? a : Number(a) ? Rt(a, 3) : 0
    };
    m = dw.prototype;
    m.Ue = function(a) {
        return pv(this, a, Math.max(1E4, this.l / 3))
    }
    ;
    m.te = function(a, b, c, d, e, f, g) {
        var h = this
          , k = this.C(this) || {};
        il(k, e);
        this.l = k.duration || this.l;
        this.F = k.isVpaid || this.F;
        this.X = k.isYouTube || this.X;
        Os();
        this.oa = !1;
        e = gw(this, b);
        hw(this) === 1 && (f = e);
        mv.prototype.te.call(this, a, b, c, d, k, f, g);
        this.bb && this.bb.l && cc(this.B, function(l) {
            l.j(h)
        })
    }
    ;
    m.ue = function(a, b, c) {
        mv.prototype.ue.call(this, a, b, c);
        iw(this).L(a, b, this.ta, c);
        this.ka = zv(this.ta) && zv(b);
        this.P == -1 && this.na && (this.P = this.sa().l.g);
        this.ia.l = 0;
        a = this.Za();
        b.isVisible() && this.ia.reportEvent("vs");
        a && this.ia.reportEvent("vw");
        Yt(b.volume) && this.ia.reportEvent("am");
        zv(b) ? this.ia.reportEvent("a") : this.ia.reportEvent("mut");
        this.Mb && this.ia.reportEvent("f");
        b.j != -1 && (this.ia.reportEvent("bm"),
        b.j == 1 && (this.ia.reportEvent("b"),
        zv(b) && this.ia.reportEvent("umutb")));
        zv(b) && b.isVisible() && this.ia.reportEvent("avs");
        this.ka && a && this.ia.reportEvent("avw");
        b.aa > 0 && this.ia.reportEvent("pv");
        jw(this, this.sa().l.g, !0) && this.ia.reportEvent("gdr");
        Su(this.sa().j, 1) >= 2E3 && this.ia.reportEvent("pmx");
        this.oa && this.ia.reportEvent("tvoff")
    }
    ;
    m.Pc = function() {
        return new Rv
    }
    ;
    m.sa = function() {
        return this.cd
    }
    ;
    var iw = function(a, b) {
        return a.K[b != null && b < a.K.length ? b : a.K.length - 1]
    };
    dw.prototype.Od = function() {
        return new yv
    }
    ;
    dw.prototype.Cd = function(a, b, c, d) {
        a = mv.prototype.Cd.call(this, a, b, c, d === void 0 ? -1 : d);
        a.fullscreen = this.Mb;
        a.l = this.pa == 2;
        a.volume = c.volume;
        Yt(a.volume) || (this.Ta++,
        b = this.ta,
        Yt(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = c !== void 0 && c >= 0 ? c : -1;
        return a
    }
    ;
    var hw = function(a) {
        var b = !!Ur(N().R, "umt");
        return a.F || !b && !a.X ? 0 : 1
    }
      , gw = function(a, b) {
        a.pa == 2 ? b = 0 : a.Sc == -1 ? b = 0 : (b -= a.Sc,
        b = b > Math.max(1E4, a.l / 3) ? 0 : b);
        var c = a.C(a) || {};
        c = c.currentTime !== void 0 ? c.currentTime : a.H;
        var d = c - a.H
          , e = 0;
        d >= 0 ? (a.J += b,
        a.U += Math.max(b - d, 0),
        e = Math.min(d, a.J)) : a.Z += Math.abs(d);
        d != 0 && (a.J = 0);
        a.ba == -1 && d > 0 && (a.ba = qt >= 0 ? tt() - qt : -1);
        a.H = c;
        return e
    };
    dw.prototype.Gd = function(a) {
        return fu(),
        this.Mb ? 1 : mv.prototype.Gd.call(this, a)
    }
    ;
    dw.prototype.Ba = function() {
        return 1
    }
    ;
    dw.prototype.getDuration = function() {
        return this.l
    }
    ;
    var kw = function(a, b) {
        hc(a.B, function(c) {
            return c.o == b.o
        }) || a.B.push(b)
    }
      , lw = function(a) {
        var b = Qu(a.sa().g, 1);
        return jw(a, b)
    }
      , jw = function(a, b, c) {
        return b >= 15E3 ? !0 : a.na ? (c === void 0 ? 0 : c) ? !0 : a.l > 0 ? b >= a.l / 2 : a.P > 0 ? b >= a.P : !1 : !1
    }
      , mw = function(a) {
        var b = {}
          , c = fu();
        b.insideIframe = c.l;
        b.unmeasurable = a.Xa;
        b.position = a.pb();
        b.exposure = a.ta.aa;
        b.documentSize = c.o;
        b.viewportSize = new Sk(c.g.getWidth(),c.g.getHeight());
        a.o != null && (b.presenceData = a.o);
        b.screenShare = a.ta.va;
        return b
    }
      , nw = function(a) {
        var b = Rt(a.ta.aa, 2)
          , c = a.ia.l
          , d = a.ta
          , e = iw(a)
          , f = fw(e.o)
          , g = fw(e.B)
          , h = fw(d.volume)
          , k = Rt(e.C, 2)
          , l = Rt(e.H, 2)
          , n = Rt(d.aa, 2)
          , p = Rt(e.J, 2)
          , q = Rt(e.O, 2);
        d = Rt(d.va, 2);
        a = Yn(a.pb());
        a.round();
        e = Yu(e, !1);
        return {
            Ph: b,
            jc: c,
            dd: f,
            Yc: g,
            Vb: h,
            ed: k,
            Zc: l,
            aa: n,
            fd: p,
            bd: q,
            va: d,
            position: a,
            gd: e
        }
    }
      , pw = function(a, b) {
        ow(a.g, b, function() {
            return {
                Ph: 0,
                jc: void 0,
                dd: -1,
                Yc: -1,
                Vb: -1,
                ed: -1,
                Zc: -1,
                aa: -1,
                fd: -1,
                bd: -1,
                va: -1,
                position: void 0,
                gd: []
            }
        });
        a.g[b] = nw(a)
    }
      , ow = function(a, b, c) {
        for (var d = a.length; d < b + 1; )
            a.push(c()),
            d++
    }
      , tw = function(a, b, c) {
        var d = a.Cf[b];
        if (d != null)
            return d;
        d = qw(a, b);
        var e = cl(function(f) {
            return f == b
        });
        a = rw(a, d, d, c, cw[dl[e]]);
        b == "fully_viewable_audible_half_duration_impression" && (a.std = "csm");
        return a
    }
      , uw = function(a, b, c) {
        var d = [b];
        if (a != b || c != b)
            d.unshift(a),
            d.push(c);
        return d
    }
      , rw = function(a, b, c, d, e) {
        if (a.Xa)
            return {
                "if": 0,
                vs: 0
            };
        var f = Yn(a.pb());
        f.round();
        var g = fu()
          , h = N()
          , k = a.sa()
          , l = a.fa ? a.fa.getName() : "ns"
          , n = {};
        n["if"] = g.l ? 1 : void 0;
        n.sdk = a.A ? a.A : void 0;
        n.t = a.Fh;
        n.p = [f.top, f.left, f.bottom, f.right];
        n.tos = Ou(k.j, !1);
        n.mtos = Yu(k);
        n.mcvt = k.Z.l;
        n.ps = void 0;
        n.vht = Sv(k, tt(), a.pa == 2);
        n.mut = k.ya.l;
        n.a = fw(a.ta.volume);
        n.mv = fw(k.B);
        n.fs = a.Mb ? 1 : 0;
        n.ft = k.F.g;
        n.at = k.A.g;
        n.as = k.o > 0 ? 1 : 0;
        n.atos = Ou(k.g);
        n.ssb = Ou(k.oa, !1);
        n.amtos = Ru(k.g, !1);
        n.uac = a.Ta;
        n.vpt = k.l.g;
        l == "nio" && (n.nio = 1,
        n.avms = "nio");
        n.gmm = "4";
        n.gdr = jw(a, k.l.g, !0) ? 1 : 0;
        n.efpf = a.lb;
        if (l == "gsv" || l == "nis")
            f = a.fa,
            f.B > 0 && (n.nnut = f.B);
        n.tcm = hw(a);
        n.nmt = a.Z;
        n.bt = a.U;
        n.pst = a.ba;
        n.vpaid = a.F;
        n.dur = a.l;
        n.vmtime = a.H;
        n.is = a.ia.l;
        a.g.length >= 1 && (n.i0 = a.g[0].jc,
        n.a0 = [a.g[0].Vb],
        n.c0 = [a.g[0].aa],
        n.ss0 = [a.g[0].va],
        f = a.g[0].position,
        n.p0 = f ? aw(f) : void 0);
        a.g.length >= 2 && (n.i1 = a.g[1].jc,
        n.a1 = uw(a.g[1].dd, a.g[1].Vb, a.g[1].Yc),
        n.c1 = uw(a.g[1].ed, a.g[1].aa, a.g[1].Zc),
        n.ss1 = uw(a.g[1].fd, a.g[1].va, a.g[1].bd),
        f = a.g[1].position,
        n.p1 = f ? aw(f) : void 0,
        n.mtos1 = a.g[1].gd);
        a.g.length >= 3 && (n.i2 = a.g[2].jc,
        n.a2 = uw(a.g[2].dd, a.g[2].Vb, a.g[2].Yc),
        n.c2 = uw(a.g[2].ed, a.g[2].aa, a.g[2].Zc),
        n.ss2 = uw(a.g[2].fd, a.g[2].va, a.g[2].bd),
        f = a.g[2].position,
        n.p2 = f ? aw(f) : void 0,
        n.mtos2 = a.g[2].gd);
        a.g.length >= 4 && (n.i3 = a.g[3].jc,
        n.a3 = uw(a.g[3].dd, a.g[3].Vb, a.g[3].Yc),
        n.c3 = uw(a.g[3].ed, a.g[3].aa, a.g[3].Zc),
        n.ss3 = uw(a.g[3].fd, a.g[3].va, a.g[3].bd),
        f = a.g[3].position,
        n.p3 = f ? aw(f) : void 0,
        n.mtos3 = a.g[3].gd);
        n.cs = Ov(a.ia);
        b && (n.ic = Nv(a.ia),
        n.dvpt = k.l.j,
        n.dvs = Tu(k.j, .5),
        n.dfvs = Tu(k.j, 1),
        n.davs = Tu(k.g, .5),
        n.dafvs = Tu(k.g, 1),
        c && (k.l.j = 0,
        Uu(k.j),
        Uu(k.g)),
        a.Za() && (n.dtos = k.K,
        n.dav = k.D,
        n.dtoss = a.Jd + 1,
        c && (k.K = 0,
        k.D = 0,
        a.Jd++)),
        n.dat = k.A.j,
        n.dft = k.F.j,
        c && (k.A.j = 0,
        k.F.j = 0));
        n.ps = [g.o.width, g.o.height];
        n.bs = [g.g.getWidth(), g.g.getHeight()];
        n.scs = [g.A.width, g.A.height];
        n.dom = g.domain;
        a.Rb && (n.vds = a.Rb);
        if (a.B.length > 0 || a.bb)
            b = sc(a.B),
            a.bb && b.push(a.bb),
            n.pings = fc(b, function(p) {
                return p.toString()
            });
        b = fc(ec(a.B, function(p) {
            return p.B()
        }), function(p) {
            return p.getId()
        });
        tc(b);
        n.ces = b;
        a.j && (n.vmer = a.j);
        a.D && (n.vmmk = a.D);
        a.O && (n.vmiec = a.O);
        n.avms = a.fa ? a.fa.getName() : "ns";
        a.fa && il(n, a.fa.ob());
        d ? (n.c = Rt(a.ta.aa, 2),
        n.ss = Rt(a.ta.va, 2)) : n.tth = tt() - pt;
        n.mc = Rt(k.H, 2);
        n.nc = Rt(k.C, 2);
        n.mv = fw(k.B);
        n.nv = fw(k.o);
        n.lte = Rt(a.Ud, 2);
        d = iw(a, e);
        Yu(k);
        n.qmtos = Yu(d);
        n.qnc = Rt(d.C, 2);
        n.qmv = fw(d.B);
        n.qnv = fw(d.o);
        n.qas = d.o > 0 ? 1 : 0;
        n.qi = a.qa;
        n.avms || (n.avms = "geo");
        n.psm = k.P.g;
        n.psv = k.P.getValue();
        n.psfv = k.na.getValue();
        n.psa = k.ba.getValue();
        h = Wr(h.R);
        h.length && (n.veid = h);
        a.o && il(n, xv(a.o));
        n.avas = a.Nc();
        n.vs = a.We();
        n.co = vw(a);
        n.tm = k.U;
        n.tu = k.V;
        return n
    }
      , qw = function(a, b) {
        if (nc(At, b))
            return !0;
        var c = a.la[b];
        return c !== void 0 ? (a.la[b] = !0,
        !c) : !1
    };
    dw.prototype.We = function() {
        return this.Xa ? 2 : lw(this) ? 5 : this.Za() ? 4 : 3
    }
    ;
    dw.prototype.Nc = function() {
        return this.ya ? this.sa().A.l >= 2E3 ? 4 : 3 : 2
    }
    ;
    var vw = function(a) {
        var b = a.V.toString(10).padStart(2, "0");
        b = "" + a.Ib + b;
        a.V < 99 && a.V++;
        return b
    };
    var ww = fb()
      , zw = function() {
        this.g = {};
        var a = cm();
        xw(this, a, document);
        var b = yw();
        try {
            if ("1" == b) {
                for (var c = a.parent; c != a.top; c = c.parent)
                    xw(this, c, c.document);
                xw(this, a.top, a.top.document)
            }
        } catch (d) {}
    }
      , yw = function() {
        var a = document.documentElement;
        try {
            if (!sm(cm().top))
                return "2";
            var b = []
              , c = cm(a.ownerDocument);
            for (a = c; a != c.top; a = a.parent)
                if (a.frameElement)
                    b.push(a.frameElement);
                else
                    break;
            return b && b.length != 0 ? "1" : "0"
        } catch (d) {
            return "2"
        }
    }
      , xw = function(a, b, c) {
        dv(c, "mousedown", function() {
            return Aw(a)
        }, 301);
        dv(b, "scroll", function() {
            return Bw(a)
        }, 302);
        dv(c, "touchmove", function() {
            return Cw(a)
        }, 303);
        dv(c, "mousemove", function() {
            return Dw(a)
        }, 304);
        dv(c, "keydown", function() {
            return Ew(a)
        }, 305)
    }
      , Aw = function(a) {
        Uk(a.g, function(b) {
            b.l > 1E5 || ++b.l
        })
    }
      , Bw = function(a) {
        Uk(a.g, function(b) {
            b.g > 1E5 || ++b.g
        })
    }
      , Cw = function(a) {
        Uk(a.g, function(b) {
            b.g > 1E5 || ++b.g
        })
    }
      , Ew = function(a) {
        Uk(a.g, function(b) {
            b.j > 1E5 || ++b.j
        })
    }
      , Dw = function(a) {
        Uk(a.g, function(b) {
            b.o > 1E5 || ++b.o
        })
    };
    var Fw = function() {
        this.g = [];
        this.j = []
    }
      , Gw = function(a, b) {
        return jc(a.g, function(c) {
            return c.qa == b
        })
    }
      , Hw = function(a, b) {
        return b ? jc(a.g, function(c) {
            return c.wa.tb == b
        }) : null
    }
      , Iw = function(a, b) {
        return jc(a.j, function(c) {
            return c.Ba() == 2 && c.qa == b
        })
    }
      , Kw = function() {
        var a = Jw;
        return a.g.length == 0 ? a.j : a.j.length == 0 ? a.g : rc(a.j, a.g)
    };
    Fw.prototype.reset = function() {
        this.g = [];
        this.j = []
    }
    ;
    var Lw = function(a, b) {
        a = b.Ba() == 1 ? a.g : a.j;
        var c = kc(a, function(d) {
            return d == b
        });
        return c != -1 ? (a.splice(c, 1),
        b.fa && b.fa.yc(),
        b.dispose(),
        !0) : !1
    }
      , Mw = function(a) {
        var b = Jw;
        if (Lw(b, a)) {
            switch (a.Ba()) {
            case 0:
                var c = function() {
                    return null
                };
            case 2:
                c = function() {
                    return Iw(b, a.qa)
                }
                ;
                break;
            case 1:
                c = function() {
                    return Gw(b, a.qa)
                }
            }
            for (var d = c(); d; d = c())
                Lw(b, d)
        }
    }
      , Nw = function(a) {
        var b = Jw;
        a = ec(a, function(c) {
            return !Hw(b, c.wa.tb)
        });
        b.g.push.apply(b.g, ka(a))
    }
      , Ow = function(a) {
        var b = [];
        cc(a, function(c) {
            hc(Jw.g, function(d) {
                return d.wa.tb === c.wa.tb && d.qa === c.qa
            }) || (Jw.g.push(c),
            b.push(c))
        })
    }
      , Jw = I(Fw);
    var Pw = function() {
        this.g = this.j = null
    }
      , Qw = function(a, b) {
        if (a.j == null)
            return !1;
        var c = function(d, e) {
            b(d, e)
        };
        a.g = jc(a.j, function(d) {
            return d != null && d.Ae()
        });
        a.g && (a.g.init(c) ? nu(a.g.g) : b(a.g.g.Jb(), a.g));
        return a.g != null
    };
    var Sw = function(a) {
        a = Rw(a);
        ru.call(this, a.length ? a[a.length - 1] : new ju(O,0));
        this.l = a;
        this.j = null
    };
    w(Sw, ru);
    m = Sw.prototype;
    m.getName = function() {
        return (this.j ? this.j : this.g).getName()
    }
    ;
    m.ob = function() {
        return (this.j ? this.j : this.g).ob()
    }
    ;
    m.Wa = function() {
        return (this.j ? this.j : this.g).Wa()
    }
    ;
    m.init = function(a) {
        var b = !1;
        cc(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a,
        mu(this.g, this));
        return b
    }
    ;
    m.dispose = function() {
        cc(this.l, function(a) {
            a.dispose()
        });
        ru.prototype.dispose.call(this)
    }
    ;
    m.Ae = function() {
        return hc(this.l, function(a) {
            return a.F()
        })
    }
    ;
    m.Sb = function() {
        return hc(this.l, function(a) {
            return a.F()
        })
    }
    ;
    m.zc = function(a, b, c) {
        A(this.g != null);
        return new Yv(a,this.g,b,c)
    }
    ;
    m.qb = function(a) {
        this.j = a.j
    }
    ;
    var Rw = function(a) {
        if (!a.length)
            return [];
        a = ec(a, function(c) {
            return c != null && c.F()
        });
        for (var b = 1; b < a.length; b++)
            mu(a[b - 1], a[b]);
        return a
    };
    var Tw = {
        threshold: [0, .3, .5, .75, 1]
    }
      , Uw = function(a, b, c, d) {
        qu.call(this, a, b, c, d);
        this.D = this.L = this.B = this.C = this.o = null
    };
    w(Uw, Yv);
    Uw.prototype.yd = function() {
        var a = this;
        this.D || (this.D = tt());
        if (jt(298, function() {
            return Vw(a)
        }))
            return !0;
        lu(this.j, "msf");
        return !1
    }
    ;
    Uw.prototype.yc = function() {
        if (this.o && this.l)
            try {
                this.o.unobserve(this.l),
                this.C ? (this.C.unobserve(this.l),
                this.C = null) : this.B && (this.B.disconnect(),
                this.B = null)
            } catch (a) {}
    }
    ;
    var Ww = function(a) {
        return a.o && a.o.takeRecords ? a.o.takeRecords() : []
    }
      , Vw = function(a) {
        if (!a.l)
            return !1;
        var b = a.l
          , c = a.j.g.l
          , d = N().g.g;
        a.o = new c.IntersectionObserver(Us(d, function(e) {
            return Xw(a, e)
        }),Tw);
        d = Us(d, function() {
            a.o.unobserve(b);
            a.o.observe(b);
            Xw(a, Ww(a))
        });
        c.ResizeObserver ? (a.C = new c.ResizeObserver(d),
        a.C.observe(b)) : c.MutationObserver && (a.B = new y.MutationObserver(d),
        a.B.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.o.observe(b);
        Xw(a, Ww(a));
        return !0
    }
      , Xw = function(a, b) {
        try {
            if (b.length) {
                a.L || (a.L = tt());
                var c = Yw(b)
                  , d = Mt(a.l, a.j.g.l)
                  , e = d.x
                  , f = d.y;
                a.g = new H(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = Wt(c.intersectionRect);
                a.A = Zn(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.yc(),
            lt(299, h)
        }
    }
      , Yw = function(a) {
        return gc(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    };
    m = Uw.prototype;
    m.kb = function() {
        var a = Ww(this);
        a.length > 0 && Xw(this, a);
        Yv.prototype.kb.call(this)
    }
    ;
    m.Ed = function() {}
    ;
    m.Ye = function() {
        return !1
    }
    ;
    m.Le = function() {}
    ;
    m.ob = function() {
        var a = {};
        return Object.assign(this.j.ob(), (a.niot_obs = this.D,
        a.niot_cbk = this.L,
        a))
    }
    ;
    m.getName = function() {
        return "nio"
    }
    ;
    var Zw = function(a) {
        a = a === void 0 ? O : a;
        ru.call(this, new ju(a,2))
    };
    w(Zw, ru);
    Zw.prototype.getName = function() {
        return "nio"
    }
    ;
    Zw.prototype.Sb = function() {
        return !fu().j && this.g.g.l.IntersectionObserver != null
    }
    ;
    Zw.prototype.zc = function(a, b, c) {
        return new Uw(a,this.g,b,c)
    }
    ;
    var ax = function() {
        var a = $w();
        ju.call(this, O.top, a, "geo")
    };
    w(ax, ju);
    ax.prototype.Z = function() {
        return fu().g
    }
    ;
    ax.prototype.F = function() {
        var a = $w();
        this.L !== a && (this.g != this && a > this.g.L && (this.g = this,
        ku(this)),
        this.L = a);
        return a == 2
    }
    ;
    var $w = function() {
        N();
        var a = fu();
        return a.l || a.j ? 0 : 2
    };
    var bx = function() {};
    var cx = function() {
        this.done = !1;
        this.g = {
            lg: 0,
            He: 0,
            ak: 0,
            Qe: 0,
            Sd: -1,
            xg: 0,
            wg: 0,
            yg: 0,
            Bh: 0
        };
        this.A = null;
        this.B = !1;
        this.l = null;
        this.C = 0;
        this.j = new hu(this)
    }
      , fx = function() {
        var a = dx;
        a.B || (a.B = !0,
        ex(a, function() {
            return a.o.apply(a, ka(Ka.apply(0, arguments)))
        }),
        a.o())
    };
    cx.prototype.sample = function() {
        gx(this, Kw(), !1)
    }
    ;
    var hx = function() {
        I(bx);
        var a = I(Pw);
        a.g != null && a.g.g ? nu(a.g.g) : bu(fu())
    }
      , gx = function(a, b, c) {
        if (!a.done && (a.j.cancel(),
        b.length != 0)) {
            a.l = null;
            try {
                hx();
                var d = tt();
                N().A = d;
                if (I(Pw).g != null)
                    for (var e = 0; e < b.length; e++)
                        qv(b[e], d, c);
                for (d = 0; d < b.length; d++)
                    rv(b[d]);
                ++a.g.Qe
            } finally {
                c ? cc(b, function(f) {
                    f.ta.aa = 0
                }) : iu(a.j)
            }
        }
    }
      , ex = function(a, b) {
        if (!a.A) {
            b = kt(142, b);
            Os();
            var c = oo(Zr);
            c && dk(Zr, c, b, {
                capture: !1
            }) && (a.A = b)
        }
    };
    cx.prototype.o = function() {
        var a = gu()
          , b = tt();
        a ? (rt || (nt = b,
        cc(Jw.g, function(c) {
            var d = c.sa();
            d.X = Sv(d, b, c.pa != 1)
        })),
        rt = !0) : (this.C = ix(this, b),
        rt = !1,
        pt = b,
        cc(Jw.g, function(c) {
            c.Yb && (c.sa().I = b)
        }));
        gx(this, Kw(), !a)
    }
    ;
    var jx = function() {
        var a = I(Pw);
        if (a.g != null) {
            var b = a.g;
            cc(Kw(), function(c) {
                return ov(c, b)
            })
        }
    }
      , ix = function(a, b) {
        a = a.C;
        rt && (a += b - nt);
        return a
    }
      , kx = function(a) {
        a = a === void 0 ? function() {
            return {}
        }
        : a;
        gt.ne("av-js");
        ct.g = .01;
        it([function(b) {
            var c = N()
              , d = {};
            d = (d.bin = c.j,
            d.type = "error",
            d);
            c = Vr(c.R);
            if (!dx.l) {
                var e = dx
                  , f = O.document
                  , g = ot >= 0 ? tt() - ot : -1
                  , h = tt();
                e.g.Sd == -1 && (g = h);
                var k = fu()
                  , l = N()
                  , n = Vr(l.R)
                  , p = Kw();
                try {
                    if (p.length > 0) {
                        var q = k.g;
                        q && (n.bs = [q.getWidth(), q.getHeight()]);
                        var t = k.o;
                        t && (n.ps = [t.width, t.height]);
                        O.screen && (n.scs = [O.screen.width, O.screen.height])
                    } else
                        n.url = encodeURIComponent(O.location.href.substring(0, 512)),
                        f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                    n.tt = g;
                    n.pt = ot;
                    n.bin = l.j;
                    O.google_osd_load_pub_page_exp !== void 0 && (n.olpp = O.google_osd_load_pub_page_exp);
                    n.deb = [1, e.g.lg, e.g.He, e.g.Qe, e.g.Sd, 0, e.j.j, e.g.xg, e.g.wg, e.g.yg, e.g.Bh, -1].join(";");
                    n.tvt = ix(e, h);
                    k.j && (n.inapp = 1);
                    if (O !== null && O != O.top) {
                        p.length > 0 && (n.iframe_loc = encodeURIComponent(O.location.href.substring(0, 512)));
                        var v = k.I;
                        n.is = [v.getWidth(), v.getHeight()]
                    }
                } catch (D) {
                    n.error = 1
                }
                dx.l = n
            }
            t = dx.l;
            q = {};
            for (var x in t)
                q[x] = t[x];
            x = N().g;
            if (Ur(x.l, "prf") == 1) {
                t = new Ss;
                v = x.g;
                e = 0;
                v.g > -1 && (e = v.l.g.now() - v.g);
                v = v.o + e;
                if (v != null && typeof v !== "number")
                    throw Error("Value of float/double field must be a number, found " + typeof v + ": " + v);
                t = Eh(t, 1, v, 0);
                v = x.g;
                t = mi(t, 5, v.g > -1 ? v.j + 1 : v.j);
                t = ni(t, 2, x.j.g.l());
                t = ni(t, 3, x.j.g.j());
                x = ni(t, 4, x.j.g.g());
                t = {};
                x = (t.pf = $c(x.g()),
                t)
            } else
                x = {};
            il(q, x);
            il(b, d, c, q, a())
        }
        ])
    }
      , dx = I(cx);
    var lx = null
      , mx = ""
      , nx = !1
      , ox = function() {
        var a = lx || O;
        if (!a)
            return "";
        var b = [];
        if (!a.location || !a.location.href)
            return "";
        b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
        a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
        return b.join("&")
    };
    function px() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/), b;
        if (((b = a) == null ? void 0 : b.length) == 2)
            return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return ((c = a) == null ? void 0 : c.length) == 3 ? "20" + a[1] + a[2] : null
    }
    var qx = function() {
        return "ima_html5_sdk".includes("ima_html5_sdk") ? {
            Na: "ima",
            Oa: null
        } : "ima_html5_sdk".includes("ima_native_sdk") ? {
            Na: "nima",
            Oa: null
        } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
            Na: "an",
            Oa: null
        } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
            Na: "cast",
            Oa: px()
        } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
            Na: "yw",
            Oa: px()
        } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
            Na: "out",
            Oa: px()
        } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
            Na: "r",
            Oa: px()
        } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
            Na: "n",
            Oa: px()
        } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
            Na: "int",
            Oa: px()
        } : {
            Na: "j",
            Oa: null
        }
    }
      , rx = qx().Na
      , sx = qx().Oa;
    var ux = function(a, b) {
        var c = {
            sv: "964"
        };
        sx !== null && (c.v = sx);
        c.cb = rx;
        c.nas = Jw.g.length;
        c.msg = a;
        b !== void 0 && (a = tx(b)) && (c.e = Bt[a]);
        return c
    }
      , vx = function(a) {
        return a.lastIndexOf("custom_metric_viewable", 0) == 0
    }
      , tx = function(a) {
        var b = vx(a) ? "custom_metric_viewable" : a.toLowerCase();
        return cl(function(c) {
            return c == b
        })
    };
    var wx = {
        li: "visible",
        Th: "audible",
        rj: "time",
        tj: "timetype"
    }
      , xx = {
        visible: function(a) {
            return /^(100|[0-9]{1,2})$/.test(a)
        },
        audible: function(a) {
            return a == "0" || a == "1"
        },
        timetype: function(a) {
            return a == "mtos" || a == "tos"
        },
        time: function(a) {
            return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
        }
    }
      , yx = function() {
        this.g = void 0;
        this.j = !1;
        this.l = 0;
        this.o = -1;
        this.A = "tos"
    }
      , zx = function(a) {
        try {
            var b = a.split(",");
            return b.length > Zk(wx).length ? null : gc(b, function(c, d) {
                d = d.toLowerCase().split("=");
                if (d.length != 2 || xx[d[0]] === void 0 || !xx[d[0]](d[1]))
                    throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c
            }, {})
        } catch (c) {
            return null
        }
    }
      , Ax = function(a, b) {
        if (a.g == void 0)
            return 0;
        switch (a.A) {
        case "mtos":
            return a.j ? Su(b.g, a.g) : Su(b.j, a.g);
        case "tos":
            return a.j ? Qu(b.g, a.g) : Qu(b.j, a.g)
        }
        return 0
    };
    var Bx = function(a, b, c, d) {
        Uv.call(this, b, d);
        this.C = a;
        this.I = c
    };
    w(Bx, Uv);
    Bx.prototype.getId = function() {
        return this.C
    }
    ;
    Bx.prototype.B = function() {
        return !0
    }
    ;
    Bx.prototype.g = function(a) {
        var b = a.sa()
          , c = a.getDuration();
        return hc(this.I, function(d) {
            if (d.g != void 0)
                var e = Ax(d, b);
            else
                b: {
                    switch (d.A) {
                    case "mtos":
                        e = d.j ? b.A.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.A.g : b.l.g;
                        break b
                    }
                    e = 0
                }
            e == 0 ? d = !1 : (d = d.l != -1 ? d.l : c !== void 0 && c > 0 ? d.o * c : -1,
            d = d != -1 && e >= d);
            return d
        })
    }
    ;
    var Cx = function() {};
    w(Cx, Kv);
    Cx.prototype.g = function(a) {
        var b = new Jv;
        b.g = Lv(a, Gv);
        b.j = Lv(a, Iv);
        return b
    }
    ;
    var Dx = function(a) {
        Uv.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    w(Dx, Uv);
    Dx.prototype.g = function(a) {
        return lw(a)
    }
    ;
    var Ex = function(a) {
        this.g = a
    };
    w(Ex, Wv);
    var Fx = function(a, b) {
        Uv.call(this, a, b)
    };
    w(Fx, Uv);
    Fx.prototype.g = function(a) {
        return a.sa().Za()
    }
    ;
    var Gx = function(a) {
        Vv.call(this, "measurable_impression", a)
    };
    w(Gx, Vv);
    Gx.prototype.g = function(a) {
        var b = nc(this.C, Ur(N().R, "ovms"));
        return !a.Xa && (a.pa != 0 || b)
    }
    ;
    var Hx = function() {
        Ex.apply(this, arguments)
    };
    w(Hx, Ex);
    Hx.prototype.j = function() {
        return new Gx(this.g)
    }
    ;
    Hx.prototype.l = function() {
        return [new Fx("viewable_impression",this.g), new Dx(this.g)]
    }
    ;
    var Ix = function(a, b, c) {
        $v.call(this, a, b, c)
    };
    w(Ix, $v);
    Ix.prototype.o = function() {
        var a = Pa("ima.admob.getViewability")
          , b = Ur(this.R, "queryid");
        typeof a === "function" && b && a(b)
    }
    ;
    Ix.prototype.getName = function() {
        return "gsv"
    }
    ;
    var Jx = function(a) {
        a = a === void 0 ? O : a;
        ru.call(this, new ju(a,2))
    };
    w(Jx, ru);
    Jx.prototype.getName = function() {
        return "gsv"
    }
    ;
    Jx.prototype.Sb = function() {
        var a = fu();
        N();
        return a.j && !1
    }
    ;
    Jx.prototype.zc = function(a, b, c) {
        return new Ix(this.g,b,c)
    }
    ;
    var Kx = function(a, b, c) {
        $v.call(this, a, b, c)
    };
    w(Kx, $v);
    Kx.prototype.o = function() {
        var a = this
          , b = Pa("ima.bridge.getNativeViewability")
          , c = Ur(this.R, "queryid");
        typeof b === "function" && c && b(c, function(d) {
            el(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {}
              , f = d.opt_nativeViewHidden;
            a.g = Xt(d.opt_nativeViewBounds || {});
            var g = a.j.o;
            g.g = f ? Yn(Zv) : Xt(e);
            a.timestamp = d.opt_nativeTime || -1;
            fu().g = g.g;
            d = d.opt_nativeVolume;
            d !== void 0 && (g.volume = d)
        })
    }
    ;
    Kx.prototype.getName = function() {
        return "nis"
    }
    ;
    var Lx = function(a) {
        a = a === void 0 ? O : a;
        ru.call(this, new ju(a,2))
    };
    w(Lx, ru);
    Lx.prototype.getName = function() {
        return "nis"
    }
    ;
    Lx.prototype.Sb = function() {
        var a = fu();
        N();
        return a.j && !1
    }
    ;
    Lx.prototype.zc = function(a, b, c) {
        return new Kx(this.g,b,c)
    }
    ;
    var Mx = function() {
        ju.call(this, O, 2, "mraid");
        this.ba = 0;
        this.J = this.K = !1;
        this.I = null;
        this.j = Ct(this.l);
        this.o.g = new H(0,0,0,0);
        this.na = !1
    };
    w(Mx, ju);
    Mx.prototype.F = function() {
        return this.j.Ha != null
    }
    ;
    Mx.prototype.X = function() {
        var a = {};
        this.ba && (a.mraid = this.ba);
        this.K && (a.mlc = 1);
        a.mtop = this.j.Ah;
        this.I && (a.mse = this.I);
        this.na && (a.msc = 1);
        a.mcp = this.j.Kc;
        return a
    }
    ;
    Mx.prototype.B = function(a) {
        var b = Ka.apply(1, arguments);
        try {
            return this.j.Ha[a].apply(this.j.Ha, b)
        } catch (c) {
            lt(538, c, .01, function(d) {
                d.method = a
            })
        }
    }
    ;
    var Nx = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    Mx.prototype.initialize = function() {
        var a = this;
        if (this.xa)
            return !this.fc();
        this.xa = !0;
        if (this.j.Kc === 2)
            return this.I = "ng",
            lu(this, "w"),
            !1;
        if (this.j.Kc === 1)
            return this.I = "mm",
            lu(this, "w"),
            !1;
        fu().L = !0;
        this.l.document.readyState && this.l.document.readyState == "complete" ? Ox(this) : dv(this.l, "load", function() {
            Os().setTimeout(kt(292, function() {
                return Ox(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    var Ox = function(a) {
        N().o = !!a.B("isViewable");
        Nx(a, "viewableChange", Px);
        a.B("getState") === "loading" ? Nx(a, "ready", Qx) : Rx(a)
    }
      , Rx = function(a) {
        typeof a.j.Ha.AFMA_LIDAR === "string" ? (a.K = !0,
        Sx(a)) : (a.j.Kc = 3,
        a.I = "nc",
        lu(a, "w"))
    }
      , Sx = function(a) {
        a.J = !1;
        var b = Ur(N().R, "rmmt") == 1
          , c = !!a.B("isViewable");
        (b ? !c : 1) && Os().setTimeout(kt(524, function() {
            a.J || (Tx(a),
            lt(540, Error()),
            a.I = "mt",
            lu(a, "w"))
        }), 500);
        Ux(a);
        Nx(a, a.j.Ha.AFMA_LIDAR, Vx)
    }
      , Ux = function(a) {
        var b = Ur(N().R, "sneio") == 1
          , c = a.j.Ha.AFMA_LIDAR_EXP_1 !== void 0
          , d = a.j.Ha.AFMA_LIDAR_EXP_2 !== void 0;
        (b = b && d) && (a.j.Ha.AFMA_LIDAR_EXP_2 = !0);
        c && (a.j.Ha.AFMA_LIDAR_EXP_1 = !b)
    }
      , Tx = function(a) {
        a.B("removeEventListener", a.j.Ha.AFMA_LIDAR, Vx);
        a.K = !1
    };
    Mx.prototype.P = function() {
        var a = fu()
          , b = Wx(this, "getMaxSize");
        a.g = new H(0,b.width,b.height,0)
    }
    ;
    Mx.prototype.U = function() {
        fu().A = Wx(this, "getScreenSize")
    }
    ;
    var Wx = function(a, b) {
        if (a.B("getState") === "loading")
            return new Sk(-1,-1);
        b = a.B(b);
        if (!b)
            return new Sk(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new Sk(-1,-1) : new Sk(a,b)
    };
    Mx.prototype.dispose = function() {
        Tx(this);
        ju.prototype.dispose.call(this)
    }
    ;
    var Qx = function() {
        try {
            var a = I(Mx);
            a.B("removeEventListener", "ready", Qx);
            Rx(a)
        } catch (b) {
            lt(541, b)
        }
    }
      , Vx = function(a, b) {
        try {
            var c = I(Mx);
            c.J = !0;
            var d = a ? new H(a.y,a.x + a.width,a.y + a.height,a.x) : new H(0,0,0,0);
            var e = tt()
              , f = gu();
            var g = new vt(e,f,c);
            g.g = d;
            g.volume = b;
            c.qb(g)
        } catch (h) {
            lt(542, h)
        }
    }
      , Px = function(a) {
        var b = N()
          , c = I(Mx);
        a && !b.o && (b.o = !0,
        c.na = !0,
        c.I && lu(c, "w", !0))
    };
    var Xs = new function(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? !1 : b;
        this.valueType = "boolean"
    }
    ("45378663");
    var Yx = function() {
        this.l = this.xa = !1;
        this.g = this.j = null;
        var a = {};
        this.K = (a.start = this.Tg,
        a.firstquartile = this.Og,
        a.midpoint = this.Qg,
        a.thirdquartile = this.Ug,
        a.complete = this.Lg,
        a.error = this.Mg,
        a.pause = this.ce,
        a.resume = this.sf,
        a.skip = this.Sg,
        a.viewable_impression = this.Qa,
        a.mute = this.Qb,
        a.unmute = this.Qb,
        a.fullscreen = this.Pg,
        a.exitfullscreen = this.Ng,
        a.fully_viewable_audible_half_duration_impression = this.Qa,
        a.measurable_impression = this.Qa,
        a.abandon = this.ce,
        a.engagedview = this.Qa,
        a.impression = this.Qa,
        a.creativeview = this.Qa,
        a.progress = this.Qb,
        a.custom_metric_viewable = this.Qa,
        a.bufferstart = this.ce,
        a.bufferfinish = this.sf,
        a.audio_measurable = this.Qa,
        a.audio_audible = this.Qa,
        a);
        a = {};
        this.P = (a.overlay_resize = this.Rg,
        a.abandon = this.Rd,
        a.close = this.Rd,
        a.collapse = this.Rd,
        a.overlay_unmeasurable_impression = function(b) {
            return tw(b, "overlay_unmeasurable_impression", gu())
        }
        ,
        a.overlay_viewable_immediate_impression = function(b) {
            return tw(b, "overlay_viewable_immediate_impression", gu())
        }
        ,
        a.overlay_unviewable_impression = function(b) {
            return tw(b, "overlay_unviewable_impression", gu())
        }
        ,
        a.overlay_viewable_end_of_session_impression = function(b) {
            return tw(b, "overlay_viewable_end_of_session_impression", gu())
        }
        ,
        a);
        N().j = 3;
        Xx(this)
    };
    Yx.prototype.A = function(a) {
        nv(a, !1);
        Mw(a)
    }
    ;
    Yx.prototype.I = function() {}
    ;
    var Zx = function(a, b, c, d) {
        a = a.B(null, d, !0, b);
        a.A = c;
        Nw([a]);
        return a
    };
    Yx.prototype.B = function(a, b, c, d) {
        var e = this;
        a = new dw(O,a,c ? b : -1,7,this.Hd(),this.Pe());
        a.qa = d;
        Sr(a.R);
        Tr(a.R, "queryid", a.qa);
        a.ee("");
        tv(a, function() {
            return e.J.apply(e, ka(Ka.apply(0, arguments)))
        }, function() {
            return e.O.apply(e, ka(Ka.apply(0, arguments)))
        });
        (d = I(Pw).g) && ov(a, d);
        a.wa.tb && I(bx);
        return a
    }
    ;
    var $x = function(a, b, c) {
        Ar(b);
        var d = a.g;
        cc(b, function(e) {
            var f = fc(e.l, function(g) {
                var h = zx(g);
                if (h == null)
                    g = null;
                else if (g = new yx,
                h.visible != null && (g.g = h.visible / 100),
                h.audible != null && (g.j = h.audible == 1),
                h.time != null) {
                    var k = h.timetype == "mtos" ? "mtos" : "tos"
                      , l = Gb(h.time, "%") ? "%" : "ms";
                    h = parseInt(h.time, 10);
                    l == "%" && (h /= 100);
                    l == "ms" ? (g.l = h,
                    g.o = -1) : (g.l = -1,
                    g.o = h);
                    g.A = k === void 0 ? "tos" : k
                }
                return g
            });
            hc(f, function(g) {
                return g == null
            }) || kw(c, new Bx(e.id,e.g,f,d))
        })
    }
      , ay = function() {
        var a = []
          , b = N();
        a.push(I(ax));
        Ur(b.R, "mvp_lv") && a.push(I(Mx));
        b = [new Jx, new Lx];
        b.push(new Sw(a));
        b.push(new Zw(O));
        return b
    }
      , cy = function(a) {
        if (!a.xa) {
            a.xa = !0;
            try {
                var b = tt()
                  , c = N()
                  , d = fu();
                ot = b;
                c.l = 79463069;
                a.j !== "o" && (lx = Im(O));
                if (Ps()) {
                    dx.g.He = 0;
                    dx.g.Sd = tt() - b;
                    var e = ay()
                      , f = I(Pw);
                    f.j = e;
                    Qw(f, function() {
                        by()
                    }) ? dx.done || (jx(),
                    mu(f.g.g, a),
                    fx()) : d.l ? by() : fx()
                } else
                    nx = !0
            } catch (g) {
                throw Jw.reset(),
                g;
            }
        }
    }
      , dy = function(a) {
        dx.j.cancel();
        mx = a;
        dx.done = !0
    }
      , ey = function(a) {
        if (a.j)
            return a.j;
        var b = I(Pw).g;
        if (b)
            switch (b.getName()) {
            case "nis":
                a.j = "n";
                break;
            case "gsv":
                a.j = "m"
            }
        a.j || (a.j = "h");
        return a.j
    }
      , fy = function(a, b, c) {
        if (a.g == null)
            return b.Rb |= 4,
            !1;
        a = a.g.report(c, b);
        b.Rb |= a;
        return a == 0
    };
    Yx.prototype.Lb = function(a) {
        switch (a.Wa()) {
        case 0:
            if (a = I(Pw).g)
                a = a.g,
                oc(a.A, this),
                a.D && this.Ra() && ou(a);
            by();
            break;
        case 2:
            fx()
        }
    }
    ;
    Yx.prototype.qb = function() {}
    ;
    Yx.prototype.Ra = function() {
        return !1
    }
    ;
    var by = function() {
        var a = [new Zw(O)]
          , b = I(Pw);
        b.j = a;
        Qw(b, function() {
            dy("i")
        }) ? dx.done || (jx(),
        fx()) : dy("i")
    };
    Yx.prototype.O = function(a, b) {
        a.Xa = !0;
        switch (a.Ba()) {
        case 1:
            gy(a, b);
            break;
        case 2:
            this.he(a)
        }
        this.me(a)
    }
    ;
    var gy = function(a, b) {
        if (!a.Va) {
            var c = tw(a, "start", gu());
            c = a.de.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "964";
            sx !== null && (d.v = sx);
            pm(c, function(e, f) {
                return d[e] = e == "mtos" || e == "tos" ? f : encodeURIComponent(f)
            });
            b = ox();
            pm(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + Au(yu(new wu, d));
            Du(b);
            a.Va = !0
        }
    };
    m = Yx.prototype;
    m.Tg = function(a) {
        var b = a.C(a);
        b && (b = b.volume,
        a.ya = Yt(b) && b > 0);
        pw(a, 0);
        return tw(a, "start", gu())
    }
    ;
    m.Qb = function(a, b, c) {
        gx(dx, [a], !gu());
        return this.Qa(a, b, c)
    }
    ;
    m.Qa = function(a, b, c) {
        return tw(a, c, gu())
    }
    ;
    m.Og = function(a) {
        return hy(a, "firstquartile", 1)
    }
    ;
    m.Qg = function(a) {
        a.na = !0;
        return hy(a, "midpoint", 2)
    }
    ;
    m.Ug = function(a) {
        return hy(a, "thirdquartile", 3)
    }
    ;
    m.Lg = function(a) {
        var b = hy(a, "complete", 4);
        ew(a);
        return b
    }
    ;
    m.Mg = function(a) {
        a.pa = 3;
        return tw(a, "error", gu())
    }
    ;
    var hy = function(a, b, c) {
        gx(dx, [a], !gu());
        pw(a, c);
        c != 4 && ow(a.K, c, a.Pc);
        return tw(a, b, gu())
    };
    m = Yx.prototype;
    m.sf = function(a, b, c) {
        b = gu();
        a.pa != 2 || b || (a.sa().I = tt());
        gx(dx, [a], !b);
        a.pa == 2 && (a.pa = 1);
        return tw(a, c, b)
    }
    ;
    m.Sg = function(a, b) {
        b = this.Qb(a, b || {}, "skip");
        ew(a);
        return b
    }
    ;
    m.Pg = function(a, b) {
        nv(a, !0);
        return this.Qb(a, b || {}, "fullscreen")
    }
    ;
    m.Ng = function(a, b) {
        nv(a, !1);
        return this.Qb(a, b || {}, "exitfullscreen")
    }
    ;
    m.ce = function(a, b, c) {
        b = a.sa();
        b.X = Sv(b, tt(), a.pa != 1);
        gx(dx, [a], !gu());
        a.pa == 1 && (a.pa = 2);
        return tw(a, c, gu())
    }
    ;
    m.Rg = function(a) {
        gx(dx, [a], !gu());
        return a.j()
    }
    ;
    m.Rd = function(a) {
        gx(dx, [a], !gu());
        this.nf(a);
        ew(a);
        return a.j()
    }
    ;
    var Xx = function(a) {
        kx(function() {
            var b = iy();
            a.j != null && (b.sdk = a.j);
            var c = I(Pw);
            c.g != null && (b.avms = c.g.getName());
            return b
        })
    }
      , jy = function(a, b, c, d) {
        var e = Hw(Jw, c);
        e !== null && e.qa !== b && (a.A(e),
        e = null);
        e || (b = a.B(c, tt(), !1, b),
        Jw.j.length == 0 && (N().l = 79463069),
        Ow([b]),
        e = b,
        e.A = ey(a),
        d && (e.vb = d));
        return e
    };
    Yx.prototype.J = function() {}
    ;
    var ly = function(a, b) {
        b.D = 0;
        for (var c in xt)
            a[c] == null && (b.D |= xt[c]);
        ky(a, "currentTime");
        ky(a, "duration")
    };
    m = Yx.prototype;
    m.he = function() {}
    ;
    m.nf = function() {}
    ;
    m.Be = function() {}
    ;
    m.me = function() {}
    ;
    m.Id = function() {}
    ;
    m.Pe = function() {
        this.g || (this.g = this.Id());
        return this.g == null || this.l ? new Xv : new Hx(this.g)
    }
    ;
    m.Hd = function() {
        return new Cx
    }
    ;
    var ky = function(a, b) {
        var c = a[b];
        c !== void 0 && c > 0 && (a[b] = Math.floor(c * 1E3))
    }
      , iy = function() {
        var a = fu()
          , b = {}
          , c = {}
          , d = {};
        return Object.assign({}, (b.sv = "964",
        b), sx !== null && (c.v = sx,
        c), (d["if"] = a.l ? "1" : "0",
        d.nas = String(Jw.g.length),
        d))
    };
    var my = function(a) {
        Uv.call(this, "audio_audible", a)
    };
    w(my, Uv);
    my.prototype.g = function(a) {
        return a.Nc() == 4
    }
    ;
    var ny = function(a) {
        Vv.call(this, "audio_measurable", a)
    };
    w(ny, Vv);
    ny.prototype.g = function(a) {
        a = a.Nc();
        return a == 3 || a == 4
    }
    ;
    var oy = function() {
        Ex.apply(this, arguments)
    };
    w(oy, Ex);
    oy.prototype.j = function() {
        return new ny(this.g)
    }
    ;
    oy.prototype.l = function() {
        return [new my(this.g)]
    }
    ;
    var py = function() {};
    w(py, Kv);
    py.prototype.g = function(a) {
        a && (a.e === 28 && (a = Object.assign({}, a, {
            avas: 3
        })),
        a.vs === 4 || a.vs === 5) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new Jv;
        b.g = Lv(a, Hv);
        b.j = Lv(a, Iv);
        return b
    }
    ;
    var qy = function(a) {
        this.j = a
    };
    qy.prototype.report = function(a, b) {
        var c = this.g(b);
        if (typeof c === "function") {
            var d = {};
            var e = {};
            d = Object.assign({}, sx !== null && (d.v = sx,
            d), (e.sv = "964",
            e.cb = rx,
            e.e = ry(a),
            e));
            e = tw(b, a, gu());
            il(d, e);
            b.Cf[a] = e;
            d = b.Ba() == 2 ? Cu(d).join("&") : b.de.g(d).g;
            try {
                return c(b.qa, d, a),
                0
            } catch (f) {
                return 2
            }
        } else
            return 1
    }
    ;
    var ry = function(a) {
        var b = vx(a) ? "custom_metric_viewable" : a;
        a = cl(function(c) {
            return c == b
        });
        return Bt[a]
    };
    qy.prototype.g = function() {
        return Pa(this.j)
    }
    ;
    var sy = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(sy, qy);
    sy.prototype.g = function(a) {
        if (!a.vb)
            return qy.prototype.g.call(this, a);
        if (this.l[a.vb])
            return function() {}
            ;
        lt(393, Error());
        return null
    }
    ;
    var ty = function() {
        Yx.call(this);
        this.D = void 0;
        this.F = null;
        this.L = !1;
        this.o = {};
        this.H = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    w(ty, Yx);
    ty.prototype.I = function(a, b) {
        var c = this
          , d = I(Pw);
        if (d.g != null)
            switch (d.g.getName()) {
            case "nis":
                var e = uy(this, a, b);
                break;
            case "gsv":
                e = vy(this, a, b);
                break;
            case "exc":
                e = wy(this, a)
            }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = jy(this, a, b.opt_adElement, b.opt_osdId)));
        e && e.Ba() == 1 && (e.C == Xj && (e.C = function(f) {
            return c.Be(f)
        }
        ),
        yy(this, e, b));
        return e
    }
    ;
    var yy = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        a.g != null && Array.isArray(c) && $x(a, c, b)
    };
    ty.prototype.Be = function(a) {
        a.j = 0;
        a.O = 0;
        if (a.A == "h" || a.A == "n") {
            var b;
            N();
            if (a.vb && zy(this)) {
                var c = this.o[a.vb];
                c ? b = function(e) {
                    return Ay(c, e)
                }
                : c !== null && lt(379, Error())
            } else
                b = Pa("ima.common.getVideoMetadata");
            if (typeof b === "function")
                try {
                    var d = b(a.qa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2
        } else if (a.A == "b")
            if (b = Pa("ytads.bulleit.getVideoMetadata"),
            typeof b === "function")
                try {
                    d = b(a.qa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else if (a.A == "ml")
            if (b = Pa("ima.common.getVideoMetadata"),
            typeof b === "function")
                try {
                    d = b(a.qa)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else
            a.j |= 1;
        a.j || (d === void 0 ? a.j |= 8 : d === null ? a.j |= 16 : el(d) ? a.j |= 32 : d.errorCode != null && (a.O = d.errorCode,
        a.j |= 64));
        d == null && (d = {});
        ly(d, a);
        Yt(d.volume) && Yt(this.D) && (d.volume *= this.D);
        return d
    }
    ;
    var vy = function(a, b, c) {
        var d = Gw(Jw, b);
        d || (d = c.opt_nativeTime || -1,
        d = Zx(a, b, ey(a), d),
        c.opt_osdId && (d.vb = c.opt_osdId));
        return d
    }
      , uy = function(a, b, c) {
        var d = Gw(Jw, b);
        d || (d = Zx(a, b, "n", c.opt_nativeTime || -1));
        return d
    }
      , wy = function(a, b) {
        var c = Gw(Jw, b);
        c || (c = Zx(a, b, "h", -1));
        return c
    };
    ty.prototype.Id = function() {
        if (zy(this))
            return new sy("ima.common.triggerExternalActivityEvent",this.o);
        var a = By(this);
        return a != null ? new qy(a) : null
    }
    ;
    var By = function(a) {
        N();
        switch (ey(a)) {
        case "b":
            return "ytads.bulleit.triggerExternalActivityEvent";
        case "n":
            return "ima.bridge.triggerExternalActivityEvent";
        case "h":
        case "m":
        case "ml":
            return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    ty.prototype.he = function(a) {
        !a.g && a.Xa && fy(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    }
    ;
    ty.prototype.nf = function(a) {
        a.uf && (a.Za() ? fy(this, a, "overlay_viewable_end_of_session_impression") : fy(this, a, "overlay_unviewable_impression"),
        a.uf = !1)
    }
    ;
    var Cy = function(a, b, c, d) {
        c = c === void 0 ? {} : c;
        var e = {};
        il(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.I(b, c);
        c = f ? f.de : a.Hd();
        if (e.opt_bounds)
            return c.g(ux("ol", d));
        if (d !== void 0)
            if (tx(d) !== void 0)
                if (nx)
                    a = ux("ue", d);
                else if (cy(a),
                mx == "i")
                    a = ux("i", d),
                    a["if"] = 0;
                else if (b = a.I(b, e)) {
                    b: {
                        mx == "i" && (b.Xa = !0,
                        a.me(b));
                        f = e.opt_fullscreen;
                        f !== void 0 && nv(b, !!f);
                        var g;
                        if (f = !fu().j && !au())
                            Os(),
                            f = no(Zr) === 0;
                        if (g = f) {
                            switch (b.Ba()) {
                            case 1:
                                gy(b, "pv");
                                break;
                            case 2:
                                a.he(b)
                            }
                            dy("pv")
                        }
                        f = d.toLowerCase();
                        if (g = !g)
                            c: {
                                if (Ur(N().R, "ssmol") && (g = a.l,
                                f === "loaded"))
                                    break c;
                                g = nc(yt, f)
                            }
                        if (g && b.pa == 0) {
                            mx != "i" && (dx.done = !1);
                            g = e !== void 0 ? e.opt_nativeTime : void 0;
                            qt = g = typeof g === "number" ? g : tt();
                            b.Yb = !0;
                            var h = gu();
                            b.pa = 1;
                            b.la = {};
                            b.la.start = !1;
                            b.la.firstquartile = !1;
                            b.la.midpoint = !1;
                            b.la.thirdquartile = !1;
                            b.la.complete = !1;
                            b.la.resume = !1;
                            b.la.pause = !1;
                            b.la.skip = !1;
                            b.la.mute = !1;
                            b.la.unmute = !1;
                            b.la.viewable_impression = !1;
                            b.la.measurable_impression = !1;
                            b.la.fully_viewable_audible_half_duration_impression = !1;
                            b.la.fullscreen = !1;
                            b.la.exitfullscreen = !1;
                            b.Jd = 0;
                            h || (b.sa().I = g);
                            gx(dx, [b], !h)
                        }
                        (g = b.Gb[f]) && b.ia.reportEvent(g);
                        Ur(N().R, "fmd") || nc(zt, f) && b.bb && b.bb.j(b, null);
                        switch (b.Ba()) {
                        case 1:
                            var k = vx(f) ? a.K.custom_metric_viewable : a.K[f];
                            break;
                        case 2:
                            k = a.P[f]
                        }
                        if (k && (d = k.call(a, b, e, d),
                        Ur(N().R, "fmd") && nc(zt, f) && b.bb && b.bb.j(b, null),
                        d !== void 0)) {
                            e = ux(void 0, f);
                            il(e, d);
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    b.pa == 3 && a.A(b);
                    a = d
                } else
                    a = ux("nf", d);
            else
                a = void 0;
        else
            nx ? a = ux("ue") : f ? (a = ux(),
            il(a, rw(f, !0, !1, !1))) : a = ux("nf");
        return typeof a === "string" ? (qb("Invalid video metrics"),
        c.g()) : c.g(a)
    };
    ty.prototype.J = function(a) {
        this.l && a.Ba() == 1 && Dy(this, a)
    }
    ;
    ty.prototype.me = function(a) {
        this.l && a.Ba() == 1 && Dy(this, a)
    }
    ;
    var Dy = function(a, b) {
        var c;
        if (b.vb && zy(a)) {
            var d = a.o[b.vb];
            d ? c = function(f, g) {
                Ey(d, f, g)
            }
            : d !== null && lt(379, Error())
        } else
            c = Pa("ima.common.triggerViewabilityMeasurementUpdate");
        if (typeof c === "function") {
            var e = mw(b);
            e.nativeVolume = a.D;
            c(b.qa, e)
        }
    }
      , zy = function(a) {
        return (N(),
        ey(a) != "h" && ey(a) != "m") ? !1 : a.H != 0
    };
    ty.prototype.B = function(a, b, c, d) {
        if (Ys()) {
            var e = Ur(N().R, "mm")
              , f = {};
            (e = (f[Dr.Ff] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO",
            f[Dr.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO",
            f)[e]) && e && (this.C = e);
            this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" && lt(1044, Error())
        }
        a = Yx.prototype.B.call(this, a, b, c, d);
        this.L && (b = this.F,
        a.o == null && (a.o = new wv),
        b.g[a.qa] = a.o,
        a.o.A = ww);
        return a
    }
    ;
    ty.prototype.A = function(a) {
        a && a.Ba() == 1 && this.L && delete this.F.g[a.qa];
        return Yx.prototype.A.call(this, a)
    }
    ;
    ty.prototype.Pe = function() {
        this.g || (this.g = this.Id());
        return this.g == null || this.l ? new Xv : this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new oy(this.g) : new Hx(this.g)
    }
    ;
    ty.prototype.Hd = function() {
        return this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new py : new Cx
    }
    ;
    var Fy = function(a) {
        var b = {};
        return b.viewability = a.g,
        b.googleViewability = a.j,
        b
    }
      , Gy = function(a, b, c) {
        c = c === void 0 ? {} : c;
        a = Cy(I(ty), b, c, a);
        return Fy(a)
    }
      , Hy = kt(193, Gy, void 0, iy);
    z("Goog_AdSense_Lidar_sendVastEvent", Hy);
    var Iy = kt(194, function(a, b) {
        b = b === void 0 ? {} : b;
        a = Cy(I(ty), a, b);
        return Fy(a)
    });
    z("Goog_AdSense_Lidar_getViewability", Iy);
    var Jy = kt(195, function() {
        return Qs()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", Jy);
    var Ky = kt(196, function() {
        return JSON.stringify(Qs())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", Ky);
    y.console && typeof y.console.log === "function" && db(y.console.log, y.console);
    var Ly = function(a) {
        for (var b = [], c = a = cm(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement)
                b.push(c.frameElement);
            else
                break;
        return b
    };
    var My = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1
    };
    My.prototype.stopPropagation = function() {
        this.j = !0
    }
    ;
    My.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var Ny = function() {
        if (!y.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            y.addEventListener("test", c, b);
            y.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var Oy = function(a, b) {
        My.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    gb(Oy, My);
    Oy.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX,
        this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
        this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && Oy.Ka.preventDefault.call(this)
    }
    ;
    Oy.prototype.stopPropagation = function() {
        Oy.Ka.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    Oy.prototype.preventDefault = function() {
        Oy.Ka.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var Py = "closure_listenable_" + (Math.random() * 1E6 | 0)
      , Qy = function(a) {
        return !(!a || !a[Py])
    };
    var Ry = 0;
    var Sy = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Qc = e;
        this.key = ++Ry;
        this.wc = this.Gc = !1
    }
      , Ty = function(a) {
        a.wc = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Qc = null
    };
    var Uy = function(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    };
    Uy.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.j++);
        var g = Vy(a, b, d, e);
        g > -1 ? (b = a[g],
        c || (b.Gc = !1)) : (b = new Sy(b,this.src,f,!!d,e),
        b.Gc = c,
        a.push(b));
        return b
    }
    ;
    Uy.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = Vy(e, b, c, d);
        return b > -1 ? (Ty(e[b]),
        pc(e, b),
        e.length == 0 && (delete this.g[a],
        this.j--),
        !0) : !1
    }
    ;
    var Wy = function(a, b) {
        var c = b.type;
        c in a.g && oc(a.g[c], b) && (Ty(b),
        a.g[c].length == 0 && (delete a.g[c],
        a.j--))
    };
    Uy.prototype.bc = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Vy(a, b, c, d));
        return e > -1 ? a[e] : null
    }
    ;
    var Vy = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.wc && f.listener == b && f.capture == !!c && f.Qc == d)
                return e
        }
        return -1
    };
    var Xy = "closure_lm_" + (Math.random() * 1E6 | 0)
      , Yy = {}
      , Zy = 0
      , az = function(a, b, c, d, e) {
        if (d && d.once)
            return $y(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                az(a, b[f], c, d, e);
            return null
        }
        c = bz(c);
        return Qy(a) ? a.listen(b, c, Va(d) ? !!d.capture : !!d, e) : cz(a, b, c, !1, d, e)
    }
      , cz = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Va(e) ? !!e.capture : !!e
          , h = dz(a);
        h || (a[Xy] = h = new Uy(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy)
            return c;
        d = ez();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Ny || (e = g),
            e === void 0 && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(fz(b.toString()), d);
        else if (a.addListener && a.removeListener)
            A(b === "change", "MediaQueryList only has a change event"),
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Zy++;
        return c
    }
      , ez = function() {
        var a = gz
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
      , $y = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                $y(a, b[f], c, d, e);
            return null
        }
        c = bz(c);
        return Qy(a) ? a.qc(b, c, Va(d) ? !!d.capture : !!d, e) : cz(a, b, c, !0, d, e)
    }
      , hz = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                hz(a, b[f], c, d, e);
        else
            d = Va(d) ? !!d.capture : !!d,
            c = bz(c),
            Qy(a) ? a.xb(b, c, d, e) : a && (a = dz(a)) && (b = a.bc(b, c, d, e)) && iz(b)
    }
      , iz = function(a) {
        if (typeof a !== "number" && a && !a.wc) {
            var b = a.src;
            if (Qy(b))
                Wy(b.l, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(fz(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Zy--;
                (c = dz(b)) ? (Wy(c, a),
                c.j == 0 && (c.src = null,
                b[Xy] = null)) : Ty(a)
            }
        }
    }
      , fz = function(a) {
        return a in Yy ? Yy[a] : Yy[a] = "on" + a
    }
      , gz = function(a, b) {
        if (a.wc)
            a = !0;
        else {
            b = new Oy(b,this);
            var c = a.listener
              , d = a.Qc || a.src;
            a.Gc && iz(a);
            a = c.call(d, b)
        }
        return a
    }
      , dz = function(a) {
        a = a[Xy];
        return a instanceof Uy ? a : null
    }
      , jz = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0)
      , bz = function(a) {
        A(a, "Listener can not be null.");
        if (typeof a === "function")
            return a;
        A(a.handleEvent, "An object listener must have handleEvent method.");
        a[jz] || (a[jz] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[jz]
    };
    var R = function() {
        P.call(this);
        this.l = new Uy(this);
        this.Ib = this;
        this.na = null
    };
    gb(R, P);
    R.prototype[Py] = !0;
    m = R.prototype;
    m.addEventListener = function(a, b, c, d) {
        az(this, a, b, c, d)
    }
    ;
    m.removeEventListener = function(a, b, c, d) {
        hz(this, a, b, c, d)
    }
    ;
    m.dispatchEvent = function(a) {
        kz(this);
        var b = this.na;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.na)
                c.push(b),
                A(++d < 1E3, "infinite loop")
        }
        b = this.Ib;
        d = a.type || a;
        if (typeof a === "string")
            a = new My(a,b);
        else if (a instanceof My)
            a.target = a.target || b;
        else {
            var e = a;
            a = new My(d,b);
            il(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.j && f >= 0; f--) {
                var g = a.currentTarget = c[f];
                e = lz(g, d, !0, a) && e
            }
        a.j || (g = a.currentTarget = b,
        e = lz(g, d, !0, a) && e,
        a.j || (e = lz(g, d, !1, a) && e));
        if (c)
            for (f = 0; !a.j && f < c.length; f++)
                g = a.currentTarget = c[f],
                e = lz(g, d, !1, a) && e;
        return e
    }
    ;
    m.M = function() {
        R.Ka.M.call(this);
        if (this.l) {
            var a = this.l, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++)
                    ++b,
                    Ty(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.na = null
    }
    ;
    m.listen = function(a, b, c, d) {
        kz(this);
        return this.l.add(String(a), b, !1, c, d)
    }
    ;
    m.qc = function(a, b, c, d) {
        return this.l.add(String(a), b, !0, c, d)
    }
    ;
    m.xb = function(a, b, c, d) {
        this.l.remove(String(a), b, c, d)
    }
    ;
    var lz = function(a, b, c, d) {
        b = a.l.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.wc && g.capture == c) {
                var h = g.listener
                  , k = g.Qc || g.src;
                g.Gc && Wy(a.l, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };
    R.prototype.bc = function(a, b, c, d) {
        return this.l.bc(String(a), b, c, d)
    }
    ;
    var kz = function(a) {
        A(a.l, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var mz = function(a, b) {
        this.l = a;
        this.o = b;
        this.j = 0;
        this.g = null
    };
    mz.prototype.get = function() {
        if (this.j > 0) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else
            a = this.l();
        return a
    }
    ;
    var nz = function(a, b) {
        a.o(b);
        a.j < 100 && (a.j++,
        b.next = a.g,
        a.g = b)
    };
    var oz, pz = function() {
        if (typeof MessageChannel !== "undefined") {
            var a = new MessageChannel
              , b = {}
              , c = b;
            a.port1.onmessage = function() {
                if (b.next !== void 0) {
                    b = b.next;
                    var d = b.Ne;
                    b.Ne = null;
                    d()
                }
            }
            ;
            return function(d) {
                c.next = {
                    Ne: d
                };
                c = c.next;
                a.port2.postMessage(0)
            }
        }
        return function(d) {
            y.setTimeout(d, 0)
        }
    };
    var qz = function() {
        this.j = this.g = null
    };
    qz.prototype.add = function(a, b) {
        var c = rz.get();
        c.set(a, b);
        this.j ? this.j.next = c : (A(!this.g),
        this.g = c);
        this.j = c
    }
    ;
    qz.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g,
        this.g = this.g.next,
        this.g || (this.j = null),
        a.next = null);
        return a
    }
    ;
    var rz = new mz(function() {
        return new sz
    }
    ,function(a) {
        return a.reset()
    }
    )
      , sz = function() {
        this.next = this.g = this.j = null
    };
    sz.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    }
    ;
    sz.prototype.reset = function() {
        this.next = this.g = this.j = null
    }
    ;
    var tz = y.console && y.console.createTask ? y.console.createTask.bind(y.console) : void 0
      , uz = tz ? Symbol("consoleTask") : void 0;
    function vz(a, b) {
        function c() {
            var h = Ka.apply(0, arguments)
              , k = this;
            return g.run(function() {
                return a.call.apply(a, [k].concat(ka(h)))
            })
        }
        b = b === void 0 ? "anonymous" : b;
        if (uz && a[uz])
            return a;
        var d = a, e, f = (e = wz) == null ? void 0 : e();
        a = function() {
            var h = Ka.apply(0, arguments), k, l = (k = wz) == null ? void 0 : k();
            if (f !== l)
                throw Error(b + " was scheduled in '" + f + "' but called in '" + l + "'.\nMake sure your test awaits all async calls.\n\nTIP: To help investigate, debug the test in Chrome and look at the async portion\nof the call stack to see what originally scheduled the callback.  Then, make the\ntest wait for the relevant asynchronous work to finish.");
            return d.call.apply(d, [this].concat(ka(h)))
        }
        ;
        if (!tz)
            return a;
        var g = tz(a.name || b);
        c[pb(uz)] = g;
        return c
    }
    var wz;
    var xz, yz = !1, zz = new qz, Bz = function(a, b) {
        xz || Az();
        yz || (xz(),
        yz = !0);
        a = vz(a, "goog.async.run");
        zz.add(a, b)
    }, Az = function() {
        if (y.Promise && y.Promise.resolve) {
            var a = y.Promise.resolve(void 0);
            xz = function() {
                a.then(Cz)
            }
        } else
            xz = function() {
                var b = Cz;
                typeof y.setImmediate !== "function" || y.Window && y.Window.prototype && y.Window.prototype.setImmediate == y.setImmediate ? (oz || (oz = pz()),
                oz(b)) : y.setImmediate(b)
            }
    }, Cz = function() {
        for (var a; a = zz.remove(); ) {
            try {
                a.j.call(a.g)
            } catch (b) {
                Fb(b)
            }
            nz(rz, a)
        }
        yz = !1
    };
    var Dz = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Gz = function(a) {
        this.g = 0;
        this.C = void 0;
        this.o = this.j = this.l = null;
        this.A = this.B = !1;
        if (a != Xj)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    Ez(b, 2, c)
                }, function(c) {
                    if (!(c instanceof Fz))
                        try {
                            if (c instanceof Error)
                                throw c;
                            throw Error("Promise rejected.");
                        } catch (d) {}
                    Ez(b, 3, c)
                })
            } catch (c) {
                Ez(this, 3, c)
            }
    }
      , Hz = function() {
        this.next = this.context = this.l = this.j = this.g = null;
        this.o = !1
    };
    Hz.prototype.reset = function() {
        this.context = this.l = this.j = this.g = null;
        this.o = !1
    }
    ;
    var Iz = new mz(function() {
        return new Hz
    }
    ,function(a) {
        a.reset()
    }
    )
      , Jz = function(a, b, c) {
        var d = Iz.get();
        d.j = a;
        d.l = b;
        d.context = c;
        return d
    };
    Gz.prototype.then = function(a, b, c) {
        a != null && tb(a, "opt_onFulfilled should be a function.");
        b != null && tb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Kz(this, typeof a === "function" ? a : null, typeof b === "function" ? b : null, c)
    }
    ;
    Gz.prototype.$goog_Thenable = !0;
    Gz.prototype.I = function(a, b) {
        return Kz(this, null, a, b)
    }
    ;
    Gz.prototype.catch = Gz.prototype.I;
    Gz.prototype.cancel = function(a) {
        if (this.g == 0) {
            var b = new Fz(a);
            Bz(function() {
                Lz(this, b)
            }, this)
        }
    }
    ;
    var Lz = function(a, b) {
        if (a.g == 0)
            if (a.l) {
                var c = a.l;
                if (c.j) {
                    for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++,
                    g.g == a && (e = g),
                    !(e && d > 1))); g = g.next)
                        e || (f = g);
                    e && (c.g == 0 && d == 1 ? Lz(c, b) : (f ? (d = f,
                    A(c.j),
                    A(d != null),
                    d.next == c.o && (c.o = d),
                    d.next = d.next.next) : Mz(c),
                    Nz(c, e, 3, b)))
                }
                a.l = null
            } else
                Ez(a, 3, b)
    }
      , Pz = function(a, b) {
        a.j || a.g != 2 && a.g != 3 || Oz(a);
        A(b.j != null);
        a.o ? a.o.next = b : a.j = b;
        a.o = b
    }
      , Kz = function(a, b, c, d) {
        b && (b = vz(b, "goog.Promise.then"));
        c && (c = vz(c, "goog.Promise.then"));
        var e = Jz(null, null, null);
        e.g = new Gz(function(f, g) {
            e.j = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            }
            : f;
            e.l = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    k === void 0 && h instanceof Fz ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            }
            : g
        }
        );
        e.g.l = a;
        Pz(a, e);
        return e.g
    };
    Gz.prototype.D = function(a) {
        A(this.g == 1);
        this.g = 0;
        Ez(this, 2, a)
    }
    ;
    Gz.prototype.F = function(a) {
        A(this.g == 1);
        this.g = 0;
        Ez(this, 3, a)
    }
    ;
    var Ez = function(a, b, c) {
        if (a.g == 0) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c
                  , e = a.D
                  , f = a.F;
                if (d instanceof Gz) {
                    e != null && tb(e, "opt_onFulfilled should be a function.");
                    f != null && tb(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
                    Pz(d, Jz(e || Xj, f || null, a));
                    var g = !0
                } else if (Dz(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Va(d))
                        try {
                            var h = d.then;
                            if (typeof h === "function") {
                                Qz(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.C = c,
            a.g = b,
            a.l = null,
            Oz(a),
            b != 3 || c instanceof Fz || Rz(a, c))
        }
    }
      , Qz = function(a, b, c, d, e) {
        var f = !1
          , g = function(k) {
            f || (f = !0,
            c.call(e, k))
        }
          , h = function(k) {
            f || (f = !0,
            d.call(e, k))
        };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    }
      , Oz = function(a) {
        a.B || (a.B = !0,
        Bz(a.L, a))
    }
      , Mz = function(a) {
        var b = null;
        a.j && (b = a.j,
        a.j = b.next,
        b.next = null);
        a.j || (a.o = null);
        b != null && A(b.j != null);
        return b
    };
    Gz.prototype.L = function() {
        for (var a; a = Mz(this); )
            Nz(this, a, this.g, this.C);
        this.B = !1
    }
    ;
    var Nz = function(a, b, c, d) {
        if (c == 3 && b.l && !b.o)
            for (; a && a.A; a = a.l)
                a.A = !1;
        if (b.g)
            b.g.l = null,
            Sz(b, c, d);
        else
            try {
                b.o ? b.j.call(b.context) : Sz(b, c, d)
            } catch (e) {
                Tz.call(null, e)
            }
        nz(Iz, b)
    }
      , Sz = function(a, b, c) {
        b == 2 ? a.j.call(a.context, c) : a.l && a.l.call(a.context, c)
    }
      , Rz = function(a, b) {
        a.A = !0;
        Bz(function() {
            a.A && Tz.call(null, b)
        })
    }
      , Tz = Fb
      , Fz = function(a) {
        ib.call(this, a)
    };
    gb(Fz, ib);
    Fz.prototype.name = "cancel";
    var Uz = function(a, b) {
        R.call(this);
        this.j = a || 1;
        this.g = b || y;
        this.o = db(this.Eh, this);
        this.A = fb()
    };
    gb(Uz, R);
    m = Uz.prototype;
    m.enabled = !1;
    m.Sa = null;
    m.Eh = function() {
        if (this.enabled) {
            var a = fb() - this.A;
            a > 0 && a < this.j * .8 ? this.Sa = this.g.setTimeout(this.o, this.j - a) : (this.Sa && (this.g.clearTimeout(this.Sa),
            this.Sa = null),
            this.dispatchEvent("tick"),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ;
    m.start = function() {
        this.enabled = !0;
        this.Sa || (this.Sa = this.g.setTimeout(this.o, this.j),
        this.A = fb())
    }
    ;
    m.stop = function() {
        this.enabled = !1;
        this.Sa && (this.g.clearTimeout(this.Sa),
        this.Sa = null)
    }
    ;
    m.M = function() {
        Uz.Ka.M.call(this);
        this.stop();
        delete this.g
    }
    ;
    var Vz = function(a, b, c) {
        if (typeof a === "function")
            c && (a = db(a, c));
        else if (a && typeof a.handleEvent == "function")
            a = db(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return Number(b) > 2147483647 ? -1 : y.setTimeout(a, b || 0)
    }
      , Wz = function(a, b) {
        var c = null;
        return (new Gz(function(d, e) {
            c = Vz(function() {
                d(b)
            }, a);
            c == -1 && e(Error("Failed to schedule timer."))
        }
        )).I(function(d) {
            y.clearTimeout(c);
            throw d;
        })
    };
    var Xz = function() {
        return Math.round(Date.now() / 1E3)
    };
    var Yz = function() {
        this.g = {};
        return this
    };
    Yz.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    }
    ;
    Yz.prototype.set = function(a, b) {
        this.g[a] = b
    }
    ;
    var Zz = function(a, b) {
        a.g.eb = gl(a.g, "eb", 0) | b
    };
    Yz.prototype.get = function(a) {
        return gl(this.g, a, null)
    }
    ;
    var $z = null
      , aA = function() {
        this.g = {};
        this.j = 0
    }
      , bA = function() {
        $z || ($z = new aA);
        return $z
    }
      , cA = function(a, b) {
        a.g[b.getName()] = b
    }
      , dA = function(a, b) {
        this.o = a;
        this.l = !0;
        this.g = b
    };
    dA.prototype.getName = function() {
        return this.o
    }
    ;
    dA.prototype.getValue = function() {
        return this.g
    }
    ;
    dA.prototype.j = function() {
        return String(this.g)
    }
    ;
    var eA = function(a, b) {
        dA.call(this, String(a), b);
        this.A = a;
        this.g = !!b
    };
    w(eA, dA);
    eA.prototype.j = function() {
        return this.g ? "1" : "0"
    }
    ;
    var fA = function(a, b) {
        dA.call(this, a, b)
    };
    w(fA, dA);
    fA.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    }
    ;
    var gA = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0])
              , c = Number(a[1]);
            return new fA("",new $n(c,b,Number(a[3]) - c,Number(a[2]) - b))
        }
        return new fA("",new $n(0,0,0,0))
    };
    var hA = function(a) {
        var b = new $n(-Number.MAX_VALUE / 2,-Number.MAX_VALUE / 2,Number.MAX_VALUE,Number.MAX_VALUE)
          , c = new $n(0,0,0,0);
        if (!a || 0 == a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            a: {
                var e = b;
                var f = a[d]
                  , g = Math.max(e.left, f.left)
                  , h = Math.min(e.left + e.width, f.left + f.width);
                if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = !0;
                        break a
                    }
                }
                e = !1
            }
            if (!e)
                return c
        }
        return b
    }
      , iA = function(a, b) {
        var c = a.getBoundingClientRect();
        a = Mt(a, b);
        return new $n(Math.round(a.x),Math.round(a.y),Math.round(c.right - c.left),Math.round(c.bottom - c.top))
    }
      , jA = function(a, b, c) {
        if (b && c) {
            a: {
                var d = Math.max(b.left, c.left);
                var e = Math.min(b.left + b.width, c.left + c.width);
                if (d <= e) {
                    var f = Math.max(b.top, c.top)
                      , g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                        d = new $n(d,f,e - d,g - f);
                        break a
                    }
                }
                d = null
            }
            e = d ? d.height * d.width : 0;
            f = d ? b.height * b.width : 0;
            d = d && f ? Math.round(e / f * 100) : 0;
            cA(a, new dA("vp",d));
            d && d > 0 ? (e = ao(b),
            f = ao(c),
            e = e.top >= f.top && e.top < f.bottom) : e = !1;
            cA(a, new eA(512,e));
            d && d > 0 ? (e = ao(b),
            f = ao(c),
            e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
            cA(a, new eA(1024,e));
            d && d > 0 ? (e = ao(b),
            f = ao(c),
            e = e.left >= f.left && e.left < f.right) : e = !1;
            cA(a, new eA(2048,e));
            d && d > 0 ? (b = ao(b),
            c = ao(c),
            c = b.right <= c.right && b.right > c.left) : c = !1;
            cA(a, new eA(4096,c))
        }
    };
    var kA = function(a, b) {
        var c = 0;
        $k(cm(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = bA();
            a.g = {};
            var e = new eA(32,!0);
            e.l = !1;
            cA(a, e);
            e = cm().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            cA(a, new eA(64,e.toLowerCase().substring(e.length - 6) != "hidden" ? !0 : !1));
            a: {
                try {
                    var f = cm().top;
                    try {
                        var g = !!f.location.href || f.location.href === ""
                    } catch (n) {
                        g = !1
                    }
                    if (g) {
                        var h = Ly(d);
                        var k = h && h.length != 0 ? "1" : "0";
                        break a
                    }
                    k = "2";
                    break a
                } catch (n) {
                    k = "2";
                    break a
                }
                k = void 0
            }
            cA(a, new eA(256,k == "2"));
            cA(a, new eA(128,k == "1"));
            h = g = cm().top;
            k == "2" && (h = cm());
            f = iA(d, h);
            cA(a, new fA("er",f));
            try {
                var l = h.document && !h.document.body ? null : am(h || window)
            } catch (n) {
                l = null
            }
            l ? (h = bm(Xl(h.document).g),
            cA(a, new eA(16384,!!h)),
            l = h ? new $n(h.x,h.y,l.width,l.height) : null) : l = null;
            cA(a, new fA("vi",l));
            if (l && "1" == k) {
                k = Ly(d);
                d = [];
                for (h = 0; h < k.length; h++)
                    (e = iA(k[h], g)) && d.push(e);
                d.push(l);
                l = hA(d)
            }
            jA(a, f, l);
            a.j && cA(a, new dA("ts",Xz() - a.j));
            a.j = Xz()
        } else
            a = bA(),
            a.g = {},
            a.j = Xz(),
            cA(a, new eA(32,!1));
        this.l = a;
        this.g = new Yz;
        this.g.set("ve", 4);
        c && Zz(this.g, 1);
        $k(cm(), "ima", "video", "client", "crossdomainTag") && Zz(this.g, 4);
        $k(cm(), "ima", "video", "client", "sdkTag") && Zz(this.g, 8);
        $k(cm(), "ima", "video", "client", "jsTag") && Zz(this.g, 2);
        b && gl(b, "fullscreen", !1) && Zz(this.g, 16);
        this.j = b = null;
        if (c && (c = $k(cm(), "ima", "video", "client"),
        c.getEData)) {
            this.j = c.getEData();
            if (c = $k(cm(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c())
                    this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.l,
                    b = a.er,
                    a = a.vi,
                    b && a && (b = gA(b).getValue(),
                    a = gA(a).getValue(),
                    k = null,
                    gl(c.g, "er", null) && (k = gl(c.g, "er", null).getValue(),
                    k.top += b.top,
                    k.left += b.left,
                    cA(c, new fA("er",k))),
                    gl(c.g, "vi", null) && (l = gl(c.g, "vi", null).getValue(),
                    l.top += b.top,
                    l.left += b.left,
                    d = [],
                    d.push(l),
                    d.push(b),
                    d.push(a),
                    b = hA(d),
                    jA(c, k, b),
                    cA(c, new fA("vi",a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && window.performance.timing.domLoading > 0 ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", Xz() - (a != null ? a : b != null ? b : Xz()))
    };
    new Uz(200);
    var lA = function(a, b) {
        try {
            var c = new kA(a,b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g)
                b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.j) {
                var h = c.j.serialize();
                h && a.push(h)
            }
            var k, l = c.l;
            e = d;
            f = [];
            e || (e = 0);
            for (var n in l.g) {
                var p = l.g[n];
                if (p instanceof eA)
                    p.getValue() && (e |= p.A);
                else {
                    var q = l.g[n]
                      , t = q.l ? q.j() : "";
                    t && f.push(n + t)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (v) {
            return "tle;" + Nl(v.name, 12) + ";" + Nl(v.message, 40)
        }
    };
    var mA = function(a) {
        G.call(this, a)
    };
    w(mA, G);
    mA.prototype.getId = function() {
        return E(this, 1)
    }
    ;
    mA.g = "contentads.bow.header_bidding.HeaderBidRequest.Bid.Deal";
    var nA = [0, Lj];
    var oA = function(a) {
        G.call(this, a)
    };
    w(oA, G);
    oA.g = "contentads.bow.header_bidding.HeaderBidRequest.Bid.OptionalBidMetadata";
    var pA = [0, Lj, -3];
    var qA = function(a) {
        G.call(this, a)
    };
    w(qA, G);
    qA.prototype.getWidth = function() {
        return $h(this, 1)
    }
    ;
    qA.prototype.getHeight = function() {
        return $h(this, 2)
    }
    ;
    qA.g = "contentads.bow.header_bidding.HeaderBidRequest.Bid.Size";
    var rA = [0, Ij, -1];
    var sA = function(a) {
        G.call(this, a)
    };
    w(sA, G);
    sA.g = "contentads.bow.header_bidding.HeaderBidRequest.Bid.Video";
    var tA = [0, Fj, Kj, Lj, -1];
    var uA = function(a) {
        G.call(this, a)
    };
    w(uA, G);
    uA.prototype.getAdId = function() {
        return E(this, 1)
    }
    ;
    uA.prototype.getSize = function() {
        return Ph(this, qA, 7)
    }
    ;
    uA.prototype.dc = function() {
        return Ph(this, sA, 9)
    }
    ;
    uA.g = "contentads.bow.header_bidding.HeaderBidRequest.Bid";
    var vA = [0, Lj, Fj, Lj, Mj, Pj, nA, rA, Fj, tA, Lj, pA];
    var wA = function(a) {
        G.call(this, a)
    };
    w(wA, G);
    var xA = function(a, b) {
        return pi(a, 1, b)
    }
      , yA = function(a, b) {
        return ji(a, 4, b)
    }
      , zA = function(a, b) {
        return li(a, 2, b)
    };
    wA.g = "contentads_rpc.HeaderBiddingFloorData";
    var AA = function(a) {
        G.call(this, a)
    };
    w(AA, G);
    var BA = function(a, b) {
        return oi(a, 1, b)
    }
      , CA = function(a, b) {
        return Wh(a, 3, uA, b)
    }
      , DA = function(a, b) {
        return pi(a, 4, b)
    };
    AA.g = "contentads.bow.header_bidding.HeaderBidRequest";
    var EA = [0, Pj, Ij, Lj, Kj];
    var FA = [0, Lj, Fj, Nj, vA, Pj, EA, Kj, Pj, 2, Mj];
    var GA = function(a) {
        G.call(this, a)
    };
    w(GA, G);
    GA.g = "contentads_rpc.HeaderBiddingTimeoutOptimizationData";
    var HA = function(a) {
        G.call(this, a)
    };
    w(HA, G);
    var IA = function(a, b) {
        return Vh(a, 2, AA, b)
    }
      , JA = function(a, b) {
        C(a, wA, 5, b)
    }
      , KA = function(a, b) {
        oi(a, 10, b)
    }
      , LA = function(a, b) {
        oi(a, 11, b)
    };
    HA.g = "contentads.bow.header_bidding.HeaderBiddingWrapper";
    var MA = [0, Pj, Nj, FA, Pj, Lj, EA, Lj, Kj, Ij, [0, Pj, Kj, Fj], Lj, -1];
    var NA = function(a) {
        G.call(this, a)
    };
    w(NA, G);
    var OA = function(a) {
        var b = new HA;
        b = pi(b, 1, 1);
        return Vh(a, 1, HA, b)
    };
    NA.g = "contentads.bow.header_bidding.HeaderBiddingData";
    NA.prototype.g = Sj([0, Nj, MA]);
    var PA = function(a) {
        G.call(this, a)
    };
    w(PA, G);
    PA.g = "contentads.bow.ImaEoIdConfig";
    var QA = function(a) {
        G.call(this, a)
    };
    w(QA, G);
    QA.g = "contentads.bow.ImaHeaderBiddingManagerNetworkConfig";
    var RA = function(a) {
        G.call(this, a)
    };
    w(RA, G);
    RA.g = "contentads.bow.ImaHeaderBiddingManagerConfigList";
    var SA = function(a) {
        G.call(this, a)
    };
    w(SA, G);
    SA.g = "contentads.bow.ImaPropertyOwnership.NetworkStatus";
    var TA = function(a) {
        G.call(this, a)
    };
    w(TA, G);
    TA.g = "contentads.bow.ImaPropertyOwnership";
    var UA = function(a) {
        G.call(this, a)
    };
    w(UA, G);
    UA.g = "contentads.bow.ImaTopicsConfig";
    var VA = function(a) {
        G.call(this, a)
    };
    w(VA, G);
    var WA = Tj(VA);
    VA.g = "contentads.bow.ImaPerPubConfig";
    var XA = function(a) {
        G.call(this, a)
    };
    w(XA, G);
    var YA = function(a) {
        var b = new XA;
        return pi(b, 1, a)
    };
    XA.g = "contentads.bow.rpc.ThirdPartyParams.ThirdPartyJavascript.ThirdPartyJavascriptError";
    var ZA = [0, Pj];
    var $A = function(a) {
        G.call(this, a)
    };
    w($A, G);
    var aB = function(a) {
        var b = new $A;
        return oi(b, 1, a)
    }
      , bB = function(a) {
        var b = window.Date.now();
        b = Number.isFinite(b) ? Math.round(b) : 0;
        return nh(a, 3, Nf(b))
    };
    $A.prototype.getError = function() {
        return Ph(this, XA, 10)
    }
    ;
    $A.prototype.ib = function(a) {
        return C(this, XA, 10, a)
    }
    ;
    var cB = Tj($A);
    $A.g = "contentads.bow.rpc.ThirdPartyParams.ThirdPartyJavascript";
    var tD = [0, Lj, -1, Fj, Ij, -2, Fj, Ej, Kj, ZA, Kj];
    var uD = [0, 1, [0, Hj, -2], -1, Lj, -1, Kj, [0, 3, Pj, Lj], Fj, Qj, Oj];
    var vD = function(a) {
        G.call(this, a)
    };
    w(vD, G);
    vD.g = "contentads.bow.rpc.ThirdPartyParams";
    vD.prototype.g = Sj([0, Nj, uD, Nj, tD]);
    var yD = function() {
        var a = wD;
        this.A = xD;
        this.B = "jserror";
        this.o = !1;
        this.g = a === void 0 ? null : a;
        this.j = null;
        this.l = !1;
        this.C = this.ab
    };
    m = yD.prototype;
    m.od = function(a) {
        this.j = a
    }
    ;
    m.ne = function(a) {
        this.B = a
    }
    ;
    m.oe = function(a) {
        this.o = a
    }
    ;
    m.pe = function(a) {
        this.l = a
    }
    ;
    m.Eb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else
                e = b()
        } catch (h) {
            b = this.o;
            try {
                Ao(d),
                b = this.C(a, new Vj(h,{
                    message: zD(h)
                }), void 0, c)
            } catch (k) {
                this.ab(217, k)
            }
            if (b) {
                var f, g;
                (f = window.console) == null || (g = f.error) == null || g.call(f, h)
            } else
                throw h;
        }
        return e
    }
    ;
    m.fe = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ka.apply(0, arguments);
            return e.Eb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    m.ab = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Bs;
            Gs(f, 1, "context", a);
            Wj(b) || (b = new Vj(b,{
                message: zD(b)
            }));
            b.msg && Gs(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j)
                try {
                    this.j(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            Fs(f, 3, [g]);
            var h = As();
            h.j && Gs(f, 4, "top", h.j.url || "");
            Fs(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? om(h.g.url) : ""
            }]);
            AD(this.A, e, f, this.l, c)
        } catch (k) {
            try {
                AD(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: zD(k),
                    url: h && h.g.url
                }, this.l, c)
            } catch (l) {}
        }
        return this.o
    }
    ;
    var zD = function(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    };
    var BD = function() {
        this.g = Math.random()
    }
      , CD = function() {
        var a = xD
          , b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
      , AD = function(a, b, c, d, e) {
        if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .01))
            try {
                if (c instanceof Bs)
                    var f = c;
                else
                    f = new Bs,
                    ym(c, function(h, k) {
                        var l = f
                          , n = l.o++;
                        Fs(l, n, Cs(k, h))
                    });
                var g = Is(f, "https:", "/pagead/gen_204?id=" + b + "&");
                g && Km(y, g)
            } catch (h) {}
    };
    var xD, DD, wD = new zo(1,window);
    (function(a) {
        xD = a != null ? a : new BD;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        CD();
        DD = new yD;
        DD.od(function() {});
        DD.pe(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || wD.B() : wD.l && dk(window, "load", function() {
            window.google_measure_js_timing || wD.B()
        })
    }
    )();
    var ED = function(a) {
        G.call(this, a)
    };
    w(ED, G);
    ED.g = "contentads.shared.ad_tech.iab_ccpa.IabCcpaUsPrivacySignals";
    var FD = Fl("contentads.shared.adtech.iabccpa.js.UsPrivacyStringCodec")
      , GD = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var HD = function(a) {
        G.call(this, a)
    };
    w(HD, G);
    HD.prototype.getType = function() {
        return $h(this, 1)
    }
    ;
    HD.prototype.getVersion = function() {
        return $h(this, 2)
    }
    ;
    HD.g = "contentads.shared.ad_tech.iab_gpp.IabGppHeader";
    function ID(a) {
        return bd(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return b.toString(2).padStart(8, "0")
        }).join("")
    }
    function JD(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }
    function KD(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    function LD(a, b) {
        a = ID(a);
        return a.length < b ? a.padEnd(b, "0") : a
    }
    ;function MD(a, b) {
        var c = a.indexOf("11");
        if (c === -1)
            throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    }
    ;var ND = function(a) {
        G.call(this, a)
    };
    w(ND, G);
    ND.g = "contentads.shared.ad_tech.iab_gpp.usca.KnownChildSensitiveDataConsents";
    var OD = function(a) {
        G.call(this, a)
    };
    w(OD, G);
    OD.g = "contentads.shared.ad_tech.iab_gpp.usca.SensitiveDataProcessing";
    var PD = function(a) {
        G.call(this, a)
    };
    w(PD, G);
    PD.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    PD.g = "contentads.shared.ad_tech.iab_gpp.usca.UscaSection.CoreSegment";
    var QD = function(a) {
        G.call(this, a)
    };
    w(QD, G);
    QD.g = "contentads.shared.ad_tech.iab_gpp.usca.UscaSection.GpcSegment";
    var RD = function(a) {
        G.call(this, a)
    };
    w(RD, G);
    var SD = function(a) {
        var b = new RD;
        return C(b, PD, 1, a)
    };
    RD.g = "contentads.shared.ad_tech.iab_gpp.usca.UscaSection";
    var TD = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , UD = 6 + TD.reduce(function(a, b) {
        return a + b
    });
    var VD = function(a) {
        G.call(this, a)
    };
    w(VD, G);
    VD.g = "contentads.shared.ad_tech.iab_gpp.usco.SensitiveDataProcessing";
    var WD = function(a) {
        G.call(this, a)
    };
    w(WD, G);
    WD.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    WD.g = "contentads.shared.ad_tech.iab_gpp.usco.UscoSection.CoreSegment";
    var XD = function(a) {
        G.call(this, a)
    };
    w(XD, G);
    XD.g = "contentads.shared.ad_tech.iab_gpp.usco.UscoSection.GpcSegment";
    var YD = function(a) {
        G.call(this, a)
    };
    w(YD, G);
    var ZD = function(a) {
        var b = new YD;
        return C(b, WD, 1, a)
    };
    YD.g = "contentads.shared.ad_tech.iab_gpp.usco.UscoSection";
    var $D = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , aE = 6 + $D.reduce(function(a, b) {
        return a + b
    });
    var bE = function(a) {
        G.call(this, a)
    };
    w(bE, G);
    bE.g = "contentads.shared.ad_tech.iab_gpp.usct.KnownChildSensitiveDataConsents";
    var cE = function(a) {
        G.call(this, a)
    };
    w(cE, G);
    cE.g = "contentads.shared.ad_tech.iab_gpp.usct.SensitiveDataProcessing";
    var dE = function(a) {
        G.call(this, a)
    };
    w(dE, G);
    dE.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    dE.g = "contentads.shared.ad_tech.iab_gpp.usct.UsctSection.CoreSegment";
    var eE = function(a) {
        G.call(this, a)
    };
    w(eE, G);
    eE.g = "contentads.shared.ad_tech.iab_gpp.usct.UsctSection.GpcSegment";
    var fE = function(a) {
        G.call(this, a)
    };
    w(fE, G);
    var gE = function(a) {
        var b = new fE;
        return C(b, dE, 1, a)
    };
    fE.g = "contentads.shared.ad_tech.iab_gpp.usct.UsctSection";
    var hE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , iE = 6 + hE.reduce(function(a, b) {
        return a + b
    });
    var jE = function(a) {
        G.call(this, a)
    };
    w(jE, G);
    jE.g = "contentads.shared.ad_tech.iab_gpp.usnat.KnownChildSensitiveDataConsents";
    var kE = function(a) {
        G.call(this, a)
    };
    w(kE, G);
    kE.g = "contentads.shared.ad_tech.iab_gpp.usnat.SensitiveDataProcessing";
    var lE = function(a) {
        G.call(this, a)
    };
    w(lE, G);
    lE.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    lE.g = "contentads.shared.ad_tech.iab_gpp.usnat.UsnatSection.CoreSegment";
    var mE = function(a) {
        G.call(this, a)
    };
    w(mE, G);
    mE.g = "contentads.shared.ad_tech.iab_gpp.usnat.UsnatSection.GpcSegment";
    var nE = function(a) {
        G.call(this, a)
    };
    w(nE, G);
    var oE = function(a) {
        var b = new nE;
        return C(b, lE, 1, a)
    };
    nE.g = "contentads.shared.ad_tech.iab_gpp.usnat.UsnatSection";
    var pE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , qE = 6 + pE.reduce(function(a, b) {
        return a + b
    });
    var rE = function(a) {
        G.call(this, a)
    };
    w(rE, G);
    rE.g = "contentads.shared.ad_tech.iab_gpp.usva.SensitiveDataProcessing";
    var sE = function(a) {
        G.call(this, a)
    };
    w(sE, G);
    sE.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    sE.g = "contentads.shared.ad_tech.iab_gpp.usva.UsvaSection";
    var tE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , uE = 6 + tE.reduce(function(a, b) {
        return a + b
    });
    var vE = function(a) {
        G.call(this, a)
    };
    w(vE, G);
    vE.g = "contentads.shared.ad_tech.iab_tcf_v2.PublisherRestrictionEntry";
    var wE = function(a) {
        G.call(this, a)
    };
    w(wE, G);
    var xE = function(a, b) {
        return Dh(a, 1, b, Af)
    }
      , yE = function(a, b) {
        return Dh(a, 2, b, Af)
    }
      , zE = function(a, b) {
        return Dh(a, 3, b, Ef)
    }
      , AE = function(a, b) {
        Dh(a, 4, b, Ef)
    };
    wE.g = "contentads.shared.ad_tech.iab_tcf_v2.PublisherTc";
    var BE = function(a) {
        G.call(this, a)
    };
    w(BE, G);
    BE.g = "google.protobuf.Timestamp";
    var CE = function(a) {
        G.call(this, a)
    };
    w(CE, G);
    CE.prototype.getVersion = function() {
        return $h(this, 1)
    }
    ;
    var DE = function(a, b) {
        return mi(a, 1, b)
    }
      , EE = function(a, b) {
        return C(a, BE, 2, b)
    }
      , FE = function(a, b) {
        return C(a, BE, 3, b)
    }
      , GE = function(a, b) {
        return mi(a, 4, b)
    }
      , HE = function(a, b) {
        return mi(a, 5, b)
    }
      , IE = function(a, b) {
        return mi(a, 6, b)
    }
      , JE = function(a, b) {
        return Eh(a, 7, Wf(b), "")
    }
      , KE = function(a, b) {
        return mi(a, 8, b)
    }
      , LE = function(a, b) {
        return mi(a, 9, b)
    }
      , ME = function(a, b) {
        return ki(a, 10, b)
    }
      , NE = function(a, b) {
        return ki(a, 11, b)
    }
      , OE = function(a, b) {
        return Dh(a, 12, b, Af)
    }
      , PE = function(a, b) {
        return Dh(a, 13, b, Af)
    }
      , QE = function(a, b) {
        return Dh(a, 14, b, Af)
    }
      , RE = function(a, b) {
        return ki(a, 15, b)
    }
      , SE = function(a, b) {
        return Eh(a, 16, Wf(b), "")
    }
      , TE = function(a, b) {
        return Dh(a, 17, b, Ef)
    }
      , UE = function(a, b) {
        return Dh(a, 18, b, Ef)
    }
      , VE = function(a, b) {
        return Th(a, vE, 19, b)
    };
    CE.g = "contentads.shared.ad_tech.iab_tcf_v2.TcfCoreString";
    var WE = function(a) {
        G.call(this, a)
    };
    w(WE, G);
    WE.g = "contentads.shared.ad_tech.iab_tcf_v2.TcString";
    var XE = "a".charCodeAt()
      , YE = Yk({
        Ni: 0,
        Mi: 1,
        Ji: 2,
        Ei: 3,
        Ki: 4,
        Fi: 5,
        Li: 6,
        Hi: 7,
        Ii: 8,
        Di: 9,
        Gi: 10,
        Oi: 11
    })
      , ZE = Yk({
        Qi: 0,
        Ri: 1,
        Pi: 2
    });
    var $E = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.j = a;
        this.g = 0
    }
      , bF = function(a) {
        a = aF(a, 36);
        var b = new BE;
        b = ni(b, 1, Math.floor(a / 10));
        return mi(b, 2, a % 10 * 1E8)
    }
      , cF = function(a) {
        return String.fromCharCode(XE + aF(a, 6)) + String.fromCharCode(XE + aF(a, 6))
    }
      , fF = function(a) {
        var b = aF(a, 16);
        return !!aF(a, 1) === !0 ? (a = dF(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : eF(a, b)
    }
      , gF = function(a) {
        for (var b = [], c = aF(a, 12); c--; ) {
            var d = aF(a, 6)
              , e = aF(a, 2)
              , f = dF(a)
              , g = b
              , h = g.push
              , k = new vE;
            d = F(k, 1, d);
            e = F(d, 2, e);
            f = Dh(e, 3, f, Ef);
            h.call(g, f)
        }
        return b
    }
      , dF = function(a) {
        for (var b = aF(a, 12), c = []; b--; ) {
            var d = !!aF(a, 1) === !0
              , e = aF(a, 16);
            if (d)
                for (d = aF(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , eF = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (aF(a, 1)) {
                var f = e + 1;
                if (c && c.indexOf(f) === -1)
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , aF = function(a, b) {
        if (a.g + b > a.j.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.j.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    $E.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var hF = Fl("contentads.shared.adtech.iabtcfv2.js.PublisherTcCodec")
      , iF = function(a) {
        try {
            var b = bd(a).map(function(f) {
                return f.toString(2).padStart(8, "0")
            }).join("")
              , c = new $E(b);
            if (aF(c, 3) !== 3)
                return null;
            var d = yE(xE(new wE, eF(c, 24, YE)), eF(c, 24, YE))
              , e = aF(c, 6);
            e !== 0 && AE(zE(d, eF(c, e)), eF(c, e));
            return d
        } catch (f) {
            return Hl(hF, "Failed to decode core string: " + f.message),
            null
        }
    };
    var jF = Fl("contentads.shared.adtech.iabtcfv2.js.TcfCoreStringCodec")
      , kF = function(a) {
        try {
            var b = bd(a).map(function(d) {
                return d.toString(2).padStart(8, "0")
            }).join("")
              , c = new $E(b);
            return VE(UE(TE(SE(RE(QE(PE(OE(NE(ME(LE(KE(JE(IE(HE(GE(FE(EE(DE(new CE, aF(c, 6)), bF(c)), bF(c)), aF(c, 12)), aF(c, 12)), aF(c, 6)), cF(c)), aF(c, 12)), aF(c, 6)), !!aF(c, 1)), !!aF(c, 1)), eF(c, 12, ZE)), eF(c, 24, YE)), eF(c, 24, YE)), !!aF(c, 1)), cF(c)), fF(c)), fF(c)), gF(c))
        } catch (d) {
            return Hl(jF, "Failed to decode core string: " + d.message),
            null
        }
    };
    var mF = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (b.length > 4)
            return null;
        a = kF(b[0]);
        if (!a)
            return null;
        var c = new WE;
        a = C(c, CE, 1, a);
        b.shift();
        b = u(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            lF(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = iF(c);
                if (!c)
                    return null;
                C(a, wE, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , lF = function(a) {
        try {
            var b = bd(a).map(function(c) {
                return c.toString(2).padStart(8, "0")
            }).join("");
            return aF(new $E(b), 3)
        } catch (c) {
            return -1
        }
    };
    var oF = function(a, b) {
        var c = mF(a);
        if (!c || !a)
            return null;
        var d = Ph(c, CE, 1)
          , e = Ph(c, wE, 2) || new wE;
        c = $h(d, 9);
        var f = $h(d, 4)
          , g = $h(d, 5)
          , h = Zh(d, 10)
          , k = Zh(d, 11)
          , l = E(d, 16)
          , n = Zh(d, 15);
        var p = hi(d, 13, sh());
        p = nF(p, YE);
        var q = hi(d, 14, sh());
        p = {
            consents: p,
            legitimateInterests: nF(q, YE)
        };
        q = fi(d, 17);
        q = nF(q);
        var t = fi(d, 18);
        q = {
            consents: q,
            legitimateInterests: nF(t)
        };
        t = hi(d, 12, sh());
        t = nF(t, ZE);
        var v = Rh(d, vE, 19, sh());
        d = {};
        v = u(v);
        for (var x = v.next(); !x.done; x = v.next()) {
            x = x.value;
            var D = di(x, 1);
            d[D] = d[D] || {};
            for (var M = u(fi(x, 3)), Q = M.next(); !Q.done; Q = M.next())
                d[D][Q.value] = di(x, 2)
        }
        v = hi(e, 1, sh());
        v = nF(v, YE);
        x = hi(e, 2, sh());
        x = nF(x, YE);
        D = fi(e, 3);
        D = nF(D);
        e = fi(e, 4);
        return {
            tcString: a,
            tcfPolicyVersion: c,
            gdprApplies: b,
            cmpId: f,
            cmpVersion: g,
            isServiceSpecific: h,
            useNonStandardStacks: k,
            publisherCC: l,
            purposeOneTreatment: n,
            purpose: p,
            vendor: q,
            specialFeatureOptins: t,
            publisher: {
                restrictions: d,
                consents: v,
                legitimateInterests: x,
                customPurposes: {
                    consents: D,
                    legitimateInterests: nF(e)
                }
            }
        }
    }
      , nF = function(a, b) {
        var c = {};
        if (Array.isArray(b) && b.length !== 0) {
            b = u(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = a.indexOf(d) !== -1
        } else
            for (a = u(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var pF = function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? !1 : b
    };
    var qF = new pF(45641707,!0)
      , rF = new pF(45642592)
      , sF = new pF(635466687)
      , tF = new function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? 0 : b
    }
    (45645574)
      , uF = new pF(45650866);
    var vF = function(a) {
        G.call(this, a)
    };
    w(vF, G);
    var wF = function(a) {
        var b = new vF;
        Uh(b, 1, Af, a, hi)
    };
    vF.g = "com.google.android.libraries.ads.mobile.sdk.internal.consent.ConsentAllowlist";
    var xF = /^((market|itms|intent|itms-appss):\/\/)/i;
    var yF = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var zF = function(a) {
        var b = a.yb;
        var c = a.jb;
        var d = a.height;
        var e = a.width;
        a = a.Ia === void 0 ? !1 : a.Ia;
        this.yb = b;
        this.jb = c;
        this.height = d;
        this.width = e;
        this.Ia = a
    };
    zF.prototype.getHeight = function() {
        return this.height
    }
    ;
    zF.prototype.getWidth = function() {
        return this.width
    }
    ;
    var AF = function(a) {
        var b = a.Oh;
        var c = a.qg;
        var d = a.yb;
        var e = a.jb;
        var f = a.Nh;
        var g = a.pg;
        zF.call(this, {
            yb: d,
            jb: e,
            height: a.height,
            width: a.width,
            Ia: a.Ia === void 0 ? !1 : a.Ia
        });
        this.o = b;
        this.j = c;
        this.l = f;
        this.g = g
    };
    w(AF, zF);
    var BF = function(a) {
        var b = a.gh;
        zF.call(this, {
            yb: a.yb,
            jb: a.jb,
            height: a.height,
            width: a.width,
            Ia: a.Ia === void 0 ? !1 : a.Ia
        });
        this.g = b
    };
    w(BF, zF);
    BF.prototype.getMediaUrl = function() {
        return this.g
    }
    ;
    function CF(a) {
        return new (Function.prototype.bind.apply(a, [null].concat(ka(Ka.apply(1, arguments)))))
    }
    ;var DF = function(a, b, c, d) {
        P.call(this);
        this.F = b;
        this.D = c;
        this.C = d;
        this.A = new Map;
        this.H = 0;
        this.o = new Map;
        this.B = new Map;
        this.l = void 0;
        this.j = a
    };
    w(DF, P);
    DF.prototype.M = function() {
        delete this.g;
        this.A.clear();
        this.o.clear();
        this.B.clear();
        this.l && (ek(ue(this.j), "message", this.l),
        delete this.l);
        delete this.j;
        delete this.C;
        P.prototype.M.call(this)
    }
    ;
    var EF = function(a) {
        if (a.g)
            return a.g;
        a.D && a.D(ue(a.j)) ? a.g = a.j : a.g = Em(ue(a.j), a.F);
        var b;
        return (b = a.g) != null ? b : null
    }
      , GF = function(a, b, c) {
        if (EF(a))
            if (a.g === a.j)
                (b = a.A.get(b)) && b(ue(a.g), c);
            else {
                var d = a.o.get(b);
                if (d && d.Wc) {
                    FF(a);
                    var e = ++a.H;
                    a.B.set(e, {
                        rc: d.rc,
                        zg: d.Wd(c),
                        sh: b === "addEventListener"
                    });
                    c = d.Wc(c, e);
                    a.g.postMessage(c, "*")
                }
            }
    }
      , FF = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = a.C ? a.C(b) : void 0;
                if (c) {
                    var d = c.hf
                      , e = a.B.get(d);
                    if (e) {
                        e.sh || a.B.delete(d);
                        var f;
                        (f = e.rc) == null || f.call(e, e.zg, c.payload)
                    }
                }
            } catch (g) {}
        }
        ,
        dk(ue(a.j), "message", a.l))
    };
    var HF = function(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
      , IF = function(a, b) {
        b = b === void 0 ? {} : b;
        P.call(this);
        this.j = a;
        this.g = null;
        this.B = {};
        this.C = 0;
        var c;
        this.o = (c = b.timeoutMs) != null ? c : 500;
        var d;
        this.A = (d = b.Kj) != null ? d : !1;
        this.l = null
    };
    w(IF, P);
    IF.prototype.M = function() {
        this.B = {};
        this.l && (ek(this.j, "message", this.l),
        delete this.l);
        delete this.B;
        delete this.j;
        delete this.g;
        P.prototype.M.call(this)
    }
    ;
    var KF = function(a) {
        return typeof a.j.__tcfapi === "function" || JF(a) != null
    }
      , NF = function(a, b) {
        var c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        }
          , d = Zj(function() {
            return b(c)
        })
          , e = 0;
        a.o !== -1 && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.o));
        LF(a, "addEventListener", function(f) {
            f && (c = f,
            c.internalErrorState = HF(c),
            c.internalBlockOnErrors = a.A,
            MF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"),
            LF(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    };
    IF.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.A
        }
          , d = Zj(function() {
            return a(c)
        })
          , e = 0;
        this.o !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = HF(c),
            c.internalBlockOnErrors = b.A,
            h && c.internalErrorState === 0 || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            LF(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    IF.prototype.removeEventListener = function(a) {
        a && a.listenerId && LF(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var PF = function(a, b, c) {
        var d = d === void 0 ? "755" : d;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var e = a.publisher.restrictions[b];
                if (e !== void 0) {
                    e = e[d === void 0 ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        if (e === 0)
            return !1;
        var f = c;
        c === 2 ? (f = 0,
        e === 2 && (f = 1)) : c === 3 && (f = 1,
        e === 1 && (f = 0));
        a = f === 0 ? a.purpose && a.vendor ? (c = OF(a.vendor.consents, d === void 0 ? "755" : d)) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && OF(a.purpose.consents, b) : !0 : f === 1 ? a.purpose && a.vendor ? OF(a.purpose.legitimateInterests, b) && OF(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
        return a
    }
      , OF = function(a, b) {
        return !(!a || !a[b])
    }
      , LF = function(a, b, c, d) {
        c || (c = function() {}
        );
        if (typeof a.j.__tcfapi === "function")
            a = a.j.__tcfapi,
            a(b, 2, c, d);
        else if (JF(a)) {
            QF(a);
            var e = ++a.C;
            a.B[e] = c;
            a.g && (c = {},
            a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , JF = function(a) {
        if (a.g)
            return a.g;
        a.g = Em(a.j, "__tcfapiLocator");
        return a.g
    }
      , QF = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        dk(a.j, "message", a.l))
    }
      , MF = function(a) {
        if (a.gdprApplies === !1)
            return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = HF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Mm({
            e: String(pb(a.internalErrorState))
        }, "tcfe"),
        !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }
      , RF = function(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(function(d) {
            return PF(a, d, c)
        })
    };
    var SF = function(a, b) {
        b = b.listener;
        (a = ue(a.__gpp)("addEventListener", b)) && b(a, !0)
    }
      , TF = function(a, b) {
        var c = b.listener;
        ue(a.__gpp)("removeEventListener", c, b.listenerId)
    }
      , UF = {
        Wd: function(a) {
            return a.listener
        },
        Wc: function(a, b) {
            a = {};
            return a.__gppCall = {
                callId: b,
                command: "addEventListener",
                version: "1.1"
            },
            a
        },
        rc: function(a, b) {
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }
      , VF = {
        Wd: function(a) {
            return a.listener
        },
        Wc: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "removeEventListener",
                version: "1.1",
                parameter: rb(a.listenerId)
            },
            c
        },
        rc: function(a, b) {
            b = b.__gppReturn;
            var c = b.returnValue.data;
            a == null || a(c, b.success)
        }
    };
    function WF(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            hf: b.__gppReturn.callId
        }
    }
    var XF = function(a, b) {
        var c = b === void 0 ? {} : b;
        b = c.timeoutMs;
        c = c.cmpInteractionEventReporter;
        P.call(this);
        this.caller = new DF(a,"__gppLocator",function(d) {
            return typeof d.__gpp === "function"
        }
        ,WF);
        this.caller.A.set("addEventListener", SF);
        this.caller.o.set("addEventListener", UF);
        this.caller.A.set("removeEventListener", TF);
        this.caller.o.set("removeEventListener", VF);
        this.timeoutMs = b != null ? b : 500;
        this.cmpInteractionEventReporter = c
    };
    w(XF, P);
    XF.prototype.M = function() {
        this.caller.dispose();
        P.prototype.M.call(this)
    }
    ;
    XF.prototype.addEventListener = function(a) {
        var b = this
          , c = Zj(function() {
            a(YF, !0)
        })
          , d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
            c()
        }, this.timeoutMs);
        GF(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (((g = e.pingData) == null ? void 0 : g.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0") {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else
                        Array.isArray(e.pingData.applicableSections) ? h = e : (b.removeEventListener(e.listenerId),
                        h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                    a(h, f);
                    var k;
                    (k = b.cmpInteractionEventReporter) == null || k.g()
                } catch (l) {
                    if (e == null ? 0 : e.listenerId)
                        try {
                            b.removeEventListener(e.listenerId)
                        } catch (n) {
                            a(ZF, !0);
                            return
                        }
                    a($F, !0)
                }
            }
        })
    }
    ;
    XF.prototype.removeEventListener = function(a) {
        GF(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    }
    ;
    var aG = function(a, b) {
        var c = c === void 0 ? !1 : c;
        if (!a)
            return !1;
        var d = ID(a.split("~")[0])
          , e = JD(d.slice(0, 6))
          , f = JD(d.slice(6, 12))
          , g = new HD;
        var h = mi(g, 1, e);
        var k = mi(h, 2, f);
        for (var l = d.slice(12), n = JD(l.slice(0, 12)), p = [], q = l.slice(12).replace(/0+$/, ""), t = 0; t < n; t++) {
            if (q.length === 0)
                throw Error("Found " + t + " of " + n + " sections [" + p + "] but reached end of input [" + l + "]");
            var v = JD(q[0]) === 0;
            q = q.slice(1);
            var x = MD(q, l)
              , D = p.length === 0 ? 0 : p[p.length - 1]
              , M = KD(x) + D;
            q = q.slice(x.length);
            if (v)
                p.push(M);
            else {
                for (var Q = MD(q, l), W = KD(Q), Ba = 0; Ba <= W; Ba++)
                    p.push(M + Ba);
                q = q.slice(Q.length)
            }
        }
        if (q.length > 0)
            throw Error("Found " + n + " sections [" + p + "] but has remaining input [" + q + "], entire input [" + l + "]");
        var Y = Dh(k, 3, p, Ef);
        var Xa = a.includes("~") ? a.split("~").slice(1) : [];
        var Jb = fi(Y, 3);
        for (var nb = 0; nb < Jb.length; ++nb) {
            var Lc = Jb[nb];
            if (b.includes(Lc)) {
                var Ga = Xa[nb];
                switch (Lc) {
                case 2:
                    if (c) {
                        var dd = oF(Ga, !0);
                        if (!dd)
                            throw Error("Cannot decode TCF V2 section string.");
                        if (!RF(dd, ["3", "4"], 0))
                            return !0
                    }
                    break;
                case 7:
                    if (Ga.length === 0)
                        throw Error("Cannot decode empty USNat section string.");
                    var ha = Ga.split(".");
                    if (ha.length > 2)
                        throw Error("Expected at most 2 segments but got " + ha.length + " when decoding " + Ga + ".");
                    var Qa = void 0
                      , ed = void 0
                      , fd = void 0
                      , Se = void 0
                      , ob = void 0
                      , sj = void 0
                      , tj = void 0
                      , uj = void 0
                      , vj = void 0
                      , dB = void 0
                      , eB = void 0
                      , fB = void 0
                      , gB = void 0
                      , hB = void 0
                      , iB = void 0
                      , jB = void 0
                      , kB = void 0
                      , lB = void 0
                      , mB = void 0
                      , nB = void 0
                      , oB = void 0
                      , pB = void 0
                      , qB = void 0
                      , rB = void 0
                      , sB = void 0
                      , tB = void 0
                      , uB = void 0
                      , vB = void 0
                      , wB = void 0
                      , xB = void 0
                      , yB = ha[0];
                    if (yB.length === 0)
                        throw Error("Cannot decode empty core segment string.");
                    var $m = LD(yB, qE)
                      , hs = JD($m.slice(0, 6));
                    $m = $m.slice(6);
                    if (hs !== 1)
                        throw Error("Unable to decode unsupported USNat Section specification version " + hs + " - only version 1 is supported.");
                    for (var is = 0, va = [], js = 0; js < pE.length; js++) {
                        var zB = pE[js];
                        va.push(JD($m.slice(is, is + zB)));
                        is += zB
                    }
                    var mO = new lE;
                    xB = mi(mO, 1, hs);
                    var nO = va.shift();
                    wB = F(xB, 2, nO);
                    var oO = va.shift();
                    vB = F(wB, 3, oO);
                    var pO = va.shift();
                    uB = F(vB, 4, pO);
                    var qO = va.shift();
                    tB = F(uB, 5, qO);
                    var rO = va.shift();
                    sB = F(tB, 6, rO);
                    var sO = va.shift();
                    rB = F(sB, 7, sO);
                    var tO = va.shift();
                    qB = F(rB, 8, tO);
                    var uO = va.shift();
                    pB = F(qB, 9, uO);
                    var vO = va.shift();
                    oB = F(pB, 10, vO);
                    var wO = new kE
                      , xO = va.shift();
                    nB = F(wO, 1, xO);
                    var yO = va.shift();
                    mB = F(nB, 2, yO);
                    var zO = va.shift();
                    lB = F(mB, 3, zO);
                    var AO = va.shift();
                    kB = F(lB, 4, AO);
                    var BO = va.shift();
                    jB = F(kB, 5, BO);
                    var CO = va.shift();
                    iB = F(jB, 6, CO);
                    var DO = va.shift();
                    hB = F(iB, 7, DO);
                    var EO = va.shift();
                    gB = F(hB, 8, EO);
                    var FO = va.shift();
                    fB = F(gB, 9, FO);
                    var GO = va.shift();
                    eB = F(fB, 10, GO);
                    var HO = va.shift();
                    dB = F(eB, 11, HO);
                    var IO = va.shift();
                    vj = F(dB, 12, IO);
                    uj = C(oB, kE, 11, vj);
                    var JO = new jE
                      , KO = va.shift();
                    tj = F(JO, 1, KO);
                    var LO = va.shift();
                    sj = F(tj, 2, LO);
                    ob = C(uj, jE, 12, sj);
                    var MO = va.shift();
                    Se = F(ob, 13, MO);
                    var NO = va.shift();
                    fd = F(Se, 14, NO);
                    var OO = va.shift();
                    ed = F(fd, 15, OO);
                    var PO = va.shift();
                    var AB = Qa = F(ed, 16, PO);
                    if (ha.length === 1)
                        var BB = oE(AB);
                    else {
                        var QO = oE(AB)
                          , CB = void 0
                          , DB = void 0
                          , EB = void 0
                          , FB = ha[1];
                        if (FB.length === 0)
                            throw Error("Cannot decode empty GPC segment string.");
                        var GB = LD(FB, 3)
                          , an = JD(GB.slice(0, 2));
                        if (an < 0 || an > 1)
                            throw Error("Attempting to decode unknown GPC segment subsection type " + an + ".");
                        EB = an + 1;
                        var RO = JD(GB.slice(2, 3))
                          , SO = new mE;
                        DB = F(SO, 2, EB);
                        CB = ki(DB, 1, !!RO);
                        BB = C(QO, mE, 2, CB)
                    }
                    var ks = ue(Ph(BB, lE, 1));
                    if (di(ks, 8) === 1 || di(ks, 9) === 1 || di(ks, 10) === 1)
                        return !0;
                    break;
                case 8:
                    if (Ga.length === 0)
                        throw Error("Cannot decode empty USCA section string.");
                    var wj = Ga.split(".");
                    if (wj.length > 2)
                        throw Error("Expected at most 1 sub-section but got " + (wj.length - 1) + " when decoding " + Ga + ".");
                    var TO = void 0
                      , HB = void 0
                      , IB = void 0
                      , JB = void 0
                      , KB = void 0
                      , LB = void 0
                      , MB = void 0
                      , NB = void 0
                      , OB = void 0
                      , PB = void 0
                      , QB = void 0
                      , RB = void 0
                      , SB = void 0
                      , TB = void 0
                      , UB = void 0
                      , VB = void 0
                      , WB = void 0
                      , XB = void 0
                      , YB = void 0
                      , ZB = void 0
                      , $B = void 0
                      , aC = void 0
                      , bC = void 0
                      , cC = wj[0];
                    if (cC.length === 0)
                        throw Error("Cannot decode empty core segment string.");
                    var bn = LD(cC, UD)
                      , ls = JD(bn.slice(0, 6));
                    bn = bn.slice(6);
                    if (ls !== 1)
                        throw Error("Unable to decode unsupported USCA Section specification version " + ls + " - only version 1 is supported.");
                    for (var ms = 0, Ua = [], ns = 0; ns < TD.length; ns++) {
                        var dC = TD[ns];
                        Ua.push(JD(bn.slice(ms, ms + dC)));
                        ms += dC
                    }
                    var UO = new PD;
                    bC = mi(UO, 1, ls);
                    var VO = Ua.shift();
                    aC = F(bC, 2, VO);
                    var WO = Ua.shift();
                    $B = F(aC, 3, WO);
                    var XO = Ua.shift();
                    ZB = F($B, 4, XO);
                    var YO = Ua.shift();
                    YB = F(ZB, 5, YO);
                    var ZO = Ua.shift();
                    XB = F(YB, 6, ZO);
                    var $O = new OD
                      , aP = Ua.shift();
                    WB = F($O, 1, aP);
                    var bP = Ua.shift();
                    VB = F(WB, 2, bP);
                    var cP = Ua.shift();
                    UB = F(VB, 3, cP);
                    var dP = Ua.shift();
                    TB = F(UB, 4, dP);
                    var eP = Ua.shift();
                    SB = F(TB, 5, eP);
                    var fP = Ua.shift();
                    RB = F(SB, 6, fP);
                    var gP = Ua.shift();
                    QB = F(RB, 7, gP);
                    var hP = Ua.shift();
                    PB = F(QB, 8, hP);
                    var iP = Ua.shift();
                    OB = F(PB, 9, iP);
                    NB = C(XB, OD, 7, OB);
                    var jP = new ND
                      , kP = Ua.shift();
                    MB = F(jP, 1, kP);
                    var lP = Ua.shift();
                    LB = F(MB, 2, lP);
                    KB = C(NB, ND, 8, LB);
                    var mP = Ua.shift();
                    JB = F(KB, 9, mP);
                    var nP = Ua.shift();
                    IB = F(JB, 10, nP);
                    var oP = Ua.shift();
                    HB = F(IB, 11, oP);
                    var pP = Ua.shift();
                    var eC = TO = F(HB, 12, pP);
                    if (wj.length === 1)
                        var fC = SD(eC);
                    else {
                        var qP = SD(eC)
                          , gC = void 0
                          , hC = void 0
                          , iC = void 0
                          , jC = wj[1];
                        if (jC.length === 0)
                            throw Error("Cannot decode empty GPC segment string.");
                        var kC = LD(jC, 3)
                          , cn = JD(kC.slice(0, 2));
                        if (cn < 0 || cn > 1)
                            throw Error("Attempting to decode unknown GPC segment subsection type " + cn + ".");
                        iC = cn + 1;
                        var rP = JD(kC.slice(2, 3))
                          , sP = new QD;
                        hC = F(sP, 2, iC);
                        gC = ki(hC, 1, !!rP);
                        fC = C(qP, QD, 2, gC)
                    }
                    var lC = ue(Ph(fC, PD, 1));
                    if (di(lC, 5) === 1 || di(lC, 6) === 1)
                        return !0;
                    break;
                case 9:
                    if (Ga.length === 0)
                        throw Error("Cannot decode empty USVA section string.");
                    var dn = LD(Ga, uE)
                      , os = JD(dn.slice(0, 6));
                    dn = dn.slice(6);
                    if (os !== 1)
                        throw Error("Unable to decode unsupported USVA Section specification version " + os + " - only version 1 is supported.");
                    for (var ps = 0, ub = [], qs = 0; qs < tE.length; qs++) {
                        var mC = tE[qs];
                        ub.push(JD(dn.slice(ps, ps + mC)));
                        ps += mC
                    }
                    var tP = os
                      , uP = new sE
                      , vP = mi(uP, 1, tP)
                      , wP = ub.shift()
                      , xP = F(vP, 2, wP)
                      , yP = ub.shift()
                      , zP = F(xP, 3, yP)
                      , AP = ub.shift()
                      , BP = F(zP, 4, AP)
                      , CP = ub.shift()
                      , DP = F(BP, 5, CP)
                      , EP = ub.shift();
                    var FP = F(DP, 6, EP);
                    var GP = new rE
                      , HP = ub.shift()
                      , IP = F(GP, 1, HP)
                      , JP = ub.shift()
                      , KP = F(IP, 2, JP)
                      , LP = ub.shift()
                      , MP = F(KP, 3, LP)
                      , NP = ub.shift()
                      , OP = F(MP, 4, NP)
                      , PP = ub.shift()
                      , QP = F(OP, 5, PP)
                      , RP = ub.shift()
                      , SP = F(QP, 6, RP)
                      , TP = ub.shift()
                      , UP = F(SP, 7, TP)
                      , VP = ub.shift();
                    var WP = F(UP, 8, VP);
                    var XP = C(FP, rE, 7, WP)
                      , YP = ub.shift()
                      , ZP = F(XP, 8, YP)
                      , $P = ub.shift()
                      , aQ = F(ZP, 9, $P)
                      , bQ = ub.shift()
                      , cQ = F(aQ, 10, bQ)
                      , dQ = ub.shift()
                      , nC = F(cQ, 11, dQ);
                    if (di(nC, 5) === 1 || di(nC, 6) === 1)
                        return !0;
                    break;
                case 10:
                    if (Ga.length === 0)
                        throw Error("Cannot decode empty USCO section string.");
                    var xj = Ga.split(".");
                    if (xj.length > 2)
                        throw Error("Expected at most 2 segments but got " + xj.length + " when decoding " + Ga + ".");
                    var eQ = void 0
                      , oC = void 0
                      , pC = void 0
                      , qC = void 0
                      , rC = void 0
                      , sC = void 0
                      , tC = void 0
                      , uC = void 0
                      , vC = void 0
                      , wC = void 0
                      , xC = void 0
                      , yC = void 0
                      , zC = void 0
                      , AC = void 0
                      , BC = void 0
                      , CC = void 0
                      , DC = void 0
                      , EC = void 0
                      , FC = xj[0];
                    if (FC.length === 0)
                        throw Error("Cannot decode empty core segment string.");
                    var en = LD(FC, aE)
                      , rs = JD(en.slice(0, 6));
                    en = en.slice(6);
                    if (rs !== 1)
                        throw Error("Unable to decode unsupported USCO Section specification version " + rs + " - only version 1 is supported.");
                    for (var ts = 0, Ab = [], us = 0; us < $D.length; us++) {
                        var GC = $D[us];
                        Ab.push(JD(en.slice(ts, ts + GC)));
                        ts += GC
                    }
                    var fQ = new WD;
                    EC = mi(fQ, 1, rs);
                    var gQ = Ab.shift();
                    DC = F(EC, 2, gQ);
                    var hQ = Ab.shift();
                    CC = F(DC, 3, hQ);
                    var iQ = Ab.shift();
                    BC = F(CC, 4, iQ);
                    var jQ = Ab.shift();
                    AC = F(BC, 5, jQ);
                    var kQ = Ab.shift();
                    zC = F(AC, 6, kQ);
                    var lQ = new VD
                      , mQ = Ab.shift();
                    yC = F(lQ, 1, mQ);
                    var nQ = Ab.shift();
                    xC = F(yC, 2, nQ);
                    var oQ = Ab.shift();
                    wC = F(xC, 3, oQ);
                    var pQ = Ab.shift();
                    vC = F(wC, 4, pQ);
                    var qQ = Ab.shift();
                    uC = F(vC, 5, qQ);
                    var rQ = Ab.shift();
                    tC = F(uC, 6, rQ);
                    var sQ = Ab.shift();
                    sC = F(tC, 7, sQ);
                    rC = C(zC, VD, 7, sC);
                    var tQ = Ab.shift();
                    qC = F(rC, 8, tQ);
                    var uQ = Ab.shift();
                    pC = F(qC, 9, uQ);
                    var vQ = Ab.shift();
                    oC = F(pC, 10, vQ);
                    var wQ = Ab.shift();
                    var HC = eQ = F(oC, 11, wQ);
                    if (xj.length === 1)
                        var IC = ZD(HC);
                    else {
                        var xQ = ZD(HC)
                          , JC = void 0
                          , KC = void 0
                          , LC = void 0
                          , MC = xj[1];
                        if (MC.length === 0)
                            throw Error("Cannot decode empty GPC segment string.");
                        var NC = LD(MC, 3)
                          , fn = JD(NC.slice(0, 2));
                        if (fn < 0 || fn > 1)
                            throw Error("Attempting to decode unknown GPC segment subsection type " + fn + ".");
                        LC = fn + 1;
                        var yQ = JD(NC.slice(2, 3))
                          , zQ = new XD;
                        KC = F(zQ, 2, LC);
                        JC = ki(KC, 1, !!yQ);
                        IC = C(xQ, XD, 2, JC)
                    }
                    var OC = ue(Ph(IC, WD, 1));
                    if (di(OC, 5) === 1 || di(OC, 6) === 1)
                        return !0;
                    break;
                case 12:
                    if (Ga.length === 0)
                        throw Error("Cannot decode empty usct section string.");
                    var yj = Ga.split(".");
                    if (yj.length > 2)
                        throw Error("Expected at most 2 segments but got " + yj.length + " when decoding " + Ga + ".");
                    var AQ = void 0
                      , PC = void 0
                      , QC = void 0
                      , RC = void 0
                      , SC = void 0
                      , TC = void 0
                      , UC = void 0
                      , VC = void 0
                      , WC = void 0
                      , XC = void 0
                      , YC = void 0
                      , ZC = void 0
                      , $C = void 0
                      , aD = void 0
                      , bD = void 0
                      , cD = void 0
                      , dD = void 0
                      , eD = void 0
                      , fD = void 0
                      , gD = void 0
                      , hD = void 0
                      , iD = void 0
                      , jD = yj[0];
                    if (jD.length === 0)
                        throw Error("Cannot decode empty core segment string.");
                    var gn = LD(jD, iE)
                      , vs = JD(gn.slice(0, 6));
                    gn = gn.slice(6);
                    if (vs !== 1)
                        throw Error("Unable to decode unsupported USCT Section specification version " + vs + " - only version 1 is supported.");
                    for (var ws = 0, bb = [], xs = 0; xs < hE.length; xs++) {
                        var kD = hE[xs];
                        bb.push(JD(gn.slice(ws, ws + kD)));
                        ws += kD
                    }
                    var BQ = new dE;
                    iD = mi(BQ, 1, vs);
                    var CQ = bb.shift();
                    hD = F(iD, 2, CQ);
                    var DQ = bb.shift();
                    gD = F(hD, 3, DQ);
                    var EQ = bb.shift();
                    fD = F(gD, 4, EQ);
                    var FQ = bb.shift();
                    eD = F(fD, 5, FQ);
                    var GQ = bb.shift();
                    dD = F(eD, 6, GQ);
                    var HQ = new cE
                      , IQ = bb.shift();
                    cD = F(HQ, 1, IQ);
                    var JQ = bb.shift();
                    bD = F(cD, 2, JQ);
                    var KQ = bb.shift();
                    aD = F(bD, 3, KQ);
                    var LQ = bb.shift();
                    $C = F(aD, 4, LQ);
                    var MQ = bb.shift();
                    ZC = F($C, 5, MQ);
                    var NQ = bb.shift();
                    YC = F(ZC, 6, NQ);
                    var OQ = bb.shift();
                    XC = F(YC, 7, OQ);
                    var PQ = bb.shift();
                    WC = F(XC, 8, PQ);
                    VC = C(dD, cE, 7, WC);
                    var QQ = new bE
                      , RQ = bb.shift();
                    UC = F(QQ, 1, RQ);
                    var SQ = bb.shift();
                    TC = F(UC, 2, SQ);
                    var TQ = bb.shift();
                    SC = F(TC, 3, TQ);
                    RC = C(VC, bE, 8, SC);
                    var UQ = bb.shift();
                    QC = F(RC, 9, UQ);
                    var VQ = bb.shift();
                    PC = F(QC, 10, VQ);
                    var WQ = bb.shift();
                    var lD = AQ = F(PC, 11, WQ);
                    if (yj.length === 1)
                        var mD = gE(lD);
                    else {
                        var XQ = gE(lD)
                          , nD = void 0
                          , oD = void 0
                          , pD = void 0
                          , qD = yj[1];
                        if (qD.length === 0)
                            throw Error("Cannot decode empty GPC segment string.");
                        var rD = LD(qD, 3)
                          , hn = JD(rD.slice(0, 2));
                        if (hn < 0 || hn > 1)
                            throw Error("Attempting to decode unknown GPC segment subsection type " + hn + ".");
                        pD = hn + 1;
                        var YQ = JD(rD.slice(2, 3))
                          , ZQ = new eE;
                        oD = F(ZQ, 2, pD);
                        nD = ki(oD, 1, !!YQ);
                        mD = C(XQ, eE, 2, nD)
                    }
                    var sD = ue(Ph(mD, dE, 1));
                    if (di(sD, 5) === 1 || di(sD, 6) === 1)
                        return !0
                }
            }
        }
        return !1
    }
      , $F = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 2,
            gppString: "GPP_ERROR_STRING_UNAVAILABLE",
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , YF = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , ZF = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    wF([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21]);
    wF([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21]);
    wF([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21]);
    new vF;
    var bG = function(a, b) {
        this.j = this.B = this.o = "";
        this.I = null;
        this.L = this.l = "";
        this.A = !1;
        var c;
        a instanceof bG ? (this.A = b !== void 0 ? b : a.A,
        cG(this, a.o),
        this.B = a.B,
        this.j = a.j,
        dG(this, a.I),
        this.l = a.l,
        eG(this, fG(a.g)),
        this.L = a.D()) : a && (c = String(a).match(nm)) ? (this.A = !!b,
        cG(this, c[1] || "", !0),
        this.B = gG(c[2] || ""),
        this.j = gG(c[3] || "", !0),
        dG(this, c[4]),
        this.l = gG(c[5] || "", !0),
        eG(this, c[6] || "", !0),
        this.L = gG(c[7] || "")) : (this.A = !!b,
        this.g = new hG(null,this.A))
    };
    bG.prototype.toString = function() {
        var a = []
          , b = this.o;
        b && a.push(iG(b, jG, !0), ":");
        var c = this.j;
        if (c || b == "file")
            a.push("//"),
            (b = this.B) && a.push(iG(b, jG, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.I,
            c != null && a.push(":", String(c));
        if (c = this.l)
            this.j && c.charAt(0) != "/" && a.push("/"),
            a.push(iG(c, c.charAt(0) == "/" ? kG : lG, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", iG(c, mG));
        return a.join("")
    }
    ;
    bG.prototype.resolve = function(a) {
        var b = this.F()
          , c = !!a.o;
        c ? cG(b, a.o) : c = !!a.B;
        c ? b.B = a.B : c = !!a.j;
        c ? b.j = a.j : c = a.I != null;
        var d = a.l;
        if (c)
            dG(b, a.I);
        else if (c = !!a.l) {
            if (d.charAt(0) != "/")
                if (this.j && !this.l)
                    d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/");
                    e != -1 && (d = b.l.slice(0, e + 1) + d)
                }
            e = d;
            if (e == ".." || e == ".")
                d = "";
            else if (Kb(e, "./") || Kb(e, "/.")) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.l = d : c = a.g.toString() !== "";
        c ? eG(b, fG(a.g)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    }
    ;
    bG.prototype.F = function() {
        return new bG(this)
    }
    ;
    var cG = function(a, b, c) {
        a.o = c ? gG(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }
      , dG = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0)
                throw Error("Bad port number " + b);
            a.I = b
        } else
            a.I = null
    }
      , eG = function(a, b, c) {
        b instanceof hG ? (a.g = b,
        nG(a.g, a.A)) : (c || (b = iG(b, oG)),
        a.g = new hG(b,a.A))
    }
      , pG = function(a, b, c) {
        a.g.set(b, c);
        return a
    };
    bG.prototype.D = function() {
        return this.L
    }
    ;
    var qG = function(a) {
        return a instanceof bG ? a.F() : new bG(a,void 0)
    }
      , gG = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , iG = function(a, b, c) {
        return typeof a === "string" ? (a = encodeURI(a).replace(b, rG),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , rG = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , jG = /[#\/\?@]/g
      , lG = /[#\?:]/g
      , kG = /[#\?]/g
      , oG = /[#\?@]/g
      , mG = /#/g
      , hG = function(a, b) {
        this.j = this.g = null;
        this.l = a || null;
        this.o = !!b
    }
      , sG = function(a) {
        a.g || (a.g = new Map,
        a.j = 0,
        a.l && pm(a.l, function(b, c) {
            a.add(Ml(b), c)
        }))
    };
    hG.prototype.add = function(a, b) {
        sG(this);
        this.l = null;
        a = tG(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j = rb(this.j) + 1;
        return this
    }
    ;
    hG.prototype.remove = function(a) {
        sG(this);
        a = tG(this, a);
        return this.g.has(a) ? (this.l = null,
        this.j = rb(this.j) - this.g.get(a).length,
        this.g.delete(a)) : !1
    }
    ;
    hG.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    }
    ;
    hG.prototype.isEmpty = function() {
        sG(this);
        return this.j == 0
    }
    ;
    var uG = function(a, b) {
        sG(a);
        b = tG(a, b);
        return a.g.has(b)
    };
    m = hG.prototype;
    m.forEach = function(a, b) {
        sG(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    m.Oc = function() {
        sG(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    m.Kb = function(a) {
        sG(this);
        var b = [];
        if (typeof a === "string")
            uG(this, a) && (b = b.concat(this.g.get(tG(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    m.set = function(a, b) {
        sG(this);
        this.l = null;
        a = tG(this, a);
        uG(this, a) && (this.j = rb(this.j) - this.g.get(a).length);
        this.g.set(a, [b]);
        this.j = rb(this.j) + 1;
        return this
    }
    ;
    m.get = function(a, b) {
        if (!a)
            return b;
        a = this.Kb(a);
        return a.length > 0 ? String(a[0]) : b
    }
    ;
    m.toString = function() {
        if (this.l)
            return this.l;
        if (!this.g)
            return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Kb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    }
    ;
    var fG = function(a) {
        var b = new hG;
        b.l = a.l;
        a.g && (b.g = new Map(a.g),
        b.j = a.j);
        return b
    }
      , tG = function(a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b
    }
      , nG = function(a, b) {
        b && !a.o && (sG(a),
        a.l = null,
        a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            this.remove(e),
            c.length > 0 && (this.l = null,
            this.g.set(tG(this, e), sc(c)),
            this.j = rb(this.j) + c.length))
        }, a));
        a.o = b
    };
    var vG, wG, xG, yG = function() {
        return y.navigator ? y.navigator.userAgent : ""
    }, zG = Kb(yG(), "(iPad") || Kb(yG(), "(Macintosh") || Kb(yG(), "(iPod") || Kb(yG(), "(iPhone");
    Fl("google3.javascript.ads.imalib.common.host_utils");
    var AG = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ")
      , BG = ["c.googlesyndication.com"];
    function CG(a, b) {
        b = b === void 0 ? window.location.protocol : b;
        var c = !1;
        a == null || !a.startsWith("http") || (a == null ? 0 : a.startsWith("https")) ? c = !1 : DG(a, BG) ? c = !1 : b.includes("https") && DG(a, AG) && (c = !0);
        return c ? (a = new bG(a),
        K(J.getInstance(), "htp", "1"),
        cG(a, "https"),
        a.toString()) : a
    }
    function EG(a) {
        if (!a)
            return !1;
        try {
            var b = typeof a === "string" ? new bG(a) : a;
            return b.o == "gcache" && !!b.g.get("url")
        } catch (c) {
            return !1
        }
    }
    function FG(a) {
        try {
            var b = typeof a === "string" ? new bG(a) : a;
            if (EG(b)) {
                var c = b.g.get("url");
                return typeof c === "undefined" ? null : c
            }
        } catch (d) {}
        return null
    }
    function DG(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)","i")).test(a)
    }
    ;var GG = -1;
    function HG(a, b) {
        b = b != null ? b : "";
        Cc && (b = "");
        if (!Hb(Pl(a))) {
            if (a instanceof Ak || !xF.test(a))
                var c = a;
            else
                Pk("Mobile App Ads Url type to be enabled for sonic"),
                c = new Ak(a);
            if (c instanceof Ak)
                var d = c;
            else {
                d = d === void 0 ? Ek : d;
                a: if (d = d === void 0 ? Ek : d,
                a instanceof Ak)
                    d = a;
                else {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof Ck && e.bh(a)) {
                            d = new Ak(a);
                            break a
                        }
                    }
                    d = void 0
                }
                d === void 0 && Ik(a.toString());
                d = d || Bk
            }
            a = b;
            b = window;
            if (d instanceof Ak)
                if (d instanceof Ak)
                    d = d.g;
                else
                    throw Error("Unexpected type when unwrapping SafeUrl, got '" + d + "' of type '" + typeof d + "'");
            else
                (c = !Gk.test(d)) && Ik(d),
                d = c ? void 0 : d;
            d !== void 0 && b.open(d, "_blank", a)
        }
    }
    ;function IG(a, b) {
        for (var c; !(c = a.next()).done; )
            b(c.value)
    }
    var JG = function(a, b) {
        this.g = a[y.Symbol.iterator]();
        this.j = b
    };
    JG.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    JG.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    var KG = function(a, b) {
        return new JG(a,b)
    };
    var LG = function(a, b) {
        var c = new Set(a);
        IG(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var MG = new Map
      , NG = function() {
        this.j = this.g = null
    };
    function OG(a, b, c, d) {
        var e = Pt(a);
        Tk(b, e) ? (e = setTimeout(function() {
            return OG(a, b, c, d)
        }, 200),
        d.j = e) : (PG(d),
        c(e))
    }
    function QG(a) {
        var b = new NG, c = new Promise(function(f) {
            var g = Pt(a);
            if ("ResizeObserver"in window) {
                var h = new ResizeObserver(function(k) {
                    window.requestAnimationFrame(function() {
                        for (var l = new Sk(0,0), n = u(k), p = n.next(); !p.done; p = n.next())
                            if (p = p.value,
                            p.contentBoxSize ? (p = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize,
                            l.width = Math.floor(p.inlineSize),
                            l.height = Math.floor(p.blockSize)) : (l.width = Math.floor(p.contentRect.width),
                            l.height = Math.floor(p.contentRect.height)),
                            !Tk(g, l))
                                return PG(b),
                                f(l)
                    })
                }
                );
                b.g = h;
                h.observe(a)
            } else
                OG(a, g, f, b)
        }
        ), d, e = (d = MG.get(c)) != null ? d : new Set;
        e.add(b);
        MG.set(c, e);
        return c
    }
    function RG(a, b) {
        b = b === void 0 ? new Sk(1,1) : b;
        var c = function(g) {
            var h = QG(a), k, l = (k = MG.get(g)) != null ? k : new Set, n;
            k = (n = MG.get(h)) != null ? n : new Set;
            MG.set(g, LG(l, k));
            return h
        }, d = function(g, h) {
            c(g).then(function(k) {
                return b.width <= k.width && b.height <= k.height ? (SG(g),
                h(k)) : d(g, h)
            })
        }, e, f = new Promise(function(g) {
            e = g
        }
        );
        d(f, e);
        return f
    }
    function SG(a) {
        a = MG.get(a);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            PG(b.value)
    }
    function PG(a) {
        a.j && window.clearTimeout(a.j);
        a.g && (a.g.disconnect(),
        a.g = null)
    }
    ;function TG(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    function UG(a, b) {
        var c;
        if (c = c === void 0 ? typeof omidExports === "undefined" ? null : omidExports : c)
            a = a.split("."),
            a.slice(0, a.length - 1).reduce(TG, c)[a[a.length - 1]] = b
    }
    ;var VG = new Map([[2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]], [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]], [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]], [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]], [6, []], [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]], [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]], [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);
    UG("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = u(VG.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = u(VG.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a))
                    return c
        }
        return 1
    });
    UG("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    var WG = /OS (\S+) like/
      , XG = /Android ([\d\.]+)/;
    function YG(a, b) {
        a = (a = a.exec(Qb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return Nb(a, b) >= 0
    }
    var ZG = function() {
        return Jc || Gc && "ontouchstart"in document.documentElement
    }
      , $G = function(a) {
        return Mc && YG(WG, a)
    }
      , aH = function(a) {
        return (a = a === void 0 ? null : a) && typeof a.getAttribute === "function" ? a.getAttribute("playsinline") ? !0 : !1 : !1
    };
    var bH = function(a) {
        R.call(this);
        this.j = a;
        this.A = this.B = !1;
        this.C = this.D = 0;
        this.g = new Uz(1E3);
        Hu(this, this.g);
        az(this.g, "tick", this.H, !1, this);
        az(this.j, "pause", this.o, !1, this);
        az(this.j, "playing", this.o, !1, this);
        az(this.j, "ended", this.o, !1, this);
        az(this.j, "timeupdate", this.o, !1, this);
        this.F = Fl("google3.javascript.ads.imalib.common.playback_status_tracker")
    };
    w(bH, R);
    var cH = function(a) {
        var b;
        return (b = a.j.currentTime) != null ? b : a.j.getCurrentTime()
    };
    bH.prototype.o = function(a) {
        switch (a.type) {
        case "playing":
            dH(this);
            break;
        case "pause":
        case "ended":
            this.g.enabled && this.g.stop();
            break;
        case "timeupdate":
            !this.B && cH(this) > 0 && (this.B = !0,
            dH(this))
        }
    }
    ;
    var dH = function(a) {
        !a.g.enabled && a.B && (a.D = cH(a) * 1E3,
        a.C = Date.now(),
        a.A = !1,
        a.g.start())
    };
    bH.prototype.H = function() {
        var a = Date.now()
          , b = a - this.C
          , c = cH(this) * 1E3
          , d = c - this.D;
        d < b * .5 ? this.A || (Jl(this.F, "Playback Stalled. Played time: " + d + ". Elapsed time: " + b + "."),
        this.A = !0,
        this.dispatchEvent("playbackStalled")) : this.A = !1;
        this.D = c;
        this.C = a
    }
    ;
    var eH = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" ")
      , fH = /\bocr\b/;
    function gH(a) {
        if (Hb(Pl(a)) || Cc && a.length > 2048)
            return !1;
        try {
            if ((new bG(a)).D().match(fH))
                return !0
        } catch (b) {}
        return eH.find(function(b) {
            return a.match(b) != null
        }) != null
    }
    ;function hH(a, b) {
        return Hb(b) ? !1 : (new RegExp(a)).test(b)
    }
    function iH(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            d.length == 2 && (c = Ib(d[0]),
            d = Ib(d[1]),
            c.length > 0 && (b[c] = d))
        });
        return b
    }
    function jH(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a)
            return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a))
            return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    }
    ;var kH = function() {
        this.g = Date.now()
    };
    kH.prototype.reset = function() {
        this.g = Date.now()
    }
    ;
    var lH = function(a) {
        a = a.g + 5E3 - Date.now();
        return a > 0 ? a : 0
    };
    var mH = function(a, b) {
        this.url = a;
        this.g = b === void 0 ? null : b
    };
    var nH = function(a) {
        switch (a) {
        case 0:
            return "No Error";
        case 1:
            return "Access denied to content document";
        case 2:
            return "File not found";
        case 3:
            return "Firefox silently errored";
        case 4:
            return "Application custom error";
        case 5:
            return "An exception occurred";
        case 6:
            return "Http response at 400 or 500 level";
        case 7:
            return "Request was aborted";
        case 8:
            return "Request timed out";
        case 9:
            return "The resource is not available offline";
        default:
            return "Unrecognized error code"
        }
    };
    var oH = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errorCode = a
    };
    w(oH, Error);
    var pH = function(a) {
        P.call(this);
        this.A = a;
        this.l = {}
    };
    gb(pH, P);
    var qH = [];
    pH.prototype.listen = function(a, b, c, d) {
        return rH(this, a, b, c, d)
    }
    ;
    var rH = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (qH[0] = c.toString()),
        c = qH);
        for (var g = 0; g < c.length; g++) {
            var h = az(b, c[g], d || a.handleEvent, e || !1, f || a.A || a);
            if (!h)
                break;
            a.l[h.key] = h
        }
        return a
    };
    pH.prototype.qc = function(a, b, c, d) {
        return sH(this, a, b, c, d)
    }
    ;
    var sH = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                sH(a, b, c[g], d, e, f);
        else {
            b = $y(b, c, d || a.handleEvent, e, f || a.A || a);
            if (!b)
                return a;
            a.l[b.key] = b
        }
        return a
    };
    pH.prototype.xb = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.xb(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = Va(d) ? !!d.capture : !!d,
            e = e || this.A || this,
            c = bz(c),
            d = !!d,
            b = Qy(a) ? a.bc(b, c, d, e) : a ? (a = dz(a)) ? a.bc(b, c, d, e) : null : null,
            b && (iz(b),
            delete this.l[b.key])
    }
    ;
    var tH = function(a) {
        Uk(a.l, function(b, c) {
            this.l.hasOwnProperty(c) && iz(b)
        }, a);
        a.l = {}
    };
    pH.prototype.M = function() {
        pH.Ka.M.call(this);
        tH(this)
    }
    ;
    pH.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var uH = function() {};
    uH.prototype.g = null;
    var vH = function(a) {
        var b;
        (b = a.g) || (b = a.g = {});
        return b
    };
    var wH, xH = function() {};
    gb(xH, uH);
    wH = new xH;
    var yH = function(a) {
        R.call(this);
        this.headers = new Map;
        this.ba = a || null;
        this.o = !1;
        this.K = this.g = null;
        this.V = this.H = "";
        this.B = 0;
        this.C = "";
        this.A = this.P = this.F = this.O = !1;
        this.D = 0;
        this.J = null;
        this.Z = "";
        this.U = !1
    };
    gb(yH, R);
    yH.prototype.j = Fl("goog.net.XhrIo");
    var zH = /^https?$/i
      , AH = ["POST", "PUT"]
      , EH = function(a, b, c, d) {
        if (a.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.H + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.H = b;
        a.C = "";
        a.B = 0;
        a.V = c;
        a.O = !1;
        a.o = !0;
        a.g = new XMLHttpRequest;
        a.K = a.ba ? vH(a.ba) : vH(wH);
        a.g.onreadystatechange = db(a.X, a);
        try {
            Kl(a.j, BH(a, "Opening Xhr")),
            a.P = !0,
            a.g.open(c, String(b), !0),
            a.P = !1
        } catch (g) {
            Kl(a.j, BH(a, "Error opening Xhr: " + g.message));
            CH(a, g);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        var e = Array.from(d.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        })
          , f = y.FormData && b instanceof y.FormData;
        !nc(AH, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = u(d);
        for (d = c.next(); !d.done; d = c.next())
            e = u(d.value),
            d = e.next().value,
            e = e.next().value,
            a.g.setRequestHeader(d, e);
        a.Z && (a.g.responseType = a.Z);
        "withCredentials"in a.g && a.g.withCredentials !== a.U && (a.g.withCredentials = a.U);
        try {
            DH(a),
            a.D > 0 && (Kl(a.j, BH(a, "Will abort after " + a.D + "ms if incomplete")),
            a.J = Vz(a.oa, a.D, a)),
            Kl(a.j, BH(a, "Sending request")),
            a.F = !0,
            a.g.send(b),
            a.F = !1
        } catch (g) {
            Kl(a.j, BH(a, "Send error: " + g.message)),
            CH(a, g)
        }
    };
    yH.prototype.oa = function() {
        typeof Oa != "undefined" && this.g && (this.C = "Timed out after " + this.D + "ms, aborting",
        this.B = 8,
        Kl(this.j, BH(this, this.C)),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    var CH = function(a, b) {
        a.o = !1;
        a.g && (a.A = !0,
        a.g.abort(),
        a.A = !1);
        a.C = b;
        a.B = 5;
        FH(a);
        GH(a)
    }
      , FH = function(a) {
        a.O || (a.O = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    yH.prototype.abort = function(a) {
        this.g && this.o && (Kl(this.j, BH(this, "Aborting")),
        this.o = !1,
        this.A = !0,
        this.g.abort(),
        this.A = !1,
        this.B = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        GH(this))
    }
    ;
    yH.prototype.M = function() {
        this.g && (this.o && (this.o = !1,
        this.A = !0,
        this.g.abort(),
        this.A = !1),
        GH(this, !0));
        yH.Ka.M.call(this)
    }
    ;
    yH.prototype.X = function() {
        this.Ga() || (this.P || this.F || this.A ? HH(this) : this.ka())
    }
    ;
    yH.prototype.ka = function() {
        HH(this)
    }
    ;
    var HH = function(a) {
        if (a.o && typeof Oa != "undefined")
            if (a.K[1] && IH(a) == 4 && JH(a) == 2)
                Kl(a.j, BH(a, "Local request error detected and ignored"));
            else if (a.F && IH(a) == 4)
                Vz(a.X, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            IH(a) == 4) {
                Kl(a.j, BH(a, "Request complete"));
                a.o = !1;
                try {
                    var b = JH(a);
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = b === 0) {
                            var f = String(a.H).match(nm)[1] || null;
                            !f && y.self && y.self.location && (f = y.self.location.protocol.slice(0, -1));
                            e = !zH.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d)
                        a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                    else {
                        a.B = 6;
                        try {
                            var g = IH(a) > 2 ? a.g.statusText : ""
                        } catch (h) {
                            Kl(a.j, "Can not get status: " + h.message),
                            g = ""
                        }
                        a.C = g + " [" + JH(a) + "]";
                        FH(a)
                    }
                } finally {
                    GH(a)
                }
            }
    }
      , GH = function(a, b) {
        if (a.g) {
            DH(a);
            var c = a.g
              , d = a.K[0] ? function() {}
            : null;
            a.g = null;
            a.K = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                Hl(a.j, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    }
      , DH = function(a) {
        a.J && (y.clearTimeout(a.J),
        a.J = null)
    };
    yH.prototype.isActive = function() {
        return !!this.g
    }
    ;
    var IH = function(a) {
        return a.g ? a.g.readyState : 0
    }
      , JH = function(a) {
        try {
            return IH(a) > 2 ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }
      , KH = function(a) {
        if (a.g) {
            a: {
                a = a.g.responseText;
                if (y.JSON)
                    try {
                        var b = y.JSON.parse(a);
                        A(typeof b == "object");
                        var c = b;
                        break a
                    } catch (d) {}
                c = So(a)
            }
            return c
        }
    }
      , BH = function(a, b) {
        return b + " [" + a.V + " " + a.H + " " + JH(a) + "]"
    };
    var LH = function() {
        this.g = Fl("UrlLoader")
    };
    LH.prototype.get = function(a) {
        return MH(this, {
            url: a.url,
            timeout: a.timeout,
            withCredentials: a.withCredentials === void 0 ? !0 : a.withCredentials,
            method: "GET",
            headers: a.headers === void 0 ? {} : a.headers
        })
    }
    ;
    var MH = function(a, b) {
        var c = b.url;
        var d = b.timeout;
        var e = b.withCredentials;
        var f = b.method;
        var g = b.content === void 0 ? void 0 : b.content;
        var h = b.headers === void 0 ? {} : b.headers;
        return NH({
            url: c,
            timeout: d,
            withCredentials: e,
            method: f,
            content: g,
            headers: h
        }).then(function(k) {
            return Promise.resolve(k)
        }, function(k) {
            return k instanceof Error && k.message == 6 && e ? (Jl(a.g, "LIMA: Failed! retrying without credentials"),
            NH({
                url: c,
                timeout: d,
                withCredentials: !e,
                method: f,
                content: g,
                headers: h
            })) : Promise.reject(k)
        })
    }
      , NH = function(a) {
        var b = a.url;
        var c = a.timeout;
        var d = a.withCredentials;
        var e = a.method;
        var f = a.content === void 0 ? void 0 : a.content;
        a = a.headers === void 0 ? {} : a.headers;
        var g = new yH;
        g.U = d;
        g.D = Math.max(0, lH(c));
        for (var h in a)
            g.headers.set(h, a[h]);
        var k = new pH;
        return new Promise(function(l, n) {
            k.qc(g, "success", function() {
                a: {
                    if ($t())
                        try {
                            KH(g);
                            var p = "application/json";
                            break a
                        } catch (v) {
                            p = "application/xml";
                            break a
                        }
                    g.g && IH(g) == 4 ? (p = g.g.getResponseHeader("Content-Type"),
                    p = p === null ? void 0 : p) : p = void 0;
                    p = p || ""
                }
                if (p.indexOf("application/json") != -1)
                    try {
                        l(KH(g) || {})
                    } catch (v) {
                        n(new oH(5,JH(g)))
                    }
                else {
                    try {
                        var q = g.g ? g.g.responseXML : null
                    } catch (v) {
                        Kl(g.j, "Can not get responseXML: " + v.message),
                        q = null
                    }
                    if (q == null) {
                        try {
                            var t = g.g ? g.g.responseText : ""
                        } catch (v) {
                            Kl(g.j, "Can not get responseText: " + v.message),
                            t = ""
                        }
                        if (typeof DOMParser != "undefined")
                            q = new DOMParser,
                            t = Co(t),
                            q = q.parseFromString(Lk(t), "application/xml");
                        else
                            throw Error("Your browser does not support loading xml documents");
                    }
                    l(q)
                }
                k.dispose();
                g.dispose()
            });
            k.qc(g, ["error", "timeout"], function() {
                n(new oH(g.B,JH(g)));
                k.dispose();
                g.dispose()
            });
            EH(g, CG(b), e, f)
        }
        )
    };
    z("google.javascript.ads.imalib.common.UrlLoader", LH);
    var OH = RegExp("^(https?:)?\\/\\/ad\\.doubleclick\\.net/ddm/track(imp|clk)");
    function PH() {
        return Rq("attribution-reporting")
    }
    var TH = function(a, b, c, d, e) {
        c = c === void 0 ? !1 : c;
        e = e === void 0 ? null : e;
        try {
            b = (d === void 0 ? 0 : d) ? CG(b, "https") : CG(b);
            OH.test(b) && (b = b.replace("?", ";tpsrc=ima?"),
            e = e || "");
            c = c || gH(b);
            var f = e != null && window.fetch != null;
            if (a.j || f)
                QH(a, b, c, e);
            else {
                var g = PH() ? e : null;
                $t() ? RH(b) : SH(a, b, c, g)
            }
        } catch (h) {}
    }
      , UH = function(a, b) {
        var c = {
            keepalive: !0,
            method: "get",
            redirect: "follow",
            credentials: "include"
        };
        a && (c.referrerPolicy = "no-referrer");
        b ? "setAttributionReporting"in XMLHttpRequest.prototype ? (c.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
        },
        c.mode = "no-cors") : c.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        } : c.mode = "no-cors";
        return c
    }
      , QH = function(a, b, c, d) {
        d = d === void 0 ? null : d;
        K(J.getInstance(), "faa", "1");
        K(J.getInstance(), "alp", d === null ? "0" : "1");
        var e = PH();
        K(J.getInstance(), "arpa", e ? "1" : "0");
        fetch(b, UH(c, d === "" && e)).then(function() {
            K(J.getInstance(), "fas", "1")
        }).catch(function() {
            K(J.getInstance(), "faf", "1");
            a.j = !1;
            var f = d;
            f = PH() ? f : null;
            $t() ? RH(b) : SH(a, b, c, f)
        });
        e && d && fetch(d, UH(c, !0))
    }
      , SH = function(a, b, c, d) {
        var e = new Image
          , f = (a.l++).toString();
        a.g.set(f, e);
        e.onload = e.onerror = function() {
            a.g.delete(f)
        }
        ;
        c && (e.referrerPolicy = "no-referrer");
        d != null && (e.attributionSrc = d);
        e.src = b
    }
      , RH = function(a) {
        var b = new LH;
        b.get.call(b, {
            url: a,
            timeout: new kH
        })
    };
    var VH = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Uh: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        hi: "end",
        ji: "endFullscreen",
        ERROR: "error",
        pi: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        Yi: "mediaLoadTimeout",
        Zi: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        oj: "skip",
        cg: "skipShown",
        STALLED: "stalled",
        Ee: "start",
        TIME_UPDATE: "timeUpdate",
        sj: "timedMetadata",
        Cj: "volumeChange",
        WAITING: "waiting",
        Dj: "windowFocusChanged",
        si: "fullyLoaded"
    };
    var WH = function() {
        R.apply(this, arguments)
    };
    w(WH, R);
    WH.prototype.C = function() {
        return !1
    }
    ;
    WH.prototype.D = function() {
        return -1
    }
    ;
    WH.prototype.F = function() {}
    ;
    var XH = {}
      , YH = (XH[18] = -1,
    XH[22] = -1,
    XH[43] = 350,
    XH[44] = 350,
    XH[45] = 350,
    XH[59] = -1,
    XH[133] = 350,
    XH[134] = 350,
    XH[135] = 350,
    XH[136] = 350,
    XH[139] = 50,
    XH[140] = 50,
    XH[141] = 50,
    XH[160] = 350,
    XH[242] = 150,
    XH[243] = 150,
    XH[244] = 150,
    XH[245] = 150,
    XH[247] = 150,
    XH[249] = 50,
    XH[250] = 50,
    XH[251] = 50,
    XH[278] = 150,
    XH[342] = -1,
    XH[343] = -1,
    XH[344] = -1,
    XH[345] = -1,
    XH[346] = -1,
    XH[347] = -1,
    XH)
      , ZH = {}
      , $H = (ZH[18] = !1,
    ZH[22] = !1,
    ZH[43] = !0,
    ZH[44] = !0,
    ZH[45] = !0,
    ZH[59] = !1,
    ZH[133] = !0,
    ZH[134] = !0,
    ZH[135] = !0,
    ZH[136] = !0,
    ZH[139] = !0,
    ZH[140] = !0,
    ZH[141] = !0,
    ZH[160] = !0,
    ZH[242] = !0,
    ZH[243] = !0,
    ZH[244] = !0,
    ZH[245] = !0,
    ZH[247] = !0,
    ZH[249] = !0,
    ZH[250] = !0,
    ZH[251] = !0,
    ZH[278] = !0,
    ZH[342] = !1,
    ZH[343] = !1,
    ZH[344] = !1,
    ZH[345] = !1,
    ZH[346] = !1,
    ZH[347] = !1,
    ZH)
      , aI = {}
      , bI = (aI[18] = "video/mp4",
    aI[22] = "video/mp4",
    aI[43] = "video/webm",
    aI[44] = "video/webm",
    aI[45] = "video/webm",
    aI[59] = "video/mp4",
    aI[133] = "video/mp4",
    aI[134] = "video/mp4",
    aI[135] = "video/mp4",
    aI[136] = "video/mp4",
    aI[139] = "audio/mp4",
    aI[140] = "audio/mp4",
    aI[141] = "audio/mp4",
    aI[160] = "video/mp4",
    aI[242] = "video/webm",
    aI[243] = "video/webm",
    aI[244] = "video/webm",
    aI[245] = "video/webm",
    aI[247] = "video/webm",
    aI[249] = "audio/webm",
    aI[250] = "audio/webm",
    aI[251] = "audio/webm",
    aI[278] = "video/webm",
    aI[342] = "video/mp4",
    aI[343] = "video/mp4",
    aI[344] = "video/mp4",
    aI[345] = "video/mp4",
    aI[346] = "video/mp4",
    aI[347] = "video/mp4",
    aI)
      , cI = {}
      , dI = (cI[18] = "avc1.42001E, mp4a.40.2",
    cI[22] = "avc1.64001F, mp4a.40.2",
    cI[43] = "vp8, vorbis",
    cI[44] = "vp8, vorbis",
    cI[45] = "vp8, vorbis",
    cI[59] = "avc1.4D001F, mp4a.40.2",
    cI[133] = "avc1.4D401E",
    cI[134] = "avc1.4D401E",
    cI[135] = "avc1.4D401E",
    cI[136] = "avc1.4D401E",
    cI[139] = "mp4a.40.2",
    cI[140] = "mp4a.40.2",
    cI[141] = "mp4a.40.2",
    cI[160] = "avc1.4D401E",
    cI[242] = "vp9",
    cI[243] = "vp9",
    cI[244] = "vp9",
    cI[245] = "vp9",
    cI[247] = "vp9",
    cI[249] = "opus",
    cI[250] = "opus",
    cI[251] = "opus",
    cI[278] = "vp9",
    cI[342] = "avc1.42E01E, mp4a.40.2",
    cI[343] = "avc1.42E01E, mp4a.40.2",
    cI[344] = "avc1.42E01E, mp4a.40.2",
    cI[345] = "avc1.42E01E, mp4a.40.2",
    cI[346] = "avc1.42E01E, mp4a.40.2",
    cI[347] = "avc1.4D001F, mp4a.40.2",
    cI);
    var eI = RegExp("/itag/(\\d+)/");
    function fI(a) {
        var b = Number(rm(a, "itag"));
        return b ? b : (a = a.match(eI)) && a.length === 2 ? Number(a[1]) : null
    }
    function gI(a) {
        var b = bI[a];
        a = dI[a];
        b ? (b = Pl(b).toLowerCase(),
        b = a ? b + '; codecs="' + Pl(a) + '"' : b) : b = "";
        return b
    }
    function hI(a, b) {
        if (typeof CustomEvent === "function")
            return new CustomEvent(a,{
                detail: b
            });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    }
    ;var iI = function(a, b) {
        WH.call(this);
        var c = this;
        this.j = b;
        this.B = this.o = this.g = 0;
        this.A = null;
        this.uri = new bG(a);
        this.state = 0;
        var d;
        this.H = (d = this.j) == null ? void 0 : d.initialize();
        Gu(this, function() {
            Fu(c.j)
        })
    };
    w(iI, WH);
    iI.prototype.D = function() {
        return this.g
    }
    ;
    iI.prototype.C = function() {
        return this.state === 3
    }
    ;
    iI.prototype.F = function(a) {
        this.state === 1 ? (this.g += a,
        this.state = 2) : this.state === 0 && (this.g += a,
        this.state = 1,
        jI(this))
    }
    ;
    var jI = function(a) {
        Ja(function(b) {
            if (b.g == 1)
                return a.state === 2 && (a.state = 1),
                ya(b, kI(a), 4);
            var c = a.B > 3;
            if (c) {
                a.A === null && (a.A = 400);
                var d = hI("media_source_error", {
                    code: a.o > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.A + '" with ' + a.g + " bytes requested and " + a.o + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.o < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0),
            b.g = 0)
        })
    }
      , kI = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                b = a.o + "-" + (a.g - 1);
                pG(a.uri, "range", b);
                if (!a.j) {
                    c.g = 2;
                    break
                }
                return ya(c, a.H, 3);
            case 3:
                return c.return(lI(a));
            case 2:
                return c.l = 4,
                ya(c, mI(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.B++,
                c.g = 0
            }
        })
    }
      , lI = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                return a.j ? ya(c, a.j.dc(a.uri), 2) : c.return(Promise.reject());
            case 2:
                if (b = c.j)
                    return b.za && (a.state = 3),
                    nI(a, b.video),
                    c.return();
                c.l = 3;
                return ya(c, mI(a), 5);
            case 5:
                za(c);
                break;
            case 3:
                Aa(c),
                a.B++,
                c.g = 0
            }
        })
    }
      , mI = function(a) {
        var b, c, d, e, f, g, h;
        return Ja(function(k) {
            if (k.g == 1)
                return b = 0,
                c = a.g - a.o,
                ya(k, fetch(a.uri.toString()), 2);
            d = k.j;
            if (d.status >= 400)
                return K(J.getInstance(), "lvlfes", d.status.toString()),
                a.A = d.status,
                k.return(Promise.reject());
            f = (e = d.body) == null ? void 0 : e.getReader();
            if (!f)
                return Qo("lvlmr"),
                a.A = d.status,
                k.return(Promise.reject());
            g = [];
            h = function() {
                var l, n, p, q, t, v;
                return Ja(function(x) {
                    if (x.g == 1)
                        return ya(x, f.read(), 2);
                    l = x.j;
                    n = l.done;
                    p = l.value;
                    if (n)
                        return q = b < c,
                        oI(a, g, q),
                        x.return();
                    g.push(p);
                    b += (t = p) == null ? void 0 : t.length;
                    nI(a, (v = p) == null ? void 0 : v.buffer);
                    return ya(x, h(), 0)
                })
            }
            ;
            return ya(k, h(), 0)
        })
    }
      , oI = function(a, b, c) {
        c && (a.state = 3,
        nI(a, new ArrayBuffer(0)));
        var d = new Uint8Array(b.reduce(function(g, h) {
            return g + h.length
        }, 0))
          , e = 0;
        b = u(b);
        for (var f = b.next(); !f.done; f = b.next())
            f = f.value,
            d.set(f, e),
            e += f.length;
        a.j && d.buffer.byteLength > 0 && a.j.Dc(d.buffer, a.uri, 0, c)
    }
      , nI = function(a, b) {
        b !== null && (b = b.slice(0),
        a.o += b.byteLength,
        a.dispatchEvent({
            type: "progress",
            Fd: b
        }))
    };
    iI.prototype.M = function() {
        var a;
        ((a = this.j) == null ? 0 : a.Ya()) && this.j.close();
        WH.prototype.M.call(this)
    }
    ;
    var qI = function(a) {
        this.uri = a;
        this.g = pI(a)
    }
      , pI = function(a) {
        return new Map(a.l.split("/").reduce(function(b, c, d, e) {
            d % 2 && b.set(e[d - 1], c);
            return b
        }, new Map))
    }
      , rI = function(a) {
        var b, c;
        return (b = a.uri) == null ? void 0 : (c = b.l) == null ? void 0 : c.startsWith("/videoplayback")
    };
    qI.prototype.getId = function() {
        return sI(this, "id")
    }
    ;
    var tI = function(a) {
        a = a.uri.g.get("range");
        if (!a)
            return null;
        a = a.split("-")[0];
        return !a || isNaN(Number(a)) ? null : Number(a)
    }
      , sI = function(a, b) {
        var c = a.uri.g.get(b);
        return c ? c : (a = a.g.get(b)) ? a : null
    };
    var uI = function() {};
    var vI = ["doubleclick.net"];
    function wI() {
        if (ac() || B("iPad") || B("iPod"))
            var a = !1;
        else if ($b()) {
            if (xG === void 0) {
                a: {
                    if (vG === void 0) {
                        if (zG) {
                            a = Kb(yG(), "Safari");
                            var b = (new bG(window.location.href)).g.Kb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && b.lastIndexOf("afma-", 0) == 0) {
                                    var c = b.lastIndexOf("v");
                                    if (c > -1 && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || b !== "0.0.0") {
                                a = vG = !0;
                                break a
                            }
                        }
                        vG = !1
                    }
                    a = vG
                }
                a || (wG === void 0 && (wG = Kb(yG(), "afma-sdk-a") ? !0 : !1),
                a = wG);
                xG = a
            }
            a = xG ? !0 : lm() ? !1 : xI()
        } else
            a = !1;
        return a
    }
    function xI() {
        var a = !1
          , b = (new bG(window.location.href)).j;
        vI.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }
    ;var yI, BI = function(a, b, c) {
        if (typeof a === "number")
            var d = {
                name: zI(a)
            };
        else
            d = a,
            a = AI(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        ib.call(this, b)
    };
    gb(BI, ib);
    BI.prototype.getName = function() {
        return this.g.name || ""
    }
    ;
    var CI = {
        eg: 1,
        ej: 2,
        NOT_FOUND_ERR: 3,
        Lf: 4,
        Of: 5,
        fj: 6,
        dg: 7,
        ABORT_ERR: 8,
        ag: 9,
        wj: 10,
        TIMEOUT_ERR: 11,
        Zf: 12,
        INVALID_ACCESS_ERR: 13,
        INVALID_STATE_ERR: 14
    }
      , DI = (y.g || y.j || CI).eg
      , EI = (y.g || y.j || CI).NOT_FOUND_ERR
      , FI = (y.g || y.j || CI).Lf
      , GI = (y.g || y.j || CI).Of
      , HI = (y.g || y.j || CI).dg
      , II = (y.g || y.j || CI).ABORT_ERR
      , JI = (y.g || y.j || CI).ag
      , KI = (y.g || y.j || CI).TIMEOUT_ERR
      , LI = (y.g || y.j || CI).Zf
      , MI = (y.DOMException || CI).INVALID_ACCESS_ERR
      , NI = (y.DOMException || CI).INVALID_STATE_ERR
      , AI = function(a) {
        switch (a) {
        case "UnknownError":
            return DI;
        case "NotFoundError":
            return EI;
        case "ConstraintError":
            return FI;
        case "DataError":
            return GI;
        case "TransactionInactiveError":
            return HI;
        case "AbortError":
            return II;
        case "ReadOnlyError":
            return JI;
        case "TimeoutError":
            return KI;
        case "QuotaExceededError":
            return LI;
        case "InvalidAccessError":
            return MI;
        case "InvalidStateError":
            return NI;
        default:
            return DI
        }
    }
      , zI = function(a) {
        switch (a) {
        case DI:
            return "UnknownError";
        case EI:
            return "NotFoundError";
        case FI:
            return "ConstraintError";
        case GI:
            return "DataError";
        case HI:
            return "TransactionInactiveError";
        case II:
            return "AbortError";
        case JI:
            return "ReadOnlyError";
        case KI:
            return "TimeoutError";
        case LI:
            return "QuotaExceededError";
        case MI:
            return "InvalidAccessError";
        case NI:
            return "InvalidStateError";
        default:
            return "UnknownError"
        }
    }
      , OI = function(a, b) {
        return "error"in a ? new BI(A(a.error),b) : new BI({
            name: "UnknownError"
        },b)
    }
      , PI = function(a, b) {
        return "name"in a ? new BI(a,b + ": " + a.message) : new BI({
            name: "UnknownError"
        },b)
    };
    var QI = function(a) {
        this.g = a
    }
      , RI = y.IDBKeyRange || y.webkitIDBKeyRange;
    /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
    var SI = function() {
        this.A = [];
        this.o = this.l = !1;
        this.j = void 0;
        this.L = this.D = this.C = !1;
        this.B = 0;
        this.g = null;
        this.I = 0
    };
    SI.prototype.cancel = function(a) {
        if (this.l)
            this.j instanceof SI && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.I--,
                b.I <= 0 && b.cancel())
            }
            this.L = !0;
            this.l || TI(this, new UI(this))
        }
    }
    ;
    SI.prototype.F = function(a, b) {
        this.C = !1;
        VI(this, a, b)
    }
    ;
    var VI = function(a, b, c) {
        a.l = !0;
        a.j = c;
        a.o = !b;
        WI(a)
    }
      , YI = function(a) {
        if (a.l) {
            if (!a.L)
                throw new XI(a);
            a.L = !1
        }
    };
    SI.prototype.Da = function(a) {
        YI(this);
        ZI(a);
        VI(this, !0, a)
    }
    ;
    var TI = function(a, b) {
        YI(a);
        ZI(b);
        VI(a, !1, b)
    }
      , ZI = function(a) {
        A(!(a instanceof SI), "An execution sequence may not be initiated with a blocking Deferred.")
    }
      , aJ = function(a, b) {
        return $I(a, b, null)
    }
      , $I = function(a, b, c, d) {
        A(!a.D, "Blocking Deferreds can not be re-used");
        a.A.push([b, c, d]);
        a.l && WI(a);
        return a
    };
    SI.prototype.then = function(a, b, c) {
        var d, e, f = new Gz(function(g, h) {
            e = g;
            d = h
        }
        );
        $I(this, e, function(g) {
            g instanceof UI ? f.cancel() : d(g);
            return bJ
        }, this);
        return f.then(a, b, c)
    }
    ;
    SI.prototype.$goog_Thenable = !0;
    var cJ = function(a) {
        return hc(a.A, function(b) {
            return typeof b[1] === "function"
        })
    }
      , bJ = {}
      , WI = function(a) {
        if (a.B && a.l && cJ(a)) {
            var b = a.B
              , c = dJ[b];
            c && (y.clearTimeout(c.g),
            delete dJ[b]);
            a.B = 0
        }
        a.g && (a.g.I--,
        delete a.g);
        b = a.j;
        for (var d = c = !1; a.A.length && !a.C; ) {
            var e = a.A.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.o ? g : f)
                try {
                    var h = f.call(e || null, b);
                    h === bJ && (h = void 0);
                    h !== void 0 && (a.o = a.o && (h == b || h instanceof Error),
                    a.j = b = h);
                    if (Dz(b) || typeof y.Promise === "function" && b instanceof y.Promise)
                        d = !0,
                        a.C = !0
                } catch (k) {
                    b = k,
                    a.o = !0,
                    cJ(a) || (c = !0)
                }
        }
        a.j = b;
        d && (h = db(a.F, a, !0),
        d = db(a.F, a, !1),
        b instanceof SI ? ($I(b, h, d),
        b.D = !0) : b.then(h, d));
        c && (b = new eJ(b),
        dJ[b.g] = b,
        a.B = b.g)
    }
      , XI = function() {
        ib.call(this)
    };
    gb(XI, ib);
    XI.prototype.message = "Deferred has already fired";
    XI.prototype.name = "AlreadyCalledError";
    var UI = function() {
        ib.call(this)
    };
    gb(UI, ib);
    UI.prototype.message = "Deferred was canceled";
    UI.prototype.name = "CanceledError";
    var eJ = function(a) {
        this.g = y.setTimeout(db(this.l, this), 0);
        this.j = a
    };
    eJ.prototype.l = function() {
        A(dJ[this.g], "Cannot throw an error that is not scheduled.");
        delete dJ[this.g];
        throw this.j;
    }
    ;
    var dJ = {};
    var fJ = function() {
        R.call(this)
    };
    gb(fJ, R);
    fJ.prototype.g = null;
    fJ.prototype.next = function(a) {
        if (a)
            this.g["continue"](a);
        else
            this.g["continue"]()
    }
    ;
    fJ.prototype.remove = function() {
        var a = new SI;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return TI(a, PI(c, "deleting via cursor")),
            a
        }
        b.onsuccess = function() {
            a.Da()
        }
        ;
        b.onerror = function(c) {
            TI(a, OI(c.target, "deleting via cursor"))
        }
        ;
        return a
    }
    ;
    fJ.prototype.getValue = function() {
        return this.g.value
    }
    ;
    var gJ = function(a, b) {
        var c = new fJ;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.dispose(),
            PI(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        }
        ;
        d.onerror = function() {
            c.dispatchEvent("e")
        }
        ;
        return c
    };
    var hJ = function(a) {
        this.g = a
    };
    hJ.prototype.getName = function() {
        return this.g.name
    }
    ;
    var iJ = function(a, b, c) {
        var d = new SI;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + ll(c),
            TI(d, PI(f, b)),
            d
        }
        e.onsuccess = function(f) {
            d.Da(f.target.result)
        }
        ;
        e.onerror = function(f) {
            b += " with key " + ll(c);
            TI(d, OI(f.target, b))
        }
        ;
        return d
    };
    hJ.prototype.get = function(a) {
        return iJ(this, "getting from index " + this.getName(), a)
    }
    ;
    var jJ = function(a, b) {
        return gJ(a.g, b)
    };
    var kJ = function(a) {
        this.g = a
    };
    kJ.prototype.getName = function() {
        return this.g.name
    }
    ;
    var lJ = function(a, b, c, d, e) {
        var f = new SI;
        try {
            var g = e ? a.g[b](d, e) : a.g[b](d)
        } catch (h) {
            return c += ll(d),
            e && (c += ", with key " + ll(e)),
            TI(f, PI(h, c)),
            f
        }
        g.onsuccess = function(h) {
            f.Da(h.target.result)
        }
        ;
        g.onerror = function(h) {
            c += ll(d);
            e && (c += ", with key " + ll(e));
            TI(f, OI(h.target, c))
        }
        ;
        return f
    }
      , mJ = function(a, b) {
        return lJ(a, "put", "putting into " + a.getName() + " with value", b)
    };
    kJ.prototype.add = function(a, b) {
        return lJ(this, "add", "adding into " + this.getName() + " with value ", a, b)
    }
    ;
    kJ.prototype.remove = function(a) {
        var b = new SI;
        try {
            var c = this.g["delete"](a instanceof QI ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + ll(a),
            TI(b, PI(e, c)),
            b
        }
        c.onsuccess = function() {
            b.Da()
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + ll(a);
            TI(b, OI(e.target, f))
        }
        ;
        return b
    }
    ;
    kJ.prototype.get = function(a) {
        var b = new SI;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + ll(a),
            TI(b, PI(e, c)),
            b
        }
        c.onsuccess = function(e) {
            b.Da(e.target.result)
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + ll(a);
            TI(b, OI(e.target, f))
        }
        ;
        return b
    }
    ;
    kJ.prototype.clear = function() {
        var a = "clearing store " + this.getName()
          , b = new SI;
        try {
            var c = this.g.clear()
        } catch (d) {
            return TI(b, PI(d, a)),
            b
        }
        c.onsuccess = function() {
            b.Da()
        }
        ;
        c.onerror = function(d) {
            TI(b, OI(d.target, a))
        }
        ;
        return b
    }
    ;
    var nJ = function(a) {
        try {
            return new hJ(a.g.index("timestamp"))
        } catch (b) {
            throw PI(b, "getting index timestamp");
        }
    };
    var oJ = function(a, b) {
        R.call(this);
        this.g = a;
        this.o = b;
        this.j = new pH(this);
        this.j.listen(this.g, "complete", db(this.dispatchEvent, this, "complete"));
        this.j.listen(this.g, "abort", db(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Qf)
    };
    gb(oJ, R);
    m = oJ.prototype;
    m.Qf = function(a) {
        a.target instanceof BI ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: OI(a.target, "in transaction")
        })
    }
    ;
    m.objectStore = function(a) {
        try {
            return new kJ(this.g.objectStore(a))
        } catch (b) {
            throw PI(b, "getting object store " + a);
        }
    }
    ;
    m.commit = function(a) {
        if (this.g.commit || !a)
            try {
                this.g.commit()
            } catch (b) {
                throw PI(b, "cannot commit the transaction");
            }
    }
    ;
    m.wait = function() {
        var a = new SI;
        $y(this, "complete", db(a.Da, a));
        var b = $y(this, "abort", function() {
            iz(c);
            TI(a, new BI(II,"waiting for transaction to complete"))
        });
        var c = $y(this, "error", function(e) {
            iz(b);
            TI(a, e.target)
        });
        var d = this.o;
        return aJ(a, function() {
            return d
        })
    }
    ;
    m.abort = function() {
        this.g.abort()
    }
    ;
    m.M = function() {
        oJ.Ka.M.call(this);
        this.j.dispose()
    }
    ;
    var pJ = function(a) {
        R.call(this);
        this.g = a;
        this.j = new pH(this);
        this.j.listen(this.g, "abort", db(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Rf);
        this.j.listen(this.g, "versionchange", this.Bg);
        this.j.listen(this.g, "close", db(this.dispatchEvent, this, "close"))
    };
    gb(pJ, R);
    m = pJ.prototype;
    m.ae = !0;
    m.Rf = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    }
    ;
    m.Bg = function(a) {
        this.dispatchEvent(new qJ(a.oldVersion,a.newVersion))
    }
    ;
    m.close = function() {
        this.ae && (this.g.close(),
        this.ae = !1)
    }
    ;
    m.Ya = function() {
        return this.ae
    }
    ;
    m.getName = function() {
        return this.g.name
    }
    ;
    m.getVersion = function() {
        return Number(this.g.version)
    }
    ;
    var rJ = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new oJ(c,a)
        } catch (d) {
            throw PI(d, "creating transaction");
        }
    };
    pJ.prototype.M = function() {
        pJ.Ka.M.call(this);
        this.j.dispose()
    }
    ;
    var qJ = function(a, b) {
        My.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    gb(qJ, My);
    var sJ = function(a) {
        A(1 == (a !== void 0), "opt_version must be passed to goog.db.openDatabase if and only if opt_onUpgradeNeeded is also passed");
        var b = new SI;
        yI == void 0 && (yI = y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.moz_indexedDB);
        var c = yI.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new pJ(d.target.result);
            b.Da(d)
        }
        ;
        c.onerror = function(d) {
            TI(b, OI(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        }
        ;
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new pJ(d.target.result);
                a(new qJ(d.oldVersion,d.newVersion), e, new oJ(d.target.transaction,e))
            }
        }
        ;
        c.onblocked = function() {}
        ;
        return b
    };
    var tJ = function() {
        R.apply(this, arguments);
        this.g = null
    };
    w(tJ, R);
    tJ.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(sJ(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            K(J.getInstance(), "codf", b.message)
        })
    }
    ;
    tJ.prototype.Ya = function() {
        return this.g !== null && this.g.Ya()
    }
    ;
    tJ.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            uJ(a, b)
        }
        )).then(function() {
            return vJ()
        }).then(function() {
            a.g.close()
        })
    }
    ;
    var vJ = function() {
        var a;
        return ((a = navigator.storage) == null ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            K(J.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    tJ.prototype.dc = function(a) {
        return (a = wJ(a, 0)) ? xJ(this, yJ(a), a.Tc) : Promise.resolve(null)
    }
    ;
    tJ.prototype.Dc = function(a, b, c, d) {
        (b = wJ(b, c)) ? (c = b.startIndex,
        zJ(this, {
            Lj: yJ(b),
            startIndex: c,
            Mc: c + a.byteLength - 1,
            Tc: b.Tc,
            timestamp: new Date(Date.now()),
            za: d,
            Db: b.Db,
            video: a
        })) : Promise.resolve(void 0)
    }
    ;
    tJ.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
            try {
                b.g.deleteObjectStore("MediaSourceVideoChunk")
            } catch (d) {
                throw PI(d, "deleting object store MediaSourceVideoChunk");
            }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new kJ(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw PI(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw PI(d, "creating new index timestamp with key path timestamp");
        }
    }
    ;
    var uJ = function(a, b) {
        var c = new Date(Date.now());
        c.setDate(c.getDate() - 30);
        c = new QI(RI.upperBound(c, void 0));
        var d = jJ(nJ(rJ(a.g).objectStore("MediaSourceVideoChunk")), c)
          , e = d.listen("n", function() {
            d.remove();
            d.next()
        });
        $y(d, "c", function() {
            iz(e);
            b()
        })
    }
      , wJ = function(a, b) {
        var c = new qI(a);
        a = c.getId();
        var d = sI(c, "itag")
          , e = sI(c, "source")
          , f = sI(c, "lmt");
        c = tI(c);
        var g = [];
        a ? d ? e ? f ? c === null && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
        if (g.length > 0)
            return K(J.getInstance(), "civp", g.join("-")),
            null;
        b = pb(c) + b;
        return {
            Mh: pb(a),
            Db: pb(d),
            source: pb(e),
            Tc: pb(f),
            startIndex: b
        }
    }
      , yJ = function(a) {
        for (var b = [a.Mh, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++)
            c = Math.imul(31, c) + b.charCodeAt(d) | 0;
        return c.toString() + "," + a.Db
    }
      , xJ = function(a, b, c) {
        var d = rJ(a.g).objectStore("MediaSourceVideoChunk");
        return Promise.resolve(d.get(b)).then(function(e) {
            if (!e)
                return K(J.getInstance(), "cenf", "1"),
                null;
            if (e.Tc !== c)
                return K(J.getInstance(), "cdl", "1"),
                d.remove(b).then(null, function(f) {
                    K(J.getInstance(), "crdlvf", f.message)
                }),
                null;
            K(J.getInstance(), "cefml", "1");
            return {
                Db: e.Db,
                Mc: e.Mc,
                za: e.za,
                video: e.video
            }
        }, function(e) {
            K(J.getInstance(), "cgvf", e.message);
            return null
        })
    }
      , zJ = function(a, b) {
        a = rJ(a.g).objectStore("MediaSourceVideoChunk");
        Promise.resolve(mJ(a, b)).then(function() {
            K(J.getInstance(), "cavs", "1")
        }, function(c) {
            K(J.getInstance(), "cavf", c.message)
        })
    };
    var AJ = function(a) {
        WH.call(this);
        var b = this;
        this.H = this.o = this.g = 0;
        this.A = this.J = null;
        this.uri = new bG(a);
        this.state = 0;
        this.j = (this.B = wI() && !EG(this.uri)) ? CF(tJ) : null;
        Gu(this, function() {
            Fu(b.j)
        });
        this.J = this.B ? this.j.initialize() : null
    };
    w(AJ, WH);
    AJ.prototype.D = function() {
        return this.g
    }
    ;
    AJ.prototype.C = function() {
        return this.state === 3
    }
    ;
    AJ.prototype.F = function(a) {
        this.state === 1 ? (this.g += a,
        this.state = 2) : this.state === 0 && (this.g += a,
        this.state = 1,
        BJ(this))
    }
    ;
    var BJ = function(a) {
        Ja(function(b) {
            if (b.g == 1)
                return a.state === 2 && (a.state = 1),
                ya(b, CJ(a), 4);
            var c = a.H > 3;
            if (c && a.A !== null) {
                var d = hI("media_source_error", {
                    code: a.o > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.A + '" with ' + a.g + " bytes requested and " + a.o + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.o < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0),
            b.g = 0)
        })
    }
      , CJ = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                b = a.o + "-" + (a.g - 1);
                pG(a.uri, "range", b);
                if (!a.B) {
                    c.g = 2;
                    break
                }
                return ya(c, a.J, 3);
            case 3:
                return c.return(DJ(a));
            case 2:
                return c.l = 4,
                ya(c, EJ(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                FJ(a),
                c.g = 0
            }
        })
    }
      , DJ = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                return A(a.j),
                ya(c, a.j.dc(a.uri), 2);
            case 2:
                if (b = c.j) {
                    b.za && (a.state = 3);
                    GJ(a, b.video, 0);
                    c.g = 0;
                    break
                }
                c.l = 4;
                return ya(c, EJ(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                FJ(a),
                c.g = 0
            }
        })
    }
      , FJ = function(a) {
        var b = new qI(a.uri);
        if (Yp(Bq) && rI(b)) {
            a: if (rI(b)) {
                var c = sI(b, "mn");
                var d = c ? c.split(",") : null;
                var e = sI(b, "fvip");
                c = b.uri.F();
                if (d && e) {
                    var f = (Number(sI(b, "fallback_count")) || 0) + 1;
                    if (d = d[f]) {
                        c.j = "r" + e + "---" + d + ".googlevideo.com";
                        pG(c, "fallback_count", f);
                        b = c;
                        break a
                    }
                }
                var g, h;
                e = Number(((h = (g = c.g.get("cmo")) == null ? void 0 : g.split("=")) != null ? h : [])[1]) || 0;
                b.uri.j.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.j = "redirector.googlevideo.com");
                pG(c, "cmo", "pf=" + (e + 1));
                b = c
            } else
                b = b.uri;
            a.uri = b;
            a.dispatchEvent(hI("bandaid_fallback_count"))
        } else
            Yp(Fq) && EG(a.uri) && (a.uri = new bG(FG(a.uri)));
        a.H++
    }
      , EJ = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest
              , e = 0
              , f = a.g - a.o;
            d.addEventListener("load", function() {
                Qo("lvlcl");
                if (d.status >= 400)
                    K(J.getInstance(), "lvlxes", d.status.toString()),
                    a.A = d.status,
                    c();
                else {
                    var g = d.response;
                    g.byteLength < f && (a.state = 3);
                    var h = GJ(a, g, e);
                    e += h;
                    a.B && g.byteLength > 0 && a.j.Dc(g, a.uri, 0, g.byteLength < f);
                    b()
                }
            });
            d.addEventListener("timeout", function() {
                Qo("lvlct");
                a.A = d.status;
                c()
            });
            d.addEventListener("error", function() {
                Qo("lvlce");
                a.A = d.status;
                c()
            });
            d.addEventListener("progress", function() {
                if (d.status >= 400)
                    a.A = d.status;
                else {
                    var g = GJ(a, d.response, e);
                    e += g
                }
            });
            d.responseType = "arraybuffer";
            d.open("get", a.uri.toString());
            d.send(null)
        }
        )
    }
      , GJ = function(a, b, c) {
        if (b === null)
            return 0;
        b = b.slice(c);
        a.o += b.byteLength;
        a.dispatchEvent({
            type: "progress",
            Fd: b
        });
        return b.byteLength
    };
    AJ.prototype.M = function() {
        this.B && this.j.Ya() && this.j.close();
        WH.prototype.M.call(this)
    }
    ;
    var HJ = {
        Xj: 2E5,
        Vj: 7E4,
        Ma: 3E5,
        Uj: 5E3,
        ek: 5E3,
        Wj: 6E3
    };
    function IJ() {
        return !!window.MediaSource
    }
    function JJ(a) {
        return [43, 44, 45].includes(a) && Uc ? !1 : $H[a] ? (a = gI(a),
        !!a && IJ() && MediaSource.isTypeSupported(a)) : !1
    }
    ;var KJ = function() {};
    KJ.prototype.jh = function(a, b, c) {
        return c === 0 ? 1E6 : b - a < 5E3 ? 3E5 : 0
    }
    ;
    var MJ = function(a, b) {
        var c = this;
        this.g = a;
        this.index = b;
        this.j = [];
        this.g || Qo("msms_sbf" + this.index);
        this.g.addEventListener("updateend", function() {
            LJ(c)
        });
        this.g.addEventListener("error", function() {
            Qo("msms_sbe" + c.index)
        })
    }
      , LJ = function(a) {
        if (a.j.length > 0 && !a.g.updating) {
            var b = a.j.shift();
            a.g.appendBuffer(b)
        }
    };
    var NJ = function() {
        this.g = this.cache = null
    };
    m = NJ.prototype;
    m.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            K(J.getInstance(), "codf", b.message)
        })
    }
    ;
    m.Ya = function() {
        return this.cache !== null
    }
    ;
    m.close = function() {
        return Promise.resolve()
    }
    ;
    m.dc = function(a) {
        var b = this;
        a = OJ(this, a);
        return this.Ya() && a ? this.cache.match(a).then(function(c) {
            if (!c)
                return K(J.getInstance(), "cenf", "1"),
                Promise.resolve(null);
            K(J.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = tI(b.g), f;
                (f = b.g.uri.g.get("range")) ? (f = f.split("-")[1],
                f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    Db: sI(b.g, "itag"),
                    Mc: e,
                    za: f,
                    video: d
                }
            })
        }, function(c) {
            K(J.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (K(J.getInstance(), "cgvf", "1"),
        Promise.resolve(null))
    }
    ;
    m.Dc = function(a, b) {
        b = OJ(this, b);
        a = new Response(a);
        this.Ya() && b ? this.cache.put(b, a).then(function() {
            K(J.getInstance(), "cavs", "1")
        }, function(c) {
            K(J.getInstance(), "cavf", c.message)
        }) : (K(J.getInstance(), "cavf", "1"),
        Promise.resolve())
    }
    ;
    var OJ = function(a, b) {
        a.g = new qI(b);
        b = a.g.getId();
        var c = sI(a.g, "itag")
          , d = sI(a.g, "source")
          , e = sI(a.g, "lmt");
        a = sI(a.g, "range");
        if (b && c && d && a)
            return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        K(J.getInstance(), "civp", "1");
        return null
    };
    var RJ = function(a) {
        R.call(this);
        var b = this;
        this.o = a;
        this.g = [];
        this.B = null;
        this.C = 0;
        this.K = !1;
        this.F = 0;
        this.D = [];
        if (Yp(uq)) {
            var c = null;
            wI() && (Yp(wq) ? c = CF(NJ) : c = CF(tJ));
            this.A = this.o.map(function(d) {
                return CF(iI, d.url, EG(d.url) ? null : c)
            })
        } else
            this.A = this.o.map(function(d) {
                return CF(AJ, d.url)
            });
        this.j = CF(MediaSource);
        this.H = function() {
            PJ(b)
        }
        ;
        this.j.addEventListener("sourceopen", this.H);
        this.J = QJ(this)
    };
    w(RJ, R);
    var QJ = function(a) {
        for (var b = [], c = 0; c < a.o.length; ++c)
            b.push(new KJ);
        return b
    }
      , PJ = function(a) {
        Qo("msms_oso");
        for (var b = {
            Ca: 0
        }; b.Ca < a.o.length; b = {
            ge: void 0,
            Uc: void 0,
            wb: void 0,
            Ca: b.Ca,
            Vc: void 0
        },
        ++b.Ca) {
            var c = a.o[b.Ca];
            K(J.getInstance(), "msms_mime" + b.Ca, c.mimeType);
            K(J.getInstance(), "msms_cs" + b.Ca, c.Ma.toString());
            Yp(vq) ? (b.ge = new MJ(a.j.addSourceBuffer(c.mimeType),b.Ca),
            b.Uc = a.A[b.Ca],
            b.Uc.listen("progress", function(d) {
                return function(e) {
                    var f = d.ge
                      , g = d.Uc;
                    e = e.Fd;
                    e.byteLength !== 0 && (f.j.push(e),
                    LJ(f));
                    g.C() && (a.C++,
                    a.C === a.g.length && SJ(a))
                }
            }(b)),
            b.Uc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.g.push(b.ge.g)) : (b.wb = a.j.addSourceBuffer(c.mimeType),
            b.wb ? (b.Vc = a.A[b.Ca],
            Yp(uq) && b.wb.addEventListener("updateend", function(d) {
                return function() {
                    if (a.D.length > 0 && !d.wb.updating) {
                        var e = a.D.shift();
                        d.wb.appendBuffer(e)
                    }
                }
            }(b)),
            b.wb.addEventListener("error", function(d) {
                return function() {
                    Qo("msms_sbe" + d.Ca)
                }
            }(b)),
            b.Vc.listen("progress", function(d) {
                return function(e) {
                    var f = d.wb
                      , g = d.Vc;
                    e = e.Fd;
                    e.byteLength !== 0 && (Yp(uq) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                    g.C() && (a.C++,
                    a.C === a.g.length && SJ(a))
                }
            }(b)),
            b.Vc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.g.push(b.wb)) : Qo("msms_sbf" + b.Ca))
        }
        K(J.getInstance(), "msms_ns", a.g.length.toString());
        a.K = !0;
        TJ(a)
    }
      , SJ = function(a) {
        Promise.all(a.g.map(function(b) {
            return new Promise(function(c) {
                b.updating ? b.addEventListener("updateend", function() {
                    c()
                }) : c()
            }
            )
        })).then(function() {
            a.j.endOfStream()
        })
    }
      , TJ = function(a) {
        if (a.K)
            for (var b = 0; b < a.o.length; ++b) {
                var c = a.A[b]
                  , d = a.g[b];
                d = d.buffered.length === 0 ? 0 : d.buffered.end(0) * 1E3;
                d = a.J[b].jh(a.F, d, c.D());
                d !== 0 && c.F(d)
            }
    }
      , UJ = function(a) {
        a.B = Fk(a.j).toString();
        return a.B
    };
    RJ.prototype.M = function() {
        this.B && window.URL.revokeObjectURL(this.B);
        for (var a = u(this.A), b = a.next(); !b.done; b = a.next())
            b.value.dispose();
        this.j.removeEventListener("sourceopen", this.H);
        R.prototype.M.call(this)
    }
    ;
    RJ.prototype.pd = function(a) {
        this.J.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, HJ, b.g, a)
        })
    }
    ;
    var VJ = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel")
      , WJ = RegExp("outstream.min.js")
      , XJ = RegExp("outstream.min.css")
      , YJ = RegExp("fonts.gstatic.com")
      , ZJ = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback")
      , $J = RegExp("custom.elements.min.js");
    function aK(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = 0
          , g = 0
          , h = 0
          , k = 0
          , l = !1
          , n = !1;
        if (typeof Pa("performance.getEntriesByType", y) === "function" && "transferSize"in y.PerformanceResourceTiming.prototype) {
            var p = y.performance.getEntriesByType("resource");
            p = u(p);
            for (var q = p.next(); !q.done; q = p.next())
                q = q.value,
                VJ.test(q.name) || (f += 1,
                q.transferSize ? (c += q.transferSize,
                q.encodedBodySize && q.transferSize < q.encodedBodySize && (h += 1,
                e += q.encodedBodySize,
                WJ.test(q.name) && (l = !0),
                XJ.test(q.name) && (n = !0)),
                ZJ.test(q.name) && (d += q.transferSize)) : q.transferSize === 0 && q.encodedBodySize === 0 ? $J.test(q.name) ? c += 6686 : YJ.test(q.name) || (k += 1,
                Po(J.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: q.name,
                    encoded_body_size: q.encodedBodySize,
                    transfer_size: q.transferSize
                })) : (g += 1,
                e += q.encodedBodySize,
                WJ.test(q.name) && (l = !0),
                XJ.test(q.name) && (n = !0)));
            p = 0;
            if (a.duration) {
                for (q = 0; q < a.buffered.length; q++)
                    p += a.buffered.end(q) - a.buffered.start(q);
                p = Math.min(p, a.duration)
            }
            Po(J.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: l,
                css_cached: n,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else
            K(J.getInstance(), "error", "reporting_timing_not_supported")
    }
    ;var bK = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Ma = c;
        this.g = d === void 0 ? null : d
    };
    function cK(a) {
        var b = J.getInstance()
          , c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime,
        K(b, "vqdf", String(c.droppedVideoFrames)),
        K(b, "vqtf", String(c.totalVideoFrames)),
        K(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : K(b, "vqu", "1")
    }
    ;var dK = function(a) {
        this.g = a
    };
    dK.prototype.toString = function() {
        return this.g
    }
    ;
    var eK = new dK("video_mute")
      , fK = new dK("video_caption_visibility");
    var gK = function(a) {
        P.call(this);
        this.B = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.j = {};
        this.D = !!a
    };
    gb(gK, P);
    var hK = function(a, b, c) {
        var d = fK.toString()
          , e = a.j[d];
        e || (e = a.j[d] = []);
        var f = a.B;
        a.g[f] = d;
        a.g[f + 1] = b;
        a.g[f + 2] = c;
        a.B = f + 3;
        e.push(f)
    }
      , iK = function(a, b, c) {
        var d = a.j[fK.toString()];
        if (d) {
            var e = a.g;
            (d = d.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && a.A(d)
        }
    };
    gK.prototype.A = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            this.o != 0 ? (this.l.push(a),
            this.g[a + 1] = function() {}
            ) : (c && oc(c, a),
            delete this.g[a],
            delete this.g[a + 1],
            delete this.g[a + 2])
        }
        return !!b
    }
    ;
    gK.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    jK(this.g[g + 1], this.g[g + 2], d)
                }
            else {
                this.o++;
                try {
                    for (e = 0,
                    f = c.length; e < f && !this.Ga(); e++)
                        g = c[e],
                        this.g[g + 1].apply(this.g[g + 2], d)
                } finally {
                    if (this.o--,
                    this.l.length > 0 && this.o == 0)
                        for (; c = this.l.pop(); )
                            this.A(c)
                }
            }
        }
    }
    ;
    var jK = function(a, b, c) {
        Bz(function() {
            a.apply(b, c)
        })
    };
    gK.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.A, this),
            delete this.j[a])
        } else
            this.g.length = 0,
            this.j = {}
    }
    ;
    gK.prototype.M = function() {
        gK.Ka.M.call(this);
        this.clear();
        this.l.length = 0
    }
    ;
    var kK = function(a) {
        P.call(this);
        this.g = new gK(a);
        Hu(this, this.g)
    };
    gb(kK, P);
    kK.prototype.clear = function(a) {
        this.g.clear(a !== void 0 ? a.toString() : void 0)
    }
    ;
    var lK = function(a) {
        a = a === void 0 ? null : a;
        P.call(this);
        this.g = new pH(this);
        Hu(this, this.g);
        this.Fb = a
    };
    w(lK, P);
    var mK = function(a, b, c) {
        a.Fb && (hK(a.Fb.g, b, c),
        Gu(a, function() {
            iK(a.Fb.g, b, c)
        }))
    };
    var nK = function(a, b) {
        lK.call(this, b);
        mK(this, function(c) {
            c ? a.g.mode = "showing" : a.rb()
        }, this)
    };
    w(nK, lK);
    var oK = function() {
        R.call(this);
        this.j = new pH(this);
        Hu(this, this.j)
    };
    w(oK, R);
    var qK = function(a, b, c) {
        c = c === void 0 ? !0 : c;
        oK.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = fm("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        gm(a, d);
        this.g = a.textTracks[0];
        pK(this);
        c ? this.g.mode = "showing" : this.rb()
    };
    w(qK, oK);
    var pK = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    qK.prototype.rb = function() {
        this.g.mode = "hidden"
    }
    ;
    function rK(a, b) {
        if (typeof ReportingObserver !== "undefined") {
            var c = function(e) {
                e = u(e);
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    a(f) && b(f)
            }
              , d = new ReportingObserver(c,{
                buffered: !0
            });
            y.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }
    function sK(a) {
        a = a === void 0 ? null : a;
        rK(function(b) {
            return b.body && b.body.id === "HeavyAdIntervention"
        }, function(b) {
            var c = b.body.message
              , d = J.getInstance();
            K(d, "ham", c);
            c.includes("CPU") ? K(d, "hacpu", "true") : c.includes("network") && K(d, "habytes", "true");
            a && a(b)
        })
    }
    ;var tK = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" ")
      , uK = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" ")
      , vK = {
        childList: !0
    }
      , wK = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}
    .toString())
      , xK = HTMLElement;
    wK && (xK = function() {
        var a = tb(Object.getPrototypeOf(this).constructor);
        return y.Reflect.construct(HTMLElement, [], a)
    }
    ,
    Object.setPrototypeOf(xK, HTMLElement),
    Object.setPrototypeOf(xK.prototype, HTMLElement.prototype));
    var yK = function(a) {
        if (a !== null) {
            a = u(a);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value,
                b.nodeName === "TRACK".toString())
                    return b
        }
        return null
    }
      , zK = function(a, b) {
        this.code = a;
        this.message = b === void 0 ? "" : b
    }
      , AK = function(a) {
        zK.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, a === void 0 ? "" : a)
    };
    w(AK, zK);
    var EK = function(a, b) {
        b = b === void 0 ? !1 : b;
        var c = xK.call(this) || this;
        K(J.getInstance(), "ulv", "1");
        c.Jh = b;
        c.ua = null;
        c.kf = null;
        c.Ie = null;
        c.T = fm("VIDEO");
        BK(c);
        c.Fb = a || new kK;
        CK(c);
        c.Ic = null;
        DK(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.T);
        sK(function() {
            K(J.getInstance(), "has", c.src || c.nb);
            K(J.getInstance(), "hat", String(c.T.currentTime))
        });
        c.ld = !1;
        c.qf = !1;
        c.sc = null;
        c.xd = null;
        c.Kh = !1;
        c.vf = !1;
        c.Pj = null;
        c.Wb = null;
        return c
    };
    w(EK, xK);
    var FK = function(a) {
        a.T.load();
        Yp(Cq) && a.T.dispatchEvent(new Event("canplaythrough"))
    };
    EK.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
        case "src":
            GK(this, c);
            break;
        case "demuxedaudiosrc":
        case "demuxedvideosrc":
            HK(this);
            break;
        case "muted":
            this.T[a] = c === "" ? !0 : !!c;
            IK(this, a, c);
            break;
        default:
            IK(this, a, c)
        }
    }
    ;
    EK.prototype.pd = function(a) {
        this.Wb = a;
        var b;
        (b = this.ua) == null || b.pd(a)
    }
    ;
    var IK = function(a, b, c) {
        c !== a.T.getAttribute(b) && (c === null ? a.T.removeAttribute(b) : a.T.setAttribute(b, c))
    }
      , JK = function(a) {
        a.ua && (a.T.removeEventListener("timeupdate", a.sc),
        a.ua.dispose(),
        a.ua = null)
    }
      , KK = function(a, b) {
        a.Ie = b;
        a.T.dispatchEvent(new Event("error"))
    }
      , BK = function(a) {
        LK(a);
        MK(a);
        a.T.addEventListener("loadedmetadata", function() {
            a.xd = RG(a);
            a.xd.then(function(b) {
                var c = a.T.videoWidth;
                var d = a.T.videoHeight
                  , e = b.width
                  , f = b.height;
                c > 0 && d > 0 && e > 0 && f > 0 ? (b = b.width / b.height,
                c /= d,
                c = Math.min(c, b) / Math.max(c, b) >= .97 ? "cover" : "contain") : c = null;
                c !== null && Gt(a.T, {
                    "object-fit": c
                })
            })
        });
        a.T.addEventListener("play", function() {
            a.qf || (aK(a.T, "first_play"),
            a.qf = !0)
        });
        a.T.addEventListener("pause", function() {
            a.ld || (aK(a.T, "first_pause"),
            cK(a.T),
            a.ld = !0)
        });
        az(y, "pagehide", function() {
            a.ld || (aK(a.T, "first_pause"),
            cK(a.T),
            a.ld = !0)
        });
        a.T.addEventListener("stalled", function() {
            K(J.getInstance(), "ves", "1")
        });
        (new bH(a.T)).listen("playbackStalled", function() {
            return K(J.getInstance(), "pbs", "1")
        });
        a.T.addEventListener("media_source_error", function(b) {
            JK(a);
            b = b.detail;
            KK(a, new zK(b.code,b.message))
        });
        NK(a)
    }
      , DK = function(a) {
        var b = yK(a.childNodes);
        b && OK(a, b);
        a.Ic === null && PK(a)
    }
      , PK = function(a) {
        if (y.MutationObserver) {
            var b = new MutationObserver(function(c) {
                c = u(c);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value,
                    d.type === "childList" && (d = yK(d.addedNodes))) {
                        OK(a, d);
                        b.disconnect();
                        break
                    }
            }
            );
            b.observe(a, vK)
        }
    }
      , CK = function(a) {
        a.T.addEventListener("volumechange", function() {
            a.Fb.g.C(eK.toString(), a.T.muted);
            a.Jh || a.Fb.g.C(fK.toString(), a.T.muted)
        })
    }
      , OK = function(a, b) {
        if (a.Ic === null && b.hasAttribute("src")) {
            var c = b.getAttribute("src");
            a.Ic = new qK(a.T,c,b.hasAttribute("default"));
            new nK(a.Ic,a.Fb);
            c.includes("kind=asr") && K(J.getInstance(), "act", "1")
        }
    }
      , GK = function(a, b) {
        if (b !== a.kf) {
            a.kf = b;
            a.Kh && b && EG(b) && (b = FG(b));
            var c = b ? fI(b) : null
              , d = !!c && JJ(c);
            K(J.getInstance(), "umsem", d ? "1" : "0");
            d ? (c = rb(c),
            b = CF(bK, b, gI(c), YH[c] * 1E3, null),
            a.ua = CF(RJ, [b]),
            a.Wb && a.ua.pd(a.Wb),
            a.ua.listen("media_source_error", function(e) {
                e = hI("media_source_error", e.detail);
                a.T.dispatchEvent(e)
            }),
            a.sc = function() {
                var e = a.ua;
                e.F = a.T.currentTime * 1E3;
                TJ(e)
            }
            ,
            a.T.addEventListener("timeupdate", a.sc),
            IK(a, "src", UJ(a.ua))) : (JK(a),
            IK(a, "src", b));
            a.vf || FK(a)
        }
    }
      , HK = function(a) {
        a.src && KK(a, new zK(MediaError.MEDIA_ERR_ABORTED,"Setting demuxed src after src is already set."));
        if (!a.Ab && !a.nb && a.ua)
            JK(a),
            IK(a, "src", null),
            FK(a);
        else if (a.Ab && a.nb) {
            var b = fI(EG(a.nb) ? pb(FG(a.nb)) : a.nb)
              , c = fI(EG(a.Ab) ? pb(FG(a.Ab)) : a.Ab);
            if (b && JJ(b))
                if (c && JJ(c)) {
                    var d = !!b && JJ(b) && !!c && JJ(c);
                    K(J.getInstance(), "umsed", d ? "1" : "0");
                    b = CF(bK, a.nb, gI(b), -1, null);
                    c = CF(bK, a.Ab, gI(c), -1, null);
                    a.ua = CF(RJ, [b, c]);
                    a.Wb && a.ua.pd(a.Wb);
                    a.ua.listen("media_source_error", function(e) {
                        e = hI("media_source_error", e.detail);
                        a.T.dispatchEvent(e)
                    });
                    a.sc = function() {
                        var e = a.ua;
                        e.F = a.T.currentTime * 1E3;
                        TJ(e)
                    }
                    ;
                    a.T.addEventListener("timeupdate", a.sc);
                    IK(a, "src", UJ(a.ua));
                    a.vf || FK(a)
                } else
                    KK(a, new AK('Audio itag "' + c + '" not supported.'));
            else
                KK(a, new AK('Video itag "' + b + '" not supported.'))
        }
    }
      , LK = function(a) {
        for (var b = u(uK), c = b.next(), d = {}; !c.done; d = {
            gb: void 0,
            getValue: void 0
        },
        c = b.next())
            d.gb = c.value,
            d.gb in a.T && (typeof a.T[d.gb] === "function" ? (d.getValue = a.T[d.gb].bind(a.T),
            Object.defineProperty(a, d.gb, {
                set: function(e) {
                    return function(f) {
                        a.T[e.gb] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.gb, {
                set: function(e) {
                    return function(f) {
                        a.T[e.gb] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.T[e.gb]
                    }
                }(d)
            }))
    }
      , MK = function(a) {
        Object.defineProperty(a, "error", {
            set: function() {},
            get: function() {
                return a.T.error ? a.T.error : a.Ie
            }
        })
    }
      , NK = function(a) {
        a.T.style.width = Nt();
        a.T.style.height = Nt()
    };
    EK.prototype.disconnectedCallback = function() {
        this.xd && SG(this.xd);
        xK.prototype.disconnectedCallback && xK.prototype.disconnectedCallback.call(this)
    }
    ;
    da.Object.defineProperties(EK.prototype, {
        Ab: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        nb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(EK, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return tK
            }
        }
    });
    y.customElements && (y.customElements.get("lima-video") || y.customElements.define("lima-video", EK));
    function QK() {
        var a = CF(tJ);
        a.initialize().then(function() {
            var b = hI("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var SK = function(a, b, c, d, e) {
        P.call(this);
        this.F = a;
        this.j = c;
        this.o = e;
        this.X = this.P = this.Ib = this.D = this.l = this.Va = 0;
        this.C = [];
        this.K = !1;
        this.Z = this.na = this.ba = null;
        this.oa = !1;
        this.lb = this.J = this.A = this.ya = this.Ta = null;
        this.za = !1;
        this.H = new bG(b.url);
        this.Ma = b.Ma;
        this.ka = d;
        (this.O = b.g) || this.H.g.remove("alr");
        K(J.getInstance(), "sl_dv" + this.o, (this.O !== null).toString());
        this.U = !this.O;
        this.g = new XMLHttpRequest;
        this.V = .1;
        if (this.B = wI() && !EG(this.H))
            this.A = QK(),
            Hu(this, this.A);
        RK(this)
    };
    w(SK, P);
    var TK = function(a, b) {
        b = hI("media_source_error", b);
        a.F.dispatchEvent(b)
    }
      , UK = function(a, b) {
        TK(a, {
            code: a.l > 1 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: b
        })
    }
      , RK = function(a) {
        a.ba = function() {
            VK(a);
            if (a.U) {
                var b = a.g.responseText;
                a.K = !b || b.length < a.Ma;
                a.P = 0;
                Qo("sl_cc" + a.o + "_" + a.l);
                a.D++;
                WK(a)
            }
        }
        ;
        a.na = function() {
            VK(a)
        }
        ;
        a.Z = function() {
            Qo("sl_ec" + a.o + "_" + a.l);
            UK(a, "Failed to load chunk " + a.l + " for stream " + a.o)
        }
        ;
        a.g.addEventListener("load", a.ba);
        a.g.addEventListener("progress", a.na);
        a.g.addEventListener("error", a.Z);
        a.j.addEventListener("updateend", function() {
            a.j.buffered.length && (a.Ib = a.j.buffered.end(0),
            a.B ? a.za && !a.j.updating && a.l === a.D && (Qo("sl_lc" + a.o),
            a.ka()) : a.K && !a.j.updating && a.l === a.D && (Qo("sl_lc" + a.o),
            a.ka()));
            !a.oa && a.F.buffered.length > 1 && (K(J.getInstance(), "dbr", "1"),
            a.oa = !0)
        });
        a.j.addEventListener("update", function() {
            a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
        });
        a.j.addEventListener("error", function() {
            Qo("msb_err" + a.o);
            TK(a, {
                code: MediaError.MEDIA_ERR_DECODE,
                message: "Error on SourceBuffer " + a.o
            })
        });
        a.B ? (a.A.Ya() ? XK(a) : a.Ta = az(a.A, "initialized", function() {
            XK(a)
        }),
        a.ya = az(a.A, "get_video_succeeded", function() {
            WK(a)
        })) : XK(a)
    }
      , ZK = function(a) {
        Qo("sl_rc" + a.o + "_" + a.l);
        var b = YK(a);
        a.g.open("get", b);
        a.g.overrideMimeType("text/plain; charset=x-user-defined");
        a.g.send(null);
        a.B && (a.J = null,
        a.lb = b)
    }
      , VK = function(a) {
        if (a.g.status >= 400)
            UK(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
        else {
            if (!a.U) {
                var b = a.g.getResponseHeader("content-type");
                if (b && b.indexOf("text/plain") >= 0) {
                    a.g.readyState === XMLHttpRequest.DONE && (a.H = new bG(sb(a.g.response)),
                    a.l = 0,
                    a.D = 0,
                    a.Va++,
                    XK(a));
                    return
                }
                a.U = !0;
                Qo("sl_redc" + a.o);
                K(J.getInstance(), "sl_tr" + a.o, a.Va.toString())
            }
            a.H.g.remove("alr");
            if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE)
                b = $K(a, a.P),
                a.P = sb(a.g.response).length,
                a.X += b.byteLength,
                aL(a, b);
            if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = $K(a, 0),
            b.byteLength > 0)) {
                var c = a.g.responseText;
                a.za = !c || c.length < a.Ma;
                a.A.Dc(b, new bG(a.lb), 0, a.za)
            }
        }
    }
      , aL = function(a, b) {
        b.byteLength > 0 && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
    }
      , $K = function(a, b) {
        a = sb(a.g.response);
        for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
            c[d] = a.charCodeAt(d + b) & 255;
        return c.buffer
    }
      , WK = function(a) {
        var b = GG;
        b !== -1 && b < a.X + a.Ma ? (a.F.pause(),
        GG = -1,
        b = !1) : (b = a.D === a.l && !a.j.updating && !a.C.length,
        b = a.B ? !a.za && b && a.F.currentTime >= a.V : !a.K && b && a.F.currentTime >= a.V);
        b && (a.V = a.Ib + .1,
        XK(a))
    }
      , YK = function(a) {
        var b = a.B && a.J ? a.J + 1 : a.l * a.Ma;
        return pG(a.H, "range", b + "-" + (b + a.Ma - 1)).toString()
    }
      , XK = function(a) {
        if (a.B) {
            var b = new bG(YK(a));
            a.A.dc(b).then(function(c) {
                c ? (a.J = Number(c.Mc),
                a.za = c.za,
                aL(a, c.video),
                c = hI("get_video_succeeded"),
                a.A.dispatchEvent(c),
                a.D++) : ZK(a);
                a.l++
            })
        } else
            ZK(a),
            a.l++
    };
    SK.prototype.M = function() {
        this.B && this.A.Ya() && this.A.close();
        this.g.removeEventListener("load", this.ba);
        this.g.removeEventListener("progress", this.na);
        this.g.removeEventListener("error", this.Z);
        iz(this.Ta);
        iz(this.ya);
        P.prototype.M.call(this)
    }
    ;
    var cL = function(a, b) {
        P.call(this);
        var c = this;
        this.A = a;
        this.F = b;
        this.g = new MediaSource;
        this.D = [];
        this.l = [];
        this.j = this.o = null;
        this.B = !1;
        this.C = function() {
            bL(c)
        }
        ;
        this.g.addEventListener("sourceopen", this.C)
    };
    w(cL, P);
    var dL = function(a) {
        a.o && a.A.removeEventListener("timeupdate", a.o)
    }
      , bL = function(a) {
        Qo("msmsw_oso");
        a.o = function() {
            if (!a.B)
                for (var e = u(a.l), f = e.next(); !f.done; f = e.next())
                    WK(f.value)
        }
        ;
        a.A.addEventListener("timeupdate", a.o);
        for (var b = 0; b < a.F.length; b++) {
            var c = a.F[b];
            K(J.getInstance(), "msmsw_mime" + b, c.mimeType);
            K(J.getInstance(), "msmsw_cs" + b, c.Ma.toString());
            var d = a.g.addSourceBuffer(c.mimeType);
            d ? (a.D.push(d),
            c = CF(SK, a.A, c, d, function() {
                a: if (!a.B) {
                    for (var e = u(a.l), f = e.next(); !f.done; f = e.next())
                        if (f = f.value,
                        f.B ? !f.za || f.j.updating || f.C.length : !f.K || f.j.updating || f.C.length)
                            break a;
                    a.g.endOfStream();
                    a.B = !0;
                    dL(a)
                }
            }, b),
            a.l.push(c)) : Qo("msmsw_sbf" + b)
        }
        K(J.getInstance(), "msmsw_ns", a.D.length.toString())
    };
    cL.prototype.M = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = u(this.l), b = a.next(); !b.done; b = a.next())
            b.value.dispose();
        dL(this);
        this.g.removeEventListener("sourceopen", this.C);
        P.prototype.M.call(this)
    }
    ;
    var eL = {};
    RegExp.prototype.hasOwnProperty("sticky");
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var fL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , gL = function() {
        for (var a = Array(36), b = 0, c, d = 0; d < 36; d++)
            d == 8 || d == 13 || d == 18 || d == 23 ? a[d] = "-" : d == 14 ? a[d] = "4" : (b <= 2 && (b = 33554432 + Math.random() * 16777216 | 0),
            c = b & 15,
            b >>= 4,
            a[d] = fL[d == 19 ? c & 3 | 8 : c]);
        return a.join("")
    };
    var iL = function(a) {
        bG.call(this, a);
        this.C = new Map;
        a = this.l;
        var b = a.indexOf(";")
          , c = null;
        b >= 0 ? (this.l = a.substring(0, b),
        c = a.substring(b + 1)) : this.l = a;
        hL(this, c)
    };
    w(iL, bG);
    iL.prototype.toString = function() {
        return jL(this, bG.prototype.toString.call(this))
    }
    ;
    iL.prototype.D = function() {
        return ""
    }
    ;
    var hL = function(a, b) {
        Hb(Pl(b)) || b.split(";").forEach(function(c) {
            var d = c.indexOf("=");
            if (!(d <= 0)) {
                var e = Ml(c.substring(0, d));
                c = Ml(c.substring(d + 1));
                d = a.C.get(e);
                d != null ? d.includes(c) || d.push(c) : d = [Pl(c)];
                a.C.set(e, d)
            }
        }, a)
    }
      , kL = function(a) {
        if (Hb(Pl("ord")))
            return null;
        a = a.C.get("ord");
        return a != null ? a : null
    }
      , lL = function(a, b) {
        Hb(Pl("ord")) || (b = b.map(Pl),
        a.C.set("ord", b))
    }
      , jL = function(a, b) {
        b = [Pl(b)];
        b.push.apply(b, ka(mL(a)));
        return b.join(";")
    }
      , mL = function(a) {
        var b = kL(a);
        b == null ? b = [Pl(Date.now())] : Hb(Pl("ord")) || a.C.delete("ord");
        var c = [];
        a.C.forEach(function(d, e) {
            d.forEach(function(f) {
                c.push(e + "=" + f)
            })
        });
        c.push("ord=" + b[0]);
        lL(a, b);
        return c
    };
    iL.prototype.F = function() {
        return new iL(this.toString())
    }
    ;
    var S = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        UNSUPPORTED_URL: 1022,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        qj: 2002
    };
    S[-1] = "DEPRECATED_ERROR_CODE";
    S[100] = "VAST_MALFORMED_RESPONSE";
    S[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    S[102] = "VAST_UNSUPPORTED_VERSION";
    S[200] = "VAST_TRAFFICKING_ERROR";
    S[201] = "VAST_UNEXPECTED_LINEARITY";
    S[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    S[300] = "VAST_WRAPPER_ERROR";
    S[301] = "VAST_LOAD_TIMEOUT";
    S[302] = "VAST_TOO_MANY_REDIRECTS";
    S[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    S[400] = "VIDEO_PLAY_ERROR";
    S[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    S[403] = "VAST_LINEAR_ASSET_MISMATCH";
    S[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    S[500] = "OVERLAY_AD_PLAYING_FAILED";
    S[501] = "NONLINEAR_DIMENSIONS_ERROR";
    S[502] = "OVERLAY_AD_LOADING_FAILED";
    S[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    S[602] = "COMPANION_REQUIRED_ERROR";
    S[603] = "COMPANION_AD_LOADING_FAILED";
    S[900] = "UNKNOWN_ERROR";
    S[901] = "VPAID_ERROR";
    S[1005] = "FAILED_TO_REQUEST_ADS";
    S[1007] = "VAST_ASSET_NOT_FOUND";
    S[1009] = "VAST_EMPTY_RESPONSE";
    S[1010] = "UNKNOWN_AD_RESPONSE";
    S[1011] = "UNSUPPORTED_LOCALE";
    S[1012] = "ADS_REQUEST_NETWORK_ERROR";
    S[1013] = "INVALID_AD_TAG";
    S[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    S[1020] = "STREAM_INITIALIZATION_FAILED";
    S[1021] = "ASSET_FALLBACK_FAILED";
    S[1022] = "UNSUPPORTED_URL";
    S[1101] = "INVALID_ARGUMENTS";
    S[1204] = "NATIVE_MESSAGE_ERROR";
    S[1205] = "AUTOPLAY_DISALLOWED";
    S[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    S[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var nL = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    w(nL, Error);
    m = nL.prototype;
    m.getAd = function() {
        return this.ad
    }
    ;
    m.getInnerError = function() {
        return this.g
    }
    ;
    m.getMessage = function() {
        return this.errorMessage
    }
    ;
    m.getErrorCode = function() {
        return this.errorCode
    }
    ;
    m.getVastErrorCode = function() {
        return this.errorCode < 1E3 ? this.errorCode : 900
    }
    ;
    m.getType = function() {
        return this.type
    }
    ;
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    var oL = ia(["https://imasdk.googleapis.com/js/sdkloader/car.js"]);
    Nk(oL);
    function pL(a) {
        return a ? (a = /\/(\d+)(?:,\d+){0,2}\//.exec(a)) && a.length === 2 ? a[1] : null : null
    }
    function qL(a) {
        if (a === "")
            return null;
        a = new bG(a);
        var b = a.g.get("slotname") || a.g.get("iu");
        if (!(b = b ? pL(b) : null)) {
            var c;
            b = (a = (c = a.g.get("client")) != null ? c : "") ? a : null
        }
        return b
    }
    function rL(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            b == null || b(d)
        }
        return ""
    }
    ;var sL = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString",
        b.IABTCF_gdprApplies = "gdprApplies",
        b.IABTCF_TCString = "tcString",
        b.IABTCF_AddtlConsent = "addtlConsent",
        b.IABGPP_HDR_GppString = "gppString",
        b.IABGPP_GppSID = "gppSid",
        b);
        for (var c in b)
            a[c] != null && (a[b[c]] = a[c],
            delete a[c]);
        c = a.uspString;
        this.uspString = typeof c === "string" ? c : "";
        c = a.gdprApplies;
        this.j = typeof c === "boolean" ? c ? "1" : "0" : typeof c !== "number" || c !== 1 && c !== 0 ? typeof c !== "string" || c !== "1" && c !== "0" ? "" : c === "1" ? "1" : "0" : c === 1 ? "1" : "0";
        c = a.tcString;
        this.g = typeof c === "string" ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        c = a.gppString;
        this.gppString = typeof c === "string" ? c : "";
        a = a.gppSid;
        this.l = typeof a === "string" ? a : ""
    };
    var tL = function(a) {
        this.g = a
    }
      , uL = function(a, b) {
        return al(a.g, b) && (a = a.g[b],
        typeof a === "boolean") ? a : !1
    }
      , vL = function(a) {
        return al(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration,
        typeof a === "number") ? a : NaN
    }
      , wL = function(a) {
        if (al(a.g, "forceExperimentIds")) {
            a = a.g.forceExperimentIds;
            var b = []
              , c = 0;
            Array.isArray(a) && a.forEach(function(d) {
                typeof d === "number" && (b[c++] = d)
            });
            return b
        }
        return null
    };
    var T = function() {
        this.F = "always";
        this.P = 4;
        this.L = null;
        this.A = 1;
        this.g = 0;
        this.o = !0;
        this.locale = "en";
        this.l = null;
        this.j = !1;
        this.X = this.V = "";
        this.C = null;
        this.Z = this.U = -1;
        this.B = "";
        this.K = !1;
        this.ba = null;
        this.J = !0;
        this.D = gL();
        this.O = {};
        this.I = "";
        this.H = 0;
        try {
            this.ba = Ls()[0]
        } catch (a) {}
    }
      , xL = function(a) {
        a = Pl(a);
        Hb(a) || (a = a.substring(0, 20));
        return a
    };
    m = T.prototype;
    m.setCompanionBackfill = function(a) {
        this.F = a
    }
    ;
    m.getCompanionBackfill = function() {
        return this.F
    }
    ;
    m.setNumRedirects = function(a) {
        this.P = a
    }
    ;
    m.getNumRedirects = function() {
        return this.P
    }
    ;
    m.setPpid = function(a) {
        this.L = a
    }
    ;
    m.getPpid = function() {
        return this.L
    }
    ;
    m.setVpaidAllowed = function(a) {
        typeof a === "boolean" && (this.A = a ? 1 : 0)
    }
    ;
    m.setVpaidMode = function(a) {
        this.A = a
    }
    ;
    m.Jg = function() {
        return this.A
    }
    ;
    m.setAutoPlayAdBreaks = function(a) {
        this.o = a
    }
    ;
    m.Wg = function() {
        return this.o
    }
    ;
    m.xh = function(a) {
        this.j = a
    }
    ;
    m.Ig = function() {
        return this.j
    }
    ;
    m.setLocale = function(a) {
        if (a = jH(a))
            this.locale = a
    }
    ;
    m.getLocale = function() {
        return this.locale
    }
    ;
    m.setPlayerType = function(a) {
        this.V = xL(a)
    }
    ;
    m.getPlayerType = function() {
        return this.V
    }
    ;
    m.setPlayerVersion = function(a) {
        this.X = xL(a)
    }
    ;
    m.getPlayerVersion = function() {
        return this.X
    }
    ;
    var yL = function(a) {
        if (a.C == null) {
            var b = {};
            var c = (new bG(cm().location.href)).g;
            if (uG(c, "tcnfp"))
                try {
                    b = JSON.parse(c.get("tcnfp"))
                } catch (d) {
                    c = Fl("ima.common.TestingConfiguration"),
                    Hl(c, "JSON parsing error: " + d, d)
                }
            a.C = new tL(b)
        }
        return a.C
    };
    m = T.prototype;
    m.yh = function(a) {
        this.U = a
    }
    ;
    m.zh = function(a) {
        this.Z = a
    }
    ;
    m.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.K = a
    }
    ;
    m.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.K
    }
    ;
    m.isCookiesEnabled = function() {
        return this.J
    }
    ;
    m.setCookiesEnabled = function(a) {
        a != null && (this.J = a)
    }
    ;
    m.setSessionId = function(a) {
        this.D = a
    }
    ;
    m.wh = function() {}
    ;
    m.Hg = function() {
        return !0
    }
    ;
    m.setFeatureFlags = function(a) {
        this.O = a
    }
    ;
    m.getFeatureFlags = function() {
        return this.O
    }
    ;
    var zL = function(a, b) {
        b = b === void 0 ? null : b;
        var c = {};
        b != null && (c.activeViewPushUpdates = b);
        c.activityMonitorMode = a.g;
        c.adsToken = a.B;
        c.autoPlayAdBreaks = a.o;
        c.companionBackfill = a.getCompanionBackfill();
        c.cookiesEnabled = a.isCookiesEnabled();
        c.disableCustomPlaybackForIOS10Plus = a.getDisableCustomPlaybackForIOS10Plus();
        c.engagementDetection = !0;
        c.isFunctionalTest = !1;
        c.isVpaidAdapter = a.j;
        c["1pJar"] = "";
        c.numRedirects = a.getNumRedirects();
        c.pageCorrelator = a.U;
        c.persistentStateCorrelator = jo();
        c.playerType = a.getPlayerType();
        c.playerVersion = a.getPlayerVersion();
        c.ppid = a.getPpid();
        c.privacyControls = "";
        c.reportMediaRequests = !1;
        c.sessionId = a.D;
        c.streamCorrelator = a.Z;
        c.testingConfig = yL(a).g;
        c.urlSignals = a.ba;
        c.vpaidMode = a.A;
        c.featureFlags = a.getFeatureFlags();
        c.cookieDeprecationLabel = a.I;
        c.cookieDeprecationLabelStatus = a.H;
        return c
    };
    T.prototype.getFeatureFlags = T.prototype.getFeatureFlags;
    T.prototype.setFeatureFlags = T.prototype.setFeatureFlags;
    T.prototype.getDisableFlashAds = T.prototype.Hg;
    T.prototype.setDisableFlashAds = T.prototype.wh;
    T.prototype.setSessionId = T.prototype.setSessionId;
    T.prototype.setCookiesEnabled = T.prototype.setCookiesEnabled;
    T.prototype.isCookiesEnabled = T.prototype.isCookiesEnabled;
    T.prototype.getDisableCustomPlaybackForIOS10Plus = T.prototype.getDisableCustomPlaybackForIOS10Plus;
    T.prototype.setDisableCustomPlaybackForIOS10Plus = T.prototype.setDisableCustomPlaybackForIOS10Plus;
    T.prototype.setStreamCorrelator = T.prototype.zh;
    T.prototype.setPageCorrelator = T.prototype.yh;
    T.prototype.getPlayerVersion = T.prototype.getPlayerVersion;
    T.prototype.setPlayerVersion = T.prototype.setPlayerVersion;
    T.prototype.getPlayerType = T.prototype.getPlayerType;
    T.prototype.setPlayerType = T.prototype.setPlayerType;
    T.prototype.getLocale = T.prototype.getLocale;
    T.prototype.setLocale = T.prototype.setLocale;
    T.prototype.getIsVpaidAdapter = T.prototype.Ig;
    T.prototype.setIsVpaidAdapter = T.prototype.xh;
    T.prototype.isAutoPlayAdBreaks = T.prototype.Wg;
    T.prototype.setAutoPlayAdBreaks = T.prototype.setAutoPlayAdBreaks;
    T.prototype.getVpaidMode = T.prototype.Jg;
    T.prototype.setVpaidMode = T.prototype.setVpaidMode;
    T.prototype.setVpaidAllowed = T.prototype.setVpaidAllowed;
    T.prototype.getPpid = T.prototype.getPpid;
    T.prototype.setPpid = T.prototype.setPpid;
    T.prototype.getNumRedirects = T.prototype.getNumRedirects;
    T.prototype.setNumRedirects = T.prototype.setNumRedirects;
    T.prototype.getCompanionBackfill = T.prototype.getCompanionBackfill;
    T.prototype.setCompanionBackfill = T.prototype.setCompanionBackfill;
    var AL = new T;
    var BL = function(a, b) {
        ue(a.__uspapi)("getUSPData", 1, function(c, d) {
            b.Da({
                Oe: c != null ? c : void 0,
                Re: d ? void 0 : 2
            })
        })
    }
      , CL = {
        Wd: function(a) {
            return a.Da
        },
        Wc: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            },
            a
        },
        rc: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                Oe: (c = b.returnValue) != null ? c : void 0,
                Re: b.success ? void 0 : 2
            })
        }
    };
    function DL(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            hf: b.__uspapiReturn.callId
        }
    }
    var EL = function(a, b) {
        b = b === void 0 ? {} : b;
        P.call(this);
        var c;
        this.timeoutMs = (c = b.timeoutMs) != null ? c : 500;
        this.caller = new DF(a,"__uspapiLocator",function(d) {
            return typeof d.__uspapi === "function"
        }
        ,DL);
        this.caller.A.set("getDataWithCallback", BL);
        this.caller.o.set("getDataWithCallback", CL)
    };
    w(EL, P);
    EL.prototype.M = function() {
        this.caller.dispose();
        P.prototype.M.call(this)
    }
    ;
    var FL = function(a, b) {
        var c = {};
        if (EF(a.caller)) {
            var d = Zj(function() {
                b(c)
            });
            GF(a.caller, "getDataWithCallback", {
                Da: function(e) {
                    e.Re || (c = ue(e.Oe));
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else
            b(c)
    };
    var GL = function(a) {
        G.call(this, a)
    };
    w(GL, G);
    GL.g = "tagging.common.regulations.ConsentManagementSettings";
    function HL(a) {
        var b = {};
        (new bG(a)).g.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    function IL(a) {
        return a === "1" || a === "true"
    }
    var JL = function(a, b, c, d) {
        b = b === void 0 ? {} : b;
        c = c === void 0 ? {} : c;
        this.j = a === void 0 ? !1 : a;
        this.o = d === void 0 ? !1 : d;
        a = {};
        b = u(Object.entries(b));
        for (d = b.next(); !d.done; d = b.next()) {
            var e = u(d.value);
            d = e.next().value;
            e = e.next().value;
            e != null && (a[d] = String(e))
        }
        this.l = a;
        this.g = new sL(c)
    }
      , KL = function(a, b) {
        var c = !1;
        c = c === void 0 ? !1 : c;
        var d = new bG(a);
        var e = d.l;
        (d = Gb(d.j, "googleads.g.doubleclick.net") && hH("/pagead/(live/)?ads", e)) || (e = new iL(a),
        d = e.j,
        e = jL(e, e.l),
        d = !Gb(d, ".g.doubleclick.net") && (Gb(d, "doubleclick.net") || Gb(d, "pagead2.googlesyndication.com")) && hH("/(ad|pfad)[x|i|j]?/", e));
        d || (d = new bG(a),
        e = d.l,
        d = Gb(d.j, "doubleclick.net") && hH("/gampad/(live/)?ads", e));
        (d = d || (new bG(a)).j == "bid.g.doubleclick.net") || (d = new bG(a),
        e = d.l,
        d = d.j === "ad.doubleclick.net" && hH("/dv3/adv", e));
        d || (d = new bG(a),
        e = d.l,
        d = d.j === "pubads.g.doubleclick.net" && (hH("/ssai/", e) || hH("/ondemand/", e)));
        return new JL(d,HL(a),b,c)
    }
      , NL = function(a) {
        var b = a.g.g;
        var c = LL(a, "gdpr_consent");
        b = b && b !== "tcunavailable" ? b : b === "tcunavailable" ? c || b : c || "";
        if (b === "tcunavailable")
            return null;
        var d;
        return (d = oF(b, ML(a))) != null ? d : null
    }
      , LL = function(a, b) {
        if (a.l.hasOwnProperty(b))
            return a.l[b]
    }
      , PL = function(a) {
        var b;
        if (!(b = OL(a))) {
            if (ML(a)) {
                a = NL(a);
                if (b = !!a) {
                    var c = c === void 0 ? {} : c;
                    b = MF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !c.idpcApplies : (c.idpcApplies || a.gdprApplies !== void 0 || c.Rj) && (c.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? PF(a, "1", 0) : !0 : !1
                }
                c = b
            } else
                c = !0;
            b = !c
        }
        return b
    }
      , OL = function(a) {
        a = LL(a, "ltd");
        return IL(a)
    }
      , ML = function(a) {
        var b = LL(a, "gdpr")
          , c = a.g.j;
        b = (c === "1" || c === "0" ? c : b !== void 0 ? b : "").toLowerCase();
        b = b === "true" || b === "1";
        return lr(rF) ? b || a.o : b
    }
      , QL = function(a) {
        var b = new GL;
        var c = !PL(a);
        c = ji(b, 5, c);
        ML(a) ? (a = NL(a),
        a = !!a && !RF(a, ["2", "7", "9", "10"], 3)) : a = !1;
        ji(c, 8, a);
        return b
    }
      , RL = function(a) {
        try {
            var b = a.g.gppString
              , c = a.g.l.split("_").map(function(d) {
                return Number(d)
            });
            return aG(b, c)
        } catch (d) {
            return !1
        }
    };
    var SL = function(a) {
        G.call(this, a)
    };
    w(SL, G);
    SL.prototype.getVersion = function() {
        return E(this, 2)
    }
    ;
    SL.g = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var TL = function(a) {
        G.call(this, a)
    };
    w(TL, G);
    var UL = function(a, b) {
        return oi(a, 2, b)
    }
      , VL = function(a, b) {
        return oi(a, 3, b)
    }
      , WL = function(a, b) {
        return oi(a, 4, b)
    }
      , XL = function(a, b) {
        return oi(a, 5, b)
    }
      , YL = function(a, b) {
        return oi(a, 9, b)
    }
      , ZL = function(a, b) {
        return Th(a, SL, 10, b)
    }
      , $L = function(a, b) {
        return ji(a, 11, b)
    }
      , aM = function(a, b) {
        return oi(a, 1, b)
    }
      , bM = function(a, b) {
        return ji(a, 7, b)
    };
    TL.g = "wireless.mdl.UserAgentClientHints";
    var cM = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function dM(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }
    function eM(a) {
        var b, c;
        return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }
    function fM() {
        var a = window;
        if (!eM(a))
            return null;
        var b = dM(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(cM).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function gM(a) {
        var b;
        return $L(ZL(XL(UL(aM(WL(bM(YL(VL(new TL, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new SL;
            d = oi(d, 1, c.brand);
            return oi(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function hM() {
        var a, b;
        return (b = (a = fM()) == null ? void 0 : a.then(function(c) {
            return gM(c)
        })) != null ? b : null
    }
    ;var jM = function() {
        this.appName = null;
        new JL;
        this.secureSignals = null;
        gL();
        this.deviceId = "";
        this.g = this.referrer = this.df = null;
        new Jn;
        new Hn;
        iM(this)
    }
      , kM = function() {
        jM.getInstance();
        var a = "h.3.668.1";
        AL.j && (a += "/vpaid_adapter");
        return a
    }
      , iM = function(a) {
        var b = hM();
        b && b.then(function(c) {
            if (c == null)
                c = null;
            else {
                c = wi(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (g > 255)
                        throw Error("go/unicode-to-byte-error");
                    d[e++] = g
                }
                c = $c(d, 3)
            }
            a.g = c
        })
    };
    jM.getInstance = function() {
        return I(jM)
    }
    ;
    var mM = function(a) {
        a = a === void 0 ? !1 : a;
        var b = yL(AL);
        if (b && uL(b, "forceCustomPlayback") || AL.j)
            return !0;
        if (ZG() && a)
            return !1;
        a = a && (ZG() || $G(10)) && AL.getDisableCustomPlaybackForIOS10Plus();
        return (Ic || Kc) && !a || Hc && (!Hc || !YG(XG, 4)) || lM() ? !0 : !1
    }
      , nM = function(a) {
        return a === null ? !1 : AL.j ? !0 : Mc || ZG() ? aH(a) ? ZG() || $G(10) && AL.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Hc && (!Hc || !YG(XG, 4)) || lM() ? !0 : !1
    }
      , oM = function() {
        var a = yL(AL);
        return a && uL(a, "disableOnScreenDetection") ? !1 : !$t()
    }
      , lM = function() {
        return pM() === 1 || pM() === 2
    }
      , pM = function() {
        switch (jM.getInstance(),
        0) {
        case 1:
            return 3;
        case 2:
            return 1
        }
        return (jM.getInstance(),
        jM.getInstance(),
        jM.getInstance().df === "tvos") ? 1 : au() ? 2 : 0
    };
    var qM = function(a, b) {
        return a.indexOf(b) == 0 ? a.substr(b.length) : null
    };
    function rM() {
        if ($t())
            return window.location.href;
        var a = As()
          , b = a.j
          , c = a.g;
        a = a.l;
        var d = null;
        if (a)
            try {
                var e = qG(a.url)
                  , f = e.l
                  , g = qM(f, "/v/");
                g || (g = qM(f, "/a/"));
                if (!g)
                    throw Error("Can not extract standalone amp url.");
                var h = qM("/" + g, "/s/")
                  , k = fG(e.g);
                k.remove("amp_js_v");
                k.remove("amp_lite");
                var l = h ? qG("https://" + h) : qG("http://" + g);
                eG(l, k);
                d = l.toString()
            } catch (n) {
                d = null
            }
        return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
    }
    function sM() {
        var a = gs();
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            b.url && b.url.includes("amp=1"))
                return !0;
        return window.context != null ? (a = Number(window.context.ampcontextVersion),
        isNaN(a) ? !1 : Math.floor(a) > 0) : As().l != null
    }
    function tM() {
        var a = cm().location.ancestorOrigins;
        return a ? a.length > 0 ? [].concat(ka(a)).join(",") : "" : ""
    }
    ;function uM() {
        var a = cm()
          , b = document;
        return new bG(a.parent === a ? a.location.href : b.referrer)
    }
    function vM(a, b) {
        pG(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (c <= 0)
                return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; f > 0 && e.length > c; )
                d = b.slice(0, f--),
                e = encodeURIComponent(d);
            pG(a, "url", d)
        } catch (g) {}
        return a.toString()
    }
    ;var U = {}
      , wM = (U.creativeView = "creativeview",
    U.start = "start",
    U.midpoint = "midpoint",
    U.firstQuartile = "firstquartile",
    U.thirdQuartile = "thirdquartile",
    U.complete = "complete",
    U.mute = "mute",
    U.unmute = "unmute",
    U.pause = "pause",
    U.rewind = "rewind",
    U.resume = "resume",
    U.fullscreen = "fullscreen",
    U.exitFullscreen = "exitfullscreen",
    U.expand = "expand",
    U.collapse = "collapse",
    U.close = "close",
    U.acceptInvitation = "acceptinvitation",
    U.adCanPlay = "adCanPlay",
    U.adStarted = "adStarted",
    U.abandon = "abandon",
    U.acceptInvitationLinear = "acceptinvitationlinear",
    U.engagedView = "engagedview",
    U.instreamAdComplete = "instreamAdComplete",
    U.skipShown = "skipshown",
    U.skippableStateChanged = "skippableStateChanged",
    U.skip = "skip",
    U.progress = "progress",
    U.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP",
    U.annotation_start = "annotation_start",
    U.annotation_click = "annotation_click",
    U.annotation_close = "annotation_close",
    U.cta_annotation_shown = "cta_annotation_shown",
    U.cta_annotation_clicked = "cta_annotation_clicked",
    U.cta_annotation_closed = "cta_annotation_closed",
    U.replay = "replay",
    U.stop = "stop",
    U.autoplayDisallowed = "autoplayDisallowed",
    U.error = "error",
    U.mediaLoadTimeout = "mediaLoadTimeout",
    U.linearChanged = "linearChanged",
    U.click = "click",
    U.contentPauseRequested = "contentPauseRequested",
    U.contentResumeRequested = "contentResumeRequested",
    U.discardAdBreak = "discardAdBreak",
    U.updateAdsRenderingSettings = "updateAdsRenderingSettings",
    U.durationChange = "durationChange",
    U.expandedChanged = "expandedChanged",
    U.autoClose = "autoClose",
    U.userClose = "userClose",
    U.userRecall = "userRecall",
    U.prefetched = "prefetched",
    U.loaded = "loaded",
    U.init = "init",
    U.allAdsCompleted = "allAdsCompleted",
    U.adMetadata = "adMetadata",
    U.adBreakReady = "adBreakReady",
    U.adBreakFetchError = "adBreakFetchError",
    U.log = "log",
    U.volumeChange = "volumeChange",
    U.companionBackfill = "companionBackfill",
    U.companionInitialized = "companionInitialized",
    U.companionImpression = "companionImpression",
    U.companionClick = "companionClick",
    U.impression = "impression",
    U.interaction = "interaction",
    U.adProgress = "adProgress",
    U.adBuffering = "adBuffering",
    U.trackingUrlPinged = "trackingUrlPinged",
    U.measurable_impression = "measurable_impression",
    U.custom_metric_viewable = "custom_metric_viewable",
    U.viewable_impression = "viewable_impression",
    U.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression",
    U.audio_audible = "audio_audible",
    U.audio_measurable = "audio_measurable",
    U.overlay_resize = "overlay_resize",
    U.overlay_unmeasurable_impression = "overlay_unmeasurable_impression",
    U.overlay_unviewable_impression = "overlay_unviewable_impression",
    U.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression",
    U.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression",
    U.externalActivityEvent = "externalActivityEvent",
    U.adEvent = "adEvent",
    U.configure = "configure",
    U.remainingTime = "remainingTime",
    U.destroy = "destroy",
    U.resize = "resize",
    U.volume = "volume",
    U.authorIconClicked = "videoAuthorIconClicked",
    U.authorNameClicked = "videoAuthorClicked",
    U.videoClicked = "videoClicked",
    U.videoIconClicked = "videoIconClicked",
    U.learnMoreClicked = "videoLearnMoreClicked",
    U.muteClicked = "videoMuteClicked",
    U.titleClicked = "videoTitleClicked",
    U.videoSkipClicked = "SKIPPED",
    U.unmuteClicked = "videoUnmuteClicked",
    U.vpaidEvent = "vpaidEvent",
    U.show_ad = "show_ad",
    U.video_card_endcap_collapse = "video_card_endcap_collapse",
    U.video_card_endcap_dismiss = "video_card_endcap_dismiss",
    U.video_card_endcap_impression = "video_card_endcap_impression",
    U.mediaUrlPinged = "mediaUrlPinged",
    U.breakStart = "breakstart",
    U.breakEnd = "breakend",
    U.omidReady = "omidReady",
    U.omidUnavailable = "omidUnavailable",
    U.omidAdSessionCompleted = "omidAdSessionCompleted",
    U.omidAdSessionAbandoned = "omidAdSessionAbandoned",
    U.verificationNotExecuted = "verificationNotExecuted",
    U.loadStart = "loadStart",
    U.seeked = "seeked",
    U.seeking = "seeking",
    U);
    var xM = new function() {
        this.g = new Map;
        this.l = 0;
        this.j = window.fetch != null
    }
    ;
    function yM(a) {
        var b = b === void 0 ? xM : b;
        var c = c === void 0 ? null : c;
        a = new mH(a,c ? c : c);
        var d = d === void 0 ? !1 : d;
        var e = e === void 0 ? !1 : e;
        a.g != null || e ? TH(b, a.url, d, e, a.g) : TH(b, a.url, d)
    }
    ;var V = function() {
        this.l = Math.random() < .01;
        this.j = Math.floor(Math.random() * 4503599627370496);
        this.g = null
    };
    V.prototype.report = function(a, b, c) {
        b = b === void 0 ? {} : b;
        if (y.G_testRunner == null && (this.l || (c === void 0 ? 0 : c))) {
            b.lid = a;
            kM() && (b.sdkv = kM());
            this.g && (b.palv = this.g);
            a = bq().sort().join(",");
            Hb(Pl(a)) || (b.e = a);
            b = zM(this, b);
            var d = new bG("http://pagead2.googlesyndication.com/pagead/gen_204");
            Uk(b, function(e, f) {
                e != null && pG(d, f, e == null ? "" : typeof e === "boolean" ? e ? "t" : "f" : "" + e)
            }, this);
            b = uM().o;
            b !== "http" && b !== "https" || cG(d, b);
            b = d.toString();
            a = d.g.get("url");
            a != null && Wb() && b.length > 2083 && (b = vM(d, a));
            yM(b)
        }
    }
    ;
    var zM = function(a, b) {
        b.id = "ima_html5";
        var c = uM();
        b.c = a.j;
        b.domain = c.j;
        return b
    };
    V.getInstance = function() {
        return I(V)
    }
    ;
    function AM(a) {
        var b = Date.now()
          , c = {};
        a = (c["x-afma-token-requester-type"] = a,
        c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(tM());
        return (new LH).get({
            url: c,
            withCredentials: !0,
            timeout: new kH,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            V.getInstance().report(182, (f.t = e - b,
            f.aos = tM(),
            f));
            return new BM(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = nH(Number(d.message)));
            d = Date.now();
            var f = {};
            V.getInstance().report(182, (f.except = e,
            f.t = d - b,
            f));
            return Promise.resolve(CM)
        })
    }
    var DM = function() {
        R.call(this);
        this.g = null;
        this.A = new pH(this);
        Hu(this, this.A);
        this.j = new Uz(72E5);
        this.o = Promise.resolve(CM)
    };
    w(DM, R);
    var EM = function(a) {
        var b = "requester_type_8";
        b = b === void 0 ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.o = AM(b).then(c);
        a.j = new Uz(72E5);
        a.A.listen(a.j, "tick", function() {
            a.o = AM(b).then(c)
        });
        a.j.start();
        Gu(a, function() {
            a.j.stop()
        })
    };
    DM.prototype.getId = function() {
        var a = this;
        return Ja(function(b) {
            if (b.g == 1)
                return a.g != null && a.g !== CM ? (b.g = 2,
                b = void 0) : b = ya(b, a.o, 3),
                b;
            b.g != 2 && (a.g = b.j);
            return b.return(a.g)
        })
    }
    ;
    var BM = function(a) {
        this.id = a
    }
      , CM = new BM("");
    var FM = function(a, b, c, d, e) {
        this.name = a;
        this.type = b;
        this.data = c;
        this.id = d;
        this.g = e
    }
      , GM = function(a) {
        R.call(this);
        this.A = [];
        this.j = !1;
        this.o = a || "goog_" + Ql++
    };
    w(GM, R);
    GM.prototype.connect = function() {
        for (this.j = !0; this.A.length !== 0; ) {
            var a = this.A.shift();
            a && this.sendMessage(a)
        }
    }
    ;
    var HM = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new FM(b,c,d,e,f)) : a.A.push(new FM(b,c,d,e,f))
    };
    GM.prototype.sendMessage = function() {}
    ;
    var IM = function(a, b, c, d, e, f) {
        e = e === void 0 ? "" : e;
        f = f === void 0 ? "" : f;
        My.call(this, a);
        this.messageType = b;
        this.ma = c;
        this.Tb = d;
        this.origin = e;
        this.id = f
    };
    w(IM, My);
    IM.prototype.getId = function() {
        return this.id
    }
    ;
    IM.prototype.toString = function() {
        return "Name: " + this.type + ", Type: " + this.messageType + ", Session: " + this.Tb + ", Data: " + Vo(new To, this.ma) + ", Origin: " + this.origin
    }
    ;
    var JM = {
        IMAGE: "Image",
        FLASH: "Flash",
        ALL: "All"
    }
      , KM = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    }
      , LM = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch",
        SELECT_FLUID: "SelectFluid"
    }
      , MM = function() {
        this.allowCustom = !0;
        this.creativeType = this.resourceType = "All";
        this.sizeCriteria = "SelectExactMatch";
        this.nearMatchPercent = 90;
        this.adSlotIds = []
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", JM);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", KM);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", LM);
    var OM = function(a, b) {
        b = b === void 0 ? new MM : b;
        this.g = a;
        this.settings = b ? b : new MM;
        this.resourceType = NM(KM, this.settings.resourceType) ? this.settings.resourceType : "All";
        this.creativeType = NM(JM, this.settings.creativeType) ? this.settings.creativeType : "All";
        this.sizeCriteria = NM(LM, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
        this.adSlotIds = this.settings.adSlotIds != null ? this.settings.adSlotIds : [];
        this.nearMatchPercent = typeof this.settings.nearMatchPercent === "number" && this.settings.nearMatchPercent > 0 && this.settings.nearMatchPercent <= 100 ? this.settings.nearMatchPercent : 90
    }
      , RM = function(a, b) {
        var c = [];
        b.forEach(function(d) {
            a.settings.allowCustom && (!Hb(d.getContent()) && (isNaN(d.Pd()) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.Pd()) && PM(a, d) ? c.push(d) : (d = QM(a, d),
            d != null && !Hb(d.getContent()) && c.push(d)))
        });
        return c
    };
    OM.prototype.Ve = function() {
        return this.resourceType
    }
    ;
    var PM = function(a, b) {
        var c;
        if (c = b.getContentType() !== "Flash") {
            if (c = a.resourceType === "All" || a.resourceType === b.Ve())
                c = b.getContentType(),
                c = c == null ? !0 : a.creativeType === "All" || a.creativeType === c;
            c && (c = b.getAdSlotId(),
            c = a.adSlotIds.length === 0 ? !0 : c != null ? a.adSlotIds.includes(c) : !1)
        }
        if (c)
            if (c = b.getSize(),
            (b = !!b.data.fluidSize) || a.g.Te)
                a = b && a.g.Te;
            else if (a.sizeCriteria === "IgnoreSize" || Tk(a.g.size, c))
                a = !0;
            else {
                if (b = a.sizeCriteria === "SelectNearMatch")
                    b = c.width,
                    c = c.height,
                    b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            }
        else
            a = !1;
        return a
    }
      , QM = function(a, b) {
        b = SM(b);
        return b == null ? null : b.find(function(c) {
            return PM(a, c)
        }) || null
    }
      , NM = function(a, b) {
        return b != null && bl(a, b)
    };
    function TM(a) {
        var b = new Hn;
        var c = a.uc;
        var d = c.clientWidth;
        var e = c.clientHeight;
        typeof c.getBoundingClientRect === "function" && im(Wl(c), c) ? (c = c.getBoundingClientRect(),
        d = document.elementsFromPoint(c.x + .5 * d, c.y + .5 * e)) : d = [];
        if (d = UM(d, a)) {
            a = new Gn;
            c = d.getBoundingClientRect();
            e = c.y;
            c = c.x;
            var f = new En;
            e = mi(f, 1, e);
            e = mi(e, 2, c);
            c = d.duration;
            var g = d.clientWidth;
            f = d.clientHeight;
            var h = new Fn;
            g = mi(h, 1, g);
            f = mi(g, 2, f);
            c === Number.POSITIVE_INFINITY || isNaN(c) || (g = new Dn,
            c = li(g, 1, c),
            C(a, Dn, 3, c));
            d = Number(window.getComputedStyle(d).opacity);
            e = C(a, En, 1, e);
            e = C(e, Fn, 2, f);
            li(e, 4, d);
            b = C(b, Gn, 2, a)
        } else
            a = new Gn,
            b = C(b, Gn, 2, a);
        return b
    }
    function UM(a, b) {
        if (a.length === 0)
            return null;
        var c = b.ga.A.g, d, e, f = (e = (d = b.Aa) == null ? void 0 : d.A.g) != null ? e : null;
        a = a.filter(function(g) {
            return g.tagName === "VIDEO" && !g.isEqualNode(c) && !g.isEqualNode(f)
        });
        return a.length > 0 ? a[0] : null
    }
    ;var VM = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    VM.prototype.getErrorCode = function() {
        return this.errorCode
    }
    ;
    VM.prototype.getMessage = function() {
        return this.message
    }
    ;
    var WM = new VM("Failed to initialize ad playback element before starting ad playback.",400)
      , XM = new VM("The provided {0} information: {1} is invalid.",1101);
    function YM(a, b) {
        var c = b === void 0 ? null : b;
        var d = Ka.apply(2, arguments);
        if (!(c instanceof nL)) {
            var e = a.getErrorCode()
              , f = a.getMessage();
            if (d.length > 0)
                for (var g = 0; g < d.length; g++)
                    f = f.replace(new RegExp("\\{" + g + "\\}","ig"), d[g]);
            d = new nL("adPlayError",f,e);
            d.g = c;
            c = d
        }
        return c
    }
    ;var ZM = {
        ug: [],
        sg: 0,
        Ag: [],
        bk: !1
    };
    var $M = function() {};
    $M.getInstance = function() {
        throw Error("Must be overridden");
    }
    ;
    var aN = function() {
        this.g = 0
    };
    w(aN, $M);
    aN.Bb = void 0;
    aN.getInstance = function() {
        return aN.Bb ? aN.Bb : aN.Bb = new aN
    }
    ;
    function bN(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? {} : d;
        var e = aN.getInstance();
        e.g === 0 && (e.g = Math.random() < .001 ? 2 : 1);
        e.g === 2 && (e = {},
        Mm(Object.assign({}, (e.c = String(a),
        e.pc = String(Gm()),
        e.em = c,
        e.lid = b,
        e.eids = I(Vp).g().join(),
        e), d), "esp"))
    }
    ;function cN() {
        var a = window;
        var b = b === void 0 ? function() {}
        : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                ek(a, "load", d)
            };
            dk(a, "load", d)
        }
        )
    }
    ;var dN = function() {
        this.cache = {}
    }
      , fN = function() {
        eN || (eN = new dN);
        return eN
    }
      , gN = function(a) {
        if (a !== void 0)
            for (var b = u(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value,
                c.startsWith("_GESPSK"))
                    try {
                        a.removeItem(c)
                    } catch (d) {}
        eN = new dN
    }
      , hN = function(a) {
        var b = Rf(kh(a, 3));
        if (!b)
            return 3;
        if (Yh(a, 2) === void 0)
            return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    dN.prototype.get = function(a, b) {
        if (this.cache[a])
            return {
                Pb: this.cache[a],
                success: !0
            };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            bN(6, a, (d = g) == null ? void 0 : d.message);
            return {
                Pb: null,
                success: !1
            }
        }
        if (!c)
            return {
                Pb: null,
                success: !0
            };
        try {
            var e = cB(c);
            this.cache[a] = e;
            return {
                Pb: e,
                success: !0
            }
        } catch (g) {
            var f;
            bN(5, a, (f = g) == null ? void 0 : f.message);
            return {
                Pb: null,
                success: !1
            }
        }
    }
    ;
    dN.prototype.set = function(a, b) {
        var c = ue(Yh(a, 1))
          , d = "_GESPSK-" + c;
        bB(a);
        try {
            b.setItem(d, wi(a))
        } catch (f) {
            var e;
            bN(7, c, (e = f) == null ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    }
    ;
    dN.prototype.remove = function(a, b) {
        a = ue(Yh(a, 1));
        try {
            b.removeItem("_GESPSK-" + a),
            delete this.cache[a]
        } catch (d) {
            var c;
            bN(8, a, (c = d) == null ? void 0 : c.message)
        }
    }
    ;
    var eN = null;
    function iN(a) {
        var b = new vD;
        bN(56, "", null);
        if (a) {
            var c = []
              , d = RegExp("^_GESPSK-(.+)$");
            try {
                for (var e = 0; e < a.length; e++) {
                    var f = (d.exec(a.key(e)) || [])[1];
                    f && c.push(f)
                }
            } catch (k) {}
            c = u(c);
            e = c.next();
            for (d = {}; !e.done; d = {
                hc: void 0
            },
            e = c.next())
                if (d.hc = e.value,
                (e = fN().get(d.hc, a).Pb) && !jN(b, d.hc) && (f = hN(e),
                f !== 2 && f !== 3)) {
                    ji(e, 9, !1);
                    if ((f = Yh(e, 2)) && f.length > 1024) {
                        var g = {};
                        bN(55, d.hc, null, (g.sl = String(f.length),
                        g));
                        f = e.ib(YA(108));
                        nh(f, 2)
                    }
                    Wh(b, 2, $A, e);
                    e = Yh(e, 2);
                    g = f = void 0;
                    var h = {};
                    bN(19, d.hc, null, (h.hs = e ? "1" : "0",
                    h.sl = String((g = (f = e) == null ? void 0 : f.length) != null ? g : -1),
                    h))
                }
        }
        if (!Rh(b, $A, 2, sh()).length)
            return null;
        a = {};
        bN(50, "", null, (a.ns = String(Rh(b, $A, 2, sh()).length),
        a));
        return $c(b.g(), 3)
    }
    function jN(a, b) {
        return Rh(a, $A, 2, sh()).some(function(c) {
            return Yh(c, 1) === b && Yh(c, 2) != null
        })
    }
    ;var kN = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    };
    var lN = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, lN.prototype);
        this.name = "InputError"
    };
    w(lN, Error);
    var mN = function() {
        this.sb = !1
    }
      , nN = function() {
        mN.apply(this, arguments);
        this.kd = new kN
    };
    w(nN, mN);
    var oN = function(a, b) {
        a.sb || (a.sb = !0,
        a.jd = b,
        a.kd.resolve(b))
    };
    da.Object.defineProperties(nN.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.kd.promise
            }
        },
        rf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.be
            }
        }
    });
    var pN = function() {
        nN.apply(this, arguments)
    };
    w(pN, nN);
    var qN = function(a, b) {
        oN(a, b)
    }
      , rN = function(a, b) {
        b.then(function(c) {
            oN(a, c)
        })
    };
    pN.prototype.ib = function(a) {
        this.sb || (this.sb = !0,
        this.jd = null,
        this.be = a,
        this.kd.reject(a))
    }
    ;
    var sN = function(a) {
        this.sb = !1;
        this.g = a
    };
    w(sN, mN);
    sN.prototype.rf = function() {
        return this.g.sb
    }
    ;
    da.Object.defineProperties(sN.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.be
            }
        }
    });
    var tN = function(a) {
        sN.call(this, a);
        this.g = a
    };
    w(tN, sN);
    da.Object.defineProperties(tN.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return ue(this.g.jd)
            }
        }
    });
    var uN = function(a) {
        sN.call(this, a);
        this.g = a
    };
    w(uN, sN);
    da.Object.defineProperties(uN.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.g.jd) != null ? a : null
            }
        }
    });
    var vN = function() {
        nN.apply(this, arguments)
    };
    w(vN, nN);
    vN.prototype.notify = function() {
        oN(this, null)
    }
    ;
    var wN = function() {
        P.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    w(wN, P);
    var xN = function(a, b) {
        a.j.push({
            Ec: !1,
            Kd: b
        })
    };
    wN.prototype.Ec = function(a) {
        var b = this.j.find(function(c) {
            return c.Kd === a
        });
        b && (b.Ec = !0)
    }
    ;
    wN.prototype.M = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        P.prototype.M.call(this)
    }
    ;
    function yN(a, b) {
        var c, d;
        return Ja(function(e) {
            if (e.g == 1)
                return c = b ? a.filter(function(f) {
                    return !f.Ec
                }) : a,
                ya(e, Promise.all(c.map(function(f) {
                    return f.Kd.promise
                })), 2);
            if (a.length === c.length)
                return e.return();
            d = a.filter(function(f) {
                return f.Ec
            });
            return ya(e, Promise.race([Promise.all(d.map(function(f) {
                return f.Kd.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            }
            )]), 0)
        })
    }
    var zN = function(a, b) {
        P.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.A = !1;
        this.g = new wN;
        Hu(this, this.g)
    };
    w(zN, P);
    zN.prototype.start = function() {
        var a = this, b, c;
        return Ja(function(d) {
            if (d.g == 1) {
                if (a.A)
                    return d.return();
                a.A = !0;
                d.l = 2;
                return ya(d, yN(a.g.j, (b = a.J) != null ? b : a.timeoutMs), 4)
            }
            if (d.g != 2) {
                if (!a.Ga()) {
                    for (var e = 0, f = u(a.g.l), g = f.next(); !g.done; g = f.next()) {
                        if (g.value.g.jd == null)
                            throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.j()
                }
                return za(d)
            }
            c = Aa(d);
            if (a.Ga())
                return d.return();
            if (!(c instanceof lN) && c instanceof Error && (a.D ? a.D(a.id, c) : a.B(a.id, c),
            a.g.g.length))
                for (e = new lN(c.message),
                f = u(a.g.g),
                g = f.next(); !g.done; g = f.next())
                    if (g = g.value,
                    !g.rf) {
                        var h = e;
                        g.sb = !0;
                        g.be = h;
                        g.kd.reject(h)
                    }
            d.g = 0
        })
    }
    ;
    var AN = function(a) {
        var b = b === void 0 ? new pN : b;
        a.g.g.push(b);
        return b
    }
      , BN = function(a) {
        var b = b === void 0 ? new vN : b;
        a.g.g.push(b);
        return b
    }
      , CN = function(a, b) {
        xN(a.g, b);
        b = new tN(b);
        a.g.l.push(b);
        return b
    }
      , DN = function(a, b) {
        xN(a.g, b);
        return new uN(b)
    };
    var EN = function() {
        P.call(this);
        this.o = [];
        this.B = [];
        this.A = {};
        this.g = [];
        this.j = new kN;
        this.l = {}
    };
    w(EN, P);
    var FN = function(a, b) {
        Hu(a, b);
        a.o.push(b)
    }
      , GN = function(a, b) {
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next())
            FN(a, c.value)
    }
      , HN = function(a) {
        var b, c, d, e, f, g, h, k, l, n, p, q;
        Ja(function(t) {
            switch (t.g) {
            case 1:
                if (!a.g.length) {
                    t.g = 2;
                    break
                }
                return ya(t, Promise.all(a.g.map(function(v) {
                    return v.j.promise
                })), 2);
            case 2:
                b = u(a.o);
                for (c = b.next(); !c.done; c = b.next())
                    d = c.value,
                    d.start();
                e = u(a.B);
                for (f = e.next(); !f.done; f = e.next())
                    g = f.value,
                    HN(g);
                if (!a.l) {
                    t.g = 4;
                    break
                }
                h = Object.keys(a.l);
                if (!h.length) {
                    t.g = 4;
                    break
                }
                return ya(t, Promise.all(Object.values(a.l).map(function(v) {
                    return v.promise
                })), 6);
            case 6:
                for (k = t.j,
                l = 0,
                n = u(h),
                p = n.next(); !p.done; p = n.next())
                    q = p.value,
                    a.A[q] = k[l++];
            case 4:
                return a.j.resolve(a.A),
                t.return(a.j.promise)
            }
        })
    };
    EN.prototype.M = function() {
        P.prototype.M.call(this);
        this.o.length = 0;
        this.B.length = 0;
        this.g.length = 0
    }
    ;
    var IN = function(a, b) {
        zN.call(this, a);
        this.id = a;
        this.B = b
    };
    w(IN, zN);
    var JN = function(a, b, c, d) {
        IN.call(this, 1041, d);
        this.storage = b;
        this.o = CN(this, a);
        c && (this.l = DN(this, c))
    };
    w(JN, IN);
    JN.prototype.j = function() {
        var a = this.o.value, b, c, d = (c = this.storage) != null ? c : (b = this.l) == null ? void 0 : b.value;
        d && fN().set(a, d) && Yh(a, 2) != null && bN(27, ue(Yh(a, 1)))
    }
    ;
    var KN = function(a, b) {
        IN.call(this, 1094, b);
        this.l = BN(this);
        this.o = CN(this, a)
    };
    w(KN, IN);
    KN.prototype.j = function() {
        var a = this.o.value;
        a && (gN(a),
        this.l.notify())
    }
    ;
    var LN = function(a, b) {
        IN.call(this, 1048, b);
        this.l = AN(this);
        this.o = AN(this);
        this.C = CN(this, a)
    };
    w(LN, IN);
    LN.prototype.j = function() {
        var a = this.C.value
          , b = function(c) {
            var d = {};
            bN(c, ue(Yh(a, 1)), null, (d.tic = String(Math.round((Date.now() - ue(Rf(kh(a, 3)))) / 6E4)),
            d))
        };
        switch (hN(a)) {
        case 0:
            b(24);
            break;
        case 1:
            b(25);
            oN(this.o, a);
            break;
        case 2:
            b(26);
            oN(this.l, a);
            break;
        case 3:
            bN(9, ue(Yh(a, 1)));
            oN(this.l, a);
            break;
        case 4:
            b(23),
            oN(this.l, a)
        }
    }
    ;
    var MN = function(a, b, c) {
        IN.call(this, 1027, c);
        this.Jc = a;
        this.storage = b;
        this.l = AN(this);
        this.o = AN(this)
    };
    w(MN, IN);
    MN.prototype.j = function() {
        var a = fN().get(this.Jc, this.storage).Pb;
        if (!a) {
            a = bB(aB(this.Jc));
            var b = this.o
              , c = a.ib(YA(100));
            oN(b, c)
        }
        oN(this.l, a)
    }
    ;
    var NN = function(a, b, c) {
        IN.call(this, 1046, c);
        this.output = BN(this);
        this.l = AN(this);
        this.o = CN(this, b);
        xN(this.g, a)
    };
    w(NN, IN);
    NN.prototype.j = function() {
        oN(this.l, this.o.value)
    }
    ;
    var ON = function(a, b, c) {
        IN.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = AN(this);
        this.o = AN(this);
        this.C = AN(this);
        this.F = CN(this, b)
    };
    w(ON, IN);
    ON.prototype.j = function() {
        var a = this
          , b = this.F.value
          , c = ue(Yh(b, 1));
        bN(18, c);
        try {
            var d = ro();
            this.collectorFunction().then(function(e) {
                bN(29, c, null, {
                    delta: String(ro() - d)
                });
                var f = a.l
                  , g = oi(b, 2, e);
                oN(f, g);
                oN(a.C, e != null ? e : null)
            }).catch(function(e) {
                bN(28, c, PN(e));
                e = a.o;
                var f = b.ib(YA(106));
                oN(e, f)
            })
        } catch (e) {
            bN(1, c, PN(e)),
            qN(this.o, b.ib(YA(107)))
        }
    }
    ;
    function PN(a) {
        return typeof a === "string" ? a : a instanceof Error ? a.message : null
    }
    ;var QN = function(a, b) {
        IN.call(this, 1028, b);
        this.l = AN(this);
        this.o = CN(this, a)
    };
    w(QN, IN);
    QN.prototype.j = function() {
        var a = this.o.value
          , b = ue(Yh(a, 1));
        Rf(kh(a, 3)) != null || bN(35, b);
        oN(this.l, a)
    }
    ;
    var RN = function(a, b, c, d) {
        IN.call(this, 1050, d);
        this.C = c;
        this.l = AN(this);
        this.o = CN(this, a);
        this.F = DN(this, b)
    };
    w(RN, IN);
    RN.prototype.j = function() {
        var a = this.o.value
          , b = ue(Yh(a, 1))
          , c = this.F.value;
        if (c == null)
            bN(41, b),
            a.ib(YA(111)),
            oN(this.l, a);
        else if (typeof c !== "string")
            bN(21, b),
            b = this.l,
            a = a.ib(YA(113)),
            oN(b, a);
        else {
            if (c.length > this.C) {
                var d = {};
                bN(12, b, null, (d.sl = String(c.length),
                d));
                b = a.ib(YA(108));
                nh(b, 2)
            } else
                c.length || bN(20, b),
                nh(a, 10);
            oN(this.l, a)
        }
    }
    ;
    var SN = function(a) {
        IN.call(this, 1046, a);
        this.output = BN(this)
    };
    w(SN, IN);
    SN.prototype.j = function() {
        var a = this;
        cN().then(function() {
            a.output.notify()
        })
    }
    ;
    function TN(a, b, c, d, e) {
        var f, g, h, k, l, n, p, q, t, v, x, D, M;
        return Ja(function(Q) {
            return Q.g == 1 ? (f = new EN,
            g = new MN(a,c,e),
            FN(f, g),
            FN(f, new JN(g.o,void 0,d,e)),
            h = new QN(g.l,e),
            FN(f, h),
            k = new LN(h.l,e),
            FN(f, k),
            l = new ON(b,k.l,e),
            FN(f, l),
            FN(f, new JN(l.o,void 0,d,e)),
            n = new RN(l.l,l.C,1024,e),
            FN(f, n),
            FN(f, new JN(n.l,void 0,d,e)),
            p = new SN(e),
            FN(f, p),
            q = new NN(p.output,k.o,e),
            FN(f, q),
            t = new ON(b,q.l,e),
            FN(f, t),
            v = new JN(t.l,void 0,d,e),
            FN(f, v),
            HN(f),
            M = a,
            ya(Q, n.l.promise, 2)) : Q.return({
                id: M,
                collectorGeneratedData: (D = (x = Q.j) == null ? void 0 : Yh(x, 2)) != null ? D : null
            })
        })
    }
    ;var UN = function(a, b, c, d) {
        IN.call(this, 1059, d);
        this.F = b;
        this.C = c;
        this.l = AN(this);
        this.H = CN(this, a);
        this.o = DN(this, c)
    };
    w(UN, IN);
    UN.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.H.value, c = b.id, d = b.collectorFunction, e;
            b = ue((e = b.networkCode) != null ? e : c);
            c = {};
            bN(42, b, null, (c.ea = String(Number(this.F)),
            c));
            rN(this.l, TN(b, d, a, this.C, this.B))
        }
    }
    ;
    var VN = function(a, b, c) {
        c = c === void 0 ? ZM : c;
        IN.call(this, 1057, b);
        this.l = a;
        this.F = c;
        this.o = AN(this);
        this.C = AN(this)
    };
    w(VN, IN);
    VN.prototype.j = function() {
        if (this.l)
            if (typeof this.l !== "object")
                bN(46, "UNKNOWN_COLLECTOR_ID"),
                WN(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id
                  , b = this.l.networkCode;
                a && b && (delete this.l.id,
                bN(47, a + ";" + b));
                a = b != null ? b : a;
                typeof a !== "string" ? (b = {},
                bN(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
                b)),
                WN(this, "INVALID_COLLECTOR_ID", 102)) : typeof this.l.collectorFunction !== "function" ? (bN(14, a),
                WN(this, a, 105)) : this.F.Ag.includes(a) ? (bN(22, a),
                WN(this, a, 104)) : oN(this.C, this.l)
            }
        else
            bN(39, "UNKNOWN_COLLECTOR_ID"),
            WN(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var WN = function(a, b, c) {
        a = a.o;
        b = aB(b).ib(YA(c));
        oN(a, b)
    };
    var XN = function(a, b, c, d, e) {
        var f = document;
        f = f === void 0 ? document : f;
        e = e === void 0 ? ZM : e;
        this.j = b;
        this.o = c;
        this.A = f;
        this.L = d;
        this.g = e;
        this.I = [];
        this.C = [];
        this.B = [];
        this.l = 0;
        a = u(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    XN.prototype.push = function(a) {
        var b = this;
        this.o || this.L();
        var c = function(f, g) {
            return void YN(b, f, g)
        };
        a = new VN(a,c,this.g);
        var d = new JN(a.o,void 0,this.j,c);
        c = new UN(a.C,this.o,this.j,c,this.g);
        var e = new EN;
        GN(e, [a, d, c]);
        HN(e);
        a = c.l.promise;
        this.I.push(a);
        d = u(this.C);
        for (c = d.next(); !c.done; c = d.next())
            a.then(c.value)
    }
    ;
    XN.prototype.addOnSignalResolveCallback = function(a) {
        this.C.push(a);
        for (var b = u(this.I), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    XN.prototype.addErrorHandler = function(a) {
        this.B.push(a)
    }
    ;
    XN.prototype.clearAllCache = function() {
        var a = this
          , b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (this.l === 1) {
            var c = {};
            bN(49, "", null, (c.url = b,
            c))
        } else if (this.g.ug.includes(String(zm(b != null ? b : ""))))
            c = {},
            bN(48, "", null, (c.url = b,
            c));
        else {
            var d = new EN;
            c = new KN(this.j,function(e, f) {
                return void YN(a, e, f)
            }
            );
            FN(d, c);
            HN(d);
            this.l = 1;
            setTimeout(function() {
                a.l = 0
            }, this.g.sg * 1E3);
            d = {};
            bN(43, "", null, (d.url = b,
            d));
            return c.l.promise
        }
    }
    ;
    var YN = function(a, b, c) {
        a = u(a.B);
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            d(b, c)
    }
      , ZN = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
        ;
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    function $N(a, b, c, d, e, f) {
        f = f === void 0 ? ZM : f;
        vm() !== wm() ? bN(16, "") : aO(a, "encryptedSignalProviders", c, e) && aO(a, "secureSignalProviders", c, e) || (bN(38, ""),
        bO(a, "encryptedSignalProviders", b, f, c, d, e),
        bO(a, "secureSignalProviders", b, f, c, function() {}, e))
    }
    function aO(a, b, c, d) {
        if (a[b] === void 0 || a[b]instanceof Array)
            return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }
    function bO(a, b, c, d, e, f, g) {
        var h, k = new XN((h = a[b]) != null ? h : [],c,b === "secureSignalProviders",f,d);
        a[b] = new ZN(k);
        g && k.addOnSignalResolveCallback(g);
        k.addErrorHandler(e)
    }
    function cO(a, b, c, d, e) {
        var f = f === void 0 ? ZM : f;
        var g = new pN;
        oN(g, b);
        $N(a, g, c, d, e, f)
    }
    function dO(a, b, c, d) {
        var e = eO
          , f = new Map;
        b = b.map(function(g) {
            var h = g.Jc;
            return new Promise(function(k) {
                f.set(h, k)
            }
            )
        });
        cO(a, c, d, e, function(g) {
            var h = g.collectorGeneratedData;
            g = g.id;
            var k;
            return void ((k = f.get(g)) == null ? void 0 : k({
                collectorGeneratedData: h,
                id: g
            }))
        });
        return b
    }
    ;function fO() {
        var a;
        return (a = y.googletag) != null ? a : y.googletag = {
            cmd: []
        }
    }
    ;function gO(a) {
        if (!a || PL(a))
            return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }
    function hO(a, b) {
        (a = gO(a)) && cO(fO(), a, function(c, d) {
            return void iO(d)
        }, eO, b)
    }
    function jO(a, b) {
        return (b = gO(b)) && a.length !== 0 ? dO(fO(), a, b, function(c, d) {
            return void iO(d)
        }) : null
    }
    function iO(a) {
        var b = Fl("ima.common.espUtils");
        Il(b, "Error refreshing ESP Signals: " + a.toString)
    }
    function eO() {
        var a = Fl("ima.common.espUtils");
        Il(a, "Using deprecated googletag.encryptedSignalProviders. Please use googletag.secureSignalProviders instead.")
    }
    ;function kO(a, b, c, d) {
        var e = new kN
          , f = ""
          , g = function(k) {
            try {
                var l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (ek(a, "message", g),
                l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (n) {}
        }
          , h = lO(a);
        return h ? (dk(a, "message", g),
        f = c(h),
        e.promise) : (c = $Q(a)) ? (f = String(Math.floor(xm() * 2147483647)),
        dk(a, "message", g),
        b(c, f),
        e.promise) : null
    }
    function aR(a) {
        return kO(a, function(b, c) {
            var d, e;
            return void ((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }
    function bR() {
        var a = window;
        return !!lO(a) || !!$Q(a)
    }
    function lO(a) {
        var b;
        if (typeof ((b = a.gmaSdk) == null ? void 0 : b.getQueryInfo) === "function")
            return a.gmaSdk
    }
    function $Q(a) {
        var b, c, d, e, f, g;
        if (typeof ((b = a.webkit) == null ? void 0 : (c = b.messageHandlers) == null ? void 0 : (d = c.getGmaQueryInfo) == null ? void 0 : d.postMessage) === "function" || typeof ((e = a.webkit) == null ? void 0 : (f = e.messageHandlers) == null ? void 0 : (g = f.getGmaSig) == null ? void 0 : g.postMessage) === "function")
            return a.webkit.messageHandlers
    }
    (function(a, b) {
        return we(function(c, d) {
            if (!De(c))
                return !1;
            for (var e = u(Object.entries(a)), f = e.next(); !f.done; f = e.next()) {
                var g = u(f.value);
                f = g.next().value;
                g = g.next().value;
                if (!(f in c)) {
                    if (g.Zg === !0)
                        continue;
                    xe(d, "Missing required property " + f);
                    return !1
                }
                if (!qe(g, c[f], d, "For property " + f))
                    return !1
            }
            return !0
        }, b)
    }
    )({
        vc: Ae,
        pn: Ae,
        eid: Ae,
        vnm: function(a) {
            return Fe(we(function(b, c) {
                return b === void 0 ? !0 : a(b, c)
            }, function() {
                return "optional " + a.ec().trim()
            }))
        }(Ae),
        js: Ae
    }, "RawGmaSdkStaticSignalObject");
    var cR = function() {
        this.timeoutMs = 500;
        this.j = aR;
        this.signal = null;
        this.g = 0
    }
      , dR = function(a) {
        if (Yp(tq) || !bR())
            return Promise.resolve(null);
        var b;
        return ((b = a.j(window)) != null ? b : Promise.resolve(null)).catch(function() {
            return "0"
        })
    }
      , fR = function(a) {
        var b;
        return Ja(function(c) {
            if (c.g == 1)
                return b = Date.now() - a.g,
                !a.signal || b > 3E5 ? c = ya(c, eR(a), 3) : (c.g = 2,
                c = void 0),
                c;
            c.g != 2 && (a.signal = c.j,
            a.g = Date.now());
            return c.return(a.signal)
        })
    }
      , eR = function(a) {
        return Promise.race([dR(a).then(function(b) {
            if (b == null)
                return null;
            a.signal = b.length > 1E4 ? "0" : b;
            a.g = Date.now();
            return a.signal
        }), Wz(a.timeoutMs, "0")])
    };
    function gR(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }
    function hR(a, b) {
        return b && b.toString().indexOf("__REGEXP") === 0 ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
        new RegExp(a[1],a[2] || "")) : b
    }
    var iR = function(a, b) {
        GM.call(this, b);
        this.B = a;
        this.g = null;
        this.C = new pH(this);
        this.C.listen(cm(), "message", this.D)
    };
    w(iR, GM);
    var jR = function(a) {
        if (a == null || typeof a !== "string" || !a.startsWith("ima://"))
            return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, hR)
        } catch (b) {
            return a = Fl("ima.common.IframeChannel"),
            Hl(a, "JSON parsing error: " + b, b),
            null
        }
    };
    iR.prototype.sendMessage = function(a) {
        if (this.g != null && this.g.postMessage != null) {
            var b = this.g
              , c = b.postMessage
              , d = {};
            d.name = a.name;
            d.type = a.type;
            a.data != null && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.o;
            d.channel = this.B;
            a = "ima://" + Vo(new To(gR), d);
            c.call(b, a, "*")
        }
        this.g != null && this.g.postMessage == null && V.getInstance().report(11)
    }
    ;
    iR.prototype.M = function() {
        Fu(this.C);
        this.g = null;
        GM.prototype.M.call(this)
    }
    ;
    iR.prototype.D = function(a) {
        a = a.g;
        var b = jR(a.data);
        if (kR(this, b)) {
            if (this.g === null)
                this.g = a.source,
                this.j || this.connect();
            else if (this.g !== a.source)
                return;
            kR(this, b) && this.dispatchEvent(new IM(b.name,b.type,b.data || {},b.sid,a.origin,b.id,b.replyToMessageId))
        }
    }
    ;
    var kR = function(a, b) {
        if (b == null)
            return !1;
        var c = b.channel;
        if (c == null || c !== a.B)
            return !1;
        b = b.sid;
        return b == null || a.o !== "*" && b !== a.o ? !1 : !0
    };
    var lR = function() {
        R.call(this);
        this.F = !1;
        this.g = null;
        this.B = this.D = this.K = !1;
        this.j = 0;
        this.A = [];
        this.C = !1;
        this.P = this.O = Infinity;
        this.o = 0;
        this.H = {};
        this.J = new pH(this);
        Hu(this, this.J)
    };
    w(lR, R);
    var nR = function(a, b) {
        b == null || a.F || (a.g = b,
        mR(a),
        a.F = !0)
    }
      , pR = function(a) {
        a.g != null && a.F && (oR(a),
        a.F = !1,
        a.D = !1,
        a.B = !1,
        a.j = 0,
        a.A = [],
        a.C = !1)
    }
      , mR = function(a) {
        oR(a);
        !(a.g instanceof R) && "ontouchstart"in document.documentElement && Mc ? (a.H = {
            touchstart: function(b) {
                a.D = !0;
                a.j = b.touches.length;
                a.o && (window.clearTimeout(a.o),
                a.o = 0,
                a.K = !0);
                a.C = qR(a, b.touches) || b.touches.length !== 1;
                a.C ? (a.O = Infinity,
                a.P = Infinity) : (a.O = b.touches[0].clientX,
                a.P = b.touches[0].clientY);
                b = b.touches;
                a.A = [];
                for (var c = 0; c < b.length; c++)
                    a.A.push(b[c].identifier)
            },
            touchmove: function(b) {
                a.j = b.touches.length;
                if (!$G(8) || Math.pow(b.changedTouches[0].clientX - a.O, 2) + Math.pow(b.changedTouches[0].clientY - a.P, 2) > 25)
                    a.B = !0
            },
            touchend: function(b) {
                return void rR(a, b)
            }
        },
        Uk(a.H, function(b, c) {
            a.g.addEventListener(c, b, !1)
        })) : a.J.listen(a.g, "click", a.U)
    }
      , oR = function(a) {
        a.J.xb(a.g, "click", a.U);
        Uk(a.H, function(b, c) {
            this.g.removeEventListener(c, b, !1)
        }, a);
        a.H = {}
    }
      , rR = function(a, b) {
        !a.D || a.j !== 1 || a.B || a.K || a.C || !qR(a, b.changedTouches) || (a.o = window.setTimeout(function() {
            return void sR(a)
        }, 300));
        a.j = b.touches.length;
        a.j === 0 && (a.D = !1,
        a.B = !1,
        a.A = []);
        a.K = !1
    };
    lR.prototype.U = function() {
        sR(this)
    }
    ;
    var qR = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.A.includes(b[c].identifier))
                return !0;
        return !1
    }
      , sR = function(a) {
        a.o = 0;
        a.dispatchEvent(new My("click"))
    };
    lR.prototype.M = function() {
        pR(this);
        R.prototype.M.call(this)
    }
    ;
    var uR = function() {
        var a = tR;
        return Ja(function(b) {
            return b.g == 1 ? ya(b, a.g.promise, 2) : b.return({
                serializedConfig: a.serializedConfig,
                errorMessage: a.j,
                latencyMs: a.l
            })
        })
    }
      , yR = function() {
        var a = vR
          , b = wR
          , c = Date.now()
          , d = a.o();
        d.timeout = 6E4;
        d.open("GET", b, !0);
        d.onload = function() {
            a.l = Date.now() - c;
            d.status < 200 || d.status >= 300 ? xR(a, Error("status: " + d.status)) : (a.j = null,
            a.serializedConfig = d.responseText,
            a.g.resolve())
        }
        ;
        d.onerror = function() {
            a.l = Date.now() - c;
            xR(a, Error("status: " + d.status))
        }
        ;
        d.send()
    }
      , xR = function(a, b) {
        a.serializedConfig = null;
        a.j = b.message;
        a.g.resolve()
    }
      , tR = new function() {
        this.o = function() {
            return new XMLHttpRequest
        }
        ;
        this.g = new kN;
        this.j = this.serializedConfig = null;
        this.l = 0
    }
    ;
    function zR() {
        var a = AR;
        var b = a.appName;
        var c = a.df;
        a = a.pageUrl;
        var d = new URL("https://securepubads.g.doubleclick.net/pagead/ima_ppub_config");
        return b && c ? (c === "android" ? d.searchParams.set("msid", b) : c === "ios" && d.searchParams.set("an", b),
        d.toString()) : a ? (d.searchParams.set("ippd", a),
        d.toString()) : null
    }
    ;function BR(a, b, c) {
        var d, e, f;
        a = ((f = (d = Ph(a, TA, 2)) == null ? void 0 : (e = Rh(d, SA, 1, sh())) == null ? void 0 : e.map(function(g) {
            return E(g, 1)
        })) != null ? f : []).some(function(g) {
            return g === b
        });
        V.getInstance().report(190, {
            fm: a,
            fl: c
        })
    }
    function CR(a, b) {
        if (!a || !b)
            return !1;
        var c;
        return !((c = Ph(a, RA, 5)) == null || !Rh(c, QA, 1, sh()).find(function(d) {
            return (d == null ? void 0 : E(d, 1)) === b && (d == null ? void 0 : Zh(d, 2))
        }))
    }
    ;var DR = function(a, b) {
        P.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + Ql++
                  , g = d.getId();
                e(d.ma).then(function(h) {
                    HM(c.g, d.type, d.messageType, h, f, g)
                })
            }
        }
        ;
        this.g.listen(b, this.l);
        Gu(this, function() {
            c.j.clear();
            c.g.xb(b, c.l)
        })
    };
    w(DR, P);
    var ER = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var FR = function(a, b) {
        P.call(this);
        this.g = a;
        this.timeoutMs = b;
        Hu(this, this.g)
    };
    w(FR, P);
    var HR = function(a) {
        if (!EF(a.g.caller))
            return Promise.resolve(null);
        var b = new kN
          , c = null;
        a.g.addEventListener(function(e) {
            if (e.pingData.internalErrorState === 1)
                b.resolve(null);
            else if (e.eventName === "listenerRegistered")
                c = e.listenerId,
                e.pingData.applicableSections.length === 1 && e.pingData.applicableSections[0] === -1 && b.resolve(new GR("","-1"));
            else if (e.eventName === "signalStatus" && e.data === "ready") {
                e = e.pingData;
                var f, g = ((f = e.applicableSections) != null ? f : []).join("_");
                b.resolve(new GR(e.gppString,g))
            }
        });
        var d = new Promise(function(e) {
            setTimeout(function() {
                e(null)
            }, a.timeoutMs)
        }
        );
        d = Promise.race([b.promise, d]);
        d.then(function() {
            c !== null && a.g.removeEventListener(c)
        });
        return d
    }
      , GR = function(a, b) {
        this.gppString = a;
        this.sid = b
    };
    var IR = function() {
        this.g = fb()
    }
      , JR = null;
    IR.prototype.set = function(a) {
        this.g = a
    }
    ;
    IR.prototype.reset = function() {
        this.set(fb())
    }
    ;
    IR.prototype.get = function() {
        return this.g
    }
    ;
    var KR = function(a) {
        this.o = a || "";
        JR || (JR = new IR);
        this.A = JR
    };
    KR.prototype.g = !0;
    KR.prototype.j = !0;
    KR.prototype.l = !1;
    var LR = function(a) {
        return a < 10 ? "0" + a : String(a)
    }
      , MR = function(a) {
        KR.call(this, a)
    };
    gb(MR, KR);
    var NR = function(a, b) {
        var c = [];
        c.push(a.o, " ");
        if (a.j) {
            var d = new Date(b.l);
            c.push("[", LR(d.getFullYear() - 2E3) + LR(d.getMonth() + 1) + LR(d.getDate()) + " " + LR(d.getHours()) + ":" + LR(d.getMinutes()) + ":" + LR(d.getSeconds()) + "." + LR(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        d = c.push;
        var e = a.A.get();
        e = (b.l - e) / 1E3;
        var f = e.toFixed(3)
          , g = 0;
        if (e < 1)
            g = 2;
        else
            for (; e < 100; )
                g++,
                e *= 10;
        for (; g-- > 0; )
            f = " " + f;
        d.call(c, "[", f, "s] ");
        c.push("[", b.j, "] ");
        c.push(b.getMessage());
        a.l && (b = b.g,
        b !== void 0 && c.push("\n", b instanceof Error ? b.message : String(b)));
        a.g && c.push("\n");
        return c.join("")
    };
    var OR = function() {
        this.A = db(this.l, this);
        this.g = new MR;
        this.g.j = !1;
        this.g.l = !1;
        this.j = this.g.g = !1;
        this.o = {}
    }
      , QR = function() {
        var a = PR;
        if (1 != a.j) {
            var b = Dl(El(), "").l
              , c = a.A;
            b && Dl(El(), b.getName()).j.push(c);
            a.j = !0
        }
    };
    OR.prototype.l = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= pl.value)
                    return "error";
                if (f.value >= ql.value)
                    return "warn";
                if (f.value >= sl.value)
                    return "log"
            }
            return "debug"
        }
        if (!this.o[a.j]) {
            var c = NR(this.g, a)
              , d = RR;
            if (d) {
                var e = b(a.getLevel());
                SR(d, e, c, a.g)
            }
        }
    }
    ;
    var PR = null
      , RR = y.console
      , SR = function(a, b, c, d) {
        if (a[b])
            a[b](c, d === void 0 ? "" : d);
        else
            a.log(c, d === void 0 ? "" : d)
    };
    var TR = ia(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"])
      , UR = ia(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"])
      , VR = ia(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"])
      , WR = ia(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"])
      , YR = Nk(TR)
      , ZR = Nk(UR)
      , $R = Nk(VR)
      , aS = Nk(WR);
    function bS(a) {
        var b;
        return (b = a.omidSessionInterface) != null ? b : null
    }
    function cS(a) {
        var b, c, d, e, f, g;
        return Ja(function(h) {
            if (h.g == 1)
                return b = fm("IFRAME", {
                    style: "display: none",
                    title: "Advertisement"
                }),
                c = new Promise(function(k) {
                    b.addEventListener("load", function() {
                        k()
                    })
                }
                ),
                a.appendChild(b),
                ya(h, c, 2);
            d = fm("SCRIPT");
            e = dS();
            kl(d, e);
            f = new Promise(function(k, l) {
                d.addEventListener("load", function() {
                    var n = jm(b);
                    n && bS(n) ? k(b) : l()
                })
            }
            );
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    }
    function eS() {
        var a, b, c, d, e, f;
        return Ja(function(g) {
            a = window;
            if (bS(a))
                return g.return(a);
            b = document.head.querySelector('script[src*="omweb-v1.js"');
            d = (c = b) != null ? c : dm(document, "SCRIPT");
            e = new Promise(function(h, k) {
                d.addEventListener("load", function() {
                    bS(a) ? h(a) : k()
                })
            }
            );
            b || (f = dS(),
            kl(d, f),
            document.head.appendChild(d));
            return g.return(e)
        })
    }
    function dS() {
        switch (I(kr).j(tF.g, tF.defaultValue)) {
        case 0:
            return YR;
        case 1:
            return ZR;
        case 2:
            return $R;
        case 3:
            return aS;
        default:
            return YR
        }
    }
    ;var fS = function(a, b) {
        R.call(this);
        this.j = b;
        this.g = bS(a)
    };
    w(fS, R);
    var hS = function(a) {
        try {
            a.g && a.g.registerSessionObserver(function(b) {
                b.type === "sessionStart" ? gS(a, a.j) : b.type === "sessionFinish" && hS(a)
            })
        } catch (b) {
            a.dispatchEvent(new Event("error"))
        }
    }
      , gS = function(a, b) {
        b instanceof EK && (b = b.T);
        var c;
        if (((c = b.tagName) == null ? void 0 : c.toUpperCase()) !== "AUDIO")
            try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
    };
    var iS = function(a) {
        this.data = a
    };
    m = iS.prototype;
    m.getTotalAds = function() {
        return this.data.totalAds
    }
    ;
    m.getMaxDuration = function() {
        return this.data.maxDuration
    }
    ;
    m.getAdPosition = function() {
        return this.data.adPosition
    }
    ;
    m.getPodIndex = function() {
        return this.data.podIndex
    }
    ;
    m.getTimeOffset = function() {
        return this.data.timeOffset
    }
    ;
    m.getIsBumper = function() {
        return this.data.isBumper
    }
    ;
    iS.prototype.getIsBumper = iS.prototype.getIsBumper;
    iS.prototype.getTimeOffset = iS.prototype.getTimeOffset;
    iS.prototype.getPodIndex = iS.prototype.getPodIndex;
    iS.prototype.getAdPosition = iS.prototype.getAdPosition;
    iS.prototype.getMaxDuration = iS.prototype.getMaxDuration;
    iS.prototype.getTotalAds = iS.prototype.getTotalAds;
    var jS = function(a) {
        this.data = a
    };
    m = jS.prototype;
    m.getContent = function() {
        return this.data.content
    }
    ;
    m.getContentType = function() {
        return this.data.contentType
    }
    ;
    m.getWidth = function() {
        return this.getSize().width
    }
    ;
    m.getHeight = function() {
        return this.getSize().height
    }
    ;
    m.getAdSlotId = function() {
        return this.data.adSlotId
    }
    ;
    m.getSize = function() {
        return this.data.size
    }
    ;
    m.Ve = function() {
        return this.data.resourceType
    }
    ;
    m.Pd = function() {
        return this.data.sequenceNumber
    }
    ;
    var SM = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new jS(b)
        }) : []
    };
    jS.prototype.getAdSlotId = jS.prototype.getAdSlotId;
    jS.prototype.getHeight = jS.prototype.getHeight;
    jS.prototype.getWidth = jS.prototype.getWidth;
    jS.prototype.getContentType = jS.prototype.getContentType;
    jS.prototype.getContent = jS.prototype.getContent;
    var kS = function(a, b) {
        this.j = a;
        this.g = b
    };
    kS.prototype.getAdIdValue = function() {
        return this.j
    }
    ;
    kS.prototype.getAdIdRegistry = function() {
        return this.g
    }
    ;
    kS.prototype.getAdIdRegistry = kS.prototype.getAdIdRegistry;
    kS.prototype.getAdIdValue = kS.prototype.getAdIdValue;
    var X = function(a) {
        this.data = a
    };
    X.prototype.getAdId = function() {
        return this.data.adId
    }
    ;
    X.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    }
    ;
    X.prototype.getCreativeId = function() {
        return this.data.creativeId
    }
    ;
    var lS = function(a) {
        return a.data.adQueryId
    };
    m = X.prototype;
    m.getAdSystem = function() {
        return this.data.adSystem
    }
    ;
    m.getAdvertiserName = function() {
        return this.data.advertiserName
    }
    ;
    m.getApiFramework = function() {
        return this.data.apiFramework
    }
    ;
    m.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    }
    ;
    m.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    }
    ;
    m.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    }
    ;
    m.isLinear = function() {
        return this.data.linear
    }
    ;
    m.isSkippable = function() {
        return this.data.skippable
    }
    ;
    m.getContentType = function() {
        return this.data.contentType
    }
    ;
    m.getDescription = function() {
        return this.data.description
    }
    ;
    m.getTitle = function() {
        return this.data.title
    }
    ;
    m.getDuration = function() {
        return this.data.duration
    }
    ;
    m.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    }
    ;
    m.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    }
    ;
    m.getWidth = function() {
        return this.data.width
    }
    ;
    m.getHeight = function() {
        return this.data.height
    }
    ;
    m.getUiElements = function() {
        return this.data.uiElements
    }
    ;
    m.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    }
    ;
    m.getAdPodInfo = function() {
        return new iS(this.data.adPodInfo)
    }
    ;
    m.getCompanionAds = function(a, b, c) {
        if (!this.data.companions)
            return [];
        var d = this.data.companions.map(function(e) {
            return new jS(e)
        });
        return RM(new OM({
            size: new Sk(a,b),
            Te: c ? c.sizeCriteria === "SelectFluid" : !1
        },c), d)
    }
    ;
    m.getTraffickingParameters = function() {
        return iH(Pl(this.data.traffickingParameters))
    }
    ;
    m.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    }
    ;
    m.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    }
    ;
    m.getMediaUrl = function() {
        return this.data.mediaUrl
    }
    ;
    m.getSurveyUrl = function() {
        return this.data.surveyUrl
    }
    ;
    m.getDealId = function() {
        return this.data.dealId
    }
    ;
    m.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new kS(a.adIdValue,a.adIdRegistry)
        })
    }
    ;
    m.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    }
    ;
    m.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    }
    ;
    m.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    }
    ;
    m.Ze = function() {
        return this.data.disableUi
    }
    ;
    X.prototype.isUiDisabled = X.prototype.Ze;
    X.prototype.getSkipTimeOffset = X.prototype.getSkipTimeOffset;
    X.prototype.getUniversalAdIdRegistry = X.prototype.getUniversalAdIdRegistry;
    X.prototype.getUniversalAdIdValue = X.prototype.getUniversalAdIdValue;
    X.prototype.getUniversalAdIds = X.prototype.getUniversalAdIds;
    X.prototype.getDealId = X.prototype.getDealId;
    X.prototype.getSurveyUrl = X.prototype.getSurveyUrl;
    X.prototype.getMediaUrl = X.prototype.getMediaUrl;
    X.prototype.getVastMediaBitrate = X.prototype.getVastMediaBitrate;
    X.prototype.getTraffickingParametersString = X.prototype.getTraffickingParametersString;
    X.prototype.getTraffickingParameters = X.prototype.getTraffickingParameters;
    X.prototype.getCompanionAds = X.prototype.getCompanionAds;
    X.prototype.getAdPodInfo = X.prototype.getAdPodInfo;
    X.prototype.getMinSuggestedDuration = X.prototype.getMinSuggestedDuration;
    X.prototype.getUiElements = X.prototype.getUiElements;
    X.prototype.getHeight = X.prototype.getHeight;
    X.prototype.getWidth = X.prototype.getWidth;
    X.prototype.getVastMediaHeight = X.prototype.getVastMediaHeight;
    X.prototype.getVastMediaWidth = X.prototype.getVastMediaWidth;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getTitle = X.prototype.getTitle;
    X.prototype.getDescription = X.prototype.getDescription;
    X.prototype.getContentType = X.prototype.getContentType;
    X.prototype.isSkippable = X.prototype.isSkippable;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.getWrapperAdSystems = X.prototype.getWrapperAdSystems;
    X.prototype.getWrapperCreativeIds = X.prototype.getWrapperCreativeIds;
    X.prototype.getWrapperAdIds = X.prototype.getWrapperAdIds;
    X.prototype.getApiFramework = X.prototype.getApiFramework;
    X.prototype.getAdvertiserName = X.prototype.getAdvertiserName;
    X.prototype.getAdSystem = X.prototype.getAdSystem;
    X.prototype.getCreativeId = X.prototype.getCreativeId;
    X.prototype.getCreativeAdId = X.prototype.getCreativeAdId;
    X.prototype.getAdId = X.prototype.getAdId;
    var mS = function(a) {
        this.g = a
    };
    mS.prototype.getCuePoints = function() {
        return this.g
    }
    ;
    mS.prototype.getCuePoints = mS.prototype.getCuePoints;
    var nS = function() {
        this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
        this.autoAlign = this.useVideoAdUi = !0;
        this.bitrate = -1;
        this.enablePreloading = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = !1
    }
      , oS = function(a, b) {
        var c = {};
        Object.assign(c, a);
        b && (c.disableClickThrough = !0);
        return c
    };
    nS.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            b != null && (this.autoAlign = b);
            b = Ul(a.bitrate);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && b.length !== 0 && (this.mimeTypes = b);
            b = Ul(a.playAdsAfterTime);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = Ul(a.loadVideoTimeout);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = a.useVideoAdUi === !1 ? !1 : this.useVideoAdUi
        }
    }
    ;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var Ch = function(a) {
        G.call(this, a)
    };
    w(Ch, G);
    Ch.g = "tagging.turtledove.common.TurtledoveConfig.PerBuyerData";
    var pS = function(a) {
        G.call(this, a)
    };
    w(pS, G);
    pS.g = "tagging.turtledove.common.OpaqueBuyerSignals";
    var qS = function(a) {
        G.call(this, a)
    };
    w(qS, G);
    qS.g = "tagging.turtledove.common.PerBuyerGroupLimit";
    var rS = function(a) {
        G.call(this, a)
    };
    w(rS, G);
    rS.g = "tagging.turtledove.common.PerBuyerTimeout";
    var sS = function(a) {
        G.call(this, a)
    };
    w(sS, G);
    var tS = function(a) {
        return Oh(a, Mn, 5)
    };
    sS.prototype.getWidth = function() {
        return $h(this, 9)
    }
    ;
    sS.prototype.getHeight = function() {
        return $h(this, 10)
    }
    ;
    var uS = Tj(sS);
    sS.g = "tagging.turtledove.common.TurtledoveConfig";
    function vS(a) {
        var b;
        return (b = (new Map([["https://googleads.g.doubleclick.net", BigInt(200)], ["https://td.doubleclick.net", BigInt(300)], ["https://f.creativecdn.com", BigInt(400)], ["https://fledge.us.criteo.com", BigInt(500)], ["https://fledge.eu.criteo.com", BigInt(600)], ["https://fledge.as.criteo.com", BigInt(700)], ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]])).get(a)) != null ? b : BigInt(100)
    }
    ;function wS(a) {
        var b = a.Ih
          , c = a.Mj
          , d = a.Yj
          , e = a.auctionNonce
          , f = a.Gj
          , g = a.Zj;
        a = !Zh(b, 14);
        for (var h = {}, k = u(Rh(b, pS, 7, sh())), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            var n = {}
              , p = void 0
              , q = (p = d) == null ? void 0 : p.hh.Dh.Hh.rg;
            p = E(l, 1);
            if (E(l, 2).length)
                try {
                    if (n = JSON.parse(E(l, 2)),
                    xm() * 100 < 1) {
                        var t = void 0;
                        (t = q) == null || Rn(t, {
                            Dd: p,
                            status: "SUCCESS",
                            qe: 100
                        })
                    }
                } catch (Ba) {
                    t = void 0,
                    (t = q) == null || Rn(t, {
                        Dd: p,
                        status: "ERROR",
                        qe: 1
                    })
                }
            else
                t = void 0,
                (t = q) == null || Rn(t, {
                    Dd: p,
                    status: "EMPTY",
                    qe: 1
                });
            h[E(l, 1)] = n
        }
        if (d = Ph(b, Kn, 6))
            h["https://googleads.g.doubleclick.net"] = vi(d),
            h["https://td.doubleclick.net"] = vi(d);
        d = {};
        k = Rh(b, rS, 11, sh());
        k = u(k);
        for (l = k.next(); !l.done; l = k.next())
            l = l.value,
            d[E(l, 1)] = $h(l, 2);
        l = {};
        $h(b, 21) !== 0 && (l["*"] = $h(b, 21));
        if (Rh(b, qS, 32, sh()).length > 0) {
            var v = {};
            k = u(Rh(b, qS, 32, sh()));
            for (n = k.next(); !n.done; n = k.next())
                n = n.value,
                v[E(n, 1)] = $h(n, 2)
        }
        n = {};
        Gf(kh(b, 18)) != null && (n["https://googleads.g.doubleclick.net"] = ai(b, 18),
        n["https://td.doubleclick.net"] = ai(b, 18));
        k = u(Bh(b));
        for (q = k.next(); !q.done; q = k.next())
            p = u(q.value),
            q = p.next().value,
            p = p.next().value,
            ai(p, 4) && (n[q] = ai(p, 4));
        q = {};
        k = u(Bh(b));
        for (p = k.next(); !p.done; p = k.next())
            t = u(p.value),
            p = t.next().value,
            t = t.next().value,
            t = E(t, 5),
            t.length && (q[p] = {
                type: t
            });
        k = E(b, 1).split("/td/")[0];
        (p = Ph(b, Mn, 5)) == null ? p = void 0 : (p = zb(p, ti),
        A(Sd(p)),
        t = p.W,
        p = gh(p, t, Id(t), !1));
        var x;
        p != null && (x = Ph(p, Ln, 5)) != null && nh(x, 2);
        x = Object;
        t = x.assign;
        var D = E(b, 1)
          , M = E(b, 2);
        var Q = gi(b, 3, sh(je));
        v = t.call(x, {}, {
            seller: k,
            decisionLogicUrl: D,
            trustedScoringSignalsUrl: M,
            interestGroupBuyers: Q,
            sellerExperimentGroupId: ai(b, 17),
            auctionSignals: JSON.parse(E(b, 4) || "{}"),
            sellerSignals: (p == null ? void 0 : vi(p)) || [],
            sellerTimeout: $h(b, 15) || 50,
            perBuyerExperimentGroupIds: n,
            perBuyerSignals: h,
            perBuyerTimeouts: d,
            perBuyerCumulativeTimeouts: l,
            perBuyerRealTimeReportingConfig: q,
            reportingTimeout: 5E3
        }, v ? {
            perBuyerGroupLimits: v
        } : {}, a ? {
            resolveToConfig: a
        } : {});
        if (b == null ? 0 : Zh(tS(b), 25))
            v.sellerCurrency = "USD",
            v.perBuyerCurrencies = Object.fromEntries(Ah(b, 22, cg));
        E(b, 28) && (v.directFromSellerSignalsHeaderAdSlot = E(b, 28));
        if (xS(v.interestGroupBuyers, f)) {
            v.auctionReportBuyerKeys = v.interestGroupBuyers.map(vS);
            f = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                }
            };
            g || (f.totalGenerateBidLatency = {
                bucket: BigInt(2),
                scale: 1
            },
            f.totalSignalsFetchLatency = {
                bucket: BigInt(3),
                scale: 1
            });
            v.auctionReportBuyers = f;
            var W = W === void 0 ? BigInt(0) : W;
            v.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: W
            }
        }
        e && (v.auctionNonce = e,
        v.additionalBids = Promise.resolve());
        Ah(b, 33, cg).size && (v.deprecatedRenderURLReplacements = Object.fromEntries(Ah(b, 33, cg).entries()),
        (e = v.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (v.deprecatedRenderURLReplacements["${RENDER_DATA}"] = e));
        e = Object;
        W = e.assign;
        f = E(b, 1);
        g = ai(b, 17);
        h = new Mn;
        x = tS(b);
        Nh(x, Ln, 5) !== void 0 && (x = new Ln,
        d = ei(Oh(tS(b), Ln, 5), 2),
        x = Eh(x, 2, Nf(d), "0"),
        d = ei(Oh(tS(b), Ln, 5), 4),
        x = Eh(x, 4, Nf(d), "0"),
        C(h, Ln, 5, x));
        tS(b).getEscapedQemQueryId() && (x = tS(b).getEscapedQemQueryId(),
        Eh(h, 2, Wf(x), ""));
        E(tS(b), 6) && (x = E(tS(b), 6),
        Eh(h, 6, Wf(x), ""));
        Zh(tS(b), 21) && ki(h, 21, !0);
        Zh(tS(b), 4) && ki(h, 4, !0);
        E(tS(b), 11) && (x = E(tS(b), 11),
        Eh(h, 11, Wf(x), ""));
        Zh(tS(b), 32) && ki(h, 32, !0);
        h = vi(h);
        x = $h(b, 15) || 50;
        if (Zh(b, 30)) {
            if (c == null || !c.length)
                throw Error("top_td_without_component_auction");
        } else
            c = [v].concat(ka(c != null ? c : []));
        c = W.call(e, {}, {
            seller: k,
            decisionLogicUrl: f,
            sellerExperimentGroupId: g,
            sellerSignals: h,
            sellerTimeout: x,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        E(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = E(b, 28));
        return c
    }
    function xS(a, b) {
        return a.some(function(c) {
            return vS(c) !== BigInt(100)
        }) && (b != null ? b : !1)
    }
    ;var zS = function(a, b) {
        P.call(this);
        var c = this;
        this.navigator = b;
        this.j = function(d) {
            var e = Date.now();
            try {
                var f = yS(c, d.tdconfig)
            } catch (g) {
                f = Promise.resolve({
                    Nb: !1,
                    result: null
                })
            }
            return f.then(function(g) {
                var h = new In;
                h = ni(h, 1, e);
                h = ni(h, 2, Date.now());
                var k = g.result;
                g = g.Nb;
                var l;
                k = typeof k === "string" ? k : (l = k == null ? void 0 : k.url) != null ? l : "";
                l = {};
                return l.ffconfig = k,
                l.timeout = 500,
                l.auctioninterval = wi(h),
                l.isauctiontimeout = g,
                l
            })
        }
        ;
        this.g = new DR(a,"fledge");
        Hu(this, this.g)
    };
    w(zS, P);
    var yS = function(a, b) {
        b = uS(b);
        var c = wS({
            Ih: b
        });
        b = Wz(500, null).then(function() {
            return {
                Nb: !0,
                result: null
            }
        });
        a = a.navigator.runAdAuction(c).then(function(d) {
            if (d == null) {
                var e = new bG(cm().location.href);
                d = e.g.get("adTag") || "";
                e = e.g.get("player") || "https://imasdk.googleapis.com/js/sdkloader/fledge_vast_player/";
                d ? (d = encodeURIComponent(d),
                d = e + "?adtag=" + d,
                console.log("Replacing empty Fenced Frame Config (Fledge) with this renderUrl: " + d),
                d = {
                    url: d,
                    width: "100px",
                    height: "200px"
                }) : d = null
            }
            return {
                Nb: !1,
                result: d
            }
        });
        return Promise.race([b, a])
    };
    var CS = function(a, b, c) {
        P.call(this);
        this.C = a;
        this.A = b;
        this.B = c;
        this.g = this.j = this.o = null;
        this.l = 0;
        a = new pH(this);
        Hu(this, a);
        this.D = Fl("ima.outerbridge.OmidManager");
        lr(uF) ? AS(this) : BS(this);
        a.listen(this.A, "adsManager", this.F)
    };
    w(CS, P);
    var AS = function(a) {
        eS().then(function(b) {
            DS(a, b)
        }).catch(function() {
            return void ES(a)
        })
    }
      , BS = function(a) {
        cS(a.C).then(function(b) {
            a.j = b;
            DS(a, jm(b))
        }).catch(function() {
            return void ES(a)
        })
    };
    CS.prototype.F = function(a) {
        if (!lr(uF) && ["complete", "skip", "error"].includes(a.messageType)) {
            this.l++;
            if (this.l === 10) {
                this.l = 0;
                var b;
                (b = this.g) == null || b.dispose();
                BS(this)
            }
            a = jm(this.j);
            var c;
            a && ((c = a.frames) == null ? 0 : c.omid_v1_present) || V.getInstance().report(188, {})
        }
    }
    ;
    var FS = function(a) {
        if (a.g && a.o) {
            var b = a.g;
            try {
                b.g && b.g.setSessionClientWindow(a.o)
            } catch (c) {
                b.dispatchEvent(new Event("error"))
            }
        }
    }
      , DS = function(a, b) {
        a.g = new fS(b,a.B);
        a.g.listen("error", function() {
            return void ES(a)
        });
        hS(a.g);
        FS(a)
    }
      , ES = function(a) {
        Jl(a.D, "OM SDK failed to load, destroying iframe.");
        HM(a.A, "omid", "iframeFailed");
        a.dispose()
    };
    CS.prototype.M = function() {
        this.j && (hm(this.j),
        this.j = null);
        P.prototype.M.call(this)
    }
    ;
    var GS = function(a, b, c, d) {
        P.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new pH(this);
        Hu(this, this.j);
        this.j.listen(this.o, d, this.B)
    };
    w(GS, P);
    var HS = function(a, b) {
        var c = b.ma;
        switch (b.messageType) {
        case "showVideo":
            a.l.rd();
            break;
        case "hide":
            a.l.rb();
            break;
        case "resizeAndPositionVideo":
            b = c.resizeAndPositionVideo;
            a.l.ie(new $n(b.x,b.y,b.width,b.height));
            break;
        case "restoreSizeAndPositionVideo":
            a.l.je()
        }
    };
    GS.prototype.B = function(a) {
        var b = a.ma;
        switch (a.messageType) {
        case "activate":
            this.l.Cc(this.g);
            break;
        case "startTracking":
            a = this.g;
            var c = this.A;
            this.j.listen(a, Yk(VH), c);
            this.j.listen(a, ER, c);
            a = this.g;
            IS(a);
            a.j.listen(a.g, ER, a.Va);
            a.j.listen(a.g, "ended", a.kh);
            a.j.listen(a.g, "webkitbeginfullscreen", a.lb);
            a.j.listen(a.g, "webkitendfullscreen", a.ka);
            a.j.listen(a.g, "loadedmetadata", a.mh);
            a.j.listen(a.g, "pause", a.oh);
            a.j.listen(a.g, "playing", a.gf);
            a.j.listen(a.g, "timeupdate", a.ph);
            a.j.listen(a.g, "volumechange", a.rh);
            a.j.listen(a.g, "error", a.X);
            a.j.listen(a.g, Vc || Mc && !$G(8) ? "loadeddata" : "canplay", a.lh);
            a.B = new lR;
            a.j.listen(a.B, "click", a.oa);
            nR(a.B, a.g);
            a.J = new Uz(1E3);
            a.j.listen(a.J, "tick", a.Ta);
            a.J.start();
            break;
        case "stopTracking":
            a = this.g;
            c = this.A;
            this.j.xb(a, Yk(VH), c);
            this.j.xb(a, ER, c);
            IS(this.g);
            break;
        case "exitFullscreen":
            a = this.g;
            (Ic || Kc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
            break;
        case "play":
            JS(this.g);
            break;
        case "pause":
            this.g.pause();
            break;
        case "load":
            a = this.g;
            c = b.videoUrl;
            var d = b.muxedMediaUrl
              , e = b.muxedMimeType
              , f = b.muxedAudioCodec
              , g = b.muxedVideoCodec
              , h = b.demuxedAudioUrl
              , k = b.demuxedVideoUrl
              , l = b.demuxedAudioMimeType
              , n = b.demuxedVideoMimeType
              , p = b.demuxedAudioCodec
              , q = b.demuxedVideoCodec;
            b = b.mseCompatible;
            var t = null;
            k && h && b && n && l && q && p && (t = new AF({
                Oh: k,
                qg: h,
                dk: null,
                Ij: null,
                Nh: n,
                pg: l,
                yb: q,
                jb: p,
                height: null,
                width: null,
                Ia: b,
                ck: null,
                Hj: null
            }));
            h = null;
            d && e && g && f && (h = new BF({
                gh: d,
                Db: null,
                mimeType: e,
                yb: g,
                jb: f,
                height: null,
                width: null,
                Ia: b,
                Oj: null
            }));
            t ? a.load(c, t) : h ? a.load(c, h) : a.load(c, null);
            break;
        case "unload":
            a = this.g;
            KS(a);
            a.U = !1;
            "removeAttribute"in a.g ? a.g.removeAttribute("src") : a.g.src = "";
            a.g.load();
            break;
        case "setCurrentTime":
            this.g.g.currentTime = b.currentTime;
            break;
        case "setVolume":
            this.g.setVolume(b.volume)
        }
    }
    ;
    GS.prototype.A = function(a) {
        var b = {};
        switch (a.type) {
        case "autoplayDisallowed":
            a = "autoplayDisallowed";
            break;
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "loaded":
            a = "loaded";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.g.g.ended;
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            b.volume = this.g.getVolume();
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.g.getCurrentTime();
            b.duration = this.g.getDuration();
            break;
        case "volumeChange":
            a = "volumeChange";
            b.volume = this.g.getVolume();
            break;
        case "loadedmetadata":
            a = a.type;
            b.duration = this.g.getDuration();
            break;
        case "abort":
        case "canplay":
        case "canplaythrough":
        case "durationchange":
        case "emptied":
        case "loadstart":
        case "loadeddata":
        case "progress":
        case "ratechange":
        case "seeked":
        case "seeking":
        case "stalled":
        case "suspend":
        case "waiting":
            a = a.type;
            break;
        default:
            return
        }
        HM(this.o, this.C, a, b)
    }
    ;
    var LS = function(a, b) {
        P.call(this);
        this.j = b;
        this.g = null;
        this.l = new GS(a,b,this.j.ga,"videoDisplay1");
        Hu(this, this.l);
        var c = this.j.Aa;
        c != null && (this.g = new GS(a,b,c,"videoDisplay2"),
        Hu(this, this.g))
    };
    w(LS, P);
    function MS(a, b, c, d) {
        var e = Hm("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    }
    ;function NS() {
        var a, b, c, d = cm();
        d = d === void 0 ? window : d;
        d = ((c = d === void 0 ? null : d) != null ? c : window).googletag;
        c = (d == null ? 0 : d.apiReady) ? d : void 0;
        return (b = c == null ? void 0 : (a = c.companionAds) == null ? void 0 : a.call(c)) != null ? b : null
    }
    function OS(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = u(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            typeof d !== "string") {
                var e = {};
                c.push((e.adWidth = d.getWidth(),
                e.adHeight = d.getHeight(),
                e))
            } else
                d === "fluid" && (d = {},
                c.push((d.fluidSize = !0,
                d)));
        return b.adSizes = c,
        b
    }
    function PS(a) {
        var b = NS();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(q) {
                return [q.getSlotId().getId(), q]
            }));
            a = u(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value
                  , f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = Yl(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth
                          , k = e.adHeight;
                        e.fluidSize && (k = Qt(d),
                        h = k.width,
                        k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering)
                            try {
                                var l = "google_companion_" + f.getSlotId().getId()
                                  , n = MS(d, l, h, k)
                                  , p = n.contentWindow ? n.contentWindow.document : A(n.contentDocument);
                                Ec && p.open("text/html", "replace");
                                Ll(p, Co(g));
                                p.close()
                            } catch (q) {}
                        else
                            jl(d, Co(g)),
                            d.style.width = h + "px",
                            d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    }
    ;var QS = function(a, b, c, d, e, f) {
        IM.call(this, a, b, c, d, e);
        this.g = f
    };
    w(QS, IM);
    var RS = function(a, b) {
        R.call(this);
        this.C = a;
        this.B = b;
        this.g = {};
        this.j = Fl("ima.gptproxy.MultiElementChannelDelegate");
        this.o = new pH(this);
        Hu(this, this.o);
        this.o.listen(cm(), "message", this.A);
        this.j = Fl("ima.gptproxy.MultiElementChannelDelegate")
    };
    w(RS, R);
    var SS = function(a, b) {
        var c = b.g;
        a.g.hasOwnProperty(c) ? HM(a.g[c], b.type, b.messageType, b.ma) : Il(a.j, "Channel not found in map " + b.g + ". Message: " + b.toString())
    }
      , TS = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new iR(b,c),
        a.o.listen(c, a.C, function(e) {
            this.dispatchEvent(new QS(e.type,e.messageType,e.ma,e.Tb,e.origin,b))
        }),
        c.g = d,
        c.connect(),
        a.g[b] = c)
    };
    RS.prototype.M = function() {
        for (var a = u(Object.values(this.g)), b = a.next(); !b.done; b = a.next())
            Fu(b.value);
        R.prototype.M.call(this)
    }
    ;
    RS.prototype.A = function(a) {
        a = a.g;
        var b = a.data
          , c = jR(b);
        if (c == null)
            Kl(this.j, "Message dropped!");
        else {
            var d = c.channel;
            this.B && !this.g.hasOwnProperty(d) && (Kl(this.j, "Received event on window " + window.location.pathname + " from channel: " + d + " with data: " + b),
            b = c.sid,
            TS(this, d, b, a.source),
            this.dispatchEvent(new QS(c.name,c.type,c.data || {},b,a.origin,d)))
        }
    }
    ;
    function US() {
        return !!Pa("googletag.cmd", cm())
    }
    function VS() {
        var a = Pa("googletag.console", cm());
        return a != null ? a : null
    }
    var WS = function() {
        pH.call(this);
        this.g = null;
        this.j = Fl("ima.gptproxy.GptProxy");
        this.o = new RS("gpt",!0);
        Hu(this, this.o);
        this.listen(this.o, "gpt", this.C);
        US() || cm().top === cm() || (Kl(this.j, "Establishing delegate to parent"),
        this.g = new RS("gpt",!1),
        Hu(this, this.g),
        this.listen(this.g, "gpt", this.B))
    };
    w(WS, pH);
    WS.prototype.C = function(a) {
        var b = a.origin
          , c = "//imasdk.googleapis.com".match(nm);
        b = b.match(nm);
        if (c[3] == b[3] && c[4] == b[4])
            if (Kl(this.j, "Iframe event received on " + window.location.pathname + " with data: " + a.toString()),
            this.g != null)
                TS(this.g, a.g, a.Tb, cm().parent),
                this.g != null && SS(this.g, a);
            else if (c = a.ma,
            c == null || c.scope === void 0)
                Il(this.j, "GPT Proxy received message with null data or undefined scope");
            else {
                b = c.scope;
                c = c.args;
                var d;
                if (b === "proxy") {
                    var e = a.messageType;
                    e === "isGptPresent" ? d = US() : e === "isConsolePresent" ? d = VS() != null : Il(this.j, "Unrecognized presence query: " + e)
                } else if (US())
                    if (b === "pubads" || b === "companionAds") {
                        d = a.messageType;
                        var f = cm().googletag;
                        if (f != null && f[b] != null && (b = f[b](),
                        b != null && (d = b[d],
                        d != null)))
                            try {
                                e = d.apply(b, c)
                            } catch (g) {
                                Il(this.j, "GPT ads service error: " + g.name + ", " + g.message)
                            }
                        d = e
                    } else if (b === "console") {
                        if (e = VS(),
                        e != null && (b = e[a.messageType],
                        b != null))
                            try {
                                b.apply(e, c)
                            } catch (g) {
                                Il(this.j, "GPT console service error: " + g.name + ", " + g.message)
                            }
                    } else
                        b === null && (e = a.messageType,
                        e === "googleGetCompanionAdSlots" ? (e = NS()) ? (e = e.getSlots().map(OS),
                        d = e.length ? e : null) : d = null : (e === "googleSetCompanionAdContents" && PS(c == null ? void 0 : c[0]),
                        d = null));
                d !== void 0 && (a.ma.returnValue = d,
                SS(this.o, a))
            }
        else
            Hl(this.j, "Iframe event with unsafe origin received on " + window.location.pathname + " with data: " + a.toString())
    }
    ;
    WS.prototype.B = function(a) {
        Kl(this.j, "Host event received on window " + window.location.pathname + " with data: " + a.toString());
        SS(this.o, a)
    }
    ;
    var XS = function(a, b) {
        if (a.g) {
            var c = a.g;
            Fu(c.g[b]);
            delete c.g[b]
        }
        a.o && (a = a.o,
        Fu(a.g[b]),
        delete a.g[b])
    };
    var ZS = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if (typeof d == "undefined")
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, l, n, p) {
            if (l == "%")
                return "%";
            var q = c.shift();
            if (typeof q == "undefined")
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = q;
            return YS[l].apply(null, arguments)
        })
    }
      , YS = {
        s: function(a, b, c) {
            return isNaN(c) || c == "" || a.length >= Number(c) ? a : a = b.indexOf("-", 0) > -1 ? a + Ol(" ", Number(c) - a.length) : Ol(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || e == "" || (d = parseFloat(a).toFixed(e));
            var f = Number(a) < 0 ? "-" : b.indexOf("+") >= 0 ? "+" : b.indexOf(" ") >= 0 ? " " : "";
            Number(a) >= 0 && (d = f + d);
            if (isNaN(c) || d.length >= Number(c))
                return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = b.indexOf("-", 0) >= 0 ? f + d + Ol(" ", a) : f + Ol(b.indexOf("0", 0) >= 0 ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return YS.f(parseInt(a, 10), b, c, d, 0, f, g, h)
        }
    };
    YS.i = YS.d;
    YS.u = YS.d;
    function $S() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return b !== void 0 && typeof b.allowedFeatures == "function" && typeof b.allowedFeatures() == "object" && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var cT = function(a, b, c) {
        c = c === void 0 ? !1 : c;
        R.call(this);
        this.D = b;
        this.V = c;
        this.K = this.J = null;
        this.H = !1;
        this.F = "goog_" + Ql++;
        this.B = new Map;
        this.j = null;
        c = cm();
        var d = Pa("google.ima.gptProxyInstance", c);
        d != null ? c = d : (d = new WS,
        z("google.ima.gptProxyInstance", d, c),
        c = d);
        this.X = c;
        this.C = null;
        this.A = new pH(this);
        Hu(this, this.A);
        c = this.F;
        d = this.V ? "?gdpr=1" : "";
        d = Hb(Pl(aT)) ? (Bm() ? "https:" : "http:") + ZS("//imasdk.googleapis.com/js/core/bridge3.668.1_debug_%s.html", AL.getLocale()) + d : aT + d;
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (e.location.href.indexOf(d) === 0 || e.document.referrer.indexOf(d) === 0) {
                            var f = !0;
                            break a
                        }
                    } catch (k) {}
                    e = e.parent
                } while (e !== e.top)
            } catch (k) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        if (Qq.length && f.head) {
            e = u(Qq);
            for (var g = e.next(); !g.done; g = e.next())
                if ((g = g.value) && f.head) {
                    var h = Hm("META");
                    f.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        }
        f = $S();
        c = fm("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: f,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.A.qc(c, "load", this.ka);
        a.appendChild(c);
        this.g = c;
        this.o = bT(this);
        this.O = new zS(this.o,navigator);
        Hu(this, this.O);
        c = this.O;
        c.g.j.set("auction", c.j);
        PR || (PR = new OR);
        y.location && y.location.href.indexOf("Debug=true") != -1 && QR();
        QR();
        this.P = new LS(this.o,this.D);
        Hu(this, this.P);
        this.D.ga && this.A.listen(this.o, "displayContainer", this.U);
        this.A.listen(this.o, "mouse", this.Z);
        this.A.listen(this.o, "touch", this.ba);
        lM() || (this.C = new CS(a,this.o,b.ga.A.g),
        Hu(this, this.C))
    };
    w(cT, R);
    var bT = function(a, b) {
        b = b === void 0 ? "*" : b;
        var c = a.B.get(b);
        c == null && (c = new iR(a.F,b),
        a.H && (c.g = jm(a.g),
        c.connect()),
        a.B.set(b, c));
        return c
    };
    cT.prototype.Cc = function(a) {
        var b;
        (b = this.C) != null && (a = a.A.g,
        b.B = a,
        b.g && (b = b.g,
        b.j = a,
        gS(b, a)))
    }
    ;
    cT.prototype.M = function() {
        this.j !== null && (this.j.dispose(),
        this.j = null);
        this.B.forEach(function(a) {
            Fu(a)
        });
        this.B.clear();
        XS(this.X, this.F);
        hm(this.g);
        R.prototype.M.call(this)
    }
    ;
    cT.prototype.Z = function(a) {
        var b = a.ma
          , c = Lt(this.g)
          , d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    }
    ;
    var dT = function(a, b) {
        var c = Lt(a.g)
          , d = !!("TouchEvent"in window && TouchEvent.length > 0);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.g,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.g, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d)
            return b;
        var e;
        return (e = document.createTouchList) == null ? void 0 : e.apply(document, b)
    };
    cT.prototype.ba = function(a) {
        var b = a.ma
          , c = Lt(this.g);
        if ("TouchEvent"in window && TouchEvent.length > 0)
            b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: dT(this, b.touches),
                targetTouches: dT(this, b.targetTouches),
                changedTouches: dT(this, b.changedTouches)
            },
            a = new TouchEvent(a.messageType,b),
            this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, dT(this, b.touches), dT(this, b.targetTouches), dT(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    }
    ;
    cT.prototype.U = function(a) {
        switch (a.messageType) {
        case "showVideo":
            this.j == null ? (this.j = new lR,
            this.A.listen(this.j, "click", this.oa)) : pR(this.j);
            nR(this.j, this.D.ac());
            break;
        case "hide":
            this.j !== null && (this.j.dispose(),
            this.j = null)
        }
        var b = this.P;
        HS(b.l, a);
        b.g && HS(b.g, a)
    }
    ;
    cT.prototype.oa = function() {
        HM(this.o, "displayContainer", "videoClick")
    }
    ;
    cT.prototype.ka = function() {
        this.J = uo();
        this.K = ro();
        var a = jm(this.g);
        this.B.forEach(function(c) {
            c.g = a;
            c.connect()
        });
        var b;
        (b = this.C) != null && (b.o = a,
        FS(b));
        this.H = !0
    }
    ;
    var aT = "";
    var eT = ia(["https://s0.2mdn.net/instream/video/client.js"])
      , fT = null
      , gT = function() {
        R.call(this);
        this.g = null;
        this.j = new Map;
        this.o = new Map;
        this.xa = this.C = !1;
        this.A = null;
        this.B = new pH(this);
        Hu(this, this.B)
    };
    w(gT, R);
    var hT = function() {
        fT == null && (fT = new gT);
        return fT
    }
      , Ey = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && HM(a.g, "activityMonitor", "viewabilityMeasurement", d)
    };
    gT.prototype.destroy = function() {
        this.B.xb(this.g, "activityMonitor", this.D);
        this.xa = !1;
        this.j.clear()
    }
    ;
    gT.prototype.M = function() {
        this.destroy();
        R.prototype.M.call(this)
    }
    ;
    gT.prototype.init = function(a) {
        if (!this.xa) {
            if (this.g = a || null)
                this.B.listen(this.g, "activityMonitor", this.D),
                iT(this);
            if (!(y.ima && y.ima.video && y.ima.video.client && y.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = y.document;
                a = dm(document, "SCRIPT");
                var c = Nk(eT);
                kl(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            Xr();
            I(ty).H = AL.g;
            this.C = !0;
            I(ty).l = !0;
            this.A = null;
            a = I(ty);
            b = ey(a) == "h" || ey(a) == "b";
            c = !(N(),
            !1);
            b && c && (a.L = !0,
            a.F = new zw);
            this.xa = !0
        }
    }
    ;
    var kT = function(a) {
        if (a == null)
            return !1;
        if ((Ic || Kc) && a.webkitDisplayingFullscreen !== null)
            return a.webkitDisplayingFullscreen;
        a = jT(a);
        var b = window.screen.availHeight || window.screen.height;
        return (window.screen.availWidth || window.screen.width) - a.width <= 0 && b - a.height <= 42
    }
      , jT = function(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        try {
            typeof a.getBoundingClientRect === "function" && im(Wl(a), a) && (b = a.getBoundingClientRect())
        } catch (c) {}
        return b
    }
      , lT = function(a, b, c, d, e) {
        e = e === void 0 ? {} : e;
        if (a.xa) {
            d && e.opt_osdId == null && (e.opt_osdId = d);
            if (a.A)
                return a.A(b, c, e);
            if (a = d ? a.o.get(d) : AL.l)
                e.opt_fullscreen == null && (e.opt_fullscreen = kT(a)),
                e.opt_adElement == null && (e.opt_adElement = a);
            return DD.Eb(469, eb(Gy, b, c, e)) || {}
        }
        return {}
    }
      , mT = function(a) {
        var b;
        AL.g !== 0 ? b = I(ty).l : b = a.C;
        return b
    }
      , nT = function(a, b) {
        var c = String(Math.floor(Math.random() * 1E9));
        a.o.set(c, b);
        AL.g !== 0 && (I(ty).o[c] = a);
        return c
    }
      , oT = function(a, b, c) {
        if (c)
            a.j.get(c) === b && a.j.delete(c);
        else {
            var d = [];
            a.j.forEach(function(e, f) {
                e === b && d.push(f)
            });
            d.forEach(a.j.delete, a.j)
        }
    }
      , Ay = function(a, b) {
        a = a.j.get(b);
        return typeof a === "function" ? a() : {}
    }
      , iT = function(a) {
        if (typeof window.Goog_AdSense_Lidar_getUrlSignalsArray === "function") {
            var b = {};
            b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
            var c;
            (c = a.g) == null || HM(c, "activityMonitor", "pageSignals", b)
        }
    };
    gT.prototype.D = function(a) {
        var b = a.ma
          , c = b.queryId
          , d = {}
          , e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
        case "getPageSignals":
            iT(this);
            break;
        case "reportVastEvent":
            e = b.vastEvent;
            a = b.osdId;
            var f = {};
            f.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (f.opt_bounds = b.overlayBounds);
            d.viewabilityData = lT(this, e, c, a, f);
            var g;
            (g = this.g) == null || HM(g, "activityMonitor", "viewability", d);
            break;
        case "fetchAdTagUrl":
            c = {},
            c.eventId = b.eventId,
            a = b.osdId,
            al(b, "isFullscreen") && (e = b.isFullscreen),
            al(b, "loggingId") && (b = b.loggingId,
            c.loggingId = b,
            V.getInstance().report(43, {
                step: "beforeLookup",
                logid: b,
                time: Date.now()
            })),
            c.engagementString = pT(this, a, e),
            this.g && HM(this.g, "activityMonitor", "engagement", c)
        }
    }
    ;
    var pT = function(a, b, c) {
        var d, e = b ? (d = a.o.get(b)) != null ? d : null : AL.l;
        a = {};
        c != null && (a.fullscreen = c);
        c = "";
        try {
            c = lA(function() {
                return e
            }, a)
        } catch (f) {
            c = f,
            c = "sdktle;" + Nl(c.name, 12) + ";" + Nl(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return Ay(hT(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Ey(hT(), a, b)
    });
    var qT = function(a) {
        this.g = a;
        this.l = "";
        this.j = -1;
        this.o = !1
    }
      , sT = function(a, b) {
        if (a.j >= 0) {
            var c = b == null ? function() {}
            : b
              , d = function() {
                rT(a, c);
                a.g.removeEventListener("loadedmetadata", d, !1)
            };
            a.g.addEventListener("loadedmetadata", d, !1);
            a.g.src = a.l;
            a.g.load()
        } else
            b != null && b()
    }
      , rT = function(a, b) {
        var c = a.g.seekable.length > 0;
        a.o ? c ? (a.g.currentTime = a.j,
        tT(a),
        b()) : setTimeout(function() {
            return void rT(a, b)
        }, 100) : (tT(a),
        b())
    }
      , tT = function(a) {
        a.j = -1;
        a.l = "";
        a.o = !1
    };
    var uT = new Sk(5,5)
      , vT = function(a) {
        R.call(this);
        this.g = a;
        this.B = this.ba = null;
        this.D = 0;
        this.O = this.H = this.U = this.loaded = this.K = !1;
        this.V = this.J = this.P = this.o = null;
        this.Z = !1;
        this.C = null;
        this.A = new qT(a);
        this.j = new pH(this);
        Hu(this, this.j);
        this.size = this.getSize();
        this.fullscreen = kT(this.g);
        this.F = Fl("Html5VideoDisplay")
    };
    w(vT, R);
    m = vT.prototype;
    m.Ce = function() {
        var a = this.A;
        a.l = a.g.currentSrc;
        a.o = a.g.seekable.length > 0;
        a.j = a.g.ended ? -1 : a.g.currentTime
    }
    ;
    m.Ac = function(a) {
        sT(this.A, a)
    }
    ;
    m.load = function(a, b) {
        var c = J.getInstance().g;
        c.O = !0;
        Fo(c);
        Qo("hvd_lc");
        KS(this);
        this.U = !1;
        if (b)
            if (Qo("hvd_ad"),
            b instanceof BF) {
                if (Qo("hvd_mad"),
                c = b.getMediaUrl()) {
                    Qo("hvd_admu");
                    Jl(this.F, "Valid MuxedAdMedia; setting direct url.");
                    Qo("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof AF) {
                Qo("hvd_dad");
                c = b.o;
                var d = b.j
                  , e = b.l
                  , f = b.g
                  , g = b.yb
                  , h = b.jb;
                if (c && d && e && f && g && h && (Qo("hvd_addu"),
                b.Ia)) {
                    Qo("hvd_admse");
                    b = e + '; codecs="' + g + '"';
                    f = f + '; codecs="' + h + '"';
                    if (IJ() && IJ() && MediaSource.isTypeSupported(b) && IJ() && MediaSource.isTypeSupported(f)) {
                        Qo("hvd_ymse");
                        Jl(this.F, "Valid DemuxedAdMedia; loading with MSE.");
                        Qo("hvd_mse");
                        a = !1;
                        try {
                            window.location.search.indexOf("goog_limavideo=true") !== -1 && (a = !0)
                        } catch (k) {}
                        y.customElements ? a ? h = !0 : (lr(sF) && V.getInstance().report(153, {
                            limvid: "vd"
                        }),
                        h = lr(sF) ? !0 : !1) : h = !1;
                        h && this.g instanceof EK ? (a && Jl(this.F, "force lima video in video display"),
                        this.g.nb = c,
                        this.g.Ab = d) : (this.ba = new cL(this.g,[new bK(c,b,35E4,new uI), new bK(d,f,82E3,new uI)]),
                        Hu(this, this.ba),
                        a = this.g,
                        c = this.ba,
                        c.j || (c.j = Fk(c.g).toString()),
                        c = c.j,
                        a.src = c);
                        this.g.load();
                        return
                    }
                    Qo("hvd_nmse")
                }
            } else
                Qo("hvd_uad");
        a ? (Jl(this.F, "No valid AdMedia; setting url directly."),
        Qo("hvd_src"),
        this.g.src = a) : Qo("hvd_vn");
        this.g.load()
    }
    ;
    m.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = a === 0 ? !0 : !1
    }
    ;
    m.ie = function(a) {
        this.g.style.left = String(a.left) + "px";
        this.g.style.top = String(a.top) + "px";
        this.g.style.width = String(a.width) + "px";
        this.g.style.height = String(a.height) + "px"
    }
    ;
    m.je = function() {
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0";
        this.g.style.right = "0"
    }
    ;
    m.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    }
    ;
    var JS = function(a) {
        a.Z = !1;
        a.U || Wb() ? (a.O = !1,
        a.o = a.g.play(),
        a.o != null && (a.P = null,
        a.o.then(function() {
            a.o = null;
            a.gf(a.P);
            a.P = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            b != null && b.name != null && (c = b.name);
            c === "AbortError" || c === "NotAllowedError" ? a.dispatchEvent("autoplayDisallowed") : a.X()
        }))) : a.O = !0
    };
    m = vT.prototype;
    m.pause = function() {
        this.o != null ? Jl(this.F, "Cannot pause video element while waiting on play promise to return.") : (this.Z = !0,
        this.g.pause())
    }
    ;
    m.getCurrentTime = function() {
        return this.g.currentTime
    }
    ;
    m.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    }
    ;
    m.getSize = function() {
        return new Sk(this.g.offsetWidth,this.g.offsetHeight)
    }
    ;
    m.M = function() {
        this.V && SG(this.V);
        IS(this);
        R.prototype.M.call(this)
    }
    ;
    var IS = function(a) {
        a.B != null && (pR(a.B),
        a.B = null);
        a.J != null && a.J.dispose();
        tH(a.j);
        KS(a)
    }
      , KS = function(a) {
        a.loaded = !1;
        a.H = !1;
        a.K = !1;
        a.O = !1;
        a.D = 0;
        a.o = null;
        a.P = null;
        Fu(a.C)
    };
    vT.prototype.Va = function(a) {
        this.dispatchEvent(a.type)
    }
    ;
    var xT = function(a) {
        if (!a.H) {
            a.H = !0;
            a.dispatchEvent("start");
            try {
                if (lr(sF) && y.customElements) {
                    var b = y.customElements.get("lima-video");
                    a.g instanceof b ? V.getInstance().report(153, {
                        limvid: "limastart"
                    }) : V.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (c) {
                V.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
            b = typeof a.g.getAttribute === "function" && a.g.getAttribute("playsinline") != null;
            b = b === void 0 ? !1 : b;
            (!ZG() && !$G(10) || !b && (jM.getInstance(),
            !1) ? (jM.getInstance(),
            Lb(Qb(), "Xbox")) || (Ic || Kc ? 0 : (!Hc || Hc && YG(XG, 4)) && ($t() ? (jM.getInstance(),
            !1) : !lM())) : 1) || !Hc || Hc && YG(XG, 3) || (Ic || Kc) && !$G(4) || wT(a)
        }
    };
    m = vT.prototype;
    m.mh = function() {
        this.U = !0;
        this.O && JS(this);
        this.O = !1;
        yT(this)
    }
    ;
    m.lh = function() {
        this.loaded || (this.loaded = !0,
        this.dispatchEvent("loaded"))
    }
    ;
    m.gf = function(a) {
        this.o != null ? this.P = a : (this.dispatchEvent("play"),
        Mc || ZG() || Vc || xT(this))
    }
    ;
    m.ph = function(a) {
        if (!this.H && (Mc || ZG() || Vc)) {
            if (this.getCurrentTime() <= 0)
                return;
            if (Vc && this.g.ended && this.getDuration() === 1) {
                this.X(a);
                return
            }
            xT(this)
        }
        if (Mc || Lb(Qb(), "Nintendo WiiU")) {
            if (this.getCurrentTime() - this.D > 1.5) {
                this.K = !0;
                this.g.currentTime = this.D;
                return
            }
            this.K = !1;
            this.getCurrentTime() > this.D && (this.D = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    }
    ;
    m.rh = function() {
        this.dispatchEvent("volumeChange")
    }
    ;
    m.oh = function() {
        if (this.H && Mc && !this.Z && (zT(this) < 2 || this.K)) {
            this.C = new Uz(250);
            this.j.listen(this.C, "tick", this.ya);
            this.C.start();
            var a = !0
        } else
            a = !1;
        a || this.o || this.dispatchEvent("pause")
    }
    ;
    m.kh = function() {
        var a = !0;
        if (Mc || Lb(Qb(), "Nintendo WiiU"))
            a = this.D >= this.g.duration - 1.5;
        !this.K && a && this.dispatchEvent("end")
    }
    ;
    var wT = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    vT.prototype.ka = function() {
        this.dispatchEvent("endFullscreen")
    }
    ;
    vT.prototype.X = function() {
        this.dispatchEvent("error")
    }
    ;
    vT.prototype.oa = function() {
        this.dispatchEvent("click")
    }
    ;
    var yT = function(a) {
        a.g instanceof HTMLElement && (a.V = RG(a.g, uT),
        a.V.then(function(b) {
            a.Ga() || K(J.getInstance(), "ps", b.width + "x" + b.height)
        }))
    };
    vT.prototype.Ta = function() {
        var a = this.getSize()
          , b = kT(this.g);
        if (a.width !== this.size.width || a.height !== this.size.height)
            !this.fullscreen && b ? wT(this) : this.fullscreen && !b && this.ka(),
            this.size = a,
            this.fullscreen = b
    }
    ;
    vT.prototype.ya = function() {
        if (!this.g.ended && this.g.paused && (Mc || Wc ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime
              , b = zT(this);
            b > 0 && (b >= 2 || a < 2) && (Fu(this.C),
            JS(this))
        } else
            Fu(this.C)
    }
    ;
    var zT = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; b >= 0; ) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    vT.prototype.lb = function() {
        V.getInstance().report(139);
        wT(this)
    }
    ;
    var DT = function(a) {
        if (a instanceof AT || a instanceof BT || a instanceof CT)
            return a;
        if (typeof a.next == "function")
            return new AT(function() {
                return a
            }
            );
        if (typeof a[Symbol.iterator] == "function")
            return new AT(function() {
                return a[Symbol.iterator]()
            }
            );
        if (typeof a.Hb == "function")
            return new AT(function() {
                return a.Hb()
            }
            );
        throw Error("Not an iterator or iterable.");
    }
      , AT = function(a) {
        this.g = a
    };
    AT.prototype.Hb = function() {
        return new BT(this.g())
    }
    ;
    AT.prototype[Symbol.iterator] = function() {
        return new CT(this.g())
    }
    ;
    AT.prototype.j = function() {
        return new CT(this.g())
    }
    ;
    var BT = function(a) {
        this.g = a
    };
    w(BT, uv);
    BT.prototype.next = function() {
        return this.g.next()
    }
    ;
    BT.prototype[Symbol.iterator] = function() {
        return new CT(this.g)
    }
    ;
    BT.prototype.j = function() {
        return new CT(this.g)
    }
    ;
    var CT = function(a) {
        AT.call(this, function() {
            return a
        });
        this.l = a
    };
    w(CT, AT);
    CT.prototype.next = function() {
        return this.l.next()
    }
    ;
    var ET = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof ET)
                for (c = a.Oc(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    };
    m = ET.prototype;
    m.Kb = function() {
        FT(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.j[this.g[b]]);
        return a
    }
    ;
    m.Oc = function() {
        FT(this);
        return this.g.concat()
    }
    ;
    m.has = function(a) {
        return GT(this.j, a)
    }
    ;
    m.isEmpty = function() {
        return this.size == 0
    }
    ;
    m.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    m.remove = function(a) {
        return this.delete(a)
    }
    ;
    m.delete = function(a) {
        return GT(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && FT(this),
        !0) : !1
    }
    ;
    var FT = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                GT(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length; )
                d = a.g[b],
                GT(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    };
    m = ET.prototype;
    m.get = function(a, b) {
        return GT(this.j, a) ? this.j[a] : b
    }
    ;
    m.set = function(a, b) {
        GT(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    m.forEach = function(a, b) {
        for (var c = this.Oc(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    m.keys = function() {
        return DT(this.Hb(!0)).j()
    }
    ;
    m.values = function() {
        return DT(this.Hb(!1)).j()
    }
    ;
    m.entries = function() {
        var a = this;
        return KG(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    m.Hb = function(a) {
        FT(this);
        var b = 0
          , c = this.l
          , d = this
          , e = new uv;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return vv;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    var GT = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var IT = function() {
        R.call(this);
        this.currentTime = 0;
        this.duration = NaN;
        this.o = !0;
        this.volume = 1;
        this.muted = !1;
        this.C = 1;
        this.playbackRate = 0;
        this.j = this.g = this.F = null;
        this.buffered = new HT;
        this.D = new HT;
        this.B = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        }
        ;
        this.A = new pH(this);
        Hu(this, this.A);
        var a = yL(AL);
        a && (this.duration = vL(a))
    };
    w(IT, R);
    var JT = function() {
        var a = ["video/mp4"]
          , b = ["video/ogg"]
          , c = new IT;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        }
        ;
        return c
    };
    m = IT.prototype;
    m.pause = function() {
        if (!this.o) {
            var a;
            (a = this.F) == null || a.stop();
            this.o = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    }
    ;
    m.load = function() {
        this.o = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + Math.random() * 20 : a = this.duration;
        this.duration = Number(a);
        this.dispatchEvent("durationchange");
        a = this.D;
        a.g.push(new KT(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new KT(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        this.currentTime > 0 && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.C
    }
    ;
    m.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    }
    ;
    m.setAttribute = function(a, b) {
        a != null && LT.set(a, b)
    }
    ;
    m.getAttribute = function(a) {
        return LT.get(a)
    }
    ;
    m.qh = function(a) {
        var b = null
          , c = null;
        switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended",
            c = "#000"
        }
        b && this.j && (this.j.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    }
    ;
    da.Object.defineProperties(IT.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            },
            set: function(a) {
                this.B = a
            }
        }
    });
    var LT = new ET
      , KT = function(a) {
        this.startTime = 0;
        this.endTime = a
    }
      , HT = function() {
        this.length = 0;
        this.g = []
    };
    HT.prototype.start = function(a) {
        return this.g[a].startTime
    }
    ;
    HT.prototype.end = function(a) {
        return this.g[a].endTime
    }
    ;
    var NT = function(a) {
        P.call(this);
        this.o = a;
        this.l = this.g = null;
        this.j = MT(this);
        this.g = fm("DIV", {
            style: "display:none;"
        });
        gm(this.o, this.g);
        gm(this.g, this.j);
        this.l = fm("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        });
        gm(this.g, this.l);
        sK(function() {
            K(J.getInstance(), "haob", "1")
        })
    };
    w(NT, P);
    NT.prototype.initialize = function() {
        this.j && this.j.load()
    }
    ;
    NT.prototype.M = function() {
        hm(this.g);
        P.prototype.M.call(this)
    }
    ;
    var MT = function(a) {
        var b = yL(AL);
        if (uL(b, "useVideoElementFake"))
            a = JT(),
            b = fm("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }),
            Object.assign(b, a),
            a.g = fm("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }),
            a.j = fm("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }),
            gm(a.g, a.j),
            gm(b, a.g),
            a.A.listen(a, ["loadeddata", "playing", "pause", "ended"], a.qh),
            a = b;
        else {
            b = !1;
            try {
                window.location.search.indexOf("goog_limavideo=true") !== -1 && (b = !0)
            } catch (c) {}
            if (OT(a, b)) {
                b && console.log("force lima video in wrapper");
                a = null;
                try {
                    a = new EK
                } catch (c) {
                    a = fm("lima-video"),
                    lr(sF) && V.getInstance().report(153, {
                        limvid: "firefail"
                    })
                }
                a.style.backgroundColor = "#000";
                a.style.height = "100%";
                a.style.width = "100%";
                a.style.position = "absolute";
                a.style.left = "0";
                a.style.top = "0"
            } else
                a = fm("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: (eL["google3.javascript.ads.imalib.rendering.attribution.templates.AttributionText"] ? eL["google3.javascript.ads.imalib.rendering.attribution.templates.AttributionText"](void 0, void 0) : "Advertisement").toString()
                })
        }
        a.setAttribute("webkit-playsinline", "true");
        a.setAttribute("playsinline", "true");
        return a
    }
      , OT = function(a, b) {
        if (!y.customElements)
            return !1;
        if (b)
            return !0;
        if (Xb() && Wl(a.o) !== document)
            return !1;
        lr(sF) && V.getInstance().report(153, {
            limvid: "vw"
        });
        return lr(sF) ? !0 : !1
    };
    NT.prototype.ac = function() {
        return this.l
    }
    ;
    NT.prototype.rb = function() {
        var a = this.g;
        a != null && (a.style.display = "none")
    }
    ;
    var ST = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (a == null || !im(Wl(d), d))
            throw YM(XM, null, "containerElement", "element");
        this.j = b;
        this.O = nM(this.j || null);
        this.K = aH(this.j || null);
        this.J = String(Math.floor(Math.random() * 1E9));
        this.D = !1;
        this.uc = a;
        this.H = b != null;
        AL.g = 2;
        this.I = PT(b ? b : null);
        d = fm("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.o = d;
        this.g = null;
        QT(this) && b ? a = new vT(b) : (this.g = new NT(this.o),
        a = new vT(this.g.j));
        this.ga = a;
        this.Aa = this.l = null;
        if (a = this.g && AL.o)
            a = !(QT(this) || Ic || Kc || au() || Hc && (!Hc || !YG(XG, 4)));
        a && (this.l = new NT(this.o),
        this.Aa = new vT(this.l.j));
        this.A = c || null;
        this.F = this.A != null;
        QT(this) && b ? typeof b.getBoundingClientRect !== "function" ? (c = this.o,
        AL.l = c) : c = b : c = this.o;
        this.C = c;
        this.B = new cT(this.o,this,!1);
        this.size = new Sk(0,0);
        this.L = "";
        b && (b = qG(b.src || b.currentSrc),
        b.toString().length < 200 ? this.L = b.toString() : b.j.length < 200 && (this.L = b.j));
        this.xe = new Map;
        this.xe.set("videoDisplay1", this.ga);
        this.Aa && this.xe.set("videoDisplay2", this.Aa);
        RT(this) && !AL.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    m = ST.prototype;
    m.initialize = function() {
        this.D = !0;
        this.g != null && this.g.initialize();
        this.l != null && this.l.initialize()
    }
    ;
    m.xa = function() {
        return this.D
    }
    ;
    m.destroy = function() {
        var a = this;
        this.j = null;
        Fu(this.g);
        Fu(this.l);
        Fu(this.B);
        this.ga.Ac(function() {
            return Fu(a.ga)
        });
        this.Aa != null && this.Aa.Ac(function() {
            return Fu(a.Aa)
        });
        hm(this.o)
    }
    ;
    m.rd = function() {
        if (this.g != null) {
            var a = this.g.g;
            a != null && (a.style.display = "block")
        }
    }
    ;
    m.Cc = function(a) {
        this.ga !== a && this.g && this.l && this.Aa && (a.setVolume(this.ga.getVolume()),
        a = this.ga,
        this.ga = this.Aa,
        this.Aa = a,
        a = this.g,
        this.g = this.l,
        this.l = a,
        this.l.rb(),
        this.B.Cc(this.ga))
    }
    ;
    m.rb = function() {
        this.g != null && this.g.rb()
    }
    ;
    m.ac = function() {
        return this.F && this.A ? this.A : this.g != null ? this.g.ac() : null
    }
    ;
    var QT = function(a) {
        return mM(a.I) && a.H
    }
      , RT = function(a) {
        var b = ["VIDEO", "AUDIO"], c;
        return QT(a) && !!a.j && !b.includes((c = a.j.tagName) == null ? void 0 : c.toUpperCase())
    };
    ST.prototype.getSize = function() {
        return this.size
    }
    ;
    var PT = function(a) {
        return a != null && typeof a.getAttribute === "function" && a.getAttribute("playsinline") != null ? !0 : !1
    };
    ST.prototype.ie = function(a) {
        this.ga.ie(a)
    }
    ;
    ST.prototype.je = function() {
        this.ga.je()
    }
    ;
    ST.prototype.destroy = ST.prototype.destroy;
    ST.prototype.initialize = ST.prototype.initialize;
    var TT = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    }
      , UT = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.data = a
    };
    w(UT, Error);
    m = UT.prototype;
    m.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new UT(a) : a != null ? Error(a) : null
    }
    ;
    m.getMessage = function() {
        return this.data.errorMessage
    }
    ;
    m.getErrorCode = function() {
        return this.data.errorCode
    }
    ;
    m.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return a < 1E3 ? a : 900
    }
    ;
    m.getType = function() {
        return this.data.type
    }
    ;
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    UT.prototype.getType = UT.prototype.getType;
    UT.prototype.getVastErrorCode = UT.prototype.getVastErrorCode;
    UT.prototype.getErrorCode = UT.prototype.getErrorCode;
    UT.prototype.getMessage = UT.prototype.getMessage;
    UT.prototype.getInnerError = UT.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", TT);
    var VT = {
        AD_ERROR: "adError"
    }
      , WT = function(a, b) {
        b = b === void 0 ? null : b;
        My.call(this, "adError");
        this.error = a;
        this.g = b
    };
    w(WT, My);
    WT.prototype.getError = function() {
        return this.error
    }
    ;
    WT.prototype.getUserRequestContext = function() {
        return this.g
    }
    ;
    WT.prototype.getUserRequestContext = WT.prototype.getUserRequestContext;
    WT.prototype.getError = WT.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", VT);
    var XT = {
        AD_CAN_PLAY: "adCanPlay",
        Sh: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        ye: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        De: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        ze: "fully_viewable_audible_half_duration_impression",
        Uf: "overlay_resize",
        Vf: "overlay_unmeasurable_impression",
        Wf: "overlay_unviewable_impression",
        Yf: "overlay_viewable_immediate_impression",
        Xf: "overlay_viewable_end_of_session_impression",
        mi: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        xj: "userRecall",
        jj: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        cg: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        AD_BREAK_FETCH_ERROR: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        Xh: "companionBackfill",
        uj: "trackingUrlPinged",
        yj: "video_card_endcap_collapse",
        zj: "video_card_endcap_dismiss",
        Aj: "video_card_endcap_impression",
        ai: "companionInitialized",
        Zh: "companionImpression",
        Yh: "companionClick",
        aj: "mediaUrlPinged",
        LOAD_START: "loadStart",
        dj: "navigationRequested"
    }
      , YT = function(a, b, c) {
        b = b === void 0 ? null : b;
        c = c === void 0 ? null : c;
        My.call(this, a);
        this.ad = b;
        this.l = c
    };
    w(YT, My);
    YT.prototype.getAd = function() {
        return this.ad
    }
    ;
    YT.prototype.getAdData = function() {
        return this.l
    }
    ;
    YT.prototype.getAdData = YT.prototype.getAdData;
    YT.prototype.getAd = YT.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", XT);
    var ZT = function(a, b) {
        b = b === void 0 ? null : b;
        YT.call(this, "adMetadata", a);
        this.g = b
    };
    w(ZT, YT);
    ZT.prototype.Fg = function() {
        return this.g
    }
    ;
    ZT.prototype.getAdCuePoints = ZT.prototype.Fg;
    var $T = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var aU = function(a, b) {
        R.call(this);
        this.o = a;
        this.B = b;
        this.j = this.o.currentTime;
        this.g = new Uz(250);
        Hu(this, this.g);
        this.A = new pH(this);
        Hu(this, this.A);
        rH(this.A, this.g, "tick", this.C, !1, this)
    };
    w(aU, R);
    aU.prototype.pb = function() {
        return this.j
    }
    ;
    aU.prototype.start = function() {
        bU(this);
        this.g.start()
    }
    ;
    aU.prototype.stop = function() {
        this.g.stop()
    }
    ;
    aU.prototype.C = function() {
        var a = this.o.currentTime;
        a !== this.pb() && (this.j = a,
        bU(this))
    }
    ;
    var bU = function(a) {
        var b = {};
        b.currentTime = a.pb();
        HM(a.B, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var cU = Fc && "srcdoc"in dm(document, "IFRAME")
      , dU = function(a, b) {
        a.open("text/html", "replace");
        Ll(a, Co(String(b)));
        a.close()
    };
    var eU = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , fU = function(a) {
        a = Ib(a);
        if (a == "")
            return null;
        var b = String(a.slice(0, 4)).toLowerCase();
        if (("url(" < b ? -1 : "url(" == b ? 0 : 1) == 0)
            return null;
        if (a.indexOf("(") > 0) {
            if (/"|'/.test(a))
                return null;
            b = /([\-\w]+)\(/g;
            for (var c; c = b.exec(a); )
                if (!(c[1].toLowerCase()in eU))
                    return null
        }
        return a
    };
    function gU(a, b) {
        a = y[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function hU(a) {
        var b = y.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    gU("Element", "attributes") || gU("Node", "attributes");
    gU("Element", "innerHTML") || gU("HTMLElement", "innerHTML");
    gU("Node", "nodeName");
    gU("Node", "nodeType");
    gU("Node", "parentNode");
    gU("Node", "childNodes");
    gU("HTMLElement", "style") || gU("Element", "style");
    gU("HTMLStyleElement", "sheet");
    var iU = hU("getPropertyValue")
      , jU = hU("setProperty");
    gU("Element", "namespaceURI") || gU("Node", "namespaceURI");
    function kU(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (Cc && document.documentMode < 10) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if (typeof b[c] != "function")
            throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }
    ;var lU = ia([""])
      , mU = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    }
      , oU = function(a) {
        if (!a)
            return Ok(lU);
        var b = document.createElement("div").style;
        nU(a).forEach(function(c) {
            var d = Fc && c in mU ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            d.lastIndexOf("--", 0) != 0 && d.lastIndexOf("var", 0) != 0 && (c = kU(iU, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "",
            c = fU(c),
            c != null && kU(jU, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
        });
        return Qk(b.cssText || "")
    }
      , nU = function(a) {
        Ta(a) ? a = sc(a) : (a = Zk(a),
        oc(a, "cssText"));
        return a
    };
    var pU = ia([""])
      , qU = function(a, b, c) {
        R.call(this);
        this.j = a;
        this.A = b;
        this.D = c;
        this.g = null;
        this.F = "";
        this.H = Ok(pU);
        this.J = 0;
        this.B = this.slot = this.o = null;
        this.C = ""
    };
    w(qU, R);
    qU.prototype.init = function(a) {
        this.C = a;
        a = "about:blank";
        Cc && (a = "");
        this.o = fm("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        Gt(this.o, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.uc;
        gm(a, this.o);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        this.B == null && (this.B = new pH(this));
        this.B.listen(a, "message", this.K);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.C + '");\x3c/script></body>');
        if (Wc || Uc || Dc) {
            var b = this.o.contentWindow;
            b && dU(b.document, a)
        } else
            b = this.o,
            cU ? (a = Co(a),
            b.srcdoc = Lk(a)) : (b = b.contentWindow) && dU(b.document, a)
    }
    ;
    qU.prototype.K = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (t) {
                return
            }
            var d = c.session;
            if (d != null && this.C === d)
                switch (c.type) {
                case "friendlyReady":
                    var e = rU(this);
                    if (e != null) {
                        this.g = e;
                        this.F = e.currentSrc;
                        var f = e.style.cssText
                          , g = document.implementation.createHTMLDocument("").createElement("DIV");
                        g.style.cssText = f;
                        this.H = oU(g.style);
                        this.J = e.currentTime
                    } else {
                        var h = this.j.uc
                          , k = "border: 0; margin: 0; padding: 0; position: absolute; "
                          , l = this.j.getSize();
                        k += "width:" + l.width + "px;";
                        k += "height:" + l.height + "px;";
                        this.g = fm("VIDEO", {
                            style: k,
                            autoplay: !0
                        });
                        gm(h, this.g)
                    }
                    var n = this.j.uc;
                    h = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var p = Pt(this.g);
                    h += "width:" + p.width + "px;";
                    h += "height:" + p.height + "px;";
                    this.slot = fm("DIV", {
                        style: h
                    });
                    gm(n, this.slot);
                    try {
                        this.o.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (t) {
                        sU(this)
                    }
                    HM(this.A, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !mm() && !lm() && Gt(this.g, {
                        visibility: "visible"
                    });
                    HM(this.A, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    tU(this);
                    HM(this.A, "vpaid", "", b);
                    break;
                case "startAd":
                    n = {};
                    if (this.g) {
                        k = this.g.paused;
                        var q = this.g.currentTime > 0;
                        n.apl = q && !k ? "1" : "0";
                        n.ip = k ? "1" : "0";
                        n.iavp = q ? "1" : "0"
                    } else
                        n.apl = "n";
                    V.getInstance().report(99, n);
                    HM(this.A, "vpaid", "", b);
                    this.rd();
                    break;
                default:
                    HM(this.A, "vpaid", "", b)
                }
        } catch (t) {
            sU(this)
        }
    }
    ;
    var sU = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.C;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    qU.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    }
    ;
    var rU = function(a) {
        return (a.D === "videoDisplayUnknown" ? a.j.ga : a.j.xe.get(a.D)).A.g
    };
    qU.prototype.rd = function() {
        rU(this) != null && this.j.rd()
    }
    ;
    var tU = function(a) {
        a.g && !mm() && !lm() && Gt(a.g, {
            visibility: "hidden"
        })
    };
    qU.prototype.M = function() {
        Fu(this.B);
        this.B = null;
        hm(this.slot);
        this.slot = null;
        hm(this.o);
        this.o = null;
        var a = rU(this);
        if (a != null) {
            var b = a.style;
            var c = this.H;
            if (c instanceof Mk)
                c = c.g;
            else
                throw Error("Unexpected type when unwrapping SafeStyle, got '" + c + "' of type '" + typeof c + "'");
            b.cssText = c;
            mm() || lm() ? (a.src = this.F,
            a.currentTime = this.J) : (a.removeAttribute("src"),
            this.j.rb())
        } else
            hm(this.g),
            this.g = null;
        R.prototype.M.call(this)
    }
    ;
    var uU = function(a, b) {
        P.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    w(uU, P);
    var vU = function(a, b) {
        try {
            var c = b.ma
              , d = c.session;
            switch (c.vpaidEventType) {
            case "createFriendlyIframe":
                b = "videoDisplayUnknown";
                c.videoDisplayName && (b = c.videoDisplayName);
                var e = c.session
                  , f = new qU(a.j,a.l,b);
                a.g.set(e, f);
                f.init(e);
                break;
            case "vpaidNonLinear":
                var g = a.g.get(d);
                g && tU(g);
                break;
            case "destroyFriendlyIframe":
                var h = a.g.get(d);
                h && (h.dispose(),
                a.g.delete(d))
            }
        } catch (k) {
            V.getInstance().report(125, {
                msg: k.message
            })
        }
    };
    uU.prototype.M = function() {
        this.g.forEach(function(a) {
            a.dispose()
        })
    }
    ;
    var wU = function(a) {
        G.call(this, a)
    };
    w(wU, G);
    wU.prototype.getValue = function() {
        return E(this, 1)
    }
    ;
    wU.prototype.getVersion = function() {
        return di(this, 5)
    }
    ;
    var xU = Tj(wU);
    wU.g = "tagging.common.cookie.Cookie";
    var yU = function() {
        this.g = window
    }
      , zU = function(a, b, c, d) {
        if (d) {
            var e = pb(bi(c, 2)) - Date.now() / 1E3;
            e = {
                Xc: Math.max(e, 0),
                path: pb(E(c, 3)),
                domain: pb(E(c, 4)),
                md: !1
            };
            c = pb(c.getValue());
            a = a.g;
            Zh(d, 5) && kp(b, c, e, a)
        }
    }
      , AU = function(a, b, c) {
        if (c && fp(b, c, a.g)) {
            var d = a.g.location.hostname;
            if (d === "localhost")
                d = ["localhost"];
            else if (d = d.split("."),
            d.length < 2)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = u(d);
            for (var g = d.next(); !g.done; g = d.next())
                e = b,
                f = a.g,
                g = g.value,
                Zh(c, 5) && f.origin !== "null" && (new dp(f.document)).remove(e, "/", g)
        }
    };
    var BU = function() {
        this.g = [];
        this.j = []
    };
    m = BU.prototype;
    m.isEmpty = function() {
        return this.g.length === 0 && this.j.length === 0
    }
    ;
    m.clear = function() {
        this.g = [];
        this.j = []
    }
    ;
    m.contains = function(a) {
        return nc(this.g, a) || nc(this.j, a)
    }
    ;
    m.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;
            c < 0 && (c = Math.max(0, b.length + c));
            if (typeof b === "string")
                c = typeof a !== "string" || a.length != 1 ? -1 : b.lastIndexOf(a, c);
            else {
                for (; c >= 0; c--)
                    if (c in b && b[c] === a)
                        break b;
                c = -1
            }
        }
        c >= 0 ? (pc(b, c),
        b = !0) : b = !1;
        return b || oc(this.j, a)
    }
    ;
    m.Kb = function() {
        for (var a = [], b = this.g.length - 1; b >= 0; --b)
            a.push(this.g[b]);
        var c = this.j.length;
        for (b = 0; b < c; ++b)
            a.push(this.j[b]);
        return a
    }
    ;
    var Z = function(a, b, c, d, e, f, g, h) {
        R.call(this);
        var k = this;
        this.H = a;
        this.g = b;
        this.adTagUrl = c;
        this.ba = d;
        this.Va = e;
        this.D = g;
        this.Ta = h;
        this.A = new nS;
        this.K = !1;
        this.volume = 1;
        this.ba = d;
        this.Z = -1;
        this.C = this.o = this.j = null;
        this.B = new aU({
            currentTime: 0
        },this.D);
        this.F = new BU;
        this.ka = this.U = !1;
        this.V = new Map;
        this.X = this.oa = !1;
        this.ya = new uU(b,g);
        Hu(this, this.ya);
        this.J = f && this.g.A != null;
        this.O = function() {
            var l = k.g.ga
              , n = l.getCurrentTime();
            l = l.getDuration();
            return {
                currentTime: n,
                duration: l,
                isPlaying: !0,
                volume: k.volume
            }
        }
        ;
        this.P = new pH(this);
        this.P.listen(this.D, "adsManager", this.lb)
    };
    w(Z, R);
    Z.prototype.lb = function(a) {
        var b = this
          , c = a.messageType
          , d = a.ma
          , e = {};
        switch (c) {
        case "error":
            CU(this);
            DU(this, d);
            break;
        case "contentPauseRequested":
            V.getInstance().report(130);
            EU(this);
            this.B.stop();
            FU(this, c, d);
            break;
        case "contentResumeRequested":
            GU(this, function() {
                FU(b, c, d)
            });
            break;
        case "remainingTime":
            this.Z = d.remainingTime;
            break;
        case "skip":
            FU(this, c, d);
            break;
        case "log":
            FU(this, c, d, d.logData);
            break;
        case "companionBackfill":
            a = Pa("window.google_show_companion_ad");
            a != null && a();
            break;
        case "skipShown":
            this.K = !0;
            FU(this, c, d);
            break;
        case "interaction":
            FU(this, c, d, d.interactionData);
            break;
        case "vpaidEvent":
            vU(this.ya, a);
            break;
        case "skippableStateChanged":
            e = d.adData;
            e.skippable != null && (this.K = e.skippable);
            FU(this, c, d);
            break;
        case "volumeChange":
            e = d.adData;
            e != null && typeof e.volume === "number" && (this.volume = e.volume);
            FU(this, c, d);
            break;
        case "firstQuartile":
            FU(this, wM.firstQuartile, d);
            FU(this, c, d);
            break;
        case "thirdQuartile":
            FU(this, wM.thirdQuartile, d);
            FU(this, c, d);
            break;
        case "updateGfpCookie":
            HU(this, d);
            break;
        default:
            FU(this, c, d)
        }
    }
    ;
    var FU = function(a, b, c, d) {
        if (c.companions == null) {
            var e = a.V.get(c.adId);
            c.companions = e != null ? e : []
        }
        var f = c.adData;
        if (e = f == null ? null : new X(f))
            a.j = e;
        switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
            b = new YT(b,null,c);
            break;
        case "adMetadata":
            b = null;
            c.adCuePoints != null && (b = new mS(c.adCuePoints));
            b = new ZT(e,b);
            break;
        case "allAdsCompleted":
            a.j = null;
            a.oa = !0;
            b = new YT(b,e);
            break;
        case "contentPauseRequested":
            a.X = !1;
            b = new YT(b,e);
            break;
        case "contentResumeRequested":
            a.j = null;
            a.X = !0;
            b = new YT(b,e);
            break;
        case "loaded":
            a.Z = e.getDuration();
            a.K = !1;
            oM() && (d = a.H,
            c = a.Va,
            d.j.set(lS(e), a.O),
            mT(d) && lT(d, "loaded", lS(e), c));
            b = new YT(b,e,f);
            break;
        case "start":
            a.V.set(c.adId, c.companions);
            a.g.ac() != null && (a.o == null ? (a.o = new lR,
            a.P.listen(a.o, "click", a.nh)) : pR(a.o),
            nR(a.o, a.g.ac()));
            b = new YT(b,e);
            break;
        case "complete":
            a.o != null && pR(a.o);
            oM() && oT(a.H, a.O, lS(e));
            a.j = null;
            a.V.delete(c.adId);
            b = new YT(b,e);
            break;
        case "log":
            c = null;
            d != null && d.type != null ? (f = d.type,
            f = f === "adLoadError" || f === "adPlayError") : f = !1;
            f && (c = {
                adError: new UT(d)
            });
            b = new YT(b,e,c);
            break;
        case "interaction":
            b = new YT(b,e,d);
            break;
        case "adProgress":
            b = new YT(b,e,new $T(c));
            break;
        default:
            b = new YT(b,e)
        }
        a.dispatchEvent(b);
        a.oa && a.X && a.destroy()
    }
      , DU = function(a, b) {
        var c = new WT(new UT(b));
        a.U ? (a.dispatchEvent(c),
        oM() && a.j && oT(a.H, a.O, lS(a.j)),
        a.j = null) : a.F.j.push(c);
        a = {
            error: b.errorCode,
            vis: no(document)
        };
        V.getInstance().report(7, a)
    }
      , IU = function(a, b, c) {
        HM(a.D, "adsManager", b, c)
    }
      , GU = function(a, b) {
        V.getInstance().report(131);
        CU(a, b);
        a.Ga() || a.B.start()
    }
      , EU = function(a) {
        var b = a.g.ga;
        QT(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && b.Ce != null && b.Ce()
    }
      , CU = function(a, b) {
        var c = a.g.ga;
        QT(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && c.Ac != null ? c.Ac(b) : b && b()
    };
    m = Z.prototype;
    m.configureAdsManager = function(a, b) {
        this.C = a;
        a.currentTime != null && (this.B = new aU(a,this.D),
        this.B.start());
        b != null && (this.A = JU(b))
    }
    ;
    m.init = function(a, b, c, d) {
        if (this.F.isEmpty()) {
            var e = this.g
              , f = null;
            e.j && d == null && (f = {
                vd: "setnull"
            });
            e.j && e.j === d && (f = {
                vd: "match"
            });
            if (e.j && e.j !== d) {
                f = nM(d || null);
                var g = aH(d || null);
                f = {
                    vd: "diff",
                    oc: e.O,
                    nc: f,
                    oi: e.K,
                    ni: g
                }
            }
            !e.j && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.J,
            V.getInstance().report(93, f));
            d != null && (e.I = PT(d),
            mM(e.I) && (e.H = !0,
            Fu(e.g),
            Fu(e.l),
            Fu(e.Aa),
            e.g = null,
            e.l = null,
            e.Aa = null,
            Fu(e.ga),
            e.ga = new vT(d),
            typeof d.getBoundingClientRect !== "function" ? (e.C = e.o,
            AL.l = e.C) : e.C = d,
            e.B.Cc(e.ga)));
            this.U = !0;
            this.resize(a, b, c);
            d = oS(this.A, this.J);
            e = {};
            a = (e.adsRenderingSettings = d,
            e.width = a,
            e.height = b,
            e.viewMode = c,
            e);
            IU(this, "init", a)
        } else {
            for (; !this.F.isEmpty(); )
                b = a = this.F,
                b.g.length === 0 && (b.g = b.j,
                b.g.reverse(),
                b.j = []),
                a = a.g.pop(),
                this.dispatchEvent(a);
            this.dispose()
        }
    }
    ;
    m.isCustomPlaybackUsed = function() {
        return QT(this.g)
    }
    ;
    m.isCustomClickTrackingUsed = function() {
        return this.J
    }
    ;
    m.getRemainingTime = function() {
        return this.Z
    }
    ;
    m.getAdSkippableState = function() {
        return this.K
    }
    ;
    m.discardAdBreak = function() {
        IU(this, "discardAdBreak")
    }
    ;
    m.updateAdsRenderingSettings = function(a) {
        if (a != null) {
            a = JU(a);
            var b = this.A.bitrate
              , c = a.bitrate;
            V.getInstance().report(96, {
                init: this.U ? "1" : "0",
                start: this.ka ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.A = a;
            a = oS(this.A, this.J);
            b = {};
            a = (b.adsRenderingSettings = a,
            b);
            IU(this, "updateAdsRenderingSettings", a)
        }
    }
    ;
    m.skip = function() {
        IU(this, "skip")
    }
    ;
    m.start = function() {
        if (this.adTagUrl) {
            (Ic || Kc) && V.getInstance().report(50, {
                customPlayback: QT(this.g)
            });
            this.g.xa() || V.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: QT(this.g)
            });
            Vt(this.g.o) && V.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: QT(this.g)
            });
            var a = this.g.A, b = this.g.o, c;
            if (c = a && b && !Vt(a))
                a = jT(a),
                b = jT(b),
                c = a.width > 0 && a.height > 0 && b.width > 0 && b.height > 0 && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            V.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: QT(this.g),
                covers: b
            })
        }
        if (!this.g.xa() && !QT(this.g))
            throw YM(WM);
        b = this.g;
        b.F = this.J && b.A != null;
        this.g.B.g.style.opacity = "1";
        if (this.C != null && this.getVolume() === 1) {
            var d, e;
            if (typeof ((d = this.C) == null ? void 0 : d.muted) === "boolean" && ((e = this.C) == null ? 0 : e.muted))
                this.setVolume(0);
            else {
                var f;
                if (typeof ((f = this.C) == null ? void 0 : f.volume) === "number") {
                    var g;
                    d = (g = this.C) == null ? void 0 : g.volume;
                    if (d >= 0 && d <= 1) {
                        var h;
                        this.setVolume((h = this.C) == null ? void 0 : h.volume)
                    }
                }
            }
        }
        this.ka = !0;
        IU(this, "start")
    }
    ;
    m.nh = function() {
        if (!this.A.disableClickThrough && this.j != null) {
            var a = this.j.data.clickThroughUrl;
            a != null && HG(a, this.j.data.attributionParams)
        }
    }
    ;
    m.resize = function(a, b, c) {
        var d = this.g
          , e = d.o;
        e != null && (a === -1 ? (e.style.right = "0",
        e.style.left = "0") : e.style.width = a + "px",
        b === -1 ? (e.style.bottom = "0",
        e.style.top = "0") : e.style.height = b + "px");
        e = d.B;
        e.g.width = a === -1 ? "100%" : String(a);
        e.g.height = b === -1 ? "100%" : String(b);
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.size = new Sk(a,b);
        d = {};
        a = (d.width = a,
        d.height = b,
        d.viewMode = c,
        d);
        IU(this, "resize", a)
    }
    ;
    m.stop = function() {
        IU(this, "stop")
    }
    ;
    m.expand = function() {
        IU(this, "expand")
    }
    ;
    m.collapse = function() {
        IU(this, "collapse")
    }
    ;
    m.getVolume = function() {
        return this.volume
    }
    ;
    m.setVolume = function(a) {
        this.volume = a;
        this.g.ga.setVolume(a);
        var b = {};
        a = (b.volume = a,
        b);
        IU(this, "volume", a)
    }
    ;
    m.pause = function() {
        IU(this, "pause")
    }
    ;
    m.resume = function() {
        IU(this, "resume")
    }
    ;
    m.destroy = function() {
        this.dispose()
    }
    ;
    m.getCuePoints = function() {
        return this.ba
    }
    ;
    m.Gg = function() {
        return this.j
    }
    ;
    m.M = function() {
        IU(this, "destroy");
        this.o != null && this.o.dispose();
        this.P.dispose();
        this.F.clear();
        this.B && (this.B.stop(),
        this.B.dispose());
        oM() && oT(this.H, this.O);
        R.prototype.M.call(this)
    }
    ;
    m.vg = function() {
        V.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && this.j.data.clickThroughUrl, b;
        if (a && ((b = this.j) == null ? 0 : b.Ze())) {
            var c;
            HG(a, (c = this.j) == null ? void 0 : c.data.attributionParams)
        }
        IU(this, "click")
    }
    ;
    m.focus = function() {
        HM(this.D, "userInteraction", "focusUiElement")
    }
    ;
    var HU = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new wU;
        d = oi(d, 1, c ? "0" : "1");
        d = nh(d, 2, Nf(2147483647));
        d = oi(d, 3, "/");
        d = oi(d, 4, window.location.hostname);
        var e = new yU, f, g;
        a = (g = (f = a.Ta) == null ? void 0 : QL(f)) != null ? g : null;
        zU(e, "__gpi_opt_out", d, a);
        if (!c || b)
            AU(e, "__gads", a),
            AU(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.vg;
    Z.prototype.getCurrentAd = Z.prototype.Gg;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;
    function JU(a) {
        if (a instanceof nS)
            return V.getInstance().report(174, {
                valid: !0
            }),
            a;
        V.getInstance().report(174, {
            valid: !1
        });
        var b = new nS;
        b.append(a);
        return b
    }
    ;var KU = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    }
      , LU = function(a, b) {
        My.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b
    };
    w(LU, My);
    LU.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    }
    ;
    LU.prototype.getUserRequestContext = function() {
        return this.l
    }
    ;
    LU.prototype.getUserRequestContext = LU.prototype.getUserRequestContext;
    LU.prototype.getAdsManager = LU.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", KU);
    var MU = function() {
        this.g = window
    };
    function NU() {
        var a = window, b, c;
        return (c = ["pbjs"].concat((b = a._pbjsGlobals) != null ? b : []).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(d == null ? void 0 : d.que)
        })) != null ? c : null
    }
    ;function OU(a, b) {
        var c, d, e;
        b == null ? e = void 0 : e = b.get.call(b, a);
        return (d = (c = e) != null ? c : b == null ? void 0 : b.get(zm(a))) != null ? d : 0
    }
    ;var PU = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
      , QU = new Map
      , RU = function(a, b) {
        var c = {};
        this.pbjs = a;
        this.slot = b;
        var d;
        this.td = (d = c == null ? void 0 : c.td) != null ? d : {};
        this.Ld = !(c == null || !c.Ld);
        var e;
        this.Nd = (e = c == null ? void 0 : c.Nd) != null ? e : new Map;
        var f;
        this.jf = (f = c == null ? void 0 : c.jf) != null ? f : new Map;
        var g;
        this.Je = (g = c == null ? void 0 : c.Je) != null ? g : new GA;
        this.ff = c == null ? void 0 : c.ff;
        this.g = c
    }
      , UU = function(a, b, c) {
        var d = a.pbjs.getBidResponsesForAdUnitCode;
        if (d) {
            var e, f, g, h, k, l = (k = (e = d((g = a.slot.Xb) != null ? g : "")) == null ? void 0 : e.bids) != null ? k : (f = d((h = a.slot.adUnitCode) != null ? h : "")) == null ? void 0 : f.bids;
            if (l != null && l.length && (e = l.filter(function(q) {
                var t = q.auctionId;
                var v = q.adId;
                return t !== c && Object.values(a.td).some(function(x) {
                    return x.includes(v)
                })
            }),
            e.length)) {
                var n, p;
                d = (n = a.pbjs.adUnits) == null ? void 0 : (p = n.find(function(q) {
                    q = q.code;
                    return q === a.slot.Xb || q === a.slot.adUnitCode
                })) == null ? void 0 : p.mediaTypes;
                n = u(e);
                for (p = n.next(); !p.done; p = n.next())
                    p = p.value,
                    e = SU(a, p, d),
                    e = IA(b, CA(ji(DA(BA(new AA, p.bidder), 1), 6, !0), e)),
                    TU(a, p.bidder, e),
                    typeof p.timeToRespond === "number" && nh(e, 2, Nf(Math.round(p.timeToRespond)))
            }
        }
    }
      , TU = function(a, b, c) {
        for (var d = []; b && !d.includes(b); ) {
            d.unshift(b);
            var e = void 0
              , f = void 0;
            b = (e = a.pbjs) == null ? void 0 : (f = e.aliasRegistry) == null ? void 0 : f[b]
        }
        Dh(c, 10, d, Vf)
    }
      , VU = function(a, b, c) {
        Cf(kh(b, 3)) != null || (c === a.slot.adUnitCode ? pi(b, 3, 1) : c === a.slot.Xb && pi(b, 3, 2))
    }
      , WU = function(a, b, c, d, e) {
        e = a.jf.get(e != null ? e : function() {
            return null
        }
        );
        (e == null ? void 0 : di(e, 1)) !== 1 && C(c, wA, 5, e);
        Nh(b, wA, 5) !== void 0 || (e ? di(e, 1) === 1 ? JA(b, e) : JA(b, zA(xA(yA(new wA, a.Ld), 1), OU(d, a.Nd))) : JA(b, xA(yA(new wA, a.Ld), OU(d, a.Nd) ? 2 : 3)))
    }
      , SU = function(a, b, c) {
        var d = b.cpm
          , e = b.originalCpm
          , f = b.currency
          , g = b.originalCurrency
          , h = b.dealId
          , k = b.adserverTargeting
          , l = b.bidder
          , n = b.adId
          , p = b.mediaType
          , q = b.height
          , t = b.width
          , v = b.meta
          , x = new uA;
        typeof d === "number" && (nh(x, 2, Nf(Math.round(d * 1E6))),
        g && g !== f || (d = Math.round(Number(e) * 1E6),
        isNaN(d) || d === bi(x, 2) || nh(x, 8, Nf(d))));
        typeof f === "string" && oi(x, 3, f);
        ["string", "number"].includes(typeof h) && (f = new mA,
        h = oi(f, 1, String(h)),
        C(x, mA, 6, h));
        if (typeof k === "object")
            for (h = u(["", "_" + l]),
            f = h.next(); !f.done; f = h.next()) {
                d = f.value;
                f = [];
                e = u(Object.entries(k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = u(g.value);
                    var D = g.next().value;
                    g = g.next().value;
                    D = ("" + D + d).slice(0, 20);
                    var M = void 0;
                    if ((M = a.td[D]) != null && M.length)
                        if (a.td[D][0] === String(g))
                            f.push(D);
                        else {
                            f = [];
                            break
                        }
                }
                d = gi(x, 4, sh());
                Dh(x, 4, d.concat(f), Vf)
            }
        switch (p || "banner") {
        case "banner":
            pi(x, 5, 1);
            break;
        case "native":
            pi(x, 5, 2);
            break;
        case "video":
            pi(x, 5, 3);
            p = new sA;
            var Q;
            if ((c == null ? void 0 : (Q = c.video) == null ? void 0 : Q.context) === "adpod") {
                var W, Ba = c == null ? void 0 : (W = c.video) == null ? void 0 : W.adPodDurationSec;
                nh(p, 1, Nf(Ba))
            } else
                W = c == null ? void 0 : (Ba = c.video) == null ? void 0 : Ba.maxduration,
                nh(p, 1, Nf(W));
            var Y;
            if (typeof (c == null ? void 0 : (Y = c.video) == null ? void 0 : Y.skip) === "number") {
                var Xa;
                c = !!(c == null ? 0 : (Xa = c.video) == null ? 0 : Xa.skip);
                ji(p, 2, c)
            }
            var Jb;
            Xa = (Jb = b.meta) == null ? void 0 : Jb.adServerCatId;
            Jb = oi(p, 3, Xa);
            if (typeof k !== "object")
                k = null;
            else {
                var nb, Lc;
                Xa = String((Lc = (nb = k["hb_pb_cat_dur_" + l]) != null ? nb : k.hb_pb_cat_dur) != null ? Lc : "");
                var Ga, dd, ha, Qa;
                nb = String((Qa = (ha = (dd = (Ga = k["hb_cache_id_" + l]) != null ? Ga : k["hb_uuid_" + l]) != null ? dd : k.hb_cache_id) != null ? ha : k.hb_uuid) != null ? Qa : "");
                k = Xa && nb ? Xa + "_" + nb : nb ? nb : null
            }
            oi(Jb, 4, k);
            C(x, sA, 9, p)
        }
        Number.isFinite(q) && Number.isFinite(t) && (k = new qA,
        t = li(k, 1, Math.round(t)),
        q = li(t, 2, Math.round(q)),
        C(x, qA, 7, q));
        typeof n === "string" && oi(x, 1, n);
        var ed, fd;
        if (((ed = a.g) == null ? 0 : ed.kg) && Array.isArray(v == null ? void 0 : v.advertiserDomains) && (v == null ? 0 : (fd = v.advertiserDomains[0]) == null ? 0 : fd.length)) {
            var Se;
            n = v.advertiserDomains[0].substring(0, (Se = a.g) == null ? void 0 : Se.kg);
            oi(x, 10, n)
        }
        if (b.meta && a.g) {
            var ob, sj;
            a.g.mg && typeof b.meta.agencyId === "string" && ((sj = b.meta.agencyId) == null ? 0 : sj.length) && (ob != null || (ob = new oA),
            oi(ob, 1, b.meta.agencyId.substring(0, a.g.mg)));
            var tj;
            a.g.ng && typeof b.meta.agencyId === "string" && ((tj = b.meta.agencyName) == null ? 0 : tj.length) && (ob != null || (ob = new oA),
            oi(ob, 2, b.meta.agencyName.substring(0, a.g.ng)));
            var uj;
            a.g.Cg && typeof b.meta.networkId === "string" && ((uj = b.meta.networkId) == null ? 0 : uj.length) && (ob != null || (ob = new oA),
            oi(ob, 3, b.meta.networkId.substring(0, a.g.Cg)));
            var vj;
            a.g.Dg && typeof b.meta.networkId === "string" && ((vj = b.meta.networkName) == null ? 0 : vj.length) && (ob != null || (ob = new oA),
            oi(ob, 4, b.meta.networkName.substring(0, a.g.Dg)));
            ob && C(x, oA, 11, ob)
        }
        return x
    }
      , XU = function(a, b) {
        var c = new Map
          , d = function(k) {
            var l = c.get(k);
            l || (l = {},
            c.set(k, l));
            return l
        }
          , e = [];
        a = u(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args
              , h = f.eventType;
            f = f.elapsedTime;
            h === "bidTimeout" && e.push.apply(e, ka(g));
            switch (h) {
            case "bidRequested":
                if (g.auctionId !== b)
                    continue;
                if (!Array.isArray(g.bids))
                    continue;
                g = u(g.bids);
                for (h = g.next(); !h.done; h = g.next())
                    if (h = h.value.bidId)
                        d(h).requestTime = f;
                break;
            case "noBid":
                g.auctionId === b && g.bidId && (d(g.bidId).uh = f)
            }
        }
        d = new Map;
        a = u(c.entries());
        for (f = a.next(); !f.done; f = a.next())
            g = u(f.value),
            f = g.next().value,
            h = g.next().value,
            g = h.requestTime,
            h = h.uh,
            g && h && d.set(f, {
                latency: h - g,
                Nb: !1
            });
        e = u(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value,
            a = f.bidId,
            f = f.auctionId,
            a && f === b && (a = d.get(a)))
                a.Nb = !0;
        return d
    }
      , YU = function(a) {
        var b = new Map, c, d, e = ((d = (c = a.pbjs) == null ? void 0 : c.getEvents) != null ? d : function() {
            return []
        }
        )();
        d = e.filter(function(ha) {
            var Qa = ha.eventType;
            ha = ha.args;
            return Qa === "auctionEnd" && ha.auctionId
        });
        c = new NA;
        var f = function(ha) {
            return ha === a.slot.Xb || ha === a.slot.adUnitCode
        }, g, h, k, l = (k = QU.get(((g = a.slot.Xb) != null ? g : "") + ((h = a.slot.adUnitCode) != null ? h : ""))) != null ? k : 0, n;
        g = (n = d.filter(function(ha) {
            var Qa, ed, fd;
            return Number((Qa = ha.args) == null ? void 0 : Qa.timestamp) > l && ((ed = ha.args) == null ? void 0 : (fd = ed.adUnitCodes) == null ? void 0 : fd.find(f))
        })) != null ? n : [];
        if (!g.length)
            return null;
        var p;
        if (n = (p = g.reduce(function(ha, Qa) {
            return Number(Qa.args.timestamp) > Number(ha.args.timestamp) ? Qa : ha
        })) == null ? void 0 : p.args) {
            g = n.bidderRequests === void 0 ? [] : n.bidderRequests;
            p = n.bidsReceived === void 0 ? [] : n.bidsReceived;
            var q = n.auctionId;
            h = n.timestamp;
            if (q && h != null && g.length) {
                var t, v;
                QU.set(((t = a.slot.Xb) != null ? t : "") + ((v = a.slot.adUnitCode) != null ? v : ""), h);
                t = OA(c);
                a.pbjs.version && PU.test(a.pbjs.version) && oi(t, 6, a.pbjs.version);
                var x, D, M, Q;
                if ((D = (x = a.pbjs).getConfig) == null ? 0 : (M = D.call(x).cache) == null ? 0 : (Q = M.url) == null ? 0 : Q.length) {
                    var W, Ba, Y;
                    KA(t, (Ba = (W = a.pbjs).getConfig) == null ? void 0 : (Y = Ba.call(W).cache) == null ? void 0 : Y.url)
                }
                C(t, GA, 9, a.Je);
                x = Yj(function() {
                    return XU(e, q)
                });
                var Xa;
                D = u(g);
                Q = D.next();
                for (M = {}; !Q.done; M = {
                    bidderCode: void 0,
                    wf: void 0
                },
                Q = D.next())
                    for (W = Q.value,
                    M.bidderCode = W.bidderCode,
                    Ba = W.bids,
                    Q = W.timeout,
                    M.wf = W.src,
                    W = W.auctionStart,
                    Ba = u(Ba),
                    Y = Ba.next(),
                    v = {}; !Y.done; v = {
                        Fc: void 0
                    },
                    Y = Ba.next())
                        if (d = Y.value,
                        v.Fc = d.bidId,
                        k = d.transactionId,
                        g = d.adUnitCode,
                        h = d.getFloor,
                        Y = d.mediaTypes,
                        d = d.ortb2Imp,
                        v.Fc && f(g)) {
                            VU(a, t, g);
                            var Jb = void 0
                              , nb = void 0
                              , Lc = void 0;
                            ((Jb = a.g) == null ? 0 : Jb.Kg) && Yh(t, 11) == null && typeof ((nb = d) == null ? void 0 : (Lc = nb.ext) == null ? void 0 : Lc.gpid) === "string" && (Jb = void 0,
                            LA(t, d.ext.gpid.substring(0, (Jb = a.g) == null ? void 0 : Jb.Kg)));
                            k && (Xa != null || (Xa = k),
                            Yh(t, 4) != null || oi(t, 4, k),
                            b.has(k) || b.set(k, W));
                            Ff(kh(t, 8)) == null && Number.isFinite(Q) && li(t, 8, Q);
                            d = p.find(function(ha) {
                                return function(Qa) {
                                    return Qa.requestId === ha.Fc
                                }
                            }(v));
                            k = IA(t, function(ha) {
                                return function() {
                                    var Qa = BA(new AA, ha.bidderCode);
                                    TU(a, ha.bidderCode, Qa);
                                    switch (ha.wf) {
                                    case null:
                                    case void 0:
                                    case "client":
                                        pi(Qa, 7, 1);
                                        break;
                                    case "s2s":
                                        pi(Qa, 7, 2)
                                    }
                                    return Qa
                                }
                            }(M)());
                            WU(a, t, k, g, h);
                            if (d) {
                                DA(k, 1);
                                typeof d.timeToRespond === "number" && Number.isFinite(d.timeToRespond) && nh(k, 2, Nf(Math.round(d.timeToRespond)));
                                try {
                                    g = v = void 0,
                                    (g = (v = a).ff) == null || g.call(v, d)
                                } catch (ha) {}
                                Y = SU(a, d, Y);
                                CA(k, Y)
                            } else
                                (Y = x().get(v.Fc)) && !Y.Nb ? (DA(k, 2),
                                Number.isFinite(Y.latency) && nh(k, 2, Nf(Math.round(Y.latency)))) : (Y = DA(k, 3),
                                Number.isFinite(Q) && nh(Y, 2, Nf(Math.round(Q))))
                        }
                var Ga, dd;
                ((dd = (Ga = a.pbjs).getConfig) == null ? 0 : dd.call(Ga).useBidCache) && UU(a, t, q);
                return {
                    Vg: c,
                    transactionId: Xa,
                    arg: n
                }
            }
        }
    };
    function ZU(a, b) {
        return YU(new RU(a,b))
    }
    ;var $U = function(a) {
        R.call(this);
        var b = this
          , c = wL(yL(this.getSettings()));
        c && c.length > 0 && (aq.reset(),
        cq(new gq(c)));
        this.C = new yU;
        this.B = null;
        this.j = a;
        this.F = new Map;
        this.A = this.j.B;
        this.J = new pH(this);
        Hu(this, this.J);
        this.P = new IF(window,{
            timeoutMs: 500
        });
        this.U = new EL(window,{
            timeoutMs: 500
        });
        this.K = new cR;
        fR(this.K);
        a = new XF(window,{
            timeoutMs: 500
        });
        this.O = new FR(a,500);
        Hu(this, this.O);
        this.g = null;
        this.H = {};
        AL.g !== 0 ? (this.o = new gT,
        Hu(this, this.o)) : this.o = hT();
        oM() && (this.o.init(bT(this.A)),
        this.D = nT(this.o, this.j.C),
        Gu(this, function() {
            var d = b.D;
            b.o.o.delete(d);
            AL.g !== 0 && (I(ty).o[d] = null)
        }))
    };
    w($U, R);
    $U.prototype.destroy = function() {
        this.dispose()
    }
    ;
    $U.prototype.getVersion = function() {
        return "h.3.668.1"
    }
    ;
    $U.prototype.requestAds = function(a, b) {
        var c = this
          , d = []
          , e = null;
        KF(this.P) && d.push(new Promise(function(h) {
            NF(c.P, function(k) {
                e = k;
                h()
            })
        }
        ));
        var f = null;
        EF(this.U.caller) && d.push(new Promise(function(h) {
            FL(c.U, function(k) {
                f = k;
                h()
            })
        }
        ));
        var g = null;
        d.push(HR(this.O).then(function(h) {
            g = h
        }));
        Promise.all(d).then(function() {
            aV(c, a, b, {
                re: e,
                ve: f,
                Qd: g
            })
        })
    }
    ;
    var aV = function(a, b, c, d) {
        var e = b.adTagUrl
          , f = "goog_" + Ql++;
        a.F.set(f, c || null);
        var g = bV({
            adTagUrl: e,
            re: d.re,
            ve: d.ve,
            Qd: d.Qd
        });
        a.g = KL(e, g || {});
        hO(a.g, function() {
            cV(a)
        });
        var h, k = (h = b.adTagUrl) == null ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"), l = PL(a.g);
        c = dV(a, l, k);
        d = fR(a.K);
        var n = e ? qL(e) : null;
        e = uR().then(function(p) {
            var q = p.serializedConfig;
            var t = p.errorMessage;
            if (q)
                q = WA(q);
            else
                throw Error(t != null ? t : "Unknown PPC error");
            BR(q, n, p.latencyMs);
            return q
        }).catch(function(p) {
            V.getInstance().report(189, {
                message: p.message
            });
            return null
        });
        e = Promise.race([e, Wz(500, null)]);
        Promise.all([c, d, e]).then(function(p) {
            var q = u(p);
            q.next();
            p = q.next().value;
            q = q.next().value;
            var t = {};
            V.getInstance().report(182, (t.aid = !!AL.B,
            t.aidf = !!a.B,
            t.hsc = !l && k,
            t));
            q = eV(a, b, g, p, q);
            t = bT(a.A, f);
            a.J.listen(t, "adsLoader", a.V);
            HM(t, "adsLoader", "requestAds", q);
            q = {};
            V.getInstance().report(155, (q.ws = bR(),
            q.blob = p != null ? p : "undef",
            q))
        })
    };
    $U.prototype.getSettings = function() {
        return AL
    }
    ;
    $U.prototype.contentComplete = function() {
        HM(bT(this.A), "adsLoader", "contentComplete")
    }
    ;
    $U.prototype.V = function(a) {
        var b = a.messageType;
        switch (b) {
        case "adsLoaded":
            b = a.ma;
            a = a.Tb;
            b = new Z(this.o,this.j,b.adTagUrl || "",b.adCuePoints,this.D,b.isCustomClickTrackingAllowed,bT(this.A, a),this.g);
            this.dispatchEvent(new LU(b,fV(this, a)));
            break;
        case "error":
            b = a.ma;
            this.dispatchEvent(new WT(new UT(b),fV(this, a.Tb)));
            a = {
                error: b.errorCode,
                vis: no(document)
            };
            V.getInstance().report(7, a);
            break;
        case "cookieUpdate":
            a = a.ma;
            if (a == null)
                break;
            if (AL.isCookiesEnabled()) {
                b = new GL;
                b = ji(b, 5, !0);
                var c = a.gfpCookie;
                c && zU(this.C, "__gads", xU(c), b);
                (c = a.gfpCookieV2) && zU(this.C, "__gpi", xU(c), b)
            }
            if (c = a.eoidCookie) {
                b = new MU;
                c = xU(c);
                var d = ue(bi(c, 2)) - Date.now() / 1E3;
                d = {
                    Xc: Math.max(d, 0),
                    path: ue(E(c, 3)),
                    domain: ue(E(c, 4)),
                    md: !1
                };
                kp("__eoi", ue(c.getValue()), d, b.g)
            }
            gV(this, a.encryptedSignalBidderIds || []);
            break;
        case "trackingUrlPinged":
            this.dispatchEvent(new YT(b,null,a.ma))
        }
    }
    ;
    var gV = function(a, b) {
        b.length !== 0 && (b = jO(b.map(function(c) {
            return {
                Jc: c
            }
        }), a.g)) && b.forEach(function(c) {
            c.then(function(d) {
                d && cV(a)
            })
        })
    }
      , cV = function(a) {
        var b = iN(gO(a.g));
        b && (a.H.espSignals = b,
        HM(bT(a.A), "adsLoader", "signalsRefresh", a.H))
    }
      , fV = function(a, b) {
        var c = a.F.get(b);
        a.F.delete(b);
        return c != null ? c : null
    }
      , bV = function(a) {
        var b = a.re
          , c = a.ve;
        a = a.Qd;
        var d, e, f, g, h, k, l = {};
        var n = n === void 0 ? y : n;
        return l.gfcLoaded = Dm(n.top, "googlefcLoaded"),
        l.addtlConsent = (d = b == null ? void 0 : b.addtlConsent) != null ? d : null,
        l.gdprApplies = (e = b == null ? void 0 : b.gdprApplies) != null ? e : null,
        l.tcString = (f = b == null ? void 0 : b.tcString) != null ? f : null,
        l.uspString = (g = c == null ? void 0 : c.uspString) != null ? g : null,
        l.gppString = (h = a == null ? void 0 : a.gppString) != null ? h : null,
        l.gppSid = (k = a == null ? void 0 : a.sid) != null ? k : null,
        l
    }
      , hV = function(a, b) {
        var c = {};
        c.contentMediaUrl = a.j.L;
        c.customClickTrackingProvided = a.j.A != null;
        c.isAmp = sM();
        a: {
            try {
                var d = window.top.location.href
            } catch (D) {
                d = 2;
                break a
            }
            d = d == null ? 2 : d == window.document.location.href ? 0 : 1
        }
        c.iframeState = d;
        c.imaHostingDomain = window.document.domain;
        c.imaHostingPageUrl = window.document.URL;
        c.topAccessiblePageUrl = rM();
        c.referrer = window.document.referrer;
        c.domLoadTime = a.A.J;
        c.sdkImplLoadTime = a.A.K;
        c.supportsResizing = !QT(a.j);
        d = cm().location.ancestorOrigins;
        c.topOrigin = d ? d.length > 0 && d[d.length - 1].length < 200 ? d[d.length - 1] : "" : null;
        c.osdId = a.D;
        c.usesCustomVideoPlayback = QT(a.j);
        c.usesProxyMediaElement = RT(a.j);
        c.usesInlinePlayback = a.j.I;
        d = a.j.uc;
        a = [];
        var e = ""
          , f = "";
        if (d != null) {
            e = d;
            f = !0;
            f = f === void 0 ? !1 : f;
            for (var g = [], h = 0; e && h < 25; ++h) {
                var k = "";
                f !== void 0 && f || (k = (k = e.nodeType !== 9 && e.id) ? "/" + k : "");
                a: {
                    if (e && e.nodeName && e.parentElement) {
                        var l = e.nodeName.toString().toLowerCase();
                        for (var n = e.parentElement.childNodes, p = 0, q = 0; q < n.length; ++q) {
                            var t = n[q];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() === l) {
                                if (e === t) {
                                    l = "." + p;
                                    break a
                                }
                                ++p
                            }
                        }
                    }
                    l = ""
                }
                g.push((e.nodeName && e.nodeName.toString().toLowerCase()) + k + l);
                e = e.parentElement
            }
            e = g.join();
            if (d) {
                d = (d = d.ownerDocument) && (d.defaultView || d.parentWindow) || null;
                f = [];
                if (d)
                    try {
                        var v = d.parent;
                        for (g = 0; v && v !== d && g < 25; ++g) {
                            var x = v.frames;
                            for (h = 0; h < x.length; ++h)
                                if (d === x[h]) {
                                    f.push(h);
                                    break
                                }
                            d = v;
                            v = d.parent
                        }
                    } catch (D) {}
                f = f.join()
            } else
                f = ""
        }
        a.push(e, f);
        if (b != null) {
            for (v = 0; v < yF.length - 1; ++v)
                a.push(rm(b, yF[v]) || "");
            b = rm(b, "videoad_start_delay");
            v = "";
            b && (b = parseInt(b, 10),
            v = b < 0 ? "postroll" : b == 0 ? "preroll" : "midroll");
            a.push(v)
        } else
            for (b = 0; b < yF.length; ++b)
                a.push("");
        return c.videoAdKey = zm(a.join(":")).toString(),
        c
    }
      , iV = function(a, b, c) {
        a = OL(a);
        b = b.adTagUrl ? qL(b.adTagUrl) : null;
        var d;
        c && b ? (c = Ph(c, PA, 3),
        c = !!b && (c == null ? void 0 : (d = Ah(c, 1, bg)) == null ? void 0 : d.get(b)),
        V.getInstance().report(196, {
            status: c,
            network: b
        }),
        d = c != null ? c : !1) : d = !1;
        return {
            lf: a,
            mf: !d
        }
    }
      , jV = function(a, b, c) {
        var d = QL(a);
        c = iV(a, b, c);
        a = new MU;
        b = c.lf;
        c = c.mf;
        return !ip(a.g) || Zh(d, 8) || (b || !Zh(d, 5)) && c ? !1 : !0
    }
      , kV = function(a, b, c) {
        var d = QL(a);
        c = iV(a, b, c);
        a = new MU;
        b = c.lf;
        c = c.mf;
        if (Zh(d, 8) || (b || !Zh(d, 5)) && c)
            d = void 0;
        else {
            var e;
            d = (e = gp("__eoi", a.g)) != null ? e : void 0
        }
        return d
    }
      , lV = function(a, b, c) {
        if (Zb() && Cm(window.fetch) && Cm(window.AbortController))
            try {
                var d = window.isSecureContext && !["localhost", "127.0.0.1"].includes(window.location.hostname)
                  , e = window.document;
                var f = !!(d && "browsingTopics"in e && e.browsingTopics instanceof Function && Sq("browsing-topics", e));
                if (a.j) {
                    var g = LL(a, "rdp");
                    var h = IL(g) ? "1" : ""
                } else
                    h = "";
                d = h === "1";
                var k, l = LL(a, "us_privacy"), n;
                var p = a.g.uspString || l || "";
                l = p = p.toUpperCase();
                if (l.length == 4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" && GD.hasOwnProperty(l[1]) && GD.hasOwnProperty(l[2]) && GD.hasOwnProperty(l[3])) {
                    var q = new ED;
                    var t = mi(q, 1, parseInt(p[0], 10));
                    var v = F(t, 2, GD[p[1]]);
                    var x = F(v, 3, GD[p[2]]);
                    var D = F(x, 4, GD[p[3]])
                } else
                    Hl(FD, "Invalid US privacy string: " + p + "."),
                    D = null;
                var M;
                if (!(M = ((n = D) == null ? void 0 : di(n, 3)) === 2 || RL(a)))
                    if (ML(a)) {
                        var Q = NL(a);
                        M = Q ? !RF(Q, ["3", "4"], 0) : !0
                    } else
                        M = !1;
                if (!(k = M)) {
                    var W = LL(a, "npa")
                      , Ba = IL(W);
                    k = (a.j && Ba ? "1" : "") === "1"
                }
                var Y;
                if (!(Y = k || d || PL(a))) {
                    if (a.j) {
                        var Xa = LL(a, "tfcd");
                        var Jb = Xa === "0" || Xa === "false" ? (0).toString() : IL(Xa) ? (1).toString() : ""
                    } else
                        Jb = "";
                    var nb;
                    if (!(nb = Jb === (1).toString())) {
                        if (a.j) {
                            var Lc = LL(a, "tfua");
                            var Ga = Lc === "0" || Lc === "false" ? (0).toString() : IL(Lc) ? (1).toString() : ""
                        } else
                            Ga = "";
                        nb = Ga === (1).toString()
                    }
                    Y = nb
                }
                a = !Y;
                var dd = b.adTagUrl ? qL(b.adTagUrl) : null;
                if (c && dd) {
                    var ha, Qa, ed;
                    var fd = (ed = (ha = Ph(c, UA, 4)) == null ? void 0 : (Qa = Ah(ha, 1, bg)) == null ? void 0 : Qa.get(dd)) != null ? ed : !0
                } else
                    fd = !0;
                return f && a && fd
            } catch (ob) {
                var Se;
                V.getInstance().report(209, {
                    message: (Se = ob) == null ? void 0 : Se.message
                })
            }
        return !1
    }
      , dV = function(a, b, c) {
        if (b)
            return a.B = null,
            Promise.resolve([]);
        b = [];
        b.push(mV());
        c && b.push(nV(a));
        return Promise.all(b)
    }
      , nV = function(a) {
        var b;
        return Ja(function(c) {
            if (c.g == 1)
                return a.B || (a.B = new DM,
                EM(a.B)),
                ya(c, a.B.getId(), 2);
            b = c.j;
            AL.B = b.id || "";
            c.g = 0
        })
    }
      , mV = function() {
        return Zb() && (Yp(Aq) || Yp(zq)) ? Yp(zq) ? new Promise(function(a) {
            setTimeout(function() {
                a()
            }, 50)
        }
        ) : oV().then(function(a) {
            var b, c = (b = a.label) != null ? b : "";
            AL.I = c;
            AL.H = a.status
        }) : Promise.resolve()
    }
      , oV = function() {
        if (navigator.cookieDeprecationLabel) {
            var a = navigator.cookieDeprecationLabel.getValue().then(function(c) {
                return {
                    label: c,
                    status: 1
                }
            }).catch(function() {
                return {
                    label: "",
                    status: 2
                }
            })
              , b = new Promise(function(c) {
                setTimeout(function() {
                    c({
                        label: "",
                        status: 5
                    })
                }, 50)
            }
            );
            return Promise.race([b, a])
        }
        return Promise.resolve({
            label: "",
            status: 3
        })
    }
      , eV = function(a, b, c, d, e) {
        var f = {};
        f = (f.limaExperimentIds = bq().sort().join(","),
        f);
        var g = Gm()
          , h = Pq()
          , k = {};
        h = (k.experimentStateProto = wi(h),
        k);
        k = zL(a.getSettings(), mT(a.o));
        var l = hV(a, b.adTagUrl)
          , n = Tq()
          , p = {};
        c = (p.consentSettings = c,
        p.imalibExperiments = f,
        p.genotypeExperimentData = h,
        p.settings = k,
        p.videoEnvironment = l,
        p.isFledgeEligible = n,
        p.pvsid = g,
        p);
        Object.assign(c, pV(b));
        a.g && AL.isCookiesEnabled() && (f = QL(a.g),
        c.isBrowserCookieEnabled = ip(a.C.g) ? !!Zh(f, 5) : !1,
        g = f ? fp("__gads", f, a.C.g) : null,
        g !== null && (c.gfpCookieValue = g),
        g = f ? fp("__gpi", f, a.C.g) : null,
        g !== null && (c.gfpCookieV2Id = g),
        f = f ? fp("__gpi_opt_out", f, a.C.g) : null,
        f !== null && (c.gfpCookieV2OptOut = f));
        a.g && (f = jV(a.g, b, e),
        c.eoidCookieEnabled = f,
        (f = kV(a.g, b, e)) && (c.eoidCookieValue = f));
        if (f = iN(gO(a.g)))
            a.H.espSignals = f,
            c.espSignals = f;
        d && (c.gmaSignals = d);
        c.isEapLoader = !1;
        if (Yp(Dq) || lr(qF)) {
            d = function(M) {
                V.getInstance().report(195, {
                    message: M == null ? void 0 : M.message
                })
            }
            ;
            try {
                var q = NU();
                if (q) {
                    var t = rL(b.adTagUrl, d);
                    if (t && (Yp(Dq) || CR(e, pL(t)))) {
                        var v, x = (v = ZU(q, {
                            adUnitCode: t
                        })) == null ? void 0 : v.Vg;
                        c.clientBidsProto = x ? $c(x.g(), 3) : void 0
                    }
                }
            } catch (M) {
                d(M)
            }
        }
        a.g && (c.topicsEnabled = lV(a.g, b, e));
        try {
            c.quicksilverSignals = wi(TM(a.j))
        } catch (M) {
            var D;
            V.getInstance().report(212, {
                message: (D = M) == null ? void 0 : D.message
            }, !0)
        }
        return c
    };
    $U.prototype.contentComplete = $U.prototype.contentComplete;
    $U.prototype.getSettings = $U.prototype.getSettings;
    $U.prototype.requestAds = $U.prototype.requestAds;
    $U.prototype.getVersion = $U.prototype.getVersion;
    $U.prototype.destroy = $U.prototype.destroy;
    var qV = function() {
        this.l = this.j = "unknown";
        this.g = "0";
        this.adsResponse = null;
        this.adTagUrl = "";
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.forceNonLinearFullSlot = !1;
        this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
        this.omidAccessModeRules = {};
        this.pageUrl = null;
        this.vastLoadTimeout = 5E3
    }
      , pV = function(a) {
        var b = {};
        b.adsResponse = a.adsResponse;
        b.videoPlayActivation = a.j;
        b.videoPlayMuted = a.l;
        b.videoContinuousPlay = a.g;
        b.adTagUrl = a.adTagUrl;
        b.contentDuration = a.contentDuration;
        b.contentKeywords = a.contentKeywords;
        b.contentTitle = a.contentTitle;
        b.linearAdSlotWidth = a.linearAdSlotWidth;
        b.linearAdSlotHeight = a.linearAdSlotHeight;
        b.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
        b.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
        b.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
        b.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
        b.vastLoadTimeout = a.vastLoadTimeout;
        b.omidAccessModeRules = a.omidAccessModeRules;
        b.pageUrl = a.pageUrl;
        return b
    };
    qV.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    }
    ;
    qV.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    }
    ;
    qV.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    }
    ;
    qV.prototype.setContinuousPlayback = qV.prototype.setContinuousPlayback;
    qV.prototype.setAdWillPlayMuted = qV.prototype.setAdWillPlayMuted;
    qV.prototype.setAdWillAutoPlay = qV.prototype.setAdWillAutoPlay;
    z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", ST, window);
    z("google.ima.AdError.ErrorCode", S, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", TT, window);
    z("google.ima.AdErrorEvent.Type", VT, window);
    z("google.ima.AdEvent.Type", XT, window);
    z("google.ima.AdsLoader", $U, window);
    z("google.ima.AdsManagerLoadedEvent.Type", KU, window);
    z("google.ima.CompanionAdSelectionSettings", MM, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", JM);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", KM);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", LM);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", T, window);
    z("google.ima.settings", AL, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", nS, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", qV, window);
    z("google.ima.VERSION", "3.668.1");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    z("google.ima.secureSignals", {
        clearAllCache: function() {
            gN(window.localStorage)
        }
    });
    var rV = function(a, b, c) {
        this.j = c;
        b.length === 0 && (b = [[]]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length; ) {
                var h = d[f++];
                if (h < 128)
                    e[g++] = String.fromCharCode(h);
                else if (h > 191 && h < 224) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (h > 239 && h < 365) {
                    k = d[f++];
                    var l = d[f++]
                      , n = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (l & 63) << 6 | n & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else
                    k = d[f++],
                    l = d[f++],
                    e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | l & 63)
            }
            return new RegExp(e.join(""))
        })
    }
      , sV = function(a, b) {
        return b ? a.g.some(function(c) {
            c = b.match(c);
            return c == null ? !1 : !a.j || c.length >= 1 && c[1] === "3.668.1" || c.length >= 2 && c[2] === "3.668.1" ? !0 : !1
        }) : !1
    }
      , tV = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47]
      , uV = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47]
      , vV = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47]
      , wV = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115], [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]]
      , xV = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]]
      , yV = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]]
      , zV = new rV(tV,wV,!1);
    new rV(tV,xV,!0);
    var AV = new rV(uV,wV,!1);
    new rV(uV,xV,!0);
    var BV = new rV([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47],wV,!1)
      , CV = new rV([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47],[],!1);
    new rV(tV,[[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],!0);
    var DV = new rV(tV,yV,!1)
      , EV = new rV(tV,yV,!1);
    new rV(vV,[[112, 97, 108, 46, 106, 115]],!1);
    new rV(vV,[[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]],!1);
    new rV(vV,[[99, 116, 118, 95, 112, 97, 108, 46, 106, 115]],!1);
    function FV(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
            ke: void 0
        },
        d++)
            if (c.ke = b[d],
            a.some(function(e) {
                return function(f) {
                    return sV(f, e.ke.src)
                }
            }(c)))
                return c.ke;
        return null
    }
    ;if (!function(a) {
        if (a.some(function(c) {
            return sV(c, cm().location.href)
        }))
            return !0;
        var b = FV(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
        b == null && document.querySelectorAll && (b = FV(a, document.querySelectorAll("script")));
        return b != null
    }([zV, BV, AV, CV, DV, EV]))
        throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    var vR = tR
      , AR = {
        pageUrl: rM()
    };
    try {
        var wR = zR();
        if (!wR)
            throw Error("Could not generate config URL");
        yR()
    } catch (a) {
        xR(vR, a)
    }
    ;
}
)();
