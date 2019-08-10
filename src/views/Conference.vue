<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="450px"
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
        <v-col cols="12" class="px-4 pt-12" v-if="isDayOne">
          <v-card color="white" flat class="border-radius">
            <v-row no-gutters>
              <v-col cols="12">
                <v-chip color="primary" class="mx-6 mb-6 pa-6 mt-n6">
                  <span class="mont body-1 font-weight-bold">
                    Topic 1: Entertainment & Economy Building
                  </span>
                </v-chip>
              </v-col>
              <v-col cols="12" md="3" class="py-3">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/topics-entertainment.jpg'); background-size: cover; background-position: center center; "
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6">
                <ul class="body-1 mont grey--text font-weight-bold">
                  <li>Entertainment &amp; Saudi Vision 2030</li>
                  <li>Enrich Lives &amp; Improve Quality of Life</li>
                  <li>Diversifying Economy</li>
                  <li>Economic transition and entertainment growth</li>
                </ul>
              </v-col>
              <v-col cols="12" class="pl-8 pt-4 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Hosts
                </span>
              </v-col>
              <v-col cols="12" md="3" class="my-6 temp-hidden">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/Conference_presenter-01.png'); background-size: cover; background-position: center center; "
                >
                  <div
                    class="white--text text-center primary py-2"
                    style="position: absolute; bottom: 0px; width: 100%; opacity: 0.8;"
                  >
                    <div class="px-1">
                      <div class="mont caption">Nadine Hani</div>
                      <span class="overline mont">
                        Senior Business News Presenter - Al Arabiya
                      </span>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6 temp-hidden">
                <span class="caption mont">
                  With a remarkable track record, Nadine has interviewed some of
                  the most influential decision makers in the Arab business
                  world, and internationally, including U.S. treasury secretary
                  Henry Paulson and Saudi minister of finance Dr. Ibrahim
                  Abdul-Aziz Al-Assaf, as well as hosting a personal finance
                  show.
                </span>
              </v-col>
              <v-col cols="12" class="pl-8 pt-3 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Speakers
                </span>
              </v-col>
              <v-col cols="12 py-3 temp-hidden">
                <SpeakersComponent />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" class="px-4 pt-12" v-if="isDayOne">
          <v-card color="white" flat class="border-radius">
            <v-row no-gutters>
              <v-col cols="12">
                <v-chip color="primary" class="mx-6 mb-6 pa-6 mt-n6">
                  <span class="mont body-1 font-weight-bold">
                    Topic 2: Making Impact (Tech Talk – Global Experiences)
                  </span>
                </v-chip>
              </v-col>
              <v-col cols="12" md="3" class="py-3">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/topics-makingimpact.jpg'); background-size: cover; background-position: center center; "
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6">
                <ul class="body-1 mont grey--text font-weight-bold">
                  <li>Technology Impact on Entertainment Events</li>
                  <li>The Future of Digital Games</li>
                  <li>The Impact of VR – AR – MR (Virtual entertainment)</li>
                  <li>The impact of Live content</li>
                  <li>Digital Transformation (Big data – Blockchain)</li>
                  <li>Empowering the Entertainment industry</li>
                </ul>
              </v-col>
              <v-col cols="12" class="pl-8 pt-4 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Hosts
                </span>
              </v-col>
              <v-col cols="12" md="3" class="my-6 temp-hidden">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/Conference_presenter-01.png'); background-size: cover; background-position: center center; "
                >
                  <div
                    class="white--text text-center primary py-2"
                    style="position: absolute; bottom: 0px; width: 100%; opacity: 0.8;"
                  >
                    <div class="px-1">
                      <div class="mont caption">Nadine Hani</div>
                      <span class="overline mont">
                        Senior Business News Presenter - Al Arabiya
                      </span>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6 temp-hidden">
                <span class="caption mont">
                  With a remarkable track record, Nadine has interviewed some of
                  the most influential decision makers in the Arab business
                  world, and internationally, including U.S. treasury secretary
                  Henry Paulson and Saudi minister of finance Dr. Ibrahim
                  Abdul-Aziz Al-Assaf, as well as hosting a personal finance
                  show.
                </span>
              </v-col>
              <v-col cols="12" class="pl-8 pt-3 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Speakers
                </span>
              </v-col>
              <v-col cols="12 py-3 temp-hidden">
                <SpeakersComponent />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" class="px-4 pt-12" v-if="!isDayOne">
          <v-card color="white" flat class="border-radius">
            <v-row no-gutters>
              <v-col cols="12">
                <v-chip color="primary" class="mx-6 mb-6 pa-6 mt-n6">
                  <span class="mont body-1 font-weight-bold">
                    Topic 1: The JOY Makers
                  </span>
                </v-chip>
              </v-col>
              <v-col cols="12" md="3" class="py-3">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/topics-joymakers.jpg'); background-size: cover; background-position: center center; "
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6">
                <ul class="body-1 mont grey--text font-weight-bold">
                  <li>Seizing Joy</li>
                  <li>The Joy Makers of Films</li>
                  <li>The Joy Makers of Theme Park</li>
                  <li>The Joy Makers of Performing Arts</li>
                  <li>The Joy Makers of Digital Entertainment (E-sports)</li>
                  <li>The Joy Makers of Competitive sports</li>
                </ul>
              </v-col>
              <v-col cols="12" class="pl-8 pt-4 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Hosts
                </span>
              </v-col>
              <v-col cols="12" md="3" class="my-6 temp-hidden">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/Conference_presenter-01.png'); background-size: cover; background-position: center center; "
                >
                  <div
                    class="white--text text-center primary py-2"
                    style="position: absolute; bottom: 0px; width: 100%; opacity: 0.8;"
                  >
                    <div class="px-1">
                      <div class="mont caption">Nadine Hani</div>
                      <span class="overline mont">
                        Senior Business News Presenter - Al Arabiya
                      </span>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6 temp-hidden">
                <span class="caption mont">
                  With a remarkable track record, Nadine has interviewed some of
                  the most influential decision makers in the Arab business
                  world, and internationally, including U.S. treasury secretary
                  Henry Paulson and Saudi minister of finance Dr. Ibrahim
                  Abdul-Aziz Al-Assaf, as well as hosting a personal finance
                  show.
                </span>
              </v-col>
              <v-col cols="12" class="pl-8 pt-3 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Speakers
                </span>
              </v-col>
              <v-col cols="12 py-3 temp-hidden">
                <SpeakersComponent />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" class="px-4 pt-12" v-if="!isDayOne">
          <v-card color="white" flat class="border-radius">
            <v-row no-gutters>
              <v-col cols="12">
                <v-chip color="primary" class="mx-6 mb-6 pa-6 mt-n6">
                  <span class="mont body-1 font-weight-bold">
                    Topic 2: Mega Venture
                  </span>
                </v-chip>
              </v-col>
              <v-col cols="12" md="3" class="py-3">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/topics-mega.jpg'); background-size: cover; background-position: center center; "
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6">
                <ul class="body-1 mont grey--text font-weight-bold">
                  <li>An Expanding Infrastructure</li>
                  <li>Investment Opportunities in Entertainment Sector</li>
                  <li>Q &amp; A</li>
                </ul>
              </v-col>
              <v-col cols="12" class="pl-8 pt-4 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Hosts
                </span>
              </v-col>
              <v-col cols="12" md="3" class="my-6 temp-hidden">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  style="
              background-image: url('/images/Conference_presenter-01.png'); background-size: cover; background-position: center center; "
                >
                  <div
                    class="white--text text-center primary py-2"
                    style="position: absolute; bottom: 0px; width: 100%; opacity: 0.8;"
                  >
                    <div class="px-1">
                      <div class="mont caption">Nadine Hani</div>
                      <span class="overline mont">
                        Senior Business News Presenter - Al Arabiya
                      </span>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6 temp-hidden">
                <span class="caption mont">
                  With a remarkable track record, Nadine has interviewed some of
                  the most influential decision makers in the Arab business
                  world, and internationally, including U.S. treasury secretary
                  Henry Paulson and Saudi minister of finance Dr. Ibrahim
                  Abdul-Aziz Al-Assaf, as well as hosting a personal finance
                  show.
                </span>
              </v-col>
              <v-col cols="12" class="pl-8 pt-3 temp-hidden">
                <span
                  class="title font-weight-bold mont grey--text text--darken-1"
                >
                  Speakers
                </span>
              </v-col>
              <v-col cols="12 py-3 temp-hidden">
                <SpeakersComponent />
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
.v-card:before {
  border-radius: inherit;
}
</style>

