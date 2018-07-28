import React from 'react';
import { connect } from 'react-redux';
// import { changeTesting } from '../actions';
import Table from './Table';
import FiltersWrapper from './FiltersWrapper';

const FootballPlayersWrapper = () => (
  <div>
    <FiltersWrapper />
    <Table />
  </div>
);

// const mapStateToProps = (state) => {
//   return {
//     testing: state.footballPlayers.testing
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTestClick: () => {
//       dispatch(changeTesting());
//     }
//   }
// }

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(FootballPlayersWrapper);