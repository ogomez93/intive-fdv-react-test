import configureStore from 'redux-mock-store';

import * as t from './actionTypes';
import footballPlayers from './reducer';
import { players } from './testConstants/players.constants';

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

const initialStateWithFilters = Object.assign({}, initialState, {
  nameFilterPreview: 'name test filter',
  positionFilterPreview: 'position test filter',
  ageFilterPreview: 'age test filter'
});

const mockStore = configureStore();
const store = mockStore(initialState);

describe('footballPlayers reducer: DUMMY_ACTION', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'DUMMY_ACTION',
      payload: {
        key: 'value'
      }
    };

    expect(footballPlayers(undefined, action)).toEqual(initialState);
  });
});

describe(`footballPlayers reducer: ${t.SET_PLAYERS}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.SET_PLAYERS,
      payload: {
        fetching: false,
        players: players
      }
    };
    const expectedState = Object.assign({}, initialState, {
      fetching: false,
      players: players
    });

    expect(footballPlayers(undefined, action)).toEqual(expectedState);
  });
});

describe(`footballPlayers reducer: ${t.ERROR_FETCHING}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.ERROR_FETCHING,
      payload: {
        fetching: false
      }
    };
    const expectedState = Object.assign({}, initialState, {
      fetching: false
    });

    expect(footballPlayers(undefined, action)).toEqual(expectedState);
  });
});

describe(`footballPlayers reducer: ${t.SET_NAME_FILTER_PREVIEW}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.SET_NAME_FILTER_PREVIEW,
      payload: {
        nameFilterPreview: 'name filter test'
      }
    };
    const expectedState = Object.assign({}, initialState, {
      nameFilterPreview: 'name filter test'
    });

    expect(footballPlayers(undefined, action)).toEqual(expectedState);
  });
});

describe(`footballPlayers reducer: ${t.SET_POSITION_FILTER_PREVIEW}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.SET_POSITION_FILTER_PREVIEW,
      payload: {
        positionFilterPreview: 'position filter test'
      }
    };
    const expectedState = Object.assign({}, initialState, {
      positionFilterPreview: 'position filter test'
    });

    expect(footballPlayers(undefined, action)).toEqual(expectedState);
  });
});

describe(`footballPlayers reducer: ${t.SET_AGE_FILTER_PREVIEW}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.SET_AGE_FILTER_PREVIEW,
      payload: {
        ageFilterPreview: 'age filter test'
      }
    };
    const expectedState = Object.assign({}, initialState, {
      ageFilterPreview: 'age filter test'
    });

    expect(footballPlayers(undefined, action)).toEqual(expectedState);
  });
});

describe(`footballPlayers reducer: ${t.APPLY_FILTERS}`, () => {
  test('returns the correct state', () => {
    const action = {
      type: t.APPLY_FILTERS,
    };
    const expectedState = Object.assign({}, initialStateWithFilters, {
      nameFilter: initialStateWithFilters.nameFilterPreview,
      positionFilter: initialStateWithFilters.positionFilterPreview,
      ageFilter: initialStateWithFilters.ageFilterPreview,
    });

    expect(footballPlayers(initialStateWithFilters, action)).toEqual(expectedState);
  });
});