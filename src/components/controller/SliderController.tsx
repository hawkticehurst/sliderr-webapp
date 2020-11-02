import React, { useEffect, useState } from "react";
import ConnectSlider from "./ConnectSlider";
import SetSliderBoundaries from "./SetSliderBoundaries";
import "./SliderController.css";

// type Props = {
//   callback: () => void,
// }

function SliderController() {
  const [supportsBluetooth, setSupportsBluetooth] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isLeftBoundary, setIsLeftBoundary] = useState(false);
  const [isRightBoundary, setIsRightBoundary] = useState(false);

  useEffect(() => {
    if (navigator.bluetooth) {
      setSupportsBluetooth(true);
    }
  }, []);

  const connectToDevice = async () => {
    try {
      // Search for Bluetooth devices that advertise a battery service
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      setIsConnected(true);

      // Add an event listener to detect when a device disconnects
      device.addEventListener("gattserverdisconnected", onDisconnected);

      // Try to connect to the remote GATT Server running on the Bluetooth device
      if (device.gatt) {
        const server = await device.gatt.connect();

        // Get the battery service from the Bluetooth device
        const service = await server.getPrimaryService("battery_service");

        // Get the battery level characteristic from the Bluetooth device
        const characteristic = await service.getCharacteristic("battery_level");

        // Subscribe to battery level notifications
        characteristic.startNotifications();

        // When the battery level changes, call a function
        characteristic.addEventListener(
          "characteristicvaluechanged",
          handleCharacteristicValueChanged
        );

        // Read the battery level value
        const reading = await characteristic.readValue();

        console.log(reading);
      }
      // Show the initial reading on the web page
      // setBatteryLevel(reading.getUint8(0) + '%');
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  };

  /**
   * Let the user know when their device has been disconnected.
   */
  const onDisconnected = (event: Event) => {
    alert(`The device ${event.target} is disconnected`);
    setIsConnected(false);
  };

  /**
   * Update the value shown on the web page when a notification is
   * received.
   */
  const handleCharacteristicValueChanged = (event: Event) => {
    console.log("handleCharacteristicValueChanged");
    // console.log(event.target.value.getUint8(0));
    // setBatteryLevel(event.target.value.getUint8(0) + '%');
  };

  const setLeftBoundary = () => {
    setIsLeftBoundary(true);
  };

  const setRightBoundary = () => {
    setIsRightBoundary(true);
  };

  return (
    <section id="setup-container">
      {!isConnected ? (
        <ConnectSlider
          supportsBluetooth={supportsBluetooth}
          connectToDevice={connectToDevice}
        />
      ) : (
        <SetSliderBoundaries
          isLeftBoundary={isLeftBoundary}
          setLeftBoundary={setLeftBoundary}
          isRightBoundary={isRightBoundary}
          setRightBoundary={setRightBoundary}
        />
      )}
    </section>
  );
}

export default SliderController;
