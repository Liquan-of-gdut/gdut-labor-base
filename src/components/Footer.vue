<template>
    <div class="footer full-width">
        <div class="footer-first">
            <div class="friendship-link container">
                <h2 class="title">友情链接</h2>
                <ul class="friendship-link-list">
                    <li class="margin-right-bottom">
                        <a target="_blank" href="http://www.gdhed.edu.cn/">广东省教育厅</a>
                    </li>
                    <li class="margin-right-bottom">
                        <a target="_blank" href="http://www.gdut.edu.cn/">广东工业大学主页</a>
                    </li>
                    <li class="margin-right-bottom">
                        <a target="_blank" href="http://jwc.gdut.edu.cn/">广东工业大学教务处</a>
                    </li>
                    <li class="margin-right-bottom">
                        <a target="_blank" href="http://xxgcxy.gdut.edu.cn/">广东工业大学信工学院</a>
                    </li>
                    <li class="margin-right-bottom">
                        <a target="_blank" href="http://syjxb.gdut.edu.cn/">广东工业大学实验教学部</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-second">
            <div class="copyright">
                <span>CopyRight© 2018 All Rights Reserved.广东工业大学版权所有</span><br>
                <span>粤ICP备14022647号-1</span>
            </div>
        </div>
    </div>
</template>
<script>
// import {mapGetters} from 'vuex'
// import { routes } from '@/router'
import { navigate } from '@/directives.js'
import { NAVS } from '@/config/navs.js'

export default {
  name: 'Footer',
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
  },
  directives: {
    navigate
  },
  mounted () {
    // console.log('route:', routes)
    // console.log('navs:', this.navs)
    // this.focusIdx = this.activeIdx
    // this.handleEvent()
  }
}
</script>

<style lang="stylus" scoped>
/* 页脚 */
.footer
  text-align center

.index-show .friendship-link
  display block

.footer-first
  background-color #e9f0f7
  overflow hidden

.friendship-link
  // display none

.friendship-link .title
  position relative
  margin 32px auto
  width 200px
  text-align center
  font-size 18px
  color #3e3e3e

.friendship-link .title:before, .friendship-link .title:after
  content ''
  display block
  position absolute
  top 50%
  width 32px
  height 2px
  background-color #3e3e3e
  z-index 2

.friendship-link .title:before
  left 0

.friendship-link .title:after
  right 0

.friendship-link .friendship-link-list
  text-align center
  overflow hidden

.friendship-link .friendship-link-list li
  display inline-block
  position relative
  float left
  width 20%
  box-sizing border-box

.friendship-link .friendship-link-list li a
  position relative
  display block
  padding 5px 30px 5px 10px
  font-size 14px
  color #999
  border 1px solid #999
  -moz-border-radius 4px
  -webkit-border-radius 4px
  border-radius 4px
  z-index 2
  white-space nowrap
  overflow hidden

.friendship-link .friendship-link-list li a:before
  content ''
  position absolute
  top 8px
  right 20px
  width 2px
  height 14px
  background-color #999

.friendship-link .friendship-link-list li a:after
  content ''
  position absolute
  top 8px
  right 10px
  border-top 7px solid transparent
  border-bottom 7px solid transparent
  border-left 7px solid #999

.margin-right-bottom
  padding-right 15px
  padding-bottom 15px

.footer-nav
  padding 15px 0
  text-align center

.footer-nav a
  color #999

.footer-nav span
  margin 0 10px
  color #999

.footer-second
  // background url('../img/footer_bg.png') repeat
  // display block
  position relative
  margin 0 auto
  text-align center
  overflow hidden

.footer-second .content
  width 1100px
  margin 0 auto
  padding 20px 0
  color #505050

.footer-second .content .float-box
  overflow hidden

.footer-second .content .float-box span
  color #38C3F4
  font-weight 900

.footer-second .content p
  line-height 24px

.footer-second .content p a
  color #505050

.footer-second .copyright
  padding 20px 0
  border-top 1px solid #ddd
  text-align center
  color #999
  font-size 14px

.copyright
  text-align center
  line-height 48px
</style>
