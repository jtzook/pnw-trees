<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="6">
        <b-table
          hover
          outlined
          :items="trees"
          :fields="fields"
        >
          <template
            slot="type"
            slot-scope="data"
          >
            <b-badge :style="{'background-color': getTagColor(data.item.type) }">{{ data.value }}</b-badge>
          </template>
        </b-table>
        <br>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TableView",

  computed: {
    ...mapState(["trees", "treeTypes"]),

    ...mapGetters(["treeTags", "tagColorMap"])
  }
};
</script>