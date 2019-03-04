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
        this.$emit("change:checks", checked);
      }
    }
  },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    passedChecks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
