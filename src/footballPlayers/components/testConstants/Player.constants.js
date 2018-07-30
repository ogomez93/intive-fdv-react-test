import { testName, testPosition, testNationality } from './testFilters.constants';

export const today = new Date;
export const presentYear = today.getFullYear();
export const eightteenYearsAgo = presentYear - 18;
export const twentytwoYearsAgo = presentYear - 22;

export const player = {
  name: testName,
  position: testPosition,
  nationality: testNationality,
  dateOfBirth: `${eightteenYearsAgo}-01-01`
};