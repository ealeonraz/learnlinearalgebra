import CreateCard from "./components/homecard";
import styles from "./page.module.css";
import { ChapterInfo } from "./types/types"
import queryInfo from "./services/infoServices";
import Script from "next/script";


export default async function  Home() {

  const data: ChapterInfo[] = await queryInfo()

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
    <div className={styles.main_info}>
      <h1 className={styles.main_header}>Getting started</h1>
      <div className={styles.main_par}>
        This website is designed to help students build a strong foundation in
        linear algebra by providing guidance on essential proofs. This is meant
        for introductory topics including vectors, matrices, row operations on
        matrices, linear transformations, determinants, vector spaces,
        eigenvalues, orthogonality, and much more. Below, you&apos;ll find various
        sections that cover key topics for getting started.
      </div>
      <div className={styles.mapped_cards}>
        {data.map((card, index) => (
          <CreateCard
            key={index}
            sectionName={card.section_chapter}
            sectionInfo={card.chapter_info}
            link={card.chapter_link}
          />
        ))}
      </div>
    </div>
    </>
  );
}
