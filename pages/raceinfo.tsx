import Countdown from "@/components/elements/countdown";
import LargeLogo from "@/components/elements/logos/largeLogo";
import { Button } from "@/components/elements/styledbutton";
import { getPageInfo } from "@/hooks/getPageInfo";
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
        </section>
        <section>
          <p className="font-body my-10 mx-5">
            {`HBCU STEMER is a virtual run/walk that can be done anywhere you like! Race alone, with a friend, or with a team.
            You can select the finisher thank you packet option you would like to receive. Whether you are an HBCU alum/student,
             STEM graduate, or just passionate about education, this run is for you!
             Come join the virtual HBCU STEM Education Run to support STEM education at these crucial institutions.`}
          </p>
          <ul className="flex flex-wrap gap-10 place-content-center justify-items-center">
            {benefits && benefits.map((benefit, index) => {
              return (
                <li key={index} className="max-w-[10rem]">
                  <img src={benefit.imageIcon} className={`aspect-square object-cover drop-shadow-[1px_1px_1px_rgba(0,0,0,0.4)] rounded-full overflow-clip`} />
                  <h3 className="text-center font-display uppercase font-bold text-xl text-black drop-shadow-[1px_1px_0_white] -mt-5">{benefit.title}</h3>
                </li>
              )
            })}
          </ul>
          <Button content="register now" buttonStyle="black" className="my-10"/>
        </section>
      </>
    )
  }
