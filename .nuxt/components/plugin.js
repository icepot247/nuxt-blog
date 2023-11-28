import Vue from 'vue'

const globalComponents = {
  InfoBox: () => import('../..\\components\\global\\InfoBox.vue' /* webpackChunkName: "components_global/InfoBox" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
