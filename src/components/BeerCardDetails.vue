<template>
  <v-layout>
    <v-flex xs6>
      <h3>Ingredients</h3>
      <h4>Malt</h4>
      <v-layout v-for="malt in ingredients.malt" :key="malt.name">
        <v-flex xs6>{{ malt.name }}</v-flex>
        <v-flex xs6>{{ malt.amount.value }} {{ malt.amount.unit }}</v-flex>
      </v-layout>
      <h4>Hops</h4>
      <v-layout v-for="hops in ingredients.hops" :key="hops.name + hops.add">
        <v-flex xs6>{{ hops.name }} ({{ hops.add }})</v-flex>
        <v-flex xs6>{{ hops.amount.value }} {{ hops.amount.unit }}, {{ hops.attribute }}</v-flex>
      </v-layout>
      <h4>Yeast</h4>
      <div>{{ ingredients.yeast }}</div>
    </v-flex>
    <v-flex xs6>
      <h3>Method</h3>
      <h4>Fermentation</h4>
      <v-layout>
        <v-flex xs6>Temp</v-flex>
        <v-flex xs6>{{ method.fermentation.temp.value }} {{ method.fermentation.temp.unit }}</v-flex>
      </v-layout>
      <h4>Mash temp</h4>
      <div v-for="(mash_temp, i) in method.mash_temp" :key="i">
        <v-layout>
          <v-flex xs6>Duration</v-flex>
          <v-flex xs6>{{ mash_temp.duration }}</v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs6>Temp</v-flex>
          <v-flex xs6>{{ mash_temp.temp.value }} {{ mash_temp.temp.unit }}</v-flex>
        </v-layout>
      </div>
      <h4>Twist</h4>
      <div>{{ method.twist ? method.twist : 'N/A' }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BeerCardDetails",
  props: {
    ingredients: {
      type: Object,
      default: () => {}
    },
    method: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
