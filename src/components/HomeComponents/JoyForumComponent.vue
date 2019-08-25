<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="9">
      <v-card-title class="primary--text font-weight-black display-1">
        <span class="volte">
          JOY FORUM
        </span>
      </v-card-title>
      <v-card-text class="body-1">
        <span class="mont">
          KSA, Riyadh, Ritz-Carlton Hotel<br />
          13 - 14 October 2019
        </span>
      </v-card-text>
      <v-btn rounded color="primary" class="ml-3 px-6" router to="/exhibit"
        >Exhibit</v-btn
      >
      <v-btn
        rounded
        color="primary"
        class="ml-3 px-6"
        @click="$router.replace({ query: { attend: 1 } })"
        >Attend</v-btn
      >
    </v-col>
    <v-col cols="3" class="pt-12 pr-12">
      <v-img
        max-height="100px"
        contain
        src="/images/yellow-smile.png"
        class="mt-6"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>
