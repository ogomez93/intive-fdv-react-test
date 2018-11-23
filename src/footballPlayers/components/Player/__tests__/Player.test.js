import React from 'react';
import { shallow } from 'enzyme';

import Player from '../Player';
import props from './fixtures/playerProps';

jest.mock('footballPlayers/utils/calculateAge', () => jest.fn(() => 'mocked age'));

describe('Component: <Player />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Player {...props} />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));
  
  it('should render correctly', () =>
    expect(wrapper).toMatchSnapshot());

  describe('Player props', () => {
    describe('Name', () => {
      let nameTd;
      
      beforeAll(() => {
        nameTd = wrapper.find('[label="Name"]');
      });

      it('should contain the mocked name', () =>
        expect(nameTd.text()).toEqual('mocked name'));
    });

    describe('Position', () => {
      let positionTd;
      
      beforeAll(() => {
        positionTd = wrapper.find('[label="Position"]');
      });

      it('should contain the mocked position', () =>
        expect(positionTd.text()).toEqual('mocked position'));
    });

    describe('Nationality', () => {
      let nationalityTd;
      
      beforeAll(() => {
        nationalityTd = wrapper.find('[label="Nationality"]');
      });

      it('should contain the mocked nationality', () =>
        expect(nationalityTd.text()).toEqual('mocked nationality'));
    });

    describe('Age', () => {
      let ageTd;
      
      beforeAll(() => {
        ageTd = wrapper.find('[label="Age"]');
      });

      it('should contain the mocked age', () =>
        expect(ageTd.text()).toEqual('mocked age'));
    });
  });
});
