import { useState } from "react";
import "./Card3.css";
const Card3 = ({ title, text, logo, img, bg, numSelect }) => {
  const [currentNum, setCurrentNum] = useState(0);

  const handleClick = (num) => {
    setCurrentNum(num);
    numSelect(num);
  };

  console.log(currentNum);

  const className1 = currentNum === 0 ? "numSelected" : "numNotSelected";
  const className2 = currentNum === 1 ? "numSelected" : "numNotSelected";
  const className3 = currentNum === 2 ? "numSelected" : "numNotSelected";

  return (
    <div className="card3-div" style={{ backgroundColor: bg }}>
      <div className="card-div-div-1">
        <h2>{title}</h2>
        <figure>
          <img src={`Images/${logo}.png`} alt="kappy" />
        </figure>
      </div>
      <figure>
        <img src={`Images/${img}.png`} alt="kappy" />
      </figure>

      <div className="card-div-div-2">
        <div className="card-div-num-div">
          <div onClick={() => handleClick(0)} className={className1}>
            01
          </div>
          <div onClick={() => handleClick(1)} className={className2}>
            02
          </div>
          <div onClick={() => handleClick(2)} className={className3}>
            03
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card3;
