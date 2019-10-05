<template>
    <v-row no-gutters>
        <v-col cols="12" class="primary">
            <CountDownComponent />
        </v-col>
        <v-col cols="12">
            <v-card tile flat min-height="450px" height="40vw" max-height="450px" class="conference-head-background">
                <ConferenceBannerComponent />
            </v-card>
        </v-col>
        <v-col cols="12">
            <ConferenceAboutComponent />
        </v-col>
        <v-col cols="12" class="white temp-hidden">
            <ConferenceObjectivesComponent />
        </v-col>
        <v-col cols="12">
            <v-row no-gutters class="mx-auto px-3 justify-space-around" style="max-width: 1280px;">
                
                <v-col cols="12" class="mx-auto ustify-space-around mt-6 align-center" style="max-width: 1280px;">
                    <v-row no-gutters class="mx-auto py-6 px-3 justify-space-around" style="max-width: 1280px;">
<!--                        <a href="javascript:void(0);" style="text-decoration: none;" v-on:click="showMe()"> -->
                            <a href="/JOY_FORUM_2019_Brochure.pdf" target="_blank" style="text-decoration: none;">
                                <div class="align-center">
                                    <div class="text-center" style="background-color:darkorange;border-radius: 5px; width: 250px;padding:5px 5px 5px 5px;">
                                        <v-img contain max-height="25px" src="/images/down.png"></v-img>
                                        <span class="white--text">Download <br /> Conference Agenda</span>
                                    </div>
                                </div>
                            </a>
