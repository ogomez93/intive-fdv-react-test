import { errorFetchingPlayers, setFootballPlayers } from './index';

jest.mock('../../actionTypes', () => ({
  ERROR_FETCHING: 'ERROR_FETCHING',
  SET_PLAYERS: 'SET_PLAYERS'
}));

describe('Actions > Players', () => {
  describe('errorFetchingPlayers', () => {
    let error;

    beforeAll(() => {
      error = { code: 500, message: 'server error' };
    });

    it('should return the proper action', () =>
      expect(
        errorFetchingPlayers(error)
      ).toEqual(
        {
          type: 'ERROR_FETCHING',
          payload: {
            fetching: false,
            error: { code: 500, message: 'server error' }
          }
        }
      ));
  });

  describe('setFootballPlayers', () => {
    let players;

    beforeAll(() => {
      players = [
        { name: 'player 1' },
        { name: 'player 2' }
      ]
    });

    it('should return the proper action', () =>
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
      ));
  });
});
