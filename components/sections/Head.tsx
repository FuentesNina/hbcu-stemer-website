import Head from '../../node_modules/next/head';

export default function MyHead({pageTitle, pageDescription}: {pageTitle:string, pageDescription: string}) {
    return (
        <>
            <Head>
                <title>HBCU STEMER - {pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* TODO:
                - check if viewport needs to be added,
                - add favicon image
                <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <link rel="icon" href="/favicon.png" />
            </Head>
        </>
    )
}
