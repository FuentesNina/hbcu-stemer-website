import MyHead from "./sections/myHead";
import NavBar from "./sections/navbar";
import Footer from "./sections/footer";
import { ReactElement } from "react";
import { navLinks, getPageInfo } from "@/public/utils/data";

export default function Layout({children}:{children:ReactElement}) {
    const pageInfo = getPageInfo();

    return (
      <>
        {pageInfo && <MyHead pageTitle={pageInfo.pageTitle} pageDescription={pageInfo.pageDescription ? pageInfo.pageDescription : navLinks[0].pageDescription} />}
        {pageInfo && <NavBar />}
              <main>{children}</main>
        {pageInfo &&<Footer showSignUp={pageInfo.showSignUp}/>}
      </>
    )
  }
