import Link from "next/link"
import { IG_PICTURES } from "@/public/utils/data"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstagramShowcase({customUrl, height}:{customUrl:string, height: string}) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if(pictures.length === 0) {
      let maxImages = Math.ceil(window.innerWidth / (height));
      setPictures(IG_PICTURES.slice(maxImages));
    }

    const handleWindowResize = () => {
      let maxImages = Math.ceil(window.innerWidth / height);
      setPictures(IG_PICTURES.slice(maxImages));
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {window.removeEventListener('resize', handleWindowResize)};
  }, [pictures])

    return (
      <>
        <div className={`bg-transparent w-full relative overflow-clip isolate`} style={{height: `${height}`}}>
          <div className={`bg-transparent w-full h-full absolute flex-row flex`}>
            {IG_PICTURES.map((picture) => {
                return (
                  <div className=" h-full aspect-square relative overflow-y-clip">
                    <Image className="object-cover" sizes="50vw" fill src={picture.src} alt={picture.caption}/>
                  </div>
                );
            })}
          </div>
          <div className="bg-black/50 w-full h-full absolute grid place-content-center">
            <Link href={customUrl} className='text-white text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
          </div>
        </div>

      </>
    )
  }
