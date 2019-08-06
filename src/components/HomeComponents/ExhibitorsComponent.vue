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
                  max-height="80px"
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
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.jpg",
        "11.png",
        "12.jpg",
        "13.png",
        "14.png",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.png",
        "20.png",
        "21.jpg",
        "22.jpg",
        "23.png",
        "24.png",
        "25.gif",
        "26.png",
        "27.jpg",
        "28.png",
        "29.png",
        "30.png",
        "31.jpg",
        "32.jpg"
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
