import Link from "next/link";
import { navLinks, webLinks } from "@/public/utils/data";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import InstagramShowcase from "../elements/instagramShowcase";
import SocialMediaIcons from "../elements/socialMediaIcons";


export default function Footer({showSignUp}: {showSignUp: boolean}) {

    return (
      <>
        <section>
          <p className='font-quote text-center text-lg m-5'>{webLinks.quote}</p>
          <div className="bg-black pt-10">
            <InstagramShowcase customUrl={webLinks.instagram}/>
            <div className="my-10 md:flex md:w-full">
              <SocialMediaIcons containerClassName="default" iconClassName="default"/>
              <div className="flex place-content-between mx-10 md:mt-auto md:w-full">
                <div>
                  <ul className="text-white font-body text-sm capitalize">
                    {navLinks.map((pageInfo, index) => { return(
                      <li key={index}><Link href={pageInfo.path}>{pageInfo.pageTitle}</Link></li>
                    )})}
                  </ul>
                </div>
                <Link href="/" className="self-end md:self-center">
                  <CompactLogo color='#ffffff' className='block md:hidden h-14'/>
                  <WebsiteLogo color='#ffffff' className="hidden md:block h-8"/>
                </Link>
              </div>
            </div>
            <p className="font-body text-xs md:text-sm text-center text-white py-2">Designed and Build with ❤️ by <Link href="https://fuentesnina.github.io/my-portfolio-website/">Nina Fuentes LLC</Link></p>
            <p className="font-body text-xs md:text-sm text-center text-white py-2">Designed and Build with ❤️ by Nina Fuentes LLC</p>
          </div>
        </section>
      </>
    )
  }
