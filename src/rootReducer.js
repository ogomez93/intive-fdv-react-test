import { combineReducers } from 'redux';
import footballPlayers from './footballPlayers';

const rootReducer = combineReducers({
  [footballPlayers.constants.NAME]: footballPlayers.reducer
});

export default rootReducer;
