import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Filters from './Filters';

const FootballPlayersWrapper = ({ fetching }) => (
  <div>
    <h2 className="mb-2">Football Player Finder</h2>
    <Filters />
    {
      fetching ?
        <div>Fetching players, please wait...</div>
      :
        <Table />
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    fetching: state.footballPlayers.fetching
  }
}

export default connect(mapStateToProps)(FootballPlayersWrapper);