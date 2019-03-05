import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import SearchResults from "@/components/SearchResults.vue";
import searchHeaders from "#/mockData/searchColumnHeaders.json";
import searchResults from "#/mockData/searchResults.json";

Vue.use(Vuetify);

let wrapper;

describe("SearchResults.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchResults, {
      propsData: {
        headers: searchHeaders,
        results: searchResults
      }
    });
  });

  it("sorts correctly using customSort", () => {
    const sortedByDescDate = wrapper.vm.customSort(
      searchResults,
      "first_brewed",
      true
    );
    sortedByDescDate.reduce(function(accumulator, currentValue) {
      expect(
        wrapper.vm.compareDates(
          accumulator.first_brewed,
          currentValue.first_brewed
        )
      ).toEqual(1);
      return currentValue;
    });

    const sortedByAscDate = wrapper.vm.customSort(
      searchResults,
      "first_brewed",
      false
    );
    sortedByAscDate.reduce(function(accumulator, currentValue) {
      expect(
        wrapper.vm.compareDates(
          accumulator.first_brewed,
          currentValue.first_brewed
        )
      ).toEqual(-1);
      return currentValue;
    });

    const sortedByIbuDesc = wrapper.vm.customSort(searchResults, "ibu", true);
    sortedByIbuDesc.reduce(function(accumulator, currentValue) {
      expect(accumulator.ibu > currentValue.ibu).toBeTruthy();
      return currentValue;
    });

    const sortedByIbuAsc = wrapper.vm.customSort(searchResults, "ibu", false);
    sortedByIbuAsc.reduce(function(accumulator, currentValue) {
      expect(accumulator.ibu < currentValue.ibu).toBeTruthy();
      return currentValue;
    });

    const sortedByAbvAsc = wrapper.vm.customSort(searchResults, "abv", false);
    sortedByAbvAsc.reduce(function(accumulator, currentValue) {
      expect(accumulator.abv < currentValue.abv).toBeTruthy();
      return currentValue;
    });

    const sortedByAbvDesc = wrapper.vm.customSort(searchResults, "abv", true);
    sortedByAbvDesc.reduce(function(accumulator, currentValue) {
      expect(accumulator.abv > currentValue.abv).toBeTruthy();
      return currentValue;
    });
  });

  it("compares dates with compareDates", () => {
    const dateA = "09/2007";
    const dateB = "10/2007";
    expect(wrapper.vm.compareDates(dateA, dateB)).toEqual(-1);
    const dateC = "08/2007";
    expect(wrapper.vm.compareDates(dateA, dateC)).toEqual(1);
  });

  it("handles empty headers array", () => {
    wrapper = shallowMount(SearchResults);
    expect(wrapper.vm.headers.length).toEqual(0);
  });

  it("SearchResults has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
