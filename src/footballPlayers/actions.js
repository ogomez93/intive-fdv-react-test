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
    fetching: false,
  }
}

export const changeTesting = () => {
  return {
    type: "CHANGE_TESTING"
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
