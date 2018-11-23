import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';

jest.mock('footballPlayers/components/VisiblePlayersList', () => 'VisiblePlayersList');

describe('Component: <Table />', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<Table />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toBe(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
  
  it('should render a table', () =>
    expect(wrapper.type()).toEqual('table'));

  describe('Labels', () => {
    describe('Player name', () => {
      let playerLabel;

      beforeAll(() => {
        playerLabel = wrapper.find('[label="Player"]');
      });

      it('should render the Player name label', () =>
        expect(playerLabel.text()).toEqual('Player'));
    });

    describe('Position', () => {
      let positionLabel;

      beforeAll(() => {
        positionLabel = wrapper.find('[label="Position"]');
      });

      it('should render the Position label', () =>
        expect(positionLabel.text()).toEqual('Position'));
    });

    describe('Team', () => {
      let teamLabel;

      beforeAll(() => {
        teamLabel = wrapper.find('[label="Team"]');
      });

      it('should render the Team label', () =>
        expect(teamLabel.text()).toEqual('Team'));
    });

    describe('Age', () => {
      let ageLabel;

      beforeAll(() => {
        ageLabel = wrapper.find('[label="Age"]');
      });

      it('should render the Age label', () =>
        expect(ageLabel.text()).toEqual('Age'));
    });
  });

  it('should render the VisiblePlayersList component', () =>
    expect(wrapper.find('VisiblePlayersList').isEmptyRender()).toEqual(false));
});
