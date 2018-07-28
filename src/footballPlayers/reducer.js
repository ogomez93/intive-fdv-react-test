import * as t from './actionTypes';

const initialState = {
  fetching: true,
  players: [],
  nameFilter: '',
  ageFilter: '',
  positionFilter: ''
}

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case t.FETCH:
      return ;
    case t.ERROR_FETCHING:
      return ;
    // case 'SET_VISIBILITY_FILTER':
    //   return action.filter;
    default:
      return state;
  }
}

export default footballPlayers;