<!--                        </a> -->
                        <v-col cols="12" class="px-3 py-6 primary--text font-weight-bold headline text-center">
                            <span class="volte" v-if="isArabic">
                                حلقات النقاش
                            </span>
                            <span class="volte" v-else>
                                CONFERENCE SESSIONS
                            </span>
                        </v-col>
                    </v-row>
                </v-col>
                
                
                 <!--
                <v-row no- class="temp-hidden">
                    <v-col cols="6" class="text-center">
                        <v-col cols="2" class="text-center">
                            <v-card height="120px" width="120px" @click="isDayOne = true" class="mx-auto" flat :color="isDayOne ? `#023c81` : `grey`">
                                <div class="white--text mont body-2 font-weight-bold pt-6" v-if="isArabic">
                                    يوم 1
                                </div>
                                <div class="white--text mont body-2 font-weight-bold pt-6" v-else>
                                    Day 1
                                </div>  
                            </v-card>
                        </v-col>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-card height="120px" width="120px" @click="isDayOne = false" class="mx-auto" :color="isDayOne ? `grey` : `#023c81`" flat>
                            <div class="white--text mont body-2 font-weight-bold pt-6" v-if="isArabic">
                                يوم 2
                            </div>
                            <div class="white--text mont body-2 font-weight-bold pt-6" v-else>
                                Day 2
                            </div> 
                        </v-card>
                    </v-col>
                </v-row>

                -->


                <v-col cols="12">
            <v-row no-gutters class="mx-auto py-6 px-3 justify-space-around">
                <v-col cols="2" class="text-center">
                    <v-card height="120px" width="120px" @click="isDayOne = true" class="border mx-auto" flat :color="isDayOne ? `#263475` : `grey`">
                        <div class="white--text mont body-2 font-weight-bold pt-12" v-if="isArabic" style="font-size: 50px !important;">
                            يوم 1
                        </div>
                        <div class="white--text mont body-2 font-weight-bold pt-12" v-else style="font-size: 50px !important;">
                            D 1
                        </div>
                        <div class="white--text mont caption pt-2" v-if="isArabic" hidden>
                            الأحد
                            <br />
                            13 أكتوبر
                        </div>
                        <div class="white--text mont caption pt-2" v-else hidden>
                            Sunday
                            <br />
                            October 13th
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="4" class="text-center">
                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: left;width: 100%;" v-if="isArabic">
                        <div style="color: #f8b615;text-align: right; padding-right:5px;">الحلقة 1</div>
                        <div style="color: #253474;padding-right: 5px;text-align: right;">الترفيه والاقتصاد</div>
                    </div>
                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: left;width: 100%;" v-else>
                        <div style="color: #f8b615;text-align: left; padding-left:5px;">Session 1</div>
                        <div style="color: #253474;padding-left: 5px;text-align: left;">Entertainment & Economy</div>
                    </div>

                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: right;width: 100%;margin-top: 5px;" v-if="isArabic">
                        <div style="color: #f8b615;text-align: right; padding-right:5px;">الحلقة 2</div>
                        <div style="color: #253474;padding-right: 5px;text-align: right;">صانع الترفيه</div>
                    </div>
                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: left;width: 100%;margin-top: 5px;" v-else>
                        <div style="color: #f8b615;text-align: left; padding-left:5px;">Session 2</div>
                        <div style="color: #253474;padding-left: 5px;text-align: left;">The Joy Maker</div>
                    </div>
                </v-col>
                <v-col cols="2" class="text-center">
                    <v-card height="120px" width="120px" @click="isDayOne = false" class="border mx-auto" :color="isDayOne ? `grey` : `#263475`" flat >
                        <div class="white--text mont body-2 font-weight-bold pt-12" v-if="isArabic" style="font-size: 50px !important;">
                            يوم 2
                        </div>
                        <div class="white--text mont body-2 font-weight-bold pt-12" v-else style="font-size: 50px !important;">
                            D 2
                        </div>
                        <div class="white--text mont caption pt-2" v-if="isArabic" hidden>
                            الإثنين
                            <br />
                            14 أكتوبر
                        </div>
                        <div class="white--text mont caption pt-2" v-else hidden>
                            Monday
                            <br />
                            October 14th
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="4" class="text-center">
                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: left;width: 100%;">
                        <div style="color: #f8b615;text-align: left; padding-left:5px;">Session 1</div>
                        <div style="color: #253474;padding-left: 5px;text-align: left;">Entertainment & Economy</div>
                    </div>
                    <div style="border:1px solid #263475;font-weight: bold;height:50px;float: left;width: 100%;margin-top: 5px;">
                        <div style="color: #f8b615;text-align: left; padding-left:5px;">Session 2</div>
                        <div style="color: #253474;padding-left: 5px;text-align: left;">The Joy Maker</div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" >
                    <div style="width: 100%;border-bottom: 1px solid #253474;position:absolute;display:block;padding:10px;"><br/></div>
                </v-col>
            </v-row>
            <br/>
        </v-col>



                
                <v-col cols="12" class="px-4 pt-12" v-for="(topic, index) in topicsArray" :key="topic.bgImageUrl" v-show="showTopic(index)">
                    <v-card color="white" flat class="border-radius">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <div class="mb-5 mt-5 ml-5 display-1 font-weight-bold">
                                    <span class="orange--text mont" v-if="isArabic">
                                        {{ topic[langKey].session}}
                                    </span> 
                                    <span class="orange--text volte" v-else>
                                        {{ topic[langKey].session }}
                                    </span>
                                </div>
                            </v-col>
                            <v-col cols="12">
                                <div class="mx-6 mb-6 py-3 mt-n6" style="border-bottom: 2px solid #023c81;"> 
                                    <span class="mont body-1 font-weight-bold" style="color:#023c81;">
                                        {{ topic[langKey].title }}
                                    </span>  
                                    <span class="float-right text--black mont font-weight-bold" v-if="isArabic"> 
                                        {{ topic[langKey].day }}
                                    </span>
                                    <span class="float-right text--black volte font-weight-bold" v-else>
                                        {{ topic[langKey].day }}
                                    </span> 
                                </div>
                            </v-col> 
                            <v-col cols="12" md="8" class="px-3 my-6">
                                <ul class="body-1 mont black--text font-weight-bold">
                                    <li v-for="bullet in topic[langKey].bulletPoints" :key="bullet">
                                        {{ bullet }}
                                    </li>
                                </ul>
                            </v-col>
                            <v-col cols="12" md="4" class="py-3 float-right">
                                <span class="primary--text font-weight-bold mont" style="font-size: 20px;" v-if="isArabic">
                                    Moderators
                                </span>
                                <span class="primary--text font-weight-bold volte" style="font-size: 20px;" v-else>
                                    Moderators
                                </span> 
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <span class="font-weight-bold mont d-block" style="text-transform:uppercase;" v-if="isArabic">
                                            {{ topic[langKey].moderator1 }}
                                        </span>
                                        <span class="font-weight-bold volte d-block" style="text-transform:uppercase;" v-else>
                                            {{ topic[langKey].moderator1 }}
                                        </span>  
                                        <v-card height="200px" flat class="border" max-width="180px">
                                            <v-img contain :src="topic[langKey].moderator1ImgSrc" style="border:1px solid #ccc;"> </v-img>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="font-weight-bold mont d-block" style="text-transform:uppercase;" v-if="isArabic">
                                            {{ topic[langKey].moderator2 }}
                                        </span>
                                        <span class="font-weight-bold volte d-block" style="text-transform:uppercase;" v-else>
                                            {{ topic[langKey].moderator2 }}
                                        </span>  
                                        <v-card height="200px" flat class="border" max-width="180px">
                                            <v-img contain :src="topic[langKey].moderator2ImgSrc"> </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row> 
                            </v-col>


                            <!--
                            <v-col cols="12" class="px-8 pt-4 temp-hidden">
                                <span class="title font-weight-bold mont grey--text text--darken-1">
                                    Hosts
                                </span>
                            </v-col>
                            <v-col cols="12" md="3" class="my-6 temp-hidden">
                                <v-card height="200px" flat class="border-radius mx-auto" max-width="180px" style="
              background-image: url('/images/Conference_presenter-01.png'); background-size: cover; background-position: center center; ">
                                    <div class="white--text text-center primary py-2" style="position: absolute; bottom: 0px; width: 100%; opacity: 0.8;">
                                        <div class="px-1">
                                            <div class="mont caption">Nadine Hani</div>
                                            <span class="overline mont">
                                                Senior Business News Presenter - Al Arabiya
                                            </span>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="9" class="px-3 my-6 temp-hidden">
                                <span class="caption mont">
                                    With a remarkable track record, Nadine has interviewed some of
                                    the most influential decision makers in the Arab business
                                    world, and internationally, including U.S. treasury secretary
                                    Henry Paulson and Saudi minister of finance Dr. Ibrahim
                                    Abdul-Aziz Al-Assaf, as well as hosting a personal finance
                                    show.
                                </span>
                            </v-col>
                            -->

                            <v-col cols="12" class="px-8 pt-3 text-center primary--text display-1 font-weight-bold">
                                <span class="mont"  v-if="isArabic">
                                    Speakers
                                </span>
                                <span class="volte" v-else>
                                    Speakers
                                </span>
                            </v-col>
                            <v-col cols="12 py-3">  
                                <template>
                                    <v-row no-gutters class="mx-auto pa-3" style="max-width: 1280px;">
                                        <v-col cols="1" class="my-auto text-right hidden-xs-only">
                                            <v-btn icon @click="thisSwiper.slidePrev()">
                                                <v-icon x-large color="primary">mdi-chevron-left</v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="12" sm="10">
                                            <swiper ref="speakersSwiper" :options="swiperOption" class="px-12">
                                                <swiper-slide v-for="speaker in topic[langKey].speakers" :key="speaker.title">
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
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
import CountDownComponent from "@/components/HomeComponents/00-CountDownComponent.vue";
import ConferenceBannerComponent from "@/components/OtherPagesComponents/ConferenceBannerComponent.vue";
import ConferenceAboutComponent from "@/components/OtherPagesComponents/ConferenceAboutComponent.vue";
import ConferenceObjectivesComponent from "@/components/OtherPagesComponents/ConferenceObjectivesComponent.vue";
//import SpeakersComponent from "@/components/HomeComponents/SpeakersComponent.vue";

