export const navLinks = [
    {
        pageTitle: "Home",
        path: "/",
        bannerImage: "",
        pageDescription: "Educate, empower, and elevate HBCU students through scholarships and career resources.",
        showSignUp: true,
        highlight: false,
    },
    {
        pageTitle: "Education Run",
        path: "/raceinfo",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
        highlight: true,
    },
    {
        pageTitle: "Our Impact",
        path: "/impact",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
        highlight: false,
    },
    {
        pageTitle: "Our Partners",
        path: "/partners",
        bannerImage: "/images/ourPartners_Banner.jpg",
        pageDescription: "",
        showSignUp: false,
        highlight: false,
    },
    {
        pageTitle: "Who We Are",
        path: "/about",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
        highlight: false,
    },
    {
        pageTitle: "Contact Us",
        path: "/contact",
        bannerImage: "/images/contactUs_Banner.jpeg",
        pageDescription: "",
        showSignUp: false,
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
      placeholder: "I would like to be notified of next year's HBCU STEMER Education Run",
      required: false,
    },
];

export const partnersData = [
    {
        tabTitle: 'sponsors',
        intro: "This is a small paragraph introducing the sponsors",
        callToAction: "become a sponsor",
        companies: [
            {
                name: "4D Traders Institute",
                logo: "/images/placeholders/4Dtraders_logo.png",
                description: "Creating successful traders through education.",
                website: "https://www.4dtradersinstitute.com/",
            },
            {
                name: "Nina Fuentes Coaching LLC",
                logo: "https://lh4.googleusercontent.com/g5ULT3HiSG4zlBQ90_pV8o4ItcsKtCZ3iocGUQiMg7ZYPMDKMgR4Gkaqr6XqeTzmXnDocYV9O1xNAVl6bsmleU9qLmzBNLOnU-yAcF7i62c4dUIejtohJGVPOhS0JB5r8g=w1280",
                description: "Helping women transition to a plant-based lifestyle while losing stubborn weight",
                website: "https://www.ninafuentescoaching.com",
            },
            {
                name: "Post Mask Skin",
                logo: "https://lh4.googleusercontent.com/mnGCnuTR1MTxd_Ne2_V5jlOHTU788Cajf17tP4IR3Nq8Fo2Exk3HFWrBx1ZoMuVE0gN2MLoZqql5OPTwSbLY3cchHZkSFbiYGTwnKHz93Xw5Z7ja48Fw8hPbeXXd_WlCAQ=w1280",
                description: "A natural skincare collection formulated for skin traumatized by COVID-19 face covering guidelines.",
                website: "",
            },
        ],
        form: {
            callToAction: "Your Company Here! Partner with Us",
            logo: "/images/placeholders/4Dtraders_logo.png",
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
            {
                name: "Spelman College",
                logo: "",
                description: "A historically black liberal arts college for women location in Atlanta, Georgia dedicated to the intellectual, creative, ethical, and leadership development of it's students.",
                website: "https://www.spelman.edu",
            },
            {
                name: "Oakwook University",
                logo: "",
                description: "",
                website: "",
            },
            {
                name: "Howard University",
                logo: "",
                description: "",
                website: "",
            },
        ],
        form: {
            callToAction:"Your School Here! Partner with HBCU STEMER",
            logo: "",
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
