import Image from 'next/image';
import { useState } from 'react';
import { Subtitle } from '../elements/subtitle';


export default function TeamMember({member}: {member: any}) {

  const [expandBio, setExpandBio] = useState(false);

  return (
    <div className="mt-14">
        <div className="w-1/2 aspect-square relative rounded-full overflow-clip mx-auto border border-white my-5">
          <Image className="h-full w-full object-cover object-center" src={member.picture} fill alt={`headshot of ${member.firstname} ${member.lastname}`}/>
        </div>
        <div className="my-5 text-center text-white">
          <Subtitle content={`${member.firstname} ${member.lastname}`} className=""/>
          <Subtitle content={member.title} className="text-sm font-normal"/>
        </div>
        <div className='font-body text-sm text-white overflow-clip mb-10'>
          <p className={`${!expandBio && "line-clamp max-h-fit overflow-clip"}  transition-all text-justify`}>{member.bio}</p>
          <p onClick={() => setExpandBio(!expandBio)} className="hover:font-bold font-normal pt-2">{expandBio ? `Show Less..` : `Show More...`}</p>
        </div>
    </div>

  )
}
