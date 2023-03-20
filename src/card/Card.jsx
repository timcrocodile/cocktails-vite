import "./index.scss";

const Card = ({ obj }) => {
  // const obj = {
  //   idDrink: "7777",
  //   strDrink: "drink",
  //   strCategory: "cocktail",
  //   strInstructionsIT: "instructions it",
  //   strIngredient1: "uovo",
  //   strIngredient2: "zucchero",
  //   strIngredient3: "farina",
  //   strDrinkThumb:
  //     "https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg",
  // };

  return (
    <div className="Card">
      <img src={obj.strDrinkThumb} alt={obj.strCategory} />
      <div className="Card__Text">
        <h3>{obj.strDrink}</h3>
        <ul>
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
        </ul>
        <h3>{obj.strInstructionsIT}</h3>
      </div>
    </div>
  );
};

export default Card;
