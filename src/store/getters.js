export default {
  treeTags: (state) => {
    return [...new Set(state.treeTypes.map((t) => t.tag))];
  },

  tagColorMap: (state, getters) => {
    const map = {};

    getters?.treeTags?.forEach((tag, index) => {
      map[tag] = state.colorPalette[index % state.colorPalette.length];
    });

    return map;
  },
};
