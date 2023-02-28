import SocialMediaIcons from "../elements/socialMediaIcons";
import { Button } from "../elements/styledbutton";
import { webLinks, contactForm } from "@/public/utils/data";
import Link from "next/link";
import { Title } from "../elements/title";
import { FormEvent, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./faq";

export default function ContactSection() {
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

  // const [formConfirmation, setFormConfirmation] = useState({success: true, message: ''});
  // const submitForm = (e: FormEvent) => {
  // https://github.com/the-collab-lab/tcl-53-smart-shopping-list/blob/main/src/views/AddItem.jsx
  //   // e.preventDefault();

  //   // //send form info to email


  //   // //SUCCESSFUL SUBMISSION
  //   // if (true) {
  //   //   //clear form
  // const form = formRef.current;
  // if (form) {
  //   (form as HTMLFormElement).submit();
  //   (form as HTMLFormElement).reset();
  // }

  //   //   //display confirmation message and erase after a few seconds
  //   //   setFormConfirmation({success: true, message:`Your message has been sent. Someone from our team will get back to you shortly.`});
  //   //   setTimeout(() => setFormConfirmation({success: true, message: ''}), 5000);
  //   // }

  //   // //FAILED SUBMISSION
  //   // if (false) {
  //   //   setFormConfirmation({success: false, message:`ERROR: There was an error with your submission. Please try again later.`});
  //   //   //CHANGE ONCE WE HAVE AN ERROR OBJECT
  //   //   console.log(e.target); //console log the error
  //   //   setTimeout(() => setFormConfirmation({success: true, message: ''}), 5000);
  //   // }

  // }


  return (
    <section className="md:flex md:gap-x-5 md:justify-center">
      <div className="grid place-content-center mt-10 md:mb-10">
        <form ref={formRef} action={`https://formsubmit.co/ninette972@gmail.com`} method="POST" className="bg-black p-5 rounded-3xl flex flex-col m-5 max-w-md"
              >
          {/* This is setup for formsubmit.com */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Thank you for message. Someone from our team will get back to you shortly." />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display:"none"}} />
          <input type="hidden" id="subject" name="_subject" value="New Contact Form Submission From HBCU STEMER Website" />
          <input type="hidden" name="_next" value={`${URL}/thankyou`} />
          {/* End of setup for formsubmit.com */}

          <Title content="get in touch" className="text-myGreen text-center my-5" />
          {contactForm.map((field, index) => {
            const className = "py-2 px-5 font-body m-2 text-sm";

            if (field.type === "Short answer text") {
              return <input key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} type="text" className={className} required={field.required}/>
            } else if (field.type === "Email") {
              return <input key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} type="email" className={className} required={field.required}/>
            } else if (field.type === "Paragraph") {
              return <textarea className={className + ' ' + "min-h-[10rem]"} key = {`${field.fieldName.toLowerCase()}${index}`} name={field.fieldName.toLowerCase()} placeholder={`${field.placeholder}`} required={field.required}/>
            } else if (field.type === "Disclaimer") {
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
          <Button href="" buttonStyle="white-black" content="send message" type="submit" className="my-5"/>
        </form>
        {/* <p className={`${!formConfirmation.success && "text-myRed font-bold transition-none"} font-body text-sm ${formConfirmation.message && "m-10" } italic text-center transition-all duration-1000`}>{formConfirmation.message}</p> */}
      </div>
      <div className="flex flex-col md:mt-10">
        <Button href="" action={showFAQ} content="Check out our FAQs" buttonStyle="green" className="my-10 md:order-last md:my-0"/>
        <div className="flex flex-col mx-auto my-10 text-center md:text-left">
            <Title content="Connect With Us" className="text-black"/>
            <SocialMediaIcons containerClassName="mt-10 mb-10 text-black flex text-center place-content-center h-7" iconClassName="h-full mx-0.5 w-7"/>
            <Link href={webLinks.instagram} className="font-body text-sm my-1">Instagram @ hbcustemer</Link>
            <Link href={webLinks.facebook} className="font-body text-sm my-1">Facebook @ HBCU STEMER</Link>
            <p className="font-body text-sm my-1">  Email - {webLinks.email}</p>
        </div>
      </div>
      <div className={`${!visibleFAQ && "hidden"} grid place-content-center fixed bg-black/[0.8] backdrop-blur w-screen min-h-full top-0 z-50 p-10`}>
        <FontAwesomeIcon onClick={hideFAQ} icon={faXmark} className="text-white right-0 absolute h-8 mt-10 mr-5" mask={faCircle}/>
        <FAQ />
      </div>
    </section>
  )
}
