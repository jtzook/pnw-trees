<template>
  <ul class="container">
    <li v-for="(leaf, index) in 8" :key="index" class="leaf"></li>
  </ul>
</template>

<style lang="scss" scoped>
@mixin tree-circle($item-count, $circle-size) {
  position: relative;
  width: $circle-size;
  height: $circle-size;
  padding: 0;

  $numTrees: 8;

  li {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -3em -1.5em;
    height: 25%;

    $angle: (360 / $numTrees);
    $rotationDeg: 0;

    @for $i from 1 through $numTrees {
      &:nth-of-type(#{$i}) {
        transform: rotate($rotationDeg * 1deg)
          translate(9em)
          rotate($rotationDeg * -1deg);
      }

      $rotationDeg: $rotationDeg + $angle;
    }
  }
}

.container {
  @include tree-circle($item-count: 8, $circle-size: 20em);

  padding: 20px;
  height: 400px;
  width: 400px;
  border: 1px solid black;

  .leaf {
    content: url("../../assets/black-leaf.png");

    &.active {
      content: url("../../assets/green-leaf.png");
    }
  }
}
</style>