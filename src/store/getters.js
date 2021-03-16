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

  treeTags: state => [...new Set(state.treeTagMap.map(t => t.tag))],

  tagColorMap: (state, getters) => {
    const tags = getters.treeTags;
    const hexVals = Object.values(state.colors.primary);

    return tags.reduce((acc, tag, idx) => {
      acc[tag] = hexVals[idx % hexVals.length];

      return acc;
    }, {});
  },

  userTags: state =>
    state.trees.reduce((acc, cur) => {
      acc[cur.id] = cur.userTags.split(" ");

      return acc;
    }, {})
};
