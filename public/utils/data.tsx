export const navLinks = [
    {
        pageTitle: "Home",
        path: "/",
        bannerImage: "",
        pageDescription: "Educate, empower, and elevate HBCU students through scholarships and career resources.",
        highlight: false,
    },
    {
        pageTitle: "Education Run",
        path: "/raceinfo",
        bannerImage: "/images/raceInfo_Banner.jpeg",
        bannerImageLarge: "/images/raceInfo_Banner_largeScreen.jpg",
        pageDescription: "",
        highlight: true,
        runBenefits: [
            {
                title: 'get moving',
                imageIcon: '/images/benefit_getMoving.jpg',
            },
            {
                title: 'support black excellence',
                imageIcon: '/images/benefit_support.jpg',
            },
            {
                title: 'build connections',
                imageIcon: '/images/benefit_connections.jpeg',
            },
            {
                title: 'challenge yourself',
                imageIcon: '/images/benefit_challenge.png',
            },
        ],
    },
    {
        pageTitle: "Our Impact",
        path: "/impact",
        bannerImage: "/images/placeholders/ourImpact_background.png",
        pageDescription: "",
        highlight: false,
    },
    {
        pageTitle: "Our Partners",
        path: "/partners",
        bannerImage: "/images/ourPartners_Banner.jpg",
        pageDescription: "",
        highlight: false,
    },
    {
        pageTitle: "Who We Are",
        path: "/about",
        bannerImage: "/images/aboutUs_banner.png",
        pageDescription: "",
        highlight: false,
    },
    {
        pageTitle: "Contact Us",
        path: "/contact",
        bannerImage: "/images/contactUs_Banner.jpeg",
        pageDescription: "",
        highlight: false,
    },
]


export const webLinks = {
    email: "info@hbcustemer.com",
    quote: `“Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why its called the present.” - Bil Keane`,
    instagram: "https://www.instagram.com/hbcustemer/",
    facebook: "https://www.facebook.com/profile.php?id=100077784492698",
    youtube: "https://www.youtube.com/@hbcustemer5734",
}

export const contactForm = [
    {
      fieldName: "Name",
      type: "Short answer text",
      placeholder: "Name",
      required: true,
    },
    {
        fieldName: "Email",
        type: "Email",
        placeholder: "Email",
        required: true,
    },
    {
      fieldName: "Subject",
      type: "Short answer text",
      placeholder: "Subject",
      required: true,
    },
    {
      fieldName: "Name",
      type: "Paragraph",
      placeholder: "Please type your question or what information you are interested in.",
      required: true,
    },
    {
      fieldName: "Disclaimer",
      type: "Disclaimer",
      placeholder: "I would like to be notified of HBCU STEMER's next event",
      required: false,
    },
];

export const newsletterForm = [
    {
      fieldName: "Name",
      type: "Short answer text",
      placeholder: "Name",
      required: true,
    },
    {
        fieldName: "Email",
        type: "Email",
        placeholder: "Email",
        required: true,
    },
];

export const teamMembers = [
    {
        firstName: "danielle",
        lastName: "lewis",
        title: "founder & CEO",
        picture: "/images/teamMembers/danielle_headshot.JPG",
        bio: "I'm from Pell City, AL, a small town not too far from Birmingham. Even when I was younger, I was always interested in Math and Science, partly due to my mom being an engineer. I knew I wanted to attend Oakwood University, however, the school did not have their own Engineering program. Through Oakwood University and University of Alabama in Huntsville's Dual Degree Program, I had the unique experience of attending both a private HBCU and a public PWI while earning my degrees. Additionally, the financial and academic burden of a 5 year program caused me to be proactive in discovering scholarships and other resources through organizations such as the National Society of Black Engineers (NSBE) and the United Negro College Fund (UNCF).",
    },
    {
        firstName: "india",
        lastName: "hester",
        title: "marketing director",
        picture: "/images/teamMembers/india_headshot.png",
        bio: "Because I know first hand how invaluable these opportunities were for my career as a black woman in STEM, I am passionate to advocate for the younger generations of black STEM potential. Although currently working as a Systems Engineer in Electrification, I remain actively involved in the attraction, retention, and engagement of diverse talent. Most recently serving as the coordinator for the Cummins NSBE Integrated Pipeline Program which is a scholarship, internship, and mentorship opportunity for students at Howard, NC A&T, and Purdue University. Starting my own scholarship for deserving students has been a long lasting dream of mine. In the midst of COVID, I started the virtual HBCU STEM Education Run to raise funds and awareness through another passion of mine, running. I hope you will join me in support of this great cause!",
    },
];

