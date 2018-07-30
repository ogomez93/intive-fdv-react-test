import { twoPlayers } from './testPlayers.constants';

export const initialState = {
  footballPlayers: {
    fetching: true,
    players: twoPlayers,
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: '',
    ageFilter: '',
    positionFilter: ''
  }
};
