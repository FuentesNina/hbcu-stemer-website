import MyHead from "@/components/sharedSections/myHead";
import NavBar from "@/components/sharedSections//navbar";
import Footer from "@/components/sharedSections//footer";
import Button from "@/components/elements/styledbutton";
import { useRouter } from "next/router";

export default function ThankYou({sharedData, ...props} : {sharedData: any, query: any, variables: any, data: any}) {
  const navLinks = sharedData.navLinks;
  const webLinks = sharedData.webLinks;
  const newsletterForm = sharedData.newsletterForm;

  const router = useRouter();

    const goBack = function() {
        router.back();
    }

    const goHome = function() {
        router.push('/')
    }

    return (
      <>
        <MyHead pageTitle="Thank You" pageDescription={navLinks[0].pageDescription} pageImage={navLinks[0].pageImage}/>
        <NavBar navLinks={navLinks}/>
        <main className="m-10 grid place-content-center font-body gap-5">
            <p>Thank you for your submission.</p>
            <Button href="" action={goBack} content="previous page" buttonStyle="red"/>
            <Button href="" action={goHome} content="homepage" buttonStyle="white-red"/>
        </main>
        {/* 2 buttons: go back to previous page & go back home. */}
        <Footer showSignUp={false} navLinks={navLinks} webLinks={webLinks} newsletterForm={newsletterForm}/>
      </>
    )
  }
