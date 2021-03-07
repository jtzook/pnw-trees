<template>
  <b-row class="justify-content-center" no-gutters>
    <b-col cols="10">
      <b-table
        hover
        :items="selectedTrees"
        :fields="fields"
        head-variant="dark"
        stacked="md"
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
          formatter: value => {
            console.log(value, typeof value);
            return new Date(value).toLocaleDateString("en-US");
          }
        },
        "tag",
        "extraTags"
      ]
    };
  },

  computed: {
    ...mapState(["treeTypes"]),

    ...mapGetters(["treeTypes", "selectedTrees"])
  }
};
</script>
