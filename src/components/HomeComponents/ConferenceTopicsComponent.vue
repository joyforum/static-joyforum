<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pl-3 py-6 primary--text font-weight-bold headline">
      CONFERENCE TOPICS
    </v-col>
    <v-col
      cols="6"
      v-for="topic in topicsArray"
      :key="topic.title"
      class="pa-3"
    >
      <v-img contain :src="topic.bgImageUrl">
        <v-card
          height="100%"
          flat
          style="border-radius: 42px;"
          color="rgba(0,0,0,0.2)"
        >
          <div
            class="white--text text-center title"
            style="padding-top: 20%;"
            v-html="topic.title"
          ></div>
        </v-card>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      topicsArray: [
        {
          title: "Entertainment<br>& Economy Building",
          bgImageUrl: `/images/topics-entertainment.png`
        },
        {
          title: "Making Impact<br> (Tech Talk Global Experiences)",
          bgImageUrl: `/images/topics-makingimpact.png`
        },
        {
          title: "The Joy Makers",
          bgImageUrl: `/images/topics-joymakers.png`
        },
        {
          title: "Mega Ventures",
          bgImageUrl: `/images/topics-mega.png`
        }
      ]
    };
  }
};
</script>

<style>
</style>
