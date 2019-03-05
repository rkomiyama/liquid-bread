import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import BeerCard from "@/components/BeerCard/BeerCard.vue";
import beerData from "#/mockData/beerData.json";

Vue.use(Vuetify);

let wrapper;

describe("BeerCard.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(BeerCard, { propsData: { beer: beerData } });
  });

  it("BeerCard has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
