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
  height: calc(100vh - 202px);
}
</style>
