import Countdown from "@/components/elements/countdown";
import LargeLogo from "@/components/elements/logos/largeLogo";
import PastEventCard from "@/components/elements/pastEventsCard";
import RaceTicketCard from "@/components/elements/raceTicketCard";
import SectionTitle from "@/components/elements/sectionTitle";
import Button from "@/components/elements/styledbutton";
import FAQ from "@/components/sections/faq";
import Image from "next/image";
import { useTina } from 'tinacms/dist/react';
import client from '@/.tina/__generated__/client';
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useRouter } from "next/router";


export default function RaceInformation({sharedData,...props} : {sharedData: any, data: any, variables: any, query: any}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const benefits = data.page.benefits;
  const raceDay = data.page.raceDay;
  const introText = data.page.raceInfoIntro;
  const introCTA = data.page.cta;
  const otherOptionsText = data.page.otherOptions;
  const donationCTA = data.page.donateCTA;
  const donationLink = data.page.donate;
  const sponsorStudentCTA = data.page.sponsorStudentCTA;
  const sponsorStudentLink = data.page.sponsorStudent;
  const pastEvents = data.page.pastEvents;
  const faq = sharedData.faq;
  const navLinks = sharedData.navLinks;


  const raceTickets = data.page.tickets;

  const router = useRouter();
  const pathname = router.pathname;
  const filtered = navLinks.filter((pageInfo: any) => pageInfo.path === pathname);
  const pageInfo = filtered[0];
  const bannerImage= pageInfo.bannerImage;
  const bannerImageLarge= pageInfo.bannerImageLarge;
  const bannerImageAlt = pageInfo.bannerImageAlt;

  let nthChild = -1;

    return (
      <>
        <section className={`md:h-80 md:py-auto py-5 md:px-10 isolate bg-myRed/[0.44] overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 border-black shadow-md relative `}>
            <Image className="border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center  md:object-top lg:object-top absolute lg:hidden" fill src={bannerImage} alt={bannerImageAlt} priority sizes="100vw"/>
            <Image className="border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center md:object-top lg:object-center hidden absolute lg:block" fill src={bannerImageLarge ? bannerImageLarge : ''} alt={bannerImageAlt} priority sizes="99vw"/>
            <div className="md:flex md:justify-between md:max-w-6xl lg:mx-auto place-content-center grid">
            <h1><span className="hidden">HBCU Education Run Info Page</span>
              <LargeLogo className="py-14 w-full drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" color="white"/>
            </h1>
              <Countdown raceDay={raceDay}/>
            </div>
            <Button href="#raceDetails" content="learn more" buttonStyle="white-red" className="md:hidden my-10 relative"/>
        </section>
        <section id='raceDetails' className="scroll-mt-20 md:scroll-mt-28 md:mx-10 md:my-20 lg:max-w-4xl lg:mx-auto lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="md:my-auto">
            <div className="font-body my-10 mx-5 text-justify">
              <TinaMarkdown content={introText} />
            </div>
            <Button href="#tickets" content={introCTA} buttonStyle="black" className="my-10"/>
          </div>
          <ul className="flex flex-wrap gap-10 place-content-center justify-items-center my-10 lg:grid lg:grid-cols-2 lg:gap-y-5 lg:gap-x-0">
            {benefits && benefits.map((benefit: any, index: number) => {
              return (
                <li key={index} className="w-[10rem]">
                  <div className={`relative aspect-square w-full drop-shadow-[1px_1px_1px_rgba(255,22,22,1)] rounded-full overflow-clip`}>
                    {benefit?.imageIcon && <Image src={benefit.imageIcon} alt="" fill className="object-cover" sizes="50vw"/>}
                  </div>
                  <h3 className="text-center font-display uppercase font-bold text-xl text-black drop-shadow-[2px_2px_0_white] -mt-4">{benefit.title}</h3>
                </li>
              )
            })}
          </ul>
        </section>
        <section id="tickets" className="bg-myLightGrey py-10 scroll-mt-10 md:scroll-mt-20">
            <SectionTitle content="choose your event" titleStyle="red-black" className=""/>
            <ul className="my-10 lg:max-w-7xl lg:mx-auto md:flex md:gap-10 md:justify-center md:px-10 md:flex-wrap">
              {raceTickets.map((ticket: any, index: number) => {
                return (
                  <li key={index} className="md:m-0">
                    <RaceTicketCard ticket={ticket}/>
                  </li>
                )
              })}
            </ul>
            <div className="md:flex md:items-center md:mt-14 md:px-10 md:max-w-4xl md:mx-auto">
              <p className="text-center font-body font-bold max-w-xs mx-auto mt-14 md:mt-0 md:max-w-none">{otherOptionsText}</p>
              <div className="md:flex md:items-center md:grow">
                <Button href={donationLink} content={donationCTA} buttonStyle="white-red" className="my-5 md:my-0 "/>
                <Button href={sponsorStudentLink} content={sponsorStudentCTA} buttonStyle="white-red" className="my-5 md:my-0"/>
              </div>
            </div>
        </section>
        <section id="previousevents" className="my-20 scroll-mt-10 md:scroll-mt-20 md:px-10 md:max-w-7xl md:mx-auto">
          <SectionTitle content="previous events" titleStyle="black-red"/>
          <ul>
            {pastEvents.map((event: any, index: number) => {
              if (event.type === 'event') nthChild++;

              return (
                <li key={index}>
                  <PastEventCard event={event} nthChild={nthChild}/>
                </li>
              )
            })}
          </ul>
        </section>
        <FAQ faq={faq}/>
      </>
    )
  }


  export const getStaticProps = async () => {
    const pageResponse = await client.queries.page({ relativePath: 'raceinfo.md' })

    return {
      props: {
        data: pageResponse.data,
        query: pageResponse.query,
        variables: pageResponse.variables,
      },
    }
  }
