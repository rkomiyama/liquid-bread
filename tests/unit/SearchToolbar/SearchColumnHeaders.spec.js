import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import SearchColumnHeaders from "@/components/SearchToolbar/SearchColumnHeaders.vue";
import searchColumnHeaders from "#/mockData/searchColumnHeaders.json";

Vue.use(Vuetify);

let wrapper;
let checks = Array(searchColumnHeaders.length).fill(false);

describe("SearchColumnHeaders.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchColumnHeaders, {
      propsData: {
        headers: searchColumnHeaders,
        passedChecks: checks
      }
    });
  });

  it("handles empty headers", () => {
    wrapper = shallowMount(SearchColumnHeaders);
    expect(wrapper.vm.headers).toBeUndefined();
  });

  it("emits change:checks", () => {
    wrapper = shallowMount(SearchColumnHeaders);
    expect(wrapper.emitted("change:checks")).toBeFalsy();
    wrapper.setData({ checked: [true] });
    expect(wrapper.emitted("change:checks")).toBeTruthy();
  });

  it("SearchColumnHeaders has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
