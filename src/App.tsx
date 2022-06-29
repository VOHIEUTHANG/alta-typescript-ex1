import React from "react";
import "./App.css";
import Text from "./components/polymorphic/Text";
function App() {
  return (
    <div className="App">
      <Text as="h1" size="md" style={{ textAlign: "center" }} color="primary">
        Heading
      </Text>
      <Text as="label" htmlFor="#heading" size="md" color="primary">
        Heading
      </Text>
    </div>
  );
}

export default App;
