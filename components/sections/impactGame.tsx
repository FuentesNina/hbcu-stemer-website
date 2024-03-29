import Button from "../elements/styledbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ImpactGame({milestones, navLinks} : {milestones: any, navLinks: any}) {
  const router = useRouter();
  const pathname = router.pathname;
  const filtered = navLinks.filter((pageInfo: any) => pageInfo.path === pathname);
  const pageInfo = filtered[0];
  const pageTitle = pageInfo.pageTitle;

  const [status, setStatus] = useState('start');
  const [currentSlide, setCurrentSlide] = useState(0);
  const indexLimit = milestones.length;

  const startRace = function() {
    if (status === 'end') {
      setStatus('start');
      setCurrentSlide(0);
    } else {
      setStatus('run');
      setCurrentSlide(0);
    }
  }

  const changeSlide = function(direction : number) {
    let nextIndex = currentSlide + direction;

    if (status === 'start' && nextIndex === 1) {
      setStatus('run');
    } else if (status === 'end' && nextIndex === indexLimit - 2) {
      setStatus('run');
    } else if (nextIndex === -1) {
      setStatus('start');
    } else if (nextIndex === indexLimit) {
      setStatus('end');
    } else {
      setCurrentSlide(nextIndex);
    }
  }

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  },[windowWidth])

  useEffect(() => {
    const slideWithKeys = function(event:any) {
      if (event.key === 'ArrowRight') {
        changeSlide(1);
      } else if (event.key === 'ArrowLeft') {
        changeSlide(-1);
      }
    }
    window.addEventListener('keydown', slideWithKeys);

    return () => window.removeEventListener('keydown', slideWithKeys);
  })

  return (
    <section className={`flex flex-col isolate bg-gradient-to-b from-myRed to-transparent overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 border-black shadow-md relative`}>
      <div className="my-5 mt-10 md:mt-20 md:my-10">
        <h1 className=" text-white font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
            {pageTitle}
        </h1>
      </div>
      <div className="md:my-5 md:mt-0 my-5">
        <div className="h-52 grid place-content-center overflow-y-auto">
          <div className={`${status === 'run' && 'hidden'}`}>
            <p className={`${status !== 'start' && 'hidden'} mx-10 drop-shadow-md font-body font-bold text-center text-sm md:max-w-xl md:mx-auto bg-white/[0.6] backdrop-blur rounded-lg p-2`}>{`Click on 'Begin the Race' below and use the left and right arrows to learn about our milestones throughout the years`}</p>
            <Button className={`${status === 'start' && 'animate-pulse'} my-5`} action={startRace} content={status === 'start' ? 'begin the race' : 'start over'} href='' buttonStyle={status === 'start' ? 'black' : 'darkerGrey'}/>
            <Button content='meet our scholars' href='#community' buttonStyle="black" className={`${status !== 'end' && 'hidden'}`}/>
          </div>
          <div className={`${status === 'run' ? 'grid' : 'hidden'} border border-black max-w-xs divide-y divide-black shadow-[4px_4px_0_black] mx-auto`}>
            <h3 className="bg-myRed text-white font-title uppercase font-bold px-5 py-3 text-sm">{milestones[currentSlide]?.title}</h3>
            <p className="bg-white font-body p-5 text-sm">{milestones[currentSlide]?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-5 md:my-0 max-w-4xl md:mx-auto md:w-full">
        <FontAwesomeIcon onClick={() => changeSlide(-1)} icon={faArrowAltCircleLeft} className={`${status !== 'start' ? 'cursor-pointer hover:text-myGreen opacity-100' : 'opacity-50'} ml-5 shrink-0 h-10 mr-10 text-white drop-shadow-[2px_2px_0_black]`}/>
        <FontAwesomeIcon onClick={() => changeSlide(1)} icon={faArrowAltCircleRight} className={`mr-5 shrink-0 h-10 ${status !== 'end' ? 'cursor-pointer hover:text-myGreen opacity-100' : "opacity-50"} ml-10 text-white drop-shadow-[2px_2px_0_black] `}/>
      </div>

      <div className='pointer-events-none select-none flex justify-around items-baseline mb-10 md:mb-10 md:max-w-2xl md:mx-auto md:w-full'>
        <div>
          <Image src='/utils/Impact_scene/startingMan_logo.png' alt="racer in starting position" className={`${status !== 'start' && 'hidden'} -z-10 relative`} width={67.84} height={80}/>
          <Image src='/utils/Impact_scene/runningMan_logo.png' alt="racer running race (hbcu stemer logo)" className={`${status !== 'run' && 'hidden'} -z-10 relative`} width={82} height={80}/>
          <Image src='/utils/Impact_scene/finishMan_logo.png' alt="racer jumping after finishing race" className={`${status !== 'end' && 'hidden'} -z-10 relative animate-bounce`} width={59.59} height={128}/>

        </div>
        <div className={`h-32 ${status === 'end' && 'order-first'}`}>
          <Image alt="Race Start Banner" src='/utils/Impact_scene/start_banner.png' className={`${status !== 'start' && 'hidden'} -z-10 relative`} width={157.63} height={128}/>
          <Image alt="Race Finish Banner" src='/utils/Impact_scene/finish_banner.png' className={`${status !== 'end' && 'hidden'} -z-10 relative`} width={157.63} height={128}/>
        </div>
      </div>

      <div className="h-full absolute w-full bg-[url('/utils/Impact_scene/background.png')] bg-cover impact-lg:bg-contain bg-repeat-x -z-20 transition-all" style={{backgroundPositionX: `${(status === 'start' ? -1 : status === 'end' ? indexLimit : currentSlide) * (windowWidth < 1024 ? 10 : (windowWidth < 1145 ? 50 : -50))}%`}}/>
      <div className="h-full absolute w-full bg-[url('/utils/Impact_scene/midground.png')] bg-cover impact-lg:bg-contain bg-repeat-x -z-20 transition-all" style={{backgroundPositionX: `${(status === 'start' ? -1 : status === 'end' ? indexLimit : currentSlide) * (windowWidth < 1024 ? 25 : (windowWidth < 1145 ? 100 : -100))}%`}}/>
      <div className="h-full absolute w-full bg-[url('/utils/Impact_scene/ground.png')] bg-cover impact-lg:bg-contain bg-repeat-x -z-20 transition-all" style={{backgroundPositionX: `${(status === 'start' ? -1 : status === 'end' ? indexLimit : currentSlide) * (windowWidth < 1024 ? 50 : (windowWidth < 1145 ? 150 : -150))}%`}}/>
      <div className="h-full absolute w-full bg-[url('/utils/Impact_scene/foreground.png')] bg-cover impact-lg:bg-contain bg-repeat-x -z-10 transition-all" style={{backgroundPositionX: `${(status === 'start' ? -1 : status === 'end' ? indexLimit : currentSlide) * (windowWidth < 1024 ? 50 : (windowWidth < 1145 ? 150 : -150))}%`}}/>

      <div className="bg-myGreen h-2 transition-all" style={{width: `${(status === 'start' ? 0 : (currentSlide + 1))/(indexLimit) * 100}%`}}/>
    </section>
  )
}
