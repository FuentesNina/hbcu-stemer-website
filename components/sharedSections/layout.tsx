import MyHead from "./myHead";
import NavBar from "./navbar";
import Footer from "./footer";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export default function Layout({children, layoutData}:{children:ReactElement, layoutData: any}) {
  const navLinks = layoutData.navLinks;
  const webLinks = layoutData.webLinks;

  const router = useRouter();
  const pathname = router.pathname;
  const filtered = navLinks.filter((pageInfo: any) => pageInfo.path === pathname);
  const pageInfo = filtered[0];

  return (
    <>
      {pageInfo && <MyHead pageTitle={pageInfo.pageTitle} pageDescription={pageInfo.pageDescription ? pageInfo.pageDescription : navLinks[0].pageDescription} />}
      {pageInfo && <NavBar navLinks={navLinks}/>}
            <main>{children}</main>
      {pageInfo && <Footer showSignUp={pageInfo.path === '/' && true} navLinks={navLinks} webLinks={webLinks}/>}
    </>
  )
}
