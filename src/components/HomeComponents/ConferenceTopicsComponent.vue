<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold display-1">
      <span class="volte" v-if="isArabic">
        حلقات النقاش
      </span>
      <span class="volte" v-else>
        CONFERENCE TOPICS
      </span>
    </v-col>
    <v-col
      cols="6"
      v-for="topic in topicsArray"
      :key="topic[langKey].title"
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
                  <span class="mont" v-html="topic[langKey].title"></span>
                </div>
                <div
                  class="white--text text-center subtitle-2 hidden-md-and-up"
                  style="padding-top: 40px;"
                >
                  <span class="mont" v-html="topic[langKey].titleShort"></span>
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
                  {{ topic[langKey].hoverTitle }}
                </div>
                <ul class="hidden-xs-only">
                  <li
                    v-for="(point, index) in topic[langKey].bulletPoints"
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
                    :to="isArabic ? `/conference/ar` : `/conference/en`"
                  >
                    <span class="caption">
                      {{ isArabic ? `اعرف أكثر` : `Discover` }}
                    </span>
                  </v-btn>
                </div>
              </div>
            </v-fade-transition>
          </div>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="6" class="text-center mb-3 mt-9 mx-auto">
      <v-btn
        rounded
        outlined
        block
        color="primary"
        :to="isArabic ? `/conference/ar` : `/conference/en`"
      >
        <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
          {{ isArabic ? `المزيد` : `View All` }}
        </span>
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
          bgImageUrl: `/images/topics-entertainment.jpg`,
          en: {
            title: "Entertainment<br>& Economy Building",
            titleShort: "Entertainment<br>& Economy Building",
            hoverTitle: "ENTERTAINMENT & ECONOMY BUILDING:",
            bulletPoints: [
              "Entertainment & Saudi Vision 2030 ",
              "Enriching Lives & Improving Quality of Life",
              "Diversifying Economy",
              "Economic transition and entertainment growth"
            ]
          },
          ar: {
            title: "الترفيه والاقتصاد",
            titleShort: "الترفيه والاقتصاد",
            hoverTitle: "الترفيه والاقتصاد:",
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
            title: "Making Impact<br> (Tech Talk Global Experiences)",
            titleShort: "Making Impact<br> (Tech Talk)",
            hoverTitle: "MAKING IMPACT (TECH TALK – GLOBAL EXPERIENCES):",
            bulletPoints: [
              "Technology Impact on Entertainment",
              "The Future of Digital Games",
              "The Impact of VR – AR – MR (Virtual entertainment)",
              "Digital Transformation (Big data – Blockchain)",
              "Empowering the Entertainment industry"
            ]
          },
          ar: {
            title: "صناعة التأثير – خبراء تقنيون",
            titleShort: "صناعة التأثير – خبراء تقنيون",
            hoverTitle: "صناعة التأثير – خبراء تقنيون:",
            bulletPoints: [
              "تأثير التكنولوجيا على الترفيه",
              "مستقبل الألعاب الرقمية",
              "تأثير الواقع الافتراضي- الترفيه الافتراضي – تأثير المحتوى الحي",
              "التحول الرقمي (البيانات الضخمة وسلاسل العملات الرقمية)",
              "تمكين صناعة الترفيه"
            ]
          }
        },
        {
          bgImageUrl: `/images/topics-joymakers.jpg`,
          en: {
            title: "The Joy Makers",
            titleShort: "The Joy Makers",
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
          ar: {
            title: "صنّاع البهجة",
            titleShort: "صنّاع البهجة",
            hoverTitle: "صنّاع البهجة:",
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
            titleShort: "Mega Ventures",
            hoverTitle: "MEGA VENTURES:",
            bulletPoints: [
              "An Expanding Infrastructure",
              "Investment Opportunities in Entertainment Sector",
              "Mega Venture Projects"
            ]
          },
          ar: {
            title: "المشاريع الضخمة",
            titleShort: "المشاريع الضخمة",
            hoverTitle: "المشاريع الضخمة:",
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
  }
};
</script>

<style>
.border-radius-topics {
  border-radius: 42px;
}
</style>
