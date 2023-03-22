import styles from "./index.module.scss";

const Singleitem = ({ setCardClick }) => {
  const onHandleClick = setCardClick(true);
  return (
    <div className={styles.Singleitem}>
      <div className={styles.Singleitemtext}>
        <h1>strDrink</h1>
        <p>strCategory</p>
        <h3>Ingredients</h3>
        <div className={styles.Lists}></div>
        <ul>
          <li>strIngredient1</li>
          <li>strIngredient2</li>
          <li>strIngredient3</li>
        </ul>
        <button onClick={onHandleClick}>x</button>
      </div>
      <div className={styles.Image}>
        <div className={styles.Carousel}>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
};

export default Singleitem;
