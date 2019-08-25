<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row
        no-gutters
        class="mx-auto py-6 px-3 align-end"
        style="max-width: 1280px;"
      >
        <v-col cols="12" class="pa-3">
          <div class="primary--text font-weight-black display-1">
            <span class="volte">
              THANK YOU!
            </span>
          </div>
        </v-col>
        <v-col cols="8"></v-col>
        <v-col cols="4" class="pa-6 text-right">
          <v-img
            contain
            max-height="100px"
            src="/images/yellow-smile.png"
          ></v-img>
        </v-col>
        <v-col cols="12" class="pa-3 text-center">
          <div class="mont title font-weight-bold">
            Queries
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="pa-3 text-center">
          <div class="mont subtitle-1 grey--text text--darken-1">
            Registration
          </div>
          <div class="mont subtitle-1 primary--text">
            exhibit@joyforum.com
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="pa-3 text-center">
          <div class="mont subtitle-1 grey--text text--darken-1">
            Contact
          </div>
          <div class="mont subtitle-1 primary--text">
            +966 50 607 3695
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";

export default {
  components: {
    CountDownComponent
  }
};
</script>

<style>
</style>

