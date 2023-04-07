import Banner from '@/components/sections/banner';
import ContactSection from '@/components/sections/contactSection';
import { useTina } from 'tinacms/dist/react';
import client from '@/.tina/__generated__/client';
import { faq } from '@/public/utils/data';

export default function Contact({...props}) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const contactFormData = data.page;

  return (
    <>
      <Banner />
      <ContactSection contactFormData={contactFormData} faq={faq}/>
    </>
  )
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'contact.md' })
  // const faq = await client.queries.websiteDetails({ relativePath: 'faq.md' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  }
}
