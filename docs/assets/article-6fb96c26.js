import { d as o, am as n, an as c, ao as t } from './index-06154a72.js';
import { s as r } from './request-38e35c3f.js';
const f = e => (e >= 1e3 ? (e / 1e3).toFixed(1) + 'k' : e),
	s = {
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		viewBox: '0 0 512 512',
	},
	a = t('circle', { cx: '256', cy: '256', r: '64', fill: 'currentColor' }, null, -1),
	l = t(
		'path',
		{
			d: 'M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96z',
			fill: 'currentColor',
		},
		null,
		-1,
	),
	i = [a, l],
	_ = o({
		name: 'EyeSharp',
		render: function (u, p) {
			return n(), c('svg', s, i);
		},
	});
function m(e) {
	return r({ url: '/articles?populate=*', params: e });
}
function w(e) {
	return r({ url: `/articles/${e}?populate=*` });
}
export { _ as E, w as a, m as g, f as t };
