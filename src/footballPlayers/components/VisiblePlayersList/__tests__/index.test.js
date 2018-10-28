import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Container from '../index';

import props from './fixtures/players';

const mockStore = configureMockStore();

jest.mock('../../../selectors', () => ({
  getVisiblePlayers: (state) => state.players
}));

describe('VisiblePlayersList container', () => {
  let store, wrapper;

  describe('When the selector returns an empty array of players', () => {
    let noPlayersComponent;

    beforeAll(() => {
      store = mockStore({ players: [] });
      wrapper = mount(<Container store={store} />);
      noPlayersComponent = wrapper.find('NoPlayers');
    });

    it('should render a NoPlayers component', () => {
      expect(noPlayersComponent.isEmptyRender()).toEqual(false);
    });
    
    describe('players prop', () => {
      it('should be an empty array', () => {
        expect(noPlayersComponent.prop('players')).toEqual([]);
      });
    });
  });

  describe('When the selector returns an array of players', () => {
    let visiblePlayersListComponent;

    beforeAll(() => {
      store = mockStore({ players: props.players });
      wrapper = mount(<Container store={store} />);
      visiblePlayersListComponent = wrapper.find('VisiblePlayersList');
    });

    it('should render a VisiblePlayersList component', () => {
      expect(visiblePlayersListComponent.isEmptyRender()).toEqual(false);
    });
    
    describe('players prop', () => {
      it('should be an array of players', () => {
        expect(visiblePlayersListComponent.prop('players')).toEqual(props.players);
      });
    });
  });
});
