import React from 'react';
import './css/loader.css';

const Loader = () => (
	<div id="fetchingPlayers" className="text-center">
		Fetching players, please wait...
		<div className="mx-auto my-12 loader" />
	</div>
);

export default Loader;
