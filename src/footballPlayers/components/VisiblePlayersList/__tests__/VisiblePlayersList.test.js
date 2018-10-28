import React from 'react';
import { shallow } from 'enzyme';

import VisiblePlayersList from '../VisiblePlayersList';

import props from './fixtures/players';

jest.mock('../../Player', () => 'Player');

describe('VisiblePlayersList', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<VisiblePlayersList {...props} />);
  });
  
  it('should render', () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
  
  it('should render two players', () => {
    expect(wrapper.prop('children').length).toEqual(2);
  });
  
  describe('player 1', () => {
    let player1;

    beforeAll(() => {
      player1 = wrapper.find('Player').at(0);
    });
    
    it('should be a Player component', () => {
      expect(player1.type()).toEqual('Player');
    });

    it('should have the right props', () => {
      expect(player1.props()).toMatchSnapshot();
    });
  });
  
  describe('player 2', () => {
    let player2;

    beforeAll(() => {
      player2 = wrapper.find('Player').at(1);
    });
    
    it('should be a Player component', () => {
      expect(player2.type()).toEqual('Player');
    });

    it('should have the right props', () => {
      expect(player2.props()).toMatchSnapshot();
    });
  });
});
