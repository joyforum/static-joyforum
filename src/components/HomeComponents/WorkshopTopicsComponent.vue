<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col
          cols="12"
          class="pl-3 py-6 white--text font-weight-bold display-1"
        >
          <span class="volte">
            WORKSHOPS TOPICS
          </span>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="pb-12">
        <v-col cols="12">
          <swiper :options="swiperOption">
            <swiper-slide v-for="topic in workshopTopics" :key="topic.title">
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
                        {{ topic.title }}
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
      <v-btn rounded outlined block color="white" to="/workshops">
        View All
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
          title: "Start your Event Management Business",
          imgSrc: "/images/workshops-start.jpg"
        },
        {
          title: "Establishing Your Company",
          imgSrc: "/images/workshops-establishing.jpg"
        },
        {
          title: "Valuations & Pitching Methods",
          imgSrc: "/images/workshops-valuation.jpg"
        },
        {
          title: "Customer Journey Mapping",
          imgSrc: "/images/workshops-customerjourney.jpg"
        },
        {
          title: "Content Curation",
          imgSrc: "/images/workshops-contentcuration.jpg"
        },
        {
          title: "Theme Park (Getting Started)",
          imgSrc: "/images/workshops-themepark.jpg"
        },
        {
          title: "Crowd Management & Safety",
          imgSrc: "/images/workshops-crowdmanagement.jpg"
        },
        {
          title: "Content Localization",
          imgSrc: "/images/workshops-contentlocalization.jpg"
        },
        {
          title: "Service & Experience Design",
          imgSrc: "/images/workshops-serviceexperience.jpg"
        },
        {
          title: "Applying Design Thinking to Event Design",
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
  }
};
</script>

<style>
</style>
