import CommunityMemberCard from "@/components/elements/communityMemberCard";
import SectionTitle from "@/components/elements/sectionTitle";
import Button from "@/components/elements/styledbutton";
import Banner from "@/components/sections/banner";
import CallToAction from "@/components/sections/callToAction";
import ImpactGame from "@/components/sections/impactGame";
import { communityMembers } from "@/public/utils/data";
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Impact() {
  const scholarsTabIndex = 0;
  const participantsTabIndex = 1;
  const [currentTabIndex, setCurrentTabIndex] = useState(scholarsTabIndex);
  const [focus, setFocus] = useState(false);


  return (
    <>
      <ImpactGame />
      <section className="md:my-20 scroll-mt-10 md:scroll-mt-20" id='community'>
        <div className="my-10 grid gap-10 mx-5 md:my-20">
          <SectionTitle content={`our community`} titleStyle="red-black"/>
          <p className="font-body text-justify md:px-10 md:max-w-5xl md:mx-auto">{`We are grateful for our community of supporters who put their best foot forward to uplift aspiring STEM students.`}</p>
        </div>

        <div className="my-10 md:max-w-7xl md:mx-auto md:px-10">
          <div className="md:grid md:grid-cols-2 z-10 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey w-fit mx-auto py-5 px-10 rounded-t-3xl border border-black border-b-0 grid gap-5 relative -mb-2 overflow-clip">
            {/* titles /tabs */}
            <Button href='' content={communityMembers[scholarsTabIndex].tabTitle} buttonStyle={currentTabIndex === scholarsTabIndex ? 'black' : 'darkerGrey'} action={() => {setCurrentTabIndex(scholarsTabIndex); setFocus(false)}}/>
            <Button href='' content={communityMembers[participantsTabIndex].tabTitle} buttonStyle={currentTabIndex === participantsTabIndex ? 'black' : 'darkerGrey'} action={() => {setCurrentTabIndex(participantsTabIndex); setFocus(false)}}/>
          </div>

          <div>
            <div className="shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey border-y border-black py-10 relative md:border md:shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)]">
              {/* greyed and blured overlay */}
              <div className={`w-screen h-screen z-10 fixed top-0 left-0 bg-black/[0.7] backdrop-blur ${!focus && 'hidden'}`} onClick={() => setFocus(false)}/>
              <FontAwesomeIcon icon={faXmark} mask={faCircle} className={`${!focus && 'hidden'} z-10 text-white h-10 aspect-square fixed top-[9vh] md:top-[30vh] right-5 cursor-pointer drop-shadow-xl`} onClick={() => setFocus(false)}/>

              {/* all of the cards displayed */}
              {communityMembers[currentTabIndex].profiles.length !== 0 && <p className="font-body italic text-center text-sm mb-10 mx-10">Click on each card to learn more about our {currentTabIndex === 0 ? 'scholars' : 'participants'}...</p>}
              <ul className="flex flex-wrap place-content-stretch gap-14 overflow-auto py-4 mx-auto md:overflow-auto px-10 max-w-6xl">
                {communityMembers[currentTabIndex].profiles.length === 0 && <p className="font-body text-center font-bold text-lg w-full">Coming Soon...</p>}
                {communityMembers[currentTabIndex].profiles.map((member : any, index : any) => {
                  return (
                    <li key={index} onClick={() => setFocus(true)} className="w-fit h-fit mx-auto cursor-pointer">
                      <CommunityMemberCard member={member} focusable={focus}/>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
