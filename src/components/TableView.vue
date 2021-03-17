<template>
  <b-row class="justify-content-center" no-gutters>
    <b-col cols="10">
      <b-table
        :items="selectedTrees"
        :fields="fields"
        head-variant="dark"
        stacked="md"
        small
        hover
      >
        <template #cell(tag)="data">
          <TreeTag :tag="data.value" />
        </template>
      </b-table>
      <br />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import TreeTag from "./TreeTag";

export default {
  name: "TableView",

  components: {
    TreeTag
  },

  data() {
    return {
      fields: [
        "name",
        "title",
        {
          key: "timeStamp",
          label: "Date",
          formatter: value => new Date(value).toLocaleDateString("en-US")
        },
        "tag",
        "userTags"
      ]
    };
  },

  computed: {
    ...mapState(["treeTagMappings"]),

    ...mapGetters(["treeTags", "selectedTrees"])
  }
};
</script>
