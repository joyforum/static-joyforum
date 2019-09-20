<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12" class="px-6">
      <div class="display-2 white--text pt-6">
        <span class="volte font-weight-bold" v-if="isArabic">
          مؤتمر صناعة الترفيه 2019
        </span>
        <span class="volte font-weight-bold" v-else>
          JOY CONFERENCE 2019
        </span>
      </div>
      <div class="white--text title pt-3">
        <span class="mont" v-if="isArabic">
          روّاد الترفيه الدوليين
        </span>
        <span class="mont" v-else>
          INTERNATIONAL PIONEERS OF JOY
        </span>
      </div>
      <div
        :class="`white--text display-2 sideborder-${langKey}-white px-3 mt-3`"
      >
        <span class="volte font-weight-bold">
          <number
            ref="number1"
            :from="0"
            :to="10"
            :duration="2"
            :delay="1"
            easing="Power1.easeOut"
          />
        </span>
        <div class="mont title" v-if="isArabic">
          متحدثين دوليين
        </div>
        <div class="mont title" v-else>
          International Speakers
        </div>
      </div>
      <div class="py-4">
        <v-btn
          rounded
          color="white"
          class="mx-3"
          href="http://www.cvent.com/d/ryqdbb"
          target="_blank"
        >
          <span class="primary--text" v-if="isArabic">
            <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
              حضور المنتدى
            </span>
          </span>
          <span class="primary--text" v-else>
            Attend
          </span>
        </v-btn>
      </div>
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
    },
    langKey() {
      if (this.isArabic) {
        return "ar";
      } else {
        return "en";
      }
    }
  }
};
</script>

<style>
</style>
