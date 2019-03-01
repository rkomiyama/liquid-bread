<template>
  <v-toolbar app ref="toolbar" :extension-height="height">
    <v-toolbar-title>Liquid Bread</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click="showMore = !showMore"></v-toolbar-side-icon>
    <v-layout v-if="showMore" slot="extension">
      <v-spacer></v-spacer>
      <v-list dense>
        <v-subheader>Column headers</v-subheader>
        <v-list-tile v-for="(header, i) in headers" :key="i">
          <v-list-tile-action>
            <v-checkbox v-model="checked[i]"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content @click="checked[i] = !checked[i]">
            <v-list-tile-title>{{ header.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: "SearchToolbar",
  data() {
    return {
      showMore: false,
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
        { text: "pH", value: "ph" },
        { text: "Boil volume", value: "boil_volume" },
        { text: "Target OG", value: "target_og" },
        { text: "Target FG", value: "target_fg" }
      ],
      checked: [],
      height: undefined,
      listData: null
    };
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
    checked(checked) {
      const selectedHeaders = this.headers.filter((header, i) => checked[i]);
      this.$emit("change:headers", selectedHeaders);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list {
  height: 200px;
  overflow-y: scroll;
}
</style>
