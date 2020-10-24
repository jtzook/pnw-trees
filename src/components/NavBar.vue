<template>
  <div>
    <b-navbar fixed type="dark" variant="dark" style="height: 60px">
      <b-navbar-brand>PNW trees</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button-group>
          <b-button
            class="my-2 my-sm-0"
            variant="info"
            :pressed="selectedView === 'card'"
            @click="changeView('card')"
            >Cards</b-button
          >
          <b-button
            class="my-2 my-sm-0"
            variant="info"
            :pressed="selectedView === 'table'"
            @click="changeView('table')"
            >Table</b-button
          >
        </b-button-group>
        <b-button
          @click="fetchTrees"
          variant="outline-info"
          :style="refetchButton"
        >
          <BIconArrowClockwise v-if="loading" rotate="315" animation="spin" />
          <BIconArrowClockwise v-else rotate="315" />
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-navbar fixed type="dark" variant="info" style="height: 40px">
      <span>{{ selectedView }} view</span>
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
      refetchButton: {
        width: "38px",
        display: "flex",
        padding: "8.5px 0 0",
        "justify-content": "center",
        "margin-left": "10px"
      }
    };
  },

  computed: {
    ...mapGetters(["treeTags"]),
    ...mapState(["treeTypes", "selectedView", "sortingOptions", "loading"]),

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
  }
};
</script>
