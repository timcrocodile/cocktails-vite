import styles from "./App.module.scss";
import Navbar from "../src/navbar/Navbar";
import Hero from "../src/hero/Hero";
import Content from "../src/content";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import { useState, useEffect } from "react";
import Footer from "./footer/Footer";
import Singleitem from "./singleitem";

function App() {
  const [CocktailList, setCocktailList] = useState([]);
  const [Category, SetCategory] = useState("Cocktail");
  const [filter, setfilter] = useState("a");
  const [cardWasClicked, setCardClick] = useState({
    isVisible: false,
    payload: {},
  });

  // useEffect(() => {
  //   GET("/search.php?f=d").then(({ drinks }) => {
  //     setCocktailList(() => drinks);
  //   });
  // }, []);

  useEffect(() => {
    GET(`search.php?f=${filter}`).then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, [filter]);

  //nel database non esistono cocktails per le lettere u ed x
  const onhandleClicka = () => setfilter("a");
  const onhandleClickb = () => setfilter("b");
  const onhandleClickc = () => setfilter("c");
  const onhandleClickd = () => setfilter("d");
  const onhandleClicke = () => setfilter("e");
  const onhandleClickf = () => setfilter("f");
  const onhandleClickg = () => setfilter("g");
  const onhandleClickh = () => setfilter("h");
  const onhandleClicki = () => setfilter("i");
  const onhandleClickj = () => setfilter("j");
  const onhandleClickk = () => setfilter("k");
  const onhandleClickl = () => setfilter("l");
  const onhandleClickm = () => setfilter("m");
  const onhandleClickn = () => setfilter("n");
  const onhandleClicko = () => setfilter("o");
  const onhandleClickp = () => setfilter("p");
  const onhandleClickq = () => setfilter("q");
  const onhandleClickr = () => setfilter("r");
  const onhandleClicks = () => setfilter("s");
  const onhandleClickt = () => setfilter("t");
  // const onhandleClicku = () => setfilter("u");
  const onhandleClickv = () => setfilter("v");
  const onhandleClickw = () => setfilter("w");
  // const onhandleClickx = () => setfilter("x");
  const onhandleClicky = () => setfilter("y");
  const onhandleClickz = () => setfilter("z");
  return (
    <div className={styles.App}>
      <Navbar />
      {cardWasClicked.isVisible ? (
        <Singleitem setCardClick={setCardClick} obj={cardWasClicked.payload} />
      ) : (
        <>
          <Hero SetCategory={SetCategory} />
          {/* <hr /> */}
          <p className={styles.Paragrafo}>
            Al momento stai vedendo i "Cocktails" che iniziano con la lettera A,
            andando a modificare i criteri di ricerca tramite i bottoni di
            questa sezione puoi vedere tutti i cocktails del mondo🗺️
          </p>
          <div className={styles.Buttons}>
            {<button onClick={onhandleClicka}>A</button>}
            {<button onClick={onhandleClickb}>B</button>}
            {<button onClick={onhandleClickc}>C</button>}
            {<button onClick={onhandleClickd}>D</button>}
            {<button onClick={onhandleClicke}>E</button>}
            {<button onClick={onhandleClickf}>F</button>}
            {<button onClick={onhandleClickg}>G</button>}
            {<button onClick={onhandleClickh}>H</button>}
            {<button onClick={onhandleClicki}>I</button>}
            {<button onClick={onhandleClickj}>J</button>}
            {<button onClick={onhandleClickk}>K</button>}
            {<button onClick={onhandleClickl}>L</button>}
            {<button onClick={onhandleClickm}>M</button>}
            {<button onClick={onhandleClickn}>N</button>}
            {<button onClick={onhandleClicko}>O</button>}
            {<button onClick={onhandleClickp}>P</button>}
            {<button onClick={onhandleClickq}>Q</button>}
            {<button onClick={onhandleClickr}>R</button>}
            {<button onClick={onhandleClicks}>S</button>}
            {<button onClick={onhandleClickt}>T</button>}
            {/* {<button onClick={onhandleClicku}>U</button>} */}
            {<button onClick={onhandleClickv}>V</button>}
            {<button onClick={onhandleClickw}>W</button>}
            {/* {<button onClick={onhandleClickx}>X</button>} */}
            {<button onClick={onhandleClicky}>Y</button>}
            {<button onClick={onhandleClickz}>Z</button>}
          </div>
          <Content
            obj={filteredList(CocktailList, "strCategory", Category)}
            setCardClick={setCardClick}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
