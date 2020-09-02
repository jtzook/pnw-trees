<template>
  <div class="nav-bar">
    <b-navbar
      fixed
      type="dark"
      variant="dark"
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
      </b-navbar-nav>
    </b-navbar>
    <b-navbar
      fixed
      type="dark"
      variant="info"
    >
      <span>{{ selectedView }} view</span>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown
          text="Sort By"
          right
        >
          <b-dropdown-item
            v-for="(name, index) in sortingOptions"
            :key="index"
            @click="sortDisplayRows(name)"
          >{{ name }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          text="Type"
          right
        >
          <b-dropdown-item
            v-for="(option, index) in filterOptions"
            :key="index"
            @click="applyFilter(option)"
          >{{ type }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["treeTypes", "selectedView", "sortingOptions"]),

    filterOptions() {
      return [...this.treeTypes, "All"];
    }
  },
  methods: {
    ...mapActions(["changeView", "applyFilter", "sortDisplayRows"])

    // sortDisplayRows(selection) {
    //   this.$store.dispatch("sortDisplayRows", selection);
    // }
  }
};
</script>

<style scoped>
.nav-bar {
  margin-bottom: 20px;
}
</style>