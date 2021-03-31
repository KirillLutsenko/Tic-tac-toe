import React from 'react';
import classnames from 'classnames';
import './SideSwitch.scss';
import { SideSwitchType } from 'types';

export const SideSwitch = ({
  firstPlayerX,
  setFirstPlayerX,
  disabledSelectors,
}) => {
  const chooseShapeClick = () => {
    setFirstPlayerX(!firstPlayerX);
  }

  return (
    <div 
      className={classnames(
        'game__side-switch',
        'side-switch',
        {'side-switch__invisible': disabledSelectors},
      )}
    >
      <div className="side-switch__players">
        <span className="side-switch__player">
          First Player
        </span>

        <div className="side-switch__labels">
          <label htmlFor="first-player-x">&quot;X&quot;</label>
          <label htmlFor="first-player-o">&quot;O&quot;</label>
        </div>

        <div className="side-switch__inputs">
          <input
            type="radio"
            name="first-player"
            id="first-player-x"
            onChange={chooseShapeClick}
            checked={firstPlayerX}
            className="side-switch__checkbox"
          />
          <input
            type="radio"
            name="first-player"
            id="first-player-o"
            onChange={chooseShapeClick}
            checked={!firstPlayerX}
            className="side-switch__checkbox"
          />
        </div>
      </div>

      <div className="side-switch__players">
        <span className="side-switch__player">
          Second Player
        </span>
        <div className="side-switch__labels">
          <label htmlFor="second-player-x">&quot;X&quot;</label>
          <label htmlFor="second-player-o">&quot;O&quot;</label>
        </div>

        <div className="side-switch__inputs">
          <input
            type="radio"
            name="second-player"
            id="second-player-x"
            onChange={chooseShapeClick}
            checked={!firstPlayerX}
            className="side-switch__checkbox"
          />

          <input
            type="radio"
            name="second-player"
            id="second-player-o"
            onChange={chooseShapeClick}
            checked={firstPlayerX}
            className="side-switch__checkbox"
          />
        </div>
      </div>
    </div>
  );
};

SideSwitch.propTypes = SideSwitchType;
