export default {
  colors: {
    primary: {
      forest: "#448b27",
      lime: "ace600",
      brown: "#ac5839",
      red: "#e03838",
      orange: "#ff6a1a",
      yellow: "#fbc337"
    }
  },

  trees: [],

  // https://www.arcgis.com/apps/MapJournal/index.html
  treeTags: [
    { name: "vine maple", tag: "maple" },
    { name: "japanese maple", tag: "maple" },
    { name: "bigleaf maple", tag: "maple" },
    { name: "douglas maple", tag: "maple" },
    { name: "grand fir", tag: "fir" },
    { name: "red fir", tag: "fir" },
    { name: "noble fir", tag: "fir" },
    { name: "subalpine fir", tag: "fir" },
    { name: "pacific silver fir", tag: "fir" },
    { name: "red alder", tag: "alder" },
    { name: "pacific madrone", tag: "madrone" },
    { name: "water birch", tag: "birch" },
    { name: "paper birch", tag: "birch" },
    { name: "yellow cedar", tag: "cedar" },
    { name: "incense cedar", tag: "cedar" },
    { name: "mountain mahogany", tag: "mahogany" }
  ],

  selectedView: "card",
  selectedSort: "",
  selectedFilter: "",
  sortingOptions: ["name", "tag"],

  loading: false,
  fetchError: null
};
