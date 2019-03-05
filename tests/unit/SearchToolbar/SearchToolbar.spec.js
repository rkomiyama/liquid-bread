import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import SearchToolbar from "@/components/SearchToolbar/SearchToolbar.vue";

Vue.use(Vuetify);

let wrapper;

describe("SearchToolbar.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchToolbar);
  });

  it("changes height when showMore is changed", () => {
    const height = wrapper.vm.height;
    expect(wrapper.vm.showMore).toBeTruthy();
    wrapper.setData({ showMore: false, height: 100 });
    expect(wrapper.vm.showMore).toBeFalsy();
    expect(wrapper.vm.height).not.toEqual(height);
  });

  it("applies filters", done => {
    expect(wrapper.vm.applyFilters).toBeFalsy();
    const searchButton = wrapper.find("v-btn-stub[type='button']");
    searchButton.trigger("click");
    expect(wrapper.vm.applyFilters).toBeTruthy();
    Vue.nextTick(() => {
      expect(wrapper.vm.applyFilters).toBeFalsy();
      done();
    });
  });

  it("calls filtersChangeHandler", () => {
    expect(wrapper.emitted("change:filters")).toBeFalsy();
    wrapper.vm.filtersChangeHandler();
    expect(wrapper.emitted("change:filters")).toBeTruthy();
  });

  it("calls checksChangeHandler", () => {
    let checks = Array(wrapper.vm.headers.length).fill(false);
    expect(wrapper.emitted("change:headers")).toBeFalsy();
    wrapper.vm.checksChangeHandler(checks);
    expect(wrapper.emitted("change:headers")).toBeTruthy();
  });

  it("SearchToolbar has same HTML structure", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
