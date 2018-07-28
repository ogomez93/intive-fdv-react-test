import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';

const PlayersList = ({ players }) => (
  <tbody>
    {
      !players.length ? 
        <tr>
          <td colSpan='4'>No players</td>
        </tr>
      :
        players.map(player => <Player player={player} key={player.name} />)
    }
  </tbody>
);

const mapStateToProps = (state) => {
  return {
    players: state.footballPlayers.players
  }
}

export default connect(
  mapStateToProps
)(PlayersList);