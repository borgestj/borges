<template>
  <div class="home">
    <Who />
  </div>
</template>

<script>
import Who from '../components/Who.vue'

export default {
  name: 'Home',
  components: {
    Who
  }
}
</script>

<style lang="scss">
.home {
  max-height: 100vh;
  height: 100%;
}
</style>
