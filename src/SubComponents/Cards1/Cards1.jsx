import "./Cards1.css";

const Cards1 = ({ card1Heading, card1Text, card1Img }) => {
  return (
    <div className="cards1-div">
      <div>
        <h4>{card1Heading}</h4>
        <p>{card1Text}</p>
      </div>

      <figure className="cards1-figure">
        {card1Img && <img src={`Images/${card1Img}.png`} alt="" />}
      </figure>
    </div>
  );
};

export default Cards1;
