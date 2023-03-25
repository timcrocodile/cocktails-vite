import styles from "./index.module.scss";
import { useState } from "react";
import { FaCocktail } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { AiFillTag } from "react-icons/ai";

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

  const onMessageLike = () => {
    setNLikes((prev) => prev + 1);
    setLiked(true);
  };

  const [nLikes, setNLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  // const handleDisappearText = () => {
  //   setIsHidden(false);
  // };

  return (
    <div className={styles.Card}>
      <img
        src={obj.strDrinkThumb}
        alt={obj.strCategory}
        onMouseOver={handleImageClick}
        // onMouseOut={handleDisappearText}
      />{" "}
      <div className={styles.Headings}>
        <h4 className={styles.Title}>{obj.strDrink}</h4>
        <div>
          <img
            className={`heart ${liked ? "liked" : ""}`}
            onClick={onMessageLike}
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <span className="like-count">{nLikes}</span>
        </div>
      </div>
      {/* { <div className="Card__Text"> }
      {<div className={`Card__Text ${isHidden ? "hidden" : ""}`}> } */}
      {/* <div className={`Card__Text ${isHidden ? "" : "Card__Text--hidden"}`}> */}
      <div
        className={`${styles.CardText} ${
          isHidden ? "" : styles.CardTexthidden
        }`}
      >
        {/* <div className={styles.CardTexthidden} id={isHidden}> */}
        <ul>
          <li>
            <h3 className={styles.DrinkName}>
              {" "}
              Type <FaCocktail /> {obj.strAlcoholic}{" "}
            </h3>
          </li>
          <li>
            {" "}
            <h3>
              {" "}
              #tags
              <AiFillTag /> {obj.strTags}
            </h3>
          </li>
          <li>
            <h3>
              IBA name
              <ImBooks />
              {obj.strIBA}
            </h3>
          </li>
          <li>
            {/* <button onClick={onHandleClick} className={styles.Infos}>
              Ecco la Ricetta!
            </button> */}
            <a onClick={onHandleClick} className={styles.Infos}>
              VEDI LA RICETTA!
            </a>
          </li>
        </ul>

        {/* <h3>Ingredienti :</h3> */}
        {/* <ul>
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
        </ul>{" "} */}

        {/* <h3 className={styles.cardInstructions} onClick={handleClick}>
          Come prepararlo : */}
        {/* {isExpanded
            ? obj.strInstructionsIT
            : obj.strInstructionsIT.slice(0, 25) + "..."} */}
        {/* ho aggiunto la condizione che in caso di condizione non presenti debba stampare un p perchè sennò si bloccava quando non trovava la stringa */}
        {/* {obj.strInstructionsIT
            ? isExpanded
              ? obj.strInstructionsIT
              : obj.strInstructionsIT.slice(0, 25) + "..."
            : "Istruzioni non presenti"}
        </h3> */}
      </div>
    </div>
  );
};

export default Card;
