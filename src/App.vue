<template>
  <div id="app">
    <NavBar />

    <div
      :class="[
        'py-4',
        'content',
        'd-flex',
        'justify-content-center',
        { loading: loading }
      ]"
    >
      <b-overlay :show="loading" :opacity="0.75" blur="1px">
        <CardView v-if="selectedView === 'card'" />
        <TableView v-else />
        <template #overlay>
          <LoadingAnimation class="align-self-center" />
        </template>
      </b-overlay>
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
  color: #2c3e50;
  height: 100vh;
}
</style>

<style lang="scss" scoped>
.page-heading {
  margin: 20px 0;
}

.content {
  // subtracting height of navbars
  height: calc(100% - 76px);

  &.loading {
    overflow: hidden;
  }
}
</style>
