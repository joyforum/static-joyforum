<template>
  <v-row no-gutters class="mx-auto my-2 pl-2" style="max-width: 1280px;">
    <div class="text-center white--text">
      <span class="title">
        <number
          ref="number1"
          :from="0"
          :to="curDays"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption">Days</span>
    </div>
    <v-divider vertical class="grey lighten-1 my-2 mx-3"></v-divider>
    <div class="text-center white--text">
      <span class="title">
        <number
          ref="number1"
          :from="0"
          :to="curHrs"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption">Hours</span>
    </div>
    <v-divider vertical class="grey lighten-1 my-2 mx-3"></v-divider>
    <div class="text-center white--text">
      <span class="title">
        <number
          ref="number1"
          :from="0"
          :to="curMins"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut"/></span
      ><br />
      <span class="caption">Mins</span>
    </div>
    <v-divider vertical class="white my-1 mx-4"></v-divider>
    <div class="white--text">
      <span class="subtitle-1">13 - 14 October 2019</span><br />
      <span class="subtitle-1">Riyadh - KSA, Ritz Carlton</span>
    </div>
    <v-spacer />
    <div class="white--text subtitle-1 my-auto mx-6 text-right hidden-xs-only">
      <span class="font-weight-bold"> Produced by<br /> </span>
      MAESTRO
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
  }
};
</script>

<style>
</style>
