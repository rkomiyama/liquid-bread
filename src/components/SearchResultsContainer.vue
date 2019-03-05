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

/**
 * Container component that handles search results data
 */
export default {
  name: "SearchResultsContainer",
  data() {
    return {
      loading: false,
      rowsPerPageItems: [10, 20, 40, 80],
      results: []
    };
  },
  props: {
    /**
     * Quick-search string inputted by the user
     */
    search: {
      type: String
    },
    /**
     * Headers for the search results table columns
     */
    headers: {
      type: Array
    },
    /**
     * Filters that are applied to the search
     */
    filters: {
      type: Object
    }
  },
  methods: {
    /**
     * Getter function for searching beer data
     * @param {Object} params Parameters for the search
     * @public
     */
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
        });
    }
  },
  watch: {
    filters(filters) {
      let searchParams = {};

      if (filters.abvGt) {
        searchParams.abv_gt = filters.abvGt;
      }
      if (filters.abvLt) {
        searchParams.abv_lt = filters.abvLt;
      }
      if (filters.ibuGt) {
        searchParams.ibu_gt = filters.ibuGt;
      }
      if (filters.ibuLt) {
        searchParams.ibu_lt = filters.ibuLt;
      }
      if (filters.ebcGt) {
        searchParams.ebc_gt = filters.ebcGt;
      }
      if (filters.ebcLt) {
        searchParams.ebc_lt = filters.ebcLt;
      }
      if (filters.beer_name) {
        searchParams.beer_name = filters.beerName.replace(/ /g, "_");
      }
      if (filters.yeast) {
        searchParams.yeast = filters.yeast.replace(/ /g, "_");
      }
      if (filters.beforeDate) {
        searchParams.brewed_before = filters.beforeDate
          .split("-")
          .reverse()
          .join("/");
      }
      if (filters.afterDate) {
        searchParams.brewed_after = filters.afterDate
          .split("-")
          .reverse()
          .join("/");
      }
      if (filters.hops) {
        searchParams.hops = filters.hops.replace(/ /g, "_");
      }
      if (filters.malt) {
        searchParams.malt = filters.malt.replace(/ /g, "_");
      }
      if (filters.food) {
        searchParams.food = filters.food.replace(/ /g, "_");
      }
      if (filters.ids) {
        searchParams.ids = filters.ids.replace(/ /g, "|");
      }

      this.getResults(searchParams);
    }
  },
  components: {
    SearchResults
  }
};
</script>

<style lang="scss" scoped>
</style>

<docs>
```html
<SearchResultsContainer :search="search" :headers="headers" :filters="filters"/>
```
</docs>