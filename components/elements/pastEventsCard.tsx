import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Title from "./title";

export default function PastEventCard({event, nthChild} : {event: PastEvent, nthChild: number}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const getNextSlide = function() {
        if (event.files) {
            let nextSlide = (currentSlide + 1) % (event.files.length);
            setCurrentSlide(nextSlide);
        }
    }

    const getPreviousSlide = function() {
        if (event.files) {
            let nextSlide = (currentSlide - 1) % (event.files.length);
            setCurrentSlide(nextSlide > -1 ? nextSlide : event.files.length - 1);
        }
    }

    return (
        <>
            {event.type === 'event' &&
                <div className={`bg-black text-white font-body my-10 text-sm overflow-clip rounded-3xl max-w-xs mx-auto md:grid ${nthChild % 2 !== 0 ? "md:grid-cols-[3fr_4fr]" : "md:grid-cols-[4fr_3fr]"} md:max-w-none md:items-center`}>
                    <div className='aspect-square relative'>
                        <FontAwesomeIcon onClick={getPreviousSlide} icon={faArrowAltCircleLeft} className="absolute h-10 left-5 top-[50%] -mt-5 cursor-pointer hover:text-myGreen drop-shadow-[1px_1px_0_black]"/>
                        <img src={event.files && event.files[currentSlide]} className='object-cover w-full aspect-square pointer-events-none select-none'/>
                        <FontAwesomeIcon onClick={getNextSlide} icon={faArrowAltCircleRight} className="absolute h-10 right-5 top-[50%] -mt-5 cursor-pointer hover:text-myGreen drop-shadow-[1px_1px_0_black]"/>
                    </div>
                    <div className={`${nthChild % 2 === 0 && "order-first"} p-5 ml-10`}>
                        <Title content={event.date} className="text-myGreen"/>
                        <Title content={event.title} className="text-myGreen capitalize"/>
                        <ul className="p-5 list-disc list-outside">
                            {event.highlights && event.highlights.map((highlight, index) => {
                                return <li key={index}>{highlight}</li>
                            })}
                        </ul>
                    </div>
                </div>
            }
            {event.type === 'recap' &&
                <div className="bg-black text-white font-body m-10 text-sm overflow-clip rounded-3xl py-5 md:p-5">
                    <Title content={event.date} className="text-myGreen text-center"/>
                    <Title content={event.title} className="text-myGreen text-center"/>
                    <div className="mt-5 md:mx-5 md:aspect-video aspect-square md:min-h-none">
                        <video src={event.video} height="100%" className="mx-auto max-h-[60vh]" controls/>
                    </div>
                </div>
            }
        </>
    )
}

export type PastEvent = {
    type: string;
    date: string;
    title: string;
    files: string[];
    highlights: string[];
    video?: undefined;
} | {
    type: string;
    date: string;
    title: string;
    video: string;
    highlights?: string[];
    files?: undefined;
};
