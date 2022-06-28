import React from "react";
import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeProvider } from "./components/context/ThemeContext";
import Counter from "./components/state/Couter";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    </div>
  );
}

export default App;
