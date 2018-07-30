import React from 'react';
import { connect } from 'react-redux';
import VisiblePlayersList from './VisiblePlayersList';
import './css/table.css';

const Table = () => (
  <table id="playersTable" className="custom-table w-full text-center text-xs border">
    <thead>
      <tr label="labels" className="text-white font-semibold">
        <td label="Player" className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Player</td>
        <td label="Position" className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Position</td>
        <td label="Team" className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Team</td>
        <td label="Age" className="w-1/4 border-2 border-black px-1 py-3 sm:py-6 bg-grey-dark">Age</td>
      </tr>
    </thead>
    <VisiblePlayersList />
  </table>
);

export default connect()(Table);