<template>
  <div id="app">
    <NavBar />

    <div class="content d-flex justify-content-center">
      <LoadingAnimation class="align-self-center" />
      <!-- <div v-show="!loading" class="py-4">
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
  height: 100vh;
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

<style lang="scss" scoped>
.page-heading {
  margin: 20px 0;
}

.content {
  height: calc(100% - 100px);
}
</style>
