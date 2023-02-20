import { partnersData } from "@/public/utils/data"
import { useState } from "react"
import { Title } from "../elements/title";
import AccordionItem from "../elements/accordionItem";

export default function CollapsableSection() {
  const [currentTab, setCurrentTab] = useState(partnersData[0].tabTitle)
  const [tabIntro, setTabIntro] = useState(partnersData[0].intro);
  const [currentCompanies, setCurrentCompanies] = useState(partnersData[0].companies);

  return (
    <section>
      <div className="flex place-content-center">
        {partnersData.map(tab => {
          let tabStyle : string;

          if (tab.tabTitle === currentTab) {
            tabStyle = "text-myRed bg-myLightGrey p-5";
          } else {
            tabStyle = "text-black font-normal bg-myDarkGrey p-5";
          }
          return (
            <Title content={tab.tabTitle} className={`${tabStyle} border-2 border-black border-b-0 max-w-fit"`} />
          )
        })}
      </div>
      <div className = "w-screen bg-myLightGrey border-y-2 border-black p-5" >
          {/* intro - origin depends on tab */}
          <p className="font-body my-5">{tabIntro}</p>
          {/* companies - should use map*/}
          <ul>
            {currentCompanies.map((company, index) => {
              const listKey = `${company} + ${index}`;

              return (
                <li key={listKey} className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  <AccordionItem company={company}/>
                </li>
              )
            })}
          </ul>
          {/* form */}
      </div>
    </section>
  )
}
