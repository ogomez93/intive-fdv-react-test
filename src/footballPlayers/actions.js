import * as t from './actionTypes';

const fetchPlayers = () => {
  return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty').then(

  )
}

export const fetchFootballPlayers = () => {
  return {
    type: t.FETCH,
    fetching: true,
    players: fetchPlayers()
  }
}

export const errorFetchingPlayers = () => {
  return {
    type: t.ERROR_FETCHING
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
