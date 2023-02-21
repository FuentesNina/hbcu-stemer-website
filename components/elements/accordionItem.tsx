import { useState } from "react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AccordionItem({company} : {company: {[key: string]: string, }}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <dl className="font-body">
            <dt className="flex items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <div className="h-5 mr-2 md:mr-5">
                    <FontAwesomeIcon icon={isActive ? faMinus :faPlus} className="h-full"/>
                </div>
                <div className="flex items-center w-full justify-between">
                    <p className="font-bold align-middle">{company.name}</p>
                    <img src={company.logo} className="h-10 ml-2"/>
                </div>
            </dt>
            <dd className={`text-sm ml-6 transition-all duration-500 overflow-clip ${isActive ? 'mt-5' : 'h-0 mt-0'}`}>
                {isActive &&
                    <p>
                        {company.description}
                        <br></br>
                        <br></br>
                        {company.website &&
                            <>
                            Learn more at: <Link href={company.website}>{company.website}</Link>
                            </>
                        }
                    </p>
                }

            </dd>
        </dl>
        </>
    )
}
