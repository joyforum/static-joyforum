<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold headline">
      THE JOY FORUM PILLARS
    </v-col>
    <v-col
      cols="6"
      sm="3"
      v-for="pillar in pillarsArray"
      :key="pillar.title"
      class="pa-3"
    >
      <v-img contain :src="pillar.bgImageUrl">
        <div
          class="white--text text-center subtitle-1 font-weight-bold"
          style="margin-top: 42%;"
        >
          {{ pillar.title }}
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pillarsArray: [
        {
          title: "JOY EXPO",
          bgImageUrl: `/images/pillars-expo.png`
        },
        {
          title: "CONFERENCE",
          bgImageUrl: `/images/pillars-conference.png`
        },
        {
          title: "WORKSHOPS",
          bgImageUrl: `/images/pillars-workshops.png`
        },
        {
          title: "EVENTS",
          bgImageUrl: `/images/pillars-events.png`
        }
      ]
    };
  }
};
</script>

<style>
</style>