export default {
    components: {
        CountDownComponent,
        ConferenceBannerComponent,
        ConferenceAboutComponent,
        ConferenceObjectivesComponent,
        //SpeakersComponent
    },
    data() {
        return {
            isDayOne: true,
            topicsArray: [{
                    bgImageUrl: `/images/topics-entertainment.jpg`,
                    en: {
                        session: "Session 1",
                        day: "13 October 2019",
                        title: "Entertainment & Economy Building",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        bulletPoints: [
                            "Entertainment & Vision of Saudi Arabia 2030",
                            "Enrich People's Lives & Improve Quality of Life",
                            "Diversifying Economy",
                            "Economic transition and entertainment growth"
                        ],
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
                            }
                        ],
                    },
                    ar: {
                        session: "Session 1",
                        day: "13 October 2019",
                        title: "الموضوع الأول: الترفيه والاقتصاد",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        bulletPoints: [
                            "الترفيه ورؤية المملكة 2030",
                            "إثراء الحياة وتعزيز جودتها",
                            "تنويع الاقتصاد",
                            "التحول الاقتصادي ونمو قطاع الترفيه"
                        ],
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
                            }
                        ],
                    }
                },
                {
                    bgImageUrl: `/images/topics-makingimpact.jpg`,
                    en: {
                        session: "Session 2", 
                        day: "13 October 2019",
                        title: "Making Impact - (Tech Talk Global Experiences)",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        moderator2: "Raya Abirashed",
                        moderator2ImgSrc: "/images/raya_abirashed.jpg",
                        bulletPoints: [
                            "Technology Impact on Entertainment",
                            "The Future of Digital Games",
                            "The Impact of VR – AR – MR (Virtual entertainment)",
                            "The impact of Live content",
                            "Digital Transformation (Big data – Blockchain)",
                            "Empowering the Entertainment industry"
                        ],
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
                            }
                        ],
                    },
                    ar: {
                        session: "Session 2",
                        day: "13 October 2019",
                        title: "الموضوع الثاني: صناعة التأثير – خبراء تقنيون",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        moderator2: "Raya Abirashed",
                        moderator2ImgSrc: "/images/raya_abirashed.jpg",
                        bulletPoints: [
                            "تأثير التكنولوجيا على الترفيه",
                            "مستقبل الألعاب الرقمية",
                            "تأثير المحتوى الحي",
                            "تأثير الواقع الافتراضي- الترفيه الافتراضي – تأثير المحتوى الحي",
                            "التحول الرقمي (البيانات الضخمة وسلاسل العملات الرقمية)",
                            "تمكين صناعة الترفيه"
                        ],
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
                            }
                        ],
                    }
                },
                {
                    bgImageUrl: `/images/topics-joymakers.jpg`,
                    en: {
                        session: "Session 1",
                        day: "14 October 2019",
                        title: "The Joy Makers",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg", 
                        bulletPoints: [
                            "Seizing Joy",
                            "The Joy Makers of Films",
                            "The Joy Makers of Theme Parks",
                            "The Joy Makers of Performing Arts",
                            "The Joy Makers of Digital Entertainment",
                            "The Joy Makers of Competitive Sports"
                        ]
                    },
                    ar: {
                        session: "Session 1",
                        day: "14 October 2019",
                        title: "الموضوع الأول: صنّاع البهجة",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg", 
                        bulletPoints: [
                            "اغتنام لحظات البهجة ",
                            "صنّاع البهجة للأفلام",
                            "صنّاع البهجة لمدن الترفيه",
                            "صنّاع البهجة للفنون الاستعراضية",
                            "صنّاع البهجة للترفيه الرقمي",
                            "صنّاع البهجة للرياضات التنافسية"
                        ],
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
                            }
                        ],
                    }
                },
                {
                    bgImageUrl: `/images/topics-mega.jpg`,
                    en: {
                        session: "Session 2",
                        day: "14 October 2019",
                        title: "Mega Ventures",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        moderator2: "Raya Abirashed",
                        moderator2ImgSrc: "/images/raya_abirashed.jpg",
                        bulletPoints: [
                            "An Expanding Infrastructure",
                            "Investment Opportunities in Entertainment Sector",
                            "Q & A"
                        ],
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
                            }
                        ],
                    },
                    ar: {
                        session: "Session 2",
                        day: "14 October 2019",
                        title: "المشاريع الضخمة",
                        moderator1: "Naidni Hani",
                        moderator1ImgSrc: "/images/nadini_hani.jpg",
                        moderator2: "Raya Abirashed",
                        moderator2ImgSrc: "/images/raya_abirashed.jpg",
                        bulletPoints: [
                            "توسيع البنية التحتية",
                            "فرص استثمارية في قطاع الترفيه",
                            "مشاريع ضخمة"
                        ],
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
                            }
                        ],
                    }
                },
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
            },
        };
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
        thisSwiper() {
            return this.$refs.speakersSwiper.swiper;
        }
    }, 
    methods: {
        showTopic(index) {
            if (this.isDayOne) {
                return index < 2;
            } else {
                return index > 1;
            }
        },
        showMe() {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    }
};
</script>
<style>
.conference-head-background {
    background-image: url("/images/Conference.jpg");
    background-size: cover;
    background-position: center center;
}

.v-card:before {
    border-radius: inherit;
}
</style>