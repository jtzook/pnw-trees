<template>
  <b-row class="justify-content-center" no-gutters>
    <b-col cols="10">
      <b-table
        hover
        outlined
        stacked="md"
        :items="selectedTrees"
        :fields="fields"
        head-variant="dark"
      ></b-table>
      <br />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TableView",

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

    ...mapGetters(["treeTags", "selectedTrees"])
  }
};
</script>
