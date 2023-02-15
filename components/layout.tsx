import MyHead from "./sections/myHead";
import NavBar from "./sections/navbar";
import Footer from "./sections/footer";
import { ReactElement } from "react";
import { navLinks, getPageInfo } from "@/public/utils/data";

export default function Layout({children}:{children:ReactElement}) {
    const pageInfo = getPageInfo();

    const pageTitle = pageInfo.pageTitle;
    const pageDescription = pageInfo.pageDescription
      ? pageInfo.pageDescription
      : navLinks[0].pageDescription;
    const showSignUp = pageInfo.showSignUp;

    return (
        <>
        <MyHead pageTitle={pageTitle} pageDescription={pageDescription} />
        {/* <NavBar /> */}
            <main>{children}</main>
        <Footer showSignUp={showSignUp}/>
      </>
    )
  }
