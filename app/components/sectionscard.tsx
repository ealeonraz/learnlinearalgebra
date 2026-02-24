interface CreateCardProps {
  key: number;
  sectionName: string;
  link: string;
}

const CreateCard = (laText: CreateCardProps): JSX.Element => {
  return (
    <a href={laText.link} className="section_card">
      <div className="section_card_inner">
        <h2 className="section_card_title">
          {laText.sectionName}
        </h2>
      </div>
    </a>
  );
};
//
export default CreateCard;