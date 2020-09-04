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
import { mapState, mapActions, mapGetters } from "vuex";

import { TreeCard } from "./TreeCard";

export default {
  name: "CardView",

  computed: {
    ...mapState(["treeTypes"]),

    ...mapGetters(["selectedTrees"])
  },

  methods: {
    startCase
  }
};
</script>

<style scoped>
.tree-card {
  max-width: 20rem;
  max-height: 30rem;
  margin: 0 1em 2em 0;
}

.tree-card > img {
  object-fit: cover !important;
}

.tree-card > .card-body {
  overflow: hidden;
}
</style>