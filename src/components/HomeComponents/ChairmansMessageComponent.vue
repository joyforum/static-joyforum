<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="3" class="pa-3">
      <v-card
        flat
        color="primary"
        class="border-circle"
        style="padding-top: 100%;"
      >
        <v-img
          src="/images/Turki2.png"
          contain
          style="position: absolute; bottom: 0;"
        ></v-img>
      </v-card>
    </v-col>
    <v-col cols="9" class="pa-3">
      <v-card-title class="primary--text font-weight-black display-1">
        <span class="volte" v-if="isArabic"> رسالة رئيس مجلس الإدارة </span>
        <span class="volte" v-else>
          CHAIRMAN'S MESSAGE
        </span>
      </v-card-title>
      <v-card-text class="title font-italic hidden-xs-only">
        <span class="mont" v-if="isArabic">
          "بُنيت هذه الصناعة الواعدة لتلبي تطلعات الشعب السعودي وتفتح آفاق
          استثمارية أجنبية ومحلية من أجل تعزيز التطور المتنامي والترفيهي
          والصناعي"
        </span>
        <span class="mont" v-else>
          “This promising industry has been formulated to meet the aspirations
          of the Saudi people and open the horizons of internal and external
          investments to create a growing, recreational and industrial
          development”
        </span>
      </v-card-text>
      <v-card-text
        class="primary--text title font-weight-bold text-right hidden-xs-only"
      >
        <span class="mont" v-if="isArabic">
          معالي الأستاذ تركي بن عبد المحسن آل الشيخ <br />
          رئيس مجلس الإدارة <br />
          الهيئة العامة للترفيه
        </span>
        <span class="mont" v-else>
          H.E. Turki Al AlShikh <br />
          Chairman <br />
          General Entertainment Authority
        </span>
      </v-card-text>
    </v-col>
    <v-col cols="12" class="hidden-sm-and-up">
      <v-card-text class="title font-italic">
        <span class="mont" v-if="isArabic">
          "بُنيت هذه الصناعة الواعدة لتلبي تطلعات الشعب السعودي وتفتح آفاق
          استثمارية أجنبية ومحلية من أجل تعزيز التطور المتنامي والترفيهي
          والصناعي"
        </span>
        <span class="mont" v-else>
          “This promising industry has been formulated to meet the aspirations
          of the Saudi people and open the horizons of internal and external
          investments to create a growing, recreational and industrial
          development”
        </span>
      </v-card-text>
      <v-card-text class="primary--text title font-weight-bold text-right">
        <span class="mont" v-if="isArabic">
          معالي الأستاذ تركي بن عبد المحسن آل الشيخ <br />
          رئيس مجلس الإدارة <br />
          الهيئة العامة للترفيه
        </span>
        <span class="mont" v-else>
          H.E. Turki Al AlShikh <br />
          Chairman <br />
          General Entertainment Authority
        </span>
      </v-card-text>
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
