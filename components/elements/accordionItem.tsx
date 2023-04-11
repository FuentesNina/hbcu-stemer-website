import { useEffect, useState } from "react"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function AccordionItem({accordionItem} : {accordionItem: any}) {
    const [isActive, setIsActive] = useState(false);
    const [itemName, setItemName] = useState(accordionItem.name);
    const [transition, setTransition] = useState('transition-none');

    useEffect(() => {
        if (accordionItem.name !== itemName) {
            setTransition('transition-none');
            setIsActive(false);
            setItemName(accordionItem.name);
        }
    }, [accordionItem.name, itemName]);

    const activate = function() {
        setIsActive(!isActive);
        setTransition('transition-all');
    };

    return (
        <>
        <dl className="font-body group">
            {accordionItem?.name &&
                <>
                    <dt className="flex items-center cursor-pointer" onClick={() => activate()}>
                        <div className="h-5 mr-2 md:mr-5">
                            <FontAwesomeIcon icon={isActive ? faMinus :faPlus} className="h-full group-hover:scale-110 group-hover:text-myRed"/>
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <p className="font-bold align-middle">{accordionItem.name}</p>
                            <img src={accordionItem.logo} className="h-10 ml-2" alt={`logo of ${accordionItem.name}`}/>
                        </div>
                    </dt>
                    <dd className={`text-sm ml-6 ${transition} duration-500 overflow-clip ${isActive ? 'mt-5' : 'h-0 mt-0'}`}>
                        {isActive &&
                            <p>
                                {accordionItem.description}
                                <br></br>
                                <br></br>
                                {accordionItem.website &&
                                    <>
                                    Learn more at: <Link href={accordionItem.website} className="hover:font-bold underline">{accordionItem.website}</Link>
                                    </>
                                }
                            </p>
                        }
                    </dd>
                </>
            }
            {accordionItem?.question &&
                <>
                    <dt className="flex w-full items-center cursor-pointer justify-between" onClick={() => setIsActive(!isActive)}>
                        <p className="font-bold">{accordionItem.question}</p>
                        <FontAwesomeIcon icon={isActive ? faMinus :faPlus} className="w-5 shrink-0 ml-5 group-hover:scale-110 group-hover:text-myRed"/>
                    </dt>
                    <dd className={`text-sm mx-4 transition-all duration-500 overflow-clip ${isActive ? 'mt-5' : 'h-0 mt-0'}`}>
                        {isActive &&
                            <div className="TinaMarkDown"><TinaMarkdown content={accordionItem.answer} /></div>
                        }
                    </dd>
                </>
            }
        </dl>
        </>
    )
}
