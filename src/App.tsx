import React from "react";
import "./App.css";
import List from "./components/generics/List";
import RandomNumber from "./components/restrict/RandomNumber";
import Button from "./components/html/Button";
import Input from "./components/html/Input";
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        variant="primary"
      >
        Primary button
      </Button>
      <Input type="text">ABC</Input>
    </div>
  );
}

export default App;
