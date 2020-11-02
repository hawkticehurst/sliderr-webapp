import React from "react";
import NavBar from "../../common/NavBar";
import WideButton from "../../common/WideButton";
import "./SliderControls.css";

function SliderControls() {
  return (
    <section id="controls-container">
      <NavBar />
      <WideButton
        buttonText="Create New Move"
        buttonCallback={() => {
          alert("create new move");
        }}
      />
    </section>
  );
}

export default SliderControls;
