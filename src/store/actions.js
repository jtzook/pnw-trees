import axios from "axios";
import config from "../../config";

export default {
  fetchTrees: async ({ commit, getters }) => {
    commit("FETCHING_TREES");

    try {
      // https://www.flickr.com/services/api/flickr.photos.search.html

      const treeTags = getters.treeTags;

      const result = await axios({
        method: "get",
        url: "https://api.flickr.com/services/rest",
        params: {
          method: "flickr.photos.search",
          api_key: config.api_key,
          tags: treeTags,
          extras: "url_n, owner_name, date_taken, views, machine_tags",
          page: 1,
          per_page: 3,
          format: "json",
          nojsoncallback: 1,
          safe_search: true,
          sort: "relevance",
          min_taken_date: new Date("2000-01-01"),
          content_type: 1, // photos only
          geo_context: 2, // outdoors
          // seattle-ish
          // lat: 47.000499,
          // long: -122.003108,
          // radius: 200, // miles
        },
      });

      const photos = result?.data?.photos?.photo || [];

      commit("FETCH_TREE_SUCCESS", photos);
    } catch (e) {
      commit("FETCH_TREE_FAILURE", e);
    }
  },

  // applyFilter: ({ commit }, selection) => {},

  changeView: ({ commit }, selection) => commit("SET_VIEW", selection),

  // sortDisplayRows: ({ commit }, selection) => {},
};
