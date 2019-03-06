<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <v-flex xs12 sm8 md6 lg4>
          <v-text-field v-model="search" append-icon="search" label="Search results"></v-text-field>
        </v-flex>
        <SearchResultsContainer :search="search" :headers="headers" :filters="filters"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SearchResultsContainer from "./SearchResultsContainer";

/**
 * This is where the main content resides
 */
export default {
  name: "MainContent",
  data() {
    return {
      search: ""
    };
  },
  props: {
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
  components: {
    SearchResultsContainer
  }
};
</script>

<style lang="scss" scoped>
</style>

<docs>
```html
<MainContent :headers="headers" :filters="filters"/>
```
</docs>