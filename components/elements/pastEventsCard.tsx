import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Title from "./title";

export default function PastEventCard({event} : {event: PastEvent}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const getNextSlide = function() {
        if (event.files) {
            let nextSlide = (currentSlide + 1) % (event.files.length);
            setCurrentSlide(nextSlide);
            console.log(nextSlide);
        }
    }

    const getPreviousSlide = function() {
        if (event.files) {
            let nextSlide = (currentSlide - 1) % (event.files.length);
            setCurrentSlide(nextSlide > -1 ? nextSlide : event.files.length - 1);
            console.log(nextSlide);
        }
    }

    return (
        <>
            {event.type === 'event' &&
                <div className="bg-black text-white font-body m-10 text-sm overflow-clip rounded-3xl">
                    <div className='aspect-square relative'>
                        <FontAwesomeIcon onClick={getPreviousSlide} icon={faArrowAltCircleLeft} className="absolute h-10 left-5 top-[50%] -mt-5 cursor-pointer"/>
                        <img src={event.files && event.files[currentSlide]} className='object-cover'/>
                        <FontAwesomeIcon onClick={getNextSlide} icon={faArrowAltCircleRight} className="absolute h-10 right-5 top-[50%] -mt-5 cursor-pointer"/>
                    </div>
                    <div className="p-5">
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
                <div className="bg-black text-white font-body m-10 text-sm overflow-clip rounded-3xl p-5">
                    <Title content={event.date} className="text-myGreen text-center"/>
                    <Title content={event.title} className="text-myGreen text-center"/>
                    <div className="pt-5">
                    <iframe width="100%" height="100%" src={event.video} title={event.date} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false} />
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
