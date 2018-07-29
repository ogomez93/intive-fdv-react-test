import React from 'react';
import { connect } from 'react-redux';
import VisiblePlayersList from './VisiblePlayersList';
import './css/table.css';

const Table = ({ players }) => (
  <table className="custom-table w-full text-center text-xs border">
    <thead>
      <tr className="text-white font-semibold">
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Player</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Position</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Team</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Age</td>
      </tr>
    </thead>
    <VisiblePlayersList />
  </table>
);

const mapStateToProps = (state) => {
  return {
    players: state.footballPlayers.players
  }
}

export default connect(mapStateToProps)(Table);