import styles from "./index.module.scss";

const Singleitem = ({ setCardClick, obj }) => {
  const onHandleClick = () =>
    setCardClick((prev) => ({
      ...prev,
      isVisible: false,
    }));
  return (
    <div className={styles.Singleitem}>
      <div className={styles.Singleitemtext}>
        <h1>{obj.strDrink}</h1>
        <p>{obj.strCategory}</p>
        <h3>{obj.strGlass}</h3>
        <div className={styles.Lists}></div>
        <ul>
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
        </ul>
        <button onClick={onHandleClick}>x</button>
      </div>
      <div className={styles.Image}>
        <img src={obj.strDrinkThumb} alt={obj.stridDrink} />
        <div className={styles.Carousel}>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
};

export default Singleitem;
