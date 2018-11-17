import calculateAge from '../../utils/calculateAge';

export const ageMatchesFilter = (dateOfBirth = '', ageFilter = '') =>
  ageFilter === '' ? true : calculateAge(dateOfBirth) === parseInt(ageFilter, 10);

export const nameMatchesFilter = (name = '', nameFilter = '') =>
  name.toLowerCase().includes(nameFilter.toLowerCase().trim());

export const positionMatchesFilter = (position = '', positionFilter = '') =>
  position.includes(positionFilter);

const filteredPlayers = (players, ageFilter, nameFilter, positionFilter) =>
  players.filter(
    ({ dateOfBirth, name, position }) =>
      ageMatchesFilter(dateOfBirth, ageFilter) &&
      nameMatchesFilter(name, nameFilter) &&
      positionMatchesFilter(position, positionFilter)
  );

export default filteredPlayers;
