<template>
  <div class="projects">
    <Cards />
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'

export default {
  name: 'Projects',
  components: {
    Cards
  }
}
</script>

<style lang="scss">
.projects {
  height: calc(100vh - 400px);
}
</style>