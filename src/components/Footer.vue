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
    height: 120px;
    
    .image-footer {
      left: 0px;
      position: absolute;
    }
  }

  @media (min-width: 1024px) {
    .footer {
      height: 202px;
    }
  }
</style>
