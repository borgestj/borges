<template>
  <div id="app">
    <Menu />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Footer,
    Menu
  }
}
</script>

<style lang="scss">

* {
  padding:0;
  margin:0;
  background: #151515;
}

#app {
  font-family: 'Exo 2', sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  color: #2c3e50;
}

</style>
