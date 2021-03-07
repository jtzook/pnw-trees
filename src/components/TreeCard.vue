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
      <div class="tree-card-title">{{ startCase(tree.name) }}</div>
    </b-card-title>
    <b-card-text class="text-left">
      <p v-if="tree.timeStamp">
        <strong>Date</strong>
        <br />
        {{ formattedTimestamp }}
      </p>
      <p v-if="tree.title">
        <strong>User Title</strong>
        <br />
        {{ tree.title }}
      </p>
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
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
}

.tree-card {
  max-width: 20rem;
  min-height: 30rem;
  margin: 0 1em 2em 0;
}

.tree-card > img {
  object-fit: cover !important;
}

.tree-card > .card-body {
  overflow: hidden;
}
</style>
