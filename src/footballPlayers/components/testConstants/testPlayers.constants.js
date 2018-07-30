import {
  testName, testName1, testName2,
  testPosition, testPosition1, testPosition2,
  testNationality, testNationality1, testNationality2
} from './testFilters.constants';

import { eightteenYearsAgo } from './Player.constants';

export const noPlayers = [];

export const twoPlayers = [
  {
    name: testName1,
    position: testPosition1,
    nationality: testNationality1,
    dateOfBirth: `${eightteenYearsAgo}-01-01`
  },
  {
    name: testName2,
    position: testPosition2,
    nationality: testNationality2,
    dateOfBirth: `${eightteenYearsAgo}-01-01`
  }
];