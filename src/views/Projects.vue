<template>
  <div class="projects">
    <h1>Projects</h1>
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
  padding: 10px 5% 40px 5%;
  margin-bottom: 70px;
  max-height: 100vh;
  height: 100%;
  overflow: auto;

  h1 {
    max-width: 1200px;
    font-size: 40pt;
    width: 100%;
    margin: 10px auto;
    color: #fff;
  }

}
</style>