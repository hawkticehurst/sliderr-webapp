import React, { Fragment } from "react";
import PrimaryButton from "../common/PrimaryButton";

type Props = {
  isLeftBoundary: boolean;
  setLeftBoundary: () => void;
  isRightBoundary: boolean;
  setRightBoundary: () => void;
};

function SetSliderBoundaries({
  isLeftBoundary,
  setLeftBoundary,
  isRightBoundary,
  setRightBoundary,
}: Props) {
  return (
    <Fragment>
      <h1>Set Boundaries</h1>
      {!isLeftBoundary ? (
        <Fragment>
          <p>
            Before you can control the slider you need to manually set the
            boundaries of the motor.
          </p>
          <p>
            Please move the slider to the left edge and then set the left
            boundary.
          </p>
          <section>
            <PrimaryButton
              buttonText="move left"
              buttonCallback={() => {
                alert("move left");
              }}
            />
            <PrimaryButton
              buttonText="set left boundary"
              buttonCallback={setLeftBoundary}
            />
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Great! Now please move the slider to the right edge and then set the
            right boundary.
          </p>
          <section>
            <PrimaryButton
              buttonText="move right"
              buttonCallback={() => {
                alert("move right");
              }}
            />
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
