<template>
  <div>
    <b-navbar
      fixed
      type="dark"
      variant="dark"
      style="height: 60px"
    >
      <b-navbar-brand>PNW trees</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button-group>
          <b-button
            class="my-2 my-sm-0"
            variant="info"
            :pressed="selectedView ==='card'"
            @click="changeView('card')"
          >Cards</b-button>
          <b-button
            class="my-2 my-sm-0"
            variant="info"
            :pressed="selectedView ==='table'"
            @click="changeView('table')"
          >Table</b-button>
        </b-button-group>
        <b-button
          @click="fetchTrees"
          variant="outline-info"
          style="margin-left: 20px"
        >Fetch More Trees</b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-navbar
      fixed
      type="dark"
      variant="info"
      style="height: 40px"
    >
      <span>{{ selectedView }} view</span>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown
          text="Sort"
          right
        >
          <b-dropdown-item
            v-for="(name, index) in sortingOptions"
            :key="index"
            @click="sortDisplayRows(name)"
          >{{ startCase(name) }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          text="Filter"
          right
        >
          <b-dropdown-item
            v-for="(option, index) in filterOptions"
            :key="index"
            @click="applyFilter(option)"
          >{{ startCase(option) }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { startCase } from "lodash";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["treeTypes", "selectedView", "sortingOptions"]),

    ...mapGetters(["treeTags"]),

    filterOptions() {
      return ["All", ...this.treeTags];
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

    // sortDisplayRows(selection) {
    //   this.$store.dispatch("sortDisplayRows", selection);
    // }
  }
};
</script>