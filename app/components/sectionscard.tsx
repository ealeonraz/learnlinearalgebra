import styles from "../fundamental-concepts-linear-algebra/page.module.css"

interface CreateCardProps {
  key: number;
  sectionName: string;
  link: string;
}

const CreateCard = (laText: CreateCardProps): JSX.Element => {
  return (
    <a key={laText.key} href={laText.link} className={styles.card}>
      <div className={styles.card_content}>
        <h1 className={styles.card_title}>{laText.sectionName}</h1>
      </div>
    </a>
  );
};

export default CreateCard;
