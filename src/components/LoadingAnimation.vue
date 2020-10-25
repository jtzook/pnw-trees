<template>
  <div class="container">
    <div v-for="(leaf, index) in 8" :key="index" class="leaf"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  $numLeaves: 8;

  height: 400px;
  width: 400px;
  border: 1px solid black;
  position: relative;

  .leaf {
    display: block;
    position: absolute;
    top: 8.45em;
    left: 10.45em;

    $angle: (360 / $numLeaves);
    $rotationDeg: 0;

    @for $i from 1 through $numLeaves {
      &:nth-of-type(#{$i}) {
        transform: rotate($rotationDeg * 1deg)
          translate(8.5em)
          rotate($rotationDeg * -1deg)
          rotate(($angle * $i) * 1deg + 10deg)
          rotate(405deg);
      }

      $rotationDeg: $rotationDeg + $angle;
    }
  }

  .leaf {
    height: 8em;
    content: url("../../assets/black-leaf.png");

    &.active {
      content: url("../../assets/green-leaf.png");
    }
  }
}
</style>