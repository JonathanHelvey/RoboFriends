import React from "react";
import CardList from "../src/CardList";
import { robots } from "../src/robots";
import SearchBox from "../src/SearchBox";

const App = () => {
  return (
    <div>
      <h2>Robo Friends</h2>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
