import Banner from '@/components/sections/banner';
import CustomBackground from '@/components/elements/customBackground';
import CallToAction from '@/components/sections/callToAction';
import Link from 'next/link';
import { Button } from '@/components/elements/styledbutton';


export default function About() {

  return (
    <>
      <Banner/>
      <section className="mx-5 mt-10 mb-16 md:grid-cols-[2fr_3fr] md:grid md:gap-10 md:mx-10 lg:max-w-4xl lg:mx-auto">
        <div className="border-black border rounded-lg my-10 overflow-clip max-w-sm mx-auto">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src="/images/placeholders/aboutUs_introImage.png" alt="" />
        </div>
        <div className="my-10 md:m-auto">
          <p className="font-body ">
          {`Historically Black Colleges and Universities (HBCU's) are an oasis of cultural significance, both past and present, and are leading sources for black graduates. However, the fields of Science, Technology, Engineering, and Math (STEM) are still lacking proper representation of minority and underrepresented groups.`}
          <br/><br/>
          {`The HBCU STEM Education Run (STEMER) is a virtual run/walk that strives to raise funds and awareness through fitness. Funds are collected in the form of registration fees, sponsorship money, and pledges. Funds raised will be used to educate, empower, and elevate HBCU students through scholarships and career resources.`}
          </p>
          <Link href="#hbcuTeam">
            <Button content="meet the team" buttonStyle="black" className="my-5 md:mb-0" />
          </Link>
        </div>
      </section>
      <section id="hbcuTeam" className="scroll-mt-14 md:scroll-mt-24 max-w-lg min-h-fit m-auto overflow-clip">
        <CustomBackground backgroundColor="white" color="#d9d9d9" factor={1.5}>
        </CustomBackground>
      </section>
      <CallToAction />
    </>
  )
}
