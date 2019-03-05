import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import SearchFilters from "@/components/SearchToolbar/SearchFilters.vue";

Vue.use(Vuetify);

let wrapper;

describe("SearchFilters.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchFilters, {
      propsData: {
        applyFilters: false
      }
    });
  });

  it("emits submit:applySearchFilters", () => {
    expect(wrapper.emitted("submit:applySearchFilters")).toBeFalsy();
    wrapper.setProps({ applyFilters: true });
    expect(wrapper.emitted("submit:applySearchFilters")).toBeTruthy();
    wrapper.setProps({ applyFilters: false });
    expect(wrapper.vm.applyFilters).toBeFalsy();
  });

  it("SearchFilters has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
