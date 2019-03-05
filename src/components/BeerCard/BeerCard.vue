<template>
  <v-card flat>
    <v-layout>
      <v-flex xs2>
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

export default {
  name: "BeerCard",
  props: ["beer"],
  components: {
    BeerCardSummary
  }
};
</script>

<style lang="scss" scoped>
.beer-image {
  background-color: white;
}
</style>
