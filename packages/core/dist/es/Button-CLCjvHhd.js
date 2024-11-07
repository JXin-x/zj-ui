import { defineComponent as s, useSlots as i, ref as l, openBlock as r, createBlock as d, resolveDynamicComponent as p, normalizeClass as u, withCtx as f, renderSlot as y } from "vue";
import { w as c } from "./utils-CegnSDgq.js";
const b = /* @__PURE__ */ s({
  name: "ZjButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    nativeType: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    icon: {},
    circle: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean }
  },
  setup(o) {
    const n = o;
    i();
    const t = l();
    return (e, a) => (r(), d(p(n.tag), {
      ref_key: "_ref",
      ref: t,
      class: u(["zj-button", {
        [`zj-button--${e.type}`]: e.type,
        [`zj-button--${e.size}`]: e.size,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": e.disabled,
        "is-loading": e.loading
      }]),
      type: e.tag === "button" ? e.nativeType : void 0,
      disabled: e.disabled || e.loading ? !0 : void 0
    }, {
      default: f(() => [
        y(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["type", "disabled", "class"]));
  }
}), m = (o, n) => {
  const t = o.__vccOpts || o;
  for (const [e, a] of n)
    t[e] = a;
  return t;
}, B = /* @__PURE__ */ m(b, [["__scopeId", "data-v-24eeae0e"]]), z = c(B);
export {
  z as Z
};
