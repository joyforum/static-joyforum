<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12">
      <v-card
        max-height="600px"
        min-height="500px"
        height="60vw"
        tile
        flat
        color="rgba(0,0,0,0)"
      >
        <v-card-title class="display-2 white--text pt-6 pl-6">
          <span class="volte font-weight-bold">
            Joy Forum 2019
          </span>
        </v-card-title>
        <v-card-text class="white--text title pt-3 pl-6">
          <span class="mont">
            Fostering a Joyful Culture, <br />
            Building a Vibrant Society
          </span>
        </v-card-text>
        <v-btn rounded small color="primary" class="ml-6" router to="/exhibit"
          >Exhibit</v-btn
        >
        <v-btn
          rounded
          small
          color="primary"
          class="mx-3"
          @click="$router.replace({ query: { attend: 1 } })"
          >Attend</v-btn
        >
        <v-row
          no-gutters
          style="position: absolute; bottom: 0; width: 100%;"
          class="mt-12 justify-space-around"
        >
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="10"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div class="overline mont text-uppercase white--text">
              International<br />Speakers
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="2"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              Special<br />Events
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="15"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              International<br />Celebrities
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="16"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              Workshops
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="60"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              International<br />Exhibitors
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="100"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
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
</style>
