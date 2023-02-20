import { useState } from "react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AccordionItem({company} : {company: {[key: string]: string, }}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <dl className="font-body">
            <dt className="flex items-center">
                <div className="h-5 mr-2">
                    <FontAwesomeIcon onClick={() => setIsActive(!isActive)} icon={isActive ? faMinus :faPlus} className="h-full"/>
                </div>
                <div className="flex items-center">
                    <p className="font-bold align-middle">{company.name}</p>
                    <img src={company.logo} className="h-10"/>
                </div>
            </dt>
            <dd className={`text-sm ml-6 mt-5 ${!isActive && 'hidden'}`}>
                <p>
                    {company.description}
                    <br></br>
                    <br></br>
                    Learn more at: <Link href={company.website}>{company.website}</Link>
                </p>
            </dd>
        </dl>
        </>
    )
}
