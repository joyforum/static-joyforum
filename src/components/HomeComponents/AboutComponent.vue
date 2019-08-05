<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
      ABOUT JOY FORUM 2019
    </v-col>
    <v-col cols="12" v-show="$vuetify.breakpoint.xsOnly">
      <v-img contain src="/images/about.png"></v-img>
    </v-col>
    <v-col cols="12" sm="8" class="pa-3 body-1 text-justify">
      In a Kingdom surprising the world everyday with its remarkable mega
      projects and outstanding accomplishments aligned with its Vision 2030,
      allow us on behalf of GEA to invite you to be part of JOY ENTERTAINMENT
      FORUM 2019. <br /><br />
      JOY FORUM is a GEA Sector Development Initiative designed to be the first
      step in building the entertainment Industry in the Kingdom, creating
      unparalleled investment opportunities and growth. <br />
      <br />
      Through an Exhibition gathering high level global companies in the
      entertainment sector, pivotal conference topics with inspiring speakers,
      talent development workshops, awards, challenges and other events, the
      two-day JOY Forum aspires to build a vibrant society, foster a joyful
      culture, create a new economy while spreading joy in the Kingdom. All,
      through acting as a catalyst of the entertainment culture.
    </v-col>
    <v-col cols="4" v-show="$vuetify.breakpoint.smAndUp">
      <v-img contain src="/images/about.png"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
.dots-pattern-bg {
  background-image: url("/images/dots-pattern.png");
  background-repeat: repeat;
}
</style>
