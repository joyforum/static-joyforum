<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pl-3 py-6 primary--text font-weight-bold display-1">
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
          flat
          class="border-radius-topics"
          :raised="hover"
          :height="$vuetify.breakpoint.smAndDown ? `150px` : `250px`"
          :style="
            `background-image: url('${topic.bgImageUrl}'); background-size: cover; background-position: center center;`
          "
        >
          <div style="background-color: rgba(0,0,0,0.5); height: 100%;">
            <v-fade-transition hide-on-leave>
              <div v-if="!hover">
                <div
                  class="white--text text-center title hidden-sm-and-down"
                  style="padding-top: 80px;"
                >
                  <span class="mont" v-html="topic.title"></span>
                </div>
                <div
                  class="white--text text-center subtitle-2 hidden-md-and-up"
                  style="padding-top: 40px;"
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
                <ul class="hidden-xs-only">
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
                <div class="hidden-sm-and-up text-center">
                  <v-btn
                    small
                    outlined
                    color="white"
                    class="mt-6"
                    to="/conference"
                  >
                    <span class="caption">Discover</span>
                  </v-btn>
                </div>
              </div>
            </v-fade-transition>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="6" class="text-center mb-3 mt-9 mx-auto">
      <v-btn rounded outlined block color="primary" to="/conference">
        View All
      </v-btn>
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
          bgImageUrl: `/images/topics-entertainment.jpg`,
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
          bgImageUrl: `/images/topics-makingimpact.jpg`,
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
          bgImageUrl: `/images/topics-joymakers.jpg`,
          hoverTitle: "THE JOY MAKERS:",
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
          bgImageUrl: `/images/topics-mega.jpg`,
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
.border-radius-topics {
  border-radius: 42px;
}
</style>
