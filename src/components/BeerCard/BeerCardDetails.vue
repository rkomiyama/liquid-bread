<template>
  <v-flex xs12 pt-2>
    <v-card class="beer-card-details">
      <v-layout>
        <v-flex xs6 pa-4>
          <h3>Ingredients</h3>
          <v-flex pt-2>
            <h4>Malt</h4>
            <v-layout v-for="malt in ingredients.malt" :key="malt.name">
              <v-flex xs6>{{ malt.name }}</v-flex>
              <v-flex xs6>{{ malt.amount.value }} {{ malt.amount.unit }}</v-flex>
            </v-layout>
          </v-flex>
          <v-flex pt-2>
            <h4>Hops</h4>
            <v-layout v-for="hops in ingredients.hops" :key="hops.name + hops.add">
              <v-flex xs6>{{ hops.name }} ({{ hops.add }})</v-flex>
              <v-flex xs6>{{ hops.amount.value }} {{ hops.amount.unit }}, {{ hops.attribute }}</v-flex>
            </v-layout>
          </v-flex>
          <v-flex pt-2>
            <h4>Yeast</h4>
            <div>{{ ingredients.yeast }}</div>
          </v-flex>
        </v-flex>
        <v-divider vertical></v-divider>
        <v-flex xs6 pa-4>
          <h3>Method</h3>
          <v-flex pt-2>
            <h4>Fermentation</h4>
            <v-layout>
              <v-flex xs6>Temp</v-flex>
              <v-flex xs6>{{ method.fermentation.temp.value }} {{ method.fermentation.temp.unit }}</v-flex>
            </v-layout>
          </v-flex>
          <v-flex pt-2>
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
          </v-flex>
          <v-flex pt-2>
            <h4>Twist</h4>
            <div>{{ method.twist ? method.twist : 'N/A' }}</div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
/**
 * Displays beer information regarding its crafting method and ingredients
 */
export default {
  name: "BeerCardDetails",
  props: {
    /**
     * Method to craft the beer
     */
    method: {
      type: Object
    },
    /**
     * Ingredients for the beer
     */
    ingredients: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.beer-card-details {
  background-color: #464646;
}
</style>

<docs>
```jsx
const mockData = require('../../../tests/mockData/beerData.json');
<BeerCardDetails :method="mockData.method" :ingredients="mockData.ingredients" />
```
</docs>