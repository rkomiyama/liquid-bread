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
      <tr class="table-row" @click="props.expanded = !props.expanded">
        <td v-for="(column, i) in headers" :key="i" class="text-xs-left">
          <span
            v-if="column.value === 'volume' || column.value === 'boil_volume'"
          >{{ props.item[column['value']]['value'] }} {{ props.item[column['value']]['unit'] }}</span>
          <span v-else>{{ props.item[column['value']] }}</span>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <tr>
        <td class="text-xs-center" :colspan="headers ? headers.length : 1">No data available</td>
      </tr>
    </template>
    <template v-slot:expand="props">
      <BeerCard :beer="props.item"/>
    </template>
  </v-data-table>
</template>

<script>
import BeerCard from "./BeerCard/BeerCard";

/**
 * Presentational component that displays the search results
 */
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
    /**
     * Headers for the search results table columns
     */
    headers: {
      type: Array
    },
    /**
     * Loading state of the search
     */
    loading: {
      type: Boolean
    },
    /**
     * Search results with beer data
     */
    results: {
      type: Array
    },
    /**
     * Quick-search string inputted by the user
     */
    search: {
      type: String
    },
    /**
     * Numerical values that can be selected to show a number of rows
     */
    rowsPerPageItems: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.v-table {
  tr {
    :hover {
      cursor: pointer;
    }
    &:nth-child(4n + 3) {
      background-color: #595859;
    }
  }
}
</style>

<docs>
```jsx
const mockHeaders = require('../../tests/mockData/searchColumnHeaders.json');
const mockResults = require('../../tests/mockData/searchResults.json');
const mockRows = [10, 20, 40, 80];
<SearchResults :headers="mockHeaders" :results="mockResults" :rowsPerPageItems="mockRows" />
```
</docs>