import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import "./Welcome.css";

type Props = {
  callback: () => void;
};

function Welcome({ callback }: Props) {
  return (
    <section id="welcome-container">
      <p>Welcome to</p>
      <h1>sliderr</h1>
      <PrimaryButton buttonText="continue" buttonCallback={callback} />
    </section>
  );
}

export default Welcome;
