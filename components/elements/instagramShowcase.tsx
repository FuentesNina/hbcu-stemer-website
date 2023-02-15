import Link from "next/link"

export default function InstagramShowcase({customUrl}:{customUrl:string}) {

    return (
      <>
        <div className="bg-cyan-700 h-20 grid relative place-content-center">
              <div id="collage of Instagram images" className='absolute'>
              </div>
              <Link href={customUrl} className='text-white text-center uppercase font-title font-bold'>Follow Us On Instagram</Link>
        </div>
      </>
    )
  }
