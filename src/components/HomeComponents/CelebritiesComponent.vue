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
          CELEBRITIES AT JOY EVENTS
        </v-col>
        <v-col cols="1" class="my-auto text-right">
          <v-btn icon>
            <v-icon x-large color="primary">mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10">
          <swiper :options="swiperOption" class="px-12">
            <swiper-slide v-for="speaker in speakers" :key="speaker.title">
              <v-card class="border-circle" flat color="#00000000">
                <v-img contain :src="speaker.imgSrc"> </v-img>
              </v-card>
              <div class="body-2 font-weight-bold text-center pt-2">
                {{ speaker.title }}
              </div>
              <div class="caption text-center">
                {{ speaker.title }}
              </div>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col cols="1" class="my-auto">
          <v-btn icon>
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
      speakers: [
        {
          title: "Start",
          imgSrc: "/images/workshops-start.jpg"
        },
        {
          title: "Establishing",
          imgSrc: "/images/workshops-establishing.jpg"
        },
        {
          title: "Valuations",
          imgSrc: "/images/workshops-valuation.jpg"
        },
        {
          title: "Customer",
          imgSrc: "/images/workshops-customerjourney.jpg"
        },
        {
          title: "Content",
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
  }
};
</script>

<style>
</style>
