import React from 'react';
import Player from 'footballPlayers/components/Player';

const VisiblePlayersList = ({ players }) => (
  <tbody>
    { players.map(player => <Player {...player} key={player.name} />) }
  </tbody>
);

export default VisiblePlayersList
