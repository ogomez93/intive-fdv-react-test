import React, { Component } from 'react';
import '../css/tailwind.css';
import footballPlayers from '../footballPlayers';

const { FootballPlayers } = footballPlayers.components;

class App extends Component {
  render() {
    return (
      <div className="container mx-auto px-2 md:px-0 py-4">
        <FootballPlayers />
      </div>
    );
  }
}

export default App;
