<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        max-height="600px"
        min-height="500px"
        height="60vw"
        class="home-head-background"
      >
        <v-card
          tile
          flat
          height="100%"
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
        <v-col cols="12" class="pa-3 primary--text font-weight-bold display-1">
          <span class="volte" v-if="isArabic">
            هدف المنتدى
          </span>
          <span class="volte" v-else>
            PURPOSE
          </span>
        </v-col>
        <v-col
          style="z-index: 1;"
          cols="12"
          class="pa-3 headline font-weight-bold white--text"
        >
          <span class="mont" v-if="isArabic">
            تطوير واستدامة قطاع الترفيه في المملكة، لتكون مركزاً عالمياً للترفيه
          </span>
          <span class="mont" v-else>
            FOUNDING, DEVELOPING AND SUSTAINING THE ENTERTAINMENT ECOSYSTEM IN
            THE KINGDOM, GIVING BIRTH TO A GLOBAL ENTERTAINMENT HUB.
          </span>
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
      <v-row no-gutters class="mx-auto pt-6 px-3" style="max-width: 1280px;">
        <v-col
          cols="12"
          class="px-3 py-3 primary--text font-weight-bold display-1"
        >
          <span class="volte" v-if="isArabic">
            أهم الأخبار
          </span>
          <span class="volte" v-else>
            HIGHLIGHTS
          </span>
        </v-col>
        <v-col
          cols="12"
          class="px-3 py-3 primary--text font-weight-bold title"
          v-if="false"
        >
          SPEAKERS AT JOY CONFERENCE
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white" v-if="false">
      <SpeakersComponent />
    </v-col>
    <v-col cols="12" v-if="false">
      <CelebritiesComponent />
    </v-col>
    <v-col
      cols="12"
      class="white pa-3 primary--text font-weight-bold title pb-6"
    >
      <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
        <span class="mont workshopcyan-text" v-if="isArabic">
          المحاضرين في ورش العمل
        </span>
        <span class="mont workshopcyan-text" v-else>
          WORKSHOP LECTURERS
        </span>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <LecturersComponent />
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
import LecturersComponent from "@/components/HomeComponents/LecturersComponent.vue";
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
    LecturersComponent,
    ExhibitorsComponent,
    JoyForumComponent,
    SponsorsComponent
  },
  data() {
    return {
      //dialog: false,
    };
  },
  computed: {
    isArabic() {
      if (this.$route.params.lang == "ar") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.home-head-background {
  background-image: url("/images/home-background.jpg");
  background-size: cover;
  background-position: center center;
}
.home-bridge-overlay {
  background-image: url("/images/home-bridge-overlay.png");
  background-size: contain;
  background-position: center bottom;
}
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
.temp-hidden {
  display: none;
}
</style>

