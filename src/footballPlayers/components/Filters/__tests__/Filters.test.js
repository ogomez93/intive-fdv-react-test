import React from 'react';
import { shallow } from 'enzyme';

import Filters from '../Filters';

const mockedOnAgeChange = jest.fn();
const mockedOnNameChange = jest.fn();
const mockedOnPositionChange = jest.fn();
const mockedOnSubmit = jest.fn();

const props = {
  age: 21,
  name: 'Test name',
  onAgeChange: mockedOnAgeChange,
  onNameChange: mockedOnNameChange,
  onPositionChange: mockedOnPositionChange,
  onSubmit: mockedOnSubmit
};

describe('Component: <Filters />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Filters {...props} />);
  });

  it('should render', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('form element', () => {
    it('should have an onSubmit handler', () => {
      expect(wrapper.prop('onSubmit')).toEqual(mockedOnSubmit);
    });
  });

  describe('name input', () => {
    let input;

    beforeAll(() => {
      input = wrapper.find('[name="playerName"]');
    });

    it('should be a text input', () => {
      expect(input.prop('type')).toEqual('text');
    });

    it('should have an onChange handler', () => {
      expect(input.prop('onChange')).toEqual(mockedOnNameChange);
    });

    it('should have a placeholder', () => {
      expect(input.prop('placeholder')).toEqual('Player Name');
    });

    it('should have a value', () => {
      expect(input.prop('value')).toEqual('Test name');
    });
  });

  describe('position select', () => {
    let select;

    beforeAll(() => {
      select = wrapper.find('[name="playerPosition"]');
    });

    it('should have an onChange handler', () => {
      expect(select.prop('onChange')).toEqual(mockedOnPositionChange);
    });

    it('should have a placeholder', () => {
      expect(select.prop('placeholder')).toEqual('Position');
    });

    it('should have an empty value as its first option', () => {
      expect(select.children().at(0).prop('value')).toEqual('');
    });
  });

  describe('age input', () => {
    let input;

    beforeAll(() => {
      input = wrapper.find('[name="playerAge"]');
    });

    it('should be a numeric input', () => {
      expect(input.prop('type')).toEqual('number');
    });

    it('should have an onChange handler', () => {
      expect(input.prop('onChange')).toEqual(mockedOnAgeChange);
    });

    it('should have a placeholder', () => {
      expect(input.prop('placeholder')).toEqual('Age');
    });

    it('should have a value', () => {
      expect(input.prop('value')).toEqual(21);
    });
  });
});
