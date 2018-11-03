import calculateAge from '../calculateAge';


describe('calculateAge', () => {
  let dateOfBirth, presentYear, today;
  
  beforeAll(() => {
    today = new Date;
    presentYear = today.getFullYear();
  });

  describe('when dateOfBirth is not a string', () => {
    it('should return "Invalid date"', () => {
      expect(calculateAge(123)).toEqual('Invalid date');
    });
  });

  describe('for someone born on January 1st eightteen years ago', () => {
    beforeAll(() => {
      dateOfBirth = `${presentYear - 18}-01-01`;
    });

    it('should return 18', () => {
      expect(calculateAge(dateOfBirth)).toEqual(18);
    });
  });

  describe('for someone born on January 1st 22 years ago', () => {
    beforeAll(() => {
      dateOfBirth = `${presentYear - 22}-01-01`;
    });

    it('should return 18', () => {
      expect(calculateAge(dateOfBirth)).toEqual(22);
    });
  });
});
