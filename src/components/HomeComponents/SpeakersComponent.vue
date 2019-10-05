<template>
    <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
        <v-col cols="1" class="my-auto text-right hidden-xs-only">
            <v-btn icon @click="thisSwiper.slidePrev()">
                <v-icon x-large color="primary">mdi-chevron-left</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12" sm="10">
            <swiper ref="speakersSwiper" :options="swiperOption" class="px-12">
                <swiper-slide v-for="speaker in speakers" :key="speaker.title">
                    <v-card flat class="border-circle">
                        <v-img contain :src="speaker.imgSrc"> </v-img>
                    </v-card>
                    <div class="body-2 font-weight-bold text-center pt-2">
                        <span class="mont">
                            {{ speaker.name }}
                        </span>
                    </div>
                    <div class="caption text-center">
                        <span class="mont">
                            {{ speaker.title }}
                        </span>
                    </div>
                </swiper-slide>
            </swiper>
        </v-col>
        <v-col cols="1" class="my-auto hidden-xs-only">
            <v-btn icon @click="thisSwiper.slideNext()">
                <v-icon x-large color="primary">mdi-chevron-right</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            speakers: [
                {
                  name: "H.E. Turki bin Abdulmohsen Al-Alshikh",
                  title: "Chairman of the General Entertainment Authority (GEA)",
                  imgSrc: "/images/Turki2.png"
                },
                {
                  name: "H.E. Mr. Mohammed Bin Mazyad Al Tuwaijri\n",
                  title: "Minister of Economy and Planning",
                  imgSrc: "/images/H.E. Mr. Mohammed Bin Mazyad Al Tuwaijri.jpg"
                },
                {
                  name: "HRH. Prince Abdulaziz bin Turki AlFaisal",
                  title: "Chairman of the Board of Directors  of the General Sports Authority (GSA)",
                  imgSrc: "/images/HRH Prince Abdulaziz bin turky faisal.jpg"
                },
                {
                  name: "Mr. Amr Banaja",
                  title: "CEO of the General Entertainment Authority (GEA)",
                  imgSrc: "/images/amr banaja.jpg"
                },
                {
                  name: "H.E. Eng. Abdullah bin  Amer Al-Swaha",
                  title: "Minister of Communications and Information Technology (MCIT)",
                  imgSrc: "/images/Abdullah bin amer Al Swaha.jpg"
                },
                {
                  name: "HRH. Prince Faisal bin Bandar bin Sultan\n",
                  title: "President of the Saudi Arabian\n" +
                          "Federation for Electronics and Intellectual Sports (SAFEIS)",
                  imgSrc: "/images/faisal bin bandar.jpg"
                },        {
                  name: "Eng. Mohamed Abdalla Al Zaabi",
                  title: "CEO of Miral Asset Management",
                  imgSrc: "/images/Miral CEO - Eng Mohamed Al Zaabi.jpg"
                },        {
                  name: "Mr. Fahad Alakeel",
                  title: "CEO of Quality of Life Program",
                  imgSrc: "/images/fahd aqeel.jpg"
                },        {
                  name: "H.E. Mr. Mohamed Alabbar",
                  title: "Chairman of Emaar Properties",
                  imgSrc: "/images/Mohd Abbar.jpg"
                },        {
                  name: "H.E. Dr. Fahad bin Sulaiman Al Tekhaifi",
                  title: "President of General Authority for Statistics (GASTAT)",
                  imgSrc: "/images/HE. Dr. Fahad bin Sulaiman Al Tekhaifi.jpg"
                },        {
                  name: "Mr. Fahd Hamidaddin",
                  title: "Chief of Investment, Strategy, and Marketing of Saudi Commission for Tourism and National Heritage (SCTH)",
                  imgSrc: "/images/Hamidaddin.jpg"
                },        {
                  name: "Eng. Saleh bin Ibrahim Al-Rasheed",
                  title: "Governor of Small & Medium Enterprises General Authority",
                  imgSrc: "/images/Saleh rasheed.jpg"
                },        {
                  name: "Samira  Tachfint",
                  title: "Sales and Marketing Director for International Markets in Disneyland Paris",
                  imgSrc: "/images/Samira Tachfint.jpg"
                },        {
                  name: "Myriam Belbachir",
                  title: "Head of Marketing for International Markets in Disneyland Paris",
                  imgSrc: "/images/Mariam belbashir.jpg"
                },        {
                  name: "Bill Ernest",
                  title: "CEO of Saudi Entertainment Ventures (SEVEN)",
                  imgSrc: "/images/bill ernest.jpg"
                },        {
                  name: "Marco Balich",
                  title: "President at  Balich Worldwide Shows",
                  imgSrc: "/images/balich.jpg"
                },        {
                  name: "David McKillips",
                  title: "Senior Vice President, International Park Operations of Six Flags",
                  imgSrc: "/images/McKillips.jpg"
                },        {
                  name: "Joseph Zenas",
                  title: "CEO of Thinkwell",
                  imgSrc: "/images/joe_zenas.jpg"
                },        {
                  name: "Jack Kenn",
                  title: "Entertainment Executive of EMM Williams Production",
                  imgSrc: "/images/Kenn.jpg"
                },        {
                  name: "Stéphane Mongeau",
                  title: "CEO & Executive Producer of Lune Rouge Entertainment",
                  imgSrc: "/images/Stéphane Mongeau.jfif"
                },        {
                  name: "Abdulaziz Almuzaini",
                  title: "CEO and Co-Founder of  Myrkott Animation Studio",
                  imgSrc: "/images/Muzaini.jpg"
                },        {
                  name: "Russell Crowe  (Under Confirmation)",
                  title: "American Actor",
                  imgSrc: "/images/rassel.jpg"
                },        {
                  name: "Jean Claude Van Damme  (Under Confirmation)",
                  title: "Belgian Actor",
                  imgSrc: "/images/gea-logo.png"
                },
                {
                  name: "Jason momoa  (Under Confirmation)",
                  title: "American Actor",
                  imgSrc: "/images/gea-logo.png"
                },
                {
                  name: "Michael Reininger",
                  title: "CEO of Qiddiya Investment Company",
                  imgSrc: "/images/Michael Reininger.jpg"
                },
                {
                  name: "Jerry Inzerillo",
                  title: "CEO of the Diriyah Gate Development Authority (DGDA)",
                  imgSrc: "/images/Jerry Inz.jpg"
                },
                {
                  name: "Carlo Boutagy",
                  title: "Founder and CEO of CBX",
                  imgSrc: "/images/Carlo Boutagy.jpg"
                },
                {
                  name: "John Kruse",
                  title: "Principal, Auctioneer, Appraiser at Worldwide Auctioneers",
                  imgSrc: "/images/john kruse.jpg"
                },
                {
                  name: "Ryan Friedlinghaus",
                  title: "CEO at West Coast Customs",
                  imgSrc: "/images/Ryan Frie.jpg"
                },
                {
                  name: "Clement Wong",
                  title: "Director, Product Marketing at Huawei Consumer Business Group",
                  imgSrc: "/images/clement wong.jpg"
                },
                {
                  name: "Kubilay Tok",
                  title: "CBO of HOLOGATE",
                  imgSrc: "/images/Kubilay.jpg"
                },
                {
                  name: "Paul Roseby",
                  title: "CEO and Artistic Director of National Youth Theatre of Great Britain",
                  imgSrc: "/images/Paul Roseby.jpg"
                },
                {
                  name: "James Craven",
                  title: "President at Live Nation Entertainment, Middle East",
                  imgSrc: "/images/James_Photo.jpg"
                },
                {
                  name: "Jakob Wahl",
                  title: "Executive Director and Vice President of IAAPA EMEA",
                  imgSrc: "/images/Martin boudreau.jpg"
                },
                {
                  name: "Sultan Alhokair",
                  title: "CEO of muvi CINEMAS",
                  imgSrc: "/images/Hokair.jpg"
                },
                {
                  name: "Scott Givens",
                  title: "CEO and President of FiveCurrents",
                  imgSrc: "/images/scott givens.jpg"
                },
                {
                  name: "Martin McDonnell",
                  title: "Chairman and Founder of the Soluis Group and Sublime",
                  imgSrc: "/images/McDonnell.jpg"
                },
                {
                  name: "Cameron Mitchell",
                  title: "CEO Majid Al Futtaim Cinemas and Majid Al Futtaim Leisure & Entertainment",
                  imgSrc: "/images/cameron.jpg"
                },
                {
                  name: "Inès Abdel Daïm",
                  title: "Minister of Culture of Egypt",
                  imgSrc: "/images/Egypt minister.jpg"
                }
            ],
            speakersSwiper: {},
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 100,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                breakpoints: {
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }
            }
        };
    },
    computed: {
        thisSwiper() {
            return this.$refs.speakersSwiper.swiper;
        }
    }
};
</script>
<style>
</style>