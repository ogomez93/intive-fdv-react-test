import * as t from './actionTypes';

const initialState = {
  fetching: true,
  players: [],
  nameFilter: '',
  ageFilter: '',
  positionFilter: '',
  testing: true
}

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TESTING":
      return Object.assign({}, state, {
        testing: !state.testing
      });
    case t.SET_PLAYERS:
      return Object.assign({}, state, {
        players: action.players,
        fetching: action.fetching
      });
    case t.ERROR_FETCHING:
      return Object.assign({}, state, {
        fetching: action.fetching
      });
    // case 'SET_VISIBILITY_FILTER':
    //   return action.filter;
    default:
      return state;
  }
}

export default footballPlayers;