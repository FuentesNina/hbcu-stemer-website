import LargeLogo from "../elements/logos/largeLogo"
import Button from "../elements/styledbutton"
import Title from "../elements/title"

export default function Hero({heroData, companies} : {heroData: any, companies: any}) {
    return (
        <>
          <section id="hero" className="bg-black">
            <div className="md:grid md:grid-cols-[3fr_2fr] md:pt-20 md:max-w-4xl md:mx-auto md:gap-10 md:px-5 lg:max-w-6xl">
              <div className="max-w-xs mx-auto md:w-full lg:my-auto">
                <LargeLogo color="white"  className="py-10 md:pt-0"/>
                <p className="capitalize font-body text-white text-center text-xl">{heroData.slogan}</p>
                <Button href="#basicInfo" content={heroData.button} buttonStyle="red" className="my-10 md:mb-0"/>
              </div>
              <div className="aspect-video md:min-h-none max-w-md mx-auto md:w-full md:my-auto md:order-first shadow-[0_0_20px_white] lg:max-w-none">
                <video src={heroData.heroVideo} height="100%" className="mx-auto max-h-[30vh] md:max-h-full" controls autoPlay loop preload="auto" poster={heroData.heroVideoThumbnail} />
              </div>
            </div>
            <div className="pt-10 pb-5 md:max-w-4xl md:mx-auto">
              <Title content="sponsored by" className="text-white text-sm text-center"/>
              <ul className="flex justify-around items-center gap-3 p-5 flex-wrap bg-white mx-5 mt-2 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)]">
                {companies?.map((company: any, index: number) => {
                  if (company.homepage) {
                    return (
                      <li key={index} className='max-w-[6rem]'>
                        <img src={company.logo} className="max-w-full max-h-[3rem]" alt={`Logo of ${company.name}`}/>
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
