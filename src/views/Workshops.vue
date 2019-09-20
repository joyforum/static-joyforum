<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="450px"
        height="40vw"
        max-height="450px"
        class="workshops-head-background"
      >
        <WorkshopsBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12" class="white">
      <v-row
        no-gutters
        class="mx-auto py-6 px-3 justify-space-around"
        style="max-width: 1280px;"
      >
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          <span class="volte workshopcyan-text" v-if="isArabic">
            عن ورش عمل صناعة الترفيه
          </span>
          <span class="volte workshopcyan-text" v-else>
            ABOUT JOY WORKSHOPS
          </span>
        </v-col>
        <v-col cols="12" class="pa-3 grey--text text--darken-1">
          <div class="mont body-1" v-if="isArabic">
            تهدف ورش عمل صناعة الترفيه إلى نشر ثقافة الترفيه وتعزيزها في المملكة
            على درجة عالية من المهنية. وسيتولى تقديم ورش العمل روّاد صناعة
            الترفيه وخبراء متخصصون على مستوى العالم
            <br /><br />
            تناقش ورش العمل جميع مراحل العمل ابتداءً من تطوير الفكرة الأولية في
            مختلف نماذج العمل، وصولاًإلى مرحلة دعم العمل وتحفيز نموّه، بالإضافة
            إلى أن الورش تغطي الكثير من المحاور التي تتنوع بين تطوير الألعاب
            وصناعة الأفلام
            <br /><br />
            تجمع ورش عمل صناعة الترفيه باحثين ومصممين ومطورين ورجال أعمال مهتمين
            بمجال التصميم والتطوير والتقييم والتسويق وتطوير الفعاليات والترفيه
            في السوق السعودي
          </div>
          <div class="mont body-1" v-else>
            Taking place over the course of two days during JOY Forum 2019 and
            delivered by international industry leaders and subject matter
            experts, JOY workshops aim to spread and enrich the entertainment
            culture in the kingdom on a highly professional level.
            <br /><br />
            Covering a multitude of topics ranging from game development to film
            making the JOY workshops span the stages of business starting with
            idea development across multidisciplined business models, to
            business sustenance and growth.
            <br /><br />
            JOY workshops bring together researchers, designers, developers and
            entrepreneurs interested in the design, development, evaluation,
            commercialization and development of event & entertainment for the
            Saudi local market.
          </div>
        </v-col>
        <v-col cols="8" class="py-6 mt-6 text-center">
          <div class="speech-bubble-cyan pa-3">
            <span class="subtitle-1 mont white--text" v-if="isArabic">
              المعرفة البنّاءة بالازدهار التجاري
            </span>
            <span class="subtitle-1 mont white--text" v-else>
              Constructive Knowledge For Business Prosperity
            </span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          <span class="volte workshopcyan-text" v-if="isArabic">
            المحاور
          </span>
          <span class="volte workshopcyan-text" v-else>
            TOPICS
          </span>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          v-for="(topic, index) in workshopsArray"
          :key="index"
          class="pa-2"
        >
          <v-card
            @click="
              workshopsDialogShow = true;
              workshopsDialogIndex = index;
            "
            height="200px"
            class="border-radius"
            :style="
              `background-image: url('${topic.imgSrc}'); background-size: cover; background-position: center center;`
            "
          >
            <div
              class="white--text text-center workshopcyan-bg py-2"
              style="position: absolute; bottom: 0px; width: 100%; opacity: 0.9;"
            >
              <div
                class="mont body-2 font-weight-bold px-2"
                v-html="topic.title[langKey]"
              ></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="pa-3 primary--text font-weight-bold headline mb-2">
      <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
        <span class="volte workshopcyan-text" v-if="isArabic">
          المحاضرين في ورش العمل
        </span>
        <span class="volte workshopcyan-text" v-else>
          WORKSHOP LECTURERS
        </span>
      </v-row>
    </v-col>
    <v-col cols="12">
      <LecturersComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" class="pa-3 primary--text font-weight-bold title">
          <div class="volte workshopcyan-text" v-if="isArabic">
            ورش عمل صناعة الترفيه 2019
          </div>
          <div class="volte workshopcyan-text" v-else>
            JOY Workshops 2019
          </div>
          <v-btn
            rounded
            small
            color="#58a9ad"
            class="white--text my-3 px-6"
            href="http://www.cvent.com/d/ryqdbb"
            target="_blank"
          >
            <span v-if="isArabic">
              حضور المنتدى
            </span>
            <span v-else>
              Attend
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import WorkshopsBannerComponent from "@/components/OtherPagesComponents/WorkshopsBannerComponent.vue";
import LecturersComponent from "@/components/HomeComponents/LecturersComponent.vue";

export default {
  components: {
    CountDownComponent,
    WorkshopsBannerComponent,
    LecturersComponent
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
    },
    workshopsArray() {
      return this.$store.state.workshopsArray;
    },
    workshopsDialogShow: {
      get() {
        return this.$store.state.workshopsDialogShow;
      },
      set(value) {
        this.$store.state.workshopsDialogShow = value;
      }
    },
    workshopsDialogIndex: {
      get() {
        return this.$store.state.workshopsDialogIndex;
      },
      set(value) {
        this.$store.state.workshopsDialogIndex = value;
      }
    }
  }
};
</script>

<style>
.workshopcyan-bg {
  background-color: #58a9ad;
}
.workshopcyan-text {
  color: #58a9ad;
}
.workshops-head-background {
  background-image: url("/images/Workshops.jpg");
  background-size: cover;
  background-position: center center;
}
.speech-bubble-cyan {
  position: relative;
  background: #58a9ad;
  border-radius: 1em;
}
.speech-bubble-cyan:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 75%;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top-color: #58a9ad;
  border-bottom: 0;
  margin-left: -15px;
  margin-bottom: -15px;
}
</style>