export const raceTickets = [
    {
        title: 'Family fun',
        description: '1 mile run/walk',
        price: '$15',
        fee: '$1.90',
        mostPopular: false,
        features: [
            'T-shirt',
            'Swag Bag',
            'Create/Join a team of friends and family',
            'Easy to use fundraising page to help raise funds'
        ],
        link: 'https://runsignup.com/Race/Register/?raceId=106760&eventId=688359',
    },
    {
        title: 'virtual 5K',
        description: '3.1 miles run/walk',
        price: '$25',
        fee: '$2.50',
        mostPopular: true,
        features: [
            'Premium T-shirt',
            'Swag Bag',
            'Digital Runners Bib',
            'Create/Join a team of friends and family',
            'Easy to use fundraising page to help raise funds'
        ],
        link: 'https://runsignup.com/Race/Register/?raceId=106760&eventId=688361',
    },
    {
        title: 'virtual half-marathon',
        description: '13.1 miles run/walk',
        price: '$40',
        fee: '$3.40',
        mostPopular: false,
        features: [
            'Premium T-shirt',
            'Swag Bag',
            'Digital Runners Bib',
            'Create/Join a team of friends and family',
            'Easy to use fundraising page to help raise funds'
        ],
        link: 'https://runsignup.com/Race/Register/?raceId=106760&eventId=688362',
    },
];

export const communityMembers = [
    {
        tabTitle: 'our scholars',
        profiles: [
            {
                firstName: "Cesar",
                lastName: "Mercedes",
                picture: "/images/community/Cesar.jpg",
                school: "Oakwood University",
                year: "2021",
                bio: "Cesar was the first recipient of our MACS Support Scholarship established at Oakwood University. Cesar's mission is to ensure and maintain the security of internet network users while they are browsing.",
            },
            {
                firstName: "Demaiya",
                lastName: "Seymour",
                picture: "/images/community/Demaiya.png",
                school: "Spelman College",
                year: "2021",
                bio: `$1000 was awarded to Demaiya, a graduating Biology major. "I was not entirely sure how my balance for this semester [would have been taken care of]. [I’m] truly grateful for your contribution to my success."`,
            },
            {
                firstName: "Aline",
                lastName: "Tuyishime",
                picture: "/images/community/Aline.png",
                school: "Oakwood University",
                year: "2022",
                bio: `$500 was awarded to Aline, who is a rising sophomore in the WIN for STEM Initiative. "I can confidently say that they make me feel like I belong and I love being a part of STEM."`,
            },
        ],
    },
    {
        tabTitle: "race hall of fame",
        profiles: [
            // {
            //     firstName: "Peter",
            //     lastName: "McGiven",
            //     picture: "/images/placeholders/studentFemale.png",
            //     event: "Howard University",
            //     year: "2021",
            //     bio: "The is short'
            // },
        ]
    }
];


