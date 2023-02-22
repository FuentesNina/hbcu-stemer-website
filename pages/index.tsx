import LargeLogo from "@/components/elements/logos/largeLogo";
import { Button } from "@/components/elements/styledbutton";
import { Title } from "@/components/elements/title";
import Link from "next/link";
import { partnersData } from "@/public/utils/data";

export default function Home() {

  return (
    <>
      <section className="bg-black">
        <div>
          <div className="max-w-xs mx-auto">
            <LargeLogo color="white"  className="py-10"/>
            <p className="capitalize font-body text-white text-center text-xl">{`empower potential`}</p>
            <Link href="#basicInfo">
              <Button content="learn more" buttonStyle="red" className="my-10"/>
            </Link>
          </div>
          <div className="aspect-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o5caqBTLK4k?controls=0&autoplay=1&mute=1" title="HBCU STEMER Website Intro Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false} />
          </div>
        </div>
        <div className="py-10">
          <Title content="sponsored by" className="text-white text-sm text-center"/>
          <ul className="flex gap-10 justify-center mt-10 flex-wrap">
            {partnersData[0].companies.map((company, index) => {
              return (
                <li key={index}>
                  <img src={company.logo} className="h-10"/>
                </li>

              )
            })}
          </ul>
        </div>
      </section>
      <section id="basicInfo" >

      </section>
    </>
  )
}
