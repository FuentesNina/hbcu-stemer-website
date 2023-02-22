import Link from "next/link";
import { SectionTitle } from "../elements/sectionTitle";
import { Button } from "../elements/styledbutton";

export default function CallToAction() {
    return (
      <section className="bg-black rounded-xl mx-5 px-5 py-10">
        <SectionTitle content="accept the challenge!!!" titleStyle="white-red"/>
        <p className="text-white font-body text-sm my-10 text-justify">{`Whether you are an HBCU alum/student, STEM graduate, or just passionate about education, this run/walk is for you! Register now to join the virtual HBCU STEM Education Run to support STEM education at these crucial institutions. Race registration and donations are hosted via our HBCU STEMER Run Signup page.`}</p>
        <Link href="/raceinfo">
            <Button content="register now" buttonStyle="red"/>
        </Link>
        <img className="rounded-xl mt-10" src="/images/placeholders/cta_picture.jpeg" />
      </section>
    )
  }