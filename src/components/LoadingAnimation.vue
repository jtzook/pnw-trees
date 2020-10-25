<template>
  <div class="leaf-container">
    <div
      v-for="direction in compassDirections"
      :key="direction"
      class="leaf-node"
    >
      <div :class="['leaf', direction]"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compassDirections: ["e", "se", "s", "sw", "w", "nw", "n", "ne"]
    };
  }
};
</script>

<style lang="scss" scoped>
.leaf-container {
  height: 250px;
  width: 250px;
  border: 1px solid black;
}

.leaf-node {
  display: block;
  position: absolute;
  top: 50%;
  left: 47.25%;
  height: 15%;

  $angle: 45;
  $rotationDeg: 0;

  @for $i from 1 through 8 {
    &:nth-of-type(#{$i}) {
      transform: rotate($rotationDeg * 1deg)
        translate(150%)
        rotate($rotationDeg * -1deg);
    }

    $rotationDeg: $rotationDeg + $angle;
  }

  .leaf {
    $baseRotationAngle: 11deg;

    height: 100%;
    transform: rotate(10deg);
    content: url("../../assets/black-leaf.png");

    &.n {
      transform: rotate($baseRotationAngle);
    }

    &.ne {
      transform: rotate($baseRotationAngle + $angle);
    }

    &.e {
      transform: rotate($baseRotationAngle + ($angle * 2));
    }

    &.se {
      transform: rotate($baseRotationAngle + ($angle * 3));
    }

    &.s {
      transform: rotate($baseRotationAngle + ($angle * 4));
    }

    &.sw {
      transform: rotate($baseRotationAngle + ($angle * 5));
    }

    &.w {
      transform: rotate($baseRotationAngle + ($angle * 6));
    }

    &.nw {
      transform: rotate($baseRotationAngle + ($angle * 7));
    }
  }
}
</style>