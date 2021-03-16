export default {
  plugins: [
    "~/directives/animateOnScroll.client.js",
    "~/directives/lazyLoad.client.js"
  ],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/styles/*.scss"]
    }
  }
};
