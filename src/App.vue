<template>
  <div id="app">
    <NavBar />

    <b-row class="page-heading justify-content-center">
      <b-col cols="10">
        <h1>Trees</h1>
        <hr style="background-color: black">
      </b-col>
    </b-row>

    <div v-if="selectedView === 'card'">
      <CardView />
    </div>
    <div v-else>
      <TableView />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

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

    ...mapGetters(["tagColorMap"])
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
</style>

<style scoped>
.page-heading {
  margin: 30px 0;
}
</style>
