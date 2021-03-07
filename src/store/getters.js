import { sortBy } from "lodash";

export default {
  selectedTrees: state => {
    const filteredTrees = state.trees.filter(t => {
      return state.selectedFilter.length && state.selectedFilter !== "All"
        ? t.tag === state.selectedFilter
        : t;
    });

    return state.selectedSort
      ? sortBy(filteredTrees, state.selectedSort)
      : filteredTrees;
  },

  treeTags: state => {
    return [...new Set(state.treeTags.map(t => t.tag))];
  },

  tagColorMap: (state, getters) => {
    const map = {};

    getters?.treeTypes?.forEach((tag, index) => {
      map[tag] = state.colorPalette[index % state.colorPalette.length];
    });

    return map;
  },

  userTags: state =>
    state.trees.reduce((acc, cur) => {
      acc[cur.id] = cur.userTags.split(" ");

      return acc;
    }, {})
};
