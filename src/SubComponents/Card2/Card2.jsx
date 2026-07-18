import "./Card2.css";

const Card2 = ({ quote, name }) => {
  return (
    <div className="card2-div">
      <p>{quote}</p>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card2;
