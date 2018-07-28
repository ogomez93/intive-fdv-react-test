import * as t from './actionTypes';

const initialState = {
  fetching: true,
  players: [
    {
      "contractUntil": "2022-06-30",
      "dateOfBirth": "1993-05-13",
      "jerseyNumber": 9,
      "name": "Romelu Lukaku",
      "nationality": "Belgium",
      "position": "Centre-Forward"
    },
    {
      "contractUntil": "2019-06-30",
      "dateOfBirth": "1990-11-07",
      "jerseyNumber": 1,
      "name": "David de Gea",
      "nationality": "Spain",
      "position": "Keeper"
    }
  ],
  nameFilter: '',
  ageFilter: '',
  positionFilter: '',
  testing: true
}

const footballPlayers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TESTING":
      return Object.assign({}, state, {
        testing: !state.testing
      });
    case t.FETCH:
      return ;
    case t.ERROR_FETCHING:
      return ;
    // case 'SET_VISIBILITY_FILTER':
    //   return action.filter;
    default:
      return state;
  }
}

export default footballPlayers;