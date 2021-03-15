<template>
  <div class="tree-nav">
    <b-navbar class="navbar" type="dark" variant="dark">
      <b-navbar-brand>PNW trees</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button
          class="refetch-btn"
          :style="[buttonStyle]"
          size="sm"
          @click="fetchTrees"
        >
          <BIconArrowClockwise v-if="loading" rotate="315" animation="spin" />
          <span v-else>Fetch Trees</span>
        </b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar class="subnav" :style="buttonStyle">
      <b-button-group size="sm">
        <b-button
          class="my-2 my-sm-0 no-shadow"
          :style="[buttonStyle]"
          size="sm"
          variant="outline-info"
          :pressed="selectedView === 'card'"
          @click="changeView('card')"
          >Cards</b-button
        >
        <b-button
          class="my-2 my-sm-0 no-shadow"
          :style="[buttonStyle]"
          size="sm"
          :pressed="selectedView === 'table'"
          @click="changeView('table')"
          >Table</b-button
        >
      </b-button-group>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Sort" right>
          <b-dropdown-item
            v-for="(name, index) in sortingOptions"
            :key="index"
            @click="sortDisplayRows(name)"
            >{{ startCase(name) }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Filter" right>
          <b-dropdown-item
            v-for="(option, index) in filterOptions"
            :key="index"
            @click="applyFilter(option)"
            >{{ startCase(option) }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { startCase } from "lodash";
import { mapState, mapGetters, mapActions } from "vuex";
import { BIconArrowClockwise } from "bootstrap-vue";

export default {
  components: {
    BIconArrowClockwise
  },

  data() {
    return {
      buttonColor: "#448b27"
    };
  },

  computed: {
    ...mapGetters(["treeTags"]),
    ...mapState([
      "colors",
      "treeTags",
      "selectedView",
      "sortingOptions",
      "loading"
    ]),

    filterOptions() {
      return ["All", ...this.treeTags];
    },

    buttonStyle() {
      const hex = this.colors.primary.forest;

      return {
        "background-color": hex,
        borderColor: hex,
        color: "white"
      };
    },

    subNavStyle() {
      const hex = this.colors.primary.forest;

      return {
        "background-color": hex,
        borderColor: hex
      };
    }
  },

  methods: {
    startCase,

    ...mapActions([
      "fetchTrees",
      "changeView",
      "applyFilter",
      "sortDisplayRows"
    ])
  }
};
</script>

<style lang="scss" scoped>
.tree-nav {
  position: sticky;
  top: 0;
  z-index: 3000;
}

.navbar {
  height: 45px;
}

.subnav {
  height: 31px;
}

.no-shadow {
  box-shadow: none !important;
}

.refetch-btn {
  width: 90px;
}
</style>
