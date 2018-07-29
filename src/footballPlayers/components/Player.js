import React from 'react';
import moment from 'moment';

export function calculateAge(dob) {
  let date = moment(dob, "YYYY-MM-DD").toDate();
  let today = new Date();
  let timeDiff = Math.abs(today.getTime() - date.getTime());
  let age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365));
  return age;
}

const Player = ({ player }) => (
  <tr>
    <td className="border-2 border-black px-1 py-3 sm:py-6">{player.name}</td>
    <td className="border-2 border-black px-1 py-3 sm:py-6">{player.position}</td>
    <td className="border-2 border-black px-1 py-3 sm:py-6">{player.nationality}</td>
    <td className="border-2 border-black px-1 py-3 sm:py-6">{calculateAge(player.dateOfBirth)}</td>
  </tr>
);

export default Player;