import React from "react";
import "./App.css";
import List from "./components/generics/List";
import RandomNumber from "./components/restrict/RandomNumber";
function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isNegative={false} />
    </div>
  );
}

export default App;
