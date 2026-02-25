interface CreateCardProps {
  sectionName: string;
  link: string;
}

const CreateCard = ({ sectionName, link }: CreateCardProps): JSX.Element => {
  return (
    <a href={link} className="section_card">
      <div className="section_card_inner">
        <h2 className="section_card_title">
          {sectionName}
        </h2>
      </div>
    </a>
  );
};

export default CreateCard;