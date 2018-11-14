import * as constants from '../constants';

describe('Global FootballPlayers constants', () => {
  describe('NAME', () => {
    it('should match the snapshot', () =>
      expect(constants.NAME).toMatchSnapshot());
  });

  describe('PLAYERS_API', () => {
    it('should match the snapshot', () =>
      expect(constants.PLAYERS_API).toMatchSnapshot());
  });

  describe('POSITIONS', () => {
    it('should match the snapshot', () =>
      expect(constants.POSITIONS).toMatchSnapshot());
  });
});
