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
        <li :class="['nav-parent', {'active-nav': focusIdx === idx}]" v-for="(nav, idx) in navs"
         @click="navigate(nav, idx)" :key="idx">
          <i>{{nav.title}}</i>
        <ol v-if="nav.childNavs" class="nav-list-child">
          <li v-for="(childNav, idx) in nav.childNavs" :key="idx" class="nav-child">
            <i>{{childNav}}</i>
          </li>
        </ol>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import {mapGetters} from 'vuex'
import {routes} from '@/router'
import {navigate} from '@/directives.js'
import {NAVS} from '@/api/navs'

export default {
  name: 'Navigator',
  data: () => ({
    activeChildren: '',
    navs: NAVS,
    navFixFlag: false,
    focusIdx: null
  }),
  computed: {
    activeIdx () {
      return this.navs.findIndex(i => i.title === this.$route.meta.title)
    }
    // ...mapGetters(['scrollTop'])
  },
  methods: {
    navigate ({path}, idx) {
      this.focusIdx = idx
      this.activeChildren = ''
      this.$router.push({path})
    },
    // clearChildren () {
    //   this.activeChildren = ''
    // },
    // showChildren ({name}) {
    //   this.activeChildren = name
    // },
    displayNav (el) {
      el = el || window.event
      if (el.wheelDelta) {
        el.wheelDelta > 0 ? this.navFixFlag = true : this.navFixFlag = false
      } else if (el.detail) {
        if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
          el.detail < 0 ? this.navFixFlag = true : this.navFixFlag = false
        } else {
          el.detail > 0 ? this.navFixFlag = true : this.navFixFlag = false
        }
      }
    },
    handleEvent () {
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', this.displayNav, false)
      }
      window.onmousewheel = document.onmousewheel = this.displayNav
    }
  },
  directives: {
    navigate
  },
  mounted () {
    console.log('route:', routes)
    console.log('navs:', this.navs)
    this.focusIdx = this.activeIdx
    this.handleEvent()
  }
}
</script>

<style lang="stylus" scoped src='./Navigator.styl'></style>
