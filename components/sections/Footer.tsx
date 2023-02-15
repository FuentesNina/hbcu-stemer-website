import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { navLinks } from "@/public/utils/data";
import CompactLogo from "../elements/logos/CompactLogo";
import WebsiteLogo from "../elements/logos/WebsiteLogo";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    const quote = `“Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why its called the present.” - Bil Keane`;
    const instagramURL = 'https://www.instagram.com/hbcustemer/';


    return (
      <>
        <section>
          <p className='font-quote text-center text-lg'>{quote}</p>
          <div className="bg-black pt-10">
            <div id="followus" className="bg-cyan-700 h-20 grid relative place-content-center">
              <div id="collage of Instagram images" className='absolute'>
              </div>
              <Link href={instagramURL} className='text-white text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
            </div>
            <div className="my-10">
              <div className="bg-myRed h-100 w-50">
                <Link href={instagramURL} className="text-white"><FontAwesomeIcon icon={faCircle} className="text-white text-4xl"/>My Name is Nina</Link>
                <FontAwesomeIcon icon={['fab', 'instagram']} className="text-white text-3xl inline"/>
              </div>
              <div className="flex place-content-between mx-10">
                <div>
                  <ul className="text-white font-body text-sm">
                    {navLinks.map((link, index) => { return(
                      <li key={index}><Link href={link.path}>{link.name}</Link></li>
                    )})}
                  </ul>
                </div>
                <div className='self-end'>
                  <CompactLogo color='#ffffff' className='block md:hidden h-20'/>
                  <WebsiteLogo color='#ffffff' className="hidden md:block"/>
                </div>
              </div>
            </div>
            <p className="font-body text-xs text-center text-white py-2">Designed and Build with ❤️ by Nina Fuentes LLC</p>
          </div>
        </section>
      </>
    )
  }
