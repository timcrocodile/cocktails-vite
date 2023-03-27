import styles from "./index.module.scss";

const Singleitem = ({ setCardClick, obj }) => {
  const onHandleClick = () =>
    setCardClick((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const ingredients = [];
  for (let i = 1; obj[`strIngredient${i}`]; i++) {
    const ingredientName = obj[`strIngredient${i}`];
    const ingredientImgSrc = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
    ingredients.push({
      name: ingredientName,
      image: ingredientImgSrc,
      quantity: obj[`strMeasure${i}`],
    });
  }

  return (
    <div className={styles.Singleitem}>
      <div className={styles.Singleitemtext}>
        <h1>Nome :{obj.strDrink}</h1>
        <p>Categoria : {obj.strCategory}</p>
        <h3>Tipologia Bicchiere :{obj.strGlass}</h3>
        <div className={styles.Lists}></div>
        <ul className={styles.IngredientsList}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <img src={ingredient.image} alt={ingredient.name} />
              <span>{ingredient.name}</span>
              <span>{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
        <p className={styles.Instructions}>
          Come Prepararlo : {obj.strInstructionsIT}
        </p>
        <button className={styles.CloseBtn} onClick={onHandleClick}>
          x
        </button>
      </div>
      <div className={styles.Image}>
        <img src={obj.strDrinkThumb} alt={obj.stridDrink} />
      </div>
    </div>
  );
};

export default Singleitem;
