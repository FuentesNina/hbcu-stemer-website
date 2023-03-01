import { useEffect, useState } from "react";

export default function CommunityMemberCard({member, focusable}:{member: any, focusable?: boolean}) {
    const [active, setActive] = useState(false);
    const [expandBio, setExpandBio] = useState(false);

    useEffect (() => {
        if (!focusable) {
            setActive(false);
        }
    })

    return (
        <>
        <div className={`${(active && focusable) ? 'z-20 fixed left-0 right-0 top-[15vh]' : 'hidden'} mx-auto w-56 h-fit flex flex-col place-items-center`} onClick={() => setActive(true)}>
            <div className="aspect-square border border-black w-56 relative -mb-10" style={{boxShadow: '4px 4px 0 #ff1616, -4px -4px 0 #cfff00'}}>
                <img src={member.picture} className="object-cover h-full"/>
            </div>
            <div className={`${expandBio && "max-h-[40vh] overflow-y-scroll"} bg-white p-5 pt-16 w-[150%] border border-black `} style={{boxShadow: '4px 4px 0 #ff1616, -4px -4px 0 #cfff00'}}>
                <p className="font-title font-bold uppercase text-center text-sm">{`${member.firstName} ${member.lastName}`}</p>
                <p className="font-title uppercase text-center text-sm">{member.school}</p>
                <p className="font-title uppercase text-center text-sm">{member.event}</p>
                <p className={`${!expandBio && "line-clamp max-h-fit overflow-clip"} font-body text-center text-sm mt-5`}>{member.bio}</p>
                <p onClick={() => setExpandBio(!expandBio)} className="hover:font-bold font-body font-normal text-sm pt-2 underline">{expandBio ? `Show Less..` : `Show More...`}</p>
            </div>
        </div>
        <div className={`border border-black divide-y divide-black w-56 mx-auto`} style={{boxShadow: '4px 4px 0 #ff1616, -4px -4px 0 #cfff00'}} onClick={() => setActive(true)}>
            <div className="aspect-square">
                <img src={member.picture} className="object-cover h-full"/>
            </div>
            <div className="bg-white p-5">
                <p className="font-title font-bold uppercase text-center text-sm">{`${member.firstName} ${member.lastName}`}</p>
                <p className="font-title uppercase text-center text-sm">{member.school}</p>
                <p className="font-title uppercase text-center text-sm">{member.event}</p>
                <p className="font-title uppercase text-center text-sm">{member.year}</p>
            </div>
        </div>
        </>
    )
}
