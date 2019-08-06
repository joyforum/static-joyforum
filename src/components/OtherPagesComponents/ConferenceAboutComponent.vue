<template>
  <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
    <v-col cols="12" class="pa-3 primary--text font-weight-bold headline">
      <span class="volte">
        JOY CONFERENCE 2019
      </span>
    </v-col>
    <v-col cols="12" class="hidden-sm-and-up">
      <v-img contain src="/images/about.png"></v-img>
    </v-col>
    <v-col cols="12" class="pa-3 grey--text text--darken-1">
      <div class="mont title font-weight-bold py-3">
        AN INTERNATIONAL PLATFORM HOSTING GLOBAL SPEAKERS, INDUSTRY LEADERS,
        EXPERTS AND INFLUENCERS AIMING TO SHED THE LIGHT ON THE ENTERTAINMENT
        ECOSYSTEM, ITS CHANGES AND IMPACT ON THE QUALITY OF LIFE.
      </div>
      <div class="mont body-1">
        Joy conference 2019 seeks to present high quality experienced results
        spanning from concept to applications, using cases, experiments and
        hosting global speakers, experts, and influencers from various
        knowledge-based entertainment sectors.
        <br /><br />
        The conference marks a turning point for the future of entertainment
        development in Saudi Arabia with an action agenda tackling fundamental
        case studies subjects: entertainment strategy and design, the ability to
        change, local economy growth, social behaviors and interaction with:
        innovation & technology, Joy Making, entertainment business model,
        happiness & wellbeing, making an impact & investment opportunities.
        <br /><br />
        In parallel to its official agenda, the Conference also provides a
        platform to announce new strategy and partnerships in addition to
        launching new initiatives on supporting for entertainment development.
        These new commitments and initiatives complement the actions contained
        in the Joy Forum 2019.
        <br /><br />
        We have the collective responsibility to ensure that our global ambition
        for entertainment development becomes a reality for all.
      </div>
    </v-col>
    <v-col cols="12" class="py-6 mt-6">
      <div class="speech-bubble-red pa-6">
        <span class="title font-weight-bold mont white--text">
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
    return {
      categoriesArray: [
        {
          title: "IMMERSIVE TECHNOLOGIES & GAMING",
          imgSrc: "/images/Expo_Categories-01.png"
        },
        {
          title: "AV & LIGHTING SOLUTIONS",
          imgSrc: "/images/Expo_Categories-02.png"
        },
        {
          title: "THEME PARKS & ATTRACTIONS",
          imgSrc: "/images/Expo_Categories-03.png"
        },
        {
          title: "ENTERTAINMENT CONTENT CREATION",
          imgSrc: "/images/Expo_Categories-04.png"
        },
        {
          title: "SFX & FIREWORKS",
          imgSrc: "/images/Expo_Categories-05.png"
        },
        {
          title: "EVENT & ENTERTAINMENT PRODUCTION",
          imgSrc: "/images/Expo_Categories-06.png"
        }
      ]
    };
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
