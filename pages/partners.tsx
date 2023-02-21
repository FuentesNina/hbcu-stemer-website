import { Button } from "@/components/elements/styledbutton";
import Banner from "@/components/sections/banner";
import CollapsableSection from "@/components/sections/collapsableSection";
import { partnersData } from "@/public/utils/data";
import Link from "next/link";
import { useState } from "react";

export default function Partners() {
  const [currentTab, setCurrentTab] = useState(partnersData[0]);
  const [openForm, setOpenForm] = useState(false);

  const activateTab = function(index: number) {
    setCurrentTab(partnersData[index]);
    setOpenForm(false);
  }

  const goToForm = function (index: number) {
    setCurrentTab(partnersData[index]);
    setOpenForm(true);
  }

  return (
    <>
      <Banner/>
      <div className="mt-10 mb-16 md:grid-cols-[2fr_3fr] md:grid md:gap-10 md:mx-10 lg:max-w-4xl lg:mx-auto">
        <div className="border-black border rounded-lg my-10 overflow-clip max-w-sm mx-auto">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src="/images/placeholders/ourPartners_introImage.jpg" alt="" />
        </div>
        <div className="mx-5 my-10 md:my-auto">
          <p className="font-body ">
          {`This is a small paragraph talking about how HBCU STEMER would not be possible without it's Sponsors and HBCU Partners.
          This is a small paragraph talking about how HBCU STEMER would not be possible without it's Sponsors and HBCU Partners.`}
          </p>
          <div className="md:grid md:grid-cols-2">
            {partnersData.map((tab, index) => {
              return (
                <Link key={index} href="#form">
                  <Button content={tab.callToAction} buttonStyle="black" className="my-5 md:mb-0" action={() => goToForm(index)}/>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <CollapsableSection currentTab={currentTab} activateTab={activateTab} setOpenForm={setOpenForm} openForm={openForm}/>
    </>
  )
}
