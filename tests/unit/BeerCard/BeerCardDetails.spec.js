import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import BeerCardDetails from "@/components/BeerCard/BeerCardDetails.vue";
import beerData from "#/mockData/beerData.json";

Vue.use(Vuetify);

let wrapper;

describe("BeerCardDetails.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(BeerCardDetails, {
      propsData: { ingredients: beerData.ingredients, method: beerData.method }
    });
  });

  it("BeerCardDetails has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
