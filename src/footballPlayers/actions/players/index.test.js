import { errorFetchingPlayers, setFootballPlayers } from './index';

jest.mock('../../actionTypes', () => ({
  ERROR_FETCHING: 'ERROR_FETCHING',
  SET_PLAYERS: 'SET_PLAYERS'
}));

describe('Actions > Players', () => {
  describe('errorFetchingPlayers', () => {
    it('should return the proper action', () => {
      expect(
        errorFetchingPlayers()
      ).toEqual(
        {
          type: 'ERROR_FETCHING',
          payload: {
            fetching: false
          }
        }
      );
    });
  });

  describe('setFootballPlayers', () => {
    let players;

    beforeAll(() => {
      players = [
        { name: 'player 1' },
        { name: 'player 2' }
      ]
    });

    it('should return the proper action', () => {
      expect(
        setFootballPlayers(players)
      ).toEqual(
        {
          type: 'SET_PLAYERS',
          payload: {
            fetching: false,
            players: [
              { name: 'player 1' },
              { name: 'player 2' }
            ]
          }
        }
      );
    });
  });
});
