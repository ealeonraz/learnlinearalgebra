import styles from "../page.module.css";
import 'katex/dist/katex.min.css';
import { CreateCardProps } from '../types/types'

const CreateCard = (laText: CreateCardProps): JSX.Element => {
  return (
    <a href={laText.link} className={styles.card}>
      <div className={styles.card_content}>
        <h1 className={styles.card_title}>{laText.sectionName}</h1>
        <div className={styles.latex_tex}>
          {laText.sectionInfo}
        </div>
      </div>
    </a>
  );
};

export default CreateCard;
