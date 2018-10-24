<template>
  <div id="content">
    <div class="position-nav">{{
      `当前位置： 首页 > ${this.$route.params.nav} > ${this.$route.params.navSub}`
    }}</div>
    <div class="left-nav"></div>
    <div class="main"></div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  // mounted () {
  //   this.$store.dispatch('watchDomScroll')
  // }
  watch: {
    '$route': function () {
      console.log('当前位置：', `${this.$route.params.nav} > ${this.$route.params.navSub}`)
    }
  }
}
</script>

<style src='./Content.styl' lang="stylus"></style>
