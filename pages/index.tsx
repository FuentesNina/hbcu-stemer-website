import LargeLogo from "@/components/elements/logos/largeLogo";
import { Button } from "@/components/elements/styledbutton";
import { Title } from "@/components/elements/title";
import Link from "next/link";
import { partnersData } from "@/public/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "@/components/elements/countdown";
import CustomBackground from "@/components/elements/customBackground";
import { Carousel } from "@/components/elements/carousel";
import { SectionTitle } from "@/components/elements/sectionTitle";

export default function Home() {
  const divStyle = "isolate bg-myRed/[0.44] overflow-clip rounded-3xl border border m-5 border-black shadow-md relative place-content-center grid py-5";
  const imageStyle = "grayscale mix-blend-overlay h-full w-full object-cover object-center absolute contrast-125 brightness-50"
  const h4Style = "font-display text-xl text-center font-bold uppercase text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]";
  const pStyle = "drop-shadow-md font-body text-center text-white capitalize mt-2";

  return (
    <>
      <section id="hero" className="bg-black">
        <div className="md:grid md:grid-cols-[3fr_2fr] md:pt-20 md:max-w-3xl md:mx-auto md:gap-10 md:px-5">
          <div className="max-w-xs mx-auto md:w-full">
            <LargeLogo color="white"  className="py-10 md:pt-0"/>
            <p className="capitalize font-body text-white text-center text-xl">{`empower potential`}</p>
            <Link href="#basicInfo">
              <Button content="learn more" buttonStyle="red" className="my-10 md:pb-0"/>
            </Link>
          </div>
          <div className="aspect-video max-w-md mx-auto md:w-full md:my-auto md:order-first">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o5caqBTLK4k?controls=0&autoplay=1&mute=1" title="HBCU STEMER Website Intro Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false} />
          </div>
        </div>
        <div className="py-10">
          <Title content="sponsored by" className="text-white text-sm text-center"/>
          <ul className="flex gap-10 justify-center mt-10 flex-wrap">
            {partnersData[0].companies.map((company, index) => {
              return (
                <li key={index}>
                  <img src={company.logo} className="h-10"/>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <section id="basicInfo" className="scroll-mt-14 md:scroll-mt-24 my-10 max-w-md mx-auto">
        <div>
          <Link href="/raceinfo" className="h-screen w-screen bg-red-100">
            <div className={`${divStyle} grid`}>
              <Image className={`${imageStyle} object-top`} fill src="/images/raceInfo_Banner.jpeg" alt=""/>
              <div className="my-10">
                <h4 className={h4Style}>{`register now`}</h4>
                <p className={pStyle}>{`join the STEM education run`}</p>
              </div>
              <Countdown />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className={divStyle}>
              <Image className={imageStyle} fill src="/images/pledgeImage.png" alt=""/>
              <h4 className={h4Style}>{`pledge`}</h4>
              <p className={pStyle}>{`Donate funds to support HBCU's`}</p>
            </div>
          </Link>
          <Link href="/partners">
          <div className={divStyle}>
              <Image className={imageStyle} fill src="/images/ourPartners_Banner.jpg" alt=""/>
              <h4 className={h4Style}>{`sponsor`}</h4>
              <p className={pStyle}>{`Support STEM Education`}</p>
            </div>
          </Link>
        </div>
      </section>
      <section id="stats">
        <CustomBackground factor={2} color="white" backgroundColor="#d9d9d9">
            <div>
              <div className="py-10">
                <div className="backdrop-blur-[1px] rounded-3xl max-w-fit mx-auto mb-10 grid gap-10">
                  <div>
                    <p className="text-center font-bold font-display text-3xl">{`120`}</p>
                    <p className="text-center font-body">{`Participants and Donors`}</p>
                  </div>
                  <div >
                    <p className="text-center font-bold font-display text-3xl">{`$12,340`}</p>
                    <p className="text-center font-body">{`in scholarship funds raised`}</p>
                  </div>
                </div>
                <Link href="/impact" >
                  <Button content="meet our scholars" buttonStyle="black"/>
                </Link>
              </div>
              <Carousel />
            </div>
        </CustomBackground>
      </section>
      <section id="previous events" className="mt-10 mb-16 mx-auto w-80 h-52 relative">
        <Link href="/raceinfo#previousevents" className="cursor-default">
          <div className="hover:cursor-pointer left-3 isolate top-6 absolute overflow-clip rounded-3xl w-80 h-52 grid place-content-center bg-black/[0.30] border border-white">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute mix-blend-overlay"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2022`}</h3>
          </div>
          <div className="hover:cursor-pointer left-1 isolate top-4 absolute overflow-clip rounded-3xl w-80 h-52 grid place-content-center bg-black/[0.30] border border-white">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute mix-blend-overlay"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2022`}</h3>
          </div>
          <div className="hover:cursor-pointer right-1 isolate top-2 absolute overflow-clip rounded-3xl w-80 h-52 grid place-content-center bg-black/[0.30] border border-white">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute mix-blend-overlay"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2022`}</h3>
          </div>
          <div className="hover:cursor-pointer right-3 isolate absolute overflow-clip rounded-3xl w-80 h-52 grid place-content-center bg-myRed/[0.30] border border-white">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`previous events`}</h3>
          </div>
        </Link>
      </section>
      <section id="mission" className="bg-black py-10 max-w-lg mx-auto">
        <div>
          <Title content="our mission" className="text-myGreen text-center mb-10" />
          <p className="font-body text-white text-sm text-center max-w-xs mx-auto">Educate, empower, and elevate HBCU students through scholarships and career resources</p>
          <Link href="/about" >
            <Button content="meet the team" buttonStyle="white-black" className="my-10" />
          </Link>
        </div>
        <img src="/images/placeholders/aboutUs_introImage.png" className="px-5"/>
      </section>
    </>
  )
}
