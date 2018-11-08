import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import Filters from './Filters';
import { applyFilters } from '../../actions/filters';

const mapStateToProps = ({
  footballPlayers: {
    nameFilter,
    ageFilter,
    positionFilter
  }
}) => ({
  nameFilter,
  ageFilter,
  positionFilter
});

const mapDispatchToProps = (dispatch, { name, position, age }) => ({
  onSubmit: event => {
    event.preventDefault();
    dispatch(applyFilters({ name, position, age }));
  }
});

export const enhance = compose(
  withState('name', 'setName', ''),
  withState('position', 'setPosition', ''),
  withState('age', 'setAge', ''),
  withHandlers({
    onNameChange: ({ setName }) => event =>
      setName(event.target.value),
    onPositionChange: ({ setPosition }) => event =>
      setPosition(event.target.value),
    onAgeChange: ({ setAge }) => event =>
      setAge(event.target.value)
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Filters);
