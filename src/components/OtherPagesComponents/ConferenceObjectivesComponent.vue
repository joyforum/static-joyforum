<template>
  <v-row
    no-gutters
    class="mx-auto py-6 px-3 justify-space-around"
    style="max-width: 1280px;"
  >
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold headline">
      <span class="volte" v-if="isArabic">
        أهداف المؤتمر
      </span>
      <span class="volte" v-else>
        CONFERENCE OBJECTIVES
      </span>
      <v-dialog max-width="800px" v-model="dialog">
        <v-card class="pb-3">
          <v-row no-gutters>
            <v-col cols="12" class="pa-6 mb-3 primary">
              <v-btn icon color="white" @click="dialog = false">
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
              <span class="white--text title mont pa-6 font-weight-bold">
                {{ dialogContent[langKey].title }}
              </span>
            </v-col>
          </v-row>
          <v-row no-gutters class="pa-6">
            <v-col cols="12" sm="3">
              <v-card
                flat
                height="100px"
                width="100px"
                class="primary border-circle py-6 mx-auto"
              >
                <v-img
                  height="50px"
                  contain
                  :src="dialogContent.iconUrl"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="9" class="my-auto">
              <div class="body-1 mont pa-6">
                {{ dialogContent[langKey].hoverText }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col
      cols="6"
      sm="3"
      md="2"
      v-for="objective in objectivesArray"
      :key="objective[langKey].title"
      :class="$vuetify.breakpoint.mdAndUp ? `pa-3 mx-1` : `pa-2`"
    >
      <v-card
        height="150px"
        width="150px"
        class="mx-auto border-circle primary"
        flat
        @click="
          dialogContent = objective;
          dialog = true;
        "
      >
        <div class="pt-6">
          <v-img height="30px" contain :src="objective.iconUrl"></v-img>
          <div class="white--text pt-3 px-6 text-center caption">
            <span class="mont">
              {{ objective[langKey].title }}
            </span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogContent: {
        iconUrl: "",
        en: {
          title: "",
          hoverText: ""
        },
        ar: {
          title: "",
          hoverText: ""
        }
      },
      objectivesArray: [
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-05.svg`,
          en: {
            title: "Entertainment Innovators",
            hoverText:
              "To be the recognized international authority on entertainment development & the best practice platform."
          },
          ar: {
            title: "مبتكرو الترفيه",
            hoverText:
              "التحول إلى هيئة دولية معترف بها في مجال تطوير الترفيه وأفضل منصة للتطوير ونشر أحدث الممارسات"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-04.svg`,
          en: {
            title: "Creating Joy, building an economy",
            hoverText:
              "Deliver a focused understanding on all aspects of “Fostering Joyful Culture, Building Vibrant Society, Creating a New Economy”"
          },
          ar: {
            title: "خلق البهجة وبناء الاقتصاد",
            hoverText: `تعريف الحضور بكل ما يتعلق بـ"تعزيز ثقافة البهجة وبناء مجتمع حيوي وخلق اقتصاد جديد"`
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-03.svg`,
          en: {
            title: "Empower Young Professionals",
            hoverText:
              "To promote and encourage the development of young professionals in the entertainment & events sectors"
          },
          ar: {
            title: "تمكين المهنيين الشباب",
            hoverText:
              "التشجيع على تطوير المهنيين الشباب في قطاع الترفيه والفعاليات"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-02.svg`,
          en: {
            title: "Global Networking",
            hoverText:
              "Build and develop relationships with influential high-level entertainment leaders, business figures and government bodies. "
          },
          ar: {
            title: "شبكة عالمية",
            hoverText:
              "بناء وتطوير علاقات مع القادة المؤثرين في قطاع الترفيه ورجال الأعمال والهيئات الحكومية"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-01.svg`,
          en: {
            title: "Advocate Ethics & Integrity",
            hoverText:
              "Actively promote high standards of ethics and integrity among all stakeholders involved in the development of joy & entertainment worldwide."
          },
          ar: {
            title: "الترويج للعمل بأخلاق ونزاهة",
            hoverText:
              "التركيز على أهمية العمل بأخلاق عالية ونزاهة بين جميع الجهات المعنية بتطوير قطاع الترفيه والبهجة في العالم"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-07.svg`,
          en: {
            title: "Promote Global Investment Opportunities",
            hoverText:
              "Put forward (Establish) Entertainment Infrastructure in relation to the present golden opportunities for global & local investors. "
          },
          ar: {
            title: "تعزيز الفرص الاستثمارية العالمية",
            hoverText:
              "تأسيس بنية تحتية للترفيه من أجل تسهيل اقتناص الفرص الاستثمارية للمستثمرين المحليين والعالميين"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-08.svg`,
          en: {
            title: "GEA Globalization",
            hoverText:
              "Actively position entertainment as the fastest growing industry in Saudi Arabia by “economic statistics” for the present & future Mega Ventures"
          },
          ar: {
            title: "عولمة الهيئة العامة للترفيه",
            hoverText: `جعل قطاع الترفيه الأسرع نمواً في المملكة من خلال "الاحصاءات الاقتصادية" للمشاريع الحالية والمستقبلية الضخمة`
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-09.svg`,
          en: {
            title: "Knowledge Transfer",
            hoverText:
              "Knowledge transfer by observing and discussing up-to-date technologies, market trends, cases & experiments"
          },
          ar: {
            title: "نقل المعرفة",
            hoverText:
              "نقل المعرفة من خلال مراقبة ومناقشة التقنيات الحديثة واتجاهات السوق والحالات والتجارب"
          }
        },
        {
          iconUrl: `/images/objectives/Conference_Objectives_Icons-10.svg`,
          en: {
            title: "Build and Sustain the Entertainment Sector",
            hoverText:
              "Maintain and promote the leading position of GEA in the entertainment sectors worldwide."
          },
          ar: {
            title: "بناء قطاع الترفيه مستدام",
            hoverText:
              "الحفاظ على دور الهيئة العامة للترفيه في قطاع الترفيه العالمي والترويج له"
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
</style>
