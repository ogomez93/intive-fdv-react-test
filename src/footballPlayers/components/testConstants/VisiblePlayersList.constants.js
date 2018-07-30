export const initialStateWithoutPlayers = {
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

export const initialStateWithTwoPlayers = {
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