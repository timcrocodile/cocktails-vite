import styles from "./index.module.scss";
import Card from "../card/Card";

const Content = ({ obj, setCardClick }) => {
  return (
    <div className={styles.Content}>
      {obj.map((cocktail) => (
        <Card obj={cocktail} setCardClick={setCardClick} />
      ))}
    </div>
  );
};

export default Content;
