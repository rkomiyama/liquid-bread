<template>
  <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(searchString) {
      this.$emit("input", searchString);
    }
  }
};
</script>
