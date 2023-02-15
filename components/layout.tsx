import MyHead from "./sections/myHead";
import NavBar from "./sections/navbar";
import Footer from "./sections/footer";
import { ReactElement } from "react";
import { navLinks } from "@/public/utils/data";

export default function Layout({children}:{children:ReactElement}) {
    const pageIndex = 5;

    const pageTitle = navLinks[pageIndex].pageTitle;
    const pageDescription = navLinks[pageIndex].pageDescription
      ? navLinks[pageIndex].pageDescription
      : navLinks[0].pageDescription;
    const showSignUp = navLinks[pageIndex].showSignUp;

    return (
        <>
        <MyHead pageTitle={pageTitle} pageDescription={pageDescription} />
        {/* <NavBar /> */}
            <main>{children}</main>
        <Footer showSignUp={showSignUp}/>
      </>
    )
  }
