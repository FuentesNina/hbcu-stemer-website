import { Button } from "@/components/elements/styledbutton";
import Banner from "@/components/sections/banner";
import CollapsableSection from "@/components/sections/collapsableSection";
import Image from "next/image";

export default function Partners() {

  return (
    <>
      <Banner/>
      <div className="my-10">
        <div className="border-black border rounded-lg m-10 overflow-clip">
          <img className="max-w-full max-h-full object-cover object-center h-full w-full" src="/images/placeholders/ourPartners_introImage.jpg" alt="" />
        </div>
        <div className="mx-5 my-10">
          <p className="font-body ">
          {`This is a small paragraph talking about how HBCU STEMER would not be possible without it's Sponsors and HBCU Partners.
          This is a small paragraph talking about how HBCU STEMER would not be possible without it's Sponsors and HBCU Partners.`}
          </p>
          <Button content="become a sponsor" buttonStyle="black" className="my-5" />
          <Button content="become a partner" buttonStyle="black" className="my-5" />
        </div>
      </div>
      <CollapsableSection />
    </>
  )
}
