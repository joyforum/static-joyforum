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
          <span class="volte workshopcyan-text">
            ABOUT JOY WORKSHOPS
          </span>
        </v-col>
        <v-col cols="12" class="pa-3 grey--text text--darken-1">
          <div class="mont body-1">
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
            <span class="subtitle-1 mont white--text">
              Constructive Knowledge For Business Prosperity
            </span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
          <span class="volte workshopcyan-text">
            TOPICS
          </span>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          v-for="(topic, index) in workshopTopics"
          :key="index"
          class="pa-2"
        >
          <v-card
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
                v-html="topic.title"
              ></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" class="pa-3 primary--text font-weight-bold title">
          <div class="volte workshopcyan-text">
            JOY Workshops 2019
          </div>
          <v-btn
            rounded
            small
            color="#58a9ad"
            class="white--text my-3 px-6"
            router
            to="/attend"
          >
            Attend
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import WorkshopsBannerComponent from "@/components/OtherPagesComponents/WorkshopsBannerComponent.vue";

export default {
  components: {
    CountDownComponent,
    WorkshopsBannerComponent
  },
  data() {
    return {
      workshopTopics: [
        {
          title: "Start your Event<br>Management Business",
          imgSrc: "/images/Workshops_Topics-01.png"
        },
        {
          title: "Establishing Your<br>Company",
          imgSrc: "/images/Workshops_Topics-02.png"
        },
        {
          title: "Valuations & Pitching Methods<br>For New Projects",
          imgSrc: "/images/Workshops_Topics-03.png"
        },
        {
          title: "Crowd Management<br>& Safety",
          imgSrc: "/images/Workshops_Topics-04.png"
        },

        {
          title: "Applying Design Thinking<br>to Event Design",
          imgSrc: "/images/Workshops_Topics-05.png"
        },
        {
          title: "Service & Experience<br>Design",
          imgSrc: "/images/Workshops_Topics-06.png"
        },

        {
          title: "Customer Journey<br>Mapping",
          imgSrc: "/images/Workshops_Topics-07.png"
        },
        {
          title: "Content<br>Localization",
          imgSrc: "/images/Workshops_Topics-08.png"
        },

        {
          title: "Content<br>Curation",
          imgSrc: "/images/Workshops_Topics-09.png"
        },
        {
          title: "Theme Park<br>(Getting Started)",
          imgSrc: "/images/Workshops_Topics-10.png"
        }
      ]
    };
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

