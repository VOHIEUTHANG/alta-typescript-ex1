import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
function App() {
  const personName = {
    first: "Thang",
    last: "Vo",
  };
  const nameList = Array(3).fill({
    first: "Thang",
    last: "Vo",
  });
  return (
    <div className="App">
      <Greet name="ThangVo" isLoggedIn={false} messageCount={10} />
      <Person name={personName} nameList={nameList} />
    </div>
  );
}

export default App;
