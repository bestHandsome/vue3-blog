import { aH as p, i as H, aU as O, r as S, n as $, a2 as b, b2 as m, Z as R } from './index-06154a72.js';
function j(v, t, r, y) {
	var a;
	r || p('useThemeClass', 'cssVarsRef is not passed');
	const n = (a = H(O, null)) === null || a === void 0 ? void 0 : a.mergedThemeHashRef,
		i = S(''),
		C = $();
	let s;
	const T = `__${v}`,
		g = () => {
			let e = T;
			const o = t ? t.value : void 0,
				l = n == null ? void 0 : n.value;
			l && (e += '-' + l), o && (e += '-' + o);
			const { themeOverrides: u, builtinThemeOverrides: d } = y;
			u && (e += '-' + m(JSON.stringify(u))),
				d && (e += '-' + m(JSON.stringify(d))),
				(i.value = e),
				(s = () => {
					const f = r.value;
					let c = '';
					for (const h in f) c += `${h}: ${f[h]};`;
					R(`.${e}`, c).mount({ id: e, ssr: C }), (s = void 0);
				});
		};
	return (
		b(() => {
			g();
		}),
		{
			themeClass: i,
			onRender: () => {
				s == null || s();
			},
		}
	);
}
export { j as u };
