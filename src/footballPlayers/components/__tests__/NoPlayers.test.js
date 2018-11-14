import React from 'react';
import { shallow } from 'enzyme';
import NoPlayers from '../NoPlayers';

describe('NoPlayers', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<NoPlayers />);
  });
  
  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render correctly', () =>
    expect(wrapper).toMatchSnapshot());

  it('should render a text shows that no players match the filters', () =>
    expect(wrapper.text()).toEqual('No players match those filters'));
});
