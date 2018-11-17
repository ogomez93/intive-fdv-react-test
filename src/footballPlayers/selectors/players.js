import { createSelector } from 'reselect';

import {
  getAllPlayers,
  getAgeFilter,
  getNameFilter,
  getPositionFilter
} from './selectors';

import filteredPlayers from './utils/filteredPlayers';

export const getVisiblePlayers = createSelector(
  [getAllPlayers, getAgeFilter, getNameFilter, getPositionFilter],
  (players, ageFilter, nameFilter, positionFilter) =>
    filteredPlayers(players, ageFilter, nameFilter, positionFilter)
);
