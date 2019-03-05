<template>
  <div>
    <v-card-title>
      <h1>
        {{ beer.name }}
        <span class="tagline font-italic">{{ beer.tagline }}</span>
      </h1>
    </v-card-title>
    <v-card-text class="text-xs-left pt-0">
      <v-layout>
        <v-flex xs6>
          <BeerCardValues :beer="beer"/>
        </v-flex>
        <v-flex xs6>
          <div class="font-weight-bold">Description</div>
          <div>{{ beer.description }}</div>
          <div class="font-weight-bold">Brewers tips</div>
          <div>{{ beer.brewers_tips }}</div>
          <div class="font-weight-bold">Food pairing</div>
          <div v-for="(food, i) in beer.food_pairing" :key="i">{{ food }}</div>
        </v-flex>
      </v-layout>
      <v-slide-y-transition>
        <div v-show="showMore">
          <v-divider></v-divider>
          <BeerCardDetails :ingredients="beer.ingredients" :method="beer.method"/>
        </div>
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