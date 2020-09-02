// import state from "./state";

export default {
  FETCHING_TREES(state) {
    state.loading = true;
    state.fetchError = null;
  },

  FETCH_TREE_SUCCESS(state, trees) {
    state.trees = trees;
    state.loading = false;
  },

  FETCH_TREE_FAILURE(state, error) {
    state.fetchError = error;
    state.loading = false;
  },
};
