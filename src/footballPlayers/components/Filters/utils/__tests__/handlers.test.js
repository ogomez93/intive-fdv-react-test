import { onAgeChange, onFilterChange, onNameChange, onPositionChange } from '../handlers';

const mockedSetFilter = jest.fn();
const mockedEvent = { target: { value: 'value' } };

const mockedSetAge = jest.fn();
const mockedSetName = jest.fn();
const mockedSetPosition = jest.fn();

describe('Filters handlers', () => {
  describe('onFilterChange', () => {
    describe('when called with a correct event', () => {
      beforeAll(() => {
        mockedSetFilter.mockClear();
        onFilterChange(mockedSetFilter)(mockedEvent);
      });
  
      it('should call the setFilter callback once', () =>
        expect(mockedSetFilter).toHaveBeenCalledTimes(1));
  
      it('should call the setFilter callback with the event target value', () =>
        expect(mockedSetFilter).toHaveBeenCalledWith(mockedEvent.target.value));
    });

    describe('when called with an incorrect event', () => {
      beforeAll(() => {
        mockedSetFilter.mockClear();
        onFilterChange(mockedSetFilter)({});
      });
  
      it('should call the setFilter callback once', () =>
        expect(mockedSetFilter).toHaveBeenCalledTimes(1));
  
      it('should call the setFilter callback with the default value: an empty string', () =>
        expect(mockedSetFilter).toHaveBeenCalledWith(''));
    });

    describe('when called without an event', () => {
      beforeAll(() => {
        mockedSetFilter.mockClear();
        onFilterChange(mockedSetFilter)();
      });
  
      it('should call the setFilter callback once', () =>
        expect(mockedSetFilter).toHaveBeenCalledTimes(1));
  
      it('should call the setFilter callback with the default value: an empty string', () =>
        expect(mockedSetFilter).toHaveBeenCalledWith(''));
    });
  });

  describe('onAgeChange', () => {
    describe('when called with a correct event', () => {
      beforeAll(() => {
        mockedSetAge.mockClear();
        onAgeChange({ setAge: mockedSetAge })(mockedEvent);
      });

      it('should call setAge once', () =>
        expect(mockedSetAge).toHaveBeenCalledTimes(1));

      it('should call setAge with the event target value', () =>
        expect(mockedSetAge).toHaveBeenCalledWith('value'));
    });
    
    describe('when called with an incorrect event', () => {
      beforeAll(() => {
        mockedSetAge.mockClear();
        onAgeChange({ setAge: mockedSetAge })({});
      });

      it('should call setAge once', () =>
        expect(mockedSetAge).toHaveBeenCalledTimes(1));

      it('should call setAge with the default value: an empty string', () =>
        expect(mockedSetAge).toHaveBeenCalledWith(''));
    });
    
    describe('when called without an event', () => {
      beforeAll(() => {
        mockedSetAge.mockClear();
        onAgeChange({ setAge: mockedSetAge })();
      });
      
      it('should call setAge once', () =>
        expect(mockedSetAge).toHaveBeenCalledTimes(1));

      it('should call setAge with the default value: an empty string', () =>
        expect(mockedSetAge).toHaveBeenCalledWith(''));
    });
  });

  describe('onNameChange', () => {
    describe('when called with a correct event', () => {
      beforeAll(() => {
        mockedSetName.mockClear();
        onNameChange({ setName: mockedSetName })(mockedEvent);
      });

      it('should call setName once', () =>
        expect(mockedSetName).toHaveBeenCalledTimes(1));

      it('should call setName with the event target value', () =>
        expect(mockedSetName).toHaveBeenCalledWith('value'));
    });
    
    describe('when called with an incorrect event', () => {
      beforeAll(() => {
        mockedSetName.mockClear();
        onNameChange({ setName: mockedSetName })({});
      });

      it('should call setName once', () =>
        expect(mockedSetName).toHaveBeenCalledTimes(1));

      it('should call setName with the default value: an empty string', () =>
        expect(mockedSetName).toHaveBeenCalledWith(''));
    });
    
    describe('when called without an event', () => {
      beforeAll(() => {
        mockedSetName.mockClear();
        onNameChange({ setName: mockedSetName })();
      });
      
      it('should call setName once', () =>
        expect(mockedSetName).toHaveBeenCalledTimes(1));

      it('should call setName with the default value: an empty string', () =>
        expect(mockedSetName).toHaveBeenCalledWith(''));
    });
  });

  describe('onPositionChange', () => {
    describe('when called with a correct event', () => {
      beforeAll(() => {
        mockedSetPosition.mockClear();
        onPositionChange({ setPosition: mockedSetPosition })(mockedEvent);
      });

      it('should call setPosition once', () =>
        expect(mockedSetPosition).toHaveBeenCalledTimes(1));

      it('should call setPosition with the event target value', () =>
        expect(mockedSetPosition).toHaveBeenCalledWith('value'));
    });
    
    describe('when called with an incorrect event', () => {
      beforeAll(() => {
        mockedSetPosition.mockClear();
        onPositionChange({ setPosition: mockedSetPosition })({});
      });

      it('should call setPosition once', () =>
        expect(mockedSetPosition).toHaveBeenCalledTimes(1));

      it('should call setPosition with the default value: an empty string', () =>
        expect(mockedSetPosition).toHaveBeenCalledWith(''));
    });
    
    describe('when called without an event', () => {
      beforeAll(() => {
        mockedSetPosition.mockClear();
        onPositionChange({ setPosition: mockedSetPosition })();
      });
      
      it('should call setPosition once', () =>
        expect(mockedSetPosition).toHaveBeenCalledTimes(1));

      it('should call setPosition with the default value: an empty string', () =>
        expect(mockedSetPosition).toHaveBeenCalledWith(''));
    });
  });
});
