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
  const keys = Object.keys(communityMembers);
  const [category, setCategory] = useState(keys[0]);
  const [focus, setFocus] = useState(false);


  return (
    <>
      <ImpactGame />
      <Banner />
      <section>
        <div className="my-10 grid gap-10 mx-5">
          <SectionTitle content={`our community`} titleStyle="red-black"/>
          <p className="font-body text-justify">{`This is a small intro paragraph talking about the people who are impacted by HBCU STEMER`}</p>
        </div>

        <div className="my-10">
          <div className="z-10 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey w-fit mx-auto py-5 px-10 rounded-t-3xl border border-black border-b-0 grid gap-5 relative -mb-2 overflow-clip">
            {/* titles /tabs */}
            <Button content="our scholars" buttonStyle={category === keys[0] ? 'black' : 'darkerGrey'} action={() => {setCategory(keys[0]); setFocus(false)}}/>
            <Button content="race hall of fame" buttonStyle={category === keys[1] ? 'black' : 'darkerGrey'} action={() => {setCategory(keys[1]); setFocus(false)}}/>
          </div>

          <div>
            <div className="shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] bg-myLightGrey border-y border-black py-10 relative">
              {/* greyed and blured overlay */}
              <div className={`w-full h-full z-10 fixed top-0 bg-black/[0.4] backdrop-blur-sm ${!focus && 'hidden'}`} onClick={() => setFocus(false)}/>
              <FontAwesomeIcon icon={faXmark} mask={faCircle} className={`${!focus && 'hidden'} z-10 text-white h-10 aspect-square fixed top-[40vh] right-5 cursor-pointer drop-shadow-xl`} onClick={() => setFocus(false)}/>

               {/* all of the cards displayed */}
              <ul className="flex flex-wrap gap-14 h-[70vh] overflow-auto py-4 mx-auto md:overflow-auto max-w-4xl px-10 md:h-fit">
                {communityMembers[category].map((member : any, index : any) => {
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
