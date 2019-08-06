<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="300px"
        height="40vw"
        max-height="400px"
        class="expo-head-background"
      >
        <ExpoBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12" class="expoblue-bg">
      <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
        <v-col cols="9">
          <div class="white--text title my-3 mx-3">
            <span class="mont">
              EXPLORE CUTTING-EDGE TEHNOLOGIES IN THE ENTERTAINMENT SECTOR
            </span>
          </div>
        </v-col>
        <v-col cols="3" class="my-auto text-right">
          <v-btn rounded small color="primary" class="mx-3">
            Exhibit Now
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <ExpoAboutComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row
        no-gutters
        class="mx-auto pa-3 justify-space-around"
        style="max-width: 1280px;"
      >
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          <span class="volte expoblue-text">
            BE ONE OF THE JOY MAKERS,<br />
            EXHIBIT NOW!
          </span>
        </v-col>
        <v-col cols="12" class="pa-3">
          <div class="mont body-1">
            Join more than 100 other exhibitors in Joy Expo at Ritz Carlton
            Riyadh, where we create a welcoming atmosphere with a
            <br />
            comfortable food and beverage lounge in the heart of the exhibit
            space. Exhibit types and sizes are varied, with games and other
            <br />
            interactive activities situated throughout. This year the Joy Forum
            has worked to bring exhibit costs down for our partners, without
            <br />
            compromising on quality
          </div>
        </v-col>
        <v-col cols="6" class="pa-6">
          <v-img
            contain
            max-height="300px"
            src="/images/joy-island-card-1.png"
          ></v-img>
        </v-col>
        <v-col cols="6" class="pa-6">
          <v-img
            contain
            max-height="300px"
            src="/images/joy-island-card-2.png"
          ></v-img>
        </v-col>
        <v-col cols="5" class="text-center">
          <v-btn
            rounded
            :block="$vuetify.breakpoint.smAndDown"
            color="primary px-6"
          >
            <div :class="$vuetify.breakpoint.smAndDown ? `caption` : `body-1`">
              Exhibition Floor Plan
            </div>
          </v-btn>
        </v-col>
        <v-col cols="5" class="text-center">
          <v-btn
            rounded
            :block="$vuetify.breakpoint.smAndDown"
            color="primary px-6"
          >
            <div :class="$vuetify.breakpoint.smAndDown ? `caption` : `body-1`">
              Download Brochure
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <ExhibitorsComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="8" class="pa-3 my-auto">
          <div class="pa-3 mb-6 volte expoblue-text font-weight-bold headline">
            JOY EXPO 2019
          </div>
          <v-btn rounded color="#263475" class="ml-3 px-6 white--text">
            Exhibit
          </v-btn>
          <v-btn rounded color="#263475" class="ml-3 px-6 white--text">
            Attend
          </v-btn>
          <v-btn rounded color="#263475" class="ml-3 px-6 white--text">
            Contact Us
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="pa-3 my-auto">
          <v-card outlined flat class="border-radius pa-3">
            <v-row no-gutters>
              <v-col cols="4">
                <v-img
                  contain
                  max-height="120px"
                  src="/images/about.png"
                ></v-img>
              </v-col>
              <v-col cols="8" class="pa-3">
                <div class="mont primary--text body-1">Ahmed Mufti</div>
                <div class="mont expoblue-text body-1">Expo Manager</div>
                <div class="mont caption">+966 50 607 3695</div>
                <div class="mont caption">exhibit@joyforum.com</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import ExpoBannerComponent from "@/components/ExpoComponents/ExpoBannerComponent.vue";
import ExpoAboutComponent from "@/components/ExpoComponents/ExpoAboutComponent.vue";
import ExhibitorsComponent from "@/components/HomeComponents/ExhibitorsComponent.vue";

export default {
  components: {
    CountDownComponent,
    ExpoBannerComponent,
    ExpoAboutComponent,
    ExhibitorsComponent
  },
  data() {
    return {
      //dialog: false,
    };
  }
};
</script>

<style>
.expoblue-bg {
  background-color: #263475;
}
.expoblue-text {
  color: #263475;
}
.expo-head-background {
  background-image: url("/images/Expo.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

