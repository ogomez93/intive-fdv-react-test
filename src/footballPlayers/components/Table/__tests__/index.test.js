import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TableContainer from '../index';

jest.mock('../Table', () => 'Table');
jest.mock('../../Loader', () => 'Loader');

const mockStore = configureStore();

const fetchingState = { footballPlayers: { fetching: true } };
const nonFetchingState = { footballPlayers: { fetching: false } };

const fetchingStore = mockStore(fetchingState);
const nonFetchingStore = mockStore(nonFetchingState);

describe('Table container', () => {
  let wrapper;

  describe('when the app is fetching players', () => {
    beforeAll(() => {
      wrapper = mount(
        <Provider store={fetchingStore}>
          <TableContainer />
        </Provider>
      );
    });
    
    it('should render the Loader component', () => 
    expect(wrapper.find('Loader').length).toEqual(1));
    
    it('should not render the Table component', () => 
    expect(wrapper.find('Table').length).toEqual(0));
  });
  
  describe('when the app is not fetching players', () => {
    beforeAll(() => {
      wrapper = mount(
        <Provider store={nonFetchingStore}>
          <TableContainer />
        </Provider>
      );
    });

    it('should render the Table component', () => 
      expect(wrapper.find('Table').length).toEqual(1));

    it('should not render the Loader component', () => 
      expect(wrapper.find('Loader').length).toEqual(0));
  });
});
