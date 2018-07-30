import * as t from './actionTypes';

const initialState = {
  fetching: true,
  players: [],
  nameFilterPreview: '',
  ageFilterPreview: '',
  positionFilterPreview: '',
  nameFilter: '',
  ageFilter: '',
  positionFilter: ''
}

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_PLAYERS:
      return Object.assign({}, state, {
        players: action.payload.players,
        fetching: action.payload.fetching
      });
    
    case t.ERROR_FETCHING:
      return Object.assign({}, state, {
        fetching: action.payload.fetching
      });
    
    case t.SET_NAME_FILTER_PREVIEW:
      return Object.assign({}, state, {
        nameFilterPreview: action.payload.nameFilterPreview
      });
    
    case t.SET_POSITION_FILTER_PREVIEW:
      return Object.assign({}, state, {
        positionFilterPreview: action.payload.positionFilterPreview
      });
    
    case t.SET_AGE_FILTER_PREVIEW:
      return Object.assign({}, state, {
        ageFilterPreview: action.payload.ageFilterPreview
      });
    
    case t.APPLY_FILTERS:
      return Object.assign({}, state, {
        nameFilter: state.nameFilterPreview,
        positionFilter: state.positionFilterPreview,
        ageFilter: state.ageFilterPreview
      });
    
    default:
      return state;
  }
}

export default footballPlayers;