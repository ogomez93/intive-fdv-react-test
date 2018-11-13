import { branch, compose, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import Table from './Table';
import Loader from '../Loader';

const mapStateToProps = state => ({
  fetching: state.footballPlayers.fetching
});

export default compose(
  connect(mapStateToProps),
  branch(
    ({ fetching }) => fetching,
    renderComponent(Loader)
  )
)(Table);
