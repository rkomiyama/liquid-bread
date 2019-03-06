<template>
  <div>
    <v-card-title>
      <h1>
        {{ beer.name }}
        <span class="tagline font-italic">{{ beer.tagline }}</span>
      </h1>
    </v-card-title>
    <v-card-text class="text-xs-left pt-0">
      <v-flex xs12 pb-2>
        <v-card class="beer-card-summary">
          <v-layout>
            <v-flex xs6 pa-4>
              <BeerCardValues :beer="beer"/>
            </v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs6 pa-4>
              <v-flex pb-2>
                <div class="font-weight-bold">Description</div>
                <div>{{ beer.description }}</div>
              </v-flex>
              <v-flex pb-2>
                <div class="font-weight-bold">Brewers tips</div>
                <div>{{ beer.brewers_tips }}</div>
              </v-flex>
              <div class="font-weight-bold">Food pairing</div>
              <div v-for="(food, i) in beer.food_pairing" :key="i">{{ food }}</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-slide-y-transition>
        <BeerCardDetails v-show="showMore" :ingredients="beer.ingredients" :method="beer.method"/>
      </v-slide-y-transition>
      <v-flex text-xs-center>
        <v-btn flat @click="showMore = !showMore">{{ showMore ? 'Show Less' : 'Show More' }}</v-btn>
      </v-flex>
    </v-card-text>
  </div>
</template>

<script>
import BeerCardValues from "./BeerCardValues";
import BeerCardDetails from "./BeerCardDetails";

/**
 * Displays the description, brewers tips, and food pairing for the beer.
 */
export default {
  name: "BeerCardSummary",
  data() {
    return {
      showMore: false
    };
  },
  props: {
    /**
     * Beer data object for the beer
     */
    beer: {
      type: Object
    }
  },
  components: {
    BeerCardValues,
    BeerCardDetails
  }
};
</script>

<style lang="scss" scoped>
.beer-card-summary {
  background-color: #464646;
}
.tagline {
  color: grey;
}
</style>

<docs>
```jsx
const mockData = require('../../../tests/mockData/beerData.json');
<BeerCardSummary :beer="mockData" />
```
</docs>