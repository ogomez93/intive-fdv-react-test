import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import VisiblePlayersList from './VisiblePlayersList';
import { initialStateWithoutPlayers, initialStateWithTwoPlayers } from './testConstants/VisiblePlayersList.constants';

const mockStore = configureStore();

const storeWithoutPlayers = mockStore(initialStateWithoutPlayers);
const storeWithTwoPlayers = mockStore(initialStateWithTwoPlayers);

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
