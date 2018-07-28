import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter } from '../actions';

const NameFilter = ({ nameFilter, onChange }) => {
  let input;
  return (
    <input onChange = { () => onChange(input.value) } ref = {node => input = node} placeholder = "Name" />
  )
};

const mapStateToProps = (state) => {
  return {
    nameFilter: state.footballPlayers.nameFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(setNameFilter(value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameFilter);