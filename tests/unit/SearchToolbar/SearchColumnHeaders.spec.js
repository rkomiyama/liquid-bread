import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import SearchColumnHeaders from "@/components/SearchToolbar/SearchColumnHeaders.vue";
import searchColumnHeaders from "#/mockData/searchColumnHeaders.json";

Vue.use(Vuetify);

let wrapper;

describe("SearchColumnHeaders.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchColumnHeaders, {
      propsData: {
        headers: searchColumnHeaders
      }
    });
  });

  it("handles empty headers", () => {
    wrapper = shallowMount(SearchColumnHeaders);
    expect(wrapper.vm.headers).toEqual([]);
  });

  it("emits change:checks", () => {
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
