import React from 'react';
import { FieldSquare } from 'components/Game/GameField/FieldSquare/FieldSquare';
import { GameFieldType } from 'types';
import './GameField.scss';

export const GameField = ({ squares, makeMoveClick }) => {
  return (
    <div className="game__field field">
      {squares.map((square, index) => (
        <FieldSquare
          key={`${square} - ${index}`}
          value={square}
          makeMoveClick={() => makeMoveClick(index)}
        />
      ))}
    </div>
  );
};

GameField.propTypes = GameFieldType;
