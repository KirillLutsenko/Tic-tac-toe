import React from 'react';
import { FieldSquareType } from '../../../../Types';
import './FieldSquare.scss';

export const FieldSquare = ({ value, makeMoveClick }) => (
  <button
    className="field__square square"
    onClick={makeMoveClick}
    type="button"
  >
    {value}
  </button>
);

FieldSquare.propTypes = FieldSquareType;
