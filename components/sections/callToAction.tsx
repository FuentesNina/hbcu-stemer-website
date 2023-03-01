import SectionTitle from "../elements/sectionTitle";
import Button from "../elements/styledbutton";

export default function CallToAction() {
    return (
      <section className="md:px-5">
        <div className="bg-black rounded-xl md:mx-auto mx-5 px-5 py-10 max-w-4xl  md:mb-10">
          <SectionTitle content="accept the challenge!!!" titleStyle="white-red"/>
          <div className="md:flex md:gap-10 md:mx-5">
            <div>
              <p className="text-white font-body text-sm my-10 text-justify">{`Whether you are an HBCU alum/student, STEM graduate, or just passionate about education, this run/walk is for you! Register now to join the virtual HBCU STEM Education Run to support STEM education at these crucial institutions. Race registration and donations are hosted via our HBCU STEMER Run Signup page.`}</p>
              <Button href="/raceinfo" content="register now" buttonStyle="red"/>
            </div>
            <img className="rounded-xl mt-10 mx-0 md:max-w-xs" src="/images/cta_picture.jpeg" />
          </div>
        </div>
      </section>
    )
  }
