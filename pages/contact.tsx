import MyHead from '@/components/sections/MyHead';
import NavBar from '@/components/sections/NavBar';
import Banner from '@/components/sections/Banner';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Contact() {
  const pageDescription = 'Educate, empower, and elevate HBCU students through scholarships and career resources.';
  const pageTitle = 'Contact Us';
  const bannerImage= 'images/contactUs_Banner.jpeg';

  return (
    <>
      <MyHead pageTitle={pageTitle} pageDescription={pageDescription} />
      {/* <NavBar /> */}
      <Banner pageTitle={pageTitle} bannerImage={bannerImage}/>
      {/* <ContactSection /> */}
      <Footer />
    </>
  )
}
