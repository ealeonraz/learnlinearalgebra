import queryData from '../services/services';
import { Section } from '../types/types';
import CreateCard from '../components/sectionscard';

export default async function Fundamentals() {
  const chatperName = "Vector spaces, Eigenvalues, and eigenvectors"
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
