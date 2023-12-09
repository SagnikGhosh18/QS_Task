import "./card.css";

const Card = ({id, title, priority, tags}) => {
  return (
    <>
      <div className="card">
        <p>{id}</p>
        <p>{title}</p>
        <div className="lastline">
          <p>{priority}</p>
          <p>{tags}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
