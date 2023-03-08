import { partnersData } from "@/public/utils/data"
import LargeLogo from "../elements/logos/largeLogo"
import Button from "../elements/styledbutton"
import Title from "../elements/title"

export default function Hero() {
    return (
        <>
          <section id="hero" className="bg-black">
            <div className="md:grid md:grid-cols-[3fr_2fr] md:pt-20 md:max-w-4xl md:mx-auto md:gap-10 md:px-5 lg:max-w-6xl">
              <div className="max-w-xs mx-auto md:w-full lg:my-auto">
                <LargeLogo color="white"  className="py-10 md:pt-0"/>
                <p className="capitalize font-body text-white text-center text-xl">{`empower potential`}</p>
                <Button href="#basicInfo" content="learn more" buttonStyle="red" className="my-10 md:mb-0"/>
              </div>
              <div className="aspect-video max-w-md mx-auto md:w-full md:my-auto md:order-first shadow-[0_0_20px_white] lg:max-w-none">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o5caqBTLK4k?controls=0&autoplay=1&mute=0" title="HBCU STEMER Website Intro Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false} />
              </div>
            </div>
            <div className="pt-10 pb-5 md:max-w-4xl md:mx-auto">
              <Title content="sponsored by" className="text-white text-sm text-center"/>
              <ul className="flex justify-around p-5 flex-wrap bg-white mx-5 mt-2 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)]">
                {partnersData[0].companies.map((company, index) => {
                  if (company.homepage) {
                    return (
                      <li key={index}>
                        <img src={company.logo} className="h-10"/>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </section>
        </>
    )
}
