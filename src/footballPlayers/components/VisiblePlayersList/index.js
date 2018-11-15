import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import VisiblePlayersList from './VisiblePlayersList';
import NoPlayers from '../NoPlayers';
import { getVisiblePlayers } from '../../selectors';

const mapStateToProps = state => ({
  players: getVisiblePlayers(state)
});

export default compose(
  connect(mapStateToProps),
  branch(({ players }) => players.length === 0, renderComponent(NoPlayers))
)(VisiblePlayersList);
