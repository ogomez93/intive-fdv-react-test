import React from 'react';
import Filters from './Filters';
import Table from './Table';

const Main = () => (
  <div>
    <h2 className="mb-2">Football Player Finder</h2>
    <Filters />
    <Table />
  </div>
);

export default Main;