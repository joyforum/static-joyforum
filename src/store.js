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
          ar: "دليل انطلاق القطاع الترفيهي"
        },
        description: {
          en: `
          Learning an overview of the Industry and the basic steps to create a (UEP) Unique Entertainment Proposition resulting in a promising business model for any Market.
          `,
          ar: `
          أخذ نظرة عامة على الصناعة والخطوات الأساسية لإنشاء اقتراح ترفيهي فريد من نوعه ينتج عنه نموذج أعمال واعد لأي سوق
          `
        },
        location: {
          en: "Joy Factory",
          ar: "مصنع جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
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
              ar: "مصطفى شيره"
            },
            company: {
              en: "Syrup Entertainment Advisory",
              ar: "شركة سيرب للاستشارات الترفيهية"
            },
            title: {
              en: "CEO",
              ar: "الرئيس التنفيذي"
            },
            bio: {
              en: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.
            <br>
            <br>
            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            <br>
            <br>
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `,
              ar: `
              رجل أعمال سعودي ، خبير ترفيه ومؤسس لعدد من المؤسسات في مجالات التسويق والإنتاج ، ويشغل حاليًا منصب الرئيس التنفيذي لشركة سيرب للاستشارات الترفيهية  التي تقدم خدماتها لمجموعة متنوعة من العملاء من الحكومة والشركات الصغيرة والمتوسطة والأفراد الموهوبين. عضو في المجلس الاستشاري لبرنامج ريادة الأعمال التابع لوزارة الثقافة.
              <br>
              <br>
              بالإضافة إلى ذلك ، يقدم مصطفى مجموعة من الخبرات الداخلية والاستشارية الشاملة التي توفر عددًا من برامج التدريب والتوجيه وبرامج لرجال الأعمال والشركات الناشئة في مجالات الفنون والتسويق والتقنيات الترفيهيه.
              <br>
              <br>
              حصل مصطفى على درجة الماجستير في إدارة الأعمال التنفيذية من كلية هولت الدولية للأعمال في عام 2015 ، حيث تناوب على 5 فروع عالمية (دبي ، لندن ، شنغهاي ، بوسطن وسان فرانسيسكو).
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
          ar: "التسويق الترفيهي"
        },
        description: {
          en:
            "Learning the basics of entertainment Marketing and understanding a number of Marketing concepts and mindsets.",
          ar: "تعلم أساسيات الترفيه والتسويق وفهم عدد من مفاهيم التسويق والعقليات."
        },
        location: {
          en: "Joy Factory",
          ar: "مصنع جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
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
              ar: "مصطفى شيره"
            },
            company: {
              en: "Syrup Entertainment Advisory",
              ar: "شركة سيرب للاستشارات الترفيهية"
            },
            title: {
              en: "CEO",
              ar: "الرئيس التنفيذي"
            },
            bio: {
              en: `
            A Saudi Entrepreneur, Entertainment expert and founder of number of establishments in the Marketing, and production fields, and currently the CEO of Syrup Entertainment Advisory which caters to a variety of clientele from Gov, Corporates, SMEs and Talented Individuals, and a member of the advisory board of the Ministry of Culture’s Entrepreneurship Program.
            <br>
            <br>
            In addition, Mostafa brings a combination of extensive in-house and advisory experience providing a number of training, mentoring & couching & accelerating programs for entrepreneurs and start-ups in the fields of Arts, Marketing &
            Entertainment Technologies.
            <br>
            <br>
            Mostafa received his Executive-MBA from Hult International Business School in 2015, rotating him to 5 global campuses (Dubai, London, Shanghai, Boston & San
            Francisco).
            `,
              ar: `
              رجل أعمال سعودي ، خبير ترفيه ومؤسس لعدد من المؤسسات في مجالات التسويق والإنتاج ، ويشغل حاليًا منصب الرئيس التنفيذي لشركة سيرب للاستشارات الترفيهية  التي تقدم خدماتها لمجموعة متنوعة من العملاء من الحكومة والشركات الصغيرة والمتوسطة والأفراد الموهوبين. عضو في المجلس الاستشاري لبرنامج ريادة الأعمال التابع لوزارة الثقافة.
              <br>
              <br>
              بالإضافة إلى ذلك ، يقدم مصطفى مجموعة من الخبرات الداخلية والاستشارية الشاملة التي توفر عددًا من برامج التدريب والتوجيه وبرامج لرجال الأعمال والشركات الناشئة في مجالات الفنون والتسويق والتقنيات الترفيهيه.
              <br>
              <br>
              حصل مصطفى على درجة الماجستير في إدارة الأعمال التنفيذية من كلية هولت الدولية للأعمال في عام 2015 ، حيث تناوب على 5 فروع عالمية (دبي ، لندن ، شنغهاي ، بوسطن وسان فرانسيسكو).
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
              ar: "نور طاهر"
            },
            company: {
              en: "",
              ar: ""
            },
            title: {
              en: "Head of Digital & Content at WKC",
              ar: "مديرة قسم الرقمنة والمحتوى"
            },
            bio: {
              en: `
              With a background deeply seeded in user experience and behavioral psychology, Noor has managed to align science and innovation to humanize the interaction between the end user and the screen. Whether it’s keeping her ears to the street, being in sync with extensive analytics or A/B testing strategies for optimization, her knowledge provides a holistic approach for meaningful, real-time connections online. 
              <br>
              <br>
              Deeply passionate about and inspired by linguistics and writing, Noor’s early experience was defining online journeys through words and storytelling – bringing brands to life through strategy, persona and PR.
              <br>
              <br>
              Raised in Saudi, bred in New York, Noor has played the mediator and broker for cross cultural experiences and deals through celebrities, brands and businesses. Meditating cultural differences and aligning the goals of the project with every party involved - between the States and the Middle East. Developing and curating transformative digital experiences for CocaCola, HSBC, Giorgio Armani and, the Louvre Abu Dhabi has kept Noor’s sharpening her pencil with new boundaries and standards of communication.
            `,
              ar: ``
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
        imgSrc: "/images/workshops/content-creation.jpg",
        title: {
          en: "Content Creation",
          ar: "إنشاء/ تطوير  المحتوى"
        },
        description: {
          en: `
          Are you involved in the entertainment industry as a content creator? A Filmmaker? A visual artist? Or a strategist? This workshop will professionally shift your perspective on the whole process of visual communication as it reinforces solid fundamentals of the field, with innovative techniques that make you stand out firmly in the centre of the world of entertainment.
          Expand your creativity & develop unmatched skills that drive you to excel in this field of art & business.
          `,
          ar: `
          هل تشارك في صناعة الترفيه بصفتك منشئ المحتوى؟ صانع أفلام؟ فنان بصري؟ أو استراتيجي؟ ستحول ورشة العمل هذه وجهة نظرك بشكل احترافي إلى عملية الاتصال المرئي بأكملها لأنها تعزز الأسس الصلبة في هذا المجال ، من خلال التقنيات المبتكرة التي تجعلك تبرز بقوة في مركز عالم الترفيه.قم بتوسيع إبداعك وتطوير مهارات لا تضاهى تدفعك للتفوق في هذا المجال من الأعمال والفن.
          `
        },
        location: {
          en: "Joy Lab",
          ar: "معمل جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
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
              ar: "أنثوني تشاباريخ"
            },
            company: {
              en: "Chabarekh S.A.R.L",
              ar: "Chabarekh S.A.R.L"
            },
            title: {
              en: "Chief Business Development",
              ar: "رئيس تطوير الأعمال"
            },
            bio: {
              en: `
            Ph.D. in Visual Arts, Film Studies
            <br>
            Academic Developer for Cinematic Arts program, AUB
            <br>
            Professional Continuing Education program ACCET accredited, Washington DC. Author of “Cenesthesia”, the Science behind the Art of Film CACM, American Anti-Corruption Institute, Arizona Conferences, Workshops & Events Director for the Lebanese Economic & Social Council
            <br>
            Developer of Augmented Reality & Hologram fusion systems for Touch-Lab telecommunication
            `,
              ar: `
              شهادة الدكتوراه في الفنون البصرية ، دراسات السينما.
              <br>
              المطور الأكاديمي لبرنامج الفنون السينمائية ، الجامعة الأميركية في بيروت.
              <br>
              برنامج التعليم المستمر المهني ACCET معتمد ، واشنطن العاصمة. مؤلف كتاب "Cenesthesia" ، العلم وراء فن السينما ، CACM ، المعهد الأمريكي لمكافحة الفساد ، مؤتمرات أريزونا ، ورش عمل وفعاليات للمجلس الاقتصادي والاجتماعي اللبناني
              <br>
              مطور لأنظمة دمج الواقع المعزز وصورة الهولوغرام لمعامل الاتصالات.
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
      // Workshop 4
      {
        imgSrc: "/images/workshops/investing-in-entertainment.jpg",
        title: {
          en: "Investing in the Entertainment Industry (local films)",
          ar: "الاستثمار في صناعة الترفيه (افلام محلية)"
        },
        description: {
          en: `
          1-The best business approach to finance a movie (relation between studio and investor).
          <br>
          2- Local market size ( current and future )
          <br>
          3- Sources of revenue and revenue share models in local market.
          <br>
          4- Sustainability and growth.
          <br>
          5- An eye for box office content (is it an award winning movie or a Blockbuster movie?)
          `,
          ar: `
          1 - أفضل نهج عمل لتمويل فيلم (العلاقة بين الاستوديو والمستثمر).
          <br>
          2 - حجم السوق المحلية (الحالية والمستقبلية)
          <br>
          3 - مصادر الإيرادات ونماذج حصة الإيرادات في السوق المحلية.
          <br>
          4 - الاستدامة والنمو.
          <br>
          5 - تعيين محتوى شباك التذاكر (هل هو فيلم حائز على جائزة إم فيلم شهير؟)
                    `
        },
        location: {
          en: "Joy Factory",
          ar: "مصنع جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
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
              ar: "عبدالعزيز المزيني"
            },
            company: {
              en: "Myrkott",
              ar: "Myrkott"
            },
            title: {
              en: "CEO & Co-Founder",
              ar: "الرئيس التنفيذي و شريك مؤسس"
            },
            bio: {
              en: `
            Myrkott Animation Studio is a Saudi company, founded in Riyadh in 2014, which is specialized in the creative industry and animation production.
            `,
              ar: `
              عبد العزيز المزيني هو الرئيس التنفيذي وشريك مؤسس شركة ميركوت للرسوم المتحركة. ستوديو ميركوت للرسوم المتحركة هو استوديو سعودي للرسوم المتحركة تم إنشاؤه في الرياض عام 2014 ، وهو متخصص في الصناعة الإبداعية وإنتاج الرسوم المتحركة. عبد العزيز المزيني هو أيضًا منتج ورجل أعمال في قطاع الإعلام وقطاع الإنتاج. أنتجت ميركوت سلسلة من الرسوم الكاريكاتورية التي تحظى بشعبية كبيرة على خدمات البث والتلفزيون عبر الإنترنت. ولأول مرة ، تنخرط ميركوت في المشهد السينمائي من خلال إنتاج أول فيلم روائي متحرك يصل إلى المسارح بحلول يناير 2020.            `
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
      // Workshop 5
      {
        imgSrc: "/images/workshops/crowd-management.jpg",
        title: {
          en: "Crowd Management and Health & Safety",
          ar: "إدارة الحشود والصحه والسلامة"
        },
        description: {
          en: `
          - Protection of Brand-Saudi as it seeks to position itself for domestic, regional and international markets.
          <br>
          - Managing risk and the importance of safe and sustainable event delivery.
          `,
          ar: ``
        },
        location: {
          en: "Joy Academy",
          ar: "اكاديمية جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
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
              ar: "جيم دقبي"
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
              أمضى جيم ديقبي العقود الثلاثة الماضية في إنتاج فعاليات مباشره في جميع أنحاء العالم لبعض المواهب الأكثر شهرة في العالم. من خلال العمل مع أمثال لينكن بارك وانريكيه قلاسيس و ميغان ترينر و باكستريت بويز وغيرهم ، فإن قدرة جيم ديقبي على تلبية وإدارة توقعات العميل والفنان مصممة بشكل جيد.
              <br>
              <br>
              تعتبر تقنيته الإدارية وخبرته في بناء الفريق من الأدوات الأساسية للتقديم السريع للمشاريع المعقدة ، ويساعد أسلوبه في الشمول في خلق بيئة عمل إيجابية وممتعة لجميع الشركاء. يعد فهم جيم العميق لأحدث الموارد اللازمة لتطوير مثل هذه الفعاليات المباشرة على نطاق واسع وعلاقاته مع العديد من الوكالات التي تساعد في تقديمها مورداً أساسياً عندما يكون في دور الإشراف على نطاق المشروع.
              <br>
              <br>
              قام جيم بتوجيه النصح وساعد في تطوير قائمة كبيرة ببعض الأفراد الأكثر موهبة في صناعة الفعاليات المباشرة ، والكثير منهم جزء من الفريق.
              <br>
              <br>
              وهو مؤسس ورئيس تحالف سلامة الأحداث الغير ربحية (مجموعة المناصرة العالمية للسلامة) في الفعاليات المباشرة. و عضو في مجلس إدارة مؤسسة (خلف الكواليس) ، بالإضافة إلى مجموعة منتديات المهرجانات ، وهو متحدث رئيسي مطلوب في الأمور المتعلقة بسلامة الحدث ، وإنتاج الحدث كتجارة والحالة الإنسانية الصعبة غالبًا في الفعاليات المباشرة.
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
              en: "Tim Roberts",
              ar: "تيم روبيرتس"
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
              ar: ``
            },
            website: "",
            socials: []
          }
        ]
      },
      // Workshop 6
      {
        imgSrc: "/images/workshops/theme-park.jpg",
        title: {
          en: "Theme Park Development",
          ar: "تطوير المنتزهات"
        },
        description: {
          en: "",
          ar: ""
        },
        location: {
          en: "Joy Factory",
          ar: "مصنع جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/don.jfif",
            companyLogo: "",
            name: {
              en: "Don Patts",
              ar: "دون باتس"
            },
            company: {
              en: "Qiddiya",
              ar: "القدية"
            },
            title: {
              en: "President of Parks and Attractions",
              ar: "رئيس الحدائق والجذب السياحي"
            },
            bio: {
              en: `
              My career has centered on destination resort and entertainment industries where I've held progressively demanding and diverse operating and change leadership positions in theme park, destination resort, ski area and food and beverage businesses including Senior Vice President, Universal Studios Florida - Operations, Vice President - General Manager Orange Lake Resorts, and Vice President Resort, Park and Entertainment Business Operations for Riverside Investment Group. Have created and led broad scale initiatives in organizational design, change leadership, experience and attraction development that resulted in record levels of guest and employee satisfaction.
            `,
              ar: `
              دون باتس: تركزت مسيرتي المهنية على المنتجعات السياحية والصناعات الترفيهية حيث شغلت العديد من المناصب القيادية في مجال التشغيل و تغيير مناصب قيادية في العديد من مدن الملاهي, وجه المنتجع ومنطقة التزلج وشركات الأغذية والمشروبات بما في ذلك نائب الرئيس الأول في استوديوهات يونيفيرسال فلوريدا ، نائب الرئيس - مدير عام منتجعات اورانج ليك، ونائب الرئيس لعمليات المنتجعات والتسلية والترفيه لمجموعة (ريفير سايد) للاستثمار. ابتكر وقاد مبادرات واسعة النطاق في التصميم التنظيمي ، وتغيير القيادة ، تطوير الخبرة وجذب العملاء مما أدى إلى مستويات قياسية من رضا النزلاء والموظفين.
              `
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
            companyLogo: "",
            name: {
              en: "Matthew Priddy",
              ar: "ماثيو بريدي"
            },
            company: {
              en: "Qiddiya",
              ar: "القدية"
            },
            title: {
              en: "Executive Director of Technical Services Development",
              ar: "المدير التنفيذي لتطوير الخدمات التقنية"
            },
            bio: {
              en: `
              Matthew has made a successful career in the prototype, project development and real estate fields. In his position as Sr. V.P. Of Worldwide Production for Walt Disney Imagineering, Matthew was responsible for design, engineering, manufacturing and overall project management for theme parks, resorts and technical development over a 20 yr. period. Yearning to exercise his entrepreneurial skills, Matthew created his own business and delivered numerous high end retail projects as well as products for sale through Wal Mart and Pet's Mart.
              `,
              ar: `
              حقق ماثيو بريدي مهنة ناجحة في النموذج المبدئي وتطوير المشاريع والمجالات العقارية. في منصبه كـ نائب الرئيس الأول لدى شركه والت ديزني ، كان ماثيو مسؤولاً عن التصميم والهندسة والتصنيع وإدارة المشاريع الشاملة للمنتزهات الترفيهية والمنتجعات والتطوير التقني على مدار 20 عامًا. يتوق إلى ممارسة مهاراته في تنظيم المشاريع ، لذلك , أنشأ ماثيو أعماله التجارية الخاصة وقام بتسليم العديد من مشاريع البيع بالتجزئة الراقية بالإضافة إلى منتجات للبيع من خلال وال مارت و بيتس مارت.
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
      // Workshop 7
      {
        imgSrc: "/images/workshops/edutainment.jpg",
        title: {
          en:
            "Immersive 'Edutainment' - How AR/VR Technology Turbocharges Learning through Entertainment (and Joy!)'",
          ar:
            "التعليم الترفيهي كيفية عمل تكنولوجيا الواقع المعزز والواقع الافتراضي و التعلم من خلال الترفيه و(الفرح)"
        },
        description: {
          en: `
          Consider how new immersive visualisation technologies like VR & AR are creating a brand new interface between entertainment and education...and what this means for the future of learning.
          <br>
          <br>
          Explore how to use immersive visualisation and play-based learning to turbocharge the understanding and retention of information, and the enormous value that holds for both entertainment professionals & educators.
          `,
          ar: `
          كيفية قيام تقنيات (التصور التكنولوجي) الجديدة ، مثل الواقع المعزز والواقع الافتراضي ، بإنشاء واجهة جديدة بين الترفيه والتعليم ... وماذا يعني ذلك بالنسبة لمستقبل التعلم.
          <br>
          <br>
          كيفية استخدام تقنية ( التصور ) والتعلم القائم على اللعب لتعزيز فهم المعلومات والاحتفاظ بها ، والقيمة الهائلة التي يحملها كل من محترفي الترفيه والمعلمين.
          `
        },
        location: {
          en: "Joy Lab",
          ar: "معمل جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
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
              ar: "مارتن مكدونيل"
            },
            company: {
              en: "Sublime",
              ar: "Sublime"
            },
            title: {
              en: "Chairman & Founder",
              ar: "رئيس ومؤسس"
            },
            bio: {
              en: `
            Chairman and Founder of the Soluis Group and Sublime Since 2000 Martin has built a group of successful businesses that deliver best in class 3D visualisation and interactive digital presentation. His vision to connect the latest digital technology platforms to the needs of different market sectors has led his businesses to be amongst the earliest innovators in bringing the benefits of augmented and virtual reality to the industries including design, construction, manufacturing and healthcare. This drive has led his business Sublime to recently win one of only three inaugural Higgs EDGE awards and Soluis to win Innovate UK’s IC Tomorrow competition to develop augmented reality (AR) software, utilised at Crossrail sites in London. Martin is now pioneering, and a recognised thought leader, in the development of shared immersive solutions for business and advanced AR assisted tools that will transform the world of work.
            `,
              ar: `
              رئيس ومؤسس مجموعة سوليس اند سبلايم منذ عام 2000 ، قام مارتن ببناء مجموعة من الشركات الناجحة التي تقدم أفضل تصور ثلاثي الأبعاد والعرض الرقمي التفاعلي. أدت رؤيته لربط أحدث منصات التكنولوجيا الرقمية باحتياجات قطاعات السوق المختلفة إلى جعل أعماله التجارية من بين أوائل المبتكرين في جلب مزايا الواقع المعزز والواقع الافتراضي إلى الصناعات بما في ذلك التصميم والبناء والتصنيع والرعاية الصحية. قادت هذه الحملة شركته سبلايم مؤخراً إلى الفوز بواحدة من ثلاث جوائز Higgs EDGE الافتتاحية و سوليس للفوز بمسابقة IC Tomorrow في المملكة المتحدة لتطوير برامج الواقع المعزز (AR) المستخدمة في مواقع (كروس رايل) في لندن. يعد مارتن الان رائد فكري معترف به في تطوير حلول غامرة مشتركة للأعمال وأدوات مساعدة متقدمة للواقع المعزز التي ستحول عالم العمل.
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
      // Workshop 8
      {
        imgSrc: "/images/workshops/entertainment-industry.jpg",
        title: {
          en: "Entertainment Industry as an important pillar in Quality of Life",
          ar: "صناعة الترفيه ركيزه مهمه في جودة الحياة"
        },
        description: {
          en: `
          - Understanding the Quality of Life Program and its objectives.
          <br>
          - Recognizing entertainment as a means of creating better life.
          <br>
          - Knowing the impact of consumers’ behaviour on the entertainment sector.
          <br>
          - Understanding the role of social responsibility in the entertainment industry.
          <br>
          - Exploring business opportunities for entrepreneurs and investors.
            `,
          ar: `
          - فهم برنامج جودة الحياة وأهدافه.
          <br>
          - تمييز الترفيه كوسيلة لخلق حياة أفضل.
          <br>
          - معرفة تأثير سلوك المستهلكين على قطاع الترفيه.
          <br>
          - فهم دور المسؤولية الاجتماعية في صناعة الترفيه.
          <br>
          - استكشاف الفرص التجارية لرجال الأعمال والمستثمرين.
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "مطبخ جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/ibraheem.png",
            companyLogo: "/images/workshops/companies/qol.jpg",
            name: {
              en: "Dr. Ibraheem Sheerah",
              ar: "الدكتور. ابراهيم شيره"
            },
            company: {
              en: "Quality of Life Program",
              ar: "برنامج جودة الحياة"
            },
            title: {
              en: "Chief Business Development",
              ar: "رئيس تطوير الأعمال"
            },
            bio: {
              en: `
              A strategic and tactical partner to the organization’s personnel, aggressive in both setting and accomplishing goals, delivering consistent, measurable results, and a motivating force for staff development. Capable of adapting and/or implementing improved operational requirements based on business drivers and innovative continuous improvement solutions. Capable of ensuring customer satisfaction and strategy objectives fulfilment.
              `,
              ar: `
              شريك استراتيجي وتكتيكي لشؤون موظفي المنظمة ، عدواني في تحديد الأهداف وتحقيقها ، وتقديم نتائج ثابتة وقابلة للقياس ، وقوة دافعة لتطوير الموظفين. القدرة على تكييف و / أو تنفيذ المتطلبات التشغيلية المحسنة على أساس برامج التشغيل وحلول التحسين المستمر المبتكرة. قادرة على ضمان رضا العملاء وتحقيق أهداف الاستراتيجية.
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
      // Workshop 9
      {
        imgSrc: "/images/workshops/how-to.jpg",
        title: {
          en: "How to Start and Grow Your Event Organically",
          ar: "كيف تبدأ و تنمو حدثك بانتظام"
        },
        description: {
          en: `
            - Techniques to grow your event organically
            <br>
            - How to start your event planning business
            `,
          ar: ``
        },
        location: {
          en: "Joy Lab",
          ar: "معمل جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
        },
        time: {
          en: "04:00 PM - 06:00 PM",
          ar: "04:00 PM - 06:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/firoiu.jpg",
            companyLogo: "/images/workshops/companies/coco.png",
            name: {
              en: "Firoiu Dan Nicolae",
              ar: "فيرويو دان نيكوليه"
            },
            company: {
              en: "COCO Agency",
              ar: "وكالة كوكو"
            },
            title: {
              en: "Co-Founder",
              ar: "شريك مؤسس"
            },
            bio: {
              en: `
            Extensive experience in all aspects of Communication-, Marketing-, Accounting Management, Event Coordinating and Budget Coordination. Take charge professional with the ability to manage administration and logistics in a busy special events environment. Passionate for marketing, brand development and event coordination while consistently providing outstanding customer service. Enthusiastic professional, successfully building profitable relationships with new and existing clients.
            <br>
            <br>
            Active 18 years in the event sector. Promoting events all over Europe in France, Belgium, UK, Germany, Holland, Romania, Bulgaria, Ukraine - Poland. The last 8 years all the events and festivals that have been coordinated by Sir Firoiu Dan-Nicoalae reach between 5000 and with a record of 1.2 million visitors. His events have been nominated five times for the European Festival Awards - receiving the award of the best event in Bulgaria for 2013 and more than 20 awards in Ukraine - Bulgaria and Saudi Arabia in the last two years. Sir Firoiu Dan-Nicolae become a senior event manager in begin of 2012. Owner of 4 event companies in Europe. His skills gather a big variation of the event production, Marketing Strategy, Brand Development, Consultant Events, Brand Development, Project, Production Event Management, Logistic Event Manager, & Promotion, Social Media Expertise.
            `,
              ar: `
              خبرة واسعة في جميع جوانب الاتصالات ، التسويق ، إدارة المحاسبة ، تنسيق الأحداث وتنسيق الموازنة. تولي المسؤولية المهنية مع القدرة على إدارة الإدارة والخدمات اللوجستية في بيئة المناسبات الخاصة المزدحمة. شغوف للتسويق وتطوير العلامة التجارية وتنسيق الأحداث مع توفير خدمة العملاء المتميزة باستمرار وبناء علاقات مربحة بنجاح مع العملاء الحاليين والجدد.
              <br>
              <br>
              عمل 18 سنة في قطاع المهرجانات. روج هذه المهرجانات في جميع أنحاء أوروبا في فرنسا وبلجيكا والمملكة المتحدة وألمانيا وهولندا ورومانيا وبلغاريا وأوكرانيا - بولندا. خلال الـ 8 سنوات الماضية ، تصل جميع الفعاليات والمهرجانات التي قام بتنسيقها السير فيرويو دان نيكوالاي ما بين 5000 و حوالي 1.2 مليون زائر. تم ترشيح مناسباته خمس مرات لجوائز المهرجانات الأوروبية - حصل على جائزة أفضل فعالية في بلغاريا عام 2013 وأكثر من 20 جائزة في أوكرانيا - بلغاريا والمملكة العربية السعودية في العامين الماضيين. أصبح السير فيرويو دان نيكوالاي كبير مديري الفعاليات في بداية عام 2012. مالك 4 شركات مهرجانات في أوروبا. تجمع مهاراته تنوعًا كبيرًا في إنتاج الحدث ، استراتيجية التسويق ، تطوير العلامة التجارية ، أحداث المستشار ، تطوير العلامة التجارية ، مشاريع ، إدارة أحداث الإنتاج ، مدير الفعاليات اللوجستية ، الترويج وخبرة في وسائل التواصل الاجتماعي.
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
          ar: "تطبيق التصميم الفكري"
        },
        description: {
          en: `
          - Turning objectives into outcomes
          <br>
          - Adoption and Integration of design thinking
          <br>
          - The tools and methods
          `,
          ar: `
          - تحويل الأهداف إلى نتائج 
          <br>
          - إعتماد و تكامل التصميم الفكري
          <br>
          - الأدوات و الأساليب
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "مطبخ جوي"
        },
        date: {
          en: "Oct. 13th",
          ar: "13 أكتوبر"
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
              ar: "جوزيف زيناس"
            },
            company: {
              en: "ThinkWell Group",
              ar: "مجموعة ثينك ويل "
            },
            title: {
              en: "CEO",
              ar: "المدير التنفيذي"
            },
            bio: {
              en: `
            Responsible for leading the strategic direction of the company as well as managing new growth opportunities, corporate strategies, alliances, and intellectual property partnerships.
            `,
              ar: `
              مسؤول عن قيادة الإتجاه الإستراتيجي للشركة, وكذلك إدارة فرص النمو الجديدة, و إستراتيجيات الشركة و التحالفات و شراكات الملكية الفكرية 
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
          ar: "الفرح في مجتمع نشط"
        },
        description: {
          en: `
          Entertainment in fitness is usually thought of in terms of audio and visual, especially in commercial fitness. However, entertainment and physical activity go beyond the walls of commercial gyms. To engage the society in active experiences that are entertaining is much simpler than our technological advancements and Physical Spaces.
          <br>
          -    Taking it back to Basics.
          <br>
          -    How to create an active society
          <br>
          -    How to encourage Corporate Social Responsibility to take part in these activities.    
          <br>
          -    Vision 2030 and the trend of health and wellness.
          <br>
          -    Fitness Tourism.
          <br>
          -    Fitness as entertainment and for everyone
          <br>
          -    Urban planning and designs roles
          <br>
          -    Creating active experiences that are fun, free & for everyone.
          `,
          ar: `
          عادة ما يتم عند سماع الترفيه في اللياقة البدنية التفكير في الصوت والمرئيات فقط ، خاصة في اللياقة البدنية التجارية. ومع ذلك ، فإن الترفيه والنشاط البدني يتجاوزان جدران صالات الألعاب الرياضية. إن إشراك المجتمع في تجارب نشطة ومسلية أبسط بكثير من التقدم التكنولوجي والمساحات المادية.
          `
        },
        location: {
          en: "Joy Lab",
          ar: "معمل جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
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
              en: "Riham AlAwaji",
              ar: "رهام العواجي"
            },
            company: {
              en: "Kore",
              ar: "Kore"
            },
            title: {
              en: "Co-Founder & Head of Strategy & Marketing",
              ar: "شريك و رئيس الخطة الإستراتيجية و التسويق"
            },
            bio: {
              en: `
            A self-described Fitness Enthusiast, Riham is an Architect who is committed to creating sustainable functional and entertaining fitness experiences. She has spent the last 7 years creating welcoming and engaging workout spaces to change social norms and attitudes towards physical activity and make being active the easy choice. Having spent 10 years as a Hospital Architect in The Saudi National Guard she changed careers as the Co-Founder and Head of Strategy & Marketing at Kore, KORE was founded on the idea that fitness should be fun, personalized and results driven. Riham has developed a unique perspective when it comes to capturing the story behind her work. Influenced by the impact of design in experiences and sustainable wellbeing, she aspires to create active environments that are fun, free and for everyone in the next stage of her career.
            `,
              ar: `
              ريهام هي أحد المتحمسين للياقة البدنية ، وهي مهندسة معمارية ملتزمة بإيجاد تجارب لياقة بدنية ومسلية ومستدامة. لقد أمضت السنوات السبع الماضية في إنشاء أماكن تجريب جذابة ومغرية لتغيير الأعراف والمواقف الاجتماعية تجاه النشاط البدني وان يكون الانسان نشط هو الخيار السهل. بعد أن أمضت 10 سنوات كمهندسة مستشفى في الحرس الوطني السعودي ، غيرت حياتها المهنية كمؤسسة مشاركة ورئيسة قسم الإستراتيجية والتسويق في نادي كور، وقد تأسست كور على فكرة أن اللياقة البدنية يجب أن تكون ممتعة وشخصية ومدفوعة بالنتائج. طورت ريهام وجهة نظر فريدة من نوعها عندما يتعلق الأمر بالتقاط القصة وراء عملها. متأثرة بتأثير التصميم في التجارب والرفاهية المستدامة ، تتطلع إلى إنشاء بيئات نشطة ,ممتعة ومجانية للجميع في المرحلة التالية من حياتها المهنية.
              `
            },
            website: "https://kore.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/rihamalawaji/"
              }
            ]
          },
          {
            avatar: "/images/workshops/avatars/riham-sara.jpg",
            companyLogo: "/images/workshops/companies/kore.png",
            name: {
              en: "Sara AlModaimigh",
              ar: "سارة المديميغ"
            },
            company: {
              en: "Kore",
              ar: "Kore"
            },
            title: {
              en: "Co-Founder & Managing Director",
              ar: "شريك و رئيس اداري"
            },
            bio: {
              en: `
              Sara has spent the last 7 years learning everything there is to know about the Health and Fitness industry from researching fitness trends, women’s lifestyle & fitness needs,  equipping gyms , to making it a favorable career for Young Saudi women. She also has a soft spot for technology and its impact in the gym industry, from tracking to virtual reality to integrated software. With a background in Finance and Economics, She has been the driving force for KORE & KORE Academy’s Success and continuous growth, making them leaders in Saudi Arabia’s Female Fitness industry.
              `,
              ar: ``
            },
            website: "https://kore.sa/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/company/koreksa/about/"
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
          ar: "إصنعه بشغف"
        },
        description: {
          en: `
          •	Designing a visitor centric experience
          <br>
          •	Enhance your entertainment project 
          <br>
          •	Create memories for your visitors 
          <br>
          •	Creating a creative culture with your team
          `,
          ar: `
          ● تصميم تجربة تتمحور حول الزائر
          <br>
          ● تعزيز المشروع الترفيهي الخاص بك
          <br>
          ● خلق ذكريات للزائرين
          <br>
          ● خلق ثقافة إبداعية مع فريقك
          `
        },
        location: {
          en: "Joy Kitchen",
          ar: "مطبخ جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
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
              ar: "ريم المطيري"
            },
            company: {
              en: "Passion Events",
              ar: "Passion Events"
            },
            title: {
              en: "General Manager",
              ar: "المدير العام"
            },
            bio: {
              en: `
            Ambitious Saudi woman who puts her creativity into creating unique entertainment experiences. With more than 4 years of experience, she created a culture of innovation that enabled her team to deliver several big events. Reem worked on several projects with GEA since it was established. 
            <br>
            <br>
            She was part of creating the first entertainment destination in Riyadh, Granada Square, visited by more than 600,000 people in the past 6 months. Reem is passionate about developing the 
            entertainment sector in Saudi to be the best in the world. 
            `,
              ar: `
              إمرأة سعودية طموحة تضع إبداعاتها في خلق تجربة ترفيهية فريدة من نوعها. مع أكثر من 4 سنوات من الخبرة, تمكنت من خلق ثقافة الإبتكار التي مكنت فريقها من تقديم العديد من الفعاليات الكبيرة
              و عملت ريم في عدة من المشاريع مع الهيئة العامة للترفيه منذ إنشائها.
              <br>
              <br>
              لقد كانت جزءا من إنشاء أول وجهة ترفيهية في الرياض, مجمع غرناطة, حيث حقق عدد زائرين أكثر من 600,000 شخص خلال الستة أشهر الماضية. 
              ريم شغوفة في تطوير القطاع الترفيهي في السعودية ليصبح الأفضل في العالم
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
        imgSrc: "/images/workshops/designing-for-joy.jpg",
        title: {
          en: "Designing for Joy",
          ar: "Designing for Joy"
        },
        description: {
          en: ``,
          ar: ``
        },
        location: {
          en: "Joy Lab",
          ar: "معمل جوي"
        },
        date: {
          en: "Oct. 14th",
          ar: "14 أكتوبر"
        },
        time: {
          en: "10:00 AM - 12:00 PM",
          ar: "10:00 AM - 12:00 PM"
        },
        speakers: [
          {
            avatar: "/images/workshops/avatars/humza.png",
            companyLogo: "/images/workshops/companies/accenture.png",
            name: {
              en: "Humza Ijaz",
              ar: "Humza Ijaz"
            },
            company: {
              en: "Accenture Interactive",
              ar: "Accenture Interactive"
            },
            title: {
              en: "CEO",
              ar: "الرئيس التنفيذي"
            },
            bio: {
              en: `
              Humza creates engaging, award winning experiences across a variety of mediums and for a wide array of industries. He has worked with some of the region’s most iconic brands and managed large creative teams, including designers, art directors, writers, user experience architects, usability experts, product experts, experience strategists and project managers.
              <br>
              <br>
              Packed with enthusiasm, tremendous energy and passion he brings creative brilliance, innovation and fun to the creative workplace. His appreciation for design is driven by a passion for great ideas, flawless execution, innovative marketing strategies and a keen understanding of various mediums and emerging technologies.
              <br>
              <br>
              In his role at Accenture Interactive as Chief Creative Officer, Humza is a key member driving Middle East & Turkey end to end design offering and is responsible for maintaining Accenture’s creative standards, developing original creative concepts, hiring new talent as well as overseeing creative delivery and inspiring teammates on all levels to exceed expectations and deliver creative excellence.
              `,
              ar: `
              Humza creates engaging, award winning experiences across a variety of mediums and for a wide array of industries. He has worked with some of the region’s most iconic brands and managed large creative teams, including designers, art directors, writers, user experience architects, usability experts, product experts, experience strategists and project managers.
              <br>
              <br>
              Packed with enthusiasm, tremendous energy and passion he brings creative brilliance, innovation and fun to the creative workplace. His appreciation for design is driven by a passion for great ideas, flawless execution, innovative marketing strategies and a keen understanding of various mediums and emerging technologies.
              <br>
              <br>
              In his role at Accenture Interactive as Chief Creative Officer, Humza is a key member driving Middle East & Turkey end to end design offering and is responsible for maintaining Accenture’s creative standards, developing original creative concepts, hiring new talent as well as overseeing creative delivery and inspiring teammates on all levels to exceed expectations and deliver creative excellence.
              `
            },
            website: "https://www.accentureinteractive.com/",
            socials: [
              {
                icon: "mdi-linkedin",
                link: "https://www.linkedin.com/in/humzaijaz/"
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
