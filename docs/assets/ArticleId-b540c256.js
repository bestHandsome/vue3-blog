import { E as _, a as b, t as h } from './article-6fb96c26.js';
import {
	d as v,
	aV as k,
	r as y,
	aA as C,
	am as c,
	an as r,
	ao as i,
	aM as n,
	au as t,
	at as a,
	ax as d,
	h as m,
	aN as p,
} from './index-06154a72.js';
import { N as A } from './Icon-7ca9397a.js';
import { _ as N } from './_plugin-vue_export-helper-c27b6911.js';
import './request-38e35c3f.js';
import './use-css-vars-class-b6cc7c20.js';
const I = { class: 'content-wrap' },
	g = { class: 'text-3xl text-left text-black mb-3 font-bold' },
	w = { class: 'info' },
	V = { key: 0, class: 'ml-3' },
	B = { key: 1, class: 'ml-3' },
	T = v({
		__name: 'ArticleId',
		setup(E) {
			const u = ['likeCount', 'scanCount'],
				f = k(),
				e = y({});
			return (
				(async () => {
					const l = f.params.id;
					let { data: s } = await b(l);
					for (let o in s) u.includes(o) && (s[o] = h(s[o]));
					e.value = s;
				})(),
				(l, s) => {
					const o = A,
						x = C('v-md-preview');
					return (
						c(),
						r('div', I, [
							i('h1', g, n(t(e).title), 1),
							i('div', w, [
								i('span', null, n(t(e).nickname), 1),
								t(e).scanCount
									? (c(),
									  r('span', V, [
											a(
												o,
												{
													class: 'align-bottom mr-1',
													color: '#ccc',
													size: '20',
												},
												{ default: d(() => [a(t(_))]), _: 1 },
											),
											m(n(t(e).scanCount), 1),
									  ]))
									: p('', !0),
								t(e).likeCount
									? (c(),
									  r('span', B, [
											a(
												o,
												{
													class: 'align-bottom mr-1',
													color: '#ccc',
													size: '20',
												},
												{ default: d(() => [a(t(_))]), _: 1 },
											),
											m(n(t(e).likeCount), 1),
									  ]))
									: p('', !0),
							]),
							a(x, { text: t(e).content }, null, 8, ['text']),
						])
					);
				}
			);
		},
	});
const q = N(T, [['__scopeId', 'data-v-c2b87dbb']]);
export { q as default };
