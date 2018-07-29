import React from 'react';
import { connect } from 'react-redux';
import VisiblePlayersList from './VisiblePlayersList';
import './css/table.css';

const Table = ({ players }) => (
  <table className="custom-table w-full text-center text-xs border">
    <thead>
      <tr>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 text-white bg-grey-dark font-semibold">Player</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 text-white bg-grey-dark font-semibold">Position</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 text-white bg-grey-dark font-semibold">Team</td>
        <td className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 text-white bg-grey-dark font-semibold">Age</td>
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