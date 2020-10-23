// import state from "./state";

export default {
  FETCH_TREES(state) {
    state.loading = true;
    state.trees = [];
    state.selectedSort = "";
    state.selectedFilter = "";
    state.fetchError = null;
  },

  FETCH_TREES_SUCCESS(state, trees) {
    state.trees = trees;
    state.loading = false;
  },

  FETCH_TREES_FAILURE(state, error) {
    state.fetchError = error;
    state.loading = false;
  },

  SET_VIEW(state, selection) {
    state.selectedView = selection;
  },

  SET_FILTER(state, selection) {
    state.selectedFilter = selection;
  },

  SET_SORT(state, selection) {
    state.selectedSort = selection;
  }
};
