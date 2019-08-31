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
        class="events-head-background"
      >
        <EventsBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="9" class="pa-3 mb-6 eventsyellow-text">
          <v-row no-gutters>
            <v-col cols="6">
              <span class="volte font-weight-bold headline" v-if="isArabic">
                حفل جائزة صنّاع الترفيه
              </span>
              <span class="volte font-weight-bold headline" v-else>
                JOY EXCELLENCE AWARD
              </span>
            </v-col>
            <v-col cols="6" class="py-3 text-end">
              <span>
                <v-icon large color="#f8b615">mdi-calendar</v-icon>
              </span>
              <span class="title mont" v-if="isArabic">
                يوم 1
              </span>
              <span class="title mont" v-else>
                Day 1
              </span>
              <br />
              <span class="mont caption" v-if="isArabic">
                الأحد - 13 أكتوبر
              </span>
              <span class="mont caption" v-else>
                Sunday, October 13th
              </span>
            </v-col>
            <v-col cols="12" class="hidden-md-and-up py-3">
              <v-img
                contain
                max-height="200px"
                src="/images/SpecialEvents_Trophy.png"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <div class="mont title grey--text py-3" v-if="isArabic">
                عن الجائزة
              </div>
              <div class="mont title grey--text py-3" v-else>
                ABOUT THE AWARD
              </div>
              <div class="mont body-1 grey--text" v-if="isArabic">
                سيقام حفل عشاء فاخر احتفالًا بمنتدى صناعة الترفيه 2019 حيث
                سيتسنى للضيوف الاستمتاع بعشاء من المطعمين الدولي والسعودي، كما
                سيستمتعون ببرنامج يضم مختلف العروض الترفيهية
                <br />
                <br />
                تعد جائزة صنّاع الترفيه المتميزة جائزةً مرموقة تستند إلى الرأي
                العام ومخصصة للجهات والأشخاص الذين ينشرون البهجة والسعادة في
                العالم وفي المملكة العربية السعودية <br />
                <br />
                سيشهد الحفل حضوراً لافتاً لمجموعة كبيرة من وسائل الإعلام المحلية
                والدولية، بالإضافة إلى شخصيات عالمية مشهورة ستحل بصفتها ضيوفاً
                أو مرشحين للفوز بالجوائز
                <br /><br />
                سيتألق الضيوف على السجادة الحمراء قبل دخولهم إلى قاعة الحفل
                الساحرة
              </div>
              <div class="mont body-1 grey--text" v-else>
                In honor of Joy forum 2019, a lavish Gala dinner will be held in
                a spectacular setting, guests will enjoy a unique international
                and traditional dinner menu while enjoying an exciting
                performance program featuring international entertainment shows.
                <br />
                <br />
                Joy Premium Award is an elegant award based on public opinion,
                designed to be handed to those who spread the joy and happiness
                around the world and in our Joyful land of Saudi Arabia. <br />
                <br />
                The award ceremony has a rich presence of international and
                local media covering & broadcasting the world’s celebrities
                attending & celebrating the award; either as special guests or
                as award winners.
                <br /><br />
                The ceremony will feature red-carpet moments and a pathway to
                the delightful ambiance of a charming Gala golden hall.
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="my-auto hidden-sm-and-down">
          <v-img
            contain
            max-height="300px"
            src="/images/SpecialEvents_Trophy.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="9" class="pa-3 mb-6 eventsyellow-text">
          <v-row no-gutters>
            <v-col cols="6">
              <span class="volte font-weight-bold headline" v-if="isArabic">
                جائزة الهيئة العامة للترفيه للتميز
              </span>
              <span class="volte font-weight-bold headline" v-else>
                GEA CHALLENGES AWARD
              </span>
            </v-col>
            <v-col cols="6" class="py-3 text-end">
              <span>
                <v-icon large color="#f8b615">mdi-calendar</v-icon>
              </span>
              <span class="title mont" v-if="isArabic">
                يوم 2
              </span>
              <span class="title mont" v-else>
                Day 2
              </span>
              <br />
              <span class="mont caption" v-if="isArabic">
                الإثنين - 14 أكتوبر
              </span>
              <span class="mont caption" v-else>
                Monday, October 14th
              </span>
            </v-col>
            <v-col cols="12" class="hidden-md-and-up py-3">
              <a href="https://geachallenges.com" target="_blank">
                <v-img
                  contain
                  max-height="150px"
                  src="/images/SpecialEvents_Logo.png"
                ></v-img>
              </a>
            </v-col>
            <v-col cols="12">
              <div class="mont title grey--text py-3" v-if="isArabic">
                عن الجائزة
              </div>
              <div class="mont title grey--text py-3" v-else>
                ABOUT THE AWARD
              </div>
              <div class="mont body-1 grey--text" v-if="isArabic">
                تُمنح جائزة الهيئة لتحدي الترفيه إلى المواهب التي تتنافس على
                جميع فئات الترفيه، وذلك بالتعاون مع البرنامج الوطني لاكتشاف
                المواهب الترفيهية
                <br /><br />
                خلال اليوم الثاني من منتدى صناعة الترفيه 2019، سيُعلن عن
                الفائزينويتم تكريمهم في حفل خاص بحضور شخصيات مشهورة ووسائل إعلام
                محلية ودولية
              </div>
              <div class="mont body-1 grey--text" v-else>
                GEA Challenge Award will be awarded in collaboration with the
                national talent discovery program where talents will compete in
                all the industry’s categories.
                <br /><br />
                The winner will be announced & awarded on a special event at the
                second day of Joy Forum 2019 in the presence of regional &
                international celebrities and media.
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="my-auto hidden-sm-and-down">
          <a href="https://geachallenges.com" target="_blank">
            <v-img
              contain
              max-height="150px"
              src="/images/SpecialEvents_Logo.png"
            ></v-img>
          </a>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import EventsBannerComponent from "@/components/OtherPagesComponents/EventsBannerComponent.vue";

export default {
  components: {
    CountDownComponent,
    EventsBannerComponent
  },
  data() {
    return {
      //dialog: false,
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
.eventsyellow-bg {
  background-color: #f8b615;
}
.eventsyellow-text {
  color: #f8b615;
}
.events-head-background {
  background-image: url("/images/SpecialEvents.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

