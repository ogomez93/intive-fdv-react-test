import configureStore from 'redux-mock-store';

import * as t from '../../actionTypes/filters';
import * as actions from '.';
import { players } from '../../testConstants/players.constants';

const mockStore = configureStore();
const store = mockStore();

describe('action: setFootballPlayers', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.SET_PLAYERS,
        payload: {
          fetching: false,
          players: players
        }
      }
    ];

    store.dispatch(actions.setFootballPlayers(players));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('action: errorFetchingPlayers', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.ERROR_FETCHING,
        payload: {
          fetching: false
        }
      }
    ];

    store.dispatch(actions.errorFetchingPlayers());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('action: setNameFilterPreview', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.SET_NAME_FILTER_PREVIEW,
        payload: {
          nameFilterPreview: 'test name filter'
        }
      }
    ];

    store.dispatch(actions.setNameFilterPreview('test name filter'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('action: setPositionFilterPreview', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.SET_POSITION_FILTER_PREVIEW,
        payload: {
          positionFilterPreview: 'test position filter'
        }
      }
    ];

    store.dispatch(actions.setPositionFilterPreview('test position filter'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('action: setAgeFilterPreview', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.SET_AGE_FILTER_PREVIEW,
        payload: {
          ageFilterPreview: 'test age filter'
        }
      }
    ];

    store.dispatch(actions.setAgeFilterPreview('test age filter'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('action: applyFilters', () => {
  beforeEach(() => store.clearActions());

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: t.APPLY_FILTERS
      }
    ];

    store.dispatch(actions.applyFilters());
    expect(store.getActions()).toEqual(expectedActions);
  });
});