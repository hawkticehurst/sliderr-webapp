export let slider: BluetoothDevice;

export const connectToDevice = async (
  setIsConnected: (state: boolean) => void
) => {
  try {
    // Search for Bluetooth devices that advertise a battery service
    slider = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    });

    setIsConnected(true);

    // Add an event listener to detect when a device disconnects
    slider.addEventListener("gattserverdisconnected", (event) => {
      onDisconnected(event, setIsConnected);
    });

    // Try to connect to the remote GATT Server running on the Bluetooth device
    if (slider.gatt) {
      const server = await slider.gatt.connect();

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
const onDisconnected = (
  event: Event,
  setIsConnected: (state: boolean) => void
) => {
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

export const setLeftBoundary = (
  setIsLeftBoundary: (state: boolean) => void
) => {
  setIsLeftBoundary(true);
};

export const setRightBoundary = (
  setIsRightBoundary: (state: boolean) => void
) => {
  setIsRightBoundary(true);
};
