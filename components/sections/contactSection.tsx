import SocialMediaIcons from "../elements/socialMediaIcons";
import Button from "../elements/styledbutton";
import Link from "next/link";
import Title from "../elements/title";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./faq";

export default function ContactSection({contactFormData, faq, webLinks}:{contactFormData: any, faq: any, webLinks: any}) {
  const contactForm = contactFormData.formFields;
  const formTitle = contactFormData.formTitle;
  const formSubmit = contactFormData.formSubmit;
  const formEmail = contactFormData.email;
  const linksShown = contactFormData.links;
  const socialTitle = contactFormData.socialTitle;

  const formRef = useRef(null);
  const [visibleFAQ, setVisibleFAQ] = useState(false);
  const [URL, setURL] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setURL(
      window !== undefined && window.location.origin
      ? window.location.origin
      : ''
    )
  },[])

  useEffect (() => {
    if (firstLoad) {
      setFirstLoad(false);

      const form = formRef.current;

      if (form) {
        (form as HTMLFormElement).reset();
      }
    }
  },[firstLoad]);

  const showFAQ = () => {
    setVisibleFAQ(true);
  }

  const hideFAQ = () => {
    setVisibleFAQ(false);
  }


  return (
    <section className="md:flex md:gap-x-5 md:justify-center">
      <div className="grid place-content-center mt-10 md:mb-10">
        <form ref={formRef} action={`https://formsubmit.co/${formEmail}`} method="POST" className="bg-black p-5 rounded-3xl flex flex-col m-5 max-w-md"
              >
          {/* This is setup for formsubmit.com */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Thank you for message. Someone from our team will get back to you shortly." />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display:"none"}} />
          <input type="hidden" id="subject" name="_subject" value="New Contact Form Submission From HBCU STEMER Website" />
          <input type="hidden" name="_next" value={`${URL}/thankyou`} />
          {/* End of setup for formsubmit.com */}

          <Title content={formTitle} className="text-myGreen text-center my-5" />
          {contactForm?.map((field: any, index: number) => {
            const className = "py-2 px-5 font-body m-2 text-sm";

            if (field?.type === "Short answer text") {
              return <input key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} type="text" className={className} required={field.required}/>
            } else if (field?.type === "Email") {
              return <input key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} type="email" className={className} required={field.required}/>
            } else if (field?.type === "Paragraph") {
              return <textarea className={className + ' ' + "min-h-[10rem]"} key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} required={field.required}/>
            } else if (field?.type === "Disclaimer") {
              return (
                <div key = {`${field.fieldName.toLowerCase()}${index}`} className="flex flex-row text-white m-5 text-xs">
                  <input id={`${field.fieldName.toLowerCase()}${index}`} name={field.placeholder.toLowerCase()} type="checkbox" className="mr-5" required={field.required}/>
                  <label htmlFor={`${field.fieldName.toLowerCase()}${index}`}>
                    {field.placeholder}
                  </label>
                </div>
              )
            }
          })}
          <Button href="" buttonStyle="white-black" content={formSubmit} type="submit" className="my-5"/>
        </form>
      </div>
      <div className="flex flex-col md:mt-10">
        <Button href="" action={showFAQ} content="Check out our FAQs" buttonStyle="green" className="my-10 md:order-last md:my-0"/>
        <div className="flex flex-col mx-auto my-10 text-center md:text-left">
            <Title content={socialTitle} className="text-black"/>
            <SocialMediaIcons webLinks={webLinks} containerClassName="mt-10 mb-10 text-black flex text-center place-content-center h-7" iconClassName="h-full mx-0.5 w-7 hover:text-myRed hover:drop-shadow-[1px_1px_0_black]"/>
            <ul>
              {linksShown?.map((link: any, index: number) => {
                const filtered = webLinks.socialLinks.filter((social: any) => {
                  return social.platform === link?.type;
                })
                const linkInfo = filtered[0];

                if (linkInfo) {
                  return (
                    <li key={`${linkInfo.platform}${index}`}>
                      <Link href={link.type === "Email" ? `mailto:${linkInfo.link}` : linkInfo.link} className="font-body text-sm my-1 hover:font-bold">{link.text}</Link>
                    </li>
                  )
                }
              })}
            </ul>
        </div>
      </div>
      <div className={`${!visibleFAQ && "hidden"} py-20 fixed bg-white/[0.8] backdrop-blur w-screen h-screen top-10 md:top-20 z-50 overflow-scroll`}>
        <FontAwesomeIcon onClick={hideFAQ} icon={faXmark} className="text-black right-0 absolute h-8 -mt-10 mr-5 cursor-pointer" mask={faCircle}/>
        <div className="">
          <FAQ faq={faq}/>
        </div>
      </div>
    </section>
  )
}
