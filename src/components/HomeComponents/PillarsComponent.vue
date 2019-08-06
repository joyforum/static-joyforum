<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold headline">
      <span class="volte">
        THE JOY FORUM PILLARS
      </span>
    </v-col>
    <v-col
      cols="6"
      sm="3"
      v-for="pillar in pillarsArray"
      :key="pillar.title"
      class="pa-3"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto border-circle" flat :raised="hover">
          <v-img contain :src="pillar.bgImageUrl">
            <v-fade-transition hide-on-leave>
              <div
                class="white--text text-center subtitle-1 font-weight-bold"
                v-if="!hover"
                style="padding-top: 40%;"
              >
                <span class="mont">
                  {{ pillar.title }}
                </span>
              </div>
            </v-fade-transition>
            <v-fade-transition hide-on-leave>
              <div
                class="white--text text-center body-1 px-6"
                v-if="hover"
                style="padding-top: 30%;"
              >
                <span class="hidden-sm-and-down">
                  {{ pillar.hoverText }}
                  <br />
                  <v-btn small outlined color="white" class="mt-3">
                    <span class="caption">Discover</span>
                  </v-btn>
                </span>
                <div class="hidden-md-and-up">
                  <v-btn small outlined color="white" class="mt-3">
                    <span class="caption">Discover</span>
                  </v-btn>
                </div>
              </div>
            </v-fade-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pillarsArray: [
        {
          title: "JOY EXPO",
          bgImageUrl: `/images/pillars-expo.png`,
          hoverText: "Exhibit, Network, Discover and invest...",
          link: ""
        },
        {
          title: "CONFERENCE",
          bgImageUrl: `/images/pillars-conference.png`,
          hoverText: "Global speakers and industry pioneers...",
          link: ""
        },
        {
          title: "WORKSHOPS",
          bgImageUrl: `/images/pillars-workshops.png`,
          hoverText: "Over 10 workshops aiming to shape...",
          link: ""
        },
        {
          title: "EVENTS",
          bgImageUrl: `/images/pillars-events.png`,
          hoverText: "Giving Joy Back to the Joy makers...",
          link: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
