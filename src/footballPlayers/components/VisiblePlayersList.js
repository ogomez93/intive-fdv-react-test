import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import { getVisiblePlayers } from '../selectors';

const VisiblePlayersList = ({ players }) => (
  <tbody>
    {
      !players.length ? 
        <tr>
          <td className="border-2 border-black" colSpan="4">No players match those filters</td>
        </tr>
      :
        players.map(player => <Player player={player} key={player.name} />)
    }
  </tbody>
);

const mapStateToProps = (state) => {
  return {
    players: getVisiblePlayers(state)
  }
}

export default connect(
  mapStateToProps
)(VisiblePlayersList);