<template>
  <v-app dark>
    <SearchToolbar @change:headers="headersChangeHandler" @change:filters="filtersChangeHandler"/>
    <v-content>
      <MainContent :headers="headers" :filters="filters"/>
    </v-content>
  </v-app>
</template>

<script>
import SearchToolbar from "./components/SearchToolbar/SearchToolbar";
import MainContent from "./components/MainContent";

/**
 * This is the application's top level Vue component.
 */
export default {
  name: "App",
  methods: {
    /**
     * Gets called when headers change
     * @param {Array} headers List of headers
     * @public
     */
    headersChangeHandler(headers) {
      this.headers = headers;
    },
    /**
     * Gets called when filters change
     * @param {Object} filters Filters object
     * @public
     */
    filtersChangeHandler(filters) {
      this.filters = filters;
    }
  },
  data() {
    return {
      headers: null,
      filters: null
    };
  },
  components: {
    SearchToolbar,
    MainContent
  }
};
</script>
