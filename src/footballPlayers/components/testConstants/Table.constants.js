import { twoPlayers } from './testPlayers.constants';

export const initialState = {
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