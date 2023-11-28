export { default as InfoBox } from '../..\\components\\global\\InfoBox.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as PrevNext } from '../..\\components\\PrevNext.vue'

export const LazyInfoBox = import('../..\\components\\global\\InfoBox.vue' /* webpackChunkName: "components_global/InfoBox" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyPrevNext = import('../..\\components\\PrevNext.vue' /* webpackChunkName: "components_PrevNext" */).then(c => c.default || c)
