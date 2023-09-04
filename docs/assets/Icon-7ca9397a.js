import { Y as b, _ as l, Z as d, a0 as f, d as g, a1 as y, aW as $, l as a, w as C, m as u, a5 as x } from './index-06154a72.js';
import { u as _ } from './use-css-vars-class-b6cc7c20.js';
const z = /^(\d|\.)+$/,
	m = /(\d|\.)+/;
function R(e, { c: t = 1, offset: i = 0, attachPx: o = !0 } = {}) {
	if (typeof e == 'number') {
		const n = (e + i) * t;
		return n === 0 ? '0' : `${n}px`;
	} else if (typeof e == 'string')
		if (z.test(e)) {
			const n = (Number(e) + i) * t;
			return o ? (n === 0 ? '0' : `${n}px`) : `${n}`;
		} else {
			const n = m.exec(e);
			return n ? e.replace(m, String((Number(n[0]) + i) * t)) : e;
		}
	return e;
}
const N = b(
		'icon',
		`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
		[
			l('color-transition', { transition: 'color .3s var(--n-bezier)' }),
			l('depth', { color: 'var(--n-color)' }, [
				d('svg', {
					opacity: 'var(--n-opacity)',
					transition: 'opacity .3s var(--n-bezier)',
				}),
			]),
			d('svg', { height: '1em', width: '1em' }),
		],
	),
	S = Object.assign(Object.assign({}, f.props), {
		depth: [String, Number],
		size: [Number, String],
		color: String,
		component: Object,
	}),
	I = g({
		_n_icon__: !0,
		name: 'Icon',
		inheritAttrs: !1,
		props: S,
		setup(e) {
			const { mergedClsPrefixRef: t, inlineThemeDisabled: i } = y(e),
				o = f('Icon', '-icon', N, $, e, t),
				n = a(() => {
					const { depth: s } = e,
						{
							common: { cubicBezierEaseInOut: c },
							self: p,
						} = o.value;
					if (s !== void 0) {
						const { color: h, [`opacity${s}Depth`]: v } = p;
						return { '--n-bezier': c, '--n-color': h, '--n-opacity': v };
					}
					return { '--n-bezier': c, '--n-color': '', '--n-opacity': '' };
				}),
				r = i
					? _(
							'icon',
							a(() => `${e.depth || 'd'}`),
							n,
							e,
					  )
					: void 0;
			return {
				mergedClsPrefix: t,
				mergedStyle: a(() => {
					const { size: s, color: c } = e;
					return { fontSize: R(s), color: c };
				}),
				cssVars: i ? void 0 : n,
				themeClass: r == null ? void 0 : r.themeClass,
				onRender: r == null ? void 0 : r.onRender,
			};
		},
		render() {
			var e;
			const { $parent: t, depth: i, mergedClsPrefix: o, component: n, onRender: r, themeClass: s } = this;
			return (
				!((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && C('icon', "don't wrap `n-icon` inside `n-icon`"),
				r == null || r(),
				u(
					'i',
					x(this.$attrs, {
						role: 'img',
						class: [
							`${o}-icon`,
							s,
							{
								[`${o}-icon--depth`]: i,
								[`${o}-icon--color-transition`]: i !== void 0,
							},
						],
						style: [this.cssVars, this.mergedStyle],
					}),
					n ? u(n) : this.$slots,
				)
			);
		},
	});
export { I as N, R as f };
