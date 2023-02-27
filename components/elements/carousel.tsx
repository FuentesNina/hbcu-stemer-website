import { CommunityMemberCard } from "./communityMemberCard";
import { communityMembers } from "@/public/utils/data";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export function Carousel() {
    const scholarsTabIndex = 0;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            slide((currentSlide + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide])

    const slide = function(index : number) {
        if (currentSlide === 0 && index === 1) {
            setAnimation('animate-halfLeft');
        } else if (currentSlide === 1 && index === 2) {
            setAnimation('animate-secondLeft');
        } else if (currentSlide === 2 && index === 0) {
            setAnimation('animate-fullLeft');
        } else if (currentSlide === 2 && index === 1) {
            setAnimation('animate-halfRight');
        } else if (currentSlide === 1 && index === 0) {
            setAnimation('animate-secondRight')
        } else if (currentSlide === 0 && index === 2) {
            setAnimation('animate-fullRight');
        }
        setCurrentSlide(index);
    }

    return (
        <div className="pb-10 md:order-first">
            <ul className={`flex mx-auto max-w-sm overflow-x-clip transition-transform justify-center`}>
                {[...Array(3)].map((value, index) => {
                    return (
                        <li key={index} className={`mx-5 ${animation} ${currentSlide !== index && ""}`}>
                            <CommunityMemberCard member={communityMembers[scholarsTabIndex].profiles[index]} />
                        </li>
                    )
                })}
            </ul>
            <ul className="flex justify-between w-24 mx-auto mt-5">
                {[...Array(3)].map((value, index) => {
                    return (
                        <li key={index} className="relative h-4 w-4" onClick={() => slide(index)}>
                            <FontAwesomeIcon icon={faCircle} className="absolute h-full" />
                            <FontAwesomeIcon icon={faCircle} className={`${index !== currentSlide && 'hidden'} absolute text-myGreen h-full`} transform="shrink-3" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
