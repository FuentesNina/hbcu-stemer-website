import { getPageInfo } from "@/hooks/getPageInfo";
import Image from "next/image";

export default function Banner() {
  const pageInfo = getPageInfo();

  const pageTitle = pageInfo.pageTitle;
  const bannerImage= pageInfo.bannerImage;

    return (
      <section className={`isolate bg-myRed/[0.44] overflow-clip md:rounded-lg md:border border-x-0 border md:m-5 md:h-40 lg:h-60 h-28 border-black shadow-md relative place-content-center grid`}>
          <Image className="border-x-0 grayscale mix-blend-overlay h-full w-full object-cover object-center absolute" fill src={bannerImage} alt=""/>
          <h1 className="text-white font-display drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-3xl md:text-5xl text-center uppercase">
              {pageTitle}
          </h1>
      </section>
    )
  }
