<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold display-1">
      <span class="volte" v-if="isArabic">
        محاور منتدى صناعة الترفيه
      </span>
      <span class="volte" v-else>
        THE JOY FORUM PILLARS
      </span>
    </v-col>
    <v-col
      cols="6"
      md="3"
      v-for="pillar in pillarsArray"
      :key="pillar.title[langKey]"
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
                {{ pillar.title[langKey] }}
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
                {{ pillar.hoverText[langKey] }}
                <br />
                <v-btn
                  small
                  outlined
                  :to="pillar.link"
                  color="white"
                  class="mt-1"
                >
                  <span class="caption">{{
                    isArabic ? `اعرف أكثر` : `Discover`
                  }}</span>
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
                  <span class="caption">
                    {{ isArabic ? `اعرف أكثر` : `Discover` }}
                  </span>
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
          title: { en: "JOY EXPO", ar: "المعرض" },
          bgImageUrl: `/images/Expo.jpg`,
          hoverText: { en: "Exhibit, Network, Discover and invest...", ar: "" },
          link: "/expo"
        },
        {
          title: { en: "CONFERENCE", ar: "المؤتمر" },
          bgImageUrl: `/images/Conference.jpg`,
          hoverText: { en: "Global speakers and industry pioneers...", ar: "" },
          link: "/conference"
        },
        {
          title: { en: "WORKSHOPS", ar: "ورش العمل" },
          bgImageUrl: `/images/Workshops.jpg`,
          hoverText: { en: "Over 10 workshops aiming to shape...", ar: "" },
          link: "/workshops"
        },
        {
          title: { en: "EVENTS", ar: "الأحداث" },
          bgImageUrl: `/images/SpecialEvents.jpg`,
          hoverText: { en: "Giving Joy Back to the Joy makers...", ar: "" },
          link: "/specialevents"
        }
      ]
    };
  },
  computed: {
    isArabic() {
      if (this.$route.params.lang == "ar") {
        return true;
      } else {
        return false;
      }
    },
    langKey() {
      if (this.isArabic) {
        return "ar";
      } else {
        return "en";
      }
    }
  }
};
</script>

<style>
</style>
