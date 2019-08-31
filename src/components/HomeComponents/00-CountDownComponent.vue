<template>
  <v-row no-gutters class="mx-auto my-2 px-2" style="max-width: 1280px;">
    <div class="text-center white--text">
      <span class="title mont">
        <number
          ref="number1"
          :from="0"
          :to="curDays"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption mont">
        {{ isArabic ? `أيام` : `Days` }}
      </span>
    </div>
    <v-divider vertical class="grey lighten-1 my-2 mx-3"></v-divider>
    <div class="text-center white--text">
      <span class="title mont">
        <number
          ref="number1"
          :from="0"
          :to="curHrs"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption mont">
        {{ isArabic ? `ساعات` : `Hours` }}
      </span>
    </div>
    <v-divider vertical class="grey lighten-1 my-2 mx-3"></v-divider>
    <div class="text-center white--text">
      <span class="title mont">
        <number
          ref="number1"
          :from="0"
          :to="curMins"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption mont">
        {{ isArabic ? `دقائق` : `Mins` }}
      </span>
    </div>
    <v-divider vertical class="white my-1 mx-3"></v-divider>
    <div class="white--text my-auto">
      <span class="caption mont">
        {{ isArabic ? `13 – 14 أكتوبر 2019` : `13 - 14 October 2019` }} </span
      ><br />
      <span class="caption mont">
        {{
          isArabic
            ? `الرياض - المملكة العربية السعودية`
            : `Riyadh, KSA, Ritz Carlton`
        }}
      </span>
      <div class="caption mont" v-if="isArabic">
        فندق الريتز كارلتون
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      eventDate: 1570924800000,
      curMins: 0,
      curHrs: 0,
      curDays: 0
    };
  },
  created() {
    let curTime = Date.now();
    this.curMins = Math.floor(((this.eventDate - curTime) / 1000 / 60) % 60);
    this.curHrs = Math.floor(
      ((this.eventDate - curTime) / 1000 / 60 / 60) % 24
    );
    this.curDays = Math.floor((this.eventDate - curTime) / 1000 / 60 / 60 / 24);
    this.interval = setInterval(() => {
      let curTime = Date.now();
      this.curMins = Math.floor(((this.eventDate - curTime) / 1000 / 60) % 60);
      this.curHrs = Math.floor(
        ((this.eventDate - curTime) / 1000 / 60 / 60) % 24
      );
      this.curDays = Math.floor(
        (this.eventDate - curTime) / 1000 / 60 / 60 / 24
      );
    }, 10000);
  },
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
</style>
