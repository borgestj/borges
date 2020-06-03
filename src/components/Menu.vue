<template>
  <div id="menu">
      <img class="image-menu" src="@/assets/image/header.png">
      <button class="btn-menu">
          <img src="@/assets/image/menu.svg">
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #menu {
        position: relative;

        .image-menu {
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
        }

        .btn-menu {
            position: absolute;
            width: 55px;
            height: 45px;
            top: 30px;
            right: 30px;
            z-index: 999;
            background: #000;
            box-shadow: 3px 3px 5px #000, -3px -3px 5px #252525;
            border-radius: 12px;
        }

    }

    @media (min-width: 1024px) {
        #menu {
            .image-menu {
                width: unset;
            }

            .btn-menu {
                width: 75px;
                height: 65px;
                top: 60px;
                right: 120px;
                
                &:hover {
                    box-shadow: inset 3px 3px 5px #000, inset -3px -3px 5px #252525;
                    transform: scale(.98);
                }
            }
        }
    }

</style>