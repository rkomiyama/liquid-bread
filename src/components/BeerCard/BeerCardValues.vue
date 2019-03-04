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
      <h3>{{ beer.abv ? beer.abv : 'N/A' }}%</h3>
      <h3>{{ beer.ibu ? beer.ibu : 'N/A' }} BU</h3>
      <h3>{{ beer.ebc ? beer.ebc : 'N/A' }}</h3>
      <h3>{{ beer.srm ? beer.srm : 'N/A' }}</h3>
      <div>{{ beer.first_brewed ? beer.first_brewed : 'N/A' }}</div>
      <div>{{ beer.volume ? `${beer.volume.value} ${beer.volume.unit}` : 'N/A' }}</div>
      <div>{{ beer.attenuation_level ? beer.attenuation_level : 'N/A' }}</div>
      <div>{{ beer.ph ? beer.ph : 'N/A' }}</div>
      <div>{{ beer.boil_volume ? `${beer.boil_volume.value} ${beer.boil_volume.unit}` : 'N/A' }}</div>
      <div>{{ beer.target_og ? beer.target_og : 'N/A' }}</div>
      <div>{{ beer.target_fg ? beer.target_fg : 'N/A' }}</div>
      <div>{{ beer.contributed_by ? beer.contributed_by : 'N/A' }}</div>
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
