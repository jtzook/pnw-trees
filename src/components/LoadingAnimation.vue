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
$numberOfLeaves: 8;

.leaf-container {
  height: $size;
  width: $size;
  border: 1px solid black;
  position: relative;
}

@keyframes activate {
  0% {
    content: url("../../assets/green-leaf.png");
  }
  25% {
    content: url("../../assets/black-leaf.png");
  }
  // 100% {
  //   content: url("../../assets/black-leaf.png");
  // }
}

.leaf-node {
  height: 40%;
  display: block;

  position: absolute;
  top: 30%;
  left: 40%;

  $rotationAngle: 0;

  @for $i from 1 through $numberOfLeaves {
    &:nth-of-type(#{$i}) {
      transform: rotate($rotationAngle * 1deg)
        translate(150%)
        rotate($rotationAngle * -1deg);
    }

    $rotationAngle: $rotationAngle + $baseAngle;
  }
}

.leaf {
  $duration: 4s;
  $lDelay: $duration / $numberOfLeaves;
  $baseLeafRotationAngle: 11deg;

  height: 100%;
  transform: rotate(10deg);
  content: url("../../assets/black-leaf.png");

  &.n {
    transform: rotate($baseLeafRotationAngle);
    animation: $duration activate infinite $lDelay;
  }

  &.ne {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 1));
    animation: $duration activate infinite ($lDelay * 2);
  }

  &.e {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 2));
    animation: $duration activate infinite ($lDelay * 3);
  }

  &.se {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 3));
    animation: $duration activate infinite ($lDelay * 4);
  }

  &.s {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 4));
    animation: $duration activate infinite ($lDelay * 5);
  }

  &.sw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 5));
    animation: $duration activate infinite ($lDelay * 6);
  }

  &.w {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 6));
    animation: $duration activate infinite ($lDelay * 7);
  }

  &.nw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 7));
    animation: $duration activate infinite ($lDelay * 8);
  }
}
</style>