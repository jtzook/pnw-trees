<template>
  <div class="container">
    <div class="leaf-compass">
      <div
        v-for="direction in compassDirections"
        :key="direction"
        :class="['leaf', direction]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compassDirections: ["n", "ne", "e", "se", "s", "sw", "w", "nw"]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 250px;
  width: 250px;
  border: 1px solid black;
}

.leaf-compass {
  $numLeaves: 8;

  .leaf {
    display: block;
    position: absolute;
    top: 21em;
    left: 13.5em;
    height: 6em;

    $angle: (360 / $numLeaves);
    $rotationDeg: 0;

    content: url("../../assets/black-leaf.png");

    @for $i from 1 through $numLeaves {
      &:nth-of-type(#{$i}) {
        transform: rotate($rotationDeg * 1deg)
          translate(5em)
          rotate($rotationDeg * -1deg);
      }

      $rotationDeg: $rotationDeg + $angle;
    }
  }
}
</style>