import {
	w as jt,
	d as V,
	r as K,
	a as fe,
	b as Wt,
	c as lr,
	o as ar,
	e as Ae,
	f as pe,
	i as Z,
	g as rt,
	u as he,
	h as ct,
	F as We,
	C as sr,
	p as ae,
	j as dr,
	k as gt,
	t as ee,
	l as O,
	m,
	T as cr,
	n as ur,
	q as fr,
	s as hr,
	v as vr,
	x as bt,
	y as wt,
	z as pr,
	A as mr,
	B as tn,
	D as gr,
	E as Me,
	M as nn,
	G as Ve,
	H as ao,
	I as Vt,
	S as kn,
	J as br,
	U as _n,
	K as In,
	L as ut,
	N as wr,
	O as Pn,
	P as yr,
	Q as xr,
	R as Sr,
	V as Cr,
	W as $r,
	X as zr,
	Y as H,
	Z as B,
	_ as W,
	$ as A,
	a0 as de,
	a1 as Re,
	a2 as De,
	a3 as kr,
	a4 as ht,
	a5 as yt,
	a6 as so,
	a7 as we,
	a8 as _r,
	a9 as Ir,
	aa as Pr,
	ab as Mr,
	ac as Ar,
	ad as Er,
	ae as Or,
	af as Tr,
	ag as Br,
	ah as Rr,
	ai as Nr,
	aj as Hr,
	ak as Lr,
	al as Fr,
	am as ve,
	an as Se,
	ao as Y,
	ap as Kr,
	aq as Dr,
	ar as jr,
	as as Wr,
	at as Ie,
	au as ze,
	av as Vr,
	aw as Mn,
	ax as Ze,
	ay as Ur,
	az as Gr,
	aA as Xr,
} from './index-06154a72.js';
import { f as It, N as on } from './Icon-7ca9397a.js';
import { u as Yr, i as tt, r as be, c as le, a as qr, b as Zr, d as se } from './use-rtl-cc014dc1.js';
import { c as Jr, o as Qr, a as lt, f as ei, u as ot, b as co, t as ti, r as xe } from './Tag-3b6c7a6c.js';
import { u as Ue } from './use-css-vars-class-b6cc7c20.js';
import { i as uo, c as ni, a as An, N as oi, b as ri } from './Loading-9f5640cf.js';
import { f as ii, h as li, i as fo, t as ai, a as si, V as Ut, N as di, p as Pt, d as ke } from './Close-cd2efd8a.js';
import { b as ci } from './next-frame-once-7035a838.js';
import { N as ui, u as fi } from './FadeInExpandTransition-ac6c62cc.js';
import { _ as hi } from './_plugin-vue_export-helper-c27b6911.js';
function En(e, t) {
	let { target: n } = e;
	for (; n; ) {
		if (n.dataset && n.dataset[t] !== void 0) return !0;
		n = n.parentElement;
	}
	return !1;
}
function vt(e) {
	return e.composedPath()[0] || null;
}
function vi(e = 8) {
	return Math.random()
		.toString(16)
		.slice(2, 2 + e);
}
function nt(e, t = [], n) {
	const o = {};
	return (
		t.forEach(r => {
			o[r] = e[r];
		}),
		Object.assign(o, n)
	);
}
function rn(e) {
	return Object.keys(e);
}
function On(e, t = 'default', n = void 0) {
	const o = e[t];
	if (!o) return jt('getFirstSlotVNode', `slot[${t}] is empty`), null;
	const r = ii(o(n));
	return r.length === 1 ? r[0] : (jt('getFirstSlotVNode', `slot[${t}] should have exactly one child`), null);
}
function pi(e) {
	return t => {
		t ? (e.value = t.$el) : (e.value = null);
	};
}
const Tn = V({
	render() {
		var e, t;
		return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
	},
});
let Mt;
function mi() {
	return Mt === void 0 && (Mt = navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')), Mt;
}
function gi(e, t, n) {
	if (!t) return e;
	const o = K(e.value);
	let r = null;
	return (
		fe(e, i => {
			r !== null && window.clearTimeout(r),
				i === !0
					? n && !n.value
						? (o.value = !0)
						: (r = window.setTimeout(() => {
								o.value = !0;
						  }, t))
					: (o.value = !1);
		}),
		o
	);
}
function bi(e) {
	const t = K(!!e.value);
	if (t.value) return Wt(t);
	const n = fe(e, o => {
		o && ((t.value = !0), n());
	});
	return Wt(t);
}
function ft(e) {
	return e.composedPath()[0];
}
const wi = { mousemoveoutside: new WeakMap(), clickoutside: new WeakMap() };
function yi(e, t, n) {
	if (e === 'mousemoveoutside') {
		const o = r => {
			t.contains(ft(r)) || n(r);
		};
		return { mousemove: o, touchstart: o };
	} else if (e === 'clickoutside') {
		let o = !1;
		const r = l => {
				o = !t.contains(ft(l));
			},
			i = l => {
				o && (t.contains(ft(l)) || n(l));
			};
		return { mousedown: r, mouseup: i, touchstart: r, touchend: i };
	}
	return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function ho(e, t, n) {
	const o = wi[e];
	let r = o.get(t);
	r === void 0 && o.set(t, (r = new WeakMap()));
	let i = r.get(n);
	return i === void 0 && r.set(n, (i = yi(e, t, n))), i;
}
function xi(e, t, n, o) {
	if (e === 'mousemoveoutside' || e === 'clickoutside') {
		const r = ho(e, t, n);
		return (
			Object.keys(r).forEach(i => {
				re(i, document, r[i], o);
			}),
			!0
		);
	}
	return !1;
}
function Si(e, t, n, o) {
	if (e === 'mousemoveoutside' || e === 'clickoutside') {
		const r = ho(e, t, n);
		return (
			Object.keys(r).forEach(i => {
				J(i, document, r[i], o);
			}),
			!0
		);
	}
	return !1;
}
function Ci() {
	if (typeof window > 'u') return { on: () => {}, off: () => {} };
	const e = new WeakMap(),
		t = new WeakMap();
	function n() {
		e.set(this, !0);
	}
	function o() {
		e.set(this, !0), t.set(this, !0);
	}
	function r(p, u, S) {
		const d = p[u];
		return (
			(p[u] = function () {
				return S.apply(p, arguments), d.apply(p, arguments);
			}),
			p
		);
	}
	function i(p, u) {
		p[u] = Event.prototype[u];
	}
	const l = new WeakMap(),
		s = Object.getOwnPropertyDescriptor(Event.prototype, 'currentTarget');
	function a() {
		var p;
		return (p = l.get(this)) !== null && p !== void 0 ? p : null;
	}
	function f(p, u) {
		s !== void 0 &&
			Object.defineProperty(p, 'currentTarget', {
				configurable: !0,
				enumerable: !0,
				get: u ?? s.get,
			});
	}
	const v = { bubble: {}, capture: {} },
		h = {};
	function c() {
		const p = function (u) {
			const { type: S, eventPhase: d, bubbles: M } = u,
				I = ft(u);
			if (d === 2) return;
			const L = d === 1 ? 'capture' : 'bubble';
			let z = I;
			const E = [];
			for (; z === null && (z = window), E.push(z), z !== window; ) z = z.parentNode || null;
			const b = v.capture[S],
				F = v.bubble[S];
			if ((r(u, 'stopPropagation', n), r(u, 'stopImmediatePropagation', o), f(u, a), L === 'capture')) {
				if (b === void 0) return;
				for (let D = E.length - 1; D >= 0 && !e.has(u); --D) {
					const U = E[D],
						te = b.get(U);
					if (te !== void 0) {
						l.set(u, U);
						for (const q of te) {
							if (t.has(u)) break;
							q(u);
						}
					}
					if (D === 0 && !M && F !== void 0) {
						const q = F.get(U);
						if (q !== void 0)
							for (const ie of q) {
								if (t.has(u)) break;
								ie(u);
							}
					}
				}
			} else if (L === 'bubble') {
				if (F === void 0) return;
				for (let D = 0; D < E.length && !e.has(u); ++D) {
					const U = E[D],
						te = F.get(U);
					if (te !== void 0) {
						l.set(u, U);
						for (const q of te) {
							if (t.has(u)) break;
							q(u);
						}
					}
				}
			}
			i(u, 'stopPropagation'), i(u, 'stopImmediatePropagation'), f(u);
		};
		return (p.displayName = 'evtdUnifiedHandler'), p;
	}
	function w() {
		const p = function (u) {
			const { type: S, eventPhase: d } = u;
			if (d !== 2) return;
			const M = h[S];
			M !== void 0 && M.forEach(I => I(u));
		};
		return (p.displayName = 'evtdUnifiedWindowEventHandler'), p;
	}
	const x = c(),
		$ = w();
	function y(p, u) {
		const S = v[p];
		return S[u] === void 0 && ((S[u] = new Map()), window.addEventListener(u, x, p === 'capture')), S[u];
	}
	function g(p) {
		return h[p] === void 0 && ((h[p] = new Set()), window.addEventListener(p, $)), h[p];
	}
	function R(p, u) {
		let S = p.get(u);
		return S === void 0 && p.set(u, (S = new Set())), S;
	}
	function P(p, u, S, d) {
		const M = v[u][S];
		if (M !== void 0) {
			const I = M.get(p);
			if (I !== void 0 && I.has(d)) return !0;
		}
		return !1;
	}
	function C(p, u) {
		const S = h[p];
		return !!(S !== void 0 && S.has(u));
	}
	function _(p, u, S, d) {
		let M;
		if (
			(typeof d == 'object' && d.once === !0
				? (M = b => {
						T(p, u, M, d), S(b);
				  })
				: (M = S),
			xi(p, u, M, d))
		)
			return;
		const L = d === !0 || (typeof d == 'object' && d.capture === !0) ? 'capture' : 'bubble',
			z = y(L, p),
			E = R(z, u);
		if ((E.has(M) || E.add(M), u === window)) {
			const b = g(p);
			b.has(M) || b.add(M);
		}
	}
	function T(p, u, S, d) {
		if (Si(p, u, S, d)) return;
		const I = d === !0 || (typeof d == 'object' && d.capture === !0),
			L = I ? 'capture' : 'bubble',
			z = y(L, p),
			E = R(z, u);
		if (u === window && !P(u, I ? 'bubble' : 'capture', p, S) && C(p, S)) {
			const F = h[p];
			F.delete(S), F.size === 0 && (window.removeEventListener(p, $), (h[p] = void 0));
		}
		E.has(S) && E.delete(S), E.size === 0 && z.delete(u), z.size === 0 && (window.removeEventListener(p, x, L === 'capture'), (v[L][p] = void 0));
	}
	return { on: _, off: T };
}
const { on: re, off: J } = Ci(),
	$i =
		(typeof window > 'u' ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
		!window.MSStream;
function zi() {
	return $i;
}
function ki(e = {}, t) {
	const n = lr({ ctrl: !1, command: !1, win: !1, shift: !1, tab: !1 }),
		{ keydown: o, keyup: r } = e,
		i = a => {
			switch (a.key) {
				case 'Control':
					n.ctrl = !0;
					break;
				case 'Meta':
					(n.command = !0), (n.win = !0);
					break;
				case 'Shift':
					n.shift = !0;
					break;
				case 'Tab':
					n.tab = !0;
					break;
			}
			o !== void 0 &&
				Object.keys(o).forEach(f => {
					if (f !== a.key) return;
					const v = o[f];
					if (typeof v == 'function') v(a);
					else {
						const { stop: h = !1, prevent: c = !1 } = v;
						h && a.stopPropagation(), c && a.preventDefault(), v.handler(a);
					}
				});
		},
		l = a => {
			switch (a.key) {
				case 'Control':
					n.ctrl = !1;
					break;
				case 'Meta':
					(n.command = !1), (n.win = !1);
					break;
				case 'Shift':
					n.shift = !1;
					break;
				case 'Tab':
					n.tab = !1;
					break;
			}
			r !== void 0 &&
				Object.keys(r).forEach(f => {
					if (f !== a.key) return;
					const v = r[f];
					if (typeof v == 'function') v(a);
					else {
						const { stop: h = !1, prevent: c = !1 } = v;
						h && a.stopPropagation(), c && a.preventDefault(), v.handler(a);
					}
				});
		},
		s = () => {
			(t === void 0 || t.value) && (re('keydown', document, i), re('keyup', document, l)),
				t !== void 0 &&
					fe(t, a => {
						a ? (re('keydown', document, i), re('keyup', document, l)) : (J('keydown', document, i), J('keyup', document, l));
					});
		};
	return (
		li()
			? (ar(s),
			  Ae(() => {
					(t === void 0 || t.value) && (J('keydown', document, i), J('keyup', document, l));
			  }))
			: s(),
		Wt(n)
	);
}
const _i = pe('n-internal-select-menu-body'),
	ln = pe('n-modal-body'),
	an = pe('n-drawer-body'),
	xt = pe('n-popover-body'),
	vo = '__disabled__';
function je(e) {
	const t = Z(ln, null),
		n = Z(an, null),
		o = Z(xt, null),
		r = Z(_i, null),
		i = K();
	if (typeof document < 'u') {
		i.value = document.fullscreenElement;
		const l = () => {
			i.value = document.fullscreenElement;
		};
		rt(() => {
			re('fullscreenchange', document, l);
		}),
			Ae(() => {
				J('fullscreenchange', document, l);
			});
	}
	return he(() => {
		var l;
		const { to: s } = e;
		return s !== void 0
			? s === !1
				? vo
				: s === !0
				? i.value || 'body'
				: s
			: t != null && t.value
			? (l = t.value.$el) !== null && l !== void 0
				? l
				: t.value
			: n != null && n.value
			? n.value
			: o != null && o.value
			? o.value
			: r != null && r.value
			? r.value
			: s ?? (i.value || 'body');
	});
}
je.tdkey = vo;
je.propTo = { type: [String, Object, Boolean], default: void 0 };
function Gt(e, t, n = 'default') {
	const o = t[n];
	if (o === void 0) throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
	return o();
}
function Xt(e, t = !0, n = []) {
	return (
		e.forEach(o => {
			if (o !== null) {
				if (typeof o != 'object') {
					(typeof o == 'string' || typeof o == 'number') && n.push(ct(String(o)));
					return;
				}
				if (Array.isArray(o)) {
					Xt(o, t, n);
					return;
				}
				if (o.type === We) {
					if (o.children === null) return;
					Array.isArray(o.children) && Xt(o.children, t, n);
				} else o.type !== sr && n.push(o);
			}
		}),
		n
	);
}
function Bn(e, t, n = 'default') {
	const o = t[n];
	if (o === void 0) throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
	const r = Xt(o());
	if (r.length === 1) return r[0];
	throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let Pe = null;
function po() {
	if (Pe === null && ((Pe = document.getElementById('v-binder-view-measurer')), Pe === null)) {
		(Pe = document.createElement('div')), (Pe.id = 'v-binder-view-measurer');
		const { style: e } = Pe;
		(e.position = 'fixed'),
			(e.left = '0'),
			(e.right = '0'),
			(e.top = '0'),
			(e.bottom = '0'),
			(e.pointerEvents = 'none'),
			(e.visibility = 'hidden'),
			document.body.appendChild(Pe);
	}
	return Pe.getBoundingClientRect();
}
function Ii(e, t) {
	const n = po();
	return {
		top: t,
		left: e,
		height: 0,
		width: 0,
		right: n.width - e,
		bottom: n.height - t,
	};
}
function At(e) {
	const t = e.getBoundingClientRect(),
		n = po();
	return {
		left: t.left - n.left,
		top: t.top - n.top,
		bottom: n.height + n.top - t.bottom,
		right: n.width + n.left - t.right,
		width: t.width,
		height: t.height,
	};
}
function Pi(e) {
	return e.nodeType === 9 ? null : e.parentNode;
}
function mo(e) {
	if (e === null) return null;
	const t = Pi(e);
	if (t === null) return null;
	if (t.nodeType === 9) return document;
	if (t.nodeType === 1) {
		const { overflow: n, overflowX: o, overflowY: r } = getComputedStyle(t);
		if (/(auto|scroll|overlay)/.test(n + r + o)) return t;
	}
	return mo(t);
}
const Mi = V({
		name: 'Binder',
		props: {
			syncTargetWithParent: Boolean,
			syncTarget: { type: Boolean, default: !0 },
		},
		setup(e) {
			var t;
			ae('VBinder', (t = dr()) === null || t === void 0 ? void 0 : t.proxy);
			const n = Z('VBinder', null),
				o = K(null),
				r = g => {
					(o.value = g), n && e.syncTargetWithParent && n.setTargetRef(g);
				};
			let i = [];
			const l = () => {
					let g = o.value;
					for (; (g = mo(g)), g !== null; ) i.push(g);
					for (const R of i) re('scroll', R, h, !0);
				},
				s = () => {
					for (const g of i) J('scroll', g, h, !0);
					i = [];
				},
				a = new Set(),
				f = g => {
					a.size === 0 && l(), a.has(g) || a.add(g);
				},
				v = g => {
					a.has(g) && a.delete(g), a.size === 0 && s();
				},
				h = () => {
					ci(c);
				},
				c = () => {
					a.forEach(g => g());
				},
				w = new Set(),
				x = g => {
					w.size === 0 && re('resize', window, y), w.has(g) || w.add(g);
				},
				$ = g => {
					w.has(g) && w.delete(g), w.size === 0 && J('resize', window, y);
				},
				y = () => {
					w.forEach(g => g());
				};
			return (
				Ae(() => {
					J('resize', window, y), s();
				}),
				{
					targetRef: o,
					setTargetRef: r,
					addScrollListener: f,
					removeScrollListener: v,
					addResizeListener: x,
					removeResizeListener: $,
				}
			);
		},
		render() {
			return Gt('binder', this.$slots);
		},
	}),
	go = Mi,
	bo = V({
		name: 'Target',
		setup() {
			const { setTargetRef: e, syncTarget: t } = Z('VBinder');
			return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
		},
		render() {
			const { syncTarget: e, setTargetDirective: t } = this;
			return e ? gt(Bn('follower', this.$slots), [[t]]) : Bn('follower', this.$slots);
		},
	}),
	Le = '@@mmoContext',
	Ai = {
		mounted(e, { value: t }) {
			(e[Le] = { handler: void 0 }), typeof t == 'function' && ((e[Le].handler = t), re('mousemoveoutside', e, t));
		},
		updated(e, { value: t }) {
			const n = e[Le];
			typeof t == 'function'
				? n.handler
					? n.handler !== t && (J('mousemoveoutside', e, n.handler), (n.handler = t), re('mousemoveoutside', e, t))
					: ((e[Le].handler = t), re('mousemoveoutside', e, t))
				: n.handler && (J('mousemoveoutside', e, n.handler), (n.handler = void 0));
		},
		unmounted(e) {
			const { handler: t } = e[Le];
			t && J('mousemoveoutside', e, t), (e[Le].handler = void 0);
		},
	},
	Ei = Ai,
	Fe = '@@coContext',
	Oi = {
		mounted(e, { value: t, modifiers: n }) {
			(e[Fe] = { handler: void 0 }), typeof t == 'function' && ((e[Fe].handler = t), re('clickoutside', e, t, { capture: n.capture }));
		},
		updated(e, { value: t, modifiers: n }) {
			const o = e[Fe];
			typeof t == 'function'
				? o.handler
					? o.handler !== t &&
					  (J('clickoutside', e, o.handler, { capture: n.capture }), (o.handler = t), re('clickoutside', e, t, { capture: n.capture }))
					: ((e[Fe].handler = t), re('clickoutside', e, t, { capture: n.capture }))
				: o.handler && (J('clickoutside', e, o.handler, { capture: n.capture }), (o.handler = void 0));
		},
		unmounted(e, { modifiers: t }) {
			const { handler: n } = e[Fe];
			n && J('clickoutside', e, n, { capture: t.capture }), (e[Fe].handler = void 0);
		},
	},
	Rn = Oi;
function Ti(e, t) {
	console.error(`[vdirs/${e}]: ${t}`);
}
class Bi {
	constructor() {
		(this.elementZIndex = new Map()), (this.nextZIndex = 2e3);
	}
	get elementCount() {
		return this.elementZIndex.size;
	}
	ensureZIndex(t, n) {
		const { elementZIndex: o } = this;
		if (n !== void 0) {
			(t.style.zIndex = `${n}`), o.delete(t);
			return;
		}
		const { nextZIndex: r } = this;
		(o.has(t) && o.get(t) + 1 === this.nextZIndex) || ((t.style.zIndex = `${r}`), o.set(t, r), (this.nextZIndex = r + 1), this.squashState());
	}
	unregister(t, n) {
		const { elementZIndex: o } = this;
		o.has(t) ? o.delete(t) : n === void 0 && Ti('z-index-manager/unregister-element', 'Element not found when unregistering.'), this.squashState();
	}
	squashState() {
		const { elementCount: t } = this;
		t || (this.nextZIndex = 2e3), this.nextZIndex - t > 2500 && this.rearrange();
	}
	rearrange() {
		const t = Array.from(this.elementZIndex.entries());
		t.sort((n, o) => n[1] - o[1]),
			(this.nextZIndex = 2e3),
			t.forEach(n => {
				const o = n[0],
					r = this.nextZIndex++;
				`${r}` !== o.style.zIndex && (o.style.zIndex = `${r}`);
			});
	}
}
const Et = new Bi(),
	Ke = '@@ziContext',
	Ri = {
		mounted(e, t) {
			const { value: n = {} } = t,
				{ zIndex: o, enabled: r } = n;
			(e[Ke] = { enabled: !!r, initialized: !1 }), r && (Et.ensureZIndex(e, o), (e[Ke].initialized = !0));
		},
		updated(e, t) {
			const { value: n = {} } = t,
				{ zIndex: o, enabled: r } = n,
				i = e[Ke].enabled;
			r && !i && (Et.ensureZIndex(e, o), (e[Ke].initialized = !0)), (e[Ke].enabled = !!r);
		},
		unmounted(e, t) {
			if (!e[Ke].initialized) return;
			const { value: n = {} } = t,
				{ zIndex: o } = n;
			Et.unregister(e, o);
		},
	},
	wo = Ri;
function Nn(e) {
	return typeof e == 'string' ? document.querySelector(e) : e();
}
const Ni = V({
		name: 'LazyTeleport',
		props: {
			to: { type: [String, Object], default: void 0 },
			disabled: Boolean,
			show: { type: Boolean, required: !0 },
		},
		setup(e) {
			return {
				showTeleport: bi(ee(e, 'show')),
				mergedTo: O(() => {
					const { to: t } = e;
					return t ?? 'body';
				}),
			};
		},
		render() {
			return this.showTeleport
				? this.disabled
					? Gt('lazy-teleport', this.$slots)
					: m(cr, { disabled: this.disabled, to: this.mergedTo }, Gt('lazy-teleport', this.$slots))
				: null;
		},
	}),
	at = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
	Hn = { start: 'end', center: 'center', end: 'start' },
	Ot = { top: 'height', bottom: 'height', left: 'width', right: 'width' },
	Hi = {
		'bottom-start': 'top left',
		bottom: 'top center',
		'bottom-end': 'top right',
		'top-start': 'bottom left',
		top: 'bottom center',
		'top-end': 'bottom right',
		'right-start': 'top left',
		right: 'center left',
		'right-end': 'bottom left',
		'left-start': 'top right',
		left: 'center right',
		'left-end': 'bottom right',
	},
	Li = {
		'bottom-start': 'bottom left',
		bottom: 'bottom center',
		'bottom-end': 'bottom right',
		'top-start': 'top left',
		top: 'top center',
		'top-end': 'top right',
		'right-start': 'top right',
		right: 'center right',
		'right-end': 'bottom right',
		'left-start': 'top left',
		left: 'center left',
		'left-end': 'bottom left',
	},
	Fi = {
		'bottom-start': 'right',
		'bottom-end': 'left',
		'top-start': 'right',
		'top-end': 'left',
		'right-start': 'bottom',
		'right-end': 'top',
		'left-start': 'bottom',
		'left-end': 'top',
	},
	Ln = { top: !0, bottom: !1, left: !0, right: !1 },
	Fn = { top: 'end', bottom: 'start', left: 'end', right: 'start' };
function Ki(e, t, n, o, r, i) {
	if (!r || i) return { placement: e, top: 0, left: 0 };
	const [l, s] = e.split('-');
	let a = s ?? 'center',
		f = { top: 0, left: 0 };
	const v = (w, x, $) => {
			let y = 0,
				g = 0;
			const R = n[w] - t[x] - t[w];
			return R > 0 && o && ($ ? (g = Ln[x] ? R : -R) : (y = Ln[x] ? R : -R)), { left: y, top: g };
		},
		h = l === 'left' || l === 'right';
	if (a !== 'center') {
		const w = Fi[e],
			x = at[w],
			$ = Ot[w];
		if (n[$] > t[$]) {
			if (t[w] + t[$] < n[$]) {
				const y = (n[$] - t[$]) / 2;
				t[w] < y || t[x] < y ? (t[w] < t[x] ? ((a = Hn[s]), (f = v($, x, h))) : (f = v($, w, h))) : (a = 'center');
			}
		} else n[$] < t[$] && t[x] < 0 && t[w] > t[x] && (a = Hn[s]);
	} else {
		const w = l === 'bottom' || l === 'top' ? 'left' : 'top',
			x = at[w],
			$ = Ot[w],
			y = (n[$] - t[$]) / 2;
		(t[w] < y || t[x] < y) && (t[w] > t[x] ? ((a = Fn[w]), (f = v($, w, h))) : ((a = Fn[x]), (f = v($, x, h))));
	}
	let c = l;
	return t[l] < n[Ot[l]] && t[l] < t[at[l]] && (c = at[l]), { placement: a !== 'center' ? `${c}-${a}` : c, left: f.left, top: f.top };
}
function Di(e, t) {
	return t ? Li[e] : Hi[e];
}
function ji(e, t, n, o, r, i) {
	if (i)
		switch (e) {
			case 'bottom-start':
				return {
					top: `${Math.round(n.top - t.top + n.height)}px`,
					left: `${Math.round(n.left - t.left)}px`,
					transform: 'translateY(-100%)',
				};
			case 'bottom-end':
				return {
					top: `${Math.round(n.top - t.top + n.height)}px`,
					left: `${Math.round(n.left - t.left + n.width)}px`,
					transform: 'translateX(-100%) translateY(-100%)',
				};
			case 'top-start':
				return {
					top: `${Math.round(n.top - t.top)}px`,
					left: `${Math.round(n.left - t.left)}px`,
					transform: '',
				};
			case 'top-end':
				return {
					top: `${Math.round(n.top - t.top)}px`,
					left: `${Math.round(n.left - t.left + n.width)}px`,
					transform: 'translateX(-100%)',
				};
			case 'right-start':
				return {
					top: `${Math.round(n.top - t.top)}px`,
					left: `${Math.round(n.left - t.left + n.width)}px`,
					transform: 'translateX(-100%)',
				};
			case 'right-end':
				return {
					top: `${Math.round(n.top - t.top + n.height)}px`,
					left: `${Math.round(n.left - t.left + n.width)}px`,
					transform: 'translateX(-100%) translateY(-100%)',
				};
			case 'left-start':
				return {
					top: `${Math.round(n.top - t.top)}px`,
					left: `${Math.round(n.left - t.left)}px`,
					transform: '',
				};
			case 'left-end':
				return {
					top: `${Math.round(n.top - t.top + n.height)}px`,
					left: `${Math.round(n.left - t.left)}px`,
					transform: 'translateY(-100%)',
				};
			case 'top':
				return {
					top: `${Math.round(n.top - t.top)}px`,
					left: `${Math.round(n.left - t.left + n.width / 2)}px`,
					transform: 'translateX(-50%)',
				};
			case 'right':
				return {
					top: `${Math.round(n.top - t.top + n.height / 2)}px`,
					left: `${Math.round(n.left - t.left + n.width)}px`,
					transform: 'translateX(-100%) translateY(-50%)',
				};
			case 'left':
				return {
					top: `${Math.round(n.top - t.top + n.height / 2)}px`,
					left: `${Math.round(n.left - t.left)}px`,
					transform: 'translateY(-50%)',
				};
			case 'bottom':
			default:
				return {
					top: `${Math.round(n.top - t.top + n.height)}px`,
					left: `${Math.round(n.left - t.left + n.width / 2)}px`,
					transform: 'translateX(-50%) translateY(-100%)',
				};
		}
	switch (e) {
		case 'bottom-start':
			return {
				top: `${Math.round(n.top - t.top + n.height + o)}px`,
				left: `${Math.round(n.left - t.left + r)}px`,
				transform: '',
			};
		case 'bottom-end':
			return {
				top: `${Math.round(n.top - t.top + n.height + o)}px`,
				left: `${Math.round(n.left - t.left + n.width + r)}px`,
				transform: 'translateX(-100%)',
			};
		case 'top-start':
			return {
				top: `${Math.round(n.top - t.top + o)}px`,
				left: `${Math.round(n.left - t.left + r)}px`,
				transform: 'translateY(-100%)',
			};
		case 'top-end':
			return {
				top: `${Math.round(n.top - t.top + o)}px`,
				left: `${Math.round(n.left - t.left + n.width + r)}px`,
				transform: 'translateX(-100%) translateY(-100%)',
			};
		case 'right-start':
			return {
				top: `${Math.round(n.top - t.top + o)}px`,
				left: `${Math.round(n.left - t.left + n.width + r)}px`,
				transform: '',
			};
		case 'right-end':
			return {
				top: `${Math.round(n.top - t.top + n.height + o)}px`,
				left: `${Math.round(n.left - t.left + n.width + r)}px`,
				transform: 'translateY(-100%)',
			};
		case 'left-start':
			return {
				top: `${Math.round(n.top - t.top + o)}px`,
				left: `${Math.round(n.left - t.left + r)}px`,
				transform: 'translateX(-100%)',
			};
		case 'left-end':
			return {
				top: `${Math.round(n.top - t.top + n.height + o)}px`,
				left: `${Math.round(n.left - t.left + r)}px`,
				transform: 'translateX(-100%) translateY(-100%)',
			};
		case 'top':
			return {
				top: `${Math.round(n.top - t.top + o)}px`,
				left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
				transform: 'translateY(-100%) translateX(-50%)',
			};
		case 'right':
			return {
				top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
				left: `${Math.round(n.left - t.left + n.width + r)}px`,
				transform: 'translateY(-50%)',
			};
		case 'left':
			return {
				top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
				left: `${Math.round(n.left - t.left + r)}px`,
				transform: 'translateY(-50%) translateX(-100%)',
			};
		case 'bottom':
		default:
			return {
				top: `${Math.round(n.top - t.top + n.height + o)}px`,
				left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
				transform: 'translateX(-50%)',
			};
	}
}
const Wi = lt([
		lt('.v-binder-follower-container', {
			position: 'absolute',
			left: '0',
			right: '0',
			top: '0',
			height: '0',
			pointerEvents: 'none',
			zIndex: 'auto',
		}),
		lt('.v-binder-follower-content', { position: 'absolute', zIndex: 'auto' }, [lt('> *', { pointerEvents: 'all' })]),
	]),
	yo = V({
		name: 'Follower',
		inheritAttrs: !1,
		props: {
			show: Boolean,
			enabled: { type: Boolean, default: void 0 },
			placement: { type: String, default: 'bottom' },
			syncTrigger: { type: Array, default: ['resize', 'scroll'] },
			to: [String, Object],
			flip: { type: Boolean, default: !0 },
			internalShift: Boolean,
			x: Number,
			y: Number,
			width: String,
			minWidth: String,
			containerClass: String,
			teleportDisabled: Boolean,
			zindexable: { type: Boolean, default: !0 },
			zIndex: Number,
			overlap: Boolean,
		},
		setup(e) {
			const t = Z('VBinder'),
				n = he(() => (e.enabled !== void 0 ? e.enabled : e.show)),
				o = K(null),
				r = K(null),
				i = () => {
					const { syncTrigger: c } = e;
					c.includes('scroll') && t.addScrollListener(a), c.includes('resize') && t.addResizeListener(a);
				},
				l = () => {
					t.removeScrollListener(a), t.removeResizeListener(a);
				};
			rt(() => {
				n.value && (a(), i());
			});
			const s = ur();
			Wi.mount({ id: 'vueuc/binder', head: !0, anchorMetaName: Jr, ssr: s }),
				Ae(() => {
					l();
				}),
				Qr(() => {
					n.value && a();
				});
			const a = () => {
				if (!n.value) return;
				const c = o.value;
				if (c === null) return;
				const w = t.targetRef,
					{ x, y: $, overlap: y } = e,
					g = x !== void 0 && $ !== void 0 ? Ii(x, $) : At(w);
				c.style.setProperty('--v-target-width', `${Math.round(g.width)}px`), c.style.setProperty('--v-target-height', `${Math.round(g.height)}px`);
				const { width: R, minWidth: P, placement: C, internalShift: _, flip: T } = e;
				c.setAttribute('v-placement', C), y ? c.setAttribute('v-overlap', '') : c.removeAttribute('v-overlap');
				const { style: p } = c;
				R === 'target' ? (p.width = `${g.width}px`) : R !== void 0 ? (p.width = R) : (p.width = ''),
					P === 'target' ? (p.minWidth = `${g.width}px`) : P !== void 0 ? (p.minWidth = P) : (p.minWidth = '');
				const u = At(c),
					S = At(r.value),
					{ left: d, top: M, placement: I } = Ki(C, g, u, _, T, y),
					L = Di(I, y),
					{ left: z, top: E, transform: b } = ji(I, S, g, M, d, y);
				c.setAttribute('v-placement', I),
					c.style.setProperty('--v-offset-left', `${Math.round(d)}px`),
					c.style.setProperty('--v-offset-top', `${Math.round(M)}px`),
					(c.style.transform = `translateX(${z}) translateY(${E}) ${b}`),
					c.style.setProperty('--v-transform-origin', L),
					(c.style.transformOrigin = L);
			};
			fe(n, c => {
				c ? (i(), f()) : l();
			});
			const f = () => {
				fr()
					.then(a)
					.catch(c => console.error(c));
			};
			['placement', 'x', 'y', 'internalShift', 'flip', 'width', 'overlap', 'minWidth'].forEach(c => {
				fe(ee(e, c), a);
			}),
				['teleportDisabled'].forEach(c => {
					fe(ee(e, c), f);
				}),
				fe(ee(e, 'syncTrigger'), c => {
					c.includes('resize') ? t.addResizeListener(a) : t.removeResizeListener(a),
						c.includes('scroll') ? t.addScrollListener(a) : t.removeScrollListener(a);
				});
			const v = uo(),
				h = he(() => {
					const { to: c } = e;
					if (c !== void 0) return c;
					v.value;
				});
			return {
				VBinder: t,
				mergedEnabled: n,
				offsetContainerRef: r,
				followerRef: o,
				mergedTo: h,
				syncPosition: a,
			};
		},
		render() {
			return m(
				Ni,
				{ show: this.show, to: this.mergedTo, disabled: this.teleportDisabled },
				{
					default: () => {
						var e, t;
						const n = m(
							'div',
							{
								class: ['v-binder-follower-container', this.containerClass],
								ref: 'offsetContainerRef',
							},
							[
								m(
									'div',
									{ class: 'v-binder-follower-content', ref: 'followerRef' },
									(t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e),
								),
							],
						);
						return this.zindexable ? gt(n, [[wo, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : n;
					},
				},
			);
		},
	});
function xo(e) {
	return e instanceof HTMLElement;
}
function So(e) {
	for (let t = 0; t < e.childNodes.length; t++) {
		const n = e.childNodes[t];
		if (xo(n) && ($o(n) || So(n))) return !0;
	}
	return !1;
}
function Co(e) {
	for (let t = e.childNodes.length - 1; t >= 0; t--) {
		const n = e.childNodes[t];
		if (xo(n) && ($o(n) || Co(n))) return !0;
	}
	return !1;
}
function $o(e) {
	if (!Vi(e)) return !1;
	try {
		e.focus({ preventScroll: !0 });
	} catch {}
	return document.activeElement === e;
}
function Vi(e) {
	if (e.tabIndex > 0 || (e.tabIndex === 0 && e.getAttribute('tabIndex') !== null)) return !0;
	if (e.getAttribute('disabled')) return !1;
	switch (e.nodeName) {
		case 'A':
			return !!e.href && e.rel !== 'ignore';
		case 'INPUT':
			return e.type !== 'hidden' && e.type !== 'file';
		case 'BUTTON':
		case 'SELECT':
		case 'TEXTAREA':
			return !0;
		default:
			return !1;
	}
}
let Je = [];
const Ui = V({
	name: 'FocusTrap',
	props: {
		disabled: Boolean,
		active: Boolean,
		autoFocus: { type: Boolean, default: !0 },
		onEsc: Function,
		initialFocusTo: String,
		finalFocusTo: String,
		returnFocusOnDeactivated: { type: Boolean, default: !0 },
	},
	setup(e) {
		const t = vi(),
			n = K(null),
			o = K(null);
		let r = !1,
			i = !1;
		const l = typeof document > 'u' ? null : document.activeElement;
		function s() {
			return Je[Je.length - 1] === t;
		}
		function a(y) {
			var g;
			y.code === 'Escape' && s() && ((g = e.onEsc) === null || g === void 0 || g.call(e, y));
		}
		rt(() => {
			fe(
				() => e.active,
				y => {
					y ? (h(), re('keydown', document, a)) : (J('keydown', document, a), r && c());
				},
				{ immediate: !0 },
			);
		}),
			Ae(() => {
				J('keydown', document, a), r && c();
			});
		function f(y) {
			if (!i && s()) {
				const g = v();
				if (g === null || g.contains(vt(y))) return;
				w('first');
			}
		}
		function v() {
			const y = n.value;
			if (y === null) return null;
			let g = y;
			for (; (g = g.nextSibling), !(g === null || (g instanceof Element && g.tagName === 'DIV')); );
			return g;
		}
		function h() {
			var y;
			if (!e.disabled) {
				if ((Je.push(t), e.autoFocus)) {
					const { initialFocusTo: g } = e;
					g === void 0 ? w('first') : (y = Nn(g)) === null || y === void 0 || y.focus({ preventScroll: !0 });
				}
				(r = !0), document.addEventListener('focus', f, !0);
			}
		}
		function c() {
			var y;
			if (e.disabled || (document.removeEventListener('focus', f, !0), (Je = Je.filter(R => R !== t)), s())) return;
			const { finalFocusTo: g } = e;
			g !== void 0
				? (y = Nn(g)) === null || y === void 0 || y.focus({ preventScroll: !0 })
				: e.returnFocusOnDeactivated && l instanceof HTMLElement && ((i = !0), l.focus({ preventScroll: !0 }), (i = !1));
		}
		function w(y) {
			if (s() && e.active) {
				const g = n.value,
					R = o.value;
				if (g !== null && R !== null) {
					const P = v();
					if (P == null || P === R) {
						(i = !0), g.focus({ preventScroll: !0 }), (i = !1);
						return;
					}
					i = !0;
					const C = y === 'first' ? So(P) : Co(P);
					(i = !1), C || ((i = !0), g.focus({ preventScroll: !0 }), (i = !1));
				}
			}
		}
		function x(y) {
			if (i) return;
			const g = v();
			g !== null && (y.relatedTarget !== null && g.contains(y.relatedTarget) ? w('last') : w('first'));
		}
		function $(y) {
			i || (y.relatedTarget !== null && y.relatedTarget === n.value ? w('last') : w('first'));
		}
		return {
			focusableStartRef: n,
			focusableEndRef: o,
			focusableStyle: 'position: absolute; height: 0; width: 0;',
			handleStartFocus: x,
			handleEndFocus: $,
		};
	},
	render() {
		const { default: e } = this.$slots;
		if (e === void 0) return null;
		if (this.disabled) return e();
		const { active: t, focusableStyle: n } = this;
		return m(We, null, [
			m('div', {
				'aria-hidden': 'true',
				tabindex: t ? '0' : '-1',
				ref: 'focusableStartRef',
				style: n,
				onFocus: this.handleStartFocus,
			}),
			e(),
			m('div', {
				'aria-hidden': 'true',
				style: n,
				ref: 'focusableEndRef',
				tabindex: t ? '0' : '-1',
				onFocus: this.handleEndFocus,
			}),
		]);
	},
});
function Gi(e) {
	const t = { isDeactivated: !1 };
	let n = !1;
	return (
		hr(() => {
			if (((t.isDeactivated = !1), !n)) {
				n = !0;
				return;
			}
			e();
		}),
		vr(() => {
			(t.isDeactivated = !0), n || (n = !0);
		}),
		t
	);
}
var Xi = bt(wt, 'WeakMap');
const Yt = Xi;
var Yi = pr(Object.keys, Object);
const qi = Yi;
var Zi = Object.prototype,
	Ji = Zi.hasOwnProperty;
function Qi(e) {
	if (!mr(e)) return qi(e);
	var t = [];
	for (var n in Object(e)) Ji.call(e, n) && n != 'constructor' && t.push(n);
	return t;
}
function sn(e) {
	return tn(e) ? gr(e) : Qi(e);
}
var el = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	tl = /^\w*$/;
function dn(e, t) {
	if (Me(e)) return !1;
	var n = typeof e;
	return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || fo(e) ? !0 : tl.test(e) || !el.test(e) || (t != null && e in Object(t));
}
var nl = 'Expected a function';
function cn(e, t) {
	if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(nl);
	var n = function () {
		var o = arguments,
			r = t ? t.apply(this, o) : o[0],
			i = n.cache;
		if (i.has(r)) return i.get(r);
		var l = e.apply(this, o);
		return (n.cache = i.set(r, l) || i), l;
	};
	return (n.cache = new (cn.Cache || nn)()), n;
}
cn.Cache = nn;
var ol = 500;
function rl(e) {
	var t = cn(e, function (o) {
			return n.size === ol && n.clear(), o;
		}),
		n = t.cache;
	return t;
}
var il = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	ll = /\\(\\)?/g,
	al = rl(function (e) {
		var t = [];
		return (
			e.charCodeAt(0) === 46 && t.push(''),
			e.replace(il, function (n, o, r, i) {
				t.push(r ? i.replace(ll, '$1') : o || n);
			}),
			t
		);
	});
const sl = al;
function zo(e, t) {
	return Me(e) ? e : dn(e, t) ? [e] : sl(ai(e));
}
var dl = 1 / 0;
function St(e) {
	if (typeof e == 'string' || fo(e)) return e;
	var t = e + '';
	return t == '0' && 1 / e == -dl ? '-0' : t;
}
function ko(e, t) {
	t = zo(t, e);
	for (var n = 0, o = t.length; e != null && n < o; ) e = e[St(t[n++])];
	return n && n == o ? e : void 0;
}
function cl(e, t, n) {
	var o = e == null ? void 0 : ko(e, t);
	return o === void 0 ? n : o;
}
function ul(e, t) {
	for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
	return e;
}
function fl(e, t) {
	for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
		var l = e[n];
		t(l, n, e) && (i[r++] = l);
	}
	return i;
}
function hl() {
	return [];
}
var vl = Object.prototype,
	pl = vl.propertyIsEnumerable,
	Kn = Object.getOwnPropertySymbols,
	ml = Kn
		? function (e) {
				return e == null
					? []
					: ((e = Object(e)),
					  fl(Kn(e), function (t) {
							return pl.call(e, t);
					  }));
		  }
		: hl;
const gl = ml;
function bl(e, t, n) {
	var o = t(e);
	return Me(e) ? o : ul(o, n(e));
}
function Dn(e) {
	return bl(e, sn, gl);
}
var wl = bt(wt, 'DataView');
const qt = wl;
var yl = bt(wt, 'Promise');
const Zt = yl;
var xl = bt(wt, 'Set');
const Jt = xl;
var jn = '[object Map]',
	Sl = '[object Object]',
	Wn = '[object Promise]',
	Vn = '[object Set]',
	Un = '[object WeakMap]',
	Gn = '[object DataView]',
	Cl = Ve(qt),
	$l = Ve(Vt),
	zl = Ve(Zt),
	kl = Ve(Jt),
	_l = Ve(Yt),
	Be = ao;
((qt && Be(new qt(new ArrayBuffer(1))) != Gn) ||
	(Vt && Be(new Vt()) != jn) ||
	(Zt && Be(Zt.resolve()) != Wn) ||
	(Jt && Be(new Jt()) != Vn) ||
	(Yt && Be(new Yt()) != Un)) &&
	(Be = function (e) {
		var t = ao(e),
			n = t == Sl ? e.constructor : void 0,
			o = n ? Ve(n) : '';
		if (o)
			switch (o) {
				case Cl:
					return Gn;
				case $l:
					return jn;
				case zl:
					return Wn;
				case kl:
					return Vn;
				case _l:
					return Un;
			}
		return t;
	});
const Xn = Be;
var Il = '__lodash_hash_undefined__';
function Pl(e) {
	return this.__data__.set(e, Il), this;
}
function Ml(e) {
	return this.__data__.has(e);
}
function pt(e) {
	var t = -1,
		n = e == null ? 0 : e.length;
	for (this.__data__ = new nn(); ++t < n; ) this.add(e[t]);
}
pt.prototype.add = pt.prototype.push = Pl;
pt.prototype.has = Ml;
function Al(e, t) {
	for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (t(e[n], n, e)) return !0;
	return !1;
}
function El(e, t) {
	return e.has(t);
}
var Ol = 1,
	Tl = 2;
function _o(e, t, n, o, r, i) {
	var l = n & Ol,
		s = e.length,
		a = t.length;
	if (s != a && !(l && a > s)) return !1;
	var f = i.get(e),
		v = i.get(t);
	if (f && v) return f == t && v == e;
	var h = -1,
		c = !0,
		w = n & Tl ? new pt() : void 0;
	for (i.set(e, t), i.set(t, e); ++h < s; ) {
		var x = e[h],
			$ = t[h];
		if (o) var y = l ? o($, x, h, t, e, i) : o(x, $, h, e, t, i);
		if (y !== void 0) {
			if (y) continue;
			c = !1;
			break;
		}
		if (w) {
			if (
				!Al(t, function (g, R) {
					if (!El(w, R) && (x === g || r(x, g, n, o, i))) return w.push(R);
				})
			) {
				c = !1;
				break;
			}
		} else if (!(x === $ || r(x, $, n, o, i))) {
			c = !1;
			break;
		}
	}
	return i.delete(e), i.delete(t), c;
}
function Bl(e) {
	var t = -1,
		n = Array(e.size);
	return (
		e.forEach(function (o, r) {
			n[++t] = [r, o];
		}),
		n
	);
}
function Rl(e) {
	var t = -1,
		n = Array(e.size);
	return (
		e.forEach(function (o) {
			n[++t] = o;
		}),
		n
	);
}
var Nl = 1,
	Hl = 2,
	Ll = '[object Boolean]',
	Fl = '[object Date]',
	Kl = '[object Error]',
	Dl = '[object Map]',
	jl = '[object Number]',
	Wl = '[object RegExp]',
	Vl = '[object Set]',
	Ul = '[object String]',
	Gl = '[object Symbol]',
	Xl = '[object ArrayBuffer]',
	Yl = '[object DataView]',
	Yn = kn ? kn.prototype : void 0,
	Tt = Yn ? Yn.valueOf : void 0;
function ql(e, t, n, o, r, i, l) {
	switch (n) {
		case Yl:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			(e = e.buffer), (t = t.buffer);
		case Xl:
			return !(e.byteLength != t.byteLength || !i(new _n(e), new _n(t)));
		case Ll:
		case Fl:
		case jl:
			return br(+e, +t);
		case Kl:
			return e.name == t.name && e.message == t.message;
		case Wl:
		case Ul:
			return e == t + '';
		case Dl:
			var s = Bl;
		case Vl:
			var a = o & Nl;
			if ((s || (s = Rl), e.size != t.size && !a)) return !1;
			var f = l.get(e);
			if (f) return f == t;
			(o |= Hl), l.set(e, t);
			var v = _o(s(e), s(t), o, r, i, l);
			return l.delete(e), v;
		case Gl:
			if (Tt) return Tt.call(e) == Tt.call(t);
	}
	return !1;
}
var Zl = 1,
	Jl = Object.prototype,
	Ql = Jl.hasOwnProperty;
function ea(e, t, n, o, r, i) {
	var l = n & Zl,
		s = Dn(e),
		a = s.length,
		f = Dn(t),
		v = f.length;
	if (a != v && !l) return !1;
	for (var h = a; h--; ) {
		var c = s[h];
		if (!(l ? c in t : Ql.call(t, c))) return !1;
	}
	var w = i.get(e),
		x = i.get(t);
	if (w && x) return w == t && x == e;
	var $ = !0;
	i.set(e, t), i.set(t, e);
	for (var y = l; ++h < a; ) {
		c = s[h];
		var g = e[c],
			R = t[c];
		if (o) var P = l ? o(R, g, c, t, e, i) : o(g, R, c, e, t, i);
		if (!(P === void 0 ? g === R || r(g, R, n, o, i) : P)) {
			$ = !1;
			break;
		}
		y || (y = c == 'constructor');
	}
	if ($ && !y) {
		var C = e.constructor,
			_ = t.constructor;
		C != _ &&
			'constructor' in e &&
			'constructor' in t &&
			!(typeof C == 'function' && C instanceof C && typeof _ == 'function' && _ instanceof _) &&
			($ = !1);
	}
	return i.delete(e), i.delete(t), $;
}
var ta = 1,
	qn = '[object Arguments]',
	Zn = '[object Array]',
	st = '[object Object]',
	na = Object.prototype,
	Jn = na.hasOwnProperty;
function oa(e, t, n, o, r, i) {
	var l = Me(e),
		s = Me(t),
		a = l ? Zn : Xn(e),
		f = s ? Zn : Xn(t);
	(a = a == qn ? st : a), (f = f == qn ? st : f);
	var v = a == st,
		h = f == st,
		c = a == f;
	if (c && In(e)) {
		if (!In(t)) return !1;
		(l = !0), (v = !1);
	}
	if (c && !v) return i || (i = new ut()), l || wr(e) ? _o(e, t, n, o, r, i) : ql(e, t, a, n, o, r, i);
	if (!(n & ta)) {
		var w = v && Jn.call(e, '__wrapped__'),
			x = h && Jn.call(t, '__wrapped__');
		if (w || x) {
			var $ = w ? e.value() : e,
				y = x ? t.value() : t;
			return i || (i = new ut()), r($, y, n, o, i);
		}
	}
	return c ? (i || (i = new ut()), ea(e, t, n, o, r, i)) : !1;
}
function un(e, t, n, o, r) {
	return e === t ? !0 : e == null || t == null || (!Pn(e) && !Pn(t)) ? e !== e && t !== t : oa(e, t, n, o, un, r);
}
var ra = 1,
	ia = 2;
function la(e, t, n, o) {
	var r = n.length,
		i = r,
		l = !o;
	if (e == null) return !i;
	for (e = Object(e); r--; ) {
		var s = n[r];
		if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++r < i; ) {
		s = n[r];
		var a = s[0],
			f = e[a],
			v = s[1];
		if (l && s[2]) {
			if (f === void 0 && !(a in e)) return !1;
		} else {
			var h = new ut();
			if (o) var c = o(f, v, a, e, t, h);
			if (!(c === void 0 ? un(v, f, ra | ia, o, h) : c)) return !1;
		}
	}
	return !0;
}
function Io(e) {
	return e === e && !yr(e);
}
function aa(e) {
	for (var t = sn(e), n = t.length; n--; ) {
		var o = t[n],
			r = e[o];
		t[n] = [o, r, Io(r)];
	}
	return t;
}
function Po(e, t) {
	return function (n) {
		return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
	};
}
function sa(e) {
	var t = aa(e);
	return t.length == 1 && t[0][2]
		? Po(t[0][0], t[0][1])
		: function (n) {
				return n === e || la(n, e, t);
		  };
}
function da(e, t) {
	return e != null && t in Object(e);
}
function ca(e, t, n) {
	t = zo(t, e);
	for (var o = -1, r = t.length, i = !1; ++o < r; ) {
		var l = St(t[o]);
		if (!(i = e != null && n(e, l))) break;
		e = e[l];
	}
	return i || ++o != r ? i : ((r = e == null ? 0 : e.length), !!r && xr(r) && Sr(l, r) && (Me(e) || Cr(e)));
}
function ua(e, t) {
	return e != null && ca(e, t, da);
}
var fa = 1,
	ha = 2;
function va(e, t) {
	return dn(e) && Io(t)
		? Po(St(e), t)
		: function (n) {
				var o = cl(n, e);
				return o === void 0 && o === t ? ua(n, e) : un(t, o, fa | ha);
		  };
}
function pa(e) {
	return function (t) {
		return t == null ? void 0 : t[e];
	};
}
function ma(e) {
	return function (t) {
		return ko(t, e);
	};
}
function ga(e) {
	return dn(e) ? pa(St(e)) : ma(e);
}
function ba(e) {
	return typeof e == 'function' ? e : e == null ? $r : typeof e == 'object' ? (Me(e) ? va(e[0], e[1]) : sa(e)) : ga(e);
}
function wa(e, t) {
	return e && zr(e, t, sn);
}
function ya(e, t) {
	return function (n, o) {
		if (n == null) return n;
		if (!tn(n)) return e(n, o);
		for (var r = n.length, i = t ? r : -1, l = Object(n); (t ? i-- : ++i < r) && o(l[i], i, l) !== !1; );
		return n;
	};
}
var xa = ya(wa);
const Sa = xa;
function Ca(e, t) {
	var n = -1,
		o = tn(e) ? Array(e.length) : [];
	return (
		Sa(e, function (r, i, l) {
			o[++n] = t(r, i, l);
		}),
		o
	);
}
function $a(e, t) {
	var n = Me(e) ? si : Ca;
	return n(e, ba(t));
}
const za = V({
		name: 'ChevronRight',
		render() {
			return m(
				'svg',
				{
					viewBox: '0 0 16 16',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
				},
				m('path', {
					d: 'M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z',
					fill: 'currentColor',
				}),
			);
		},
	}),
	ka = V({
		name: 'ChevronDownFilled',
		render() {
			return m(
				'svg',
				{
					viewBox: '0 0 16 16',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
				},
				m('path', {
					d: 'M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z',
					fill: 'currentColor',
				}),
			);
		},
	});
function Qn(e) {
	return Array.isArray(e) ? e : [e];
}
const Qt = { STOP: 'STOP' };
function Mo(e, t) {
	const n = t(e);
	e.children !== void 0 && n !== Qt.STOP && e.children.forEach(o => Mo(o, t));
}
function _a(e, t = {}) {
	const { preserveGroup: n = !1 } = t,
		o = [],
		r = n
			? l => {
					l.isLeaf || (o.push(l.key), i(l.children));
			  }
			: l => {
					l.isLeaf || (l.isGroup || o.push(l.key), i(l.children));
			  };
	function i(l) {
		l.forEach(r);
	}
	return i(e), o;
}
function Ia(e, t) {
	const { isLeaf: n } = e;
	return n !== void 0 ? n : !t(e);
}
function Pa(e) {
	return e.children;
}
function Ma(e) {
	return e.key;
}
function Aa() {
	return !1;
}
function Ea(e, t) {
	const { isLeaf: n } = e;
	return !(n === !1 && !Array.isArray(t(e)));
}
function Oa(e) {
	return e.disabled === !0;
}
function Ta(e, t) {
	return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Bt(e) {
	var t;
	return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Rt(e) {
	var t;
	return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Ba(e, t) {
	const n = new Set(e);
	return (
		t.forEach(o => {
			n.has(o) || n.add(o);
		}),
		Array.from(n)
	);
}
function Ra(e, t) {
	const n = new Set(e);
	return (
		t.forEach(o => {
			n.has(o) && n.delete(o);
		}),
		Array.from(n)
	);
}
function Na(e) {
	return (e == null ? void 0 : e.type) === 'group';
}
class Ha extends Error {
	constructor() {
		super(), (this.message = 'SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.');
	}
}
function La(e, t, n, o) {
	return mt(t.concat(e), n, o, !1);
}
function Fa(e, t) {
	const n = new Set();
	return (
		e.forEach(o => {
			const r = t.treeNodeMap.get(o);
			if (r !== void 0) {
				let i = r.parent;
				for (; i !== null && !(i.disabled || n.has(i.key)); ) n.add(i.key), (i = i.parent);
			}
		}),
		n
	);
}
function Ka(e, t, n, o) {
	const r = mt(t, n, o, !1),
		i = mt(e, n, o, !0),
		l = Fa(e, n),
		s = [];
	return (
		r.forEach(a => {
			(i.has(a) || l.has(a)) && s.push(a);
		}),
		s.forEach(a => r.delete(a)),
		r
	);
}
function Nt(e, t) {
	const { checkedKeys: n, keysToCheck: o, keysToUncheck: r, indeterminateKeys: i, cascade: l, leafOnly: s, checkStrategy: a, allowNotLoaded: f } = e;
	if (!l)
		return o !== void 0
			? { checkedKeys: Ba(n, o), indeterminateKeys: Array.from(i) }
			: r !== void 0
			? { checkedKeys: Ra(n, r), indeterminateKeys: Array.from(i) }
			: { checkedKeys: Array.from(n), indeterminateKeys: Array.from(i) };
	const { levelTreeNodeMap: v } = t;
	let h;
	r !== void 0 ? (h = Ka(r, n, t, f)) : o !== void 0 ? (h = La(o, n, t, f)) : (h = mt(n, t, f, !1));
	const c = a === 'parent',
		w = a === 'child' || s,
		x = h,
		$ = new Set(),
		y = Math.max.apply(null, Array.from(v.keys()));
	for (let g = y; g >= 0; g -= 1) {
		const R = g === 0,
			P = v.get(g);
		for (const C of P) {
			if (C.isLeaf) continue;
			const { key: _, shallowLoaded: T } = C;
			if (
				(w &&
					T &&
					C.children.forEach(d => {
						!d.disabled && !d.isLeaf && d.shallowLoaded && x.has(d.key) && x.delete(d.key);
					}),
				C.disabled || !T)
			)
				continue;
			let p = !0,
				u = !1,
				S = !0;
			for (const d of C.children) {
				const M = d.key;
				if (!d.disabled) {
					if ((S && (S = !1), x.has(M))) u = !0;
					else if ($.has(M)) {
						(u = !0), (p = !1);
						break;
					} else if (((p = !1), u)) break;
				}
			}
			p && !S
				? (c &&
						C.children.forEach(d => {
							!d.disabled && x.has(d.key) && x.delete(d.key);
						}),
				  x.add(_))
				: u && $.add(_),
				R && w && x.has(_) && x.delete(_);
		}
	}
	return { checkedKeys: Array.from(x), indeterminateKeys: Array.from($) };
}
function mt(e, t, n, o) {
	const { treeNodeMap: r, getChildren: i } = t,
		l = new Set(),
		s = new Set(e);
	return (
		e.forEach(a => {
			const f = r.get(a);
			f !== void 0 &&
				Mo(f, v => {
					if (v.disabled) return Qt.STOP;
					const { key: h } = v;
					if (!l.has(h) && (l.add(h), s.add(h), Ta(v.rawNode, i))) {
						if (o) return Qt.STOP;
						if (!n) throw new Ha();
					}
				});
		}),
		s
	);
}
function Da(e, { includeGroup: t = !1, includeSelf: n = !0 }, o) {
	var r;
	const i = o.treeNodeMap;
	let l = e == null ? null : (r = i.get(e)) !== null && r !== void 0 ? r : null;
	const s = { keyPath: [], treeNodePath: [], treeNode: l };
	if (l != null && l.ignored) return (s.treeNode = null), s;
	for (; l; ) !l.ignored && (t || !l.isGroup) && s.treeNodePath.push(l), (l = l.parent);
	return s.treeNodePath.reverse(), n || s.treeNodePath.pop(), (s.keyPath = s.treeNodePath.map(a => a.key)), s;
}
function ja(e) {
	if (e.length === 0) return null;
	const t = e[0];
	return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Wa(e, t) {
	const n = e.siblings,
		o = n.length,
		{ index: r } = e;
	return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1];
}
function eo(e, t, { loop: n = !1, includeDisabled: o = !1 } = {}) {
	const r = t === 'prev' ? Va : Wa,
		i = { reverse: t === 'prev' };
	let l = !1,
		s = null;
	function a(f) {
		if (f !== null) {
			if (f === e) {
				if (!l) l = !0;
				else if (!e.disabled && !e.isGroup) {
					s = e;
					return;
				}
			} else if ((!f.disabled || o) && !f.ignored && !f.isGroup) {
				s = f;
				return;
			}
			if (f.isGroup) {
				const v = fn(f, i);
				v !== null ? (s = v) : a(r(f, n));
			} else {
				const v = r(f, !1);
				if (v !== null) a(v);
				else {
					const h = Ua(f);
					h != null && h.isGroup ? a(r(h, n)) : n && a(r(f, !0));
				}
			}
		}
	}
	return a(e), s;
}
function Va(e, t) {
	const n = e.siblings,
		o = n.length,
		{ index: r } = e;
	return t ? n[(r - 1 + o) % o] : r === 0 ? null : n[r - 1];
}
function Ua(e) {
	return e.parent;
}
function fn(e, t = {}) {
	const { reverse: n = !1 } = t,
		{ children: o } = e;
	if (o) {
		const { length: r } = o,
			i = n ? r - 1 : 0,
			l = n ? -1 : r,
			s = n ? -1 : 1;
		for (let a = i; a !== l; a += s) {
			const f = o[a];
			if (!f.disabled && !f.ignored)
				if (f.isGroup) {
					const v = fn(f, t);
					if (v !== null) return v;
				} else return f;
		}
	}
	return null;
}
const Ga = {
	getChild() {
		return this.ignored ? null : fn(this);
	},
	getParent() {
		const { parent: e } = this;
		return e != null && e.isGroup ? e.getParent() : e;
	},
	getNext(e = {}) {
		return eo(this, 'next', e);
	},
	getPrev(e = {}) {
		return eo(this, 'prev', e);
	},
};
function Xa(e, t) {
	const n = t ? new Set(t) : void 0,
		o = [];
	function r(i) {
		i.forEach(l => {
			o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || n === void 0 || n.has(l.key)) && r(l.children);
		});
	}
	return r(e), o;
}
function Ya(e, t) {
	const n = e.key;
	for (; t; ) {
		if (t.key === n) return !0;
		t = t.parent;
	}
	return !1;
}
function Ao(e, t, n, o, r, i = null, l = 0) {
	const s = [];
	return (
		e.forEach((a, f) => {
			var v;
			const h = Object.create(o);
			if (
				((h.rawNode = a),
				(h.siblings = s),
				(h.level = l),
				(h.index = f),
				(h.isFirstChild = f === 0),
				(h.isLastChild = f + 1 === e.length),
				(h.parent = i),
				!h.ignored)
			) {
				const c = r(a);
				Array.isArray(c) && (h.children = Ao(c, t, n, o, r, h, l + 1));
			}
			s.push(h), t.set(h.key, h), n.has(l) || n.set(l, []), (v = n.get(l)) === null || v === void 0 || v.push(h);
		}),
		s
	);
}
function Eo(e, t = {}) {
	var n;
	const o = new Map(),
		r = new Map(),
		{ getDisabled: i = Oa, getIgnored: l = Aa, getIsGroup: s = Na, getKey: a = Ma } = t,
		f = (n = t.getChildren) !== null && n !== void 0 ? n : Pa,
		v = t.ignoreEmptyChildren
			? C => {
					const _ = f(C);
					return Array.isArray(_) ? (_.length ? _ : null) : _;
			  }
			: f,
		h = Object.assign(
			{
				get key() {
					return a(this.rawNode);
				},
				get disabled() {
					return i(this.rawNode);
				},
				get isGroup() {
					return s(this.rawNode);
				},
				get isLeaf() {
					return Ia(this.rawNode, v);
				},
				get shallowLoaded() {
					return Ea(this.rawNode, v);
				},
				get ignored() {
					return l(this.rawNode);
				},
				contains(C) {
					return Ya(this, C);
				},
			},
			Ga,
		),
		c = Ao(e, o, r, h, v);
	function w(C) {
		if (C == null) return null;
		const _ = o.get(C);
		return _ && !_.isGroup && !_.ignored ? _ : null;
	}
	function x(C) {
		if (C == null) return null;
		const _ = o.get(C);
		return _ && !_.ignored ? _ : null;
	}
	function $(C, _) {
		const T = x(C);
		return T ? T.getPrev(_) : null;
	}
	function y(C, _) {
		const T = x(C);
		return T ? T.getNext(_) : null;
	}
	function g(C) {
		const _ = x(C);
		return _ ? _.getParent() : null;
	}
	function R(C) {
		const _ = x(C);
		return _ ? _.getChild() : null;
	}
	const P = {
		treeNodes: c,
		treeNodeMap: o,
		levelTreeNodeMap: r,
		maxLevel: Math.max(...r.keys()),
		getChildren: v,
		getFlattenedNodes(C) {
			return Xa(c, C);
		},
		getNode: w,
		getPrev: $,
		getNext: y,
		getParent: g,
		getChild: R,
		getFirstAvailableNode() {
			return ja(c);
		},
		getPath(C, _ = {}) {
			return Da(C, _, P);
		},
		getCheckedKeys(C, _ = {}) {
			const { cascade: T = !0, leafOnly: p = !1, checkStrategy: u = 'all', allowNotLoaded: S = !1 } = _;
			return Nt(
				{
					checkedKeys: Bt(C),
					indeterminateKeys: Rt(C),
					cascade: T,
					leafOnly: p,
					checkStrategy: u,
					allowNotLoaded: S,
				},
				P,
			);
		},
		check(C, _, T = {}) {
			const { cascade: p = !0, leafOnly: u = !1, checkStrategy: S = 'all', allowNotLoaded: d = !1 } = T;
			return Nt(
				{
					checkedKeys: Bt(_),
					indeterminateKeys: Rt(_),
					keysToCheck: C == null ? [] : Qn(C),
					cascade: p,
					leafOnly: u,
					checkStrategy: S,
					allowNotLoaded: d,
				},
				P,
			);
		},
		uncheck(C, _, T = {}) {
			const { cascade: p = !0, leafOnly: u = !1, checkStrategy: S = 'all', allowNotLoaded: d = !1 } = T;
			return Nt(
				{
					checkedKeys: Bt(_),
					indeterminateKeys: Rt(_),
					keysToUncheck: C == null ? [] : Qn(C),
					cascade: p,
					leafOnly: u,
					checkStrategy: S,
					allowNotLoaded: d,
				},
				P,
			);
		},
		getNonLeafKeys(C = {}) {
			return _a(c, C);
		},
	};
	return P;
}
const qa = H(
		'scrollbar',
		`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,
		[
			B('>', [
				H(
					'scrollbar-container',
					`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,
					[
						B(
							'&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb',
							`
 width: 0;
 height: 0;
 display: none;
 `,
						),
						B('>', [
							H(
								'scrollbar-content',
								`
 box-sizing: border-box;
 min-width: 100%;
 `,
							),
						]),
					],
				),
			]),
			B('>, +', [
				H(
					'scrollbar-rail',
					`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,
					[
						W(
							'horizontal',
							`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,
							[
								B('>', [
									A(
										'scrollbar',
										`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `,
									),
								]),
							],
						),
						W(
							'vertical',
							`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,
							[
								B('>', [
									A(
										'scrollbar',
										`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `,
									),
								]),
							],
						),
						W('disabled', [B('>', [A('scrollbar', { pointerEvents: 'none' })])]),
						B('>', [
							A(
								'scrollbar',
								`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,
								[
									ei(),
									B('&:hover', {
										backgroundColor: 'var(--n-scrollbar-color-hover)',
									}),
								],
							),
						]),
					],
				),
			]),
		],
	),
	Za = Object.assign(Object.assign({}, de.props), {
		size: { type: Number, default: 5 },
		duration: { type: Number, default: 0 },
		scrollable: { type: Boolean, default: !0 },
		xScrollable: Boolean,
		trigger: { type: String, default: 'hover' },
		useUnifiedContainer: Boolean,
		triggerDisplayManually: Boolean,
		container: Function,
		content: Function,
		containerClass: String,
		containerStyle: [String, Object],
		contentClass: String,
		contentStyle: [String, Object],
		horizontalRailStyle: [String, Object],
		verticalRailStyle: [String, Object],
		onScroll: Function,
		onWheel: Function,
		onResize: Function,
		internalOnUpdateScrollLeft: Function,
		internalHoistYRail: Boolean,
	}),
	Ja = V({
		name: 'Scrollbar',
		props: Za,
		inheritAttrs: !1,
		setup(e) {
			const { mergedClsPrefixRef: t, inlineThemeDisabled: n, mergedRtlRef: o } = Re(e),
				r = Yr('Scrollbar', o, t),
				i = K(null),
				l = K(null),
				s = K(null),
				a = K(null),
				f = K(null),
				v = K(null),
				h = K(null),
				c = K(null),
				w = K(null),
				x = K(null),
				$ = K(null),
				y = K(0),
				g = K(0),
				R = K(!1),
				P = K(!1);
			let C = !1,
				_ = !1,
				T,
				p,
				u = 0,
				S = 0,
				d = 0,
				M = 0;
			const I = zi(),
				L = O(() => {
					const { value: k } = c,
						{ value: N } = v,
						{ value: j } = x;
					return k === null || N === null || j === null ? 0 : Math.min(k, (j * k) / N + e.size * 1.5);
				}),
				z = O(() => `${L.value}px`),
				E = O(() => {
					const { value: k } = w,
						{ value: N } = h,
						{ value: j } = $;
					return k === null || N === null || j === null ? 0 : (j * k) / N + e.size * 1.5;
				}),
				b = O(() => `${E.value}px`),
				F = O(() => {
					const { value: k } = c,
						{ value: N } = y,
						{ value: j } = v,
						{ value: X } = x;
					if (k === null || j === null || X === null) return 0;
					{
						const ne = j - k;
						return ne ? (N / ne) * (X - L.value) : 0;
					}
				}),
				D = O(() => `${F.value}px`),
				U = O(() => {
					const { value: k } = w,
						{ value: N } = g,
						{ value: j } = h,
						{ value: X } = $;
					if (k === null || j === null || X === null) return 0;
					{
						const ne = j - k;
						return ne ? (N / ne) * (X - E.value) : 0;
					}
				}),
				te = O(() => `${U.value}px`),
				q = O(() => {
					const { value: k } = c,
						{ value: N } = v;
					return k !== null && N !== null && N > k;
				}),
				ie = O(() => {
					const { value: k } = w,
						{ value: N } = h;
					return k !== null && N !== null && N > k;
				}),
				Ge = O(() => {
					const { trigger: k } = e;
					return k === 'none' || R.value;
				}),
				Xe = O(() => {
					const { trigger: k } = e;
					return k === 'none' || P.value;
				}),
				me = O(() => {
					const { container: k } = e;
					return k ? k() : l.value;
				}),
				Ee = O(() => {
					const { content: k } = e;
					return k ? k() : s.value;
				}),
				G = Gi(() => {
					e.container || wn({ top: y.value, left: g.value });
				}),
				Ye = () => {
					G.isDeactivated || Oe();
				},
				Go = k => {
					if (G.isDeactivated) return;
					const { onResize: N } = e;
					N && N(k), Oe();
				},
				wn = (k, N) => {
					if (!e.scrollable) return;
					if (typeof k == 'number') {
						Ne(N ?? 0, k, 0, !1, 'auto');
						return;
					}
					const { left: j, top: X, index: ne, elSize: ce, position: Ce, behavior: Q, el: $e, debounce: qe = !0 } = k;
					(j !== void 0 || X !== void 0) && Ne(j ?? 0, X ?? 0, 0, !1, Q),
						$e !== void 0
							? Ne(0, $e.offsetTop, $e.offsetHeight, qe, Q)
							: ne !== void 0 && ce !== void 0
							? Ne(0, ne * ce, ce, qe, Q)
							: Ce === 'bottom'
							? Ne(0, Number.MAX_SAFE_INTEGER, 0, !1, Q)
							: Ce === 'top' && Ne(0, 0, 0, !1, Q);
				},
				Xo = (k, N) => {
					if (!e.scrollable) return;
					const { value: j } = me;
					j && (typeof k == 'object' ? j.scrollBy(k) : j.scrollBy(k, N || 0));
				};
			function Ne(k, N, j, X, ne) {
				const { value: ce } = me;
				if (ce) {
					if (X) {
						const { scrollTop: Ce, offsetHeight: Q } = ce;
						if (N > Ce) {
							N + j <= Ce + Q || ce.scrollTo({ left: k, top: N + j - Q, behavior: ne });
							return;
						}
					}
					ce.scrollTo({ left: k, top: N, behavior: ne });
				}
			}
			function Yo() {
				Qo(), er(), Oe();
			}
			function qo() {
				zt();
			}
			function zt() {
				Zo(), Jo();
			}
			function Zo() {
				p !== void 0 && window.clearTimeout(p),
					(p = window.setTimeout(() => {
						P.value = !1;
					}, e.duration));
			}
			function Jo() {
				T !== void 0 && window.clearTimeout(T),
					(T = window.setTimeout(() => {
						R.value = !1;
					}, e.duration));
			}
			function Qo() {
				T !== void 0 && window.clearTimeout(T), (R.value = !0);
			}
			function er() {
				p !== void 0 && window.clearTimeout(p), (P.value = !0);
			}
			function tr(k) {
				const { onScroll: N } = e;
				N && N(k), yn();
			}
			function yn() {
				const { value: k } = me;
				k && ((y.value = k.scrollTop), (g.value = k.scrollLeft * (r != null && r.value ? -1 : 1)));
			}
			function nr() {
				const { value: k } = Ee;
				k && ((v.value = k.offsetHeight), (h.value = k.offsetWidth));
				const { value: N } = me;
				N && ((c.value = N.offsetHeight), (w.value = N.offsetWidth));
				const { value: j } = f,
					{ value: X } = a;
				j && ($.value = j.offsetWidth), X && (x.value = X.offsetHeight);
			}
			function xn() {
				const { value: k } = me;
				k &&
					((y.value = k.scrollTop),
					(g.value = k.scrollLeft * (r != null && r.value ? -1 : 1)),
					(c.value = k.offsetHeight),
					(w.value = k.offsetWidth),
					(v.value = k.scrollHeight),
					(h.value = k.scrollWidth));
				const { value: N } = f,
					{ value: j } = a;
				N && ($.value = N.offsetWidth), j && (x.value = j.offsetHeight);
			}
			function Oe() {
				e.scrollable && (e.useUnifiedContainer ? xn() : (nr(), yn()));
			}
			function Sn(k) {
				var N;
				return !(!((N = i.value) === null || N === void 0) && N.contains(vt(k)));
			}
			function or(k) {
				k.preventDefault(),
					k.stopPropagation(),
					(_ = !0),
					re('mousemove', window, Cn, !0),
					re('mouseup', window, $n, !0),
					(S = g.value),
					(d = r != null && r.value ? window.innerWidth - k.clientX : k.clientX);
			}
			function Cn(k) {
				if (!_) return;
				T !== void 0 && window.clearTimeout(T), p !== void 0 && window.clearTimeout(p);
				const { value: N } = w,
					{ value: j } = h,
					{ value: X } = E;
				if (N === null || j === null) return;
				const ce = ((r != null && r.value ? window.innerWidth - k.clientX - d : k.clientX - d) * (j - N)) / (N - X),
					Ce = j - N;
				let Q = S + ce;
				(Q = Math.min(Ce, Q)), (Q = Math.max(Q, 0));
				const { value: $e } = me;
				if ($e) {
					$e.scrollLeft = Q * (r != null && r.value ? -1 : 1);
					const { internalOnUpdateScrollLeft: qe } = e;
					qe && qe(Q);
				}
			}
			function $n(k) {
				k.preventDefault(), k.stopPropagation(), J('mousemove', window, Cn, !0), J('mouseup', window, $n, !0), (_ = !1), Oe(), Sn(k) && zt();
			}
			function rr(k) {
				k.preventDefault(),
					k.stopPropagation(),
					(C = !0),
					re('mousemove', window, kt, !0),
					re('mouseup', window, _t, !0),
					(u = y.value),
					(M = k.clientY);
			}
			function kt(k) {
				if (!C) return;
				T !== void 0 && window.clearTimeout(T), p !== void 0 && window.clearTimeout(p);
				const { value: N } = c,
					{ value: j } = v,
					{ value: X } = L;
				if (N === null || j === null) return;
				const ce = ((k.clientY - M) * (j - N)) / (N - X),
					Ce = j - N;
				let Q = u + ce;
				(Q = Math.min(Ce, Q)), (Q = Math.max(Q, 0));
				const { value: $e } = me;
				$e && ($e.scrollTop = Q);
			}
			function _t(k) {
				k.preventDefault(), k.stopPropagation(), J('mousemove', window, kt, !0), J('mouseup', window, _t, !0), (C = !1), Oe(), Sn(k) && zt();
			}
			De(() => {
				const { value: k } = ie,
					{ value: N } = q,
					{ value: j } = t,
					{ value: X } = f,
					{ value: ne } = a;
				X && (k ? X.classList.remove(`${j}-scrollbar-rail--disabled`) : X.classList.add(`${j}-scrollbar-rail--disabled`)),
					ne && (N ? ne.classList.remove(`${j}-scrollbar-rail--disabled`) : ne.classList.add(`${j}-scrollbar-rail--disabled`));
			}),
				rt(() => {
					e.container || Oe();
				}),
				Ae(() => {
					T !== void 0 && window.clearTimeout(T),
						p !== void 0 && window.clearTimeout(p),
						J('mousemove', window, kt, !0),
						J('mouseup', window, _t, !0);
				});
			const ir = de('Scrollbar', '-scrollbar', qa, kr, e, t),
				zn = O(() => {
					const {
						common: { cubicBezierEaseInOut: k, scrollbarBorderRadius: N, scrollbarHeight: j, scrollbarWidth: X },
						self: { color: ne, colorHover: ce },
					} = ir.value;
					return {
						'--n-scrollbar-bezier': k,
						'--n-scrollbar-color': ne,
						'--n-scrollbar-color-hover': ce,
						'--n-scrollbar-border-radius': N,
						'--n-scrollbar-width': X,
						'--n-scrollbar-height': j,
					};
				}),
				He = n ? Ue('scrollbar', void 0, zn, e) : void 0;
			return Object.assign(
				Object.assign(
					{},
					{
						scrollTo: wn,
						scrollBy: Xo,
						sync: Oe,
						syncUnifiedContainer: xn,
						handleMouseEnterWrapper: Yo,
						handleMouseLeaveWrapper: qo,
					},
				),
				{
					mergedClsPrefix: t,
					rtlEnabled: r,
					containerScrollTop: y,
					wrapperRef: i,
					containerRef: l,
					contentRef: s,
					yRailRef: a,
					xRailRef: f,
					needYBar: q,
					needXBar: ie,
					yBarSizePx: z,
					xBarSizePx: b,
					yBarTopPx: D,
					xBarLeftPx: te,
					isShowXBar: Ge,
					isShowYBar: Xe,
					isIos: I,
					handleScroll: tr,
					handleContentResize: Ye,
					handleContainerResize: Go,
					handleYScrollMouseDown: rr,
					handleXScrollMouseDown: or,
					cssVars: n ? void 0 : zn,
					themeClass: He == null ? void 0 : He.themeClass,
					onRender: He == null ? void 0 : He.onRender,
				},
			);
		},
		render() {
			var e;
			const { $slots: t, mergedClsPrefix: n, triggerDisplayManually: o, rtlEnabled: r, internalHoistYRail: i } = this;
			if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
			const l = this.trigger === 'none',
				s = () =>
					m(
						'div',
						{
							ref: 'yRailRef',
							class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`],
							'data-scrollbar-rail': !0,
							style: this.verticalRailStyle,
							'aria-hidden': !0,
						},
						m(l ? Tn : ht, l ? null : { name: 'fade-in-transition' }, {
							default: () =>
								this.needYBar && this.isShowYBar && !this.isIos
									? m('div', {
											class: `${n}-scrollbar-rail__scrollbar`,
											style: { height: this.yBarSizePx, top: this.yBarTopPx },
											onMousedown: this.handleYScrollMouseDown,
									  })
									: null,
						}),
					),
				a = () => {
					var v, h;
					return (
						(v = this.onRender) === null || v === void 0 || v.call(this),
						m(
							'div',
							yt(this.$attrs, {
								role: 'none',
								ref: 'wrapperRef',
								class: [`${n}-scrollbar`, this.themeClass, r && `${n}-scrollbar--rtl`],
								style: this.cssVars,
								onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
								onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper,
							}),
							[
								this.container
									? (h = t.default) === null || h === void 0
										? void 0
										: h.call(t)
									: m(
											'div',
											{
												role: 'none',
												ref: 'containerRef',
												class: [`${n}-scrollbar-container`, this.containerClass],
												style: this.containerStyle,
												onScroll: this.handleScroll,
												onWheel: this.onWheel,
											},
											m(
												Ut,
												{ onResize: this.handleContentResize },
												{
													default: () =>
														m(
															'div',
															{
																ref: 'contentRef',
																role: 'none',
																style: [
																	{
																		width: this.xScrollable ? 'fit-content' : null,
																	},
																	this.contentStyle,
																],
																class: [`${n}-scrollbar-content`, this.contentClass],
															},
															t,
														),
												},
											),
									  ),
								i ? null : s(),
								this.xScrollable &&
									m(
										'div',
										{
											ref: 'xRailRef',
											class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`],
											style: this.horizontalRailStyle,
											'data-scrollbar-rail': !0,
											'aria-hidden': !0,
										},
										m(l ? Tn : ht, l ? null : { name: 'fade-in-transition' }, {
											default: () =>
												this.needXBar && this.isShowXBar && !this.isIos
													? m('div', {
															class: `${n}-scrollbar-rail__scrollbar`,
															style: {
																width: this.xBarSizePx,
																right: r ? this.xBarLeftPx : void 0,
																left: r ? void 0 : this.xBarLeftPx,
															},
															onMousedown: this.handleXScrollMouseDown,
													  })
													: null,
										}),
									),
							],
						)
					);
				},
				f = this.container ? a() : m(Ut, { onResize: this.handleContainerResize }, { default: a });
			return i ? m(We, null, f, s()) : f;
		},
	}),
	Oo = Ja,
	{ cubicBezierEaseIn: to, cubicBezierEaseOut: no } = so;
