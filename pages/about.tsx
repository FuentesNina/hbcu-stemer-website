import Banner from '@/components/sections/banner';
import CustomBackground from '@/components/elements/customBackground';


export default function About() {

  return (
    <>
      <Banner/>
      {/* <section className="mx-5 mt-10 mb-16 md:grid-cols-[2fr_3fr] md:grid md:gap-10 md:mx-10 lg:max-w-4xl lg:mx-auto">
        <div className="border-black border rounded-lg my-10 overflow-clip max-w-sm mx-auto">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src="/images/placeholders/ourPartners_introImage.jpg" alt="" />
        </div>
        <div className="my-10 md:m-auto">
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
      </section> */}
      <section className="max-w-lg min-h-fit m-auto overflow-clip">
        <CustomBackground backgroundColor="white" color="#d9d9d9" factor={1.5}>
        </CustomBackground>
      </section>
    </>
  )
}
