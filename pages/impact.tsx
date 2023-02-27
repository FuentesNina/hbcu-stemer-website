import { CommunityMemberCard } from "@/components/elements/communityMemberCard";
import { SectionTitle } from "@/components/elements/sectionTitle";
import { Button } from "@/components/elements/styledbutton";
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
      <Banner />
      <section className="md:my-20">
        <div className="my-10 grid gap-10 mx-5 md:my-20">
          <SectionTitle content={`our community`} titleStyle="red-black"/>
          <p className="font-body text-justify md:px-10 md:max-w-5xl md:mx-auto">{`This is a small intro paragraph talking about the people who are impacted by HBCU STEMER`}</p>
        </div>

        <div className="my-10 md:max-w-7xl md:mx-auto md:px-10">
          <div className="md:grid md:grid-cols-2 z-10 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey w-fit mx-auto py-5 px-10 rounded-t-3xl border border-black border-b-0 grid gap-5 relative -mb-2 overflow-clip">
            {/* titles /tabs */}
            <Button content={communityMembers[scholarsTabIndex].tabTitle} buttonStyle={currentTabIndex === scholarsTabIndex ? 'black' : 'darkerGrey'} action={() => {setCurrentTabIndex(scholarsTabIndex); setFocus(false)}}/>
            <Button content={communityMembers[participantsTabIndex].tabTitle} buttonStyle={currentTabIndex === participantsTabIndex ? 'black' : 'darkerGrey'} action={() => {setCurrentTabIndex(participantsTabIndex); setFocus(false)}}/>
          </div>

          <div>
            <div className="shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey border-y border-black py-10 relative md:border md:shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)]">
              {/* greyed and blured overlay */}
              <div className={`w-full h-full z-10 fixed top-0 bg-black/[0.4] backdrop-blur-sm ${!focus && 'hidden'}`} onClick={() => setFocus(false)}/>
              <FontAwesomeIcon icon={faXmark} mask={faCircle} className={`${!focus && 'hidden'} z-10 text-white h-10 aspect-square fixed top-[40vh] right-5 cursor-pointer drop-shadow-xl`} onClick={() => setFocus(false)}/>

              {/* all of the cards displayed */}
              <ul className="flex flex-wrap place-content-stretch gap-14 overflow-auto py-4 mx-auto md:overflow-auto px-10 max-w-6xl">
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
