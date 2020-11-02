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
  position: relative;
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
  @mixin activate-leaf($duration, $delay) {
    @keyframes leaf-frames {
      0% {
        content: url("../../assets/green-leaf.png");
      }
      25% {
        content: url("../../assets/black-leaf.png");
      }
    }

    animation: $duration leaf-frames infinite $delay * 1;
  }

  $duration: 4s;
  $lDelay: $duration / $numberOfLeaves;
  $baseLeafRotationAngle: 11deg;

  height: 100%;
  transform: rotate(10deg);
  content: url("../../assets/black-leaf.png");

  &.n {
    transform: rotate($baseLeafRotationAngle);
    @include activate-leaf($duration, 0s);
  }

  &.ne {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 1));
    @include activate-leaf($duration, ($lDelay * 1));
  }

  &.e {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 2));
    @include activate-leaf($duration, ($lDelay * 2));
  }

  &.se {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 3));
    @include activate-leaf($duration, ($lDelay * 3));
  }

  &.s {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 4));
    @include activate-leaf($duration, ($lDelay * 4));
  }

  &.sw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 5));
    @include activate-leaf($duration, ($lDelay * 5));
  }

  &.w {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 6));
    @include activate-leaf($duration, ($lDelay * 6));
  }

  &.nw {
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 7));
    @include activate-leaf($duration, ($lDelay * 7));
  }
}
</style>
