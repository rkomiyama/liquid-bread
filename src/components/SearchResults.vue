<template>
  <v-data-table
    :items="results"
    :headers="headers"
    :loading="loading"
    :search="search"
    :rows-per-page-items="rowsPerPageItems"
    :expand="expand"
  >
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.abv }}</td>
        <td class="text-xs-left">{{ props.item.ibu }}</td>
      </tr>
    </template>
    <template v-slot:expand="props">
      <BeerCard :beer="props.item"/>
    </template>
  </v-data-table>
</template>

<script>
import BeerCard from "./BeerCard";

export default {
  name: "SearchResults",
  components: {
    BeerCard
  },
  data() {
    return {
      expand: false
    };
  },
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
