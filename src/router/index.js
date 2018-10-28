import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { NAVS } from '@/config/navs.js'

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

const router = new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // TODO：设置当前父导航（TODO：父导航的State值通过数值index设置即可）
  // TODO：参数中存在时设置当前子导航，不存在时则默认第一个子导航（TODO：子导航的State值通过数值index设置即可）
  // 根据路由名计算当前 activeNavIdx ：一层遍历
  NAVS.forEach((item, idx) => {
    if (item.nav.EN === to.params.nav) {
      store.commit('SET_ACTIVE_NAV', idx)
    }
  })
  next()
})

export default router
