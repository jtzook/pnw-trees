<template>
  <div id="app">
    <NavBar />

    <b-row class="page-heading justify-content-center">
      <b-col cols="10">
        <h1>Trees</h1>
        <hr style="background-color: black" />
      </b-col>
    </b-row>

    <div class="text-center">
      <CardView v-if="selectedView === 'card'" />
      <TableView v-else />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import NavBar from "./components/NavBar.vue";
import CardView from "./components/CardView.vue";
import TableView from "./components/TableView.vue";

export default {
  name: "App",

  components: {
    NavBar,
    CardView,
    TableView
  },

  computed: {
    ...mapState(["selectedView"]),

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

.tag {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
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
