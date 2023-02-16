import Link from "next/link";
import { navLinks } from "@/public/utils/data";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;
    const [mobileMenu, setMobileMenu] = useState(false); //false: menu is CLOSED. true: menu is OPEN.

    const scrollPosition = useScrollPosition();


    const openMenu = function() {
      setMobileMenu(true);
    }

    const closeMenu = function() {
      setMobileMenu(false);
    }

    return (
      <>
        <section className={`${scrollPosition > 0 ? "drop-shadow-[0_5px_5px_rgba(0,0,0,.5)]" : ""} transition-all sticky top-0 bg-black h-10 flex justify-between px-3 md:h-20 md:pl-5 md:pr-0 lg:px-6 z-50`}>
            <Link href="/" className="self-center">
            <WebsiteLogo color='#ffffff' className="h-5 self-center md:hidden"/>
            <CompactLogo color="#ffffff" className="hidden md:block h-12 self-center"/>
            </Link>
            <div id="hamburgerMenuIcons" className="flex md:hidden z-50 cursor-pointer">
              <FontAwesomeIcon icon={faBars} onClick={openMenu} className={`text-white h-8 self-center ${mobileMenu ? 'hidden' : ''}`}/>
              <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className={`text-white h-10 self-center ${mobileMenu ? '' : 'hidden'}`}/>
            </div>
            <div id="desktopMenu" className="hidden md:block self-center">
              <ul className="text-white uppercase font-title font-bold text-sm grid grid-cols-3 gap-x-10 gap-y-1 lg:flex">
                {navLinks.map((pageInfo, index) => { return(
                    <li key={index} onClick={closeMenu} className='flex flex-col hover:max-w-fit hover:bg-myGreen '>
                      <Link href={pageInfo.path} className={`bg-black ${pageInfo.highlight ? 'text-myGreen' : ''}`}>{pageInfo.pageTitle}</Link>
                      <span className={`bg-myGreen h-1 top-0 text-black text-transparent text-right ${currentPath === pageInfo.path ? "max-w-fit" : "bg-transparent"}`}>{pageInfo.pageTitle}</span>
                    </li>
                )})}
              </ul>
            </div>
            <div className={`${mobileMenu ? '' : 'hidden'} fixed w-full h-full z-49`} onClick={closeMenu}></div>
              <div id="mobileMenu" className={`${mobileMenu ? 'translate-x-0' : 'translate-x-full'} p-14 pt-5 max-w-fit ease-in-out transform duration-300 md:hidden top-10 bg-black/[0.9] absolute right-0 z-50 rounded-bl-xl backdrop-blur`}>
                <ul className="text-white uppercase font-title">
                  {navLinks.map((pageInfo, index) => { return(
                    <li key={index} onClick={closeMenu} className='my-4 flex flex-col font-bold hover:max-w-fit hover:bg-myGreen hover:text-black'>
                      <Link href={pageInfo.path} className={`${pageInfo.highlight ? ' text-myGreen hover:text-black' : ''}`}>{pageInfo.pageTitle}</Link>
                      <span className={`bg-myGreen h-1 top-0 text-black text-transparent text-right ${currentPath === pageInfo.path ? "max-w-fit" : "bg-transparent"}`}>{pageInfo.pageTitle}</span>
                    </li>
                  )})}
                </ul>
              </div>
        </section>
      </>
    )
  }
