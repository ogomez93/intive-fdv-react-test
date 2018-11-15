import filteredPlayers, {
  ageMatchesFilter,
  nameMatchesFilter,
  positionMatchesFilter
} from '../filteredPlayers';

jest.mock('../../../utils/calculateAge', () => jest.fn(age => age));

const mockedAge = 25;
const mockedName = 'test player name';
const mockedPosition = 'test player position';
const mockedPlayers = [{ name: 'player 1' }, { name: 'player 2' }];

describe('FootballPlayers / selectors / utils / filteredPlayers', () => {
  describe('ageMatchesFilter', () => {
    describe('when age filter is an empty string', () => {
      it('should return true', () =>
        expect(ageMatchesFilter(mockedAge, '')).toEqual(true));
    });

    describe('when player age and the age filter are equal', () => {
      it('should return true', () =>
        expect(ageMatchesFilter(mockedAge, 25)).toEqual(true));
    });

    describe('when player age and the age filter are not equal', () => {
      it('should return false', () =>
        expect(ageMatchesFilter(mockedAge, 30)).toEqual(false));
    });
  });

  describe('nameMatchesFilter', () => {
    describe('when name filter is an empty string', () => {
      it('should return true', () =>
        expect(nameMatchesFilter(mockedName, '')).toEqual(true));
    });

    describe('when player name contains the name filter', () => {
      it('should return true', () =>
        expect(nameMatchesFilter(mockedName, 'player name')).toEqual(true));
    });

    describe('when player name does not contain the name filter', () => {
      it('should return false', () =>
        expect(nameMatchesFilter(mockedName, 'does not match')).toEqual(false));
    });
  });

  describe('positionMatchesFilter', () => {
    describe('when position filter is an empty string', () => {
      it('should return true', () =>
        expect(positionMatchesFilter(mockedPosition, '')).toEqual(true));
    });

    describe('when player position contains the position filter', () => {
      it('should return true', () =>
        expect(
          positionMatchesFilter(mockedPosition, 'player position')
        ).toEqual(true));
    });

    describe('when player position does not contain the position filter', () => {
      it('should return false', () =>
        expect(positionMatchesFilter(mockedPosition, 'does not match')).toEqual(
          false
        ));
    });
  });

  describe('filteredPlayers', () => {
    let ageFilter, nameFilter, positionFilter;

    describe('when all filters are empty strings', () => {
      beforeAll(() => (ageFilter = nameFilter = positionFilter = ''));

      it('should return all the players', () =>
        expect(
          filteredPlayers(mockedPlayers, ageFilter, nameFilter, positionFilter)
        ).toEqual(mockedPlayers));
    });

    describe('when all the players match the filters', () => {
      beforeAll(() => {
        nameFilter = 'player';
        ageFilter = positionFilter = '';
      });

      it('should return all the players', () =>
        expect(
          filteredPlayers(mockedPlayers, ageFilter, nameFilter, positionFilter)
        ).toEqual(mockedPlayers));
    });

    describe('when some players match the filters', () => {
      beforeAll(() => {
        nameFilter = 'player 1';
        ageFilter = positionFilter = '';
      });

      it('should return the players that match the filters', () =>
        expect(
          filteredPlayers(mockedPlayers, ageFilter, nameFilter, positionFilter)
        ).toEqual(mockedPlayers[0]));
    });

    describe('when no players match the filters', () => {
      beforeAll(() => (ageFilter = nameFilter = positionFilter = 'no match'));

      it('should return no players', () =>
        expect(
          filteredPlayers(mockedPlayers, ageFilter, nameFilter, positionFilter)
        ).toEqual([]));
    });
  });
});