function Qa({
	transformOrigin: e = 'inherit',
	duration: t = '.2s',
	enterScale: n = '.9',
	originalTransform: o = '',
	originalTransition: r = '',
} = {}) {
	return [
		B('&.fade-in-scale-up-transition-leave-active', {
			transformOrigin: e,
			transition: `opacity ${t} ${to}, transform ${t} ${to} ${r && ',' + r}`,
		}),
		B('&.fade-in-scale-up-transition-enter-active', {
			transformOrigin: e,
			transition: `opacity ${t} ${no}, transform ${t} ${no} ${r && ',' + r}`,
		}),
		B('&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to', { opacity: 0, transform: `${o} scale(${n})` }),
		B('&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to', { opacity: 1, transform: `${o} scale(1)` }),
	];
}
const Ht = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
	oe = 'var(--n-arrow-height) * 1.414',
	es = B([
		H(
			'popover',
			`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,
			[
				B('>', [
					H(
						'scrollbar',
						`
 height: inherit;
 max-height: inherit;
 `,
					),
				]),
				we(
					'raw',
					`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,
					[we('scrollable', [we('show-header-or-footer', 'padding: var(--n-padding);')])],
				),
				A(
					'header',
					`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `,
				),
				A(
					'footer',
					`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `,
				),
				W('scrollable, show-header-or-footer', [
					A(
						'content',
						`
 padding: var(--n-padding);
 `,
					),
				]),
			],
		),
		H(
			'popover-shared',
			`
 transform-origin: inherit;
 `,
			[
				H(
					'popover-arrow-wrapper',
					`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,
					[
						H(
							'popover-arrow',
							`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${oe});
 height: calc(${oe});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `,
						),
					],
				),
				B(
					'&.popover-transition-enter-from, &.popover-transition-leave-to',
					`
 opacity: 0;
 transform: scale(.85);
 `,
				),
				B(
					'&.popover-transition-enter-to, &.popover-transition-leave-from',
					`
 transform: scale(1);
 opacity: 1;
 `,
				),
				B(
					'&.popover-transition-enter-active',
					`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `,
				),
				B(
					'&.popover-transition-leave-active',
					`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `,
				),
			],
		),
		ue(
			'top-start',
			`
 top: calc(${oe} / -2);
 left: calc(${_e('top-start')} - var(--v-offset-left));
 `,
		),
		ue(
			'top',
			`
 top: calc(${oe} / -2);
 transform: translateX(calc(${oe} / -2)) rotate(45deg);
 left: 50%;
 `,
		),
		ue(
			'top-end',
			`
 top: calc(${oe} / -2);
 right: calc(${_e('top-end')} + var(--v-offset-left));
 `,
		),
		ue(
			'bottom-start',
			`
 bottom: calc(${oe} / -2);
 left: calc(${_e('bottom-start')} - var(--v-offset-left));
 `,
		),
		ue(
			'bottom',
			`
 bottom: calc(${oe} / -2);
 transform: translateX(calc(${oe} / -2)) rotate(45deg);
 left: 50%;
 `,
		),
		ue(
			'bottom-end',
			`
 bottom: calc(${oe} / -2);
 right: calc(${_e('bottom-end')} + var(--v-offset-left));
 `,
		),
		ue(
			'left-start',
			`
 left: calc(${oe} / -2);
 top: calc(${_e('left-start')} - var(--v-offset-top));
 `,
		),
		ue(
			'left',
			`
 left: calc(${oe} / -2);
 transform: translateY(calc(${oe} / -2)) rotate(45deg);
 top: 50%;
 `,
		),
		ue(
			'left-end',
			`
 left: calc(${oe} / -2);
 bottom: calc(${_e('left-end')} + var(--v-offset-top));
 `,
		),
		ue(
			'right-start',
			`
 right: calc(${oe} / -2);
 top: calc(${_e('right-start')} - var(--v-offset-top));
 `,
		),
		ue(
			'right',
			`
 right: calc(${oe} / -2);
 transform: translateY(calc(${oe} / -2)) rotate(45deg);
 top: 50%;
 `,
		),
		ue(
			'right-end',
			`
 right: calc(${oe} / -2);
 bottom: calc(${_e('right-end')} + var(--v-offset-top));
 `,
		),
		...$a(
			{
				top: ['right-start', 'left-start'],
				right: ['top-end', 'bottom-end'],
				bottom: ['right-end', 'left-end'],
				left: ['top-start', 'bottom-start'],
			},
			(e, t) => {
				const n = ['right', 'left'].includes(t),
					o = n ? 'width' : 'height';
				return e.map(r => {
					const i = r.split('-')[1] === 'end',
						s = `calc((${`var(--v-target-${o}, 0px)`} - ${oe}) / 2)`,
						a = _e(r);
					return B(`[v-placement="${r}"] >`, [
						H('popover-shared', [
							W('center-arrow', [H('popover-arrow', `${t}: calc(max(${s}, ${a}) ${i ? '+' : '-'} var(--v-offset-${n ? 'left' : 'top'}));`)]),
						]),
					]);
				});
			},
		),
	]);
function _e(e) {
	return ['top', 'bottom'].includes(e.split('-')[0]) ? 'var(--n-arrow-offset)' : 'var(--n-arrow-offset-vertical)';
}
function ue(e, t) {
	const n = e.split('-')[0],
		o = ['top', 'bottom'].includes(n) ? 'height: var(--n-space-arrow);' : 'width: var(--n-space-arrow);';
	return B(`[v-placement="${e}"] >`, [
		H(
			'popover-shared',
			`
 margin-${Ht[n]}: var(--n-space);
 `,
			[
				W(
					'show-arrow',
					`
 margin-${Ht[n]}: var(--n-space-arrow);
 `,
				),
				W(
					'overlap',
					`
 margin: 0;
 `,
				),
				_r(
					'popover-arrow-wrapper',
					`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Ht[n]}: auto;
 ${o}
 `,
					[H('popover-arrow', t)],
				),
			],
		),
	]);
}
const To = Object.assign(Object.assign({}, de.props), {
		to: je.propTo,
		show: Boolean,
		trigger: String,
		showArrow: Boolean,
		delay: Number,
		duration: Number,
		raw: Boolean,
		arrowPointToCenter: Boolean,
		arrowStyle: [String, Object],
		displayDirective: String,
		x: Number,
		y: Number,
		flip: Boolean,
		overlap: Boolean,
		placement: String,
		width: [Number, String],
		keepAliveOnHover: Boolean,
		scrollable: Boolean,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		footerStyle: [Object, String],
		internalDeactivateImmediately: Boolean,
		animated: Boolean,
		onClickoutside: Function,
		internalTrapFocus: Boolean,
		internalOnAfterLeave: Function,
		minWidth: Number,
		maxWidth: Number,
	}),
	Bo = ({ arrowStyle: e, clsPrefix: t }) =>
		m('div', { key: '__popover-arrow__', class: `${t}-popover-arrow-wrapper` }, m('div', { class: `${t}-popover-arrow`, style: e })),
	ts = V({
		name: 'PopoverBody',
		inheritAttrs: !1,
		props: To,
		setup(e, { slots: t, attrs: n }) {
			const { namespaceRef: o, mergedClsPrefixRef: r, inlineThemeDisabled: i } = Re(e),
				l = de('Popover', '-popover', es, Ir, e, r),
				s = K(null),
				a = Z('NPopover'),
				f = K(null),
				v = K(e.show),
				h = K(!1);
			De(() => {
				const { show: p } = e;
				p && !mi() && !e.internalDeactivateImmediately && (h.value = !0);
			});
			const c = O(() => {
					const { trigger: p, onClickoutside: u } = e,
						S = [],
						{
							positionManuallyRef: { value: d },
						} = a;
					return (
						d || (p === 'click' && !u && S.push([Rn, C, void 0, { capture: !0 }]), p === 'hover' && S.push([Ei, P])),
						u && S.push([Rn, C, void 0, { capture: !0 }]),
						(e.displayDirective === 'show' || (e.animated && h.value)) && S.push([Pr, e.show]),
						S
					);
				}),
				w = O(() => {
					const p = e.width === 'trigger' ? void 0 : It(e.width),
						u = [];
					p && u.push({ width: p });
					const { maxWidth: S, minWidth: d } = e;
					return S && u.push({ maxWidth: It(S) }), d && u.push({ maxWidth: It(d) }), i || u.push(x.value), u;
				}),
				x = O(() => {
					const {
						common: { cubicBezierEaseInOut: p, cubicBezierEaseIn: u, cubicBezierEaseOut: S },
						self: {
							space: d,
							spaceArrow: M,
							padding: I,
							fontSize: L,
							textColor: z,
							dividerColor: E,
							color: b,
							boxShadow: F,
							borderRadius: D,
							arrowHeight: U,
							arrowOffset: te,
							arrowOffsetVertical: q,
						},
					} = l.value;
					return {
						'--n-box-shadow': F,
						'--n-bezier': p,
						'--n-bezier-ease-in': u,
						'--n-bezier-ease-out': S,
						'--n-font-size': L,
						'--n-text-color': z,
						'--n-color': b,
						'--n-divider-color': E,
						'--n-border-radius': D,
						'--n-arrow-height': U,
						'--n-arrow-offset': te,
						'--n-arrow-offset-vertical': q,
						'--n-padding': I,
						'--n-space': d,
						'--n-space-arrow': M,
					};
				}),
				$ = i ? Ue('popover', void 0, x, e) : void 0;
			a.setBodyInstance({ syncPosition: y }),
				Ae(() => {
					a.setBodyInstance(null);
				}),
				fe(ee(e, 'show'), p => {
					e.animated || (p ? (v.value = !0) : (v.value = !1));
				});
			function y() {
				var p;
				(p = s.value) === null || p === void 0 || p.syncPosition();
			}
			function g(p) {
				e.trigger === 'hover' && e.keepAliveOnHover && e.show && a.handleMouseEnter(p);
			}
			function R(p) {
				e.trigger === 'hover' && e.keepAliveOnHover && a.handleMouseLeave(p);
			}
			function P(p) {
				e.trigger === 'hover' && !_().contains(vt(p)) && a.handleMouseMoveOutside(p);
			}
			function C(p) {
				((e.trigger === 'click' && !_().contains(vt(p))) || e.onClickoutside) && a.handleClickOutside(p);
			}
			function _() {
				return a.getTriggerElement();
			}
			ae(xt, f), ae(an, null), ae(ln, null);
			function T() {
				if (($ == null || $.onRender(), !(e.displayDirective === 'show' || e.show || (e.animated && h.value)))) return null;
				let u;
				const S = a.internalRenderBodyRef.value,
					{ value: d } = r;
				if (S)
					u = S(
						[
							`${d}-popover-shared`,
							$ == null ? void 0 : $.themeClass.value,
							e.overlap && `${d}-popover-shared--overlap`,
							e.showArrow && `${d}-popover-shared--show-arrow`,
							e.arrowPointToCenter && `${d}-popover-shared--center-arrow`,
						],
						f,
						w.value,
						g,
						R,
					);
				else {
					const { value: M } = a.extraClassRef,
						{ internalTrapFocus: I } = e,
						L = !tt(t.header) || !tt(t.footer),
						z = () => {
							var E;
							const b = L
									? m(
											We,
											null,
											be(t.header, U =>
												U
													? m(
															'div',
															{
																class: `${d}-popover__header`,
																style: e.headerStyle,
															},
															U,
													  )
													: null,
											),
											be(t.default, U =>
												U
													? m(
															'div',
															{
																class: `${d}-popover__content`,
																style: e.contentStyle,
															},
															t,
													  )
													: null,
											),
											be(t.footer, U =>
												U
													? m(
															'div',
															{
																class: `${d}-popover__footer`,
																style: e.footerStyle,
															},
															U,
													  )
													: null,
											),
									  )
									: e.scrollable
									? (E = t.default) === null || E === void 0
										? void 0
										: E.call(t)
									: m('div', { class: `${d}-popover__content`, style: e.contentStyle }, t),
								F = e.scrollable
									? m(
											Oo,
											{
												contentClass: L ? void 0 : `${d}-popover__content`,
												contentStyle: L ? void 0 : e.contentStyle,
											},
											{ default: () => b },
									  )
									: b,
								D = e.showArrow ? Bo({ arrowStyle: e.arrowStyle, clsPrefix: d }) : null;
							return [F, D];
						};
					u = m(
						'div',
						yt(
							{
								class: [
									`${d}-popover`,
									`${d}-popover-shared`,
									$ == null ? void 0 : $.themeClass.value,
									M.map(E => `${d}-${E}`),
									{
										[`${d}-popover--scrollable`]: e.scrollable,
										[`${d}-popover--show-header-or-footer`]: L,
										[`${d}-popover--raw`]: e.raw,
										[`${d}-popover-shared--overlap`]: e.overlap,
										[`${d}-popover-shared--show-arrow`]: e.showArrow,
										[`${d}-popover-shared--center-arrow`]: e.arrowPointToCenter,
									},
								],
								ref: f,
								style: w.value,
								onKeydown: a.handleKeydown,
								onMouseenter: g,
								onMouseleave: R,
							},
							n,
						),
						I ? m(Ui, { active: e.show, autoFocus: !0 }, { default: z }) : z(),
					);
				}
				return gt(u, c.value);
			}
			return {
				displayed: h,
				namespace: o,
				isMounted: a.isMountedRef,
				zIndex: a.zIndexRef,
				followerRef: s,
				adjustedTo: je(e),
				followerEnabled: v,
				renderContentNode: T,
			};
		},
		render() {
			return m(
				yo,
				{
					ref: 'followerRef',
					zIndex: this.zIndex,
					show: this.show,
					enabled: this.followerEnabled,
					to: this.adjustedTo,
					x: this.x,
					y: this.y,
					flip: this.flip,
					placement: this.placement,
					containerClass: this.namespace,
					overlap: this.overlap,
					width: this.width === 'trigger' ? 'target' : void 0,
					teleportDisabled: this.adjustedTo === je.tdkey,
				},
				{
					default: () =>
						this.animated
							? m(
									ht,
									{
										name: 'popover-transition',
										appear: this.isMounted,
										onEnter: () => {
											this.followerEnabled = !0;
										},
										onAfterLeave: () => {
											var e;
											(e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), (this.followerEnabled = !1), (this.displayed = !1);
										},
									},
									{ default: this.renderContentNode },
							  )
							: this.renderContentNode(),
				},
			);
		},
	}),
	ns = Object.keys(To),
	os = {
		focus: ['onFocus', 'onBlur'],
		click: ['onClick'],
		hover: ['onMouseenter', 'onMouseleave'],
		manual: [],
		nested: ['onFocus', 'onBlur', 'onMouseenter', 'onMouseleave', 'onClick'],
	};
function rs(e, t, n) {
	os[t].forEach(o => {
		e.props ? (e.props = Object.assign({}, e.props)) : (e.props = {});
		const r = e.props[o],
			i = n[o];
		r
			? (e.props[o] = (...l) => {
					r(...l), i(...l);
			  })
			: (e.props[o] = i);
	});
}
const Ct = {
		show: { type: Boolean, default: void 0 },
		defaultShow: Boolean,
		showArrow: { type: Boolean, default: !0 },
		trigger: { type: String, default: 'hover' },
		delay: { type: Number, default: 100 },
		duration: { type: Number, default: 100 },
		raw: Boolean,
		placement: { type: String, default: 'top' },
		x: Number,
		y: Number,
		arrowPointToCenter: Boolean,
		disabled: Boolean,
		getDisabled: Function,
		displayDirective: { type: String, default: 'if' },
		arrowStyle: [String, Object],
		flip: { type: Boolean, default: !0 },
		animated: { type: Boolean, default: !0 },
		width: { type: [Number, String], default: void 0 },
		overlap: Boolean,
		keepAliveOnHover: { type: Boolean, default: !0 },
		zIndex: Number,
		to: je.propTo,
		scrollable: Boolean,
		contentStyle: [Object, String],
		headerStyle: [Object, String],
		footerStyle: [Object, String],
		onClickoutside: Function,
		'onUpdate:show': [Function, Array],
		onUpdateShow: [Function, Array],
		internalDeactivateImmediately: Boolean,
		internalSyncTargetWithParent: Boolean,
		internalInheritedEventHandlers: { type: Array, default: () => [] },
		internalTrapFocus: Boolean,
		internalExtraClass: { type: Array, default: () => [] },
		onShow: [Function, Array],
		onHide: [Function, Array],
		arrow: { type: Boolean, default: void 0 },
		minWidth: Number,
		maxWidth: Number,
	},
	is = Object.assign(Object.assign(Object.assign({}, de.props), Ct), {
		internalOnAfterLeave: Function,
		internalRenderBody: Function,
	}),
	Ro = V({
		name: 'Popover',
		inheritAttrs: !1,
		props: is,
		__popover__: !0,
		setup(e) {
			const t = uo(),
				n = K(null),
				o = O(() => e.show),
				r = K(e.defaultShow),
				i = ot(o, r),
				l = he(() => (e.disabled ? !1 : i.value)),
				s = () => {
					if (e.disabled) return !0;
					const { getDisabled: z } = e;
					return !!(z != null && z());
				},
				a = () => (s() ? !1 : i.value),
				f = co(e, ['arrow', 'showArrow']),
				v = O(() => (e.overlap ? !1 : f.value));
			let h = null;
			const c = K(null),
				w = K(null),
				x = he(() => e.x !== void 0 && e.y !== void 0);
			function $(z) {
				const { 'onUpdate:show': E, onUpdateShow: b, onShow: F, onHide: D } = e;
				(r.value = z), E && le(E, z), b && le(b, z), z && F && le(F, !0), z && D && le(D, !1);
			}
			function y() {
				h && h.syncPosition();
			}
			function g() {
				const { value: z } = c;
				z && (window.clearTimeout(z), (c.value = null));
			}
			function R() {
				const { value: z } = w;
				z && (window.clearTimeout(z), (w.value = null));
			}
			function P() {
				const z = s();
				if (e.trigger === 'focus' && !z) {
					if (a()) return;
					$(!0);
				}
			}
			function C() {
				const z = s();
				if (e.trigger === 'focus' && !z) {
					if (!a()) return;
					$(!1);
				}
			}
			function _() {
				const z = s();
				if (e.trigger === 'hover' && !z) {
					if ((R(), c.value !== null || a())) return;
					const E = () => {
							$(!0), (c.value = null);
						},
						{ delay: b } = e;
					b === 0 ? E() : (c.value = window.setTimeout(E, b));
				}
			}
			function T() {
				const z = s();
				if (e.trigger === 'hover' && !z) {
					if ((g(), w.value !== null || !a())) return;
					const E = () => {
							$(!1), (w.value = null);
						},
						{ duration: b } = e;
					b === 0 ? E() : (w.value = window.setTimeout(E, b));
				}
			}
			function p() {
				T();
			}
			function u(z) {
				var E;
				a() && (e.trigger === 'click' && (g(), R(), $(!1)), (E = e.onClickoutside) === null || E === void 0 || E.call(e, z));
			}
			function S() {
				if (e.trigger === 'click' && !s()) {
					g(), R();
					const z = !a();
					$(z);
				}
			}
			function d(z) {
				e.internalTrapFocus && z.key === 'Escape' && (g(), R(), $(!1));
			}
			function M(z) {
				r.value = z;
			}
			function I() {
				var z;
				return (z = n.value) === null || z === void 0 ? void 0 : z.targetRef;
			}
			function L(z) {
				h = z;
			}
			return (
				ae('NPopover', {
					getTriggerElement: I,
					handleKeydown: d,
					handleMouseEnter: _,
					handleMouseLeave: T,
					handleClickOutside: u,
					handleMouseMoveOutside: p,
					setBodyInstance: L,
					positionManuallyRef: x,
					isMountedRef: t,
					zIndexRef: ee(e, 'zIndex'),
					extraClassRef: ee(e, 'internalExtraClass'),
					internalRenderBodyRef: ee(e, 'internalRenderBody'),
				}),
				De(() => {
					i.value && s() && $(!1);
				}),
				{
					binderInstRef: n,
					positionManually: x,
					mergedShowConsideringDisabledProp: l,
					uncontrolledShow: r,
					mergedShowArrow: v,
					getMergedShow: a,
					setShow: M,
					handleClick: S,
					handleMouseEnter: _,
					handleMouseLeave: T,
					handleFocus: P,
					handleBlur: C,
					syncPosition: y,
				}
			);
		},
		render() {
			var e;
			const { positionManually: t, $slots: n } = this;
			let o,
				r = !1;
			if (!t && (n.activator ? (o = On(n, 'activator')) : (o = On(n, 'trigger')), o)) {
				(o = Mr(o)), (o = o.type === Ar ? m('span', [o]) : o);
				const i = {
					onClick: this.handleClick,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur,
				};
				if (!((e = o.type) === null || e === void 0) && e.__popover__)
					(r = !0),
						o.props ||
							(o.props = {
								internalSyncTargetWithParent: !0,
								internalInheritedEventHandlers: [],
							}),
						(o.props.internalSyncTargetWithParent = !0),
						o.props.internalInheritedEventHandlers
							? (o.props.internalInheritedEventHandlers = [i, ...o.props.internalInheritedEventHandlers])
							: (o.props.internalInheritedEventHandlers = [i]);
				else {
					const { internalInheritedEventHandlers: l } = this,
						s = [i, ...l],
						a = {
							onBlur: f => {
								s.forEach(v => {
									v.onBlur(f);
								});
							},
							onFocus: f => {
								s.forEach(v => {
									v.onFocus(f);
								});
							},
							onClick: f => {
								s.forEach(v => {
									v.onClick(f);
								});
							},
							onMouseenter: f => {
								s.forEach(v => {
									v.onMouseenter(f);
								});
							},
							onMouseleave: f => {
								s.forEach(v => {
									v.onMouseleave(f);
								});
							},
						};
					rs(o, l ? 'nested' : t ? 'manual' : this.trigger, a);
				}
			}
			return m(
				go,
				{
					ref: 'binderInstRef',
					syncTarget: !r,
					syncTargetWithParent: this.internalSyncTargetWithParent,
				},
				{
					default: () => {
						this.mergedShowConsideringDisabledProp;
						const i = this.getMergedShow();
						return [
							this.internalTrapFocus && i
								? gt(m('div', { style: { position: 'fixed', inset: 0 } }), [[wo, { enabled: i, zIndex: this.zIndex }]])
								: null,
							t ? null : m(bo, null, { default: () => o }),
							m(
								ts,
								nt(
									this.$props,
									ns,
									Object.assign(Object.assign({}, this.$attrs), {
										showArrow: this.mergedShowArrow,
										show: i,
									}),
								),
								{
									default: () => {
										var l, s;
										return (s = (l = this.$slots).default) === null || s === void 0 ? void 0 : s.call(l);
									},
									header: () => {
										var l, s;
										return (s = (l = this.$slots).header) === null || s === void 0 ? void 0 : s.call(l);
									},
									footer: () => {
										var l, s;
										return (s = (l = this.$slots).footer) === null || s === void 0 ? void 0 : s.call(l);
									},
								},
							),
						];
					},
				},
			);
		},
	}),
	{ cubicBezierEaseInOut: ye, cubicBezierEaseOut: ls, cubicBezierEaseIn: as } = so;
function ss({
	overflow: e = 'hidden',
	duration: t = '.3s',
	originalTransition: n = '',
	leavingDelay: o = '0s',
	foldPadding: r = !1,
	enterToProps: i = void 0,
	leaveToProps: l = void 0,
	reverse: s = !1,
} = {}) {
	const a = s ? 'leave' : 'enter',
		f = s ? 'enter' : 'leave';
	return [
		B(
			`&.fade-in-height-expand-transition-${f}-from,
 &.fade-in-height-expand-transition-${a}-to`,
			Object.assign(Object.assign({}, i), { opacity: 1 }),
		),
		B(
			`&.fade-in-height-expand-transition-${f}-to,
 &.fade-in-height-expand-transition-${a}-from`,
			Object.assign(Object.assign({}, l), {
				opacity: 0,
				marginTop: '0 !important',
				marginBottom: '0 !important',
				paddingTop: r ? '0 !important' : void 0,
				paddingBottom: r ? '0 !important' : void 0,
			}),
		),
		B(
			`&.fade-in-height-expand-transition-${f}-active`,
			`
 overflow: ${e};
 transition:
 max-height ${t} ${ye} ${o},
 opacity ${t} ${ls} ${o},
 margin-top ${t} ${ye} ${o},
 margin-bottom ${t} ${ye} ${o},
 padding-top ${t} ${ye} ${o},
 padding-bottom ${t} ${ye} ${o}
 ${n ? ',' + n : ''}
 `,
		),
		B(
			`&.fade-in-height-expand-transition-${a}-active`,
			`
 overflow: ${e};
 transition:
 max-height ${t} ${ye},
 opacity ${t} ${as},
 margin-top ${t} ${ye},
 margin-bottom ${t} ${ye},
 padding-top ${t} ${ye},
 padding-bottom ${t} ${ye}
 ${n ? ',' + n : ''}
 `,
		),
	];
}
const Lt = qr && 'loading' in document.createElement('img'),
	ds = (e = {}) => {
		var t;
		const { root: n = null } = e;
		return {
			hash: `${e.rootMargin || '0px 0px 0px 0px'}-${
				Array.isArray(e.threshold) ? e.threshold.join(',') : (t = e.threshold) !== null && t !== void 0 ? t : '0'
			}`,
			options: Object.assign(Object.assign({}, e), {
				root: (typeof n == 'string' ? document.querySelector(n) : n) || document.documentElement,
			}),
		};
	},
	Ft = new WeakMap(),
	Kt = new WeakMap(),
	Dt = new WeakMap(),
	cs = (e, t, n) => {
		if (!e) return () => {};
		const o = ds(t),
			{ root: r } = o.options;
		let i;
		const l = Ft.get(r);
		l ? (i = l) : ((i = new Map()), Ft.set(r, i));
		let s, a;
		i.has(o.hash)
			? ((a = i.get(o.hash)), a[1].has(e) || ((s = a[0]), a[1].add(e), s.observe(e)))
			: ((s = new IntersectionObserver(h => {
					h.forEach(c => {
						if (c.isIntersecting) {
							const w = Kt.get(c.target),
								x = Dt.get(c.target);
							w && w(), x && (x.value = !0);
						}
					});
			  }, o.options)),
			  s.observe(e),
			  (a = [s, new Set([e])]),
			  i.set(o.hash, a));
		let f = !1;
		const v = () => {
			f ||
				(Kt.delete(e),
				Dt.delete(e),
				(f = !0),
				a[1].has(e) && (a[0].unobserve(e), a[1].delete(e)),
				a[1].size <= 0 && i.delete(o.hash),
				i.size || Ft.delete(r));
		};
		return Kt.set(e, v), Dt.set(e, n), v;
	},
	us = pe('n-avatar-group'),
	fs = H(
		'avatar',
		`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,
		[
			Er(B('&', '--n-merged-color: var(--n-color-modal);')),
			Or(B('&', '--n-merged-color: var(--n-color-popover);')),
			B(
				'img',
				`
 width: 100%;
 height: 100%;
 `,
			),
			A(
				'text',
				`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `,
			),
			H(
				'icon',
				`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `,
			),
			A('text', 'line-height: 1.25'),
		],
	),
	hs = Object.assign(Object.assign({}, de.props), {
		size: [String, Number],
		src: String,
		circle: { type: Boolean, default: void 0 },
		objectFit: String,
		round: { type: Boolean, default: void 0 },
		bordered: { type: Boolean, default: void 0 },
		onError: Function,
		fallbackSrc: String,
		intersectionObserverOptions: Object,
		lazy: Boolean,
		onLoad: Function,
		renderPlaceholder: Function,
		renderFallback: Function,
		imgProps: Object,
		color: String,
	}),
	vs = V({
		name: 'Avatar',
		props: hs,
		setup(e) {
			const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = Re(e),
				o = K(!1);
			let r = null;
			const i = K(null),
				l = K(null),
				s = () => {
					const { value: P } = i;
					if (P && (r === null || r !== P.innerHTML)) {
						r = P.innerHTML;
						const { value: C } = l;
						if (C) {
							const { offsetWidth: _, offsetHeight: T } = C,
								{ offsetWidth: p, offsetHeight: u } = P,
								S = 0.9,
								d = Math.min((_ / p) * S, (T / u) * S, 1);
							P.style.transform = `translateX(-50%) translateY(-50%) scale(${d})`;
						}
					}
				},
				a = Z(us, null),
				f = O(() => {
					const { size: P } = e;
					if (P) return P;
					const { size: C } = a || {};
					return C || 'medium';
				}),
				v = de('Avatar', '-avatar', fs, Tr, e, t),
				h = Z(ti, null),
				c = O(() => {
					if (a) return !0;
					const { round: P, circle: C } = e;
					return P !== void 0 || C !== void 0 ? P || C : h ? h.roundRef.value : !1;
				}),
				w = O(() => (a ? !0 : e.bordered || !1)),
				x = P => {
					var C;
					if (!g.value) return;
					o.value = !0;
					const { onError: _, imgProps: T } = e;
					(C = T == null ? void 0 : T.onError) === null || C === void 0 || C.call(T, P), _ && _(P);
				};
			fe(
				() => e.src,
				() => (o.value = !1),
			);
			const $ = O(() => {
					const P = f.value,
						C = c.value,
						_ = w.value,
						{ color: T } = e,
						{
							self: { borderRadius: p, fontSize: u, color: S, border: d, colorModal: M, colorPopover: I },
							common: { cubicBezierEaseInOut: L },
						} = v.value;
					let z;
					return (
						typeof P == 'number' ? (z = `${P}px`) : (z = v.value.self[se('height', P)]),
						{
							'--n-font-size': u,
							'--n-border': _ ? d : 'none',
							'--n-border-radius': C ? '50%' : p,
							'--n-color': T || S,
							'--n-color-modal': T || M,
							'--n-color-popover': T || I,
							'--n-bezier': L,
							'--n-merged-size': `var(--n-avatar-size-override, ${z})`,
						}
					);
				}),
				y = n
					? Ue(
							'avatar',
							O(() => {
								const P = f.value,
									C = c.value,
									_ = w.value,
									{ color: T } = e;
								let p = '';
								return P && (typeof P == 'number' ? (p += `a${P}`) : (p += P[0])), C && (p += 'b'), _ && (p += 'c'), T && (p += ni(T)), p;
							}),
							$,
							e,
					  )
					: void 0,
				g = K(!e.lazy);
			rt(() => {
				if (Lt) return;
				let P;
				const C = De(() => {
					P == null || P(), (P = void 0), e.lazy && (P = cs(l.value, e.intersectionObserverOptions, g));
				});
				Ae(() => {
					C(), P == null || P();
				});
			});
			const R = K(!e.lazy);
			return {
				textRef: i,
				selfRef: l,
				mergedRoundRef: c,
				mergedClsPrefix: t,
				fitTextTransform: s,
				cssVars: n ? void 0 : $,
				themeClass: y == null ? void 0 : y.themeClass,
				onRender: y == null ? void 0 : y.onRender,
				hasLoadError: o,
				handleError: x,
				shouldStartLoading: g,
				loaded: R,
				mergedOnLoad: P => {
					var C;
					const { onLoad: _, imgProps: T } = e;
					_ == null || _(P), (C = T == null ? void 0 : T.onLoad) === null || C === void 0 || C.call(T, P), (R.value = !0);
				},
			};
		},
		render() {
			var e, t;
			const {
				$slots: n,
				src: o,
				mergedClsPrefix: r,
				lazy: i,
				onRender: l,
				mergedOnLoad: s,
				shouldStartLoading: a,
				loaded: f,
				hasLoadError: v,
			} = this;
			l == null || l();
			let h;
			const c =
				!f &&
				!v &&
				(this.renderPlaceholder ? this.renderPlaceholder() : (t = (e = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(e));
			return (
				this.hasLoadError
					? (h = this.renderFallback
							? this.renderFallback()
							: Zr(n.fallback, () => [
									m('img', {
										src: this.fallbackSrc,
										style: { objectFit: this.objectFit },
									}),
							  ]))
					: (h = be(n.default, w => {
							if (w)
								return m(
									Ut,
									{ onResize: this.fitTextTransform },
									{
										default: () => m('span', { ref: 'textRef', class: `${r}-avatar__text` }, w),
									},
								);
							if (o) {
								const { imgProps: x } = this;
								return m(
									'img',
									Object.assign(Object.assign({}, x), {
										loading: Lt && !this.intersectionObserverOptions && i ? 'lazy' : 'eager',
										src: Lt || a || f ? o : void 0,
										onLoad: s,
										'data-image-src': o,
										onError: this.handleError,
										style: [
											x == null ? void 0 : x.style,
											{ objectFit: this.objectFit },
											c
												? {
														height: '0',
														width: '0',
														visibility: 'hidden',
														position: 'absolute',
												  }
												: '',
										],
									}),
								);
							}
					  })),
				m(
					'span',
					{
						ref: 'selfRef',
						class: [`${r}-avatar`, this.themeClass],
						style: this.cssVars,
					},
					h,
					i && c,
				)
			);
		},
	}),
	ps = Object.assign(Object.assign({}, Ct), de.props),
	ms = V({
		name: 'Tooltip',
		props: ps,
		__popover__: !0,
		setup(e) {
			const { mergedClsPrefixRef: t } = Re(e),
				n = de('Tooltip', '-tooltip', void 0, Br, e, t),
				o = K(null);
			return Object.assign(
				Object.assign(
					{},
					{
						syncPosition() {
							o.value.syncPosition();
						},
						setShow(i) {
							o.value.setShow(i);
						},
					},
				),
				{
					popoverRef: o,
					mergedTheme: n,
					popoverThemeOverrides: O(() => n.value.self),
				},
			);
		},
		render() {
			const { mergedTheme: e, internalExtraClass: t } = this;
			return m(
				Ro,
				Object.assign(Object.assign({}, this.$props), {
					theme: e.peers.Popover,
					themeOverrides: e.peerOverrides.Popover,
					builtinThemeOverrides: this.popoverThemeOverrides,
					internalExtraClass: t.concat('tooltip'),
					ref: 'popoverRef',
				}),
				this.$slots,
			);
		},
	}),
	No = V({
		name: 'DropdownDivider',
		props: { clsPrefix: { type: String, required: !0 } },
		render() {
			return m('div', { class: `${this.clsPrefix}-dropdown-divider` });
		},
	}),
	hn = pe('n-dropdown-menu'),
	$t = pe('n-dropdown'),
	oo = pe('n-dropdown-option');
function en(e, t) {
	return e.type === 'submenu' || (e.type === void 0 && e[t] !== void 0);
}
function gs(e) {
	return e.type === 'group';
}
function Ho(e) {
	return e.type === 'divider';
}
function bs(e) {
	return e.type === 'render';
}
const Lo = V({
		name: 'DropdownOption',
		props: {
			clsPrefix: { type: String, required: !0 },
			tmNode: { type: Object, required: !0 },
			parentKey: { type: [String, Number], default: null },
			placement: { type: String, default: 'right-start' },
			props: Object,
			scrollable: Boolean,
		},
		setup(e) {
			const t = Z($t),
				{
					hoverKeyRef: n,
					keyboardKeyRef: o,
					lastToggledSubmenuKeyRef: r,
					pendingKeyPathRef: i,
					activeKeyPathRef: l,
					animatedRef: s,
					mergedShowRef: a,
					renderLabelRef: f,
					renderIconRef: v,
					labelFieldRef: h,
					childrenFieldRef: c,
					renderOptionRef: w,
					nodePropsRef: x,
					menuPropsRef: $,
				} = t,
				y = Z(oo, null),
				g = Z(hn),
				R = Z(xt),
				P = O(() => e.tmNode.rawNode),
				C = O(() => {
					const { value: F } = c;
					return en(e.tmNode.rawNode, F);
				}),
				_ = O(() => {
					const { disabled: F } = e.tmNode;
					return F;
				}),
				T = O(() => {
					if (!C.value) return !1;
					const { key: F, disabled: D } = e.tmNode;
					if (D) return !1;
					const { value: U } = n,
						{ value: te } = o,
						{ value: q } = r,
						{ value: ie } = i;
					return U !== null ? ie.includes(F) : te !== null ? ie.includes(F) && ie[ie.length - 1] !== F : q !== null ? ie.includes(F) : !1;
				}),
				p = O(() => o.value === null && !s.value),
				u = gi(T, 300, p),
				S = O(() => !!(y != null && y.enteringSubmenuRef.value)),
				d = K(!1);
			ae(oo, { enteringSubmenuRef: d });
			function M() {
				d.value = !0;
			}
			function I() {
				d.value = !1;
			}
			function L() {
				const { parentKey: F, tmNode: D } = e;
				D.disabled || (a.value && ((r.value = F), (o.value = null), (n.value = D.key)));
			}
			function z() {
				const { tmNode: F } = e;
				F.disabled || (a.value && n.value !== F.key && L());
			}
			function E(F) {
				if (e.tmNode.disabled || !a.value) return;
				const { relatedTarget: D } = F;
				D && !En({ target: D }, 'dropdownOption') && !En({ target: D }, 'scrollbarRail') && (n.value = null);
			}
			function b() {
				const { value: F } = C,
					{ tmNode: D } = e;
				a.value && !F && !D.disabled && (t.doSelect(D.key, D.rawNode), t.doUpdateShow(!1));
			}
			return {
				labelField: h,
				renderLabel: f,
				renderIcon: v,
				siblingHasIcon: g.showIconRef,
				siblingHasSubmenu: g.hasSubmenuRef,
				menuProps: $,
				popoverBody: R,
				animated: s,
				mergedShowSubmenu: O(() => u.value && !S.value),
				rawNode: P,
				hasSubmenu: C,
				pending: he(() => {
					const { value: F } = i,
						{ key: D } = e.tmNode;
					return F.includes(D);
				}),
				childActive: he(() => {
					const { value: F } = l,
						{ key: D } = e.tmNode,
						U = F.findIndex(te => D === te);
					return U === -1 ? !1 : U < F.length - 1;
				}),
				active: he(() => {
					const { value: F } = l,
						{ key: D } = e.tmNode,
						U = F.findIndex(te => D === te);
					return U === -1 ? !1 : U === F.length - 1;
				}),
				mergedDisabled: _,
				renderOption: w,
				nodeProps: x,
				handleClick: b,
				handleMouseMove: z,
				handleMouseEnter: L,
				handleMouseLeave: E,
				handleSubmenuBeforeEnter: M,
				handleSubmenuAfterEnter: I,
			};
		},
		render() {
			var e, t;
			const {
				animated: n,
				rawNode: o,
				mergedShowSubmenu: r,
				clsPrefix: i,
				siblingHasIcon: l,
				siblingHasSubmenu: s,
				renderLabel: a,
				renderIcon: f,
				renderOption: v,
				nodeProps: h,
				props: c,
				scrollable: w,
			} = this;
			let x = null;
			if (r) {
				const R = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
				x = m(
					Fo,
					Object.assign({}, R, {
						clsPrefix: i,
						scrollable: this.scrollable,
						tmNodes: this.tmNode.children,
						parentKey: this.tmNode.key,
					}),
				);
			}
			const $ = {
					class: [
						`${i}-dropdown-option-body`,
						this.pending && `${i}-dropdown-option-body--pending`,
						this.active && `${i}-dropdown-option-body--active`,
						this.childActive && `${i}-dropdown-option-body--child-active`,
						this.mergedDisabled && `${i}-dropdown-option-body--disabled`,
					],
					onMousemove: this.handleMouseMove,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onClick: this.handleClick,
				},
				y = h == null ? void 0 : h(o),
				g = m(
					'div',
					Object.assign(
						{
							class: [`${i}-dropdown-option`, y == null ? void 0 : y.class],
							'data-dropdown-option': !0,
						},
						y,
					),
					m('div', yt($, c), [
						m(
							'div',
							{
								class: [`${i}-dropdown-option-body__prefix`, l && `${i}-dropdown-option-body__prefix--show-icon`],
							},
							[f ? f(o) : xe(o.icon)],
						),
						m(
							'div',
							{
								'data-dropdown-option': !0,
								class: `${i}-dropdown-option-body__label`,
							},
							a ? a(o) : xe((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title),
						),
						m(
							'div',
							{
								'data-dropdown-option': !0,
								class: [`${i}-dropdown-option-body__suffix`, s && `${i}-dropdown-option-body__suffix--has-submenu`],
							},
							this.hasSubmenu ? m(on, null, { default: () => m(za, null) }) : null,
						),
					]),
					this.hasSubmenu
						? m(go, null, {
								default: () => [
									m(bo, null, {
										default: () =>
											m(
												'div',
												{ class: `${i}-dropdown-offset-container` },
												m(
													yo,
													{
														show: this.mergedShowSubmenu,
														placement: this.placement,
														to: (w && this.popoverBody) || void 0,
														teleportDisabled: !w,
													},
													{
														default: () =>
															m(
																'div',
																{ class: `${i}-dropdown-menu-wrapper` },
																n
																	? m(
																			ht,
																			{
																				onBeforeEnter: this.handleSubmenuBeforeEnter,
																				onAfterEnter: this.handleSubmenuAfterEnter,
																				name: 'fade-in-scale-up-transition',
																				appear: !0,
																			},
																			{ default: () => x },
																	  )
																	: x,
															),
													},
												),
											),
									}),
								],
						  })
						: null,
				);
			return v ? v({ node: g, option: o }) : g;
		},
	}),
	ws = V({
		name: 'DropdownGroupHeader',
		props: {
			clsPrefix: { type: String, required: !0 },
			tmNode: { type: Object, required: !0 },
		},
		setup() {
			const { showIconRef: e, hasSubmenuRef: t } = Z(hn),
				{ renderLabelRef: n, labelFieldRef: o, nodePropsRef: r, renderOptionRef: i } = Z($t);
			return {
				labelField: o,
				showIcon: e,
				hasSubmenu: t,
				renderLabel: n,
				nodeProps: r,
				renderOption: i,
			};
		},
		render() {
			var e;
			const { clsPrefix: t, hasSubmenu: n, showIcon: o, nodeProps: r, renderLabel: i, renderOption: l } = this,
				{ rawNode: s } = this.tmNode,
				a = m(
					'div',
					Object.assign({ class: `${t}-dropdown-option` }, r == null ? void 0 : r(s)),
					m(
						'div',
						{
							class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`,
						},
						m(
							'div',
							{
								'data-dropdown-option': !0,
								class: [`${t}-dropdown-option-body__prefix`, o && `${t}-dropdown-option-body__prefix--show-icon`],
							},
							xe(s.icon),
						),
						m(
							'div',
							{
								class: `${t}-dropdown-option-body__label`,
								'data-dropdown-option': !0,
							},
							i ? i(s) : xe((e = s.title) !== null && e !== void 0 ? e : s[this.labelField]),
						),
						m('div', {
							class: [`${t}-dropdown-option-body__suffix`, n && `${t}-dropdown-option-body__suffix--has-submenu`],
							'data-dropdown-option': !0,
						}),
					),
				);
			return l ? l({ node: a, option: s }) : a;
		},
	}),
	ys = V({
		name: 'NDropdownGroup',
		props: {
			clsPrefix: { type: String, required: !0 },
			tmNode: { type: Object, required: !0 },
			parentKey: { type: [String, Number], default: null },
		},
		render() {
			const { tmNode: e, parentKey: t, clsPrefix: n } = this,
				{ children: o } = e;
			return m(
				We,
				null,
				m(ws, { clsPrefix: n, tmNode: e, key: e.key }),
				o == null
					? void 0
					: o.map(r => {
							const { rawNode: i } = r;
							return i.show === !1
								? null
								: Ho(i)
								? m(No, { clsPrefix: n, key: r.key })
								: r.isGroup
								? (jt('dropdown', '`group` node is not allowed to be put in `group` node.'), null)
								: m(Lo, { clsPrefix: n, tmNode: r, parentKey: t, key: r.key });
					  }),
			);
		},
	}),
	xs = V({
		name: 'DropdownRenderOption',
		props: { tmNode: { type: Object, required: !0 } },
		render() {
			const {
				rawNode: { render: e, props: t },
			} = this.tmNode;
			return m('div', t, [e == null ? void 0 : e()]);
		},
	}),
	Fo = V({
		name: 'DropdownMenu',
		props: {
			scrollable: Boolean,
			showArrow: Boolean,
			arrowStyle: [String, Object],
			clsPrefix: { type: String, required: !0 },
			tmNodes: { type: Array, default: () => [] },
			parentKey: { type: [String, Number], default: null },
		},
		setup(e) {
			const { renderIconRef: t, childrenFieldRef: n } = Z($t);
			ae(hn, {
				showIconRef: O(() => {
					const r = t.value;
					return e.tmNodes.some(i => {
						var l;
						if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({ rawNode: a }) => (r ? r(a) : a.icon));
						const { rawNode: s } = i;
						return r ? r(s) : s.icon;
					});
				}),
				hasSubmenuRef: O(() => {
					const { value: r } = n;
					return e.tmNodes.some(i => {
						var l;
						if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({ rawNode: a }) => en(a, r));
						const { rawNode: s } = i;
						return en(s, r);
					});
				}),
			});
			const o = K(null);
			return ae(ln, null), ae(an, null), ae(xt, o), { bodyRef: o };
		},
		render() {
			const { parentKey: e, clsPrefix: t, scrollable: n } = this,
				o = this.tmNodes.map(r => {
					const { rawNode: i } = r;
					return i.show === !1
						? null
						: bs(i)
						? m(xs, { tmNode: r, key: r.key })
						: Ho(i)
						? m(No, { clsPrefix: t, key: r.key })
						: gs(i)
						? m(ys, { clsPrefix: t, tmNode: r, parentKey: e, key: r.key })
						: m(Lo, {
								clsPrefix: t,
								tmNode: r,
								parentKey: e,
								key: r.key,
								props: i.props,
								scrollable: n,
						  });
				});
			return m(
				'div',
				{
					class: [`${t}-dropdown-menu`, n && `${t}-dropdown-menu--scrollable`],
					ref: 'bodyRef',
				},
				n ? m(Oo, { contentClass: `${t}-dropdown-menu__content` }, { default: () => o }) : o,
				this.showArrow ? Bo({ clsPrefix: t, arrowStyle: this.arrowStyle }) : null,
			);
		},
	}),
	Ss = H(
		'dropdown-menu',
		`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,
		[
			Qa(),
			H(
				'dropdown-option',
				`
 position: relative;
 `,
				[
					B(
						'a',
						`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,
						[
							B(
								'&::before',
								`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,
							),
						],
					),
					H(
						'dropdown-option-body',
						`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,
						[
							B(
								'&::before',
								`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,
							),
							we('disabled', [
								W(
									'pending',
									`
 color: var(--n-option-text-color-hover);
 `,
									[
										A(
											'prefix, suffix',
											`
 color: var(--n-option-text-color-hover);
 `,
										),
										B('&::before', 'background-color: var(--n-option-color-hover);'),
									],
								),
								W(
									'active',
									`
 color: var(--n-option-text-color-active);
 `,
									[
										A(
											'prefix, suffix',
											`
 color: var(--n-option-text-color-active);
 `,
										),
										B('&::before', 'background-color: var(--n-option-color-active);'),
									],
								),
								W(
									'child-active',
									`
 color: var(--n-option-text-color-child-active);
 `,
									[
										A(
											'prefix, suffix',
											`
 color: var(--n-option-text-color-child-active);
 `,
										),
									],
								),
							]),
							W(
								'disabled',
								`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `,
							),
							W(
								'group',
								`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,
								[
									A(
										'prefix',
										`
 width: calc(var(--n-option-prefix-width) / 2);
 `,
										[
											W(
												'show-icon',
												`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `,
											),
										],
									),
								],
							),
							A(
								'prefix',
								`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,
								[
									W(
										'show-icon',
										`
 width: var(--n-option-icon-prefix-width);
 `,
									),
									H(
										'icon',
										`
 font-size: var(--n-option-icon-size);
 `,
									),
								],
							),
							A(
								'label',
								`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `,
							),
							A(
								'suffix',
								`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,
								[
									W(
										'has-submenu',
										`
 width: var(--n-option-icon-suffix-width);
 `,
									),
									H(
										'icon',
										`
 font-size: var(--n-option-icon-size);
 `,
									),
								],
							),
							H('dropdown-menu', 'pointer-events: all;'),
						],
					),
					H(
						'dropdown-offset-container',
						`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `,
					),
				],
			),
			H(
				'dropdown-divider',
				`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `,
			),
			H(
				'dropdown-menu-wrapper',
				`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `,
			),
			B('>', [
				H(
					'scrollbar',
					`
 height: inherit;
 max-height: inherit;
 `,
				),
			]),
			we(
				'scrollable',
				`
 padding: var(--n-padding);
 `,
			),
			W('scrollable', [
				A(
					'content',
					`
 padding: var(--n-padding);
 `,
				),
			]),
		],
	),
	Cs = {
		animated: { type: Boolean, default: !0 },
		keyboard: { type: Boolean, default: !0 },
		size: { type: String, default: 'medium' },
		inverted: Boolean,
		placement: { type: String, default: 'bottom' },
		onSelect: [Function, Array],
		options: { type: Array, default: () => [] },
		menuProps: Function,
		showArrow: Boolean,
		renderLabel: Function,
		renderIcon: Function,
		renderOption: Function,
		nodeProps: Function,
		labelField: { type: String, default: 'label' },
		keyField: { type: String, default: 'key' },
		childrenField: { type: String, default: 'children' },
		value: [String, Number],
	},
	$s = Object.keys(Ct),
	zs = Object.assign(Object.assign(Object.assign({}, Ct), Cs), de.props),
	Ko = V({
		name: 'Dropdown',
		inheritAttrs: !1,
		props: zs,
		setup(e) {
			const t = K(!1),
				n = ot(ee(e, 'show'), t),
				o = O(() => {
					const { keyField: I, childrenField: L } = e;
					return Eo(e.options, {
						getKey(z) {
							return z[I];
						},
						getDisabled(z) {
							return z.disabled === !0;
						},
						getIgnored(z) {
							return z.type === 'divider' || z.type === 'render';
						},
						getChildren(z) {
							return z[L];
						},
					});
				}),
				r = O(() => o.value.treeNodes),
				i = K(null),
				l = K(null),
				s = K(null),
				a = O(() => {
					var I, L, z;
					return (z = (L = (I = i.value) !== null && I !== void 0 ? I : l.value) !== null && L !== void 0 ? L : s.value) !== null && z !== void 0
						? z
						: null;
				}),
				f = O(() => o.value.getPath(a.value).keyPath),
				v = O(() => o.value.getPath(e.value).keyPath),
				h = he(() => e.keyboard && n.value);
			ki(
				{
					keydown: {
						ArrowUp: { prevent: !0, handler: _ },
						ArrowRight: { prevent: !0, handler: C },
						ArrowDown: { prevent: !0, handler: T },
						ArrowLeft: { prevent: !0, handler: P },
						Enter: { prevent: !0, handler: p },
						Escape: R,
					},
				},
				h,
			);
			const { mergedClsPrefixRef: c, inlineThemeDisabled: w } = Re(e),
				x = de('Dropdown', '-dropdown', Ss, Rr, e, c);
			ae($t, {
				labelFieldRef: ee(e, 'labelField'),
				childrenFieldRef: ee(e, 'childrenField'),
				renderLabelRef: ee(e, 'renderLabel'),
				renderIconRef: ee(e, 'renderIcon'),
				hoverKeyRef: i,
				keyboardKeyRef: l,
				lastToggledSubmenuKeyRef: s,
				pendingKeyPathRef: f,
				activeKeyPathRef: v,
				animatedRef: ee(e, 'animated'),
				mergedShowRef: n,
				nodePropsRef: ee(e, 'nodeProps'),
				renderOptionRef: ee(e, 'renderOption'),
				menuPropsRef: ee(e, 'menuProps'),
				doSelect: $,
				doUpdateShow: y,
			}),
				fe(n, I => {
					!e.animated && !I && g();
				});
			function $(I, L) {
				const { onSelect: z } = e;
				z && le(z, I, L);
			}
			function y(I) {
				const { 'onUpdate:show': L, onUpdateShow: z } = e;
				L && le(L, I), z && le(z, I), (t.value = I);
			}
			function g() {
				(i.value = null), (l.value = null), (s.value = null);
			}
			function R() {
				y(!1);
			}
			function P() {
				S('left');
			}
			function C() {
				S('right');
			}
			function _() {
				S('up');
			}
			function T() {
				S('down');
			}
			function p() {
				const I = u();
				I != null && I.isLeaf && n.value && ($(I.key, I.rawNode), y(!1));
			}
			function u() {
				var I;
				const { value: L } = o,
					{ value: z } = a;
				return !L || z === null ? null : (I = L.getNode(z)) !== null && I !== void 0 ? I : null;
			}
			function S(I) {
				const { value: L } = a,
					{
						value: { getFirstAvailableNode: z },
					} = o;
				let E = null;
				if (L === null) {
					const b = z();
					b !== null && (E = b.key);
				} else {
					const b = u();
					if (b) {
						let F;
						switch (I) {
							case 'down':
								F = b.getNext();
								break;
							case 'up':
								F = b.getPrev();
								break;
							case 'right':
								F = b.getChild();
								break;
							case 'left':
								F = b.getParent();
								break;
						}
						F && (E = F.key);
					}
				}
				E !== null && ((i.value = null), (l.value = E));
			}
			const d = O(() => {
					const { size: I, inverted: L } = e,
						{
							common: { cubicBezierEaseInOut: z },
							self: E,
						} = x.value,
						{
							padding: b,
							dividerColor: F,
							borderRadius: D,
							optionOpacityDisabled: U,
							[se('optionIconSuffixWidth', I)]: te,
							[se('optionSuffixWidth', I)]: q,
							[se('optionIconPrefixWidth', I)]: ie,
							[se('optionPrefixWidth', I)]: Ge,
							[se('fontSize', I)]: Xe,
							[se('optionHeight', I)]: me,
							[se('optionIconSize', I)]: Ee,
						} = E,
						G = {
							'--n-bezier': z,
							'--n-font-size': Xe,
							'--n-padding': b,
							'--n-border-radius': D,
							'--n-option-height': me,
							'--n-option-prefix-width': Ge,
							'--n-option-icon-prefix-width': ie,
							'--n-option-suffix-width': q,
							'--n-option-icon-suffix-width': te,
							'--n-option-icon-size': Ee,
							'--n-divider-color': F,
							'--n-option-opacity-disabled': U,
						};
					return (
						L
							? ((G['--n-color'] = E.colorInverted),
							  (G['--n-option-color-hover'] = E.optionColorHoverInverted),
							  (G['--n-option-color-active'] = E.optionColorActiveInverted),
							  (G['--n-option-text-color'] = E.optionTextColorInverted),
							  (G['--n-option-text-color-hover'] = E.optionTextColorHoverInverted),
							  (G['--n-option-text-color-active'] = E.optionTextColorActiveInverted),
							  (G['--n-option-text-color-child-active'] = E.optionTextColorChildActiveInverted),
							  (G['--n-prefix-color'] = E.prefixColorInverted),
							  (G['--n-suffix-color'] = E.suffixColorInverted),
							  (G['--n-group-header-text-color'] = E.groupHeaderTextColorInverted))
							: ((G['--n-color'] = E.color),
							  (G['--n-option-color-hover'] = E.optionColorHover),
							  (G['--n-option-color-active'] = E.optionColorActive),
							  (G['--n-option-text-color'] = E.optionTextColor),
							  (G['--n-option-text-color-hover'] = E.optionTextColorHover),
							  (G['--n-option-text-color-active'] = E.optionTextColorActive),
							  (G['--n-option-text-color-child-active'] = E.optionTextColorChildActive),
							  (G['--n-prefix-color'] = E.prefixColor),
							  (G['--n-suffix-color'] = E.suffixColor),
							  (G['--n-group-header-text-color'] = E.groupHeaderTextColor)),
						G
					);
				}),
				M = w
					? Ue(
							'dropdown',
							O(() => `${e.size[0]}${e.inverted ? 'i' : ''}`),
							d,
							e,
					  )
					: void 0;
			return {
				mergedClsPrefix: c,
				mergedTheme: x,
				tmNodes: r,
				mergedShow: n,
				handleAfterLeave: () => {
					e.animated && g();
				},
				doUpdateShow: y,
				cssVars: w ? void 0 : d,
				themeClass: M == null ? void 0 : M.themeClass,
				onRender: M == null ? void 0 : M.onRender,
			};
		},
		render() {
			const e = (o, r, i, l, s) => {
					var a;
					const { mergedClsPrefix: f, menuProps: v } = this;
					(a = this.onRender) === null || a === void 0 || a.call(this);
					const h =
							(v == null
								? void 0
								: v(
										void 0,
										this.tmNodes.map(w => w.rawNode),
								  )) || {},
						c = {
							ref: pi(r),
							class: [o, `${f}-dropdown`, this.themeClass],
							clsPrefix: f,
							tmNodes: this.tmNodes,
							style: [i, this.cssVars],
							showArrow: this.showArrow,
							arrowStyle: this.arrowStyle,
							scrollable: this.scrollable,
							onMouseenter: l,
							onMouseleave: s,
						};
					return m(Fo, yt(this.$attrs, c, h));
				},
				{ mergedTheme: t } = this,
				n = {
					show: this.mergedShow,
					theme: t.peers.Popover,
					themeOverrides: t.peerOverrides.Popover,
					internalOnAfterLeave: this.handleAfterLeave,
					internalRenderBody: e,
					onUpdateShow: this.doUpdateShow,
					'onUpdate:show': void 0,
				};
			return m(Ro, Object.assign({}, nt(this.$props, $s), n), {
				trigger: () => {
					var o, r;
					return (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o);
				},
			});
		},
	}),
	ks = e => {
		const { primaryColor: t, opacityDisabled: n, borderRadius: o, textColor3: r } = e,
			i = 'rgba(0, 0, 0, .14)';
		return Object.assign(Object.assign({}, Hr), {
			iconColor: r,
			textColor: 'white',
			loadingColor: t,
			opacityDisabled: n,
			railColor: i,
			railColorActive: t,
			buttonBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
			buttonColor: '#FFF',
			railBorderRadiusSmall: o,
			railBorderRadiusMedium: o,
			railBorderRadiusLarge: o,
			buttonBorderRadiusSmall: o,
			buttonBorderRadiusMedium: o,
			buttonBorderRadiusLarge: o,
			boxShadowFocus: `0 0 0 2px ${Lr(t, { alpha: 0.2 })}`,
		});
	},
	_s = { name: 'Switch', common: Nr, self: ks },
	Is = _s,
	Ps = pe('n-layout-sider'),
	it = pe('n-menu'),
	vn = pe('n-submenu'),
	pn = pe('n-menu-item-group'),
	dt = 8;
function mn(e) {
	const t = Z(it),
		{ props: n, mergedCollapsedRef: o } = t,
		r = Z(vn, null),
		i = Z(pn, null),
		l = O(() => n.mode === 'horizontal'),
		s = O(() => (l.value ? n.dropdownPlacement : 'tmNodes' in e ? 'right-start' : 'right')),
		a = O(() => {
			var c;
			return Math.max((c = n.collapsedIconSize) !== null && c !== void 0 ? c : n.iconSize, n.iconSize);
		}),
		f = O(() => {
			var c;
			return !l.value && e.root && o.value && (c = n.collapsedIconSize) !== null && c !== void 0 ? c : n.iconSize;
		}),
		v = O(() => {
			if (l.value) return;
			const { collapsedWidth: c, indent: w, rootIndent: x } = n,
				{ root: $, isGroup: y } = e,
				g = x === void 0 ? w : x;
			if ($) return o.value ? c / 2 - a.value / 2 : g;
			if (i) return w / 2 + i.paddingLeftRef.value;
			if (r) return (y ? w / 2 : w) + r.paddingLeftRef.value;
		}),
		h = O(() => {
			const { collapsedWidth: c, indent: w, rootIndent: x } = n,
				{ value: $ } = a,
				{ root: y } = e;
			return l.value || !y || !o.value ? dt : (x === void 0 ? w : x) + $ + dt - (c + $) / 2;
		});
	return {
		dropdownPlacement: s,
		activeIconSize: f,
		maxIconSize: a,
		paddingLeft: v,
		iconMarginRight: h,
		NMenu: t,
		NSubmenu: r,
	};
}
const gn = {
		internalKey: { type: [String, Number], required: !0 },
		root: Boolean,
		isGroup: Boolean,
		level: { type: Number, required: !0 },
		title: [String, Function],
		extra: [String, Function],
	},
	Do = Object.assign(Object.assign({}, gn), {
		tmNode: { type: Object, required: !0 },
		tmNodes: { type: Array, required: !0 },
	}),
	Ms = V({
		name: 'MenuOptionGroup',
		props: Do,
		setup(e) {
			ae(vn, null);
			const t = mn(e);
			ae(pn, { paddingLeftRef: t.paddingLeft });
			const { mergedClsPrefixRef: n, props: o } = Z(it);
			return function () {
				const { value: r } = n,
					i = t.paddingLeft.value,
					{ nodeProps: l } = o,
					s = l == null ? void 0 : l(e.tmNode.rawNode);
				return m(
					'div',
					{ class: `${r}-menu-item-group`, role: 'group' },
					m(
						'div',
						Object.assign({}, s, {
							class: [`${r}-menu-item-group-title`, s == null ? void 0 : s.class],
							style: [(s == null ? void 0 : s.style) || '', i !== void 0 ? `padding-left: ${i}px;` : ''],
						}),
						xe(e.title),
						e.extra ? m(We, null, ' ', xe(e.extra)) : null,
					),
					m(
						'div',
						null,
						e.tmNodes.map(a => bn(a, o)),
					),
				);
			};
		},
	}),
	jo = V({
		name: 'MenuOptionContent',
		props: {
			collapsed: Boolean,
			disabled: Boolean,
			title: [String, Function],
			icon: Function,
			extra: [String, Function],
			showArrow: Boolean,
			childActive: Boolean,
			hover: Boolean,
			paddingLeft: Number,
			selected: Boolean,
			maxIconSize: { type: Number, required: !0 },
			activeIconSize: { type: Number, required: !0 },
			iconMarginRight: { type: Number, required: !0 },
			clsPrefix: { type: String, required: !0 },
			onClick: Function,
			tmNode: { type: Object, required: !0 },
		},
		setup(e) {
			const { props: t } = Z(it);
			return {
				menuProps: t,
				style: O(() => {
					const { paddingLeft: n } = e;
					return { paddingLeft: n && `${n}px` };
				}),
				iconStyle: O(() => {
					const { maxIconSize: n, activeIconSize: o, iconMarginRight: r } = e;
					return {
						width: `${n}px`,
						height: `${n}px`,
						fontSize: `${o}px`,
						marginRight: `${r}px`,
					};
				}),
			};
		},
		render() {
			const {
					clsPrefix: e,
					tmNode: t,
					menuProps: { renderIcon: n, renderLabel: o, renderExtra: r, expandIcon: i },
				} = this,
				l = n ? n(t.rawNode) : xe(this.icon);
			return m(
				'div',
				{
					onClick: s => {
						var a;
						(a = this.onClick) === null || a === void 0 || a.call(this, s);
					},
					role: 'none',
					class: [
						`${e}-menu-item-content`,
						{
							[`${e}-menu-item-content--selected`]: this.selected,
							[`${e}-menu-item-content--collapsed`]: this.collapsed,
							[`${e}-menu-item-content--child-active`]: this.childActive,
							[`${e}-menu-item-content--disabled`]: this.disabled,
							[`${e}-menu-item-content--hover`]: this.hover,
						},
					],
					style: this.style,
				},
				l &&
					m(
						'div',
						{
							class: `${e}-menu-item-content__icon`,
							style: this.iconStyle,
							role: 'none',
						},
						[l],
					),
				m(
					'div',
					{ class: `${e}-menu-item-content-header`, role: 'none' },
					o ? o(t.rawNode) : xe(this.title),
					this.extra || r ? m('span', { class: `${e}-menu-item-content-header__extra` }, ' ', r ? r(t.rawNode) : xe(this.extra)) : null,
				),
				this.showArrow
					? m(
							di,
							{
								ariaHidden: !0,
								class: `${e}-menu-item-content__arrow`,
								clsPrefix: e,
							},
							{ default: () => (i ? i(t.rawNode) : m(ka, null)) },
					  )
					: null,
			);
		},
	}),
	Wo = Object.assign(Object.assign({}, gn), {
		rawNodes: { type: Array, default: () => [] },
		tmNodes: { type: Array, default: () => [] },
		tmNode: { type: Object, required: !0 },
		disabled: { type: Boolean, default: !1 },
		icon: Function,
		onClick: Function,
	}),
	As = V({
		name: 'Submenu',
		props: Wo,
		setup(e) {
			const t = mn(e),
				{ NMenu: n, NSubmenu: o } = t,
				{ props: r, mergedCollapsedRef: i, mergedThemeRef: l } = n,
				s = O(() => {
					const { disabled: c } = e;
					return (o != null && o.mergedDisabledRef.value) || r.disabled ? !0 : c;
				}),
				a = K(!1);
			ae(vn, { paddingLeftRef: t.paddingLeft, mergedDisabledRef: s }), ae(pn, null);
			function f() {
				const { onClick: c } = e;
				c && c();
			}
			function v() {
				s.value || (i.value || n.toggleExpand(e.internalKey), f());
			}
			function h(c) {
				a.value = c;
			}
			return {
				menuProps: r,
				mergedTheme: l,
				doSelect: n.doSelect,
				inverted: n.invertedRef,
				isHorizontal: n.isHorizontalRef,
				mergedClsPrefix: n.mergedClsPrefixRef,
				maxIconSize: t.maxIconSize,
				activeIconSize: t.activeIconSize,
				iconMarginRight: t.iconMarginRight,
				dropdownPlacement: t.dropdownPlacement,
				dropdownShow: a,
				paddingLeft: t.paddingLeft,
				mergedDisabled: s,
				mergedValue: n.mergedValueRef,
				childActive: he(() => n.activePathRef.value.includes(e.internalKey)),
				collapsed: O(() => (r.mode === 'horizontal' ? !1 : i.value ? !0 : !n.mergedExpandedKeysRef.value.includes(e.internalKey))),
				dropdownEnabled: O(() => !s.value && (r.mode === 'horizontal' || i.value)),
				handlePopoverShowChange: h,
				handleClick: v,
			};
		},
		render() {
			var e;
			const {
					mergedClsPrefix: t,
					menuProps: { renderIcon: n, renderLabel: o },
				} = this,
				r = () => {
					const {
							isHorizontal: l,
							paddingLeft: s,
							collapsed: a,
							mergedDisabled: f,
							maxIconSize: v,
							activeIconSize: h,
							title: c,
							childActive: w,
							icon: x,
							handleClick: $,
							menuProps: { nodeProps: y },
							dropdownShow: g,
							iconMarginRight: R,
							tmNode: P,
							mergedClsPrefix: C,
						} = this,
						_ = y == null ? void 0 : y(P.rawNode);
					return m(
						'div',
						Object.assign({}, _, {
							class: [`${C}-menu-item`, _ == null ? void 0 : _.class],
							role: 'menuitem',
						}),
						m(jo, {
							tmNode: P,
							paddingLeft: s,
							collapsed: a,
							disabled: f,
							iconMarginRight: R,
							maxIconSize: v,
							activeIconSize: h,
							title: c,
							extra: this.extra,
							showArrow: !l,
							childActive: w,
							clsPrefix: C,
							icon: x,
							hover: g,
							onClick: $,
						}),
					);
				},
				i = () =>
					m(ui, null, {
						default: () => {
							const { tmNodes: l, collapsed: s } = this;
							return s
								? null
								: m(
										'div',
										{ class: `${t}-submenu-children`, role: 'menu' },
										l.map(a => bn(a, this.menuProps)),
								  );
						},
					});
			return this.root
				? m(
						Ko,
						Object.assign({ size: 'large', trigger: 'hover' }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, {
							themeOverrides: this.mergedTheme.peerOverrides.Dropdown,
							theme: this.mergedTheme.peers.Dropdown,
							builtinThemeOverrides: {
								fontSizeLarge: '14px',
								optionIconSizeLarge: '18px',
							},
							value: this.mergedValue,
							disabled: !this.dropdownEnabled,
							placement: this.dropdownPlacement,
							keyField: this.menuProps.keyField,
							labelField: this.menuProps.labelField,
							childrenField: this.menuProps.childrenField,
							onUpdateShow: this.handlePopoverShowChange,
							options: this.rawNodes,
							onSelect: this.doSelect,
							inverted: this.inverted,
							renderIcon: n,
							renderLabel: o,
						}),
						{
							default: () =>
								m(
									'div',
									{
										class: `${t}-submenu`,
										role: 'menuitem',
										'aria-expanded': !this.collapsed,
									},
									r(),
									this.isHorizontal ? null : i(),
								),
						},
				  )
				: m(
						'div',
						{
							class: `${t}-submenu`,
							role: 'menuitem',
							'aria-expanded': !this.collapsed,
						},
						r(),
						i(),
				  );
		},
	}),
	Vo = Object.assign(Object.assign({}, gn), {
		tmNode: { type: Object, required: !0 },
		disabled: Boolean,
		icon: Function,
		onClick: Function,
	}),
	Es = V({
		name: 'MenuOption',
		props: Vo,
		setup(e) {
			const t = mn(e),
				{ NSubmenu: n, NMenu: o } = t,
				{ props: r, mergedClsPrefixRef: i, mergedCollapsedRef: l } = o,
				s = n ? n.mergedDisabledRef : { value: !1 },
				a = O(() => s.value || e.disabled);
			function f(h) {
				const { onClick: c } = e;
				c && c(h);
			}
			function v(h) {
				a.value || (o.doSelect(e.internalKey, e.tmNode.rawNode), f(h));
			}
			return {
				mergedClsPrefix: i,
				dropdownPlacement: t.dropdownPlacement,
				paddingLeft: t.paddingLeft,
				iconMarginRight: t.iconMarginRight,
				maxIconSize: t.maxIconSize,
				activeIconSize: t.activeIconSize,
				mergedTheme: o.mergedThemeRef,
				menuProps: r,
				dropdownEnabled: he(() => e.root && l.value && r.mode !== 'horizontal' && !a.value),
				selected: he(() => o.mergedValueRef.value === e.internalKey),
				mergedDisabled: a,
				handleClick: v,
			};
		},
		render() {
			const {
					mergedClsPrefix: e,
					mergedTheme: t,
					tmNode: n,
					menuProps: { renderLabel: o, nodeProps: r },
				} = this,
				i = r == null ? void 0 : r(n.rawNode);
			return m(
				'div',
				Object.assign({}, i, {
					role: 'menuitem',
					class: [`${e}-menu-item`, i == null ? void 0 : i.class],
				}),
				m(
					ms,
					{
						theme: t.peers.Tooltip,
						themeOverrides: t.peerOverrides.Tooltip,
						trigger: 'hover',
						placement: this.dropdownPlacement,
						disabled: !this.dropdownEnabled || this.title === void 0,
						internalExtraClass: ['menu-tooltip'],
					},
					{
						default: () => (o ? o(n.rawNode) : xe(this.title)),
						trigger: () =>
							m(jo, {
								tmNode: n,
								clsPrefix: e,
								paddingLeft: this.paddingLeft,
								iconMarginRight: this.iconMarginRight,
								maxIconSize: this.maxIconSize,
								activeIconSize: this.activeIconSize,
								selected: this.selected,
								title: this.title,
								extra: this.extra,
								disabled: this.mergedDisabled,
								icon: this.icon,
								onClick: this.handleClick,
							}),
					},
				),
			);
		},
	}),
	Os = V({
		name: 'MenuDivider',
		setup() {
			const e = Z(it),
				{ mergedClsPrefixRef: t, isHorizontalRef: n } = e;
			return () => (n.value ? null : m('div', { class: `${t.value}-menu-divider` }));
		},
	}),
	Ts = rn(Do),
	Bs = rn(Vo),
	Rs = rn(Wo);
function Uo(e) {
	return e.type === 'divider' || e.type === 'render';
}
function Ns(e) {
	return e.type === 'divider';
}
function bn(e, t) {
	const { rawNode: n } = e,
		{ show: o } = n;
	if (o === !1) return null;
	if (Uo(n)) return Ns(n) ? m(Os, Object.assign({ key: e.key }, n.props)) : null;
	const { labelField: r } = t,
		{ key: i, level: l, isGroup: s } = e,
		a = Object.assign(Object.assign({}, n), {
			title: n.title || n[r],
			extra: n.titleExtra || n.extra,
			key: i,
			internalKey: i,
			level: l,
			root: l === 0,
			isGroup: s,
		});
	return e.children
		? e.isGroup
			? m(Ms, nt(a, Ts, { tmNode: e, tmNodes: e.children, key: i }))
			: m(
					As,
					nt(a, Rs, {
						key: i,
						rawNodes: n[t.childrenField],
						tmNodes: e.children,
						tmNode: e,
					}),
			  )
		: m(Es, nt(a, Bs, { key: i, tmNode: e }));
}
const ro = [
		B('&::before', 'background-color: var(--n-item-color-hover);'),
		A(
			'arrow',
			`
 color: var(--n-arrow-color-hover);
 `,
		),
		A(
			'icon',
			`
 color: var(--n-item-icon-color-hover);
 `,
		),
		H(
			'menu-item-content-header',
			`
 color: var(--n-item-text-color-hover);
 `,
			[
				B(
					'a',
					`
 color: var(--n-item-text-color-hover);
 `,
				),
				A(
					'extra',
					`
 color: var(--n-item-text-color-hover);
 `,
				),
			],
		),
	],
	io = [
		A(
			'icon',
			`
 color: var(--n-item-icon-color-hover-horizontal);
 `,
		),
		H(
			'menu-item-content-header',
			`
 color: var(--n-item-text-color-hover-horizontal);
 `,
			[
				B(
					'a',
					`
 color: var(--n-item-text-color-hover-horizontal);
 `,
				),
				A(
					'extra',
					`
 color: var(--n-item-text-color-hover-horizontal);
 `,
				),
			],
		),
	],
	Hs = B([
		H(
			'menu',
			`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,
			[
				W(
					'horizontal',
					`
 display: inline-flex;
 padding-bottom: 0;
 `,
					[
						H('submenu', 'margin: 0;'),
						H('menu-item', 'margin: 0;'),
						H(
							'menu-item-content',
							`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,
							[B('&::before', 'display: none;'), W('selected', 'border-bottom: 2px solid var(--n-border-color-horizontal)')],
						),
						H('menu-item-content', [
							W('selected', [
								A('icon', 'color: var(--n-item-icon-color-active-horizontal);'),
								H(
									'menu-item-content-header',
									`
 color: var(--n-item-text-color-active-horizontal);
 `,
									[B('a', 'color: var(--n-item-text-color-active-horizontal);'), A('extra', 'color: var(--n-item-text-color-active-horizontal);')],
								),
							]),
							W(
								'child-active',
								`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,
								[
									H(
										'menu-item-content-header',
										`
 color: var(--n-item-text-color-child-active-horizontal);
 `,
										[
											B(
												'a',
												`
 color: var(--n-item-text-color-child-active-horizontal);
 `,
											),
											A(
												'extra',
												`
 color: var(--n-item-text-color-child-active-horizontal);
 `,
											),
										],
									),
									A(
										'icon',
										`
 color: var(--n-item-icon-color-child-active-horizontal);
 `,
									),
								],
							),
							we('disabled', [
								we('selected, child-active', [B('&:focus-within', io)]),
								W('selected', [
									Te(null, [
										A('icon', 'color: var(--n-item-icon-color-active-hover-horizontal);'),
										H(
											'menu-item-content-header',
											`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,
											[
												B('a', 'color: var(--n-item-text-color-active-hover-horizontal);'),
												A('extra', 'color: var(--n-item-text-color-active-hover-horizontal);'),
											],
										),
									]),
								]),
								W('child-active', [
									Te(null, [
										A('icon', 'color: var(--n-item-icon-color-child-active-hover-horizontal);'),
										H(
											'menu-item-content-header',
											`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,
											[
												B('a', 'color: var(--n-item-text-color-child-active-hover-horizontal);'),
												A('extra', 'color: var(--n-item-text-color-child-active-hover-horizontal);'),
											],
										),
									]),
								]),
								Te('border-bottom: 2px solid var(--n-border-color-horizontal);', io),
							]),
							H('menu-item-content-header', [B('a', 'color: var(--n-item-text-color-horizontal);')]),
						]),
					],
				),
				W('collapsed', [
					H('menu-item-content', [
						W('selected', [
							B(
								'&::before',
								`
 background-color: var(--n-item-color-active-collapsed) !important;
 `,
							),
						]),
						H('menu-item-content-header', 'opacity: 0;'),
						A('arrow', 'opacity: 0;'),
						A('icon', 'color: var(--n-item-icon-color-collapsed);'),
					]),
				]),
				H(
					'menu-item',
					`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `,
				),
				H(
					'menu-item-content',
					`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
					[
						B('> *', 'z-index: 1;'),
						B(
							'&::before',
							`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,
						),
						W(
							'disabled',
							`
 opacity: .45;
 cursor: not-allowed;
 `,
						),
						W('collapsed', [A('arrow', 'transform: rotate(0);')]),
						W('selected', [
							B('&::before', 'background-color: var(--n-item-color-active);'),
							A('arrow', 'color: var(--n-arrow-color-active);'),
							A('icon', 'color: var(--n-item-icon-color-active);'),
							H(
								'menu-item-content-header',
								`
 color: var(--n-item-text-color-active);
 `,
								[B('a', 'color: var(--n-item-text-color-active);'), A('extra', 'color: var(--n-item-text-color-active);')],
							),
						]),
						W('child-active', [
							H(
								'menu-item-content-header',
								`
 color: var(--n-item-text-color-child-active);
 `,
								[
									B(
										'a',
										`
 color: var(--n-item-text-color-child-active);
 `,
									),
									A(
										'extra',
										`
 color: var(--n-item-text-color-child-active);
 `,
									),
								],
							),
							A(
								'arrow',
								`
 color: var(--n-arrow-color-child-active);
 `,
							),
							A(
								'icon',
								`
 color: var(--n-item-icon-color-child-active);
 `,
							),
						]),
						we('disabled', [
							we('selected, child-active', [B('&:focus-within', ro)]),
							W('selected', [
								Te(null, [
									A('arrow', 'color: var(--n-arrow-color-active-hover);'),
									A('icon', 'color: var(--n-item-icon-color-active-hover);'),
									H(
										'menu-item-content-header',
										`
 color: var(--n-item-text-color-active-hover);
 `,
										[B('a', 'color: var(--n-item-text-color-active-hover);'), A('extra', 'color: var(--n-item-text-color-active-hover);')],
									),
								]),
							]),
							W('child-active', [
								Te(null, [
									A('arrow', 'color: var(--n-arrow-color-child-active-hover);'),
									A('icon', 'color: var(--n-item-icon-color-child-active-hover);'),
									H(
										'menu-item-content-header',
										`
 color: var(--n-item-text-color-child-active-hover);
 `,
										[
											B('a', 'color: var(--n-item-text-color-child-active-hover);'),
											A('extra', 'color: var(--n-item-text-color-child-active-hover);'),
										],
									),
								]),
							]),
							W('selected', [Te(null, [B('&::before', 'background-color: var(--n-item-color-active-hover);')])]),
							Te(null, ro),
						]),
						A(
							'icon',
							`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `,
						),
						A(
							'arrow',
							`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `,
						),
						H(
							'menu-item-content-header',
							`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,
							[
								B(
									'a',
									`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,
									[
										B(
											'&::before',
											`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,
										),
									],
								),
								A(
									'extra',
									`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `,
								),
							],
						),
					],
				),
				H(
					'submenu',
					`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,
					[
						H(
							'menu-item-content',
							`
 height: var(--n-item-height);
 `,
						),
						H(
							'submenu-children',
							`
 overflow: hidden;
 padding: 0;
 `,
							[ss({ duration: '.2s' })],
						),
					],
				),
				H('menu-item-group', [
					H(
						'menu-item-group-title',
						`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,
					),
				]),
			],
		),
		H('menu-tooltip', [
			B(
				'a',
				`
 color: inherit;
 text-decoration: none;
 `,
			),
		]),
		H(
			'menu-divider',
			`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `,
		),
	]);
function Te(e, t) {
	return [W('hover', e, t), B('&:hover', e, t)];
}
const Ls = Object.assign(Object.assign({}, de.props), {
		options: { type: Array, default: () => [] },
		collapsed: { type: Boolean, default: void 0 },
		collapsedWidth: { type: Number, default: 48 },
		iconSize: { type: Number, default: 20 },
		collapsedIconSize: { type: Number, default: 24 },
		rootIndent: Number,
		indent: { type: Number, default: 32 },
		labelField: { type: String, default: 'label' },
		keyField: { type: String, default: 'key' },
		childrenField: { type: String, default: 'children' },
		disabledField: { type: String, default: 'disabled' },
		defaultExpandAll: Boolean,
		defaultExpandedKeys: Array,
		expandedKeys: Array,
		value: [String, Number],
		defaultValue: { type: [String, Number], default: null },
		mode: { type: String, default: 'vertical' },
		watchProps: { type: Array, default: void 0 },
		disabled: Boolean,
		show: { type: Boolean, default: !0 },
		inverted: Boolean,
		'onUpdate:expandedKeys': [Function, Array],
		onUpdateExpandedKeys: [Function, Array],
		onUpdateValue: [Function, Array],
		'onUpdate:value': [Function, Array],
		expandIcon: Function,
		renderIcon: Function,
		renderLabel: Function,
		renderExtra: Function,
		dropdownProps: Object,
		accordion: Boolean,
		nodeProps: Function,
		items: Array,
		onOpenNamesChange: [Function, Array],
		onSelect: [Function, Array],
		onExpandedNamesChange: [Function, Array],
		expandedNames: Array,
		defaultExpandedNames: Array,
		dropdownPlacement: { type: String, default: 'bottom' },
	}),
	Fs = V({
		name: 'Menu',
		props: Ls,
		setup(e) {
			const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = Re(e),
				o = de('Menu', '-menu', Hs, Fr, e, t),
				r = Z(Ps, null),
				i = O(() => {
					var u;
					const { collapsed: S } = e;
					if (S !== void 0) return S;
					if (r) {
						const { collapseModeRef: d, collapsedRef: M } = r;
						if (d.value === 'width') return (u = M.value) !== null && u !== void 0 ? u : !1;
					}
					return !1;
				}),
				l = O(() => {
					const { keyField: u, childrenField: S, disabledField: d } = e;
					return Eo(e.items || e.options, {
						getIgnored(M) {
							return Uo(M);
						},
						getChildren(M) {
							return M[S];
						},
						getDisabled(M) {
							return M[d];
						},
						getKey(M) {
							var I;
							return (I = M[u]) !== null && I !== void 0 ? I : M.name;
						},
					});
				}),
				s = O(() => new Set(l.value.treeNodes.map(u => u.key))),
				{ watchProps: a } = e,
				f = K(null);
			a != null && a.includes('defaultValue')
				? De(() => {
						f.value = e.defaultValue;
				  })
				: (f.value = e.defaultValue);
			const v = ee(e, 'value'),
				h = ot(v, f),
				c = K([]),
				w = () => {
					c.value = e.defaultExpandAll
						? l.value.getNonLeafKeys()
						: e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(h.value, { includeSelf: !1 }).keyPath;
				};
			a != null && a.includes('defaultExpandedKeys') ? De(w) : w();
			const x = co(e, ['expandedNames', 'expandedKeys']),
				$ = ot(x, c),
				y = O(() => l.value.treeNodes),
				g = O(() => l.value.getPath(h.value).keyPath);
			ae(it, {
				props: e,
				mergedCollapsedRef: i,
				mergedThemeRef: o,
				mergedValueRef: h,
				mergedExpandedKeysRef: $,
				activePathRef: g,
				mergedClsPrefixRef: t,
				isHorizontalRef: O(() => e.mode === 'horizontal'),
				invertedRef: ee(e, 'inverted'),
				doSelect: R,
				toggleExpand: C,
			});
			function R(u, S) {
				const { 'onUpdate:value': d, onUpdateValue: M, onSelect: I } = e;
				M && le(M, u, S), d && le(d, u, S), I && le(I, u, S), (f.value = u);
			}
			function P(u) {
				const { 'onUpdate:expandedKeys': S, onUpdateExpandedKeys: d, onExpandedNamesChange: M, onOpenNamesChange: I } = e;
				S && le(S, u), d && le(d, u), M && le(M, u), I && le(I, u), (c.value = u);
			}
			function C(u) {
				const S = Array.from($.value),
					d = S.findIndex(M => M === u);
				if (~d) S.splice(d, 1);
				else {
					if (e.accordion && s.value.has(u)) {
						const M = S.findIndex(I => s.value.has(I));
						M > -1 && S.splice(M, 1);
					}
					S.push(u);
				}
				P(S);
			}
			const _ = u => {
					const S = l.value.getPath(u ?? h.value, { includeSelf: !1 }).keyPath;
					if (!S.length) return;
					const d = Array.from($.value),
						M = new Set([...d, ...S]);
					e.accordion &&
						s.value.forEach(I => {
							M.has(I) && !S.includes(I) && M.delete(I);
						}),
						P(Array.from(M));
				},
				T = O(() => {
					const { inverted: u } = e,
						{
							common: { cubicBezierEaseInOut: S },
							self: d,
						} = o.value,
						{ borderRadius: M, borderColorHorizontal: I, fontSize: L, itemHeight: z, dividerColor: E } = d,
						b = {
							'--n-divider-color': E,
							'--n-bezier': S,
							'--n-font-size': L,
							'--n-border-color-horizontal': I,
							'--n-border-radius': M,
							'--n-item-height': z,
						};
					return (
						u
							? ((b['--n-group-text-color'] = d.groupTextColorInverted),
							  (b['--n-color'] = d.colorInverted),
							  (b['--n-item-text-color'] = d.itemTextColorInverted),
							  (b['--n-item-text-color-hover'] = d.itemTextColorHoverInverted),
							  (b['--n-item-text-color-active'] = d.itemTextColorActiveInverted),
							  (b['--n-item-text-color-child-active'] = d.itemTextColorChildActiveInverted),
							  (b['--n-item-text-color-child-active-hover'] = d.itemTextColorChildActiveInverted),
							  (b['--n-item-text-color-active-hover'] = d.itemTextColorActiveHoverInverted),
							  (b['--n-item-icon-color'] = d.itemIconColorInverted),
							  (b['--n-item-icon-color-hover'] = d.itemIconColorHoverInverted),
							  (b['--n-item-icon-color-active'] = d.itemIconColorActiveInverted),
							  (b['--n-item-icon-color-active-hover'] = d.itemIconColorActiveHoverInverted),
							  (b['--n-item-icon-color-child-active'] = d.itemIconColorChildActiveInverted),
							  (b['--n-item-icon-color-child-active-hover'] = d.itemIconColorChildActiveHoverInverted),
							  (b['--n-item-icon-color-collapsed'] = d.itemIconColorCollapsedInverted),
							  (b['--n-item-text-color-horizontal'] = d.itemTextColorHorizontalInverted),
							  (b['--n-item-text-color-hover-horizontal'] = d.itemTextColorHoverHorizontalInverted),
							  (b['--n-item-text-color-active-horizontal'] = d.itemTextColorActiveHorizontalInverted),
							  (b['--n-item-text-color-child-active-horizontal'] = d.itemTextColorChildActiveHorizontalInverted),
							  (b['--n-item-text-color-child-active-hover-horizontal'] = d.itemTextColorChildActiveHoverHorizontalInverted),
							  (b['--n-item-text-color-active-hover-horizontal'] = d.itemTextColorActiveHoverHorizontalInverted),
							  (b['--n-item-icon-color-horizontal'] = d.itemIconColorHorizontalInverted),
							  (b['--n-item-icon-color-hover-horizontal'] = d.itemIconColorHoverHorizontalInverted),
							  (b['--n-item-icon-color-active-horizontal'] = d.itemIconColorActiveHorizontalInverted),
							  (b['--n-item-icon-color-active-hover-horizontal'] = d.itemIconColorActiveHoverHorizontalInverted),
							  (b['--n-item-icon-color-child-active-horizontal'] = d.itemIconColorChildActiveHorizontalInverted),
							  (b['--n-item-icon-color-child-active-hover-horizontal'] = d.itemIconColorChildActiveHoverHorizontalInverted),
							  (b['--n-arrow-color'] = d.arrowColorInverted),
							  (b['--n-arrow-color-hover'] = d.arrowColorHoverInverted),
							  (b['--n-arrow-color-active'] = d.arrowColorActiveInverted),
							  (b['--n-arrow-color-active-hover'] = d.arrowColorActiveHoverInverted),
							  (b['--n-arrow-color-child-active'] = d.arrowColorChildActiveInverted),
							  (b['--n-arrow-color-child-active-hover'] = d.arrowColorChildActiveHoverInverted),
							  (b['--n-item-color-hover'] = d.itemColorHoverInverted),
							  (b['--n-item-color-active'] = d.itemColorActiveInverted),
							  (b['--n-item-color-active-hover'] = d.itemColorActiveHoverInverted),
							  (b['--n-item-color-active-collapsed'] = d.itemColorActiveCollapsedInverted))
							: ((b['--n-group-text-color'] = d.groupTextColor),
							  (b['--n-color'] = d.color),
							  (b['--n-item-text-color'] = d.itemTextColor),
							  (b['--n-item-text-color-hover'] = d.itemTextColorHover),
							  (b['--n-item-text-color-active'] = d.itemTextColorActive),
							  (b['--n-item-text-color-child-active'] = d.itemTextColorChildActive),
							  (b['--n-item-text-color-child-active-hover'] = d.itemTextColorChildActiveHover),
							  (b['--n-item-text-color-active-hover'] = d.itemTextColorActiveHover),
							  (b['--n-item-icon-color'] = d.itemIconColor),
							  (b['--n-item-icon-color-hover'] = d.itemIconColorHover),
							  (b['--n-item-icon-color-active'] = d.itemIconColorActive),
							  (b['--n-item-icon-color-active-hover'] = d.itemIconColorActiveHover),
							  (b['--n-item-icon-color-child-active'] = d.itemIconColorChildActive),
							  (b['--n-item-icon-color-child-active-hover'] = d.itemIconColorChildActiveHover),
							  (b['--n-item-icon-color-collapsed'] = d.itemIconColorCollapsed),
							  (b['--n-item-text-color-horizontal'] = d.itemTextColorHorizontal),
							  (b['--n-item-text-color-hover-horizontal'] = d.itemTextColorHoverHorizontal),
							  (b['--n-item-text-color-active-horizontal'] = d.itemTextColorActiveHorizontal),
							  (b['--n-item-text-color-child-active-horizontal'] = d.itemTextColorChildActiveHorizontal),
							  (b['--n-item-text-color-child-active-hover-horizontal'] = d.itemTextColorChildActiveHoverHorizontal),
							  (b['--n-item-text-color-active-hover-horizontal'] = d.itemTextColorActiveHoverHorizontal),
							  (b['--n-item-icon-color-horizontal'] = d.itemIconColorHorizontal),
							  (b['--n-item-icon-color-hover-horizontal'] = d.itemIconColorHoverHorizontal),
							  (b['--n-item-icon-color-active-horizontal'] = d.itemIconColorActiveHorizontal),
							  (b['--n-item-icon-color-active-hover-horizontal'] = d.itemIconColorActiveHoverHorizontal),
							  (b['--n-item-icon-color-child-active-horizontal'] = d.itemIconColorChildActiveHorizontal),
							  (b['--n-item-icon-color-child-active-hover-horizontal'] = d.itemIconColorChildActiveHoverHorizontal),
							  (b['--n-arrow-color'] = d.arrowColor),
							  (b['--n-arrow-color-hover'] = d.arrowColorHover),
							  (b['--n-arrow-color-active'] = d.arrowColorActive),
							  (b['--n-arrow-color-active-hover'] = d.arrowColorActiveHover),
							  (b['--n-arrow-color-child-active'] = d.arrowColorChildActive),
							  (b['--n-arrow-color-child-active-hover'] = d.arrowColorChildActiveHover),
							  (b['--n-item-color-hover'] = d.itemColorHover),
							  (b['--n-item-color-active'] = d.itemColorActive),
							  (b['--n-item-color-active-hover'] = d.itemColorActiveHover),
							  (b['--n-item-color-active-collapsed'] = d.itemColorActiveCollapsed)),
						b
					);
				}),
				p = n
					? Ue(
							'menu',
							O(() => (e.inverted ? 'a' : 'b')),
							T,
							e,
					  )
					: void 0;
			return {
				mergedClsPrefix: t,
				controlledExpandedKeys: x,
				uncontrolledExpanededKeys: c,
				mergedExpandedKeys: $,
				uncontrolledValue: f,
				mergedValue: h,
				activePath: g,
				tmNodes: y,
				mergedTheme: o,
				mergedCollapsed: i,
				cssVars: n ? void 0 : T,
				themeClass: p == null ? void 0 : p.themeClass,
				onRender: p == null ? void 0 : p.onRender,
				showOption: _,
			};
		},
		render() {
			const { mergedClsPrefix: e, mode: t, themeClass: n, onRender: o } = this;
			return (
				o == null || o(),
				m(
					'div',
					{
						role: t === 'horizontal' ? 'menubar' : 'menu',
						class: [`${e}-menu`, n, `${e}-menu--${t}`, this.mergedCollapsed && `${e}-menu--collapsed`],
						style: this.cssVars,
					},
					this.tmNodes.map(r => bn(r, this.$props)),
				)
			);
		},
	}),
	Ks = H(
		'switch',
		`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,
		[
			A(
				'children-placeholder',
				`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `,
			),
			A(
				'rail-placeholder',
				`
 display: flex;
 flex-wrap: none;
 `,
			),
			A(
				'button-placeholder',
				`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `,
			),
			H(
				'base-loading',
				`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,
				[
					An({
						left: '50%',
						top: '50%',
						originalTransform: 'translateX(-50%) translateY(-50%)',
					}),
				],
			),
			A(
				'checked, unchecked',
				`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `,
			),
			A(
				'checked',
				`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `,
			),
			A(
				'unchecked',
				`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `,
			),
			B('&:focus', [
				A(
					'rail',
					`
 box-shadow: var(--n-box-shadow-focus);
 `,
				),
			]),
			W('round', [A('rail', 'border-radius: calc(var(--n-rail-height) / 2);', [A('button', 'border-radius: calc(var(--n-button-height) / 2);')])]),
			we('disabled', [
				we('icon', [
					W('rubber-band', [
						W('pressed', [A('rail', [A('button', 'max-width: var(--n-button-width-pressed);')])]),
						A('rail', [B('&:active', [A('button', 'max-width: var(--n-button-width-pressed);')])]),
						W('active', [
							W('pressed', [A('rail', [A('button', 'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));')])]),
							A('rail', [B('&:active', [A('button', 'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));')])]),
						]),
					]),
				]),
			]),
			W('active', [A('rail', [A('button', 'left: calc(100% - var(--n-button-width) - var(--n-offset))')])]),
			A(
				'rail',
				`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,
				[
					A(
						'button-icon',
						`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,
						[An()],
					),
					A(
						'button',
						`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,
					),
				],
			),
			W('active', [A('rail', 'background-color: var(--n-rail-color-active);')]),
			W('loading', [
				A(
					'rail',
					`
 cursor: wait;
 `,
				),
			]),
			W('disabled', [
				A(
					'rail',
					`
 cursor: not-allowed;
 opacity: .5;
 `,
				),
			]),
		],
	),
	Ds = Object.assign(Object.assign({}, de.props), {
		size: { type: String, default: 'medium' },
		value: { type: [String, Number, Boolean], default: void 0 },
		loading: Boolean,
		defaultValue: { type: [String, Number, Boolean], default: !1 },
		disabled: { type: Boolean, default: void 0 },
		round: { type: Boolean, default: !0 },
		'onUpdate:value': [Function, Array],
		onUpdateValue: [Function, Array],
		checkedValue: { type: [String, Number, Boolean], default: !0 },
		uncheckedValue: { type: [String, Number, Boolean], default: !1 },
		railStyle: Function,
		rubberBand: { type: Boolean, default: !0 },
		onChange: [Function, Array],
	});
let Qe;
const js = V({
		name: 'Switch',
		props: Ds,
		setup(e) {
			Qe === void 0 && (typeof CSS < 'u' ? (typeof CSS.supports < 'u' ? (Qe = CSS.supports('width', 'max(1px)')) : (Qe = !1)) : (Qe = !0));
			const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = Re(e),
				o = de('Switch', '-switch', Ks, Is, e, t),
				r = fi(e),
				{ mergedSizeRef: i, mergedDisabledRef: l } = r,
				s = K(e.defaultValue),
				a = ee(e, 'value'),
				f = ot(a, s),
				v = O(() => f.value === e.checkedValue),
				h = K(!1),
				c = K(!1),
				w = O(() => {
					const { railStyle: u } = e;
					if (u) return u({ focused: c.value, checked: v.value });
				});
			function x(u) {
				const { 'onUpdate:value': S, onChange: d, onUpdateValue: M } = e,
					{ nTriggerFormInput: I, nTriggerFormChange: L } = r;
				S && le(S, u), M && le(M, u), d && le(d, u), (s.value = u), I(), L();
			}
			function $() {
				const { nTriggerFormFocus: u } = r;
				u();
			}
			function y() {
				const { nTriggerFormBlur: u } = r;
				u();
			}
			function g() {
				e.loading || l.value || (f.value !== e.checkedValue ? x(e.checkedValue) : x(e.uncheckedValue));
			}
			function R() {
				(c.value = !0), $();
			}
			function P() {
				(c.value = !1), y(), (h.value = !1);
			}
			function C(u) {
				e.loading || l.value || (u.key === ' ' && (f.value !== e.checkedValue ? x(e.checkedValue) : x(e.uncheckedValue), (h.value = !1)));
			}
			function _(u) {
				e.loading || l.value || (u.key === ' ' && (u.preventDefault(), (h.value = !0)));
			}
			const T = O(() => {
					const { value: u } = i,
						{
							self: {
								opacityDisabled: S,
								railColor: d,
								railColorActive: M,
								buttonBoxShadow: I,
								buttonColor: L,
								boxShadowFocus: z,
								loadingColor: E,
								textColor: b,
								iconColor: F,
								[se('buttonHeight', u)]: D,
								[se('buttonWidth', u)]: U,
								[se('buttonWidthPressed', u)]: te,
								[se('railHeight', u)]: q,
								[se('railWidth', u)]: ie,
								[se('railBorderRadius', u)]: Ge,
								[se('buttonBorderRadius', u)]: Xe,
							},
							common: { cubicBezierEaseInOut: me },
						} = o.value;
					let Ee, G, Ye;
					return (
						Qe
							? ((Ee = `calc((${q} - ${D}) / 2)`), (G = `max(${q}, ${D})`), (Ye = `max(${ie}, calc(${ie} + ${D} - ${q}))`))
							: ((Ee = Pt((ke(q) - ke(D)) / 2)), (G = Pt(Math.max(ke(q), ke(D)))), (Ye = ke(q) > ke(D) ? ie : Pt(ke(ie) + ke(D) - ke(q)))),
						{
							'--n-bezier': me,
							'--n-button-border-radius': Xe,
							'--n-button-box-shadow': I,
							'--n-button-color': L,
							'--n-button-width': U,
							'--n-button-width-pressed': te,
							'--n-button-height': D,
							'--n-height': G,
							'--n-offset': Ee,
							'--n-opacity-disabled': S,
							'--n-rail-border-radius': Ge,
							'--n-rail-color': d,
							'--n-rail-color-active': M,
							'--n-rail-height': q,
							'--n-rail-width': ie,
							'--n-width': Ye,
							'--n-box-shadow-focus': z,
							'--n-loading-color': E,
							'--n-text-color': b,
							'--n-icon-color': F,
						}
					);
				}),
				p = n
					? Ue(
							'switch',
							O(() => i.value[0]),
							T,
							e,
					  )
					: void 0;
			return {
				handleClick: g,
				handleBlur: P,
				handleFocus: R,
				handleKeyup: C,
				handleKeydown: _,
				mergedRailStyle: w,
				pressed: h,
				mergedClsPrefix: t,
				mergedValue: f,
				checked: v,
				mergedDisabled: l,
				cssVars: n ? void 0 : T,
				themeClass: p == null ? void 0 : p.themeClass,
				onRender: p == null ? void 0 : p.onRender,
			};
		},
		render() {
			const { mergedClsPrefix: e, mergedDisabled: t, checked: n, mergedRailStyle: o, onRender: r, $slots: i } = this;
			r == null || r();
			const { checked: l, unchecked: s, icon: a, 'checked-icon': f, 'unchecked-icon': v } = i,
				h = !(tt(a) && tt(f) && tt(v));
			return m(
				'div',
				{
					role: 'switch',
					'aria-checked': n,
					class: [
						`${e}-switch`,
						this.themeClass,
						h && `${e}-switch--icon`,
						n && `${e}-switch--active`,
						t && `${e}-switch--disabled`,
						this.round && `${e}-switch--round`,
						this.loading && `${e}-switch--loading`,
						this.pressed && `${e}-switch--pressed`,
						this.rubberBand && `${e}-switch--rubber-band`,
					],
					tabindex: this.mergedDisabled ? void 0 : 0,
					style: this.cssVars,
					onClick: this.handleClick,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur,
					onKeyup: this.handleKeyup,
					onKeydown: this.handleKeydown,
				},
				m(
					'div',
					{ class: `${e}-switch__rail`, 'aria-hidden': 'true', style: o },
					be(l, c =>
						be(s, w =>
							c || w
								? m(
										'div',
										{
											'aria-hidden': !0,
											class: `${e}-switch__children-placeholder`,
										},
										m('div', { class: `${e}-switch__rail-placeholder` }, m('div', { class: `${e}-switch__button-placeholder` }), c),
										m('div', { class: `${e}-switch__rail-placeholder` }, m('div', { class: `${e}-switch__button-placeholder` }), w),
								  )
								: null,
						),
					),
					m(
						'div',
						{ class: `${e}-switch__button` },
						be(a, c =>
							be(f, w =>
								be(v, x =>
									m(oi, null, {
										default: () =>
											this.loading
												? m(ri, {
														key: 'loading',
														clsPrefix: e,
														strokeWidth: 20,
												  })
												: this.checked && (w || c)
												? m(
														'div',
														{
															class: `${e}-switch__button-icon`,
															key: w ? 'checked-icon' : 'icon',
														},
														w || c,
												  )
												: !this.checked && (x || c)
												? m(
														'div',
														{
															class: `${e}-switch__button-icon`,
															key: x ? 'unchecked-icon' : 'icon',
														},
														x || c,
												  )
												: null,
									}),
								),
							),
						),
						be(l, c => c && m('div', { key: 'checked', class: `${e}-switch__checked` }, c)),
						be(s, c => c && m('div', { key: 'unchecked', class: `${e}-switch__unchecked` }, c)),
					),
				),
			);
		},
	}),
	Ws = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	Vs = Y(
		'path',
		{
			d: 'M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
		},
		null,
		-1,
	),
	Us = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M256 160v288',
		},
		null,
		-1,
	),
	Gs = [Vs, Us],
	et = V({
		name: 'BookOutline',
		render: function (t, n) {
			return ve(), Se('svg', Ws, Gs);
		},
	}),
	Xs = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	Ys = Y(
		'path',
		{
			d: 'M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
		},
		null,
		-1,
	),
	qs = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M368 336l80-80l-80-80',
		},
		null,
		-1,
	),
	Zs = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M176 256h256',
		},
		null,
		-1,
	),
	Js = [Ys, qs, Zs],
	Qs = V({
		name: 'LogOutOutline',
		render: function (t, n) {
			return ve(), Se('svg', Xs, Js);
		},
	}),
	ed = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	td = Y(
		'path',
		{
			d: 'M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61z',
			fill: 'currentColor',
		},
		null,
		-1,
	),
	nd = [td],
	od = V({
		name: 'MoonSharp',
		render: function (t, n) {
			return ve(), Se('svg', ed, nd);
		},
	}),
	rd = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	id = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '44',
			d: 'M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z',
		},
		null,
		-1,
	),
	ld = Y(
		'path',
		{
			d: 'M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '44',
		},
		null,
		-1,
	),
	ad = [id, ld],
	sd = V({
		name: 'Pencil',
		render: function (t, n) {
			return ve(), Se('svg', rd, ad);
		},
	}),
	dd = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	cd = Y(
		'path',
		{
			d: 'M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z',
			fill: 'currentColor',
		},
		null,
		-1,
	),
	ud = Y(
		'path',
		{
			d: 'M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z',
			fill: 'currentColor',
		},
		null,
		-1,
	),
	fd = [cd, ud],
	hd = V({
		name: 'PersonCircleOutline',
		render: function (t, n) {
			return ve(), Se('svg', dd, fd);
		},
	}),
	vd = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	pd = Y(
		'path',
		{
			d: 'M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
		},
		null,
		-1,
	),
	md = Y(
		'path',
		{
			d: 'M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-miterlimit': '10',
			'stroke-width': '32',
		},
		null,
		-1,
	),
	gd = [pd, md],
	lo = V({
		name: 'PersonOutline',
		render: function (t, n) {
			return ve(), Se('svg', vd, gd);
		},
	}),
	bd = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	wd = Kr(
		'<path d="M234 26h44v92h-44z" fill="currentColor"></path><path d="M234 394h44v92h-44z" fill="currentColor"></path><path d="M338.025 142.857l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M394 234h92v44h-92z" fill="currentColor"></path><path d="M26 234h92v44H26z" fill="currentColor"></path><path d="M338.029 369.14l31.112-31.113l65.054 65.054l-31.112 31.112z" fill="currentColor"></path><path d="M77.802 108.92l31.113-31.113l65.054 65.054l-31.113 31.112z" fill="currentColor"></path><path d="M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102z" fill="currentColor"></path>',
		9,
	),
	yd = [wd],
	xd = V({
		name: 'SunnySharp',
		render: function (t, n) {
			return ve(), Se('svg', bd, yd);
		},
	}),
	Sd = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	Cd = Y(
		'path',
		{
			d: 'M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
		},
		null,
		-1,
	),
	$d = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M256 272v160',
		},
		null,
		-1,
	),
	zd = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M352 432H160',
		},
		null,
		-1,
	),
	kd = Y(
		'path',
		{
			fill: 'none',
			stroke: 'currentColor',
			'stroke-linejoin': 'round',
			'stroke-width': '32',
			d: 'M112 160h288',
		},
		null,
		-1,
	),
	_d = [Cd, $d, zd, kd],
	Id = V({
		name: 'WineOutline',
		render: function (t, n) {
			return ve(), Se('svg', Sd, _d);
		},
	}),
	ge = e => () => m(on, null, { default: () => m(e) }),
	Pd = [
		{ label: '文章', key: 'article', icon: ge(et) },
		{
			label: '微语',
			key: 'speaking',
			icon: ge(et),
			children: [{ label: '鼠', key: 'rat' }],
		},
		{ label: '留言', key: 'board', icon: ge(et) },
		{
			label: '游，吃，舞',
			key: 'travel',
			icon: ge(et),
			children: [
				{
					type: 'group',
					label: '人物',
					key: 'people',
					children: [
						{ label: '叙事者', key: 'narrator', icon: ge(lo) },
						{ label: '羊男', key: 'sheep-man', icon: ge(lo) },
					],
				},
				{
					label: '饮品',
					key: 'beverage',
					icon: ge(Id),
					children: [{ label: '威士忌', key: 'whisky' }],
				},
				{
					label: '食物',
					key: 'food',
					children: [{ label: '三明治', key: 'sandwich' }],
				},
				{
					label: '过去增多，未来减少',
					key: 'the-past-increases-the-future-recedes',
				},
			],
		},
		{ label: '关于', key: 'about', icon: ge(et) },
	],
	Md = [
		{ label: '用户资料', key: 'profile', icon: ge(hd) },
		{ label: '编辑用户资料', key: 'editProfile', icon: ge(sd) },
		{ label: '退出登录', key: 'logout', icon: ge(Qs) },
	],
	Ad = e => (Ur('data-v-827277fa'), (e = e()), Gr(), e),
	Ed = { class: 'flex justify-between items-center header-wrap px-10' },
	Od = { class: 'mr-10 flex' },
	Td = { class: 'w-1/6' },
	Bd = { class: 'flex items-center pd-8 cursor-pointer' },
	Rd = Ad(() =>
		Y('div', null, [Y('p', { class: 'mb-1' }, '打工仔'), Y('p', { class: 'text-xs text-slate-500' }, '毫无疑问，你是办公室里最亮的星')], -1),
	),
	Nd = V({
		__name: 'Header',
		setup(e) {
			const t = Dr(),
				{ changeTheme: n, changeLocale: o } = t,
				{ theme: r } = jr(t),
				i = Wr(),
				l = K('article');
			fe(
				() => i.currentRoute.value,
				v => {
					const { name: h } = v;
					h && (l.value = String(h));
				},
				{ immediate: !0 },
			);
			const s = v => {
					console.log('key----', v), i.push({ name: v });
				},
				a = v => {
					console.log('key---', v);
				},
				f = () => {
					i.push('/home');
				};
			return (v, h) => {
				const c = vs,
					w = Fs,
					x = on,
					$ = js,
					y = Ko;
				return (
					ve(),
					Se('div', Ed, [
						Y(
							'div',
							{
								class: 'logo flex justify-center items-center text-base self-text cursor-pointer',
								onClick: f,
							},
							[
								Ie(c, {
									class: 'mr-3',
									src: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg',
								}),
								ct(' My Honey '),
							],
						),
						Ie(
							w,
							{
								value: ze(l),
								'onUpdate:value': h[0] || (h[0] = g => (Vr(l) ? (l.value = g) : null)),
								mode: 'horizontal',
								class: 'flex-1 pl-40 text-base',
								options: ze(Pd),
								'on-update:value': s,
							},
							null,
							8,
							['value', 'options'],
						),
						Y('div', Od, [
							Y(
								'div',
								{
									onClick: h[1] || (h[1] = (...g) => ze(n) && ze(n)(...g)),
									class: 'cursor-pointer mr-3',
								},
								[
									ze(r) === null
										? (ve(), Mn(x, { key: 0, color: '#646cff', size: '20' }, { default: Ze(() => [Ie(ze(xd))]), _: 1 }))
										: (ve(), Mn(x, { key: 1, color: '#646cff', size: '20' }, { default: Ze(() => [Ie(ze(od))]), _: 1 })),
								],
							),
							Ie(
								$,
								{ 'onUpdate:value': ze(o) },
								{
									checked: Ze(() => [ct(' 中 ')]),
									unchecked: Ze(() => [ct(' 英 ')]),
									_: 1,
								},
								8,
								['onUpdate:value'],
							),
						]),
						Y('div', Td, [
							Ie(
								y,
								{ options: ze(Md), onSelect: a, size: 'large' },
								{
									default: Ze(() => [
										Y('div', Bd, [
											Ie(c, {
												round: '',
												class: 'mr-3',
												size: 'medium',
												src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
											}),
											Rd,
										]),
									]),
									_: 1,
								},
								8,
								['options'],
							),
						]),
					])
				);
			};
		},
	});
const Hd = hi(Nd, [['__scopeId', 'data-v-827277fa']]),
	Ld = { class: 'max-w-8xl' },
	Zd = V({
		__name: 'Layout',
		setup(e) {
			return (t, n) => {
				const o = Xr('RouterView');
				return ve(), Se('div', null, [Ie(Hd), Y('div', Ld, [Ie(o)])]);
			};
		},
	});
export { Zd as default };
