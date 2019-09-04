<template>
  <v-row no-gutters class="primary">
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-3" style="max-width: 1280px;">
        <v-col cols="12" class="hidden-sm-and-up">
          <v-img
            class="ma-6"
            contain
            max-height="100px"
            src="/images/footer-logo.png"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont" v-if="isArabic">
              المعرض
            </span>
            <span class="mont" v-else>
              EXHIBITION
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont">
              <router-link :to="isArabic ? `/exhibit/ar` : `/exhibit/en`">
                <div class="white--text" v-if="isArabic">
                  شارك الآن في المعرض
                </div>
                <div class="white--text" v-else>
                  Exhibit Now
                </div>
              </router-link>
              <router-link to="/expo">
                <div class="white--text" v-if="isArabic">
                  تفاصيل المعرض
                </div>
                <div class="white--text" v-else>
                  Expo Details
                </div>
              </router-link>
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont" v-if="isArabic">
              التسجيل
            </span>
            <span class="mont" v-else>
              REGISTRATION
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont">
              <a href="http://www.cvent.com/d/ryqdbb" target="_blank">
                <div class="white--text" v-if="isArabic">
                  لحضور المعرض
                </div>
                <div class="white--text" v-else>
                  Attend the Exhibition
                </div>
              </a>
              <a href="http://www.cvent.com/d/ryqdbb" target="_blank">
                <div class="white--text" v-if="isArabic">
                  سجّل في المؤتمر
                </div>
                <div class="white--text" v-else>
                  Register to the Conference
                </div>
              </a>
              <a href="http://www.cvent.com/d/ryqdbb" target="_blank">
                <div class="white--text" v-if="isArabic">
                  لحضور ورش العمل
                </div>
                <div class="white--text" v-else>
                  Attend the Workshops
                </div>
              </a>
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont" v-if="isArabic">
              الموقع
            </span>
            <span class="mont" v-else>
              LOCATION
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <a
              class="mont white--text"
              href="https://goo.gl/maps/AL5QPG4emK6naFtm8"
              target="_blank"
              style="text-decoration: none;"
            >
              <span v-if="isArabic">
                الرياض – المملكة العربية السعودية <br />
                فندق الريتز كارلتون
                <v-icon small class="white--text">mdi-open-in-new</v-icon>
              </span>
              <span v-else>
                Riyadh, Kingdom of Saudi Arabia <br />
                Ritz-Carlton Hotel
                <v-icon small class="white--text">mdi-open-in-new</v-icon>
              </span>
            </a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont" v-if="isArabic">
              للتواصل
            </span>
            <span class="mont" v-else>
              CONTACTS
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont" v-if="isArabic">
              فريق دعم الحضور <br />
              00966563475438 <br />
              Attend@joyforum.com <br />
              فريق دعم المعرض <br />
              Exhibit@joyforum.com
            </span>
            <span class="mont" v-else>
              Attendee Support Team <br />
              +966 56 347 5438 <br />
              Attend@joyforum.com <br />
              Expo Support Team <br />
              Exhibit@joyforum.com
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="white--text caption px-4">
            <span class="mont" v-if="isArabic">
              إنتاج
            </span>
            <span class="mont" v-else>
              Event Produced by
            </span>
          </div>
          <a href="http://www.maestrogroup.com/" target="_blank">
            <v-img
              class="mx-2"
              contain
              max-height="20px"
              max-width="120px"
              src="/images/MaestroLogo-white.png"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="6" class="hidden-xs-only">
          <v-img
            class="ma-6"
            contain
            max-height="100px"
            src="/images/footer-logo.png"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="3">
          <div
            :class="$vuetify.breakpoint.xsOnly ? `text-center pb-6` : `px-2`"
          >
            <div class="px-1 white--text pt-3 font-weight-bold subtitle-1">
              <span class="mont">
                JoyForumKSA
              </span>
            </div>
            <v-btn
              fab
              depressed
              x-small
              color="white"
              class="mx-1"
              href="https://www.linkedin.com/company/joyforumksa"
              target="_blank"
            >
              <v-icon color="primary">
                mdi-linkedin
              </v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              x-small
              color="white"
              class="mx-1"
              href="https://twitter.com/JoyForumKSA"
              target="_blank"
            >
              <v-icon color="primary">mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              x-small
              color="white"
              class="mx-1"
              href="https://instagram.com/joyforumksa/"
              target="_blank"
            >
              <v-icon color="primary">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              x-small
              color="white"
              class="mx-1"
              href="https://www.facebook.com/JoyForumKSA/"
              target="_blank"
            >
              <v-icon color="primary">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              fab
              depressed
              x-small
              color="white"
              class="mx-1"
              href="https://www.youtube.com/channel/UCzr5f6ncQGfRkTBzEf-p06A"
              target="_blank"
            >
              <v-icon color="primary">mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      //
    };
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
