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
$size: 200px;

.leaf-container {
  height: $size;
  width: $size;
  border: 1px solid black;
  position: relative;
}

.leaf-node {
  height: 40%;
  display: block;

  position: absolute;
  top: 30%;
  left: 40%;

  $rotationDeg: 0;

  @for $i from 1 through 8 {
    &:nth-of-type(#{$i}) {
      transform: rotate($rotationDeg * 1deg)
        translate(150%)
        rotate($rotationDeg * -1deg);
    }

    $rotationDeg: $rotationDeg + 45;
  }
}

.leaf {
  $angle: 45deg;
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
</style>