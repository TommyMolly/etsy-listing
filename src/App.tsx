import React from "react";
import Listing from "./components/Listing";
import data from "./data/etsy.json";
import "./App.css";

const items = data;

function App() {
  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  );
}

export default App;
