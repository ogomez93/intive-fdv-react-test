import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import FiltersContainer from '../index';
import initialState from './fixtures/initialState';

jest.mock('../../../actions/filters', () => ({
  applyFilters: () => 'applyFilters'
}));

const mockStore = configureStore();
const store = mockStore(initialState);

describe('Filters container', () => {
  let componentProps, wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <FiltersContainer />
      </Provider>
    );
    componentProps = wrapper.find('Filters').props();
    console.log(componentProps);
  });

  it('should render', () => 
    expect(wrapper.isEmptyRender()).toEqual(false));
  
  describe('Own state', () => {
    describe('name', () => {
      
    });
  });
});
