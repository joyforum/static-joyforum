<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pa-3 primary--text font-weight-bold display-1">
      <span class="volte" v-if="isArabic">
        عن منتدى صناعة الترفيه 2019
      </span>
      <span class="volte" v-else>
        ABOUT JOY FORUM 2019
      </span>
    </v-col>
    <v-col cols="12" class="hidden-sm-and-up">
      <v-img contain src="/images/about.png"></v-img>
    </v-col>
    <v-col cols="12" sm="8" class="pa-3 body-1 text-justify">
      <span class="mont" v-if="isArabic">
        المنتدى هو مبادرة من الهيئة العامة للترفيه تهدف إلى تطوير قطاع الترفيه
        الواعد في المملكة وفتح افاق استثمارية واسعة، والاستفادة من التجارب
        العالمية لإثراء المحتوى المحلي وتطوير صناعة الترفيه تماشياً مع رؤية
        المملكة 2030
        <br /><br />
        يطمح منتدى صناعة الترفيه إلى تعزيز ثقافة البهجة، وخلق فرص استثمارية
        مستدامة، وبناء مجتمع حيوي نابض بالحياة، تتوفر له كل الخيارات الترفيهية
        المتنوعة.
        <br /><br />
        يجمع منتدى صناعة الترفيه روّاد الترفيه على مستوى العالم في مكانٍ واحد،
        مما يخلق فرصاً استثمارية استثنائية من خلال معرض يضم نخبة من الشركات
        العالمية المختصة في مجال صناعة الترفيه، ومؤتمر يناقش مواضيع محورية،
        ويستضيف متحدثين ملهمين، وورش عمل لتنمية المواهب، واحتفالية خاصة يُكرّم
        من خلالهاصناّع البهجة.
        <br /><br />
        مرحبًا بكم في مستقبل الترفيه السعودي <br /><br />
        مرحبًا بكم في منتدى صناعة الترفيهّ!
      </span>
      <span class="mont" v-else>
        Centered around the evolving entertainment sector in the Kingdom and
        empowered by the GEA Sector Development Initiative, JOY ENTERTAINMENT
        FORUM 2019 will build and develop the Saudi entertainment industry in
        line with its Vision 2030.
        <br /><br />
        The progressive two-day JOY Forum aspires to build a vibrant society,
        foster a joyful entertainment culture and create a sustainable new
        economy while spreading joy in the Kingdom.
        <br /><br />
        JOY amasses industry leading, global entertainment pioneers in one
        location, creating unparalleled investment and growth opportunities
        through an exhibition encompassing pivotal conference topics, inspiring
        speakers, talent development workshops, awards, challenges and other
        events.
        <br /><br />
        Welcome to the future of Saudi Entertainment…
        <br /><br />
        Welcome to JOY!
      </span>
    </v-col>
    <v-col cols="4" class="hidden-xs-only mt-n3">
      <v-img contain max-height="300px" src="/images/about.png"></v-img>
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
.dots-pattern-bg {
  background-image: url("/images/dots-pattern.jpg");
  background-repeat: repeat;
}
</style>
