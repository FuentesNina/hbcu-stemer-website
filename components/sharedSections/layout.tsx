import MyHead from "./myHead";
import NavBar from "./navbar";
import Footer from "./footer";
import { ReactElement } from "react";
import { navLinks } from "@/public/utils/data";
import { getPageInfo } from "@/hooks/getPageInfo";
import client from "@/.tina/__generated__/client";

export default function Layout({children, ...props}:{children:ReactElement}) {
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


const getWebLinks = async () => {
  let data = {};
  let query = {};
  let variables = {relativePath: 'links.md'};

  try {
    const res = await client.queries.websiteDetails(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // errors
  }

  return {
    props: {
      data,
      query,
      variables,
    }
  }
};

  // let siteDetails: Object;

  // getWebLinks()
  //   .then(response => {
  //     console.log(response.props.data.webLinks.email);
  //     siteDetails[email] = response.props.data.webLinks.email;
  //   });
