import styles from "./App.module.scss";
import Navbar from "../src/navbar/Navbar";
import Hero from "../src/hero/Hero";
import Content from "../src/content";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import { useState, useEffect } from "react";
import Footer from "./footer/Footer";
import Singleitem from "./singleitem";
import Reservation from "./reservation";
import Popup from "../src/popup";

function App() {
  const [CocktailList, setCocktailList] = useState([]);
  const [Category, SetCategory] = useState("Cocktail");
  const [filter, setfilter] = useState("");
  const [cardWasClicked, setCardClick] = useState({
    isVisible: false,
    payload: {},
  });

  const [ReservationFormIsActive, SetReservationFormActive] = useState(false);
  const [IsPopUpUP, SetPopUpUp] = useState(false);

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

  const [reservationTimeFromChild, setReservationTimeFromChild] = useState("");

  const handleReservationTime = (time) => {
    setReservationTimeFromChild(time);
  };

  const [reservationDatefromChild, setReservationDateFromChild] = useState("");
  const handleReservationDate = (date) => {
    setReservationDateFromChild(date);
  };

  const [InputFullName, SetInputFullName] = useState("");

  const onHandleInput = (e) => SetInputFullName(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // TODO: trasmettere il valore della input (inputValue) all'elemento di ricerca
    SetInputFullName();
  };

  useEffect(() => {
    GET(`search.php?s=${InputFullName}`).then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, [InputFullName]);
  //ancora non funziona bene perchè, li trova, ma per visualizzarli devo andare nella sezione dove sono presenti

  return (
    <div className={styles.App}>
      <Navbar SetReservationFormActive={SetReservationFormActive} />
      {cardWasClicked.isVisible ? (
        <Singleitem setCardClick={setCardClick} obj={cardWasClicked.payload} />
      ) : (
        <>
          {ReservationFormIsActive && (
            <Reservation
              onReservationTimeChange={handleReservationTime}
              onReservationDateChange={handleReservationDate}
              SetPopUpUp={SetPopUpUp}
              SetReservationFormActive={SetReservationFormActive}
              ReservationFormIsActive={ReservationFormIsActive}
            />
          )}
          <Hero SetCategory={SetCategory} />
          {/* <hr /> */}
          <p className={styles.Paragrafo}>
            Con quale lettera inizia il nome del tuo Drink ?
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
          <form onSubmit={onHandleSubmit}>
            <label htmlFor="text">Oppure digita l'iniziale..</label>
            <input
              value={InputFullName}
              onChange={onHandleInput}
              type="text"
              placeholder="Cerca prodotto ..."
              required
            />
          </form>

          <Content
            obj={filteredList(CocktailList, "strCategory", Category)}
            setCardClick={setCardClick}
          />
          <Footer />
        </>
      )}
      {IsPopUpUP && (
        <Popup>
          <h3>
            la tua prenotazione per le ore {reservationTimeFromChild} di{" "}
            {reservationDatefromChild} è stata confermata!
          </h3>
        </Popup>
      )}
    </div>
  );
}

export default App;
