<template>
  <div id="content" class="content">
    <div class="bread-nav">
      <span>当前位置： </span>
      <span style="color: #00aae7; cursor: pointer;"
       @click="$router.push({name: 'Home', params: {nav: 'home'}})"> 首页 </span>
      <span>{{setBreadNav()}}</span>
    </div>
    <div class="left-nav">
      <h2 class="title">{{navParent}}</h2>
      <ul v-if="navSubList" class="navSub-list">
        <li v-for="(item, subIdx) in navSubList" :key="subIdx"
         :class="['navSub-item', {'active-nav': subIdx === activeNavSubIdx}]"
         @click="setActiveNavSub(subIdx)">
          {{item}}
        </li>
      </ul>
      <ul v-else class="navSub-list">
        <li class="navSub-item active-nav">
          {{navParent}}
        </li>
      </ul>
    </div>
    <div class="detail">
      <h2 class="title">{{dataList.title}}</h2>
      <div v-html="dataList.description" class="description">
        <p style="color:#3E3E3E;font-family:&quot;font-size:15px;text-align:justify;">
          {{dataList.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { NAVS } from '@/config/navs.js'
import { getDataList } from '@/config/index.js'

export default {
  name: 'Content',
  data: () => ({
    navParent: '',
    navSubList: [],
    dataList: {}
  }),
  created () {
    this.navParent = NAVS[this.activeNavIdx].nav.CH
    this.navSubList = NAVS[this.activeNavIdx].navSubs
  },
  computed: {
    ...mapState({
      activeNavIdx: state => state.activeNavIdx,
      activeNavSubIdx: state => state.activeNavSubIdx
    }),
    handleNavChange () {
      return [
        this.activeNavIdx,
        this.activeNavSubIdx
      ]
    }
  },
  methods: {
    ...mapMutations({
      setActiveNavSub: 'SET_ACTIVE_NAV_SUB'
    }),
    setDataList () {
      // 更新数据 ： 根据当前“navIdx、navSubIdx”更新当前的数据列表
      // 暂时不将数据独立出来，所以当前navIdx === 0 时，结束
      this.navParent = NAVS[this.activeNavIdx].nav.CH
      this.navSubList = NAVS[this.activeNavIdx].navSubs
      this.dataList = getDataList(this.activeNavIdx, this.activeNavSubIdx)
    },
    setBreadNav () {
      if (!this.activeNavIdx) {
        return
      }
      let navTitle = ` > ${NAVS[this.activeNavIdx].nav.CH}`
      let navSubTitle = ''
      if (NAVS[this.activeNavIdx].navSubs) {
        navSubTitle = ` > ${NAVS[this.activeNavIdx].navSubs[this.activeNavSubIdx]}`
      }
      return navTitle + navSubTitle
    }
  },
  watch: {
    'handleNavChange': {
      handler () {
        this.setDataList()
      },
      immediate: true // 当页面刷新（第一次绑定时），也将调用“数据更新函数”
    }
  }
}
</script>

<style src='./Content.styl' lang="stylus"></style>
