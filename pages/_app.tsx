import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/sharedSections/layout'


export default function App({ Component, pageProps, ...props }: AppProps) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
