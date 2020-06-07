<template>
  <div class="resume">
    <Summary />
  </div>
</template>

<script>
import Summary from '../components/Summary.vue'

export default {
  name: 'Resume',
  components: {
    Summary
  }
}
</script>

<style lang="scss">
.resume {
  max-height: 100vh;
  height: 100%;
  overflow: auto;
}
</style>