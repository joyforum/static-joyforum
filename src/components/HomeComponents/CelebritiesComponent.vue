<template>
  <v-row no-gutters class="mb-3">
    <v-col cols="12">
      <v-row
        no-gutters
        class="mx-auto pt-6 pb-3 px-3"
        style="max-width: 1280px;"
      >
        <v-col
          cols="12"
          class="pl-3 py-6 font-weight-bold title"
          style="color: #F7B717;"
        >
          CELEBRITIES AT JOY SPECIAL EVENTS
        </v-col>
        <v-col cols="1" class="my-auto text-right hidden-xs-only">
          <v-btn icon @click="thisSwiper.slidePrev()">
            <v-icon x-large color="primary">mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="10">
          <swiper ref="celebritiesSwiper" :options="swiperOption" class="px-12">
            <swiper-slide
              v-for="celebrity in celebrities"
              :key="celebrity.title"
            >
              <v-card class="border-circle" flat color="#00000000">
                <v-img contain :src="celebrity.imgSrc"> </v-img>
              </v-card>
              <div class="body-2 font-weight-bold text-center pt-2">
                <span class="mont">
                  {{ celebrity.name }}
                </span>
              </div>
              <div class="caption text-center">
                <span class="mont">
                  {{ celebrity.title }}
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      celebrities: [
        {
          name: "Celebrity Name",
          title: "Type 1",
          imgSrc: "/images/workshops-start.jpg"
        },
        {
          name: "Celebrity Name",
          title: "Type 2",
          imgSrc: "/images/workshops-establishing.jpg"
        },
        {
          name: "Celebrity Name",
          title: "Type 3",
          imgSrc: "/images/workshops-valuation.jpg"
        },
        {
          name: "Celebrity Name",
          title: "Type 4",
          imgSrc: "/images/workshops-customerjourney.jpg"
        },
        {
          name: "Celebrity Name",
          title: "Type 5",
          imgSrc: "/images/workshops-contentcuration.jpg"
        }
      ],
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
      return this.$refs.celebritiesSwiper.swiper;
    }
  }
};
</script>

<style>
</style>
