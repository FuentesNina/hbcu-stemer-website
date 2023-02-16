import Link from "next/link";
import { navLinks } from "@/public/utils/data";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;
    const [mobileMenu, setMobileMenu] = useState(false); //false: menu is CLOSED. true: menu is OPEN.


    const openMenu = function() {
      setMobileMenu(true);
    }

    const closeMenu = function() {
      setMobileMenu(false);
    }

    return (
      <>
        <section className="bg-black h-10 flex justify-between px-3 md:h-20 md:pl-5 md:pr-0 lg:px-6 sticky z-50">
            <Link href="/" className="self-center">
            <WebsiteLogo color='#ffffff' className="h-6 self-center md:hidden"/>
            <CompactLogo color="#ffffff" className="hidden md:block h-12 self-center"/>
            </Link>
            <div id="hamburgerMenuIcons" className="flex md:hidden">
              <FontAwesomeIcon icon={faBars} onClick={openMenu} className={`text-white h-8 self-center ${mobileMenu ? 'hidden' : ''}`}/>
              <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className={`text-white h-10 self-center ${mobileMenu ? '' : 'hidden'}`}/>
            </div>
            <div id="desktopMenu" className="hidden md:block self-center">
              <ul className="text-white uppercase font-title font-bold text-sm grid grid-cols-3 gap-x-10 gap-y-1 lg:flex">
                {navLinks.map((pageInfo, index) => { return(
                    <li key={index} onClick={closeMenu} className='flex flex-col'>
                      <Link href={pageInfo.path} className={pageInfo.highlight ? 'text-myGreen' : ''}>{pageInfo.pageTitle}</Link>
                      <span className={`"bg-myGreen h-1 top-0 text-black max-w-fit text-transparent text-right" ${currentPath === pageInfo.path ? "bg-myGreen" : "bg-transparent"}`}>{pageInfo.pageTitle}</span>
                    </li>
                )})}
              </ul>
            </div>
            <div id="mobileMenu" className={`${mobileMenu ? '' : 'hidden'} md:hidden top-10 bg-black/[0.9] p-14 pt-5 max-w-fit absolute right-0 z-50 rounded-bl-xl backdrop-blur transition-all`}>
              <ul className="text-white uppercase font-title font-bold">
                {navLinks.map((pageInfo, index) => { return(
                  <li key={index} onClick={closeMenu} className='py-2 flex flex-col'>
                    <Link href={pageInfo.path} className={pageInfo.highlight ? 'text-myGreen' : ''}>{pageInfo.pageTitle}</Link>
                    <span className={`"bg-myGreen h-1 top-0 text-black max-w-fit text-transparent text-right" ${currentPath === pageInfo.path ? "bg-myGreen" : "bg-transparent"}`}>{pageInfo.pageTitle}</span>
                  </li>
                )})}
              </ul>
            </div>
        </section>
      </>
    )
  }
