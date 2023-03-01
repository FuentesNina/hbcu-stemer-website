import { faq } from "@/public/utils/data";
import AccordionItem from "../elements/accordionItem";
import SectionTitle from "../elements/sectionTitle";

export default function FAQ() {
  return (
    <section>
      <SectionTitle content="frequently asked questions" titleStyle="black-red"/>
      <div className = "my-10 bg-myLightGrey p-5 border-y-2 border-black relative z-20 md:px-10 md:border-2 md:drop-shadow-[8px_8px_0px_#000000] lg:max-w-4xl lg:mx-auto" >
          <ul>
            {faq.map((accordionItem: {question: string; answer :string}, index: number) => {
              const listKey = `${accordionItem.question} + ${index}`;

              return (
                <li key={listKey} className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  <AccordionItem accordionItem={accordionItem}/>
                </li>
              )
            })}
          </ul>

      </div>
    </section>
  )
}
