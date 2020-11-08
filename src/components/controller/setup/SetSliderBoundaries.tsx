import React, { Fragment } from "react";
import PrimaryButton from "../../common/PrimaryButton";
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
          <section className="set-boundary-button-container">
            <button className="circle-button-2">
              <HiArrowLeft className="circle-button-icon-2" />
            </button>
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
          <section className="set-boundary-button-container">
            <button className="circle-button-2">
              <HiArrowRight className="circle-button-icon-2" />
            </button>
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
