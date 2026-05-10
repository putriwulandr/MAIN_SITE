import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
