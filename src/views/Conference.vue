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
          <span class="volte" v-if="isArabic">
            حلقات النقاش
          </span>
          <span class="volte" v-else>
            CONFERENCE TOPICS
          </span>
        </v-col>
        <v-col cols="6" class="text-center">
          <v-card
            height="120px"
            width="120px"
            @click="isDayOne = true"
            class="border-circle mx-auto"
            flat
            :color="isDayOne ? `primary` : `grey`"
          >
            <div
              class="white--text mont body-2 font-weight-bold pt-6"
              v-if="isArabic"
            >
              يوم 1
            </div>
            <div class="white--text mont body-2 font-weight-bold pt-6" v-else>
              Day 1
            </div>
            <div class="white--text mont caption pt-2" v-if="isArabic">
              الأحد
              <br />
              13 أكتوبر
            </div>
            <div class="white--text mont caption pt-2" v-else>
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
            class="border-circle mx-auto"
            :color="isDayOne ? `grey` : `primary`"
            flat
          >
            <div
              class="white--text mont body-2 font-weight-bold pt-6"
              v-if="isArabic"
            >
              يوم 2
            </div>
            <div class="white--text mont body-2 font-weight-bold pt-6" v-else>
              Day 2
            </div>
            <div class="white--text mont caption pt-2" v-if="isArabic">
              الإثنين
              <br />
              14 أكتوبر
            </div>
            <div class="white--text mont caption pt-2" v-else>
              Monday
              <br />
              October 14th
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          class="px-4 pt-12"
          v-for="(topic, index) in topicsArray"
          :key="topic.bgImageUrl"
          v-show="showTopic(index)"
        >
          <v-card color="white" flat class="border-radius">
            <v-row no-gutters>
              <v-col cols="12">
                <v-chip color="primary" class="mx-6 mb-6 py-6 px-3 mt-n6">
                  <span class="mont body-1 font-weight-bold">
                    {{ topic[langKey].title }}
                  </span>
                </v-chip>
              </v-col>
              <v-col cols="12" md="3" class="py-3">
                <v-card
                  height="200px"
                  flat
                  class="border-radius mx-auto"
                  max-width="180px"
                  :style="
                    `background-image: url('${topic.bgImageUrl}'); background-size: cover; background-position: center center;`
                  "
                >
                </v-card>
              </v-col>
              <v-col cols="12" md="9" class="px-3 my-6">
                <ul class="body-1 mont grey--text font-weight-bold">
                  <li
                    v-for="bullet in topic[langKey].bulletPoints"
                    :key="bullet"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </v-col>
              <v-col cols="12" class="px-8 pt-4 temp-hidden">
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
              <v-col cols="12" class="px-8 pt-3 temp-hidden">
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
      isDayOne: true,
      topicsArray: [
        {
          bgImageUrl: `/images/topics-entertainment.jpg`,
          en: {
            title: "Topic 1: Entertainment & Economy Building",
            bulletPoints: [
              "Entertainment & Saudi Vision 2030 ",
              "Enriching Lives & Improving Quality of Life",
              "Diversifying Economy",
              "Economic transition and entertainment growth"
            ]
          },
          ar: {
            title: "الموضوع الأول: الترفيه والاقتصاد",
            bulletPoints: [
              "الترفيه ورؤية المملكة 2030",
              "إثراء الحياة وتعزيز جودتها",
              "تنويع الاقتصاد",
              "التحول الاقتصادي ونمو قطاع الترفيه"
            ]
          }
        },
        {
          bgImageUrl: `/images/topics-makingimpact.jpg`,
          en: {
            title: "Topic 2: Making Impact - (Tech Talk Global Experiences)",
            bulletPoints: [
              "Technology Impact on Entertainment",
              "The Future of Digital Games",
              "The Impact of VR – AR – MR (Virtual entertainment)",
              "The impact of Live content",
              "Digital Transformation (Big data – Blockchain)",
              "Empowering the Entertainment industry"
            ]
          },
          ar: {
            title: "الموضوع الثاني: صناعة التأثير – خبراء تقنيون",
            bulletPoints: [
              "تأثير التكنولوجيا على الترفيه",
              "مستقبل الألعاب الرقمية",
              "تأثير المحتوى الحي",
              "تأثير الواقع الافتراضي- الترفيه الافتراضي – تأثير المحتوى الحي",
              "التحول الرقمي (البيانات الضخمة وسلاسل العملات الرقمية)",
              "تمكين صناعة الترفيه"
            ]
          }
        },
        {
          bgImageUrl: `/images/topics-joymakers.jpg`,
          en: {
            title: "Topic 1: The Joy Makers",
            bulletPoints: [
              "Seizing Joy",
              "The Joy Makers of Films",
              "The Joy Makers of Theme Parks",
              "The Joy Makers of Performing Arts",
              "The Joy Makers of Digital Entertainment",
              "The Joy Makers of Competitive Sports"
            ]
          },
          ar: {
            title: "الموضوع الأول: صنّاع البهجة",
            bulletPoints: [
              "اغتنام لحظات البهجة ",
              "صنّاع البهجة للأفلام",
              "صنّاع البهجة لمدن الترفيه",
              "صنّاع البهجة للفنون الاستعراضية",
              "صنّاع البهجة للترفيه الرقمي",
              "صنّاع البهجة للرياضات التنافسية"
            ]
          }
        },
        {
          bgImageUrl: `/images/topics-mega.jpg`,
          en: {
            title: "Mega Ventures",
            bulletPoints: [
              "An Expanding Infrastructure",
              "Investment Opportunities in Entertainment Sector",
              "Q & A"
            ]
          },
          ar: {
            title: "المشاريع الضخمة",
            bulletPoints: [
              "توسيع البنية التحتية",
              "فرص استثمارية في قطاع الترفيه",
              "مشاريع ضخمة"
            ]
          }
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
  },
  methods: {
    showTopic(index) {
      if (this.isDayOne) {
        return index < 2;
      } else {
        return index > 1;
      }
    }
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

