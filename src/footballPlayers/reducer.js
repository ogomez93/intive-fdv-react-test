import {
  APPLY_FILTERS,
  ERROR_FETCHING,
  SET_PLAYERS,
} from './actionTypes';

const initialState = {
  fetching: true,
  players: [],
  nameFilter: '',
  ageFilter: '',
  positionFilter: ''
};

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return Object.assign({}, state, {
        players: action.payload.players,
        fetching: action.payload.fetching
      });
    
    case ERROR_FETCHING:
      return Object.assign({}, state, {
        fetching: action.payload.fetching
      });

    case APPLY_FILTERS:
      return Object.assign({}, state, {
        nameFilter: action.payload.nameFilter,
        positionFilter: action.payload.positionFilter,
        ageFilter: action.payload.ageFilter
      });
    
    default:
      return state;
  }
}

export default footballPlayers;