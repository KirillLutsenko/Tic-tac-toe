import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Game } from 'components/Game/Game';
import 'App.scss';
import { StartPage } from 'components/StartPage/StartPage';
import { GameVsComputer } from 'components/Game-vs-Computer/GameVsComputer';

function App() {
  return (
    <Switch>
      <Route path="/start-page">
        <StartPage />
      </Route>

      <Route path="/game-vs-player">
        <Game />
      </Route>

      <Route path="/game-vs-computer">
        <GameVsComputer />
      </Route>

      <Redirect path="/" to="/start-page"/>
    </Switch>
  );
}

export default App;
