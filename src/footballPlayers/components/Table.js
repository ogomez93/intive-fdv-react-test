import React from 'react';
import { connect } from 'react-redux';
// // import VisiblePlayersList from './VisiblePlayersList'
import PlayersList from './PlayersList'

const Table = ({ players }) => (
  <table>
    <thead>
      <tr>
        <td>Player</td>
        <td>Position</td>
        <td>Team</td>
        <td>Age</td>
      </tr>
    </thead>
    <PlayersList />
  </table>
);

const mapStateToProps = (state) => {
  return {
    players: state.footballPlayers.players
  }
}

export default connect(
  mapStateToProps
)(Table);