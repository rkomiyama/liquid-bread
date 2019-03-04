import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import BeerCardValues from "@/components/BeerCard/BeerCardValues.vue";
import beerData from "#/mockData/beerData.json";

Vue.use(Vuetify);

let wrapper;

describe("BeerCardValues.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(BeerCardValues, {
      propsData: { beer: beerData }
    });
  });

  it("BeerCardValues has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
