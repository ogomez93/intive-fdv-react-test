import React from 'react';
import { connect } from 'react-redux';
import { changeTesting } from '../actions';
import Table from './Table';

const Wrapper = ({ testing, onTestClick }) => (
  <div onClick = {onTestClick}>
    {testing ? 'true' : 'false'}
    <Table />
  </div>
);

const mapStateToProps = (state) => {
  return {
    testing: state.footballPlayers.testing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTestClick: () => {
      dispatch(changeTesting());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);