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
          <h2 className="">Connect With Us</h2>
          <SocialMediaIcons color="black"/>
          <p>Instagram @ hbcustemer{`\n`}Facebook @ <Link href={webLinks.facebook}>HBCU STEMER</Link>{`\n`}Email - {webLinks.email}</p>
          <Button content="Check out our FAQs"/>
        </div>

      </section>
    )
  }
