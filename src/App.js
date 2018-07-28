import React, { Component } from 'react';
import './css/tailwind.css';
import footballPlayers from './footballPlayers';

const { FootballPlayersWrapper } = footballPlayers.components;

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <FootballPlayersWrapper />
      </div>
    );
  }
}

export default App;
