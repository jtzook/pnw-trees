/* eslint-disable */

import axios from "axios";
import { get } from "lodash";
import config from "../../config";

export default {
  fetchTrees: async ({ state, commit }) => {
    commit("FETCHING_TREES");

    try {
      // https://www.flickr.com/services/api/flickr.photos.search.html

      const promises = [];

      state.treeTypes.map((tree) =>
        promises.push(
          axios({
            method: "get",
            url: "https://api.flickr.com/services/rest",
            params: {
              method: "flickr.photos.search",
              api_key: config.api_key,
              tags: tree.tag,
              extras: "url_n, date_taken, tags",
              page: 1,
              per_page: 1,
              format: "json",
              nojsoncallback: 1,
              safe_search: true,
              // sort: "relevance",
              min_taken_date: new Date("2000-01-01"),
              content_type: 1, // photos only
              geo_context: 2, // outdoors
              // seattle-ish
              // lat: 47.000499,
              // long: -122.003108,
              // radius: 200, // miles
            },
          })
        )
      );

      const results = await Promise.all(promises);

      const trees = [];

      if (results) {
        results.map((result, index) => {
          const photoArray = get(result, "data.photos.photo", []);

          if (photoArray.length) {
            photoArray.map((p) => {
              trees.push({
                name: state.treeTypes[index].name,
                tag: state.treeTypes[index].tag,
                title: p.title,
                extraTags: p.tags,
                timeStamp: p.datetaken,
                imgUrl: p.url_n,
              });
            });
          }
        });
      }

      commit("FETCH_TREES_SUCCESS", trees);
    } catch (e) {
      commit("FETCH_TREES_FAILURE", e);
    }
  },

  getTagColor: ({ state, getters }, tag) => {
    const tagIndex = getters.treeTags.indexOf(tag);

    return state.colorPalette[tagIndex % state.colorPalette.length];
  },

  applyFilter: ({ commit }, selection) => {
    commit("SET_FILTER", selection);
  },

  changeView: ({ commit }, selection) => commit("SET_VIEW", selection),

  sortDisplayRows: ({ commit }, selection) => {
    commit("SET_SORT", selection);
  },
};
