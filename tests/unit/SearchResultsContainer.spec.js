import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import moxios from "moxios";
import SearchResultsContainer from "@/components/SearchResultsContainer.vue";
import searchHeaders from "#/mockData/searchColumnHeaders.json";
import searchFilters from "#/mockData/searchFilters.json";
import searchResults from "#/mockData/searchResults.json";

Vue.use(Vuetify);

let wrapper;
const getResults = jest.fn();

describe("SearchResultsContainer.vue", () => {
  beforeEach(() => {
    moxios.install();
    wrapper = shallowMount(SearchResultsContainer, {
      propsData: {
        headers: searchHeaders,
        filters: searchFilters
      },
      methods: {
        getResults
      }
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("calls getResults", () => {
    expect(getResults).not.toHaveBeenCalled();
    wrapper.setProps({ filters: {} });
    expect(getResults).toHaveBeenCalled();
    let newSearchFilters = JSON.parse(JSON.stringify(searchFilters));
    newSearchFilters.abvGt = "5";
    newSearchFilters.abvLt = "10";
    newSearchFilters.ibuGt = "5";
    newSearchFilters.ibuLt = "10";
    newSearchFilters.ebcGt = "5";
    newSearchFilters.ebcLt = "10";
    newSearchFilters.beer_name = "beer name";
    newSearchFilters.yeast = "yeast";
    newSearchFilters.beforeDate = "2019-03";
    newSearchFilters.afterDate = "2000-01";
    newSearchFilters.hops = "hops";
    newSearchFilters.malt = "malt";
    newSearchFilters.food = "food";
    newSearchFilters.ids = "ids";
    wrapper.setProps({ filters: newSearchFilters });
    expect(wrapper.vm.filters.abvLt).toBe("10");
    expect(getResults).toHaveBeenCalledTimes(2);
  });

  it("calls beer API successfully", done => {
    wrapper = shallowMount(SearchResultsContainer);
    const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
    wrapper.setProps({ filters: searchFiltersCopy });
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: searchResults
        })
        .then(function(res) {
          expect(res.data).toEqual(searchResults);
          done();
        });
    });
  });

  it("calls beer API with an error", done => {
    wrapper = shallowMount(SearchResultsContainer);
    expect(wrapper.vm.results).toEqual([]);
    const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
    searchFiltersCopy.abvGt = "not a number";
    wrapper.setProps({ filters: searchFiltersCopy });
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 400,
          response: "Error: Could not complete search"
        })
        .then(() => {
          expect(wrapper.vm.results).toEqual(undefined);
          done();
        });
    });
  });

  it("SearchResultsContainer has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
