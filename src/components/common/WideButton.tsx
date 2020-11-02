import React from "react";
import "./WideButton.css";

type Props = {
  buttonText: string;
  buttonCallback: () => void;
};

function WideButton({ buttonText, buttonCallback }: Props) {
  return (
    <button className="wide-button" onClick={() => buttonCallback()}>
      {buttonText}
    </button>
  );
}

export default WideButton;
