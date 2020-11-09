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
    @keyframes fill-leaf {
      0% {
        content: url("../../assets/black-leaf.png");
      }
      100% {
        content: url("../../assets/green-leaf.png");
      }
    }

    @keyframes empty-leaf {
      0% {
        content: url("../../assets/green-leaf.png");
      }
      100% {
        content: url("../../assets/black-leaf.png");
      }
    }

    animation-name: fill-leaf, empty-leaf;
    animation-fill-mode: forwards;
    animation-duration: $duration;
    animation-direction: alternate;
    animation-delay: $delay, $duration + $delay;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  $duration: 1.5s;
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
    $delay: $lDelay;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 1));
    @include activate-leaf($duration, $delay);
  }

  &.e {
    $delay: $lDelay * 2;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 2));
    @include activate-leaf($duration, $delay);
  }

  &.se {
    $delay: $lDelay * 3;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 3));
    @include activate-leaf($duration, $delay);
  }

  &.s {
    $delay: $lDelay * 4;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 4));
    @include activate-leaf($duration, $delay);
  }

  &.sw {
    $delay: $lDelay * 5;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 5));
    @include activate-leaf($duration, $delay);
  }

  &.w {
    $delay: $lDelay * 6;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 6));
    @include activate-leaf($duration, $delay);
  }

  &.nw {
    $delay: $lDelay * 7;
    transform: rotate($baseLeafRotationAngle + ($baseAngle * 7));
    @include activate-leaf($duration, $delay);
  }
}
</style>
