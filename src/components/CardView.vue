<template>
  <b-row class="justify-content-center" no-gutters>
    <b-col cols="10">
      <b-card-group columns>
        <TreeCard v-for="tree in selectedTrees" :key="tree.id" :tree="tree" />
      </b-card-group>
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
    ...mapState(["treeTypes"]),

    ...mapGetters(["selectedTrees"])
  }
};
</script>
