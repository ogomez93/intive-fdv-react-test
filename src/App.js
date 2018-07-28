import React, { Component } from 'react';
import './css/tailwind.css';
import './App.css';
import footballPlayers from './footballPlayers'

let { Wrapper } = footballPlayers.components;
console.log(Wrapper);

// fetch football players from https://football-players-b31f2.firebaseio.com/players.json?print=pretty

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Wrapper />
      </div>
    );
  }
}

export default App;
