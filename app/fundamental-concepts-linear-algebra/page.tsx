import queryData from '../services/services';
import { Section } from '../types/types';
import CreateCard from '../components/sectionscard';
import Script from 'next/script';

export default async function Fundamentals() {
  const chatperName = 'Fundamental Concepts in Linear Algebra'
  const data: Section[] = await queryData(chatperName);

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
    <div className= "sections_body">
      <div className="sections_header">
        {chatperName}     
      </div>
      <div className= "sections_cards">
        {data.map((chapter) => (
          <CreateCard
            key = {chapter.section_key}
            sectionName={chapter.section_name}
            sectionInfo={chapter.section_chapter}
            link={chapter.chapter_link.concat(chapter.section_link)}
          />
        ))}
      </div>
  </div>
  </>
  );
}
