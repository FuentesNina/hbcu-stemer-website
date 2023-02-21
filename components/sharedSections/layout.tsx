import MyHead from "./myHead";
import NavBar from "./navbar";
import Footer from "./footer";
import { ReactElement } from "react";
import { navLinks } from "@/public/utils/data";
import { getPageInfo } from "@/hooks/getPageInfo";

export default function Layout({children}:{children:ReactElement}) {
    const pageInfo = getPageInfo();

    return (
      <>
        {pageInfo && <MyHead pageTitle={pageInfo.pageTitle} pageDescription={pageInfo.pageDescription ? pageInfo.pageDescription : navLinks[0].pageDescription} />}
        {pageInfo && <NavBar />}
              <main>{children}</main>
        {pageInfo && <Footer showSignUp={pageInfo.path === '/' && true}/>}
      </>
    )
  }
