<template>
  <div class="spinner-container">
    <div class="spinner-content">
      <img src="/spinner.gif" alt="spinner" srcset="">
    </div>
  </div>
</template>

<style lang="scss">
.spinner-container {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.spinner-content {
  text-align: center;
  margin: auto;
  margin-top: 40%;
}
</style>
