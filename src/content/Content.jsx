import styles from "./index.module.scss";
import Card from "../card/Card";

const Content = ({ obj, setCardClick, obj2 }) => {
  return (
    <div className={styles.Content}>
      {obj.map((cocktail, i) => (
        <Card
          obj={cocktail}
          setCardClick={setCardClick}
          key={cocktail.idDrink}
        />
      ))}
    </div>
  );
};

export default Content;
