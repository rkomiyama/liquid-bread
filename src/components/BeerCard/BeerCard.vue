<template>
  <v-card flat class="beer-card">
    <v-layout>
      <v-flex xs2 pa-2>
        <v-img :src="beer.image_url" class="beer-image"></v-img>
      </v-flex>
      <v-flex xs10>
        <BeerCardSummary :beer="beer"/>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BeerCardSummary from "./BeerCardSummary";

/**
 * Container component for beer data.
 */
export default {
  name: "BeerCard",
  props: {
    /**
     * Beer data object for the beer
     */
    beer: {
      type: Object
    }
  },
  components: {
    BeerCardSummary
  }
};
</script>

<style lang="scss" scoped>
.beer-card {
  background-color: #343334;
}
.beer-image {
  background-color: white;
}
</style>

<docs>
```jsx
const mockData = require('../../../tests/mockData/beerData.json');
<BeerCard :beer="mockData" />
```
</docs>