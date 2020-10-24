<template>
  <div class="container">
    <div class="leaf"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px;
  height: 400px;
  width: 400px;
  border: 1px solid black;

  .leaf {
    height: 25%;
    widows: 25%;

    content: url("../../assets/black-leaf.png");

    &.active {
      content: url("../../assets/green-leaf.png");
    }
  }
}
</style>