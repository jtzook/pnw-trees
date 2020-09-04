<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="10">
        <b-card-group columns>
          <TreeCard v-for="tree in selectedTrees" :key="tree.id" :tree="tree" />
        </b-card-group>
      </b-col>
    </b-row>
  </div>
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