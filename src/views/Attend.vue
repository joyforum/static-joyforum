<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-form ref="form" @submit.prevent="submit()" lazy-validation>
        <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
          <v-col cols="12">
            <v-card flat class="border-radius pa-6 ma-6 lighten-3" color="grey">
              <v-row no-gutters>
                <v-col cols="12" class="pa-3">
                  <div class="primary--text font-weight-black display-1">
                    <span class="volte">
                      Interested to Attend?
                    </span>
                  </div>
                </v-col>
                <v-col cols="12" sm="3" class="pa-3">
                  <div class="mont body-1">
                    First Name <span class="primary--text">*</span>
                  </div>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="fullName"
                    :rules="nameRules"
                    required
                    filled
                    label="Full Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="pa-3">
                  <div class="mont body-1">
                    Email Address <span class="primary--text">*</span>
                  </div>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    required
                    filled
                    label="Email Address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="pa-3">
                  <div class="mont body-1">
                    Mobile Phone <span class="primary--text">*</span>
                  </div>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    required
                    filled
                    label="Mobile Phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="pa-3">
                  <div class="mont body-1">
                    Company <span class="primary--text">*</span>
                  </div>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="company"
                    :rules="nameRules"
                    required
                    filled
                    label="Company"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="pa-3">
                  <div class="mont body-1">
                    Job Position
                  </div>
                </v-col>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="jobPosition"
                    filled
                    label="Job Position"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" class="pa-3">
                  <div class="mont body-1">
                    Interested in
                  </div>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-checkbox
                    v-model="expo"
                    label="Joy Expo 2019"
                    color="primary"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-checkbox
                    v-model="conference"
                    label="Joy Conference"
                    color="primary"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-checkbox
                    v-model="workshops"
                    label="Workshops"
                    color="primary"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" md="3" class="pa-3" v-if="conference">
                  <div class="mont body-1">
                    Conference Topics:
                  </div>
                </v-col>
                <v-col cols="12" v-if="conference" class="px-6">
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-checkbox
                        v-model="day1"
                        label="Day 1"
                        color="primary"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="9" class="pa-3">
                      <div class="mont body-1">
                        - Entertainment & Economy Building
                        <br />
                        - Making Impact (Tech Talk - Global Experiences)
                      </div>
                    </v-col>
                    <v-col cols="3">
                      <v-checkbox
                        v-model="day2"
                        label="Day 2"
                        color="primary"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="9" class="pa-3">
                      <div class="mont body-1">
                        - The JOY Makers
                        <br />
                        - Mega Venture
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="pa-3" v-if="workshops">
                  <div class="mont body-1">
                    Workshops Topics you're interested in:
                  </div>
                </v-col>
                <v-col cols="12" v-if="workshops" class="px-6">
                  <v-checkbox
                    v-for="workshop in workshopsArray"
                    :key="workshop.title"
                    v-model="workshop.interested"
                    :label="workshop.title"
                    color="primary"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" class="pa-3 text-center">
                  <v-btn
                    rounded
                    small
                    depressed
                    color="primary"
                    class="px-12"
                    type="submit"
                  >
                    Apply
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!-- Card Ends -->
          <v-col cols="12" class="pa-3 mt-6 text-center">
            <div class="mont title font-weight-bold">
              Queries
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3 text-center">
            <div class="mont subtitle-1 grey--text text--darken-1">
              Registration
            </div>
            <div class="mont subtitle-1 primary--text">
              exhibit@joyforum.com
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3 text-center">
            <div class="mont subtitle-1 grey--text text--darken-1">
              Contact
            </div>
            <div class="mont subtitle-1 primary--text">
              +966 50 607 3695
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import axios from "axios";

export default {
  components: {
    CountDownComponent
  },
  data() {
    return {
      fullName: "",
      jobPosition: "",
      company: "",
      nameRules: [
        v => !!v || "This is required.",
        v => v.length > 1 || "Must be 2 characters or more.",
        v => v.length < 30 || "Must be less than 30 characters."
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "Phone is required",
        v =>
          /^\d{11,15}$/.test(v) ||
          "Phone number must be between 11 & 15 digits, please include country dialing code (00xxx)."
      ],
      expo: false,
      conference: false,
      workshops: false,
      day1: false,
      day2: false,
      workshopsArray: [
        {
          title: "Start your Event Management Business",
          interested: false
        },
        {
          title: "Establishing Your Company",
          interested: false
        },
        {
          title: "Valuations & Pitching Methods",
          interested: false
        },
        {
          title: "Customer Journey Mapping",
          interested: false
        },
        {
          title: "Content Curation",
          interested: false
        },
        {
          title: "Theme Park (Getting Started)",
          interested: false
        },
        {
          title: "Crowd Management & Safety",
          interested: false
        },
        {
          title: "Content Localization",
          interested: false
        },
        {
          title: "Service & Experience Design",
          interested: false
        },
        {
          title: "Applying Design Thinking to Event Design",
          interested: false
        }
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const payload = {
          _after: "https://epic-torvalds-18a336.netlify.com",
          _subject: "Joyforum.com - Exhibit Contact Form",
          _replyto: this.email,
          Full_Name: this.fullName,
          Email: this.email,
          Phone: this.phone,
          Company: this.company,
          Job_Position: this.jobPosition,
          Interested_in_Expo: this.expo ? "Yes" : "No",
          Interested_in_Conference: this.conference ? "Yes" : "No",
          Interested_in_Workshops: this.workshops ? "Yes" : "No"
        };
        if (this.conference) {
          payload.Conference_Day_1 = this.day1 ? "Yes" : "No";
          payload.Conference_Day_2 = this.day2 ? "Yes" : "No";
        }
        if (this.workshops) {
          for (let i = 0; i < this.workshopsArray.length; i++) {
            const keyName = this.workshopsArray[i].title.split(" ").join("_");
            payload[keyName] = this.workshopsArray[i].interested ? "Yes" : "No";
          }
        }

        axios
          .post("https://mailthis.to/malkhuzayyim", payload)
          .then(function() {
            location.href = "https://mailthis.to/confirm";
          });
      }
    }
  }
};
</script>

<style>
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>

