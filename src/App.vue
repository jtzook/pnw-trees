<template>
  <div id="app">
    <NavBar />

    <b-row class="justify-content-center">
      <b-col cols="10">
        <h1> Trees </h1>
        <hr style="background-color: black;">
      </b-col>
    </b-row>
    <div v-if="selectedView === 'card'">
      <CardView />
    </div>
    <!-- <div v-else>
      <TableView/>
    </div> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    NavBar
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
