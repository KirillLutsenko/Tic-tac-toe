import { FieldSquare } from 'components/Game/GameField/FieldSquare/FieldSquare';
import React from 'react';
import './GameField.scss';

export const GameField = ({ squares, makeMoveClick }) => {
  return (
    <div className="game__field field">
      {squares.map((square, index) => (
        <FieldSquare
          key={`${square} - ${index}`}
          value={square}
          onClick={() => makeMoveClick(index)}
        />
      ))}
    </div>
  );
};
