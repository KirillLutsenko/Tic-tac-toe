import React from 'react';
import { ActTypeForGameVsComputer } from 'types';
import './Act.scss';

export default function Act({ counter, winner, xTurn}) {
  return (
    <div className="info__act act">
      {(counter === 9 && !winner)
        ? (<p className="act__draw">Tie, two professionals collided!</p>)
        : (
            <p className="act__result">
              {
                winner 
                  ? ((winner === 'X')
                      ? `Player is a Winner!` 
                      : `Computer is a Winner!`
                    ) 
                  : 'Sorry, the computer is not ready at the moment'//(xTurn ? 'Player Turn' : 'Computer Turn')
              }
            </p>
          )
      }
    </div>
  );
}

Act.propTypes = ActTypeForGameVsComputer;
