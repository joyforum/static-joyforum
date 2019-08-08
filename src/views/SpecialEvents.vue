<template>
  <v-row no-gutters>
    <v-col cols="12" class="primary">
      <CountDownComponent />
    </v-col>
    <v-col cols="12">
      <v-card
        tile
        flat
        min-height="400px"
        height="40vw"
        max-height="450px"
        class="events-head-background"
      >
        <EventsBannerComponent />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="9" class="pa-3 mb-6 eventsyellow-text">
          <v-row no-gutters>
            <v-col cols="12">
              <span class="volte font-weight-bold headline">
                JOY EXCELLENCE AWARD
              </span>
              <span style="float: right;" class="hidden-sm-and-down">
                <div>
                  <span class="title mont">
                    Day 1
                  </span>
                  <br />
                  <span class="mont caption">
                    Sunday, October 13th
                  </span>
                </div>
              </span>
              <span style="float: right;" class="hidden-sm-and-down">
                <div class="pa-3">
                  <v-icon large color="#f8b615">mdi-calendar</v-icon>
                </div>
              </span>
            </v-col>
            <v-col cols="6" class="hidden-md-and-up py-3">
              <span>
                <v-icon large color="#f8b615">mdi-calendar</v-icon>
              </span>
              <span class="title mont">
                Day 1
              </span>
              <br />
              <span class="mont caption">
                Sunday, October 13th
              </span>
            </v-col>
            <v-col cols="6" class="hidden-md-and-up py-3">
              <v-img
                contain
                max-height="200px"
                src="/images/SpecialEvents_Trophy.png"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <div class="mont title grey--text py-3">
                ABOUT THE AWARD
              </div>
              <div class="mont body-1 grey--text">
                In honor of Joy forum 2019, a lavish Gala dinner will be held in
                a spectacular setting, guests will enjoy a unique international
                and traditional dinner menu while enjoying an exciting
                performance program featuring international entertainment shows.
                <br />
                <br />
                Joy Premium Award is an elegant award based on public opinion,
                designed to be handed to those who spread the joy and happiness
                around the world and in our Joyful land of Saudi Arabia. <br />
                <br />
                The award ceremony has a rich presence of international and
                local media covering & broadcasting the world’s celebrities
                attending & celebrating the award; either as special guests or
                as award winners.
                <br /><br />
                The ceremony will feature red-carpet moments and a pathway to
                the delightful ambiance of a charming Gala golden hall.
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="my-auto hidden-sm-and-down">
          <v-img
            contain
            max-height="300px"
            src="/images/SpecialEvents_Trophy.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="white">
      <v-row no-gutters class="mx-auto py-6 px-3" style="max-width: 1280px;">
        <v-col cols="12" md="9" class="pa-3 mb-6 eventsyellow-text">
          <v-row no-gutters>
            <v-col cols="12">
              <span class="volte font-weight-bold headline">
                GEA EXCELLENCE AWARD
              </span>
              <span style="float: right;" class="hidden-sm-and-down">
                <div>
                  <span class="title mont">
                    Day 2
                  </span>
                  <br />
                  <span class="mont caption">
                    Monday, October 14th
                  </span>
                </div>
              </span>
              <span style="float: right;" class="hidden-sm-and-down">
                <div class="pa-3">
                  <v-icon large color="#f8b615">mdi-calendar</v-icon>
                </div>
              </span>
            </v-col>
            <v-col cols="6" class="hidden-md-and-up py-3">
              <span>
                <v-icon large color="#f8b615">mdi-calendar</v-icon>
              </span>
              <span class="title mont">
                Day 2
              </span>
              <br />
              <span class="mont caption">
                Monday, October 14th
              </span>
            </v-col>
            <v-col cols="6" class="hidden-md-and-up py-3">
              <v-img
                contain
                max-height="150px"
                src="/images/SpecialEvents_Logo.png"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <div class="mont title grey--text py-3">
                ABOUT THE AWARD
              </div>
              <div class="mont body-1 grey--text">
                GEA Challenge Award will be awarded in collaboration with the
                national talent discovery program where talents will compete in
                all the industry’s categories.
                <br /><br />
                The winner will be announced & awarded on a special event at the
                second day of Joy Forum 2019 in the presence of regional &
                international celebrities and media.
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="my-auto hidden-sm-and-down">
          <v-img
            contain
            max-height="150px"
            src="/images/SpecialEvents_Logo.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import EventsBannerComponent from "@/components/OtherPagesComponents/EventsBannerComponent.vue";

export default {
  components: {
    CountDownComponent,
    EventsBannerComponent
  },
  data() {
    return {
      //dialog: false,
    };
  }
};
</script>

<style>
.eventsyellow-bg {
  background-color: #f8b615;
}
.eventsyellow-text {
  color: #f8b615;
}
.events-head-background {
  background-image: url("/images/SpecialEvents.jpg");
  background-size: cover;
  background-position: center center;
}
</style>

