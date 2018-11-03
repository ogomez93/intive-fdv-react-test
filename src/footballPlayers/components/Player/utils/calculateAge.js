import moment from 'moment';

const calculateAge = (dob) => {
  if (typeof dob !== 'string') return 'Invalid date';
  const date = moment(dob, "YYYY-MM-DD").toDate();
  const today = new Date();
  const timeDiff = Math.abs(today.getTime() - date.getTime());
  const age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365)) - 1;
  return age;
}

export default calculateAge;