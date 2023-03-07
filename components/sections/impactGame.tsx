import { getPageInfo } from "@/hooks/getPageInfo";
import Image from "next/image";
import Button from "../elements/styledbutton";
import { milestones } from "@/public/utils/data";

export default function ImpactGame() {
  const pageInfo = getPageInfo();

  const pageTitle = pageInfo.pageTitle;
  const bannerImage= `bg-[url('/images/placeholders/ourImpact_background.png')]`;
  const title = `${pageInfo.bannerImage};

    return (
      <section className={`isolate bg-gradient-to-b from-myRed to-transparent overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 border-black shadow-md relative place-content-center grid`}>
          <div className={`bg-[url('/images/placeholders/ourImpact_background.png')]`}>

          </div>
          <div>
            <h1 className="mt-10 text-white font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                {pageTitle}
            </h1>
            <p className="mx-10 font-body font-bold text-center text-sm text-white my-5">This is a text that invites people to scroll through the race</p>
            <Button content='begin the race' href='' buttonStyle="black"/>
            <Button content='meet our scholars' href='#community' buttonStyle="black" className="hidden"/>
          </div>
          <div>
            <div className="border border-black my-5 max-w-xs grid divide-y divide-black">
                <h3 className="bg-myRed text-white font-title uppercase font-bold px-5 py-3">{milestones[0].title}</h3>
                <p className="bg-white font-body p-5">{milestones[0].description}</p>
            </div>
          </div>
          <div>

          </div>
      </section>
    )
  }
