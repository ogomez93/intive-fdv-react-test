import React from 'react';
import { connect } from 'react-redux';
import { applyFilters } from '../actions';
import NameFilter from './NameFilter';
// import PositionFilter from './PositionFilter';
// import AgeFilter from './AgeFilter';

const FiltersWrapper = ({ onSearchClick }) => (
  <div >
    <NameFilter />
    {/* <PositionFilter />
    <AgeFilter /> */}
    <button onClick = { onSearchClick }>Search</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
//     nameFilter: state.footballPlayers.nameFilter,
//     ageFilter: state.footballPlayers.ageFilter,
//     positionFilter: state.footballPlayers.positionFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: () => {
      dispatch(applyFilters());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersWrapper);