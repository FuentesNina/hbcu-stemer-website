import { Button } from "../elements/styledbutton";
import { newsletterForm } from "@/public/utils/data";
import { Title } from "../elements/title";
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
    <form ref={formRef} action={`https://formsubmit.co/ninette972@gmail.com`} method="POST" className="relative top-10 bg-myRed p-10 flex flex-col max-w-md"
            >
        {/* This is setup for formsubmit.com */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thank you for signing up for the HBCU STEMER Newsletter. You will start receiving updates in your inbox." />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{display:"none"}} />
        <input type="hidden" id="subject" name="_subject" value="New Newsletter Sign-Up From HBCU STEMER Website" />
        <input type="hidden" name="_next" value={`${URL}/thankyou`} />
        {/* End of setup for formsubmit.com */}

        <Title content="join our mailing list" className="text-white text-center " />
        <p className="font-body text-white text-center mt-5 mb-10 max-w-xs mx-auto">{`Sign up to receive updates on our events, and how you can support our efforts`}</p>


        {newsletterForm.map((field, index) => {
        const className = "py-2 px-5 font-body m-2 text-sm border border-black";

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
        <Button buttonStyle="white-black" content="keep me posted" type="submit" className="my-5"/>
    </form>
  )
}
