/* eslint-disable */

import axios from "axios";
import { get } from "lodash";
import config from "../../config/config";

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default {
  fetchTrees: async ({ state, getters, commit }, page = 1) => {
    commit("FETCH_TREES", page);

    // https://www.flickr.com/services/api/flickr.photos.search.html

    const treesByTag = getters.treeTags.map(tag =>
      state.treeTagMappings.filter(v => v.tag === tag)
    );

    const promises = [];

    treesByTag.map(treeTagData =>
      promises.push(
        axios({
          method: "get",
          url: "https://api.flickr.com/services/rest",
          params: {
            method: "flickr.photos.search",
            api_key: config.api_key,
            tags: [treeTagData[0].tag, "tree"],
            text: treeTagData[0].tag,
            page,
            per_page: 5,
            sort: "relevance",
            content_type: 1, // photos only
            geo_context: 2, // outdoors
            // seattle-ish
            lat: 47.000499,
            long: -122.003108,
            radius: 500, // miles
            format: "json",
            nojsoncallback: 1,
            extras: "url_n, date_taken, tags, description"
          }
        })
      )
    );

    let results;
    try {
      results = await Promise.all(promises);
    } catch (e) {
      commit("FETCH_TREES_FAILURE", e);
    }

    const trees = page === 1 ? [] : [...state?.trees];

    results?.map((result, index) => {
      const photoArray = get(result, "data.photos.photo", []);

      if (photoArray.length) {
        photoArray.map(p => {
          const treeIds = trees.map(t => t.id);

          if (p?.id && p?.tags && !treeIds.includes(p.id)) {
            const matchingTags = p.tags
              .split(" ")
              .filter(t => getters.treeTags.includes(t));

            trees.push({
              id: p.id,
              tag: matchingTags.length
                ? matchingTags[0]
                : state.treeTagMappings[index].tag,
              title: p.title,
              userTags: p.tags,
              timeStamp: p.datetaken,
              imgUrl: p.url_n
            });
          }
        });
      }
    });

    if (page === 1) {
      setTimeout(() => {
        commit("FETCH_TREES_SUCCESS", shuffle(trees));
      }, 3000);
    } else {
      commit("FETCH_TREES_SUCCESS", shuffle(trees));
    }
  },

  applyFilter: ({ commit }, selection) => {
    commit("SET_FILTER", selection);
  },

  changeView: ({ commit }, selection) => commit("SET_VIEW", selection),

  sortDisplayRows: ({ commit }, selection) => {
    commit("SET_SORT", selection);
  }
};
