import { useState, useEffect, useRef } from "react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subtitle from "./subtitle";
import Button from "./styledbutton";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function AccordionForm({form, setOpenForm, openForm} : {form: any, setOpenForm: Function, openForm: boolean}) {
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
        <>
        <dl className="font-body">
            <dt className="flex items-center cursor-pointer group" onClick={() => setOpenForm(!openForm)}>
                <div className="h-5 mr-2 md:mr-5">
                    <FontAwesomeIcon icon={openForm ? faMinus :faPlus} className="h-full group-hover:scale-110 group-hover:text-myRed"/>
                </div>
                <div className="flex items-center w-full justify-between">
                    <p className="font-bold align-middle underline">{form?.callToAction}</p>
                    <img src={form?.logo} alt="Generic Logo Placeholder" className="h-14 ml-2"/>
                </div>
            </dt>
            <dd className={`transition-all duration-500 ${openForm ? 'mt-5' : 'h-0 mt-0'}`}>
                <form ref={formRef} className={`p-5 text-sm border-black border shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] ${!openForm && 'hidden'}`} action={`https://formsubmit.co/${form.email}`} method="POST">
                    {/* This is setup for formsubmit.com */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_autoresponse" value="Thank you for message. Someone from our team will get back to you shortly." />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{display:"none"}} />
                    <input type="hidden" id="subject" name="_subject" value={`New ${form?.title} Submission From HBCU STEMER Website`} />
                    <input type="hidden" name="_next" value={`${URL}/thankyou`} />
                    {/* End of setup for formsubmit.com */}

                    <Subtitle content={form?.title} className="text-myRed text-base text-center" />
                    <div className="my-5 TinaMarkDown">
                        <TinaMarkdown content={form?.details} />
                    </div>
                    {form?.fields.map((field : any, index : number) => {
                        const fieldClassName = "grid my-3";
                        const labelClassName = "";
                        const inputClassName = "border border-black";

                        if (field.type === "Short answer text") {
                            return (
                                <div key = {`${field.fieldName.toLowerCase()}${index}`} className={fieldClassName}>
                                    <label htmlFor={`${field.placeholder}`} className={labelClassName}>{field.placeholder}</label>
                                    <input name={field.fieldName.toLowerCase()} id={`${field.placeholder}`} type="text" className={inputClassName} required={field.required}/>
                                </div>
                            )
                        } else if (field.type === "Email") {
                            return (
                                <div key = {`${field.fieldName.toLowerCase()}${index}`} className={fieldClassName}>
                                    <label htmlFor={`${field.placeholder}`} className={labelClassName}>{field.placeholder}</label>
                                    <input name={field.fieldName.toLowerCase()} id={`${field.placeholder}`} type="email" className={inputClassName} required={field.required}/>
                                </div>
                            )
                        } else if (field.type === "Paragraph") {
                            return (
                                <div key = {`${field.fieldName.toLowerCase()}${index}`} className={fieldClassName}>
                                    <label htmlFor={`${field.placeholder}`} className={labelClassName}>{field.placeholder}</label>
                                    <textarea className={inputClassName + ' ' + "min-h-[10rem]"} name={field.fieldName.toLowerCase()} id={`${field.placeholder}`} required={field.required}/>
                                </div>
                            )
                        } else if (field.type === "Checkbox") {
                            return (
                                <fieldset key = {`${field.fieldName.toLowerCase()}${index}`}>
                                    <legend className="">{field.placeholder}</legend>
                                        {field.options.map((option : string, index: number) => {
                                            return (
                                                <div key = {`${option.toLowerCase().trim()}${index}`} className="flex flex-row m-5">
                                                    <input id={`${option.toLowerCase().trim()}${index}`} name={`${option}`} type="checkbox" className="mr-5"/>
                                                    <label htmlFor={`${option.toLowerCase().trim()}${index}`}>
                                                        {option}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                </fieldset>
                            )
                        }
                    })}
                    <Button href="" buttonStyle="red" content="submit" type="submit" className="mt-5"/>
                </form>
            </dd>
        </dl>
        </>
    )
}
