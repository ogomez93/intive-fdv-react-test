import { createSelector } from 'reselect';
import { calculateAge } from './components/Player';

const getNameFilter = (state) => state.footballPlayers.nameFilter;
const getPositionFilter = (state) => state.footballPlayers.positionFilter;
const getAgeFilter = (state) => state.footballPlayers.ageFilter;
const getAllPlayers = (state) => state.footballPlayers.players;

export const getVisiblePlayers = createSelector(
  [ getNameFilter, getPositionFilter, getAgeFilter, getAllPlayers ],
  (nameFilter, positionFilter, ageFilter, players) => {
    let filteredPlayers = players;
    if (nameFilter !== '') {
      filteredPlayers = filteredPlayers.filter(p => 
        p.name.toLowerCase().includes(nameFilter.toLowerCase().trim())
      );
    }
    if (positionFilter !== '') {
      filteredPlayers = filteredPlayers.filter(p =>
        p.position.includes(positionFilter)
      );
    }
    if (ageFilter !== '') {
      filteredPlayers = filteredPlayers.filter(p =>
        calculateAge(p.dateOfBirth) === parseInt(ageFilter, 10)
      );
    }
    return filteredPlayers;
  }
);