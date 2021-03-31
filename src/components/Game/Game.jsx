import React, { useState } from 'react';
import { GameField } from './GameField/GameField';
import { identifyWinner } from '../../helpers';
import { GameInfo } from './GameInfo/GameInfo';
import { SideSwitch } from './SideSwitch/SideSwitch';
import './Game.scss';

export const Game = () => {
  const [gameField, setGameField] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [counter, setCounter] = useState(0);
  const [firstPlayerX, setFirstPlayerX] = useState(true);
  const [disabledSelectors, setDisabledSelectors] = useState(false);
  const winner = identifyWinner(gameField);

  const makeMoveClick = (index) => {
    const gameFieldCopy = [...gameField];

    if (winner || gameFieldCopy[index]) {
      return;
    }

    gameFieldCopy[index] = xTurn ? 'X' : 'O';

    setDisabledSelectors(true);
    setGameField(gameFieldCopy);
    setXTurn(!xTurn);
    setCounter(counter + 1);
    setFirstPlayerX(!firstPlayerX);
  };

  return (
    <div className="game">
      <SideSwitch
        firstPlayerX={firstPlayerX}
        setFirstPlayerX={setFirstPlayerX}
        disabledSelectors={disabledSelectors}
      />

      <GameField
        squares={gameField}
        makeMoveClick={makeMoveClick}
      />

      <GameInfo
        counter={counter}
        winner={winner}
        firstPlayerX={firstPlayerX}
        setGameField={setGameField}
        setXTurn={setXTurn}
        setDisabledSelectors={setDisabledSelectors}
        setCounter={setCounter}
      />
    </div>
  );
};
