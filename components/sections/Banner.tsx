export default function Banner({pageTitle, bannerImage}: {pageTitle:string, bannerImage:string}) {

    return (
      <>
        <section className="md:rounded-lg md:m-5 md:h-40 lg:h-60 h-28 border-black border shadow-md  relative bg-myRed/[0.44] place-content-center grid">
            <img src={bannerImage} className="grayscale h-full w-full object-cover object-center absolute mix-blend-overlay"/>
            <h1 className="font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] lg:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-white text-3xl lg:text-5xl text-center uppercase">
                {pageTitle}
            </h1>
        </section>
      </>
    )
  }
