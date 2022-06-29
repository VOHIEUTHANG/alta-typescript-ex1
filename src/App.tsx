import React from "react";
import "./App.css";
import Text from "./components/polymorphic/Text";
function App() {
  return (
    <div className="App">
      <Text
        elementType="h1"
        size="md"
        style={{ textAlign: "center" }}
        color="primary"
      >
        Heading
      </Text>
      <Text elementType="label" htmlFor="#heading" size="md" color="primary">
        Heading
      </Text>
    </div>
  );
}

export default App;
