import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { webLinks } from "@/public/utils/data";

export default function SocialMediaIcons({containerClassName, iconClassName }: {containerClassName: string,iconClassName:string}) {

    const containerClass = "default" ? "flex text-center place-content-center text-white h-8 my-10 md:ml-10" : containerClassName;
    const iconClass = "default" ? "h-full mx-1 w-8" : iconClassName;

    return (
      <>
        <div className={containerClass}>
            <Link href={webLinks.instagram}><FontAwesomeIcon icon={faInstagram} className={iconClass} mask={faCircle} transform="shrink-4" /></Link>
            <Link href={webLinks.facebook}><FontAwesomeIcon icon={faFacebookF} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
            <Link href={webLinks.youtube}><FontAwesomeIcon icon={faYoutube} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
        </div>
      </>
    )
  }
