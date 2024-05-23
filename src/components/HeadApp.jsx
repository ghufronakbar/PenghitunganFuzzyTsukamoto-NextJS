import Head from "next/head"

export const HeadAdmin = () => {
        return (
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta name="fuzzy tsukamoto" content="penghitungan produksi es batu menggunakan algoritma fuzzy tsukamoto" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
        )
}