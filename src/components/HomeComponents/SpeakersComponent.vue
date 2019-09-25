<template>
  <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
    <v-col cols="1" class="my-auto text-right hidden-xs-only">
      <v-btn icon @click="thisSwiper.slidePrev()">
        <v-icon x-large color="primary">mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="12" sm="10">
      <swiper ref="speakersSwiper" :options="swiperOption" class="px-12">
        <swiper-slide v-for="speaker in speakers" :key="speaker.title">
          <v-card flat class="border-circle">
            <v-img contain :src="speaker.imgSrc"> </v-img>
          </v-card>
          <div class="body-2 font-weight-bold text-center pt-2">
            <span class="mont">
              {{ speaker.name }}
            </span>
          </div>
          <div class="caption text-center">
            <span class="mont">
              {{ speaker.title }}
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </v-col>
    <v-col cols="1" class="my-auto hidden-xs-only">
      <v-btn icon @click="thisSwiper.slideNext()">
        <v-icon x-large color="primary">mdi-chevron-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: "Speaker Name",
          title: "Speaker Title 1",
          imgSrc: "/images/gea-logo.png"
        },
        {
          name: "Speaker Name",
          title: "Speaker Title 2",
          imgSrc: "/images/gea-logo.png"
        },
        {
          name: "Speaker Name",
          title: "Speaker Title 3",
          imgSrc: "/images/gea-logo.png"
        },
        {
          name: "Speaker Name",
          title: "Speaker Title 4",
          imgSrc: "/images/gea-logo.png"
        },
        {
          name: "Speaker Name",
          title: "Speaker Title 5",
          imgSrc: "/images/gea-logo.png"
        }
      ],
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
    thisSwiper() {
      return this.$refs.speakersSwiper.swiper;
    }
  }
};
</script>

<style>
</style>
