import { ERROR_FETCHING, SET_PLAYERS } from '../../actionTypes';

export const errorFetchingPlayers = () => ({
  type: ERROR_FETCHING,
  payload: {
    fetching: false
  }
});

export const setFootballPlayers = players => ({
  type: SET_PLAYERS,
  payload: {
    fetching: false,
    players
  }
});
