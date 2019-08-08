<template>
  <v-row
    no-gutters
    class="mx-auto py-6 px-3 justify-space-around"
    style="max-width: 1280px;"
  >
    <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold headline">
      <span class="volte">
        THE JOY FORUM OBJECTIVES
      </span>
      <v-dialog max-width="800px" v-model="dialog">
        <v-card class="pb-3">
          <v-row no-gutters>
            <v-col cols="12" class="pa-6 mb-3 primary">
              <v-btn icon color="white" @click="dialog = false">
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
              <span class="white--text title mont pa-6 font-weight-bold">
                {{ dialogContent.title }}
              </span>
            </v-col>
          </v-row>
          <v-row no-gutters class="pa-6">
            <v-col cols="12" sm="3">
              <v-card
                flat
                height="100px"
                width="100px"
                class="primary border-circle py-6 mx-auto"
              >
                <v-img
                  height="50px"
                  contain
                  :src="dialogContent.iconUrl"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="9" class="my-auto">
              <div class="body-1 mont pa-6">
                {{ dialogContent.hoverText }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col
      cols="6"
      sm="3"
      md="2"
      v-for="objective in objectivesArray"
      :key="objective.title"
      :class="$vuetify.breakpoint.mdAndUp ? `pa-3 mx-1` : `pa-2`"
    >
      <v-card
        height="150px"
        width="150px"
        class="mx-auto border-circle primary"
        flat
      >
        <div class="pt-6">
          <v-img height="30px" contain :src="objective.iconUrl"></v-img>
          <div class="white--text pt-3 px-6 text-center caption">
            <span class="mont">
              {{ objective.title }}
            </span>
          </div>
        </div>
        <!-- 
          <v-fade-transition hide-on-leave>
            <div class="white--text text-center caption px-6 pt-8" v-if="hover">
              <span>
                {{ objective.hoverText }}
              </span>
            </div>
          </v-fade-transition>
          -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogContent: {
        title: "",
        iconUrl: "",
        hoverText: ""
      },
      objectivesArray: [
        {
          title: "Entertainment Innovators",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-05.svg`,
          hoverText:
            "To be the recognized international authority on entertainment development & the best practice platform."
        },
        {
          title: "Deliver On Our Motto",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-04.svg`,
          hoverText:
            "Deliver a focused understanding on all aspects of “Fostering Joyful Culture, Building Vibrant Society, Creating a New Economy”"
        },
        {
          title: "Empower Young Professionals",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-03.svg`,
          hoverText:
            "To promote and encourage the development of young professionals in the entertainment & events sectors"
        },
        {
          title: "Global Networking",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-02.svg`,
          hoverText:
            "Build and develop relationships with influential high-level entertainment leaders, business figures and government bodies. "
        },
        {
          title: "Advocate Ethics & Integrity",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-01.svg`,
          hoverText:
            "Actively promote high standards of ethics and integrity among all stakeholders involved in the development of joy & entertainment worldwide."
        },
        {
          title: "Promote Investment Opportunities",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-07.svg`,
          hoverText:
            "Put forward Entertainment Infrastructure in relation to the present golden opportunities for global & local investors. "
        },
        {
          title: "Position GEA Worldwide",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-08.svg`,
          hoverText:
            "Actively position entertainment as the fastest growing industry in Saudi Arabia by “economic statistics” for the present & future Mega Ventures"
        },
        {
          title: "Knowledge Transfer",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-09.svg`,
          hoverText:
            "Knowledge transfer by observing and discussing up-to-date technologies, market trends, cases & experiments"
        },
        {
          title: "Boost the Entertainment Sector",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-10.svg`,
          hoverText:
            "Maintain and promote the leading position of GEA in the entertainment sectors worldwide."
        }
      ]
    };
  }
};
</script>

<style>
</style>
