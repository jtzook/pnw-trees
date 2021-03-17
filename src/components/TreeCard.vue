<template>
  <b-card
    class="tree-card"
    footer-class="d-flex justify-content-center"
    :img-src="tree.imgUrl"
    img-height="200px"
    img-alt="Tree Image"
    img-top
  >
    <b-card-title>
      <h3 class="tree-card-title">{{ tree.title }}</h3>
    </b-card-title>

    <b-card-text>
      <h6 class="d-flex flex-row justify-space-between">
        <strong class="mr-2">Date</strong>
        <span>{{ formattedTimestamp }}</span>
      </h6>
      <h6 class="d-flex flex-row justify-space-between">
        <strong class="mr-2">Tags</strong>
        <span class="overflow-hidden text-nowrap text-truncate">{{
          tree.userTags
        }}</span>
      </h6>
    </b-card-text>

    <template slot="footer">
      <TreeTag :tag="tree.tag" />
    </template>
  </b-card>
</template>

<script>
import { startCase } from "lodash";
import { mapGetters } from "vuex";

import TreeTag from "./TreeTag";

export default {
  name: "TreeCard",

  components: {
    TreeTag
  },

  props: {
    tree: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters(["tagColorMap"]),

    formattedTimestamp() {
      return new Date(this.tree.timeStamp).toLocaleDateString("en-US");
    }
  },

  methods: {
    startCase
  }
};
</script>

<style scoped>
.tree-card-title {
  font-weight: bold;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tree-card {
  max-width: 20rem;
  margin: 0 1em 2em 0;
}

.tree-card > img {
  object-fit: cover !important;
}

.tree-card > .card-body {
  overflow: hidden;
}
</style>
