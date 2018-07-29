import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Filters from './Filters';
import './css/loader.css';

const FootballPlayersWrapper = ({ fetching }) => (
  <div>
    <h2 className="mb-2">Football Player Finder</h2>
    <Filters />
    {
      fetching ?
        <div className="text-center">
          Fetching players, please wait...
          <div className="mx-auto my-12 loader" />
        </div>
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