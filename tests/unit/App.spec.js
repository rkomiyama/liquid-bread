import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import AppVue from "@/App.vue";
import searchFilters from "#/mockData/searchFilters.json";

Vue.use(Vuetify);

let wrapper;

describe("App.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(AppVue);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("changes headers", () => {
    expect(wrapper.vm.headers).toEqual(null);
    wrapper.vm.headersChangeHandler([{ text: "ID", value: "id" }]);
    expect(wrapper.vm.headers).toEqual([{ text: "ID", value: "id" }]);
  });

  it("changes filters", () => {
    expect(wrapper.vm.filters).toEqual(null);
    wrapper.vm.filtersChangeHandler(searchFilters);
    expect(wrapper.vm.filters.abvLt).toEqual("1");
  });
});
