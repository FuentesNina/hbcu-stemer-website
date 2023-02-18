import Link from "next/link"
import { IG_PICTURES } from "@/public/utils/data"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstagramShowcase({customUrl, height}:{customUrl:string, height: string}) {
  const [pictures, setPictures] = useState(IG_PICTURES.length > 20 ? IG_PICTURES.slice(0, 20) : IG_PICTURES);

  useEffect(() => {

    const handleWindowResize = () => {
      const maxImages = Math.ceil(window.innerWidth / Number(height.replace('px','')));
      setPictures(IG_PICTURES.length > maxImages ? IG_PICTURES.slice(0, maxImages) : IG_PICTURES);
    }

    if (window === undefined) {
      handleWindowResize();
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {window.removeEventListener('resize', handleWindowResize)};
  }, [pictures, height])

    return (
        <div className={`bg-transparent w-full relative overflow-clip`} style={{height: `${height}`}}>
          <div className={`bg-transparent w-full h-full absolute flex-row flex`}>
            {IG_PICTURES.map((picture, index) => {
                return (
                  <div key={index} className="h-full aspect-square relative overflow-y-clip">
                    <Image className="object-cover" sizes="33vw" fill src={picture.src} alt={picture.caption}/>
                  </div>
                );
            })}
          </div>
          <div className="w-full h-full absolute grid place-content-center" style={{background: 'radial-gradient(closest-side, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)'}}>
            <Link href={customUrl} className='text-white text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
          </div>
        </div>
    )
  }
