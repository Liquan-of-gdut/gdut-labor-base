<template>
  <div :class="['nav', {'hover': navFixFlag && scrollTop}]">
    <div class="nav-bgcolor"></div>
    <div class="container">
      <img src="@/assets/school-logo.png" alt="广东工业大学实训基地" class="nav-logo"
       v-navigate="`/Home`">
      <ul class="nav-list">
        <li :class="['nav-parent', {'active-nav': activeNavIdx === parentIdx}]"
         v-for="(navItem, parentIdx) in navs"
         @click="navigate(navItem, parentIdx, 0)" :key="parentIdx">
          <i>{{navItem.nav.CH}}</i>
        <ol v-if="navItem.navSubs && navItem.navSubs.length > 1" class="nav-list-child">
          <li v-for="(navSub, subIdx) in navItem.navSubs" :key="subIdx"
           :class="['nav-child', {'active-nav': subIdx === activeNavSubIdx}]"
           @click="navigate(navItem, parentIdx, subIdx)">
            <i>{{navSub}}</i>
          </li>
        </ol>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { routes } from '@/router'
import { navigate } from '@/directives.js'
import { NAVS } from '@/config/navs.js'

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
    ...mapState({
      activeNavIdx: state => state.activeNavIdx,
      activeNavSubIdx: state => state.activeNavSubIdx
    }),
    activeIdx () {
      return this.navs.findIndex(i => i.title === this.$route.meta.title)
    }
  },
  methods: {
    ...mapMutations({
      setActiveNav: 'SET_ACTIVE_NAV',
      setActiveNavSub: 'SET_ACTIVE_NAV_SUB'
    }),
    navigate (navItem, parentIdx, subIdx) {
      this.setActiveNav(parentIdx) // 设置当前活跃导航
      this.setActiveNavSub(subIdx)
      if (parentIdx === 0) { // 当点击 ’首页‘ 时
        this.$router.push(`/Home`)
        return
      }
      let nav = navItem.nav.EN
      this.$router.push({ // content页的跳转
        name: 'Content',
        params: {
          nav
        }
      })
    }
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
