<template>
  <v-dialog
    v-model="workshopsDialogShow"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    max-width="1200px"
  >
    <v-card class="pb-12">
      <v-row no-gutters class="justify-space-around">
        <v-col cols="12">
          <v-card
            height="250px"
            tile
            flat
            :style="
              `background-image: url('${targetWorkshop.imgSrc}'); background-size: cover; background-position: center center;`
            "
          >
            <v-btn icon @click="workshopsDialogShow = false" class="ma-4">
              <v-icon large color="white">mdi-close</v-icon>
            </v-btn>
            <div class="headline mont font-weight-bold text-center white--text">
              {{ targetWorkshop.title[langKey] }}
            </div>
          </v-card>
        </v-col>
        <v-col
          :cols="12 / targetWorkshop.speakers.length"
          style="margin-top: -70px; z-index: 100;"
          v-for="(speaker, index) in targetWorkshop.speakers"
          :key="index"
        >
          <v-row no-gutters>
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="120px">
                <v-img :src="speaker.avatar"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8" class="pl-3 text-center text-md-start">
              <div
                :class="
                  $vuetify.breakpoint.smAndDown ? `grey--text` : `white--text`
                "
              >
                <div class="title mont pt-1">
                  {{ speaker.name[langKey] }}
                </div>
                <div
                  :class="
                    $vuetify.breakpoint.xsOnly
                      ? `caption mont`
                      : `subtitle-1 mont`
                  "
                >
                  {{ speaker.title[langKey] }}
                </div>
              </div>
              <div class="mt-2">
                <v-btn
                  fab
                  depressed
                  x-small
                  v-for="link in speaker.socials"
                  :key="link.link"
                  color="#263475"
                  :href="link.link"
                  target="_blank"
                >
                  <v-icon color="white">
                    {{ link.icon }}
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="py-2"></v-col>
        <v-col cols="3" class="text-center mx-2">
          <a :href="targetWorkshop.speakers[0].website" target="_blank">
            <v-img
              contain
              max-height="100px"
              :src="targetWorkshop.speakers[0].companyLogo"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="1" class="text-center">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="3" class="text-center">
          <div class="body-1 mont font-weight-bold pt-3">
            {{ targetWorkshop.location[langKey] }}
          </div>
          <div class="body-1 mont font-weight-bold">
            {{ isArabic ? `القاعة` : `Hall` }}
          </div>
        </v-col>
        <v-col cols="1" class="text-center">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="3" class="text-center">
          <div class="body-1 mont font-weight-bold pt-3">
            {{ targetWorkshop.date[langKey] }}
          </div>
          <div class="body-1 mont font-weight-bold">
            {{ targetWorkshop.time[langKey] }}
          </div>
        </v-col>
        <v-col
          cols="12"
          class="pa-4"
          v-if="targetWorkshop.description[langKey]"
        >
          <div class="title expo-blue-text mont">
            {{ isArabic ? `الأهداف` : `Objectives:` }}
          </div>
          <div>
            <v-divider style="width: 200px;"></v-divider>
          </div>
          <div
            class="body-1 mont py-2"
            v-html="targetWorkshop.description[langKey]"
          ></div>
        </v-col>
        <v-col cols="12" class="pa-4">
          <div class="title expo-blue-text mont">
            {{ isArabic ? `سيرة المتحدث:` : `Lecturer's Bio:` }}
          </div>
          <div>
            <v-divider style="width: 200px;"></v-divider>
          </div>
        </v-col>
        <v-col
          cols="12"
          :md="12 / targetWorkshop.speakers.length"
          v-for="speaker in targetWorkshop.speakers"
          :key="speaker.name[langKey]"
          class="pa-4"
        >
          <div v-if="speaker.bio[langKey]">
            <div class="title grey--text mont">
              {{ speaker.name[langKey] }}
            </div>
            <div class="body-1 mont py-2" v-html="speaker.bio[langKey]"></div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
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
    },
    workshopsDialogShow: {
      get() {
        return this.$store.state.workshopsDialogShow;
      },
      set(value) {
        this.$store.state.workshopsDialogShow = value;
      }
    },
    targetWorkshop() {
      return this.$store.state.workshopsArray[
        this.$store.state.workshopsDialogIndex
      ];
    }
  }
};
</script>

<style>
.expo-blue-text {
  color: #263475;
}
</style>