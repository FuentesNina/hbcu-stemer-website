import Button from "../elements/styledbutton";
import { newsletterForm, webLinks } from "@/public/utils/data";
import Title from "../elements/title";
import { useState, useRef, useEffect } from "react";

export default function NewsletterForm() {
  const formRef = useRef(null);
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


  return (
    <form ref={formRef} action={`https://formsubmit.co/${webLinks.email}`} method="POST" className="relative top-10 bg-myRed p-10 md:grid md:grid-cols-[3fr_2fr] md:gap-5 md:max-w-3xl md:mx-auto md:rounded-2xl lg:max-w-5xl"
            >
        {/* This is setup for formsubmit.com */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thank you for signing up for the HBCU STEMER Newsletter. You will start receiving updates in your inbox." />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{display:"none"}} />
        <input type="hidden" id="subject" name="_subject" value="New Newsletter Sign-Up From HBCU STEMER Website" />
        <input type="hidden" name="_next" value={`${URL}/thankyou`} />
        {/* End of setup for formsubmit.com */}

        <div className="md:my-auto">
            <Title content="join our mailing list" className="text-white text-center " />
            <p className="font-body text-white text-center mt-5 mb-10 max-w-xs mx-auto md:mb-0 md:max-w-md">{`Sign up to receive updates on our events, and how you can support our efforts`}</p>
        </div>

        <div className="flex flex-col max-w-sm mx-auto md:w-full">
            {newsletterForm.map((field, index) => {
            const className = "py-2 px-5 font-body m-2 text-sm border border-black md:mt-0 md:mb-4";

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
            <Button href="" buttonStyle="white-black-on-red" content="keep me posted" type="submit" className="my-5 md:mb-0"/>
        </div>
    </form>
  )
}
