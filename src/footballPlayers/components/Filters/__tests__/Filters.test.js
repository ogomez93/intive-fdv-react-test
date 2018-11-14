import React from 'react';
import { shallow } from 'enzyme';

import Filters from '../Filters';

jest.mock('../../../constants', () => ({
  POSITIONS: ['position 1', 'position 2']
}));

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

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());

  describe('form element', () => {
    it('should have an onSubmit handler', () =>
      expect(wrapper.prop('onSubmit')).toEqual(mockedOnSubmit));
  });

  describe('name input', () => {
    let input;

    beforeAll(() => {
      input = wrapper.find('[name="playerName"]');
    });

    it('should be a text input', () =>
      expect(input.prop('type')).toEqual('text'));

    it('should have an onChange handler', () =>
      expect(input.prop('onChange')).toEqual(mockedOnNameChange));

    it('should have a placeholder', () =>
      expect(input.prop('placeholder')).toEqual('Player Name'));

    it('should have a value', () =>
      expect(input.prop('value')).toEqual('Test name'));
  });

  describe('position select', () => {
    let select;

    beforeAll(() => {
      select = wrapper.find('[name="playerPosition"]');
    });

    it('should have an onChange handler', () =>
      expect(select.prop('onChange')).toEqual(mockedOnPositionChange));

    it('should have a placeholder', () =>
      expect(select.prop('placeholder')).toEqual('Position'));
    
    describe('options', () => {
      let options;
      
      beforeAll(() => {
        options = select.children();
      });
      
      it('should have 3 options', () =>
        expect(options.length).toEqual(3));
  
      describe('first option', () => {
        let firstOption;

        beforeAll(() => {
          firstOption = options.at(0);
        });

        it('should have an empty value', () =>
          expect(firstOption.prop('value')).toEqual(''));

        it('should have a default text for the Position select', () =>
          expect(firstOption.text()).toEqual('Position'));
      });
  
      describe('second option', () => {
        let secondOption;

        beforeAll(() => {
          secondOption = options.at(1);
        });

        it('should have an empty value', () =>
          expect(secondOption.prop('value')).toEqual('position 1'));

        it('should have a text value for the first position', () =>
          expect(secondOption.text()).toEqual('position 1'));
      });
  
      describe('third option', () => {
        let thirdOption;

        beforeAll(() => {
          thirdOption = options.at(2);
        });

        it('should have an empty value', () =>
          expect(thirdOption.prop('value')).toEqual('position 2'));

        it('should have a text value for the first position', () =>
          expect(thirdOption.text()).toEqual('position 2'));
      });
    });
  });

  describe('age input', () => {
    let input;

    beforeAll(() => {
      input = wrapper.find('[name="playerAge"]');
    });

    it('should be a numeric input', () =>
      expect(input.prop('type')).toEqual('number'));

    it('should have an onChange handler', () =>
      expect(input.prop('onChange')).toEqual(mockedOnAgeChange));

    it('should have a placeholder', () =>
      expect(input.prop('placeholder')).toEqual('Age'));

    it('should have a value', () =>
      expect(input.prop('value')).toEqual(21));
  });
});
