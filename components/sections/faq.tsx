import AccordionItem from "../elements/accordionItem";
import SectionTitle from "../elements/sectionTitle";

export default function FAQ({faq} : {faq:any}) {

  return (
    <section className="md:mb-10 md:mx-10 lg:max-w-4xl lg:mx-auto">
      <SectionTitle content="frequently asked questions" titleStyle="black-red"/>
      <div className = "my-10 bg-myLightGrey p-5 border-y-2 border-black relative md:px-10 md:border-2 md:drop-shadow-[8px_8px_0px_#000000]" >
          <ul>
            {faq.map((accordionItem: any, index: number) => {
              const listKey = `${accordionItem?.question} + ${index}`;

              return (
                <li key={listKey} className="my-5 bg-white rounded-3xl p-5 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                  {accordionItem && <AccordionItem accordionItem={accordionItem}/>}
                </li>
              )
            })}
          </ul>

      </div>
    </section>
  )
}
