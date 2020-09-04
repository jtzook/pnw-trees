<template>
  <b-card
    class="tree-card"
    :title="startCase(tree.name)"
    :img-src="tree.imgUrl"
    img-height="200px"
    img-alt="Tree Image"
    img-top
  >
    <b-card-text class="text-left">
      <p v-if="tree.timeStamp">
        <strong>Timestamp</strong>
        {{ formattedTimestamp }}
      </p>
      <p v-if="tree.title">
        <strong>User Title</strong>
        {{ tree.title }}
      </p>
      <p v-if="tree.extraTags">
        <strong>User Tags</strong>
        {{ initialTags }}
      </p>
    </b-card-text>
    <template slot="footer">
      <div class="tree-tag" :style="{'background-color': tagColorMap[tree.tag]}">{{ tree.tag }}</div>
    </template>
  </b-card>
</template>

<script>
import { startCase } from "lodash";
import { mapGetters } from "vuex";

export default {
  name: "TreeCard",

  props: {
    /**
     * Tree data
     */
    tree: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters(["tagColorMap"]),

    initialTags() {
      let tagLimit = 7;
      let userTags = [];

      if (this.tree.extraTags) {
        userTags = this.tree.extraTags.split(" ");

        if (userTags.length > tagLimit) {
          userTags = userTags.slice(0, 5);
        }
      }

      return userTags ? userTags.join(" ") : [];
    },

    formattedTimestamp() {
      return new Date(this.tree.timeStamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },

  methods: {
    startCase
  }
};
</script>

<style scoped>
.tree-card {
  max-width: 20rem;
  max-height: 30rem;
  margin: 0 1em 2em 0;
}

.tree-card > img {
  object-fit: cover !important;
}

.tree-card > .card-body {
  overflow: hidden;
}
</style>