import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b0b3e450 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _2f0b62f1 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _7e8d890a = () => interopDefault(import('..\\pages\\skills.vue' /* webpackChunkName: "pages_skills" */))
const _bd4e1eae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/home",
    component: _b0b3e450,
    name: "home"
  }, {
    path: "/inspire",
    component: _2f0b62f1,
    name: "inspire"
  }, {
    path: "/skills",
    component: _7e8d890a,
    name: "skills"
  }, {
    path: "/",
    component: _bd4e1eae,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
