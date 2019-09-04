<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12" class="px-6">
      <div class="display-2 white--text pt-6">
        <span class="volte font-weight-bold" v-if="isArabic">
          الفعاليات الخاصة لصناعة الترفيه 2019
        </span>
        <span class="volte font-weight-bold" v-else>
          JOY SPECIAL EVENTS 2019
        </span>
      </div>
      <div class="white--text title pt-3">
        <span class="mont" v-if="isArabic">
          تكريم صنّاع البهجة
        </span>
        <span class="mont" v-else>
          AWARDING THE BEST<br />
          JOY MAKERS
        </span>
      </div>
      <div class="white--text display-2 border-left-white px-3 mt-3">
        <span class="volte font-weight-bold">
          <number
            ref="number1"
            :from="0"
            :to="15"
            :duration="2"
            :delay="1"
            easing="Power1.easeOut"
          />
        </span>
        <div class="mont title" v-if="isArabic">
          شخصية عالمية مشهورة
        </div>
        <div class="mont title" v-else>
          International Celebrities
        </div>
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
.border-left-white {
  border-left: 2px white solid;
}
</style>
