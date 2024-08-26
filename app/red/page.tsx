import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WXRPDT3LXF"
      />
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
      
      {/* Content */}
      <div>
        STOP STALKING ME!
      </div>
    </>
  );
}
