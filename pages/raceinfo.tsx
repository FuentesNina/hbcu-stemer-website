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
          <p>

          </p>
          <div>
            {benefits && benefits.map((benefit, index) => {
              return (
                <div key={index}>
                  <img src={benefit.imageIcon} className={`aspect-square object-cover h-20 border border-black rounded-full overflow-clip`} />
                  <h3>{benefit.title}</h3>
                </div>
              )
            })}
          </div>
          <Button content="register now" buttonStyle="black"/>
        </section>
      </>
    )
  }
