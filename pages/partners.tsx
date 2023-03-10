import Button from "@/components/elements/styledbutton";
import Banner from "@/components/sections/banner";
import CollapsableSection from "@/components/sections/collapsableSection";
import { partnersData } from "@/public/utils/data";
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
      <section className="mx-5 mt-10 mb-16 sm-sm:max-w-lg text-justify md:grid-cols-[2fr_3fr] md:grid md:gap-10 md:mx-10 lg:max-w-4xl lg:mx-auto">
        <div className="border-black border rounded-lg my-10 overflow-clip max-w-sm mx-auto">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src="/images/ourPartners_introImage.jpg" alt="" />
        </div>
        <div className="my-10 md:m-auto">
          <p className="font-body ">
          {`What we do would not be possible without our partners! They help fulfill our goals of furthering STEM education through STEM programs, initiatives, and funding.`}
          </p>
          <div className="md:grid md:grid-cols-2">
            {partnersData.map((tab, index) => {
              return (
                <Button key={index} href="#form" content={tab.callToAction} buttonStyle="black" className="my-5 md:mb-0" action={() => goToForm(index)}/>
              )
            })}
          </div>
        </div>
      </section>
      <CollapsableSection currentTab={currentTab} activateTab={activateTab} setOpenForm={setOpenForm} openForm={openForm}/>
    </>
  )
}
