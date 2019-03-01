<template>
  <v-data-table
    :items="results"
    :headers="headers ? headers : []"
    :loading="loading"
    :search="search"
    :rows-per-page-items="rowsPerPageItems"
    :expand="expand"
    :custom-sort="customSort"
  >
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <tr @click="props.expanded = !props.expanded">
        <td v-for="(column, i) in headers" :key="i" class="text-xs-left">
          <span
            v-if="column.value === 'volume' || column.value === 'boil_volume'"
          >{{ props.item[column['value']]['value'] }} {{ props.item[column['value']]['unit'] }}</span>
          <span v-else>{{ props.item[column['value']] }}</span>
        </td>
      </tr>
    </template>
    <template v-slot:expand="props">
      <BeerCard :beer="props.item"/>
    </template>
  </v-data-table>
</template>

<script>
import BeerCard from "./BeerCard/BeerCard";

export default {
  name: "SearchResults",
  methods: {
    customSort(items, index, isDesc) {
      items.sort((a, b) => {
        if (index === "first_brewed") {
          if (!isDesc) {
            return this.compareDates(a.first_brewed, b.first_brewed);
          } else {
            return this.compareDates(b.first_brewed, a.first_brewed);
          }
        } else {
          if (!isDesc) {
            return a[index] < b[index] ? -1 : 1;
          } else {
            return b[index] < a[index] ? -1 : 1;
          }
        }
      });
      return items;
    },
    compareDates(a, b) {
      const yearA = a.slice(-4);
      const yearB = b.slice(-4);
      if (yearA !== yearB) {
        return yearA < yearB ? -1 : 1;
      } else {
        const monthA = a.slice(0, 2);
        const monthB = b.slice(0, 2);
        return monthA < monthB ? -1 : 1;
      }
    }
  },
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
