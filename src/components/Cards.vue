<template>
  <div class="cards">
    <div class="project-list">
      <hr class="line" />
      <strong class="title">Monster Killer</strong>
      <p class="about">Created using VueJs and JavaScript</p>
      <b-button
        href="https://github.com/borgestj/matador-de-monstros"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fab fa-github"></i>
        Source</b-button
      >
    </div>
    <div class="project-list">
      <hr class="line" />
      <strong class="title">Todo-list</strong>
      <p class="about">Created using VueJs with vue-cli and JavaScript</p>
      <b-button
        href="https://github.com/borgestj/todo-vue"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fab fa-github"></i>
        Source</b-button
      >
    </div>
    <div class="project-list">
      <hr class="line" />
      <strong class="title">Roberto Borges Website</strong>
      <p class="about">
        Created using VueJs with vue-cli, JavaScript and Bootstrap
      </p>
      <b-button
        href="https://github.com/borgestj/borges"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fab fa-github"></i>
        Source</b-button
      >
    </div>
    <div class="project-list">
      <hr class="line" />
      <strong class="title">Fácil Persianas</strong>
      <p class="about">Project using Magento 2, PHP and jQuery</p>
      <b-button
        href="https://www.facilpersianas.com.br"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="far fa-eye"></i>
        To view</b-button
      >
    </div>
    <div class="project-list">
      <hr class="line" />
      <strong class="title">Via Inox</strong>
      <p class="about">Project using Magento 2, PHP and jQuery</p>
      <b-button
        href="https://www.viainox.com"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="far fa-eye"></i>
        To view</b-button
      >
    </div>
    <div class="project-list">
      <hr class="line" />
      <strong class="title">B2C Uatt?</strong>
      <p class="about">
        Project using VueJs on the Front-end, consuming API. Responsible for
        creating new features.
      </p>
      <b-button
        href="https://www.uatt.com.br"
        class="list-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="far fa-eye"></i>
        To view</b-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cards {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  .project-list {
    margin-top: 10px;
    margin-bottom: 10px;

    .line {
      border-top: 1px solid #e5e5e5;
    }

    .title {
      font-size: 20pt;
      font-weight: 800;
      color: #fd468b;
      line-height: 1.4;
    }

    .about {
      font-size: 18pt;
      font-weight: 500;
      color: #fff;
    }

    .list-button {
      width: 150px;
      border: none;
      border-radius: 15px;
      padding: 12px 30px;
      color: #fd468b;
      background-color: #151515;
      box-shadow: 3px 3px 5px #000, -3px -3px 5px #252525;
    }
  }
}
@media (min-width: 1024px) {
  .list-button {
    &:hover {
      color: #a6134a !important;
      background-color: #151515 !important;
      border: none !important;
      box-shadow: inset 3px 3px 5px #000, inset -3px -3px 5px #252525;
      transform: scale(0.98);
    }
  }
}
</style>
