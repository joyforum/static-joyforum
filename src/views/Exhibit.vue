<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12" class="white">
      <v-form ref="form" @submit.prevent="submit()" lazy-validation>
        <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
          <v-col cols="12" class="pa-3">
            <div class="primary--text font-weight-black display-1">
              <span class="volte">
                REGISTER TO EXHIBIT
              </span>
            </div>
            <div class="mont font-italic subtitle-1">
              Fields with <span class="primary--text">*</span> are required
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Title <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="title"
              :rules="nameRules"
              required
              outlined
              label="Title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              First Name <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              required
              outlined
              label="First Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Last Name <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              required
              outlined
              label="Last Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Designation <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="designation"
              :rules="nameRules"
              required
              outlined
              label="Designation"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Company <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="company"
              :rules="nameRules"
              required
              outlined
              label="Company"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Email Address <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              outlined
              label="Email Address"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Mobile Phone <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              required
              outlined
              label="Mobile Phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-3">
            <div class="mont body-1">
              Country of Residence <span class="primary--text">*</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="country"
              :rules="nameRules"
              required
              outlined
              label="Country of Residence"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="pa-3">
            <div class="mont body-1">
              Fill up this form and a JOY Expo team member will get in touch and
              discuss your query and the best way to present your company.
            </div>
          </v-col>
          <v-col cols="12" class="pa-3">
            <div class="mont title grey--text text--darken-1 font-weight-bold">
              Terms &amp; Conditions
            </div>
          </v-col>
          <v-col cols="12" class="px-3">
            <div class="mont body-1">
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must accept to continue!']"
                label="I have read terms of admission and I accept.*"
                required
                color="primary"
              ></v-checkbox>
            </div>
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
      checkbox: false,
      title: "",
      firstName: "",
      lastName: "",
      designation: "",
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
      country: ""
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .post("https://mailthis.to/malkhuzayyim", {
            _after: "https://epic-torvalds-18a336.netlify.com",
            _subject: "Joyforum.com - Exhibit Contact Form",
            _replyto: this.email,
            Title: this.title,
            FirstName: this.firstName,
            LastName: this.lastName,
            Designation: this.designation,
            Company: this.company,
            Email: this.email,
            Phone: this.phone,
            Country: this.country
          })
          .then(function() {
            location.href = "https://mailthis.to/confirm";
          });
        /* 
        // eslint-disable-next-line
        console.log("submitting!");
        this.$router.push("/success");
         */
      }
    }
  }
};
</script>

<style>
</style>

