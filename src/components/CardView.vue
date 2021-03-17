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
import { mapState, mapGetters, mapActions } from "vuex";

import TreeCard from "./TreeCard";

export default {
  name: "CardView",

  components: {
    TreeCard
  },

  data() {
    return {
      lazyLoadFetches: 1
    };
  },

  computed: {
    ...mapState(["treeTagMappings"]),

    ...mapGetters(["selectedTrees"])
  },

  methods: {
    ...mapActions(["fetchTrees"]),

    onScroll({
      target: {
        scrollingElement: { scrollTop, clientHeight, scrollHeight }
      }
    }) {
      const preemptionValue = 500;

      // hitting the bottom of the page
      if (scrollTop + clientHeight + preemptionValue >= scrollHeight) {
        this.lazyLoadFetches += 1;

        if (!this.loading) {
          this.fetchTrees(this.lazyLoadFetches);
        }
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
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
