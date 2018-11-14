import { ERROR_FETCHING, SET_PLAYERS } from '../../actionTypes';

const unknownError = { code: 500, message: 'Unknown server error' };

export const errorFetchingPlayers = (error = unknownError) => ({
  type: ERROR_FETCHING,
  payload: {
    fetching: false,
    error
  }
});

export const setFootballPlayers = players => ({
  type: SET_PLAYERS,
  payload: {
    fetching: false,
    players
  }
});
