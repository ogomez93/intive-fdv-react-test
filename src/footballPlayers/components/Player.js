import React from 'react';
import moment from 'moment';

export function calculateAge(dob) {
  let date = moment(dob, "YYYY-MM-DD").toDate();
  let today = new Date();
  let timeDiff = Math.abs(today.getTime() - date.getTime());
  let age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365)) - 1;
  return age;
}

const Player = ({ player }) => (
  <tr>
    <td label="Name" className="border-2 border-black px-1 py-3 sm:py-6">{player.name}</td>
    <td label="Position" className="border-2 border-black px-1 py-3 sm:py-6">{player.position}</td>
    <td label="Nationality" className="border-2 border-black px-1 py-3 sm:py-6">{player.nationality}</td>
    <td label="Age" className="border-2 border-black px-1 py-3 sm:py-6">{calculateAge(player.dateOfBirth)}</td>
  </tr>
);

export default Player;