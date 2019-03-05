<template>
  <v-toolbar app ref="toolbar" :extension-height="height">
    <v-toolbar-title>Liquid Bread</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click="showMore = !showMore"></v-toolbar-side-icon>
    <v-layout v-if="showMore" slot="extension">
      <v-flex xs8>
        <SearchFilters
          class="filters-list"
          @submit:applySearchFilters="filtersChangeHandler"
          :applyFilters="applyFilters"
        />
        <v-btn @click.native="applyFilters = true">Search</v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <SearchColumnHeaders
        class="headers-list"
        @change:checks="checksChangeHandler"
        :headers="headers"
        :passedChecks="checked"
      />
    </v-layout>
  </v-toolbar>
</template>

<script>
import SearchFilters from "./SearchFilters";
import SearchColumnHeaders from "./SearchColumnHeaders";

export default {
  name: "SearchToolbar",
  data() {
    return {
      showMore: false,
      applyFilters: false,
      headers: [
        { text: "ID", value: "id", width: "50px" },
        { text: "Name", value: "name", width: "35%" },
        { text: "ABV", value: "abv", width: "50px" },
        { text: "IBU", value: "ibu", width: "50px" },
        { text: "EBC", value: "ebc", width: "50px" },
        { text: "SRM", value: "srm", width: "50px" },
        { text: "First brewed", value: "first_brewed" },
        { text: "Volume", value: "volume" },
        {
          text: "Atten. level",
          value: "attenuation_level",
          width: "40px"
        },
        { text: "pH", value: "ph", width: "50px" },
        { text: "Boil volume", value: "boil_volume", width: "50px" },
        { text: "Target OG", value: "target_og", width: "50px" },
        { text: "Target FG", value: "target_fg", width: "50px" }
      ],
      checked: [],
      height: undefined
    };
  },
  mounted() {
    this.showMore = true;
  },
  created() {
    this.checked = Array(this.headers.length).fill(false);
    this.checked.fill(true, 0, 7);
  },
  watch: {
    showMore(val) {
      if (val) {
        this.$nextTick(function() {
          this.height = this.$refs.toolbar.$el.lastChild.firstChild.clientHeight;
        });
      }
    },
    applyFilters(val) {
      if (val) {
        this.$nextTick(function() {
          this.applyFilters = false;
        });
      }
    }
  },
  methods: {
    /**
     * Gets called when filters change
     * @param {Object} filters Filters object
     * @public
     */
    filtersChangeHandler(filters) {
      /**
       * Triggered when the filters have changed
       * @event change:filters
       * @type {Object}
       */
      this.$emit("change:filters", filters);
    },
    /**
     * Gets called when checkboxes change
     * @param {Array} checks Checks array
     * @public
     */
    checksChangeHandler(checks) {
      const selectedHeaders = this.headers.filter((header, i) => checks[i]);
      /**
       * Triggered when the headers selection has changed
       * @event change:headers
       * @type {Object}
       */
      this.$emit("change:headers", selectedHeaders);
      this.checked = checks;
    }
  },
  components: {
    SearchColumnHeaders,
    SearchFilters
  }
};
</script>

<style lang="scss" scoped>
.headers-list,
.filters-list {
  height: 200px;
  overflow-y: scroll;
}
</style>

<docs>
```jsx
<SearchToolbar :style="{position: 'relative'}" />
```
</docs>