import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import FootballPlayersWrapper from './FootballPlayersWrapper';
import { initialStateFetchingTrue, initialStateFetchingFalse } from './test/constants';

const mockStore = configureStore();

const fetchingTrueStore = mockStore(initialStateFetchingTrue);
const fetchingFalseStore = mockStore(initialStateFetchingFalse);

// fetching: true

describe('Component: <FootballPlayersWrapper /> fetching players: true', () => {
  const wrapper = shallow(<FootballPlayersWrapper store={fetchingTrueStore} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders the title', () => {
    const title = componentToJson.children.find((el) => el.type === 'h2');
    expect(title.children[0]).toEqual('Football Player Finder');
  });

  test('renders the Filters component', () => {
    const filters = componentToJson.children.find((el) => el.type === 'Connect(Filters)');
    expect(filters).not.toBeNull();
  });

  test('application is fetching players', () => {
    const fetchingPlayers = componentToJson.children.find((el) => el.props.id === 'fetchingPlayers');
    expect(fetchingPlayers.children[0]).toEqual('Fetching players, please wait...');
  });
});

// fetching: false

describe('Component: <FootballPlayersWrapper /> fetching players: false', () => {
  const wrapper = shallow(<FootballPlayersWrapper store={fetchingFalseStore} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders the title', () => {
    const title = componentToJson.children.find((el) => el.type === 'h2');
    expect(title.children[0]).toEqual('Football Player Finder');
  });

  test('renders the Filters component', () => {
    const filters = componentToJson.children.find((el) => el.type === 'Connect(Filters)');
    expect(filters).not.toBeNull();
  });

  test('renders the Table component', () => {
    const table = componentToJson.children.find((el) => el.type === 'Connect(Table)');
    expect(table).not.toBeNull();
  });
});