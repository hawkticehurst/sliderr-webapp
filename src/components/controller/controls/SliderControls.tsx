import React from "react";
import NavBar from "../../common/NavBar";
import SliderController from "./SliderController";
import {
  stopSlider,
  moveSliderLeft,
  moveSliderRight,
  moveSliderHome,
  setSliderAcceleration,
  setSliderSpeed,
} from "../../../utils/bluetooth";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
import "./SliderControls.css";

function SliderControls() {
  return (
    <section id="controls-container">
      <NavBar />
      <SliderController
        title="Acceleration"
        onChangeFunc={setSliderAcceleration}
        defaultVal={75}
      />
      <SliderController
        title="Speed"
        onChangeFunc={setSliderSpeed}
        defaultVal={50}
      />
      <section className="left-right-button-container">
        <button
          className="circle-button"
          onMouseDown={moveSliderLeft}
          onMouseUp={stopSlider}>
          <HiArrowLeft className="circle-button-icon" />
        </button>
        <button className="circle-button" onClick={moveSliderHome}>
          <BiHomeAlt className="circle-button-icon" />
        </button>
        <button
          className="circle-button"
          onMouseDown={moveSliderRight}
          onMouseUp={stopSlider}>
          <HiArrowRight className="circle-button-icon" />
        </button>
      </section>
    </section>
  );
}

export default SliderControls;
