import Banner from "@/components/sections/banner";
import { navLinks } from "@/public/utils/data";

export default function Partners() {
  const pageIndex = 3;

  const pageTitle = navLinks[pageIndex].pageTitle;
  const bannerImage= navLinks[pageIndex].bannerImage;

  return (
    <>
      <Banner pageTitle={pageTitle} bannerImage={bannerImage}/>
    </>
  )
}
