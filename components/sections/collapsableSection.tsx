import { partnersData } from "@/public/utils/data"
import { Subtitle } from "../elements/subtitle";
import AccordionItem from "../elements/accordionItem";
import AccordionForm from "../elements/accordionForm";

export default function CollapsableSection({currentTab, activateTab, setOpenForm, openForm} : {activateTab: Function, currentTab: any, setOpenForm: Function, openForm: boolean}) {

  return (
    <section className="md:mb-10 md:mx-10">
      <div className="flex place-content-center">
        {partnersData.map((tab, index) => {
          let tabStyle : string;
          let afterStyle = "";
          const listKey = `${tab} + ${index}`;

          if (tab.tabTitle === currentTab.tabTitle) {
            tabStyle = "text-myRed bg-myLightGrey z-30 relative top-0.5 ";
            afterStyle = `after:top-3`;
          } else {
            tabStyle = `text-black font-normal bg-[#909090] relative top-2 z-10 ${ index === 0 ? "left-4" : "-left-1"}`;
            afterStyle = `after:-left-1 after:top-4`;
          }
          return (
            <div key={listKey} className={`flex after:w-2 after:bg-black after:relative ${index === 0 ? "after:top-2" : `${afterStyle}`}`}>
              <Subtitle action={() => activateTab(index)} content={tab.tabTitle} className={`${tabStyle} border-2 border-black border-b-0 py-3 px-5 max-w-fit`}/>
            </div>
          )
        })}
      </div>
      <div className = "bg-myLightGrey p-5 border-y-2 border-black relative z-20 md:border-2 md:drop-shadow-[8px_8px_0px_#000000] lg:max-w-4xl lg:mx-auto" >
          <p className="font-body mt-5 mb-10">{currentTab.intro}</p>
          <ul>
            {currentTab.companies.map((company: any, index: number) => {
              const listKey = `${company} + ${index}`;

              return (
                <li key={listKey} className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  <AccordionItem company={company}/>
                </li>
              )
            })}
            <li id="form" className="scroll-mt-14 my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
              <AccordionForm form={currentTab.form} setOpenForm={setOpenForm} openForm={openForm}/>
            </li>
          </ul>

      </div>
    </section>
  )
}
