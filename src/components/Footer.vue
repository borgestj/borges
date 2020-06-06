<template>
  <div class="footer">
    <img class="image-footer" src="@/assets/image/footer.png">
  </div>
</template>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    
    .image-footer {
      left: 0px;
      position: absolute;
    }
  }

  @media (min-width: 1024px) {
    .footer {
      left: 0px;
      position: fixed;
      max-height: 100px;
      height: 100%;
      width: 100%;
      bottom: 0;

      .image-footer {
        left: 0px;
        position: absolute;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
