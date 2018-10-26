import {
  APPLY_FILTERS,
  ERROR_FETCHING,
  SET_AGE_FILTER_PREVIEW,
  SET_NAME_FILTER_PREVIEW,
  SET_PLAYERS,
  SET_POSITION_FILTER_PREVIEW
} from './actionTypes';

const initialState = {
  fetching: true,
  players: [],
  nameFilterPreview: '',
  ageFilterPreview: '',
  positionFilterPreview: '',
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
    
    case SET_NAME_FILTER_PREVIEW:
      return Object.assign({}, state, {
        nameFilterPreview: action.payload.nameFilterPreview
      });
    
    case SET_POSITION_FILTER_PREVIEW:
      return Object.assign({}, state, {
        positionFilterPreview: action.payload.positionFilterPreview
      });
    
    case SET_AGE_FILTER_PREVIEW:
      return Object.assign({}, state, {
        ageFilterPreview: action.payload.ageFilterPreview
      });
    
    case APPLY_FILTERS:
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