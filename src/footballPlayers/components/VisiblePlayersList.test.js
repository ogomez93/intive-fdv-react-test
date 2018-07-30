import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import VisiblePlayersList from './VisiblePlayersList';
import {
  initialStateWithoutPlayers,
  initialStateWithTwoPlayers,
  initialStateWithTwoPlayersAndFilter,
  initialStateWithTwoPlayersAndUnexistentFilter
} from './testConstants/VisiblePlayersList.constants';

const mockStore = configureStore();

const storeWithoutPlayers = mockStore(initialStateWithoutPlayers);
const storeWithTwoPlayers = mockStore(initialStateWithTwoPlayers);
const storeWithTwoPlayersAndFilter = mockStore(initialStateWithTwoPlayersAndFilter);
const storeWithTwoPlayersAndUnexistentFilter = mockStore(initialStateWithTwoPlayersAndUnexistentFilter);

// without players

describe('Component: <VisiblePlayersList /> Without Players', () => {
  const wrapper = shallow(<VisiblePlayersList store={storeWithoutPlayers} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);
  const tr = componentToJson.children[0];

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('no players match the filters', () => {
    expect(tr.node.rendered.rendered).toEqual('No players match those filters');
  });
});

// with 2 players

describe('Component: <VisiblePlayersList /> With 2 Players', () => {
  const wrapper = shallow(<VisiblePlayersList store={storeWithTwoPlayers} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders 2 players', () => {
    const players = componentToJson.children.filter((el) => el.type === 'Player');
    expect(players.length).toEqual(2);
  });
});

// with 2 players and name filter

describe('Component: <VisiblePlayersList /> With 2 Players and name filter', () => {
  const wrapper = shallow(<VisiblePlayersList store={storeWithTwoPlayersAndFilter} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders 1 player', () => {
    const players = componentToJson.children.filter((el) => el.type === 'Player');
    expect(players.length).toEqual(1);
  });
});

// with 2 players and unexistent name filter

describe('Component: <VisiblePlayersList /> With 2 Players and unexistent name filter', () => {
  const wrapper = shallow(<VisiblePlayersList store={storeWithTwoPlayersAndUnexistentFilter} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders 0 players', () => {
    const players = componentToJson.children.filter((el) => el.type === 'Player');
    expect(players.length).toEqual(0);
  });

  test('no players match the filters', () => {
    const td = componentToJson.children[0].children[0];
    expect(td.children[0]).toEqual('No players match those filters');
  });
});
