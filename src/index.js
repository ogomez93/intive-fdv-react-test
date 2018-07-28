import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { setFootballPlayers, errorFetchingPlayers } from './footballPlayers/actions';
import { PLAYERS_API } from './footballPlayers/constants';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

function fetchFootballPlayers() {
  return fetch(PLAYERS_API);
}

function getFootballPlayers() {
  return dispatch => {
    return fetchFootballPlayers()
      .then(res => res.json())
      .then(res => dispatch(setFootballPlayers(res)))
      .catch(error => dispatch(errorFetchingPlayers()));
  };
}

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
