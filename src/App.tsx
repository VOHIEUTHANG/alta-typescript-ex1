import React from "react";
import "./App.css";
import User from "./components/context/User";
import { UserProvider } from "./components/context/UserContext";
import Counter from "./components/state/Couter";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
}

export default App;
