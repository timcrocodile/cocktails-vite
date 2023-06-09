import styles from "./hero.module.scss";

const Hero = ({ SetCategory }) => {
  const onHandleClick = (value) => {
    SetCategory(value);
  };
  return (
    <div className={styles.Hero}>
      <h1>tim crocodile cocktails</h1>
      <hr />
      {/* <ul className="Hero__Lecter">
        <li onClick={() => onHandleClick("a")}>a</li>
        <li onClick={() => onHandleClick("b")}>b</li>
      </ul> */}
      <ul className={styles.HeroList}>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee / Tea</li>
        <li onClick={() => onHandleClick("Beer")}>Beer</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>
          Punch / Party Drink
        </li>
        <li onClick={() => onHandleClick("Cocoa")}>Cocoa</li>
      </ul>
    </div>
  );
};
export default Hero;
