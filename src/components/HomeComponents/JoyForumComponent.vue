<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="9">
      <v-card-title class="primary--text font-weight-black display-1">
        <span class="volte" v-if="isArabic">
          منتدى صناعة الترفيه
        </span>
        <span class="volte" v-else>
          JOY FORUM
        </span>
      </v-card-title>
      <v-card-text class="body-1">
        <span class="mont" v-if="isArabic">
          المملكة العربية السعودية، الرياض، فندق الريتز كارلتون<br />
          13 - 14 أكتوبر 2019
        </span>
        <span class="mont" v-else>
          KSA, Riyadh, Ritz-Carlton Hotel<br />
          13 - 14 October 2019
        </span>
      </v-card-text>
      <v-btn
        rounded
        color="primary"
        class="mx-3 px-3"
        router
        :to="isArabic ? `/exhibit/ar` : `/exhibit/en`"
      >
        <span v-if="isArabic">
          شارك في المعرض
        </span>
        <span v-else>
          Exhibit
        </span>
      </v-btn>
      <v-btn
        rounded
        color="primary"
        class="mx-3 px-3"
        href="http://www.cvent.com/d/ryqdbb"
        target="_blank"
      >
        <span v-if="isArabic">
          {{ $vuetify.breakpoint.xsOnly ? `للحضور` : `حضور المنتدى` }}
        </span>
        <span v-else>
          Attend
        </span>
      </v-btn>
    </v-col>
    <v-col cols="3" class="pt-12 pr-12">
      <v-img
        max-height="100px"
        contain
        src="/images/yellow-smile.png"
        :class="isArabic ? `mt-6 flip-smile` : `mt-6`"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    isArabic() {
      if (this.$route.params.lang == "ar") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.flip-smile {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
