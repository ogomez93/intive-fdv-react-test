import React from 'react';
import { connect } from 'react-redux';
import { changeTesting } from '../actions'

const Wrapper = ({ testing, onTestClick }) => (
  <div onClick = {onTestClick}>
    {testing ? 'true' : 'false'}
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
)(Wrapper)