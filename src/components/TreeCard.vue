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
      <div v-if="tree.timeStamp">
        <p>
          <strong>Timestamp</strong>
          <br />
          {{
          new Date(tree.timeStamp).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
          })
          }}
        </p>
      </div>
      <div v-if="tree.title">
        <p>
          <strong>User Title</strong>
          <br />
          {{ tree.title }}
        </p>
      </div>
    </b-card-text>
    <div slot="footer">
      <b-badge>{{ tree.tag }}</b-badge>
    </div>
  </b-card>
</template>

<script>
import { startCase } from "lodash";

export default {
  props: {
    /**
     * Tree data
     */
    tree: {
      type: Object,
      required: true
    }
  }
};
</script>