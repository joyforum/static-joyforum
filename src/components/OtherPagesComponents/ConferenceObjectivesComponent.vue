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
    </v-col>
    <v-col
      cols="6"
      sm="3"
      md="2"
      v-for="objective in objectivesArray"
      :key="objective.title"
      :class="$vuetify.breakpoint.mdAndUp ? `pa-3 mx-1` : `pa-2`"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          height="150px"
          width="150px"
          class="mx-auto border-circle primary"
          flat
          :raised="hover"
        >
          <v-fade-transition hide-on-leave>
            <div class="pt-6" v-if="!hover">
              <v-img height="30px" contain :src="objective.iconUrl"></v-img>
              <div class="white--text pt-3 px-6 text-center caption">
                <span class="mont">
                  {{ objective.title }}
                </span>
              </div>
            </div>
          </v-fade-transition>
          <v-fade-transition hide-on-leave>
            <div class="white--text text-center caption px-6 pt-8" v-if="hover">
              <span>
                {{ objective.hoverText }}
              </span>
            </div>
          </v-fade-transition>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      objectivesArray: [
        {
          title: "Entertainment Innovators",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-05.svg`,
          hoverText: "Entertainment Innovators"
        },
        {
          title: "Deliver on our motto",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-04.svg`,
          hoverText: "Deliver on our motto"
        },
        {
          title: "Empower Young Professionals",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-03.svg`,
          hoverText: "Empower Young Professionals"
        },
        {
          title: "Global Networking",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-02.svg`,
          hoverText: "Global Networking "
        },
        {
          title: "Advocate Ethics & Integrity",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-01.svg`,
          hoverText: "Advocate Ethics & Integrity"
        },
        {
          title: "Promote Investment Opportunities",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-07.svg`,
          hoverText: "Promote Investment Opportunities"
        },
        {
          title: "Position GEA Worldwide",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-08.svg`,
          hoverText: "Position GEA Worldwide"
        },
        {
          title: "Knowledge Transfer",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-09.svg`,
          hoverText: "Knowledge Transfer"
        },
        {
          title: "Boost the Entertainment Sector",
          iconUrl: `/images/objectives/Conference_Objectives_Icons-10.svg`,
          hoverText: "Boost the Entertainment Sector"
        }
      ]
    };
  }
};
</script>

<style>
</style>
