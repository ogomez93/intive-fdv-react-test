import React from 'react';
import moment from 'moment';

function calculateAge(dob) {
  let date = moment(dob, "YYYY-MM-DD").toDate();
  let today = new Date;
  var timeDiff = Math.abs(today.getTime() - date.getTime());
  var age = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365));
  return age;
}

const Player = ({ player }) => (
  <tr>
    <td>{player.name}</td>
    <td>{player.position}</td>
    <td>{player.nationality}</td>
    <td>{calculateAge(player.dateOfBirth)}</td>
  </tr>
);

export default Player;