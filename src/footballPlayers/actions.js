import * as t from './actionTypes';

export const setFootballPlayers = (players) => {
  return {
    type: t.SET_PLAYERS,
    fetching: false,
    players: players
  }
}

export const errorFetchingPlayers = () => {
  return {
    type: t.ERROR_FETCHING,
    fetching: false
  }
}

export const setNameFilter = (nameFilter) => {
  return {
    type: t.SET_NAME_FILTER,
    nameFilter
  }
}

export const setPositionFilter = (positionFilter) => {
  return {
    type: t.SET_POSITION_FILTER,
    positionFilter
  }
}

export const setAgeFilter = (ageFilter) => {
  return {
    type: t.SET_AGE_FILTER,
    ageFilter
  }
}

export const applyFilters = () => {
  return {
    type: t.APPLY_FILTERS
  }
}

export const changeTesting = () => {
  return {
    type: "CHANGE_TESTING"
  }
}
