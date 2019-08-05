<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12">
      <v-card height="600px" tile flat color="rgba(0,0,0,0)">
        <v-card-title class="display-2 white--text font-weight-black pt-6 pl-6">
          Joy Forum 2019
        </v-card-title>
        <v-card-text class="white--text title pt-3 pl-6">
          Where Business Opportunities<br />
          &amp; Entertainment Intertwine
        </v-card-text>
        <v-btn rounded small color="primary" class="ml-6">Exhibit</v-btn>
        <v-btn rounded small color="primary" class="mx-3">Attend</v-btn>
        <v-row
          no-gutters
          style="position: absolute; bottom: 0; width: 100%;"
          class="px-12 mt-12 justify-space-around"
        >
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="10"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
              <sup class="white--text">+</sup>
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              International<br />Speakers
            </div>
          </v-col>
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="2"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              Special<br />Events
            </div>
          </v-col>
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="15"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
              <sup class="white--text">+</sup>
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              International<br />Celebrities
            </div>
          </v-col>
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="16"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              Workshops
            </div>
          </v-col>
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="60"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
              <sup class="white--text">+</sup>
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              International<br />Exhibitors
            </div>
          </v-col>
          <v-col cols="4" md="1" class="pa-3">
            <div class="primary--text title">
              <number
                ref="number1"
                :from="0"
                :to="100"
                :duration="2"
                :delay="1"
                easing="Power1.easeOut"
              />
              <sup class="white--text">+</sup>
            </div>
            <div class="caption text-uppercase font-weight-bold white--text">
              Investors
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
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
</style>
