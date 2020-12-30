import React, { Fragment } from "react";
import PrimaryButton from "../../common/PrimaryButton";
import {
  stopSlider,
  moveSliderLeft,
  moveSliderRight,
} from "../../../utils/bluetooth";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import "./SetSliderBoundaries.css";

type Props = {
  isLeftBoundary: boolean;
  setLeftBoundary: () => void;
  setRightBoundary: () => void;
};

function SetSliderBoundaries({
  isLeftBoundary,
  setLeftBoundary,
  setRightBoundary,
}: Props) {
  return (
    <Fragment>
      <h1>Set Boundaries</h1>
      {!isLeftBoundary ? (
        <Fragment>
          <p>
            Before you can use the slider you need to manually set its
            boundaries.
          </p>
          <p>
            Please move the slider to the left edge and then set the left
            boundary.
          </p>
          <section className="set-boundary-container">
            <section className="button-container">
              <button
                className="circle-button-2"
                onMouseDown={moveSliderLeft}
                onMouseUp={stopSlider}>
                <HiArrowLeft className="circle-button-icon-2" />
              </button>
              <button
                className="circle-button-2"
                onMouseDown={moveSliderRight}
                onMouseUp={stopSlider}>
                <HiArrowRight className="circle-button-icon-2" />
              </button>
            </section>
            <PrimaryButton
              buttonText="set left boundary"
              buttonCallback={setLeftBoundary}
            />
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Great! Now move the slider to the right edge and set the right
            boundary.
          </p>
          <section className="set-boundary-container">
            <section className="button-container">
              <button
                className="circle-button-2"
                onMouseDown={moveSliderLeft}
                onMouseUp={stopSlider}>
                <HiArrowLeft className="circle-button-icon-2" />
              </button>
              <button
                className="circle-button-2"
                onMouseDown={moveSliderRight}
                onMouseUp={stopSlider}>
                <HiArrowRight className="circle-button-icon-2" />
              </button>
            </section>
            <PrimaryButton
              buttonText="set right boundary"
              buttonCallback={setRightBoundary}
            />
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}

export default SetSliderBoundaries;
