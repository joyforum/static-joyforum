<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pl-3 py-6 primary--text font-weight-bold headline">
      <span class="volte">
        CONFERENCE TOPICS
      </span>
    </v-col>
    <v-col
      cols="6"
      v-for="topic in topicsArray"
      :key="topic.title"
      class="pa-1"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          height="100%"
          flat
          style="border-radius: 42px;"
          color="rgba(0,0,0,0.2)"
          :raised="hover"
          @click.stop="null"
        >
          <v-img contain :src="topic.bgImageUrl">
            <v-fade-transition hide-on-leave>
              <div v-if="!hover">
                <div
                  class="white--text text-center title hidden-sm-and-down"
                  style="padding-top: 20%;"
                >
                  <span class="mont" v-html="topic.title"></span>
                </div>
                <div
                  class="white--text text-center subtitle-2 hidden-md-and-up"
                  style="padding-top: 15%;"
                >
                  <span class="mont" v-html="topic.titleShort"></span>
                </div>
              </div>
            </v-fade-transition>
            <v-fade-transition hide-on-leave>
              <div v-if="hover" class="white--text px-3 py-6">
                <div
                  :class="
                    $vuetify.breakpoint.smAndDown
                      ? `caption mont hidden-xs-only`
                      : `title mont`
                  "
                >
                  {{ topic.hoverTitle }}
                </div>
                <ul>
                  <li
                    v-for="(point, index) in topic.bulletPoints"
                    :key="point"
                    v-show="index < 3 || !$vuetify.breakpoint.smAndDown"
                  >
                    <div
                      :class="
                        $vuetify.breakpoint.smAndDown
                          ? `caption mont text-truncate`
                          : `body-1 mont`
                      "
                    >
                      {{ point }}
                    </div>
                  </li>
                </ul>
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
      topicsArray: [
        {
          title: "Entertainment<br>& Economy Building",
          titleShort: "Entertainment<br>& Economy Building",
          bgImageUrl: `/images/topics-entertainment.png`,
          hoverTitle: "ENTERTAINMENT & ECONOMY BUILDING:",
          bulletPoints: [
            "Entertainment & Saudi Vision 2030 ",
            "Enriching Lives & Improving Quality of Life",
            "Diversifying Economy",
            "Economic transition and entertainment growth"
          ]
        },
        {
          title: "Making Impact<br> (Tech Talk Global Experiences)",
          titleShort: "Making Impact<br> (Tech Talk)",
          bgImageUrl: `/images/topics-makingimpact.png`,
          hoverTitle: "MAKING IMPACT (TECH TALK – GLOBAL EXPERIENCES):",
          bulletPoints: [
            "Technology Impact on Entertainment",
            "The Future of Digital Games",
            "The Impact of VR – AR – MR (Virtual entertainment)",
            "Digital Transformation (Big data – Blockchain)",
            "Empowering the Entertainment industry"
          ]
        },
        {
          title: "The Joy Makers",
          titleShort: "The Joy Makers",
          bgImageUrl: `/images/topics-joymakers.png`,
          hoverTitle: "Hover Title Here:",
          bulletPoints: [
            "Seizing Joy",
            "The Joy Makers of Films",
            "The Joy Makers of Theme Parks",
            "The Joy Makers of Performing Arts",
            "The Joy Makers of Digital Entertainment",
            "The Joy Makers of Competitive Sports"
          ]
        },
        {
          title: "Mega Ventures",
          titleShort: "Mega Ventures",
          bgImageUrl: `/images/topics-mega.png`,
          hoverTitle: "MEGA VENTURES:",
          bulletPoints: [
            "An Expanding Infrastructure",
            "Investment Opportunities in Entertainment Sector",
            "Mega Venture Projects"
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
