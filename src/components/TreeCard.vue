<template>
  <b-card
    class="tree-card"
    :title="startCase(tree.name)"
    :img-src="tree.imgUrl"
    img-height="200px"
    img-alt="Tree Image"
    img-top
  >
    <b-card-text class="text-left overflow-hidden">
      <p v-if="tree.timeStamp">
        <strong>Timestamp</strong>
        {{ formattedTimestamp }}
      </p>
      <p v-if="tree.title">
        <strong>User Title</strong>
        {{ tree.title }}
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