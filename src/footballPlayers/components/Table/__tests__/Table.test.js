import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Table from '../Table';

describe('Component: <Table />', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<Table />);
  });

  it('should render', () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('renders a table', () => {
    expect(wrapper.type()).toEqual('table');
  });

  const thead = componentToJson.children.find((el) => el.type === 'thead');
  const tr = thead.children[0];

  test('renders the Player table header', () => {
    const playerTd = tr.children.find((el) => el.props.label === 'Player');
    expect(playerTd.children[0]).toEqual('Player');
  });

  test('renders the Position table header', () => {
    const positionTd = tr.children.find((el) => el.props.label === 'Position');
    expect(positionTd.children[0]).toEqual('Position');
  });

  test('renders the Team table header', () => {
    const teamTd = tr.children.find((el) => el.props.label === 'Team');
    expect(teamTd.children[0]).toEqual('Team');
  });

  test('renders the Age table header', () => {
    const ageTd = tr.children.find((el) => el.props.label === 'Age');
    expect(ageTd.children[0]).toEqual('Age');
  });

  test('renders the VisiblePlayersList component', () => {
    const visiblePlayersList = componentToJson.children.find((el) => el.type === 'Connect(VisiblePlayersList');
    expect(visiblePlayersList).not.toBeNull();
  });
});