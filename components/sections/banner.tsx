import { getPageInfo } from "@/public/utils/data";

export default function Banner() {
  const pageInfo = getPageInfo();

  const pageTitle = pageInfo.pageTitle;
  const bannerImage= pageInfo.bannerImage;

  /**
   * removed properties
   * section: bg-myRed/[0.44]
   * image: mix-blend-overlay
   */

    return (
      <>
        <div className="bg-black">
          <section className={` bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - Black
              </h1>
          </section>
        </div>
        <div className="bg-transparent">
          <section className={` bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - Transparent
              </h1>
          </section>
        </div>
        <div className="bg-inherit">
          <section className={` bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - inherit
              </h1>
          </section>
        </div>
        <div className="bg-white">
          <section className={` bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - white
              </h1>
          </section>
        </div>
        <div className="bg-white">
          <section className={`isolate bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - white + Isolate
              </h1>
          </section>
        </div>
        <div className="">
          <section className={` bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - nothing + isolate
              </h1>
          </section>
        </div>
          <section className={`isolate bg-myRed/[0.44] md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
              <img src={bannerImage} className="md:rounded-lg md:border border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute"/>
              <h1 className="text-myGreen font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
                  {pageTitle} - nothing + isolate
              </h1>
          </section>
      </>
    )
  }
