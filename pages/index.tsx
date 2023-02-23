import LargeLogo from "@/components/elements/logos/largeLogo";
import { Button } from "@/components/elements/styledbutton";
import { Title } from "@/components/elements/title";
import Link from "next/link";
import { partnersData } from "@/public/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "@/components/elements/countdown";
import CustomBackground from "@/components/elements/customBackground";

export default function Home() {
  const divStyle = "isolate bg-myRed/[0.44] overflow-clip rounded-3xl border border m-5 border-black shadow-md relative place-content-center grid py-5";
  const imageStyle = "grayscale mix-blend-overlay h-full w-full object-cover object-center absolute contrast-125 brightness-50"
  const h4Style = "font-display text-xl text-center font-bold uppercase text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]";
  const pStyle = "drop-shadow-md font-body text-center text-white capitalize mt-2";

  return (
    <>
      <section className="bg-black">
        <div>
          <div className="max-w-xs mx-auto">
            <LargeLogo color="white"  className="py-10 "/>
            <p className="capitalize font-body text-white text-center text-xl">{`empower potential`}</p>
            <Link href="#basicInfo">
              <Button content="learn more" buttonStyle="red" className="my-10"/>
            </Link>
          </div>
          <div className="aspect-video">
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
      <section id="basicInfo" className="scroll-mt-14 md:scroll-mt-24">
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
              <div>
                <div>
                  <p>{120}</p>
                  <p>{`Participants and Donors`}</p>
                </div>
                <Link href="/impact" >
                  <Button content="meet out scholars" buttonStyle="black"/>
                </Link>
              </div>
              <div>

              </div>
            </div>
        </CustomBackground>
      </section>
      <section id="previous events">

      </section>
      <section id="mission">

      </section>
    </>
  )
}
