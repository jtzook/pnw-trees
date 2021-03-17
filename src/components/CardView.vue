<template>
  <b-row class="justify-content-center" no-gutters>
    <b-col cols="10">
      <div class="flex-grid">
        <TreeCard
          class="flex-card"
          v-for="tree in selectedTrees"
          :key="tree.id"
          :tree="tree"
        />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import TreeCard from "./TreeCard";

export default {
  name: "CardView",

  components: {
    TreeCard
  },

  computed: {
    ...mapState(["treeTagMappings"]),

    ...mapGetters(["selectedTrees"])
  }
};
</script>

<style lang="scss" scoped>
.flex-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.flex-card {
  flex: 1 0 25%;
}
</style>
