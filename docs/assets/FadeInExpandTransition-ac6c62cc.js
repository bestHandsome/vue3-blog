import { i as g, p as v, l as h, e as x, f as y, d as W, m as F, aK as H, a4 as L } from './index-06154a72.js';
const m = y('n-form-item');
function I(i, { defaultSize: s = 'medium', mergedSize: o, mergedDisabled: a } = {}) {
	const n = g(m, null);
	v(m, null);
	const d = h(
			o
				? () => o(n)
				: () => {
						const { size: t } = i;
						if (t) return t;
						if (n) {
							const { mergedSize: r } = n;
							if (r.value !== void 0) return r.value;
						}
						return s;
				  },
		),
		f = h(
			a
				? () => a(n)
				: () => {
						const { disabled: t } = i;
						return t !== void 0 ? t : n ? n.disabled.value : !1;
				  },
		),
		e = h(() => {
			const { status: t } = i;
			return t || (n == null ? void 0 : n.mergedValidationStatus.value);
		});
	return (
		x(() => {
			n && n.restoreValidation();
		}),
		{
			mergedSizeRef: d,
			mergedDisabledRef: f,
			mergedStatusRef: e,
			nTriggerFormBlur() {
				n && n.handleContentBlur();
			},
			nTriggerFormChange() {
				n && n.handleContentChange();
			},
			nTriggerFormFocus() {
				n && n.handleContentFocus();
			},
			nTriggerFormInput() {
				n && n.handleContentInput();
			},
		}
	);
}
const w = W({
	name: 'FadeInExpandTransition',
	props: {
		appear: Boolean,
		group: Boolean,
		mode: String,
		onLeave: Function,
		onAfterLeave: Function,
		onAfterEnter: Function,
		width: Boolean,
		reverse: Boolean,
	},
	setup(i, { slots: s }) {
		function o(e) {
			i.width ? (e.style.maxWidth = `${e.offsetWidth}px`) : (e.style.maxHeight = `${e.offsetHeight}px`), e.offsetWidth;
		}
		function a(e) {
			i.width ? (e.style.maxWidth = '0') : (e.style.maxHeight = '0'), e.offsetWidth;
			const { onLeave: t } = i;
			t && t();
		}
		function n(e) {
			i.width ? (e.style.maxWidth = '') : (e.style.maxHeight = '');
			const { onAfterLeave: t } = i;
			t && t();
		}
		function d(e) {
			if (((e.style.transition = 'none'), i.width)) {
				const t = e.offsetWidth;
				(e.style.maxWidth = '0'), e.offsetWidth, (e.style.transition = ''), (e.style.maxWidth = `${t}px`);
			} else if (i.reverse) (e.style.maxHeight = `${e.offsetHeight}px`), e.offsetHeight, (e.style.transition = ''), (e.style.maxHeight = '0');
			else {
				const t = e.offsetHeight;
				(e.style.maxHeight = '0'), e.offsetWidth, (e.style.transition = ''), (e.style.maxHeight = `${t}px`);
			}
			e.offsetWidth;
		}
		function f(e) {
			var t;
			i.width ? (e.style.maxWidth = '') : i.reverse || (e.style.maxHeight = ''), (t = i.onAfterEnter) === null || t === void 0 || t.call(i);
		}
		return () => {
			const { group: e, width: t, appear: r, mode: l } = i,
				c = e ? H : L,
				u = {
					name: t ? 'fade-in-width-expand-transition' : 'fade-in-height-expand-transition',
					appear: r,
					onEnter: d,
					onAfterEnter: f,
					onBeforeLeave: o,
					onLeave: a,
					onAfterLeave: n,
				};
			return e || (u.mode = l), F(c, u, s);
		};
	},
});
export { w as N, I as u };
