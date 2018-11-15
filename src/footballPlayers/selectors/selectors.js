export const getAllPlayers = ({
  footballPlayers: { players = [] } = {}
} = {}) => players;

export const getAgeFilter = ({
  footballPlayers: { ageFilter = '' } = {}
} = {}) => ageFilter;

export const getNameFilter = ({
  footballPlayers: { nameFilter = '' } = {}
} = {}) => nameFilter;

export const getPositionFilter = ({
  footballPlayers: { positionFilter = '' } = {}
} = {}) => positionFilter;
