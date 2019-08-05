<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card tile flat height="600px" class="home-head-background">
        <v-card
          tile
          flat
          height="600px"
          color="rgba(0,0,0,0.2)"
          class="home-bridge-overlay"
        >
          <MainBannerComponent />
        </v-card>
      </v-card>
    </v-col>
    <v-col cols="12" class="white">
      <ChairmansMessageComponent />
    </v-col>
    <v-col cols="12" class="dots-pattern-bg grey lighten-3" style="z-index: 1;">
      <AboutComponent />
    </v-col>
    <v-col cols="12" style="background-color: #253474;">
      <v-icon
        style="position: absolute; left: 30%; margin-top: -45px; font-size: 80px;"
        color="#F7B615"
      >
        mdi-circle
      </v-icon>
      <v-icon
        style="position: absolute; left: 8%; margin-top: 130px; font-size: 40px;"
        color="#57A9AC"
      >
        mdi-circle
      </v-icon>
      <v-icon
        style="position: absolute; left: 80%; margin-top: 160px; font-size: 60px;"
        color="primary"
      >
        mdi-circle
      </v-icon>
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          PURPOSE
        </v-col>
        <v-col
          style="z-index: 1;"
          cols="12"
          class="pa-3 headline text-uppercase font-weight-bold white--text"
        >
          Developing and fortifying the entertainment ecosystem in the Kingdom
          of Saudi Arabia, thus creating a global entertainment hub.
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white" style="z-index: 1;">
      <PillarsComponent />
    </v-col>
    <v-col cols="12">
      <ConferenceTopicsComponent />
    </v-col>
    <v-col cols="12" style="background-color: #58a9ad;">
      <WorkshopTopicsComponent />
    </v-col>
    <v-col cols="12" class="white">
      <SpeakersComponent />
    </v-col>
    <v-col cols="12">
      <CelebritiesComponent />
    </v-col>
    <v-col cols="12" class="white">
      <ExhibitorsComponent />
    </v-col>
    <v-col cols="12">
      <JoyForumComponent />
    </v-col>
    <v-col cols="12" class="white">
      <SponsorsComponent />
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import MainBannerComponent from "@/components/HomeComponents/01-MainBannerComponent.vue";
import ChairmansMessageComponent from "@/components/HomeComponents/ChairmansMessageComponent.vue";
import AboutComponent from "@/components/HomeComponents/AboutComponent.vue";
import PillarsComponent from "@/components/HomeComponents/PillarsComponent.vue";
import ConferenceTopicsComponent from "@/components/HomeComponents/ConferenceTopicsComponent.vue";
import WorkshopTopicsComponent from "@/components/HomeComponents/WorkshopTopicsComponent.vue";
import SpeakersComponent from "@/components/HomeComponents/SpeakersComponent.vue";
import CelebritiesComponent from "@/components/HomeComponents/CelebritiesComponent.vue";
import ExhibitorsComponent from "@/components/HomeComponents/ExhibitorsComponent.vue";
import JoyForumComponent from "@/components/HomeComponents/JoyForumComponent.vue";
import SponsorsComponent from "@/components/HomeComponents/SponsorsComponent.vue";

export default {
  components: {
    CountDownComponent,
    MainBannerComponent,
    ChairmansMessageComponent,
    AboutComponent,
    PillarsComponent,
    ConferenceTopicsComponent,
    WorkshopTopicsComponent,
    SpeakersComponent,
    CelebritiesComponent,
    ExhibitorsComponent,
    JoyForumComponent,
    SponsorsComponent
  },
  data() {
    return {
      //dialog: false,
    };
  }
};
</script>

<style>
.image-bg-cover {
  background-size: contain;
  width: 100%;
  padding-top: 100%;
  background-position: center center;
}
.border-radius {
  border-radius: 10px;
}
.border-circle {
  border-radius: 50%;
}
</style>

