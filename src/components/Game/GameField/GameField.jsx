import React from 'react';
import { GameFieldType } from '../../../Types';
import { FieldSquare } from './FieldSquare/FieldSquare';
import './GameField.scss';

export const GameField = ({ squares, makeMoveClick }) => (
  <div className="game__field field">
    {squares.map((square, index) => (
      <FieldSquare
        // eslint-disable-next-line react/no-array-index-key
        key={`${square} - ${index}`}
        value={square}
        makeMoveClick={() => makeMoveClick(index)}
      />
    ))}
  </div>
);

GameField.propTypes = GameFieldType;
