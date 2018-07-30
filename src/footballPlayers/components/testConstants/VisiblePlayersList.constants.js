import { noPlayers, twoPlayers } from './testPlayers.constants';
import { testName1, unexistentTestName } from './testFilters.constants';

export const initialStateWithoutPlayers = {
  footballPlayers: {
    fetching: true,
    players: noPlayers,
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: '',
    ageFilter: '',
    positionFilter: ''
  }
};

export const initialStateWithTwoPlayers = {
  footballPlayers: {
    fetching: false,
    players: twoPlayers,
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: '',
    ageFilter: '',
    positionFilter: ''
  }
};

export const initialStateWithTwoPlayersAndFilter = {
  footballPlayers: {
    fetching: false,
    players: twoPlayers,
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: testName1,
    ageFilter: '',
    positionFilter: ''
  }
};

export const initialStateWithTwoPlayersAndUnexistentFilter = {
  footballPlayers: {
    fetching: false,
    players: twoPlayers,
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: unexistentTestName,
    ageFilter: '',
    positionFilter: ''
  }
};