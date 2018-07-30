import { noPlayers, twoPlayers } from './testPlayers.constants';

export const initialStateFetchingTrue = {
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

export const initialStateFetchingFalse = {
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