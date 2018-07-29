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

export const setNameFilterPreview = (nameFilterPreview) => {
  return {
    type: t.SET_NAME_FILTER_PREVIEW,
    nameFilterPreview
  }
}

export const setPositionFilterPreview = (positionFilterPreview) => {
  return {
    type: t.SET_POSITION_FILTER_PREVIEW,
    positionFilterPreview
  }
}

export const setAgeFilterPreview = (ageFilterPreview) => {
  return {
    type: t.SET_AGE_FILTER_PREVIEW,
    ageFilterPreview
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
