import React from "react";
import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/PrivateProfile";

function App() {
  return (
    <div className="App">
      <Private component={Profile} isLoggedIn={false} />
    </div>
  );
}

export default App;
