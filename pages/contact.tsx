import { navLinks } from '@/public/utils/data';
import Banner from '@/components/sections/banner';
import ContactSection from '@/components/sections/contactSection';


export default function Contact() {
  const pageIndex = 5;

  const pageTitle = navLinks[pageIndex].pageTitle;
  const bannerImage= navLinks[pageIndex].bannerImage;

  return (
    <>
      <Banner pageTitle={pageTitle} bannerImage={bannerImage}/>
      {/* <ContactSection /> */}
    </>
  )
}
