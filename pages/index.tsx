import Button from "@/components/elements/styledbutton";
import Title from "@/components/elements/title";
import Link from "next/link";
import Image from "next/image";
import Countdown from "@/components/elements/countdown";
import CustomBackground from "@/components/elements/customBackground";
import Carousel from "@/components/elements/carousel";
import Hero from "@/components/sections/hero";

export default function Home() {
  const divStyle = "isolate bg-myRed/[0.44] overflow-clip rounded-3xl border border m-5 border-black shadow-md relative place-content-center grid py-5 md:h-full md:m-0";
  const imageStyle = "grayscale mix-blend-overlay h-full w-full object-cover object-center absolute contrast-125 brightness-50"
  const h4Style = "font-display text-xl text-center font-bold uppercase text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]";
  const pStyle = "drop-shadow-md font-body text-center text-white capitalize mt-2";

  return (
    <>
      <Hero />
      <section id="basicInfo" className="scroll-mt-14 md:scroll-mt-24 my-10 max-w-md mx-auto md:grid md:grid-cols-2 md:max-w-4xl md:gap-5 md:my-20 md:px-10">
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
        <div className="md:grid md:grid-rows-2 md:gap-5">
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
      <section id="stats" className="bg-repeat bg-contain" style={{backgroundImage: 'url(/images/customBackground_light.png)'}}>
        <div className="md:pt-20 md:pb-10 md:grid md:grid-cols-2 md:max-w-4xl md:mx-auto">
          <div className="py-10">
            <div className="backdrop-blur-[1px] rounded-3xl max-w-fit mx-auto mb-10 grid gap-10 bg-black/[0.7] p-5">
              <div>
                <p className="text-center font-bold font-display text-3xl text-white">{`150+`}</p>
                <p className="text-center font-body text-white">{`Participants and Donors`}</p>
              </div>
              <div >
                <p className="text-center font-bold font-display text-3xl text-white">{`$5,500+`}</p>
                <p className="text-center font-body text-white">{`in scholarship funds raised`}</p>
              </div>
            </div>
            <Button href="/impact" content="meet our scholars" buttonStyle="black"/>
          </div>
          <Carousel />
        </div>
      </section>
      <section id="previous events" className="mt-10 mb-24 mx-auto w-80 h-52 relative md:my-20 md:h-fit md:max-w-7xl md:w-full md:mb-auto">
        <Link href="/raceinfo#previousevents" className="cursor-default md:grid md:grid-cols-4 md:h-fit md:grid-rows-2">
          <div className="hover:cursor-pointer left-3 isolate top-6 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:left-auto md:order-4 md:top-28 md:w-full md:right-14">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute  object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2021`}</h3>
          </div>
          <div className="hover:cursor-pointer left-1 isolate top-4 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:left-auto md:top-auto md:order-3 md:w-full md:right-7">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2022`}</h3>
          </div>
          <div className="hover:cursor-pointer right-1 isolate top-2 absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-black/[0.30] border border-white md:relative md:right-auto md:top-28 md:order-2 md:w-full md:left-7">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute object-cover mix-blend-overlay w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`2023`}</h3>
          </div>
          <div className="hover:cursor-pointer right-3 isolate absolute overflow-clip rounded-3xl w-full aspect-[4/3] grid place-content-center bg-myRed/[0.30] border border-white md:relative md:right-auto md:top-auto md:order-1 md:w-full md:left-14">
            <img src="/images/placeholders/previousEvents.png" className="grayscale absolute mix-blend-overlay object-cover w-full h-full"/>
            <h3 className="font-display text-blackOutline text-3xl drop-shadow-[2px_2px_0_#ff1616] uppercase font-bold text-center">{`previous events`}</h3>
          </div>
        </Link>
      </section>
      <section id="mission" className="bg-black py-10 max-w-lg mx-auto md:max-w-4xl md:mx-auto md:grid md:grid-cols-[3fr_2fr] md:p-0 md:h-96 md:my-0 lg:h-[35rem]">
        <div className="md:my-auto">
          <Title content="our mission" className="text-myGreen text-center mb-10" />
          <p className="font-body text-white text-sm text-center max-w-xs mx-auto">Educate, empower, and elevate HBCU students through scholarships and career resources</p>
          <Button href="/about" content="meet the team" buttonStyle="white-black" className="my-10 md:mb-0" />
        </div>
        <img src="/images/placeholders/aboutUs_introImage.png" className="px-5 md:p-0 md:object-cover md:h-full"/>
      </section>
    </>
  )
}
