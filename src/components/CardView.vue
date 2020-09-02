<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="10">
        <b-card-group deck>
          <div
            v-for="tree in trees"
            :key="tree.id"
          >
            <b-card
              class="tree-card"
              :title="startCase(tree.name)"
              :img-src="tree.imgUrl"
              img-height="200px"
              img-alt="Tree Image"
              img-top
            >
              <b-card-text class="text-left overflow-hidden">
                <div v-if="tree.timeStamp">
                  <p><strong>Timestamp</strong><br> {{ 
                    new Date(tree.timeStamp).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    }) 
                  }}</p>
                </div>
                <div v-if="tree.title">
                  <p><strong>User Title</strong><br> {{ tree.title }} </p>
                </div>
              </b-card-text>
              <div slot="footer">
                <b-badge :style="{'background-color': getTagColor(tree.tag) }">{{ tree.tag }}</b-badge>
              </div>
            </b-card>
          </div>
        </b-card-group>
        <br>
        <br>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { startCase } from "lodash";

export default {
  name: "CardView",

  computed: {
    ...mapState(["trees", "treeTypes"])
  },

  methods: {
    startCase,

    ...mapActions(["getTagColor"])
  }
};
</script>

<style scoped>
.tree-card {
  object-fit: cover;
  min-width: 15rem;
  max-width: 20rem;
  max-height: 26rem;
  margin: 0 1em 2em 0;
}
</style>