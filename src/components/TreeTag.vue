<template>
  <div class="tree-tag" :style="{ 'background-color': tagColorMap[tag] }">
    {{ tag }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    tag: {
      required: true,
      type: String
    }
  },

  computed: {
    ...mapGetters(["tagColorMap"])
  }
};
</script>

<style lang="scss" scoped>
.tree-tag {
  color: white;
  display: inline-block;
  padding: 0.3em 0.8em;
  font-size: 80%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>
