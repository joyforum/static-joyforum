<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
      <span class="volte expoblue-text" v-if="isArabic">
        عن معرض صناعة الترفيه
      </span>
      <span class="volte expoblue-text" v-else>
        ABOUT JOY EXPO
      </span>
    </v-col>
    <v-col cols="12" class="pa-3 grey--text text--darken-1">
      <div class="mont title font-weight-bold py-3" v-if="isArabic">
        يقدم المعرض أفضل ما أنتجته صناعة الترفيه العالمية
      </div>
      <div class="mont title font-weight-bold py-3" v-else>
        JOY EXPO 2019 BRINGS YOU THE BEST OF WHAT THE INDUSTRY HAS TO OFFER FROM
        AROUND THE GLOBE
      </div>
      <div class="mont subtitle-1 font-weight-bold" v-if="isArabic">
        اكتشف فرصاً لامتناهية
      </div>
      <div class="mont subtitle-1 font-weight-bold" v-else>
        Discover Endless Opportunities
      </div>
      <div class="mont body-1" v-if="isArabic">
        سيساهم معرض صناعة الترفيه 2019 في تعزيز قطاع الترفيه في المملكة، وهو يعد
        محطة كبيرة من الفرص للعاملين في هذا المجال. وسيجذب المعرض روّاد قطاع
        الترفيه الذين سيحظون بفرص استثنائية لتطوير أعمالهم واكتساب ميزة تنافسية
        رقمية ستلفت انتباه الجمهور وتجذب التفاعلات.
      </div>
      <div class="mont body-1" v-else>
        JOY EXPO 2019 will nurture the fertile entertainment field in Saudi
        Arabia, attracting the attention of decision-makers that are all ready
        to plant their business seeds and gain the digital edge that will engage
        and excite your audiences.
      </div>
      <div class="mont subtitle-1 font-weight-bold pt-3" v-if="isArabic">
        جمع أهم صنّاع البهجة في صناعة الترفيه على مستوى العالم.
      </div>
      <div class="mont subtitle-1 font-weight-bold pt-3" v-else>
        Uniting leading Joy Makers in the entertainment industry from around the
        globe
      </div>
      <div class="mont body-1" v-if="isArabic">
        تــم تصميــم المعــرض للســماح لقــادة الترفيــه بتقديــم أنفســهم
        بطريقــة مهنيــة وفعّالــة إضافة إلى إقامــة علاقــات تجاريــة جديــدة
        وإيجــاد شــركاء موثــوق بهــم وذوي احترافيــة عاليــة ومعرفــة واسعة
        بالاتجاهــات الجديــدة فــي مجــال الأعمــال الفنيــة والترفيــه
        والتقنيــات والفعاليــات والحفــلات الموســيقية والتقنيات الســمعية
        والبصرية.
      </div>
      <div class="mont body-1" v-else>
        JOY Expo is designed to allow industry leaders to present themselves
        professionally and effectively and aims to generate new business
        relationships and connect reliable and highly professional partners who
        are acquainted with new trends in Show business, Joy &amp;
        entertainment, technologies, events, concerts and audio-visuals.
      </div>
    </v-col>
    <v-col cols="9" class="py-6 mt-6">
      <div class="speech-bubble-blue pa-6">
        <span
          class="title font-weight-bold mont"
          style="color: #f8b615;"
          v-if="isArabic"
        >
          فرصة استثنائية للتواصل مع الأشخاص والجهات التي تؤمن بأهمية نشر البهجة
          في العالم.
        </span>
        <span
          class="title font-weight-bold mont"
          style="color: #f8b615;"
          v-else
        >
          An unrivaled opportunity to network with those who also believe in the
          importance of delivering Joy to the world.
        </span>
      </div>
    </v-col>
    <v-col cols="3"></v-col>
    <v-col cols="6"></v-col>
    <v-col cols="6" class="py-6 mb-6">
      <div class="speech-bubble-blue pa-6 text-center">
        <span
          class="title font-weight-bold mont"
          style="color: #f8b615;"
          v-if="isArabic"
        >
          استثمر في مستقبل الترفيه في المملكة العربية السعودية
        </span>
        <span
          class="title font-weight-bold mont"
          style="color: #f8b615;"
          v-else
        >
          Invest in the future of entertainment in KSA
        </span>
      </div>
    </v-col>
    <v-col cols="12" class="pa-3 pt-12 primary--text font-weight-bold headline">
      <span class="volte expoblue-text" v-if="isArabic">
        سيشكل معرض صناعة الترفيه فرصة فريدة من النواحي التالية:
      </span>
      <span class="volte expoblue-text" v-else>
        JOY EXPO WILL BE A UNIQUE OCCASION TO:
      </span>
    </v-col>
    <v-col cols="12">
      <v-card color="#263475" class="border-radius">
        <v-row no-gutters class="justify-space-around mx-6">
          <v-col cols="5" md="2" class="white--text text-center my-auto py-6">
            <div class="mont" v-if="isArabic">
              النظر في فرص التوسع المستقبلية
            </div>
            <div class="mont" v-else>
              Consider future expansion opportunities
            </div>
          </v-col>
          <v-col cols="1" class="py-6 text-center">
            <v-divider vertical class="white"></v-divider>
          </v-col>
          <v-col cols="5" md="2" class="white--text text-center my-auto py-6">
            <div class="mont" v-if="isArabic">
              اكتشاف أهم مجالات التقدم التكنولوجي واتجاهات الصناعة في أكثر من 60
              مجالاً في قطاع الترفيه والفعاليات الحية
            </div>
            <div class="mont" v-else>
              Discover significant technological advances and industry trends in
              more than 60 fields of the entertainment and live events sectors
            </div>
          </v-col>
          <v-col cols="1" class="py-6 text-center hidden-sm-and-down">
            <v-divider vertical class="white"></v-divider>
          </v-col>
          <v-col cols="12" class="hidden-md-and-up">
            <v-divider class="white my-3 px-3"></v-divider>
          </v-col>
          <v-col cols="5" md="2" class="white--text text-center my-auto py-6">
            <div class="mont" v-if="isArabic">
              الاجتماع مع المستثمرين ومطوري الفعاليات الترفيهية وصانعي العروض
              ومنظمي الفعاليات
            </div>
            <div class="mont" v-else>
              Meet with investors, entertainment developers, show makers, event
              organizers
            </div>
          </v-col>
          <v-col cols="1" class="py-6 text-center">
            <v-divider vertical class="white"></v-divider>
          </v-col>
          <v-col cols="5" md="2" class="white--text text-center my-auto py-6">
            <div class="mont" v-if="isArabic">
              التعاون مع شركاء محتملين
            </div>
            <div class="mont" v-else>
              Collaborate with Potential Partners
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" class="pa-3 pt-12 primary--text font-weight-bold headline">
      <span class="volte expoblue-text" v-if="isArabic">
        أقسام معرض صناعة الترفيه
      </span>
      <span class="volte expoblue-text" v-else> JOY EXPO CATEGORIES </span>
    </v-col>
    <v-col
      cols="6"
      sm="4"
      v-for="(category, index) in categoriesArray"
      :key="index"
      class="pa-2"
    >
      <v-card
        height="200px"
        class="border-radius"
        :style="
          `background-image: url('${category.imgSrc}'); background-size: cover; background-position: center center;`
        "
      >
        <div
          class="white--text text-center expoblue-bg py-2"
          style="position: absolute; bottom: -5px; width: 100%;"
        >
          <div class="mont body-2 px-2">
            {{ category.title[langKey] }}
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      categoriesArray: [
        {
          title: {
            en: "IMMERSIVE TECHNOLOGIES & GAMING",
            ar: "التقنيات وألعاب الترفيه الافتراضي"
          },
          imgSrc: "/images/Expo_Categories-01.png"
        },
        {
          title: {
            en: "AV & LIGHTING SOLUTIONS",
            ar: "حلول الإضاءة والتقنيات السمعية والبصرية"
          },
          imgSrc: "/images/Expo_Categories-02.png"
        },
        {
          title: {
            en: "THEME PARKS & ATTRACTIONS",
            ar: "المدن الترفيهية والأماكن السياحية"
          },
          imgSrc: "/images/Expo_Categories-03.png"
        },
        {
          title: {
            en: "ENTERTAINMENT CONTENT CREATION",
            ar: "إنشاء المحتوى الترفيهي"
          },
          imgSrc: "/images/Expo_Categories-04.png"
        },
        {
          title: { en: "SFX & FIREWORKS", ar: "مؤثرات خاصة وألعاب نارية" },
          imgSrc: "/images/Expo_Categories-05.png"
        },
        {
          title: {
            en: "EVENT & ENTERTAINMENT PRODUCTION",
            ar: "إنتاج الفعاليات والترفيه"
          },
          imgSrc: "/images/Expo_Categories-06.png"
        }
      ]
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
.dots-pattern-bg {
  background-image: url("/images/dots-pattern.jpg");
  background-repeat: repeat;
}
.speech-bubble-blue {
  position: relative;
  background: #263475;
  border-radius: 1em;
}
.speech-bubble-blue:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 75%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top-color: #263475;
  border-bottom: 0;
  margin-left: -15px;
  margin-bottom: -15px;
}
</style>
