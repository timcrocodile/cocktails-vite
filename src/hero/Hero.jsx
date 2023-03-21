import "./hero.scss";

const Hero = ({ SetCategory }) => {
  const onHandleClick = (value) => {
    SetCategory(value);
  };
  return (
    <div className="Hero">
      <h1>tim crocodile cocktails</h1>
      <hr />
      {/* <ul className="Hero__Lecter">
        <li onClick={() => onHandleClick("a")}>a</li>
        <li onClick={() => onHandleClick("b")}>b</li>
      </ul> */}
      <ul className="Hero__List">
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee / Tea</li>
      </ul>
    </div>
  );
};
export default Hero;
