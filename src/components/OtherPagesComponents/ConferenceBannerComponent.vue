<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12" class="px-6">
      <div class="display-2 white--text pt-6">
        <span class="volte font-weight-bold">
          JOY CONFERENCE 2019
        </span>
      </div>
      <div class="white--text title pt-3">
        <span class="mont">
          INTERNATIONAL PIONEERS OF JOY
        </span>
      </div>
      <div class="white--text display-2 border-left-white pl-3 mt-3">
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
        <div class="mont title">
          International Speakers
        </div>
      </div>
      <div class="py-4">
        <v-btn rounded color="white" class="mx-3" router to="/attend">
          <span class="primary--text">
            Attend
          </span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
.border-left-white {
  border-left: 2px white solid;
}
</style>
