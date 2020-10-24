<template>
  <div id="app">
    <NavBar />

    <div class="text-center py-4">
      <LoadingAnimation />
      <!-- <LoadingAnimation v-show="loading" />
      <div v-show="!loading">
        <CardView v-if="selectedView === 'card'" />
        <TableView v-else />
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import NavBar from "./components/NavBar.vue";
import CardView from "./components/CardView.vue";
import TableView from "./components/TableView.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";

export default {
  name: "App",

  /* eslint-disable vue/no-unused-components */

  components: {
    NavBar,
    CardView,
    TableView,
    LoadingAnimation
  },

  computed: {
    ...mapState(["selectedView", "loading"]),

    ...mapGetters(["treeTags"])
  },

  methods: {
    ...mapActions(["fetchTrees"])
  },

  created() {
    this.fetchTrees();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

<style scoped>
.page-heading {
  margin: 20px 0;
}
</style>
