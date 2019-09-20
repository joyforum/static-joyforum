import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Workshops
    workshopsDialogIndex: 0,
    workshopsDialogShow: false,
    workshopsArray: [
      // Workshop 1
      {
        imgSrc: "/images/workshops/startup-guide.jpg",
        title: {
          en: "A Start Up guide to the Entertainment Industry",
          ar: "A Start Up guide to the Entertainment Industry"
        },
        description: {
          en:
            "Learning an overview of the Industry and the basic steps to create a (UEP) Unique Entertainment Proposition resulting in a promising business model for any Market",
          ar:
            "Learning an overview of the Industry and the basic steps to create a (UEP) Unique Entertainment Proposition resulting in a promising business model for any Market"
        },
        location: {
          en: "Joy Factory",
          ar: "Joy Factory"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/mostafa.jfif",
            companyLogo: "/images/workshops/companies/syrup.png",
            name: {
              en: "Mostafa Shirah",
              ar: "Mostafa Shirah"
            },
            company: {
              en: "Syrup Entertainment Advisory",
              ar: "Syrup Entertainment Advisory"
            },
            title: {
              en: "CEO",
              ar: "CEO"
            },
            bio: {
              en: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.

            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `,
              ar: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.

            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `
            },
            website: "https://www.syrup.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/syrup/"
              }
            ]
          }
        ]
      },
      // Workshop 2
      {
        imgSrc: "/images/workshops/entertainment-marketing.jpg",
        title: {
          en: "Entertainment Marketing",
          ar: "Entertainment Marketing"
        },
        description: {
          en:
            "Learning the basics of entertainment Marketing and understanding a number of Marketing concepts and mindsets.",
          ar:
            "Learning the basics of entertainment Marketing and understanding a number of Marketing concepts and mindsets."
        },
        location: {
          en: "Joy Factory",
          ar: "Joy Factory"
        },
        date: {
          en: "Oct. 14th",
          ar: "Oct. 14th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/mostafa.jfif",
            companyLogo: "/images/workshops/companies/syrup.png",
            name: {
              en: "Mostafa Shirah",
              ar: "Mostafa Shirah"
            },
            company: {
              en: "Syrup Entertainment Advisory",
              ar: "Syrup Entertainment Advisory"
            },
            title: {
              en: "CEO",
              ar: "CEO"
            },
            bio: {
              en: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.

            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `,
              ar: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.

            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `
            },
            website: "https://www.syrup.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/syrup/"
              }
            ]
          },
          {
            avatar: "/images/workshops/avatars/noor.jpg",
            companyLogo: "",
            name: {
              en: "Noor Taher",
              ar: "Noor Taher"
            },
            company: {
              en: "",
              ar: ""
            },
            title: {
              en: "Head of Digital & Content at WKC",
              ar: "Head of Digital & Content at WKC"
            },
            bio: {
              en: `
              With a background deeply seeded in user experience and behavioral psychology, Noor has managed to align science and innovation to humanize the interaction between the end user and the screen. Whether it’s keeping her ears to the street, being in sync with extensive analytics or A/B testing strategies for optimization, her knowledge provides a holistic approach for meaningful, real-time connections online. 

              Deeply passionate about and inspired by linguistics and writing, Noor’s early experience was defining online journeys through words and storytelling – bringing brands to life through strategy, persona and PR.

              Raised in Saudi, bred in New York, Noor has played the mediator and broker for cross cultural experiences and deals through celebrities, brands and businesses. Meditating cultural differences and aligning the goals of the project with every party involved - between the States and the Middle East. Developing and curating transformative digital experiences for CocaCola, HSBC, Giorgio Armani and, the Louvre Abu Dhabi has kept Noor’s sharpening her pencil with new boundaries and standards of communication.
            `,
              ar: `
              With a background deeply seeded in user experience and behavioral psychology, Noor has managed to align science and innovation to humanize the interaction between the end user and the screen. Whether it’s keeping her ears to the street, being in sync with extensive analytics or A/B testing strategies for optimization, her knowledge provides a holistic approach for meaningful, real-time connections online. 

              Deeply passionate about and inspired by linguistics and writing, Noor’s early experience was defining online journeys through words and storytelling – bringing brands to life through strategy, persona and PR.

              Raised in Saudi, bred in New York, Noor has played the mediator and broker for cross cultural experiences and deals through celebrities, brands and businesses. Meditating cultural differences and aligning the goals of the project with every party involved - between the States and the Middle East. Developing and curating transformative digital experiences for CocaCola, HSBC, Giorgio Armani and, the Louvre Abu Dhabi has kept Noor’s sharpening her pencil with new boundaries and standards of communication.
            `
            },
            website: "",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/noor-taher-84320051/"
              }
            ]
          }
        ]
      },
      // Workshop 3
      {
        imgSrc: "/images/workshops/investing-in-entertainment.jpg",
        title: {
          en: "Investing in the Entertainment Industry (local films)",
          ar: "Investing in the Entertainment Industry (local films)"
        },
        description: {
          en: `
1-The best business approach to finance a movie (relation between studio and investor).
2- Local market size ( current and future )
3- Sources of revenue and revenue share models in local market.
4- Sustainability and growth.
5- An eye for box office content (is it an award winning movie or a Blockbuster movie?)
          `,
          ar: `
          1-The best business approach to finance a movie (relation between studio and investor).
          2- Local market size ( current and future )
          3- Sources of revenue and revenue share models in local market.
          4- Sustainability and growth.
          5- An eye for box office content (is it an award winning movie or a Blockbuster movie?)
                    `
        },
        location: {
          en: "Joy Factory",
          ar: "Joy Factory"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/abdulaziz.jfif",
            companyLogo: "/images/workshops/companies/myrkott.png",
            name: {
              en: "Abdulaziz Al Muzaini",
              ar: "Abdulaziz Al Muzaini"
            },
            company: {
              en: "Myrkott",
              ar: "Myrkott"
            },
            title: {
              en: "CEO & Co-Founder",
              ar: "CEO & Co-Founder"
            },
            bio: {
              en: `
            Myrkott Animation Studio is a Saudi company, founded in Riyadh in 2014, which is specialized in the creative industry and animation production.
            `,
              ar: `
            Myrkott Animation Studio is a Saudi company, founded in Riyadh in 2014, which is specialized in the creative industry and animation production.
            `
            },
            website: "http://www.myrkott.com/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/abdulaziz-almuzaini-18357a103/"
              }
            ]
          }
        ]
      },
      // Workshop 4
      {
        imgSrc: "/images/workshops/crowd-management.jpg",
        title: {
          en: "Crowd Management and Health & Safety",
          ar: "Crowd Management and Health & Safety"
        },
        description: {
          en: `
•	Understand the principles and applications of Crowd Science
•	Crowd risk analysis and safety engineering
•	Demonstrate how to model an event by crowd phases
- Crowd risk analysis and safety engineering
- Demonstrate how to model an event by Crowd phases
`,
          ar: `
          •	Understand the principles and applications of Crowd Science
          •	Crowd risk analysis and safety engineering
          •	Demonstrate how to model an event by crowd phases
          - Crowd risk analysis and safety engineering
          - Demonstrate how to model an event by Crowd phases
          `
        },
        location: {
          en: "Joy Academy",
          ar: "Joy Academy"
        },
        date: {
          en: "Oct. 14th",
          ar: "Oct. 14th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/jim.jfif",
            companyLogo: "/images/workshops/companies/livenation.png",
            name: {
              en: "Jim Digby",
              ar: "Jim Digby"
            },
            company: {
              en: "Live Nation",
              ar: "Live Nation"
            },
            title: {
              en: "Major Events Esports & Festivals Director",
              ar: "Major Events Esports & Festivals Director"
            },
            bio: {
              en: `
            Live Nation is the world’s leading live entertainment company, we are privileged to work with artists to bring their creativity to life on stages around the world. Whether it’s two hours at a packed club, or an entire weekend of sets at a festival, a live show does more than entertain. It can uplift, inspire and create a memory that lasts a lifetime. 
            `,
              ar: `
            Live Nation is the world’s leading live entertainment company, we are privileged to work with artists to bring their creativity to life on stages around the world. Whether it’s two hours at a packed club, or an entire weekend of sets at a festival, a live show does more than entertain. It can uplift, inspire and create a memory that lasts a lifetime. 
            `
            },
            website: "https://www.livenation.com/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/jdigby/"
              }
            ]
          },
          {
            avatar: "/images/workshops/avatars/tim.jpg",
            companyLogo: "",
            name: {
              en: "Tim Rovers",
              ar: "Tim Rovers"
            },
            company: {
              en: "",
              ar: ""
            },
            title: {
              en: "",
              ar: ""
            },
            bio: {
              en: `
              Tim Roberts has 30 years’ experience in the event industry, having consulted on a huge range of events, including festivals, sporting events, national celebrations and concerts across the globe. Since 2000 he has been a partner and Senior Adviser at The Event Safety Shop in Bristol, UK, and is a Chartered Member of the Institute of Occupational Safety and Health (CMIOSH).
              Tim was the first person in England to graduate with the new MSc in Crowd Safety and Risk Analysis, he holds a degree in Philosophy and Social Science and the NEBOSH Level 6 Diploma in Occupational Health and Safety. For 12 years he was the Safety Coordinator at Glastonbury Festival, and then enjoyed a spell as the festival’s Event Operations Director. Every year Tim works dozens of events of every conceivable type, indoors & out, around the world.
              This combination of qualification and practical experience gives excellent insight into the safety challenges of major event production and an ability to think strategically whilst (literally) keeping his boots on the ground.
              He has been actively involved in developing international standards for the entertainment sector, including work with UK regulators and the USA’s Event Safety Alliance. Tim is also a keen educator and trainer, recently designing course materials and content for MISK Foundation (KSA) and for Live Nation’s Emerging Markets team.
              Given that his clients tour the globe, it makes sense for Tim to expand his business along with them, and he is currently expanding business ventures in the Middle East, Hong Kong and the USA.
              `,
              ar: `
              Tim Roberts has 30 years’ experience in the event industry, having consulted on a huge range of events, including festivals, sporting events, national celebrations and concerts across the globe. Since 2000 he has been a partner and Senior Adviser at The Event Safety Shop in Bristol, UK, and is a Chartered Member of the Institute of Occupational Safety and Health (CMIOSH).
              Tim was the first person in England to graduate with the new MSc in Crowd Safety and Risk Analysis, he holds a degree in Philosophy and Social Science and the NEBOSH Level 6 Diploma in Occupational Health and Safety. For 12 years he was the Safety Coordinator at Glastonbury Festival, and then enjoyed a spell as the festival’s Event Operations Director. Every year Tim works dozens of events of every conceivable type, indoors & out, around the world.
              This combination of qualification and practical experience gives excellent insight into the safety challenges of major event production and an ability to think strategically whilst (literally) keeping his boots on the ground.
              He has been actively involved in developing international standards for the entertainment sector, including work with UK regulators and the USA’s Event Safety Alliance. Tim is also a keen educator and trainer, recently designing course materials and content for MISK Foundation (KSA) and for Live Nation’s Emerging Markets team.
              Given that his clients tour the globe, it makes sense for Tim to expand his business along with them, and he is currently expanding business ventures in the Middle East, Hong Kong and the USA.
              `
            },
            website: "",
            socials: []
          }
        ]
      },
      // Workshop 5
      {
        imgSrc: "/images/workshops/theme-park.jpg",
        title: {
          en: "Theme Park Development",
          ar: "Theme Park Development"
        },
        description: {
          en: "Theme Park Development",
          ar: "Theme Park Development"
        },
        location: {
          en: "Joy Factory",
          ar: "Joy Factory"
        },
        date: {
          en: "Oct. 14th",
          ar: "Oct. 14th"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/don.jfif",
            companyLogo: false,
            name: {
              en: "Don Patts",
              ar: "Don Patts"
            },
            company: {
              en: "Qiddiya",
              ar: "Qiddiya"
            },
            title: {
              en: "President of Parks and Attractions",
              ar: "President of Parks and Attractions"
            },
            bio: {
              en: `
              My career has centered on destination resort and entertainment industries where I've held progressively demanding and diverse operating and change leadership positions in theme park, destination resort, ski area and food and beverage businesses including Senior Vice President, Universal Studios Florida - Operations, Vice President - General Manager Orange Lake Resorts, and Vice President Resort, Park and Entertainment Business Operations for Riverside Investment Group. Have created and led broad scale initiatives in organizational design, change leadership, experience and attraction development that resulted in record levels of guest and employee satisfaction.
            `,
              ar: `
              My career has centered on destination resort and entertainment industries where I've held progressively demanding and diverse operating and change leadership positions in theme park, destination resort, ski area and food and beverage businesses including Senior Vice President, Universal Studios Florida - Operations, Vice President - General Manager Orange Lake Resorts, and Vice President Resort, Park and Entertainment Business Operations for Riverside Investment Group. Have created and led broad scale initiatives in organizational design, change leadership, experience and attraction development that resulted in record levels of guest and employee satisfaction.            `
            },
            website: "https://www.qiddiya.com/en/node/41",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/donpotts "
              }
            ]
          },
          {
            avatar: "/images/workshops/avatars/matthew.jpg",
            companyLogo: false,
            name: {
              en: "Matthew Priddy",
              ar: "Matthew Priddy"
            },
            company: {
              en: "Qiddiya",
              ar: "Qiddiya"
            },
            title: {
              en: "Executive Director of Technical Services Development",
              ar: "Executive Director of Technical Services Development"
            },
            bio: {
              en: `
              Matthew has made a successful career in the prototype, project development and real estate fields. In his position as Sr. V.P. Of Worldwide Production for Walt Disney Imagineering, Matthew was responsible for design, engineering, manufacturing and overall project management for theme parks, resorts and technical development over a 20 yr. period. Yearning to exercise his entrepreneurial skills, Matthew created his own business and delivered numerous high end retail projects as well as products for sale through Wal Mart and Pet's Mart.
              `,
              ar: `
              Matthew has made a successful career in the prototype, project development and real estate fields. In his position as Sr. V.P. Of Worldwide Production for Walt Disney Imagineering, Matthew was responsible for design, engineering, manufacturing and overall project management for theme parks, resorts and technical development over a 20 yr. period. Yearning to exercise his entrepreneurial skills, Matthew created his own business and delivered numerous high end retail projects as well as products for sale through Wal Mart and Pet's Mart.
              `
            },
            website: "https://www.qiddiya.com/en/node/41",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/matthew-priddy-44b2901b/ "
              }
            ]
          }
        ]
      },
      // Workshop 6
      {
        imgSrc: "/images/workshops/edutainment.jpg",
        title: {
          en: "Immersive 'Edutainment'",
          ar: "Immersive 'Edutainment'"
        },
        description: {
          en: `
Consider how new immersive visualisation technologies like VR & AR are creating a brand new interface between entertainment and education...and what this means for the future of learning.

Explore how to use immersive visualisation and play-based learning to turbocharge the understanding and retention of information, and the enormous value that holds for both entertainment professionals & educators.
`,
          ar: `
Consider how new immersive visualisation technologies like VR & AR are creating a brand new interface between entertainment and education...and what this means for the future of learning.

Explore how to use immersive visualisation and play-based learning to turbocharge the understanding and retention of information, and the enormous value that holds for both entertainment professionals & educators.
`
        },
        location: {
          en: "Joy Lab",
          ar: "Joy Lab"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/martin.jfif",
            companyLogo: "/images/workshops/companies/sublime.png",
            name: {
              en: "Martin Mcdonnel",
              ar: "Martin Mcdonnel"
            },
            company: {
              en: "Sublime",
              ar: "Sublime"
            },
            title: {
              en: "Chairman & Founder",
              ar: "Chairman & Founder"
            },
            bio: {
              en: `
            Chairman and Founder of the Soluis Group and Sublime Since 2000 Martin has built a group of successful businesses that deliver best in class 3D visualisation and interactive digital presentation. His vision to connect the latest digital technology platforms to the needs of different market sectors has led his businesses to be amongst the earliest innovators in bringing the benefits of augmented and virtual reality to the industries including design, construction, manufacturing and healthcare. This drive has led his business Sublime to recently win one of only three inaugural Higgs EDGE awards and Soluis to win Innovate UK’s IC Tomorrow competition to develop augmented reality (AR) software, utilised at Crossrail sites in London. Martin is now pioneering, and a recognised thought leader, in the development of shared immersive solutions for business and advanced AR assisted tools that will transform the world of work.
            `,
              ar: `
            Chairman and Founder of the Soluis Group and Sublime Since 2000 Martin has built a group of successful businesses that deliver best in class 3D visualisation and interactive digital presentation. His vision to connect the latest digital technology platforms to the needs of different market sectors has led his businesses to be amongst the earliest innovators in bringing the benefits of augmented and virtual reality to the industries including design, construction, manufacturing and healthcare. This drive has led his business Sublime to recently win one of only three inaugural Higgs EDGE awards and Soluis to win Innovate UK’s IC Tomorrow competition to develop augmented reality (AR) software, utilised at Crossrail sites in London. Martin is now pioneering, and a recognised thought leader, in the development of shared immersive solutions for business and advanced AR assisted tools that will transform the world of work.
            `
            },
            website: "https://www.sublime.cc/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/martin-mcdonnell-068a2124/"
              }
            ]
          }
        ]
      },
      // Workshop 7
      {
        imgSrc: "/images/workshops/entertainment-industry.jpg",
        title: {
          en: "Entertainment Industry as an important pillar in Quality of Life",
          ar: "Entertainment Industry as an important pillar in Quality of Life"
        },
        description: {
          en: `
Understanding the Quality of Life Program and its objectives.
Recognizing entertainment as a means of creating better life.
Knowing the impact of consumers’ behaviour on the entertainment sector.
Understanding the role of social responsibility in the entertainment industry.
Exploring business opportunities for entrepreneurs and investors.
            `,
          ar: `
          Understanding the Quality of Life Program and its objectives.
          Recognizing entertainment as a means of creating better life.
          Knowing the impact of consumers’ behaviour on the entertainment sector.
          Understanding the role of social responsibility in the entertainment industry.
          Exploring business opportunities for entrepreneurs and investors.
                      `
        },
        location: {
          en: "Joy Kitchen",
          ar: "Joy Kitchen"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/ibraheem.png",
            companyLogo: "/images/footer-qol-logo.png",
            name: {
              en: "Dr. Ibraheem Sheerah",
              ar: "Dr. Ibraheem Sheerah"
            },
            company: {
              en: "Quality of Life Program",
              ar: "Quality of Life Program"
            },
            title: {
              en: "Chief Business Development",
              ar: "Chief Business Development"
            },
            bio: {
              en: `
            A strategic and tactical partner to the organization’s personnel, aggressive in both setting and accomplishing goals, delivering consistent, measurable results, and a motivating force for staff development. Capable of adapting and/or implementing improved operational requirements based on business drivers and innovative continuous improvement solutions. Capable of ensuring customer satisfaction and strategy objectives fulfilment.
            `,
              ar: `
            A strategic and tactical partner to the organization’s personnel, aggressive in both setting and accomplishing goals, delivering consistent, measurable results, and a motivating force for staff development. Capable of adapting and/or implementing improved operational requirements based on business drivers and innovative continuous improvement solutions. Capable of ensuring customer satisfaction and strategy objectives fulfilment.
            `
            },
            website: "https://vision2030.gov.sa/en/programs/QoL",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/ibraheemsheerah/"
              }
            ]
          }
        ]
      },
      // Workshop 8
      {
        imgSrc: "/images/workshops/content-creation.jpg",
        title: {
          en: "Content Creation",
          ar: "Content Creation"
        },
        description: {
          en: `
          Are you involved in the entertainment industry as a content creator? A Filmmaker? A visual artist? Or a strategist? This workshop will professionally shift your perspective on the whole process of visual communication as it reinforces solid fundamentals of the field, with innovative techniques that make you stand out firmly in the centre of the world of entertainment.
          Expand your creativity & develop unmatched skills that drive you to excel in this field of art & business.
          `,
          ar: `
          Are you involved in the entertainment industry as a content creator? A Filmmaker? A visual artist? Or a strategist? This workshop will professionally shift your perspective on the whole process of visual communication as it reinforces solid fundamentals of the field, with innovative techniques that make you stand out firmly in the centre of the world of entertainment.
          Expand your creativity & develop unmatched skills that drive you to excel in this field of art & business.
          `
        },
        location: {
          en: "Joy Lab",
          ar: "Joy Lab"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/anthony.jfif",
            companyLogo: "/images/workshops/companies/chabarekh.png",
            name: {
              en: "Anthony Chabarekh",
              ar: "Anthony Chabarekh"
            },
            company: {
              en: "Chabarekh S.A.R.L",
              ar: "Chabarekh S.A.R.L"
            },
            title: {
              en: "Chief Business Development",
              ar: "Chief Business Development"
            },
            bio: {
              en: `
            Ph.D. in Visual Arts, Film Studies
            Academic Developer for Cinematic Arts program, AUB
            Professional Continuing Education program ACCET accredited, Washington DC. Author of “Cenesthesia”, the Science behind the Art of Film CACM, American Anti-Corruption Institute, Arizona Conferences, Workshops & Events Director for the Lebanese Economic & Social Council
            Developer of Augmented Reality & Hologram fusion systems for Touch-Lab telecommunication
            `,
              ar: `
            Ph.D. in Visual Arts, Film Studies
            Academic Developer for Cinematic Arts program, AUB
            Professional Continuing Education program ACCET accredited, Washington DC. Author of “Cenesthesia”, the Science behind the Art of Film CACM, American Anti-Corruption Institute, Arizona Conferences, Workshops & Events Director for the Lebanese Economic & Social Council
            Developer of Augmented Reality & Hologram fusion systems for Touch-Lab telecommunication
            `
            },
            website: "https://chabarekh.com/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/chabarekh/"
              }
            ]
          }
        ]
      },
      // Workshop 9
      {
        imgSrc: "/images/workshops/how-to.jpg",
        title: {
          en: "How to start your event organically",
          ar: "How to start your event organically"
        },
        description: {
          en: `
            Techniques to grow your event organically

            How to start your event planning business
            `,
          ar: `
          Techniques to grow your event organically

          How to start your event planning business
          `
        },
        location: {
          en: "Joy Lab",
          ar: "Joy Lab"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "04:00 PM - 06:00 PM",
          ar: "04:00 PM - 06:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/firoiu.png",
            companyLogo: "/images/workshops/companies/coco.png",
            name: {
              en: "Firoiu Dan Nicolae",
              ar: "Firoiu Dan Nicolae"
            },
            company: {
              en: "COCO Agency",
              ar: "COCO Agency"
            },
            title: {
              en: "Co-Founder",
              ar: "Co-Founder"
            },
            bio: {
              en: `
            Extensive experience in all aspects of Communication-, Marketing-, Accounting Management, Event Coordinating and Budget Coordination. Take charge professional with the ability to manage administration and logistics in a busy special events environment. Passionate for marketing, brand development and event coordination while consistently providing outstanding customer service. Enthusiastic professional, successfully building profitable relationships with new and existing clients.

            Active 18 years in the event sector. Promoting events all over Europe in France, Belgium, UK, Germany, Holland, Romania, Bulgaria, Ukraine - Poland. The last 8 years all the events and festivals that have been coordinated by Sir Firoiu Dan-Nicoalae reach between 5000 and with a record of 1.2 million visitors. His events have been nominated five times for the European Festival Awards - receiving the award of the best event in Bulgaria for 2013 and more than 20 awards in Ukraine - Bulgaria and Saudi Arabia in the last two years. Sir Firoiu Dan-Nicolae become a senior event manager in begin of 2012. Owner of 4 event companies in Europe. His skills gather a big variation of the event production, Marketing Strategy, Brand Development, Consultant Events, Brand Development, Project, Production Event Management, Logistic Event Manager, & Promotion, Social Media Expertise.
            `,
              ar: `
            Extensive experience in all aspects of Communication-, Marketing-, Accounting Management, Event Coordinating and Budget Coordination. Take charge professional with the ability to manage administration and logistics in a busy special events environment. Passionate for marketing, brand development and event coordination while consistently providing outstanding customer service. Enthusiastic professional, successfully building profitable relationships with new and existing clients.

            Active 18 years in the event sector. Promoting events all over Europe in France, Belgium, UK, Germany, Holland, Romania, Bulgaria, Ukraine - Poland. The last 8 years all the events and festivals that have been coordinated by Sir Firoiu Dan-Nicoalae reach between 5000 and with a record of 1.2 million visitors. His events have been nominated five times for the European Festival Awards - receiving the award of the best event in Bulgaria for 2013 and more than 20 awards in Ukraine - Bulgaria and Saudi Arabia in the last two years. Sir Firoiu Dan-Nicolae become a senior event manager in begin of 2012. Owner of 4 event companies in Europe. His skills gather a big variation of the event production, Marketing Strategy, Brand Development, Consultant Events, Brand Development, Project, Production Event Management, Logistic Event Manager, & Promotion, Social Media Expertise.
            `
            },
            website: "www.cocoagency.bg",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/firoiudan/"
              }
            ]
          }
        ]
      },
      // Workshop 10
      {
        imgSrc: "/images/workshops/applying-design-thinking.jpg",
        title: {
          en: "Applying Design Thinking",
          ar: "Applying Design Thinking"
        },
        description: {
          en: `
Turning objectives into outcomes
Adoption and Integration of design thinking
The tools and methods
`,
          ar: `
          Turning objectives into outcomes
          Adoption and Integration of design thinking
          The tools and methods
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "Joy Kitchen"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/joe-zenas.jfif",
            companyLogo: "/images/workshops/companies/thinkwell.png",
            name: {
              en: "Joseph Zenas",
              ar: "Joseph Zenas"
            },
            company: {
              en: "ThinkWell Group",
              ar: "ThinkWell Group"
            },
            title: {
              en: "CEO",
              ar: "CEO"
            },
            bio: {
              en: `
            Responsible for leading the strategic direction of the company as well as managing new growth opportunities, corporate strategies, alliances, and intellectual property partnerships.
            `,
              ar: `
            Responsible for leading the strategic direction of the company as well as managing new growth opportunities, corporate strategies, alliances, and intellectual property partnerships.
            `
            },
            website: "https://thinkwellgroup.com/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/joe-zenas-1363172/              "
              }
            ]
          }
        ]
      },
      // Workshop 11
      {
        imgSrc: "/images/workshops/joy-active-society.jpg",
        title: {
          en: "The Joy of an Active Society",
          ar: "The Joy of an Active Society"
        },
        description: {
          en: `
Entertainment in fitness is usually thought of in terms of audio and visual, especially in commercial fitness. However, entertainment and physical activity go beyond the walls of commercial gyms. To engage the society in active experiences that are entertaining is much simpler than our technological advancements and Physical Spaces.
-    Taking it back to Basics.
-    How to create an active society
-    How to encourage Corporate Social Responsibility to take part in       these activities.    
-    Vision 2030 and the trend of health and wellness.
-    Fitness Tourism.
-    Fitness as entertainment and for everyone
-    Urban planning and designs roles
-    Creating active experiences that are fun, free & for everyone.
`,
          ar: `
          Entertainment in fitness is usually thought of in terms of audio and visual, especially in commercial fitness. However, entertainment and physical activity go beyond the walls of commercial gyms. To engage the society in active experiences that are entertaining is much simpler than our technological advancements and Physical Spaces.
          -    Taking it back to Basics.
          -    How to create an active society
          -    How to encourage Corporate Social Responsibility to take part in       these activities.    
          -    Vision 2030 and the trend of health and wellness.
          -    Fitness Tourism.
          -    Fitness as entertainment and for everyone
          -    Urban planning and designs roles
          -    Creating active experiences that are fun, free & for everyone.
          `
        },
        location: {
          en: "Joy Lab",
          ar: "Joy Lab"
        },
        date: {
          en: "Oct. 14th",
          ar: "Oct. 14th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/riham-sara.jpg",
            companyLogo: "/images/workshops/companies/kore.png",
            name: {
              en: "Sara AlModaimigh",
              ar: "Sara AlModaimigh"
            },
            company: {
              en: "Kore",
              ar: "Kore"
            },
            title: {
              en: "Co Founder & Managing Director",
              ar: "Co Founder & Managing Director"
            },
            bio: {
              en: `
              Sara has spent the last 7 years learning everything there is to know about the Health and Fitness industry from researching fitness trends, women’s lifestyle & fitness needs,  equipping gyms , to making it a favorable career for Young Saudi women. She also has a soft spot for technology and its impact in the gym industry, from tracking to virtual reality to integrated software. With a background in Finance and Economics, She has been the driving force for KORE & KORE Academy’s Success and continuous growth, making them leaders in Saudi Arabia’s Female Fitness industry.
              `,
              ar: `
              Sara has spent the last 7 years learning everything there is to know about the Health and Fitness industry from researching fitness trends, women’s lifestyle & fitness needs,  equipping gyms , to making it a favorable career for Young Saudi women. She also has a soft spot for technology and its impact in the gym industry, from tracking to virtual reality to integrated software. With a background in Finance and Economics, She has been the driving force for KORE & KORE Academy’s Success and continuous growth, making them leaders in Saudi Arabia’s Female Fitness industry.
              `
            },
            website: "https://kore.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/company/koreksa/about/"
              }
            ]
          },
          {
            avatar: "/images/workshops/avatars/riham-sara.jpg",
            companyLogo: "/images/workshops/companies/kore.png",
            name: {
              en: "Riham AlAwaji",
              ar: "Riham AlAwaji"
            },
            company: {
              en: "Kore",
              ar: "Kore"
            },
            title: {
              en: "Co-Founder & Head of Strategy & Marketing",
              ar: "Co-Founder & Head of Strategy & Marketing"
            },
            bio: {
              en: `
            A self-described Fitness Enthusiast, Riham is an Architect who is committed to creating sustainable functional and entertaining fitness experiences. She has spent the last 7 years creating welcoming and engaging workout spaces to change social norms and attitudes towards physical activity and make being active the easy choice. Having spent 10 years as a Hospital Architect in The Saudi National Guard she changed careers as the Co-Founder and Head of Strategy & Marketing at Kore, KORE was founded on the idea that fitness should be fun, personalized and results driven. Riham has developed a unique perspective when it comes to capturing the story behind her work. Influenced by the impact of design in experiences and sustainable wellbeing, she aspires to create active environments that are fun, free and for everyone in the next stage of her career.
            `,
              ar: `
            A self-described Fitness Enthusiast, Riham is an Architect who is committed to creating sustainable functional and entertaining fitness experiences. She has spent the last 7 years creating welcoming and engaging workout spaces to change social norms and attitudes towards physical activity and make being active the easy choice. Having spent 10 years as a Hospital Architect in The Saudi National Guard she changed careers as the Co-Founder and Head of Strategy & Marketing at Kore, KORE was founded on the idea that fitness should be fun, personalized and results driven. Riham has developed a unique perspective when it comes to capturing the story behind her work. Influenced by the impact of design in experiences and sustainable wellbeing, she aspires to create active environments that are fun, free and for everyone in the next stage of her career.
            `
            },
            website: "https://kore.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/rihamalawaji/"
              }
            ]
          }
        ]
      },
      // Workshop 12
      {
        imgSrc: "/images/workshops/build-it-with-passion.jpg",
        title: {
          en: "Build it with Passion",
          ar: "Build it with Passion"
        },
        description: {
          en: `
          •	Designing a visitor centric experience 
          •	Enhance your entertainment project 
          •	Create memories for your visitors 
          •	Creating a creative culture with your team
          `,
          ar: `
          •	Designing a visitor centric experience 
          •	Enhance your entertainment project 
          •	Create memories for your visitors 
          •	Creating a creative culture with your team
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "Joy Kitchen"
        },
        date: {
          en: "Oct. 14th",
          ar: "Oct. 14th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/reem.jfif",
            companyLogo: "/images/workshops/companies/passion.png",
            name: {
              en: "Reem AlMutairi",
              ar: "Reem AlMutairi"
            },
            company: {
              en: "Passion Events",
              ar: "Passion Events"
            },
            title: {
              en: "General Manager",
              ar: "General Manager"
            },
            bio: {
              en: `
            Ambitious Saudi woman who puts her creativity into creating unique entertainment experiences. With more than 4 years of experience, she created a culture of innovation that enabled her team to deliver several big events. Reem worked on several projects with GEA since it was established. 

            She was part of creating the first entertainment destination in Riyadh, Granada Square, visited by more than 600,000 people in the past 6 months. Reem is passionate about developing the 
            entertainment sector in Saudi to be the best in the world. 
            `,
              ar: `
            Ambitious Saudi woman who puts her creativity into creating unique entertainment experiences. With more than 4 years of experience, she created a culture of innovation that enabled her team to deliver several big events. Reem worked on several projects with GEA since it was established. 

            She was part of creating the first entertainment destination in Riyadh, Granada Square, visited by more than 600,000 people in the past 6 months. Reem is passionate about developing the 
            entertainment sector in Saudi to be the best in the world. 
            `
            },
            website: "https://passion.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/reem-almutairi-60885a102/"
              }
            ]
          }
        ]
      },
      // Workshop 13
      {
        imgSrc: "/images/workshops/how-silicon-valley.jpg",
        title: {
          en:
            "How Silicon Valley Entrepreneurs decide to build or invest in a business - a practical framework.",
          ar:
            "How Silicon Valley Entrepreneurs decide to build or invest in a business - a practical framework."
        },
        description: {
          en: `
          You’ll learn how to think like a Silicon Valley entrepreneur on how to work out if you should launch your business idea and learn a vision building and validation framework that you can apply to any business you’re looking to build. 
          `,
          ar: `
          You’ll learn how to think like a Silicon Valley entrepreneur on how to work out if you should launch your business idea and learn a vision building and validation framework that you can apply to any business you’re looking to build. 
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "Joy Kitchen"
        },
        date: {
          en: "Oct. 13th",
          ar: "Oct. 13th"
        },
        time: {
          en: "01:00 PM - 03:00 PM",
          ar: "01:00 PM - 03:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/saalim.jfif",
            companyLogo: "/images/workshops/companies/500startups.jfif",
            name: {
              en: "Saalim Chowdhury",
              ar: "Saalim Chowdhury"
            },
            company: {
              en: "500 Startups",
              ar: "500 Startups"
            },
            title: {
              en: "Partner",
              ar: "Partner"
            },
            bio: {
              en: `
              Saalim Chowdhury is a British serial entrepreneur who’s driven over $200m in exit values in the US and Europe, notably ScanSafe to Cisco and Skillbridge to Toptal. He has also held senior corporate leadership roles at News Corporation. His career started at the Boston Consulting Group,  and he was educated at Oxford and Cambridge Universities.
            `,
              ar: `
              Saalim Chowdhury is a British serial entrepreneur who’s driven over $200m in exit values in the US and Europe, notably ScanSafe to Cisco and Skillbridge to Toptal. He has also held senior corporate leadership roles at News Corporation. His career started at the Boston Consulting Group,  and he was educated at Oxford and Cambridge Universities.
              `
            },
            website: "https://500.co/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://uk.linkedin.com/in/saalimchowdhury"
              }
            ]
          }
        ]
      }
    ]
  },
  getters: {
    lecturers(state) {
      let lecturersArray = [];
      for (let i = 1; i < state.workshopsArray.length; i++) {
        for (let lecturer of state.workshopsArray[i].speakers) {
          lecturersArray.push({
            avatar: lecturer.avatar,
            name: lecturer.name,
            title: lecturer.title,
            workshopIndex: i
          });
        }
      }
      return lecturersArray;
    }
  },
  mutations: {},
  actions: {}
});
