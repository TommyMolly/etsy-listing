import React from "react";
import Listing from "./components/Listing";
import data from "./data/etsy.json";
import "./App.css";
import { Item } from "./components/types";

const items: Item[] = data as unknown as Item[];

function App() {
  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  );
}

export default App;
