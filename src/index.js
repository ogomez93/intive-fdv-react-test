import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { setFootballPlayers, errorFetchingPlayers } from './footballPlayers/actions/players';
import { PLAYERS_API } from './footballPlayers/constants';

import App from './App';
import './index.css';
import './css/tailwind.css';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const fetchFootballPlayers = () => fetch(PLAYERS_API);

const getFootballPlayers = () => dispatch =>
  fetchFootballPlayers()
    .then(res => res.json())
    .then(res => dispatch(setFootballPlayers(res)))
    .catch(error => dispatch(errorFetchingPlayers(error)));

store.dispatch(
  getFootballPlayers()
).then(() => console.log(`Successfully fetched players from ${PLAYERS_API}`));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
