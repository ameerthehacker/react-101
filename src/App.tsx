import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/navbar/navbar";
import Menu from "./components/menu/menu";

export default function App() {
  const [items, setItems] = useState([
    {
      name: "idli",
      image:
        "data:image/jpeg;base64,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"
    }
  ]);

  useEffect(() => {}, []);

  function onAddClick() {
    setItems([
      ...items,
      {
        name: "vadai",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe.jpg"
      }
    ]);
  }

  return (
    <>
      <Navbar brandName="Quantium" />
      <Menu items={items} />
      <button onClick={onAddClick}>Where is the fucking vada?</button>
    </>
  );
}