import {
  APPLY_FILTERS,
  ERROR_FETCHING,
  SET_PLAYERS,
} from './actionTypes';

import initialState from './constants/initialState';

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload.players,
        fetching: action.payload.fetching
      };
    
    case ERROR_FETCHING:
      return {
        ...state,
        error: action.payload.error,
        fetching: action.payload.fetching
      }

    case APPLY_FILTERS:
      return {
        ...state,
        nameFilter: action.payload.nameFilter,
        positionFilter: action.payload.positionFilter,
        ageFilter: action.payload.ageFilter
      }
    
    default:
      return state;
  }
};

export default footballPlayers;
