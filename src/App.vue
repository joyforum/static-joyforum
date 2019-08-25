<template>
  <v-app>
    <!-- Main header, breadcrumbs & router for page contents -->
    <HeaderComponent />
    <v-container fluid class="pa-0">
      <v-content class="grey lighten-3">
        <v-row no-gutters>
          <v-col cols="12">
            <router-view></router-view>
          </v-col>
          <v-col cols="12">
            <FooterComponent />
          </v-col>
        </v-row>
      </v-content>
      <AttendDialog />
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AttendDialog from "./components/AttendDialog";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    AttendDialog
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.mont {
  font-family: "Montserrat", sans-serif !important;
}
@font-face {
  font-family: "VolteRounded";
  src: url("/fonts/VolteRounded-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "VolteRounded";
  src: url("/fonts/VolteRounded-Bold.otf") format("opentype");
  font-weight: bold;
  font-style: normal;
}
.volte {
  font-family: "VolteRounded", sans-serif !important;
}
</style>

