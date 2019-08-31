<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
      <span class="volte" v-if="isArabic">
        مؤتمر صناعة الترفيه 2019
      </span>
      <span class="volte" v-else>
        JOY CONFERENCE 2019
      </span>
    </v-col>
    <v-col cols="12" class="pa-3 grey--text text--darken-1">
      <div class="mont title font-weight-bold py-3" v-if="isArabic">
        منصة دولية محورية تهدف إلى تسليط الضوء على قطاع الترفيه في المملكة
        والتغييرات التي طرأت عليه وتأثيره على جودة الحياة
      </div>
      <div class="mont title font-weight-bold py-3" v-else>
        A PIVOTAL INTERNATIONAL PLATFORM AIMING TO SHED LIGHT ON THE
        ENTERTAINMENT ECOSYSTEM, ITS CHANGES AND IMPACT ON THE QUALITY OF LIFE.
      </div>
      <div class="mont body-1" v-if="isArabic">
        يعد مؤتمر صناعة الترفيه 2019 منصة دولية تهدف إلى تقديم نتائج عالية
        الجودة تتنوع بين المفاهيم والتطبيقات وحالات الاستخدام والتجارب، إلى جانب
        استضافة المتحدثين والخبراء والمؤثرين الدوليين من كافة قطاعات الترفيه
        المبنية على المعرفة، بالإضافة إلى نشر السعادة والرفاهية وإحداث تأثير
        وتعزيز الفرص الاستثمارية
        <br /><br />
        يتضمن جدول أعمال المؤتمر مجموعة من المحاور الهامة التي تغطي سلسلة من
        دراسات الحالة الدولية: استراتيجية الترفيه وتصميمها والقدرة على التغيير
        ونمو الاقتصاد المحلي، بالإضافة إلى السلوكيات الاجتماعية والتفاعل مع
        الابتكار والتكنولوجيا وصناعة البهجة ونموذج أعمال الترفيه.
        <br /><br />
        وإلى جانب المحاور التي سيتناولها المؤتمر، سيكون مؤتمر صناعة الترفيه منصة
        لإعلان الاستراتيجيات والشراكات الجديدة، إضافة إلى أنه سيتم من خلاله
        إطلاق مبادرات جديدة لدعم تطوير قطاع الترفيه
        <br /><br />
        تقع على عاتقنا مسؤولية مشتركة لضمان تحقيق طموحاتنا الكبيرة بتطوير قطاع
        الترفيه
      </div>
      <div class="mont body-1" v-else>
        Joy conference 2019 is an international platform that seeks to present
        quality, experienced results spanning from concept to applications,
        using cases, experiments and hosting global speakers, experts, and
        influencers from various knowledge-based entertainment sectors happiness
        & wellbeing, making an impact & investment opportunity.
        <br /><br />
        The conference agenda includes a variety of crucial topics that span the
        gamut of international cases studies: entertainment strategy and design,
        the ability to change, local economy growth, social behaviors and
        interaction with innovation & technology, Joy Making, entertainment
        business model.
        <br /><br />
        In parallel to the topics agenda, JOY Conference will also serve as a
        platform to announce new strategies and partnerships in addition to
        launching new initiatives about supporting the entertainment
        development.
        <br /><br />
        We have the collective responsibility to ensure that our global ambition
        for entertainment development becomes a reality for all.
      </div>
    </v-col>
    <v-col cols="12" class="py-6 mt-6">
      <div class="speech-bubble-red pa-6">
        <span class="title font-weight-bold mont white--text" v-if="isArabic">
          يمنحك هذا المؤتمر فرصة الالتقاء والتفاعل مع رواد صناعة الترفيه الذين
          سيتناولون تأثير الترفيه على الشعوب والمجتمعات والثقافات حول العالم
        </span>
        <span class="title font-weight-bold mont white--text" v-else>
          This two-day conference offers you the opportunity to build your
          profile with leaders in international entertainment industries while
          they debate the extent to which entertainment affects nations,
          communities and cultures around the world.
        </span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
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
.speech-bubble-red {
  position: relative;
  background: #de1a49;
  border-radius: 1em;
}
.speech-bubble-red:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 75%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top-color: #de1a49;
  border-bottom: 0;
  margin-left: -15px;
  margin-bottom: -15px;
}
</style>
