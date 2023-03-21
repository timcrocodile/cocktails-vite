import "./index.scss";
import { useState } from "react";

const Card = ({ obj }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="Card">
      <img
        src={obj.strDrinkThumb}
        alt={obj.strCategory}
        onClick={handleImageClick}
      />
      {/* <div className="Card__Text"> */}
      {/* <div className={`Card__Text ${isHidden ? "hidden" : ""}`}> */}
      <div className={`Card__Text ${isHidden ? "" : "Card__Text--hidden"}`}>
        <h3>{obj.strDrink}</h3>
        <h3>Ingredienti :</h3>
        <ul>
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
        </ul>
        <h3 className="Card__Text--Instructions" onClick={handleClick}>
          {" "}
          Come prepararlo :
          {isExpanded
            ? obj.strInstructionsIT
            : obj.strInstructionsIT.slice(0, 25) + "..."}
        </h3>
      </div>
    </div>
  );
};

export default Card;
