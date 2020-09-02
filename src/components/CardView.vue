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
              :title="'temporary title'"
              :img-src="tree.url_n"
              img-height="150px"
              img-alt="Tree Image"
              img-top
            >
              <b-card-text>
                text
                <!-- <div v-if="restaurant.phone">
                  <p><strong>Phone:</strong> {{ restaurant.phone }}</p>
                </div>
                <div v-if="restaurant.website">
                  <p><strong>Website: </strong><br><a :href="restaurant.website"><small>{{ restaurant.website }}</small></a></p>
                </div> -->
              </b-card-text>
              <div slot="footer">
                <!-- <b-badge :style="{'background-color': getTagColor(restaurant.type) }">{{ restaurant.type }}</b-badge> -->
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
import { mapState } from "vuex";
import { startCase } from "lodash";

export default {
  name: "CardView",

  computed: {
    ...mapState(["trees", "treeTypes"])
  },

  methods: {
    startCase
  }
};
</script>

<style scoped>
.tree-card {
  min-width: 15rem;
  max-width: 15rem;
  min-height: 26rem;
  max-height: 26rem;
  margin: 0 1em 1em 0;
}
</style>