<template>
  <v-layout>
    <v-flex xs6>
      <h3>ABV</h3>
      <h3>IBU</h3>
      <h3>EBC</h3>
      <h3>SRM</h3>
      <div>First brewed</div>
      <div>Volume</div>
      <div>Attenuation level</div>
      <div>pH</div>
      <div>Boil volume</div>
      <div>Target OG</div>
      <div>Target FG</div>
      <div>Contributed by</div>
    </v-flex>
    <v-flex xs6>
      <h3>{{ beer.abv }}%</h3>
      <h3>{{ beer.ibu }} BU</h3>
      <h3>{{ beer.ebc }}</h3>
      <h3>{{ beer.srm }}</h3>
      <div>{{ beer.first_brewed }}</div>
      <div>{{ beer.volume.value }} {{ beer.volume.unit }}</div>
      <div>{{ beer.attenuation_level }}</div>
      <div>{{ beer.ph }}</div>
      <div>{{ beer.boil_volume.value }} {{ beer.boil_volume.unit }}</div>
      <div>{{ beer.target_og }}</div>
      <div>{{ beer.target_fg }}</div>
      <div>{{ beer.contributed_by }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BeerCardValues",
  props: {
    beer: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
