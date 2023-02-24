export function CommunityMemberCard({member}:{member: any}) {
    return (
        <>
        <div className="border border-black divide-y divide-black w-56 mx-auto" style={{boxShadow: '4px 4px 0 #ff1616, -4px -4px 0 #cfff00'}}>
            <div className="aspect-square">
                <img src={member.picture} className="object-cover h-full"/>
            </div>
            <div className="bg-white p-5">
                <p className="font-title font-bold uppercase text-center text-sm">{`${member.firstName} ${member.lastName}`}</p>
                <p className="font-title uppercase text-center text-sm">{member.school}</p>
                <p className="font-title uppercase text-center text-sm">{member.year}</p>
            </div>
        </div>
        </>
    )
}
