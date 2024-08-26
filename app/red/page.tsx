import Script from 'next/script';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* You can add other head elements here like title, meta tags */}
        <title>Google Analytics Test</title>
      </Head>

      {/* External Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WXRPDT3LXF"
      />

      {/* Inline Google Analytics Script */}
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

      <div>
        Stop stalking me!
      </div>
    </>
  );
}
