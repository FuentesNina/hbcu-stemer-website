import SectionTitle from "../elements/sectionTitle";
import Button from "../elements/styledbutton";

export default function CallToAction({cta} : {cta: any}) {

  return (
      <section className="md:px-5">
        <div className="bg-black rounded-xl md:mx-auto mx-5 px-5 py-10 max-w-4xl  md:mb-10">
          <SectionTitle content={cta.title} titleStyle="white-red"/>
          <div className="md:flex md:gap-10 md:mx-5">
            <div>
              <p className="text-white font-body text-sm my-10 text-justify">{cta.text}</p>
              <Button href="/raceinfo" content={cta.button} buttonStyle="red"/>
            </div>
            <img className="rounded-xl mt-10 mx-0 md:max-w-xs" src={cta.image} alt={cta.alt}/>
          </div>
        </div>
      </section>
    )
  }
