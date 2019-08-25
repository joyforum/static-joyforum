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
            <span class="mont">
              EXHIBITION
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont">
              <router-link to="/exhibit">
                <div class="white--text">
                  Exhibit Now
                </div>
              </router-link>
              <router-link to="/expo">
                <div class="white--text">
                  Expo Details
                </div>
              </router-link>
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont">
              REGISTRATION
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont">
              <router-link :to="{ query: { attend: '1' } }">
                <div class="white--text">
                  Attend the Exhibition
                </div>
              </router-link>
              <router-link :to="{ query: { attend: '1' } }">
                <div class="white--text">
                  Register to the Conference
                </div>
              </router-link>
              <router-link :to="{ query: { attend: '1' } }">
                <div class="white--text">
                  Attend the Workshops
                </div>
              </router-link>
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont">
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
              Riyadh, Kingdom of Saudi Arabia <br />
              Ritz-Carlton Hotel
              <v-icon small class="white--text">mdi-open-in-new</v-icon>
            </a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card-title class="white--text font-weight-medium body-2">
            <span class="mont">
              CONTACTS
            </span>
          </v-card-title>
          <v-card-text class="white--text caption">
            <span class="mont">
              Expo Manager <br />
              Ahmed Mufti <br />
              +966 50 607 3695 <br />
              Exhibit@joyforum.com
            </span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="white--text caption pl-4">
            <span class="mont">
              Event Produced by
            </span>
          </div>
          <a href="http://www.maestrogroup.com/" target="_blank">
            <v-img
              class="ml-2"
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
            :class="$vuetify.breakpoint.xsOnly ? `text-center pb-6` : `pl-2`"
          >
            <div class="pl-1 white--text pt-3 font-weight-bold subtitle-1">
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
  }
};
</script>

<style>
</style>
