<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="10">
        <b-table
          hover
          outlined
          stacked="md"
          :items="trees"
          :fields="fields"
          head-variant="dark"
        ></b-table>
        <br>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

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
    ...mapState(["trees", "treeTypes"]),

    ...mapGetters(["treeTags"])
  },

  methods: {
    ...mapActions(["getTagColor"])
  }
};
</script>
