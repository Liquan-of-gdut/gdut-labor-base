import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getRoute = (title, name = 'Content', path = '/Content/:id') => ({
  name,
  path,
  meta: { title },
  component: resolve => require([`@/views/${name}.vue`], resolve)
})
export const routes = [
  getRoute('首页', 'Home', '/'),
  getRoute('基地概况'),
  getRoute('建设思路'),
  getRoute('组织管理'),
  getRoute('机制体制'),
  getRoute('实践教学'),
  getRoute('师资队伍'),
  getRoute('保障条件'),
  getRoute('实习安排'),
  getRoute('建设成效'),
  { path: '*', redirect: '/' }
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
