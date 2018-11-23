import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import VisiblePlayersList from './VisiblePlayersList';
import NoPlayers from 'footballPlayers/components/NoPlayers';
import { getVisiblePlayers } from 'footballPlayers/selectors';

const mapStateToProps = state => ({
  players: getVisiblePlayers(state)
});

export default compose(
  connect(mapStateToProps),
  branch(({ players }) => players.length === 0, renderComponent(NoPlayers))
)(VisiblePlayersList);
