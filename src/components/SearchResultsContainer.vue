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
    },
    headers: {
      type: Array,
      default: () => []
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
