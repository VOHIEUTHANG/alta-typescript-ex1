import React from "react";
import "./App.css";
import User from "./components/context/User";
import { UserProvider } from "./components/context/UserContext";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
