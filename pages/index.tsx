import Button from "@/components/elements/styledbutton";
import Title from "@/components/elements/title";
import Link from "next/link";
import Image from "next/image";
import Countdown from "@/components/elements/countdown";
import Carousel from "@/components/elements/carousel";
import Hero from "@/components/sections/hero";
import { useTina } from 'tinacms/dist/react';
import client from '@/.tina/__generated__/client';

export default function Home({sharedData,...props} : {sharedData: any, data: any, variables: any, query: any, raceData: any}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const companies = sharedData.sponsors;
  const communityMembers = sharedData.scholars
  const heroData = data.page.heroSection;
  const CTAs = data.page.mainCTA;
  const stats = data.page.stats;
  const pastEvents = data.page.pastEvents;
  const mission = data.page.mission;
  const donateLink = props.raceData.page.donate;

  const divStyle = "hover:scale-105 isolate bg-myRed/[0.44] overflow-clip rounded-3xl border border m-5 border-black shadow-md relative place-content-center grid py-5 md:h-full md:m-0";
  const imageStyle = "grayscale mix-blend-overlay h-full w-full object-cover object-center absolute contrast-125 brightness-50"
  const h4Style = "font-display text-xl text-center font-bold uppercase text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]";
  const pStyle = "drop-shadow-md font-body text-center text-white capitalize mt-2";

  return (
    <>
      <Hero heroData={heroData} companies={companies} />
      <section id="basicInfo" className="scroll-mt-14 md:scroll-mt-24 my-10 max-w-md mx-auto md:grid md:grid-cols-2 md:max-w-4xl md:gap-5 md:my-20 md:px-10">
        <div>
          <Link href="/raceinfo" className="h-screen w-screen bg-red-100">
            <div className={`${divStyle} grid`}>
              <Image className={`${imageStyle} object-top`} fill src={CTAs[0].image} alt={CTAs[0].alt} sizes="70vw" priority/>
              <div className="my-10">
                <h4 className={h4Style}>{CTAs[0].name}</h4>
                <p className={pStyle}>{CTAs[0].description}</p>
              </div>
              <Countdown raceDay={sharedData.raceDay}/>
            </div>
          </Link>
        </div>
        <div className="md:grid md:grid-rows-2 md:gap-5">
          <Link href={donateLink}>
            <div className={divStyle}>
              <Image className={imageStyle} fill src={CTAs[1].image} alt={CTAs[1].alt} sizes="70vw"/>
              <h4 className={h4Style}>{CTAs[1].name}</h4>
              <p className={pStyle}>{CTAs[1].description}</p>
            </div>
          </Link>
          <Link href="/partners">
            <div className={divStyle}>
            <Image className={imageStyle} fill src={CTAs[2].image} alt={CTAs[2].alt} sizes="70vw"/>
              <h4 className={h4Style}>{CTAs[2].name}</h4>
              <p className={pStyle}>{CTAs[2].description}</p>
            </div>
          </Link>
        </div>
      </section>
      <section id="stats" className="bg-repeat" style={{backgroundImage: `url(${sharedData.customBackground})`, backgroundSize: '400px'}}>
        <div className="md:pt-20 md:pb-10 md:grid md:grid-cols-2 md:max-w-4xl md:mx-auto">
          <div className="py-10">
            <div className="backdrop-blur-[1px] rounded-3xl max-w-fit mx-auto mb-10 grid gap-10 bg-black/[0.7] p-5">
              <div>
                <p className="text-center font-bold font-display text-3xl text-white">{stats.stat1}</p>
                <p className="text-center font-body text-white">{stats.stat1Description}</p>
              </div>
              <div >
              <p className="text-center font-bold font-display text-3xl text-white">{stats.stat2}</p>
                <p className="text-center font-body text-white">{stats.stat2Description}</p>
              </div>
            </div>
            <Button href="/impact" content={stats.cta} buttonStyle="black"/>
          </div>
          <Carousel communityMembers={communityMembers}/>
        </div>
      </section>
      <section id="previous events" className="mt-10 mb-24 mx-auto w-80 h-52 relative md:my-20 md:h-fit md:max-w-7xl md:w-full md:mb-auto">
        <Link href="/raceinfo#previousevents" className="cursor-default md:grid md:grid-cols-4 md:h-fit md:grid-rows-2">
          <div className="hover:cursor-pointer hover:scale-105 left-3 isolate top-6 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:left-auto md:order-4 md:top-28 md:w-full md:right-14">
            <img src={pastEvents[3].picture} alt={pastEvents[3].alt} className="grayscale absolute object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{pastEvents[3].title}</h3>
          </div>
          <div className="hover:cursor-pointer hover:scale-105 left-1 isolate top-4 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:left-auto md:top-auto md:order-3 md:w-full md:right-7">
            <img src={pastEvents[2].picture} alt={pastEvents[2].alt} className="grayscale absolute object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{pastEvents[2].title}</h3>
          </div>
          <div className="hover:cursor-pointer hover:scale-105 right-1 isolate top-2 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:right-auto md:top-28 md:order-2 md:w-full md:left-7">
            <img src={pastEvents[1].picture} alt={pastEvents[1].alt} className="grayscale absolute object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{pastEvents[1].title}</h3>
          </div>
          <div className="hover:cursor-pointer hover:scale-105 right-3 isolate absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-myRed/[0.30] border border-white md:relative md:right-auto md:top-auto md:order-1 md:w-full md:left-14">
            <img src={pastEvents[0].picture} alt={pastEvents[0].alt} className="grayscale absolute mix-blend-overlay object-cover w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{pastEvents[0].title}</h3>
          </div>
        </Link>
      </section>
      <section id="mission" className="bg-black py-10 max-w-lg mx-auto md:max-w-4xl md:mx-auto md:grid md:grid-cols-[3fr_2fr] md:p-0 md:h-96 md:my-0 lg:h-[35rem]">
        <div className="md:my-auto">
          <Title content={mission.title} className="text-myGreen text-center mb-10" />
          <p className="font-body text-white text-sm text-center max-w-xs mx-auto">{mission.mission}</p>
          <Button href="/about" content={mission.button} buttonStyle="white-black" className="my-10 md:mb-0" />
        </div>
        <img src={mission.image} alt={mission.alt} className="px-5 md:p-0 md:object-cover md:h-full"/>
      </section>
    </>
  )
}


export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'home.md' })
  const raceResponse = await client.queries.page({ relativePath: 'raceinfo.md' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
      raceData: raceResponse.data
    },
  }
}
