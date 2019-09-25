<template>
  <v-row no-gutters class="mb-8">
    <v-col cols="12">
      <v-row
        no-gutters
        class="mx-auto pt-6 pb-3 px-3"
        style="max-width: 1280px;"
      >
        <v-col
          cols="12"
          class="px-3 py-6 font-weight-bold title"
          style="color: #263475;"
        >
          <span v-if="isArabic" class="mont">
            عارضون عالميون في معرض صناعة الترفيه
          </span>
          <span v-else class="mont">
            GLOBAL EXHIBITORS AT JOY EXPO
          </span>
        </v-col>
        <v-col cols="1" class="my-auto text-right hidden-xs-only">
          <v-btn icon @click="thisSwiper.slidePrev()">
            <v-icon x-large color="primary">
              {{ isArabic ? `mdi-chevron-right` : `mdi-chevron-left` }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="10">
          <swiper ref="exhibitorsSwiper" :options="swiperOption" class="px-12">
            <swiper-slide
              v-for="exhibitor in exhibitorsArray"
              :key="exhibitor.company"
            >
              <v-card tile flat color="#00000000" class="my-auto">
                <a :href="exhibitor.website" target="_blank">
                  <v-img
                    max-height="150px"
                    contain
                    class="my-auto"
                    :src="exhibitor.logo"
                  >
                  </v-img>
                </a>
              </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col cols="1" class="my-auto hidden-xs-only">
          <v-btn icon @click="thisSwiper.slideNext()">
            <v-icon x-large color="primary">
              {{ isArabic ? `mdi-chevron-left` : `mdi-chevron-right` }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6" class="text-center mb-3 mt-9 mx-auto">
          <v-btn
            rounded
            outlined
            block
            color="primary"
            @click="allDialog = true"
          >
            <span :class="isArabic ? `mont font-weight-bold body-1` : ``">
              {{ isArabic ? `المزيد` : `View All` }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <!-- The view all dialog -->
    <v-dialog v-model="allDialog" max-width="1200px">
      <v-card class="force-ltr pa-6">
        <v-row no-gutters>
          <v-col
            cols="6"
            sm="4"
            md="4"
            class="pa-3 text-center"
            v-for="exhibitor in exhibitorsArray"
            :key="exhibitor.company"
          >
            <div class="fill-height py-3" style="border: 1px solid black;">
              <a :href="exhibitor.website" target="_blank">
                <v-img contain :src="exhibitor.logo" max-height="150px"></v-img>
              </a>
              <div class="title mont py-1">
                {{ exhibitor.company }}
              </div>
              <div class="subtitle-1 mont py-1">
                Booth: {{ exhibitor.location }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      allDialog: false,
      exhibitorsArray: [
        {
          company: "Go tickets",
          location: "C16",
          website: "https://www.goticket.com",
          logo: "/images/exhibitors/goticket.jpg"
        },
        {
          company: "TagIt",
          location: "C19",
          website: "https://www.tagitgames.com",
          logo: "/images/exhibitors/tagit.jpg"
        },

        {
          company: "PlatinumList",
          location: "C3",
          website: "https://platinumlist.net",
          logo: "/images/exhibitors/platinumlist.jpg"
        },
        {
          company: "Benchmark",
          location: "C29,C30,C31,C32",
          website: "https://benchmarkksa.com",
          logo: "/images/exhibitors/benchmark.jpg"
        },
        {
          company: "Sobol Events Management",
          location: "A1",
          website: "http://sobol.co/?lang=en",
          logo: "/images/exhibitors/sobol.jpg"
        },
        {
          company: "Othaim Leisure",
          location: "B2",
          website: "http://www.othaimleisure.com/index.php/en/",
          logo: "/images/exhibitors/othaim.jpg"
        },

        {
          company: "Heights",
          location: "A4,A5",
          website:
            "http://ha.com.sa/en/heights-company-for-Conferences-and-exhibitions-Event-Management",
          logo: "/images/exhibitors/heights.jpg"
        },
        {
          company: "Passion",
          location: "C26",
          website: "",
          logo: "/images/exhibitors/passion.jpg"
        },
        {
          company: "D&B Audiotechnik",
          location: "C1,C2",
          website: "https://www.dbaudio.com/global/en/",
          logo: "/images/exhibitors/dandb.jpg"
        },
        {
          company: "Scarlett Entertainment",
          location: "C5",
          website: "https://www.scarlettentertainment.com/",
          logo: "/images/exhibitors/scarlett.jpg"
        },
        {
          company: "ShowTex",
          location: "C17",
          website: "https://www.showtex.com/en",
          logo: "/images/exhibitors/showtex.jpg"
        },
        {
          company: "Meyer",
          location: "C25",
          website: "https://meyersound.com/",
          logo: "/images/exhibitors/meyer.jpg"
        },
        {
          company: "Venuetech",
          location: "B4",
          website: "http://www.venuetech.ae/",
          logo: "/images/exhibitors/venuetech.jpg"
        },
        {
          company: "Mindscape",
          location: "C8",
          website: "https://www.mindscapestudio.ro/",
          logo: "/images/exhibitors/mindscape.jpg"
        },
        {
          company: "Groupe F",
          location: "A8,A9",
          website: "http://www.groupef.com/",
          logo: "/images/exhibitors/groupef.jpg"
        },
        {
          company: "Martin by Harman",
          location: "B1",
          website: "https://www.martin.com/en",
          logo: "/images/exhibitors/martin.jpg"
        },
        {
          company: "Stage Fx",
          location: "D12",
          website: "https://stagefx.ae/",
          logo: "/images/exhibitors/stagefx.jpg"
        },
        {
          company: "Thinkwell",
          location: "C23",
          website: "https://thinkwellgroup.com/",
          logo: "/images/exhibitors/thinkwell.jpg"
        },
        {
          company: "Syrup Entertainment",
          location: "C18",
          website: "https://www.syrup.sa/",
          logo: "/images/exhibitors/syrup.jpg"
        },
        {
          company: "Sublime",
          location: "C9,C10,C11,C12",
          website: "https://www.sublime.cc",
          logo: "/images/exhibitors/sublime.jpg"
        },
        {
          company: "TopEx",
          location: "C21,C22",
          website: "http://www.topex.sa/en/about.html",
          logo: "/images/exhibitors/topex.jpg"
        },

        {
          company: "Ethos",
          location: "D9",
          website: "http://www.ethosinteract.com/",
          logo: "/images/exhibitors/ethos.jpg"
        },

        {
          company: "Red Events",
          location: "B11",
          website: "http://www.redevents.com/",
          logo: "/images/exhibitors/red.jpg"
        },

        {
          company: "PAVO",
          location: "D8",
          website: "http://pavo.sa/",
          logo: "/images/exhibitors/pavo.jpg"
        },
        {
          company: "Alleycat",
          location: "C6",
          website: "alleycat.tv",
          logo: "/images/exhibitors/alleycat.jpg"
        },
        {
          company: "Plan A Experience Design",
          location: "B9",
          website: "https://whoneedsplanb.com",
          logo: "/images/exhibitors/plana.jpg"
        },

        {
          company: "Hwadi Company LTD",
          location: "B3",
          website: "https://hwadi.com/",
          logo: "/images/exhibitors/hawadi.jpg"
        },
        {
          company: "Flash Art",
          location: "D18",
          website: "https://flashart.com/en/portfolio-2/fireworks",
          logo: "/images/exhibitors/flashart.jpg"
        },
        {
          company: "7 Production",
          location: "C27",
          website: "https://www.7production.net/en",
          logo: "/images/exhibitors/7production.jpg"
        },
        {
          company: "Book My Show",
          location: "D13",
          website: "http://in.bookmyshow.com/",
          logo: "/images/exhibitors/book.jpg"
        },
        {
          company: "Platinum Events",
          location: "D6",
          website: "http://platinum4events.com/about-platinum-for-events/",
          logo: "/images/exhibitors/platinumevents.jpg"
        },
        {
          company: "General Authority of Statistics",
          location: "E6",
          website: "https://www.stats.gov.sa/en",
          logo: "/images/exhibitors/stats-auth.jpg"
        },
        {
          company: "Quality  of Life",
          location: "E5,F5,F6",
          website: "https://vision2030.gov.sa/en/programs/QoL",
          logo: "/images/exhibitors/qol.jpg"
        },
        {
          company: "SEVEN",
          location: "E7,E8",
          website: "http://SEVEN.sa",
          logo: "/images/exhibitors/seven.jpg"
        },
        {
          company: "MCIT",
          location: "F10,F11,F12",
          website: "https://www.mcit.gov.sa/en",
          logo: "/images/exhibitors/mcit.jpg"
        },
        {
          company: "MCI",
          location: "E1,E2,F1,F2,F3",
          website: "https://www.mci.gov.sa",
          logo: "/images/exhibitors/mci.jpg"
        },
        {
          company: "Lune Rouge",
          location: "A10,A11",
          website: "https://lunerouge.com/en/",
          logo: "/images/exhibitors/lunerouge.jpg"
        },

        {
          company: "Arabiyah",
          location: "D2",
          website: "https://english.alarabiya.net",
          logo: "/images/exhibitors/arabiya.jpg"
        },
        {
          company: "Rotana",
          location: "D3",
          website: "https://rotana.net/",
          logo: "/images/exhibitors/rotana.jpg"
        },
        {
          company: "SBC",
          location: "D4",
          website: "www.sbc.sa",
          logo: "/images/exhibitors/sbc.jpg"
        },
        {
          company: "MBC",
          location: "D5",
          website: "https://www.mbc.net/",
          logo: "/images/exhibitors/mbc.jpg"
        },

        {
          company: "Elite Valet",
          location: "D11",
          website: "https://elite-valet.com/",
          logo: "/images/exhibitors/elite.jpg"
        },
        {
          company: "Luxury KSA",
          location: "B8",
          website: "https://luxuryksa.info/",
          logo: "/images/exhibitors/luxury.jpg"
        },

        {
          company: "Maestro Group",
          location: "L1,L2",
          website: "http://maestrogroup.com/",
          logo: "/images/exhibitors/maestro.jpg"
        },
        {
          company: "DOF Robotics",
          location: "L1,L2",
          website: "http://www.dof.com.tr/",
          logo: "/images/exhibitors/dof.jpg"
        },
        {
          company: "ONEO7",
          location: "L1,L2",
          website: "https://www.oneo7.com/",
          logo: "/images/exhibitors/one07.jpg"
        },
        // new exhibitors
        {
          company: "Sparky's",
          location: "B5",
          website: "",
          logo: "/images/exhibitors/z-sparky.jpg"
        },
        {
          company: "C Block",
          location: "B7",
          website: "",
          logo: "/images/exhibitors/z-c-block.jpg"
        },
        {
          company: "ProLab",
          location: "B6",
          website: "",
          logo: "/images/exhibitors/z-prolab.jpg"
        },
        {
          company: "Eclipse",
          location: "A6",
          website: "",
          logo: "/images/exhibitors/z-eclipse.jpg"
        },
        {
          company: "Awaan",
          location: "C4",
          website: "",
          logo: "/images/exhibitors/z-awaan.jpg"
        },
        {
          company: "Fekra Events",
          location: "C7",
          website: "",
          logo: "/images/exhibitors/hokair.jpg"
        },
        {
          company: "ACT",
          location: "A3",
          website: "",
          logo: "/images/exhibitors/z-act.jpg"
        },
        {
          company: "Insomania",
          location: "A2",
          website: "",
          logo: "/images/exhibitors/z-insomnia.jpg"
        },
        {
          company: "The Gathering",
          location: "B12",
          website: "",
          logo: "/images/exhibitors/z-thegathering.jpg"
        },
        {
          company: "Optimum events",
          location: "C28",
          website: "",
          logo: "/images/exhibitors/z-optimum.jpg"
        },
        {
          company: "SM Productions",
          location: "D16",
          website: "",
          logo: "/images/exhibitors/z-smproductions.jpg"
        },
        {
          company: "Monster Jam",
          location: "A12",
          website: "",
          logo: "/images/exhibitors/z-monster.jpg"
        },
        {
          company: "Ferrari",
          location: "C13 - C15",
          website: "",
          logo: "/images/exhibitors/z-ferrari.jpg"
        },
        {
          company: "Cone zone",
          location: "D1",
          website: "",
          logo: "/images/exhibitors/z-conezone.jpg"
        },
        {
          company: "Coco",
          location: "D14",
          website: "",
          logo: "/images/exhibitors/z-coco.jpeg"
        },
        {
          company: "Ledeca",
          location: "C24",
          website: "",
          logo: "/images/exhibitors/z-ledeca.jpeg"
        },
        {
          company: "Mint Creative",
          location: "C14",
          website: "",
          logo: "/images/exhibitors/z-mint.jpeg"
        },
        {
          company: "Camel Club",
          location: "F8, F9",
          website: "",
          logo: "/images/exhibitors/z-camel.jpeg"
        },
        {
          company: "Amaala",
          location: "F4",
          website: "",
          logo: "/images/exhibitors/z-amaala.jpg"
        },
        {
          company: "Local Content Authority",
          location: "E3, E4",
          website: "",
          logo: "/images/exhibitors/z-localcontent.jpeg"
        }
        /* {
          company: "Havas",
          location: "D7",
          website: "https://havas.com/",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Insomnia",
          location: "A2",
          website: "https://insomniasaudi.com",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Aggreko",
          location: "C14",
          website: "https://www.aggreko.com/en-mideast",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "C Block",
          location: "B7",
          website: "https://www.cblock.com",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "ACT",
          location: "A3",
          website: "",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "ProLab",
          location: "B6",
          website: "https://prolabllc.com/",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Qiddiyah",
          location: "G1,G2,G3",
          website: "https://www.qiddiya.com/en/node/41",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Visit Saudi",
          location: "G4,G5,G6",
          website: "https://www.sauditourism.sa/en/pages/default.aspx",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Eclipse",
          location: "A6",
          website: "https://eclipse.ae",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "AWAN",
          location: "C4",
          website: "",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Fekra",
          location: "C7",
          website: "https://fekraevents.com",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "G=Expo",
          location: "D10",
          website: "http://gexpo.co/",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
        },
        {
          company: "Simulation Zone",
          location: "B10",
          website: "",
          logo: "/images/exhibitors/maestro.jpg" // temp logo
                {
          company: "MEMCO",
          location: "B12",
          website: "https://www.memco-int.com/",
          logo: "/images/exhibitors/memco.jpg"
        },
        // deleted
                {
          company: "Creative Technology",
          location: "C28",
          website: "https://www.ct-group.com/me/en",
          logo: "/images/exhibitors/creativetech.jpg"
        },
                {
          company: "HQ Worldwide Shows",
          location: "C24",
          website: "https://www.hqws.com/",
          logo: "/images/exhibitors/hqworldwide.jpg"
        },
                {
          company: "Fractal Systems",
          location: "L1,L2",
          website: "http://fractal.ae/",
          logo: "/images/exhibitors/fractal.jpg"
        },
                {
          company: "Diriyah Gate",
          location: "F7",
          website: "https://dgda.gov.sa/DGDA-en.aspx",
          logo: "/images/exhibitors/diriyahgate.jpg"
        },
        */
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          800: {
            slidesPerView: 3,
            spaceBetween: 25
          }
        }
      }
    };
  },
  computed: {
    thisSwiper() {
      return this.$refs.exhibitorsSwiper.swiper;
    },
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
