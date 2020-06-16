<template>
  <div class="footer">
    <img class="image-footer" src="@/assets/image/footer.png">
    <div class="created">
      <strong>Created and developed by <a href="https://github.com/borgestj" target=”_blank” rel=”noopener noreferrer”>me</a></strong>
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 70px;
    height: 100%;

    .image-footer {
      left: 0px;
      position: absolute;
      max-width: 1024px;
      width: 90%;
      height: 100%;
    }

    .created {
      background: transparent;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: absolute;
      left: 15px;
      bottom: 15px;
      
      strong {
        background: transparent;
      }
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
