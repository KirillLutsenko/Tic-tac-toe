import React, { useState } from 'react';
import { GameField } from 'components/Game/GameField/GameField';
import { identifyWinner } from 'helpers';
import { GameInfoVsComputer } from 'components/Game-vs-Computer/GameInfoVsComputer/GameInfoVsComputer';
import { compStep } from 'helpers';
import './GameVsComputer.scss';

export const GameVsComputer = () => {
  const [gameField, setGameField] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [counter, setCounter] = useState(0);
  const winner = identifyWinner(gameField);

  const makeMoveClick = (index) => {
    const gameFieldCopy = [...gameField];

    if (winner || gameFieldCopy[index]) {
      return;
    };

    gameFieldCopy[index] = 'X';

    setGameField(gameFieldCopy);
    compStep(gameFieldCopy);
    setCounter(counter + 1);
  };

  return (
    <div className="game">
      <GameField
        squares={gameField}
        makeMoveClick={makeMoveClick}
      />

      <GameInfoVsComputer
        setGameField={setGameField}
        setXTurn={setXTurn}
        setCounter={setCounter}
        xTurn={xTurn}
        counter={counter}
        winner={winner}
      />
    </div>
  );
};
