<template>
  <v-list dense>
    <v-subheader>Column headers</v-subheader>
    <v-list-tile v-for="(header, i) in headers" :key="i">
      <v-list-tile-action>
        <v-checkbox v-model="checked[i]"></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ header.text }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
/**
 * Checkbox list of all the headers for the search results table columns
 */
export default {
  name: "SearchColumnHeaders",
  data() {
    return {
      checked: []
    };
  },
  created() {
    this.checked = this.passedChecks;
  },
  watch: {
    checked(checked) {
      if (checked && checked.length) {
        /**
         * Triggered when a checkbox is clicked
         * @event change:checks
         * @type {Array}
         */
        this.$emit("change:checks", checked);
      }
    }
  },
  props: {
    /**
     * Headers for the search results table columns
     */
    headers: {
      type: Array
    },
    /**
     * Saved states of the checkboxes
     */
    passedChecks: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<docs>
```jsx
const mockData = require('../../../tests/mockData/searchColumnHeaders.json');
let checks = Array(mockData.length).fill(false);
<SearchColumnHeaders
  :headers="mockData"
  :passedChecks="checks"
  :style="{height: '200px', overflowY: 'scroll'}"
/>
```
</docs>