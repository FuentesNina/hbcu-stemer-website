import { useRouter } from "next/router";

export const navLinks = [
    {
        pageTitle: "Home",
        path: "/",
        bannerImage: "",
        pageDescription: "Educate, empower, and elevate HBCU students through scholarships and career resources.",
        showSignUp: true,
    },
    {
        pageTitle: "Education Run",
        path: "/raceinfo",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
    },
    {
        pageTitle: "Our Impact",
        path: "/impact",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
    },
    {
        pageTitle: "Our Partners",
        path: "/partners",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
    },
    {
        pageTitle: "Who We Are",
        path: "/about",
        bannerImage: "",
        pageDescription: "",
        showSignUp: false,
    },
    {
        pageTitle: "Contact Us",
        path: "/contact",
        bannerImage: "images/contactUs_Banner.jpeg",
        pageDescription: "",
        showSignUp: false,
    },
]


export const webLinks = {
    email: "info@hbcustemer.com",
    quote: `“Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why its called the present.” - Bil Keane`,
    instagram: "https://www.instagram.com/hbcustemer/",
    facebook: "https://www.facebook.com/profile.php?id=100077784492698",
    youtube: "https://www.youtube.com/@hbcustemer5734",
}

export function getPageInfo() {
    const router = useRouter();
    const pathname = router.pathname;

    const filtered = navLinks.filter(pageInfo => pageInfo.path === pathname);

    const pageInfo = filtered[0];

    return pageInfo;
  }