export default {
  FETCH_TREES(state, pageNumber) {
    state.loading = true;
    state.apiPageNumber = pageNumber;
    state.selectedSort = "";
    state.selectedFilter = "";
    state.fetchError = null;
  },

  FETCH_TREES_SUCCESS(state, trees, lazy = false) {
    if (!lazy) {
      state.trees = trees;
    } else {
      state.trees = [...state.trees, trees];
    }

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
