import "./App.css";
import Navbar from "../src/navbar/Navbar";
import Hero from "../src/hero/Hero";
import Content from "../src/content";
import { GET } from "./utils/http";
import { filteredList } from "./utils/func";
import { useState, useEffect } from "react";

function App() {
  const [CocktailList, setCocktailList] = useState([]);
  const [Category, SetCategory] = useState("Shot");

  // useEffect(() => {
  //   GET("search.php?f=a").then(({ drinks }) => console.log(drinks));
  // });

  useEffect(() => {
    GET("search.php?f=a").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero SetCategory={SetCategory} />
      <Content
        obj={CocktailList.filter(
          (cocktail) => cocktail.strCategory === Category
        )}
        // obj={filteredList(CocktailList, "strCAtegory", Category)}
      />
    </div>
  );
}

export default App;
