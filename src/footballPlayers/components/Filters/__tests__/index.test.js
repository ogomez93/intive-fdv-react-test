import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import FiltersContainer from '../index';
import initialState from './fixtures/initialState';

jest.mock('../../../actions/filters', () => ({
  applyFilters: () => 'applyFilters'
}));

jest.mock('../utils/handlers', () => ({
  onAgeChange: jest.fn(),
  onNameChange: jest.fn(),
  onPositionChange: jest.fn()
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
  });

  it('should render', () => 
    expect(wrapper.isEmptyRender()).toEqual(false));
  
  describe('Own state', () => {
    describe('name', () => {
      it('should be an empty string', () =>
        expect(componentProps.name).toEqual(''));

      it('should have its own handler, called setName', () =>
        expect(componentProps.setName).toBeInstanceOf(Function));
    });

    describe('position', () => {
      it('should be an empty string', () =>
        expect(componentProps.position).toEqual(''));

      it('should have its own handler, called setPosition', () =>
        expect(componentProps.setPosition).toBeInstanceOf(Function));
    });

    describe('age', () => {
      it('should be an empty string', () =>
        expect(componentProps.age).toEqual(''));

      it('should have its own handler, called setAge', () =>
        expect(componentProps.setAge).toBeInstanceOf(Function));
    });
  });

  describe('State handlers', () => {
    it('should have an onNameChange handler', () =>
      expect(componentProps.onNameChange).toBeInstanceOf(Function));

    it('should have an onPositionChange handler', () =>
      expect(componentProps.onPositionChange).toBeInstanceOf(Function));

    it('should have an onAgeChange handler', () =>
      expect(componentProps.onAgeChange).toBeInstanceOf(Function));
  });

  describe('Connect', () => {
    describe('mapStateToProps', () => {
      it('should have passed nameFilter to the component props', () =>
        expect(componentProps.nameFilter).toEqual(''));

      it('should have passed positionFilter to the component props', () =>
        expect(componentProps.positionFilter).toEqual(''));

      it('should have passed ageFilter to the component props', () =>
        expect(componentProps.ageFilter).toEqual(''));
    });

    describe('mapDispatchToProps', () => {
      it('should have an onSubmit handler', () =>
        expect(componentProps.onSubmit).toBeInstanceOf(Function));
    });
  });
});
