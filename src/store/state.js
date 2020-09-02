export default {
  colorPalette: [
    "#18a1b7",
    "#8699ee",
    "#4355b9",
    "#60eea3",
    "#345a42",
    "#a2e0dd",
    "#2ca559",
    "#c9dd87",
  ],

  trees: [],

  // https://www.arcgis.com/apps/MapJournal/index.html
  treeTypes: [
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
    { name: "mountain mahogany", tag: "mahogany" },
  ],

  selectedView: "card",
  selectedSort: "name",
  selectedFilter: "",
  sortingOptions: ["name", "tag"],

  loading: false,
  fetchError: null,
};
