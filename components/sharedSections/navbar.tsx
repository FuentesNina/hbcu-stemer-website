import Link from "next/link";
import CompactLogo from "@/components/elements/logos/compactLogo";
import WebsiteLogo from "../elements/logos/websiteLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function NavBar({navLinks} : {navLinks: any}) {
    const router = useRouter();
    const currentPath = router.pathname;
    const [mobileMenu, setMobileMenu] = useState(false); //false: menu is CLOSED. true: menu is OPEN.
    const [firstLoad, setFirstLoad] = useState(true)
    const scrollPosition = useScrollPosition();

    useEffect(() => {
      const handleWindowResize = () => {
        setFirstLoad(true);
      }

      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
    })


    const openMenu = function() {
      if(firstLoad) {
        setFirstLoad(false);
      }
      setMobileMenu(true);
    }

    const closeMenu = function() {
      if (mobileMenu) {
        setMobileMenu(false);
      }
    }

    return (
      <>
        <header className={`${scrollPosition > 0 && "drop-shadow-[0_5px_5px_rgba(0,0,0,.5)]"} transition-all sticky top-0 bg-black h-10 flex justify-between px-3 md:h-20 md:pl-5 md:pr-0 lg:px-6 z-50`}>
          <Link href="/" className="self-center z-50">
            <WebsiteLogo color='#ffffff' className="h-5 self-center md:hidden"/>
            <CompactLogo color="#ffffff" className="hidden md:block h-12 self-center"/>
          </Link>
          <div id="hamburgerMenuIcons" className="flex md:hidden cursor-pointer z-50">
            <FontAwesomeIcon icon={faBars} onClick={openMenu} className={`text-white h-8 self-center ${mobileMenu ? 'hidden' : ''}`}/>
            <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className={`text-white h-10 self-center ${mobileMenu ? '' : 'hidden'}`}/>
          </div>
          <nav id="desktopMenu" className="hidden md:block self-center">
            <ul className="text-white uppercase font-title font-bold text-sm grid grid-cols-3 gap-x-10 gap-y-1 lg:flex">
              {navLinks.map((pageInfo: any, index: number) => { return(
                  <li key={index} className='group flex flex-col max-w-fit lg:ml-5'>
                    <Link href={pageInfo.path} className={`${pageInfo.highlight ? 'text-myGreen' : ''}`}>{pageInfo.pageTitle}</Link>
                    <span className={`h-1 top-0 text-transparent bg-myGreen transition-all ease-in-out duration-500 group-hover:w-full ${currentPath === pageInfo.path ? "max-w-fit" : "w-0"}`}>{pageInfo.pageTitle}</span>
                  </li>
              )})}
            </ul>
          </nav>
        </header>
        <nav onClick={closeMenu} className={`${mobileMenu ? 'w-screen h-screen bg-black/[0.25] backdrop-blur-sm' : "w-0 h-0"}  overflow-hidden md:hidden z-50 fixed`} >
          <div className={`${mobileMenu ? 'left-full animate-showMenu' : (firstLoad ? "hidden" : 'animate-hideMenu right-0')} p-14 pb-8 pt-5 min-w-max md:hidden bg-black/[0.9] rounded-bl-xl backdrop-blur fixed`}>
            <ul className={`text-white uppercase font-title font-bold`}>
              {navLinks.map((pageInfo: any, index: number) => { return(
                <li key={index} onClick={closeMenu} className='my-4 flex flex-col max-w-fit group'>
                  <Link href={pageInfo.path} className={`${pageInfo.highlight ? ' text-myGreen' : ''}`}>{pageInfo.pageTitle}</Link>
                  <span className={`bg-myGreen h-1 top-0 text-transparent transition-all ease-in-out duration-500 group-hover:w-full ${currentPath === pageInfo.path ? "mw-full" : "w-0"}`}>{pageInfo.pageTitle}</span>
                </li>
              )})}
            </ul>
          </div>
        </nav>
      </>
    )
  }
