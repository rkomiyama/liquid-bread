<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <SearchBar v-model="search"/>
        <SearchResultsContainer :search="search" :headers="headers" :filters="filters"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchBar from "./SearchBar";
import SearchResultsContainer from "./SearchResultsContainer";

export default {
  name: "MainContent",
  data() {
    return {
      search: ""
    };
  },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    SearchBar,
    SearchResultsContainer
  }
};
</script>

<style lang="scss" scoped>
</style>
