import { applyFilters } from './index';

jest.mock('../../actionTypes', () => ({
  APPLY_FILTERS: 'APPLY_FILTERS'
}));

describe('Actions > Filters', () => {
  describe('applyFilters', () => {
    let age, name, position;

    beforeAll(() => {
      age = 'age';
      name = 'name';
      position = 'position';
    });

    it('should return the proper action', () => {
      expect(
        applyFilters({ age, name, position })
      ).toEqual(
        {
          type: 'APPLY_FILTERS',
          payload: {
            ageFilter: age,
            nameFilter: name,
            positionFilter: position
          }
        }
      );
    });
  });
});
