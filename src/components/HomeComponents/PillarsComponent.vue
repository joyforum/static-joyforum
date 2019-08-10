<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold display-1">
      <span class="volte">
        THE JOY FORUM PILLARS
      </span>
    </v-col>
    <v-col
      cols="6"
      md="3"
      v-for="pillar in pillarsArray"
      :key="pillar.title"
      class="pa-3"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="mx-auto border-circle"
          flat
          :height="$vuetify.breakpoint.smAndUp ? `200px` : `160px`"
          :width="$vuetify.breakpoint.smAndUp ? `200px` : `160px`"
          :raised="hover"
          :style="
            `
              background-image: url('${pillar.bgImageUrl}'); background-size: cover; background-position: center center;`
          "
        >
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
                <v-btn
                  small
                  outlined
                  :to="pillar.link"
                  color="white"
                  class="mt-1"
                >
                  <span class="caption">Discover</span>
                </v-btn>
              </span>
              <div class="hidden-md-and-up">
                <v-btn
                  small
                  outlined
                  :to="pillar.link"
                  color="white"
                  class="mt-4"
                >
                  <span class="caption">Discover</span>
                </v-btn>
              </div>
            </div>
          </v-fade-transition>
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
          bgImageUrl: `/images/Expo.jpg`,
          hoverText: "Exhibit, Network, Discover and invest...",
          link: "/expo"
        },
        {
          title: "CONFERENCE",
          bgImageUrl: `/images/Conference.jpg`,
          hoverText: "Global speakers and industry pioneers...",
          link: "/conference"
        },
        {
          title: "WORKSHOPS",
          bgImageUrl: `/images/Workshops.jpg`,
          hoverText: "Over 10 workshops aiming to shape...",
          link: "/workshops"
        },
        {
          title: "EVENTS",
          bgImageUrl: `/images/SpecialEvents.jpg`,
          hoverText: "Giving Joy Back to the Joy makers...",
          link: "/specialevents"
        }
      ]
    };
  }
};
</script>

<style>
</style>
