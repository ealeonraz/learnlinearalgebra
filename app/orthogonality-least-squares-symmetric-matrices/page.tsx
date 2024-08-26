import queryData from '../services/services';
import { Section } from '../types/types';
import styles from './page.module.css'
import CreateCard from '../components/sectionscard';

export default async function Fundamentals() {
  const chatperName = "Orthogonality, Least Squares and Symmetric Matrices"
  const data: Section[] = await queryData(chatperName);
  return (
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
  );
  }
  