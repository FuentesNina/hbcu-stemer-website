import Countdown from "@/components/elements/countdown";
import LargeLogo from "@/components/elements/logos/largeLogo";
import PastEventCard, { PastEvent } from "@/components/elements/pastEventsCard";
import RaceTicketCard from "@/components/elements/raceTicketCard";
import SectionTitle from "@/components/elements/sectionTitle";
import Button from "@/components/elements/styledbutton";
import FAQ from "@/components/sections/faq";
import { getPageInfo } from "@/hooks/getPageInfo";
import { pastEvents, raceTickets } from "@/public/utils/data";
import Image from "next/image";

export default function RaceInformation() {
  const pageInfo = getPageInfo();

  const bannerImage= pageInfo.bannerImage;
  const benefits = pageInfo.runBenefits;

    return (
      <>
        <section className={`py-5 isolate bg-myRed/[0.44] overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 border-black shadow-md relative place-content-center grid`}>
            <Image className="border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute" fill src={bannerImage} alt=""/>
            <h1><span className="hidden"></span>
              <LargeLogo className="py-14 w-full drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" color="white"/>
            </h1>
            <Countdown />
            <Button href="#raceDetails" content="learn more" buttonStyle="white-red" className="my-10 relative"/>
        </section>
        <section id='raceDetails' className="scroll-mt-20 md:scroll-mt-28">
          <p className="font-body my-10 mx-5">
            {`HBCU STEMER is a virtual run/walk that can be done anywhere you like! Race alone, with a friend, or with a team.
            You can select the finisher thank you packet option you would like to receive. Whether you are an HBCU alum/student,
             STEM graduate, or just passionate about education, this run is for you!
             Come join the virtual HBCU STEM Education Run to support STEM education at these crucial institutions.`}
          </p>
          <Button href="#tickets" content="register now" buttonStyle="black" className="my-10"/>
          <ul className="flex flex-wrap gap-10 place-content-center justify-items-center my-10">
            {benefits && benefits.map((benefit, index) => {
              return (
                <li key={index} className="max-w-[10rem]">
                  <img src={benefit.imageIcon} className={`aspect-square object-cover drop-shadow-[1px_1px_1px_rgba(255,22,22,1)] rounded-full overflow-clip`} />
                  <h3 className="text-center font-display uppercase font-bold text-xl text-black drop-shadow-[2px_2px_0_white] -mt-4">{benefit.title}</h3>
                </li>
              )
            })}
          </ul>
        </section>
        <section id="tickets" className="bg-myLightGrey py-10 scroll-mt-10 md:scroll-mt-20">
            <SectionTitle content="choose your event" titleStyle="red-black" className=""/>
            <ul className="my-10">
              {raceTickets.map((ticket, index) => {
                return (
                  <li key={index}>
                    <RaceTicketCard ticket={ticket}/>
                  </li>
                )
              })}
            </ul>
            <div>
              <p className="text-center font-body font-bold max-w-xs mx-auto mt-14">{`Don't want to run... but still want to support?`}</p>
              <Button href="https://runsignup.com/Race/Donate/AL/Anywhere/HBCUSTEMER" content='donate' buttonStyle="white-red" className="my-5"/>
              <Button href="https://runsignup.com/Race/Donate/AL/Anywhere/HBCUSTEMER" content='support a student' buttonStyle="white-red" className="my-5"/>
            </div>
        </section>
        <section id="previousevents" className="my-20">
          <SectionTitle content="previous events" titleStyle="black-red"/>
          <ul>
            {pastEvents.map((event, index) => {
              return (
                <li key={index}>
                  <PastEventCard event={event} />
                </li>
              )
            })}
          </ul>
        </section>
        <FAQ />
      </>
    )
  }
