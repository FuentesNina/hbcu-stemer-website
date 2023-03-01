import { useState } from "react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AccordionItem({accordionItem} : {accordionItem: {[key: string]: string, }}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <dl className="font-body">
            {accordionItem.name &&
                <>
                    <dt className="flex items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                        <div className="h-5 mr-2 md:mr-5">
                            <FontAwesomeIcon icon={isActive ? faMinus :faPlus} className="h-full"/>
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <p className="font-bold align-middle">{accordionItem.name}</p>
                            <img src={accordionItem.logo} className="h-10 ml-2"/>
                        </div>
                    </dt>
                    <dd className={`text-sm ml-6 transition-all duration-500 overflow-clip ${isActive ? 'mt-5' : 'h-0 mt-0'}`}>
                        {isActive &&
                            <p>
                                {accordionItem.description}
                                <br></br>
                                <br></br>
                                {accordionItem.website &&
                                    <>
                                    Learn more at: <Link href={accordionItem.website}>{accordionItem.website}</Link>
                                    </>
                                }
                            </p>
                        }
                    </dd>
                </>
            }
            {accordionItem.question &&
                <>
                    <dt className="flex w-full items-center cursor-pointer justify-between" onClick={() => setIsActive(!isActive)}>
                        <p className="font-bold">{accordionItem.question}</p>
                        <FontAwesomeIcon icon={isActive ? faMinus :faPlus} className="w-5 shrink-0"/>
                    </dt>
                    <dd className={`text-sm mx-4 transition-all duration-500 overflow-clip ${isActive ? 'mt-5' : 'h-0 mt-0'}`}>
                        {isActive &&
                            <p>{accordionItem.answer}</p>
                        }
                    </dd>
                </>
            }
        </dl>
        </>
    )
}
