import React from "react";
import "./PrimaryButton.css";

type Props = {
  buttonText: string;
  buttonCallback: () => void;
};

function PrimaryButton({ buttonText, buttonCallback }: Props) {
  return <button onClick={() => buttonCallback()}>{buttonText}</button>;
}

export default PrimaryButton;
