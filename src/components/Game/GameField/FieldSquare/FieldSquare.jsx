import React from 'react';
import './FieldSquare.scss';

export const FieldSquare = ({ value, onClick }) => {
  return (
    <button
      className="field__square square"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
