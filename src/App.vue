<template>
  <v-app dark>
    <SearchToolbar @change:headers="headersChangeHandler"/>
    <v-content>
      <MainContent :headers="headers"/>
    </v-content>
  </v-app>
</template>

<script>
import SearchToolbar from "./components/SearchToolbar/SearchToolbar";
import MainContent from "./components/MainContent";

export default {
  name: "App",
  methods: {
    headersChangeHandler(event) {
      this.headers = event;
    }
  },
  data() {
    return {
      headers: null
    };
  },
  components: {
    SearchToolbar,
    MainContent
  }
};
</script>
