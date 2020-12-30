export let slider: BluetoothDevice;
let sliderCharacteristic: BluetoothRemoteGATTCharacteristic;

const PRIMARY_SERVICE = "0000ffe0-0000-1000-8000-00805f9b34fb";
const PRIMARY_CHARACTERISTIC = "0000ffe1-0000-1000-8000-00805f9b34fb";

// ---- Bluetooth ----

export const connectToDevice = async (
  setIsConnected: (state: boolean) => void
) => {
  try {
    // Search for Bluetooth devices that advertise a battery service
    slider = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: [PRIMARY_SERVICE],
    });

    // Add an event listener to detect when a device disconnects
    slider.addEventListener("gattserverdisconnected", (event) => {
      onDisconnected(event, setIsConnected);
    });

    // Try to connect to the remote GATT Server running on the Bluetooth device
    if (slider.gatt) {
      const server = await slider.gatt.connect();

      // Set SliderController component state
      setIsConnected(true);

      // Get the battery service from the Bluetooth device
      const service = await server.getPrimaryService(PRIMARY_SERVICE);

      // Get the slider characteristic from the Bluetooth device
      const characteristic = await service.getCharacteristic(
        PRIMARY_CHARACTERISTIC
      );

      sliderCharacteristic = characteristic;
    }
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

export const disconnectFromDevice = () => {
  console.log(slider);
  if (slider.gatt) {
    slider.gatt.disconnect();
  }
};

// ---- Slider Commands ----

export const stopSlider = () => {
  sendSliderCommand("stop!");
};

export const moveSliderLeft = () => {
  sendSliderCommand("movL!");
};

export const moveSliderRight = () => {
  sendSliderCommand("movR!");
};

export const setLeftBoundary = (
  setIsLeftBoundary: (state: boolean) => void
) => {
  sendSliderCommand("setL!");
  setIsLeftBoundary(true);
};

export const setRightBoundary = (
  setIsRightBoundary: (state: boolean) => void
) => {
  sendSliderCommand("setR!");
  setIsRightBoundary(true);
};

export const moveSliderHome = () => {
  sendSliderCommand("home!");
};

export const setSliderAcceleration = (acceleration: number) => {
  const commandString = `setA:${acceleration}!`;
  sendSliderCommand(commandString);
};

export const setSliderSpeed = (acceleration: number) => {
  const commandString = `setS:${acceleration}!`;
  sendSliderCommand(commandString);
};

export const setMoveInPoint = () => {
  sendSliderCommand("setI!");
};

export const setMoveOutPoint = () => {
  sendSliderCommand("setO!");
};

export const runMove = () => {
  sendSliderCommand("runM!");
};

function sendSliderCommand(command: string) {
  const charArray: number[] = [];
  for (let i = 0; i < command.length; i++) {
    charArray[i] = command.charCodeAt(i);
  }
  sliderCharacteristic.writeValue(Uint8Array.of(...charArray));
}
