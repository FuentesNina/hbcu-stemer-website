import { useRouter } from "next/router";
import { navLinks } from "./data";

export function getPageInfo() {
    const router = useRouter();
    const pathname = router.pathname;
    const filtered = navLinks.filter(pageInfo => pageInfo.path === pathname);
    const pageInfo = filtered[0];

    return pageInfo;
}
