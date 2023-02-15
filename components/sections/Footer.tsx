import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { navLinks } from "@/public/utils/data";
import CompactLogo from "../elements/logos/CompactLogo";
import WebsiteLogo from "../elements/logos/WebsiteLogo";
import { faFacebook, faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    const quote = `“Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why its called the present.” - Bil Keane`;
    const INSTAGRAM_URL = 'https://www.instagram.com/hbcustemer/';
    const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100077784492698';
    const YOUTUBE_URL = 'https://www.youtube.com/@hbcustemer5734';


    return (
      <>
        <section>
          <p className='font-quote text-center text-xl m-5'>{quote}</p>
          <div className="bg-black pt-10">
            <div className="bg-cyan-700 h-20 grid relative place-content-center">
              <div id="collage of Instagram images" className='absolute'>
              </div>
              <Link href={INSTAGRAM_URL} className='text-white text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
            </div>
            <div className="my-10 md:flex md:w-full">
              <div className="flex text-center h-8 my-10 md:ml-10 place-content-center">
                <Link href={INSTAGRAM_URL}><FontAwesomeIcon icon={faInstagram} className="text-white h-full mx-1" mask={faCircle} transform="shrink-4" /></Link>
                <Link href={FACEBOOK_URL}><FontAwesomeIcon icon={faFacebookF} className="text-white h-full mx-1" mask={faCircle} transform="shrink-6" /></Link>
                <Link href={YOUTUBE_URL}><FontAwesomeIcon icon={faYoutube} className="text-white h-full mx-1" mask={faCircle} transform="shrink-6" /></Link>
              </div>
              <div className="flex place-content-between mx-10 md:mt-auto md:w-full">
                <div>
                  <ul className="text-white font-body text-sm">
                    {navLinks.map((link, index) => { return(
                      <li key={index}><Link href={link.path}>{link.name}</Link></li>
                    )})}
                  </ul>
                </div>
                <div className='self-end md:self-center'>
                  <CompactLogo color='#ffffff' className='block md:hidden h-20'/>
                  <WebsiteLogo color='#ffffff' className="hidden md:block h-8"/>
                </div>
              </div>
            </div>
            <p className="font-body text-xs md:text-sm text-center text-white py-2">Designed and Build with ❤️ by Nina Fuentes LLC</p>
          </div>
        </section>
      </>
    )
  }
