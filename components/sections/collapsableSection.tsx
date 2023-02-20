import { partnersData } from "@/public/utils/data"
import { useState } from "react"
import { Title } from "../elements/title";
import AccordionItem from "../elements/accordionItem";
import AccordionForm from "../elements/accordionForm";

export default function CollapsableSection() {
  const [currentTab, setCurrentTab] = useState(partnersData[0]);

  const activateTab = function(index: number) {
    setCurrentTab(partnersData[index]);
  }

  return (
    <section>
      <div className="flex place-content-center">
        {partnersData.map((tab, index) => {
          let tabStyle : string;
          const listKey = `${tab} + ${index}`;

          if (tab.tabTitle === currentTab.tabTitle) {
            tabStyle = "text-myRed bg-myLightGrey p-5";
          } else {
            tabStyle = "text-black font-normal bg-myDarkGrey p-5";
          }
          return (
            <Title key={listKey} action={() => activateTab(index)} content={tab.tabTitle} className={`${tabStyle} border-2 border-black border-b-0 max-w-fit"`} />
          )
        })}
      </div>
      <div className = "w-screen bg-myLightGrey border-y-2 border-black p-5" >
          <p className="font-body my-5">{currentTab.intro}</p>
          <ul>
            {currentTab.companies.map((company, index) => {
              const listKey = `${company} + ${index}`;

              return (
                <li key={listKey} className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  <AccordionItem company={company}/>
                </li>
              )
            })}
            <li className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
              <AccordionForm company={currentTab.companies[0]}/>
            </li>
          </ul>

      </div>
    </section>
  )
}
