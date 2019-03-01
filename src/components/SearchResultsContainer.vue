<template>
  <SearchResults
    :results="results"
    :loading="loading"
    :search="search"
    :headers="headers"
    :rowsPerPageItems="rowsPerPageItems"
  />
</template>

<script>
import axios from "axios";
import SearchResults from "./SearchResults";

export default {
  name: "SearchResultsContainer",
  data() {
    return {
      loading: false,
      headers: [
        { text: "ID", value: "id", width: "50px" },
        { text: "Name", value: "name", width: "35%" },
        { text: "ABV", value: "abv" },
        { text: "IBU", value: "ibu" }
      ],
      rowsPerPageItems: [
        10,
        50,
        100,
        { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 }
      ],
      results: []
    };
  },
  props: {
    search: {
      type: String,
      default: ""
    }
  },
  methods: {
    async getResults(params = {}) {
      this.loading = true;
      this.results = await axios
        .get("https://api.punkapi.com/v2/beers", {
          params
        })
        .then(res => {
          this.loading = false;
          return res.data;
        })
        .catch(err => {
          this.loading = false;
          throw new Error(err);
        });
    }
  },
  created() {
    this.getResults();
  },
  components: {
    SearchResults
  }
};
</script>

<style lang="scss" scoped>
</style>
