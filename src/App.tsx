import React from "react";
import "./App.css";
import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Badman", "Spiderman", "Hulk"]}
        handleClick={(name) => {
          console.log(name);
        }}
      />
      <List
        items={[1, 2, 3]}
        handleClick={(name) => {
          console.log(name);
        }}
      />
      <List
        items={[{ name: "Thang" }, { name: "Vo" }, { name: "Hieu" }]}
        handleClick={(name) => {
          console.log(name);
        }}
      />
    </div>
  );
}

export default App;
