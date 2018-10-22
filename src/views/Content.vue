<template>
  <div id="content">
    {{`${this.$route.params.nav} >> ${this.$route.params.navSub}`}}
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
