import React from 'react';
import PrimaryButton from '../common/PrimaryButton';
import './Welcome.css';

function Welcome() {
  return (
    <section id="welcome-container">
      <p>Welcome to</p>
      <h1>sliderr</h1>
      <PrimaryButton buttonText="continue" />
    </section>
  );
}

export default Welcome;
