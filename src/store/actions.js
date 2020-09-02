import axios from "axios";
import config from "../../config";

export default {
  fetchTrees: async ({ commit }, tag) => {
    commit("FETCHING_TREES");

    try {
      const result = await axios({
        method: "get",
        url: "https://api.flickr.com/services/rest",
        params: {
          method: "flickr.photos.search",
          api_key: config.api_key,
          tags: tag,
          extras: "url_n, owner_name, date_taken, views",
          page: 1,
          format: "json",
          nojsoncallback: 1,
          per_page: 30,
        },
      });

      const photos = result?.data?.photos?.photo || [];

      commit("FETCH_TREE_SUCCESS", photos);
    } catch (e) {
      commit("FETCH_TREE_FAILURE", e);
    }
  },
};
