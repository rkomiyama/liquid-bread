<template>
  <v-data-table
    :items="results"
    :headers="headers"
    :loading="loading"
    :search="search"
    :rows-per-page-items="rowsPerPageItems"
  >
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.abv }}</td>
      <td class="text-xs-left">{{ props.item.ibu }}</td>
    </template>
    <v-alert
      v-slot:no-results
      :value="true"
      color="error"
      icon="warning"
    >Your search for "{{ search }}" found no results.</v-alert>
  </v-data-table>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    results: {
      type: Array,
      default: () => []
    },
    search: {
      type: String,
      default: ""
    },
    rowsPerPageItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
