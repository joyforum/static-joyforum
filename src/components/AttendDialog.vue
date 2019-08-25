<template>
  <v-dialog v-model="computedShow" max-width="600px">
    <v-card color="#DE1A49DD" class="border-radius pb-6">
      <v-row no-gutters class="text-center">
        <v-col cols="12" class="pb-12">
          <v-btn
            color="white"
            outlined
            absolute
            right
            class="border-radius mt-3"
            @click="computedShow = false"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="py-2">
          <div class="px-6 white--text body-1">
            <span class="mont">
              Thank you for your interest in attending
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="py-2">
          <div class="px-6 white--text title font-weight-bold">
            <span class="volte">
              JOY Forum 2019
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="py-2">
          <div class="px-6 eventsyellow-text body-1">
            <span class="mont">
              Registrations will open on September 1<sup>st</sup>, 2019
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="py-2">
          <div class="px-6 white--text body-1">
            <span class="mont">
              Looking forward to having you among us!
            </span>
          </div>
          <div class="px-6 white--text body-1">
            <span class="mont">
              Have a Joyful day
            </span>
          </div>
        </v-col>
        <v-col cols="9">
          <div class="pl-3" style="max-width: 160px;">
            <div class="pl-1 white--text pt-3 font-weight-bold body-1">
              <span class="mont">
                JoyForumKSA
              </span>
            </div>
            <v-btn
              fab
              depressed
              style="height: 20px; width: 20px;"
              color="white"
              class="mx-1"
              href="https://www.linkedin.com/company/joyforumksa"
              target="_blank"
            >
              <v-icon color="primary" x-small>
                mdi-linkedin
              </v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              style="height: 20px; width: 20px;"
              color="white"
              class="mx-1"
              href="https://twitter.com/JoyForumKSA"
              target="_blank"
            >
              <v-icon color="primary" x-small>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              style="height: 20px; width: 20px;"
              color="white"
              class="mx-1"
              href="https://instagram.com/joyforumksa/"
              target="_blank"
            >
              <v-icon color="primary" x-small>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              style="height: 20px; width: 20px;"
              color="white"
              class="mx-1"
              href="https://www.facebook.com/JoyForumKSA/"
              target="_blank"
            >
              <v-icon color="primary" x-small>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              style="height: 20px; width: 20px;"
              color="white"
              class="mx-1"
              href="https://www.youtube.com/channel/UCzr5f6ncQGfRkTBzEf-p06A"
              target="_blank"
            >
              <v-icon color="primary" x-small>mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="3" class="my-auto">
          <v-img
            contain
            max-height="30px"
            src="/images/yellow-smile.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    computedShow: {
      get() {
        return this.$route.query.attend || false;
      },
      set(value) {
        if (!value) {
          this.$router.replace({ query: {} });
        }
      }
    }
  }
};
</script>

<style>
</style>