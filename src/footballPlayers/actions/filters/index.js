import { APPLY_FILTERS } from 'footballPlayers/actionTypes';

export const applyFilters = ({ age, name, position }) => ({
  type: APPLY_FILTERS,
  payload: {
    ageFilter: age,
    nameFilter: name,
    positionFilter: position
  }
});
