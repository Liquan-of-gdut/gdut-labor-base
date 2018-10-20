import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const setRoute = (title, name, path) => ({
  name,
  path,
  meta: { title },
  component: resolve => require([`@/views/${name}.vue`], resolve)
})
export const routes = [
  setRoute('首页', 'Home', '/'),
  setRoute('主要内容', 'Content', `/Content/:nav`),
  { path: '*', redirect: '/' }
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
