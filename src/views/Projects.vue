<template>
  <div class="projects">
    <Carousel />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Projects',
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
.projects {
  height: calc(100vh - 400px);
}
</style>