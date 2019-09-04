<template>
  <v-row no-gutters class="mx-auto" style="max-width: 1280px;">
    <v-col cols="12">
      <v-card
        max-height="600px"
        min-height="500px"
        height="60vw"
        tile
        flat
        color="rgba(0,0,0,0)"
      >
        <v-card-title class="display-2 white--text pt-6 px-6">
          <span class="volte font-weight-bold">
            {{ isArabic ? `منتدى صناعة الترفيه 2019` : `Joy Forum 2019` }}
          </span>
        </v-card-title>
        <v-card-text class="white--text title pt-3 px-6">
          <span class="mont">
            {{
              isArabic ? `تعزيز ثقافة البهجة` : `Fostering a Joyful Culture,`
            }}
            <br />
            {{ isArabic ? `بناء مجتمع حيوي` : `Building a Vibrant Society` }}
          </span>
        </v-card-text>
        <v-btn
          rounded
          small
          color="primary"
          class="mx-6"
          router
          :to="isArabic ? `/exhibit/ar` : `/exhibit/en`"
        >
          <span v-if="isArabic">
            <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
              شارك في المعرض
            </span>
          </span>
          <span v-else>
            Exhibit
          </span>
        </v-btn>
        <v-btn
          rounded
          small
          color="primary"
          class="mx-1"
          href="http://www.cvent.com/d/ryqdbb"
          target="_blank"
        >
          <span v-if="isArabic">
            <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
              حضور المنتدى
            </span>
          </span>
          <span v-else>
            Attend
          </span>
        </v-btn>
        <v-row
          no-gutters
          style="position: absolute; bottom: 0; width: 100%;"
          class="mt-12 justify-space-around"
        >
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
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
              <sup class="white--text">+</sup>
            </div>
            <div class="overline mont text-uppercase white--text">
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `متحدثين` : `International` }}<br />
                {{ isArabic ? `دوليين` : `Speakers` }}
              </span>
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="2"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `فعاليتان` : `Special` }}<br />
                {{ isArabic ? `مميزتان` : `Events` }}
              </span>
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="15"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `شخصية عالمية` : `International` }}<br />
                {{ isArabic ? `` : `Celebrities` }}
              </span>
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="12"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `ورشة عمل` : `Workshops` }}
              </span>
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="60"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `جهة دولية` : `International` }}<br />
                {{ isArabic ? `عارضة` : `Exhibitors` }}
              </span>
            </div>
          </v-col>
          <v-col cols="4" sm="1" class="pa-3">
            <div class="primary--text display-1">
              <span class="volte font-weight-bold">
                <number
                  ref="number1"
                  :from="0"
                  :to="100"
                  :duration="2"
                  :delay="1"
                  easing="Power1.easeOut"
                />
              </span>
              <sup class="white--text">+</sup>
            </div>
            <div
              class="overline mont text-uppercase font-weight-bold white--text"
            >
              <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
                {{ isArabic ? `مستثمر` : `Investors` }}
              </span>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
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
    }
  }
};
</script>

<style>
</style>
