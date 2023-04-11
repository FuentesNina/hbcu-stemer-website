import Head from 'next/head';

export default function MyHead({pageTitle, pageDescription, pageImage}: {pageTitle:string, pageDescription: string, pageImage: string}) {
    return (
        <Head>
            <title>{`HBCU STEMER - ${pageTitle}`}</title>
            <meta name="description" content={pageDescription} />
            <meta name="og:image" content={pageImage}/>
            {/* TODO:
            - check if viewport needs to be added,
            <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}
