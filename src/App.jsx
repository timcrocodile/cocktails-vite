import "./App.css";
import Navbar from "../src/navbar/Navbar";
import Hero from "../src/hero/Hero";
import Content from "../src/content";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import { useState, useEffect } from "react";

function App() {
  const [CocktailList, setCocktailList] = useState([]);
  const [Category, SetCategory] = useState("Cocktail");
  const [filter, setfilter] = useState("a");

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

  const onhandleClicka = () => setfilter("a");
  const onhandleClickb = () => setfilter("b");
  const onhandleClickc = () => setfilter("c");

  return (
    <div className="App">
      <Navbar />
      <Hero SetCategory={SetCategory} />
      <hr />
      <p>
        al primo caricamento della pagina vengono visualizzati solo i cocktails
        che iniziano con lettera "s" ma se vuoi cliccando sulle lettere qui
        sotto puoi vedere tutti i cocktails del mondo🗺️
      </p>
      <div>
        {<button onClick={onhandleClicka}>A</button>}
        {<button onClick={onhandleClickb}>B</button>}
        {<button onClick={onhandleClickc}>C</button>}
      </div>
      <Content obj={filteredList(CocktailList, "strCategory", Category)} />
    </div>
  );
}

export default App;
