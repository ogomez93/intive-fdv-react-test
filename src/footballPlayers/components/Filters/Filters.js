import React from 'react';
import { POSITIONS } from 'footballPlayers/constants';

const positions = POSITIONS.map(position =>
  <option value={ position } key={ position }>
    { position }
  </option>
);

const Filters = ({
  age,
  name,
  onAgeChange,
  onNameChange,
  onPositionChange,
  onSubmit
}) => (
  <form className="my-4 text-xs sm:flex sm:justify-between" onSubmit={ onSubmit }>
    <input
      name="playerName"
      type='text'
      className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4"
      onChange={ onNameChange }
      placeholder="Player Name"
      value={ name }
    />

    <select
      name="playerPosition"
      className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4 bg-white"
      onChange={ onPositionChange }
      placeholder="Position">
      <option value="">Position</option>
      { positions }
    </select>

    <input
      name="playerAge"
      className="border-2 border-black p-2 my-1 sm:my-0 w-full sm:w-1/4"
      type="number"
      onChange={ onAgeChange }
      placeholder="Age"
      min="18"
      max="40"
      value={ age }
    />

    <button
      className="border-2 border-black px-6 py-3 w-full sm:w-auto"
      type="submit">
      Search
    </button>
  </form>
);

export default Filters;
