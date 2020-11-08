import React from "react";
import NavBar from "../../common/NavBar";
import WideButton from "../../common/WideButton";
import SliderController from "./SliderController";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
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
      <SliderController title="Acceleration" defaultVal={75} />
      <SliderController title="Speed" defaultVal={35} />
      <section className="left-right-button-container">
        <button className="circle-button">
          <HiArrowLeft className="circle-button-icon" />
        </button>
        <button className="circle-button">
          <BiHomeAlt className="circle-button-icon" />
        </button>
        <button className="circle-button">
          <HiArrowRight className="circle-button-icon" />
        </button>
      </section>
    </section>
  );
}

export default SliderControls;
