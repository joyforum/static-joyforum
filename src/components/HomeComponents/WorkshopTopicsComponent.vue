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
              v-for="(topic, index) in workshopsArray"
              :key="topic.title[langKey]"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  tile
                  flat
                  color="#58a9ad"
                  :raised="hover"
                  width="300px"
                  height="300px"
                  @click="
                    workshopsDialogShow = true;
                    workshopsDialogIndex = index;
                  "
                  :style="
                    `background-image: url('${topic.imgSrc}'); background-size: cover; background-position: center center;`
                  "
                >
                  <div
                    class="white--text body-2 font-weight-bold text-center px-6 pt-12"
                  >
                    <div class="mont pt-12">
                      {{ topic.title[langKey] }}
                    </div>
                  </div>
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
    },
    workshopsArray() {
      return this.$store.state.workshopsArray;
    },
    workshopsDialogShow: {
      get() {
        return this.$store.state.workshopsDialogShow;
      },
      set(value) {
        this.$store.state.workshopsDialogShow = value;
      }
    },
    workshopsDialogIndex: {
      get() {
        return this.$store.state.workshopsDialogIndex;
      },
      set(value) {
        this.$store.state.workshopsDialogIndex = value;
      }
    }
  }
};
</script>

<style>
</style>
