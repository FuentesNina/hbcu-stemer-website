import Link from "next/link"
import { IG_PICTURES } from "@/public/utils/data"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstagramShowcase({customUrl, height}:{customUrl:string, height: number}) {
  const [maxImages, setMaxImages] = useState(0);

  useEffect(() => {
    if(maxImages === 0) {
      setMaxImages(Math.ceil(window.innerWidth / height));
    }

    const handleWindowResize = () => {
      setMaxImages(Math.ceil(window.innerWidth / height));
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {window.removeEventListener('resize', handleWindowResize)};
  }, [maxImages])

    return (
      <>
        <div className={`bg-white w-full h-[${height}px] relative overflow-clip`}>
          <div className="bg-red-200 w-full h-full absolute flex-row flex">
            {IG_PICTURES.map((picture, index) => {
              if(index < maxImages) {
                return (
                  <div className=" h-full aspect-square relative overflow-y-clip">
                    <Image className="object-cover" sizes="50vw" fill src={picture.src} alt={picture.caption}/>
                  </div>
                );
              }
            })}
          </div>
          <div className="bg-black/70 w-full h-full relative mix-blend-overlay grid place-content-center">
            <Link href={customUrl} className='text-fuschia-700 text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
          </div>
        </div>

      </>
    )
  }
