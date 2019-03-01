<template>
  <v-app>
    <v-content>
      <MainContent/>
    </v-content>
  </v-app>
</template>

<script>
import MainContent from './components/MainContent';

export default {
  name: 'App',
  components: {
    MainContent
  }
};
</script>
