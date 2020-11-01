import React from 'react';
import './PrimaryButton.css';

type Props = {
  buttonText: string
}

function PrimaryButton({buttonText}: Props) {
  return (
    <button>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
