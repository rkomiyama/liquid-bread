<template>
  <v-card>
    <v-subheader>Search filters</v-subheader>
    <v-card-text class="pt-0">
      <v-layout wrap justify-space-between>
        <v-flex lg3 md3 sm5>
          <v-text-field v-model="filters.abvLt" label="ABV (less than)" hide-details></v-text-field>
          <v-text-field v-model="filters.abvGt" label="ABV (greater than)" hide-details></v-text-field>
          <v-text-field v-model="filters.ibuLt" label="IBU (less than)" hide-details></v-text-field>
          <v-text-field v-model="filters.ibuGt" label="IBU (greater than)" hide-details></v-text-field>
          <v-text-field v-model="filters.ebcLt" label="EBC (less than)" hide-details></v-text-field>
          <v-text-field v-model="filters.ebcGt" label="EBC (greater than)" hide-details></v-text-field>
        </v-flex>
        <v-flex lg3 md3 sm5>
          <v-text-field v-model="filters.beerName" label="Beer name" hide-details></v-text-field>
          <v-text-field v-model="filters.yeastName" label="Yeast" hide-details></v-text-field>
          <v-text-field v-model="filters.hopsName" label="Hops" hide-details></v-text-field>
          <v-text-field v-model="filters.maltName" label="Malt" hide-details></v-text-field>
          <v-text-field v-model="filters.foodName" label="Food" hide-details></v-text-field>
          <v-text-field v-model="filters.ids" label="IDs" hide-details></v-text-field>
        </v-flex>
        <v-flex lg3 md3 sm12>
          <v-menu
            ref="beforeDatepicker"
            :close-on-content-click="false"
            v-model="beforeDatepicker"
            :nudge-right="40"
            :return-value.sync="filters.beforeDate"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              v-model="filters.beforeDate"
              label="Brewed before"
              prepend-icon="event"
              readonly
              clearable
              hide-details
            ></v-text-field>
            <v-date-picker
              v-model="filters.beforeDate"
              @input="$refs.beforeDatepicker.save(filters.beforeDate)"
              type="month"
            ></v-date-picker>
          </v-menu>
          <v-menu
            ref="afterDatepicker"
            :close-on-content-click="false"
            v-model="afterDatepicker"
            :nudge-right="40"
            :return-value.sync="filters.afterDate"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              v-model="filters.afterDate"
              label="Brewed after"
              prepend-icon="event"
              readonly
              clearable
              hide-details
            ></v-text-field>
            <v-date-picker
              v-model="filters.afterDate"
              @input="$refs.afterDatepicker.save(filters.afterDate)"
              type="month"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
/**
 * Component containing the search filters
 */
export default {
  name: "SearchFilters",
  props: {
    /**
     * Flag to check if filters have been applied
     */
    applyFilters: {
      type: Boolean
    },
    /**
     * Flag to check if filters need to be cleared
     */
    clearFilters: {
      type: Boolean
    }
  },
  watch: {
    applyFilters(val) {
      if (val) {
        /**
         * Triggered when the search button is clicked
         * @event submit:applySearchFilters
         * @type {Object}
         */
        this.$emit("submit:applySearchFilters", { ...this.filters });
      }
    },
    clearFilters(val) {
      if (val) {
        this.filters = {
          abvLt: null,
          abvGt: null,
          ibuLt: null,
          ibuGt: null,
          ebcLt: null,
          ebcGt: null,
          beerName: "",
          yeastName: "",
          beforeDate: null,
          afterDate: null,
          hopsName: "",
          maltName: "",
          foodName: "",
          ids: ""
        };
        this.beforeDatepicker = null;
        this.afterDatepicker = null;
      }
    }
  },
  data() {
    return {
      filters: {
        abvLt: null,
        abvGt: null,
        ibuLt: null,
        ibuGt: null,
        ebcLt: null,
        ebcGt: null,
        beerName: "",
        yeastName: "",
        beforeDate: null,
        afterDate: null,
        hopsName: "",
        maltName: "",
        foodName: "",
        ids: ""
      },
      beforeDatepicker: null,
      afterDatepicker: null
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

<docs>
```jsx
<SearchFilters :style="{height: '200px', overflowY: 'scroll'}" />
```
</docs>