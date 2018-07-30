import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Filters from './Filters';
import { initialState } from './testConstants/Filters.constants';

const mockStore = configureStore();

const store = mockStore(initialState);

describe('Component: <Filters />', () => {
  const wrapper = shallow(<Filters store={store} />);
  const component = wrapper.dive();
  const componentToJson = toJson(component);

  test('renders the component', () => {
    expect(componentToJson).toMatchSnapshot();
  });

  test('renders player name input', () => {
    const nameInput = componentToJson.children.find((el) => el.props.name === 'playerName');
    expect(nameInput).not.toBeNull();
  });

  test('renders player position select', () => {
    const positionSelect = componentToJson.children.find((el) => el.props.name === 'playerPosition');
    expect(positionSelect).not.toBeNull();
  });

  test('renders player age input', () => {
    const ageInput = componentToJson.children.find((el) => el.props.name === 'playerAge');
    expect(ageInput).not.toBeNull();
  });
});