export const partnersData = [
    {
        tabTitle: 'sponsors',
        intro: "HBCU STEMER relies on sponsors to fulfill our goals of furthering STEM education through STEM programs, info sessions, and funding. By leveraging companies that demonstrate a commitment to diversity, we can increase diverse representation and improve STEM education. Many thanks to our amazing past and current sponsors!",
        callToAction: "become a sponsor",
        companies: [
            {
                name: "STEMedia",
                logo: "/images/partner_logos/logo_STEMedia.png",
                description: "Elevate and empower STEM success",
                website: "http://stemedia.com/connect",
                homepage: true,
            },
            {
                name: "4D Fitness 4 Life",
                logo: "/images/partner_logos/logo_4D_Fitness_4_Life.png",
                description: "Changing people's lives one at a time. Sign-up for the 12-Week Total Body Transformation Challenge",
                website: "https://www.4dfitness4life.com/programs",
                homepage: true,
            },
            {
                name: "AcaSTEMics",
                logo: "/images/partner_logos/logo_acastemics.png",
                description: "We create scientist and engineers! For STEM News: Join the AcaSTEMics Community Network Facebook Group",
                website: "https://www.facebook.com/groups/599867161520168",
                homepage: true,
            },
            {
                name: "Math N'More",
                logo: "/images/partner_logos/logo_MathNMore.png",
                description: "An acute mathematics firm offering K-12 and post-secondary schools and families math tutorial, coaching, and IEPS/504 solutions. Creating mathematical diversity! Enveryone is a math person!",
                website: "https://www.mathnmore.com/",
                homepage: true,
            },
            {
                name: "The Black Math Academy",
                logo: "/images/partner_logos/logo_The_Black_Math_Academy.jpeg",
                description: `"Math is where it's at" We tutor mathematics. As long as math involved, we can help. Hit us up for any of your mathematics needs.`,
                website: "http://www.theblackmathacademy.com/",
                homepage: true,
            },
            {
                name: "India Approved",
                logo: "/images/partner_logos/logo_India_Approved.png",
                description: "Community of beauty lover and one-stop shop for beauty recommendations. Follow India Approved for the latest beauty trends.",
                website: "https://www.instagram.com/indiaapproved/",
                homepage: true,
            },
            {
                name: "Nina Fuentes Coaching LLC",
                logo: "/images/partner_logos/logo_nfc.png",
                description: "Helping women transition to a plant-based lifestyle while losing stubborn weight",
                website: "https://www.ninafuentescoaching.com",
                homepage: true,
            },
            {
                name: "Post Mask Skin",
                logo: "/images/partner_logos/logo_PMS.png",
                description: "A natural skincare collection formulated for skin traumatized by COVID-19 face covering guidelines.",
                website: "https://www.etsy.com/shop/hgho/?etsrc=sdt",
                homepage: false,
            },
            {
                name: "STEAMulater",
                logo: "/images/partner_logos/logo_STEAMulater.png",
                description: "STEAM = STEM + Arts Education with Dr. Muk. Check out our website for the latest updates",
                website: "http://linktree.com/steamulater",
                homepage: false,
            },
            {
                name: "4D Traders Institute",
                logo: "/images/partner_logos/logo_4D_Traders.PNG",
                description: "Creating successful traders through education.",
                website: "https://www.4dtradersinstitute.com/",
                homepage: false,
            },
        ],
        form: {
            callToAction: "Your Company Here! Partner with Us",
            logo: "/images/partner_logos/yourLogoHere.png",
            title: "Sponsor Sign-Up",
            details: "SPONSOR BENEFITS",
            fields: [
                {
                    fieldName: "Name",
                    type: "Short answer text",
                    placeholder: "Name",
                    required: true,
                },
                {
                    fieldName: "Email",
                    type: "Email",
                    placeholder: "Email",
                    required: true,
                },
                {
                    fieldName: "Company Name",
                    type: "Short answer text",
                    placeholder: `What is the full name of the organization you represent? Please enter "Individual Sponsor" if not representing an organization.`,
                    required: true,
                },
                {
                    fieldName: "Sponsor Interest",
                    type: "Checkbox",
                    placeholder: "What are your primary interests as a sponsor? Select top 3.",
                    required: true,
                    options: [
                        'Improving STEM education',
                        'Increasing diversity in STEM',
                        `Supporting HBCU's`,
                        `Promoting fitness awareness`,
                        "Exposure for my brand",
                        "Growth/networking opportunities with HBCU STEMER and its partners",
                        "I just enjoy giving back",
                        "Tax break from donations",
                    ]
                },
            ],
        }
    },
    {
        tabTitle: 'hbcu partners',
        intro: "HBCUs, big or small, we love them all! HBCU STEMER relies on HBCU partners to fulfill our goals of furthering STEM education through the STEM programs, initiatives, and bright minds at your institution. By leveraging the influential community of HBCU alumni, current students, and supporters, we can improve STEM education.",
        callToAction: "become a partner",
        companies: [
            // {
            //     name: "Spelman College",
            //     logo: "/images/placeholders/spelmanCollege_logo.png",
            //     description: "A historically black liberal arts college for women location in Atlanta, Georgia dedicated to the intellectual, creative, ethical, and leadership development of it's students.",
            //     website: "https://www.spelman.edu",
            // },
            // {
            //     name: "Oakwook University",
            //     logo: "/images/placeholders/oakwood_logo.png",
            //     description: "",
            //     website: "",
            // },
            // {
            //     name: "Howard University",
            //     logo: "/images/placeholders/howard_logo.png",
            //     description: "",
            //     website: "",
            // },
        ],
        form: {
            callToAction:"Your School Here! Partner with HBCU STEMER",
            logo: "/images/partner_logos/yourLogoHere.png",
            title: "HBCU Partner Sign-Up",
            details: "HBCU PARTNER BENEFITS",
            fields: [
                {
                    fieldName: "Name",
                    type: "Short answer text",
                    placeholder: "Name",
                    required: true,
                },
                {
                    fieldName: "Email",
                    type: "Email",
                    placeholder: "Email",
                    required: true,
                },
                {
                    fieldName: "HBCU Name",
                    type: "Short answer text",
                    placeholder: "Which HBCU do you represent?",
                    required: true,
                },
                {
                    fieldName: "Funding Purpose",
                    type: "Paragraph",
                    placeholder: "What is the likely primary use of HBCU STEMER funds? Funds must be applied to STEM student/education.",
                    required: true,
                },
            ],
        }
    },
];

