import SocialMediaIcons from "../elements/socialMediaIcons";
import { Button } from "../elements/styledbutton";
import { webLinks } from "@/public/utils/data";
import Link from "next/link";

export default function ContactSection() {

    return (
      <section>
        <div>

        </div>
        <div className="">
          <Button content="Check out our FAQs" buttonStyle="green" className="my-5"/>
          <div className="flex flex-col mx-auto my-10 text-center">
              <h2 className="font-title uppercase font-bold">Connect With Us</h2>
              <SocialMediaIcons containerClassName="mt-10 mb-10 text-black flex text-center place-content-center h-7" iconClassName="h-full mx-0.5 w-7"/>
              <p className="font-body text-sm my-1">Instagram @ <Link href={webLinks.instagram}>hbcustemer</Link></p>
              <p className="font-body text-sm my-1">Facebook @ <Link href={webLinks.facebook}>HBCU STEMER</Link></p>
              <p className="font-body text-sm my-1">  Email - {webLinks.email}</p>
          </div>
        </div>
      </section>
    )
  }
