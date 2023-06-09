// import styles from "./hero.module.scss";
import styled from "styled-components";
import { useState } from "react";

// background-image: url("https://images.unsplash.com/photo-1596404643764-2a2461483a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGltZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 300px;

  background-image: url("https://www.thecocktailproject.com/sites/default/files/styles/brand-slider-image/public/TCP_01-01_Homepage_Margarita_1400x450.jpg?itok=uGqre-yQ");
  background-size: 100%;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 10px 10px 4px rgb(0, 165, 0);
  color: white;
  & hr {
    width: 80%;
    border: 1px groove rgb(246, 157, 2);
    border-width: 4px;
  }
  @media screen and (max-width: 768px) {
    width: 700px;
    content: contain;
  }
`;

const HeroList = styled.ul`
display: flex;
    margin: 0 20px;
    padding: 0;
    list-style: none;
    gap: 30px;
    & li {
      background-color: rgb(0, 165, 0);
      padding: 2px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.7s;
      &:hover {
        color:  rgb(246, 157, 2);

      }
      @media screen and (max-width: 768px){
       max-width :768px;
        
        display : flex;
        
        justify-content:center;
        gap:10px 
        &li {
          font-size : 16px;
          padding: 5px 10px;
          
        }
        
      }
      `;

const Hero = ({ SetCategory }) => {
  const onHandleClick = (value) => {
    SetCategory(value);
  };

  return (
    <HeroWrapper>
      <h1>tim crocodile cocktails</h1>
      <hr />
      <HeroList>
        <li>seleziona da qui il tipo di bevuta che preferisci!</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee / Tea</li>
        <li onClick={() => onHandleClick("Beer")}>Beer</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>
          Punch / Party Drink
        </li>
        <li onClick={() => onHandleClick("Cocoa")}>Cocoa</li>
      </HeroList>
    </HeroWrapper>
  );
};
export default Hero;
