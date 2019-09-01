<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col
          cols="12"
          class="px-3 py-6 white--text font-weight-bold display-1"
        >
          <span class="volte" v-if="isArabic">
            ورش العمل
          </span>
          <span class="volte" v-else>
            WORKSHOPS TOPICS
          </span>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="pb-12">
        <v-col cols="12">
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="topic in workshopTopics"
              :key="topic.title[langKey]"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  tile
                  flat
                  color="#58a9ad"
                  :raised="hover"
                  @click.stop="null"
                >
                  <v-img contain :src="topic.imgSrc">
                    <div
                      class="white--text body-2 font-weight-bold text-center px-6"
                      style="padding-top: 40%;"
                    >
                      <span class="mont">
                        {{ topic.title[langKey] }}
                      </span>
                    </div>
                  </v-img>
                </v-card>
              </v-hover>
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" class="text-center mb-9 mx-auto">
      <v-btn
        rounded
        outlined
        block
        color="white"
        :to="isArabic ? `/workshops/ar` : `/workshops/en`"
      >
        {{ isArabic ? `المزيد` : `View All` }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      workshopTopics: [
        {
          title: {
            en: "Start your Event Management Business",
            ar: "أطلق مشروع إدارة الفعاليات الخاص بك"
          },
          imgSrc: "/images/workshops-start.jpg"
        },
        {
          title: { en: "Establishing Your Company", ar: "أسس شركتك" },
          imgSrc: "/images/workshops-establishing.jpg"
        },
        {
          title: {
            en: "Valuations & Pitching Methods",
            ar: "أساليب التقييم والعرض"
          },
          imgSrc: "/images/workshops-valuation.jpg"
        },
        {
          title: { en: "Customer Journey Mapping", ar: "تخطيط رحلة العملاء" },
          imgSrc: "/images/workshops-customerjourney.jpg"
        },
        {
          title: { en: "Content Curation", ar: "إنشاء المحتوى" },
          imgSrc: "/images/workshops-contentcuration.jpg"
        },
        {
          title: {
            en: "Theme Park (Getting Started)",
            ar: "المدن الترفيهية - الانطلاق"
          },
          imgSrc: "/images/workshops-themepark.jpg"
        },
        {
          title: {
            en: "Crowd Management & Safety",
            ar: "إدارة الحشود والسلامة"
          },
          imgSrc: "/images/workshops-crowdmanagement.jpg"
        },
        {
          title: { en: "Content Localization", ar: "توطين المحتوى" },
          imgSrc: "/images/workshops-contentlocalization.jpg"
        },
        {
          title: {
            en: "Service & Experience Design",
            ar: "تصميم الخدمات والتجارب"
          },
          imgSrc: "/images/workshops-serviceexperience.jpg"
        },
        {
          title: {
            en: "Applying Design Thinking to Event Design",
            ar: "تطبيق التفكير التصميمي "
          },
          imgSrc: "/images/workshops-designthinking.jpg"
        }
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 3,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          800: {
            slidesPerView: 2,
            spaceBetween: 3
          }
        }
      }
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
