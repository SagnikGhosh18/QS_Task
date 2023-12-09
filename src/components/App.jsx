import React from "react";
import { useState, useEffect } from "react";
import { fetchData } from "../data/data";
import Navbar from "./Navbar/Navbar";
import "../App.css";


function App() {
  const [displayOption, setDisplayOption] = useState("status");
  const [orderOption, setOrderOption] = useState("priority");
  
  const data = fetchData();

  function handleDisplay(value){
    setDisplayOption(value);
  }

  function orderDisplay(value){
    setOrderOption(value);
  }

  console.log(data);

  return (
    <div className="app">
      <Navbar trigDisplay={handleDisplay} trigOrder={orderDisplay} />
      <h1>{displayOption}</h1>
      <h1>{orderOption}</h1>
    </div>
  );
}

export default App;