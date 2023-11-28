import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e0e5ba7e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _37513424 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _39676a58 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3666af8e = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _359a92dc = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a17604f4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _a4e34784 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e0e5ba7e,
    name: "about"
  }, {
    path: "/blog",
    component: _37513424,
    name: "blog"
  }, {
    path: "/contact",
    component: _39676a58,
    name: "contact"
  }, {
    path: "/test",
    component: _3666af8e,
    name: "test"
  }, {
    path: "/blog/:slug",
    component: _359a92dc,
    name: "blog-slug"
  }, {
    path: "/",
    component: _a17604f4,
    name: "index"
  }, {
    path: "/:slug",
    component: _a4e34784,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
