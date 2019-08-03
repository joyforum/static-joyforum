<template>
  <v-app>
    <!-- Main header, breadcrumbs & router for page contents -->
    <HeaderComponent />
    <v-container fluid class="pa-0">
      <v-content class="grey lighten-3">
        <v-row no-gutters>
          <v-col cols="12">
            <router-view :key="$route.fullPath"></router-view>
          </v-col>
          <v-col cols="12">
            <FooterComponent />
          </v-col>
        </v-row>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>

