<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="400px"
        height="40vw"
        max-height="450px"
        class="expo-head-background"
      >
        <ExpoBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12" class="expoblue-bg">
      <v-row no-gutters class="mx-auto my-3" style="max-width: 1280px;">
        <v-col cols="12" sm="9">
          <div class="white--text title mx-3">
            <span class="mont" v-if="isArabic">
              اكتشف أحدث تقنيات صناعة الترفيه
            </span>
            <span class="mont" v-else>
              EXPLORE CUTTING-EDGE TEHNOLOGIES IN THE ENTERTAINMENT SECTOR
            </span>
          </div>
        </v-col>
        <v-col cols="12" sm="3" class="my-auto text-right">
          <v-btn
            rounded
            small
            color="primary"
            :class="$vuetify.breakpoint.xsOnly ? `mt-3 mx-3` : `mx-3`"
            router
            :to="isArabic ? `/exhibit/ar` : `/exhibit/en`"
          >
            <span v-if="isArabic">
              شارك الآن في المعرض
            </span>
            <span v-else>
              Exhibit Now
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <ExpoAboutComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row
        no-gutters
        class="mx-auto pa-3 justify-space-around"
        style="max-width: 1280px;"
      >
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          <span class="volte expoblue-text" v-if="isArabic">
            كن أحد صنّاع البهجة<br />
            شارك الآن في المعرض!
          </span>
          <span class="volte expoblue-text" v-else>
            BE ONE OF THE JOY MAKERS,<br />
            EXHIBIT NOW!
          </span>
        </v-col>
        <v-col cols="12" class="pa-3">
          <div class="mont body-1" v-if="isArabic">
            انضموا إلى أكثر من 60 عارضاً في معرض صناعة الترفيه في فندق الريتز
            كارلتون، حيث تنتظركم صالة طعام ومشروبات في قلب مكان العرض، بالإضافة
            إلى تنوع العروض التي يتخللها ألعاب وعدد من الأنشطة التفاعلية. <br />
            لقد تم تصميم باقات المعرض لدينا لتتناسب مع أهدافكم وتساعدكم على
            تطوير أعمالكم وتوسيعها والوصول إلى أسواق إضافية.
          </div>
          <div class="mont body-1" v-else>
            Join more than 60 exhibitors in JOY Expo at the prestigious
            Ritz-Carlton Hotel, Riyadh, with a comfortable food and beverage
            lounge in the heart of the exhibit space. Exhibit types and sizes
            are varied, with games and other interactive activities situated
            throughout. Our exhibition packages are tailored to meet your
            business objectives to expand and reach new territories.
          </div>
        </v-col>
        <v-col cols="6" class="pa-6">
          <v-img contain max-height="300px" :src="islands[langKey][0]"></v-img>
        </v-col>
        <v-col cols="6" class="pa-6">
          <v-img contain max-height="300px" :src="islands[langKey][1]"></v-img>
        </v-col>
        <v-col cols="12" class="pa-3 primary--text font-weight-bold title">
          <span class="volte expoblue-text" v-if="isArabic">
            روابط الملفات
          </span>
          <span class="volte expoblue-text" v-else>
            Downloads
          </span>
        </v-col>
        <v-col cols="8" md="3" class="text-center my-1">
          <v-btn
            rounded
            block
            color="primary"
            href="/JOY_FORUM_2019_Brochure.pdf"
            target="_blank"
          >
            <div :class="$vuetify.breakpoint.smAndDown ? `caption` : `body-1`">
              <span v-if="isArabic">
                الكتيب
              </span>
              <span v-else>
                Brochure
              </span>
            </div>
          </v-btn>
        </v-col>
        <v-col cols="8" md="3" class="text-center my-1">
          <v-btn
            rounded
            block
            color="primary"
            href="/Joy_Exhibition_Floorplan.pdf"
            target="_blank"
          >
            <div :class="$vuetify.breakpoint.smAndDown ? `caption` : `body-1`">
              <span v-if="isArabic">
                مخطط صالة المعرض
              </span>
              <span v-else>
                Exhibition Floor Plan
              </span>
            </div>
          </v-btn>
        </v-col>
        <v-col cols="8" md="3" class="text-center my-1">
          <v-btn
            rounded
            block
            color="primary"
            href="/JOY_ISLAND_Ready_Built_Stands.pdf"
            target="_blank"
          >
            <div :class="$vuetify.breakpoint.smAndDown ? `caption` : `body-1`">
              <span v-if="isArabic">
                تصاميم المنصات الجاهزة
              </span>
              <span v-else>
                Built Stands Design
              </span>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <ExhibitorsComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="8" class="pa-3 my-auto">
          <div class="pa-3 mb-6 volte expoblue-text font-weight-bold headline">
            <span v-if="isArabic">
              معرض صناعة الترفيه 2019
            </span>
            <span v-else>
              JOY EXPO 2019
            </span>
          </div>
          <v-btn
            rounded
            color="#263475"
            class="mx-3 px-6 white--text"
            router
            :to="isArabic ? `/exhibit/ar` : `/exhibit/en`"
          >
            <span v-if="isArabic">
              شارك في العرض
            </span>
            <span v-else>
              Exhibit
            </span>
          </v-btn>
          <v-btn
            rounded
            color="#263475"
            class="mx-3 px-6 white--text"
            href="http://www.cvent.com/d/ryqdbb" target="_blank"
          >
            <span v-if="isArabic">
              لحضور المنتدى
            </span>
            <span v-else>
              Attend
            </span>
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="pa-3 my-auto">
          <v-card outlined flat class="border-radius pa-3">
            <v-row no-gutters>
              <v-col cols="4">
                <v-img
                  contain
                  max-height="120px"
                  src="/images/about.png"
                ></v-img>
              </v-col>
              <v-col cols="8" class="pa-3">
                <div class="mont primary--text body-1" v-if="isArabic">
                  أحمد مفتي
                </div>
                <div class="mont primary--text body-1" v-else>Ahmed Mufti</div>
                <div class="mont expoblue-text body-1" v-if="isArabic">
                  مدير المعرض
                </div>
                <div class="mont expoblue-text body-1" v-else>Expo Manager</div>
                <div class="mont caption" v-if="isArabic">00966506073695</div>
                <div class="mont caption" v-else>+966 50 607 3695</div>
                <div class="mont caption">exhibit@joyforum.com</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import ExpoBannerComponent from "@/components/OtherPagesComponents/ExpoBannerComponent.vue";
import ExpoAboutComponent from "@/components/OtherPagesComponents/ExpoAboutComponent.vue";
import ExhibitorsComponent from "@/components/HomeComponents/ExhibitorsComponent.vue";

export default {
  components: {
    CountDownComponent,
    ExpoBannerComponent,
    ExpoAboutComponent,
    ExhibitorsComponent
  },
  data() {
    return {
      islands: {
        ar: ["/images/island-01-ar.jpg", "/images/island-02-ar.jpg"],
        en: ["/images/joy-island-card-1.png", "/images/joy-island-card-2.png"]
      }
    };
  },
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
    }
  }
};
</script>

<style>
.expoblue-bg {
  background-color: #263475;
}
.expoblue-text {
  color: #263475;
}
.expo-head-background {
  background-image: url("/images/Expo.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

