import React from 'react';
import calculateAge from 'footballPlayers/utils/calculateAge';

const Player = ({ dateOfBirth, name, nationality, position }) => (
  <tr>
    <td label="Name" className="border-2 border-black px-1 py-3 sm:py-6">
      {name}
    </td>
    <td label="Position" className="border-2 border-black px-1 py-3 sm:py-6">
      {position}
    </td>
    <td label="Nationality" className="border-2 border-black px-1 py-3 sm:py-6">
      {nationality}
    </td>
    <td label="Age" className="border-2 border-black px-1 py-3 sm:py-6">
      {calculateAge(dateOfBirth)}
    </td>
  </tr>
);

export default Player;
