import Link from "next/link";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import InstagramShowcase from "../elements/instagramShowcase";
import SocialMediaIcons from "../elements/socialMediaIcons";
import NewsletterForm from "../sections/newsletterForm";

export default function Footer({showSignUp, navLinks, webLinks, newsletterForm}: {showSignUp: boolean, navLinks: any, webLinks: any, newsletterForm: any} ) {
  const filtered = webLinks.socialLinks.filter((link: any) => link.platform === "Instagram");
  const instagramLink = filtered[0].link;

  return (
    <footer className="overflow-clip w-full">
      <p className={`font-quote text-center text-lg mx-5 ${showSignUp ? 'relative top-10 mb-5' : 'my-5'}`}>{webLinks.quote}</p>
      {showSignUp && <NewsletterForm newsletterForm={newsletterForm}/>}
      <div className={`bg-black -z-10 ${showSignUp ? 'pt-20' : 'pt-10'}`}>
        <InstagramShowcase customUrl={instagramLink ? instagramLink : ""} height="112px"/>
        <div className="my-10 md:flex md:w-full">
          <SocialMediaIcons webLinks={webLinks}/>
          <div className="flex place-content-between mx-10 md:mt-auto md:w-full">
            <nav>
              <ul className="text-white font-body text-sm capitalize">
                {navLinks.map((pageInfo: any, index: number) => { return(
                  <li key={index}><Link href={pageInfo.path} className="hover:font-bold hover:text-myGreen">{pageInfo.pageTitle}</Link></li>
                )})}
              </ul>
            </nav>
            <Link href="/" className="self-end md:self-center">
              <CompactLogo color='#ffffff' className='block md:hidden h-14'/>
              <WebsiteLogo color='#ffffff' className="hidden md:block h-8"/>
            </Link>
          </div>
        </div>
        <p className="font-body text-xs md:text-sm text-center text-white py-2">Designed and Build with ❤️ by <Link href="https://ninafuentes.dev" className="underline hover:font-bold">Nina Fuentes LLC</Link></p>
      </div>
    </footer>
  )
}
