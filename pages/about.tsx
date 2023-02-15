import Banner from '@/components/sections/banner';
import { navLinks } from '@/public/utils/data';


export default function About() {
  const pageIndex = 4;

  const pageTitle = navLinks[pageIndex].pageTitle;
  const bannerImage= navLinks[pageIndex].bannerImage;

  return (
    <>
      <Banner pageTitle={pageTitle} bannerImage={bannerImage}/>
    </>
  )
}
