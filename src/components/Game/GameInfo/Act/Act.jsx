import React from 'react';
import { ActType } from '../../../../Types';
import './Act.scss';

export default function Act({ counter, winner, firstPlayerX }) {
  return (
    <div className="info__act act">
      {(counter === 9 && !winner)
        ? (<p className="act__draw">Tie, two professionals collided!</p>)
        : (
          <p className="act__result">
            {winner
              ? (!firstPlayerX
                ? `First Player is a Winner!`
                : `Second Player is a Winner!`
              )
              : (firstPlayerX
                ? 'First Player Turn'
                : 'Second Player Turn'
              )
            }
          </p>
        )
      }
    </div>
  );
}

Act.propTypes = ActType;
