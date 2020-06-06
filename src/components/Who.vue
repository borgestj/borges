<template>
  <transition name="fade">
    <div class="name">
        <div class="container">
            <b-button to="/projects" class="vertical-button">Projects</b-button>
            <h2>Roberto<br>
              <strong class="last-name">Borges</strong>
            </h2>
            <p class="develop">Develop Front-End</p>
            <p class="about_paragraph">
              Analyzing, understanding the problem, and prioritizing what is most important when developing quality code provides efficiency and agility in creating a project.
            </p>
        </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 8s;
}

.name {
  width: 100%;
  min-height: 300px;
  position: relative;
  display: flex;


  .vertical-button {
    width: 150px;
    position: absolute;
    top: 24%;
    left: -23px;
    transform: rotate(-90deg);
    border: none;
    border-radius: 15px;
    padding: 15px 40px;
    color: #A6134A;
    background-color: #151515;
    box-shadow: 3px 3px 5px #000, -3px -3px 5px #252525;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 20px 0;

    h2 {
      font-size: 45pt;
      color: #fff;
      margin: 0;
      line-height: 1.1;
      
      .last-name {
        font-size: 51pt;
        color: #A6134A;
        margin-left: 90px;
      }
    }

    .develop {
        font-size: 16pt;
        color: #fff;
        margin-top: 20px;
        margin-left: 50px;
    }

    .about_paragraph {
      max-width: 510px;
      width: 100%;
      font-size: 19pt;
      text-align: left;
      color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}

@media (min-width: 1024px) {
  .name {
    .vertical-button {
        &:hover {
          color: #A6134A !important;
          background-color: #151515 !important;
          border: none !important;
          box-shadow: inset 3px 3px 5px #000, inset -3px -3px 5px #252525;
          transform: otate(-90deg), scale(.98);
      }
    }

    .container {
      text-align: start;
      margin: 20px 0 20px 100px;
    }
  }
}
</style>