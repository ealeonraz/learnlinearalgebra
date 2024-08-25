import CreateCard from "./components/homecard";
import styles from "./page.module.css";
import { ChapterInfo } from "./types/types"
import queryInfo from "./services/infoServices";

export default async function  Home() {

  const data: ChapterInfo[] = await queryInfo()

  return (
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
  );
}
