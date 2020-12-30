import React, { useState } from "react";
import Welcome from "./welcome/Welcome";
import SliderControlContainer from "./controller/SliderControlContainer";
import "./App.css";

function App() {
  const [onWelcome, setOnWelcome] = useState(true);

  const welcomeCallback = () => {
    setOnWelcome(false);
  };

  return (
    <div className="App">
      {onWelcome ? (
        <Welcome callback={welcomeCallback} />
      ) : (
        <SliderControlContainer />
      )}
    </div>
  );
}

export default App;
