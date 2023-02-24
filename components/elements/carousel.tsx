import { CommunityMemberCard } from "./communityMemberCard";
import { communityMember } from "@/public/utils/data";

export function Carousel() {
    const member = communityMember.scholars[0];

    return (
        <div className="pb-10">
            <CommunityMemberCard member={member} />
        </div>
    )
}
