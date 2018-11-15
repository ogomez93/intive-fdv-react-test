import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;

  beforeAll(() => (wrapper = shallow(<App />)));

  it('should render', () => expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render the FootballPlayers Main component', () =>
    expect(wrapper.find('Main')).toHaveLength(1));
});
