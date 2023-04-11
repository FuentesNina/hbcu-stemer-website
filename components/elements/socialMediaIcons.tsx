import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SocialMediaIcons({containerClassName, iconClassName, color, margins, webLinks }: {webLinks: any, containerClassName?: string | undefined ,iconClassName?:string | undefined, color?: string | undefined, margins?: string | undefined}) {
    const iconColor = color ? color : "white";
    const iconMargins = margins ? margins : "";
    const containerClass = containerClassName ? containerClassName : `text-${iconColor} my-10 md:ml-10 flex text-center place-content-center h-8 `;
    const iconClass = iconClassName ? iconClassName : "h-full mx-1 w-8 hover:text-myGreen" ;

    return (
      <ul className={containerClass}>
        {webLinks.socialLinks?.map((link: any, index: number) => {
          if (link?.showIcon) {

            return (
              <li key={`${link.platform}${index}`}>
                { link.platform === "Email"
                ? <Link href={link.link}><FontAwesomeIcon icon={faEnvelope} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
                :link.platform === "Instagram"
                ? <Link href={link.link}><FontAwesomeIcon icon={faInstagram} className={iconClass} mask={faCircle} transform="shrink-4" /></Link>
                : link.platform === "Facebook"
                ? <Link href={link.link}><FontAwesomeIcon icon={faFacebookF} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
                : link.platform === "YouTube"
                ? <Link href={link.link}><FontAwesomeIcon icon={faYoutube} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
                : link.platform === "TikTok"
                ? <Link href={link.link}><FontAwesomeIcon icon={faTiktok} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
                : link.platform === "LinkedIn"
                && <Link href={link.link}><FontAwesomeIcon icon={faLinkedin} className={iconClass} mask={faCircle} transform="shrink-6" /></Link>
                }
              </li>
            )
          }
        })}
      </ul>
    )
  }
