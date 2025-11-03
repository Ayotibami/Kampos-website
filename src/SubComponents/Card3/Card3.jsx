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
    <>
      <div className="card-3-div" style={{ backgroundColor: bg }}>
        <div className="card-3-div-div-1">
          <h2>{title}</h2>
          <figure className="c">
            <img src={`Images/${logo}.png`} alt="kappy" />
          </figure>
        </div>
        <figure>
          <img src={`Images/${img}.png`} alt="kappy" />
        </figure>

        <div className="card-3-div-div-2">
          <div className="card-3-div-num-div">
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

      <div className="card-3-div-div-2-mobile">
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
    </>
  );
};

export default Card3;
