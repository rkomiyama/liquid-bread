import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import MainContent from "@/components/MainContent.vue";

Vue.use(Vuetify);

let wrapper;

describe("MainContent.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(MainContent);
  });

  it("MainContent has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
