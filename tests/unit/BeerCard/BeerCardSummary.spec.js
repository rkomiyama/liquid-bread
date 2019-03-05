import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import BeerCardSummary from "@/components/BeerCard/BeerCardSummary.vue";
import beerData from "#/mockData/beerData.json";

Vue.use(Vuetify);

let wrapper;

describe("BeerCardSummary.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(BeerCardSummary, {
      propsData: { beer: beerData }
    });
  });

  it("BeerCardSummary has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
