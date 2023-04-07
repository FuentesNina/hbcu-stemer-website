import Banner from '@/components/sections/banner';
import ContactSection from '@/components/sections/contactSection';
import { useTina } from 'tinacms/dist/react';
import client from '@/.tina/__generated__/client';

export default function Contact({sharedData,...props} : {sharedData: any}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const contactFormData = data.page;
  const faq = sharedData.faq;
  const webLinks = sharedData.webLinks;

  return (
    <>
      <Banner navLinks={sharedData.navLinks}/>
      <ContactSection contactFormData={contactFormData} faq={faq} webLinks={webLinks}/>
    </>
  )
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'contact.md' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  }
}
