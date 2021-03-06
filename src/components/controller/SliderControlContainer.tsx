import React, { Fragment, useEffect, useState } from "react";
import SliderSetup from "./setup/SliderSetup";
import SliderControls from "./controls/SliderControls";
import "./SliderControlContainer.css";

function SliderControlContainer() {
  const [supportsBluetooth, setSupportsBluetooth] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLeftBoundary, setIsLeftBoundary] = useState<boolean>(false);
  const [isRightBoundary, setIsRightBoundary] = useState<boolean>(false);
  const [isSliderSetUp, setIsSliderSetUp] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.bluetooth) {
      setSupportsBluetooth(true);
    }
  }, []);

  useEffect(() => {
    if (isConnected && isLeftBoundary && isRightBoundary) {
      setIsSliderSetUp(true);
    }
  }, [isConnected, isLeftBoundary, isRightBoundary]);

  return (
    <Fragment>
      {!isSliderSetUp ? (
        <SliderSetup
          supportsBluetooth={supportsBluetooth}
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          isLeftBoundary={isLeftBoundary}
          setIsLeftBoundary={setIsLeftBoundary}
          setIsRightBoundary={setIsRightBoundary}
        />
      ) : (
        <SliderControls />
      )}
    </Fragment>
  );
}

export default SliderControlContainer;
