<template>
  <v-row no-gutters class="mb-8">
    <v-col cols="12">
      <v-row
        no-gutters
        class="mx-auto pt-6 pb-3 px-3"
        style="max-width: 1280px;"
      >
        <v-col
          cols="12"
          class="pl-3 py-6 font-weight-bold title"
          style="color: #263475;"
        >
          GLOBAL EXHIBITORS AT JOY EXPO
        </v-col>
        <v-col cols="1" class="my-auto text-right hidden-xs-only">
          <v-btn icon @click="thisSwiper.slidePrev()">
            <v-icon x-large color="primary">mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="10">
          <swiper ref="exhibitorsSwiper" :options="swiperOption" class="px-12">
            <swiper-slide v-for="exhibitor in exhibitors" :key="exhibitor">
              <v-card tile flat color="#00000000" class="my-auto">
                <v-img
                  max-height="150px"
                  contain
                  class="my-auto"
                  :src="`/images/exhibitors/${exhibitor}`"
                >
                </v-img>
              </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col cols="1" class="my-auto hidden-xs-only">
          <v-btn icon @click="thisSwiper.slideNext()">
            <v-icon x-large color="primary">mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      exhibitors: [
        "Logos-01.jpg",
        "Logos-02.jpg",
        "Logos-03.jpg",
        "Logos-04.jpg",
        "Logos-05.jpg",
        "Logos-06.jpg",
        "Logos-07.jpg",
        "Logos-08.jpg",
        "Logos-09.jpg",
        "Logos-10.jpg",
        "Logos-11.jpg",
        "Logos-12.jpg",
        "Logos-13.jpg",
        "Logos-14.jpg",
        "Logos-15.jpg",
        "Logos-16.jpg",
        "Logos-17.jpg",
        "Logos-18.jpg",
        "Logos-19.jpg",
        "Logos-20.jpg",
        "Logos-21.jpg",
        "Logos-22.jpg",
        "Logos-23.jpg",
        "Logos-24.jpg",
        "Logos-25.jpg",
        "Logos-26.jpg",
        "Logos-27.jpg",
        "Logos-28.jpg",
        "Logos-29.jpg",
        "Logos-30.jpg",
        "Logos-31.jpg",
        "Logos-32.jpg",
        "Logos-33.jpg",
        "Logos-34.jpg"
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          800: {
            slidesPerView: 3,
            spaceBetween: 25
          }
        }
      }
    };
  },
  computed: {
    thisSwiper() {
      return this.$refs.exhibitorsSwiper.swiper;
    }
  }
};
</script>

<style>
</style>
