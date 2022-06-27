import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  return (
    <div className="App">
      <Oscar>
        <Heading>Heading content</Heading>
      </Oscar>
      <Greet name="Thang Vo" isLoggedIn={!!1} />
    </div>
  );
}

export default App;
