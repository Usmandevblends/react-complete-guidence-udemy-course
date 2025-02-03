import React from "react";
import reactCoreConcepts from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Core", "Essential"];

function Header() {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(3)]} React concepts you will need for
        almost any app you a going to build!
      </p>
    </header>
  );
}

export default Header;
