import React from 'react';
import { ScoresType } from 'types';
import './Scores.scss';

export const Scores = ({ firstPlayerScores, secondPlayerScores, ties }) => {
  return (
    <div className="info__scores scores">
      <h4 className="scores__title">Scores:</h4>

      <span className="scores__player">
        Player:
        <b className="scores__value">{firstPlayerScores}</b>
      </span>

      <span className="scores__player">
        Computer:
        <b className="scores__value">{secondPlayerScores}</b>
      </span>

      <span className="scores__player">
        Ties:
        <b className="scores__value">{ties}</b>
      </span>
    </div>
  );
};

Scores.propTypes = ScoresType;
