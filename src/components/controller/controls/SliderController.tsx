import React from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./SliderController.css";

type Props = {
  title: string;
  defaultVal?: number;
};

function SliderController({ title, defaultVal }: Props) {
  const SliderWithTooltip = createSliderWithTooltip(Slider);

  return (
    <section className="slider-controller-container">
      <h2>{title}</h2>
      <SliderWithTooltip
        className="slider-controller-slider"
        defaultValue={defaultVal}
        trackStyle={{ backgroundColor: "rgb(250, 250, 250)", height: 3 }}
        handleStyle={{
          borderColor: "white",
          borderWidth: 3,
          height: 28,
          width: 28,
          marginTop: -13,
          backgroundColor: "rgb(27, 28, 31)",
        }}
        railStyle={{ backgroundColor: "rgb(230, 230, 230)", height: 2 }}
        tipProps={{
          placement: "bottom",
        }}
      />
    </section>
  );
}

export default SliderController;
