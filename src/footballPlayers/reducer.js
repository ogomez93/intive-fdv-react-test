import * as t from './actionTypes';
import _ from 'lodash';

const initialState = {
  fetching: true,
  players: [],
  visiblePlayers: [],
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
    
    case t.SET_NAME_FILTER:
      return Object.assign({}, state, {
        nameFilter: action.nameFilter
      });
    
    case t.SET_POSITION_FILTER:
      return Object.assign({}, state, {
        positionFilter: action.positionFilter
      });
    
    case t.SET_AGE_FILTER:
      return Object.assign({}, state, {
        ageFilter: action.ageFilter
      });
    
    case t.APPLY_FILTERS:
      return Object.assign({}, state, {
        visiblePlayers: _.concat(state.visiblePlayers, { name: 'test 1' })
      });
    
    default:
      return state;
  }
}

export default footballPlayers;