import React from 'react';
import '../css/tailwind.css';
import footballPlayers from '../footballPlayers';

const { FootballPlayers } = footballPlayers.components;

const App = () => (
  <div className="container mx-auto px-2 md:px-0 py-4">
    <FootballPlayers />
  </div>
)

export default App;
