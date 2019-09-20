<template>
  <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
    <v-col cols="1" class="my-auto text-right hidden-xs-only">
      <v-btn icon @click="thisSwiper.slidePrev()">
        <v-icon x-large color="primary">
          {{ isArabic ? `mdi-chevron-right` : `mdi-chevron-left` }}
        </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="12" sm="10">
      <swiper ref="speakersSwiper" :options="swiperOption" class="px-12">
        <swiper-slide v-for="(speaker, index) in lecturers" :key="index">
          <v-card
            flat
            height="150px"
            width="150px"
            class="border-circle mx-auto"
            :style="
              `background-image: url('${speaker.avatar}'); background-size: cover; background-position: center center;`
            "
            @click="
              workshopsDialogShow = true;
              workshopsDialogIndex = speaker.workshopIndex;
            "
          >
          </v-card>
          <div class="body-2 font-weight-bold text-center pt-2">
            <span class="mont">
              {{ speaker.name[langKey] }}
            </span>
          </div>
          <div class="caption text-center">
            <span class="mont">
              {{ speaker.title[langKey] }}
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </v-col>
    <v-col cols="1" class="my-auto hidden-xs-only">
      <v-btn icon @click="thisSwiper.slideNext()">
        <v-icon x-large color="primary">
          {{ isArabic ? `mdi-chevron-left` : `mdi-chevron-right` }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      speakersSwiper: {},
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 100,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          800: {
            slidesPerView: 2,
            spaceBetween: 30
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
    thisSwiper() {
      return this.$refs.speakersSwiper.swiper;
    },
    lecturers() {
      return this.$store.getters.lecturers;
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
