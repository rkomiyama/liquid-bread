<template>
  <v-card>
    <v-card-title>Search filters</v-card-title>
    <v-card-text class="pt-0">
      <v-layout>
        <v-flex xs1>
          <v-text-field v-model="filters.abvLt" hide-details></v-text-field>
        </v-flex>
        <v-subheader>&lt; ABV &gt;</v-subheader>
        <v-flex xs1>
          <v-text-field v-model="filters.abvGt" hide-details></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs1>
          <v-text-field v-model="filters.ibuLt" hide-details></v-text-field>
        </v-flex>
        <v-subheader>&lt; IBU &gt;</v-subheader>
        <v-flex xs1>
          <v-text-field v-model="filters.ibuGt" hide-details></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs1>
          <v-text-field v-model="filters.ebcLt" hide-details></v-text-field>
        </v-flex>
        <v-subheader>&lt; EBC &gt;</v-subheader>
        <v-flex xs1>
          <v-text-field v-model="filters.ebcGt" hide-details></v-text-field>
        </v-flex>
      </v-layout>
      <v-text-field v-model="filters.beerName" label="Beer name" hide-details></v-text-field>
      <v-text-field v-model="filters.yeastName" label="Yeast" hide-details></v-text-field>
      <v-layout>
        <v-flex xs12 sm6 md4>
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
              hide-details
            ></v-text-field>
            <v-date-picker
              v-model="filters.beforeDate"
              @input="$refs.beforeDatepicker.save(filters.beforeDate)"
              type="month"
            ></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm6 md4>
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
      <v-text-field v-model="filters.hopsName" label="Hops" hide-details></v-text-field>
      <v-text-field v-model="filters.maltName" label="Malt" hide-details></v-text-field>
      <v-text-field v-model="filters.foodName" label="Food" hide-details></v-text-field>
      <v-text-field v-model="filters.ids" label="IDs" hide-details></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
/**
 *
 */
export default {
  name: "SearchFilters",
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
  },
  props: {
    /**
     * Flag to check if filters have been applied
     */
    applyFilters: {
      type: Boolean
    }
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