import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container styles={{ padding: "1rem", border: "1px solid black" }} />
    </div>
  );
}

export default App;
