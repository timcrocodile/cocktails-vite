import styles from "./index.module.scss";
import { useState } from "react";

const Card = ({ obj, setCardClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const onHandleClick = () =>
    setCardClick((prev) => ({
      ...prev,
      payload: obj,
      isVisible: true,
    }));

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={styles.Card}>
      <div className={styles.Headings}>
        <h4 className={styles.Title}>{obj.strDrink}</h4>
        <button onClick={onHandleClick} className={styles.Infos}>
          +INFOs
        </button>
      </div>

      <img
        src={obj.strDrinkThumb}
        alt={obj.strCategory}
        onMouseOver={handleImageClick}
      />

      {/* { <div className="Card__Text"> }
      {<div className={`Card__Text ${isHidden ? "hidden" : ""}`}> } */}
      {/* <div className={`Card__Text ${isHidden ? "" : "Card__Text--hidden"}`}> */}
      <div
        className={`${styles.CardText} ${
          isHidden ? "" : styles.CardTexthidden
        }`}
      >
        <h3 className={styles.DrinkName}>{obj.strDrink} 🍹 </h3>
        <h3>Ingredienti :</h3>
        <ul>
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
        </ul>
        <h3 className={styles.cardInstructions} onClick={handleClick}>
          Come prepararlo :
          {/* {isExpanded
            ? obj.strInstructionsIT
            : obj.strInstructionsIT.slice(0, 25) + "..."} */}
          {/* ho aggiunto la condizione che in caso di condizione non presenti debba stampare un p perchè sennò si bloccava quando non trovava la stringa */}
          {obj.strInstructionsIT
            ? isExpanded
              ? obj.strInstructionsIT
              : obj.strInstructionsIT.slice(0, 25) + "..."
            : "Istruzioni non presenti"}
        </h3>
      </div>
    </div>
  );
};

export default Card;
