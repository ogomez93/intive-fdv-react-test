import React from 'react';

const NoPlayers = () => {
  return (
    <tr id="noPlayersMatchFilters">
      <td className="border-2 border-black px-1 py-3 sm:py-6" colSpan="4">No players match those filters</td>
    </tr>
  );
};

export default NoPlayers;