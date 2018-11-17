import { getVisiblePlayers } from '../players';

const allPlayers = [
  {
    age: 25,
    name: 'player 1',
    position: 'position 1'
  },
  {
    age: 25,
    name: 'player 2',
    position: 'position 2'
  },
  {
    age: 30,
    name: 'player 3',
    position: 'position 2'
  },
  {
    age: 30,
    name: 'player 4',
    position: 'position 3'
  }
];

const state = {
  footballPlayers: {
    players: allPlayers,
    ageFilter: '',
    nameFilter: '',
    positionFilter: ''
  }
};

describe('getVisiblePlayers', () => {
  describe('when all filters are empty', () => {
    it('should return all players', () =>
      expect(getVisiblePlayers(state)).toEqual(allPlayers));
  });
  
  describe('when no players match the filters', () => {
    let newState;

    beforeAll(() => {
      newState = { 
        footballPlayers: {
          ...state.footballPlayers,
          ageFilter: 'no players will match this filter',
          nameFilter: 'no players will match this filter',
          positionFilter: 'no players will match this filter'
        }
      }
    });

    it('should return no players', () =>
      expect(getVisiblePlayers(newState)).toEqual([]));
  });

  describe('when some players match the filters', () => {
    let newState;

    beforeAll(() => {
      newState = { 
        footballPlayers: {
          ...state.footballPlayers,
          positionFilter: 'position 2'
        }
      }
    });

    it('should return the players that match the filters', () =>
      expect(getVisiblePlayers(newState)).toEqual([
        {
          age: 25,
          name: 'player 2',
          position: 'position 2'
        },
        {
          age: 30,
          name: 'player 3',
          position: 'position 2'
        }
      ]));
  });
});
