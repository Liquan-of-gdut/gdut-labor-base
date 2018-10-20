<template>
  <div id="app">
    <Navigator></Navigator>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigator, Footer
  }
  // mounted () {
  //   this.$store.dispatch('watchDomScroll')
  // }
}
</script>

<style src='./main.styl' lang="stylus"></style>