export const pastEvents = [
    {
        type: 'recap',
        date: '2022 recap',
        title: 'thanks everyone',
        video: "https://youtube.com/shorts/CCdyfKaBKYc",
    },
    {
        type: 'event',
        date: 'may 2022',
        title: '2nd annual education run',
        files: [
            "/images/placeholders/instagramShowcase/IG1.png",
            "/images/placeholders/instagramShowcase/IG2.png",
            "/images/placeholders/instagramShowcase/IG3.png",
        ],
        highlights: [
            '1 Mile, 5K, and Half Marathon Options',
            'Runners from all over the country',
            '$1,200+ raised for future black doctors of America!'
        ]
    },
    {
        type: 'recap',
        date: '2021 recap',
        title: 'thanks everyone',
        video: "https://www.youtube.com/embed/o5caqBTLK4k",
    },
    {
        type: 'event',
        date: 'october 2021',
        title: 'women in STEM walkathon',
        files: [
            "/images/placeholders/instagramShowcase/IG1.png",
            "/images/placeholders/instagramShowcase/IG2.png",
            "/images/placeholders/instagramShowcase/IG3.png",
        ],
        highlights: [
            'Over 500 Miles',
            '1st Place: Sakinah S. with 120 Miles',
            'Over $1000 raised for graduating seniors'
        ]
    },
    {
        type: 'event',
        date: 'may 2021',
        title: 'inaugural education run',
        files: [
            "/images/placeholders/instagramShowcase/IG1.png",
            "/images/placeholders/instagramShowcase/IG2.png",
            "/images/placeholders/instagramShowcase/IG3.png",
        ],
        highlights: [
            '56 runners',
            'Accross 13 states',
            'Over $2,500 raised for STEM scholarships!',
            'Math and Computer Science (MACS) support Scholarship established for deserving students at Oakwood University (Huntsville, AL)'
        ]
    },
]

export const faq = [
    {
        question: 'What is a virtual race or walkathon?',
        answer: 'Walking or running for a cause is an exciting, rewarding fundraising experience. The advantage of a virtual event is that it can be done anywhere! Participants also have the full month of May (HBCU STEMER) or October (Women in STEM Walkathon) to either run or rack up as many miles as possible. Then we turn your miles into money.',
    },
    {
        question: 'How do I register?',
        answer: `Whether you are an HBCU alum or STEM graduate, or just passionate about education, this event is for you. You can register by visiting www.hbcustemer.com/raceinfo.`
    },
    {
        question: 'When is the race?',
        answer: 'The HBCU STEMER virtual run is held during the month of May, while the  Women in STEM Walkathon is a virtual walk that is held over the full month of October.',
    },
    {
        question: `Unfortunately, I can't participate in the event, but can I donate instead?`,
        answer: 'Yes! Pledge funds to help us meet our donation goal and/or you can sponsor a student to participate in the virtual event.',
    },
    {
        question: ' What does HBCU STEMER and WiSW stand for?',
        answer: 'Historically Black Colleges and Universities Science, Technology, Engineering, and Math Education Run. Women in STEM Walkathon',
    },
    {
        question: 'How do I partner with HBCU STEMER?',
        answer: 'To become a sponsor or HBCU partner, please fill out the respective form on Our Partners page: www.hbcustemer.com/partners.',
    },
];

export const milestones = [
    {
        title: 'first HBCU STEM Education run',
        description: 'May 2021 - MACS Support Scholarship Established.',
    },
    {
        title: `We're official!`,
        description: 'In August 2021, HBCU STEMER became a registered LLC.',
    },
    {
        title: 'First WISW',
        description: 'In October 2021, HBCU STEMER organized the first Women In STEM Walkathon. Over 500 miles were logged by participants!',
    },
    {
        title: 'In the news',
        description: `HBCU STEMER's article 'Endless Possibilities through STEM' was featured in Historically Black Since Magazine.`,
    },
    {
        title: 'Community Impact',
        description: `Hosted the 'How to Build an EV' Workshop for Oakwood University's Women Initiative (WIN) for STEM Summer Bridge Program.`,
    },
]

// to be deleted/replaced with IG API.
export const IG_PICTURES = [
    {
        src: "/images/placeholders/instagramShowcase/IG1.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG2.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG3.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG4.png",
        caption: "",
    },{
        src: "/images/placeholders/instagramShowcase/IG5.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG6.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG8.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG9.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG1.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG2.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG3.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG4.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG5.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG6.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG8.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG9.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG5.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG6.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG8.png",
        caption: "",
    },
    {
        src: "/images/placeholders/instagramShowcase/IG9.png",
        caption: "",
    },
]
