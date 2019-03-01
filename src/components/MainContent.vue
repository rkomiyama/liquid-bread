<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Liquid Bread</h1>
        <SearchBar v-model="search"/>
        <SearchResultsContainer :search="search"/>
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
  components: {
    SearchBar,
    SearchResultsContainer
  }
};
</script>

<style lang="scss" scoped>
</style>
