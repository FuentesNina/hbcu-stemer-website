import Link from "next/link";
import { navLinks, webLinks } from "@/public/utils/data";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import InstagramShowcase from "../elements/instagramShowcase";
import SocialMediaIcons from "../elements/socialMediaIcons";
import NewsletterForm from "../sections/newsletterForm";

export default function Footer({showSignUp}: {showSignUp: boolean} ) {

  return (
    <footer className="overflow-clip w-full">
      <p className={`font-quote text-center text-lg mx-5 ${showSignUp ? 'relative top-10 mb-5' : 'my-5'}`}>{webLinks.quote}</p>
      {showSignUp && <NewsletterForm />}
      <div className={`bg-black -z-10 ${showSignUp ? 'pt-20' : 'pt-10'}`}>
        <InstagramShowcase customUrl={webLinks.instagram} height="112px"/>
        <div className="my-10 md:flex md:w-full">
          <SocialMediaIcons />
          <div className="flex place-content-between mx-10 md:mt-auto md:w-full">
            <nav>
              <ul className="text-white font-body text-sm capitalize">
                {navLinks.map((pageInfo, index) => { return(
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
