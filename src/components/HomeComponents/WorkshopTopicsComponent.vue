<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col
          cols="12"
          class="pl-3 py-6 white--text font-weight-bold headline"
        >
          WORKSHOP TOPICS
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="pb-12">
        <v-col cols="12"> </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      workshopTopics: [
        {
          title: "Start your event management business"
        },
        {
          title: "Establishing your company"
        },
        {
          title: "Valuation & Pitching Methods for new projects"
        },
        {
          title: "Customer Journey Mapping"
        },
        {
          title: "Content Curation"
        },
        {
          title: "Theme Park (getting started)"
        },
        {
          title: "Crowd Management & Safety"
        },
        {
          title: "Content Localization"
        },
        {
          title: "Service & Experience Design"
        },
        {
          title: "Applying Design Thinking to Event Design"
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style>
</style>
