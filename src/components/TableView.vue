<template>
  <div>
    <b-row class="justify-content-center">
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
  </div>
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
          label: "Timestamp",
          formatter: value => {
            return new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            });
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
