import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 

const Wrapper = ({ testing }) => (
  <div>
    {testing ? 'true' : 'false'}
  </div>
);

const mapStateToProps = (state) => {
  return {
    testing: true
  }
}

export default connect(mapStateToProps)(Wrapper)