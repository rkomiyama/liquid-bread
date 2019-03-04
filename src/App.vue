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

export default {
  name: "App",
  methods: {
    headersChangeHandler(headers) {
      this.headers = headers;
    },
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
