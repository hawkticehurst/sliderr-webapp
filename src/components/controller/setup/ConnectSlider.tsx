import React, { Fragment } from "react";
import PrimaryButton from "../../common/PrimaryButton";

type Props = {
  supportsBluetooth: boolean;
  connectToDevice: () => void;
};

function ConnectSlider({ supportsBluetooth, connectToDevice }: Props) {
  return (
    <Fragment>
      <h1>connect to sliderr</h1>
      {supportsBluetooth ? (
        <Fragment>
          <p>Yay! It looks like your device supports Bluetooth.</p>
          <PrimaryButton
            buttonText="connect"
            buttonCallback={connectToDevice}
          />
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Shoot! It looks like Bluetooth is not supported. Try using a
            different device or browser.
          </p>
          <p>Typically using Chrome on a computer or Android phone works.</p>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ConnectSlider;
