export const today = new Date;
export const presentYear = today.getFullYear();
export const eightteenYearsAgo = presentYear - 18;

export const player = {
  name: 'test name',
  position: 'test position',
  nationality: 'test nationality',
  dateOfBirth: `${eightteenYearsAgo}-01-01`
};

export const initialStateFetchingTrue = {
  footballPlayers: {
    fetching: true,
    players: [],
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
    players: [
      {
        name: 'test name 1',
        position: 'test position 1',
        nationality: 'test nationality 1',
        dateOfBirth: `2000-01-01`
      },
      {
        name: 'test name 2',
        position: 'test position 2',
        nationality: 'test nationality 2',
        dateOfBirth: `2000-01-01`
      }
    ],
    nameFilterPreview: '',
    ageFilterPreview: '',
    positionFilterPreview: '',
    nameFilter: '',
    ageFilter: '',
    positionFilter: ''
  }
};