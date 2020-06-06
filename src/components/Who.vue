<template>
  <div class="name">
    <div class="container">
        <b-button to="/projects" class="vertical-button">Projects</b-button>
        <p class="fist-name">Roberto</p>
        <strong class="last-name">Borges</strong>
        <p class="develop">Develop Front-End</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.name {
  width: 100%;
  min-height: 300px;
  position: relative;
  background-color: #000;
  display: flex;

  .vertical-button {
    width: 150px;
    position: absolute;
    top: 24%;
    left: -35px;
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

    .fist-name {
      font-size: 45pt;
      color: #fff;
      margin: 0;
    }

    .last-name {
      font-size: 51pt;
      color: #A6134A;
      margin-left: 90px;
    }

    .develop {
        font-size: 16pt;
        color: #fff;
        margin-top: 20px;
        margin-left: 50px;
    }
  }
}

@media (min-width: 1024px) {
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
    margin-left: 70px;
  }
}
</style>