import {
  getAllPlayers,
  getAgeFilter,
  getNameFilter,
  getPositionFilter
} from '../selectors';

const withoutFootballPlayers = {};
const emptyFootballPlayers = { footballplayers: {} };
const players = [{ name: 'player 1' }, { name: 'player 2' }];
const ageFilter = 'ageFilter';
const nameFilter = 'nameFilter';
const positionFilter = 'positionFilter';

describe('FootballPlayers selectors', () => {
  let state;

  describe('getAllPlayers', () => {
    beforeAll(() => (state = { footballplayers: { players } }));

    describe('when it is called without a state', () => {
      it('should return an empty array', () =>
        expect(getAllPlayers()).toEqual([]));
    });

    describe('when it is called with a state without a key named footballPlayers', () => {
      it('should return an empty array', () =>
        expect(getAllPlayers(withoutFootballPlayers)).toEqual([]));
    });

    describe('when the footballPlayers key does not have a key named players', () => {
      it('should return an empty array', () =>
        expect(getAllPlayers(emptyFootballPlayers)).toEqual([]));
    });

    describe('when it is called with a state with a key named players', () => {
      it('should return the players', () =>
        expect(getAllPlayers(state)).toEqual(players));
    });
  });

  describe('getAgeFilter', () => {
    beforeAll(() => (state = { footballplayers: { ageFilter } }));

    describe('when it is called without a state', () => {
      it('should return an empty string', () =>
        expect(getAgeFilter()).toEqual(''));
    });

    describe('when it is called with a state without a key named footballPlayers', () => {
      it('should return an empty string', () =>
        expect(getAgeFilter(withoutFootballPlayers)).toEqual(''));
    });

    describe('when the footballPlayers key does not have a key named ageFilter', () => {
      it('should return an empty string', () =>
        expect(getAgeFilter(emptyFootballPlayers)).toEqual(''));
    });

    describe('when it is called with a state with a key named ageFilter', () => {
      it('should return the players', () =>
        expect(getAgeFilter(state)).toEqual(ageFilter));
    });
  });

  describe('getNameFilter', () => {
    beforeAll(() => (state = { footballplayers: { nameFilter } }));

    describe('when it is called without a state', () => {
      it('should return an empty string', () =>
        expect(getNameFilter()).toEqual(''));
    });

    describe('when it is called with a state without a key named footballPlayers', () => {
      it('should return an empty string', () =>
        expect(getNameFilter(withoutFootballPlayers)).toEqual(''));
    });

    describe('when the footballPlayers key does not have a key named nameFilter', () => {
      it('should return an empty string', () =>
        expect(getNameFilter(emptyFootballPlayers)).toEqual(''));
    });

    describe('when it is called with a state with a key named nameFilter', () => {
      it('should return the players', () =>
        expect(getNameFilter(state)).toEqual(nameFilter));
    });
  });

  describe('getPositionFilter', () => {
    beforeAll(() => (state = { footballplayers: { positionFilter } }));

    describe('when it is called without a state', () => {
      it('should return an empty string', () =>
        expect(getPositionFilter()).toEqual(''));
    });

    describe('when it is called with a state without a key named footballPlayers', () => {
      it('should return an empty string', () =>
        expect(getPositionFilter(withoutFootballPlayers)).toEqual(''));
    });

    describe('when the footballPlayers key does not have a key named positionFilter', () => {
      it('should return an empty string', () =>
        expect(getPositionFilter(emptyFootballPlayers)).toEqual(''));
    });

    describe('when it is called with a state with a key named positionFilter', () => {
      it('should return the players', () =>
        expect(getPositionFilter(state)).toEqual(positionFilter));
    });
  });
});
