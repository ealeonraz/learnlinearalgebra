import Script from 'next/script';
import Head from 'next/head';

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WXRPDT3LXF');
          `,
        }}
      />
    </>
  );
}
