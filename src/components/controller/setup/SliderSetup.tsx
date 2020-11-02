import React from "react";
import ConnectSlider from "./ConnectSlider";
import SetSliderBoundaries from "./SetSliderBoundaries";
import {
  connectToDevice,
  setLeftBoundary,
  setRightBoundary,
} from "../../../slider/bluetooth";

type Props = {
  supportsBluetooth: boolean;
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  isLeftBoundary: boolean;
  setIsLeftBoundary: (leftBoundary: boolean) => void;
  setIsRightBoundary: (rightBoundary: boolean) => void;
};

function SetupSlider({
  supportsBluetooth,
  isConnected,
  setIsConnected,
  isLeftBoundary,
  setIsLeftBoundary,
  setIsRightBoundary,
}: Props) {
  return (
    <section id="setup-container">
      {!isConnected ? (
        <ConnectSlider
          supportsBluetooth={supportsBluetooth}
          connectToDevice={() => {
            connectToDevice(setIsConnected);
          }}
        />
      ) : (
        <SetSliderBoundaries
          isLeftBoundary={isLeftBoundary}
          setLeftBoundary={() => {
            setLeftBoundary(setIsLeftBoundary);
          }}
          setRightBoundary={() => {
            setRightBoundary(setIsRightBoundary);
          }}
        />
      )}
    </section>
  );
}

export default SetupSlider;
