import { getPageInfo } from "@/hooks/getPageInfo";
import Image from "next/image";
import Button from "../elements/styledbutton";
import { milestones } from "@/public/utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function ImpactGame() {
  const pageInfo = getPageInfo();

  const pageTitle = pageInfo.pageTitle;

    return (
      <section className={`pb-12 isolate bg-gradient-to-b from-myRed to-transparent overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 border-black shadow-md relative place-content-center grid`}>
          <div className="mt-5 mb-10">
            <h1 className="mt-10 text-white font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                {pageTitle}
            </h1>
          </div>
          <div className="flex my-10">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="h-10 cursor-pointer mr-10"/>
            <div>
              <div className="hidden">
                <p className="font-body font-bold text-center text-sm text-white">This is a text that invites people to scroll through the race</p>
                <Button content='begin the race' href='' buttonStyle="black"/>
                <Button content='meet our scholars' href='#community' buttonStyle="black" className="hidden"/>
              </div>
              <div className="border border-black my-5 max-w-xs grid divide-y divide-black shadow-[4px_4px_0_black] mx-auto">
                <h3 className="bg-myRed text-white font-title uppercase font-bold px-5 py-3 text-sm">{milestones[0].title}</h3>
                <p className="bg-white font-body p-5 text-sm">{milestones[0].description}</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="h-10 cursor-pointer ml-10"/>
          </div>

          <div className='flex justify-around items-baseline'>
            <div>
              <img src='/images/impact_scene/runningMan_logo.png' className="h-20 -z-10 hidden"/>
              <img src='/images/impact_scene/startingMan_logo.png' className="h-20 -z-10"/>
              <img src='/images/impact_scene/finishMan_logo.png' className="h-32 -z-10 hidden"/>
            </div>
            <div className="h-32">
              <img src='/images/impact_scene/start_banner.png' className="h-full -z-10"/>
              <img src='/images/impact_scene/finish_banner.png' className="h-20 -z-10 hidden"/>
            </div>
          </div>

          <div className="h-full absolute w-full bg-[url('/images/impact_scene/background.png')] bg-cover bg-repeat-x -z-20" style={{backgroundPositionX: '0%', backgroundPositionY: '100%'}}/>
          <div className="h-full absolute w-full bg-[url('/images/impact_scene/midground.png')] bg-cover bg-repeat-x -z-20" style={{backgroundPositionX: '0%', backgroundPositionY: '100%'}}/>
          <div className="h-full absolute w-full bg-[url('/images/impact_scene/ground.png')] bg-cover bg-repeat-x -z-20" style={{backgroundPositionX: '0%', backgroundPositionY: '100%'}}/>
          <div className="h-full absolute w-full bg-[url('/images/impact_scene/foreground.png')] bg-cover bg-repeat-x -z-10" style={{backgroundPositionX: '0%', backgroundPositionY: '100%'}}/>
      </section>
    )
  }
