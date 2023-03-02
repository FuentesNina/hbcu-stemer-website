import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./styledbutton";

export default function RaceTicketCard({ticket} : {ticket: {
                                            title: string;
                                            description: string;
                                            price: string;
                                            fee: string;
                                            mostPopular: boolean;
                                            features: string[];
                                        }}) {

    const [showFeatures, setShowFeatures] = useState(false);


    return (
        <>
            <div className="font-body bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.4)] rounded-3xl p-10 max-w-xs md:w-80 mx-auto my-10 relative">
                {ticket.mostPopular &&
                    <p className="bg-myRed/[0.44] text-white p-2 text-xs rounded-full border border-myRed absolute top-5 right-5">Most Popular</p>

                }
                <div className="mb-10">
                    <h3 className="text-lg font-bold capitalize">{ticket.title}</h3>
                    <p className="text-base capitalize">{ticket.description}</p>
                </div>
                <p className={`font-bold text-5xl pb-5 md:text-left ${!showFeatures && 'text-center'}`}>{ticket.price}<span className={`text-sm font-normal md:inline-block ${!showFeatures && 'hidden'}`}> + {ticket.fee} SignUp Fee</span></p>
                <Button className="my-5" href="https://runsignup.com/Race/Register/?raceId=106760&eventId=688359" content="buy ticket" buttonStyle={ticket.mostPopular ? 'red-no-border' : "white-red"}/>
                <div onClick={() => setShowFeatures(!showFeatures)} className="flex gap-2 cursor-pointer mt-5 md:hidden">
                    <FontAwesomeIcon className="text-myRed h-6" icon={showFeatures ? faMinus : faPlus} />
                    <p className="self-center underline">{showFeatures ? 'Less Info...' : 'More Info...'} </p>
                </div>
                <ul className={`${!showFeatures && 'hidden md:block'} pt-5`}>
                    {ticket.features && ticket.features.map((feature :string, index : number) => {
                        return (
                            <li key={index} className="flex w-full gap-2 my-2">
                                <FontAwesomeIcon icon={faCheck} className="w-6 text-myRed shrink-0"/>
                                <p className="flex-shrink">{feature}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
