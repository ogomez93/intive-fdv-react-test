import React from 'react';
import { connect } from 'react-redux';
import {
  setNameFilterPreview,
  setPositionFilterPreview,
  setAgeFilterPreview,
  applyFilters
} from '../actions/filters';
import { POSITIONS } from '../constants';

const positions = POSITIONS.map(position =>
  <option value={position} key={position}>
    {position}
  </option>
);

const Filters = ({ onNameChange, onPositionChange, onAgeChange, onSearchSubmit }) => {
  let nameInput, positionSelect, ageInput;

  return (
    <form className="my-4 text-xs sm:flex sm:justify-between" onSubmit={ onSearchSubmit }>
      <input
        name="playerName"
        className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4"
        onChange={ () => onNameChange(nameInput.value) }
        ref={ node => nameInput = node }
        placeholder="Player Name" />

      <select
        name="playerPosition"
        className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4 bg-white"
        onChange={ () => onPositionChange(positionSelect.value) }
        ref={ node => positionSelect = node }
        placeholder="Position">
        <option value="">Position</option>
        { positions }
      </select>

      <input
        name="playerAge"
        className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4"
        type="number"
        onChange={ () => onAgeChange(ageInput.value) }
        ref={ node => ageInput = node }
        placeholder="Age"
        min="18"
        max="40" />

      <button
        className="border-2 border-black px-6 py-3 w-full sm:w-auto"
        type="submit">
        Search
      </button>
    </form>
  )
};

const mapStateToProps = (state) => {
  const { nameFilterPreview, ageFilterPreview, positionFilterPreview } = state.footballPlayers;
  return {
    nameFilterPreview: nameFilterPreview,
    ageFilterPreview: ageFilterPreview,
    positionFilterPreview: positionFilterPreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange:     (value) => dispatch(setNameFilterPreview(value)),
    onPositionChange: (value) => dispatch(setPositionFilterPreview(value)),
    onAgeChange:      (value) => dispatch(setAgeFilterPreview(value)),
    onSearchSubmit:   (event) => {
      event.preventDefault();
      dispatch(applyFilters());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);