import SocialMediaIcons from "../elements/socialMediaIcons";
import { Button } from "../elements/styledbutton";
import { webLinks, contactForm } from "@/public/utils/data";
import Link from "next/link";
import { Title } from "../elements/title";

export default function ContactSection() {


    return (
      <section>
        <div>
          <form onSubmit={()=>{}} className="bg-black p-5 rounded-3xl flex flex-col m-5">
            <Title content="get in touch" className="text-myGreen text-center my-2" />
            {contactForm.map((field, index) => {
              const className = "py-2 px-5 font-body m-2 text-sm";
              if (field.type === "Short answer text") {
                return <input name={`${field.fieldName.toLowerCase()} ${index}`} placeholder={`${field.placeholder}`} type="text" className={className}/>
              } else if (field.type === "Email") {
                return <input name={`${field.fieldName.toLowerCase()} ${index}`} placeholder={`${field.placeholder}`} type="email" className={className}/>
              } else if (field.type === "Paragraph") {
                return <textarea name={`${field.fieldName.toLowerCase()} ${index}`} placeholder={`${field.placeholder}`} className={className + ' ' + "min-h-[10rem]"}/>
              } else if (field.type === "Disclaimer") {
                return (
                  <div className="flex flex-row text-white m-5 text-xs">
                    <input name={`${field.fieldName.toLowerCase()} ${index}`} type="checkbox" className="mr-2"/>
                    <label className="">
                      {field.placeholder}
                    </label>
                  </div>
                )
              }
            })}
            <Button buttonStyle="white" content="keep me posted" type="submit" className="my-5"/>
          </form>
        </div>
        <div className="">
          <Button content="Check out our FAQs" buttonStyle="green" className="my-10"/>
          <div className="flex flex-col mx-auto my-10 text-center">
              <Title content="Connect With Us" className="text-black"/>
              <SocialMediaIcons containerClassName="mt-10 mb-10 text-black flex text-center place-content-center h-7" iconClassName="h-full mx-0.5 w-7"/>
              <Link href={webLinks.instagram} className="font-body text-sm my-1">Instagram @ hbcustemer</Link>
              <Link href={webLinks.facebook} className="font-body text-sm my-1">Facebook @ HBCU STEMER</Link>
              <p className="font-body text-sm my-1">  Email - {webLinks.email}</p>
          </div>
        </div>
      </section>
    )
  }
