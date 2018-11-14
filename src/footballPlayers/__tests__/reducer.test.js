import footballPlayers from '../reducer';
import {
  APPLY_FILTERS,
  ERROR_FETCHING,
  SET_PLAYERS,
} from '../actionTypes';

import initialState from '../constants/initialState';
import players from './fixtures/players';

const setPlayersAction = {
  type: SET_PLAYERS,
  payload: {
    players,
    fetching: false
  }
};

const errorFetchingAction = {
  type: ERROR_FETCHING,
  payload: {
    error: { code: 500, message: 'Unknown error' },
    fetching: false
  }
};

const applyFiltersAction = {
  type: APPLY_FILTERS,
  payload: {
    nameFilter: 'nameFilter',
    positionFilter: 'positionFilter',
    ageFilter: 'ageFilter'
  }
};

describe('FootballPlayers Reducer', () => {
  let result, newState;

  describe('case: SET_PLAYERS', () => {
    beforeAll(() => {
      result = footballPlayers(initialState, setPlayersAction);
      newState = {
        ...initialState,
        players,
        fetching: false
      }
    });

    it('should return the fetched players, and fetching: false', () =>
      expect(result).toEqual(newState));
  });

  describe('case: ERROR_FETCHING', () => {
    beforeAll(() => {
      result = footballPlayers(initialState, errorFetchingAction);
      newState = {
        ...initialState,
        error: { code: 500, message: 'Unknown error' },
        fetching: false
      }
    });

    it('should return the corresponding error, and fetching: false', () =>
      expect(result).toEqual(newState));
  });

  describe('case: APPLY_FILTERS', () => {
    beforeAll(() => {
      result = footballPlayers(initialState, applyFiltersAction);
      newState = {
        ...initialState,
        nameFilter: 'nameFilter',
        positionFilter: 'positionFilter',
        ageFilter: 'ageFilter'
      }
    });

    it('should return the corresponding error, and fetching: false', () =>
      expect(result).toEqual(newState));
  });
});
