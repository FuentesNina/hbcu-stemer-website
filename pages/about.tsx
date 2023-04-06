import Banner from '@/components/sections/banner';
import CustomBackground from '@/components/elements/customBackground';
import CallToAction from '@/components/sections/callToAction';
import Button from '@/components/elements/styledbutton';
import { teamMembers } from '@/public/utils/data';
import SectionTitle from '@/components/elements/sectionTitle';
import TeamMember from '@/components/elements/teamMember';
import { useTina } from 'tinacms/dist/react';
import client from '@/.tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const Intro = (content:any) => {
  return (<p className="font-body">{content}</p>)
}

export default function About({...props}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <Banner/>
      <section className="mx-5 bg-white mt-10 mb-16 sm-sm:max-w-lg text-justify md:grid-cols-[2fr_3fr] md:grid md:gap-10 md:mx-10 md:my-20 lg:max-w-4xl lg:mx-auto">
        <div className="border-black border rounded-lg my-10 md:m-0 overflow-clip max-w-sm mx-auto">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src={data.page.picture} alt="" />
        </div>
        <div className="my-10 md:m-auto font-body">
          {/* <p className="font-body"> */}
          <TinaMarkdown content={data.page.intro}/>
            {/* {data.about.intro} */}
          {/* {`Historically Black Colleges and Universities (HBCU's) are an oasis of cultural significance, both past and present, and are leading sources for black graduates. However, the fields of Science, Technology, Engineering, and Math (STEM) are still lacking proper representation of minority and underrepresented groups.`}
          <br/><br/>
          {`The HBCU STEM Education Run (STEMER) is a virtual run/walk that strives to raise funds and awareness through fitness. Funds are collected in the form of registration fees, sponsorship money, and pledges. Funds raised will be used to educate, empower, and elevate HBCU students through scholarships and career resources.`} */}
          {/* </p> */}
          <Button href="#hbcuTeam" content={data.page.cta} buttonStyle="black" className="my-5 md:mb-0" />
        </div>
      </section>
      <section id="hbcuTeam" className="scroll-mt-14 md:scroll-mt-24 overflow-clip my-10 bg-repeat md:mb-20" style={{backgroundImage: 'url(/images/customBackground_light.svg)', backgroundSize: '400px'}}>
        <div className="bg-black/[68%] py-10 px-5">
          <SectionTitle content="the team behind hbcu stemer" titleStyle='white-red'className="mb-14"/>
          <ul className="md:grid md:grid-cols-2 md:gap-x-10 max-w-4xl md:mx-auto">
            {data.page.teamMembers.map((member: any, index: number) => {
              return (
                <li key={index}>
                  <TeamMember member={member} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <div className="bg-white">
        <CallToAction />
      </div>
    </>
  )
}


export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'about.md' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  }
}
