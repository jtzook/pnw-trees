<template>
  <div id="app">
    <NavBar />

    <div
      :class="[
        'py-4 content d-flex justify-content-center',
        { loading: loading }
      ]"
    >
      <b-overlay :show="loading && !trees.length" :opacity="0.75" blur="1px">
        <template #overlay>
          <LoadingAnimation class="align-self-center" />
        </template>
      </b-overlay>
      <div v-show="trees.length">
        <CardView v-if="selectedView === 'card'" />
        <TableView v-else />
      </div>
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

  data() {
    return {
      lazyLoadFetches: 1
    };
  },

  computed: {
    ...mapState(["trees", "selectedView", "loading", "apiPageNumber"]),

    ...mapGetters(["treeTags"])
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

  created() {
    this.fetchTrees();
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
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
