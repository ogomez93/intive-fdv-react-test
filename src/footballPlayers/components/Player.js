import React from 'react';
import moment from 'moment';

export function calculateAge(dob) {
  let date = moment(dob, "YYYY-MM-DD").toDate();
  let today = new Date();
  let timeDiff = Math.abs(today.getTime() - date.getTime());
  let age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365)) - 1;
  return age;
}

const Player = ({ dateOfBirth, name, nationality, position }) => (
  <tr>
    <td label="Name" className="border-2 border-black px-1 py-3 sm:py-6">{name}</td>
    <td label="Position" className="border-2 border-black px-1 py-3 sm:py-6">{position}</td>
    <td label="Nationality" className="border-2 border-black px-1 py-3 sm:py-6">{nationality}</td>
    <td label="Age" className="border-2 border-black px-1 py-3 sm:py-6">{calculateAge(dateOfBirth)}</td>
  </tr>
);

export default Player;