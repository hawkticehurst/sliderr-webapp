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
            Shoot! It looks like your device or browser does not support
            Bluetooth.
          </p>
          <p>Try using a different device or browser (such as Chrome).</p>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ConnectSlider;
