import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import "../App.css";


import StatusView from "./StatusView/StatusView";
import PriorityView from "./PriorityView/PriorityView";
import UserView from "./UserView/UserView";

function App() {
  const [displayOption, setDisplayOption] = useState("status");
  const [orderOption, setOrderOption] = useState("priority");
  const [componentDisplay, setComponentDisplay] =  useState(<StatusView />);


  function handleDisplay(value){
    setDisplayOption(value);
  }

  function orderDisplay(value){
    setOrderOption(value);
  }
  
  useEffect(() => {
    switch(displayOption){
      case "status":  setComponentDisplay(<StatusView orderBy={orderOption} />);
                      break;
      case "priority":setComponentDisplay(<PriorityView orderBy={orderOption} />);
                      break;
      case "user":  setComponentDisplay(<UserView orderBy={orderOption} />);
                    break;
      default: setComponentDisplay(<StatusView />);
    }
  },[displayOption, orderOption]);

  return (
    <div className="app">
      <Navbar trigDisplay={handleDisplay} trigOrder={orderDisplay} />
      {componentDisplay}
    </div>
  );
}

export default App;