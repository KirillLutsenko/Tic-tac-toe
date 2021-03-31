import React from 'react';
import { FieldSquareType } from 'types';
import './FieldSquare.scss';

export const FieldSquare = ({ value, makeMoveClick }) => {
  return (
    <button
      className="field__square square"
      onClick={makeMoveClick}
      type="button"
    >
      {value}
    </button>
  );
};

FieldSquare.propTypes = FieldSquareType;
