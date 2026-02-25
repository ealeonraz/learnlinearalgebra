import 'katex/dist/katex.min.css';
import { CreateCardProps } from '../types/types';

const CreateCard = (laText: CreateCardProps): JSX.Element => {
  return (
    <a href={laText.link} className="home_card">
      <div className="home_card_inner">
        <h2 className="home_card_title">{laText.sectionName}</h2>
      </div>
    </a>
  );
};

export default CreateCard;