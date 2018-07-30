export const today = new Date;
export const presentYear = today.getFullYear();
export const eightteenYearsAgo = presentYear - 18;

export const player = {
  name: 'test name',
  position: 'test position',
  nationality: 'test nationality',
  dateOfBirth: `${eightteenYearsAgo}-01-01`
};