import '@/styles/globals.css'
import Layout from '@/components/sharedSections/layout'
import client from '@/.tina/__generated__/client'
import { AppPropsType } from 'next/dist/shared/lib/utils'

export default function App({ Component, pageProps, ...props}: Props) {

  const webLinks = props.props.webLinks.websiteDetails;
  const raceDay = props.props.raceInfoData.page.raceDay;
  const faq = props.props.faq.websiteDetails.faq;
  const cta = props.props.cta.websiteDetails;
  const navLinks = props.props.navLinks.websiteDetails.navLinks;
  const customBackground = props.props.customBackground.websiteDetails.customBackground;
  const sponsors = props.props.partnersData.page.partnersData[0].companies;
  const scholars = props.props.impactData.page.communityMembers[0].profiles;
  const newsletterForm = props.props.homeData.page.newsletterSignUp;
  const instagramImages = props.props.instagramImages;

  console.log(instagramImages)

  const layoutData = { navLinks, webLinks, newsletterForm};
  const sharedData = {webLinks, raceDay, faq, cta, customBackground, navLinks, sponsors, scholars};

  return (
    <>
      <Layout layoutData={layoutData}>
        <Component {...pageProps} sharedData={sharedData}/>
      </Layout>
    </>
  )
}

App.getInitialProps = async () => {
  const faq = await client.queries.websiteDetails({ relativePath: 'faq.md' });
  const webLinks = await client.queries.websiteDetails({ relativePath: 'links.md' });
  const cta = await client.queries.websiteDetails({ relativePath: 'cta.md' });
  const customBackground = await client.queries.websiteDetails({ relativePath: 'customBackground.md' });
  const navLinks = await client.queries.websiteDetails({ relativePath: 'navLinks.md' });
  const raceInfoResponse = await client.queries.page({ relativePath: 'raceinfo.md' });
  const partnersResponse = await client.queries.page({ relativePath: 'partners.md' });
  const impactResponse = await client.queries.page({ relativePath: 'impact.md' });
  const homeResponse = await client.queries.page({ relativePath: 'home.md' });
  const instagramImages = process.env.INSTAGRAM_KEY;

  return {
    props: {
      faq: faq.data,
      webLinks: webLinks.data,
      cta: cta.data,
      customBackground: customBackground.data,
      navLinks: navLinks.data,
      raceInfoData: raceInfoResponse.data,
      partnersData: partnersResponse.data,
      impactData: impactResponse.data,
      homeData: homeResponse.data,
      instagramImages: instagramImages,
    },
  }
}

export declare type Props<P = any> = AppPropsType & {
  props: P;
}
