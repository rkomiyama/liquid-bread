<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <SearchResultsContainer :search="search" :headers="headers" :filters="filters"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
    SearchResultsContainer
  }
};
</script>

<style lang="scss" scoped>
</style>
