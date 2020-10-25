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
$baseAngle: 45;

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

  $rotationAngle: 0;

  @for $i from 1 through 8 {
    &:nth-of-type(#{$i}) {
      transform: rotate($rotationAngle * 1deg)
        translate(150%)
        rotate($rotationAngle * -1deg);
    }

    $rotationAngle: $rotationAngle + $baseAngle;
  }
}

.leaf {
  $baseLeafRotationAngle: 11deg;

  height: 100%;
  transform: rotate(10deg);
  content: url("../../assets/black-leaf.png");

  &.active {
    content: url("../../assets/green-leaf.png");
  }

  &.n {
    transform: rotate($baseLeafRotationAngle);
  }

  &.ne {
    transform: rotate($baseLeafRotationAngle + $baseAngle);
  }

  &.e {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 2));
  }

  &.se {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 3));
  }

  &.s {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 4));
  }

  &.sw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 5));
  }

  &.w {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 6));
  }

  &.nw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 7));
  }
}
</style>