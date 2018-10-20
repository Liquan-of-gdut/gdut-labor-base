<template>
  <div :class="['nav', {'hover': navFixFlag && scrollTop}]">
    <div class="nav-bgcolor"></div>
    <div class="container">
      <img src="@/assets/school-logo.png" alt="广东工业大学实训基地" class="nav-logo"
       v-navigate="`/Home`">
      <!-- <v-nav :navs='navs' :active-idx="activeIdx" @setActiveNav='navigate'>
        <template slot-scope="{nav}">
          {{nav.meta.title}}
        </template>
      </v-nav> -->
      <ul class="nav-list">
        <li :class="['nav-parent', {'active-nav': focusIdx === idx}]"
         v-for="(navItem, idx) in navs"
         @click="navigate(navItem, idx)" :key="idx">
          <i>{{navItem.nav.CH}}</i>
        <ol v-if="navItem.navSubs" class="nav-list-child">
          <li v-for="(navSub, idx) in navItem.navSubs" :key="idx"
           :class="['nav-child', {'active-nav': focusIdx === idx}]"
           @click="navigate(navItem, idx, navSub)">
            <i>{{navSub}}</i>
          </li>
        </ol>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import {mapGetters} from 'vuex'
import { routes } from '@/router'
import { navigate } from '@/directives.js'
import { NAVS } from '@/api/navs'

export default {
  name: 'Navigator',
  data: () => ({
    activeChildren: '',
    navs: NAVS,
    navFixFlag: false,
    focusIdx: null
  }),
  created () {
    console.log('navs:', this.navs)
  },
  computed: {
    activeIdx () {
      return this.navs.findIndex(i => i.title === this.$route.meta.title)
    }
    // ...mapGetters(['scrollTop'])
  },
  methods: {
    navigate (navItem, idx, navSub = '') {
      this.focusIdx = idx // 设置当前活跃导航
      if (idx === 0) { // 当点击 ’首页‘ 时
        this.$router.push(`/Home`)
        return
      }
      if (!navSub && navItem.navSubs) { // 假如导航没有 子导航时
        navSub = navItem.navSubs[0]
      }
      this.activeChildren = navSub // 当前活跃 子导航
      let nav = navItem.nav.EN
      this.$router.push({ // content页的跳转
        name: 'Content',
        params: {
          nav,
          navSub
        }
      })
    }
    // clearChildren () {
    //   this.activeChildren = ''
    // },
    // showChildren ({name}) {
    //   this.activeChildren = name
    // },
    // displayNav (el) {
    //   el = el || window.event
    //   if (el.wheelDelta) {
    //     el.wheelDelta > 0 ? this.navFixFlag = true : this.navFixFlag = false
    //   } else if (el.detail) {
    //     if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
    //       el.detail < 0 ? this.navFixFlag = true : this.navFixFlag = false
    //     } else {
    //       el.detail > 0 ? this.navFixFlag = true : this.navFixFlag = false
    //     }
    //   }
    // },
    // handleEvent () {
    //   if (document.addEventListener) {
    //     document.addEventListener('DOMMouseScroll', this.displayNav, false)
    //   }
    //   window.onmousewheel = document.onmousewheel = this.displayNav
    // }
  },
  directives: {
    navigate
  },
  mounted () {
    console.log('route:', routes)
    console.log('navs:', this.navs)
    this.focusIdx = this.activeIdx
    // this.handleEvent()
  }
}
</script>

<style lang="stylus" scoped src='./Navigator.styl'></style>
