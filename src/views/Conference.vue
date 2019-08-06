<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="400px"
        height="40vw"
        max-height="450px"
        class="conference-head-background"
      >
        <ConferenceBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12">
      <ConferenceAboutComponent />
    </v-col>
    <v-col cols="12" class="white">
      <ConferenceObjectivesComponent />
    </v-col>
    <v-col cols="12">
      <v-row
        no-gutters
        class="mx-auto py-6 px-3 justify-space-around"
        style="max-width: 1280px;"
      >
        <v-col
          cols="12"
          class="px-3 py-6 primary--text font-weight-bold headline"
        >
          <span class="volte">
            CONFERENCE TOPICS
          </span>
        </v-col>
        <v-col cols="6" class="text-center">
          <v-card
            height="120px"
            width="120px"
            @click="isDayOne = true"
            class="mr-12 border-circle"
            flat
            :color="isDayOne ? `primary` : `grey`"
            style="float: right;"
          >
            <div class="white--text mont body-2 font-weight-bold pt-6">
              Day 1
            </div>
            <div class="white--text mont caption pt-2">
              Sunday
              <br />
              October 13th
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" class="text-center">
          <v-card
            height="120px"
            width="120px"
            @click="isDayOne = false"
            class="ml-12 border-circle"
            :color="isDayOne ? `grey` : `primary`"
            flat
          >
            <div class="white--text mont body-2 font-weight-bold pt-6">
              Day 2
            </div>
            <div class="white--text mont caption pt-2">
              Monday
              <br />
              October 14th
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <SpeakersComponent />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import ConferenceBannerComponent from "@/components/OtherPagesComponents/ConferenceBannerComponent.vue";
import ConferenceAboutComponent from "@/components/OtherPagesComponents/ConferenceAboutComponent.vue";
import ConferenceObjectivesComponent from "@/components/OtherPagesComponents/ConferenceObjectivesComponent.vue";
import SpeakersComponent from "@/components/HomeComponents/SpeakersComponent.vue";

export default {
  components: {
    CountDownComponent,
    ConferenceBannerComponent,
    ConferenceAboutComponent,
    ConferenceObjectivesComponent,
    SpeakersComponent
  },
  data() {
    return {
      isDayOne: true
    };
  }
};
</script>

<style>
.conference-head-background {
  background-image: url("/images/Conference.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

