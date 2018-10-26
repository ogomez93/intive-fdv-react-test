import {
  ERROR_FETCHING,
  SET_PLAYERS
} from '../../actionTypes/players';

export const errorFetchingPlayers = () => {
  return {
    type: ERROR_FETCHING,
    payload: {
      fetching: false
    }
  };
};

export const setFootballPlayers = (players) => {
  return {
    type: SET_PLAYERS,
    payload: {
      fetching: false,
      players: players
    }
  };
};

