import { a_ as p, C as m, F as y, a$ as S, n as c, i as v, aU as h, o as d, b0 as l, b1 as b, l as N, a2 as A } from './index-06154a72.js';
function g(e, ...n) {
	if (Array.isArray(e)) e.forEach(t => g(t, ...n));
	else return e(...n);
}
function i(e) {
	return e.some(n => (p(n) ? !(n.type === m || (n.type === y && !i(n.children))) : !0)) ? e : null;
}
function x(e, n) {
	return (e && i(e())) || n();
}
function C(e, n) {
	const t = e && i(e());
	return n(t || null);
}
function E(e) {
	return !(e && i(e()));
}
function M(e, n) {
	if (e === void 0) return !1;
	if (n) {
		const {
			context: { ids: t },
		} = n;
		return t.has(e);
	}
	return S(e) !== null;
}
function $(e, n) {
	return e + (n === 'default' ? '' : n.replace(/^[a-z]/, t => t.toUpperCase()));
}
$('abc', 'def');
const P = typeof document < 'u' && typeof window < 'u';
function R(e, n, t) {
	if (!n) return;
	const o = c(),
		a = v(h, null),
		s = () => {
			const r = t == null ? void 0 : t.value;
			n.mount({
				id: r === void 0 ? e : r + e,
				head: !0,
				anchorMetaName: l,
				props: { bPrefix: r ? `.${r}-` : void 0 },
				ssr: o,
			}),
				(a != null && a.preflightStyleDisabled) || b.mount({ id: 'n-global', head: !0, anchorMetaName: l, ssr: o });
		};
	o ? s() : d(s);
}
function V(e, n, t) {
	if (!n) return;
	const o = c(),
		a = N(() => {
			const { value: r } = n;
			if (!r) return;
			const u = r[e];
			if (u) return u;
		}),
		s = () => {
			A(() => {
				const { value: r } = t,
					u = `${r}${e}Rtl`;
				if (M(u, o)) return;
				const { value: f } = a;
				f &&
					f.style.mount({
						id: u,
						head: !0,
						anchorMetaName: l,
						props: { bPrefix: r ? `.${r}-` : void 0 },
						ssr: o,
					});
			});
		};
	return o ? s() : d(s), a;
}
export { P as a, x as b, g as c, $ as d, R as e, E as i, C as r, V as u };
