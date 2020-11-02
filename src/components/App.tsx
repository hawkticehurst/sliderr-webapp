import React, { useState } from "react";
import Welcome from "./welcome/Welcome";
import SliderController from "./controller/SliderController";
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
        <SliderController />
      )}
    </div>
  );
}

export default App;
